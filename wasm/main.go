package main

import (
	"bytes"
	"encoding/base64"
	"encoding/csv"
	"flag"
	"fmt"
	"log"
	"net/http"
	"net/url"
	"syscall/js"
	"text/template"

	"github.com/golang/freetype"
	"github.com/golang/freetype/truetype"
	qrcode "github.com/skip2/go-qrcode"
)

var hostedFonts = map[string]interface{}{
	"思源宋体": "SourceHanSerifSC-VF.ttf",
}

var currentEnv = &Env{
	FontSize:   12,
	Dpi:        72,
	Width:      256,
	Font:       "Courier",
	template:   `{{record0}}`,
	previewRow: 0,
}

type Env struct {
	FontSize   int
	Dpi        int
	Font       string
	font       *truetype.Font
	Title      string
	Width      int
	template   string
	previewRow int

	records [][]string
}

func (e *Env) ToValue() js.Value {
	return js.ValueOf(map[string]interface{}{
		"font_size": e.FontSize,
		"dpi":       e.Dpi,
		"font":      e.Font,
	})
}

func setConfig(this js.Value, args []js.Value) interface{} {
	var obj = args[0]
	currentEnv.FontSize = int(obj.Get("font_size").Int())
	currentEnv.Dpi = int(obj.Get("dpi").Int())
	currentEnv.Font = obj.Get("font").String()

	//if font is url, load it
	fontUrl, _ := url.Parse(currentEnv.Font)
	if fontUrl.Scheme == "http" || fontUrl.Scheme == "https" {
		//load font from web
		resp, err := http.Get(currentEnv.Font)
		if err != nil {
			fmt.Println("Error loading font: ", err)
		}
		defer resp.Body.Close()
		bts := make([]byte, resp.ContentLength)
		resp.Body.Read(bts)
		//load font from bytes
		f, err := freetype.ParseFont(bts)
		if err != nil {
			log.Println(err)
		}
		currentEnv.font = f
	} else if fontUrl.Scheme == "file" {
		//load font from local
		fmt.Println("Loading font from local: ", currentEnv.Font)
	} else {
		//read font from server
		//get host from js
		host := js.Global().Get("window").Get("location").Get("hostname").String()
		fmt.Println("Loading font from server: ", host)
		resp, err := http.Get("http://" + host + "/font/" + currentEnv.Font)
		if err != nil {
			fmt.Println("Error loading font: ", err)
		}
		defer resp.Body.Close()
		bts := make([]byte, resp.ContentLength)
		resp.Body.Read(bts)
		//load font from bytes
		f, err := freetype.ParseFont(bts)
		if err != nil {
			log.Println(err)
		}
		currentEnv.font = f
	}

	return currentEnv.ToValue()
}

func getConfig(this js.Value, args []js.Value) interface{} {
	return currentEnv.ToValue()
}

func readCSV(this js.Value, args []js.Value) interface{} {
	var csvContent = args[0]
	fmt.Println("input type", csvContent.Type())
	dst := make([]byte, csvContent.Length())
	js.CopyBytesToGo(dst, csvContent)
	buf := bytes.NewBuffer(dst)
	csvReader := csv.NewReader(buf)
	csvReader.Comma = ','
	records, err := csvReader.ReadAll()
	if err != nil {
		fmt.Println("Error reading csv: ", err)
	}
	currentEnv.records = records
	return len(records)
}

func main() {
	prefix := flag.String("prefix", "", "prefix")
	flag.Parse()

	done := make(chan int, 0)
	js.Global().Set("set_config_"+*prefix, js.FuncOf(setConfig))
	js.Global().Set("get_config_"+*prefix, js.FuncOf(getConfig))
	js.Global().Set("read_csv_"+*prefix, js.FuncOf(readCSV))
	//register csv_length_"+*prefix
	js.Global().Set("csv_length_"+*prefix, js.FuncOf(func(this js.Value, args []js.Value) interface{} {
		return len(currentEnv.records)
	}))
	//register csv_get_"+*prefix
	js.Global().Set("csv_get_"+*prefix, js.FuncOf(func(this js.Value, args []js.Value) interface{} {
		row := int(args[0].Int())
		column := int(args[1].Int())
		return currentEnv.records[row][column]
	}))
	//register get_csv_columns_"+*prefix
	js.Global().Set("get_csv_columns_"+*prefix, js.FuncOf(func(this js.Value, args []js.Value) interface{} {
		if len(currentEnv.records) == 0 {
			return 0
		}
		return len(currentEnv.records[0])
	}))
	//register set_export_settings_"+*prefix
	js.Global().Set("set_export_settings_"+*prefix, js.FuncOf(func(this js.Value, args []js.Value) interface{} {
		var key = args[0]
		// var value = args[1]
		switch key.String() {
		}
		return nil
	}))

	//register get_preview_"+*prefix
	js.Global().Set("get_preview_"+*prefix, js.FuncOf(func(this js.Value, args []js.Value) interface{} {

		var funcs = template.FuncMap{}
		if len(currentEnv.records) > currentEnv.previewRow {
			line := currentEnv.records[currentEnv.previewRow]

			for i := 0; i < len(line); i++ {
				funcs[fmt.Sprintf("record%d", i)] = func() string {
					return line[i]
				}
			}
		} else {
			funcs["record0"] = func() string {
				return "Unset"
			}
		}
		buf := new(bytes.Buffer)
		content, err := template.New("").Funcs(funcs).Parse(currentEnv.template)
		if err != nil {
			return "error: " + err.Error()
		}
		content.Execute(buf, args)
		return currentEnv.GenerateImage(buf.String())
		return "error: no data"
	}))
	//register get_hosted_fonts_"+*prefix
	js.Global().Set("get_hosted_fonts_"+*prefix, js.FuncOf(func(this js.Value, args []js.Value) interface{} {
		fmt.Println("Getting hosted fonts", hostedFonts)
		return hostedFonts
	}))

	js.Global().Set("get_template_"+*prefix, js.FuncOf(func(this js.Value, args []js.Value) interface{} {
		return currentEnv.template
	}))

	js.Global().Set("set_template_"+*prefix, js.FuncOf(func(this js.Value, args []js.Value) interface{} {
		currentEnv.template = args[0].String()
		return nil
	}))

	//call wasm_ready_"+*prefix function of js
	js.Global().Call("wasm_ready_"+*prefix, currentEnv.ToValue())
	<-done
}

func (env *Env) GenerateImage(content string) string {
	png, _ := qrcode.Encode(content, qrcode.Medium, 256)
	return "data:image/png;base64," + base64.StdEncoding.EncodeToString(png)
}
