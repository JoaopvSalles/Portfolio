function S0(e,t){for(var r=0;r<t.length;r++){const n=t[r];if(typeof n!="string"&&!Array.isArray(n)){for(const i in n)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(n,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>n[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();function C0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var xu={exports:{}},ko={},wu={exports:{}},I={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jn=Symbol.for("react.element"),E0=Symbol.for("react.portal"),P0=Symbol.for("react.fragment"),N0=Symbol.for("react.strict_mode"),_0=Symbol.for("react.profiler"),T0=Symbol.for("react.provider"),z0=Symbol.for("react.context"),R0=Symbol.for("react.forward_ref"),L0=Symbol.for("react.suspense"),M0=Symbol.for("react.memo"),I0=Symbol.for("react.lazy"),Ds=Symbol.iterator;function b0(e){return e===null||typeof e!="object"?null:(e=Ds&&e[Ds]||e["@@iterator"],typeof e=="function"?e:null)}var ku={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ju=Object.assign,Su={};function tn(e,t,r){this.props=e,this.context=t,this.refs=Su,this.updater=r||ku}tn.prototype.isReactComponent={};tn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};tn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Cu(){}Cu.prototype=tn.prototype;function Da(e,t,r){this.props=e,this.context=t,this.refs=Su,this.updater=r||ku}var Fa=Da.prototype=new Cu;Fa.constructor=Da;ju(Fa,tn.prototype);Fa.isPureReactComponent=!0;var Fs=Array.isArray,Eu=Object.prototype.hasOwnProperty,Aa={current:null},Pu={key:!0,ref:!0,__self:!0,__source:!0};function Nu(e,t,r){var n,i={},o=null,l=null;if(t!=null)for(n in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)Eu.call(t,n)&&!Pu.hasOwnProperty(n)&&(i[n]=t[n]);var s=arguments.length-2;if(s===1)i.children=r;else if(1<s){for(var c=Array(s),u=0;u<s;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(n in s=e.defaultProps,s)i[n]===void 0&&(i[n]=s[n]);return{$$typeof:Jn,type:e,key:o,ref:l,props:i,_owner:Aa.current}}function O0(e,t){return{$$typeof:Jn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ba(e){return typeof e=="object"&&e!==null&&e.$$typeof===Jn}function $0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var As=/\/+/g;function Qo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?$0(""+e.key):t.toString(36)}function Ei(e,t,r,n,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Jn:case E0:l=!0}}if(l)return l=e,i=i(l),e=n===""?"."+Qo(l,0):n,Fs(i)?(r="",e!=null&&(r=e.replace(As,"$&/")+"/"),Ei(i,t,r,"",function(u){return u})):i!=null&&(Ba(i)&&(i=O0(i,r+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(As,"$&/")+"/")+e)),t.push(i)),1;if(l=0,n=n===""?".":n+":",Fs(e))for(var s=0;s<e.length;s++){o=e[s];var c=n+Qo(o,s);l+=Ei(o,t,r,c,i)}else if(c=b0(e),typeof c=="function")for(e=c.call(e),s=0;!(o=e.next()).done;)o=o.value,c=n+Qo(o,s++),l+=Ei(o,t,r,c,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function ai(e,t,r){if(e==null)return e;var n=[],i=0;return Ei(e,n,"","",function(o){return t.call(r,o,i++)}),n}function D0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var we={current:null},Pi={transition:null},F0={ReactCurrentDispatcher:we,ReactCurrentBatchConfig:Pi,ReactCurrentOwner:Aa};I.Children={map:ai,forEach:function(e,t,r){ai(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return ai(e,function(){t++}),t},toArray:function(e){return ai(e,function(t){return t})||[]},only:function(e){if(!Ba(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};I.Component=tn;I.Fragment=P0;I.Profiler=_0;I.PureComponent=Da;I.StrictMode=N0;I.Suspense=L0;I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F0;I.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=ju({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=Aa.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)Eu.call(t,c)&&!Pu.hasOwnProperty(c)&&(n[c]=t[c]===void 0&&s!==void 0?s[c]:t[c])}var c=arguments.length-2;if(c===1)n.children=r;else if(1<c){s=Array(c);for(var u=0;u<c;u++)s[u]=arguments[u+2];n.children=s}return{$$typeof:Jn,type:e.type,key:i,ref:o,props:n,_owner:l}};I.createContext=function(e){return e={$$typeof:z0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:T0,_context:e},e.Consumer=e};I.createElement=Nu;I.createFactory=function(e){var t=Nu.bind(null,e);return t.type=e,t};I.createRef=function(){return{current:null}};I.forwardRef=function(e){return{$$typeof:R0,render:e}};I.isValidElement=Ba;I.lazy=function(e){return{$$typeof:I0,_payload:{_status:-1,_result:e},_init:D0}};I.memo=function(e,t){return{$$typeof:M0,type:e,compare:t===void 0?null:t}};I.startTransition=function(e){var t=Pi.transition;Pi.transition={};try{e()}finally{Pi.transition=t}};I.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};I.useCallback=function(e,t){return we.current.useCallback(e,t)};I.useContext=function(e){return we.current.useContext(e)};I.useDebugValue=function(){};I.useDeferredValue=function(e){return we.current.useDeferredValue(e)};I.useEffect=function(e,t){return we.current.useEffect(e,t)};I.useId=function(){return we.current.useId()};I.useImperativeHandle=function(e,t,r){return we.current.useImperativeHandle(e,t,r)};I.useInsertionEffect=function(e,t){return we.current.useInsertionEffect(e,t)};I.useLayoutEffect=function(e,t){return we.current.useLayoutEffect(e,t)};I.useMemo=function(e,t){return we.current.useMemo(e,t)};I.useReducer=function(e,t,r){return we.current.useReducer(e,t,r)};I.useRef=function(e){return we.current.useRef(e)};I.useState=function(e){return we.current.useState(e)};I.useSyncExternalStore=function(e,t,r){return we.current.useSyncExternalStore(e,t,r)};I.useTransition=function(){return we.current.useTransition()};I.version="18.2.0";wu.exports=I;var E=wu.exports;const H=C0(E),A0=S0({__proto__:null,default:H},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B0=E,U0=Symbol.for("react.element"),H0=Symbol.for("react.fragment"),V0=Object.prototype.hasOwnProperty,W0=B0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Z0={key:!0,ref:!0,__self:!0,__source:!0};function _u(e,t,r){var n,i={},o=null,l=null;r!==void 0&&(o=""+r),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(n in t)V0.call(t,n)&&!Z0.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)i[n]===void 0&&(i[n]=t[n]);return{$$typeof:U0,type:e,key:o,ref:l,props:i,_owner:W0.current}}ko.Fragment=H0;ko.jsx=_u;ko.jsxs=_u;xu.exports=ko;var a=xu.exports,_l={},Tu={exports:{}},Me={},zu={exports:{}},Ru={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,z){var R=N.length;N.push(z);e:for(;0<R;){var W=R-1>>>1,Y=N[W];if(0<i(Y,z))N[W]=z,N[R]=Y,R=W;else break e}}function r(N){return N.length===0?null:N[0]}function n(N){if(N.length===0)return null;var z=N[0],R=N.pop();if(R!==z){N[0]=R;e:for(var W=0,Y=N.length,ct=Y>>>1;W<ct;){var Ne=2*(W+1)-1,jt=N[Ne],_e=Ne+1,be=N[_e];if(0>i(jt,R))_e<Y&&0>i(be,jt)?(N[W]=be,N[_e]=R,W=_e):(N[W]=jt,N[Ne]=R,W=Ne);else if(_e<Y&&0>i(be,R))N[W]=be,N[_e]=R,W=_e;else break e}}return z}function i(N,z){var R=N.sortIndex-z.sortIndex;return R!==0?R:N.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var c=[],u=[],f=1,h=null,g=3,v=!1,y=!1,w=!1,P=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(N){for(var z=r(u);z!==null;){if(z.callback===null)n(u);else if(z.startTime<=N)n(u),z.sortIndex=z.expirationTime,t(c,z);else break;z=r(u)}}function x(N){if(w=!1,m(N),!y)if(r(c)!==null)y=!0,st(k);else{var z=r(u);z!==null&&ve(x,z.startTime-N)}}function k(N,z){y=!1,w&&(w=!1,p(T),T=-1),v=!0;var R=g;try{for(m(z),h=r(c);h!==null&&(!(h.expirationTime>z)||N&&!ge());){var W=h.callback;if(typeof W=="function"){h.callback=null,g=h.priorityLevel;var Y=W(h.expirationTime<=z);z=e.unstable_now(),typeof Y=="function"?h.callback=Y:h===r(c)&&n(c),m(z)}else n(c);h=r(c)}if(h!==null)var ct=!0;else{var Ne=r(u);Ne!==null&&ve(x,Ne.startTime-z),ct=!1}return ct}finally{h=null,g=R,v=!1}}var j=!1,S=null,T=-1,F=5,M=-1;function ge(){return!(e.unstable_now()-M<F)}function lt(){if(S!==null){var N=e.unstable_now();M=N;var z=!0;try{z=S(!0,N)}finally{z?at():(j=!1,S=null)}}else j=!1}var at;if(typeof d=="function")at=function(){d(lt)};else if(typeof MessageChannel<"u"){var xr=new MessageChannel,Ve=xr.port2;xr.port1.onmessage=lt,at=function(){Ve.postMessage(null)}}else at=function(){P(lt,0)};function st(N){S=N,j||(j=!0,at())}function ve(N,z){T=P(function(){N(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,st(k))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return r(c)},e.unstable_next=function(N){switch(g){case 1:case 2:case 3:var z=3;break;default:z=g}var R=g;g=z;try{return N()}finally{g=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,z){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var R=g;g=N;try{return z()}finally{g=R}},e.unstable_scheduleCallback=function(N,z,R){var W=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?W+R:W):R=W,N){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=R+Y,N={id:f++,callback:z,priorityLevel:N,startTime:R,expirationTime:Y,sortIndex:-1},R>W?(N.sortIndex=R,t(u,N),r(c)===null&&N===r(u)&&(w?(p(T),T=-1):w=!0,ve(x,R-W))):(N.sortIndex=Y,t(c,N),y||v||(y=!0,st(k))),N},e.unstable_shouldYield=ge,e.unstable_wrapCallback=function(N){var z=g;return function(){var R=g;g=z;try{return N.apply(this,arguments)}finally{g=R}}}})(Ru);zu.exports=Ru;var Q0=zu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lu=E,Le=Q0;function C(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Mu=new Set,zn={};function pr(e,t){Hr(e,t),Hr(e+"Capture",t)}function Hr(e,t){for(zn[e]=t,e=0;e<t.length;e++)Mu.add(t[e])}var vt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Tl=Object.prototype.hasOwnProperty,X0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Bs={},Us={};function K0(e){return Tl.call(Us,e)?!0:Tl.call(Bs,e)?!1:X0.test(e)?Us[e]=!0:(Bs[e]=!0,!1)}function Y0(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function G0(e,t,r,n){if(t===null||typeof t>"u"||Y0(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ke(e,t,r,n,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var de={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){de[e]=new ke(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];de[t]=new ke(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){de[e]=new ke(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){de[e]=new ke(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){de[e]=new ke(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){de[e]=new ke(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){de[e]=new ke(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){de[e]=new ke(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){de[e]=new ke(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ua=/[\-:]([a-z])/g;function Ha(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ua,Ha);de[t]=new ke(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ua,Ha);de[t]=new ke(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ua,Ha);de[t]=new ke(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){de[e]=new ke(e,1,!1,e.toLowerCase(),null,!1,!1)});de.xlinkHref=new ke("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){de[e]=new ke(e,1,!1,e.toLowerCase(),null,!0,!0)});function Va(e,t,r,n){var i=de.hasOwnProperty(t)?de[t]:null;(i!==null?i.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(G0(t,r,i,n)&&(r=null),n||i===null?K0(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(t=i.attributeName,n=i.attributeNamespace,r===null?e.removeAttribute(t):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var kt=Lu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,si=Symbol.for("react.element"),Sr=Symbol.for("react.portal"),Cr=Symbol.for("react.fragment"),Wa=Symbol.for("react.strict_mode"),zl=Symbol.for("react.profiler"),Iu=Symbol.for("react.provider"),bu=Symbol.for("react.context"),Za=Symbol.for("react.forward_ref"),Rl=Symbol.for("react.suspense"),Ll=Symbol.for("react.suspense_list"),Qa=Symbol.for("react.memo"),Nt=Symbol.for("react.lazy"),Ou=Symbol.for("react.offscreen"),Hs=Symbol.iterator;function ln(e){return e===null||typeof e!="object"?null:(e=Hs&&e[Hs]||e["@@iterator"],typeof e=="function"?e:null)}var K=Object.assign,Xo;function mn(e){if(Xo===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Xo=t&&t[1]||""}return`
`+Xo+e}var Ko=!1;function Yo(e,t){if(!e||Ko)return"";Ko=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var n=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){n=u}e.call(t.prototype)}else{try{throw Error()}catch(u){n=u}e()}}catch(u){if(u&&n&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=n.stack.split(`
`),l=i.length-1,s=o.length-1;1<=l&&0<=s&&i[l]!==o[s];)s--;for(;1<=l&&0<=s;l--,s--)if(i[l]!==o[s]){if(l!==1||s!==1)do if(l--,s--,0>s||i[l]!==o[s]){var c=`
`+i[l].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=l&&0<=s);break}}}finally{Ko=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?mn(e):""}function J0(e){switch(e.tag){case 5:return mn(e.type);case 16:return mn("Lazy");case 13:return mn("Suspense");case 19:return mn("SuspenseList");case 0:case 2:case 15:return e=Yo(e.type,!1),e;case 11:return e=Yo(e.type.render,!1),e;case 1:return e=Yo(e.type,!0),e;default:return""}}function Ml(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Cr:return"Fragment";case Sr:return"Portal";case zl:return"Profiler";case Wa:return"StrictMode";case Rl:return"Suspense";case Ll:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case bu:return(e.displayName||"Context")+".Consumer";case Iu:return(e._context.displayName||"Context")+".Provider";case Za:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Qa:return t=e.displayName||null,t!==null?t:Ml(e.type)||"Memo";case Nt:t=e._payload,e=e._init;try{return Ml(e(t))}catch{}}return null}function q0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ml(t);case 8:return t===Wa?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Wt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function $u(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ef(e){var t=$u(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,o=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){n=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(l){n=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ci(e){e._valueTracker||(e._valueTracker=ef(e))}function Du(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=$u(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function Ui(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Il(e,t){var r=t.checked;return K({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Vs(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=Wt(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Fu(e,t){t=t.checked,t!=null&&Va(e,"checked",t,!1)}function bl(e,t){Fu(e,t);var r=Wt(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ol(e,t.type,r):t.hasOwnProperty("defaultValue")&&Ol(e,t.type,Wt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ws(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Ol(e,t,r){(t!=="number"||Ui(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var gn=Array.isArray;function $r(e,t,r,n){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&n&&(e[r].defaultSelected=!0)}else{for(r=""+Wt(r),t=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function $l(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(C(91));return K({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Zs(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(C(92));if(gn(r)){if(1<r.length)throw Error(C(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Wt(r)}}function Au(e,t){var r=Wt(t.value),n=Wt(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function Qs(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Bu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Dl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Bu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ui,Uu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,i){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ui=ui||document.createElement("div"),ui.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ui.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Rn(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var wn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},tf=["Webkit","ms","Moz","O"];Object.keys(wn).forEach(function(e){tf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),wn[t]=wn[e]})});function Hu(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||wn.hasOwnProperty(e)&&wn[e]?(""+t).trim():t+"px"}function Vu(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,i=Hu(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,i):e[r]=i}}var rf=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fl(e,t){if(t){if(rf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(C(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(C(61))}if(t.style!=null&&typeof t.style!="object")throw Error(C(62))}}function Al(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bl=null;function Xa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ul=null,Dr=null,Fr=null;function Xs(e){if(e=ti(e)){if(typeof Ul!="function")throw Error(C(280));var t=e.stateNode;t&&(t=Po(t),Ul(e.stateNode,e.type,t))}}function Wu(e){Dr?Fr?Fr.push(e):Fr=[e]:Dr=e}function Zu(){if(Dr){var e=Dr,t=Fr;if(Fr=Dr=null,Xs(e),t)for(e=0;e<t.length;e++)Xs(t[e])}}function Qu(e,t){return e(t)}function Xu(){}var Go=!1;function Ku(e,t,r){if(Go)return e(t,r);Go=!0;try{return Qu(e,t,r)}finally{Go=!1,(Dr!==null||Fr!==null)&&(Xu(),Zu())}}function Ln(e,t){var r=e.stateNode;if(r===null)return null;var n=Po(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(C(231,t,typeof r));return r}var Hl=!1;if(vt)try{var an={};Object.defineProperty(an,"passive",{get:function(){Hl=!0}}),window.addEventListener("test",an,an),window.removeEventListener("test",an,an)}catch{Hl=!1}function nf(e,t,r,n,i,o,l,s,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(r,u)}catch(f){this.onError(f)}}var kn=!1,Hi=null,Vi=!1,Vl=null,of={onError:function(e){kn=!0,Hi=e}};function lf(e,t,r,n,i,o,l,s,c){kn=!1,Hi=null,nf.apply(of,arguments)}function af(e,t,r,n,i,o,l,s,c){if(lf.apply(this,arguments),kn){if(kn){var u=Hi;kn=!1,Hi=null}else throw Error(C(198));Vi||(Vi=!0,Vl=u)}}function hr(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Yu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ks(e){if(hr(e)!==e)throw Error(C(188))}function sf(e){var t=e.alternate;if(!t){if(t=hr(e),t===null)throw Error(C(188));return t!==e?null:e}for(var r=e,n=t;;){var i=r.return;if(i===null)break;var o=i.alternate;if(o===null){if(n=i.return,n!==null){r=n;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===r)return Ks(i),e;if(o===n)return Ks(i),t;o=o.sibling}throw Error(C(188))}if(r.return!==n.return)r=i,n=o;else{for(var l=!1,s=i.child;s;){if(s===r){l=!0,r=i,n=o;break}if(s===n){l=!0,n=i,r=o;break}s=s.sibling}if(!l){for(s=o.child;s;){if(s===r){l=!0,r=o,n=i;break}if(s===n){l=!0,n=o,r=i;break}s=s.sibling}if(!l)throw Error(C(189))}}if(r.alternate!==n)throw Error(C(190))}if(r.tag!==3)throw Error(C(188));return r.stateNode.current===r?e:t}function Gu(e){return e=sf(e),e!==null?Ju(e):null}function Ju(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ju(e);if(t!==null)return t;e=e.sibling}return null}var qu=Le.unstable_scheduleCallback,Ys=Le.unstable_cancelCallback,cf=Le.unstable_shouldYield,uf=Le.unstable_requestPaint,q=Le.unstable_now,df=Le.unstable_getCurrentPriorityLevel,Ka=Le.unstable_ImmediatePriority,e1=Le.unstable_UserBlockingPriority,Wi=Le.unstable_NormalPriority,ff=Le.unstable_LowPriority,t1=Le.unstable_IdlePriority,jo=null,it=null;function pf(e){if(it&&typeof it.onCommitFiberRoot=="function")try{it.onCommitFiberRoot(jo,e,void 0,(e.current.flags&128)===128)}catch{}}var Ke=Math.clz32?Math.clz32:gf,hf=Math.log,mf=Math.LN2;function gf(e){return e>>>=0,e===0?32:31-(hf(e)/mf|0)|0}var di=64,fi=4194304;function vn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Zi(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,i=e.suspendedLanes,o=e.pingedLanes,l=r&268435455;if(l!==0){var s=l&~i;s!==0?n=vn(s):(o&=l,o!==0&&(n=vn(o)))}else l=r&~i,l!==0?n=vn(l):o!==0&&(n=vn(o));if(n===0)return 0;if(t!==0&&t!==n&&!(t&i)&&(i=n&-n,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-Ke(t),i=1<<r,n|=e[r],t&=~i;return n}function vf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yf(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Ke(o),s=1<<l,c=i[l];c===-1?(!(s&r)||s&n)&&(i[l]=vf(s,t)):c<=t&&(e.expiredLanes|=s),o&=~s}}function Wl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function r1(){var e=di;return di<<=1,!(di&4194240)&&(di=64),e}function Jo(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function qn(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ke(t),e[t]=r}function xf(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-Ke(r),o=1<<i;t[i]=0,n[i]=-1,e[i]=-1,r&=~o}}function Ya(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-Ke(r),i=1<<n;i&t|e[n]&t&&(e[n]|=t),r&=~i}}var D=0;function n1(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var i1,Ga,o1,l1,a1,Zl=!1,pi=[],bt=null,Ot=null,$t=null,Mn=new Map,In=new Map,Tt=[],wf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gs(e,t){switch(e){case"focusin":case"focusout":bt=null;break;case"dragenter":case"dragleave":Ot=null;break;case"mouseover":case"mouseout":$t=null;break;case"pointerover":case"pointerout":Mn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":In.delete(t.pointerId)}}function sn(e,t,r,n,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:o,targetContainers:[i]},t!==null&&(t=ti(t),t!==null&&Ga(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function kf(e,t,r,n,i){switch(t){case"focusin":return bt=sn(bt,e,t,r,n,i),!0;case"dragenter":return Ot=sn(Ot,e,t,r,n,i),!0;case"mouseover":return $t=sn($t,e,t,r,n,i),!0;case"pointerover":var o=i.pointerId;return Mn.set(o,sn(Mn.get(o)||null,e,t,r,n,i)),!0;case"gotpointercapture":return o=i.pointerId,In.set(o,sn(In.get(o)||null,e,t,r,n,i)),!0}return!1}function s1(e){var t=qt(e.target);if(t!==null){var r=hr(t);if(r!==null){if(t=r.tag,t===13){if(t=Yu(r),t!==null){e.blockedOn=t,a1(e.priority,function(){o1(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ni(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Ql(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);Bl=n,r.target.dispatchEvent(n),Bl=null}else return t=ti(r),t!==null&&Ga(t),e.blockedOn=r,!1;t.shift()}return!0}function Js(e,t,r){Ni(e)&&r.delete(t)}function jf(){Zl=!1,bt!==null&&Ni(bt)&&(bt=null),Ot!==null&&Ni(Ot)&&(Ot=null),$t!==null&&Ni($t)&&($t=null),Mn.forEach(Js),In.forEach(Js)}function cn(e,t){e.blockedOn===t&&(e.blockedOn=null,Zl||(Zl=!0,Le.unstable_scheduleCallback(Le.unstable_NormalPriority,jf)))}function bn(e){function t(i){return cn(i,e)}if(0<pi.length){cn(pi[0],e);for(var r=1;r<pi.length;r++){var n=pi[r];n.blockedOn===e&&(n.blockedOn=null)}}for(bt!==null&&cn(bt,e),Ot!==null&&cn(Ot,e),$t!==null&&cn($t,e),Mn.forEach(t),In.forEach(t),r=0;r<Tt.length;r++)n=Tt[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<Tt.length&&(r=Tt[0],r.blockedOn===null);)s1(r),r.blockedOn===null&&Tt.shift()}var Ar=kt.ReactCurrentBatchConfig,Qi=!0;function Sf(e,t,r,n){var i=D,o=Ar.transition;Ar.transition=null;try{D=1,Ja(e,t,r,n)}finally{D=i,Ar.transition=o}}function Cf(e,t,r,n){var i=D,o=Ar.transition;Ar.transition=null;try{D=4,Ja(e,t,r,n)}finally{D=i,Ar.transition=o}}function Ja(e,t,r,n){if(Qi){var i=Ql(e,t,r,n);if(i===null)sl(e,t,n,Xi,r),Gs(e,n);else if(kf(i,e,t,r,n))n.stopPropagation();else if(Gs(e,n),t&4&&-1<wf.indexOf(e)){for(;i!==null;){var o=ti(i);if(o!==null&&i1(o),o=Ql(e,t,r,n),o===null&&sl(e,t,n,Xi,r),o===i)break;i=o}i!==null&&n.stopPropagation()}else sl(e,t,n,null,r)}}var Xi=null;function Ql(e,t,r,n){if(Xi=null,e=Xa(n),e=qt(e),e!==null)if(t=hr(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Yu(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Xi=e,null}function c1(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(df()){case Ka:return 1;case e1:return 4;case Wi:case ff:return 16;case t1:return 536870912;default:return 16}default:return 16}}var Lt=null,qa=null,_i=null;function u1(){if(_i)return _i;var e,t=qa,r=t.length,n,i="value"in Lt?Lt.value:Lt.textContent,o=i.length;for(e=0;e<r&&t[e]===i[e];e++);var l=r-e;for(n=1;n<=l&&t[r-n]===i[o-n];n++);return _i=i.slice(e,1<n?1-n:void 0)}function Ti(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function hi(){return!0}function qs(){return!1}function Ie(e){function t(r,n,i,o,l){this._reactName=r,this._targetInst=i,this.type=n,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(r=e[s],this[s]=r?r(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?hi:qs,this.isPropagationStopped=qs,this}return K(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=hi)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=hi)},persist:function(){},isPersistent:hi}),t}var rn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},es=Ie(rn),ei=K({},rn,{view:0,detail:0}),Ef=Ie(ei),qo,el,un,So=K({},ei,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ts,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==un&&(un&&e.type==="mousemove"?(qo=e.screenX-un.screenX,el=e.screenY-un.screenY):el=qo=0,un=e),qo)},movementY:function(e){return"movementY"in e?e.movementY:el}}),ec=Ie(So),Pf=K({},So,{dataTransfer:0}),Nf=Ie(Pf),_f=K({},ei,{relatedTarget:0}),tl=Ie(_f),Tf=K({},rn,{animationName:0,elapsedTime:0,pseudoElement:0}),zf=Ie(Tf),Rf=K({},rn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Lf=Ie(Rf),Mf=K({},rn,{data:0}),tc=Ie(Mf),If={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Of={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $f(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Of[e])?!!t[e]:!1}function ts(){return $f}var Df=K({},ei,{key:function(e){if(e.key){var t=If[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ti(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?bf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ts,charCode:function(e){return e.type==="keypress"?Ti(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ti(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ff=Ie(Df),Af=K({},So,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rc=Ie(Af),Bf=K({},ei,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ts}),Uf=Ie(Bf),Hf=K({},rn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vf=Ie(Hf),Wf=K({},So,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Zf=Ie(Wf),Qf=[9,13,27,32],rs=vt&&"CompositionEvent"in window,jn=null;vt&&"documentMode"in document&&(jn=document.documentMode);var Xf=vt&&"TextEvent"in window&&!jn,d1=vt&&(!rs||jn&&8<jn&&11>=jn),nc=String.fromCharCode(32),ic=!1;function f1(e,t){switch(e){case"keyup":return Qf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function p1(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Er=!1;function Kf(e,t){switch(e){case"compositionend":return p1(t);case"keypress":return t.which!==32?null:(ic=!0,nc);case"textInput":return e=t.data,e===nc&&ic?null:e;default:return null}}function Yf(e,t){if(Er)return e==="compositionend"||!rs&&f1(e,t)?(e=u1(),_i=qa=Lt=null,Er=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return d1&&t.locale!=="ko"?null:t.data;default:return null}}var Gf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function oc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Gf[e.type]:t==="textarea"}function h1(e,t,r,n){Wu(n),t=Ki(t,"onChange"),0<t.length&&(r=new es("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var Sn=null,On=null;function Jf(e){E1(e,0)}function Co(e){var t=_r(e);if(Du(t))return e}function qf(e,t){if(e==="change")return t}var m1=!1;if(vt){var rl;if(vt){var nl="oninput"in document;if(!nl){var lc=document.createElement("div");lc.setAttribute("oninput","return;"),nl=typeof lc.oninput=="function"}rl=nl}else rl=!1;m1=rl&&(!document.documentMode||9<document.documentMode)}function ac(){Sn&&(Sn.detachEvent("onpropertychange",g1),On=Sn=null)}function g1(e){if(e.propertyName==="value"&&Co(On)){var t=[];h1(t,On,e,Xa(e)),Ku(Jf,t)}}function e2(e,t,r){e==="focusin"?(ac(),Sn=t,On=r,Sn.attachEvent("onpropertychange",g1)):e==="focusout"&&ac()}function t2(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Co(On)}function r2(e,t){if(e==="click")return Co(t)}function n2(e,t){if(e==="input"||e==="change")return Co(t)}function i2(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Je=typeof Object.is=="function"?Object.is:i2;function $n(e,t){if(Je(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var i=r[n];if(!Tl.call(t,i)||!Je(e[i],t[i]))return!1}return!0}function sc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cc(e,t){var r=sc(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=sc(r)}}function v1(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?v1(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function y1(){for(var e=window,t=Ui();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Ui(e.document)}return t}function ns(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function o2(e){var t=y1(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&v1(r.ownerDocument.documentElement,r)){if(n!==null&&ns(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,o=Math.min(n.start,i);n=n.end===void 0?o:Math.min(n.end,i),!e.extend&&o>n&&(i=n,n=o,o=i),i=cc(r,o);var l=cc(r,n);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>n?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var l2=vt&&"documentMode"in document&&11>=document.documentMode,Pr=null,Xl=null,Cn=null,Kl=!1;function uc(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Kl||Pr==null||Pr!==Ui(n)||(n=Pr,"selectionStart"in n&&ns(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Cn&&$n(Cn,n)||(Cn=n,n=Ki(Xl,"onSelect"),0<n.length&&(t=new es("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=Pr)))}function mi(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Nr={animationend:mi("Animation","AnimationEnd"),animationiteration:mi("Animation","AnimationIteration"),animationstart:mi("Animation","AnimationStart"),transitionend:mi("Transition","TransitionEnd")},il={},x1={};vt&&(x1=document.createElement("div").style,"AnimationEvent"in window||(delete Nr.animationend.animation,delete Nr.animationiteration.animation,delete Nr.animationstart.animation),"TransitionEvent"in window||delete Nr.transitionend.transition);function Eo(e){if(il[e])return il[e];if(!Nr[e])return e;var t=Nr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in x1)return il[e]=t[r];return e}var w1=Eo("animationend"),k1=Eo("animationiteration"),j1=Eo("animationstart"),S1=Eo("transitionend"),C1=new Map,dc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qt(e,t){C1.set(e,t),pr(t,[e])}for(var ol=0;ol<dc.length;ol++){var ll=dc[ol],a2=ll.toLowerCase(),s2=ll[0].toUpperCase()+ll.slice(1);Qt(a2,"on"+s2)}Qt(w1,"onAnimationEnd");Qt(k1,"onAnimationIteration");Qt(j1,"onAnimationStart");Qt("dblclick","onDoubleClick");Qt("focusin","onFocus");Qt("focusout","onBlur");Qt(S1,"onTransitionEnd");Hr("onMouseEnter",["mouseout","mouseover"]);Hr("onMouseLeave",["mouseout","mouseover"]);Hr("onPointerEnter",["pointerout","pointerover"]);Hr("onPointerLeave",["pointerout","pointerover"]);pr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));pr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));pr("onBeforeInput",["compositionend","keypress","textInput","paste"]);pr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));pr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));pr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),c2=new Set("cancel close invalid load scroll toggle".split(" ").concat(yn));function fc(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,af(n,t,void 0,e),e.currentTarget=null}function E1(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],i=n.event;n=n.listeners;e:{var o=void 0;if(t)for(var l=n.length-1;0<=l;l--){var s=n[l],c=s.instance,u=s.currentTarget;if(s=s.listener,c!==o&&i.isPropagationStopped())break e;fc(i,s,u),o=c}else for(l=0;l<n.length;l++){if(s=n[l],c=s.instance,u=s.currentTarget,s=s.listener,c!==o&&i.isPropagationStopped())break e;fc(i,s,u),o=c}}}if(Vi)throw e=Vl,Vi=!1,Vl=null,e}function B(e,t){var r=t[ea];r===void 0&&(r=t[ea]=new Set);var n=e+"__bubble";r.has(n)||(P1(t,e,2,!1),r.add(n))}function al(e,t,r){var n=0;t&&(n|=4),P1(r,e,n,t)}var gi="_reactListening"+Math.random().toString(36).slice(2);function Dn(e){if(!e[gi]){e[gi]=!0,Mu.forEach(function(r){r!=="selectionchange"&&(c2.has(r)||al(r,!1,e),al(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[gi]||(t[gi]=!0,al("selectionchange",!1,t))}}function P1(e,t,r,n){switch(c1(t)){case 1:var i=Sf;break;case 4:i=Cf;break;default:i=Ja}r=i.bind(null,t,r,e),i=void 0,!Hl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):i!==void 0?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function sl(e,t,r,n,i){var o=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var l=n.tag;if(l===3||l===4){var s=n.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(l===4)for(l=n.return;l!==null;){var c=l.tag;if((c===3||c===4)&&(c=l.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;l=l.return}for(;s!==null;){if(l=qt(s),l===null)return;if(c=l.tag,c===5||c===6){n=o=l;continue e}s=s.parentNode}}n=n.return}Ku(function(){var u=o,f=Xa(r),h=[];e:{var g=C1.get(e);if(g!==void 0){var v=es,y=e;switch(e){case"keypress":if(Ti(r)===0)break e;case"keydown":case"keyup":v=Ff;break;case"focusin":y="focus",v=tl;break;case"focusout":y="blur",v=tl;break;case"beforeblur":case"afterblur":v=tl;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=ec;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Nf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Uf;break;case w1:case k1:case j1:v=zf;break;case S1:v=Vf;break;case"scroll":v=Ef;break;case"wheel":v=Zf;break;case"copy":case"cut":case"paste":v=Lf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=rc}var w=(t&4)!==0,P=!w&&e==="scroll",p=w?g!==null?g+"Capture":null:g;w=[];for(var d=u,m;d!==null;){m=d;var x=m.stateNode;if(m.tag===5&&x!==null&&(m=x,p!==null&&(x=Ln(d,p),x!=null&&w.push(Fn(d,x,m)))),P)break;d=d.return}0<w.length&&(g=new v(g,y,null,r,f),h.push({event:g,listeners:w}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",g&&r!==Bl&&(y=r.relatedTarget||r.fromElement)&&(qt(y)||y[yt]))break e;if((v||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,v?(y=r.relatedTarget||r.toElement,v=u,y=y?qt(y):null,y!==null&&(P=hr(y),y!==P||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=u),v!==y)){if(w=ec,x="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(w=rc,x="onPointerLeave",p="onPointerEnter",d="pointer"),P=v==null?g:_r(v),m=y==null?g:_r(y),g=new w(x,d+"leave",v,r,f),g.target=P,g.relatedTarget=m,x=null,qt(f)===u&&(w=new w(p,d+"enter",y,r,f),w.target=m,w.relatedTarget=P,x=w),P=x,v&&y)t:{for(w=v,p=y,d=0,m=w;m;m=wr(m))d++;for(m=0,x=p;x;x=wr(x))m++;for(;0<d-m;)w=wr(w),d--;for(;0<m-d;)p=wr(p),m--;for(;d--;){if(w===p||p!==null&&w===p.alternate)break t;w=wr(w),p=wr(p)}w=null}else w=null;v!==null&&pc(h,g,v,w,!1),y!==null&&P!==null&&pc(h,P,y,w,!0)}}e:{if(g=u?_r(u):window,v=g.nodeName&&g.nodeName.toLowerCase(),v==="select"||v==="input"&&g.type==="file")var k=qf;else if(oc(g))if(m1)k=n2;else{k=t2;var j=e2}else(v=g.nodeName)&&v.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(k=r2);if(k&&(k=k(e,u))){h1(h,k,r,f);break e}j&&j(e,g,u),e==="focusout"&&(j=g._wrapperState)&&j.controlled&&g.type==="number"&&Ol(g,"number",g.value)}switch(j=u?_r(u):window,e){case"focusin":(oc(j)||j.contentEditable==="true")&&(Pr=j,Xl=u,Cn=null);break;case"focusout":Cn=Xl=Pr=null;break;case"mousedown":Kl=!0;break;case"contextmenu":case"mouseup":case"dragend":Kl=!1,uc(h,r,f);break;case"selectionchange":if(l2)break;case"keydown":case"keyup":uc(h,r,f)}var S;if(rs)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Er?f1(e,r)&&(T="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(T="onCompositionStart");T&&(d1&&r.locale!=="ko"&&(Er||T!=="onCompositionStart"?T==="onCompositionEnd"&&Er&&(S=u1()):(Lt=f,qa="value"in Lt?Lt.value:Lt.textContent,Er=!0)),j=Ki(u,T),0<j.length&&(T=new tc(T,e,null,r,f),h.push({event:T,listeners:j}),S?T.data=S:(S=p1(r),S!==null&&(T.data=S)))),(S=Xf?Kf(e,r):Yf(e,r))&&(u=Ki(u,"onBeforeInput"),0<u.length&&(f=new tc("onBeforeInput","beforeinput",null,r,f),h.push({event:f,listeners:u}),f.data=S))}E1(h,t)})}function Fn(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Ki(e,t){for(var r=t+"Capture",n=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Ln(e,r),o!=null&&n.unshift(Fn(e,o,i)),o=Ln(e,t),o!=null&&n.push(Fn(e,o,i))),e=e.return}return n}function wr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function pc(e,t,r,n,i){for(var o=t._reactName,l=[];r!==null&&r!==n;){var s=r,c=s.alternate,u=s.stateNode;if(c!==null&&c===n)break;s.tag===5&&u!==null&&(s=u,i?(c=Ln(r,o),c!=null&&l.unshift(Fn(r,c,s))):i||(c=Ln(r,o),c!=null&&l.push(Fn(r,c,s)))),r=r.return}l.length!==0&&e.push({event:t,listeners:l})}var u2=/\r\n?/g,d2=/\u0000|\uFFFD/g;function hc(e){return(typeof e=="string"?e:""+e).replace(u2,`
`).replace(d2,"")}function vi(e,t,r){if(t=hc(t),hc(e)!==t&&r)throw Error(C(425))}function Yi(){}var Yl=null,Gl=null;function Jl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ql=typeof setTimeout=="function"?setTimeout:void 0,f2=typeof clearTimeout=="function"?clearTimeout:void 0,mc=typeof Promise=="function"?Promise:void 0,p2=typeof queueMicrotask=="function"?queueMicrotask:typeof mc<"u"?function(e){return mc.resolve(null).then(e).catch(h2)}:ql;function h2(e){setTimeout(function(){throw e})}function cl(e,t){var r=t,n=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(n===0){e.removeChild(i),bn(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=i}while(r);bn(t)}function Dt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function gc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var nn=Math.random().toString(36).slice(2),nt="__reactFiber$"+nn,An="__reactProps$"+nn,yt="__reactContainer$"+nn,ea="__reactEvents$"+nn,m2="__reactListeners$"+nn,g2="__reactHandles$"+nn;function qt(e){var t=e[nt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[yt]||r[nt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=gc(e);e!==null;){if(r=e[nt])return r;e=gc(e)}return t}e=r,r=e.parentNode}return null}function ti(e){return e=e[nt]||e[yt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function _r(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function Po(e){return e[An]||null}var ta=[],Tr=-1;function Xt(e){return{current:e}}function V(e){0>Tr||(e.current=ta[Tr],ta[Tr]=null,Tr--)}function A(e,t){Tr++,ta[Tr]=e.current,e.current=t}var Zt={},me=Xt(Zt),Ce=Xt(!1),lr=Zt;function Vr(e,t){var r=e.type.contextTypes;if(!r)return Zt;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in r)i[o]=t[o];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ee(e){return e=e.childContextTypes,e!=null}function Gi(){V(Ce),V(me)}function vc(e,t,r){if(me.current!==Zt)throw Error(C(168));A(me,t),A(Ce,r)}function N1(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var i in n)if(!(i in t))throw Error(C(108,q0(e)||"Unknown",i));return K({},r,n)}function Ji(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Zt,lr=me.current,A(me,e),A(Ce,Ce.current),!0}function yc(e,t,r){var n=e.stateNode;if(!n)throw Error(C(169));r?(e=N1(e,t,lr),n.__reactInternalMemoizedMergedChildContext=e,V(Ce),V(me),A(me,e)):V(Ce),A(Ce,r)}var pt=null,No=!1,ul=!1;function _1(e){pt===null?pt=[e]:pt.push(e)}function v2(e){No=!0,_1(e)}function Kt(){if(!ul&&pt!==null){ul=!0;var e=0,t=D;try{var r=pt;for(D=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}pt=null,No=!1}catch(i){throw pt!==null&&(pt=pt.slice(e+1)),qu(Ka,Kt),i}finally{D=t,ul=!1}}return null}var zr=[],Rr=0,qi=null,eo=0,$e=[],De=0,ar=null,ht=1,mt="";function Gt(e,t){zr[Rr++]=eo,zr[Rr++]=qi,qi=e,eo=t}function T1(e,t,r){$e[De++]=ht,$e[De++]=mt,$e[De++]=ar,ar=e;var n=ht;e=mt;var i=32-Ke(n)-1;n&=~(1<<i),r+=1;var o=32-Ke(t)+i;if(30<o){var l=i-i%5;o=(n&(1<<l)-1).toString(32),n>>=l,i-=l,ht=1<<32-Ke(t)+i|r<<i|n,mt=o+e}else ht=1<<o|r<<i|n,mt=e}function is(e){e.return!==null&&(Gt(e,1),T1(e,1,0))}function os(e){for(;e===qi;)qi=zr[--Rr],zr[Rr]=null,eo=zr[--Rr],zr[Rr]=null;for(;e===ar;)ar=$e[--De],$e[De]=null,mt=$e[--De],$e[De]=null,ht=$e[--De],$e[De]=null}var Re=null,ze=null,Z=!1,Xe=null;function z1(e,t){var r=Fe(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function xc(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Re=e,ze=Dt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Re=e,ze=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=ar!==null?{id:ht,overflow:mt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Fe(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Re=e,ze=null,!0):!1;default:return!1}}function ra(e){return(e.mode&1)!==0&&(e.flags&128)===0}function na(e){if(Z){var t=ze;if(t){var r=t;if(!xc(e,t)){if(ra(e))throw Error(C(418));t=Dt(r.nextSibling);var n=Re;t&&xc(e,t)?z1(n,r):(e.flags=e.flags&-4097|2,Z=!1,Re=e)}}else{if(ra(e))throw Error(C(418));e.flags=e.flags&-4097|2,Z=!1,Re=e}}}function wc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Re=e}function yi(e){if(e!==Re)return!1;if(!Z)return wc(e),Z=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Jl(e.type,e.memoizedProps)),t&&(t=ze)){if(ra(e))throw R1(),Error(C(418));for(;t;)z1(e,t),t=Dt(t.nextSibling)}if(wc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){ze=Dt(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}ze=null}}else ze=Re?Dt(e.stateNode.nextSibling):null;return!0}function R1(){for(var e=ze;e;)e=Dt(e.nextSibling)}function Wr(){ze=Re=null,Z=!1}function ls(e){Xe===null?Xe=[e]:Xe.push(e)}var y2=kt.ReactCurrentBatchConfig;function Ze(e,t){if(e&&e.defaultProps){t=K({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}var to=Xt(null),ro=null,Lr=null,as=null;function ss(){as=Lr=ro=null}function cs(e){var t=to.current;V(to),e._currentValue=t}function ia(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function Br(e,t){ro=e,as=Lr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Se=!0),e.firstContext=null)}function Be(e){var t=e._currentValue;if(as!==e)if(e={context:e,memoizedValue:t,next:null},Lr===null){if(ro===null)throw Error(C(308));Lr=e,ro.dependencies={lanes:0,firstContext:e}}else Lr=Lr.next=e;return t}var er=null;function us(e){er===null?er=[e]:er.push(e)}function L1(e,t,r,n){var i=t.interleaved;return i===null?(r.next=r,us(t)):(r.next=i.next,i.next=r),t.interleaved=r,xt(e,n)}function xt(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var _t=!1;function ds(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function M1(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function gt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ft(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,O&2){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,xt(e,r)}return i=n.interleaved,i===null?(t.next=t,us(n)):(t.next=i.next,i.next=t),n.interleaved=t,xt(e,r)}function zi(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Ya(e,r)}}function kc(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var i=null,o=null;if(r=r.firstBaseUpdate,r!==null){do{var l={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};o===null?i=o=l:o=o.next=l,r=r.next}while(r!==null);o===null?i=o=t:o=o.next=t}else i=o=t;r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function no(e,t,r,n){var i=e.updateQueue;_t=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,u=c.next;c.next=null,l===null?o=u:l.next=u,l=c;var f=e.alternate;f!==null&&(f=f.updateQueue,s=f.lastBaseUpdate,s!==l&&(s===null?f.firstBaseUpdate=u:s.next=u,f.lastBaseUpdate=c))}if(o!==null){var h=i.baseState;l=0,f=u=c=null,s=o;do{var g=s.lane,v=s.eventTime;if((n&g)===g){f!==null&&(f=f.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var y=e,w=s;switch(g=t,v=r,w.tag){case 1:if(y=w.payload,typeof y=="function"){h=y.call(v,h,g);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,g=typeof y=="function"?y.call(v,h,g):y,g==null)break e;h=K({},h,g);break e;case 2:_t=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[s]:g.push(s))}else v={eventTime:v,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},f===null?(u=f=v,c=h):f=f.next=v,l|=g;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;g=s,s=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(1);if(f===null&&(c=h),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);cr|=l,e.lanes=l,e.memoizedState=h}}function jc(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],i=n.callback;if(i!==null){if(n.callback=null,n=r,typeof i!="function")throw Error(C(191,i));i.call(n)}}}var I1=new Lu.Component().refs;function oa(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:K({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var _o={isMounted:function(e){return(e=e._reactInternals)?hr(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=xe(),i=Bt(e),o=gt(n,i);o.payload=t,r!=null&&(o.callback=r),t=Ft(e,o,i),t!==null&&(Ye(t,e,i,n),zi(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=xe(),i=Bt(e),o=gt(n,i);o.tag=1,o.payload=t,r!=null&&(o.callback=r),t=Ft(e,o,i),t!==null&&(Ye(t,e,i,n),zi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=xe(),n=Bt(e),i=gt(r,n);i.tag=2,t!=null&&(i.callback=t),t=Ft(e,i,n),t!==null&&(Ye(t,e,n,r),zi(t,e,n))}};function Sc(e,t,r,n,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,o,l):t.prototype&&t.prototype.isPureReactComponent?!$n(r,n)||!$n(i,o):!0}function b1(e,t,r){var n=!1,i=Zt,o=t.contextType;return typeof o=="object"&&o!==null?o=Be(o):(i=Ee(t)?lr:me.current,n=t.contextTypes,o=(n=n!=null)?Vr(e,i):Zt),t=new t(r,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=_o,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Cc(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&_o.enqueueReplaceState(t,t.state,null)}function la(e,t,r,n){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs=I1,ds(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Be(o):(o=Ee(t)?lr:me.current,i.context=Vr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(oa(e,t,o,r),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&_o.enqueueReplaceState(i,i.state,null),no(e,r,i,n),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function dn(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(C(309));var n=r.stateNode}if(!n)throw Error(C(147,e));var i=n,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var s=i.refs;s===I1&&(s=i.refs={}),l===null?delete s[o]:s[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(C(284));if(!r._owner)throw Error(C(290,e))}return e}function xi(e,t){throw e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ec(e){var t=e._init;return t(e._payload)}function O1(e){function t(p,d){if(e){var m=p.deletions;m===null?(p.deletions=[d],p.flags|=16):m.push(d)}}function r(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function n(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function i(p,d){return p=Ut(p,d),p.index=0,p.sibling=null,p}function o(p,d,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<d?(p.flags|=2,d):m):(p.flags|=2,d)):(p.flags|=1048576,d)}function l(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,d,m,x){return d===null||d.tag!==6?(d=vl(m,p.mode,x),d.return=p,d):(d=i(d,m),d.return=p,d)}function c(p,d,m,x){var k=m.type;return k===Cr?f(p,d,m.props.children,x,m.key):d!==null&&(d.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Nt&&Ec(k)===d.type)?(x=i(d,m.props),x.ref=dn(p,d,m),x.return=p,x):(x=Oi(m.type,m.key,m.props,null,p.mode,x),x.ref=dn(p,d,m),x.return=p,x)}function u(p,d,m,x){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=yl(m,p.mode,x),d.return=p,d):(d=i(d,m.children||[]),d.return=p,d)}function f(p,d,m,x,k){return d===null||d.tag!==7?(d=ir(m,p.mode,x,k),d.return=p,d):(d=i(d,m),d.return=p,d)}function h(p,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=vl(""+d,p.mode,m),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case si:return m=Oi(d.type,d.key,d.props,null,p.mode,m),m.ref=dn(p,null,d),m.return=p,m;case Sr:return d=yl(d,p.mode,m),d.return=p,d;case Nt:var x=d._init;return h(p,x(d._payload),m)}if(gn(d)||ln(d))return d=ir(d,p.mode,m,null),d.return=p,d;xi(p,d)}return null}function g(p,d,m,x){var k=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return k!==null?null:s(p,d,""+m,x);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case si:return m.key===k?c(p,d,m,x):null;case Sr:return m.key===k?u(p,d,m,x):null;case Nt:return k=m._init,g(p,d,k(m._payload),x)}if(gn(m)||ln(m))return k!==null?null:f(p,d,m,x,null);xi(p,m)}return null}function v(p,d,m,x,k){if(typeof x=="string"&&x!==""||typeof x=="number")return p=p.get(m)||null,s(d,p,""+x,k);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case si:return p=p.get(x.key===null?m:x.key)||null,c(d,p,x,k);case Sr:return p=p.get(x.key===null?m:x.key)||null,u(d,p,x,k);case Nt:var j=x._init;return v(p,d,m,j(x._payload),k)}if(gn(x)||ln(x))return p=p.get(m)||null,f(d,p,x,k,null);xi(d,x)}return null}function y(p,d,m,x){for(var k=null,j=null,S=d,T=d=0,F=null;S!==null&&T<m.length;T++){S.index>T?(F=S,S=null):F=S.sibling;var M=g(p,S,m[T],x);if(M===null){S===null&&(S=F);break}e&&S&&M.alternate===null&&t(p,S),d=o(M,d,T),j===null?k=M:j.sibling=M,j=M,S=F}if(T===m.length)return r(p,S),Z&&Gt(p,T),k;if(S===null){for(;T<m.length;T++)S=h(p,m[T],x),S!==null&&(d=o(S,d,T),j===null?k=S:j.sibling=S,j=S);return Z&&Gt(p,T),k}for(S=n(p,S);T<m.length;T++)F=v(S,p,T,m[T],x),F!==null&&(e&&F.alternate!==null&&S.delete(F.key===null?T:F.key),d=o(F,d,T),j===null?k=F:j.sibling=F,j=F);return e&&S.forEach(function(ge){return t(p,ge)}),Z&&Gt(p,T),k}function w(p,d,m,x){var k=ln(m);if(typeof k!="function")throw Error(C(150));if(m=k.call(m),m==null)throw Error(C(151));for(var j=k=null,S=d,T=d=0,F=null,M=m.next();S!==null&&!M.done;T++,M=m.next()){S.index>T?(F=S,S=null):F=S.sibling;var ge=g(p,S,M.value,x);if(ge===null){S===null&&(S=F);break}e&&S&&ge.alternate===null&&t(p,S),d=o(ge,d,T),j===null?k=ge:j.sibling=ge,j=ge,S=F}if(M.done)return r(p,S),Z&&Gt(p,T),k;if(S===null){for(;!M.done;T++,M=m.next())M=h(p,M.value,x),M!==null&&(d=o(M,d,T),j===null?k=M:j.sibling=M,j=M);return Z&&Gt(p,T),k}for(S=n(p,S);!M.done;T++,M=m.next())M=v(S,p,T,M.value,x),M!==null&&(e&&M.alternate!==null&&S.delete(M.key===null?T:M.key),d=o(M,d,T),j===null?k=M:j.sibling=M,j=M);return e&&S.forEach(function(lt){return t(p,lt)}),Z&&Gt(p,T),k}function P(p,d,m,x){if(typeof m=="object"&&m!==null&&m.type===Cr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case si:e:{for(var k=m.key,j=d;j!==null;){if(j.key===k){if(k=m.type,k===Cr){if(j.tag===7){r(p,j.sibling),d=i(j,m.props.children),d.return=p,p=d;break e}}else if(j.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Nt&&Ec(k)===j.type){r(p,j.sibling),d=i(j,m.props),d.ref=dn(p,j,m),d.return=p,p=d;break e}r(p,j);break}else t(p,j);j=j.sibling}m.type===Cr?(d=ir(m.props.children,p.mode,x,m.key),d.return=p,p=d):(x=Oi(m.type,m.key,m.props,null,p.mode,x),x.ref=dn(p,d,m),x.return=p,p=x)}return l(p);case Sr:e:{for(j=m.key;d!==null;){if(d.key===j)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){r(p,d.sibling),d=i(d,m.children||[]),d.return=p,p=d;break e}else{r(p,d);break}else t(p,d);d=d.sibling}d=yl(m,p.mode,x),d.return=p,p=d}return l(p);case Nt:return j=m._init,P(p,d,j(m._payload),x)}if(gn(m))return y(p,d,m,x);if(ln(m))return w(p,d,m,x);xi(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(r(p,d.sibling),d=i(d,m),d.return=p,p=d):(r(p,d),d=vl(m,p.mode,x),d.return=p,p=d),l(p)):r(p,d)}return P}var Zr=O1(!0),$1=O1(!1),ri={},ot=Xt(ri),Bn=Xt(ri),Un=Xt(ri);function tr(e){if(e===ri)throw Error(C(174));return e}function fs(e,t){switch(A(Un,t),A(Bn,e),A(ot,ri),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Dl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Dl(t,e)}V(ot),A(ot,t)}function Qr(){V(ot),V(Bn),V(Un)}function D1(e){tr(Un.current);var t=tr(ot.current),r=Dl(t,e.type);t!==r&&(A(Bn,e),A(ot,r))}function ps(e){Bn.current===e&&(V(ot),V(Bn))}var Q=Xt(0);function io(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var dl=[];function hs(){for(var e=0;e<dl.length;e++)dl[e]._workInProgressVersionPrimary=null;dl.length=0}var Ri=kt.ReactCurrentDispatcher,fl=kt.ReactCurrentBatchConfig,sr=0,X=null,re=null,ie=null,oo=!1,En=!1,Hn=0,x2=0;function fe(){throw Error(C(321))}function ms(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Je(e[r],t[r]))return!1;return!0}function gs(e,t,r,n,i,o){if(sr=o,X=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ri.current=e===null||e.memoizedState===null?S2:C2,e=r(n,i),En){o=0;do{if(En=!1,Hn=0,25<=o)throw Error(C(301));o+=1,ie=re=null,t.updateQueue=null,Ri.current=E2,e=r(n,i)}while(En)}if(Ri.current=lo,t=re!==null&&re.next!==null,sr=0,ie=re=X=null,oo=!1,t)throw Error(C(300));return e}function vs(){var e=Hn!==0;return Hn=0,e}function tt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ie===null?X.memoizedState=ie=e:ie=ie.next=e,ie}function Ue(){if(re===null){var e=X.alternate;e=e!==null?e.memoizedState:null}else e=re.next;var t=ie===null?X.memoizedState:ie.next;if(t!==null)ie=t,re=e;else{if(e===null)throw Error(C(310));re=e,e={memoizedState:re.memoizedState,baseState:re.baseState,baseQueue:re.baseQueue,queue:re.queue,next:null},ie===null?X.memoizedState=ie=e:ie=ie.next=e}return ie}function Vn(e,t){return typeof t=="function"?t(e):t}function pl(e){var t=Ue(),r=t.queue;if(r===null)throw Error(C(311));r.lastRenderedReducer=e;var n=re,i=n.baseQueue,o=r.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}n.baseQueue=i=o,r.pending=null}if(i!==null){o=i.next,n=n.baseState;var s=l=null,c=null,u=o;do{var f=u.lane;if((sr&f)===f)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),n=u.hasEagerState?u.eagerState:e(n,u.action);else{var h={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(s=c=h,l=n):c=c.next=h,X.lanes|=f,cr|=f}u=u.next}while(u!==null&&u!==o);c===null?l=n:c.next=s,Je(n,t.memoizedState)||(Se=!0),t.memoizedState=n,t.baseState=l,t.baseQueue=c,r.lastRenderedState=n}if(e=r.interleaved,e!==null){i=e;do o=i.lane,X.lanes|=o,cr|=o,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function hl(e){var t=Ue(),r=t.queue;if(r===null)throw Error(C(311));r.lastRenderedReducer=e;var n=r.dispatch,i=r.pending,o=t.memoizedState;if(i!==null){r.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);Je(o,t.memoizedState)||(Se=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),r.lastRenderedState=o}return[o,n]}function F1(){}function A1(e,t){var r=X,n=Ue(),i=t(),o=!Je(n.memoizedState,i);if(o&&(n.memoizedState=i,Se=!0),n=n.queue,ys(H1.bind(null,r,n,e),[e]),n.getSnapshot!==t||o||ie!==null&&ie.memoizedState.tag&1){if(r.flags|=2048,Wn(9,U1.bind(null,r,n,i,t),void 0,null),ae===null)throw Error(C(349));sr&30||B1(r,t,i)}return i}function B1(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function U1(e,t,r,n){t.value=r,t.getSnapshot=n,V1(t)&&W1(e)}function H1(e,t,r){return r(function(){V1(t)&&W1(e)})}function V1(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Je(e,r)}catch{return!0}}function W1(e){var t=xt(e,1);t!==null&&Ye(t,e,1,-1)}function Pc(e){var t=tt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vn,lastRenderedState:e},t.queue=e,e=e.dispatch=j2.bind(null,X,e),[t.memoizedState,e]}function Wn(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function Z1(){return Ue().memoizedState}function Li(e,t,r,n){var i=tt();X.flags|=e,i.memoizedState=Wn(1|t,r,void 0,n===void 0?null:n)}function To(e,t,r,n){var i=Ue();n=n===void 0?null:n;var o=void 0;if(re!==null){var l=re.memoizedState;if(o=l.destroy,n!==null&&ms(n,l.deps)){i.memoizedState=Wn(t,r,o,n);return}}X.flags|=e,i.memoizedState=Wn(1|t,r,o,n)}function Nc(e,t){return Li(8390656,8,e,t)}function ys(e,t){return To(2048,8,e,t)}function Q1(e,t){return To(4,2,e,t)}function X1(e,t){return To(4,4,e,t)}function K1(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Y1(e,t,r){return r=r!=null?r.concat([e]):null,To(4,4,K1.bind(null,t,e),r)}function xs(){}function G1(e,t){var r=Ue();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&ms(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function J1(e,t){var r=Ue();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&ms(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function q1(e,t,r){return sr&21?(Je(r,t)||(r=r1(),X.lanes|=r,cr|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Se=!0),e.memoizedState=r)}function w2(e,t){var r=D;D=r!==0&&4>r?r:4,e(!0);var n=fl.transition;fl.transition={};try{e(!1),t()}finally{D=r,fl.transition=n}}function ed(){return Ue().memoizedState}function k2(e,t,r){var n=Bt(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},td(e))rd(t,r);else if(r=L1(e,t,r,n),r!==null){var i=xe();Ye(r,e,n,i),nd(r,t,n)}}function j2(e,t,r){var n=Bt(e),i={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(td(e))rd(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,s=o(l,r);if(i.hasEagerState=!0,i.eagerState=s,Je(s,l)){var c=t.interleaved;c===null?(i.next=i,us(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}r=L1(e,t,i,n),r!==null&&(i=xe(),Ye(r,e,n,i),nd(r,t,n))}}function td(e){var t=e.alternate;return e===X||t!==null&&t===X}function rd(e,t){En=oo=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function nd(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Ya(e,r)}}var lo={readContext:Be,useCallback:fe,useContext:fe,useEffect:fe,useImperativeHandle:fe,useInsertionEffect:fe,useLayoutEffect:fe,useMemo:fe,useReducer:fe,useRef:fe,useState:fe,useDebugValue:fe,useDeferredValue:fe,useTransition:fe,useMutableSource:fe,useSyncExternalStore:fe,useId:fe,unstable_isNewReconciler:!1},S2={readContext:Be,useCallback:function(e,t){return tt().memoizedState=[e,t===void 0?null:t],e},useContext:Be,useEffect:Nc,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Li(4194308,4,K1.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Li(4194308,4,e,t)},useInsertionEffect:function(e,t){return Li(4,2,e,t)},useMemo:function(e,t){var r=tt();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=tt();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=k2.bind(null,X,e),[n.memoizedState,e]},useRef:function(e){var t=tt();return e={current:e},t.memoizedState=e},useState:Pc,useDebugValue:xs,useDeferredValue:function(e){return tt().memoizedState=e},useTransition:function(){var e=Pc(!1),t=e[0];return e=w2.bind(null,e[1]),tt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=X,i=tt();if(Z){if(r===void 0)throw Error(C(407));r=r()}else{if(r=t(),ae===null)throw Error(C(349));sr&30||B1(n,t,r)}i.memoizedState=r;var o={value:r,getSnapshot:t};return i.queue=o,Nc(H1.bind(null,n,o,e),[e]),n.flags|=2048,Wn(9,U1.bind(null,n,o,r,t),void 0,null),r},useId:function(){var e=tt(),t=ae.identifierPrefix;if(Z){var r=mt,n=ht;r=(n&~(1<<32-Ke(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=Hn++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=x2++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},C2={readContext:Be,useCallback:G1,useContext:Be,useEffect:ys,useImperativeHandle:Y1,useInsertionEffect:Q1,useLayoutEffect:X1,useMemo:J1,useReducer:pl,useRef:Z1,useState:function(){return pl(Vn)},useDebugValue:xs,useDeferredValue:function(e){var t=Ue();return q1(t,re.memoizedState,e)},useTransition:function(){var e=pl(Vn)[0],t=Ue().memoizedState;return[e,t]},useMutableSource:F1,useSyncExternalStore:A1,useId:ed,unstable_isNewReconciler:!1},E2={readContext:Be,useCallback:G1,useContext:Be,useEffect:ys,useImperativeHandle:Y1,useInsertionEffect:Q1,useLayoutEffect:X1,useMemo:J1,useReducer:hl,useRef:Z1,useState:function(){return hl(Vn)},useDebugValue:xs,useDeferredValue:function(e){var t=Ue();return re===null?t.memoizedState=e:q1(t,re.memoizedState,e)},useTransition:function(){var e=hl(Vn)[0],t=Ue().memoizedState;return[e,t]},useMutableSource:F1,useSyncExternalStore:A1,useId:ed,unstable_isNewReconciler:!1};function Xr(e,t){try{var r="",n=t;do r+=J0(n),n=n.return;while(n);var i=r}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function ml(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function aa(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var P2=typeof WeakMap=="function"?WeakMap:Map;function id(e,t,r){r=gt(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){so||(so=!0,va=n),aa(e,t)},r}function od(e,t,r){r=gt(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var i=t.value;r.payload=function(){return n(i)},r.callback=function(){aa(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(r.callback=function(){aa(e,t),typeof n!="function"&&(At===null?At=new Set([this]):At.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),r}function _c(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new P2;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(r)||(i.add(r),e=A2.bind(null,e,t,r),t.then(e,e))}function Tc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function zc(e,t,r,n,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=gt(-1,1),t.tag=2,Ft(r,t,1))),r.lanes|=1),e)}var N2=kt.ReactCurrentOwner,Se=!1;function ye(e,t,r,n){t.child=e===null?$1(t,null,r,n):Zr(t,e.child,r,n)}function Rc(e,t,r,n,i){r=r.render;var o=t.ref;return Br(t,i),n=gs(e,t,r,n,o,i),r=vs(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,wt(e,t,i)):(Z&&r&&is(t),t.flags|=1,ye(e,t,n,i),t.child)}function Lc(e,t,r,n,i){if(e===null){var o=r.type;return typeof o=="function"&&!Ns(o)&&o.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=o,ld(e,t,o,n,i)):(e=Oi(r.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(r=r.compare,r=r!==null?r:$n,r(l,n)&&e.ref===t.ref)return wt(e,t,i)}return t.flags|=1,e=Ut(o,n),e.ref=t.ref,e.return=t,t.child=e}function ld(e,t,r,n,i){if(e!==null){var o=e.memoizedProps;if($n(o,n)&&e.ref===t.ref)if(Se=!1,t.pendingProps=n=o,(e.lanes&i)!==0)e.flags&131072&&(Se=!0);else return t.lanes=e.lanes,wt(e,t,i)}return sa(e,t,r,n,i)}function ad(e,t,r){var n=t.pendingProps,i=n.children,o=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},A(Ir,Te),Te|=r;else{if(!(r&1073741824))return e=o!==null?o.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,A(Ir,Te),Te|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=o!==null?o.baseLanes:r,A(Ir,Te),Te|=n}else o!==null?(n=o.baseLanes|r,t.memoizedState=null):n=r,A(Ir,Te),Te|=n;return ye(e,t,i,r),t.child}function sd(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function sa(e,t,r,n,i){var o=Ee(r)?lr:me.current;return o=Vr(t,o),Br(t,i),r=gs(e,t,r,n,o,i),n=vs(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,wt(e,t,i)):(Z&&n&&is(t),t.flags|=1,ye(e,t,r,i),t.child)}function Mc(e,t,r,n,i){if(Ee(r)){var o=!0;Ji(t)}else o=!1;if(Br(t,i),t.stateNode===null)Mi(e,t),b1(t,r,n),la(t,r,n,i),n=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var c=l.context,u=r.contextType;typeof u=="object"&&u!==null?u=Be(u):(u=Ee(r)?lr:me.current,u=Vr(t,u));var f=r.getDerivedStateFromProps,h=typeof f=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==n||c!==u)&&Cc(t,l,n,u),_t=!1;var g=t.memoizedState;l.state=g,no(t,n,l,i),c=t.memoizedState,s!==n||g!==c||Ce.current||_t?(typeof f=="function"&&(oa(t,r,f,n),c=t.memoizedState),(s=_t||Sc(t,r,s,n,g,c,u))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=c),l.props=n,l.state=c,l.context=u,n=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{l=t.stateNode,M1(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Ze(t.type,s),l.props=u,h=t.pendingProps,g=l.context,c=r.contextType,typeof c=="object"&&c!==null?c=Be(c):(c=Ee(r)?lr:me.current,c=Vr(t,c));var v=r.getDerivedStateFromProps;(f=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==h||g!==c)&&Cc(t,l,n,c),_t=!1,g=t.memoizedState,l.state=g,no(t,n,l,i);var y=t.memoizedState;s!==h||g!==y||Ce.current||_t?(typeof v=="function"&&(oa(t,r,v,n),y=t.memoizedState),(u=_t||Sc(t,r,u,n,g,y,c)||!1)?(f||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(n,y,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(n,y,c)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=y),l.props=n,l.state=y,l.context=c,n=u):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),n=!1)}return ca(e,t,r,n,o,i)}function ca(e,t,r,n,i,o){sd(e,t);var l=(t.flags&128)!==0;if(!n&&!l)return i&&yc(t,r,!1),wt(e,t,o);n=t.stateNode,N2.current=t;var s=l&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&l?(t.child=Zr(t,e.child,null,o),t.child=Zr(t,null,s,o)):ye(e,t,s,o),t.memoizedState=n.state,i&&yc(t,r,!0),t.child}function cd(e){var t=e.stateNode;t.pendingContext?vc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&vc(e,t.context,!1),fs(e,t.containerInfo)}function Ic(e,t,r,n,i){return Wr(),ls(i),t.flags|=256,ye(e,t,r,n),t.child}var ua={dehydrated:null,treeContext:null,retryLane:0};function da(e){return{baseLanes:e,cachePool:null,transitions:null}}function ud(e,t,r){var n=t.pendingProps,i=Q.current,o=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),A(Q,i&1),e===null)return na(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=n.children,e=n.fallback,o?(n=t.mode,o=t.child,l={mode:"hidden",children:l},!(n&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Lo(l,n,0,null),e=ir(e,n,r,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=da(r),t.memoizedState=ua,e):ws(t,l));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return _2(e,t,l,n,s,i,r);if(o){o=n.fallback,l=t.mode,i=e.child,s=i.sibling;var c={mode:"hidden",children:n.children};return!(l&1)&&t.child!==i?(n=t.child,n.childLanes=0,n.pendingProps=c,t.deletions=null):(n=Ut(i,c),n.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=Ut(s,o):(o=ir(o,l,r,null),o.flags|=2),o.return=t,n.return=t,n.sibling=o,t.child=n,n=o,o=t.child,l=e.child.memoizedState,l=l===null?da(r):{baseLanes:l.baseLanes|r,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~r,t.memoizedState=ua,n}return o=e.child,e=o.sibling,n=Ut(o,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function ws(e,t){return t=Lo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function wi(e,t,r,n){return n!==null&&ls(n),Zr(t,e.child,null,r),e=ws(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function _2(e,t,r,n,i,o,l){if(r)return t.flags&256?(t.flags&=-257,n=ml(Error(C(422))),wi(e,t,l,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=n.fallback,i=t.mode,n=Lo({mode:"visible",children:n.children},i,0,null),o=ir(o,i,l,null),o.flags|=2,n.return=t,o.return=t,n.sibling=o,t.child=n,t.mode&1&&Zr(t,e.child,null,l),t.child.memoizedState=da(l),t.memoizedState=ua,o);if(!(t.mode&1))return wi(e,t,l,null);if(i.data==="$!"){if(n=i.nextSibling&&i.nextSibling.dataset,n)var s=n.dgst;return n=s,o=Error(C(419)),n=ml(o,n,void 0),wi(e,t,l,n)}if(s=(l&e.childLanes)!==0,Se||s){if(n=ae,n!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(n.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,xt(e,i),Ye(n,e,i,-1))}return Ps(),n=ml(Error(C(421))),wi(e,t,l,n)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=B2.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,ze=Dt(i.nextSibling),Re=t,Z=!0,Xe=null,e!==null&&($e[De++]=ht,$e[De++]=mt,$e[De++]=ar,ht=e.id,mt=e.overflow,ar=t),t=ws(t,n.children),t.flags|=4096,t)}function bc(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),ia(e.return,t,r)}function gl(e,t,r,n,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=r,o.tailMode=i)}function dd(e,t,r){var n=t.pendingProps,i=n.revealOrder,o=n.tail;if(ye(e,t,n.children,r),n=Q.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&bc(e,r,t);else if(e.tag===19)bc(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(A(Q,n),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;r!==null;)e=r.alternate,e!==null&&io(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),gl(t,!1,i,r,o);break;case"backwards":for(r=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&io(e)===null){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}gl(t,!0,r,null,o);break;case"together":gl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Mi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function wt(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),cr|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,r=Ut(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Ut(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function T2(e,t,r){switch(t.tag){case 3:cd(t),Wr();break;case 5:D1(t);break;case 1:Ee(t.type)&&Ji(t);break;case 4:fs(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,i=t.memoizedProps.value;A(to,n._currentValue),n._currentValue=i;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(A(Q,Q.current&1),t.flags|=128,null):r&t.child.childLanes?ud(e,t,r):(A(Q,Q.current&1),e=wt(e,t,r),e!==null?e.sibling:null);A(Q,Q.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return dd(e,t,r);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),A(Q,Q.current),n)break;return null;case 22:case 23:return t.lanes=0,ad(e,t,r)}return wt(e,t,r)}var fd,fa,pd,hd;fd=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};fa=function(){};pd=function(e,t,r,n){var i=e.memoizedProps;if(i!==n){e=t.stateNode,tr(ot.current);var o=null;switch(r){case"input":i=Il(e,i),n=Il(e,n),o=[];break;case"select":i=K({},i,{value:void 0}),n=K({},n,{value:void 0}),o=[];break;case"textarea":i=$l(e,i),n=$l(e,n),o=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=Yi)}Fl(r,n);var l;r=null;for(u in i)if(!n.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(l in s)s.hasOwnProperty(l)&&(r||(r={}),r[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(zn.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in n){var c=n[u];if(s=i!=null?i[u]:void 0,n.hasOwnProperty(u)&&c!==s&&(c!=null||s!=null))if(u==="style")if(s){for(l in s)!s.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(r||(r={}),r[l]="");for(l in c)c.hasOwnProperty(l)&&s[l]!==c[l]&&(r||(r={}),r[l]=c[l])}else r||(o||(o=[]),o.push(u,r)),r=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,s=s?s.__html:void 0,c!=null&&s!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(zn.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&B("scroll",e),o||s===c||(o=[])):(o=o||[]).push(u,c))}r&&(o=o||[]).push("style",r);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};hd=function(e,t,r,n){r!==n&&(t.flags|=4)};function fn(e,t){if(!Z)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function pe(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,n|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function z2(e,t,r){var n=t.pendingProps;switch(os(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pe(t),null;case 1:return Ee(t.type)&&Gi(),pe(t),null;case 3:return n=t.stateNode,Qr(),V(Ce),V(me),hs(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(yi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Xe!==null&&(wa(Xe),Xe=null))),fa(e,t),pe(t),null;case 5:ps(t);var i=tr(Un.current);if(r=t.type,e!==null&&t.stateNode!=null)pd(e,t,r,n,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(C(166));return pe(t),null}if(e=tr(ot.current),yi(t)){n=t.stateNode,r=t.type;var o=t.memoizedProps;switch(n[nt]=t,n[An]=o,e=(t.mode&1)!==0,r){case"dialog":B("cancel",n),B("close",n);break;case"iframe":case"object":case"embed":B("load",n);break;case"video":case"audio":for(i=0;i<yn.length;i++)B(yn[i],n);break;case"source":B("error",n);break;case"img":case"image":case"link":B("error",n),B("load",n);break;case"details":B("toggle",n);break;case"input":Vs(n,o),B("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!o.multiple},B("invalid",n);break;case"textarea":Zs(n,o),B("invalid",n)}Fl(r,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var s=o[l];l==="children"?typeof s=="string"?n.textContent!==s&&(o.suppressHydrationWarning!==!0&&vi(n.textContent,s,e),i=["children",s]):typeof s=="number"&&n.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&vi(n.textContent,s,e),i=["children",""+s]):zn.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&B("scroll",n)}switch(r){case"input":ci(n),Ws(n,o,!0);break;case"textarea":ci(n),Qs(n);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(n.onclick=Yi)}n=i,t.updateQueue=n,n!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Bu(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=l.createElement(r,{is:n.is}):(e=l.createElement(r),r==="select"&&(l=e,n.multiple?l.multiple=!0:n.size&&(l.size=n.size))):e=l.createElementNS(e,r),e[nt]=t,e[An]=n,fd(e,t,!1,!1),t.stateNode=e;e:{switch(l=Al(r,n),r){case"dialog":B("cancel",e),B("close",e),i=n;break;case"iframe":case"object":case"embed":B("load",e),i=n;break;case"video":case"audio":for(i=0;i<yn.length;i++)B(yn[i],e);i=n;break;case"source":B("error",e),i=n;break;case"img":case"image":case"link":B("error",e),B("load",e),i=n;break;case"details":B("toggle",e),i=n;break;case"input":Vs(e,n),i=Il(e,n),B("invalid",e);break;case"option":i=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},i=K({},n,{value:void 0}),B("invalid",e);break;case"textarea":Zs(e,n),i=$l(e,n),B("invalid",e);break;default:i=n}Fl(r,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var c=s[o];o==="style"?Vu(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Uu(e,c)):o==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&Rn(e,c):typeof c=="number"&&Rn(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(zn.hasOwnProperty(o)?c!=null&&o==="onScroll"&&B("scroll",e):c!=null&&Va(e,o,c,l))}switch(r){case"input":ci(e),Ws(e,n,!1);break;case"textarea":ci(e),Qs(e);break;case"option":n.value!=null&&e.setAttribute("value",""+Wt(n.value));break;case"select":e.multiple=!!n.multiple,o=n.value,o!=null?$r(e,!!n.multiple,o,!1):n.defaultValue!=null&&$r(e,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Yi)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return pe(t),null;case 6:if(e&&t.stateNode!=null)hd(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(C(166));if(r=tr(Un.current),tr(ot.current),yi(t)){if(n=t.stateNode,r=t.memoizedProps,n[nt]=t,(o=n.nodeValue!==r)&&(e=Re,e!==null))switch(e.tag){case 3:vi(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&vi(n.nodeValue,r,(e.mode&1)!==0)}o&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[nt]=t,t.stateNode=n}return pe(t),null;case 13:if(V(Q),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Z&&ze!==null&&t.mode&1&&!(t.flags&128))R1(),Wr(),t.flags|=98560,o=!1;else if(o=yi(t),n!==null&&n.dehydrated!==null){if(e===null){if(!o)throw Error(C(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(C(317));o[nt]=t}else Wr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;pe(t),o=!1}else Xe!==null&&(wa(Xe),Xe=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||Q.current&1?ne===0&&(ne=3):Ps())),t.updateQueue!==null&&(t.flags|=4),pe(t),null);case 4:return Qr(),fa(e,t),e===null&&Dn(t.stateNode.containerInfo),pe(t),null;case 10:return cs(t.type._context),pe(t),null;case 17:return Ee(t.type)&&Gi(),pe(t),null;case 19:if(V(Q),o=t.memoizedState,o===null)return pe(t),null;if(n=(t.flags&128)!==0,l=o.rendering,l===null)if(n)fn(o,!1);else{if(ne!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=io(e),l!==null){for(t.flags|=128,fn(o,!1),n=l.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)o=r,e=n,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return A(Q,Q.current&1|2),t.child}e=e.sibling}o.tail!==null&&q()>Kr&&(t.flags|=128,n=!0,fn(o,!1),t.lanes=4194304)}else{if(!n)if(e=io(l),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),fn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!Z)return pe(t),null}else 2*q()-o.renderingStartTime>Kr&&r!==1073741824&&(t.flags|=128,n=!0,fn(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(r=o.last,r!==null?r.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=q(),t.sibling=null,r=Q.current,A(Q,n?r&1|2:r&1),t):(pe(t),null);case 22:case 23:return Es(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?Te&1073741824&&(pe(t),t.subtreeFlags&6&&(t.flags|=8192)):pe(t),null;case 24:return null;case 25:return null}throw Error(C(156,t.tag))}function R2(e,t){switch(os(t),t.tag){case 1:return Ee(t.type)&&Gi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Qr(),V(Ce),V(me),hs(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ps(t),null;case 13:if(V(Q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));Wr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return V(Q),null;case 4:return Qr(),null;case 10:return cs(t.type._context),null;case 22:case 23:return Es(),null;case 24:return null;default:return null}}var ki=!1,he=!1,L2=typeof WeakSet=="function"?WeakSet:Set,_=null;function Mr(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){G(e,t,n)}else r.current=null}function pa(e,t,r){try{r()}catch(n){G(e,t,n)}}var Oc=!1;function M2(e,t){if(Yl=Qi,e=y1(),ns(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var i=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break e}var l=0,s=-1,c=-1,u=0,f=0,h=e,g=null;t:for(;;){for(var v;h!==r||i!==0&&h.nodeType!==3||(s=l+i),h!==o||n!==0&&h.nodeType!==3||(c=l+n),h.nodeType===3&&(l+=h.nodeValue.length),(v=h.firstChild)!==null;)g=h,h=v;for(;;){if(h===e)break t;if(g===r&&++u===i&&(s=l),g===o&&++f===n&&(c=l),(v=h.nextSibling)!==null)break;h=g,g=h.parentNode}h=v}r=s===-1||c===-1?null:{start:s,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(Gl={focusedElem:e,selectionRange:r},Qi=!1,_=t;_!==null;)if(t=_,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,_=e;else for(;_!==null;){t=_;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,P=y.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?w:Ze(t.type,w),P);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(x){G(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,_=e;break}_=t.return}return y=Oc,Oc=!1,y}function Pn(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&pa(t,r,o)}i=i.next}while(i!==n)}}function zo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function ha(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function md(e){var t=e.alternate;t!==null&&(e.alternate=null,md(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[nt],delete t[An],delete t[ea],delete t[m2],delete t[g2])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function gd(e){return e.tag===5||e.tag===3||e.tag===4}function $c(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||gd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ma(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Yi));else if(n!==4&&(e=e.child,e!==null))for(ma(e,t,r),e=e.sibling;e!==null;)ma(e,t,r),e=e.sibling}function ga(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(ga(e,t,r),e=e.sibling;e!==null;)ga(e,t,r),e=e.sibling}var se=null,Qe=!1;function Ct(e,t,r){for(r=r.child;r!==null;)vd(e,t,r),r=r.sibling}function vd(e,t,r){if(it&&typeof it.onCommitFiberUnmount=="function")try{it.onCommitFiberUnmount(jo,r)}catch{}switch(r.tag){case 5:he||Mr(r,t);case 6:var n=se,i=Qe;se=null,Ct(e,t,r),se=n,Qe=i,se!==null&&(Qe?(e=se,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):se.removeChild(r.stateNode));break;case 18:se!==null&&(Qe?(e=se,r=r.stateNode,e.nodeType===8?cl(e.parentNode,r):e.nodeType===1&&cl(e,r),bn(e)):cl(se,r.stateNode));break;case 4:n=se,i=Qe,se=r.stateNode.containerInfo,Qe=!0,Ct(e,t,r),se=n,Qe=i;break;case 0:case 11:case 14:case 15:if(!he&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&pa(r,t,l),i=i.next}while(i!==n)}Ct(e,t,r);break;case 1:if(!he&&(Mr(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(s){G(r,t,s)}Ct(e,t,r);break;case 21:Ct(e,t,r);break;case 22:r.mode&1?(he=(n=he)||r.memoizedState!==null,Ct(e,t,r),he=n):Ct(e,t,r);break;default:Ct(e,t,r)}}function Dc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new L2),t.forEach(function(n){var i=U2.bind(null,e,n);r.has(n)||(r.add(n),n.then(i,i))})}}function We(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var i=r[n];try{var o=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:se=s.stateNode,Qe=!1;break e;case 3:se=s.stateNode.containerInfo,Qe=!0;break e;case 4:se=s.stateNode.containerInfo,Qe=!0;break e}s=s.return}if(se===null)throw Error(C(160));vd(o,l,i),se=null,Qe=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){G(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)yd(t,e),t=t.sibling}function yd(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(We(t,e),qe(e),n&4){try{Pn(3,e,e.return),zo(3,e)}catch(w){G(e,e.return,w)}try{Pn(5,e,e.return)}catch(w){G(e,e.return,w)}}break;case 1:We(t,e),qe(e),n&512&&r!==null&&Mr(r,r.return);break;case 5:if(We(t,e),qe(e),n&512&&r!==null&&Mr(r,r.return),e.flags&32){var i=e.stateNode;try{Rn(i,"")}catch(w){G(e,e.return,w)}}if(n&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=r!==null?r.memoizedProps:o,s=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Fu(i,o),Al(s,l);var u=Al(s,o);for(l=0;l<c.length;l+=2){var f=c[l],h=c[l+1];f==="style"?Vu(i,h):f==="dangerouslySetInnerHTML"?Uu(i,h):f==="children"?Rn(i,h):Va(i,f,h,u)}switch(s){case"input":bl(i,o);break;case"textarea":Au(i,o);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?$r(i,!!o.multiple,v,!1):g!==!!o.multiple&&(o.defaultValue!=null?$r(i,!!o.multiple,o.defaultValue,!0):$r(i,!!o.multiple,o.multiple?[]:"",!1))}i[An]=o}catch(w){G(e,e.return,w)}}break;case 6:if(We(t,e),qe(e),n&4){if(e.stateNode===null)throw Error(C(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){G(e,e.return,w)}}break;case 3:if(We(t,e),qe(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{bn(t.containerInfo)}catch(w){G(e,e.return,w)}break;case 4:We(t,e),qe(e);break;case 13:We(t,e),qe(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Ss=q())),n&4&&Dc(e);break;case 22:if(f=r!==null&&r.memoizedState!==null,e.mode&1?(he=(u=he)||f,We(t,e),he=u):We(t,e),qe(e),n&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(_=e,f=e.child;f!==null;){for(h=_=f;_!==null;){switch(g=_,v=g.child,g.tag){case 0:case 11:case 14:case 15:Pn(4,g,g.return);break;case 1:Mr(g,g.return);var y=g.stateNode;if(typeof y.componentWillUnmount=="function"){n=g,r=g.return;try{t=n,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(w){G(n,r,w)}}break;case 5:Mr(g,g.return);break;case 22:if(g.memoizedState!==null){Ac(h);continue}}v!==null?(v.return=g,_=v):Ac(h)}f=f.sibling}e:for(f=null,h=e;;){if(h.tag===5){if(f===null){f=h;try{i=h.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=h.stateNode,c=h.memoizedProps.style,l=c!=null&&c.hasOwnProperty("display")?c.display:null,s.style.display=Hu("display",l))}catch(w){G(e,e.return,w)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(w){G(e,e.return,w)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:We(t,e),qe(e),n&4&&Dc(e);break;case 21:break;default:We(t,e),qe(e)}}function qe(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(gd(r)){var n=r;break e}r=r.return}throw Error(C(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&(Rn(i,""),n.flags&=-33);var o=$c(e);ga(e,o,i);break;case 3:case 4:var l=n.stateNode.containerInfo,s=$c(e);ma(e,s,l);break;default:throw Error(C(161))}}catch(c){G(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function I2(e,t,r){_=e,xd(e)}function xd(e,t,r){for(var n=(e.mode&1)!==0;_!==null;){var i=_,o=i.child;if(i.tag===22&&n){var l=i.memoizedState!==null||ki;if(!l){var s=i.alternate,c=s!==null&&s.memoizedState!==null||he;s=ki;var u=he;if(ki=l,(he=c)&&!u)for(_=i;_!==null;)l=_,c=l.child,l.tag===22&&l.memoizedState!==null?Bc(i):c!==null?(c.return=l,_=c):Bc(i);for(;o!==null;)_=o,xd(o),o=o.sibling;_=i,ki=s,he=u}Fc(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,_=o):Fc(e)}}function Fc(e){for(;_!==null;){var t=_;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:he||zo(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!he)if(r===null)n.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:Ze(t.type,r.memoizedProps);n.componentDidUpdate(i,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&jc(t,o,n);break;case 3:var l=t.updateQueue;if(l!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}jc(t,l,r)}break;case 5:var s=t.stateNode;if(r===null&&t.flags&4){r=s;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&bn(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}he||t.flags&512&&ha(t)}catch(g){G(t,t.return,g)}}if(t===e){_=null;break}if(r=t.sibling,r!==null){r.return=t.return,_=r;break}_=t.return}}function Ac(e){for(;_!==null;){var t=_;if(t===e){_=null;break}var r=t.sibling;if(r!==null){r.return=t.return,_=r;break}_=t.return}}function Bc(e){for(;_!==null;){var t=_;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{zo(4,t)}catch(c){G(t,r,c)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var i=t.return;try{n.componentDidMount()}catch(c){G(t,i,c)}}var o=t.return;try{ha(t)}catch(c){G(t,o,c)}break;case 5:var l=t.return;try{ha(t)}catch(c){G(t,l,c)}}}catch(c){G(t,t.return,c)}if(t===e){_=null;break}var s=t.sibling;if(s!==null){s.return=t.return,_=s;break}_=t.return}}var b2=Math.ceil,ao=kt.ReactCurrentDispatcher,ks=kt.ReactCurrentOwner,Ae=kt.ReactCurrentBatchConfig,O=0,ae=null,te=null,ue=0,Te=0,Ir=Xt(0),ne=0,Zn=null,cr=0,Ro=0,js=0,Nn=null,je=null,Ss=0,Kr=1/0,dt=null,so=!1,va=null,At=null,ji=!1,Mt=null,co=0,_n=0,ya=null,Ii=-1,bi=0;function xe(){return O&6?q():Ii!==-1?Ii:Ii=q()}function Bt(e){return e.mode&1?O&2&&ue!==0?ue&-ue:y2.transition!==null?(bi===0&&(bi=r1()),bi):(e=D,e!==0||(e=window.event,e=e===void 0?16:c1(e.type)),e):1}function Ye(e,t,r,n){if(50<_n)throw _n=0,ya=null,Error(C(185));qn(e,r,n),(!(O&2)||e!==ae)&&(e===ae&&(!(O&2)&&(Ro|=r),ne===4&&zt(e,ue)),Pe(e,n),r===1&&O===0&&!(t.mode&1)&&(Kr=q()+500,No&&Kt()))}function Pe(e,t){var r=e.callbackNode;yf(e,t);var n=Zi(e,e===ae?ue:0);if(n===0)r!==null&&Ys(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&Ys(r),t===1)e.tag===0?v2(Uc.bind(null,e)):_1(Uc.bind(null,e)),p2(function(){!(O&6)&&Kt()}),r=null;else{switch(n1(n)){case 1:r=Ka;break;case 4:r=e1;break;case 16:r=Wi;break;case 536870912:r=t1;break;default:r=Wi}r=Nd(r,wd.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function wd(e,t){if(Ii=-1,bi=0,O&6)throw Error(C(327));var r=e.callbackNode;if(Ur()&&e.callbackNode!==r)return null;var n=Zi(e,e===ae?ue:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=uo(e,n);else{t=n;var i=O;O|=2;var o=jd();(ae!==e||ue!==t)&&(dt=null,Kr=q()+500,nr(e,t));do try{D2();break}catch(s){kd(e,s)}while(1);ss(),ao.current=o,O=i,te!==null?t=0:(ae=null,ue=0,t=ne)}if(t!==0){if(t===2&&(i=Wl(e),i!==0&&(n=i,t=xa(e,i))),t===1)throw r=Zn,nr(e,0),zt(e,n),Pe(e,q()),r;if(t===6)zt(e,n);else{if(i=e.current.alternate,!(n&30)&&!O2(i)&&(t=uo(e,n),t===2&&(o=Wl(e),o!==0&&(n=o,t=xa(e,o))),t===1))throw r=Zn,nr(e,0),zt(e,n),Pe(e,q()),r;switch(e.finishedWork=i,e.finishedLanes=n,t){case 0:case 1:throw Error(C(345));case 2:Jt(e,je,dt);break;case 3:if(zt(e,n),(n&130023424)===n&&(t=Ss+500-q(),10<t)){if(Zi(e,0)!==0)break;if(i=e.suspendedLanes,(i&n)!==n){xe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ql(Jt.bind(null,e,je,dt),t);break}Jt(e,je,dt);break;case 4:if(zt(e,n),(n&4194240)===n)break;for(t=e.eventTimes,i=-1;0<n;){var l=31-Ke(n);o=1<<l,l=t[l],l>i&&(i=l),n&=~o}if(n=i,n=q()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*b2(n/1960))-n,10<n){e.timeoutHandle=ql(Jt.bind(null,e,je,dt),n);break}Jt(e,je,dt);break;case 5:Jt(e,je,dt);break;default:throw Error(C(329))}}}return Pe(e,q()),e.callbackNode===r?wd.bind(null,e):null}function xa(e,t){var r=Nn;return e.current.memoizedState.isDehydrated&&(nr(e,t).flags|=256),e=uo(e,t),e!==2&&(t=je,je=r,t!==null&&wa(t)),e}function wa(e){je===null?je=e:je.push.apply(je,e)}function O2(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var i=r[n],o=i.getSnapshot;i=i.value;try{if(!Je(o(),i))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function zt(e,t){for(t&=~js,t&=~Ro,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Ke(t),n=1<<r;e[r]=-1,t&=~n}}function Uc(e){if(O&6)throw Error(C(327));Ur();var t=Zi(e,0);if(!(t&1))return Pe(e,q()),null;var r=uo(e,t);if(e.tag!==0&&r===2){var n=Wl(e);n!==0&&(t=n,r=xa(e,n))}if(r===1)throw r=Zn,nr(e,0),zt(e,t),Pe(e,q()),r;if(r===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Jt(e,je,dt),Pe(e,q()),null}function Cs(e,t){var r=O;O|=1;try{return e(t)}finally{O=r,O===0&&(Kr=q()+500,No&&Kt())}}function ur(e){Mt!==null&&Mt.tag===0&&!(O&6)&&Ur();var t=O;O|=1;var r=Ae.transition,n=D;try{if(Ae.transition=null,D=1,e)return e()}finally{D=n,Ae.transition=r,O=t,!(O&6)&&Kt()}}function Es(){Te=Ir.current,V(Ir)}function nr(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,f2(r)),te!==null)for(r=te.return;r!==null;){var n=r;switch(os(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Gi();break;case 3:Qr(),V(Ce),V(me),hs();break;case 5:ps(n);break;case 4:Qr();break;case 13:V(Q);break;case 19:V(Q);break;case 10:cs(n.type._context);break;case 22:case 23:Es()}r=r.return}if(ae=e,te=e=Ut(e.current,null),ue=Te=t,ne=0,Zn=null,js=Ro=cr=0,je=Nn=null,er!==null){for(t=0;t<er.length;t++)if(r=er[t],n=r.interleaved,n!==null){r.interleaved=null;var i=n.next,o=r.pending;if(o!==null){var l=o.next;o.next=i,n.next=l}r.pending=n}er=null}return e}function kd(e,t){do{var r=te;try{if(ss(),Ri.current=lo,oo){for(var n=X.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}oo=!1}if(sr=0,ie=re=X=null,En=!1,Hn=0,ks.current=null,r===null||r.return===null){ne=1,Zn=t,te=null;break}e:{var o=e,l=r.return,s=r,c=t;if(t=ue,s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,f=s,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var v=Tc(l);if(v!==null){v.flags&=-257,zc(v,l,s,o,t),v.mode&1&&_c(o,u,t),t=v,c=u;var y=t.updateQueue;if(y===null){var w=new Set;w.add(c),t.updateQueue=w}else y.add(c);break e}else{if(!(t&1)){_c(o,u,t),Ps();break e}c=Error(C(426))}}else if(Z&&s.mode&1){var P=Tc(l);if(P!==null){!(P.flags&65536)&&(P.flags|=256),zc(P,l,s,o,t),ls(Xr(c,s));break e}}o=c=Xr(c,s),ne!==4&&(ne=2),Nn===null?Nn=[o]:Nn.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=id(o,c,t);kc(o,p);break e;case 1:s=c;var d=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(At===null||!At.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=od(o,s,t);kc(o,x);break e}}o=o.return}while(o!==null)}Cd(r)}catch(k){t=k,te===r&&r!==null&&(te=r=r.return);continue}break}while(1)}function jd(){var e=ao.current;return ao.current=lo,e===null?lo:e}function Ps(){(ne===0||ne===3||ne===2)&&(ne=4),ae===null||!(cr&268435455)&&!(Ro&268435455)||zt(ae,ue)}function uo(e,t){var r=O;O|=2;var n=jd();(ae!==e||ue!==t)&&(dt=null,nr(e,t));do try{$2();break}catch(i){kd(e,i)}while(1);if(ss(),O=r,ao.current=n,te!==null)throw Error(C(261));return ae=null,ue=0,ne}function $2(){for(;te!==null;)Sd(te)}function D2(){for(;te!==null&&!cf();)Sd(te)}function Sd(e){var t=Pd(e.alternate,e,Te);e.memoizedProps=e.pendingProps,t===null?Cd(e):te=t,ks.current=null}function Cd(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=R2(r,t),r!==null){r.flags&=32767,te=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ne=6,te=null;return}}else if(r=z2(r,t,Te),r!==null){te=r;return}if(t=t.sibling,t!==null){te=t;return}te=t=e}while(t!==null);ne===0&&(ne=5)}function Jt(e,t,r){var n=D,i=Ae.transition;try{Ae.transition=null,D=1,F2(e,t,r,n)}finally{Ae.transition=i,D=n}return null}function F2(e,t,r,n){do Ur();while(Mt!==null);if(O&6)throw Error(C(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var o=r.lanes|r.childLanes;if(xf(e,o),e===ae&&(te=ae=null,ue=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||ji||(ji=!0,Nd(Wi,function(){return Ur(),null})),o=(r.flags&15990)!==0,r.subtreeFlags&15990||o){o=Ae.transition,Ae.transition=null;var l=D;D=1;var s=O;O|=4,ks.current=null,M2(e,r),yd(r,e),o2(Gl),Qi=!!Yl,Gl=Yl=null,e.current=r,I2(r),uf(),O=s,D=l,Ae.transition=o}else e.current=r;if(ji&&(ji=!1,Mt=e,co=i),o=e.pendingLanes,o===0&&(At=null),pf(r.stateNode),Pe(e,q()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)i=t[r],n(i.value,{componentStack:i.stack,digest:i.digest});if(so)throw so=!1,e=va,va=null,e;return co&1&&e.tag!==0&&Ur(),o=e.pendingLanes,o&1?e===ya?_n++:(_n=0,ya=e):_n=0,Kt(),null}function Ur(){if(Mt!==null){var e=n1(co),t=Ae.transition,r=D;try{if(Ae.transition=null,D=16>e?16:e,Mt===null)var n=!1;else{if(e=Mt,Mt=null,co=0,O&6)throw Error(C(331));var i=O;for(O|=4,_=e.current;_!==null;){var o=_,l=o.child;if(_.flags&16){var s=o.deletions;if(s!==null){for(var c=0;c<s.length;c++){var u=s[c];for(_=u;_!==null;){var f=_;switch(f.tag){case 0:case 11:case 15:Pn(8,f,o)}var h=f.child;if(h!==null)h.return=f,_=h;else for(;_!==null;){f=_;var g=f.sibling,v=f.return;if(md(f),f===u){_=null;break}if(g!==null){g.return=v,_=g;break}_=v}}}var y=o.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var P=w.sibling;w.sibling=null,w=P}while(w!==null)}}_=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,_=l;else e:for(;_!==null;){if(o=_,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Pn(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,_=p;break e}_=o.return}}var d=e.current;for(_=d;_!==null;){l=_;var m=l.child;if(l.subtreeFlags&2064&&m!==null)m.return=l,_=m;else e:for(l=d;_!==null;){if(s=_,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:zo(9,s)}}catch(k){G(s,s.return,k)}if(s===l){_=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,_=x;break e}_=s.return}}if(O=i,Kt(),it&&typeof it.onPostCommitFiberRoot=="function")try{it.onPostCommitFiberRoot(jo,e)}catch{}n=!0}return n}finally{D=r,Ae.transition=t}}return!1}function Hc(e,t,r){t=Xr(r,t),t=id(e,t,1),e=Ft(e,t,1),t=xe(),e!==null&&(qn(e,1,t),Pe(e,t))}function G(e,t,r){if(e.tag===3)Hc(e,e,r);else for(;t!==null;){if(t.tag===3){Hc(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(At===null||!At.has(n))){e=Xr(r,e),e=od(t,e,1),t=Ft(t,e,1),e=xe(),t!==null&&(qn(t,1,e),Pe(t,e));break}}t=t.return}}function A2(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=xe(),e.pingedLanes|=e.suspendedLanes&r,ae===e&&(ue&r)===r&&(ne===4||ne===3&&(ue&130023424)===ue&&500>q()-Ss?nr(e,0):js|=r),Pe(e,t)}function Ed(e,t){t===0&&(e.mode&1?(t=fi,fi<<=1,!(fi&130023424)&&(fi=4194304)):t=1);var r=xe();e=xt(e,t),e!==null&&(qn(e,t,r),Pe(e,r))}function B2(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Ed(e,r)}function U2(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(C(314))}n!==null&&n.delete(t),Ed(e,r)}var Pd;Pd=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ce.current)Se=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return Se=!1,T2(e,t,r);Se=!!(e.flags&131072)}else Se=!1,Z&&t.flags&1048576&&T1(t,eo,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;Mi(e,t),e=t.pendingProps;var i=Vr(t,me.current);Br(t,r),i=gs(null,t,n,e,i,r);var o=vs();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ee(n)?(o=!0,Ji(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ds(t),i.updater=_o,t.stateNode=i,i._reactInternals=t,la(t,n,e,r),t=ca(null,t,n,!0,o,r)):(t.tag=0,Z&&o&&is(t),ye(null,t,i,r),t=t.child),t;case 16:n=t.elementType;e:{switch(Mi(e,t),e=t.pendingProps,i=n._init,n=i(n._payload),t.type=n,i=t.tag=V2(n),e=Ze(n,e),i){case 0:t=sa(null,t,n,e,r);break e;case 1:t=Mc(null,t,n,e,r);break e;case 11:t=Rc(null,t,n,e,r);break e;case 14:t=Lc(null,t,n,Ze(n.type,e),r);break e}throw Error(C(306,n,""))}return t;case 0:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Ze(n,i),sa(e,t,n,i,r);case 1:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Ze(n,i),Mc(e,t,n,i,r);case 3:e:{if(cd(t),e===null)throw Error(C(387));n=t.pendingProps,o=t.memoizedState,i=o.element,M1(e,t),no(t,n,null,r);var l=t.memoizedState;if(n=l.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Xr(Error(C(423)),t),t=Ic(e,t,n,r,i);break e}else if(n!==i){i=Xr(Error(C(424)),t),t=Ic(e,t,n,r,i);break e}else for(ze=Dt(t.stateNode.containerInfo.firstChild),Re=t,Z=!0,Xe=null,r=$1(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Wr(),n===i){t=wt(e,t,r);break e}ye(e,t,n,r)}t=t.child}return t;case 5:return D1(t),e===null&&na(t),n=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,Jl(n,i)?l=null:o!==null&&Jl(n,o)&&(t.flags|=32),sd(e,t),ye(e,t,l,r),t.child;case 6:return e===null&&na(t),null;case 13:return ud(e,t,r);case 4:return fs(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Zr(t,null,n,r):ye(e,t,n,r),t.child;case 11:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Ze(n,i),Rc(e,t,n,i,r);case 7:return ye(e,t,t.pendingProps,r),t.child;case 8:return ye(e,t,t.pendingProps.children,r),t.child;case 12:return ye(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,A(to,n._currentValue),n._currentValue=l,o!==null)if(Je(o.value,l)){if(o.children===i.children&&!Ce.current){t=wt(e,t,r);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){l=o.child;for(var c=s.firstContext;c!==null;){if(c.context===n){if(o.tag===1){c=gt(-1,r&-r),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?c.next=c:(c.next=f.next,f.next=c),u.pending=c}}o.lanes|=r,c=o.alternate,c!==null&&(c.lanes|=r),ia(o.return,r,t),s.lanes|=r;break}c=c.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(C(341));l.lanes|=r,s=l.alternate,s!==null&&(s.lanes|=r),ia(l,r,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}ye(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,n=t.pendingProps.children,Br(t,r),i=Be(i),n=n(i),t.flags|=1,ye(e,t,n,r),t.child;case 14:return n=t.type,i=Ze(n,t.pendingProps),i=Ze(n.type,i),Lc(e,t,n,i,r);case 15:return ld(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Ze(n,i),Mi(e,t),t.tag=1,Ee(n)?(e=!0,Ji(t)):e=!1,Br(t,r),b1(t,n,i),la(t,n,i,r),ca(null,t,n,!0,e,r);case 19:return dd(e,t,r);case 22:return ad(e,t,r)}throw Error(C(156,t.tag))};function Nd(e,t){return qu(e,t)}function H2(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fe(e,t,r,n){return new H2(e,t,r,n)}function Ns(e){return e=e.prototype,!(!e||!e.isReactComponent)}function V2(e){if(typeof e=="function")return Ns(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Za)return 11;if(e===Qa)return 14}return 2}function Ut(e,t){var r=e.alternate;return r===null?(r=Fe(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Oi(e,t,r,n,i,o){var l=2;if(n=e,typeof e=="function")Ns(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Cr:return ir(r.children,i,o,t);case Wa:l=8,i|=8;break;case zl:return e=Fe(12,r,t,i|2),e.elementType=zl,e.lanes=o,e;case Rl:return e=Fe(13,r,t,i),e.elementType=Rl,e.lanes=o,e;case Ll:return e=Fe(19,r,t,i),e.elementType=Ll,e.lanes=o,e;case Ou:return Lo(r,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Iu:l=10;break e;case bu:l=9;break e;case Za:l=11;break e;case Qa:l=14;break e;case Nt:l=16,n=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return t=Fe(l,r,t,i),t.elementType=e,t.type=n,t.lanes=o,t}function ir(e,t,r,n){return e=Fe(7,e,n,t),e.lanes=r,e}function Lo(e,t,r,n){return e=Fe(22,e,n,t),e.elementType=Ou,e.lanes=r,e.stateNode={isHidden:!1},e}function vl(e,t,r){return e=Fe(6,e,null,t),e.lanes=r,e}function yl(e,t,r){return t=Fe(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function W2(e,t,r,n,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Jo(0),this.expirationTimes=Jo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jo(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function _s(e,t,r,n,i,o,l,s,c){return e=new W2(e,t,r,s,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Fe(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},ds(o),e}function Z2(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Sr,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function _d(e){if(!e)return Zt;e=e._reactInternals;e:{if(hr(e)!==e||e.tag!==1)throw Error(C(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ee(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(C(171))}if(e.tag===1){var r=e.type;if(Ee(r))return N1(e,r,t)}return t}function Td(e,t,r,n,i,o,l,s,c){return e=_s(r,n,!0,e,i,o,l,s,c),e.context=_d(null),r=e.current,n=xe(),i=Bt(r),o=gt(n,i),o.callback=t??null,Ft(r,o,i),e.current.lanes=i,qn(e,i,n),Pe(e,n),e}function Mo(e,t,r,n){var i=t.current,o=xe(),l=Bt(i);return r=_d(r),t.context===null?t.context=r:t.pendingContext=r,t=gt(o,l),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=Ft(i,t,l),e!==null&&(Ye(e,i,l,o),zi(e,i,l)),l}function fo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Vc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Ts(e,t){Vc(e,t),(e=e.alternate)&&Vc(e,t)}function Q2(){return null}var zd=typeof reportError=="function"?reportError:function(e){console.error(e)};function zs(e){this._internalRoot=e}Io.prototype.render=zs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));Mo(e,t,null,null)};Io.prototype.unmount=zs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ur(function(){Mo(null,e,null,null)}),t[yt]=null}};function Io(e){this._internalRoot=e}Io.prototype.unstable_scheduleHydration=function(e){if(e){var t=l1();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Tt.length&&t!==0&&t<Tt[r].priority;r++);Tt.splice(r,0,e),r===0&&s1(e)}};function Rs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function bo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Wc(){}function X2(e,t,r,n,i){if(i){if(typeof n=="function"){var o=n;n=function(){var u=fo(l);o.call(u)}}var l=Td(t,n,e,0,null,!1,!1,"",Wc);return e._reactRootContainer=l,e[yt]=l.current,Dn(e.nodeType===8?e.parentNode:e),ur(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof n=="function"){var s=n;n=function(){var u=fo(c);s.call(u)}}var c=_s(e,0,!1,null,null,!1,!1,"",Wc);return e._reactRootContainer=c,e[yt]=c.current,Dn(e.nodeType===8?e.parentNode:e),ur(function(){Mo(t,c,r,n)}),c}function Oo(e,t,r,n,i){var o=r._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var s=i;i=function(){var c=fo(l);s.call(c)}}Mo(t,l,e,i)}else l=X2(r,t,e,i,n);return fo(l)}i1=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=vn(t.pendingLanes);r!==0&&(Ya(t,r|1),Pe(t,q()),!(O&6)&&(Kr=q()+500,Kt()))}break;case 13:ur(function(){var n=xt(e,1);if(n!==null){var i=xe();Ye(n,e,1,i)}}),Ts(e,1)}};Ga=function(e){if(e.tag===13){var t=xt(e,134217728);if(t!==null){var r=xe();Ye(t,e,134217728,r)}Ts(e,134217728)}};o1=function(e){if(e.tag===13){var t=Bt(e),r=xt(e,t);if(r!==null){var n=xe();Ye(r,e,t,n)}Ts(e,t)}};l1=function(){return D};a1=function(e,t){var r=D;try{return D=e,t()}finally{D=r}};Ul=function(e,t,r){switch(t){case"input":if(bl(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var i=Po(n);if(!i)throw Error(C(90));Du(n),bl(n,i)}}}break;case"textarea":Au(e,r);break;case"select":t=r.value,t!=null&&$r(e,!!r.multiple,t,!1)}};Qu=Cs;Xu=ur;var K2={usingClientEntryPoint:!1,Events:[ti,_r,Po,Wu,Zu,Cs]},pn={findFiberByHostInstance:qt,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Y2={bundleType:pn.bundleType,version:pn.version,rendererPackageName:pn.rendererPackageName,rendererConfig:pn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:kt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Gu(e),e===null?null:e.stateNode},findFiberByHostInstance:pn.findFiberByHostInstance||Q2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Si=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Si.isDisabled&&Si.supportsFiber)try{jo=Si.inject(Y2),it=Si}catch{}}Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=K2;Me.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rs(t))throw Error(C(200));return Z2(e,t,null,r)};Me.createRoot=function(e,t){if(!Rs(e))throw Error(C(299));var r=!1,n="",i=zd;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=_s(e,1,!1,null,null,r,!1,n,i),e[yt]=t.current,Dn(e.nodeType===8?e.parentNode:e),new zs(t)};Me.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=Gu(t),e=e===null?null:e.stateNode,e};Me.flushSync=function(e){return ur(e)};Me.hydrate=function(e,t,r){if(!bo(t))throw Error(C(200));return Oo(null,e,t,!0,r)};Me.hydrateRoot=function(e,t,r){if(!Rs(e))throw Error(C(405));var n=r!=null&&r.hydratedSources||null,i=!1,o="",l=zd;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(l=r.onRecoverableError)),t=Td(t,null,e,1,r??null,i,!1,o,l),e[yt]=t.current,Dn(e),n)for(e=0;e<n.length;e++)r=n[e],i=r._getVersion,i=i(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new Io(t)};Me.render=function(e,t,r){if(!bo(t))throw Error(C(200));return Oo(null,e,t,!1,r)};Me.unmountComponentAtNode=function(e){if(!bo(e))throw Error(C(40));return e._reactRootContainer?(ur(function(){Oo(null,null,e,!1,function(){e._reactRootContainer=null,e[yt]=null})}),!0):!1};Me.unstable_batchedUpdates=Cs;Me.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!bo(r))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return Oo(e,t,r,!1,n)};Me.version="18.2.0-next-9e3b772b8-20220608";function Rd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Rd)}catch(e){console.error(e)}}Rd(),Tu.exports=Me;var G2=Tu.exports,Zc=G2;_l.createRoot=Zc.createRoot,_l.hydrateRoot=Zc.hydrateRoot;/**
 * @remix-run/router v1.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qn(){return Qn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Qn.apply(this,arguments)}var It;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(It||(It={}));const Qc="popstate";function J2(e){e===void 0&&(e={});function t(i,o){let{pathname:l="/",search:s="",hash:c=""}=mr(i.location.hash.substr(1));return!l.startsWith("/")&&!l.startsWith(".")&&(l="/"+l),ka("",{pathname:l,search:s,hash:c},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function r(i,o){let l=i.document.querySelector("base"),s="";if(l&&l.getAttribute("href")){let c=i.location.href,u=c.indexOf("#");s=u===-1?c:c.slice(0,u)}return s+"#"+(typeof o=="string"?o:po(o))}function n(i,o){$o(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return ep(t,r,n,e)}function J(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function $o(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function q2(){return Math.random().toString(36).substr(2,8)}function Xc(e,t){return{usr:e.state,key:e.key,idx:t}}function ka(e,t,r,n){return r===void 0&&(r=null),Qn({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?mr(t):t,{state:r,key:t&&t.key||n||q2()})}function po(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function mr(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function ep(e,t,r,n){n===void 0&&(n={});let{window:i=document.defaultView,v5Compat:o=!1}=n,l=i.history,s=It.Pop,c=null,u=f();u==null&&(u=0,l.replaceState(Qn({},l.state,{idx:u}),""));function f(){return(l.state||{idx:null}).idx}function h(){s=It.Pop;let P=f(),p=P==null?null:P-u;u=P,c&&c({action:s,location:w.location,delta:p})}function g(P,p){s=It.Push;let d=ka(w.location,P,p);r&&r(d,P),u=f()+1;let m=Xc(d,u),x=w.createHref(d);try{l.pushState(m,"",x)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;i.location.assign(x)}o&&c&&c({action:s,location:w.location,delta:1})}function v(P,p){s=It.Replace;let d=ka(w.location,P,p);r&&r(d,P),u=f();let m=Xc(d,u),x=w.createHref(d);l.replaceState(m,"",x),o&&c&&c({action:s,location:w.location,delta:0})}function y(P){let p=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof P=="string"?P:po(P);return J(p,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,p)}let w={get action(){return s},get location(){return e(i,l)},listen(P){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Qc,h),c=P,()=>{i.removeEventListener(Qc,h),c=null}},createHref(P){return t(i,P)},createURL:y,encodeLocation(P){let p=y(P);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:g,replace:v,go(P){return l.go(P)}};return w}var Kc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Kc||(Kc={}));function tp(e,t,r){r===void 0&&(r="/");let n=typeof t=="string"?mr(t):t,i=Xn(n.pathname||"/",r);if(i==null)return null;let o=Ld(e);rp(o);let l=null;for(let s=0;l==null&&s<o.length;++s)l=dp(o[s],pp(i));return l}function Ld(e,t,r,n){t===void 0&&(t=[]),r===void 0&&(r=[]),n===void 0&&(n="");let i=(o,l,s)=>{let c={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};c.relativePath.startsWith("/")&&(J(c.relativePath.startsWith(n),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(n.length));let u=Ht([n,c.relativePath]),f=r.concat(c);o.children&&o.children.length>0&&(J(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Ld(o.children,t,f,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:cp(u,o.index),routesMeta:f})};return e.forEach((o,l)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))i(o,l);else for(let c of Md(o.path))i(o,l,c)}),t}function Md(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,i=r.endsWith("?"),o=r.replace(/\?$/,"");if(n.length===0)return i?[o,""]:[o];let l=Md(n.join("/")),s=[];return s.push(...l.map(c=>c===""?o:[o,c].join("/"))),i&&s.push(...l),s.map(c=>e.startsWith("/")&&c===""?"/":c)}function rp(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:up(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const np=/^:\w+$/,ip=3,op=2,lp=1,ap=10,sp=-2,Yc=e=>e==="*";function cp(e,t){let r=e.split("/"),n=r.length;return r.some(Yc)&&(n+=sp),t&&(n+=op),r.filter(i=>!Yc(i)).reduce((i,o)=>i+(np.test(o)?ip:o===""?lp:ap),n)}function up(e,t){return e.length===t.length&&e.slice(0,-1).every((n,i)=>n===t[i])?e[e.length-1]-t[t.length-1]:0}function dp(e,t){let{routesMeta:r}=e,n={},i="/",o=[];for(let l=0;l<r.length;++l){let s=r[l],c=l===r.length-1,u=i==="/"?t:t.slice(i.length)||"/",f=ja({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},u);if(!f)return null;Object.assign(n,f.params);let h=s.route;o.push({params:n,pathname:Ht([i,f.pathname]),pathnameBase:vp(Ht([i,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(i=Ht([i,f.pathnameBase]))}return o}function ja(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=fp(e.path,e.caseSensitive,e.end),i=t.match(r);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:n.reduce((u,f,h)=>{let{paramName:g,isOptional:v}=f;if(g==="*"){let w=s[h]||"";l=o.slice(0,o.length-w.length).replace(/(.)\/+$/,"$1")}const y=s[h];return v&&!y?u[g]=void 0:u[g]=hp(y||"",g),u},{}),pathname:o,pathnameBase:l,pattern:e}}function fp(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),$o(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let n=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(l,s,c)=>(n.push({paramName:s,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(n.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),n]}function pp(e){try{return decodeURI(e)}catch(t){return $o(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function hp(e,t){try{return decodeURIComponent(e)}catch(r){return $o(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+r+").")),e}}function Xn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}function mp(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:i=""}=typeof e=="string"?mr(e):e;return{pathname:r?r.startsWith("/")?r:gp(r,t):t,search:yp(n),hash:xp(i)}}function gp(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?r.length>1&&r.pop():i!=="."&&r.push(i)}),r.length>1?r.join("/"):"/"}function xl(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Id(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function bd(e,t,r,n){n===void 0&&(n=!1);let i;typeof e=="string"?i=mr(e):(i=Qn({},e),J(!i.pathname||!i.pathname.includes("?"),xl("?","pathname","search",i)),J(!i.pathname||!i.pathname.includes("#"),xl("#","pathname","hash",i)),J(!i.search||!i.search.includes("#"),xl("#","search","hash",i)));let o=e===""||i.pathname==="",l=o?"/":i.pathname,s;if(n||l==null)s=r;else{let h=t.length-1;if(l.startsWith("..")){let g=l.split("/");for(;g[0]==="..";)g.shift(),h-=1;i.pathname=g.join("/")}s=h>=0?t[h]:"/"}let c=mp(i,s),u=l&&l!=="/"&&l.endsWith("/"),f=(o||l===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(u||f)&&(c.pathname+="/"),c}const Ht=e=>e.join("/").replace(/\/\/+/g,"/"),vp=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),yp=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,xp=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function wp(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Od=["post","put","patch","delete"];new Set(Od);const kp=["get",...Od];new Set(kp);/**
 * React Router v6.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ho(){return ho=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ho.apply(this,arguments)}const Do=E.createContext(null),$d=E.createContext(null),gr=E.createContext(null),Fo=E.createContext(null),vr=E.createContext({outlet:null,matches:[],isDataRoute:!1}),Dd=E.createContext(null);function jp(e,t){let{relative:r}=t===void 0?{}:t;ni()||J(!1);let{basename:n,navigator:i}=E.useContext(gr),{hash:o,pathname:l,search:s}=Ao(e,{relative:r}),c=l;return n!=="/"&&(c=l==="/"?n:Ht([n,l])),i.createHref({pathname:c,search:s,hash:o})}function ni(){return E.useContext(Fo)!=null}function ii(){return ni()||J(!1),E.useContext(Fo).location}function Fd(e){E.useContext(gr).static||E.useLayoutEffect(e)}function yr(){let{isDataRoute:e}=E.useContext(vr);return e?bp():Sp()}function Sp(){ni()||J(!1);let e=E.useContext(Do),{basename:t,navigator:r}=E.useContext(gr),{matches:n}=E.useContext(vr),{pathname:i}=ii(),o=JSON.stringify(Id(n).map(c=>c.pathnameBase)),l=E.useRef(!1);return Fd(()=>{l.current=!0}),E.useCallback(function(c,u){if(u===void 0&&(u={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let f=bd(c,JSON.parse(o),i,u.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Ht([t,f.pathname])),(u.replace?r.replace:r.push)(f,u.state,u)},[t,r,o,i,e])}function Ao(e,t){let{relative:r}=t===void 0?{}:t,{matches:n}=E.useContext(vr),{pathname:i}=ii(),o=JSON.stringify(Id(n).map(l=>l.pathnameBase));return E.useMemo(()=>bd(e,JSON.parse(o),i,r==="path"),[e,o,i,r])}function Cp(e,t){return Ep(e,t)}function Ep(e,t,r){ni()||J(!1);let{navigator:n}=E.useContext(gr),{matches:i}=E.useContext(vr),o=i[i.length-1],l=o?o.params:{};o&&o.pathname;let s=o?o.pathnameBase:"/";o&&o.route;let c=ii(),u;if(t){var f;let w=typeof t=="string"?mr(t):t;s==="/"||(f=w.pathname)!=null&&f.startsWith(s)||J(!1),u=w}else u=c;let h=u.pathname||"/",g=s==="/"?h:h.slice(s.length)||"/",v=tp(e,{pathname:g}),y=zp(v&&v.map(w=>Object.assign({},w,{params:Object.assign({},l,w.params),pathname:Ht([s,n.encodeLocation?n.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?s:Ht([s,n.encodeLocation?n.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,r);return t&&y?E.createElement(Fo.Provider,{value:{location:ho({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:It.Pop}},y):y}function Pp(){let e=Ip(),t=wp(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},t),r?E.createElement("pre",{style:i},r):null,o)}const Np=E.createElement(Pp,null);class _p extends E.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error?E.createElement(vr.Provider,{value:this.props.routeContext},E.createElement(Dd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Tp(e){let{routeContext:t,match:r,children:n}=e,i=E.useContext(Do);return i&&i.static&&i.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=r.route.id),E.createElement(vr.Provider,{value:t},n)}function zp(e,t,r){var n;if(t===void 0&&(t=[]),r===void 0&&(r=null),e==null){var i;if((i=r)!=null&&i.errors)e=r.matches;else return null}let o=e,l=(n=r)==null?void 0:n.errors;if(l!=null){let s=o.findIndex(c=>c.route.id&&(l==null?void 0:l[c.route.id]));s>=0||J(!1),o=o.slice(0,Math.min(o.length,s+1))}return o.reduceRight((s,c,u)=>{let f=c.route.id?l==null?void 0:l[c.route.id]:null,h=null;r&&(h=c.route.errorElement||Np);let g=t.concat(o.slice(0,u+1)),v=()=>{let y;return f?y=h:c.route.Component?y=E.createElement(c.route.Component,null):c.route.element?y=c.route.element:y=s,E.createElement(Tp,{match:c,routeContext:{outlet:s,matches:g,isDataRoute:r!=null},children:y})};return r&&(c.route.ErrorBoundary||c.route.errorElement||u===0)?E.createElement(_p,{location:r.location,revalidation:r.revalidation,component:h,error:f,children:v(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):v()},null)}var Ad=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Ad||{}),mo=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(mo||{});function Rp(e){let t=E.useContext(Do);return t||J(!1),t}function Lp(e){let t=E.useContext($d);return t||J(!1),t}function Mp(e){let t=E.useContext(vr);return t||J(!1),t}function Bd(e){let t=Mp(),r=t.matches[t.matches.length-1];return r.route.id||J(!1),r.route.id}function Ip(){var e;let t=E.useContext(Dd),r=Lp(mo.UseRouteError),n=Bd(mo.UseRouteError);return t||((e=r.errors)==null?void 0:e[n])}function bp(){let{router:e}=Rp(Ad.UseNavigateStable),t=Bd(mo.UseNavigateStable),r=E.useRef(!1);return Fd(()=>{r.current=!0}),E.useCallback(function(i,o){o===void 0&&(o={}),r.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ho({fromRouteId:t},o)))},[e,t])}function et(e){J(!1)}function Op(e){let{basename:t="/",children:r=null,location:n,navigationType:i=It.Pop,navigator:o,static:l=!1}=e;ni()&&J(!1);let s=t.replace(/^\/*/,"/"),c=E.useMemo(()=>({basename:s,navigator:o,static:l}),[s,o,l]);typeof n=="string"&&(n=mr(n));let{pathname:u="/",search:f="",hash:h="",state:g=null,key:v="default"}=n,y=E.useMemo(()=>{let w=Xn(u,s);return w==null?null:{location:{pathname:w,search:f,hash:h,state:g,key:v},navigationType:i}},[s,u,f,h,g,v,i]);return y==null?null:E.createElement(gr.Provider,{value:c},E.createElement(Fo.Provider,{children:r,value:y}))}function $p(e){let{children:t,location:r}=e;return Cp(Sa(t),r)}new Promise(()=>{});function Sa(e,t){t===void 0&&(t=[]);let r=[];return E.Children.forEach(e,(n,i)=>{if(!E.isValidElement(n))return;let o=[...t,i];if(n.type===E.Fragment){r.push.apply(r,Sa(n.props.children,o));return}n.type!==et&&J(!1),!n.props.index||!n.props.children||J(!1);let l={id:n.props.id||o.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(l.children=Sa(n.props.children,o)),r.push(l)}),r}/**
 * React Router DOM v6.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function go(){return go=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},go.apply(this,arguments)}function Ud(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,o;for(o=0;o<n.length;o++)i=n[o],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}function Dp(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Fp(e,t){return e.button===0&&(!t||t==="_self")&&!Dp(e)}const Ap=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Bp=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],Up=E.createContext({isTransitioning:!1}),Hp="startTransition",Gc=A0[Hp];function Vp(e){let{basename:t,children:r,future:n,window:i}=e,o=E.useRef();o.current==null&&(o.current=J2({window:i,v5Compat:!0}));let l=o.current,[s,c]=E.useState({action:l.action,location:l.location}),{v7_startTransition:u}=n||{},f=E.useCallback(h=>{u&&Gc?Gc(()=>c(h)):c(h)},[c,u]);return E.useLayoutEffect(()=>l.listen(f),[l,f]),E.createElement(Op,{basename:t,children:r,location:s.location,navigationType:s.action,navigator:l})}const Wp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Zp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Qp=E.forwardRef(function(t,r){let{onClick:n,relative:i,reloadDocument:o,replace:l,state:s,target:c,to:u,preventScrollReset:f,unstable_viewTransition:h}=t,g=Ud(t,Ap),{basename:v}=E.useContext(gr),y,w=!1;if(typeof u=="string"&&Zp.test(u)&&(y=u,Wp))try{let m=new URL(window.location.href),x=u.startsWith("//")?new URL(m.protocol+u):new URL(u),k=Xn(x.pathname,v);x.origin===m.origin&&k!=null?u=k+x.search+x.hash:w=!0}catch{}let P=jp(u,{relative:i}),p=Kp(u,{replace:l,state:s,target:c,preventScrollReset:f,relative:i,unstable_viewTransition:h});function d(m){n&&n(m),m.defaultPrevented||p(m)}return E.createElement("a",go({},g,{href:y||P,onClick:w||o?n:d,ref:r,target:c}))}),Rt=E.forwardRef(function(t,r){let{"aria-current":n="page",caseSensitive:i=!1,className:o="",end:l=!1,style:s,to:c,unstable_viewTransition:u,children:f}=t,h=Ud(t,Bp),g=Ao(c,{relative:h.relative}),v=ii(),y=E.useContext($d),{navigator:w}=E.useContext(gr),P=y!=null&&Yp(g)&&u===!0,p=w.encodeLocation?w.encodeLocation(g).pathname:g.pathname,d=v.pathname,m=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;i||(d=d.toLowerCase(),m=m?m.toLowerCase():null,p=p.toLowerCase());let x=d===p||!l&&d.startsWith(p)&&d.charAt(p.length)==="/",k=m!=null&&(m===p||!l&&m.startsWith(p)&&m.charAt(p.length)==="/"),j={isActive:x,isPending:k,isTransitioning:P},S=x?n:void 0,T;typeof o=="function"?T=o(j):T=[o,x?"active":null,k?"pending":null,P?"transitioning":null].filter(Boolean).join(" ");let F=typeof s=="function"?s(j):s;return E.createElement(Qp,go({},h,{"aria-current":S,className:T,ref:r,style:F,to:c,unstable_viewTransition:u}),typeof f=="function"?f(j):f)});var Ca;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Ca||(Ca={}));var Jc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Jc||(Jc={}));function Xp(e){let t=E.useContext(Do);return t||J(!1),t}function Kp(e,t){let{target:r,replace:n,state:i,preventScrollReset:o,relative:l,unstable_viewTransition:s}=t===void 0?{}:t,c=yr(),u=ii(),f=Ao(e,{relative:l});return E.useCallback(h=>{if(Fp(h,r)){h.preventDefault();let g=n!==void 0?n:po(u)===po(f);c(e,{replace:g,state:i,preventScrollReset:o,relative:l,unstable_viewTransition:s})}},[u,c,f,n,i,r,e,o,l,s])}function Yp(e,t){t===void 0&&(t={});let r=E.useContext(Up);r==null&&J(!1);let{basename:n}=Xp(Ca.useViewTransitionState),i=Ao(e,{relative:t.relative});if(!r.isTransitioning)return!1;let o=Xn(r.currentLocation.pathname,n)||r.currentLocation.pathname,l=Xn(r.nextLocation.pathname,n)||r.nextLocation.pathname;return ja(i.pathname,l)!=null||ja(i.pathname,o)!=null}var le=function(){return le=Object.assign||function(t){for(var r,n=1,i=arguments.length;n<i;n++){r=arguments[n];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},le.apply(this,arguments)};function Kn(e,t,r){if(r||arguments.length===2)for(var n=0,i=t.length,o;n<i;n++)(o||!(n in t))&&(o||(o=Array.prototype.slice.call(t,0,n)),o[n]=t[n]);return e.concat(o||Array.prototype.slice.call(t))}var U="-ms-",Tn="-moz-",$="-webkit-",Hd="comm",Bo="rule",Ls="decl",Gp="@import",Vd="@keyframes",Jp="@layer",qp=Math.abs,Ms=String.fromCharCode,Ea=Object.assign;function eh(e,t){return oe(e,0)^45?(((t<<2^oe(e,0))<<2^oe(e,1))<<2^oe(e,2))<<2^oe(e,3):0}function Wd(e){return e.trim()}function ft(e,t){return(e=t.exec(e))?e[0]:e}function L(e,t,r){return e.replace(t,r)}function $i(e,t){return e.indexOf(t)}function oe(e,t){return e.charCodeAt(t)|0}function Yr(e,t,r){return e.slice(t,r)}function rt(e){return e.length}function Zd(e){return e.length}function xn(e,t){return t.push(e),e}function th(e,t){return e.map(t).join("")}function qc(e,t){return e.filter(function(r){return!ft(r,t)})}var Uo=1,Gr=1,Qd=0,He=0,ee=0,on="";function Ho(e,t,r,n,i,o,l,s){return{value:e,root:t,parent:r,type:n,props:i,children:o,line:Uo,column:Gr,length:l,return:"",siblings:s}}function Pt(e,t){return Ea(Ho("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function kr(e){for(;e.root;)e=Pt(e.root,{children:[e]});xn(e,e.siblings)}function rh(){return ee}function nh(){return ee=He>0?oe(on,--He):0,Gr--,ee===10&&(Gr=1,Uo--),ee}function Ge(){return ee=He<Qd?oe(on,He++):0,Gr++,ee===10&&(Gr=1,Uo++),ee}function or(){return oe(on,He)}function Di(){return He}function Vo(e,t){return Yr(on,e,t)}function Pa(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ih(e){return Uo=Gr=1,Qd=rt(on=e),He=0,[]}function oh(e){return on="",e}function wl(e){return Wd(Vo(He-1,Na(e===91?e+2:e===40?e+1:e)))}function lh(e){for(;(ee=or())&&ee<33;)Ge();return Pa(e)>2||Pa(ee)>3?"":" "}function ah(e,t){for(;--t&&Ge()&&!(ee<48||ee>102||ee>57&&ee<65||ee>70&&ee<97););return Vo(e,Di()+(t<6&&or()==32&&Ge()==32))}function Na(e){for(;Ge();)switch(ee){case e:return He;case 34:case 39:e!==34&&e!==39&&Na(ee);break;case 40:e===41&&Na(e);break;case 92:Ge();break}return He}function sh(e,t){for(;Ge()&&e+ee!==47+10;)if(e+ee===42+42&&or()===47)break;return"/*"+Vo(t,He-1)+"*"+Ms(e===47?e:Ge())}function ch(e){for(;!Pa(or());)Ge();return Vo(e,He)}function uh(e){return oh(Fi("",null,null,null,[""],e=ih(e),0,[0],e))}function Fi(e,t,r,n,i,o,l,s,c){for(var u=0,f=0,h=l,g=0,v=0,y=0,w=1,P=1,p=1,d=0,m="",x=i,k=o,j=n,S=m;P;)switch(y=d,d=Ge()){case 40:if(y!=108&&oe(S,h-1)==58){$i(S+=L(wl(d),"&","&\f"),"&\f")!=-1&&(p=-1);break}case 34:case 39:case 91:S+=wl(d);break;case 9:case 10:case 13:case 32:S+=lh(y);break;case 92:S+=ah(Di()-1,7);continue;case 47:switch(or()){case 42:case 47:xn(dh(sh(Ge(),Di()),t,r,c),c);break;default:S+="/"}break;case 123*w:s[u++]=rt(S)*p;case 125*w:case 59:case 0:switch(d){case 0:case 125:P=0;case 59+f:p==-1&&(S=L(S,/\f/g,"")),v>0&&rt(S)-h&&xn(v>32?tu(S+";",n,r,h-1,c):tu(L(S," ","")+";",n,r,h-2,c),c);break;case 59:S+=";";default:if(xn(j=eu(S,t,r,u,f,i,s,m,x=[],k=[],h,o),o),d===123)if(f===0)Fi(S,t,j,j,x,o,h,s,k);else switch(g===99&&oe(S,3)===110?100:g){case 100:case 108:case 109:case 115:Fi(e,j,j,n&&xn(eu(e,j,j,0,0,i,s,m,i,x=[],h,k),k),i,k,h,s,n?x:k);break;default:Fi(S,j,j,j,[""],k,0,s,k)}}u=f=v=0,w=p=1,m=S="",h=l;break;case 58:h=1+rt(S),v=y;default:if(w<1){if(d==123)--w;else if(d==125&&w++==0&&nh()==125)continue}switch(S+=Ms(d),d*w){case 38:p=f>0?1:(S+="\f",-1);break;case 44:s[u++]=(rt(S)-1)*p,p=1;break;case 64:or()===45&&(S+=wl(Ge())),g=or(),f=h=rt(m=S+=ch(Di())),d++;break;case 45:y===45&&rt(S)==2&&(w=0)}}return o}function eu(e,t,r,n,i,o,l,s,c,u,f,h){for(var g=i-1,v=i===0?o:[""],y=Zd(v),w=0,P=0,p=0;w<n;++w)for(var d=0,m=Yr(e,g+1,g=qp(P=l[w])),x=e;d<y;++d)(x=Wd(P>0?v[d]+" "+m:L(m,/&\f/g,v[d])))&&(c[p++]=x);return Ho(e,t,r,i===0?Bo:s,c,u,f,h)}function dh(e,t,r,n){return Ho(e,t,r,Hd,Ms(rh()),Yr(e,2,-2),0,n)}function tu(e,t,r,n,i){return Ho(e,t,r,Ls,Yr(e,0,n),Yr(e,n+1,-1),n,i)}function Xd(e,t,r){switch(eh(e,t)){case 5103:return $+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return $+e+e;case 4789:return Tn+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return $+e+Tn+e+U+e+e;case 5936:switch(oe(e,t+11)){case 114:return $+e+U+L(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return $+e+U+L(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return $+e+U+L(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return $+e+U+e+e;case 6165:return $+e+U+"flex-"+e+e;case 5187:return $+e+L(e,/(\w+).+(:[^]+)/,$+"box-$1$2"+U+"flex-$1$2")+e;case 5443:return $+e+U+"flex-item-"+L(e,/flex-|-self/g,"")+(ft(e,/flex-|baseline/)?"":U+"grid-row-"+L(e,/flex-|-self/g,""))+e;case 4675:return $+e+U+"flex-line-pack"+L(e,/align-content|flex-|-self/g,"")+e;case 5548:return $+e+U+L(e,"shrink","negative")+e;case 5292:return $+e+U+L(e,"basis","preferred-size")+e;case 6060:return $+"box-"+L(e,"-grow","")+$+e+U+L(e,"grow","positive")+e;case 4554:return $+L(e,/([^-])(transform)/g,"$1"+$+"$2")+e;case 6187:return L(L(L(e,/(zoom-|grab)/,$+"$1"),/(image-set)/,$+"$1"),e,"")+e;case 5495:case 3959:return L(e,/(image-set\([^]*)/,$+"$1$`$1");case 4968:return L(L(e,/(.+:)(flex-)?(.*)/,$+"box-pack:$3"+U+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+$+e+e;case 4200:if(!ft(e,/flex-|baseline/))return U+"grid-column-align"+Yr(e,t)+e;break;case 2592:case 3360:return U+L(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(n,i){return t=i,ft(n.props,/grid-\w+-end/)})?~$i(e+(r=r[t].value),"span")?e:U+L(e,"-start","")+e+U+"grid-row-span:"+(~$i(r,"span")?ft(r,/\d+/):+ft(r,/\d+/)-+ft(e,/\d+/))+";":U+L(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(n){return ft(n.props,/grid-\w+-start/)})?e:U+L(L(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return L(e,/(.+)-inline(.+)/,$+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(rt(e)-1-t>6)switch(oe(e,t+1)){case 109:if(oe(e,t+4)!==45)break;case 102:return L(e,/(.+:)(.+)-([^]+)/,"$1"+$+"$2-$3$1"+Tn+(oe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~$i(e,"stretch")?Xd(L(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return L(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,i,o,l,s,c,u){return U+i+":"+o+u+(l?U+i+"-span:"+(s?c:+c-+o)+u:"")+e});case 4949:if(oe(e,t+6)===121)return L(e,":",":"+$)+e;break;case 6444:switch(oe(e,oe(e,14)===45?18:11)){case 120:return L(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+$+(oe(e,14)===45?"inline-":"")+"box$3$1"+$+"$2$3$1"+U+"$2box$3")+e;case 100:return L(e,":",":"+U)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return L(e,"scroll-","scroll-snap-")+e}return e}function vo(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function fh(e,t,r,n){switch(e.type){case Jp:if(e.children.length)break;case Gp:case Ls:return e.return=e.return||e.value;case Hd:return"";case Vd:return e.return=e.value+"{"+vo(e.children,n)+"}";case Bo:if(!rt(e.value=e.props.join(",")))return""}return rt(r=vo(e.children,n))?e.return=e.value+"{"+r+"}":""}function ph(e){var t=Zd(e);return function(r,n,i,o){for(var l="",s=0;s<t;s++)l+=e[s](r,n,i,o)||"";return l}}function hh(e){return function(t){t.root||(t=t.return)&&e(t)}}function mh(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case Ls:e.return=Xd(e.value,e.length,r);return;case Vd:return vo([Pt(e,{value:L(e.value,"@","@"+$)})],n);case Bo:if(e.length)return th(r=e.props,function(i){switch(ft(i,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":kr(Pt(e,{props:[L(i,/:(read-\w+)/,":"+Tn+"$1")]})),kr(Pt(e,{props:[i]})),Ea(e,{props:qc(r,n)});break;case"::placeholder":kr(Pt(e,{props:[L(i,/:(plac\w+)/,":"+$+"input-$1")]})),kr(Pt(e,{props:[L(i,/:(plac\w+)/,":"+Tn+"$1")]})),kr(Pt(e,{props:[L(i,/:(plac\w+)/,U+"input-$1")]})),kr(Pt(e,{props:[i]})),Ea(e,{props:qc(r,n)});break}return""})}}var gh={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Jr=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Is=typeof window<"u"&&"HTMLElement"in window,vh=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),yh={},Wo=Object.freeze([]),qr=Object.freeze({});function Kd(e,t,r){return r===void 0&&(r=qr),e.theme!==r.theme&&e.theme||t||r.theme}var Yd=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),xh=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,wh=/(^-|-$)/g;function ru(e){return e.replace(xh,"-").replace(wh,"")}var kh=/(a)(d)/gi,nu=function(e){return String.fromCharCode(e+(e>25?39:97))};function _a(e){var t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=nu(t%52)+r;return(nu(t%52)+r).replace(kh,"$1-$2")}var kl,br=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},Gd=function(e){return br(5381,e)};function Jd(e){return _a(Gd(e)>>>0)}function jh(e){return e.displayName||e.name||"Component"}function jl(e){return typeof e=="string"&&!0}var qd=typeof Symbol=="function"&&Symbol.for,e0=qd?Symbol.for("react.memo"):60115,Sh=qd?Symbol.for("react.forward_ref"):60112,Ch={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Eh={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},t0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ph=((kl={})[Sh]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},kl[e0]=t0,kl);function iu(e){return("type"in(t=e)&&t.type.$$typeof)===e0?t0:"$$typeof"in e?Ph[e.$$typeof]:Ch;var t}var Nh=Object.defineProperty,_h=Object.getOwnPropertyNames,ou=Object.getOwnPropertySymbols,Th=Object.getOwnPropertyDescriptor,zh=Object.getPrototypeOf,lu=Object.prototype;function r0(e,t,r){if(typeof t!="string"){if(lu){var n=zh(t);n&&n!==lu&&r0(e,n,r)}var i=_h(t);ou&&(i=i.concat(ou(t)));for(var o=iu(e),l=iu(t),s=0;s<i.length;++s){var c=i[s];if(!(c in Eh||r&&r[c]||l&&c in l||o&&c in o)){var u=Th(t,c);try{Nh(e,c,u)}catch{}}}}return e}function dr(e){return typeof e=="function"}function bs(e){return typeof e=="object"&&"styledComponentId"in e}function rr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Ta(e,t){if(e.length===0)return"";for(var r=e[0],n=1;n<e.length;n++)r+=t?t+e[n]:e[n];return r}function Yn(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function za(e,t,r){if(r===void 0&&(r=!1),!r&&!Yn(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=za(e[n],t[n]);else if(Yn(t))for(var n in t)e[n]=za(e[n],t[n]);return e}function Os(e,t){Object.defineProperty(e,"toString",{value:t})}function fr(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Rh=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var r=0,n=0;n<t;n++)r+=this.groupSizes[n];return r},e.prototype.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var n=this.groupSizes,i=n.length,o=i;t>=o;)if((o<<=1)<0)throw fr(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var l=i;l<o;l++)this.groupSizes[l]=0}for(var s=this.indexOfGroup(t+1),c=(l=0,r.length);l<c;l++)this.tag.insertRule(s,r[l])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],n=this.indexOfGroup(t),i=n+r;this.groupSizes[t]=0;for(var o=n;o<i;o++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var n=this.groupSizes[t],i=this.indexOfGroup(t),o=i+n,l=i;l<o;l++)r+="".concat(this.tag.getRule(l)).concat(`/*!sc*/
`);return r},e}(),Ai=new Map,yo=new Map,Sl=1,Ci=function(e){if(Ai.has(e))return Ai.get(e);for(;yo.has(Sl);)Sl++;var t=Sl++;return Ai.set(e,t),yo.set(t,e),t},Lh=function(e,t){Ai.set(e,t),yo.set(t,e)},Mh="style[".concat(Jr,"][").concat("data-styled-version",'="').concat("6.1.0",'"]'),Ih=new RegExp("^".concat(Jr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),bh=function(e,t,r){for(var n,i=r.split(","),o=0,l=i.length;o<l;o++)(n=i[o])&&e.registerName(t,n)},Oh=function(e,t){for(var r,n=((r=t.textContent)!==null&&r!==void 0?r:"").split(`/*!sc*/
`),i=[],o=0,l=n.length;o<l;o++){var s=n[o].trim();if(s){var c=s.match(Ih);if(c){var u=0|parseInt(c[1],10),f=c[2];u!==0&&(Lh(f,u),bh(e,f,c[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(s)}}};function $h(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var n0=function(e){var t=document.head,r=e||t,n=document.createElement("style"),i=function(s){var c=Array.from(s.querySelectorAll("style[".concat(Jr,"]")));return c[c.length-1]}(r),o=i!==void 0?i.nextSibling:null;n.setAttribute(Jr,"active"),n.setAttribute("data-styled-version","6.1.0");var l=$h();return l&&n.setAttribute("nonce",l),r.insertBefore(n,o),n},Dh=function(){function e(t){this.element=n0(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var n=document.styleSheets,i=0,o=n.length;i<o;i++){var l=n[i];if(l.ownerNode===r)return l}throw fr(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var r=this.sheet.cssRules[t];return r&&r.cssText?r.cssText:""},e}(),Fh=function(){function e(t){this.element=n0(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,r){if(t<=this.length&&t>=0){var n=document.createTextNode(r);return this.element.insertBefore(n,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Ah=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),au=Is,Bh={isServer:!Is,useCSSOMInjection:!vh},xo=function(){function e(t,r,n){t===void 0&&(t=qr),r===void 0&&(r={});var i=this;this.options=le(le({},Bh),t),this.gs=r,this.names=new Map(n),this.server=!!t.isServer,!this.server&&Is&&au&&(au=!1,function(o){for(var l=document.querySelectorAll(Mh),s=0,c=l.length;s<c;s++){var u=l[s];u&&u.getAttribute(Jr)!=="active"&&(Oh(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Os(this,function(){return function(o){for(var l=o.getTag(),s=l.length,c="",u=function(h){var g=function(p){return yo.get(p)}(h);if(g===void 0)return"continue";var v=o.names.get(g),y=l.getGroup(h);if(v===void 0||y.length===0)return"continue";var w="".concat(Jr,".g").concat(h,'[id="').concat(g,'"]'),P="";v!==void 0&&v.forEach(function(p){p.length>0&&(P+="".concat(p,","))}),c+="".concat(y).concat(w,'{content:"').concat(P,'"}').concat(`/*!sc*/
`)},f=0;f<s;f++)u(f);return c}(i)})}return e.registerId=function(t){return Ci(t)},e.prototype.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new e(le(le({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(r){var n=r.useCSSOMInjection,i=r.target;return r.isServer?new Ah(i):n?new Dh(i):new Fh(i)}(this.options),new Rh(t)));var t},e.prototype.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},e.prototype.registerName=function(t,r){if(Ci(t),this.names.has(t))this.names.get(t).add(r);else{var n=new Set;n.add(r),this.names.set(t,n)}},e.prototype.insertRules=function(t,r,n){this.registerName(t,r),this.getTag().insertRules(Ci(t),n)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Ci(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Uh=/&/g,Hh=/^\s*\/\/.*$/gm;function i0(e,t){return e.map(function(r){return r.type==="rule"&&(r.value="".concat(t," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(t," ")),r.props=r.props.map(function(n){return"".concat(t," ").concat(n)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=i0(r.children,t)),r})}function Vh(e){var t,r,n,i=e===void 0?qr:e,o=i.options,l=o===void 0?qr:o,s=i.plugins,c=s===void 0?Wo:s,u=function(g,v,y){return y===r||y.startsWith(r)&&y.endsWith(r)&&y.replaceAll(r,"").length>0?".".concat(t):g},f=c.slice();f.push(function(g){g.type===Bo&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(Uh,r).replace(n,u))}),l.prefix&&f.push(mh),f.push(fh);var h=function(g,v,y,w){v===void 0&&(v=""),y===void 0&&(y=""),w===void 0&&(w="&"),t=w,r=v,n=new RegExp("\\".concat(r,"\\b"),"g");var P=g.replace(Hh,""),p=uh(y||v?"".concat(y," ").concat(v," { ").concat(P," }"):P);l.namespace&&(p=i0(p,l.namespace));var d=[];return vo(p,ph(f.concat(hh(function(m){return d.push(m)})))),d};return h.hash=c.length?c.reduce(function(g,v){return v.name||fr(15),br(g,v.name)},5381).toString():"",h}var Wh=new xo,Ra=Vh(),o0=H.createContext({shouldForwardProp:void 0,styleSheet:Wh,stylis:Ra});o0.Consumer;H.createContext(void 0);function La(){return E.useContext(o0)}var Zh=function(){function e(t,r){var n=this;this.inject=function(i,o){o===void 0&&(o=Ra);var l=n.name+o.hash;i.hasNameForId(n.id,l)||i.insertRules(n.id,l,o(n.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=r,Os(this,function(){throw fr(12,String(n.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Ra),this.name+t.hash},e}(),Qh=function(e){return e>="A"&&e<="Z"};function su(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(r===1&&n==="-"&&e[0]==="-")return e;Qh(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var l0=function(e){return e==null||e===!1||e===""},a0=function(e){var t,r,n=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!l0(o)&&(Array.isArray(o)&&o.isCss||dr(o)?n.push("".concat(su(i),":"),o,";"):Yn(o)?n.push.apply(n,Kn(Kn(["".concat(i," {")],a0(o),!1),["}"],!1)):n.push("".concat(su(i),": ").concat((t=i,(r=o)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||t in gh||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function Vt(e,t,r,n){if(l0(e))return[];if(bs(e))return[".".concat(e.styledComponentId)];if(dr(e)){if(!dr(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return Vt(i,t,r,n)}var o;return e instanceof Zh?r?(e.inject(r,n),[e.getName(n)]):[e]:Yn(e)?a0(e):Array.isArray(e)?Array.prototype.concat.apply(Wo,e.map(function(l){return Vt(l,t,r,n)})):[e.toString()]}function s0(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(dr(r)&&!bs(r))return!1}return!0}var Xh=Gd("6.1.0"),Kh=function(){function e(t,r,n){this.rules=t,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&s0(t),this.componentId=r,this.baseHash=br(Xh,r),this.baseStyle=n,xo.registerId(r)}return e.prototype.generateAndInjectStyles=function(t,r,n){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,r,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))i=rr(i,this.staticRulesId);else{var o=Ta(Vt(this.rules,t,r,n)),l=_a(br(this.baseHash,o)>>>0);if(!r.hasNameForId(this.componentId,l)){var s=n(o,".".concat(l),void 0,this.componentId);r.insertRules(this.componentId,l,s)}i=rr(i,l),this.staticRulesId=l}else{for(var c=br(this.baseHash,n.hash),u="",f=0;f<this.rules.length;f++){var h=this.rules[f];if(typeof h=="string")u+=h;else if(h){var g=Ta(Vt(h,t,r,n));c=br(c,g+f),u+=g}}if(u){var v=_a(c>>>0);r.hasNameForId(this.componentId,v)||r.insertRules(this.componentId,v,n(u,".".concat(v),void 0,this.componentId)),i=rr(i,v)}}return i},e}(),en=H.createContext(void 0);en.Consumer;function Yh(e){var t=H.useContext(en),r=E.useMemo(function(){return function(n,i){if(!n)throw fr(14);if(dr(n)){var o=n(i);return o}if(Array.isArray(n)||typeof n!="object")throw fr(8);return i?le(le({},i),n):n}(e.theme,t)},[e.theme,t]);return e.children?H.createElement(en.Provider,{value:r},e.children):null}var Cl={};function Gh(e,t,r){var n=bs(e),i=e,o=!jl(e),l=t.attrs,s=l===void 0?Wo:l,c=t.componentId,u=c===void 0?function(m,x){var k=typeof m!="string"?"sc":ru(m);Cl[k]=(Cl[k]||0)+1;var j="".concat(k,"-").concat(Jd("6.1.0"+k+Cl[k]));return x?"".concat(x,"-").concat(j):j}(t.displayName,t.parentComponentId):c,f=t.displayName;f===void 0&&function(m){return jl(m)?"styled.".concat(m):"Styled(".concat(jh(m),")")}(e);var h=t.displayName&&t.componentId?"".concat(ru(t.displayName),"-").concat(t.componentId):t.componentId||u,g=n&&i.attrs?i.attrs.concat(s).filter(Boolean):s,v=t.shouldForwardProp;if(n&&i.shouldForwardProp){var y=i.shouldForwardProp;if(t.shouldForwardProp){var w=t.shouldForwardProp;v=function(m,x){return y(m,x)&&w(m,x)}}else v=y}var P=new Kh(r,h,n?i.componentStyle:void 0);function p(m,x){return function(k,j,S){var T=k.attrs,F=k.componentStyle,M=k.defaultProps,ge=k.foldedComponentIds,lt=k.styledComponentId,at=k.target,xr=H.useContext(en),Ve=La(),st=k.shouldForwardProp||Ve.shouldForwardProp,ve=function(ct,Ne,jt){for(var _e,be=le(le({},Ne),{className:void 0,theme:jt}),Zo=0;Zo<ct.length;Zo+=1){var li=dr(_e=ct[Zo])?_e(be):_e;for(var St in li)be[St]=St==="className"?rr(be[St],li[St]):St==="style"?le(le({},be[St]),li[St]):li[St]}return Ne.className&&(be.className=rr(be.className,Ne.className)),be}(T,j,Kd(j,xr,M)||qr),N=ve.as||at,z={};for(var R in ve)ve[R]===void 0||R[0]==="$"||R==="as"||R==="theme"||(R==="forwardedAs"?z.as=ve.forwardedAs:st&&!st(R,N)||(z[R]=ve[R]));var W=function(ct,Ne){var jt=La(),_e=ct.generateAndInjectStyles(Ne,jt.styleSheet,jt.stylis);return _e}(F,ve),Y=rr(ge,lt);return W&&(Y+=" "+W),ve.className&&(Y+=" "+ve.className),z[jl(N)&&!Yd.has(N)?"class":"className"]=Y,z.ref=S,E.createElement(N,z)}(d,m,x)}var d=H.forwardRef(p);return d.attrs=g,d.componentStyle=P,d.shouldForwardProp=v,d.foldedComponentIds=n?rr(i.foldedComponentIds,i.styledComponentId):"",d.styledComponentId=h,d.target=n?i.target:e,Object.defineProperty(d,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(m){this._foldedDefaultProps=n?function(x){for(var k=[],j=1;j<arguments.length;j++)k[j-1]=arguments[j];for(var S=0,T=k;S<T.length;S++)za(x,T[S],!0);return x}({},i.defaultProps,m):m}}),Os(d,function(){return".".concat(d.styledComponentId)}),o&&r0(d,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),d}function cu(e,t){for(var r=[e[0]],n=0,i=t.length;n<i;n+=1)r.push(t[n],e[n+1]);return r}var uu=function(e){return Object.assign(e,{isCss:!0})};function c0(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(dr(e)||Yn(e)){var n=e;return uu(Vt(cu(Wo,Kn([n],t,!0))))}var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?Vt(i):uu(Vt(cu(i,t)))}function Ma(e,t,r){if(r===void 0&&(r=qr),!t)throw fr(1,t);var n=function(i){for(var o=[],l=1;l<arguments.length;l++)o[l-1]=arguments[l];return e(t,r,c0.apply(void 0,Kn([i],o,!1)))};return n.attrs=function(i){return Ma(e,t,le(le({},r),{attrs:Array.prototype.concat(r.attrs,i).filter(Boolean)}))},n.withConfig=function(i){return Ma(e,t,le(le({},r),i))},n}var u0=function(e){return Ma(Gh,e)},b=u0;Yd.forEach(function(e){b[e]=u0(e)});var Jh=function(){function e(t,r){this.rules=t,this.componentId=r,this.isStatic=s0(t),xo.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,r,n,i){var o=i(Ta(Vt(this.rules,r,n,i)),""),l=this.componentId+t;n.insertRules(l,l,o)},e.prototype.removeStyles=function(t,r){r.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,r,n,i){t>2&&xo.registerId(this.componentId+t),this.removeStyles(t,n),this.createStyles(t,r,n,i)},e}();function qh(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=c0.apply(void 0,Kn([e],t,!1)),i="sc-global-".concat(Jd(JSON.stringify(n))),o=new Jh(n,i),l=function(c){var u=La(),f=H.useContext(en),h=H.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&s(h,c,u.styleSheet,f,u.stylis),H.useLayoutEffect(function(){if(!u.styleSheet.server)return s(h,c,u.styleSheet,f,u.stylis),function(){return o.removeStyles(h,u.styleSheet)}},[h,c,u.styleSheet,f,u.stylis]),null};function s(c,u,f,h,g){if(o.isStatic)o.renderStyles(c,yh,f,g);else{var v=le(le({},u),{theme:Kd(u,h,l.defaultProps)});o.renderStyles(c,v,f,g)}}return H.memo(l)}function Ia(){return Ia=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Ia.apply(this,arguments)}var em=H.createElement("svg",{viewBox:"-2 -5 14 20",height:"100%",width:"100%",style:{position:"absolute",top:0}},H.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"})),tm=H.createElement("svg",{height:"100%",width:"100%",viewBox:"-2 -5 17 21",style:{position:"absolute",top:0}},H.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}));function du(e){if(e.length===7)return e;for(var t="#",r=1;r<4;r+=1)t+=e[r]+e[r];return t}function fu(e,t,r,n,i){return function(o,l,s,c,u){var f=(o-s)/(l-s);if(f===0)return c;if(f===1)return u;for(var h="#",g=1;g<6;g+=2){var v=parseInt(c.substr(g,2),16),y=parseInt(u.substr(g,2),16),w=Math.round((1-f)*v+f*y).toString(16);w.length===1&&(w="0"+w),h+=w}return h}(e,t,r,du(n),du(i))}var d0=function(e){function t(r){e.call(this,r);var n=r.height,i=r.width,o=r.checked;this.t=r.handleDiameter||n-2,this.i=Math.max(i-n,i-(n+this.t)/2),this.o=Math.max(0,(n-this.t)/2),this.state={h:o?this.i:this.o},this.l=0,this.u=0,this.p=this.p.bind(this),this.v=this.v.bind(this),this.g=this.g.bind(this),this.k=this.k.bind(this),this.m=this.m.bind(this),this.M=this.M.bind(this),this.T=this.T.bind(this),this.$=this.$.bind(this),this.C=this.C.bind(this),this.D=this.D.bind(this),this.O=this.O.bind(this),this.S=this.S.bind(this)}return e&&(t.__proto__=e),(t.prototype=Object.create(e&&e.prototype)).constructor=t,t.prototype.componentDidMount=function(){this.W=!0},t.prototype.componentDidUpdate=function(r){r.checked!==this.props.checked&&this.setState({h:this.props.checked?this.i:this.o})},t.prototype.componentWillUnmount=function(){this.W=!1},t.prototype.I=function(r){this.H.focus(),this.setState({R:r,j:!0,B:Date.now()})},t.prototype.L=function(r){var n=this.state,i=n.R,o=n.h,l=(this.props.checked?this.i:this.o)+r-i;n.N||r===i||this.setState({N:!0});var s=Math.min(this.i,Math.max(this.o,l));s!==o&&this.setState({h:s})},t.prototype.U=function(r){var n=this.state,i=n.h,o=n.N,l=n.B,s=this.props.checked,c=(this.i+this.o)/2;this.setState({h:this.props.checked?this.i:this.o});var u=Date.now()-l;(!o||u<250||s&&i<=c||!s&&i>=c)&&this.A(r),this.W&&this.setState({N:!1,j:!1}),this.l=Date.now()},t.prototype.p=function(r){r.preventDefault(),typeof r.button=="number"&&r.button!==0||(this.I(r.clientX),window.addEventListener("mousemove",this.v),window.addEventListener("mouseup",this.g))},t.prototype.v=function(r){r.preventDefault(),this.L(r.clientX)},t.prototype.g=function(r){this.U(r),window.removeEventListener("mousemove",this.v),window.removeEventListener("mouseup",this.g)},t.prototype.k=function(r){this.X=null,this.I(r.touches[0].clientX)},t.prototype.m=function(r){this.L(r.touches[0].clientX)},t.prototype.M=function(r){r.preventDefault(),this.U(r)},t.prototype.$=function(r){Date.now()-this.l>50&&(this.A(r),Date.now()-this.u>50&&this.W&&this.setState({j:!1}))},t.prototype.C=function(){this.u=Date.now()},t.prototype.D=function(){this.setState({j:!0})},t.prototype.O=function(){this.setState({j:!1})},t.prototype.S=function(r){this.H=r},t.prototype.T=function(r){r.preventDefault(),this.H.focus(),this.A(r),this.W&&this.setState({j:!1})},t.prototype.A=function(r){var n=this.props;(0,n.onChange)(!n.checked,r,n.id)},t.prototype.render=function(){var r=this.props,n=r.checked,i=r.disabled,o=r.className,l=r.offColor,s=r.onColor,c=r.offHandleColor,u=r.onHandleColor,f=r.checkedIcon,h=r.uncheckedIcon,g=r.checkedHandleIcon,v=r.uncheckedHandleIcon,y=r.boxShadow,w=r.activeBoxShadow,P=r.height,p=r.width,d=r.borderRadius,m=function(Ve,st){var ve={};for(var N in Ve)Object.prototype.hasOwnProperty.call(Ve,N)&&st.indexOf(N)===-1&&(ve[N]=Ve[N]);return ve}(r,["checked","disabled","className","offColor","onColor","offHandleColor","onHandleColor","checkedIcon","uncheckedIcon","checkedHandleIcon","uncheckedHandleIcon","boxShadow","activeBoxShadow","height","width","borderRadius","handleDiameter"]),x=this.state,k=x.h,j=x.N,S=x.j,T={position:"relative",display:"inline-block",textAlign:"left",opacity:i?.5:1,direction:"ltr",borderRadius:P/2,WebkitTransition:"opacity 0.25s",MozTransition:"opacity 0.25s",transition:"opacity 0.25s",touchAction:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",userSelect:"none"},F={height:P,width:p,margin:Math.max(0,(this.t-P)/2),position:"relative",background:fu(k,this.i,this.o,l,s),borderRadius:typeof d=="number"?d:P/2,cursor:i?"default":"pointer",WebkitTransition:j?null:"background 0.25s",MozTransition:j?null:"background 0.25s",transition:j?null:"background 0.25s"},M={height:P,width:Math.min(1.5*P,p-(this.t+P)/2+1),position:"relative",opacity:(k-this.o)/(this.i-this.o),pointerEvents:"none",WebkitTransition:j?null:"opacity 0.25s",MozTransition:j?null:"opacity 0.25s",transition:j?null:"opacity 0.25s"},ge={height:P,width:Math.min(1.5*P,p-(this.t+P)/2+1),position:"absolute",opacity:1-(k-this.o)/(this.i-this.o),right:0,top:0,pointerEvents:"none",WebkitTransition:j?null:"opacity 0.25s",MozTransition:j?null:"opacity 0.25s",transition:j?null:"opacity 0.25s"},lt={height:this.t,width:this.t,background:fu(k,this.i,this.o,c,u),display:"inline-block",cursor:i?"default":"pointer",borderRadius:typeof d=="number"?d-1:"50%",position:"absolute",transform:"translateX("+k+"px)",top:Math.max(0,(P-this.t)/2),outline:0,boxShadow:S?w:y,border:0,WebkitTransition:j?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",MozTransition:j?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",transition:j?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s"},at={height:this.t,width:this.t,opacity:Math.max(2*(1-(k-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:j?null:"opacity 0.25s",MozTransition:j?null:"opacity 0.25s",transition:j?null:"opacity 0.25s"},xr={height:this.t,width:this.t,opacity:Math.max(2*((k-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:j?null:"opacity 0.25s",MozTransition:j?null:"opacity 0.25s",transition:j?null:"opacity 0.25s"};return H.createElement("div",{className:o,style:T},H.createElement("div",{className:"react-switch-bg",style:F,onClick:i?null:this.T,onMouseDown:function(Ve){return Ve.preventDefault()}},f&&H.createElement("div",{style:M},f),h&&H.createElement("div",{style:ge},h)),H.createElement("div",{className:"react-switch-handle",style:lt,onClick:function(Ve){return Ve.preventDefault()},onMouseDown:i?null:this.p,onTouchStart:i?null:this.k,onTouchMove:i?null:this.m,onTouchEnd:i?null:this.M,onTouchCancel:i?null:this.O},v&&H.createElement("div",{style:at},v),g&&H.createElement("div",{style:xr},g)),H.createElement("input",Ia({},{type:"checkbox",role:"switch","aria-checked":n,checked:n,disabled:i,style:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",width:1}},m,{ref:this.S,onFocus:this.D,onBlur:this.O,onKeyUp:this.C,onChange:this.$})))},t}(E.Component);d0.defaultProps={disabled:!1,offColor:"#888",onColor:"#080",offHandleColor:"#fff",onHandleColor:"#fff",uncheckedIcon:em,checkedIcon:tm,boxShadow:null,activeBoxShadow:"0 0 2px 3px #3bf",height:28,width:56};function wo(){return wo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},wo.apply(this,arguments)}function rm(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Gn(e,t){return Gn=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},Gn(e,t)}function nm(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Gn(e,t)}function ba(e){return ba=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},ba(e)}function im(e){try{return Function.toString.call(e).indexOf("[native code]")!==-1}catch{return typeof e=="function"}}function om(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Bi(e,t,r){return om()?Bi=Reflect.construct.bind():Bi=function(i,o,l){var s=[null];s.push.apply(s,o);var c=Function.bind.apply(i,s),u=new c;return l&&Gn(u,l.prototype),u},Bi.apply(null,arguments)}function Oa(e){var t=typeof Map=="function"?new Map:void 0;return Oa=function(n){if(n===null||!im(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(typeof t<"u"){if(t.has(n))return t.get(n);t.set(n,i)}function i(){return Bi(n,arguments,ba(this).constructor)}return i.prototype=Object.create(n.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),Gn(i,n)},Oa(e)}var Or=function(e){nm(t,e);function t(r){var n;return n=e.call(this,"An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#"+r+" for more information.")||this,rm(n)}return t}(Oa(Error));function El(e){return Math.round(e*255)}function lm(e,t,r){return El(e)+","+El(t)+","+El(r)}function pu(e,t,r,n){if(n===void 0&&(n=lm),t===0)return n(r,r,r);var i=(e%360+360)%360/60,o=(1-Math.abs(2*r-1))*t,l=o*(1-Math.abs(i%2-1)),s=0,c=0,u=0;i>=0&&i<1?(s=o,c=l):i>=1&&i<2?(s=l,c=o):i>=2&&i<3?(c=o,u=l):i>=3&&i<4?(c=l,u=o):i>=4&&i<5?(s=l,u=o):i>=5&&i<6&&(s=o,u=l);var f=r-o/2,h=s+f,g=c+f,v=u+f;return n(h,g,v)}var hu={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};function am(e){if(typeof e!="string")return e;var t=e.toLowerCase();return hu[t]?"#"+hu[t]:e}var sm=/^#[a-fA-F0-9]{6}$/,cm=/^#[a-fA-F0-9]{8}$/,um=/^#[a-fA-F0-9]{3}$/,dm=/^#[a-fA-F0-9]{4}$/,Pl=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,fm=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,pm=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,hm=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;function $a(e){if(typeof e!="string")throw new Or(3);var t=am(e);if(t.match(sm))return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16)};if(t.match(cm)){var r=parseFloat((parseInt(""+t[7]+t[8],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16),alpha:r}}if(t.match(um))return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16)};if(t.match(dm)){var n=parseFloat((parseInt(""+t[4]+t[4],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16),alpha:n}}var i=Pl.exec(t);if(i)return{red:parseInt(""+i[1],10),green:parseInt(""+i[2],10),blue:parseInt(""+i[3],10)};var o=fm.exec(t.substring(0,50));if(o)return{red:parseInt(""+o[1],10),green:parseInt(""+o[2],10),blue:parseInt(""+o[3],10),alpha:parseFloat(""+o[4])>1?parseFloat(""+o[4])/100:parseFloat(""+o[4])};var l=pm.exec(t);if(l){var s=parseInt(""+l[1],10),c=parseInt(""+l[2],10)/100,u=parseInt(""+l[3],10)/100,f="rgb("+pu(s,c,u)+")",h=Pl.exec(f);if(!h)throw new Or(4,t,f);return{red:parseInt(""+h[1],10),green:parseInt(""+h[2],10),blue:parseInt(""+h[3],10)}}var g=hm.exec(t.substring(0,50));if(g){var v=parseInt(""+g[1],10),y=parseInt(""+g[2],10)/100,w=parseInt(""+g[3],10)/100,P="rgb("+pu(v,y,w)+")",p=Pl.exec(P);if(!p)throw new Or(4,t,P);return{red:parseInt(""+p[1],10),green:parseInt(""+p[2],10),blue:parseInt(""+p[3],10),alpha:parseFloat(""+g[4])>1?parseFloat(""+g[4])/100:parseFloat(""+g[4])}}throw new Or(5)}var mm=function(t){return t.length===7&&t[1]===t[2]&&t[3]===t[4]&&t[5]===t[6]?"#"+t[1]+t[3]+t[5]:t},mu=mm;function jr(e){var t=e.toString(16);return t.length===1?"0"+t:t}function gu(e,t,r){if(typeof e=="number"&&typeof t=="number"&&typeof r=="number")return mu("#"+jr(e)+jr(t)+jr(r));if(typeof e=="object"&&t===void 0&&r===void 0)return mu("#"+jr(e.red)+jr(e.green)+jr(e.blue));throw new Or(6)}function gm(e,t,r,n){if(typeof e=="string"&&typeof t=="number"){var i=$a(e);return"rgba("+i.red+","+i.green+","+i.blue+","+t+")"}else{if(typeof e=="number"&&typeof t=="number"&&typeof r=="number"&&typeof n=="number")return n>=1?gu(e,t,r):"rgba("+e+","+t+","+r+","+n+")";if(typeof e=="object"&&t===void 0&&r===void 0&&n===void 0)return e.alpha>=1?gu(e.red,e.green,e.blue):"rgba("+e.red+","+e.green+","+e.blue+","+e.alpha+")"}throw new Or(7)}function f0(e,t,r){return function(){var i=r.concat(Array.prototype.slice.call(arguments));return i.length>=t?e.apply(this,i):f0(e,t,i)}}function p0(e){return f0(e,e.length,[])}function vm(e,t,r){if(t==="transparent")return r;if(r==="transparent")return t;if(e===0)return r;var n=$a(t),i=wo({},n,{alpha:typeof n.alpha=="number"?n.alpha:1}),o=$a(r),l=wo({},o,{alpha:typeof o.alpha=="number"?o.alpha:1}),s=i.alpha-l.alpha,c=parseFloat(e)*2-1,u=c*s===-1?c:c+s,f=1+c*s,h=(u/f+1)/2,g=1-h,v={red:Math.floor(i.red*h+l.red*g),green:Math.floor(i.green*h+l.green*g),blue:Math.floor(i.blue*h+l.blue*g),alpha:i.alpha*parseFloat(e)+l.alpha*(1-parseFloat(e))};return gm(v)}var ym=p0(vm),xm=ym;function wm(e,t){return t==="transparent"?t:xm(parseFloat(e),"rgb(0, 0, 0)",t)}var km=p0(wm),jm=km;const Sm=b.div`
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
`;function Cm({toggleTheme:e}){const t=E.useContext(en);if(!t)throw new Error("ThemeContext não foi encontrado. Verifique se ele está sendo provido corretamente.");const{colors:r,title:n}=t;return a.jsxs(Sm,{children:[a.jsx("header",{children:a.jsxs("div",{children:[a.jsxs("span",{className:"logo",children:[a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",className:"iconify iconify--logos",width:"35.93",height:"32",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 228",children:a.jsx("path",{d:"M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"})}),a.jsx("span",{children:"JP"})]}),a.jsxs("span",{className:"menu",children:[a.jsx(Rt,{to:"/",children:"Home"}),a.jsx(Rt,{to:"/projects",children:"Projetos"}),a.jsx(Rt,{to:"/contact",children:"Contato"})]})]})}),a.jsx(d0,{onChange:e,checked:n==="light",checkedIcon:!1,uncheckedIcon:!1,height:25,width:80,handleDiameter:20,offColor:jm(.3,r.react),onColor:r.react})]})}const Em=b.div`
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
`,Lm=b.div`
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
`,Mm=b.div`
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
`,Nl=b.div`
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
`,Om="/Portfolio/assets/Perfil.png",Yt="/Portfolio/assets/react.svg",$m="/Portfolio/assets/tag.webp",Dm="/Portfolio/assets/PortfolioBlack.png",Fm="/Portfolio/assets/dtMoney.png",Am="/Portfolio/assets/ConversorDeMoedas.png";function Bm(){const e=()=>{window.scrollTo(0,0)};return a.jsxs(Em,{children:[a.jsx("title",{children:"João - Home"}),a.jsxs(Pm,{children:[a.jsx(Nm,{children:a.jsx("img",{src:Om,alt:""})}),a.jsxs(_m,{children:[a.jsx("h2",{children:"Oi, me chamo João Paulo"}),a.jsxs("p",{children:[a.jsx("span",{className:"react",children:"Full Stack"})," Developer"]}),a.jsx("p",{children:"Formado em Análise e Desenvolvimento de Sistemas, Desenvolvedor Web com experiência em desenvolvimento de projetos."})]})]}),a.jsxs(Tm,{children:[a.jsxs(zm,{children:[a.jsxs("h3",{children:["Minhas principais ",a.jsx("span",{className:"react",children:"habilidades"})]}),a.jsxs("p",{children:[a.jsx("img",{src:Yt,alt:""}),a.jsx("span",{children:"Javascript"})]}),a.jsxs("p",{children:[a.jsx("img",{src:Yt,alt:""}),a.jsx("span",{children:"Typescript"})]}),a.jsxs("p",{children:[a.jsx("img",{src:Yt,alt:""}),a.jsx("span",{children:"React"})]}),a.jsxs("p",{children:[a.jsx("img",{src:Yt,alt:""}),a.jsx("span",{children:"Node"})]}),a.jsxs("p",{children:[a.jsx("img",{src:Yt,alt:""}),a.jsx("span",{children:"PHP"})]}),a.jsxs("p",{children:[a.jsx("img",{src:Yt,alt:""}),a.jsx("span",{children:"HTML"})]}),a.jsxs("p",{children:[a.jsx("img",{src:Yt,alt:""}),a.jsx("span",{children:"CSS"})]})]}),a.jsx(Rm,{children:a.jsx("img",{src:$m,alt:""})})]}),a.jsxs(Lm,{children:[a.jsxs("p",{children:["Conheça alguns dos meus ",a.jsx("span",{className:"react",children:"projetos"})]}),a.jsxs(Rt,{to:"/projects",onClick:e,children:["Ver mais projetos ",a.jsx("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 512 512",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"})})]})]}),a.jsxs(Mm,{children:[a.jsx(Rt,{to:"/projects/1",onClick:e,children:a.jsxs(Nl,{children:[a.jsxs("p",{children:[a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",className:"iconify iconify--logos",width:"35.93",height:"32",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 228",children:a.jsx("path",{d:"M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"})}),a.jsx("span",{children:"Portfólio"})]}),a.jsxs("p",{children:[a.jsx("img",{src:Dm,alt:""}),a.jsxs("article",{children:[a.jsx("span",{children:"Javascript"}),a.jsx("span",{children:"Typescript"}),a.jsx("span",{children:"React"}),a.jsx("span",{children:"HTML"}),a.jsx("span",{children:"CSS"}),a.jsx("span",{children:"Vite"}),a.jsx("span",{children:"Styled-Components"}),a.jsx("span",{children:"Emailjs"})]}),a.jsx("p",{children:"Esse é meu Portfólio desenvolvido usando principalmente Typescript e React"})]}),a.jsx("p",{children:"Ver projeto"})]})}),a.jsx(Rt,{to:"/projects/2",onClick:e,children:a.jsxs(Nl,{children:[a.jsxs("p",{children:[a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",className:"iconify iconify--logos",width:"35.93",height:"32",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 228",children:a.jsx("path",{d:"M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"})}),a.jsx("span",{children:"DT Money"})]}),a.jsxs("p",{children:[a.jsx("img",{src:Fm,alt:""}),a.jsx("br",{}),a.jsxs("article",{children:[a.jsx("span",{children:"Javascript"}),a.jsx("span",{children:"Typescript"}),a.jsx("span",{children:"React"}),a.jsx("span",{children:"HTML"}),a.jsx("span",{children:"CSS"}),a.jsx("span",{children:"Styled-Components"})]}),a.jsx("p",{children:"Programa para calcular suas despesas com facilidade e clareza"})]}),a.jsx("p",{children:"Ver projeto"})]})}),a.jsx(Rt,{to:"/projects/3",onClick:e,children:a.jsxs(Nl,{children:[a.jsxs("p",{children:[a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",className:"iconify iconify--logos",width:"35.93",height:"32",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 228",children:a.jsx("path",{d:"M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"})}),a.jsx("span",{children:"Conversor de Moedas"})]}),a.jsxs("p",{children:[a.jsx("img",{src:Am,alt:""}),a.jsx("br",{}),a.jsxs("article",{children:[a.jsx("span",{children:"PHP"}),a.jsx("span",{children:"HTML"}),a.jsx("span",{children:"CSS"})]}),a.jsx("p",{children:"Programa criado em HTML, CSS e PHP utilizando API do Banco do Brasil"})]}),a.jsx("p",{children:"Ver projeto"})]})})]}),a.jsxs(Im,{children:[a.jsxs("p",{children:["Entre em ",a.jsx("span",{className:"react",children:"Contato"})," comigo"]}),a.jsx("p",{children:"Sinta-se à vontade para entrar em contato comigo para discutir projetos interessantes na área de desenvolvimento de software."})]}),a.jsxs(bm,{children:[a.jsxs("div",{children:[a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",className:"iconify iconify--logos",width:"35.93",height:"32",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 228",children:a.jsx("path",{d:"M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"})}),a.jsx("span",{children:"João Paulo •"}),a.jsx("a",{href:"https://www.linkedin.com/in/joaovecchio/",target:"_blank",children:a.jsx("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 16 16",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"})})}),a.jsx("a",{href:"https://github.com/JoaopvSalles",target:"_blank",children:a.jsx("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 16 16",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"})})}),a.jsxs("p",{children:[a.jsx("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 512 512",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"})})," joaopaulovs2000@gmail.com"]})]}),a.jsxs(Rt,{to:"/contact",onClick:e,children:["Enviar email agora ",a.jsx("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 512 512",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"})})]})]})]})}const h0=b.div`
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
`,Et=b.span`
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
`;const vu=[{id:1,categories:["Javascript","Typescript","React","HTML","CSS","Vite","Styled-Components","Emailjs"],name:"Portfólio",imageUrl:"/Portfolio/assets/PortfolioBlack.png",tech1:"Javascript",tech2:"Typescript",tech3:"React",tech4:"HTML",tech5:"CSS",tech6:"Vite",tech7:"Styled-Components",tech8:"Emailjs",description:"Esse é meu Portfólio desenvolvido usando principalmente Typescript e React",link:"#/projects/1"},{id:2,categories:["Javascript","Typescript","React","HTML","CSS","Styled-Components"],name:"DT Money",imageUrl:"/Portfolio/assets/dtMoney.png",tech1:"Javascript",tech2:"Typescript",tech3:"React",tech4:"HTML",tech5:"CSS",tech6:"Styled-Components",description:"Programa para calcular suas despesas com facilidade e clareza",link:"#/projects/2"},{id:3,categories:["PHP","HTML","CSS"],name:"Conversor de Moedas",imageUrl:"/Portfolio/assets/ConversorDeMoedas.png",tech1:"PHP",tech2:"HTML",tech3:"CSS",description:"Programa criado em HTML, CSS e PHP utilizando API do Banco do Brasil",link:"#/projects/3"},{id:4,categories:["Node","HTML","CSS"],name:"Projeto",imageUrl:"/Portfolio/assets/EmBreve.png",tech1:"Node",tech2:"HTML",tech3:"CSS",description:"Em Breve",link:"#/projects"},{id:5,categories:["Node","HTML","CSS"],name:"Projeto",imageUrl:"/Portfolio/assets/EmBreve.png",tech1:"Node",tech2:"HTML",tech3:"CSS",description:"Em Breve",link:"#/projects"},{id:6,categories:["HTML","CSS"],name:"Projeto",imageUrl:"/Portfolio/assets/EmBreve.png",tech1:"HTML",tech2:"CSS",description:"Em Breve",link:"#/projects"}],Jm=["Javascript","Typescript","React","Node","PHP","HTML","CSS","Vite","Styled-Components","Emailjs"],qm=()=>{window.scrollTo(0,0)},e3=({name:e,imageUrl:t,tech1:r,tech2:n,tech3:i,tech4:o,tech5:l,tech6:s,tech7:c,tech8:u,description:f,link:h})=>a.jsxs(h0,{children:[a.jsx("title",{children:"João - Projetos"}),a.jsx(Gm,{href:h,onClick:qm,children:a.jsxs(Wm,{children:[a.jsxs(Zm,{children:[a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",className:"iconify iconify--logos",width:"35.93",height:"32",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 228",children:a.jsx("path",{d:"M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"})}),a.jsx("span",{children:e})]}),a.jsx(Qm,{src:t,alt:e}),a.jsxs(Xm,{children:[r&&a.jsx(Et,{children:r}),n&&a.jsx(Et,{children:n}),i&&a.jsx(Et,{children:i}),o&&a.jsx(Et,{children:o}),l&&a.jsx(Et,{children:l}),s&&a.jsx(Et,{children:s}),c&&a.jsx(Et,{children:c}),u&&a.jsx(Et,{children:u})]}),a.jsx(Km,{children:f}),a.jsx(Ym,{children:"Ver Projeto"})]})})]});function t3(){const[e,t]=E.useState([]),r=i=>{t(o=>o.includes(i)?o.filter(l=>l!==i):[...o,i])},n=e.length===0?vu:vu.filter(i=>i.categories.some(o=>e.includes(o)));return a.jsx(h0,{children:a.jsxs("div",{className:"title",children:[a.jsxs("h2",{children:["Conheça meus principais ",a.jsx("span",{className:"react",children:" projetos"})]}),a.jsx(Um,{children:Jm.map(i=>a.jsx(Hm,{onClick:()=>r(i),active:e.includes(i),children:i.charAt(0).toUpperCase()+i.slice(1)},i))}),a.jsx(Vm,{children:n.map(i=>a.jsx(e3,{...i},i.id))})]})})}const r3=b.div`
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
`,Oe="/Portfolio/assets/react.svg",n3="/Portfolio/assets/PortfolioBlack.png",i3="/Portfolio/assets/PortfolioWhite.png";function o3(){const e=yr(),t=[n3,i3],[r,n]=E.useState(0),[i,o]=E.useState(null),l=u=>{o(u),setTimeout(()=>{n(f=>u==="next"?(f+1)%t.length:(f-1+t.length)%t.length),o(null)},500)},s=()=>l("next"),c=()=>l("prev");return a.jsxs(r3,{children:[a.jsxs("div",{className:"return",onClick:()=>e(-1),children:[a.jsxs("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 24 24",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:[a.jsx("path",{fill:"none",d:"M0 0h24v24H0z"}),a.jsx("path",{d:"M17.77 3.77L16 2 6 12l10 10 1.77-1.77L9.54 12z"})]}),a.jsx("span",{children:"Voltar"})]}),a.jsxs("h2",{children:["Projeto ",a.jsx("span",{className:"react",children:"Portfólio"})]}),a.jsxs("div",{className:"project",children:[a.jsxs("div",{className:"img-carousel",children:[a.jsx("button",{className:"prev",onClick:c,children:a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"48",height:"48",fill:"currentColor",children:a.jsx("path",{d:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z"})})}),t.map((u,f)=>a.jsx("img",{src:u,alt:`Imagem ${f}`,className:`
                                ${f===r?"active":""}
                                ${i==="next"&&f===(r+1)%t.length?"next-enter":""}
                                ${i==="next"&&f===r?"next-exit":""}
                                ${i==="prev"&&f===(r-1+t.length)%t.length?"prev-enter":""}
                                ${i==="prev"&&f===r?"prev-exit":""}
                            `},f)),a.jsx("button",{className:"next",onClick:s,children:a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"48",height:"48",fill:"currentColor",children:a.jsx("path",{d:"M8.59 16.59L13.17 12l-4.58-4.59L10 6l6 6-6 6z"})})})]}),a.jsxs("div",{className:"description",children:[a.jsxs("h3",{children:[a.jsx("span",{className:"react",children:"Descrição"})," do projeto:"]}),a.jsxs("p",{children:["Este é o meu próprio portfólio, desenvolvido com o objetivo de apresentar meus principais projetos pessoais e habilidades de desenvolvimento web.",a.jsx("br",{}),"Utilizando pricinpalmente TypeScript e React, este portfólio é uma plataforma que destaca minha experiência em desenvolvimento de software."]})]})]}),a.jsxs("div",{className:"details",children:[a.jsxs("div",{className:"functions",children:[a.jsxs("h3",{children:["Principais ",a.jsx("span",{className:"react",children:"Funcionalidades"}),":"]}),a.jsxs("p",{children:[a.jsx("img",{src:Oe,alt:""}),a.jsx("span",{children:"Visualizar projetos"})]}),a.jsxs("p",{children:[a.jsx("img",{src:Oe,alt:""}),a.jsx("span",{children:"Alterar entre tema claro ou escuro"})]}),a.jsxs("p",{children:[a.jsx("img",{src:Oe,alt:""}),a.jsx("span",{children:"Filtrar projetos por tag"})]}),a.jsxs("p",{children:[a.jsx("img",{src:Oe,alt:""}),a.jsx("span",{children:"Enviar Email para contato"})]})]}),a.jsxs("div",{className:"techs",children:[a.jsxs("h3",{children:["Principais ",a.jsx("span",{className:"react",children:"Tecnologias"}),":"]}),a.jsxs("p",{children:[a.jsx("img",{src:Oe,alt:""}),a.jsx("span",{children:"Javascript"})]}),a.jsxs("p",{children:[a.jsx("img",{src:Oe,alt:""}),a.jsx("span",{children:"Typescript"})]}),a.jsxs("p",{children:[a.jsx("img",{src:Oe,alt:""}),a.jsx("span",{children:"React"})]}),a.jsxs("p",{children:[a.jsx("img",{src:Oe,alt:""}),a.jsx("span",{children:"HTML"})]}),a.jsxs("p",{children:[a.jsx("img",{src:Oe,alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:Oe,alt:""}),a.jsx("span",{children:"Vite"})]}),a.jsxs("p",{children:[a.jsx("img",{src:Oe,alt:""}),a.jsx("span",{children:"Styled-Components"})]}),a.jsxs("p",{children:[a.jsx("img",{src:Oe,alt:""}),a.jsx("span",{children:"Emailjs"})]})]}),a.jsxs("div",{className:"repository",children:[a.jsxs("h3",{children:["Onde ",a.jsx("span",{className:"react",children:"Encontrar"})," o Projeto:"]}),a.jsxs("a",{href:"https://github.com/JoaopvSalles",target:"_blank",children:[a.jsx("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 16 16",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"})}),"Ver Repositório"]})]})]})]})}const l3=b.div`
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
`,ut="/Portfolio/assets/react.svg",a3="/Portfolio/assets/dtMoney.png";function s3(){const e=yr();return a.jsxs(l3,{children:[a.jsxs("div",{className:"return",onClick:()=>e(-1),children:[a.jsxs("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 24 24",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:[a.jsx("path",{fill:"none",d:"M0 0h24v24H0z"}),a.jsx("path",{d:"M17.77 3.77L16 2 6 12l10 10 1.77-1.77L9.54 12z"})]}),a.jsx("span",{children:"Voltar"})]}),a.jsxs("h2",{children:["Projeto ",a.jsx("span",{className:"react",children:"DT Money"})]}),a.jsxs("div",{className:"project",children:[a.jsx("div",{className:"img",children:a.jsx("img",{src:a3,alt:""})}),a.jsxs("div",{className:"description",children:[a.jsxs("h3",{children:[a.jsx("span",{className:"react",children:"Descrição"})," do projeto:"]}),a.jsxs("p",{children:["Programa para calcular suas despesas.",a.jsx("br",{}),a.jsx("br",{}),"Como cadastar uma nova transação:",a.jsx("br",{}),'- clique em "nova transação"',a.jsx("br",{}),"- digite um título,",a.jsx("br",{}),"- digite um valor em R$,",a.jsx("br",{}),'- marque uma opção "entrada" ou "saída" caso você tenha recebido ou gasto dinheiro com a transação,',a.jsx("br",{}),"- digite uma categoria,",a.jsx("br",{}),'- clique em "cadastrar".',a.jsx("br",{}),a.jsx("br",{}),"Sua transição será adicionada a uma lista com todas as informações fornecidas e será gerada uma data exata do dia em que foi cadastrado a transição, e então você poderá adicionar uma nova transação.",a.jsx("br",{}),a.jsx("br",{}),'Conforme você adiciona novas transações o programa irá calcular automaticamente, seu saldo total de "entrada" em R$, seu saldo total de "saída" em R$, e seu saldo "final" em R$ positivo ou negativo.']})]})]}),a.jsxs("div",{className:"details",children:[a.jsxs("div",{className:"functions",children:[a.jsxs("h3",{children:["Principais ",a.jsx("span",{className:"react",children:"Funcionalidades"}),":"]}),a.jsxs("p",{children:[a.jsx("img",{src:ut,alt:""}),a.jsx("span",{children:"Criar novos cards com transações"})]}),a.jsxs("p",{children:[a.jsx("img",{src:ut,alt:""}),a.jsx("span",{children:"Adicionar data do dia em que a trasação é criada"})]}),a.jsxs("p",{children:[a.jsx("img",{src:ut,alt:""}),a.jsx("span",{children:"Calcular saldos de Entrada, Saída e Total"})]})]}),a.jsxs("div",{className:"techs",children:[a.jsxs("h3",{children:["Principais ",a.jsx("span",{className:"react",children:"Tecnologias"}),":"]}),a.jsxs("p",{children:[a.jsx("img",{src:ut,alt:""}),a.jsx("span",{children:"Javascript"})]}),a.jsxs("p",{children:[a.jsx("img",{src:ut,alt:""}),a.jsx("span",{children:"Typescript"})]}),a.jsxs("p",{children:[a.jsx("img",{src:ut,alt:""}),a.jsx("span",{children:"React"})]}),a.jsxs("p",{children:[a.jsx("img",{src:ut,alt:""}),a.jsx("span",{children:"HTML"})]}),a.jsxs("p",{children:[a.jsx("img",{src:ut,alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:ut,alt:""}),a.jsx("span",{children:"Styled-Components"})]})]}),a.jsxs("div",{className:"repository",children:[a.jsxs("h3",{children:["Onde ",a.jsx("span",{className:"react",children:"Encontrar"})," o Projeto:"]}),a.jsxs("a",{href:"https://github.com/JoaopvSalles/dtmoney",target:"_blank",children:[a.jsx("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 16 16",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"})}),"Ver Repositório"]})]})]})]})}const c3=b.div`
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
`,hn="/Portfolio/assets/react.svg",u3="/Portfolio/assets/ConversorDeMoedas.png";function d3(){const e=yr();return a.jsxs(c3,{children:[a.jsxs("div",{className:"return",onClick:()=>e(-1),children:[a.jsxs("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 24 24",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:[a.jsx("path",{fill:"none",d:"M0 0h24v24H0z"}),a.jsx("path",{d:"M17.77 3.77L16 2 6 12l10 10 1.77-1.77L9.54 12z"})]}),a.jsx("span",{children:"Voltar"})]}),a.jsxs("h2",{children:["Projeto ",a.jsx("span",{className:"react",children:"Conversor de Moedas"})]}),a.jsxs("div",{className:"project",children:[a.jsx("div",{className:"img",children:a.jsx("img",{src:u3,alt:""})}),a.jsxs("div",{className:"description",children:[a.jsxs("h3",{children:[a.jsx("span",{className:"react",children:"Descrição"})," do projeto:"]}),a.jsxs("p",{children:["Programa criado em HTML CSS PHP utilizando API com o intuito de praticar e desenvolver conhecimento nas tecnologias.",a.jsx("br",{}),'Digite um valor em Real e clique em "Converter", o programa irá fazer a conversão atualizada para o Dolar diretamente pela API do Banco do Brasil e mostrar o resultado na tela.']})]})]}),a.jsxs("div",{className:"details",children:[a.jsxs("div",{className:"functions",children:[a.jsxs("h3",{children:["Principais ",a.jsx("span",{className:"react",children:"Funcionalidades"}),":"]}),a.jsxs("p",{children:[a.jsx("img",{src:hn,alt:""}),a.jsx("span",{children:"Cálculo de conversão de Real para Dolar"})]}),a.jsxs("p",{children:[a.jsx("img",{src:hn,alt:""}),a.jsx("span",{children:"Integração com API do Banco do Brasil"})]})]}),a.jsxs("div",{className:"techs",children:[a.jsxs("h3",{children:["Principais ",a.jsx("span",{className:"react",children:"Tecnologias"}),":"]}),a.jsxs("p",{children:[a.jsx("img",{src:hn,alt:""}),a.jsx("span",{children:"PHP"})]}),a.jsxs("p",{children:[a.jsx("img",{src:hn,alt:""}),a.jsx("span",{children:"HTML"})]}),a.jsxs("p",{children:[a.jsx("img",{src:hn,alt:""}),a.jsx("span",{children:"CSS"})]})]}),a.jsxs("div",{className:"repository",children:[a.jsxs("h3",{children:["Onde ",a.jsx("span",{className:"react",children:"Encontrar"})," o Projeto:"]}),a.jsxs("a",{href:"https://github.com/JoaopvSalles/Project-PHP-ConversorDeMoedas",target:"_blank",children:[a.jsx("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 16 16",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"})}),"Ver Repositório"]})]})]})]})}const f3=b.div`
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
`;function p3(){const e=yr();return a.jsxs(f3,{children:[a.jsxs("div",{className:"return",onClick:()=>e(-1),children:[a.jsxs("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 24 24",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:[a.jsx("path",{fill:"none",d:"M0 0h24v24H0z"}),a.jsx("path",{d:"M17.77 3.77L16 2 6 12l10 10 1.77-1.77L9.54 12z"})]}),a.jsx("span",{children:"Voltar"})]}),a.jsxs("h2",{children:["Projeto ",a.jsx("span",{className:"react",children:"Nome Projeto"})]}),a.jsxs("div",{className:"project",children:[a.jsx("div",{className:"img",children:a.jsx("img",{src:"../../public/EmBreve.png",alt:""})}),a.jsxs("div",{className:"description",children:[a.jsxs("h3",{children:[a.jsx("span",{className:"react",children:"Descrição"})," do projeto:"]}),a.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus animi cumque deserunt praesentium alias tenetur quas ab quaerat, possimus pariatur? Neque, facere provident quisquam cum veniam sed eveniet soluta a"})]})]}),a.jsxs("div",{className:"details",children:[a.jsxs("div",{className:"functions",children:[a.jsxs("h3",{children:["Principais ",a.jsx("span",{className:"react",children:"Funcionalidades"}),":"]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]})]}),a.jsxs("div",{className:"techs",children:[a.jsxs("h3",{children:["Principais ",a.jsx("span",{className:"react",children:"Tecnologias"}),":"]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]})]}),a.jsxs("div",{className:"repository",children:[a.jsxs("h3",{children:["Onde ",a.jsx("span",{className:"react",children:"Encontrar"})," o Projeto:"]}),a.jsxs("a",{href:"https://github.com/JoaopvSalles",target:"_blank",children:[a.jsx("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 16 16",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"})}),"Ver Repositório"]})]})]})]})}const h3=b.div`
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
`;function m3(){const e=yr();return a.jsxs(h3,{children:[a.jsxs("div",{className:"return",onClick:()=>e(-1),children:[a.jsxs("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 24 24",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:[a.jsx("path",{fill:"none",d:"M0 0h24v24H0z"}),a.jsx("path",{d:"M17.77 3.77L16 2 6 12l10 10 1.77-1.77L9.54 12z"})]}),a.jsx("span",{children:"Voltar"})]}),a.jsxs("h2",{children:["Projeto ",a.jsx("span",{className:"react",children:"Nome Projeto"})]}),a.jsxs("div",{className:"project",children:[a.jsx("div",{className:"img",children:a.jsx("img",{src:"../../public/EmBreve.png",alt:""})}),a.jsxs("div",{className:"description",children:[a.jsxs("h3",{children:[a.jsx("span",{className:"react",children:"Descrição"})," do projeto:"]}),a.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus animi cumque deserunt praesentium alias tenetur quas ab quaerat, possimus pariatur? Neque, facere provident quisquam cum veniam sed eveniet soluta a"})]})]}),a.jsxs("div",{className:"details",children:[a.jsxs("div",{className:"functions",children:[a.jsxs("h3",{children:["Principais ",a.jsx("span",{className:"react",children:"Funcionalidades"}),":"]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]})]}),a.jsxs("div",{className:"techs",children:[a.jsxs("h3",{children:["Principais ",a.jsx("span",{className:"react",children:"Tecnologias"}),":"]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]})]}),a.jsxs("div",{className:"repository",children:[a.jsxs("h3",{children:["Onde ",a.jsx("span",{className:"react",children:"Encontrar"})," o Projeto:"]}),a.jsxs("a",{href:"https://github.com/JoaopvSalles",target:"_blank",children:[a.jsx("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 16 16",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"})}),"Ver Repositório"]})]})]})]})}const g3=b.div`
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
`;function v3(){const e=yr();return a.jsxs(g3,{children:[a.jsxs("div",{className:"return",onClick:()=>e(-1),children:[a.jsxs("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 24 24",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:[a.jsx("path",{fill:"none",d:"M0 0h24v24H0z"}),a.jsx("path",{d:"M17.77 3.77L16 2 6 12l10 10 1.77-1.77L9.54 12z"})]}),a.jsx("span",{children:"Voltar"})]}),a.jsxs("h2",{children:["Projeto ",a.jsx("span",{className:"react",children:"Nome Projeto"})]}),a.jsxs("div",{className:"project",children:[a.jsx("div",{className:"img",children:a.jsx("img",{src:"../../public/EmBreve.png",alt:""})}),a.jsxs("div",{className:"description",children:[a.jsxs("h3",{children:[a.jsx("span",{className:"react",children:"Descrição"})," do projeto:"]}),a.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus animi cumque deserunt praesentium alias tenetur quas ab quaerat, possimus pariatur? Neque, facere provident quisquam cum veniam sed eveniet soluta a"})]})]}),a.jsxs("div",{className:"details",children:[a.jsxs("div",{className:"functions",children:[a.jsxs("h3",{children:["Principais ",a.jsx("span",{className:"react",children:"Funcionalidades"}),":"]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]})]}),a.jsxs("div",{className:"techs",children:[a.jsxs("h3",{children:["Principais ",a.jsx("span",{className:"react",children:"Tecnologias"}),":"]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]})]}),a.jsxs("div",{className:"repository",children:[a.jsxs("h3",{children:["Onde ",a.jsx("span",{className:"react",children:"Encontrar"})," o Projeto:"]}),a.jsxs("a",{href:"https://github.com/JoaopvSalles",target:"_blank",children:[a.jsx("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 16 16",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"})}),"Ver Repositório"]})]})]})]})}class oi{constructor(t=0,r="Network Error"){this.status=t,this.text=r}}const y3=()=>{if(!(typeof localStorage>"u"))return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,t)=>Promise.resolve(localStorage.setItem(e,t)),remove:e=>Promise.resolve(localStorage.removeItem(e))}},ce={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:y3()},$s=e=>e?typeof e=="string"?{publicKey:e}:e.toString()==="[object Object]"?e:{}:{},x3=(e,t="https://api.emailjs.com")=>{if(!e)return;const r=$s(e);ce.publicKey=r.publicKey,ce.blockHeadless=r.blockHeadless,ce.storageProvider=r.storageProvider,ce.blockList=r.blockList,ce.limitRate=r.limitRate,ce.origin=r.origin||t},m0=async(e,t,r={})=>{const n=await fetch(ce.origin+e,{method:"POST",headers:r,body:t}),i=await n.text(),o=new oi(n.status,i);if(n.ok)return o;throw o},g0=(e,t,r)=>{if(!e||typeof e!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||typeof t!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!r||typeof r!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},w3=e=>{if(e&&e.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},v0=e=>e.webdriver||!e.languages||e.languages.length===0,y0=()=>new oi(451,"Unavailable For Headless Browser"),k3=(e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if(typeof t!="string")throw"The BlockList watchVariable has to be a string"},j3=e=>{var t;return!((t=e.list)!=null&&t.length)||!e.watchVariable},S3=(e,t)=>e instanceof FormData?e.get(t):e[t],x0=(e,t)=>{if(j3(e))return!1;k3(e.list,e.watchVariable);const r=S3(t,e.watchVariable);return typeof r!="string"?!1:e.list.includes(r)},w0=()=>new oi(403,"Forbidden"),C3=(e,t)=>{if(typeof e!="number"||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&typeof t!="string")throw"The LimitRate ID has to be a non-empty string"},E3=async(e,t,r)=>{const n=Number(await r.get(e)||0);return t-Date.now()+n},k0=async(e,t,r)=>{if(!t.throttle||!r)return!1;C3(t.throttle,t.id);const n=t.id||e;return await E3(n,t.throttle,r)>0?!0:(await r.set(n,Date.now().toString()),!1)},j0=()=>new oi(429,"Too Many Requests"),P3=async(e,t,r,n)=>{const i=$s(n),o=i.publicKey||ce.publicKey,l=i.blockHeadless||ce.blockHeadless,s=i.storageProvider||ce.storageProvider,c={...ce.blockList,...i.blockList},u={...ce.limitRate,...i.limitRate};return l&&v0(navigator)?Promise.reject(y0()):(g0(o,e,t),w3(r),r&&x0(c,r)?Promise.reject(w0()):await k0(location.pathname,u,s)?Promise.reject(j0()):m0("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:o,service_id:e,template_id:t,template_params:r}),{"Content-type":"application/json"}))},N3=e=>{if(!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},_3=e=>typeof e=="string"?document.querySelector(e):e,T3=async(e,t,r,n)=>{const i=$s(n),o=i.publicKey||ce.publicKey,l=i.blockHeadless||ce.blockHeadless,s=ce.storageProvider||i.storageProvider,c={...ce.blockList,...i.blockList},u={...ce.limitRate,...i.limitRate};if(l&&v0(navigator))return Promise.reject(y0());const f=_3(r);g0(o,e,t),N3(f);const h=new FormData(f);return x0(c,h)?Promise.reject(w0()):await k0(location.pathname,u,s)?Promise.reject(j0()):(h.append("lib_version","4.4.1"),h.append("service_id",e),h.append("template_id",t),h.append("user_id",o),m0("/api/v1.0/email/send-form",h))},z3={init:x3,send:P3,sendForm:T3,EmailJSResponseStatus:oi},R3=b.div`
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
`;function L3(){const[e,t]=E.useState(""),[r,n]=E.useState(""),[i,o]=E.useState(""),[l,s]=E.useState(!1),[c,u]=E.useState(""),f=h=>{h.preventDefault(),s(!0);const g={from_name:e,from_email:r,message:i};z3.send("service_0q54xn8","template_jc9eaws",g,"FhikmvDk7JNVakgwA").then(()=>{u("E-mail enviado com sucesso!"),t(""),n(""),o("")}).catch(v=>{u("Erro ao enviar o e-mail. Tente novamente."),console.error("Erro ao enviar o e-mail:",v)}).finally(()=>{s(!1)})};return a.jsxs(R3,{children:[a.jsx("title",{children:"João - Contato"}),a.jsxs("header",{children:[a.jsxs("h2",{children:["Entre em ",a.jsx("span",{className:"react",children:"contato"})," comigo:"]}),a.jsx("p",{children:"Sinta-se à vontade para entrar em contato comigo pelas redes sociais ou enviando um email."})]}),a.jsxs("section",{className:"redes",children:[a.jsxs("h3",{children:["Minhas ",a.jsx("span",{className:"react",children:"Redes Sociais"}),":"]}),a.jsxs("a",{href:"https://www.linkedin.com/in/joaovecchio/",target:"_blank",children:[a.jsx("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 16 16",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"})}),"LinkeIn"]}),a.jsxs("a",{href:"https://github.com/JoaopvSalles",target:"_blank",children:[a.jsx("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 16 16",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"})}),"Github"]})]}),a.jsxs("section",{className:"email",children:[a.jsxs("h3",{children:["Me envie um ",a.jsx("span",{className:"react",children:"Email"}),":"]}),a.jsxs("form",{onSubmit:f,children:[a.jsx("label",{htmlFor:"name",children:"Seu nome"}),a.jsx("input",{type:"text",id:"name",value:e,onChange:h=>t(h.target.value),placeholder:"Seu nome",required:!0}),a.jsx("label",{htmlFor:"email",children:"Seu email"}),a.jsx("input",{type:"email",id:"email",value:r,onChange:h=>n(h.target.value),placeholder:"exemplo@email.com",required:!0}),a.jsx("label",{htmlFor:"message",children:"Mensagem"}),a.jsx("textarea",{id:"message",value:i,onChange:h=>o(h.target.value),placeholder:"Olá, ...",required:!0}),a.jsxs("button",{type:"submit",disabled:l,children:[l?"Enviando...":"Enviar email",a.jsx("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 512 512",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"})})]})]}),c&&a.jsx("p",{className:`status-message ${c.includes("sucesso")?"success":"error"}`,children:c})]})]})}const M3=b.div`
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
`;function I3(){return a.jsx(M3,{children:a.jsx("div",{children:a.jsxs("p",{children:["Copyrights © 2023 - Developed by João ",a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",className:"iconify iconify--logos",width:"35.93",height:"32",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 228",children:a.jsx("path",{d:"M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"})})," v3.1.0"]})})})}function b3(e,t){const[r,n]=E.useState(()=>{const i=localStorage.getItem(e);return i?JSON.parse(i):t});return E.useEffect(()=>{localStorage.setItem(e,JSON.stringify(r))},[e,r]),[r,n]}const O3=qh`
 
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
`,$3={title:"light",colors:{white:"#ffffff",black:"#000000",react:"#00D8FF",border:"#aaaaaa",background:"#FFFAFA"}},yu={title:"dark",colors:{white:"#000000",black:"#ffffff",react:"#00D8FF",border:"#aaaaaa",background:"#282a36"}};function D3(){const[e,t]=b3("theme",yu),r=()=>{t(e.title==="light"?yu:$3)};return a.jsx(Vp,{children:a.jsxs(Yh,{theme:e,children:[a.jsx(Cm,{toggleTheme:r}),a.jsxs($p,{children:[a.jsx(et,{path:"/",element:a.jsx(Bm,{})}),a.jsx(et,{path:"/projects",element:a.jsx(t3,{})}),a.jsx(et,{path:"/projects/1",element:a.jsx(o3,{})}),a.jsx(et,{path:"/projects/2",element:a.jsx(s3,{})}),a.jsx(et,{path:"/projects/3",element:a.jsx(d3,{})}),a.jsx(et,{path:"/projects/4",element:a.jsx(p3,{})}),a.jsx(et,{path:"/projects/5",element:a.jsx(m3,{})}),a.jsx(et,{path:"/projects/6",element:a.jsx(v3,{})}),a.jsx(et,{path:"/contact",element:a.jsx(L3,{})})]}),a.jsx(I3,{}),a.jsx(O3,{})]})})}_l.createRoot(document.getElementById("root")).render(a.jsx(H.StrictMode,{children:a.jsx(D3,{})}));
