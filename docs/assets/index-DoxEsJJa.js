(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const D=globalThis,G=D.ShadowRoot&&(D.ShadyCSS===void 0||D.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,J=Symbol(),Q=new WeakMap;let dt=class{constructor(t,e,n){if(this._$cssResult$=!0,n!==J)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(G&&t===void 0){const n=e!==void 0&&e.length===1;n&&(t=Q.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&Q.set(e,t))}return t}toString(){return this.cssText}};const mt=i=>new dt(typeof i=="string"?i:i+"",void 0,J),_t=(i,...t)=>{const e=i.length===1?i[0]:t.reduce((n,s,o)=>n+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+i[o+1],i[0]);return new dt(e,i,J)},yt=(i,t)=>{if(G)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const n=document.createElement("style"),s=D.litNonce;s!==void 0&&n.setAttribute("nonce",s),n.textContent=e.cssText,i.appendChild(n)}},X=G?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const n of t.cssRules)e+=n.cssText;return mt(e)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:$t,defineProperty:vt,getOwnPropertyDescriptor:bt,getOwnPropertyNames:wt,getOwnPropertySymbols:At,getPrototypeOf:xt}=Object,b=globalThis,tt=b.trustedTypes,St=tt?tt.emptyScript:"",F=b.reactiveElementPolyfillSupport,O=(i,t)=>i,H={toAttribute(i,t){switch(t){case Boolean:i=i?St:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},K=(i,t)=>!$t(i,t),et={attribute:!0,type:String,converter:H,reflect:!1,hasChanged:K};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),b.litPropertyMetadata??(b.litPropertyMetadata=new WeakMap);class E extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=et){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const n=Symbol(),s=this.getPropertyDescriptor(t,n,e);s!==void 0&&vt(this.prototype,t,s)}}static getPropertyDescriptor(t,e,n){const{get:s,set:o}=bt(this.prototype,t)??{get(){return this[e]},set(a){this[e]=a}};return{get(){return s==null?void 0:s.call(this)},set(a){const c=s==null?void 0:s.call(this);o.call(this,a),this.requestUpdate(t,c,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??et}static _$Ei(){if(this.hasOwnProperty(O("elementProperties")))return;const t=xt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(O("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(O("properties"))){const e=this.properties,n=[...wt(e),...At(e)];for(const s of n)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[n,s]of e)this.elementProperties.set(n,s)}this._$Eh=new Map;for(const[e,n]of this.elementProperties){const s=this._$Eu(e,n);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const s of n)e.unshift(X(s))}else t!==void 0&&e.push(X(t));return e}static _$Eu(t,e){const n=e.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const n of e.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return yt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var n;return(n=e.hostConnected)==null?void 0:n.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var n;return(n=e.hostDisconnected)==null?void 0:n.call(e)})}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$EC(t,e){var o;const n=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,n);if(s!==void 0&&n.reflect===!0){const a=(((o=n.converter)==null?void 0:o.toAttribute)!==void 0?n.converter:H).toAttribute(e,n.type);this._$Em=t,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._$Em=null}}_$AK(t,e){var o;const n=this.constructor,s=n._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const a=n.getPropertyOptions(s),c=typeof a.converter=="function"?{fromAttribute:a.converter}:((o=a.converter)==null?void 0:o.fromAttribute)!==void 0?a.converter:H;this._$Em=s,this[s]=c.fromAttribute(e,a.type),this._$Em=null}}requestUpdate(t,e,n){if(t!==void 0){if(n??(n=this.constructor.getPropertyOptions(t)),!(n.hasChanged??K)(this[t],e))return;this.P(t,e,n)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,n){this._$AL.has(t)||this._$AL.set(t,e),n.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,a]of this._$Ep)this[o]=a;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[o,a]of s)a.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],a)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(n=this._$EO)==null||n.forEach(s=>{var o;return(o=s.hostUpdate)==null?void 0:o.call(s)}),this.update(e)):this._$EU()}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(n=>{var s;return(s=n.hostUpdated)==null?void 0:s.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}E.elementStyles=[],E.shadowRootOptions={mode:"open"},E[O("elementProperties")]=new Map,E[O("finalized")]=new Map,F==null||F({ReactiveElement:E}),(b.reactiveElementVersions??(b.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R=globalThis,I=R.trustedTypes,st=I?I.createPolicy("lit-html",{createHTML:i=>i}):void 0,ut="$lit$",v=`lit$${Math.random().toFixed(9).slice(2)}$`,ft="?"+v,Et=`<${ft}>`,x=document,j=()=>x.createComment(""),M=i=>i===null||typeof i!="object"&&typeof i!="function",Y=Array.isArray,Ct=i=>Y(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",q=`[ 	
\f\r]`,T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,it=/-->/g,nt=/>/g,w=RegExp(`>|${q}(?:([^\\s"'>=/]+)(${q}*=${q}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),rt=/'/g,ot=/"/g,pt=/^(?:script|style|textarea|title)$/i,Ut=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),_=Ut(1),S=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),at=new WeakMap,A=x.createTreeWalker(x,129);function gt(i,t){if(!Y(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return st!==void 0?st.createHTML(t):t}const Tt=(i,t)=>{const e=i.length-1,n=[];let s,o=t===2?"<svg>":t===3?"<math>":"",a=T;for(let c=0;c<e;c++){const h=i[c];let u,p,r=-1,l=0;for(;l<h.length&&(a.lastIndex=l,p=a.exec(h),p!==null);)l=a.lastIndex,a===T?p[1]==="!--"?a=it:p[1]!==void 0?a=nt:p[2]!==void 0?(pt.test(p[2])&&(s=RegExp("</"+p[2],"g")),a=w):p[3]!==void 0&&(a=w):a===w?p[0]===">"?(a=s??T,r=-1):p[1]===void 0?r=-2:(r=a.lastIndex-p[2].length,u=p[1],a=p[3]===void 0?w:p[3]==='"'?ot:rt):a===ot||a===rt?a=w:a===it||a===nt?a=T:(a=w,s=void 0);const d=a===w&&i[c+1].startsWith("/>")?" ":"";o+=a===T?h+Et:r>=0?(n.push(u),h.slice(0,r)+ut+h.slice(r)+v+d):h+v+(r===-2?c:d)}return[gt(i,o+(i[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]};class N{constructor({strings:t,_$litType$:e},n){let s;this.parts=[];let o=0,a=0;const c=t.length-1,h=this.parts,[u,p]=Tt(t,e);if(this.el=N.createElement(u,n),A.currentNode=this.el.content,e===2||e===3){const r=this.el.content.firstChild;r.replaceWith(...r.childNodes)}for(;(s=A.nextNode())!==null&&h.length<c;){if(s.nodeType===1){if(s.hasAttributes())for(const r of s.getAttributeNames())if(r.endsWith(ut)){const l=p[a++],d=s.getAttribute(r).split(v),f=/([.?@])?(.*)/.exec(l);h.push({type:1,index:o,name:f[2],strings:d,ctor:f[1]==="."?Ot:f[1]==="?"?Rt:f[1]==="@"?kt:z}),s.removeAttribute(r)}else r.startsWith(v)&&(h.push({type:6,index:o}),s.removeAttribute(r));if(pt.test(s.tagName)){const r=s.textContent.split(v),l=r.length-1;if(l>0){s.textContent=I?I.emptyScript:"";for(let d=0;d<l;d++)s.append(r[d],j()),A.nextNode(),h.push({type:2,index:++o});s.append(r[l],j())}}}else if(s.nodeType===8)if(s.data===ft)h.push({type:2,index:o});else{let r=-1;for(;(r=s.data.indexOf(v,r+1))!==-1;)h.push({type:7,index:o}),r+=v.length-1}o++}}static createElement(t,e){const n=x.createElement("template");return n.innerHTML=t,n}}function C(i,t,e=i,n){var a,c;if(t===S)return t;let s=n!==void 0?(a=e._$Co)==null?void 0:a[n]:e._$Cl;const o=M(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==o&&((c=s==null?void 0:s._$AO)==null||c.call(s,!1),o===void 0?s=void 0:(s=new o(i),s._$AT(i,e,n)),n!==void 0?(e._$Co??(e._$Co=[]))[n]=s:e._$Cl=s),s!==void 0&&(t=C(i,s._$AS(i,t.values),s,n)),t}class Pt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:n}=this._$AD,s=((t==null?void 0:t.creationScope)??x).importNode(e,!0);A.currentNode=s;let o=A.nextNode(),a=0,c=0,h=n[0];for(;h!==void 0;){if(a===h.index){let u;h.type===2?u=new L(o,o.nextSibling,this,t):h.type===1?u=new h.ctor(o,h.name,h.strings,this,t):h.type===6&&(u=new jt(o,this,t)),this._$AV.push(u),h=n[++c]}a!==(h==null?void 0:h.index)&&(o=A.nextNode(),a++)}return A.currentNode=x,s}p(t){let e=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}}class L{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,n,s){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=C(this,t,e),M(t)?t===g||t==null||t===""?(this._$AH!==g&&this._$AR(),this._$AH=g):t!==this._$AH&&t!==S&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Ct(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==g&&M(this._$AH)?this._$AA.nextSibling.data=t:this.T(x.createTextNode(t)),this._$AH=t}$(t){var o;const{values:e,_$litType$:n}=t,s=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=N.createElement(gt(n.h,n.h[0]),this.options)),n);if(((o=this._$AH)==null?void 0:o._$AD)===s)this._$AH.p(e);else{const a=new Pt(s,this),c=a.u(this.options);a.p(e),this.T(c),this._$AH=a}}_$AC(t){let e=at.get(t.strings);return e===void 0&&at.set(t.strings,e=new N(t)),e}k(t){Y(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let n,s=0;for(const o of t)s===e.length?e.push(n=new L(this.O(j()),this.O(j()),this,this.options)):n=e[s],n._$AI(o),s++;s<e.length&&(this._$AR(n&&n._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class z{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,n,s,o){this.type=1,this._$AH=g,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=g}_$AI(t,e=this,n,s){const o=this.strings;let a=!1;if(o===void 0)t=C(this,t,e,0),a=!M(t)||t!==this._$AH&&t!==S,a&&(this._$AH=t);else{const c=t;let h,u;for(t=o[0],h=0;h<o.length-1;h++)u=C(this,c[n+h],e,h),u===S&&(u=this._$AH[h]),a||(a=!M(u)||u!==this._$AH[h]),u===g?t=g:t!==g&&(t+=(u??"")+o[h+1]),this._$AH[h]=u}a&&!s&&this.j(t)}j(t){t===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ot extends z{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===g?void 0:t}}class Rt extends z{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==g)}}class kt extends z{constructor(t,e,n,s,o){super(t,e,n,s,o),this.type=5}_$AI(t,e=this){if((t=C(this,t,e,0)??g)===S)return;const n=this._$AH,s=t===g&&n!==g||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,o=t!==g&&(n===g||s);s&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class jt{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){C(this,t)}}const B=R.litHtmlPolyfillSupport;B==null||B(N,L),(R.litHtmlVersions??(R.litHtmlVersions=[])).push("3.2.1");const Mt=(i,t,e)=>{const n=(e==null?void 0:e.renderBefore)??t;let s=n._$litPart$;if(s===void 0){const o=(e==null?void 0:e.renderBefore)??null;n._$litPart$=s=new L(t.insertBefore(j(),o),o,void 0,e??{})}return s._$AI(i),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let k=class extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Mt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return S}};var ht;k._$litElement$=!0,k.finalized=!0,(ht=globalThis.litElementHydrateSupport)==null||ht.call(globalThis,{LitElement:k});const V=globalThis.litElementPolyfillSupport;V==null||V({LitElement:k});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nt=i=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(i,t)}):customElements.define(i,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Lt={attribute:!0,type:String,converter:H,reflect:!1,hasChanged:K},Dt=(i=Lt,t,e)=>{const{kind:n,metadata:s}=e;let o=globalThis.litPropertyMetadata.get(s);if(o===void 0&&globalThis.litPropertyMetadata.set(s,o=new Map),o.set(e.name,i),n==="accessor"){const{name:a}=e;return{set(c){const h=t.get.call(this);t.set.call(this,c),this.requestUpdate(a,h,i)},init(c){return c!==void 0&&this.P(a,void 0,i),c}}}if(n==="setter"){const{name:a}=e;return function(c){const h=this[a];t.call(this,c),this.requestUpdate(a,h,i)}}throw Error("Unsupported decorator location: "+n)};function Z(i){return(t,e)=>typeof e=="object"?Dt(i,t,e):((n,s,o)=>{const a=s.hasOwnProperty(o);return s.constructor.createProperty(o,a?{...n,wrapped:!0}:n),a?Object.getOwnPropertyDescriptor(s,o):void 0})(i,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function U(i){return Z({...i,state:!0,attribute:!1})}(()=>{const i=()=>{const n=new Error("not implemented");return n.code="ENOSYS",n};if(!globalThis.fs){let n="";globalThis.fs={constants:{O_WRONLY:-1,O_RDWR:-1,O_CREAT:-1,O_TRUNC:-1,O_APPEND:-1,O_EXCL:-1},writeSync(s,o){n+=e.decode(o);const a=n.lastIndexOf(`
`);return a!=-1&&(console.log(n.substring(0,a)),n=n.substring(a+1)),o.length},write(s,o,a,c,h,u){if(a!==0||c!==o.length||h!==null){u(i());return}const p=this.writeSync(s,o);u(null,p)},chmod(s,o,a){a(i())},chown(s,o,a,c){c(i())},close(s,o){o(i())},fchmod(s,o,a){a(i())},fchown(s,o,a,c){c(i())},fstat(s,o){o(i())},fsync(s,o){o(null)},ftruncate(s,o,a){a(i())},lchown(s,o,a,c){c(i())},link(s,o,a){a(i())},lstat(s,o){o(i())},mkdir(s,o,a){a(i())},open(s,o,a,c){c(i())},read(s,o,a,c,h,u){u(i())},readdir(s,o){o(i())},readlink(s,o){o(i())},rename(s,o,a){a(i())},rmdir(s,o){o(i())},stat(s,o){o(i())},symlink(s,o,a){a(i())},truncate(s,o,a){a(i())},unlink(s,o){o(i())},utimes(s,o,a,c){c(i())}}}if(globalThis.process||(globalThis.process={getuid(){return-1},getgid(){return-1},geteuid(){return-1},getegid(){return-1},getgroups(){throw i()},pid:-1,ppid:-1,umask(){throw i()},cwd(){throw i()},chdir(){throw i()}}),!globalThis.crypto)throw new Error("globalThis.crypto is not available, polyfill required (crypto.getRandomValues only)");if(!globalThis.performance)throw new Error("globalThis.performance is not available, polyfill required (performance.now only)");if(!globalThis.TextEncoder)throw new Error("globalThis.TextEncoder is not available, polyfill required");if(!globalThis.TextDecoder)throw new Error("globalThis.TextDecoder is not available, polyfill required");const t=new TextEncoder("utf-8"),e=new TextDecoder("utf-8");globalThis.Go=class{constructor(){this.argv=["js"],this.env={},this.exit=r=>{r!==0&&console.warn("exit code:",r)},this._exitPromise=new Promise(r=>{this._resolveExitPromise=r}),this._pendingEvent=null,this._scheduledTimeouts=new Map,this._nextCallbackTimeoutID=1;const n=(r,l)=>{this.mem.setUint32(r+0,l,!0),this.mem.setUint32(r+4,Math.floor(l/4294967296),!0)},s=r=>{const l=this.mem.getUint32(r+0,!0),d=this.mem.getInt32(r+4,!0);return l+d*4294967296},o=r=>{const l=this.mem.getFloat64(r,!0);if(l===0)return;if(!isNaN(l))return l;const d=this.mem.getUint32(r,!0);return this._values[d]},a=(r,l)=>{if(typeof l=="number"&&l!==0){if(isNaN(l)){this.mem.setUint32(r+4,2146959360,!0),this.mem.setUint32(r,0,!0);return}this.mem.setFloat64(r,l,!0);return}if(l===void 0){this.mem.setFloat64(r,0,!0);return}let f=this._ids.get(l);f===void 0&&(f=this._idPool.pop(),f===void 0&&(f=this._values.length),this._values[f]=l,this._goRefCounts[f]=0,this._ids.set(l,f)),this._goRefCounts[f]++;let m=0;switch(typeof l){case"object":l!==null&&(m=1);break;case"string":m=2;break;case"symbol":m=3;break;case"function":m=4;break}this.mem.setUint32(r+4,2146959360|m,!0),this.mem.setUint32(r,f,!0)},c=r=>{const l=s(r+0),d=s(r+8);return new Uint8Array(this._inst.exports.mem.buffer,l,d)},h=r=>{const l=s(r+0),d=s(r+8),f=new Array(d);for(let m=0;m<d;m++)f[m]=o(l+m*8);return f},u=r=>{const l=s(r+0),d=s(r+8);return e.decode(new DataView(this._inst.exports.mem.buffer,l,d))},p=Date.now()-performance.now();this.importObject={_gotest:{add:(r,l)=>r+l},gojs:{"runtime.wasmExit":r=>{r>>>=0;const l=this.mem.getInt32(r+8,!0);this.exited=!0,delete this._inst,delete this._values,delete this._goRefCounts,delete this._ids,delete this._idPool,this.exit(l)},"runtime.wasmWrite":r=>{r>>>=0;const l=s(r+8),d=s(r+16),f=this.mem.getInt32(r+24,!0);fs.writeSync(l,new Uint8Array(this._inst.exports.mem.buffer,d,f))},"runtime.resetMemoryDataView":r=>{this.mem=new DataView(this._inst.exports.mem.buffer)},"runtime.nanotime1":r=>{r>>>=0,n(r+8,(p+performance.now())*1e6)},"runtime.walltime":r=>{r>>>=0;const l=new Date().getTime();n(r+8,l/1e3),this.mem.setInt32(r+16,l%1e3*1e6,!0)},"runtime.scheduleTimeoutEvent":r=>{r>>>=0;const l=this._nextCallbackTimeoutID;this._nextCallbackTimeoutID++,this._scheduledTimeouts.set(l,setTimeout(()=>{for(this._resume();this._scheduledTimeouts.has(l);)console.warn("scheduleTimeoutEvent: missed timeout event"),this._resume()},s(r+8))),this.mem.setInt32(r+16,l,!0)},"runtime.clearTimeoutEvent":r=>{r>>>=0;const l=this.mem.getInt32(r+8,!0);clearTimeout(this._scheduledTimeouts.get(l)),this._scheduledTimeouts.delete(l)},"runtime.getRandomData":r=>{r>>>=0,crypto.getRandomValues(c(r+8))},"syscall/js.finalizeRef":r=>{r>>>=0;const l=this.mem.getUint32(r+8,!0);if(this._goRefCounts[l]--,this._goRefCounts[l]===0){const d=this._values[l];this._values[l]=null,this._ids.delete(d),this._idPool.push(l)}},"syscall/js.stringVal":r=>{r>>>=0,a(r+24,u(r+8))},"syscall/js.valueGet":r=>{r>>>=0;const l=Reflect.get(o(r+8),u(r+16));r=this._inst.exports.getsp()>>>0,a(r+32,l)},"syscall/js.valueSet":r=>{r>>>=0,Reflect.set(o(r+8),u(r+16),o(r+32))},"syscall/js.valueDelete":r=>{r>>>=0,Reflect.deleteProperty(o(r+8),u(r+16))},"syscall/js.valueIndex":r=>{r>>>=0,a(r+24,Reflect.get(o(r+8),s(r+16)))},"syscall/js.valueSetIndex":r=>{r>>>=0,Reflect.set(o(r+8),s(r+16),o(r+24))},"syscall/js.valueCall":r=>{r>>>=0;try{const l=o(r+8),d=Reflect.get(l,u(r+16)),f=h(r+32),m=Reflect.apply(d,l,f);r=this._inst.exports.getsp()>>>0,a(r+56,m),this.mem.setUint8(r+64,1)}catch(l){r=this._inst.exports.getsp()>>>0,a(r+56,l),this.mem.setUint8(r+64,0)}},"syscall/js.valueInvoke":r=>{r>>>=0;try{const l=o(r+8),d=h(r+16),f=Reflect.apply(l,void 0,d);r=this._inst.exports.getsp()>>>0,a(r+40,f),this.mem.setUint8(r+48,1)}catch(l){r=this._inst.exports.getsp()>>>0,a(r+40,l),this.mem.setUint8(r+48,0)}},"syscall/js.valueNew":r=>{r>>>=0;try{const l=o(r+8),d=h(r+16),f=Reflect.construct(l,d);r=this._inst.exports.getsp()>>>0,a(r+40,f),this.mem.setUint8(r+48,1)}catch(l){r=this._inst.exports.getsp()>>>0,a(r+40,l),this.mem.setUint8(r+48,0)}},"syscall/js.valueLength":r=>{r>>>=0,n(r+16,parseInt(o(r+8).length))},"syscall/js.valuePrepareString":r=>{r>>>=0;const l=t.encode(String(o(r+8)));a(r+16,l),n(r+24,l.length)},"syscall/js.valueLoadString":r=>{r>>>=0;const l=o(r+8);c(r+16).set(l)},"syscall/js.valueInstanceOf":r=>{r>>>=0,this.mem.setUint8(r+24,o(r+8)instanceof o(r+16)?1:0)},"syscall/js.copyBytesToGo":r=>{r>>>=0;const l=c(r+8),d=o(r+32);if(!(d instanceof Uint8Array||d instanceof Uint8ClampedArray)){this.mem.setUint8(r+48,0);return}const f=d.subarray(0,l.length);l.set(f),n(r+40,f.length),this.mem.setUint8(r+48,1)},"syscall/js.copyBytesToJS":r=>{r>>>=0;const l=o(r+8),d=c(r+16);if(!(l instanceof Uint8Array||l instanceof Uint8ClampedArray)){this.mem.setUint8(r+48,0);return}const f=d.subarray(0,l.length);l.set(f),n(r+40,f.length),this.mem.setUint8(r+48,1)},debug:r=>{console.log(r)}}}}async run(n){if(!(n instanceof WebAssembly.Instance))throw new Error("Go.run: WebAssembly.Instance expected");this._inst=n,this.mem=new DataView(this._inst.exports.mem.buffer),this._values=[NaN,0,null,!0,!1,globalThis,this],this._goRefCounts=new Array(this._values.length).fill(1/0),this._ids=new Map([[0,1],[null,2],[!0,3],[!1,4],[globalThis,5],[this,6]]),this._idPool=[],this.exited=!1;let s=4096;const o=r=>{const l=s,d=t.encode(r+"\0");return new Uint8Array(this.mem.buffer,s,d.length).set(d),s+=d.length,s%8!==0&&(s+=8-s%8),l},a=this.argv.length,c=[];this.argv.forEach(r=>{c.push(o(r))}),c.push(0),Object.keys(this.env).sort().forEach(r=>{c.push(o(`${r}=${this.env[r]}`))}),c.push(0);const u=s;if(c.forEach(r=>{this.mem.setUint32(s,r,!0),this.mem.setUint32(s+4,0,!0),s+=8}),s>=12288)throw new Error("total length of command line and environment variables exceeds limit");this._inst.exports.run(a,u),this.exited&&this._resolveExitPromise(),await this._exitPromise}_resume(){if(this.exited)throw new Error("Go program has already exited");this._inst.exports.resume(),this.exited&&this._resolveExitPromise()}_makeFuncWrapper(n){const s=this;return function(){const o={id:n,this:this,args:arguments};return s._pendingEvent=o,s._resume(),o.result}}}})();const Ht=async(i={},t)=>{let e;if(t.startsWith("data:")){const n=t.replace(/^data:.*?base64,/,"");let s;if(typeof Buffer=="function"&&typeof Buffer.from=="function")s=Buffer.from(n,"base64");else if(typeof atob=="function"){const o=atob(n);s=new Uint8Array(o.length);for(let a=0;a<o.length;a++)s[a]=o.charCodeAt(a)}else throw new Error("Failed to decode base64-encoded data URL, Buffer and atob are not supported");e=await WebAssembly.instantiate(s,i)}else{const n=await fetch(t),s=n.headers.get("Content-Type")||"";if("instantiateStreaming"in WebAssembly&&s.startsWith("application/wasm"))e=await WebAssembly.instantiateStreaming(n,i);else{const o=await n.arrayBuffer();e=await WebAssembly.instantiate(o,i)}}return e.instance},It=i=>Ht(i,""+new URL("lib-BUzbM0H6.wasm?init",import.meta.url).href);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*W(i,t,e=1){const n=t===void 0?0:i;t??(t=i);for(let s=n;e>0?s<t:t<s;s+=e)yield s}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*P(i,t){if(i!==void 0){let e=0;for(const n of i)yield t(n,e++)}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zt=(i,t,e)=>{for(const n of t)if(n[0]===i)return(0,n[1])();return e==null?void 0:e()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ft={ATTRIBUTE:1},qt=i=>(...t)=>({_$litDirective$:i,values:t});class Bt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,n){this._$Ct=t,this._$AM=e,this._$Ci=n}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const lt=qt(class extends Bt{constructor(i){var t;if(super(i),i.type!==Ft.ATTRIBUTE||i.name!=="class"||((t=i.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(t=>i[t]).join(" ")+" "}update(i,[t]){var n,s;if(this.st===void 0){this.st=new Set,i.strings!==void 0&&(this.nt=new Set(i.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in t)t[o]&&!((n=this.nt)!=null&&n.has(o))&&this.st.add(o);return this.render(t)}const e=i.element.classList;for(const o of this.st)o in t||(e.remove(o),this.st.delete(o));for(const o in t){const a=!!t[o];a===this.st.has(o)||(s=this.nt)!=null&&s.has(o)||(a?(e.add(o),this.st.add(o)):(e.remove(o),this.st.delete(o)))}return S}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ct(i,t,e){return i?t(i):e==null?void 0:e(i)}var Vt=Object.defineProperty,Wt=Object.getOwnPropertyDescriptor,$=(i,t,e,n)=>{for(var s=n>1?void 0:n?Wt(t,e):t,o=i.length-1,a;o>=0;o--)(a=i[o])&&(s=(n?a(t,e,s):a(s))||s);return n&&s&&Vt(t,e,s),s};let y=class extends k{constructor(){super(),this.docsHint="Click on the Vite and Lit logos to learn more",this.randonStr=Math.random().toString(36).substring(7),this.csvLength=0,this.csvColumns=0,this.pageOffset=0,this.pageSize=10,this.showingAside="about",this.localFonts=[],this.config={font_size:0,dpi:0,width:0,title:"",font_source:"server",font:"",template:""};const i=new Go;i.argv.push("--prefix="+this.randonStr),It(i.importObject).then(t=>i.run(t)),window["wasm_ready_"+this.randonStr]=()=>{this.config=this.getConfig(),this.requestUpdate()}}changeConfig(i){i.preventDefault();const t=new FormData(i.target);console.log("formData",t);const e=t.get("font_size");console.log(e);var n=window["set_config_"+this.randonStr];n.call(this,{font_size:e}).then(s=>{this.config=s}),this.requestUpdate()}getConfig(){var i=window["get_config_"+this.randonStr];return i.call(this)}getCsvColumns(){var i=window["get_csv_columns_"+this.randonStr];this.csvColumns=i.call(this)}getData(i,t){var e=window["csv_get_"+this.randonStr];return e.call(this,i,t)}handleExportChange(i,t){t.preventDefault();var e=t.target.value,n=window["set_export_settings_"+this.randonStr];n.call(this,i,e),this.requestUpdate()}get fontServerSources(){var i=window["get_hosted_fonts_"+this.randonStr];return Object.entries(i.call(this)).map(([t,e])=>({name:t,url:e}))}get template(){return window["get_template_"+this.randonStr].call(this)}set template(i){window["set_template_"+this.randonStr].call(this,i),this.requestUpdate()}get preview(){var i=window["get_preview_"+this.randonStr].call(this);if(i.startsWith("error: "))throw new Error(i.replaceAll("error: ",""));return i}get preview_text(){var i=window["get_preview_text_"+this.randonStr].call(this);if(i.startsWith("error: "))throw new Error(i.replaceAll("error: ",""));return i}set selectedRow(i){var t=window["set_selected_row_"+this.randonStr];t.call(this,i),this.requestUpdate()}uploadCsv(){const i=document.createElement("input");i.type="file",i.accept=".csv",i.addEventListener("change",t=>{t.preventDefault();const e=t.target;if(e.files&&e.files[0]){const n=new FileReader;n.onload=()=>{if(n.result){var s=window["read_csv_"+this.randonStr],o=s.call(this,new Uint8Array(n.result));this.csvLength=o,this.getCsvColumns(),this.requestUpdate()}},n.readAsArrayBuffer(e.files[0]),this.requestUpdate()}document.body.removeChild(i)}),i.click()}async handleFontSourceChange(){var t;var i=(t=this.shadowRoot)==null?void 0:t.querySelector("input[name='font_source']:checked");this.config.font_source=i.value??"server",this.config.font_source==="browser"&&("queryLocalFonts"in window?(await navigator.permissions.query({name:"local-fonts"}).then(e=>{e.state==="granted"?console.log("Local Font Access API is supported"):console.log("Local Font Access API is not supported")}),this.localFonts=await window.queryLocalFonts()):console.log("Local Font Access API is not supported")),this.requestUpdate()}selectRow(i){this.selectedRow=this.pageOffset+i}render(){return _`
      <div class="main">
        <h1>数据预览</h1>
        <div class="data-table">
          ${ct(this.csvLength>0,()=>_`
              <p>CSV文件长度: ${this.csvLength}</p>
              <div class="data-table-content">
                <table>
                  <thead>
                    <tr>
                      ${P(W(this.csvColumns),i=>_`<th>列${i+1}</th>`)}
                    </tr>
                  </thead>
                  <tbody>
                    ${P(W(this.pageSize),i=>_`
                        <tr @click=${this.selectRow.bind(this,i)}>
                          ${P(W(this.csvColumns),t=>{var e=this.getData(i+this.pageOffset*this.pageSize,t);return _`<td>${e}</td>`})}
                        </tr>
                      `)}
                  </tbody>
                </table>
              </div>
            `,()=>_` <p>请在配置页上传CSV文件</p> `)}
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
            class=${lt({active:this.showingAside==="about"})}
          >
            功能介绍
          </button>
          <button
            @click=${()=>this.showingAside="config"}
            class=${lt({active:this.showingAside==="config"})}
          >
            参数配置
          </button>
        </div>
        <div class="aside-content">
          ${zt(this.showingAside,[["about",()=>_`
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
              `],["config",()=>_` <div>
                  <button id="csv_updater" @click=${this.uploadCsv.bind(this)}>
                    选择CSV文件
                  </button>
                  <div><label for="template">模板</label>
                  <input
                    type="text"
                    id="template"
                    name="template"
                    value=${this.template}
                    @change=${i=>this.template=i.target.value}
                  /></div>
                  ${ct(this.preview,()=>_`<div class="preview">
                      <h2>预览</h2>
                      <img src="${this.preview}" alt="Preview" />
                      <span>对应内容：${this.preview_text}</span>
                    </div>`)}
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
                          ?checked=${this.config.font_source==="browser"}
                        />浏览器字体文件</label
                      >
                      <select
                        id="font_server_source"
                        ?hidden=${this.config.font_source!=="browser"}
                        @change=${this.handleExportChange.bind(this,"font")}
                      >
                        ${P(this.localFonts,(i,t)=>_`<option value="${t}">
                              ${i.fullName}
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
                        ${P(this.fontServerSources,i=>_`<option value="${i.url}">
                              ${i.name}
                            </option>`)}
                      </select>
                    </div>
                  </div>
                  <button type="submit">提交</button>
                </form>`]])}
        </div>
      </div>
    `}};y.styles=_t`
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
  `;$([Z()],y.prototype,"docsHint",2);$([U()],y.prototype,"csvLength",2);$([U()],y.prototype,"csvColumns",2);$([U()],y.prototype,"pageOffset",2);$([U()],y.prototype,"pageSize",2);$([U()],y.prototype,"showingAside",2);$([U()],y.prototype,"localFonts",2);$([Z({type:Object})],y.prototype,"config",2);y=$([Nt("qrcode-generator")],y);
