import { LitElement, css, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import "./assets/wasm_exec.js"
import lib from "./assets/lib.wasm?init"
import { range } from 'lit/directives/range.js';
import { map } from 'lit/directives/map.js';

interface Config {
  font_size: number;
  dpi: number;
}


/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('qrcode-generator')
export class QrcodeGenerator extends LitElement {
  /**
   * Copy for the read the docs hint.
   */
  @property()
  docsHint = 'Click on the Vite and Lit logos to learn more'

  randonStr = Math.random().toString(36).substring(7);

  @state() csvLength: number = 0;
  @state() csvColumns: number = 0;
  @state() pageOffset: number = 0;
  @state() pageSize: number = 10;

  constructor() {
    super()
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
  };

  changeConfig(e: Event) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    console.log("formData", formData)
    //call wasm function
    const font_size = formData.get("font_size");
    console.log(font_size);
    // @ts-ignore
    var callFn = window["set_config_" + this.randonStr];
    callFn.call(this, {
      font_size: font_size,
    }).then((config: Config) => {
      this.config = config;
    })
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


  handleCsvFileChange(e: Event) {
    e.preventDefault();
    const fileInput = e.target as HTMLInputElement;
    if (fileInput.files && fileInput.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          // @ts-ignore
          var callFn = window["read_csv_" + this.randonStr];
          var length = callFn.call(this, new Uint8Array(reader.result as ArrayBuffer));
          this.csvLength = length;
          this.getCsvColumns();
          this.requestUpdate();
        }
      };
      reader.readAsArrayBuffer(fileInput.files[0]);
    }
  }

  render() {
    return html`
      <div class="main">
        <div class="toolbar">
          <input type="file" id="file-input" @change=${this.handleCsvFileChange} />
          <small>选择CSV文件</small>
        </div>
        <div class="data-table">
          <h1>数据预览</h1>
          <p>CSV文件长度: ${this.csvLength}</p>
          <div class="data-table-content">
            <table>
            <thead>
              <tr>
                ${map(range(this.csvColumns), (i) => html`<th>列${i + 1}</th>`)}
              </tr>
            </thead>
            <tbody>
              ${map(range(this.pageSize), (i) => html`
                <tr>
                  ${map(range(this.csvColumns), (j) => {
      var data = this.getData(i + this.pageOffset * this.pageSize, j);
      return html`<td>${data}</td>`;
    })}
                </tr>
              `)}
      </tbody>
      </table>
      </div>
      </div>
      <div class= "pagination" >
      <button @click=${() => this.pageOffset = Math.max(0, this.pageOffset - 1)}> 上一页 </button>
      <button @click=${() => this.pageOffset = Math.min(this.csvLength / this.pageSize, this.pageOffset + 1)}> 下一页 </button>
        <span > 当前页: ${this.pageOffset + 1} </span>
          <span > 总页数: ${Math.ceil(this.csvLength / this.pageSize)} </span>
            <span > 每页显示: ${this.pageSize} </span>
              <span > 总数据: ${this.csvLength} </span>
                  <span > 总列数: ${this.csvColumns} </span>
                      </div>
                      </div>
                      <div class="config" >
                      <h1>参数配置 </h1>
                        <form @submit=${this.changeConfig}>
                          <label for= "font_size" > 字体大小 </label>
                            <input type = "number" id = "font_size" name = "font_size" value = ${this.config.font_size} />
                              <label for= "dpi" > DPI </label>
                                <input type = "number" id = "dpi" name = "dpi" value = ${this.config.dpi} />
                                  <button type = "submit" > 提交 </button>
                                    </form>
                                    </div>
                                      `
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
    }

    .config {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      background-color: #f5f5f5;

      form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100 %;

        label {
          margin-bottom: 10px;
        }

        input {
          margin-bottom: 20px;
        }
      }
    }
    `
}

declare global {
  interface HTMLElementTagNameMap {
    'qrcode-generator': QrcodeGenerator
  }
}
