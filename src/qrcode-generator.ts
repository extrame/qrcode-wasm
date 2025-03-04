import { LitElement, css, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import "./assets/wasm_exec.js";
import lib from "./assets/lib.wasm?init";
import { range } from "lit/directives/range.js";
import { map } from "lit/directives/map.js";
import { choose } from "lit/directives/choose.js";
import { classMap } from "lit/directives/class-map.js";
import { when } from "lit/directives/when.js";

interface Config {
  font_size: number;
  dpi: number;
  width: number;
  title: string;
  font_source: string;
  font: string;
  template: string;
}

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement("qrcode-generator")
export class QrcodeGenerator extends LitElement {
  /**
   * Copy for the read the docs hint.
   */
  @property()
  docsHint = "Click on the Vite and Lit logos to learn more";

  randonStr = Math.random().toString(36).substring(7);

  @state() csvLength: number = 0;
  @state() csvColumns: number = 0;
  @state() pageOffset: number = 0;
  @state() pageSize: number = 10;
  @state() showingAside: String = "about";
  @state() localFonts: any[] = [];

  constructor() {
    super();
    // @ts-ignore
    const go = new Go();
    go.argv.push("--prefix=" + this.randonStr);
    lib(go.importObject).then((instance: any) => go.run(instance));
    // @ts-ignore
    window["wasm_ready_" + this.randonStr] = () => {
      this.config = this.getConfig();
      this.requestUpdate();
    };
  }

  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Object })
  config: Config = {
    font_size: 0,
    dpi: 0,
    width: 0,
    title: "",
    font_source: "server",
    font: "",
    template: "",
  };

  changeConfig(e: Event) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    console.log("formData", formData);
    //call wasm function
    const font_size = formData.get("font_size");
    console.log(font_size);
    // @ts-ignore
    var callFn = window["set_config_" + this.randonStr];
    callFn
      .call(this, {
        font_size: font_size,
      })
      .then((config: Config) => {
        this.config = config;
      });
    this.requestUpdate();
  }

  getConfig() {
    // @ts-ignore
    var callFn = window["get_config_" + this.randonStr];
    return callFn.call(this);
  }

  getCsvColumns() {
    // @ts-ignore
    var callFn = window["get_csv_columns_" + this.randonStr];
    this.csvColumns = callFn.call(this);
  }

  getData(row: number, column: number) {
    // @ts-ignore
    var callFn = window["csv_get_" + this.randonStr];
    return callFn.call(this, row, column);
  }

  // getPreview() {
  //   // @ts-ignore
  //   this.preview = window["get_preview_" + this.randonStr].call(this);
  //   this.requestUpdate();
  // }

  handleExportChange(key: string, e: Event) {
    e.preventDefault();
    var value = (e.target as HTMLInputElement).value;
    // @ts-ignore
    var callFn = window["set_export_settings_" + this.randonStr];
    callFn.call(this, key, value);
    // @ts-ignore
    this.requestUpdate();
  }

  get fontServerSources(): {
    name: string;
    url: unknown;
  }[] {
    // @ts-ignore
    var callFn = window["get_hosted_fonts_" + this.randonStr];
    return Object.entries(callFn.call(this)).map(([name, url]) => ({
      name,
      url,
    }));
  }

  get template(): string {
    // @ts-ignore
    return window["get_template_" + this.randonStr].call(this);
  }

  set template(value: string) {
    // @ts-ignore
    window["set_template_" + this.randonStr].call(this, value);
    this.requestUpdate();
  }

  get preview() {
    // @ts-ignore
    var data = window["get_preview_" + this.randonStr].call(this);
    if (data.startsWith("error: ")) {
      throw new Error(data.replaceAll("error: ", ""));
    }
    return data;
  }

  get preview_text() {
    // @ts-ignore
    var data = window["get_preview_text_" + this.randonStr].call(this);
    if (data.startsWith("error: ")) {
      throw new Error(data.replaceAll("error: ", ""));
    }
    return data;
  }

  set selectedRow(value: number) {
    // @ts-ignore
    var callFn = window["set_selected_row_" + this.randonStr];
    callFn.call(this, value);
    this.requestUpdate();
  }

  uploadCsv() {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".csv";
    input.addEventListener("change", (e) => {
      e.preventDefault();
      const fileInput = e.target as HTMLInputElement;
      if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();
        reader.onload = () => {
          if (reader.result) {
            // @ts-ignore
            var callFn = window["read_csv_" + this.randonStr];
            var length = callFn.call(
              this,
              new Uint8Array(reader.result as ArrayBuffer)
            );
            this.csvLength = length;
            this.getCsvColumns();
            this.requestUpdate();
          }
        };
        reader.readAsArrayBuffer(fileInput.files[0]);
        this.requestUpdate();
      }
      document.body.removeChild(input);
    });
    input.click();
  }

  async handleFontSourceChange() {
    // get value from first checked radio named 'font_source'
    var selected = this.shadowRoot?.querySelector(
      "input[name='font_source']:checked"
    ) as HTMLInputElement;
    this.config.font_source = selected.value ?? "server";

    if (this.config.font_source === "browser") {
      //get font from browser (need chrome or firefox)
      if ("queryLocalFonts" in window) {
        await navigator.permissions
          // @ts-ignore
          .query({ name: "local-fonts" })
          .then((result) => {
            if (result.state === "granted") {
              // The Local Font Access API is supported and the user has granted permission
              console.log("Local Font Access API is supported");
            } else {
              // The Local Font Access API is not supported or the user has denied permission
              console.log("Local Font Access API is not supported");
            }
          });
        // The Local Font Access API is supported
        // @ts-ignore
        this.localFonts = await window.queryLocalFonts();
      } else {
        console.log("Local Font Access API is not supported");
      }
    }

    this.requestUpdate();
  }

  selectRow(index: number) {
    this.selectedRow = this.pageOffset + index;
  }

  download() {
    //create a uint8array from the qrcode zip
    // var dst = new Uint8Array();
    //pass dst to wasm to fill it
    // @ts-ignore
    var callFn = window["download_" + this.randonStr];
    var dst = callFn.call(this);
    const blob = new Blob([dst], { type: "application/zip" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "qrcode.zip";
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 0);


  }

  render() {
    return html`
      <div class="main">
        <h1>数据预览</h1>
        <div class="data-table">
          ${when(
            this.csvLength > 0,
            () => html`
              <p>CSV文件长度: ${this.csvLength}</p>
              <div class="data-table-content">
                <table>
                  <thead>
                    <tr>
                      ${map(
                        range(this.csvColumns),
                        (i) => html`<th>列${i + 1}</th>`
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    ${map(
                      range(this.pageSize),
                      (i) => html`
                        <tr @click=${this.selectRow.bind(this,i)}>
                          ${map(range(this.csvColumns), (j) => {
                            var data = this.getData(
                              i + this.pageOffset * this.pageSize,
                              j
                            );
                            return html`<td>${data}</td>`;
                          })}
                        </tr>
                      `
                    )}
                  </tbody>
                </table>
              </div>
            `,
            () => html` <p>请在配置页上传CSV文件</p> `
          )}
        </div>
        <div class="pagination">
          <button
            @click=${() => (this.pageOffset = Math.max(0, this.pageOffset - 1))}
          >
            上一页
          </button>
          <button
            @click=${() =>
              (this.pageOffset = Math.min(
                this.csvLength / this.pageSize,
                this.pageOffset + 1
              ))}
          >
            下一页
          </button>
          <span> 当前页: ${this.pageOffset + 1} </span>
          <span> 总页数: ${Math.ceil(this.csvLength / this.pageSize)} </span>
          <span> 每页显示: ${this.pageSize} </span>
          <span> 总数据: ${this.csvLength} </span>
          <span> 总列数: ${this.csvColumns} </span>
        </div>
      </div>
      <div class="aside">
        <div class="aside-header">
          <button
            @click=${() => (this.showingAside = "about")}
            class=${classMap({ active: this.showingAside === "about" })}
          >
            功能介绍
          </button>
          <button
            @click=${() => (this.showingAside = "config")}
            class=${classMap({ active: this.showingAside === "config" })}
          >
            参数配置
          </button>
        </div>
        <div class="aside-content">
          ${choose(this.showingAside, [
            [
              "about",
              () => html`
                <h1>功能介绍</h1>
                <p>
                  这是一个二维码生成器，你可以通过配置参数来生成你想要的二维码。
                </p>
                <p>你可以通过上传CSV文件来批量生成二维码</p>
                <p>
                  本软件使用了WebAssembly技术来处理二维码的生成，您的文件不会被上传到服务器，而是在你的浏览器中处理。
                </p>
                <h1>使用步骤</h1>
                <ol>
                  <li>配置参数</li>
                  <li>上传CSV文件</li>
                  <li>选择合适的导出配置</li>
                  <li>导出二维码</li>
                </ol>

                <h1>报告问题</h1>
                <p>
                  如果您在使用本软件时遇到任何问题，请通过以下链接提交问题：
                </p>
                <a href="https://gitee.com/extrame/qrcode-wasm/issues"
                  >提交问题</a
                >
              `,
            ],
            [
              "config",
              () => html` <div>
                  <button id="csv_updater" @click=${this.uploadCsv.bind(this)}>
                    选择CSV文件
                  </button>
                  <div><label for="template">模板</label>
                  <input
                    type="text"
                    id="template"
                    name="template"
                    value=${this.template}
                    @change=${(e: any) => (this.template = e.target.value)}
                  /></div>
                  ${when(
                    this.preview,
                    () => html`<div class="preview">
                      <h2>预览</h2>
                      <img src="${this.preview}" alt="Preview" />
                      <span>对应内容：${this.preview_text}</span>
                    </div>`
                  )}
                  <button @click=${this.download}>批量下载</button>
                </div>
                <form @submit=${this.changeConfig}>
                  <div>
                    <label for="font_size"> 字体大小 </label>
                    <input
                      type="number"
                      id="font_size"
                      name="font_size"
                      value=${this.config.font_size}
                    />
                  </div>
                  <div>
                    <label for="dpi"> DPI </label>
                    <input
                      type="number"
                      id="dpi"
                      name="dpi"
                      value=${this.config.dpi}
                    />
                  </div>
                  <!-- add a radio to select font source in local/url/server -->
                  <div>
                    <label for="font_source"> 字体来源 </label>
                    <div class="container">
                      <label
                        ><input
                          type="radio"
                          name="font_source"
                          @change=${this.handleFontSourceChange}
                          value="browser"
                          ?checked=${this.config.font_source === "browser"}
                        />浏览器字体文件</label
                      >
                      <select
                        id="font_server_source"
                        ?hidden=${this.config.font_source !== "browser"}
                        @change=${this.handleExportChange.bind(this, "font")}
                      >
                        ${map(
                          this.localFonts,
                          (source, index) =>
                            html`<option value="${index}">
                              ${source.fullName}
                            </option>`
                        )}
                      </select>
                      <label
                        ><input
                          type="radio"
                          name="font_source"
                          @change=${this.handleFontSourceChange}
                          value="local"
                          ?checked=${this.config.font_source === "local"}
                        />本地字体文件</label
                      >
                      <input
                        type="file"
                        id="font_local_source_file"
                        ?hidden=${this.config.font_source !== "local"}
                      />
                      <label
                        ><input
                          type="radio"
                          name="font_source"
                          @change=${this.handleFontSourceChange}
                          value="url"
                          ?checked=${this.config.font_source === "url"}
                        />URL字体文件</label
                      >
                      <input
                        type="text"
                        ?hidden=${this.config.font_source !== "url"}
                        value="${this.config.font}"
                        placeholder="字体URL"
                        @change=${this.handleExportChange}
                      />
                      <label
                        ><input
                          type="radio"
                          name="font_source"
                          @change=${this.handleFontSourceChange}
                          value="server"
                          ?checked=${this.config.font_source === "server"}
                        />服务器字体文件</label
                      >
                      <select
                        id="font_server_source"
                        ?hidden=${this.config.font_source !== "server"}
                        @change=${this.handleExportChange}
                      >
                        ${map(
                          this.fontServerSources,
                          (source) =>
                            html`<option value="${source.url}">
                              ${source.name}
                            </option>`
                        )}
                      </select>
                    </div>
                  </div>
                  <button type="submit">提交</button>
                </form>`,
            ],
          ])}
        </div>
      </div>
    `;
  }

  static styles = css`
    :host {
      display: flex;
      padding: 0px;
      color: var(--qrcode-generator-text-color, #000);
      background-color: var(--qrcode-generator-background-color, #fff);
    }

    .main {
      display: flex;
      flex-grow: 1;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;

      > h1 {
        font-size: 1.2em;
        line-height: 60px;
        padding: 0px;
        margin: 0px;
      }

      .data-table {
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        max-height: calc(100% - 100px);
        overflow: auto;
        background-color: #f5f5f5;
        padding: 10px;

        tr {
          justify-content: space-between;
          align-items: center;
          width: 100%;
          background-color: #fff;
          border: 1px solid #ccc;
          padding: 10px;

          &:hover {
            background-color: #f5f5f5;
          }

        }
      }

      .pagination {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: calc(100% - 20px);
        padding: 10px;
        background-color: #e0e0e0;
        gap: 10px;
      }
    }

    .aside {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      background-color: #ffffff;
      width: 300px;
      border-left: 1px solid #ccc;

      .aside-header {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: 56px;
        width: calc(100% - 8px);
        padding: 4px 4px 0px 4px;
        background-color: #e0e0e0;

        button {
          padding: 10px;
          background-color: #ccc;
          border: none;
          cursor: pointer;
          height: 55px;

          &.active {
            background-color: #fff;
          }
        }
      }

      .aside-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        flex: 1;

        > * {
          padding: 10px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        h1 {
          font-size: 1.2em;
          margin-bottom: 10px;
          text-align: left;
          background-color: #e0e0e0;
          width: calc(100% - 20px);
          padding: 10px;
        }

        h2 {
          font-size: 1.1em;
          margin-bottom: 6px;
          text-align: left;
          width: calc(100% - 20px);
          padding: 10px;
        }

        #csv_updater {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 200px;
          height: 50px;
          overflow: auto;
          margin: 10px;
          background-color: #e0e0e0;
          border: none;
        }
      }

      form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: calc(100% - 20px);

        > div {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          width: 100%;
          margin-bottom: 10px;

          > label {
            width: 70px;
          }

          > input {
            flex: 1;
          }
        }

        label {
          height: 30px;
          margin-right: 10px;
        }

        input {
          height: 30px;
        }

        div.container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: calc(100% - 150px);
          border: 1px solid #ccc;
          overflow: hidden;
          flex: 1;

          label {
            width: calc(100% - 10px);
            background-color: #e0e0e0;
            padding: 10px;
          }

          input[type="radio"] {
            display: none;
          }

          input[type="file"] {
            width: calc(100% - 20px);
            height: 30px;
          }

          input[type="text"] {
            width: calc(100% - 20px);
            height: 30px;
            padding: 5px;
          }
        }
      }
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "qrcode-generator": QrcodeGenerator;
  }
}
