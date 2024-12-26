function S0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function C0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var xu={exports:{}},ko={},wu={exports:{}},I={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jr=Symbol.for("react.element"),E0=Symbol.for("react.portal"),P0=Symbol.for("react.fragment"),N0=Symbol.for("react.strict_mode"),_0=Symbol.for("react.profiler"),T0=Symbol.for("react.provider"),z0=Symbol.for("react.context"),R0=Symbol.for("react.forward_ref"),M0=Symbol.for("react.suspense"),L0=Symbol.for("react.memo"),I0=Symbol.for("react.lazy"),Ds=Symbol.iterator;function b0(e){return e===null||typeof e!="object"?null:(e=Ds&&e[Ds]||e["@@iterator"],typeof e=="function"?e:null)}var ku={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ju=Object.assign,Su={};function tr(e,t,n){this.props=e,this.context=t,this.refs=Su,this.updater=n||ku}tr.prototype.isReactComponent={};tr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};tr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Cu(){}Cu.prototype=tr.prototype;function $a(e,t,n){this.props=e,this.context=t,this.refs=Su,this.updater=n||ku}var Da=$a.prototype=new Cu;Da.constructor=$a;ju(Da,tr.prototype);Da.isPureReactComponent=!0;var Fs=Array.isArray,Eu=Object.prototype.hasOwnProperty,Fa={current:null},Pu={key:!0,ref:!0,__self:!0,__source:!0};function Nu(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)Eu.call(t,r)&&!Pu.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var c=Array(s),u=0;u<s;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Jr,type:e,key:o,ref:l,props:i,_owner:Fa.current}}function O0(e,t){return{$$typeof:Jr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Aa(e){return typeof e=="object"&&e!==null&&e.$$typeof===Jr}function $0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var As=/\/+/g;function Zo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?$0(""+e.key):t.toString(36)}function Ei(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Jr:case E0:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+Zo(l,0):r,Fs(i)?(n="",e!=null&&(n=e.replace(As,"$&/")+"/"),Ei(i,t,n,"",function(u){return u})):i!=null&&(Aa(i)&&(i=O0(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(As,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",Fs(e))for(var s=0;s<e.length;s++){o=e[s];var c=r+Zo(o,s);l+=Ei(o,t,n,c,i)}else if(c=b0(e),typeof c=="function")for(e=c.call(e),s=0;!(o=e.next()).done;)o=o.value,c=r+Zo(o,s++),l+=Ei(o,t,n,c,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function ai(e,t,n){if(e==null)return e;var r=[],i=0;return Ei(e,r,"","",function(o){return t.call(n,o,i++)}),r}function D0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var we={current:null},Pi={transition:null},F0={ReactCurrentDispatcher:we,ReactCurrentBatchConfig:Pi,ReactCurrentOwner:Fa};I.Children={map:ai,forEach:function(e,t,n){ai(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ai(e,function(){t++}),t},toArray:function(e){return ai(e,function(t){return t})||[]},only:function(e){if(!Aa(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};I.Component=tr;I.Fragment=P0;I.Profiler=_0;I.PureComponent=$a;I.StrictMode=N0;I.Suspense=M0;I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F0;I.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ju({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=Fa.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)Eu.call(t,c)&&!Pu.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&s!==void 0?s[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){s=Array(c);for(var u=0;u<c;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:Jr,type:e.type,key:i,ref:o,props:r,_owner:l}};I.createContext=function(e){return e={$$typeof:z0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:T0,_context:e},e.Consumer=e};I.createElement=Nu;I.createFactory=function(e){var t=Nu.bind(null,e);return t.type=e,t};I.createRef=function(){return{current:null}};I.forwardRef=function(e){return{$$typeof:R0,render:e}};I.isValidElement=Aa;I.lazy=function(e){return{$$typeof:I0,_payload:{_status:-1,_result:e},_init:D0}};I.memo=function(e,t){return{$$typeof:L0,type:e,compare:t===void 0?null:t}};I.startTransition=function(e){var t=Pi.transition;Pi.transition={};try{e()}finally{Pi.transition=t}};I.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};I.useCallback=function(e,t){return we.current.useCallback(e,t)};I.useContext=function(e){return we.current.useContext(e)};I.useDebugValue=function(){};I.useDeferredValue=function(e){return we.current.useDeferredValue(e)};I.useEffect=function(e,t){return we.current.useEffect(e,t)};I.useId=function(){return we.current.useId()};I.useImperativeHandle=function(e,t,n){return we.current.useImperativeHandle(e,t,n)};I.useInsertionEffect=function(e,t){return we.current.useInsertionEffect(e,t)};I.useLayoutEffect=function(e,t){return we.current.useLayoutEffect(e,t)};I.useMemo=function(e,t){return we.current.useMemo(e,t)};I.useReducer=function(e,t,n){return we.current.useReducer(e,t,n)};I.useRef=function(e){return we.current.useRef(e)};I.useState=function(e){return we.current.useState(e)};I.useSyncExternalStore=function(e,t,n){return we.current.useSyncExternalStore(e,t,n)};I.useTransition=function(){return we.current.useTransition()};I.version="18.2.0";wu.exports=I;var E=wu.exports;const H=C0(E),A0=S0({__proto__:null,default:H},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B0=E,U0=Symbol.for("react.element"),H0=Symbol.for("react.fragment"),V0=Object.prototype.hasOwnProperty,W0=B0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Z0={key:!0,ref:!0,__self:!0,__source:!0};function _u(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)V0.call(t,r)&&!Z0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:U0,type:e,key:o,ref:l,props:i,_owner:W0.current}}ko.Fragment=H0;ko.jsx=_u;ko.jsxs=_u;xu.exports=ko;var a=xu.exports,Nl={},Tu={exports:{}},Le={},zu={exports:{}},Ru={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,z){var R=N.length;N.push(z);e:for(;0<R;){var W=R-1>>>1,Y=N[W];if(0<i(Y,z))N[W]=z,N[R]=Y,R=W;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var z=N[0],R=N.pop();if(R!==z){N[0]=R;e:for(var W=0,Y=N.length,ct=Y>>>1;W<ct;){var Ne=2*(W+1)-1,St=N[Ne],_e=Ne+1,be=N[_e];if(0>i(St,R))_e<Y&&0>i(be,St)?(N[W]=be,N[_e]=R,W=_e):(N[W]=St,N[Ne]=R,W=Ne);else if(_e<Y&&0>i(be,R))N[W]=be,N[_e]=R,W=_e;else break e}}return z}function i(N,z){var R=N.sortIndex-z.sortIndex;return R!==0?R:N.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var c=[],u=[],f=1,h=null,g=3,v=!1,y=!1,w=!1,P=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(N){for(var z=n(u);z!==null;){if(z.callback===null)r(u);else if(z.startTime<=N)r(u),z.sortIndex=z.expirationTime,t(c,z);else break;z=n(u)}}function x(N){if(w=!1,m(N),!y)if(n(c)!==null)y=!0,st(k);else{var z=n(u);z!==null&&ve(x,z.startTime-N)}}function k(N,z){y=!1,w&&(w=!1,p(T),T=-1),v=!0;var R=g;try{for(m(z),h=n(c);h!==null&&(!(h.expirationTime>z)||N&&!ge());){var W=h.callback;if(typeof W=="function"){h.callback=null,g=h.priorityLevel;var Y=W(h.expirationTime<=z);z=e.unstable_now(),typeof Y=="function"?h.callback=Y:h===n(c)&&r(c),m(z)}else r(c);h=n(c)}if(h!==null)var ct=!0;else{var Ne=n(u);Ne!==null&&ve(x,Ne.startTime-z),ct=!1}return ct}finally{h=null,g=R,v=!1}}var j=!1,S=null,T=-1,F=5,L=-1;function ge(){return!(e.unstable_now()-L<F)}function lt(){if(S!==null){var N=e.unstable_now();L=N;var z=!0;try{z=S(!0,N)}finally{z?at():(j=!1,S=null)}}else j=!1}var at;if(typeof d=="function")at=function(){d(lt)};else if(typeof MessageChannel<"u"){var xn=new MessageChannel,Ve=xn.port2;xn.port1.onmessage=lt,at=function(){Ve.postMessage(null)}}else at=function(){P(lt,0)};function st(N){S=N,j||(j=!0,at())}function ve(N,z){T=P(function(){N(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,st(k))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(N){switch(g){case 1:case 2:case 3:var z=3;break;default:z=g}var R=g;g=z;try{return N()}finally{g=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,z){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var R=g;g=N;try{return z()}finally{g=R}},e.unstable_scheduleCallback=function(N,z,R){var W=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?W+R:W):R=W,N){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=R+Y,N={id:f++,callback:z,priorityLevel:N,startTime:R,expirationTime:Y,sortIndex:-1},R>W?(N.sortIndex=R,t(u,N),n(c)===null&&N===n(u)&&(w?(p(T),T=-1):w=!0,ve(x,R-W))):(N.sortIndex=Y,t(c,N),y||v||(y=!0,st(k))),N},e.unstable_shouldYield=ge,e.unstable_wrapCallback=function(N){var z=g;return function(){var R=g;g=z;try{return N.apply(this,arguments)}finally{g=R}}}})(Ru);zu.exports=Ru;var Q0=zu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mu=E,Me=Q0;function C(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Lu=new Set,zr={};function hn(e,t){Hn(e,t),Hn(e+"Capture",t)}function Hn(e,t){for(zr[e]=t,e=0;e<t.length;e++)Lu.add(t[e])}var yt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_l=Object.prototype.hasOwnProperty,X0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Bs={},Us={};function K0(e){return _l.call(Us,e)?!0:_l.call(Bs,e)?!1:X0.test(e)?Us[e]=!0:(Bs[e]=!0,!1)}function Y0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function G0(e,t,n,r){if(t===null||typeof t>"u"||Y0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ke(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var de={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){de[e]=new ke(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];de[t]=new ke(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){de[e]=new ke(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){de[e]=new ke(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){de[e]=new ke(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){de[e]=new ke(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){de[e]=new ke(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){de[e]=new ke(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){de[e]=new ke(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ba=/[\-:]([a-z])/g;function Ua(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ba,Ua);de[t]=new ke(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ba,Ua);de[t]=new ke(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ba,Ua);de[t]=new ke(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){de[e]=new ke(e,1,!1,e.toLowerCase(),null,!1,!1)});de.xlinkHref=new ke("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){de[e]=new ke(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ha(e,t,n,r){var i=de.hasOwnProperty(t)?de[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(G0(t,n,i,r)&&(n=null),r||i===null?K0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var jt=Mu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,si=Symbol.for("react.element"),Sn=Symbol.for("react.portal"),Cn=Symbol.for("react.fragment"),Va=Symbol.for("react.strict_mode"),Tl=Symbol.for("react.profiler"),Iu=Symbol.for("react.provider"),bu=Symbol.for("react.context"),Wa=Symbol.for("react.forward_ref"),zl=Symbol.for("react.suspense"),Rl=Symbol.for("react.suspense_list"),Za=Symbol.for("react.memo"),_t=Symbol.for("react.lazy"),Ou=Symbol.for("react.offscreen"),Hs=Symbol.iterator;function lr(e){return e===null||typeof e!="object"?null:(e=Hs&&e[Hs]||e["@@iterator"],typeof e=="function"?e:null)}var K=Object.assign,Qo;function mr(e){if(Qo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Qo=t&&t[1]||""}return`
`+Qo+e}var Xo=!1;function Ko(e,t){if(!e||Xo)return"";Xo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,s=o.length-1;1<=l&&0<=s&&i[l]!==o[s];)s--;for(;1<=l&&0<=s;l--,s--)if(i[l]!==o[s]){if(l!==1||s!==1)do if(l--,s--,0>s||i[l]!==o[s]){var c=`
`+i[l].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=l&&0<=s);break}}}finally{Xo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?mr(e):""}function J0(e){switch(e.tag){case 5:return mr(e.type);case 16:return mr("Lazy");case 13:return mr("Suspense");case 19:return mr("SuspenseList");case 0:case 2:case 15:return e=Ko(e.type,!1),e;case 11:return e=Ko(e.type.render,!1),e;case 1:return e=Ko(e.type,!0),e;default:return""}}function Ml(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Cn:return"Fragment";case Sn:return"Portal";case Tl:return"Profiler";case Va:return"StrictMode";case zl:return"Suspense";case Rl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case bu:return(e.displayName||"Context")+".Consumer";case Iu:return(e._context.displayName||"Context")+".Provider";case Wa:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Za:return t=e.displayName||null,t!==null?t:Ml(e.type)||"Memo";case _t:t=e._payload,e=e._init;try{return Ml(e(t))}catch{}}return null}function q0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ml(t);case 8:return t===Va?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Wt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function $u(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ef(e){var t=$u(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ci(e){e._valueTracker||(e._valueTracker=ef(e))}function Du(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=$u(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ui(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ll(e,t){var n=t.checked;return K({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Vs(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Wt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Fu(e,t){t=t.checked,t!=null&&Ha(e,"checked",t,!1)}function Il(e,t){Fu(e,t);var n=Wt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?bl(e,t.type,n):t.hasOwnProperty("defaultValue")&&bl(e,t.type,Wt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ws(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function bl(e,t,n){(t!=="number"||Ui(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var gr=Array.isArray;function $n(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Wt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ol(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(C(91));return K({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Zs(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(C(92));if(gr(n)){if(1<n.length)throw Error(C(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Wt(n)}}function Au(e,t){var n=Wt(t.value),r=Wt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Qs(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Bu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $l(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Bu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ui,Uu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ui=ui||document.createElement("div"),ui.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ui.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Rr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var wr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},tf=["Webkit","ms","Moz","O"];Object.keys(wr).forEach(function(e){tf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),wr[t]=wr[e]})});function Hu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||wr.hasOwnProperty(e)&&wr[e]?(""+t).trim():t+"px"}function Vu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Hu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var nf=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Dl(e,t){if(t){if(nf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(C(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(C(61))}if(t.style!=null&&typeof t.style!="object")throw Error(C(62))}}function Fl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Al=null;function Qa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Bl=null,Dn=null,Fn=null;function Xs(e){if(e=ti(e)){if(typeof Bl!="function")throw Error(C(280));var t=e.stateNode;t&&(t=Po(t),Bl(e.stateNode,e.type,t))}}function Wu(e){Dn?Fn?Fn.push(e):Fn=[e]:Dn=e}function Zu(){if(Dn){var e=Dn,t=Fn;if(Fn=Dn=null,Xs(e),t)for(e=0;e<t.length;e++)Xs(t[e])}}function Qu(e,t){return e(t)}function Xu(){}var Yo=!1;function Ku(e,t,n){if(Yo)return e(t,n);Yo=!0;try{return Qu(e,t,n)}finally{Yo=!1,(Dn!==null||Fn!==null)&&(Xu(),Zu())}}function Mr(e,t){var n=e.stateNode;if(n===null)return null;var r=Po(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(C(231,t,typeof n));return n}var Ul=!1;if(yt)try{var ar={};Object.defineProperty(ar,"passive",{get:function(){Ul=!0}}),window.addEventListener("test",ar,ar),window.removeEventListener("test",ar,ar)}catch{Ul=!1}function rf(e,t,n,r,i,o,l,s,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var kr=!1,Hi=null,Vi=!1,Hl=null,of={onError:function(e){kr=!0,Hi=e}};function lf(e,t,n,r,i,o,l,s,c){kr=!1,Hi=null,rf.apply(of,arguments)}function af(e,t,n,r,i,o,l,s,c){if(lf.apply(this,arguments),kr){if(kr){var u=Hi;kr=!1,Hi=null}else throw Error(C(198));Vi||(Vi=!0,Hl=u)}}function mn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Yu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ks(e){if(mn(e)!==e)throw Error(C(188))}function sf(e){var t=e.alternate;if(!t){if(t=mn(e),t===null)throw Error(C(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Ks(i),e;if(o===r)return Ks(i),t;o=o.sibling}throw Error(C(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l){for(s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?e:t}function Gu(e){return e=sf(e),e!==null?Ju(e):null}function Ju(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ju(e);if(t!==null)return t;e=e.sibling}return null}var qu=Me.unstable_scheduleCallback,Ys=Me.unstable_cancelCallback,cf=Me.unstable_shouldYield,uf=Me.unstable_requestPaint,q=Me.unstable_now,df=Me.unstable_getCurrentPriorityLevel,Xa=Me.unstable_ImmediatePriority,e1=Me.unstable_UserBlockingPriority,Wi=Me.unstable_NormalPriority,ff=Me.unstable_LowPriority,t1=Me.unstable_IdlePriority,jo=null,it=null;function pf(e){if(it&&typeof it.onCommitFiberRoot=="function")try{it.onCommitFiberRoot(jo,e,void 0,(e.current.flags&128)===128)}catch{}}var Ke=Math.clz32?Math.clz32:gf,hf=Math.log,mf=Math.LN2;function gf(e){return e>>>=0,e===0?32:31-(hf(e)/mf|0)|0}var di=64,fi=4194304;function vr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Zi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~i;s!==0?r=vr(s):(o&=l,o!==0&&(r=vr(o)))}else l=n&~i,l!==0?r=vr(l):o!==0&&(r=vr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ke(t),i=1<<n,r|=e[n],t&=~i;return r}function vf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Ke(o),s=1<<l,c=i[l];c===-1?(!(s&n)||s&r)&&(i[l]=vf(s,t)):c<=t&&(e.expiredLanes|=s),o&=~s}}function Vl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function n1(){var e=di;return di<<=1,!(di&4194240)&&(di=64),e}function Go(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function qr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ke(t),e[t]=n}function xf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ke(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Ka(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ke(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var D=0;function r1(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var i1,Ya,o1,l1,a1,Wl=!1,pi=[],bt=null,Ot=null,$t=null,Lr=new Map,Ir=new Map,zt=[],wf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gs(e,t){switch(e){case"focusin":case"focusout":bt=null;break;case"dragenter":case"dragleave":Ot=null;break;case"mouseover":case"mouseout":$t=null;break;case"pointerover":case"pointerout":Lr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ir.delete(t.pointerId)}}function sr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=ti(t),t!==null&&Ya(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function kf(e,t,n,r,i){switch(t){case"focusin":return bt=sr(bt,e,t,n,r,i),!0;case"dragenter":return Ot=sr(Ot,e,t,n,r,i),!0;case"mouseover":return $t=sr($t,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Lr.set(o,sr(Lr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Ir.set(o,sr(Ir.get(o)||null,e,t,n,r,i)),!0}return!1}function s1(e){var t=qt(e.target);if(t!==null){var n=mn(t);if(n!==null){if(t=n.tag,t===13){if(t=Yu(n),t!==null){e.blockedOn=t,a1(e.priority,function(){o1(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ni(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Zl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Al=r,n.target.dispatchEvent(r),Al=null}else return t=ti(n),t!==null&&Ya(t),e.blockedOn=n,!1;t.shift()}return!0}function Js(e,t,n){Ni(e)&&n.delete(t)}function jf(){Wl=!1,bt!==null&&Ni(bt)&&(bt=null),Ot!==null&&Ni(Ot)&&(Ot=null),$t!==null&&Ni($t)&&($t=null),Lr.forEach(Js),Ir.forEach(Js)}function cr(e,t){e.blockedOn===t&&(e.blockedOn=null,Wl||(Wl=!0,Me.unstable_scheduleCallback(Me.unstable_NormalPriority,jf)))}function br(e){function t(i){return cr(i,e)}if(0<pi.length){cr(pi[0],e);for(var n=1;n<pi.length;n++){var r=pi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(bt!==null&&cr(bt,e),Ot!==null&&cr(Ot,e),$t!==null&&cr($t,e),Lr.forEach(t),Ir.forEach(t),n=0;n<zt.length;n++)r=zt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<zt.length&&(n=zt[0],n.blockedOn===null);)s1(n),n.blockedOn===null&&zt.shift()}var An=jt.ReactCurrentBatchConfig,Qi=!0;function Sf(e,t,n,r){var i=D,o=An.transition;An.transition=null;try{D=1,Ga(e,t,n,r)}finally{D=i,An.transition=o}}function Cf(e,t,n,r){var i=D,o=An.transition;An.transition=null;try{D=4,Ga(e,t,n,r)}finally{D=i,An.transition=o}}function Ga(e,t,n,r){if(Qi){var i=Zl(e,t,n,r);if(i===null)al(e,t,r,Xi,n),Gs(e,r);else if(kf(i,e,t,n,r))r.stopPropagation();else if(Gs(e,r),t&4&&-1<wf.indexOf(e)){for(;i!==null;){var o=ti(i);if(o!==null&&i1(o),o=Zl(e,t,n,r),o===null&&al(e,t,r,Xi,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else al(e,t,r,null,n)}}var Xi=null;function Zl(e,t,n,r){if(Xi=null,e=Qa(r),e=qt(e),e!==null)if(t=mn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Yu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Xi=e,null}function c1(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(df()){case Xa:return 1;case e1:return 4;case Wi:case ff:return 16;case t1:return 536870912;default:return 16}default:return 16}}var Mt=null,Ja=null,_i=null;function u1(){if(_i)return _i;var e,t=Ja,n=t.length,r,i="value"in Mt?Mt.value:Mt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return _i=i.slice(e,1<r?1-r:void 0)}function Ti(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function hi(){return!0}function qs(){return!1}function Ie(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?hi:qs,this.isPropagationStopped=qs,this}return K(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=hi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=hi)},persist:function(){},isPersistent:hi}),t}var nr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qa=Ie(nr),ei=K({},nr,{view:0,detail:0}),Ef=Ie(ei),Jo,qo,ur,So=K({},ei,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:es,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ur&&(ur&&e.type==="mousemove"?(Jo=e.screenX-ur.screenX,qo=e.screenY-ur.screenY):qo=Jo=0,ur=e),Jo)},movementY:function(e){return"movementY"in e?e.movementY:qo}}),ec=Ie(So),Pf=K({},So,{dataTransfer:0}),Nf=Ie(Pf),_f=K({},ei,{relatedTarget:0}),el=Ie(_f),Tf=K({},nr,{animationName:0,elapsedTime:0,pseudoElement:0}),zf=Ie(Tf),Rf=K({},nr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Mf=Ie(Rf),Lf=K({},nr,{data:0}),tc=Ie(Lf),If={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Of={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $f(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Of[e])?!!t[e]:!1}function es(){return $f}var Df=K({},ei,{key:function(e){if(e.key){var t=If[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ti(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?bf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:es,charCode:function(e){return e.type==="keypress"?Ti(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ti(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ff=Ie(Df),Af=K({},So,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),nc=Ie(Af),Bf=K({},ei,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:es}),Uf=Ie(Bf),Hf=K({},nr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vf=Ie(Hf),Wf=K({},So,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Zf=Ie(Wf),Qf=[9,13,27,32],ts=yt&&"CompositionEvent"in window,jr=null;yt&&"documentMode"in document&&(jr=document.documentMode);var Xf=yt&&"TextEvent"in window&&!jr,d1=yt&&(!ts||jr&&8<jr&&11>=jr),rc=String.fromCharCode(32),ic=!1;function f1(e,t){switch(e){case"keyup":return Qf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function p1(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var En=!1;function Kf(e,t){switch(e){case"compositionend":return p1(t);case"keypress":return t.which!==32?null:(ic=!0,rc);case"textInput":return e=t.data,e===rc&&ic?null:e;default:return null}}function Yf(e,t){if(En)return e==="compositionend"||!ts&&f1(e,t)?(e=u1(),_i=Ja=Mt=null,En=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return d1&&t.locale!=="ko"?null:t.data;default:return null}}var Gf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function oc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Gf[e.type]:t==="textarea"}function h1(e,t,n,r){Wu(r),t=Ki(t,"onChange"),0<t.length&&(n=new qa("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Sr=null,Or=null;function Jf(e){E1(e,0)}function Co(e){var t=_n(e);if(Du(t))return e}function qf(e,t){if(e==="change")return t}var m1=!1;if(yt){var tl;if(yt){var nl="oninput"in document;if(!nl){var lc=document.createElement("div");lc.setAttribute("oninput","return;"),nl=typeof lc.oninput=="function"}tl=nl}else tl=!1;m1=tl&&(!document.documentMode||9<document.documentMode)}function ac(){Sr&&(Sr.detachEvent("onpropertychange",g1),Or=Sr=null)}function g1(e){if(e.propertyName==="value"&&Co(Or)){var t=[];h1(t,Or,e,Qa(e)),Ku(Jf,t)}}function e2(e,t,n){e==="focusin"?(ac(),Sr=t,Or=n,Sr.attachEvent("onpropertychange",g1)):e==="focusout"&&ac()}function t2(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Co(Or)}function n2(e,t){if(e==="click")return Co(t)}function r2(e,t){if(e==="input"||e==="change")return Co(t)}function i2(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Je=typeof Object.is=="function"?Object.is:i2;function $r(e,t){if(Je(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!_l.call(t,i)||!Je(e[i],t[i]))return!1}return!0}function sc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cc(e,t){var n=sc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=sc(n)}}function v1(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?v1(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function y1(){for(var e=window,t=Ui();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ui(e.document)}return t}function ns(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function o2(e){var t=y1(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&v1(n.ownerDocument.documentElement,n)){if(r!==null&&ns(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=cc(n,o);var l=cc(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var l2=yt&&"documentMode"in document&&11>=document.documentMode,Pn=null,Ql=null,Cr=null,Xl=!1;function uc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Xl||Pn==null||Pn!==Ui(r)||(r=Pn,"selectionStart"in r&&ns(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Cr&&$r(Cr,r)||(Cr=r,r=Ki(Ql,"onSelect"),0<r.length&&(t=new qa("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Pn)))}function mi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Nn={animationend:mi("Animation","AnimationEnd"),animationiteration:mi("Animation","AnimationIteration"),animationstart:mi("Animation","AnimationStart"),transitionend:mi("Transition","TransitionEnd")},rl={},x1={};yt&&(x1=document.createElement("div").style,"AnimationEvent"in window||(delete Nn.animationend.animation,delete Nn.animationiteration.animation,delete Nn.animationstart.animation),"TransitionEvent"in window||delete Nn.transitionend.transition);function Eo(e){if(rl[e])return rl[e];if(!Nn[e])return e;var t=Nn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in x1)return rl[e]=t[n];return e}var w1=Eo("animationend"),k1=Eo("animationiteration"),j1=Eo("animationstart"),S1=Eo("transitionend"),C1=new Map,dc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qt(e,t){C1.set(e,t),hn(t,[e])}for(var il=0;il<dc.length;il++){var ol=dc[il],a2=ol.toLowerCase(),s2=ol[0].toUpperCase()+ol.slice(1);Qt(a2,"on"+s2)}Qt(w1,"onAnimationEnd");Qt(k1,"onAnimationIteration");Qt(j1,"onAnimationStart");Qt("dblclick","onDoubleClick");Qt("focusin","onFocus");Qt("focusout","onBlur");Qt(S1,"onTransitionEnd");Hn("onMouseEnter",["mouseout","mouseover"]);Hn("onMouseLeave",["mouseout","mouseover"]);Hn("onPointerEnter",["pointerout","pointerover"]);Hn("onPointerLeave",["pointerout","pointerover"]);hn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));hn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));hn("onBeforeInput",["compositionend","keypress","textInput","paste"]);hn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));hn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));hn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),c2=new Set("cancel close invalid load scroll toggle".split(" ").concat(yr));function fc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,af(r,t,void 0,e),e.currentTarget=null}function E1(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],c=s.instance,u=s.currentTarget;if(s=s.listener,c!==o&&i.isPropagationStopped())break e;fc(i,s,u),o=c}else for(l=0;l<r.length;l++){if(s=r[l],c=s.instance,u=s.currentTarget,s=s.listener,c!==o&&i.isPropagationStopped())break e;fc(i,s,u),o=c}}}if(Vi)throw e=Hl,Vi=!1,Hl=null,e}function B(e,t){var n=t[ql];n===void 0&&(n=t[ql]=new Set);var r=e+"__bubble";n.has(r)||(P1(t,e,2,!1),n.add(r))}function ll(e,t,n){var r=0;t&&(r|=4),P1(n,e,r,t)}var gi="_reactListening"+Math.random().toString(36).slice(2);function Dr(e){if(!e[gi]){e[gi]=!0,Lu.forEach(function(n){n!=="selectionchange"&&(c2.has(n)||ll(n,!1,e),ll(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[gi]||(t[gi]=!0,ll("selectionchange",!1,t))}}function P1(e,t,n,r){switch(c1(t)){case 1:var i=Sf;break;case 4:i=Cf;break;default:i=Ga}n=i.bind(null,t,n,e),i=void 0,!Ul||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function al(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var c=l.tag;if((c===3||c===4)&&(c=l.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;l=l.return}for(;s!==null;){if(l=qt(s),l===null)return;if(c=l.tag,c===5||c===6){r=o=l;continue e}s=s.parentNode}}r=r.return}Ku(function(){var u=o,f=Qa(n),h=[];e:{var g=C1.get(e);if(g!==void 0){var v=qa,y=e;switch(e){case"keypress":if(Ti(n)===0)break e;case"keydown":case"keyup":v=Ff;break;case"focusin":y="focus",v=el;break;case"focusout":y="blur",v=el;break;case"beforeblur":case"afterblur":v=el;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=ec;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Nf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Uf;break;case w1:case k1:case j1:v=zf;break;case S1:v=Vf;break;case"scroll":v=Ef;break;case"wheel":v=Zf;break;case"copy":case"cut":case"paste":v=Mf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=nc}var w=(t&4)!==0,P=!w&&e==="scroll",p=w?g!==null?g+"Capture":null:g;w=[];for(var d=u,m;d!==null;){m=d;var x=m.stateNode;if(m.tag===5&&x!==null&&(m=x,p!==null&&(x=Mr(d,p),x!=null&&w.push(Fr(d,x,m)))),P)break;d=d.return}0<w.length&&(g=new v(g,y,null,n,f),h.push({event:g,listeners:w}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",g&&n!==Al&&(y=n.relatedTarget||n.fromElement)&&(qt(y)||y[xt]))break e;if((v||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,v?(y=n.relatedTarget||n.toElement,v=u,y=y?qt(y):null,y!==null&&(P=mn(y),y!==P||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=u),v!==y)){if(w=ec,x="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(w=nc,x="onPointerLeave",p="onPointerEnter",d="pointer"),P=v==null?g:_n(v),m=y==null?g:_n(y),g=new w(x,d+"leave",v,n,f),g.target=P,g.relatedTarget=m,x=null,qt(f)===u&&(w=new w(p,d+"enter",y,n,f),w.target=m,w.relatedTarget=P,x=w),P=x,v&&y)t:{for(w=v,p=y,d=0,m=w;m;m=wn(m))d++;for(m=0,x=p;x;x=wn(x))m++;for(;0<d-m;)w=wn(w),d--;for(;0<m-d;)p=wn(p),m--;for(;d--;){if(w===p||p!==null&&w===p.alternate)break t;w=wn(w),p=wn(p)}w=null}else w=null;v!==null&&pc(h,g,v,w,!1),y!==null&&P!==null&&pc(h,P,y,w,!0)}}e:{if(g=u?_n(u):window,v=g.nodeName&&g.nodeName.toLowerCase(),v==="select"||v==="input"&&g.type==="file")var k=qf;else if(oc(g))if(m1)k=r2;else{k=t2;var j=e2}else(v=g.nodeName)&&v.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(k=n2);if(k&&(k=k(e,u))){h1(h,k,n,f);break e}j&&j(e,g,u),e==="focusout"&&(j=g._wrapperState)&&j.controlled&&g.type==="number"&&bl(g,"number",g.value)}switch(j=u?_n(u):window,e){case"focusin":(oc(j)||j.contentEditable==="true")&&(Pn=j,Ql=u,Cr=null);break;case"focusout":Cr=Ql=Pn=null;break;case"mousedown":Xl=!0;break;case"contextmenu":case"mouseup":case"dragend":Xl=!1,uc(h,n,f);break;case"selectionchange":if(l2)break;case"keydown":case"keyup":uc(h,n,f)}var S;if(ts)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else En?f1(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(d1&&n.locale!=="ko"&&(En||T!=="onCompositionStart"?T==="onCompositionEnd"&&En&&(S=u1()):(Mt=f,Ja="value"in Mt?Mt.value:Mt.textContent,En=!0)),j=Ki(u,T),0<j.length&&(T=new tc(T,e,null,n,f),h.push({event:T,listeners:j}),S?T.data=S:(S=p1(n),S!==null&&(T.data=S)))),(S=Xf?Kf(e,n):Yf(e,n))&&(u=Ki(u,"onBeforeInput"),0<u.length&&(f=new tc("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:u}),f.data=S))}E1(h,t)})}function Fr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ki(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Mr(e,n),o!=null&&r.unshift(Fr(e,o,i)),o=Mr(e,t),o!=null&&r.push(Fr(e,o,i))),e=e.return}return r}function wn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function pc(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var s=n,c=s.alternate,u=s.stateNode;if(c!==null&&c===r)break;s.tag===5&&u!==null&&(s=u,i?(c=Mr(n,o),c!=null&&l.unshift(Fr(n,c,s))):i||(c=Mr(n,o),c!=null&&l.push(Fr(n,c,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var u2=/\r\n?/g,d2=/\u0000|\uFFFD/g;function hc(e){return(typeof e=="string"?e:""+e).replace(u2,`
`).replace(d2,"")}function vi(e,t,n){if(t=hc(t),hc(e)!==t&&n)throw Error(C(425))}function Yi(){}var Kl=null,Yl=null;function Gl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Jl=typeof setTimeout=="function"?setTimeout:void 0,f2=typeof clearTimeout=="function"?clearTimeout:void 0,mc=typeof Promise=="function"?Promise:void 0,p2=typeof queueMicrotask=="function"?queueMicrotask:typeof mc<"u"?function(e){return mc.resolve(null).then(e).catch(h2)}:Jl;function h2(e){setTimeout(function(){throw e})}function sl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),br(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);br(t)}function Dt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function gc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var rr=Math.random().toString(36).slice(2),rt="__reactFiber$"+rr,Ar="__reactProps$"+rr,xt="__reactContainer$"+rr,ql="__reactEvents$"+rr,m2="__reactListeners$"+rr,g2="__reactHandles$"+rr;function qt(e){var t=e[rt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[xt]||n[rt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=gc(e);e!==null;){if(n=e[rt])return n;e=gc(e)}return t}e=n,n=e.parentNode}return null}function ti(e){return e=e[rt]||e[xt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function _n(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function Po(e){return e[Ar]||null}var ea=[],Tn=-1;function Xt(e){return{current:e}}function V(e){0>Tn||(e.current=ea[Tn],ea[Tn]=null,Tn--)}function A(e,t){Tn++,ea[Tn]=e.current,e.current=t}var Zt={},me=Xt(Zt),Ce=Xt(!1),an=Zt;function Vn(e,t){var n=e.type.contextTypes;if(!n)return Zt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ee(e){return e=e.childContextTypes,e!=null}function Gi(){V(Ce),V(me)}function vc(e,t,n){if(me.current!==Zt)throw Error(C(168));A(me,t),A(Ce,n)}function N1(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(C(108,q0(e)||"Unknown",i));return K({},n,r)}function Ji(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Zt,an=me.current,A(me,e),A(Ce,Ce.current),!0}function yc(e,t,n){var r=e.stateNode;if(!r)throw Error(C(169));n?(e=N1(e,t,an),r.__reactInternalMemoizedMergedChildContext=e,V(Ce),V(me),A(me,e)):V(Ce),A(Ce,n)}var pt=null,No=!1,cl=!1;function _1(e){pt===null?pt=[e]:pt.push(e)}function v2(e){No=!0,_1(e)}function Kt(){if(!cl&&pt!==null){cl=!0;var e=0,t=D;try{var n=pt;for(D=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}pt=null,No=!1}catch(i){throw pt!==null&&(pt=pt.slice(e+1)),qu(Xa,Kt),i}finally{D=t,cl=!1}}return null}var zn=[],Rn=0,qi=null,eo=0,$e=[],De=0,sn=null,mt=1,gt="";function Gt(e,t){zn[Rn++]=eo,zn[Rn++]=qi,qi=e,eo=t}function T1(e,t,n){$e[De++]=mt,$e[De++]=gt,$e[De++]=sn,sn=e;var r=mt;e=gt;var i=32-Ke(r)-1;r&=~(1<<i),n+=1;var o=32-Ke(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,mt=1<<32-Ke(t)+i|n<<i|r,gt=o+e}else mt=1<<o|n<<i|r,gt=e}function rs(e){e.return!==null&&(Gt(e,1),T1(e,1,0))}function is(e){for(;e===qi;)qi=zn[--Rn],zn[Rn]=null,eo=zn[--Rn],zn[Rn]=null;for(;e===sn;)sn=$e[--De],$e[De]=null,gt=$e[--De],$e[De]=null,mt=$e[--De],$e[De]=null}var Re=null,ze=null,Z=!1,Xe=null;function z1(e,t){var n=Fe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function xc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Re=e,ze=Dt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Re=e,ze=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=sn!==null?{id:mt,overflow:gt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Fe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Re=e,ze=null,!0):!1;default:return!1}}function ta(e){return(e.mode&1)!==0&&(e.flags&128)===0}function na(e){if(Z){var t=ze;if(t){var n=t;if(!xc(e,t)){if(ta(e))throw Error(C(418));t=Dt(n.nextSibling);var r=Re;t&&xc(e,t)?z1(r,n):(e.flags=e.flags&-4097|2,Z=!1,Re=e)}}else{if(ta(e))throw Error(C(418));e.flags=e.flags&-4097|2,Z=!1,Re=e}}}function wc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Re=e}function yi(e){if(e!==Re)return!1;if(!Z)return wc(e),Z=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Gl(e.type,e.memoizedProps)),t&&(t=ze)){if(ta(e))throw R1(),Error(C(418));for(;t;)z1(e,t),t=Dt(t.nextSibling)}if(wc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ze=Dt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ze=null}}else ze=Re?Dt(e.stateNode.nextSibling):null;return!0}function R1(){for(var e=ze;e;)e=Dt(e.nextSibling)}function Wn(){ze=Re=null,Z=!1}function os(e){Xe===null?Xe=[e]:Xe.push(e)}var y2=jt.ReactCurrentBatchConfig;function Ze(e,t){if(e&&e.defaultProps){t=K({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var to=Xt(null),no=null,Mn=null,ls=null;function as(){ls=Mn=no=null}function ss(e){var t=to.current;V(to),e._currentValue=t}function ra(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Bn(e,t){no=e,ls=Mn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Se=!0),e.firstContext=null)}function Be(e){var t=e._currentValue;if(ls!==e)if(e={context:e,memoizedValue:t,next:null},Mn===null){if(no===null)throw Error(C(308));Mn=e,no.dependencies={lanes:0,firstContext:e}}else Mn=Mn.next=e;return t}var en=null;function cs(e){en===null?en=[e]:en.push(e)}function M1(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,cs(t)):(n.next=i.next,i.next=n),t.interleaved=n,wt(e,r)}function wt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Tt=!1;function us(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function L1(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function vt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ft(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,O&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,wt(e,n)}return i=r.interleaved,i===null?(t.next=t,cs(r)):(t.next=i.next,i.next=t),r.interleaved=t,wt(e,n)}function zi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ka(e,n)}}function kc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ro(e,t,n,r){var i=e.updateQueue;Tt=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,u=c.next;c.next=null,l===null?o=u:l.next=u,l=c;var f=e.alternate;f!==null&&(f=f.updateQueue,s=f.lastBaseUpdate,s!==l&&(s===null?f.firstBaseUpdate=u:s.next=u,f.lastBaseUpdate=c))}if(o!==null){var h=i.baseState;l=0,f=u=c=null,s=o;do{var g=s.lane,v=s.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var y=e,w=s;switch(g=t,v=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){h=y.call(v,h,g);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,g=typeof y=="function"?y.call(v,h,g):y,g==null)break e;h=K({},h,g);break e;case 2:Tt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[s]:g.push(s))}else v={eventTime:v,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},f===null?(u=f=v,c=h):f=f.next=v,l|=g;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;g=s,s=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(1);if(f===null&&(c=h),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);un|=l,e.lanes=l,e.memoizedState=h}}function jc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(C(191,i));i.call(r)}}}var I1=new Mu.Component().refs;function ia(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:K({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var _o={isMounted:function(e){return(e=e._reactInternals)?mn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=xe(),i=Bt(e),o=vt(r,i);o.payload=t,n!=null&&(o.callback=n),t=Ft(e,o,i),t!==null&&(Ye(t,e,i,r),zi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=xe(),i=Bt(e),o=vt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Ft(e,o,i),t!==null&&(Ye(t,e,i,r),zi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=xe(),r=Bt(e),i=vt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Ft(e,i,r),t!==null&&(Ye(t,e,r,n),zi(t,e,r))}};function Sc(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!$r(n,r)||!$r(i,o):!0}function b1(e,t,n){var r=!1,i=Zt,o=t.contextType;return typeof o=="object"&&o!==null?o=Be(o):(i=Ee(t)?an:me.current,r=t.contextTypes,o=(r=r!=null)?Vn(e,i):Zt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=_o,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Cc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&_o.enqueueReplaceState(t,t.state,null)}function oa(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=I1,us(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Be(o):(o=Ee(t)?an:me.current,i.context=Vn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(ia(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&_o.enqueueReplaceState(i,i.state,null),ro(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function dr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var s=i.refs;s===I1&&(s=i.refs={}),l===null?delete s[o]:s[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,e))}return e}function xi(e,t){throw e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ec(e){var t=e._init;return t(e._payload)}function O1(e){function t(p,d){if(e){var m=p.deletions;m===null?(p.deletions=[d],p.flags|=16):m.push(d)}}function n(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function i(p,d){return p=Ut(p,d),p.index=0,p.sibling=null,p}function o(p,d,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<d?(p.flags|=2,d):m):(p.flags|=2,d)):(p.flags|=1048576,d)}function l(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,d,m,x){return d===null||d.tag!==6?(d=gl(m,p.mode,x),d.return=p,d):(d=i(d,m),d.return=p,d)}function c(p,d,m,x){var k=m.type;return k===Cn?f(p,d,m.props.children,x,m.key):d!==null&&(d.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===_t&&Ec(k)===d.type)?(x=i(d,m.props),x.ref=dr(p,d,m),x.return=p,x):(x=Oi(m.type,m.key,m.props,null,p.mode,x),x.ref=dr(p,d,m),x.return=p,x)}function u(p,d,m,x){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=vl(m,p.mode,x),d.return=p,d):(d=i(d,m.children||[]),d.return=p,d)}function f(p,d,m,x,k){return d===null||d.tag!==7?(d=on(m,p.mode,x,k),d.return=p,d):(d=i(d,m),d.return=p,d)}function h(p,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=gl(""+d,p.mode,m),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case si:return m=Oi(d.type,d.key,d.props,null,p.mode,m),m.ref=dr(p,null,d),m.return=p,m;case Sn:return d=vl(d,p.mode,m),d.return=p,d;case _t:var x=d._init;return h(p,x(d._payload),m)}if(gr(d)||lr(d))return d=on(d,p.mode,m,null),d.return=p,d;xi(p,d)}return null}function g(p,d,m,x){var k=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return k!==null?null:s(p,d,""+m,x);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case si:return m.key===k?c(p,d,m,x):null;case Sn:return m.key===k?u(p,d,m,x):null;case _t:return k=m._init,g(p,d,k(m._payload),x)}if(gr(m)||lr(m))return k!==null?null:f(p,d,m,x,null);xi(p,m)}return null}function v(p,d,m,x,k){if(typeof x=="string"&&x!==""||typeof x=="number")return p=p.get(m)||null,s(d,p,""+x,k);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case si:return p=p.get(x.key===null?m:x.key)||null,c(d,p,x,k);case Sn:return p=p.get(x.key===null?m:x.key)||null,u(d,p,x,k);case _t:var j=x._init;return v(p,d,m,j(x._payload),k)}if(gr(x)||lr(x))return p=p.get(m)||null,f(d,p,x,k,null);xi(d,x)}return null}function y(p,d,m,x){for(var k=null,j=null,S=d,T=d=0,F=null;S!==null&&T<m.length;T++){S.index>T?(F=S,S=null):F=S.sibling;var L=g(p,S,m[T],x);if(L===null){S===null&&(S=F);break}e&&S&&L.alternate===null&&t(p,S),d=o(L,d,T),j===null?k=L:j.sibling=L,j=L,S=F}if(T===m.length)return n(p,S),Z&&Gt(p,T),k;if(S===null){for(;T<m.length;T++)S=h(p,m[T],x),S!==null&&(d=o(S,d,T),j===null?k=S:j.sibling=S,j=S);return Z&&Gt(p,T),k}for(S=r(p,S);T<m.length;T++)F=v(S,p,T,m[T],x),F!==null&&(e&&F.alternate!==null&&S.delete(F.key===null?T:F.key),d=o(F,d,T),j===null?k=F:j.sibling=F,j=F);return e&&S.forEach(function(ge){return t(p,ge)}),Z&&Gt(p,T),k}function w(p,d,m,x){var k=lr(m);if(typeof k!="function")throw Error(C(150));if(m=k.call(m),m==null)throw Error(C(151));for(var j=k=null,S=d,T=d=0,F=null,L=m.next();S!==null&&!L.done;T++,L=m.next()){S.index>T?(F=S,S=null):F=S.sibling;var ge=g(p,S,L.value,x);if(ge===null){S===null&&(S=F);break}e&&S&&ge.alternate===null&&t(p,S),d=o(ge,d,T),j===null?k=ge:j.sibling=ge,j=ge,S=F}if(L.done)return n(p,S),Z&&Gt(p,T),k;if(S===null){for(;!L.done;T++,L=m.next())L=h(p,L.value,x),L!==null&&(d=o(L,d,T),j===null?k=L:j.sibling=L,j=L);return Z&&Gt(p,T),k}for(S=r(p,S);!L.done;T++,L=m.next())L=v(S,p,T,L.value,x),L!==null&&(e&&L.alternate!==null&&S.delete(L.key===null?T:L.key),d=o(L,d,T),j===null?k=L:j.sibling=L,j=L);return e&&S.forEach(function(lt){return t(p,lt)}),Z&&Gt(p,T),k}function P(p,d,m,x){if(typeof m=="object"&&m!==null&&m.type===Cn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case si:e:{for(var k=m.key,j=d;j!==null;){if(j.key===k){if(k=m.type,k===Cn){if(j.tag===7){n(p,j.sibling),d=i(j,m.props.children),d.return=p,p=d;break e}}else if(j.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===_t&&Ec(k)===j.type){n(p,j.sibling),d=i(j,m.props),d.ref=dr(p,j,m),d.return=p,p=d;break e}n(p,j);break}else t(p,j);j=j.sibling}m.type===Cn?(d=on(m.props.children,p.mode,x,m.key),d.return=p,p=d):(x=Oi(m.type,m.key,m.props,null,p.mode,x),x.ref=dr(p,d,m),x.return=p,p=x)}return l(p);case Sn:e:{for(j=m.key;d!==null;){if(d.key===j)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){n(p,d.sibling),d=i(d,m.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else t(p,d);d=d.sibling}d=vl(m,p.mode,x),d.return=p,p=d}return l(p);case _t:return j=m._init,P(p,d,j(m._payload),x)}if(gr(m))return y(p,d,m,x);if(lr(m))return w(p,d,m,x);xi(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(n(p,d.sibling),d=i(d,m),d.return=p,p=d):(n(p,d),d=gl(m,p.mode,x),d.return=p,p=d),l(p)):n(p,d)}return P}var Zn=O1(!0),$1=O1(!1),ni={},ot=Xt(ni),Br=Xt(ni),Ur=Xt(ni);function tn(e){if(e===ni)throw Error(C(174));return e}function ds(e,t){switch(A(Ur,t),A(Br,e),A(ot,ni),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:$l(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=$l(t,e)}V(ot),A(ot,t)}function Qn(){V(ot),V(Br),V(Ur)}function D1(e){tn(Ur.current);var t=tn(ot.current),n=$l(t,e.type);t!==n&&(A(Br,e),A(ot,n))}function fs(e){Br.current===e&&(V(ot),V(Br))}var Q=Xt(0);function io(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ul=[];function ps(){for(var e=0;e<ul.length;e++)ul[e]._workInProgressVersionPrimary=null;ul.length=0}var Ri=jt.ReactCurrentDispatcher,dl=jt.ReactCurrentBatchConfig,cn=0,X=null,ne=null,ie=null,oo=!1,Er=!1,Hr=0,x2=0;function fe(){throw Error(C(321))}function hs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Je(e[n],t[n]))return!1;return!0}function ms(e,t,n,r,i,o){if(cn=o,X=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ri.current=e===null||e.memoizedState===null?S2:C2,e=n(r,i),Er){o=0;do{if(Er=!1,Hr=0,25<=o)throw Error(C(301));o+=1,ie=ne=null,t.updateQueue=null,Ri.current=E2,e=n(r,i)}while(Er)}if(Ri.current=lo,t=ne!==null&&ne.next!==null,cn=0,ie=ne=X=null,oo=!1,t)throw Error(C(300));return e}function gs(){var e=Hr!==0;return Hr=0,e}function tt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ie===null?X.memoizedState=ie=e:ie=ie.next=e,ie}function Ue(){if(ne===null){var e=X.alternate;e=e!==null?e.memoizedState:null}else e=ne.next;var t=ie===null?X.memoizedState:ie.next;if(t!==null)ie=t,ne=e;else{if(e===null)throw Error(C(310));ne=e,e={memoizedState:ne.memoizedState,baseState:ne.baseState,baseQueue:ne.baseQueue,queue:ne.queue,next:null},ie===null?X.memoizedState=ie=e:ie=ie.next=e}return ie}function Vr(e,t){return typeof t=="function"?t(e):t}function fl(e){var t=Ue(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=ne,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=l=null,c=null,u=o;do{var f=u.lane;if((cn&f)===f)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(s=c=h,l=r):c=c.next=h,X.lanes|=f,un|=f}u=u.next}while(u!==null&&u!==o);c===null?l=r:c.next=s,Je(r,t.memoizedState)||(Se=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,X.lanes|=o,un|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function pl(e){var t=Ue(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);Je(o,t.memoizedState)||(Se=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function F1(){}function A1(e,t){var n=X,r=Ue(),i=t(),o=!Je(r.memoizedState,i);if(o&&(r.memoizedState=i,Se=!0),r=r.queue,vs(H1.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ie!==null&&ie.memoizedState.tag&1){if(n.flags|=2048,Wr(9,U1.bind(null,n,r,i,t),void 0,null),ae===null)throw Error(C(349));cn&30||B1(n,t,i)}return i}function B1(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function U1(e,t,n,r){t.value=n,t.getSnapshot=r,V1(t)&&W1(e)}function H1(e,t,n){return n(function(){V1(t)&&W1(e)})}function V1(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Je(e,n)}catch{return!0}}function W1(e){var t=wt(e,1);t!==null&&Ye(t,e,1,-1)}function Pc(e){var t=tt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vr,lastRenderedState:e},t.queue=e,e=e.dispatch=j2.bind(null,X,e),[t.memoizedState,e]}function Wr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Z1(){return Ue().memoizedState}function Mi(e,t,n,r){var i=tt();X.flags|=e,i.memoizedState=Wr(1|t,n,void 0,r===void 0?null:r)}function To(e,t,n,r){var i=Ue();r=r===void 0?null:r;var o=void 0;if(ne!==null){var l=ne.memoizedState;if(o=l.destroy,r!==null&&hs(r,l.deps)){i.memoizedState=Wr(t,n,o,r);return}}X.flags|=e,i.memoizedState=Wr(1|t,n,o,r)}function Nc(e,t){return Mi(8390656,8,e,t)}function vs(e,t){return To(2048,8,e,t)}function Q1(e,t){return To(4,2,e,t)}function X1(e,t){return To(4,4,e,t)}function K1(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Y1(e,t,n){return n=n!=null?n.concat([e]):null,To(4,4,K1.bind(null,t,e),n)}function ys(){}function G1(e,t){var n=Ue();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&hs(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function J1(e,t){var n=Ue();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&hs(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function q1(e,t,n){return cn&21?(Je(n,t)||(n=n1(),X.lanes|=n,un|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Se=!0),e.memoizedState=n)}function w2(e,t){var n=D;D=n!==0&&4>n?n:4,e(!0);var r=dl.transition;dl.transition={};try{e(!1),t()}finally{D=n,dl.transition=r}}function ed(){return Ue().memoizedState}function k2(e,t,n){var r=Bt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},td(e))nd(t,n);else if(n=M1(e,t,n,r),n!==null){var i=xe();Ye(n,e,r,i),rd(n,t,r)}}function j2(e,t,n){var r=Bt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(td(e))nd(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,s=o(l,n);if(i.hasEagerState=!0,i.eagerState=s,Je(s,l)){var c=t.interleaved;c===null?(i.next=i,cs(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=M1(e,t,i,r),n!==null&&(i=xe(),Ye(n,e,r,i),rd(n,t,r))}}function td(e){var t=e.alternate;return e===X||t!==null&&t===X}function nd(e,t){Er=oo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function rd(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ka(e,n)}}var lo={readContext:Be,useCallback:fe,useContext:fe,useEffect:fe,useImperativeHandle:fe,useInsertionEffect:fe,useLayoutEffect:fe,useMemo:fe,useReducer:fe,useRef:fe,useState:fe,useDebugValue:fe,useDeferredValue:fe,useTransition:fe,useMutableSource:fe,useSyncExternalStore:fe,useId:fe,unstable_isNewReconciler:!1},S2={readContext:Be,useCallback:function(e,t){return tt().memoizedState=[e,t===void 0?null:t],e},useContext:Be,useEffect:Nc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Mi(4194308,4,K1.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Mi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Mi(4,2,e,t)},useMemo:function(e,t){var n=tt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=tt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=k2.bind(null,X,e),[r.memoizedState,e]},useRef:function(e){var t=tt();return e={current:e},t.memoizedState=e},useState:Pc,useDebugValue:ys,useDeferredValue:function(e){return tt().memoizedState=e},useTransition:function(){var e=Pc(!1),t=e[0];return e=w2.bind(null,e[1]),tt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=X,i=tt();if(Z){if(n===void 0)throw Error(C(407));n=n()}else{if(n=t(),ae===null)throw Error(C(349));cn&30||B1(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Nc(H1.bind(null,r,o,e),[e]),r.flags|=2048,Wr(9,U1.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=tt(),t=ae.identifierPrefix;if(Z){var n=gt,r=mt;n=(r&~(1<<32-Ke(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Hr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=x2++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},C2={readContext:Be,useCallback:G1,useContext:Be,useEffect:vs,useImperativeHandle:Y1,useInsertionEffect:Q1,useLayoutEffect:X1,useMemo:J1,useReducer:fl,useRef:Z1,useState:function(){return fl(Vr)},useDebugValue:ys,useDeferredValue:function(e){var t=Ue();return q1(t,ne.memoizedState,e)},useTransition:function(){var e=fl(Vr)[0],t=Ue().memoizedState;return[e,t]},useMutableSource:F1,useSyncExternalStore:A1,useId:ed,unstable_isNewReconciler:!1},E2={readContext:Be,useCallback:G1,useContext:Be,useEffect:vs,useImperativeHandle:Y1,useInsertionEffect:Q1,useLayoutEffect:X1,useMemo:J1,useReducer:pl,useRef:Z1,useState:function(){return pl(Vr)},useDebugValue:ys,useDeferredValue:function(e){var t=Ue();return ne===null?t.memoizedState=e:q1(t,ne.memoizedState,e)},useTransition:function(){var e=pl(Vr)[0],t=Ue().memoizedState;return[e,t]},useMutableSource:F1,useSyncExternalStore:A1,useId:ed,unstable_isNewReconciler:!1};function Xn(e,t){try{var n="",r=t;do n+=J0(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function hl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function la(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var P2=typeof WeakMap=="function"?WeakMap:Map;function id(e,t,n){n=vt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){so||(so=!0,ga=r),la(e,t)},n}function od(e,t,n){n=vt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){la(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){la(e,t),typeof r!="function"&&(At===null?At=new Set([this]):At.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function _c(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new P2;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=A2.bind(null,e,t,n),t.then(e,e))}function Tc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function zc(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=vt(-1,1),t.tag=2,Ft(n,t,1))),n.lanes|=1),e)}var N2=jt.ReactCurrentOwner,Se=!1;function ye(e,t,n,r){t.child=e===null?$1(t,null,n,r):Zn(t,e.child,n,r)}function Rc(e,t,n,r,i){n=n.render;var o=t.ref;return Bn(t,i),r=ms(e,t,n,r,o,i),n=gs(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,kt(e,t,i)):(Z&&n&&rs(t),t.flags|=1,ye(e,t,r,i),t.child)}function Mc(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Ps(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,ld(e,t,o,r,i)):(e=Oi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:$r,n(l,r)&&e.ref===t.ref)return kt(e,t,i)}return t.flags|=1,e=Ut(o,r),e.ref=t.ref,e.return=t,t.child=e}function ld(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if($r(o,r)&&e.ref===t.ref)if(Se=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Se=!0);else return t.lanes=e.lanes,kt(e,t,i)}return aa(e,t,n,r,i)}function ad(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},A(In,Te),Te|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,A(In,Te),Te|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,A(In,Te),Te|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,A(In,Te),Te|=r;return ye(e,t,i,n),t.child}function sd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function aa(e,t,n,r,i){var o=Ee(n)?an:me.current;return o=Vn(t,o),Bn(t,i),n=ms(e,t,n,r,o,i),r=gs(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,kt(e,t,i)):(Z&&r&&rs(t),t.flags|=1,ye(e,t,n,i),t.child)}function Lc(e,t,n,r,i){if(Ee(n)){var o=!0;Ji(t)}else o=!1;if(Bn(t,i),t.stateNode===null)Li(e,t),b1(t,n,r),oa(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var c=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=Be(u):(u=Ee(n)?an:me.current,u=Vn(t,u));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||c!==u)&&Cc(t,l,r,u),Tt=!1;var g=t.memoizedState;l.state=g,ro(t,r,l,i),c=t.memoizedState,s!==r||g!==c||Ce.current||Tt?(typeof f=="function"&&(ia(t,n,f,r),c=t.memoizedState),(s=Tt||Sc(t,n,s,r,g,c,u))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),l.props=r,l.state=c,l.context=u,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,L1(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Ze(t.type,s),l.props=u,h=t.pendingProps,g=l.context,c=n.contextType,typeof c=="object"&&c!==null?c=Be(c):(c=Ee(n)?an:me.current,c=Vn(t,c));var v=n.getDerivedStateFromProps;(f=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==h||g!==c)&&Cc(t,l,r,c),Tt=!1,g=t.memoizedState,l.state=g,ro(t,r,l,i);var y=t.memoizedState;s!==h||g!==y||Ce.current||Tt?(typeof v=="function"&&(ia(t,n,v,r),y=t.memoizedState),(u=Tt||Sc(t,n,u,r,g,y,c)||!1)?(f||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,y,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,y,c)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),l.props=r,l.state=y,l.context=c,r=u):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return sa(e,t,n,r,o,i)}function sa(e,t,n,r,i,o){sd(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&yc(t,n,!1),kt(e,t,o);r=t.stateNode,N2.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Zn(t,e.child,null,o),t.child=Zn(t,null,s,o)):ye(e,t,s,o),t.memoizedState=r.state,i&&yc(t,n,!0),t.child}function cd(e){var t=e.stateNode;t.pendingContext?vc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&vc(e,t.context,!1),ds(e,t.containerInfo)}function Ic(e,t,n,r,i){return Wn(),os(i),t.flags|=256,ye(e,t,n,r),t.child}var ca={dehydrated:null,treeContext:null,retryLane:0};function ua(e){return{baseLanes:e,cachePool:null,transitions:null}}function ud(e,t,n){var r=t.pendingProps,i=Q.current,o=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),A(Q,i&1),e===null)return na(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Mo(l,r,0,null),e=on(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=ua(n),t.memoizedState=ca,e):xs(t,l));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return _2(e,t,l,r,s,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,s=i.sibling;var c={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Ut(i,c),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=Ut(s,o):(o=on(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?ua(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=ca,r}return o=e.child,e=o.sibling,r=Ut(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function xs(e,t){return t=Mo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function wi(e,t,n,r){return r!==null&&os(r),Zn(t,e.child,null,n),e=xs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function _2(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=hl(Error(C(422))),wi(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Mo({mode:"visible",children:r.children},i,0,null),o=on(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Zn(t,e.child,null,l),t.child.memoizedState=ua(l),t.memoizedState=ca,o);if(!(t.mode&1))return wi(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(C(419)),r=hl(o,r,void 0),wi(e,t,l,r)}if(s=(l&e.childLanes)!==0,Se||s){if(r=ae,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,wt(e,i),Ye(r,e,i,-1))}return Es(),r=hl(Error(C(421))),wi(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=B2.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,ze=Dt(i.nextSibling),Re=t,Z=!0,Xe=null,e!==null&&($e[De++]=mt,$e[De++]=gt,$e[De++]=sn,mt=e.id,gt=e.overflow,sn=t),t=xs(t,r.children),t.flags|=4096,t)}function bc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ra(e.return,t,n)}function ml(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function dd(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ye(e,t,r.children,n),r=Q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&bc(e,n,t);else if(e.tag===19)bc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(A(Q,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&io(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ml(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&io(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ml(t,!0,n,null,o);break;case"together":ml(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Li(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function kt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),un|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,n=Ut(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ut(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function T2(e,t,n){switch(t.tag){case 3:cd(t),Wn();break;case 5:D1(t);break;case 1:Ee(t.type)&&Ji(t);break;case 4:ds(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;A(to,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(A(Q,Q.current&1),t.flags|=128,null):n&t.child.childLanes?ud(e,t,n):(A(Q,Q.current&1),e=kt(e,t,n),e!==null?e.sibling:null);A(Q,Q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return dd(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),A(Q,Q.current),r)break;return null;case 22:case 23:return t.lanes=0,ad(e,t,n)}return kt(e,t,n)}var fd,da,pd,hd;fd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};da=function(){};pd=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,tn(ot.current);var o=null;switch(n){case"input":i=Ll(e,i),r=Ll(e,r),o=[];break;case"select":i=K({},i,{value:void 0}),r=K({},r,{value:void 0}),o=[];break;case"textarea":i=Ol(e,i),r=Ol(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Yi)}Dl(n,r);var l;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(zr.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var c=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==s&&(c!=null||s!=null))if(u==="style")if(s){for(l in s)!s.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in c)c.hasOwnProperty(l)&&s[l]!==c[l]&&(n||(n={}),n[l]=c[l])}else n||(o||(o=[]),o.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,s=s?s.__html:void 0,c!=null&&s!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(zr.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&B("scroll",e),o||s===c||(o=[])):(o=o||[]).push(u,c))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};hd=function(e,t,n,r){n!==r&&(t.flags|=4)};function fr(e,t){if(!Z)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function pe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function z2(e,t,n){var r=t.pendingProps;switch(is(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pe(t),null;case 1:return Ee(t.type)&&Gi(),pe(t),null;case 3:return r=t.stateNode,Qn(),V(Ce),V(me),ps(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(yi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Xe!==null&&(xa(Xe),Xe=null))),da(e,t),pe(t),null;case 5:fs(t);var i=tn(Ur.current);if(n=t.type,e!==null&&t.stateNode!=null)pd(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(C(166));return pe(t),null}if(e=tn(ot.current),yi(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[rt]=t,r[Ar]=o,e=(t.mode&1)!==0,n){case"dialog":B("cancel",r),B("close",r);break;case"iframe":case"object":case"embed":B("load",r);break;case"video":case"audio":for(i=0;i<yr.length;i++)B(yr[i],r);break;case"source":B("error",r);break;case"img":case"image":case"link":B("error",r),B("load",r);break;case"details":B("toggle",r);break;case"input":Vs(r,o),B("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},B("invalid",r);break;case"textarea":Zs(r,o),B("invalid",r)}Dl(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var s=o[l];l==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&vi(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&vi(r.textContent,s,e),i=["children",""+s]):zr.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&B("scroll",r)}switch(n){case"input":ci(r),Ws(r,o,!0);break;case"textarea":ci(r),Qs(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Yi)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Bu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[rt]=t,e[Ar]=r,fd(e,t,!1,!1),t.stateNode=e;e:{switch(l=Fl(n,r),n){case"dialog":B("cancel",e),B("close",e),i=r;break;case"iframe":case"object":case"embed":B("load",e),i=r;break;case"video":case"audio":for(i=0;i<yr.length;i++)B(yr[i],e);i=r;break;case"source":B("error",e),i=r;break;case"img":case"image":case"link":B("error",e),B("load",e),i=r;break;case"details":B("toggle",e),i=r;break;case"input":Vs(e,r),i=Ll(e,r),B("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=K({},r,{value:void 0}),B("invalid",e);break;case"textarea":Zs(e,r),i=Ol(e,r),B("invalid",e);break;default:i=r}Dl(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var c=s[o];o==="style"?Vu(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Uu(e,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Rr(e,c):typeof c=="number"&&Rr(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(zr.hasOwnProperty(o)?c!=null&&o==="onScroll"&&B("scroll",e):c!=null&&Ha(e,o,c,l))}switch(n){case"input":ci(e),Ws(e,r,!1);break;case"textarea":ci(e),Qs(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Wt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?$n(e,!!r.multiple,o,!1):r.defaultValue!=null&&$n(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Yi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return pe(t),null;case 6:if(e&&t.stateNode!=null)hd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(C(166));if(n=tn(Ur.current),tn(ot.current),yi(t)){if(r=t.stateNode,n=t.memoizedProps,r[rt]=t,(o=r.nodeValue!==n)&&(e=Re,e!==null))switch(e.tag){case 3:vi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&vi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[rt]=t,t.stateNode=r}return pe(t),null;case 13:if(V(Q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Z&&ze!==null&&t.mode&1&&!(t.flags&128))R1(),Wn(),t.flags|=98560,o=!1;else if(o=yi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(C(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(C(317));o[rt]=t}else Wn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;pe(t),o=!1}else Xe!==null&&(xa(Xe),Xe=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Q.current&1?re===0&&(re=3):Es())),t.updateQueue!==null&&(t.flags|=4),pe(t),null);case 4:return Qn(),da(e,t),e===null&&Dr(t.stateNode.containerInfo),pe(t),null;case 10:return ss(t.type._context),pe(t),null;case 17:return Ee(t.type)&&Gi(),pe(t),null;case 19:if(V(Q),o=t.memoizedState,o===null)return pe(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)fr(o,!1);else{if(re!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=io(e),l!==null){for(t.flags|=128,fr(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return A(Q,Q.current&1|2),t.child}e=e.sibling}o.tail!==null&&q()>Kn&&(t.flags|=128,r=!0,fr(o,!1),t.lanes=4194304)}else{if(!r)if(e=io(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),fr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!Z)return pe(t),null}else 2*q()-o.renderingStartTime>Kn&&n!==1073741824&&(t.flags|=128,r=!0,fr(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=q(),t.sibling=null,n=Q.current,A(Q,r?n&1|2:n&1),t):(pe(t),null);case 22:case 23:return Cs(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Te&1073741824&&(pe(t),t.subtreeFlags&6&&(t.flags|=8192)):pe(t),null;case 24:return null;case 25:return null}throw Error(C(156,t.tag))}function R2(e,t){switch(is(t),t.tag){case 1:return Ee(t.type)&&Gi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Qn(),V(Ce),V(me),ps(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return fs(t),null;case 13:if(V(Q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));Wn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return V(Q),null;case 4:return Qn(),null;case 10:return ss(t.type._context),null;case 22:case 23:return Cs(),null;case 24:return null;default:return null}}var ki=!1,he=!1,M2=typeof WeakSet=="function"?WeakSet:Set,_=null;function Ln(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){G(e,t,r)}else n.current=null}function fa(e,t,n){try{n()}catch(r){G(e,t,r)}}var Oc=!1;function L2(e,t){if(Kl=Qi,e=y1(),ns(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,s=-1,c=-1,u=0,f=0,h=e,g=null;t:for(;;){for(var v;h!==n||i!==0&&h.nodeType!==3||(s=l+i),h!==o||r!==0&&h.nodeType!==3||(c=l+r),h.nodeType===3&&(l+=h.nodeValue.length),(v=h.firstChild)!==null;)g=h,h=v;for(;;){if(h===e)break t;if(g===n&&++u===i&&(s=l),g===o&&++f===r&&(c=l),(v=h.nextSibling)!==null)break;h=g,g=h.parentNode}h=v}n=s===-1||c===-1?null:{start:s,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Yl={focusedElem:e,selectionRange:n},Qi=!1,_=t;_!==null;)if(t=_,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,_=e;else for(;_!==null;){t=_;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,P=y.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?w:Ze(t.type,w),P);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(x){G(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,_=e;break}_=t.return}return y=Oc,Oc=!1,y}function Pr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&fa(t,n,o)}i=i.next}while(i!==r)}}function zo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function pa(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function md(e){var t=e.alternate;t!==null&&(e.alternate=null,md(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[rt],delete t[Ar],delete t[ql],delete t[m2],delete t[g2])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function gd(e){return e.tag===5||e.tag===3||e.tag===4}function $c(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||gd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ha(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Yi));else if(r!==4&&(e=e.child,e!==null))for(ha(e,t,n),e=e.sibling;e!==null;)ha(e,t,n),e=e.sibling}function ma(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ma(e,t,n),e=e.sibling;e!==null;)ma(e,t,n),e=e.sibling}var se=null,Qe=!1;function Et(e,t,n){for(n=n.child;n!==null;)vd(e,t,n),n=n.sibling}function vd(e,t,n){if(it&&typeof it.onCommitFiberUnmount=="function")try{it.onCommitFiberUnmount(jo,n)}catch{}switch(n.tag){case 5:he||Ln(n,t);case 6:var r=se,i=Qe;se=null,Et(e,t,n),se=r,Qe=i,se!==null&&(Qe?(e=se,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):se.removeChild(n.stateNode));break;case 18:se!==null&&(Qe?(e=se,n=n.stateNode,e.nodeType===8?sl(e.parentNode,n):e.nodeType===1&&sl(e,n),br(e)):sl(se,n.stateNode));break;case 4:r=se,i=Qe,se=n.stateNode.containerInfo,Qe=!0,Et(e,t,n),se=r,Qe=i;break;case 0:case 11:case 14:case 15:if(!he&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&fa(n,t,l),i=i.next}while(i!==r)}Et(e,t,n);break;case 1:if(!he&&(Ln(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){G(n,t,s)}Et(e,t,n);break;case 21:Et(e,t,n);break;case 22:n.mode&1?(he=(r=he)||n.memoizedState!==null,Et(e,t,n),he=r):Et(e,t,n);break;default:Et(e,t,n)}}function Dc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new M2),t.forEach(function(r){var i=U2.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function We(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:se=s.stateNode,Qe=!1;break e;case 3:se=s.stateNode.containerInfo,Qe=!0;break e;case 4:se=s.stateNode.containerInfo,Qe=!0;break e}s=s.return}if(se===null)throw Error(C(160));vd(o,l,i),se=null,Qe=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){G(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)yd(t,e),t=t.sibling}function yd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(We(t,e),qe(e),r&4){try{Pr(3,e,e.return),zo(3,e)}catch(w){G(e,e.return,w)}try{Pr(5,e,e.return)}catch(w){G(e,e.return,w)}}break;case 1:We(t,e),qe(e),r&512&&n!==null&&Ln(n,n.return);break;case 5:if(We(t,e),qe(e),r&512&&n!==null&&Ln(n,n.return),e.flags&32){var i=e.stateNode;try{Rr(i,"")}catch(w){G(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,s=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Fu(i,o),Fl(s,l);var u=Fl(s,o);for(l=0;l<c.length;l+=2){var f=c[l],h=c[l+1];f==="style"?Vu(i,h):f==="dangerouslySetInnerHTML"?Uu(i,h):f==="children"?Rr(i,h):Ha(i,f,h,u)}switch(s){case"input":Il(i,o);break;case"textarea":Au(i,o);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?$n(i,!!o.multiple,v,!1):g!==!!o.multiple&&(o.defaultValue!=null?$n(i,!!o.multiple,o.defaultValue,!0):$n(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ar]=o}catch(w){G(e,e.return,w)}}break;case 6:if(We(t,e),qe(e),r&4){if(e.stateNode===null)throw Error(C(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){G(e,e.return,w)}}break;case 3:if(We(t,e),qe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{br(t.containerInfo)}catch(w){G(e,e.return,w)}break;case 4:We(t,e),qe(e);break;case 13:We(t,e),qe(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(js=q())),r&4&&Dc(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(he=(u=he)||f,We(t,e),he=u):We(t,e),qe(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(_=e,f=e.child;f!==null;){for(h=_=f;_!==null;){switch(g=_,v=g.child,g.tag){case 0:case 11:case 14:case 15:Pr(4,g,g.return);break;case 1:Ln(g,g.return);var y=g.stateNode;if(typeof y.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(w){G(r,n,w)}}break;case 5:Ln(g,g.return);break;case 22:if(g.memoizedState!==null){Ac(h);continue}}v!==null?(v.return=g,_=v):Ac(h)}f=f.sibling}e:for(f=null,h=e;;){if(h.tag===5){if(f===null){f=h;try{i=h.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=h.stateNode,c=h.memoizedProps.style,l=c!=null&&c.hasOwnProperty("display")?c.display:null,s.style.display=Hu("display",l))}catch(w){G(e,e.return,w)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(w){G(e,e.return,w)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:We(t,e),qe(e),r&4&&Dc(e);break;case 21:break;default:We(t,e),qe(e)}}function qe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(gd(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Rr(i,""),r.flags&=-33);var o=$c(e);ma(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,s=$c(e);ha(e,s,l);break;default:throw Error(C(161))}}catch(c){G(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function I2(e,t,n){_=e,xd(e)}function xd(e,t,n){for(var r=(e.mode&1)!==0;_!==null;){var i=_,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||ki;if(!l){var s=i.alternate,c=s!==null&&s.memoizedState!==null||he;s=ki;var u=he;if(ki=l,(he=c)&&!u)for(_=i;_!==null;)l=_,c=l.child,l.tag===22&&l.memoizedState!==null?Bc(i):c!==null?(c.return=l,_=c):Bc(i);for(;o!==null;)_=o,xd(o),o=o.sibling;_=i,ki=s,he=u}Fc(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,_=o):Fc(e)}}function Fc(e){for(;_!==null;){var t=_;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:he||zo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!he)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ze(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&jc(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}jc(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&br(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}he||t.flags&512&&pa(t)}catch(g){G(t,t.return,g)}}if(t===e){_=null;break}if(n=t.sibling,n!==null){n.return=t.return,_=n;break}_=t.return}}function Ac(e){for(;_!==null;){var t=_;if(t===e){_=null;break}var n=t.sibling;if(n!==null){n.return=t.return,_=n;break}_=t.return}}function Bc(e){for(;_!==null;){var t=_;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{zo(4,t)}catch(c){G(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){G(t,i,c)}}var o=t.return;try{pa(t)}catch(c){G(t,o,c)}break;case 5:var l=t.return;try{pa(t)}catch(c){G(t,l,c)}}}catch(c){G(t,t.return,c)}if(t===e){_=null;break}var s=t.sibling;if(s!==null){s.return=t.return,_=s;break}_=t.return}}var b2=Math.ceil,ao=jt.ReactCurrentDispatcher,ws=jt.ReactCurrentOwner,Ae=jt.ReactCurrentBatchConfig,O=0,ae=null,te=null,ue=0,Te=0,In=Xt(0),re=0,Zr=null,un=0,Ro=0,ks=0,Nr=null,je=null,js=0,Kn=1/0,dt=null,so=!1,ga=null,At=null,ji=!1,Lt=null,co=0,_r=0,va=null,Ii=-1,bi=0;function xe(){return O&6?q():Ii!==-1?Ii:Ii=q()}function Bt(e){return e.mode&1?O&2&&ue!==0?ue&-ue:y2.transition!==null?(bi===0&&(bi=n1()),bi):(e=D,e!==0||(e=window.event,e=e===void 0?16:c1(e.type)),e):1}function Ye(e,t,n,r){if(50<_r)throw _r=0,va=null,Error(C(185));qr(e,n,r),(!(O&2)||e!==ae)&&(e===ae&&(!(O&2)&&(Ro|=n),re===4&&Rt(e,ue)),Pe(e,r),n===1&&O===0&&!(t.mode&1)&&(Kn=q()+500,No&&Kt()))}function Pe(e,t){var n=e.callbackNode;yf(e,t);var r=Zi(e,e===ae?ue:0);if(r===0)n!==null&&Ys(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ys(n),t===1)e.tag===0?v2(Uc.bind(null,e)):_1(Uc.bind(null,e)),p2(function(){!(O&6)&&Kt()}),n=null;else{switch(r1(r)){case 1:n=Xa;break;case 4:n=e1;break;case 16:n=Wi;break;case 536870912:n=t1;break;default:n=Wi}n=Nd(n,wd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function wd(e,t){if(Ii=-1,bi=0,O&6)throw Error(C(327));var n=e.callbackNode;if(Un()&&e.callbackNode!==n)return null;var r=Zi(e,e===ae?ue:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=uo(e,r);else{t=r;var i=O;O|=2;var o=jd();(ae!==e||ue!==t)&&(dt=null,Kn=q()+500,rn(e,t));do try{D2();break}catch(s){kd(e,s)}while(1);as(),ao.current=o,O=i,te!==null?t=0:(ae=null,ue=0,t=re)}if(t!==0){if(t===2&&(i=Vl(e),i!==0&&(r=i,t=ya(e,i))),t===1)throw n=Zr,rn(e,0),Rt(e,r),Pe(e,q()),n;if(t===6)Rt(e,r);else{if(i=e.current.alternate,!(r&30)&&!O2(i)&&(t=uo(e,r),t===2&&(o=Vl(e),o!==0&&(r=o,t=ya(e,o))),t===1))throw n=Zr,rn(e,0),Rt(e,r),Pe(e,q()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(C(345));case 2:Jt(e,je,dt);break;case 3:if(Rt(e,r),(r&130023424)===r&&(t=js+500-q(),10<t)){if(Zi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){xe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Jl(Jt.bind(null,e,je,dt),t);break}Jt(e,je,dt);break;case 4:if(Rt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-Ke(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*b2(r/1960))-r,10<r){e.timeoutHandle=Jl(Jt.bind(null,e,je,dt),r);break}Jt(e,je,dt);break;case 5:Jt(e,je,dt);break;default:throw Error(C(329))}}}return Pe(e,q()),e.callbackNode===n?wd.bind(null,e):null}function ya(e,t){var n=Nr;return e.current.memoizedState.isDehydrated&&(rn(e,t).flags|=256),e=uo(e,t),e!==2&&(t=je,je=n,t!==null&&xa(t)),e}function xa(e){je===null?je=e:je.push.apply(je,e)}function O2(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Je(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Rt(e,t){for(t&=~ks,t&=~Ro,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ke(t),r=1<<n;e[n]=-1,t&=~r}}function Uc(e){if(O&6)throw Error(C(327));Un();var t=Zi(e,0);if(!(t&1))return Pe(e,q()),null;var n=uo(e,t);if(e.tag!==0&&n===2){var r=Vl(e);r!==0&&(t=r,n=ya(e,r))}if(n===1)throw n=Zr,rn(e,0),Rt(e,t),Pe(e,q()),n;if(n===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Jt(e,je,dt),Pe(e,q()),null}function Ss(e,t){var n=O;O|=1;try{return e(t)}finally{O=n,O===0&&(Kn=q()+500,No&&Kt())}}function dn(e){Lt!==null&&Lt.tag===0&&!(O&6)&&Un();var t=O;O|=1;var n=Ae.transition,r=D;try{if(Ae.transition=null,D=1,e)return e()}finally{D=r,Ae.transition=n,O=t,!(O&6)&&Kt()}}function Cs(){Te=In.current,V(In)}function rn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,f2(n)),te!==null)for(n=te.return;n!==null;){var r=n;switch(is(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Gi();break;case 3:Qn(),V(Ce),V(me),ps();break;case 5:fs(r);break;case 4:Qn();break;case 13:V(Q);break;case 19:V(Q);break;case 10:ss(r.type._context);break;case 22:case 23:Cs()}n=n.return}if(ae=e,te=e=Ut(e.current,null),ue=Te=t,re=0,Zr=null,ks=Ro=un=0,je=Nr=null,en!==null){for(t=0;t<en.length;t++)if(n=en[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}en=null}return e}function kd(e,t){do{var n=te;try{if(as(),Ri.current=lo,oo){for(var r=X.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}oo=!1}if(cn=0,ie=ne=X=null,Er=!1,Hr=0,ws.current=null,n===null||n.return===null){re=1,Zr=t,te=null;break}e:{var o=e,l=n.return,s=n,c=t;if(t=ue,s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,f=s,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var v=Tc(l);if(v!==null){v.flags&=-257,zc(v,l,s,o,t),v.mode&1&&_c(o,u,t),t=v,c=u;var y=t.updateQueue;if(y===null){var w=new Set;w.add(c),t.updateQueue=w}else y.add(c);break e}else{if(!(t&1)){_c(o,u,t),Es();break e}c=Error(C(426))}}else if(Z&&s.mode&1){var P=Tc(l);if(P!==null){!(P.flags&65536)&&(P.flags|=256),zc(P,l,s,o,t),os(Xn(c,s));break e}}o=c=Xn(c,s),re!==4&&(re=2),Nr===null?Nr=[o]:Nr.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=id(o,c,t);kc(o,p);break e;case 1:s=c;var d=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(At===null||!At.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=od(o,s,t);kc(o,x);break e}}o=o.return}while(o!==null)}Cd(n)}catch(k){t=k,te===n&&n!==null&&(te=n=n.return);continue}break}while(1)}function jd(){var e=ao.current;return ao.current=lo,e===null?lo:e}function Es(){(re===0||re===3||re===2)&&(re=4),ae===null||!(un&268435455)&&!(Ro&268435455)||Rt(ae,ue)}function uo(e,t){var n=O;O|=2;var r=jd();(ae!==e||ue!==t)&&(dt=null,rn(e,t));do try{$2();break}catch(i){kd(e,i)}while(1);if(as(),O=n,ao.current=r,te!==null)throw Error(C(261));return ae=null,ue=0,re}function $2(){for(;te!==null;)Sd(te)}function D2(){for(;te!==null&&!cf();)Sd(te)}function Sd(e){var t=Pd(e.alternate,e,Te);e.memoizedProps=e.pendingProps,t===null?Cd(e):te=t,ws.current=null}function Cd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=R2(n,t),n!==null){n.flags&=32767,te=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{re=6,te=null;return}}else if(n=z2(n,t,Te),n!==null){te=n;return}if(t=t.sibling,t!==null){te=t;return}te=t=e}while(t!==null);re===0&&(re=5)}function Jt(e,t,n){var r=D,i=Ae.transition;try{Ae.transition=null,D=1,F2(e,t,n,r)}finally{Ae.transition=i,D=r}return null}function F2(e,t,n,r){do Un();while(Lt!==null);if(O&6)throw Error(C(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(xf(e,o),e===ae&&(te=ae=null,ue=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ji||(ji=!0,Nd(Wi,function(){return Un(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ae.transition,Ae.transition=null;var l=D;D=1;var s=O;O|=4,ws.current=null,L2(e,n),yd(n,e),o2(Yl),Qi=!!Kl,Yl=Kl=null,e.current=n,I2(n),uf(),O=s,D=l,Ae.transition=o}else e.current=n;if(ji&&(ji=!1,Lt=e,co=i),o=e.pendingLanes,o===0&&(At=null),pf(n.stateNode),Pe(e,q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(so)throw so=!1,e=ga,ga=null,e;return co&1&&e.tag!==0&&Un(),o=e.pendingLanes,o&1?e===va?_r++:(_r=0,va=e):_r=0,Kt(),null}function Un(){if(Lt!==null){var e=r1(co),t=Ae.transition,n=D;try{if(Ae.transition=null,D=16>e?16:e,Lt===null)var r=!1;else{if(e=Lt,Lt=null,co=0,O&6)throw Error(C(331));var i=O;for(O|=4,_=e.current;_!==null;){var o=_,l=o.child;if(_.flags&16){var s=o.deletions;if(s!==null){for(var c=0;c<s.length;c++){var u=s[c];for(_=u;_!==null;){var f=_;switch(f.tag){case 0:case 11:case 15:Pr(8,f,o)}var h=f.child;if(h!==null)h.return=f,_=h;else for(;_!==null;){f=_;var g=f.sibling,v=f.return;if(md(f),f===u){_=null;break}if(g!==null){g.return=v,_=g;break}_=v}}}var y=o.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var P=w.sibling;w.sibling=null,w=P}while(w!==null)}}_=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,_=l;else e:for(;_!==null;){if(o=_,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Pr(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,_=p;break e}_=o.return}}var d=e.current;for(_=d;_!==null;){l=_;var m=l.child;if(l.subtreeFlags&2064&&m!==null)m.return=l,_=m;else e:for(l=d;_!==null;){if(s=_,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:zo(9,s)}}catch(k){G(s,s.return,k)}if(s===l){_=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,_=x;break e}_=s.return}}if(O=i,Kt(),it&&typeof it.onPostCommitFiberRoot=="function")try{it.onPostCommitFiberRoot(jo,e)}catch{}r=!0}return r}finally{D=n,Ae.transition=t}}return!1}function Hc(e,t,n){t=Xn(n,t),t=id(e,t,1),e=Ft(e,t,1),t=xe(),e!==null&&(qr(e,1,t),Pe(e,t))}function G(e,t,n){if(e.tag===3)Hc(e,e,n);else for(;t!==null;){if(t.tag===3){Hc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(At===null||!At.has(r))){e=Xn(n,e),e=od(t,e,1),t=Ft(t,e,1),e=xe(),t!==null&&(qr(t,1,e),Pe(t,e));break}}t=t.return}}function A2(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=xe(),e.pingedLanes|=e.suspendedLanes&n,ae===e&&(ue&n)===n&&(re===4||re===3&&(ue&130023424)===ue&&500>q()-js?rn(e,0):ks|=n),Pe(e,t)}function Ed(e,t){t===0&&(e.mode&1?(t=fi,fi<<=1,!(fi&130023424)&&(fi=4194304)):t=1);var n=xe();e=wt(e,t),e!==null&&(qr(e,t,n),Pe(e,n))}function B2(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ed(e,n)}function U2(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(t),Ed(e,n)}var Pd;Pd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ce.current)Se=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Se=!1,T2(e,t,n);Se=!!(e.flags&131072)}else Se=!1,Z&&t.flags&1048576&&T1(t,eo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Li(e,t),e=t.pendingProps;var i=Vn(t,me.current);Bn(t,n),i=ms(null,t,r,e,i,n);var o=gs();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ee(r)?(o=!0,Ji(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,us(t),i.updater=_o,t.stateNode=i,i._reactInternals=t,oa(t,r,e,n),t=sa(null,t,r,!0,o,n)):(t.tag=0,Z&&o&&rs(t),ye(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Li(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=V2(r),e=Ze(r,e),i){case 0:t=aa(null,t,r,e,n);break e;case 1:t=Lc(null,t,r,e,n);break e;case 11:t=Rc(null,t,r,e,n);break e;case 14:t=Mc(null,t,r,Ze(r.type,e),n);break e}throw Error(C(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ze(r,i),aa(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ze(r,i),Lc(e,t,r,i,n);case 3:e:{if(cd(t),e===null)throw Error(C(387));r=t.pendingProps,o=t.memoizedState,i=o.element,L1(e,t),ro(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Xn(Error(C(423)),t),t=Ic(e,t,r,n,i);break e}else if(r!==i){i=Xn(Error(C(424)),t),t=Ic(e,t,r,n,i);break e}else for(ze=Dt(t.stateNode.containerInfo.firstChild),Re=t,Z=!0,Xe=null,n=$1(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Wn(),r===i){t=kt(e,t,n);break e}ye(e,t,r,n)}t=t.child}return t;case 5:return D1(t),e===null&&na(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,Gl(r,i)?l=null:o!==null&&Gl(r,o)&&(t.flags|=32),sd(e,t),ye(e,t,l,n),t.child;case 6:return e===null&&na(t),null;case 13:return ud(e,t,n);case 4:return ds(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Zn(t,null,r,n):ye(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ze(r,i),Rc(e,t,r,i,n);case 7:return ye(e,t,t.pendingProps,n),t.child;case 8:return ye(e,t,t.pendingProps.children,n),t.child;case 12:return ye(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,A(to,r._currentValue),r._currentValue=l,o!==null)if(Je(o.value,l)){if(o.children===i.children&&!Ce.current){t=kt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){l=o.child;for(var c=s.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=vt(-1,n&-n),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?c.next=c:(c.next=f.next,f.next=c),u.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),ra(o.return,n,t),s.lanes|=n;break}c=c.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(C(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),ra(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}ye(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Bn(t,n),i=Be(i),r=r(i),t.flags|=1,ye(e,t,r,n),t.child;case 14:return r=t.type,i=Ze(r,t.pendingProps),i=Ze(r.type,i),Mc(e,t,r,i,n);case 15:return ld(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ze(r,i),Li(e,t),t.tag=1,Ee(r)?(e=!0,Ji(t)):e=!1,Bn(t,n),b1(t,r,i),oa(t,r,i,n),sa(null,t,r,!0,e,n);case 19:return dd(e,t,n);case 22:return ad(e,t,n)}throw Error(C(156,t.tag))};function Nd(e,t){return qu(e,t)}function H2(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fe(e,t,n,r){return new H2(e,t,n,r)}function Ps(e){return e=e.prototype,!(!e||!e.isReactComponent)}function V2(e){if(typeof e=="function")return Ps(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Wa)return 11;if(e===Za)return 14}return 2}function Ut(e,t){var n=e.alternate;return n===null?(n=Fe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Oi(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")Ps(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Cn:return on(n.children,i,o,t);case Va:l=8,i|=8;break;case Tl:return e=Fe(12,n,t,i|2),e.elementType=Tl,e.lanes=o,e;case zl:return e=Fe(13,n,t,i),e.elementType=zl,e.lanes=o,e;case Rl:return e=Fe(19,n,t,i),e.elementType=Rl,e.lanes=o,e;case Ou:return Mo(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Iu:l=10;break e;case bu:l=9;break e;case Wa:l=11;break e;case Za:l=14;break e;case _t:l=16,r=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return t=Fe(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function on(e,t,n,r){return e=Fe(7,e,r,t),e.lanes=n,e}function Mo(e,t,n,r){return e=Fe(22,e,r,t),e.elementType=Ou,e.lanes=n,e.stateNode={isHidden:!1},e}function gl(e,t,n){return e=Fe(6,e,null,t),e.lanes=n,e}function vl(e,t,n){return t=Fe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function W2(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Go(0),this.expirationTimes=Go(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Go(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ns(e,t,n,r,i,o,l,s,c){return e=new W2(e,t,n,s,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Fe(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},us(o),e}function Z2(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Sn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function _d(e){if(!e)return Zt;e=e._reactInternals;e:{if(mn(e)!==e||e.tag!==1)throw Error(C(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ee(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(C(171))}if(e.tag===1){var n=e.type;if(Ee(n))return N1(e,n,t)}return t}function Td(e,t,n,r,i,o,l,s,c){return e=Ns(n,r,!0,e,i,o,l,s,c),e.context=_d(null),n=e.current,r=xe(),i=Bt(n),o=vt(r,i),o.callback=t??null,Ft(n,o,i),e.current.lanes=i,qr(e,i,r),Pe(e,r),e}function Lo(e,t,n,r){var i=t.current,o=xe(),l=Bt(i);return n=_d(n),t.context===null?t.context=n:t.pendingContext=n,t=vt(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ft(i,t,l),e!==null&&(Ye(e,i,l,o),zi(e,i,l)),l}function fo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Vc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function _s(e,t){Vc(e,t),(e=e.alternate)&&Vc(e,t)}function Q2(){return null}var zd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ts(e){this._internalRoot=e}Io.prototype.render=Ts.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));Lo(e,t,null,null)};Io.prototype.unmount=Ts.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;dn(function(){Lo(null,e,null,null)}),t[xt]=null}};function Io(e){this._internalRoot=e}Io.prototype.unstable_scheduleHydration=function(e){if(e){var t=l1();e={blockedOn:null,target:e,priority:t};for(var n=0;n<zt.length&&t!==0&&t<zt[n].priority;n++);zt.splice(n,0,e),n===0&&s1(e)}};function zs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function bo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Wc(){}function X2(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=fo(l);o.call(u)}}var l=Td(t,r,e,0,null,!1,!1,"",Wc);return e._reactRootContainer=l,e[xt]=l.current,Dr(e.nodeType===8?e.parentNode:e),dn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=fo(c);s.call(u)}}var c=Ns(e,0,!1,null,null,!1,!1,"",Wc);return e._reactRootContainer=c,e[xt]=c.current,Dr(e.nodeType===8?e.parentNode:e),dn(function(){Lo(t,c,n,r)}),c}function Oo(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var s=i;i=function(){var c=fo(l);s.call(c)}}Lo(t,l,e,i)}else l=X2(n,t,e,i,r);return fo(l)}i1=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=vr(t.pendingLanes);n!==0&&(Ka(t,n|1),Pe(t,q()),!(O&6)&&(Kn=q()+500,Kt()))}break;case 13:dn(function(){var r=wt(e,1);if(r!==null){var i=xe();Ye(r,e,1,i)}}),_s(e,1)}};Ya=function(e){if(e.tag===13){var t=wt(e,134217728);if(t!==null){var n=xe();Ye(t,e,134217728,n)}_s(e,134217728)}};o1=function(e){if(e.tag===13){var t=Bt(e),n=wt(e,t);if(n!==null){var r=xe();Ye(n,e,t,r)}_s(e,t)}};l1=function(){return D};a1=function(e,t){var n=D;try{return D=e,t()}finally{D=n}};Bl=function(e,t,n){switch(t){case"input":if(Il(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Po(r);if(!i)throw Error(C(90));Du(r),Il(r,i)}}}break;case"textarea":Au(e,n);break;case"select":t=n.value,t!=null&&$n(e,!!n.multiple,t,!1)}};Qu=Ss;Xu=dn;var K2={usingClientEntryPoint:!1,Events:[ti,_n,Po,Wu,Zu,Ss]},pr={findFiberByHostInstance:qt,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Y2={bundleType:pr.bundleType,version:pr.version,rendererPackageName:pr.rendererPackageName,rendererConfig:pr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:jt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Gu(e),e===null?null:e.stateNode},findFiberByHostInstance:pr.findFiberByHostInstance||Q2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Si=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Si.isDisabled&&Si.supportsFiber)try{jo=Si.inject(Y2),it=Si}catch{}}Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=K2;Le.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zs(t))throw Error(C(200));return Z2(e,t,null,n)};Le.createRoot=function(e,t){if(!zs(e))throw Error(C(299));var n=!1,r="",i=zd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ns(e,1,!1,null,null,n,!1,r,i),e[xt]=t.current,Dr(e.nodeType===8?e.parentNode:e),new Ts(t)};Le.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=Gu(t),e=e===null?null:e.stateNode,e};Le.flushSync=function(e){return dn(e)};Le.hydrate=function(e,t,n){if(!bo(t))throw Error(C(200));return Oo(null,e,t,!0,n)};Le.hydrateRoot=function(e,t,n){if(!zs(e))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=zd;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Td(t,null,e,1,n??null,i,!1,o,l),e[xt]=t.current,Dr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Io(t)};Le.render=function(e,t,n){if(!bo(t))throw Error(C(200));return Oo(null,e,t,!1,n)};Le.unmountComponentAtNode=function(e){if(!bo(e))throw Error(C(40));return e._reactRootContainer?(dn(function(){Oo(null,null,e,!1,function(){e._reactRootContainer=null,e[xt]=null})}),!0):!1};Le.unstable_batchedUpdates=Ss;Le.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!bo(n))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return Oo(e,t,n,!1,r)};Le.version="18.2.0-next-9e3b772b8-20220608";function Rd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Rd)}catch(e){console.error(e)}}Rd(),Tu.exports=Le;var G2=Tu.exports,Zc=G2;Nl.createRoot=Zc.createRoot,Nl.hydrateRoot=Zc.hydrateRoot;/**
 * @remix-run/router v1.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qr(){return Qr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Qr.apply(this,arguments)}var It;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(It||(It={}));const Qc="popstate";function J2(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:l,hash:s}=r.location;return wa("",{pathname:o,search:l,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:po(i)}return ep(t,n,null,e)}function J(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Rs(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function q2(){return Math.random().toString(36).substr(2,8)}function Xc(e,t){return{usr:e.state,key:e.key,idx:t}}function wa(e,t,n,r){return n===void 0&&(n=null),Qr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?ir(t):t,{state:n,key:t&&t.key||r||q2()})}function po(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function ir(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function ep(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,l=i.history,s=It.Pop,c=null,u=f();u==null&&(u=0,l.replaceState(Qr({},l.state,{idx:u}),""));function f(){return(l.state||{idx:null}).idx}function h(){s=It.Pop;let P=f(),p=P==null?null:P-u;u=P,c&&c({action:s,location:w.location,delta:p})}function g(P,p){s=It.Push;let d=wa(w.location,P,p);n&&n(d,P),u=f()+1;let m=Xc(d,u),x=w.createHref(d);try{l.pushState(m,"",x)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;i.location.assign(x)}o&&c&&c({action:s,location:w.location,delta:1})}function v(P,p){s=It.Replace;let d=wa(w.location,P,p);n&&n(d,P),u=f();let m=Xc(d,u),x=w.createHref(d);l.replaceState(m,"",x),o&&c&&c({action:s,location:w.location,delta:0})}function y(P){let p=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof P=="string"?P:po(P);return J(p,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,p)}let w={get action(){return s},get location(){return e(i,l)},listen(P){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Qc,h),c=P,()=>{i.removeEventListener(Qc,h),c=null}},createHref(P){return t(i,P)},createURL:y,encodeLocation(P){let p=y(P);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:g,replace:v,go(P){return l.go(P)}};return w}var Kc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Kc||(Kc={}));function tp(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?ir(t):t,i=Xr(r.pathname||"/",n);if(i==null)return null;let o=Md(e);np(o);let l=null;for(let s=0;l==null&&s<o.length;++s)l=dp(o[s],pp(i));return l}function Md(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,l,s)=>{let c={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};c.relativePath.startsWith("/")&&(J(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=Ht([r,c.relativePath]),f=n.concat(c);o.children&&o.children.length>0&&(J(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Md(o.children,t,f,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:cp(u,o.index),routesMeta:f})};return e.forEach((o,l)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))i(o,l);else for(let c of Ld(o.path))i(o,l,c)}),t}function Ld(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let l=Ld(r.join("/")),s=[];return s.push(...l.map(c=>c===""?o:[o,c].join("/"))),i&&s.push(...l),s.map(c=>e.startsWith("/")&&c===""?"/":c)}function np(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:up(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const rp=/^:\w+$/,ip=3,op=2,lp=1,ap=10,sp=-2,Yc=e=>e==="*";function cp(e,t){let n=e.split("/"),r=n.length;return n.some(Yc)&&(r+=sp),t&&(r+=op),n.filter(i=>!Yc(i)).reduce((i,o)=>i+(rp.test(o)?ip:o===""?lp:ap),r)}function up(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function dp(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let l=0;l<n.length;++l){let s=n[l],c=l===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",f=ka({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},u);if(!f)return null;Object.assign(r,f.params);let h=s.route;o.push({params:r,pathname:Ht([i,f.pathname]),pathnameBase:vp(Ht([i,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(i=Ht([i,f.pathnameBase]))}return o}function ka(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=fp(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((u,f,h)=>{let{paramName:g,isOptional:v}=f;if(g==="*"){let w=s[h]||"";l=o.slice(0,o.length-w.length).replace(/(.)\/+$/,"$1")}const y=s[h];return v&&!y?u[g]=void 0:u[g]=hp(y||"",g),u},{}),pathname:o,pathnameBase:l,pattern:e}}function fp(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Rs(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(l,s,c)=>(r.push({paramName:s,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function pp(e){try{return decodeURI(e)}catch(t){return Rs(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function hp(e,t){try{return decodeURIComponent(e)}catch(n){return Rs(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Xr(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function mp(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?ir(e):e;return{pathname:n?n.startsWith("/")?n:gp(n,t):t,search:yp(r),hash:xp(i)}}function gp(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function yl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Id(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function bd(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=ir(e):(i=Qr({},e),J(!i.pathname||!i.pathname.includes("?"),yl("?","pathname","search",i)),J(!i.pathname||!i.pathname.includes("#"),yl("#","pathname","hash",i)),J(!i.search||!i.search.includes("#"),yl("#","search","hash",i)));let o=e===""||i.pathname==="",l=o?"/":i.pathname,s;if(r||l==null)s=n;else{let h=t.length-1;if(l.startsWith("..")){let g=l.split("/");for(;g[0]==="..";)g.shift(),h-=1;i.pathname=g.join("/")}s=h>=0?t[h]:"/"}let c=mp(i,s),u=l&&l!=="/"&&l.endsWith("/"),f=(o||l===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||f)&&(c.pathname+="/"),c}const Ht=e=>e.join("/").replace(/\/\/+/g,"/"),vp=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),yp=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,xp=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function wp(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Od=["post","put","patch","delete"];new Set(Od);const kp=["get",...Od];new Set(kp);/**
 * React Router v6.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ho(){return ho=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ho.apply(this,arguments)}const $o=E.createContext(null),$d=E.createContext(null),gn=E.createContext(null),Do=E.createContext(null),vn=E.createContext({outlet:null,matches:[],isDataRoute:!1}),Dd=E.createContext(null);function jp(e,t){let{relative:n}=t===void 0?{}:t;ri()||J(!1);let{basename:r,navigator:i}=E.useContext(gn),{hash:o,pathname:l,search:s}=Fo(e,{relative:n}),c=l;return r!=="/"&&(c=l==="/"?r:Ht([r,l])),i.createHref({pathname:c,search:s,hash:o})}function ri(){return E.useContext(Do)!=null}function ii(){return ri()||J(!1),E.useContext(Do).location}function Fd(e){E.useContext(gn).static||E.useLayoutEffect(e)}function yn(){let{isDataRoute:e}=E.useContext(vn);return e?bp():Sp()}function Sp(){ri()||J(!1);let e=E.useContext($o),{basename:t,navigator:n}=E.useContext(gn),{matches:r}=E.useContext(vn),{pathname:i}=ii(),o=JSON.stringify(Id(r).map(c=>c.pathnameBase)),l=E.useRef(!1);return Fd(()=>{l.current=!0}),E.useCallback(function(c,u){if(u===void 0&&(u={}),!l.current)return;if(typeof c=="number"){n.go(c);return}let f=bd(c,JSON.parse(o),i,u.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Ht([t,f.pathname])),(u.replace?n.replace:n.push)(f,u.state,u)},[t,n,o,i,e])}function Fo(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=E.useContext(vn),{pathname:i}=ii(),o=JSON.stringify(Id(r).map(l=>l.pathnameBase));return E.useMemo(()=>bd(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function Cp(e,t){return Ep(e,t)}function Ep(e,t,n){ri()||J(!1);let{navigator:r}=E.useContext(gn),{matches:i}=E.useContext(vn),o=i[i.length-1],l=o?o.params:{};o&&o.pathname;let s=o?o.pathnameBase:"/";o&&o.route;let c=ii(),u;if(t){var f;let w=typeof t=="string"?ir(t):t;s==="/"||(f=w.pathname)!=null&&f.startsWith(s)||J(!1),u=w}else u=c;let h=u.pathname||"/",g=s==="/"?h:h.slice(s.length)||"/",v=tp(e,{pathname:g}),y=zp(v&&v.map(w=>Object.assign({},w,{params:Object.assign({},l,w.params),pathname:Ht([s,r.encodeLocation?r.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?s:Ht([s,r.encodeLocation?r.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,n);return t&&y?E.createElement(Do.Provider,{value:{location:ho({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:It.Pop}},y):y}function Pp(){let e=Ip(),t=wp(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},t),n?E.createElement("pre",{style:i},n):null,o)}const Np=E.createElement(Pp,null);class _p extends E.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?E.createElement(vn.Provider,{value:this.props.routeContext},E.createElement(Dd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Tp(e){let{routeContext:t,match:n,children:r}=e,i=E.useContext($o);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),E.createElement(vn.Provider,{value:t},r)}function zp(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let o=e,l=(r=n)==null?void 0:r.errors;if(l!=null){let s=o.findIndex(c=>c.route.id&&(l==null?void 0:l[c.route.id]));s>=0||J(!1),o=o.slice(0,Math.min(o.length,s+1))}return o.reduceRight((s,c,u)=>{let f=c.route.id?l==null?void 0:l[c.route.id]:null,h=null;n&&(h=c.route.errorElement||Np);let g=t.concat(o.slice(0,u+1)),v=()=>{let y;return f?y=h:c.route.Component?y=E.createElement(c.route.Component,null):c.route.element?y=c.route.element:y=s,E.createElement(Tp,{match:c,routeContext:{outlet:s,matches:g,isDataRoute:n!=null},children:y})};return n&&(c.route.ErrorBoundary||c.route.errorElement||u===0)?E.createElement(_p,{location:n.location,revalidation:n.revalidation,component:h,error:f,children:v(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):v()},null)}var Ad=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Ad||{}),mo=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(mo||{});function Rp(e){let t=E.useContext($o);return t||J(!1),t}function Mp(e){let t=E.useContext($d);return t||J(!1),t}function Lp(e){let t=E.useContext(vn);return t||J(!1),t}function Bd(e){let t=Lp(),n=t.matches[t.matches.length-1];return n.route.id||J(!1),n.route.id}function Ip(){var e;let t=E.useContext(Dd),n=Mp(mo.UseRouteError),r=Bd(mo.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function bp(){let{router:e}=Rp(Ad.UseNavigateStable),t=Bd(mo.UseNavigateStable),n=E.useRef(!1);return Fd(()=>{n.current=!0}),E.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ho({fromRouteId:t},o)))},[e,t])}function et(e){J(!1)}function Op(e){let{basename:t="/",children:n=null,location:r,navigationType:i=It.Pop,navigator:o,static:l=!1}=e;ri()&&J(!1);let s=t.replace(/^\/*/,"/"),c=E.useMemo(()=>({basename:s,navigator:o,static:l}),[s,o,l]);typeof r=="string"&&(r=ir(r));let{pathname:u="/",search:f="",hash:h="",state:g=null,key:v="default"}=r,y=E.useMemo(()=>{let w=Xr(u,s);return w==null?null:{location:{pathname:w,search:f,hash:h,state:g,key:v},navigationType:i}},[s,u,f,h,g,v,i]);return y==null?null:E.createElement(gn.Provider,{value:c},E.createElement(Do.Provider,{children:n,value:y}))}function $p(e){let{children:t,location:n}=e;return Cp(ja(t),n)}new Promise(()=>{});function ja(e,t){t===void 0&&(t=[]);let n=[];return E.Children.forEach(e,(r,i)=>{if(!E.isValidElement(r))return;let o=[...t,i];if(r.type===E.Fragment){n.push.apply(n,ja(r.props.children,o));return}r.type!==et&&J(!1),!r.props.index||!r.props.children||J(!1);let l={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=ja(r.props.children,o)),n.push(l)}),n}/**
 * React Router DOM v6.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function go(){return go=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},go.apply(this,arguments)}function Ud(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Dp(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Fp(e,t){return e.button===0&&(!t||t==="_self")&&!Dp(e)}const Ap=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Bp=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],Up=E.createContext({isTransitioning:!1}),Hp="startTransition",Gc=A0[Hp];function Vp(e){let{basename:t,children:n,future:r,window:i}=e,o=E.useRef();o.current==null&&(o.current=J2({window:i,v5Compat:!0}));let l=o.current,[s,c]=E.useState({action:l.action,location:l.location}),{v7_startTransition:u}=r||{},f=E.useCallback(h=>{u&&Gc?Gc(()=>c(h)):c(h)},[c,u]);return E.useLayoutEffect(()=>l.listen(f),[l,f]),E.createElement(Op,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:l})}const Wp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Zp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Qp=E.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:l,state:s,target:c,to:u,preventScrollReset:f,unstable_viewTransition:h}=t,g=Ud(t,Ap),{basename:v}=E.useContext(gn),y,w=!1;if(typeof u=="string"&&Zp.test(u)&&(y=u,Wp))try{let m=new URL(window.location.href),x=u.startsWith("//")?new URL(m.protocol+u):new URL(u),k=Xr(x.pathname,v);x.origin===m.origin&&k!=null?u=k+x.search+x.hash:w=!0}catch{}let P=jp(u,{relative:i}),p=Kp(u,{replace:l,state:s,target:c,preventScrollReset:f,relative:i,unstable_viewTransition:h});function d(m){r&&r(m),m.defaultPrevented||p(m)}return E.createElement("a",go({},g,{href:y||P,onClick:w||o?r:d,ref:n,target:c}))}),ht=E.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:l=!1,style:s,to:c,unstable_viewTransition:u,children:f}=t,h=Ud(t,Bp),g=Fo(c,{relative:h.relative}),v=ii(),y=E.useContext($d),{navigator:w}=E.useContext(gn),P=y!=null&&Yp(g)&&u===!0,p=w.encodeLocation?w.encodeLocation(g).pathname:g.pathname,d=v.pathname,m=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;i||(d=d.toLowerCase(),m=m?m.toLowerCase():null,p=p.toLowerCase());let x=d===p||!l&&d.startsWith(p)&&d.charAt(p.length)==="/",k=m!=null&&(m===p||!l&&m.startsWith(p)&&m.charAt(p.length)==="/"),j={isActive:x,isPending:k,isTransitioning:P},S=x?r:void 0,T;typeof o=="function"?T=o(j):T=[o,x?"active":null,k?"pending":null,P?"transitioning":null].filter(Boolean).join(" ");let F=typeof s=="function"?s(j):s;return E.createElement(Qp,go({},h,{"aria-current":S,className:T,ref:n,style:F,to:c,unstable_viewTransition:u}),typeof f=="function"?f(j):f)});var Sa;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Sa||(Sa={}));var Jc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Jc||(Jc={}));function Xp(e){let t=E.useContext($o);return t||J(!1),t}function Kp(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:l,unstable_viewTransition:s}=t===void 0?{}:t,c=yn(),u=ii(),f=Fo(e,{relative:l});return E.useCallback(h=>{if(Fp(h,n)){h.preventDefault();let g=r!==void 0?r:po(u)===po(f);c(e,{replace:g,state:i,preventScrollReset:o,relative:l,unstable_viewTransition:s})}},[u,c,f,r,i,n,e,o,l,s])}function Yp(e,t){t===void 0&&(t={});let n=E.useContext(Up);n==null&&J(!1);let{basename:r}=Xp(Sa.useViewTransitionState),i=Fo(e,{relative:t.relative});if(!n.isTransitioning)return!1;let o=Xr(n.currentLocation.pathname,r)||n.currentLocation.pathname,l=Xr(n.nextLocation.pathname,r)||n.nextLocation.pathname;return ka(i.pathname,l)!=null||ka(i.pathname,o)!=null}var le=function(){return le=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},le.apply(this,arguments)};function Kr(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var U="-ms-",Tr="-moz-",$="-webkit-",Hd="comm",Ao="rule",Ms="decl",Gp="@import",Vd="@keyframes",Jp="@layer",qp=Math.abs,Ls=String.fromCharCode,Ca=Object.assign;function eh(e,t){return oe(e,0)^45?(((t<<2^oe(e,0))<<2^oe(e,1))<<2^oe(e,2))<<2^oe(e,3):0}function Wd(e){return e.trim()}function ft(e,t){return(e=t.exec(e))?e[0]:e}function M(e,t,n){return e.replace(t,n)}function $i(e,t){return e.indexOf(t)}function oe(e,t){return e.charCodeAt(t)|0}function Yn(e,t,n){return e.slice(t,n)}function nt(e){return e.length}function Zd(e){return e.length}function xr(e,t){return t.push(e),e}function th(e,t){return e.map(t).join("")}function qc(e,t){return e.filter(function(n){return!ft(n,t)})}var Bo=1,Gn=1,Qd=0,He=0,ee=0,or="";function Uo(e,t,n,r,i,o,l,s){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Bo,column:Gn,length:l,return:"",siblings:s}}function Nt(e,t){return Ca(Uo("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function kn(e){for(;e.root;)e=Nt(e.root,{children:[e]});xr(e,e.siblings)}function nh(){return ee}function rh(){return ee=He>0?oe(or,--He):0,Gn--,ee===10&&(Gn=1,Bo--),ee}function Ge(){return ee=He<Qd?oe(or,He++):0,Gn++,ee===10&&(Gn=1,Bo++),ee}function ln(){return oe(or,He)}function Di(){return He}function Ho(e,t){return Yn(or,e,t)}function Ea(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ih(e){return Bo=Gn=1,Qd=nt(or=e),He=0,[]}function oh(e){return or="",e}function xl(e){return Wd(Ho(He-1,Pa(e===91?e+2:e===40?e+1:e)))}function lh(e){for(;(ee=ln())&&ee<33;)Ge();return Ea(e)>2||Ea(ee)>3?"":" "}function ah(e,t){for(;--t&&Ge()&&!(ee<48||ee>102||ee>57&&ee<65||ee>70&&ee<97););return Ho(e,Di()+(t<6&&ln()==32&&Ge()==32))}function Pa(e){for(;Ge();)switch(ee){case e:return He;case 34:case 39:e!==34&&e!==39&&Pa(ee);break;case 40:e===41&&Pa(e);break;case 92:Ge();break}return He}function sh(e,t){for(;Ge()&&e+ee!==47+10;)if(e+ee===42+42&&ln()===47)break;return"/*"+Ho(t,He-1)+"*"+Ls(e===47?e:Ge())}function ch(e){for(;!Ea(ln());)Ge();return Ho(e,He)}function uh(e){return oh(Fi("",null,null,null,[""],e=ih(e),0,[0],e))}function Fi(e,t,n,r,i,o,l,s,c){for(var u=0,f=0,h=l,g=0,v=0,y=0,w=1,P=1,p=1,d=0,m="",x=i,k=o,j=r,S=m;P;)switch(y=d,d=Ge()){case 40:if(y!=108&&oe(S,h-1)==58){$i(S+=M(xl(d),"&","&\f"),"&\f")!=-1&&(p=-1);break}case 34:case 39:case 91:S+=xl(d);break;case 9:case 10:case 13:case 32:S+=lh(y);break;case 92:S+=ah(Di()-1,7);continue;case 47:switch(ln()){case 42:case 47:xr(dh(sh(Ge(),Di()),t,n,c),c);break;default:S+="/"}break;case 123*w:s[u++]=nt(S)*p;case 125*w:case 59:case 0:switch(d){case 0:case 125:P=0;case 59+f:p==-1&&(S=M(S,/\f/g,"")),v>0&&nt(S)-h&&xr(v>32?tu(S+";",r,n,h-1,c):tu(M(S," ","")+";",r,n,h-2,c),c);break;case 59:S+=";";default:if(xr(j=eu(S,t,n,u,f,i,s,m,x=[],k=[],h,o),o),d===123)if(f===0)Fi(S,t,j,j,x,o,h,s,k);else switch(g===99&&oe(S,3)===110?100:g){case 100:case 108:case 109:case 115:Fi(e,j,j,r&&xr(eu(e,j,j,0,0,i,s,m,i,x=[],h,k),k),i,k,h,s,r?x:k);break;default:Fi(S,j,j,j,[""],k,0,s,k)}}u=f=v=0,w=p=1,m=S="",h=l;break;case 58:h=1+nt(S),v=y;default:if(w<1){if(d==123)--w;else if(d==125&&w++==0&&rh()==125)continue}switch(S+=Ls(d),d*w){case 38:p=f>0?1:(S+="\f",-1);break;case 44:s[u++]=(nt(S)-1)*p,p=1;break;case 64:ln()===45&&(S+=xl(Ge())),g=ln(),f=h=nt(m=S+=ch(Di())),d++;break;case 45:y===45&&nt(S)==2&&(w=0)}}return o}function eu(e,t,n,r,i,o,l,s,c,u,f,h){for(var g=i-1,v=i===0?o:[""],y=Zd(v),w=0,P=0,p=0;w<r;++w)for(var d=0,m=Yn(e,g+1,g=qp(P=l[w])),x=e;d<y;++d)(x=Wd(P>0?v[d]+" "+m:M(m,/&\f/g,v[d])))&&(c[p++]=x);return Uo(e,t,n,i===0?Ao:s,c,u,f,h)}function dh(e,t,n,r){return Uo(e,t,n,Hd,Ls(nh()),Yn(e,2,-2),0,r)}function tu(e,t,n,r,i){return Uo(e,t,n,Ms,Yn(e,0,r),Yn(e,r+1,-1),r,i)}function Xd(e,t,n){switch(eh(e,t)){case 5103:return $+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return $+e+e;case 4789:return Tr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return $+e+Tr+e+U+e+e;case 5936:switch(oe(e,t+11)){case 114:return $+e+U+M(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return $+e+U+M(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return $+e+U+M(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return $+e+U+e+e;case 6165:return $+e+U+"flex-"+e+e;case 5187:return $+e+M(e,/(\w+).+(:[^]+)/,$+"box-$1$2"+U+"flex-$1$2")+e;case 5443:return $+e+U+"flex-item-"+M(e,/flex-|-self/g,"")+(ft(e,/flex-|baseline/)?"":U+"grid-row-"+M(e,/flex-|-self/g,""))+e;case 4675:return $+e+U+"flex-line-pack"+M(e,/align-content|flex-|-self/g,"")+e;case 5548:return $+e+U+M(e,"shrink","negative")+e;case 5292:return $+e+U+M(e,"basis","preferred-size")+e;case 6060:return $+"box-"+M(e,"-grow","")+$+e+U+M(e,"grow","positive")+e;case 4554:return $+M(e,/([^-])(transform)/g,"$1"+$+"$2")+e;case 6187:return M(M(M(e,/(zoom-|grab)/,$+"$1"),/(image-set)/,$+"$1"),e,"")+e;case 5495:case 3959:return M(e,/(image-set\([^]*)/,$+"$1$`$1");case 4968:return M(M(e,/(.+:)(flex-)?(.*)/,$+"box-pack:$3"+U+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+$+e+e;case 4200:if(!ft(e,/flex-|baseline/))return U+"grid-column-align"+Yn(e,t)+e;break;case 2592:case 3360:return U+M(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,ft(r.props,/grid-\w+-end/)})?~$i(e+(n=n[t].value),"span")?e:U+M(e,"-start","")+e+U+"grid-row-span:"+(~$i(n,"span")?ft(n,/\d+/):+ft(n,/\d+/)-+ft(e,/\d+/))+";":U+M(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return ft(r.props,/grid-\w+-start/)})?e:U+M(M(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return M(e,/(.+)-inline(.+)/,$+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(nt(e)-1-t>6)switch(oe(e,t+1)){case 109:if(oe(e,t+4)!==45)break;case 102:return M(e,/(.+:)(.+)-([^]+)/,"$1"+$+"$2-$3$1"+Tr+(oe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~$i(e,"stretch")?Xd(M(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return M(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,l,s,c,u){return U+i+":"+o+u+(l?U+i+"-span:"+(s?c:+c-+o)+u:"")+e});case 4949:if(oe(e,t+6)===121)return M(e,":",":"+$)+e;break;case 6444:switch(oe(e,oe(e,14)===45?18:11)){case 120:return M(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+$+(oe(e,14)===45?"inline-":"")+"box$3$1"+$+"$2$3$1"+U+"$2box$3")+e;case 100:return M(e,":",":"+U)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return M(e,"scroll-","scroll-snap-")+e}return e}function vo(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function fh(e,t,n,r){switch(e.type){case Jp:if(e.children.length)break;case Gp:case Ms:return e.return=e.return||e.value;case Hd:return"";case Vd:return e.return=e.value+"{"+vo(e.children,r)+"}";case Ao:if(!nt(e.value=e.props.join(",")))return""}return nt(n=vo(e.children,r))?e.return=e.value+"{"+n+"}":""}function ph(e){var t=Zd(e);return function(n,r,i,o){for(var l="",s=0;s<t;s++)l+=e[s](n,r,i,o)||"";return l}}function hh(e){return function(t){t.root||(t=t.return)&&e(t)}}function mh(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Ms:e.return=Xd(e.value,e.length,n);return;case Vd:return vo([Nt(e,{value:M(e.value,"@","@"+$)})],r);case Ao:if(e.length)return th(n=e.props,function(i){switch(ft(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":kn(Nt(e,{props:[M(i,/:(read-\w+)/,":"+Tr+"$1")]})),kn(Nt(e,{props:[i]})),Ca(e,{props:qc(n,r)});break;case"::placeholder":kn(Nt(e,{props:[M(i,/:(plac\w+)/,":"+$+"input-$1")]})),kn(Nt(e,{props:[M(i,/:(plac\w+)/,":"+Tr+"$1")]})),kn(Nt(e,{props:[M(i,/:(plac\w+)/,U+"input-$1")]})),kn(Nt(e,{props:[i]})),Ca(e,{props:qc(n,r)});break}return""})}}var gh={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Jn=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Is=typeof window<"u"&&"HTMLElement"in window,vh=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),yh={},Vo=Object.freeze([]),qn=Object.freeze({});function Kd(e,t,n){return n===void 0&&(n=qn),e.theme!==n.theme&&e.theme||t||n.theme}var Yd=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),xh=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,wh=/(^-|-$)/g;function nu(e){return e.replace(xh,"-").replace(wh,"")}var kh=/(a)(d)/gi,ru=function(e){return String.fromCharCode(e+(e>25?39:97))};function Na(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=ru(t%52)+n;return(ru(t%52)+n).replace(kh,"$1-$2")}var wl,bn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Gd=function(e){return bn(5381,e)};function Jd(e){return Na(Gd(e)>>>0)}function jh(e){return e.displayName||e.name||"Component"}function kl(e){return typeof e=="string"&&!0}var qd=typeof Symbol=="function"&&Symbol.for,e0=qd?Symbol.for("react.memo"):60115,Sh=qd?Symbol.for("react.forward_ref"):60112,Ch={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Eh={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},t0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ph=((wl={})[Sh]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},wl[e0]=t0,wl);function iu(e){return("type"in(t=e)&&t.type.$$typeof)===e0?t0:"$$typeof"in e?Ph[e.$$typeof]:Ch;var t}var Nh=Object.defineProperty,_h=Object.getOwnPropertyNames,ou=Object.getOwnPropertySymbols,Th=Object.getOwnPropertyDescriptor,zh=Object.getPrototypeOf,lu=Object.prototype;function n0(e,t,n){if(typeof t!="string"){if(lu){var r=zh(t);r&&r!==lu&&n0(e,r,n)}var i=_h(t);ou&&(i=i.concat(ou(t)));for(var o=iu(e),l=iu(t),s=0;s<i.length;++s){var c=i[s];if(!(c in Eh||n&&n[c]||l&&c in l||o&&c in o)){var u=Th(t,c);try{Nh(e,c,u)}catch{}}}}return e}function fn(e){return typeof e=="function"}function bs(e){return typeof e=="object"&&"styledComponentId"in e}function nn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function _a(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Yr(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Ta(e,t,n){if(n===void 0&&(n=!1),!n&&!Yr(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Ta(e[r],t[r]);else if(Yr(t))for(var r in t)e[r]=Ta(e[r],t[r]);return e}function Os(e,t){Object.defineProperty(e,"toString",{value:t})}function pn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Rh=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw pn(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var l=i;l<o;l++)this.groupSizes[l]=0}for(var s=this.indexOfGroup(t+1),c=(l=0,n.length);l<c;l++)this.tag.insertRule(s,n[l])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,l=i;l<o;l++)n+="".concat(this.tag.getRule(l)).concat(`/*!sc*/
`);return n},e}(),Ai=new Map,yo=new Map,jl=1,Ci=function(e){if(Ai.has(e))return Ai.get(e);for(;yo.has(jl);)jl++;var t=jl++;return Ai.set(e,t),yo.set(t,e),t},Mh=function(e,t){Ai.set(e,t),yo.set(t,e)},Lh="style[".concat(Jn,"][").concat("data-styled-version",'="').concat("6.1.0",'"]'),Ih=new RegExp("^".concat(Jn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),bh=function(e,t,n){for(var r,i=n.split(","),o=0,l=i.length;o<l;o++)(r=i[o])&&e.registerName(t,r)},Oh=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],o=0,l=r.length;o<l;o++){var s=r[o].trim();if(s){var c=s.match(Ih);if(c){var u=0|parseInt(c[1],10),f=c[2];u!==0&&(Mh(f,u),bh(e,f,c[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(s)}}};function $h(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var r0=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(s){var c=Array.from(s.querySelectorAll("style[".concat(Jn,"]")));return c[c.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Jn,"active"),r.setAttribute("data-styled-version","6.1.0");var l=$h();return l&&r.setAttribute("nonce",l),n.insertBefore(r,o),r},Dh=function(){function e(t){this.element=r0(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var l=r[i];if(l.ownerNode===n)return l}throw pn(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Fh=function(){function e(t){this.element=r0(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Ah=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),au=Is,Bh={isServer:!Is,useCSSOMInjection:!vh},xo=function(){function e(t,n,r){t===void 0&&(t=qn),n===void 0&&(n={});var i=this;this.options=le(le({},Bh),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Is&&au&&(au=!1,function(o){for(var l=document.querySelectorAll(Lh),s=0,c=l.length;s<c;s++){var u=l[s];u&&u.getAttribute(Jn)!=="active"&&(Oh(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Os(this,function(){return function(o){for(var l=o.getTag(),s=l.length,c="",u=function(h){var g=function(p){return yo.get(p)}(h);if(g===void 0)return"continue";var v=o.names.get(g),y=l.getGroup(h);if(v===void 0||y.length===0)return"continue";var w="".concat(Jn,".g").concat(h,'[id="').concat(g,'"]'),P="";v!==void 0&&v.forEach(function(p){p.length>0&&(P+="".concat(p,","))}),c+="".concat(y).concat(w,'{content:"').concat(P,'"}').concat(`/*!sc*/
`)},f=0;f<s;f++)u(f);return c}(i)})}return e.registerId=function(t){return Ci(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(le(le({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new Ah(i):r?new Dh(i):new Fh(i)}(this.options),new Rh(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Ci(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Ci(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Ci(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Uh=/&/g,Hh=/^\s*\/\/.*$/gm;function i0(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=i0(n.children,t)),n})}function Vh(e){var t,n,r,i=e===void 0?qn:e,o=i.options,l=o===void 0?qn:o,s=i.plugins,c=s===void 0?Vo:s,u=function(g,v,y){return y===n||y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(t):g},f=c.slice();f.push(function(g){g.type===Ao&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(Uh,n).replace(r,u))}),l.prefix&&f.push(mh),f.push(fh);var h=function(g,v,y,w){v===void 0&&(v=""),y===void 0&&(y=""),w===void 0&&(w="&"),t=w,n=v,r=new RegExp("\\".concat(n,"\\b"),"g");var P=g.replace(Hh,""),p=uh(y||v?"".concat(y," ").concat(v," { ").concat(P," }"):P);l.namespace&&(p=i0(p,l.namespace));var d=[];return vo(p,ph(f.concat(hh(function(m){return d.push(m)})))),d};return h.hash=c.length?c.reduce(function(g,v){return v.name||pn(15),bn(g,v.name)},5381).toString():"",h}var Wh=new xo,za=Vh(),o0=H.createContext({shouldForwardProp:void 0,styleSheet:Wh,stylis:za});o0.Consumer;H.createContext(void 0);function Ra(){return E.useContext(o0)}var Zh=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=za);var l=r.name+o.hash;i.hasNameForId(r.id,l)||i.insertRules(r.id,l,o(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Os(this,function(){throw pn(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=za),this.name+t.hash},e}(),Qh=function(e){return e>="A"&&e<="Z"};function su(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Qh(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var l0=function(e){return e==null||e===!1||e===""},a0=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!l0(o)&&(Array.isArray(o)&&o.isCss||fn(o)?r.push("".concat(su(i),":"),o,";"):Yr(o)?r.push.apply(r,Kr(Kr(["".concat(i," {")],a0(o),!1),["}"],!1)):r.push("".concat(su(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in gh||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Vt(e,t,n,r){if(l0(e))return[];if(bs(e))return[".".concat(e.styledComponentId)];if(fn(e)){if(!fn(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return Vt(i,t,n,r)}var o;return e instanceof Zh?n?(e.inject(n,r),[e.getName(r)]):[e]:Yr(e)?a0(e):Array.isArray(e)?Array.prototype.concat.apply(Vo,e.map(function(l){return Vt(l,t,n,r)})):[e.toString()]}function s0(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(fn(n)&&!bs(n))return!1}return!0}var Xh=Gd("6.1.0"),Kh=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&s0(t),this.componentId=n,this.baseHash=bn(Xh,n),this.baseStyle=r,xo.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=nn(i,this.staticRulesId);else{var o=_a(Vt(this.rules,t,n,r)),l=Na(bn(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,l)){var s=r(o,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,s)}i=nn(i,l),this.staticRulesId=l}else{for(var c=bn(this.baseHash,r.hash),u="",f=0;f<this.rules.length;f++){var h=this.rules[f];if(typeof h=="string")u+=h;else if(h){var g=_a(Vt(h,t,n,r));c=bn(c,g+f),u+=g}}if(u){var v=Na(c>>>0);n.hasNameForId(this.componentId,v)||n.insertRules(this.componentId,v,r(u,".".concat(v),void 0,this.componentId)),i=nn(i,v)}}return i},e}(),er=H.createContext(void 0);er.Consumer;function Yh(e){var t=H.useContext(er),n=E.useMemo(function(){return function(r,i){if(!r)throw pn(14);if(fn(r)){var o=r(i);return o}if(Array.isArray(r)||typeof r!="object")throw pn(8);return i?le(le({},i),r):r}(e.theme,t)},[e.theme,t]);return e.children?H.createElement(er.Provider,{value:n},e.children):null}var Sl={};function Gh(e,t,n){var r=bs(e),i=e,o=!kl(e),l=t.attrs,s=l===void 0?Vo:l,c=t.componentId,u=c===void 0?function(m,x){var k=typeof m!="string"?"sc":nu(m);Sl[k]=(Sl[k]||0)+1;var j="".concat(k,"-").concat(Jd("6.1.0"+k+Sl[k]));return x?"".concat(x,"-").concat(j):j}(t.displayName,t.parentComponentId):c,f=t.displayName;f===void 0&&function(m){return kl(m)?"styled.".concat(m):"Styled(".concat(jh(m),")")}(e);var h=t.displayName&&t.componentId?"".concat(nu(t.displayName),"-").concat(t.componentId):t.componentId||u,g=r&&i.attrs?i.attrs.concat(s).filter(Boolean):s,v=t.shouldForwardProp;if(r&&i.shouldForwardProp){var y=i.shouldForwardProp;if(t.shouldForwardProp){var w=t.shouldForwardProp;v=function(m,x){return y(m,x)&&w(m,x)}}else v=y}var P=new Kh(n,h,r?i.componentStyle:void 0);function p(m,x){return function(k,j,S){var T=k.attrs,F=k.componentStyle,L=k.defaultProps,ge=k.foldedComponentIds,lt=k.styledComponentId,at=k.target,xn=H.useContext(er),Ve=Ra(),st=k.shouldForwardProp||Ve.shouldForwardProp,ve=function(ct,Ne,St){for(var _e,be=le(le({},Ne),{className:void 0,theme:St}),Wo=0;Wo<ct.length;Wo+=1){var li=fn(_e=ct[Wo])?_e(be):_e;for(var Ct in li)be[Ct]=Ct==="className"?nn(be[Ct],li[Ct]):Ct==="style"?le(le({},be[Ct]),li[Ct]):li[Ct]}return Ne.className&&(be.className=nn(be.className,Ne.className)),be}(T,j,Kd(j,xn,L)||qn),N=ve.as||at,z={};for(var R in ve)ve[R]===void 0||R[0]==="$"||R==="as"||R==="theme"||(R==="forwardedAs"?z.as=ve.forwardedAs:st&&!st(R,N)||(z[R]=ve[R]));var W=function(ct,Ne){var St=Ra(),_e=ct.generateAndInjectStyles(Ne,St.styleSheet,St.stylis);return _e}(F,ve),Y=nn(ge,lt);return W&&(Y+=" "+W),ve.className&&(Y+=" "+ve.className),z[kl(N)&&!Yd.has(N)?"class":"className"]=Y,z.ref=S,E.createElement(N,z)}(d,m,x)}var d=H.forwardRef(p);return d.attrs=g,d.componentStyle=P,d.shouldForwardProp=v,d.foldedComponentIds=r?nn(i.foldedComponentIds,i.styledComponentId):"",d.styledComponentId=h,d.target=r?i.target:e,Object.defineProperty(d,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(m){this._foldedDefaultProps=r?function(x){for(var k=[],j=1;j<arguments.length;j++)k[j-1]=arguments[j];for(var S=0,T=k;S<T.length;S++)Ta(x,T[S],!0);return x}({},i.defaultProps,m):m}}),Os(d,function(){return".".concat(d.styledComponentId)}),o&&n0(d,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),d}function cu(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var uu=function(e){return Object.assign(e,{isCss:!0})};function c0(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(fn(e)||Yr(e)){var r=e;return uu(Vt(cu(Vo,Kr([r],t,!0))))}var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?Vt(i):uu(Vt(cu(i,t)))}function Ma(e,t,n){if(n===void 0&&(n=qn),!t)throw pn(1,t);var r=function(i){for(var o=[],l=1;l<arguments.length;l++)o[l-1]=arguments[l];return e(t,n,c0.apply(void 0,Kr([i],o,!1)))};return r.attrs=function(i){return Ma(e,t,le(le({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Ma(e,t,le(le({},n),i))},r}var u0=function(e){return Ma(Gh,e)},b=u0;Yd.forEach(function(e){b[e]=u0(e)});var Jh=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=s0(t),xo.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(_a(Vt(this.rules,n,r,i)),""),l=this.componentId+t;r.insertRules(l,l,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&xo.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function qh(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=c0.apply(void 0,Kr([e],t,!1)),i="sc-global-".concat(Jd(JSON.stringify(r))),o=new Jh(r,i),l=function(c){var u=Ra(),f=H.useContext(er),h=H.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&s(h,c,u.styleSheet,f,u.stylis),H.useLayoutEffect(function(){if(!u.styleSheet.server)return s(h,c,u.styleSheet,f,u.stylis),function(){return o.removeStyles(h,u.styleSheet)}},[h,c,u.styleSheet,f,u.stylis]),null};function s(c,u,f,h,g){if(o.isStatic)o.renderStyles(c,yh,f,g);else{var v=le(le({},u),{theme:Kd(u,h,l.defaultProps)});o.renderStyles(c,v,f,g)}}return H.memo(l)}function La(){return La=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},La.apply(this,arguments)}var em=H.createElement("svg",{viewBox:"-2 -5 14 20",height:"100%",width:"100%",style:{position:"absolute",top:0}},H.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"})),tm=H.createElement("svg",{height:"100%",width:"100%",viewBox:"-2 -5 17 21",style:{position:"absolute",top:0}},H.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}));function du(e){if(e.length===7)return e;for(var t="#",n=1;n<4;n+=1)t+=e[n]+e[n];return t}function fu(e,t,n,r,i){return function(o,l,s,c,u){var f=(o-s)/(l-s);if(f===0)return c;if(f===1)return u;for(var h="#",g=1;g<6;g+=2){var v=parseInt(c.substr(g,2),16),y=parseInt(u.substr(g,2),16),w=Math.round((1-f)*v+f*y).toString(16);w.length===1&&(w="0"+w),h+=w}return h}(e,t,n,du(r),du(i))}var d0=function(e){function t(n){e.call(this,n);var r=n.height,i=n.width,o=n.checked;this.t=n.handleDiameter||r-2,this.i=Math.max(i-r,i-(r+this.t)/2),this.o=Math.max(0,(r-this.t)/2),this.state={h:o?this.i:this.o},this.l=0,this.u=0,this.p=this.p.bind(this),this.v=this.v.bind(this),this.g=this.g.bind(this),this.k=this.k.bind(this),this.m=this.m.bind(this),this.M=this.M.bind(this),this.T=this.T.bind(this),this.$=this.$.bind(this),this.C=this.C.bind(this),this.D=this.D.bind(this),this.O=this.O.bind(this),this.S=this.S.bind(this)}return e&&(t.__proto__=e),(t.prototype=Object.create(e&&e.prototype)).constructor=t,t.prototype.componentDidMount=function(){this.W=!0},t.prototype.componentDidUpdate=function(n){n.checked!==this.props.checked&&this.setState({h:this.props.checked?this.i:this.o})},t.prototype.componentWillUnmount=function(){this.W=!1},t.prototype.I=function(n){this.H.focus(),this.setState({R:n,j:!0,B:Date.now()})},t.prototype.L=function(n){var r=this.state,i=r.R,o=r.h,l=(this.props.checked?this.i:this.o)+n-i;r.N||n===i||this.setState({N:!0});var s=Math.min(this.i,Math.max(this.o,l));s!==o&&this.setState({h:s})},t.prototype.U=function(n){var r=this.state,i=r.h,o=r.N,l=r.B,s=this.props.checked,c=(this.i+this.o)/2;this.setState({h:this.props.checked?this.i:this.o});var u=Date.now()-l;(!o||u<250||s&&i<=c||!s&&i>=c)&&this.A(n),this.W&&this.setState({N:!1,j:!1}),this.l=Date.now()},t.prototype.p=function(n){n.preventDefault(),typeof n.button=="number"&&n.button!==0||(this.I(n.clientX),window.addEventListener("mousemove",this.v),window.addEventListener("mouseup",this.g))},t.prototype.v=function(n){n.preventDefault(),this.L(n.clientX)},t.prototype.g=function(n){this.U(n),window.removeEventListener("mousemove",this.v),window.removeEventListener("mouseup",this.g)},t.prototype.k=function(n){this.X=null,this.I(n.touches[0].clientX)},t.prototype.m=function(n){this.L(n.touches[0].clientX)},t.prototype.M=function(n){n.preventDefault(),this.U(n)},t.prototype.$=function(n){Date.now()-this.l>50&&(this.A(n),Date.now()-this.u>50&&this.W&&this.setState({j:!1}))},t.prototype.C=function(){this.u=Date.now()},t.prototype.D=function(){this.setState({j:!0})},t.prototype.O=function(){this.setState({j:!1})},t.prototype.S=function(n){this.H=n},t.prototype.T=function(n){n.preventDefault(),this.H.focus(),this.A(n),this.W&&this.setState({j:!1})},t.prototype.A=function(n){var r=this.props;(0,r.onChange)(!r.checked,n,r.id)},t.prototype.render=function(){var n=this.props,r=n.checked,i=n.disabled,o=n.className,l=n.offColor,s=n.onColor,c=n.offHandleColor,u=n.onHandleColor,f=n.checkedIcon,h=n.uncheckedIcon,g=n.checkedHandleIcon,v=n.uncheckedHandleIcon,y=n.boxShadow,w=n.activeBoxShadow,P=n.height,p=n.width,d=n.borderRadius,m=function(Ve,st){var ve={};for(var N in Ve)Object.prototype.hasOwnProperty.call(Ve,N)&&st.indexOf(N)===-1&&(ve[N]=Ve[N]);return ve}(n,["checked","disabled","className","offColor","onColor","offHandleColor","onHandleColor","checkedIcon","uncheckedIcon","checkedHandleIcon","uncheckedHandleIcon","boxShadow","activeBoxShadow","height","width","borderRadius","handleDiameter"]),x=this.state,k=x.h,j=x.N,S=x.j,T={position:"relative",display:"inline-block",textAlign:"left",opacity:i?.5:1,direction:"ltr",borderRadius:P/2,WebkitTransition:"opacity 0.25s",MozTransition:"opacity 0.25s",transition:"opacity 0.25s",touchAction:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",userSelect:"none"},F={height:P,width:p,margin:Math.max(0,(this.t-P)/2),position:"relative",background:fu(k,this.i,this.o,l,s),borderRadius:typeof d=="number"?d:P/2,cursor:i?"default":"pointer",WebkitTransition:j?null:"background 0.25s",MozTransition:j?null:"background 0.25s",transition:j?null:"background 0.25s"},L={height:P,width:Math.min(1.5*P,p-(this.t+P)/2+1),position:"relative",opacity:(k-this.o)/(this.i-this.o),pointerEvents:"none",WebkitTransition:j?null:"opacity 0.25s",MozTransition:j?null:"opacity 0.25s",transition:j?null:"opacity 0.25s"},ge={height:P,width:Math.min(1.5*P,p-(this.t+P)/2+1),position:"absolute",opacity:1-(k-this.o)/(this.i-this.o),right:0,top:0,pointerEvents:"none",WebkitTransition:j?null:"opacity 0.25s",MozTransition:j?null:"opacity 0.25s",transition:j?null:"opacity 0.25s"},lt={height:this.t,width:this.t,background:fu(k,this.i,this.o,c,u),display:"inline-block",cursor:i?"default":"pointer",borderRadius:typeof d=="number"?d-1:"50%",position:"absolute",transform:"translateX("+k+"px)",top:Math.max(0,(P-this.t)/2),outline:0,boxShadow:S?w:y,border:0,WebkitTransition:j?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",MozTransition:j?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",transition:j?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s"},at={height:this.t,width:this.t,opacity:Math.max(2*(1-(k-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:j?null:"opacity 0.25s",MozTransition:j?null:"opacity 0.25s",transition:j?null:"opacity 0.25s"},xn={height:this.t,width:this.t,opacity:Math.max(2*((k-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:j?null:"opacity 0.25s",MozTransition:j?null:"opacity 0.25s",transition:j?null:"opacity 0.25s"};return H.createElement("div",{className:o,style:T},H.createElement("div",{className:"react-switch-bg",style:F,onClick:i?null:this.T,onMouseDown:function(Ve){return Ve.preventDefault()}},f&&H.createElement("div",{style:L},f),h&&H.createElement("div",{style:ge},h)),H.createElement("div",{className:"react-switch-handle",style:lt,onClick:function(Ve){return Ve.preventDefault()},onMouseDown:i?null:this.p,onTouchStart:i?null:this.k,onTouchMove:i?null:this.m,onTouchEnd:i?null:this.M,onTouchCancel:i?null:this.O},v&&H.createElement("div",{style:at},v),g&&H.createElement("div",{style:xn},g)),H.createElement("input",La({},{type:"checkbox",role:"switch","aria-checked":r,checked:r,disabled:i,style:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",width:1}},m,{ref:this.S,onFocus:this.D,onBlur:this.O,onKeyUp:this.C,onChange:this.$})))},t}(E.Component);d0.defaultProps={disabled:!1,offColor:"#888",onColor:"#080",offHandleColor:"#fff",onHandleColor:"#fff",uncheckedIcon:em,checkedIcon:tm,boxShadow:null,activeBoxShadow:"0 0 2px 3px #3bf",height:28,width:56};function wo(){return wo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},wo.apply(this,arguments)}function nm(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Gr(e,t){return Gr=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Gr(e,t)}function rm(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Gr(e,t)}function Ia(e){return Ia=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Ia(e)}function im(e){try{return Function.toString.call(e).indexOf("[native code]")!==-1}catch{return typeof e=="function"}}function om(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Bi(e,t,n){return om()?Bi=Reflect.construct.bind():Bi=function(i,o,l){var s=[null];s.push.apply(s,o);var c=Function.bind.apply(i,s),u=new c;return l&&Gr(u,l.prototype),u},Bi.apply(null,arguments)}function ba(e){var t=typeof Map=="function"?new Map:void 0;return ba=function(r){if(r===null||!im(r))return r;if(typeof r!="function")throw new TypeError("Super expression must either be null or a function");if(typeof t<"u"){if(t.has(r))return t.get(r);t.set(r,i)}function i(){return Bi(r,arguments,Ia(this).constructor)}return i.prototype=Object.create(r.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),Gr(i,r)},ba(e)}var On=function(e){rm(t,e);function t(n){var r;return r=e.call(this,"An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#"+n+" for more information.")||this,nm(r)}return t}(ba(Error));function Cl(e){return Math.round(e*255)}function lm(e,t,n){return Cl(e)+","+Cl(t)+","+Cl(n)}function pu(e,t,n,r){if(r===void 0&&(r=lm),t===0)return r(n,n,n);var i=(e%360+360)%360/60,o=(1-Math.abs(2*n-1))*t,l=o*(1-Math.abs(i%2-1)),s=0,c=0,u=0;i>=0&&i<1?(s=o,c=l):i>=1&&i<2?(s=l,c=o):i>=2&&i<3?(c=o,u=l):i>=3&&i<4?(c=l,u=o):i>=4&&i<5?(s=l,u=o):i>=5&&i<6&&(s=o,u=l);var f=n-o/2,h=s+f,g=c+f,v=u+f;return r(h,g,v)}var hu={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};function am(e){if(typeof e!="string")return e;var t=e.toLowerCase();return hu[t]?"#"+hu[t]:e}var sm=/^#[a-fA-F0-9]{6}$/,cm=/^#[a-fA-F0-9]{8}$/,um=/^#[a-fA-F0-9]{3}$/,dm=/^#[a-fA-F0-9]{4}$/,El=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,fm=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,pm=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,hm=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;function Oa(e){if(typeof e!="string")throw new On(3);var t=am(e);if(t.match(sm))return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16)};if(t.match(cm)){var n=parseFloat((parseInt(""+t[7]+t[8],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16),alpha:n}}if(t.match(um))return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16)};if(t.match(dm)){var r=parseFloat((parseInt(""+t[4]+t[4],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16),alpha:r}}var i=El.exec(t);if(i)return{red:parseInt(""+i[1],10),green:parseInt(""+i[2],10),blue:parseInt(""+i[3],10)};var o=fm.exec(t.substring(0,50));if(o)return{red:parseInt(""+o[1],10),green:parseInt(""+o[2],10),blue:parseInt(""+o[3],10),alpha:parseFloat(""+o[4])>1?parseFloat(""+o[4])/100:parseFloat(""+o[4])};var l=pm.exec(t);if(l){var s=parseInt(""+l[1],10),c=parseInt(""+l[2],10)/100,u=parseInt(""+l[3],10)/100,f="rgb("+pu(s,c,u)+")",h=El.exec(f);if(!h)throw new On(4,t,f);return{red:parseInt(""+h[1],10),green:parseInt(""+h[2],10),blue:parseInt(""+h[3],10)}}var g=hm.exec(t.substring(0,50));if(g){var v=parseInt(""+g[1],10),y=parseInt(""+g[2],10)/100,w=parseInt(""+g[3],10)/100,P="rgb("+pu(v,y,w)+")",p=El.exec(P);if(!p)throw new On(4,t,P);return{red:parseInt(""+p[1],10),green:parseInt(""+p[2],10),blue:parseInt(""+p[3],10),alpha:parseFloat(""+g[4])>1?parseFloat(""+g[4])/100:parseFloat(""+g[4])}}throw new On(5)}var mm=function(t){return t.length===7&&t[1]===t[2]&&t[3]===t[4]&&t[5]===t[6]?"#"+t[1]+t[3]+t[5]:t},mu=mm;function jn(e){var t=e.toString(16);return t.length===1?"0"+t:t}function gu(e,t,n){if(typeof e=="number"&&typeof t=="number"&&typeof n=="number")return mu("#"+jn(e)+jn(t)+jn(n));if(typeof e=="object"&&t===void 0&&n===void 0)return mu("#"+jn(e.red)+jn(e.green)+jn(e.blue));throw new On(6)}function gm(e,t,n,r){if(typeof e=="string"&&typeof t=="number"){var i=Oa(e);return"rgba("+i.red+","+i.green+","+i.blue+","+t+")"}else{if(typeof e=="number"&&typeof t=="number"&&typeof n=="number"&&typeof r=="number")return r>=1?gu(e,t,n):"rgba("+e+","+t+","+n+","+r+")";if(typeof e=="object"&&t===void 0&&n===void 0&&r===void 0)return e.alpha>=1?gu(e.red,e.green,e.blue):"rgba("+e.red+","+e.green+","+e.blue+","+e.alpha+")"}throw new On(7)}function f0(e,t,n){return function(){var i=n.concat(Array.prototype.slice.call(arguments));return i.length>=t?e.apply(this,i):f0(e,t,i)}}function p0(e){return f0(e,e.length,[])}function vm(e,t,n){if(t==="transparent")return n;if(n==="transparent")return t;if(e===0)return n;var r=Oa(t),i=wo({},r,{alpha:typeof r.alpha=="number"?r.alpha:1}),o=Oa(n),l=wo({},o,{alpha:typeof o.alpha=="number"?o.alpha:1}),s=i.alpha-l.alpha,c=parseFloat(e)*2-1,u=c*s===-1?c:c+s,f=1+c*s,h=(u/f+1)/2,g=1-h,v={red:Math.floor(i.red*h+l.red*g),green:Math.floor(i.green*h+l.green*g),blue:Math.floor(i.blue*h+l.blue*g),alpha:i.alpha*parseFloat(e)+l.alpha*(1-parseFloat(e))};return gm(v)}var ym=p0(vm),xm=ym;function wm(e,t){return t==="transparent"?t:xm(parseFloat(e),"rgb(0, 0, 0)",t)}var km=p0(wm),jm=km;const Sm=b.div`
    margin: auto;
    width: 83%;
    border-bottom: 1px groove;

    display: flex;
    align-items: center;
    justify-content: space-between;

    header {
        width: 100%;
        
        div {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 1rem 0;

            span.logo {
                display: flex;
                align-items: center;

                svg {
                    width: 1.2rem;
                    height: 1.2rem;
                    margin-right: 0.3rem;
                    fill: var(--black);
                }

                span {
                    color: var(--black);
                }
            }

            span.menu {
                display: flex;
                justify-content: center;
                flex: 1;
                text-align: center;

                a {
                    color: var(--black);
                    text-decoration: none;
                    cursor: pointer;
                    padding: 0.5rem;
                    transition: 300ms;

                    &:hover {
                        transition: 300ms;
                        color: var(--react);
                        border-spacing: 1rem;
                    }
                }

                a.active {
                    font-weight: bold;
                    border-bottom: 1px solid var(--react);
                }
            }
        }
    }

    @media (max-width: 1080px) {
        width: 93%;
    }
`;function Cm({toggleTheme:e}){const t=E.useContext(er);if(!t)throw new Error("ThemeContext não foi encontrado. Verifique se ele está sendo provido corretamente.");const{colors:n,title:r}=t;return a.jsxs(Sm,{children:[a.jsx("header",{children:a.jsxs("div",{children:[a.jsxs("span",{className:"logo",children:[a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",className:"iconify iconify--logos",width:"35.93",height:"32",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 228",children:a.jsx("path",{d:"M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"})}),a.jsx("span",{children:"JP"})]}),a.jsxs("span",{className:"menu",children:[a.jsx(ht,{to:"/",children:"Home"}),a.jsx(ht,{to:"/projects",children:"Projetos"}),a.jsx(ht,{to:"/contact",children:"Contato"})]})]})}),a.jsx(d0,{onChange:e,checked:r==="light",checkedIcon:!1,uncheckedIcon:!1,height:25,width:80,handleDiameter:20,offColor:jm(.3,n.react),onColor:n.react})]})}const Em=b.div`
    margin: auto;
    width: 80%;

    @media (max-width: 1080px) {
        width: 90%;
    }

    span.react {
        color: var(--react);
    }
`,Pm=b.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
    }
`,Nm=b.div`
    margin: auto;
    padding: 5rem;
    order: 1;

    @media (max-width: 900px) {
        order: 2;
        padding: 0;
    }

    img {
        width: 20rem;
        height: 20rem;
        object-fit: cover;
        border-radius: 50%;
        border: 2px solid var(--react);
    }
`,_m=b.div`
    margin: auto;
    padding: 5rem;
    text-align: center;
    order: 2;

    @media (max-width: 1350px) {
        padding: 0;
    }

    @media (max-width: 900px) {
        padding: 5rem;
        order: 1;
    }

    h2 {
        font-weight: bold;
        font-size: 2rem;
        color: var(--black);
    }

    p {
        color: var(--black);
    }

    p:nth-child(2) {
        font-weight: bold;
        font-size: 1.5rem;
    }

    p:nth-child(3) {
        margin-top: 0.3rem;
    }
`,Tm=b.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
    }
`,zm=b.div`
    @media (max-width: 900px) {
        text-align: center;
    }

    h3 {
        font-weight: bold;
        font-size: 1.5rem;
        margin-top: 5rem;
        margin-bottom: 2rem;
        color: var(--black);
    }

    p {
        margin-bottom: 1rem;

        img {
            width: 1.2rem;
            height: 1.2rem;
            margin-right: 0.5rem;
            margin-bottom: -3px;
        }

        span {
            font-size: 1rem;
            color: var(--black);
        }
    }
`,Rm=b.div`
    margin: auto;

    img {
        width: 31rem;
        height: 31rem;
        opacity: 0.9;

        @media (max-width: 900px) {
            width: 25rem;
            height: 25rem;
        }
    }
`,Mm=b.div`
    display: flex;
    grid-template-columns: 1fr 1fr;
    margin: 3rem 0;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 900px) {
        flex-direction: column;
    }

    p {
        font-weight: bold;
        font-size: 1.5rem;
        color: var(--black);

        @media (max-width: 900px) {
            margin-bottom: 1rem;
        }
    }

    a {
        color: var(--white);
        background-color: var(--react);
        padding: 0.7rem;
        width: 13rem;
        height: 2.5rem;
        font-size: 1rem;
        border-radius: 5px;
        text-decoration: none;
        text-align: center;
        cursor: pointer;

        &:hover svg {
            transform: translateX(8px) scale(1.2);
            transition: transform 300ms;
        }

        svg {
            margin-left: 0.3rem;
            margin-bottom: -3px;
            transition: transform 300ms;
        }
    }
`,Lm=b.div`
    display: flex;
    gap: 4rem;

    @media (max-width: 900px) {
        flex-direction: column;
        max-width: 85%;
        margin: auto;
    }

    a {
        text-decoration: none;    
    }
`,Pl=b.div`
    min-height: 1rem;
    padding: 1rem;
    cursor: pointer;
    transition: transform 300ms;

    &:hover {
        transform: translateX(0.5rem) scale(1.1);
        transition: transform 300ms;
        border: 1px groove var(--border);
        border-radius: 5px;
    }

    p:nth-child(1) {

        svg {
            height: 1.2rem;
            width: 1.2rem;
            margin-right: 0.4rem;
            margin-bottom: -4px;
            fill: var(--black);
        }

        span {
            color: var(--black);
            font-size: 1rem;
            font-weight: bold;
        }
    }

    p:nth-child(2) {
        
        img {
            margin: 1.5rem auto 1rem;
            object-fit: cover;
            width: 100%;
        }

        article {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;

            span {
                border-radius: 5px;
                background-color: var(--react);
                color: var(--white);
                font-weight: bold;
                font-size: 0.8rem;
                padding: 0.2rem;
                text-align: center;
            }
        }

        p {
            color: var(--black);
            margin-top: 1rem;
        }
    }

    p:nth-child(3) {
        color: var(--black);
        margin-top: 2rem;
    }
`,Im=b.div`
    margin-top: 5rem;

    p:nth-child(1) {
        font-size: 1.5rem;
        font-weight: bold;
        color: var(--black);
    }

    p:nth-child(2) {
        margin-top: 0.5rem;
        color: var(--black);
    }
`,bm=b.div`
    display: flex;
    grid-template-columns: 1fr 1fr;
    margin-top: 2rem;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 900px) {
        flex-direction: column;
        align-items: start;
    }

    div {

        svg {
            height: 1.2rem;
            width: 1.2rem;
            margin-bottom: -3px;
            fill: var(--black);
        }

        span {
            margin-left: 0.2rem;
            font-size: 1.2rem;
            font-weight: bold;
            color: var(--black);
        }

        a {
            svg {
                height: 1.2rem;
                width: 1.2rem;
                margin-bottom: -3px;
                fill: var(--black);
                transition: 300ms;

                &:hover {
                    fill: var(--react);
                    transition: 300ms;
                }
            }
        }

        a:nth-child(3) {
            margin: 0 0.5rem;
        }

        p {
            margin-top: 0.2rem;
            color: var(--black);

            svg {
                height: 1.2rem;
                width: 1.2rem;
                margin-bottom: -3px;
                fill: var(--black);
            }
        }
    }

    a:nth-child(2) {
        color: var(--white);
        background-color: var(--react);
        padding: 0.7rem;
        width: 13rem;
        height: 2.5rem;
        font-size: 1rem;
        border-radius: 5px;
        text-decoration: none;
        text-align: center;
        cursor: pointer;

        @media (max-width: 900px) {
            margin-top: 1rem;
        }

        &:hover svg {
            transform: translateX(8px) scale(1.2);
            transition: transform 300ms;
        }

        svg {
            margin-left: 0.3rem;
            margin-bottom: -3px;
            transition: transform 300ms;
        }
    }
`,Om="/assets/Perfil.png",Yt="/assets/react.svg",$m="/assets/tag.webp",Dm="/assets/PortfolioBlack.png",Fm="/assets/dtMoney.png",Am="/assets/ConversorDeMoedas.png";function Bm(){const e=()=>{window.scrollTo(0,0)};return a.jsxs(Em,{children:[a.jsx("title",{children:"João - Home"}),a.jsxs(Pm,{children:[a.jsx(Nm,{children:a.jsx("img",{src:Om,alt:""})}),a.jsxs(_m,{children:[a.jsx("h2",{children:"Oi, me chamo João Paulo"}),a.jsxs("p",{children:[a.jsx("span",{className:"react",children:"Full Stack"})," Developer"]}),a.jsx("p",{children:"Formado em Análise e Desenvolvimento de Sistemas, Desenvolvedor Web com experiência em desenvolvimento de projetos."})]})]}),a.jsxs(Tm,{children:[a.jsxs(zm,{children:[a.jsxs("h3",{children:["Minhas principais ",a.jsx("span",{className:"react",children:"habilidades"})]}),a.jsxs("p",{children:[a.jsx("img",{src:Yt,alt:""}),a.jsx("span",{children:"Javascript"})]}),a.jsxs("p",{children:[a.jsx("img",{src:Yt,alt:""}),a.jsx("span",{children:"Typescript"})]}),a.jsxs("p",{children:[a.jsx("img",{src:Yt,alt:""}),a.jsx("span",{children:"React"})]}),a.jsxs("p",{children:[a.jsx("img",{src:Yt,alt:""}),a.jsx("span",{children:"Node"})]}),a.jsxs("p",{children:[a.jsx("img",{src:Yt,alt:""}),a.jsx("span",{children:"PHP"})]}),a.jsxs("p",{children:[a.jsx("img",{src:Yt,alt:""}),a.jsx("span",{children:"HTML"})]}),a.jsxs("p",{children:[a.jsx("img",{src:Yt,alt:""}),a.jsx("span",{children:"CSS"})]})]}),a.jsx(Rm,{children:a.jsx("img",{src:$m,alt:""})})]}),a.jsxs(Mm,{children:[a.jsxs("p",{children:["Conheça alguns dos meus ",a.jsx("span",{className:"react",children:"projetos"})]}),a.jsxs(ht,{to:"/projects",onClick:e,children:["Ver mais projetos ",a.jsx("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 512 512",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"})})]})]}),a.jsxs(Lm,{children:[a.jsx(ht,{to:"/projects/1",onClick:e,children:a.jsxs(Pl,{children:[a.jsxs("p",{children:[a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",className:"iconify iconify--logos",width:"35.93",height:"32",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 228",children:a.jsx("path",{d:"M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"})}),a.jsx("span",{children:"Portfólio"})]}),a.jsxs("p",{children:[a.jsx("img",{src:Dm,alt:""}),a.jsxs("article",{children:[a.jsx("span",{children:"Javascript"}),a.jsx("span",{children:"Typescript"}),a.jsx("span",{children:"React"}),a.jsx("span",{children:"HTML"}),a.jsx("span",{children:"CSS"}),a.jsx("span",{children:"Vite"}),a.jsx("span",{children:"Styled-Components"}),a.jsx("span",{children:"Emailjs"})]}),a.jsx("p",{children:"Esse é meu Portfólio desenvolvido usando principalmente Typescript e React"})]}),a.jsx("p",{children:"Ver projeto"})]})}),a.jsx(ht,{to:"/projects/2",onClick:e,children:a.jsxs(Pl,{children:[a.jsxs("p",{children:[a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",className:"iconify iconify--logos",width:"35.93",height:"32",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 228",children:a.jsx("path",{d:"M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"})}),a.jsx("span",{children:"DT Money"})]}),a.jsxs("p",{children:[a.jsx("img",{src:Fm,alt:""}),a.jsx("br",{}),a.jsxs("article",{children:[a.jsx("span",{children:"Javascript"}),a.jsx("span",{children:"Typescript"}),a.jsx("span",{children:"React"}),a.jsx("span",{children:"HTML"}),a.jsx("span",{children:"CSS"}),a.jsx("span",{children:"Styled-Components"})]}),a.jsx("p",{children:"Programa para calcular suas despesas com facilidade e clareza"})]}),a.jsx("p",{children:"Ver projeto"})]})}),a.jsx(ht,{to:"/projects/3",onClick:e,children:a.jsxs(Pl,{children:[a.jsxs("p",{children:[a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",className:"iconify iconify--logos",width:"35.93",height:"32",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 228",children:a.jsx("path",{d:"M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"})}),a.jsx("span",{children:"Conversor de Moedas"})]}),a.jsxs("p",{children:[a.jsx("img",{src:Am,alt:""}),a.jsx("br",{}),a.jsxs("article",{children:[a.jsx("span",{children:"PHP"}),a.jsx("span",{children:"HTML"}),a.jsx("span",{children:"CSS"})]}),a.jsx("p",{children:"Programa criado em HTML, CSS e PHP utilizando API do Banco do Brasil"})]}),a.jsx("p",{children:"Ver projeto"})]})})]}),a.jsxs(Im,{children:[a.jsxs("p",{children:["Entre em ",a.jsx("span",{className:"react",children:"Contato"})," comigo"]}),a.jsx("p",{children:"Sinta-se à vontade para entrar em contato comigo para discutir projetos interessantes na área de desenvolvimento de software."})]}),a.jsxs(bm,{children:[a.jsxs("div",{children:[a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",className:"iconify iconify--logos",width:"35.93",height:"32",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 228",children:a.jsx("path",{d:"M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"})}),a.jsx("span",{children:"João Paulo •"}),a.jsx("a",{href:"https://www.linkedin.com/in/joaovecchio/",target:"_blank",children:a.jsx("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 16 16",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"})})}),a.jsx("a",{href:"https://github.com/JoaopvSalles",target:"_blank",children:a.jsx("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 16 16",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"})})}),a.jsxs("p",{children:[a.jsx("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 512 512",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"})})," joaopaulovs2000@gmail.com"]})]}),a.jsxs(ht,{to:"/contact",onClick:e,children:["Enviar email agora ",a.jsx("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 512 512",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"})})]})]})]})}const h0=b.div`
    margin: auto;
    width: 80%;
    margin-bottom: 5rem;

    
    div.title {
        h2 {
            margin-top: 3rem;
            margin-bottom: 0.8rem;
            font-size: 2rem;
            color: var(--black);

            span.react {
                color: var(--react);
            }
        }
    }

    @media (max-width: 1080px) {
        width: 90%;
    }

    @media (max-width: 500px) {
        div.title {
            h2 {
                font-size: 1.9rem;
            }
        }
    }
    @media (max-width: 450px) {
        div.title {
            h2 {
                font-size: 1.6rem;
            }
        }
    }
`,Um=b.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 4rem;

    @media (max-width: 500px) {
        gap: 0.5rem;
    }
`,Hm=b.button`
    border: 1px groove var(--react);
    border-radius: 5px;
    padding: 0.2rem;
    background-color: transparent;
    color: var(--react);
    cursor: pointer;
    transition: 300ms;
    
    &:hover {
        color: var(--white);
        background-color: var(--react);
        transition: 300ms;
    }
    
    background-color: ${({active:e})=>e?"var(--react)":""};
    color: ${({active:e})=>e?"var(--white)":""};
`,Vm=b.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0.5rem;

    @media (max-width: 1080px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 720px) {
        grid-template-columns: 1fr;
    }
`,Wm=b.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    min-height: 30rem;
    padding: 1rem;
    cursor: pointer;
    transition: transform 300ms;

    @media (max-width: 900px) {
        max-width: 85%;
        margin: auto;
    }

    &:hover {
        transform: translateX(0.5rem) scale(1.1);
        transition: transform 300ms;
        border: 1px groove var(--border);
        border-radius: 5px;
    }
`,Zm=b.p`
    svg {
        height: 1.2rem;
        width: 1.2rem;
        margin-right: 0.4rem;
        margin-bottom: -4px;
        fill: var(--black);
    }
`,Qm=b.img`
    margin: 1.5rem auto;
    width: 100%;
`,Xm=b.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
`,Pt=b.span`
    border-radius: 5px;
    background-color: var(--react);
    color: var(--white);
    font-weight: bold;
    font-size: 0.8rem;
    padding: 0.2rem;
    text-align: center;
`,Km=b.p`
    color: var(--black);
`,Ym=b.p`
    margin-top: 1rem;
    color: var(--black);
`,Gm=b.a`
    text-decoration: none;
    color: var(--black);
`;b.a`
    text-decoration: none;
    color: var(--black);
`;const vu=[{id:1,categories:["Javascript","Typescript","React","HTML","CSS","Vite","Styled-Components","Emailjs"],name:"Portfólio",imageUrl:"/assets/PortfolioBlack.png",tech1:"Javascript",tech2:"Typescript",tech3:"React",tech4:"HTML",tech5:"CSS",tech6:"Vite",tech7:"Styled-Components",tech8:"Emailjs",description:"Esse é meu Portfólio desenvolvido usando principalmente Typescript e React",link:"/projects/1"},{id:2,categories:["Javascript","Typescript","React","HTML","CSS","Styled-Components"],name:"DT Money",imageUrl:"/assets/dtMoney.png",tech1:"Javascript",tech2:"Typescript",tech3:"React",tech4:"HTML",tech5:"CSS",tech6:"Styled-Components",description:"Programa para calcular suas despesas com facilidade e clareza",link:"/projects/2"},{id:3,categories:["PHP","HTML","CSS"],name:"Conversor de Moedas",imageUrl:"/assets/ConversorDeMoedas.png",tech1:"PHP",tech2:"HTML",tech3:"CSS",description:"Programa criado em HTML, CSS e PHP utilizando API do Banco do Brasil",link:"/projects/3"},{id:4,categories:["Node","HTML","CSS"],name:"Projeto",imageUrl:"/assets/EmBreve.png",tech1:"Node",tech2:"HTML",tech3:"CSS",description:"Em Breve",link:"#"},{id:5,categories:["Node","HTML","CSS"],name:"Projeto",imageUrl:"/assets/EmBreve.png",tech1:"Node",tech2:"HTML",tech3:"CSS",description:"Em Breve",link:"#"},{id:6,categories:["HTML","CSS"],name:"Projeto",imageUrl:"/assets/EmBreve.png",tech1:"HTML",tech2:"CSS",description:"Em Breve",link:"#"}],Jm=["Javascript","Typescript","React","Node","PHP","HTML","CSS","Vite","Styled-Components","Emailjs"],qm=({name:e,imageUrl:t,tech1:n,tech2:r,tech3:i,tech4:o,tech5:l,tech6:s,tech7:c,tech8:u,description:f,link:h})=>a.jsxs(h0,{children:[a.jsx("title",{children:"João - Projetos"}),a.jsx(ht,{to:h,children:a.jsx(Gm,{children:a.jsxs(Wm,{children:[a.jsxs(Zm,{children:[a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",className:"iconify iconify--logos",width:"35.93",height:"32",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 228",children:a.jsx("path",{d:"M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"})}),a.jsx("span",{children:e})]}),a.jsx(Qm,{src:t,alt:e}),a.jsxs(Xm,{children:[n&&a.jsx(Pt,{children:n}),r&&a.jsx(Pt,{children:r}),i&&a.jsx(Pt,{children:i}),o&&a.jsx(Pt,{children:o}),l&&a.jsx(Pt,{children:l}),s&&a.jsx(Pt,{children:s}),c&&a.jsx(Pt,{children:c}),u&&a.jsx(Pt,{children:u})]}),a.jsx(Km,{children:f}),a.jsx(Ym,{children:"Ver Projeto"})]})})})]});function e3(){const[e,t]=E.useState([]),n=i=>{t(o=>o.includes(i)?o.filter(l=>l!==i):[...o,i])},r=e.length===0?vu:vu.filter(i=>i.categories.some(o=>e.includes(o)));return a.jsx(h0,{children:a.jsxs("div",{className:"title",children:[a.jsxs("h2",{children:["Conheça meus principais ",a.jsx("span",{className:"react",children:" projetos"})]}),a.jsx(Um,{children:Jm.map(i=>a.jsx(Hm,{onClick:()=>n(i),active:e.includes(i),children:i.charAt(0).toUpperCase()+i.slice(1)},i))}),a.jsx(Vm,{children:r.map(i=>a.jsx(qm,{...i},i.id))})]})})}const t3=b.div`
    margin: auto;
    width: 80%;
    margin-bottom: 5rem;

    @media (max-width: 1080px) {
        width: 90%;
    }

    span.react {
        color: var(--react);
    }

    div.return {
        cursor: pointer;
        color: var(--black);
        margin-top: 1rem;

        svg {
            margin-right: 3px;
            margin-bottom: -2px;
        }
    }

    h2 {
        color: var(--black);
        margin-top: 2rem;
        margin-bottom: 1rem;
        font-size: 2rem;
    }

    div.project {
        display: grid;
        grid-template-columns: 2fr 1fr;
        align-items: center;

        @media (max-width: 1000px) {
            grid-template-columns: 1fr;
            gap: 1rem;
        }

.img-carousel {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.img-carousel img {
    width: 100%;
    height: auto;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transition: opacity 0.5s ease;
}

.img-carousel img.active {
    opacity: 1;
    position: relative;
}

/* Estilos para as setas */
.img-carousel .prev, .img-carousel .next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
    z-index: 2;
    color: var(--black);
    transition: background-color 0.3s ease;
}

.img-carousel .prev:hover, .img-carousel .next:hover {
    color: var(--react);
}

/* Posicionar a seta esquerda */
.img-carousel .prev {
    left: 10px;
}

/* Posicionar a seta direita */
.img-carousel .next {
    right: 10px;
}

.img-carousel img.next-enter {
    transform: translateX(100%);
    animation: slideInFromRight 0.5s forwards;
}

.img-carousel img.next-exit {
    transform: translateX(0);
    animation: slideOutToLeft 0.5s forwards;
}

.img-carousel img.prev-enter {
    transform: translateX(-100%);
    animation: slideInFromLeft 0.5s forwards;
}

.img-carousel img.prev-exit {
    transform: translateX(0);
    animation: slideOutToRight 0.5s forwards;
}

@keyframes slideInFromRight {
    from {
        transform: translateX(100%);
    }
    to {
        transform: translateX(0);
    }
}

@keyframes slideOutToLeft {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(-100%);
    }
}

@keyframes slideInFromLeft {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(0);
    }
}

@keyframes slideOutToRight {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(100%);
    }
}


        div.description {
            text-align: start;

            h3 {
                color: var(--black);
                font-size: 1.5rem;
                margin-bottom: 0.5rem;
            }

            p {
                color: var(--black);
                font-size: 1rem;
            }
        }
    }

    div.details {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        margin-top: 2rem;

        @media (max-width: 1000px) {
            grid-template-columns: 1fr;
            gap: 3rem;
        }

        div.functions {

            h3 {
                color: var(--black);
                margin-bottom: 0.5rem;
                font-size: 1.5rem;
            }

            p {
                margin-top: 0.1rem;

                img {
                    height: 1.2rem;
                    width: 1.2rem;
                    margin-right: 0.5rem;
                    margin-bottom: -3px;
                }

                span {
                    color: var(--black);
                }
            }
        }

        div.techs {

            h3 {
                color: var(--black);
                margin-bottom: 0.5rem;
                font-size: 1.5rem;
            }

            p {
                margin-top: 0.1rem;

                img {
                    height: 1.2rem;
                    width: 1.2rem;
                    margin-right: 0.5rem;
                    margin-bottom: -3px;
                }

                span {
                    color: var(--black);
                }
            }
        }

        div.repository {

            h3 {
                color: var(--black);
                margin-bottom: 1.5rem;
                font-size: 1.5rem;
            }

            a {
                border: 1px groove var(--react);
                border-radius: 10px;
                text-decoration: none;
                font-weight: bold;
                color: var(--react);
                margin-right: 1rem;
                padding: 0.8rem;
                transition: 500ms;

                &:hover {
                    color: var(--white);
                    background-color: var(--react);
                    transition: 500ms;
                }

                svg {
                    margin-right: 0.5rem;
                    margin-bottom: -1px;

                    &:hover {
                        fill: var(--white);
                    }
                }
            }
        }
    }
`,Oe="/assets/react.svg",n3="/assets/PortfolioBlack.png",r3="/assets/PortfolioWhite.png";function i3(){const e=yn(),t=[n3,r3],[n,r]=E.useState(0),[i,o]=E.useState(null),l=u=>{o(u),setTimeout(()=>{r(f=>u==="next"?(f+1)%t.length:(f-1+t.length)%t.length),o(null)},500)},s=()=>l("next"),c=()=>l("prev");return a.jsxs(t3,{children:[a.jsxs("div",{className:"return",onClick:()=>e(-1),children:[a.jsxs("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 24 24",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:[a.jsx("path",{fill:"none",d:"M0 0h24v24H0z"}),a.jsx("path",{d:"M17.77 3.77L16 2 6 12l10 10 1.77-1.77L9.54 12z"})]}),a.jsx("span",{children:"Voltar"})]}),a.jsxs("h2",{children:["Projeto ",a.jsx("span",{className:"react",children:"Portfólio"})]}),a.jsxs("div",{className:"project",children:[a.jsxs("div",{className:"img-carousel",children:[a.jsx("button",{className:"prev",onClick:c,children:a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"48",height:"48",fill:"currentColor",children:a.jsx("path",{d:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z"})})}),t.map((u,f)=>a.jsx("img",{src:u,alt:`Imagem ${f}`,className:`
                                ${f===n?"active":""}
                                ${i==="next"&&f===(n+1)%t.length?"next-enter":""}
                                ${i==="next"&&f===n?"next-exit":""}
                                ${i==="prev"&&f===(n-1+t.length)%t.length?"prev-enter":""}
                                ${i==="prev"&&f===n?"prev-exit":""}
                            `},f)),a.jsx("button",{className:"next",onClick:s,children:a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"48",height:"48",fill:"currentColor",children:a.jsx("path",{d:"M8.59 16.59L13.17 12l-4.58-4.59L10 6l6 6-6 6z"})})})]}),a.jsxs("div",{className:"description",children:[a.jsxs("h3",{children:[a.jsx("span",{className:"react",children:"Descrição"})," do projeto:"]}),a.jsxs("p",{children:["Este é o meu próprio portfólio, desenvolvido com o objetivo de apresentar meus principais projetos pessoais e habilidades de desenvolvimento web.",a.jsx("br",{}),"Utilizando pricinpalmente TypeScript e React, este portfólio é uma plataforma que destaca minha experiência em desenvolvimento de software."]})]})]}),a.jsxs("div",{className:"details",children:[a.jsxs("div",{className:"functions",children:[a.jsxs("h3",{children:["Principais ",a.jsx("span",{className:"react",children:"Funcionalidades"}),":"]}),a.jsxs("p",{children:[a.jsx("img",{src:Oe,alt:""}),a.jsx("span",{children:"Visualizar projetos"})]}),a.jsxs("p",{children:[a.jsx("img",{src:Oe,alt:""}),a.jsx("span",{children:"Alterar entre tema claro ou escuro"})]}),a.jsxs("p",{children:[a.jsx("img",{src:Oe,alt:""}),a.jsx("span",{children:"Filtrar projetos por tag"})]}),a.jsxs("p",{children:[a.jsx("img",{src:Oe,alt:""}),a.jsx("span",{children:"Enviar Email para contato"})]})]}),a.jsxs("div",{className:"techs",children:[a.jsxs("h3",{children:["Principais ",a.jsx("span",{className:"react",children:"Tecnologias"}),":"]}),a.jsxs("p",{children:[a.jsx("img",{src:Oe,alt:""}),a.jsx("span",{children:"Javascript"})]}),a.jsxs("p",{children:[a.jsx("img",{src:Oe,alt:""}),a.jsx("span",{children:"Typescript"})]}),a.jsxs("p",{children:[a.jsx("img",{src:Oe,alt:""}),a.jsx("span",{children:"React"})]}),a.jsxs("p",{children:[a.jsx("img",{src:Oe,alt:""}),a.jsx("span",{children:"HTML"})]}),a.jsxs("p",{children:[a.jsx("img",{src:Oe,alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:Oe,alt:""}),a.jsx("span",{children:"Vite"})]}),a.jsxs("p",{children:[a.jsx("img",{src:Oe,alt:""}),a.jsx("span",{children:"Styled-Components"})]}),a.jsxs("p",{children:[a.jsx("img",{src:Oe,alt:""}),a.jsx("span",{children:"Emailjs"})]})]}),a.jsxs("div",{className:"repository",children:[a.jsxs("h3",{children:["Onde ",a.jsx("span",{className:"react",children:"Encontrar"})," o Projeto:"]}),a.jsxs("a",{href:"https://github.com/JoaopvSalles",target:"_blank",children:[a.jsx("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 16 16",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"})}),"Ver Repositório"]})]})]})]})}const o3=b.div`
    margin: auto;
    width: 80%;
    margin-bottom: 5rem;

    span.react {
        color: var(--react);
    }

    div.return {
        cursor: pointer;
        color: var(--black);
        margin-top: 1rem;

        svg {
            margin-right: 3px;
            margin-bottom: -2px;
        }
    }

    h2 {
        color: var(--black);
        margin-top: 2rem;
        margin-bottom: 1rem;
        font-size: 2rem;
    }

    div.project {
        display: grid;
        grid-template-columns: 2fr 1fr;
        
        align-items: center;

        div.img {
            img {
                width: 95%;
            }
        }

        div.description {
            text-align: start;

            h3 {
                color: var(--black);
                font-size: 1.5rem;
                margin-bottom: 0.8rem;
            }

            p {
                color: var(--black);
                font-size: 1rem;
            }
        }
    }

    div.details {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        margin-top: 1.5rem;

        div.functions {

            h3 {
                color: var(--black);
                margin-bottom: 0.4rem;
                font-size: 1.5rem;
            }

            p {
                margin-top: 0.1rem;

                img {
                    height: 1.2rem;
                    width: 1.2rem;
                    margin-right: 0.5rem;
                    margin-bottom: -3px;
                }

                span {
                    color: var(--black);
                }
            }
        }

        div.techs {

            h3 {
                color: var(--black);
                margin-bottom: 0.4rem;
                font-size: 1.5rem;
            }

            p {
                margin-top: 0.1rem;

                img {
                    height: 1.2rem;
                    width: 1.2rem;
                    margin-right: 0.5rem;
                    margin-bottom: -3px;
                }

                span {
                    color: var(--black);
                }
            }
        }

        div.repository {
            h3 {
                color: var(--black);
                margin-bottom: 1.5rem;
                font-size: 1.5rem;
            }
            a {
            border: 1px groove var(--react);
            border-radius: 10px;
            text-decoration: none;
            font-weight: bold;
            color: var(--react);
            margin-right: 1rem;
            padding: 0.8rem;
            transition: 500ms;

            &:hover {
                color: var(--white);
                background-color: var(--react);
                transition: 500ms;
            }

            svg {
                margin-right: 0.5rem;
                margin-bottom: -1px;

                &:hover {
                    fill: var(--white);
                }
            }
        }
    }
`,ut="/assets/react.svg",l3="/assets/dtMoney.png";function a3(){const e=yn();return a.jsxs(o3,{children:[a.jsxs("div",{className:"return",onClick:()=>e(-1),children:[a.jsxs("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 24 24",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:[a.jsx("path",{fill:"none",d:"M0 0h24v24H0z"}),a.jsx("path",{d:"M17.77 3.77L16 2 6 12l10 10 1.77-1.77L9.54 12z"})]}),a.jsx("span",{children:"Voltar"})]}),a.jsxs("h2",{children:["Projeto ",a.jsx("span",{className:"react",children:"DT Money"})]}),a.jsxs("div",{className:"project",children:[a.jsx("div",{className:"img",children:a.jsx("img",{src:l3,alt:""})}),a.jsxs("div",{className:"description",children:[a.jsxs("h3",{children:[a.jsx("span",{className:"react",children:"Descrição"})," do projeto:"]}),a.jsxs("p",{children:["Programa para calcular suas despesas.",a.jsx("br",{}),a.jsx("br",{}),"Como cadastar uma nova transação:",a.jsx("br",{}),'- clique em "nova transação"',a.jsx("br",{}),"- digite um título,",a.jsx("br",{}),"- digite um valor em R$,",a.jsx("br",{}),'- marque uma opção "entrada" ou "saída" caso você tenha recebido ou gasto dinheiro com a transação,',a.jsx("br",{}),"- digite uma categoria,",a.jsx("br",{}),'- clique em "cadastrar".',a.jsx("br",{}),a.jsx("br",{}),"Sua transição será adicionada a uma lista com todas as informações fornecidas e será gerada uma data exata do dia em que foi cadastrado a transição, e então você poderá adicionar uma nova transação.",a.jsx("br",{}),a.jsx("br",{}),'Conforme você adiciona novas transações o programa irá calcular automaticamente, seu saldo total de "entrada" em R$, seu saldo total de "saída" em R$, e seu saldo "final" em R$ positivo ou negativo.']})]})]}),a.jsxs("div",{className:"details",children:[a.jsxs("div",{className:"functions",children:[a.jsxs("h3",{children:["Principais ",a.jsx("span",{className:"react",children:"Funcionalidades"}),":"]}),a.jsxs("p",{children:[a.jsx("img",{src:ut,alt:""}),a.jsx("span",{children:"Criar novos cards com transações"})]}),a.jsxs("p",{children:[a.jsx("img",{src:ut,alt:""}),a.jsx("span",{children:"Adicionar data do dia em que a trasação é criada"})]}),a.jsxs("p",{children:[a.jsx("img",{src:ut,alt:""}),a.jsx("span",{children:"Calcular saldos de Entrada, Saída e Total"})]})]}),a.jsxs("div",{className:"techs",children:[a.jsxs("h3",{children:["Principais ",a.jsx("span",{className:"react",children:"Tecnologias"}),":"]}),a.jsxs("p",{children:[a.jsx("img",{src:ut,alt:""}),a.jsx("span",{children:"Javascript"})]}),a.jsxs("p",{children:[a.jsx("img",{src:ut,alt:""}),a.jsx("span",{children:"Typescript"})]}),a.jsxs("p",{children:[a.jsx("img",{src:ut,alt:""}),a.jsx("span",{children:"React"})]}),a.jsxs("p",{children:[a.jsx("img",{src:ut,alt:""}),a.jsx("span",{children:"HTML"})]}),a.jsxs("p",{children:[a.jsx("img",{src:ut,alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:ut,alt:""}),a.jsx("span",{children:"Styled-Components"})]})]}),a.jsxs("div",{className:"repository",children:[a.jsxs("h3",{children:["Onde ",a.jsx("span",{className:"react",children:"Encontrar"})," o Projeto:"]}),a.jsxs("a",{href:"https://github.com/JoaopvSalles/dtmoney",target:"_blank",children:[a.jsx("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 16 16",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"})}),"Ver Repositório"]})]})]})]})}const s3=b.div`
    margin: auto;
    width: 80%;
    margin-bottom: 5rem;

    span.react {
        color: var(--react);
    }

    div.return {
        cursor: pointer;
        color: var(--black);
        margin-top: 1rem;

        svg {
            margin-right: 3px;
            margin-bottom: -2px;
        }
    }

    h2 {
        color: var(--black);
        margin-top: 2rem;
        margin-bottom: 1rem;
        font-size: 2rem;
    }

    div.project {
        display: grid;
        grid-template-columns: 2fr 1fr;
        
        align-items: center;

        div.img {
            img {
                width: 95%;
            }
        }

        div.description {
            text-align: start;

            h3 {
                color: var(--black);
                font-size: 1.5rem;
                margin-bottom: 0.8rem;
            }

            p {
                color: var(--black);
                font-size: 1rem;
            }
        }
    }

    div.details {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        margin-top: 1.5rem;

        div.functions {

            h3 {
                color: var(--black);
                margin-bottom: 0.4rem;
                font-size: 1.5rem;
            }

            p {
                margin-top: 0.1rem;

                img {
                    height: 1.2rem;
                    width: 1.2rem;
                    margin-right: 0.5rem;
                    margin-bottom: -3px;
                }

                span {
                    color: var(--black);
                }
            }
        }

        div.techs {

            h3 {
                color: var(--black);
                margin-bottom: 0.4rem;
                font-size: 1.5rem;
            }

            p {
                margin-top: 0.1rem;

                img {
                    height: 1.2rem;
                    width: 1.2rem;
                    margin-right: 0.5rem;
                    margin-bottom: -3px;
                }

                span {
                    color: var(--black);
                }
            }
        }

        div.repository {
            h3 {
                color: var(--black);
                margin-bottom: 1.5rem;
                font-size: 1.5rem;
            }
            a {
            border: 1px groove var(--react);
            border-radius: 10px;
            text-decoration: none;
            font-weight: bold;
            color: var(--react);
            margin-right: 1rem;
            padding: 0.8rem;
            transition: 500ms;

            &:hover {
                color: var(--white);
                background-color: var(--react);
                transition: 500ms;
            }

            svg {
                margin-right: 0.5rem;
                margin-bottom: -1px;

                &:hover {
                    fill: var(--white);
                }
            }
        }
    }
`,hr="/assets/react.svg",c3="/assets/ConversorDeMoedas.png";function u3(){const e=yn();return a.jsxs(s3,{children:[a.jsxs("div",{className:"return",onClick:()=>e(-1),children:[a.jsxs("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 24 24",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:[a.jsx("path",{fill:"none",d:"M0 0h24v24H0z"}),a.jsx("path",{d:"M17.77 3.77L16 2 6 12l10 10 1.77-1.77L9.54 12z"})]}),a.jsx("span",{children:"Voltar"})]}),a.jsxs("h2",{children:["Projeto ",a.jsx("span",{className:"react",children:"Conversor de Moedas"})]}),a.jsxs("div",{className:"project",children:[a.jsx("div",{className:"img",children:a.jsx("img",{src:c3,alt:""})}),a.jsxs("div",{className:"description",children:[a.jsxs("h3",{children:[a.jsx("span",{className:"react",children:"Descrição"})," do projeto:"]}),a.jsxs("p",{children:["Programa criado em HTML CSS PHP utilizando API com o intuito de praticar e desenvolver conhecimento nas tecnologias.",a.jsx("br",{}),'Digite um valor em Real e clique em "Converter", o programa irá fazer a conversão atualizada para o Dolar diretamente pela API do Banco do Brasil e mostrar o resultado na tela.']})]})]}),a.jsxs("div",{className:"details",children:[a.jsxs("div",{className:"functions",children:[a.jsxs("h3",{children:["Principais ",a.jsx("span",{className:"react",children:"Funcionalidades"}),":"]}),a.jsxs("p",{children:[a.jsx("img",{src:hr,alt:""}),a.jsx("span",{children:"Cálculo de conversão de Real para Dolar"})]}),a.jsxs("p",{children:[a.jsx("img",{src:hr,alt:""}),a.jsx("span",{children:"Integração com API do Banco do Brasil"})]})]}),a.jsxs("div",{className:"techs",children:[a.jsxs("h3",{children:["Principais ",a.jsx("span",{className:"react",children:"Tecnologias"}),":"]}),a.jsxs("p",{children:[a.jsx("img",{src:hr,alt:""}),a.jsx("span",{children:"PHP"})]}),a.jsxs("p",{children:[a.jsx("img",{src:hr,alt:""}),a.jsx("span",{children:"HTML"})]}),a.jsxs("p",{children:[a.jsx("img",{src:hr,alt:""}),a.jsx("span",{children:"CSS"})]})]}),a.jsxs("div",{className:"repository",children:[a.jsxs("h3",{children:["Onde ",a.jsx("span",{className:"react",children:"Encontrar"})," o Projeto:"]}),a.jsxs("a",{href:"https://github.com/JoaopvSalles/Project-PHP-ConversorDeMoedas",target:"_blank",children:[a.jsx("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 16 16",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"})}),"Ver Repositório"]})]})]})]})}const d3=b.div`
    margin: auto;
    width: 80%;
    margin-bottom: 5rem;

    span.react {
        color: var(--react);
    }

    div.return {
        cursor: pointer;
        color: var(--black);
        margin-top: 1rem;

        svg {
            margin-right: 3px;
            margin-bottom: -2px;
        }
    }

    h2 {
        color: var(--black);
        margin-top: 2rem;
        margin-bottom: 1rem;
        font-size: 2rem;
    }

    div.project {
        display: grid;
        grid-template-columns: 2fr 1fr;
        
        align-items: center;

        div.img {
            img {
                width: 95%;
            }
        }

        div.description {
            text-align: start;

            h3 {
                color: var(--black);
                font-size: 1.5rem;
                margin-bottom: 0.8rem;
            }

            p {
                color: var(--black);
                font-size: 1rem;
            }
        }
    }

    div.details {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        margin-top: 1.5rem;

        div.functions {

            h3 {
                color: var(--black);
                margin-bottom: 0.4rem;
                font-size: 1.5rem;
            }

            p {
                margin-top: 0.1rem;

                img {
                    height: 1.2rem;
                    width: 1.2rem;
                    margin-right: 0.5rem;
                    margin-bottom: -3px;
                }

                span {
                    color: var(--black);
                }
            }
        }

        div.techs {

            h3 {
                color: var(--black);
                margin-bottom: 0.4rem;
                font-size: 1.5rem;
            }

            p {
                margin-top: 0.1rem;

                img {
                    height: 1.2rem;
                    width: 1.2rem;
                    margin-right: 0.5rem;
                    margin-bottom: -3px;
                }

                span {
                    color: var(--black);
                }
            }
        }

        div.repository {
            h3 {
                color: var(--black);
                margin-bottom: 1.5rem;
                font-size: 1.5rem;
            }
            a {
            border: 1px groove var(--react);
            border-radius: 10px;
            text-decoration: none;
            font-weight: bold;
            color: var(--react);
            margin-right: 1rem;
            padding: 0.8rem;
            transition: 500ms;

            &:hover {
                color: var(--white);
                background-color: var(--react);
                transition: 500ms;
            }

            svg {
                margin-right: 0.5rem;
                margin-bottom: -1px;

                &:hover {
                    fill: var(--white);
                }
            }
        }
    }
`;function f3(){const e=yn();return a.jsxs(d3,{children:[a.jsxs("div",{className:"return",onClick:()=>e(-1),children:[a.jsxs("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 24 24",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:[a.jsx("path",{fill:"none",d:"M0 0h24v24H0z"}),a.jsx("path",{d:"M17.77 3.77L16 2 6 12l10 10 1.77-1.77L9.54 12z"})]}),a.jsx("span",{children:"Voltar"})]}),a.jsxs("h2",{children:["Projeto ",a.jsx("span",{className:"react",children:"Nome Projeto"})]}),a.jsxs("div",{className:"project",children:[a.jsx("div",{className:"img",children:a.jsx("img",{src:"../../public/EmBreve.png",alt:""})}),a.jsxs("div",{className:"description",children:[a.jsxs("h3",{children:[a.jsx("span",{className:"react",children:"Descrição"})," do projeto:"]}),a.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus animi cumque deserunt praesentium alias tenetur quas ab quaerat, possimus pariatur? Neque, facere provident quisquam cum veniam sed eveniet soluta a"})]})]}),a.jsxs("div",{className:"details",children:[a.jsxs("div",{className:"functions",children:[a.jsxs("h3",{children:["Principais ",a.jsx("span",{className:"react",children:"Funcionalidades"}),":"]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]})]}),a.jsxs("div",{className:"techs",children:[a.jsxs("h3",{children:["Principais ",a.jsx("span",{className:"react",children:"Tecnologias"}),":"]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]})]}),a.jsxs("div",{className:"repository",children:[a.jsxs("h3",{children:["Onde ",a.jsx("span",{className:"react",children:"Encontrar"})," o Projeto:"]}),a.jsxs("a",{href:"https://github.com/JoaopvSalles",target:"_blank",children:[a.jsx("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 16 16",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"})}),"Ver Repositório"]})]})]})]})}const p3=b.div`
    margin: auto;
    width: 80%;
    margin-bottom: 5rem;

    span.react {
        color: var(--react);
    }

    div.return {
        cursor: pointer;
        color: var(--black);
        margin-top: 1rem;

        svg {
            margin-right: 3px;
            margin-bottom: -2px;
        }
    }

    h2 {
        color: var(--black);
        margin-top: 2rem;
        margin-bottom: 1rem;
        font-size: 2rem;
    }

    div.project {
        display: grid;
        grid-template-columns: 2fr 1fr;
        
        align-items: center;

        div.img {
            img {
                width: 95%;
            }
        }

        div.description {
            text-align: start;

            h3 {
                color: var(--black);
                font-size: 1.5rem;
                margin-bottom: 0.8rem;
            }

            p {
                color: var(--black);
                font-size: 1rem;
            }
        }
    }

    div.details {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        margin-top: 1.5rem;

        div.functions {

            h3 {
                color: var(--black);
                margin-bottom: 0.4rem;
                font-size: 1.5rem;
            }

            p {
                margin-top: 0.1rem;

                img {
                    height: 1.2rem;
                    width: 1.2rem;
                    margin-right: 0.5rem;
                    margin-bottom: -3px;
                }

                span {
                    color: var(--black);
                }
            }
        }

        div.techs {

            h3 {
                color: var(--black);
                margin-bottom: 0.4rem;
                font-size: 1.5rem;
            }

            p {
                margin-top: 0.1rem;

                img {
                    height: 1.2rem;
                    width: 1.2rem;
                    margin-right: 0.5rem;
                    margin-bottom: -3px;
                }

                span {
                    color: var(--black);
                }
            }
        }

        div.repository {
            h3 {
                color: var(--black);
                margin-bottom: 1.5rem;
                font-size: 1.5rem;
            }
            a {
            border: 1px groove var(--react);
            border-radius: 10px;
            text-decoration: none;
            font-weight: bold;
            color: var(--react);
            margin-right: 1rem;
            padding: 0.8rem;
            transition: 500ms;

            &:hover {
                color: var(--white);
                background-color: var(--react);
                transition: 500ms;
            }

            svg {
                margin-right: 0.5rem;
                margin-bottom: -1px;

                &:hover {
                    fill: var(--white);
                }
            }
        }
    }
`;function h3(){const e=yn();return a.jsxs(p3,{children:[a.jsxs("div",{className:"return",onClick:()=>e(-1),children:[a.jsxs("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 24 24",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:[a.jsx("path",{fill:"none",d:"M0 0h24v24H0z"}),a.jsx("path",{d:"M17.77 3.77L16 2 6 12l10 10 1.77-1.77L9.54 12z"})]}),a.jsx("span",{children:"Voltar"})]}),a.jsxs("h2",{children:["Projeto ",a.jsx("span",{className:"react",children:"Nome Projeto"})]}),a.jsxs("div",{className:"project",children:[a.jsx("div",{className:"img",children:a.jsx("img",{src:"../../public/EmBreve.png",alt:""})}),a.jsxs("div",{className:"description",children:[a.jsxs("h3",{children:[a.jsx("span",{className:"react",children:"Descrição"})," do projeto:"]}),a.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus animi cumque deserunt praesentium alias tenetur quas ab quaerat, possimus pariatur? Neque, facere provident quisquam cum veniam sed eveniet soluta a"})]})]}),a.jsxs("div",{className:"details",children:[a.jsxs("div",{className:"functions",children:[a.jsxs("h3",{children:["Principais ",a.jsx("span",{className:"react",children:"Funcionalidades"}),":"]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]})]}),a.jsxs("div",{className:"techs",children:[a.jsxs("h3",{children:["Principais ",a.jsx("span",{className:"react",children:"Tecnologias"}),":"]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]})]}),a.jsxs("div",{className:"repository",children:[a.jsxs("h3",{children:["Onde ",a.jsx("span",{className:"react",children:"Encontrar"})," o Projeto:"]}),a.jsxs("a",{href:"https://github.com/JoaopvSalles",target:"_blank",children:[a.jsx("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 16 16",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"})}),"Ver Repositório"]})]})]})]})}const m3=b.div`
    margin: auto;
    width: 80%;
    margin-bottom: 5rem;

    span.react {
        color: var(--react);
    }

    div.return {
        cursor: pointer;
        color: var(--black);
        margin-top: 1rem;

        svg {
            margin-right: 3px;
            margin-bottom: -2px;
        }
    }

    h2 {
        color: var(--black);
        margin-top: 2rem;
        margin-bottom: 1rem;
        font-size: 2rem;
    }

    div.project {
        display: grid;
        grid-template-columns: 2fr 1fr;
        
        align-items: center;

        div.img {
            img {
                width: 95%;
            }
        }

        div.description {
            text-align: start;

            h3 {
                color: var(--black);
                font-size: 1.5rem;
                margin-bottom: 0.8rem;
            }

            p {
                color: var(--black);
                font-size: 1rem;
            }
        }
    }

    div.details {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        margin-top: 1.5rem;

        div.functions {

            h3 {
                color: var(--black);
                margin-bottom: 0.4rem;
                font-size: 1.5rem;
            }

            p {
                margin-top: 0.1rem;

                img {
                    height: 1.2rem;
                    width: 1.2rem;
                    margin-right: 0.5rem;
                    margin-bottom: -3px;
                }

                span {
                    color: var(--black);
                }
            }
        }

        div.techs {

            h3 {
                color: var(--black);
                margin-bottom: 0.4rem;
                font-size: 1.5rem;
            }

            p {
                margin-top: 0.1rem;

                img {
                    height: 1.2rem;
                    width: 1.2rem;
                    margin-right: 0.5rem;
                    margin-bottom: -3px;
                }

                span {
                    color: var(--black);
                }
            }
        }

        div.repository {
            h3 {
                color: var(--black);
                margin-bottom: 1.5rem;
                font-size: 1.5rem;
            }
            a {
            border: 1px groove var(--react);
            border-radius: 10px;
            text-decoration: none;
            font-weight: bold;
            color: var(--react);
            margin-right: 1rem;
            padding: 0.8rem;
            transition: 500ms;

            &:hover {
                color: var(--white);
                background-color: var(--react);
                transition: 500ms;
            }

            svg {
                margin-right: 0.5rem;
                margin-bottom: -1px;

                &:hover {
                    fill: var(--white);
                }
            }
        }
    }
`;function g3(){const e=yn();return a.jsxs(m3,{children:[a.jsxs("div",{className:"return",onClick:()=>e(-1),children:[a.jsxs("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 24 24",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:[a.jsx("path",{fill:"none",d:"M0 0h24v24H0z"}),a.jsx("path",{d:"M17.77 3.77L16 2 6 12l10 10 1.77-1.77L9.54 12z"})]}),a.jsx("span",{children:"Voltar"})]}),a.jsxs("h2",{children:["Projeto ",a.jsx("span",{className:"react",children:"Nome Projeto"})]}),a.jsxs("div",{className:"project",children:[a.jsx("div",{className:"img",children:a.jsx("img",{src:"../../public/EmBreve.png",alt:""})}),a.jsxs("div",{className:"description",children:[a.jsxs("h3",{children:[a.jsx("span",{className:"react",children:"Descrição"})," do projeto:"]}),a.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus animi cumque deserunt praesentium alias tenetur quas ab quaerat, possimus pariatur? Neque, facere provident quisquam cum veniam sed eveniet soluta a"})]})]}),a.jsxs("div",{className:"details",children:[a.jsxs("div",{className:"functions",children:[a.jsxs("h3",{children:["Principais ",a.jsx("span",{className:"react",children:"Funcionalidades"}),":"]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]})]}),a.jsxs("div",{className:"techs",children:[a.jsxs("h3",{children:["Principais ",a.jsx("span",{className:"react",children:"Tecnologias"}),":"]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]})]}),a.jsxs("div",{className:"repository",children:[a.jsxs("h3",{children:["Onde ",a.jsx("span",{className:"react",children:"Encontrar"})," o Projeto:"]}),a.jsxs("a",{href:"https://github.com/JoaopvSalles",target:"_blank",children:[a.jsx("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 16 16",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"})}),"Ver Repositório"]})]})]})]})}class oi{constructor(t=0,n="Network Error"){this.status=t,this.text=n}}const v3=()=>{if(!(typeof localStorage>"u"))return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,t)=>Promise.resolve(localStorage.setItem(e,t)),remove:e=>Promise.resolve(localStorage.removeItem(e))}},ce={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:v3()},$s=e=>e?typeof e=="string"?{publicKey:e}:e.toString()==="[object Object]"?e:{}:{},y3=(e,t="https://api.emailjs.com")=>{if(!e)return;const n=$s(e);ce.publicKey=n.publicKey,ce.blockHeadless=n.blockHeadless,ce.storageProvider=n.storageProvider,ce.blockList=n.blockList,ce.limitRate=n.limitRate,ce.origin=n.origin||t},m0=async(e,t,n={})=>{const r=await fetch(ce.origin+e,{method:"POST",headers:n,body:t}),i=await r.text(),o=new oi(r.status,i);if(r.ok)return o;throw o},g0=(e,t,n)=>{if(!e||typeof e!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||typeof t!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n||typeof n!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},x3=e=>{if(e&&e.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},v0=e=>e.webdriver||!e.languages||e.languages.length===0,y0=()=>new oi(451,"Unavailable For Headless Browser"),w3=(e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if(typeof t!="string")throw"The BlockList watchVariable has to be a string"},k3=e=>{var t;return!((t=e.list)!=null&&t.length)||!e.watchVariable},j3=(e,t)=>e instanceof FormData?e.get(t):e[t],x0=(e,t)=>{if(k3(e))return!1;w3(e.list,e.watchVariable);const n=j3(t,e.watchVariable);return typeof n!="string"?!1:e.list.includes(n)},w0=()=>new oi(403,"Forbidden"),S3=(e,t)=>{if(typeof e!="number"||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&typeof t!="string")throw"The LimitRate ID has to be a non-empty string"},C3=async(e,t,n)=>{const r=Number(await n.get(e)||0);return t-Date.now()+r},k0=async(e,t,n)=>{if(!t.throttle||!n)return!1;S3(t.throttle,t.id);const r=t.id||e;return await C3(r,t.throttle,n)>0?!0:(await n.set(r,Date.now().toString()),!1)},j0=()=>new oi(429,"Too Many Requests"),E3=async(e,t,n,r)=>{const i=$s(r),o=i.publicKey||ce.publicKey,l=i.blockHeadless||ce.blockHeadless,s=i.storageProvider||ce.storageProvider,c={...ce.blockList,...i.blockList},u={...ce.limitRate,...i.limitRate};return l&&v0(navigator)?Promise.reject(y0()):(g0(o,e,t),x3(n),n&&x0(c,n)?Promise.reject(w0()):await k0(location.pathname,u,s)?Promise.reject(j0()):m0("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:o,service_id:e,template_id:t,template_params:n}),{"Content-type":"application/json"}))},P3=e=>{if(!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},N3=e=>typeof e=="string"?document.querySelector(e):e,_3=async(e,t,n,r)=>{const i=$s(r),o=i.publicKey||ce.publicKey,l=i.blockHeadless||ce.blockHeadless,s=ce.storageProvider||i.storageProvider,c={...ce.blockList,...i.blockList},u={...ce.limitRate,...i.limitRate};if(l&&v0(navigator))return Promise.reject(y0());const f=N3(n);g0(o,e,t),P3(f);const h=new FormData(f);return x0(c,h)?Promise.reject(w0()):await k0(location.pathname,u,s)?Promise.reject(j0()):(h.append("lib_version","4.4.1"),h.append("service_id",e),h.append("template_id",t),h.append("user_id",o),m0("/api/v1.0/email/send-form",h))},T3={init:y3,send:E3,sendForm:_3,EmailJSResponseStatus:oi},z3=b.div`
    margin: auto;
    width: 80%;
    
    .react {
        color: var(--react);
    }

    header {
        h2 {
            margin-top: 3rem;
            margin-bottom: 0.5rem;
            font-size: 2rem;
            color: var(--black);
        }

        p {
            color: var(--black);
        }
    }

    section.redes {
        h3 {
            margin-top: 3rem;
            margin-bottom: 1.5rem;
            font-size: 1.5rem;
            color: var(--black);
        }

        a {
            border: 1px groove var(--react);
            border-radius: 10px;
            text-decoration: none;
            font-weight: bold;
            color: var(--react);
            margin-right: 1rem;
            padding: 0.8rem;
            transition: 500ms;

            &:hover {
                color: var(--white);
                background-color: var(--react);
                transition: 500ms;
            }

            svg {
                margin-right: 0.5rem;
                margin-bottom: -1px;

                &:hover {
                    fill: var(--white);
                }
            }
        }
    }

    section.email {
        h3 {
            margin-top: 3rem;
            margin-bottom: 2rem;
            font-size: 1.5rem;
            color: var(--black);
        }

        form {
            label {
                font-size: 1rem;
                color: var(--black);
            }

            input {
                display: block;
                margin-bottom: 2rem;
                padding: 0.5rem;
                height: 2rem;
                border: 1px groove var(--border);
                border-radius: 5px;
                width: 100%;
                font-size: 0.9rem;
                outline: none;
            }

            input:focus-within {
                border: thick double var(--react);
            }
            
            textarea {
                display: block;
                margin-bottom: 2rem;
                padding: 0.5rem;
                height: 3rem;
                border: 1px groove var(--border);
                border-radius: 5px;
                width: 100%;
                min-height: 6rem;
                font-size: 0.9rem;
                outline: none;
            }

            textarea:focus-within {
                border: thick double var(--react);
            }

            button {
                display: block;
                margin-left: auto;
                color: var(--white);
                background-color: var(--react);
                padding: 0.5rem;
                width: 10rem;
                height: 2.5rem;
                font-size: 1rem;
                border-radius: 5px;
                text-align: center;
                cursor: pointer;

                &:hover svg {
                    transform: translateX(8px) scale(1.2);
                    transition: transform 300ms;
                }

                svg {
                    margin-left: 0.5rem;
                    margin-bottom: -3px;
                    transition: transform 300ms;
                }
            }
        }

        p {
            text-align: center;
            font-size: 2rem;
            margin-top: 1rem;
            margin-bottom: 5rem;
        }

        p.success {
            color: var(--react);
        }

        p.error {
            color: red;
        }
    }

    @media (max-width: 1080px) {
        width: 90%;
    }

    @media (max-width: 720px) {
        section.email {
            p {
                font-size: 1.5rem;
            }
        }
    }

    @media (max-width: 550px) {
        section.email {
            p {
                font-size: 1.1rem;
            }
        }
    }
`;function R3(){const[e,t]=E.useState(""),[n,r]=E.useState(""),[i,o]=E.useState(""),[l,s]=E.useState(!1),[c,u]=E.useState(""),f=h=>{h.preventDefault(),s(!0);const g={from_name:e,from_email:n,message:i};T3.send("service_0q54xn8","template_jc9eaws",g,"FhikmvDk7JNVakgwA").then(()=>{u("E-mail enviado com sucesso!"),t(""),r(""),o("")}).catch(v=>{u("Erro ao enviar o e-mail. Tente novamente."),console.error("Erro ao enviar o e-mail:",v)}).finally(()=>{s(!1)})};return a.jsxs(z3,{children:[a.jsx("title",{children:"João - Contato"}),a.jsxs("header",{children:[a.jsxs("h2",{children:["Entre em ",a.jsx("span",{className:"react",children:"contato"})," comigo:"]}),a.jsx("p",{children:"Sinta-se à vontade para entrar em contato comigo pelas redes sociais ou enviando um email."})]}),a.jsxs("section",{className:"redes",children:[a.jsxs("h3",{children:["Minhas ",a.jsx("span",{className:"react",children:"Redes Sociais"}),":"]}),a.jsxs("a",{href:"https://www.linkedin.com/in/joaovecchio/",target:"_blank",children:[a.jsx("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 16 16",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"})}),"LinkeIn"]}),a.jsxs("a",{href:"https://github.com/JoaopvSalles",target:"_blank",children:[a.jsx("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 16 16",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"})}),"Github"]})]}),a.jsxs("section",{className:"email",children:[a.jsxs("h3",{children:["Me envie um ",a.jsx("span",{className:"react",children:"Email"}),":"]}),a.jsxs("form",{onSubmit:f,children:[a.jsx("label",{htmlFor:"name",children:"Seu nome"}),a.jsx("input",{type:"text",id:"name",value:e,onChange:h=>t(h.target.value),placeholder:"Seu nome",required:!0}),a.jsx("label",{htmlFor:"email",children:"Seu email"}),a.jsx("input",{type:"email",id:"email",value:n,onChange:h=>r(h.target.value),placeholder:"exemplo@email.com",required:!0}),a.jsx("label",{htmlFor:"message",children:"Mensagem"}),a.jsx("textarea",{id:"message",value:i,onChange:h=>o(h.target.value),placeholder:"Olá, ...",required:!0}),a.jsxs("button",{type:"submit",disabled:l,children:[l?"Enviando...":"Enviar email",a.jsx("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 512 512",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"})})]})]}),c&&a.jsx("p",{className:`status-message ${c.includes("sucesso")?"success":"error"}`,children:c})]})]})}const M3=b.div`
    margin: auto;
    width: 80%;

    div {
        margin: 1.5rem 0;

        p {
            text-align: end;
            color: var(--black);
            
            svg {
                height: 1.2rem;
                width: 1.2rem;
                margin-bottom: -3px;
                fill: var(--black);
            }
        }
    }

    @media (max-width: 1080px) {
        width: 90%;
    }
`;function L3(){return a.jsx(M3,{children:a.jsx("div",{children:a.jsxs("p",{children:["Copyrights © 2023 - Developed by João ",a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",className:"iconify iconify--logos",width:"35.93",height:"32",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 228",children:a.jsx("path",{d:"M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"})})," v3.1.0"]})})})}function I3(e,t){const[n,r]=E.useState(()=>{const i=localStorage.getItem(e);return i?JSON.parse(i):t});return E.useEffect(()=>{localStorage.setItem(e,JSON.stringify(n))},[e,n]),[n,r]}const b3=qh`
 
  * {
    margin: 0;
    padding: 0;
    border: none;
    box-sizing: border-box;
  }

  :root {
    --white: ${e=>e.theme.colors.white};
    --black: ${e=>e.theme.colors.black};

    --react: ${e=>e.theme.colors.react};

    --border: ${e=>e.theme.colors.border};

    --background: ${e=>e.theme.colors.background};
  }

  html {
    scroll-behavior: smooth;

    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }
    @media (max-width: 720px) {
        font-size: 87.5%; // 14px
    }
  }

  body {
    -webkit-font-smoothing: antialiased;

    font-family: 'Roboto', sans-serif;

    background-color: var(--background);
  }
`,yu={title:"light",colors:{white:"#ffffff",black:"#000000",react:"#00D8FF",border:"#aaaaaa",background:"#FFFAFA"}},O3={title:"dark",colors:{white:"#000000",black:"#ffffff",react:"#00D8FF",border:"#aaaaaa",background:"#282a36"}};function $3(){const[e,t]=I3("theme",yu),n=()=>{t(e.title==="light"?O3:yu)};return a.jsx(Vp,{basename:"/Portfolio",children:a.jsxs(Yh,{theme:e,children:[a.jsx(Cm,{toggleTheme:n}),a.jsxs($p,{children:[a.jsx(et,{path:"/",element:a.jsx(Bm,{})}),a.jsx(et,{path:"/projects",element:a.jsx(e3,{})}),a.jsx(et,{path:"/projects/1",element:a.jsx(i3,{})}),a.jsx(et,{path:"/projects/2",element:a.jsx(a3,{})}),a.jsx(et,{path:"/projects/3",element:a.jsx(u3,{})}),a.jsx(et,{path:"/projects/4",element:a.jsx(f3,{})}),a.jsx(et,{path:"/projects/5",element:a.jsx(h3,{})}),a.jsx(et,{path:"/projects/6",element:a.jsx(g3,{})}),a.jsx(et,{path:"/contact",element:a.jsx(R3,{})})]}),a.jsx(L3,{}),a.jsx(b3,{})]})})}Nl.createRoot(document.getElementById("root")).render(a.jsx(H.StrictMode,{children:a.jsx($3,{})}));
