(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const I=globalThis,J=I.ShadowRoot&&(I.ShadyCSS===void 0||I.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,K=Symbol(),X=new WeakMap;let ct=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==K)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(J&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=X.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&X.set(e,t))}return t}toString(){return this.cssText}};const gt=r=>new ct(typeof r=="string"?r:r+"",void 0,K),mt=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((i,s,o)=>i+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[o+1],r[0]);return new ct(e,r,K)},_t=(r,t)=>{if(J)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),s=I.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,r.appendChild(i)}},tt=J?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return gt(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:$t,defineProperty:yt,getOwnPropertyDescriptor:vt,getOwnPropertyNames:bt,getOwnPropertySymbols:wt,getPrototypeOf:At}=Object,b=globalThis,et=b.trustedTypes,xt=et?et.emptyScript:"",z=b.reactiveElementPolyfillSupport,O=(r,t)=>r,L={toAttribute(r,t){switch(t){case Boolean:r=r?xt:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},Y=(r,t)=>!$t(r,t),st={attribute:!0,type:String,converter:L,reflect:!1,hasChanged:Y};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),b.litPropertyMetadata??(b.litPropertyMetadata=new WeakMap);class C extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=st){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&yt(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:o}=vt(this.prototype,t)??{get(){return this[e]},set(a){this[e]=a}};return{get(){return s==null?void 0:s.call(this)},set(a){const h=s==null?void 0:s.call(this);o.call(this,a),this.requestUpdate(t,h,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??st}static _$Ei(){if(this.hasOwnProperty(O("elementProperties")))return;const t=At(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(O("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(O("properties"))){const e=this.properties,i=[...bt(e),...wt(e)];for(const s of i)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(tt(s))}else t!==void 0&&e.push(tt(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return _t(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostConnected)==null?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostDisconnected)==null?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){var o;const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){const a=(((o=i.converter)==null?void 0:o.toAttribute)!==void 0?i.converter:L).toAttribute(e,i.type);this._$Em=t,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._$Em=null}}_$AK(t,e){var o;const i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const a=i.getPropertyOptions(s),h=typeof a.converter=="function"?{fromAttribute:a.converter}:((o=a.converter)==null?void 0:o.fromAttribute)!==void 0?a.converter:L;this._$Em=s,this[s]=h.fromAttribute(e,a.type),this._$Em=null}}requestUpdate(t,e,i){if(t!==void 0){if(i??(i=this.constructor.getPropertyOptions(t)),!(i.hasChanged??Y)(this[t],e))return;this.P(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,a]of this._$Ep)this[o]=a;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[o,a]of s)a.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],a)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(i=this._$EO)==null||i.forEach(s=>{var o;return(o=s.hostUpdate)==null?void 0:o.call(s)}),this.update(e)):this._$EU()}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}C.elementStyles=[],C.shadowRootOptions={mode:"open"},C[O("elementProperties")]=new Map,C[O("finalized")]=new Map,z==null||z({ReactiveElement:C}),(b.reactiveElementVersions??(b.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R=globalThis,H=R.trustedTypes,it=H?H.createPolicy("lit-html",{createHTML:r=>r}):void 0,dt="$lit$",v=`lit$${Math.random().toFixed(9).slice(2)}$`,ut="?"+v,St=`<${ut}>`,x=document,k=()=>x.createComment(""),N=r=>r===null||typeof r!="object"&&typeof r!="function",Z=Array.isArray,Et=r=>Z(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",q=`[ 	
\f\r]`,P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,nt=/-->/g,rt=/>/g,w=RegExp(`>|${q}(?:([^\\s"'>=/]+)(${q}*=${q}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ot=/'/g,at=/"/g,ft=/^(?:script|style|textarea|title)$/i,Ct=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),$=Ct(1),S=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),lt=new WeakMap,A=x.createTreeWalker(x,129);function pt(r,t){if(!Z(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return it!==void 0?it.createHTML(t):t}const Ut=(r,t)=>{const e=r.length-1,i=[];let s,o=t===2?"<svg>":t===3?"<math>":"",a=P;for(let h=0;h<e;h++){const c=r[h];let u,p,n=-1,l=0;for(;l<c.length&&(a.lastIndex=l,p=a.exec(c),p!==null);)l=a.lastIndex,a===P?p[1]==="!--"?a=nt:p[1]!==void 0?a=rt:p[2]!==void 0?(ft.test(p[2])&&(s=RegExp("</"+p[2],"g")),a=w):p[3]!==void 0&&(a=w):a===w?p[0]===">"?(a=s??P,n=-1):p[1]===void 0?n=-2:(n=a.lastIndex-p[2].length,u=p[1],a=p[3]===void 0?w:p[3]==='"'?at:ot):a===at||a===ot?a=w:a===nt||a===rt?a=P:(a=w,s=void 0);const d=a===w&&r[h+1].startsWith("/>")?" ":"";o+=a===P?c+St:n>=0?(i.push(u),c.slice(0,n)+dt+c.slice(n)+v+d):c+v+(n===-2?h:d)}return[pt(r,o+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class M{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,a=0;const h=t.length-1,c=this.parts,[u,p]=Ut(t,e);if(this.el=M.createElement(u,i),A.currentNode=this.el.content,e===2||e===3){const n=this.el.content.firstChild;n.replaceWith(...n.childNodes)}for(;(s=A.nextNode())!==null&&c.length<h;){if(s.nodeType===1){if(s.hasAttributes())for(const n of s.getAttributeNames())if(n.endsWith(dt)){const l=p[a++],d=s.getAttribute(n).split(v),f=/([.?@])?(.*)/.exec(l);c.push({type:1,index:o,name:f[2],strings:d,ctor:f[1]==="."?Tt:f[1]==="?"?Ot:f[1]==="@"?Rt:F}),s.removeAttribute(n)}else n.startsWith(v)&&(c.push({type:6,index:o}),s.removeAttribute(n));if(ft.test(s.tagName)){const n=s.textContent.split(v),l=n.length-1;if(l>0){s.textContent=H?H.emptyScript:"";for(let d=0;d<l;d++)s.append(n[d],k()),A.nextNode(),c.push({type:2,index:++o});s.append(n[l],k())}}}else if(s.nodeType===8)if(s.data===ut)c.push({type:2,index:o});else{let n=-1;for(;(n=s.data.indexOf(v,n+1))!==-1;)c.push({type:7,index:o}),n+=v.length-1}o++}}static createElement(t,e){const i=x.createElement("template");return i.innerHTML=t,i}}function U(r,t,e=r,i){var a,h;if(t===S)return t;let s=i!==void 0?(a=e._$Co)==null?void 0:a[i]:e._$Cl;const o=N(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==o&&((h=s==null?void 0:s._$AO)==null||h.call(s,!1),o===void 0?s=void 0:(s=new o(r),s._$AT(r,e,i)),i!==void 0?(e._$Co??(e._$Co=[]))[i]=s:e._$Cl=s),s!==void 0&&(t=U(r,s._$AS(r,t.values),s,i)),t}class Pt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=((t==null?void 0:t.creationScope)??x).importNode(e,!0);A.currentNode=s;let o=A.nextNode(),a=0,h=0,c=i[0];for(;c!==void 0;){if(a===c.index){let u;c.type===2?u=new D(o,o.nextSibling,this,t):c.type===1?u=new c.ctor(o,c.name,c.strings,this,t):c.type===6&&(u=new jt(o,this,t)),this._$AV.push(u),c=i[++h]}a!==(c==null?void 0:c.index)&&(o=A.nextNode(),a++)}return A.currentNode=x,s}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class D{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=U(this,t,e),N(t)?t===g||t==null||t===""?(this._$AH!==g&&this._$AR(),this._$AH=g):t!==this._$AH&&t!==S&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Et(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==g&&N(this._$AH)?this._$AA.nextSibling.data=t:this.T(x.createTextNode(t)),this._$AH=t}$(t){var o;const{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=M.createElement(pt(i.h,i.h[0]),this.options)),i);if(((o=this._$AH)==null?void 0:o._$AD)===s)this._$AH.p(e);else{const a=new Pt(s,this),h=a.u(this.options);a.p(e),this.T(h),this._$AH=a}}_$AC(t){let e=lt.get(t.strings);return e===void 0&&lt.set(t.strings,e=new M(t)),e}k(t){Z(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new D(this.O(k()),this.O(k()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class F{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,o){this.type=1,this._$AH=g,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=g}_$AI(t,e=this,i,s){const o=this.strings;let a=!1;if(o===void 0)t=U(this,t,e,0),a=!N(t)||t!==this._$AH&&t!==S,a&&(this._$AH=t);else{const h=t;let c,u;for(t=o[0],c=0;c<o.length-1;c++)u=U(this,h[i+c],e,c),u===S&&(u=this._$AH[c]),a||(a=!N(u)||u!==this._$AH[c]),u===g?t=g:t!==g&&(t+=(u??"")+o[c+1]),this._$AH[c]=u}a&&!s&&this.j(t)}j(t){t===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Tt extends F{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===g?void 0:t}}class Ot extends F{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==g)}}class Rt extends F{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){if((t=U(this,t,e,0)??g)===S)return;const i=this._$AH,s=t===g&&i!==g||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==g&&(i===g||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class jt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){U(this,t)}}const B=R.litHtmlPolyfillSupport;B==null||B(M,D),(R.litHtmlVersions??(R.litHtmlVersions=[])).push("3.2.1");const kt=(r,t,e)=>{const i=(e==null?void 0:e.renderBefore)??t;let s=i._$litPart$;if(s===void 0){const o=(e==null?void 0:e.renderBefore)??null;i._$litPart$=s=new D(t.insertBefore(k(),o),o,void 0,e??{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let j=class extends C{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=kt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return S}};var ht;j._$litElement$=!0,j.finalized=!0,(ht=globalThis.litElementHydrateSupport)==null||ht.call(globalThis,{LitElement:j});const V=globalThis.litElementPolyfillSupport;V==null||V({LitElement:j});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nt=r=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(r,t)}):customElements.define(r,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mt={attribute:!0,type:String,converter:L,reflect:!1,hasChanged:Y},Dt=(r=Mt,t,e)=>{const{kind:i,metadata:s}=e;let o=globalThis.litPropertyMetadata.get(s);if(o===void 0&&globalThis.litPropertyMetadata.set(s,o=new Map),o.set(e.name,r),i==="accessor"){const{name:a}=e;return{set(h){const c=t.get.call(this);t.set.call(this,h),this.requestUpdate(a,c,r)},init(h){return h!==void 0&&this.P(a,void 0,r),h}}}if(i==="setter"){const{name:a}=e;return function(h){const c=this[a];t.call(this,h),this.requestUpdate(a,c,r)}}throw Error("Unsupported decorator location: "+i)};function Q(r){return(t,e)=>typeof e=="object"?Dt(r,t,e):((i,s,o)=>{const a=s.hasOwnProperty(o);return s.constructor.createProperty(o,a?{...i,wrapped:!0}:i),a?Object.getOwnPropertyDescriptor(s,o):void 0})(r,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function E(r){return Q({...r,state:!0,attribute:!1})}(()=>{const r=()=>{const i=new Error("not implemented");return i.code="ENOSYS",i};if(!globalThis.fs){let i="";globalThis.fs={constants:{O_WRONLY:-1,O_RDWR:-1,O_CREAT:-1,O_TRUNC:-1,O_APPEND:-1,O_EXCL:-1},writeSync(s,o){i+=e.decode(o);const a=i.lastIndexOf(`
`);return a!=-1&&(console.log(i.substring(0,a)),i=i.substring(a+1)),o.length},write(s,o,a,h,c,u){if(a!==0||h!==o.length||c!==null){u(r());return}const p=this.writeSync(s,o);u(null,p)},chmod(s,o,a){a(r())},chown(s,o,a,h){h(r())},close(s,o){o(r())},fchmod(s,o,a){a(r())},fchown(s,o,a,h){h(r())},fstat(s,o){o(r())},fsync(s,o){o(null)},ftruncate(s,o,a){a(r())},lchown(s,o,a,h){h(r())},link(s,o,a){a(r())},lstat(s,o){o(r())},mkdir(s,o,a){a(r())},open(s,o,a,h){h(r())},read(s,o,a,h,c,u){u(r())},readdir(s,o){o(r())},readlink(s,o){o(r())},rename(s,o,a){a(r())},rmdir(s,o){o(r())},stat(s,o){o(r())},symlink(s,o,a){a(r())},truncate(s,o,a){a(r())},unlink(s,o){o(r())},utimes(s,o,a,h){h(r())}}}if(globalThis.process||(globalThis.process={getuid(){return-1},getgid(){return-1},geteuid(){return-1},getegid(){return-1},getgroups(){throw r()},pid:-1,ppid:-1,umask(){throw r()},cwd(){throw r()},chdir(){throw r()}}),!globalThis.crypto)throw new Error("globalThis.crypto is not available, polyfill required (crypto.getRandomValues only)");if(!globalThis.performance)throw new Error("globalThis.performance is not available, polyfill required (performance.now only)");if(!globalThis.TextEncoder)throw new Error("globalThis.TextEncoder is not available, polyfill required");if(!globalThis.TextDecoder)throw new Error("globalThis.TextDecoder is not available, polyfill required");const t=new TextEncoder("utf-8"),e=new TextDecoder("utf-8");globalThis.Go=class{constructor(){this.argv=["js"],this.env={},this.exit=n=>{n!==0&&console.warn("exit code:",n)},this._exitPromise=new Promise(n=>{this._resolveExitPromise=n}),this._pendingEvent=null,this._scheduledTimeouts=new Map,this._nextCallbackTimeoutID=1;const i=(n,l)=>{this.mem.setUint32(n+0,l,!0),this.mem.setUint32(n+4,Math.floor(l/4294967296),!0)},s=n=>{const l=this.mem.getUint32(n+0,!0),d=this.mem.getInt32(n+4,!0);return l+d*4294967296},o=n=>{const l=this.mem.getFloat64(n,!0);if(l===0)return;if(!isNaN(l))return l;const d=this.mem.getUint32(n,!0);return this._values[d]},a=(n,l)=>{if(typeof l=="number"&&l!==0){if(isNaN(l)){this.mem.setUint32(n+4,2146959360,!0),this.mem.setUint32(n,0,!0);return}this.mem.setFloat64(n,l,!0);return}if(l===void 0){this.mem.setFloat64(n,0,!0);return}let f=this._ids.get(l);f===void 0&&(f=this._idPool.pop(),f===void 0&&(f=this._values.length),this._values[f]=l,this._goRefCounts[f]=0,this._ids.set(l,f)),this._goRefCounts[f]++;let m=0;switch(typeof l){case"object":l!==null&&(m=1);break;case"string":m=2;break;case"symbol":m=3;break;case"function":m=4;break}this.mem.setUint32(n+4,2146959360|m,!0),this.mem.setUint32(n,f,!0)},h=n=>{const l=s(n+0),d=s(n+8);return new Uint8Array(this._inst.exports.mem.buffer,l,d)},c=n=>{const l=s(n+0),d=s(n+8),f=new Array(d);for(let m=0;m<d;m++)f[m]=o(l+m*8);return f},u=n=>{const l=s(n+0),d=s(n+8);return e.decode(new DataView(this._inst.exports.mem.buffer,l,d))},p=Date.now()-performance.now();this.importObject={_gotest:{add:(n,l)=>n+l},gojs:{"runtime.wasmExit":n=>{n>>>=0;const l=this.mem.getInt32(n+8,!0);this.exited=!0,delete this._inst,delete this._values,delete this._goRefCounts,delete this._ids,delete this._idPool,this.exit(l)},"runtime.wasmWrite":n=>{n>>>=0;const l=s(n+8),d=s(n+16),f=this.mem.getInt32(n+24,!0);fs.writeSync(l,new Uint8Array(this._inst.exports.mem.buffer,d,f))},"runtime.resetMemoryDataView":n=>{this.mem=new DataView(this._inst.exports.mem.buffer)},"runtime.nanotime1":n=>{n>>>=0,i(n+8,(p+performance.now())*1e6)},"runtime.walltime":n=>{n>>>=0;const l=new Date().getTime();i(n+8,l/1e3),this.mem.setInt32(n+16,l%1e3*1e6,!0)},"runtime.scheduleTimeoutEvent":n=>{n>>>=0;const l=this._nextCallbackTimeoutID;this._nextCallbackTimeoutID++,this._scheduledTimeouts.set(l,setTimeout(()=>{for(this._resume();this._scheduledTimeouts.has(l);)console.warn("scheduleTimeoutEvent: missed timeout event"),this._resume()},s(n+8))),this.mem.setInt32(n+16,l,!0)},"runtime.clearTimeoutEvent":n=>{n>>>=0;const l=this.mem.getInt32(n+8,!0);clearTimeout(this._scheduledTimeouts.get(l)),this._scheduledTimeouts.delete(l)},"runtime.getRandomData":n=>{n>>>=0,crypto.getRandomValues(h(n+8))},"syscall/js.finalizeRef":n=>{n>>>=0;const l=this.mem.getUint32(n+8,!0);if(this._goRefCounts[l]--,this._goRefCounts[l]===0){const d=this._values[l];this._values[l]=null,this._ids.delete(d),this._idPool.push(l)}},"syscall/js.stringVal":n=>{n>>>=0,a(n+24,u(n+8))},"syscall/js.valueGet":n=>{n>>>=0;const l=Reflect.get(o(n+8),u(n+16));n=this._inst.exports.getsp()>>>0,a(n+32,l)},"syscall/js.valueSet":n=>{n>>>=0,Reflect.set(o(n+8),u(n+16),o(n+32))},"syscall/js.valueDelete":n=>{n>>>=0,Reflect.deleteProperty(o(n+8),u(n+16))},"syscall/js.valueIndex":n=>{n>>>=0,a(n+24,Reflect.get(o(n+8),s(n+16)))},"syscall/js.valueSetIndex":n=>{n>>>=0,Reflect.set(o(n+8),s(n+16),o(n+24))},"syscall/js.valueCall":n=>{n>>>=0;try{const l=o(n+8),d=Reflect.get(l,u(n+16)),f=c(n+32),m=Reflect.apply(d,l,f);n=this._inst.exports.getsp()>>>0,a(n+56,m),this.mem.setUint8(n+64,1)}catch(l){n=this._inst.exports.getsp()>>>0,a(n+56,l),this.mem.setUint8(n+64,0)}},"syscall/js.valueInvoke":n=>{n>>>=0;try{const l=o(n+8),d=c(n+16),f=Reflect.apply(l,void 0,d);n=this._inst.exports.getsp()>>>0,a(n+40,f),this.mem.setUint8(n+48,1)}catch(l){n=this._inst.exports.getsp()>>>0,a(n+40,l),this.mem.setUint8(n+48,0)}},"syscall/js.valueNew":n=>{n>>>=0;try{const l=o(n+8),d=c(n+16),f=Reflect.construct(l,d);n=this._inst.exports.getsp()>>>0,a(n+40,f),this.mem.setUint8(n+48,1)}catch(l){n=this._inst.exports.getsp()>>>0,a(n+40,l),this.mem.setUint8(n+48,0)}},"syscall/js.valueLength":n=>{n>>>=0,i(n+16,parseInt(o(n+8).length))},"syscall/js.valuePrepareString":n=>{n>>>=0;const l=t.encode(String(o(n+8)));a(n+16,l),i(n+24,l.length)},"syscall/js.valueLoadString":n=>{n>>>=0;const l=o(n+8);h(n+16).set(l)},"syscall/js.valueInstanceOf":n=>{n>>>=0,this.mem.setUint8(n+24,o(n+8)instanceof o(n+16)?1:0)},"syscall/js.copyBytesToGo":n=>{n>>>=0;const l=h(n+8),d=o(n+32);if(!(d instanceof Uint8Array||d instanceof Uint8ClampedArray)){this.mem.setUint8(n+48,0);return}const f=d.subarray(0,l.length);l.set(f),i(n+40,f.length),this.mem.setUint8(n+48,1)},"syscall/js.copyBytesToJS":n=>{n>>>=0;const l=o(n+8),d=h(n+16);if(!(l instanceof Uint8Array||l instanceof Uint8ClampedArray)){this.mem.setUint8(n+48,0);return}const f=d.subarray(0,l.length);l.set(f),i(n+40,f.length),this.mem.setUint8(n+48,1)},debug:n=>{console.log(n)}}}}async run(i){if(!(i instanceof WebAssembly.Instance))throw new Error("Go.run: WebAssembly.Instance expected");this._inst=i,this.mem=new DataView(this._inst.exports.mem.buffer),this._values=[NaN,0,null,!0,!1,globalThis,this],this._goRefCounts=new Array(this._values.length).fill(1/0),this._ids=new Map([[0,1],[null,2],[!0,3],[!1,4],[globalThis,5],[this,6]]),this._idPool=[],this.exited=!1;let s=4096;const o=n=>{const l=s,d=t.encode(n+"\0");return new Uint8Array(this.mem.buffer,s,d.length).set(d),s+=d.length,s%8!==0&&(s+=8-s%8),l},a=this.argv.length,h=[];this.argv.forEach(n=>{h.push(o(n))}),h.push(0),Object.keys(this.env).sort().forEach(n=>{h.push(o(`${n}=${this.env[n]}`))}),h.push(0);const u=s;if(h.forEach(n=>{this.mem.setUint32(s,n,!0),this.mem.setUint32(s+4,0,!0),s+=8}),s>=12288)throw new Error("total length of command line and environment variables exceeds limit");this._inst.exports.run(a,u),this.exited&&this._resolveExitPromise(),await this._exitPromise}_resume(){if(this.exited)throw new Error("Go program has already exited");this._inst.exports.resume(),this.exited&&this._resolveExitPromise()}_makeFuncWrapper(i){const s=this;return function(){const o={id:i,this:this,args:arguments};return s._pendingEvent=o,s._resume(),o.result}}}})();const It=async(r={},t)=>{let e;if(t.startsWith("data:")){const i=t.replace(/^data:.*?base64,/,"");let s;if(typeof Buffer=="function"&&typeof Buffer.from=="function")s=Buffer.from(i,"base64");else if(typeof atob=="function"){const o=atob(i);s=new Uint8Array(o.length);for(let a=0;a<o.length;a++)s[a]=o.charCodeAt(a)}else throw new Error("Failed to decode base64-encoded data URL, Buffer and atob are not supported");e=await WebAssembly.instantiate(s,r)}else{const i=await fetch(t),s=i.headers.get("Content-Type")||"";if("instantiateStreaming"in WebAssembly&&s.startsWith("application/wasm"))e=await WebAssembly.instantiateStreaming(i,r);else{const o=await i.arrayBuffer();e=await WebAssembly.instantiate(o,r)}}return e.instance},Lt=r=>It(r,"/assets/lib-Dd_bmt_7.wasm?init");/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*W(r,t,e=1){const i=t===void 0?0:r;t??(t=r);for(let s=i;e>0?s<t:t<s;s+=e)yield s}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*T(r,t){if(r!==void 0){let e=0;for(const i of r)yield t(i,e++)}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ht=(r,t,e)=>{for(const i of t)if(i[0]===r)return(0,i[1])();return e==null?void 0:e()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ft={ATTRIBUTE:1},zt=r=>(...t)=>({_$litDirective$:r,values:t});class qt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const G=zt(class extends qt{constructor(r){var t;if(super(r),r.type!==Ft.ATTRIBUTE||r.name!=="class"||((t=r.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter(t=>r[t]).join(" ")+" "}update(r,[t]){var i,s;if(this.st===void 0){this.st=new Set,r.strings!==void 0&&(this.nt=new Set(r.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in t)t[o]&&!((i=this.nt)!=null&&i.has(o))&&this.st.add(o);return this.render(t)}const e=r.element.classList;for(const o of this.st)o in t||(e.remove(o),this.st.delete(o));for(const o in t){const a=!!t[o];a===this.st.has(o)||(s=this.nt)!=null&&s.has(o)||(a?(e.add(o),this.st.add(o)):(e.remove(o),this.st.delete(o)))}return S}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Bt(r,t,e){return r?t(r):e==null?void 0:e(r)}var Vt=Object.defineProperty,Wt=Object.getOwnPropertyDescriptor,y=(r,t,e,i)=>{for(var s=i>1?void 0:i?Wt(t,e):t,o=r.length-1,a;o>=0;o--)(a=r[o])&&(s=(i?a(t,e,s):a(s))||s);return i&&s&&Vt(t,e,s),s};let _=class extends j{constructor(){super(),this.docsHint="Click on the Vite and Lit logos to learn more",this.randonStr=Math.random().toString(36).substring(7),this.csvLength=0,this.csvColumns=0,this.pageOffset=0,this.pageSize=10,this.showingAside="about",this.localFonts=[],this.preview="",this.config={font_size:0,dpi:0,width:0,title:"",font_source:"server",font:"",template:""};const r=new Go;r.argv.push("--prefix="+this.randonStr),Lt(r.importObject).then(t=>r.run(t)),window["wasm_ready_"+this.randonStr]=()=>{this.config=this.getConfig(),this.requestUpdate()}}changeConfig(r){r.preventDefault();const t=new FormData(r.target);console.log("formData",t);const e=t.get("font_size");console.log(e);var i=window["set_config_"+this.randonStr];i.call(this,{font_size:e}).then(s=>{this.config=s}),this.requestUpdate()}getConfig(){var r=window["get_config_"+this.randonStr];return r.call(this)}getCsvColumns(){var r=window["get_csv_columns_"+this.randonStr];this.csvColumns=r.call(this)}getData(r,t){var e=window["csv_get_"+this.randonStr];return e.call(this,r,t)}handleCsvFileChange(r){r.preventDefault();const t=r.target;if(t.files&&t.files[0]){const e=new FileReader;e.onload=()=>{if(e.result){var i=window["read_csv_"+this.randonStr],s=i.call(this,new Uint8Array(e.result));this.csvLength=s,this.getCsvColumns(),this.requestUpdate()}},e.readAsArrayBuffer(t.files[0]),this.getPreview()}}getPreview(){this.preview=window["get_preview_"+this.randonStr].call(this),this.requestUpdate()}handleExportChange(r,t){t.preventDefault();var e=t.target.value,i=window["set_export_settings_"+this.randonStr];i.call(this,r,e),this.preview=window["get_preview_"+this.randonStr].call(this),this.requestUpdate()}get fontServerSources(){var r=window["get_hosted_fonts_"+this.randonStr];return Object.entries(r.call(this)).map(([t,e])=>({name:t,url:e}))}async handleFontSourceChange(){var t;var r=(t=this.shadowRoot)==null?void 0:t.querySelector("input[name='font_source']:checked");this.config.font_source=r.value??"server",this.config.font_source==="browser"&&("queryLocalFonts"in window?(await navigator.permissions.query({name:"local-fonts"}).then(e=>{e.state==="granted"?console.log("Local Font Access API is supported"):console.log("Local Font Access API is not supported")}),this.localFonts=await window.queryLocalFonts()):console.log("Local Font Access API is not supported")),this.requestUpdate()}render(){return $`
      <div class="main">
        <h1>数据预览</h1>
        <div class="data-table">
          <p>CSV文件长度: ${this.csvLength}</p>
          <div class="data-table-content">
            <table>
              <thead>
                <tr>
                  ${T(W(this.csvColumns),r=>$`<th>列${r+1}</th>`)}
                </tr>
              </thead>
              <tbody>
                ${T(W(this.pageSize),r=>$`
                    <tr>
                      ${T(W(this.csvColumns),t=>{var e=this.getData(r+this.pageOffset*this.pageSize,t);return $`<td>${e}</td>`})}
                    </tr>
                  `)}
              </tbody>
            </table>
          </div>
        </div>
        <div class="pagination">
          <button
            @click=${()=>this.pageOffset=Math.max(0,this.pageOffset-1)}
          >
            上一页
          </button>
          <button
            @click=${()=>this.pageOffset=Math.min(this.csvLength/this.pageSize,this.pageOffset+1)}
          >
            下一页
          </button>
          <span> 当前页: ${this.pageOffset+1} </span>
          <span> 总页数: ${Math.ceil(this.csvLength/this.pageSize)} </span>
          <span> 每页显示: ${this.pageSize} </span>
          <span> 总数据: ${this.csvLength} </span>
          <span> 总列数: ${this.csvColumns} </span>
        </div>
      </div>
      <div class="aside">
        <div class="aside-header">
          <button
            @click=${()=>this.showingAside="about"}
            class=${G({active:this.showingAside==="about"})}
          >
            功能介绍
          </button>
          <button
            @click=${()=>this.showingAside="config"}
            class=${G({active:this.showingAside==="config"})}
          >
            参数配置
          </button>
          <button
            @click=${()=>this.showingAside="exporter"}
            class=${G({active:this.showingAside==="exporter"})}
          >
            导出配置
          </button>
        </div>
        <div class="aside-content">
          ${Ht(this.showingAside,[["about",()=>$`
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
              `],["config",()=>$` <form @submit=${this.changeConfig}>
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
                        ?checked=${this.config.font_source==="browser"}
                      />浏览器字体文件</label
                    >
                    <select
                      id="font_server_source"
                      ?hidden=${this.config.font_source!=="browser"}
                      @change=${this.handleExportChange.bind(this,"font")}
                    >
                      ${T(this.localFonts,(r,t)=>$`<option value="${t}">
                            ${r.fullName}
                          </option>`)}
                    </select>
                    <label
                      ><input
                        type="radio"
                        name="font_source"
                        @change=${this.handleFontSourceChange}
                        value="local"
                        ?checked=${this.config.font_source==="local"}
                      />本地字体文件</label
                    >
                    <input
                      type="file"
                      id="font_local_source_file"
                      ?hidden=${this.config.font_source!=="local"}
                    />
                    <label
                      ><input
                        type="radio"
                        name="font_source"
                        @change=${this.handleFontSourceChange}
                        value="url"
                        ?checked=${this.config.font_source==="url"}
                      />URL字体文件</label
                    >
                    <input
                      type="text"
                      ?hidden=${this.config.font_source!=="url"}
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
                        ?checked=${this.config.font_source==="server"}
                      />服务器字体文件</label
                    >
                    <select
                      id="font_server_source"
                      ?hidden=${this.config.font_source!=="server"}
                      @change=${this.handleExportChange}
                    >
                      ${T(this.fontServerSources,r=>$`<option value="${r.url}">
                            ${r.name}
                          </option>`)}
                    </select>
                  </div>
                </div>
                <button type="submit">提交</button>
              </form>`],["exporter",()=>$`
                <input
                  type="file"
                  id="file-input"
                  @change=${this.handleCsvFileChange}
                />
                <small>选择CSV文件</small>
                <div>
                  <label for="template">模板</label>
                  <input
                    type="text"
                    id="template"
                    name="template"
                    value=${this.config.template}
                    @change=${this.handleExportChange.bind(this,"template")}
                  />
                </div>
                <label for="width">宽度</label>
                <input
                  type="number"
                  id="width"
                  name="width"
                  value=${this.config.width}
                  min="100"
                  max="1000"
                  step="10"
                  @change=${this.handleExportChange}
                />
                ${Bt(this.preview,()=>$`<div class="preview">
                    <img src="data:image/png;base64,${this.preview}" alt="Preview" />
                  </div>`)}
              `]])}
        </div>
      </div>
    `}};_.styles=mt`
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
        }

        h1 {
          font-size: 1.2em;
          margin-bottom: 10px;
          text-align: left;
          background-color: #e0e0e0;
          width: calc(100% - 20px);
          padding: 10px;
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
  `;y([Q()],_.prototype,"docsHint",2);y([E()],_.prototype,"csvLength",2);y([E()],_.prototype,"csvColumns",2);y([E()],_.prototype,"pageOffset",2);y([E()],_.prototype,"pageSize",2);y([E()],_.prototype,"showingAside",2);y([E()],_.prototype,"localFonts",2);y([E()],_.prototype,"preview",2);y([Q({type:Object})],_.prototype,"config",2);_=y([Nt("qrcode-generator")],_);
