function x0(e,t){for(var r=0;r<t.length;r++){const n=t[r];if(typeof n!="string"&&!Array.isArray(n)){for(const i in n)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(n,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>n[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();function w0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var mu={exports:{}},vo={},gu={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xn=Symbol.for("react.element"),k0=Symbol.for("react.portal"),j0=Symbol.for("react.fragment"),S0=Symbol.for("react.strict_mode"),C0=Symbol.for("react.profiler"),E0=Symbol.for("react.provider"),P0=Symbol.for("react.context"),N0=Symbol.for("react.forward_ref"),_0=Symbol.for("react.suspense"),T0=Symbol.for("react.memo"),z0=Symbol.for("react.lazy"),Ms=Symbol.iterator;function R0(e){return e===null||typeof e!="object"?null:(e=Ms&&e[Ms]||e["@@iterator"],typeof e=="function"?e:null)}var vu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},yu=Object.assign,xu={};function Gr(e,t,r){this.props=e,this.context=t,this.refs=xu,this.updater=r||vu}Gr.prototype.isReactComponent={};Gr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Gr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function wu(){}wu.prototype=Gr.prototype;function ba(e,t,r){this.props=e,this.context=t,this.refs=xu,this.updater=r||vu}var Ma=ba.prototype=new wu;Ma.constructor=ba;yu(Ma,Gr.prototype);Ma.isPureReactComponent=!0;var Is=Array.isArray,ku=Object.prototype.hasOwnProperty,Ia={current:null},ju={key:!0,ref:!0,__self:!0,__source:!0};function Su(e,t,r){var n,i={},o=null,l=null;if(t!=null)for(n in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)ku.call(t,n)&&!ju.hasOwnProperty(n)&&(i[n]=t[n]);var s=arguments.length-2;if(s===1)i.children=r;else if(1<s){for(var c=Array(s),u=0;u<s;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(n in s=e.defaultProps,s)i[n]===void 0&&(i[n]=s[n]);return{$$typeof:Xn,type:e,key:o,ref:l,props:i,_owner:Ia.current}}function L0(e,t){return{$$typeof:Xn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Oa(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xn}function b0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var Os=/\/+/g;function Uo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?b0(""+e.key):t.toString(36)}function ki(e,t,r,n,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Xn:case k0:l=!0}}if(l)return l=e,i=i(l),e=n===""?"."+Uo(l,0):n,Is(i)?(r="",e!=null&&(r=e.replace(Os,"$&/")+"/"),ki(i,t,r,"",function(u){return u})):i!=null&&(Oa(i)&&(i=L0(i,r+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Os,"$&/")+"/")+e)),t.push(i)),1;if(l=0,n=n===""?".":n+":",Is(e))for(var s=0;s<e.length;s++){o=e[s];var c=n+Uo(o,s);l+=ki(o,t,r,c,i)}else if(c=R0(e),typeof c=="function")for(e=c.call(e),s=0;!(o=e.next()).done;)o=o.value,c=n+Uo(o,s++),l+=ki(o,t,r,c,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function ni(e,t,r){if(e==null)return e;var n=[],i=0;return ki(e,n,"","",function(o){return t.call(r,o,i++)}),n}function M0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var we={current:null},ji={transition:null},I0={ReactCurrentDispatcher:we,ReactCurrentBatchConfig:ji,ReactCurrentOwner:Ia};M.Children={map:ni,forEach:function(e,t,r){ni(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return ni(e,function(){t++}),t},toArray:function(e){return ni(e,function(t){return t})||[]},only:function(e){if(!Oa(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=Gr;M.Fragment=j0;M.Profiler=C0;M.PureComponent=ba;M.StrictMode=S0;M.Suspense=_0;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I0;M.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=yu({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=Ia.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)ku.call(t,c)&&!ju.hasOwnProperty(c)&&(n[c]=t[c]===void 0&&s!==void 0?s[c]:t[c])}var c=arguments.length-2;if(c===1)n.children=r;else if(1<c){s=Array(c);for(var u=0;u<c;u++)s[u]=arguments[u+2];n.children=s}return{$$typeof:Xn,type:e.type,key:i,ref:o,props:n,_owner:l}};M.createContext=function(e){return e={$$typeof:P0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:E0,_context:e},e.Consumer=e};M.createElement=Su;M.createFactory=function(e){var t=Su.bind(null,e);return t.type=e,t};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:N0,render:e}};M.isValidElement=Oa;M.lazy=function(e){return{$$typeof:z0,_payload:{_status:-1,_result:e},_init:M0}};M.memo=function(e,t){return{$$typeof:T0,type:e,compare:t===void 0?null:t}};M.startTransition=function(e){var t=ji.transition;ji.transition={};try{e()}finally{ji.transition=t}};M.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};M.useCallback=function(e,t){return we.current.useCallback(e,t)};M.useContext=function(e){return we.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return we.current.useDeferredValue(e)};M.useEffect=function(e,t){return we.current.useEffect(e,t)};M.useId=function(){return we.current.useId()};M.useImperativeHandle=function(e,t,r){return we.current.useImperativeHandle(e,t,r)};M.useInsertionEffect=function(e,t){return we.current.useInsertionEffect(e,t)};M.useLayoutEffect=function(e,t){return we.current.useLayoutEffect(e,t)};M.useMemo=function(e,t){return we.current.useMemo(e,t)};M.useReducer=function(e,t,r){return we.current.useReducer(e,t,r)};M.useRef=function(e){return we.current.useRef(e)};M.useState=function(e){return we.current.useState(e)};M.useSyncExternalStore=function(e,t,r){return we.current.useSyncExternalStore(e,t,r)};M.useTransition=function(){return we.current.useTransition()};M.version="18.2.0";gu.exports=M;var E=gu.exports;const H=w0(E),O0=x0({__proto__:null,default:H},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $0=E,D0=Symbol.for("react.element"),F0=Symbol.for("react.fragment"),A0=Object.prototype.hasOwnProperty,B0=$0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,U0={key:!0,ref:!0,__self:!0,__source:!0};function Cu(e,t,r){var n,i={},o=null,l=null;r!==void 0&&(o=""+r),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(n in t)A0.call(t,n)&&!U0.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)i[n]===void 0&&(i[n]=t[n]);return{$$typeof:D0,type:e,key:o,ref:l,props:i,_owner:B0.current}}vo.Fragment=F0;vo.jsx=Cu;vo.jsxs=Cu;mu.exports=vo;var a=mu.exports,Sl={},Eu={exports:{}},be={},Pu={exports:{}},Nu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,z){var R=N.length;N.push(z);e:for(;0<R;){var W=R-1>>>1,Y=N[W];if(0<i(Y,z))N[W]=z,N[R]=Y,R=W;else break e}}function r(N){return N.length===0?null:N[0]}function n(N){if(N.length===0)return null;var z=N[0],R=N.pop();if(R!==z){N[0]=R;e:for(var W=0,Y=N.length,st=Y>>>1;W<st;){var Ne=2*(W+1)-1,wt=N[Ne],_e=Ne+1,Ie=N[_e];if(0>i(wt,R))_e<Y&&0>i(Ie,wt)?(N[W]=Ie,N[_e]=R,W=_e):(N[W]=wt,N[Ne]=R,W=Ne);else if(_e<Y&&0>i(Ie,R))N[W]=Ie,N[_e]=R,W=_e;else break e}}return z}function i(N,z){var R=N.sortIndex-z.sortIndex;return R!==0?R:N.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var c=[],u=[],f=1,h=null,g=3,v=!1,y=!1,w=!1,P=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(N){for(var z=r(u);z!==null;){if(z.callback===null)n(u);else if(z.startTime<=N)n(u),z.sortIndex=z.expirationTime,t(c,z);else break;z=r(u)}}function x(N){if(w=!1,m(N),!y)if(r(c)!==null)y=!0,at(k);else{var z=r(u);z!==null&&ve(x,z.startTime-N)}}function k(N,z){y=!1,w&&(w=!1,p(T),T=-1),v=!0;var R=g;try{for(m(z),h=r(c);h!==null&&(!(h.expirationTime>z)||N&&!ge());){var W=h.callback;if(typeof W=="function"){h.callback=null,g=h.priorityLevel;var Y=W(h.expirationTime<=z);z=e.unstable_now(),typeof Y=="function"?h.callback=Y:h===r(c)&&n(c),m(z)}else n(c);h=r(c)}if(h!==null)var st=!0;else{var Ne=r(u);Ne!==null&&ve(x,Ne.startTime-z),st=!1}return st}finally{h=null,g=R,v=!1}}var j=!1,S=null,T=-1,F=5,b=-1;function ge(){return!(e.unstable_now()-b<F)}function ot(){if(S!==null){var N=e.unstable_now();b=N;var z=!0;try{z=S(!0,N)}finally{z?lt():(j=!1,S=null)}}else j=!1}var lt;if(typeof d=="function")lt=function(){d(ot)};else if(typeof MessageChannel<"u"){var mr=new MessageChannel,He=mr.port2;mr.port1.onmessage=ot,lt=function(){He.postMessage(null)}}else lt=function(){P(ot,0)};function at(N){S=N,j||(j=!0,lt())}function ve(N,z){T=P(function(){N(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,at(k))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return r(c)},e.unstable_next=function(N){switch(g){case 1:case 2:case 3:var z=3;break;default:z=g}var R=g;g=z;try{return N()}finally{g=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,z){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var R=g;g=N;try{return z()}finally{g=R}},e.unstable_scheduleCallback=function(N,z,R){var W=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?W+R:W):R=W,N){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=R+Y,N={id:f++,callback:z,priorityLevel:N,startTime:R,expirationTime:Y,sortIndex:-1},R>W?(N.sortIndex=R,t(u,N),r(c)===null&&N===r(u)&&(w?(p(T),T=-1):w=!0,ve(x,R-W))):(N.sortIndex=Y,t(c,N),y||v||(y=!0,at(k))),N},e.unstable_shouldYield=ge,e.unstable_wrapCallback=function(N){var z=g;return function(){var R=g;g=z;try{return N.apply(this,arguments)}finally{g=R}}}})(Nu);Pu.exports=Nu;var H0=Pu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _u=E,Le=H0;function C(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Tu=new Set,Pn={};function ur(e,t){Fr(e,t),Fr(e+"Capture",t)}function Fr(e,t){for(Pn[e]=t,e=0;e<t.length;e++)Tu.add(t[e])}var mt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cl=Object.prototype.hasOwnProperty,V0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$s={},Ds={};function W0(e){return Cl.call(Ds,e)?!0:Cl.call($s,e)?!1:V0.test(e)?Ds[e]=!0:($s[e]=!0,!1)}function Z0(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Q0(e,t,r,n){if(t===null||typeof t>"u"||Z0(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ke(e,t,r,n,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var de={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){de[e]=new ke(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];de[t]=new ke(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){de[e]=new ke(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){de[e]=new ke(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){de[e]=new ke(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){de[e]=new ke(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){de[e]=new ke(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){de[e]=new ke(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){de[e]=new ke(e,5,!1,e.toLowerCase(),null,!1,!1)});var $a=/[\-:]([a-z])/g;function Da(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace($a,Da);de[t]=new ke(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace($a,Da);de[t]=new ke(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace($a,Da);de[t]=new ke(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){de[e]=new ke(e,1,!1,e.toLowerCase(),null,!1,!1)});de.xlinkHref=new ke("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){de[e]=new ke(e,1,!1,e.toLowerCase(),null,!0,!0)});function Fa(e,t,r,n){var i=de.hasOwnProperty(t)?de[t]:null;(i!==null?i.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Q0(t,r,i,n)&&(r=null),n||i===null?W0(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(t=i.attributeName,n=i.attributeNamespace,r===null?e.removeAttribute(t):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var xt=_u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ii=Symbol.for("react.element"),xr=Symbol.for("react.portal"),wr=Symbol.for("react.fragment"),Aa=Symbol.for("react.strict_mode"),El=Symbol.for("react.profiler"),zu=Symbol.for("react.provider"),Ru=Symbol.for("react.context"),Ba=Symbol.for("react.forward_ref"),Pl=Symbol.for("react.suspense"),Nl=Symbol.for("react.suspense_list"),Ua=Symbol.for("react.memo"),Et=Symbol.for("react.lazy"),Lu=Symbol.for("react.offscreen"),Fs=Symbol.iterator;function rn(e){return e===null||typeof e!="object"?null:(e=Fs&&e[Fs]||e["@@iterator"],typeof e=="function"?e:null)}var K=Object.assign,Ho;function dn(e){if(Ho===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Ho=t&&t[1]||""}return`
`+Ho+e}var Vo=!1;function Wo(e,t){if(!e||Vo)return"";Vo=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var n=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){n=u}e.call(t.prototype)}else{try{throw Error()}catch(u){n=u}e()}}catch(u){if(u&&n&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=n.stack.split(`
`),l=i.length-1,s=o.length-1;1<=l&&0<=s&&i[l]!==o[s];)s--;for(;1<=l&&0<=s;l--,s--)if(i[l]!==o[s]){if(l!==1||s!==1)do if(l--,s--,0>s||i[l]!==o[s]){var c=`
`+i[l].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=l&&0<=s);break}}}finally{Vo=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?dn(e):""}function X0(e){switch(e.tag){case 5:return dn(e.type);case 16:return dn("Lazy");case 13:return dn("Suspense");case 19:return dn("SuspenseList");case 0:case 2:case 15:return e=Wo(e.type,!1),e;case 11:return e=Wo(e.type.render,!1),e;case 1:return e=Wo(e.type,!0),e;default:return""}}function _l(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case wr:return"Fragment";case xr:return"Portal";case El:return"Profiler";case Aa:return"StrictMode";case Pl:return"Suspense";case Nl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ru:return(e.displayName||"Context")+".Consumer";case zu:return(e._context.displayName||"Context")+".Provider";case Ba:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ua:return t=e.displayName||null,t!==null?t:_l(e.type)||"Memo";case Et:t=e._payload,e=e._init;try{return _l(e(t))}catch{}}return null}function K0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return _l(t);case 8:return t===Aa?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ht(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function bu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Y0(e){var t=bu(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,o=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){n=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(l){n=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function oi(e){e._valueTracker||(e._valueTracker=Y0(e))}function Mu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=bu(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function Di(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Tl(e,t){var r=t.checked;return K({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function As(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=Ht(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Iu(e,t){t=t.checked,t!=null&&Fa(e,"checked",t,!1)}function zl(e,t){Iu(e,t);var r=Ht(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Rl(e,t.type,r):t.hasOwnProperty("defaultValue")&&Rl(e,t.type,Ht(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Bs(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Rl(e,t,r){(t!=="number"||Di(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var fn=Array.isArray;function br(e,t,r,n){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&n&&(e[r].defaultSelected=!0)}else{for(r=""+Ht(r),t=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ll(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(C(91));return K({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Us(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(C(92));if(fn(r)){if(1<r.length)throw Error(C(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Ht(r)}}function Ou(e,t){var r=Ht(t.value),n=Ht(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function Hs(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function $u(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function bl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?$u(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var li,Du=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,i){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(li=li||document.createElement("div"),li.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=li.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Nn(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var gn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},G0=["Webkit","ms","Moz","O"];Object.keys(gn).forEach(function(e){G0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),gn[t]=gn[e]})});function Fu(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||gn.hasOwnProperty(e)&&gn[e]?(""+t).trim():t+"px"}function Au(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,i=Fu(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,i):e[r]=i}}var J0=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ml(e,t){if(t){if(J0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(C(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(C(61))}if(t.style!=null&&typeof t.style!="object")throw Error(C(62))}}function Il(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ol=null;function Ha(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var $l=null,Mr=null,Ir=null;function Vs(e){if(e=Gn(e)){if(typeof $l!="function")throw Error(C(280));var t=e.stateNode;t&&(t=jo(t),$l(e.stateNode,e.type,t))}}function Bu(e){Mr?Ir?Ir.push(e):Ir=[e]:Mr=e}function Uu(){if(Mr){var e=Mr,t=Ir;if(Ir=Mr=null,Vs(e),t)for(e=0;e<t.length;e++)Vs(t[e])}}function Hu(e,t){return e(t)}function Vu(){}var Zo=!1;function Wu(e,t,r){if(Zo)return e(t,r);Zo=!0;try{return Hu(e,t,r)}finally{Zo=!1,(Mr!==null||Ir!==null)&&(Vu(),Uu())}}function _n(e,t){var r=e.stateNode;if(r===null)return null;var n=jo(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(C(231,t,typeof r));return r}var Dl=!1;if(mt)try{var nn={};Object.defineProperty(nn,"passive",{get:function(){Dl=!0}}),window.addEventListener("test",nn,nn),window.removeEventListener("test",nn,nn)}catch{Dl=!1}function q0(e,t,r,n,i,o,l,s,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(r,u)}catch(f){this.onError(f)}}var vn=!1,Fi=null,Ai=!1,Fl=null,ef={onError:function(e){vn=!0,Fi=e}};function tf(e,t,r,n,i,o,l,s,c){vn=!1,Fi=null,q0.apply(ef,arguments)}function rf(e,t,r,n,i,o,l,s,c){if(tf.apply(this,arguments),vn){if(vn){var u=Fi;vn=!1,Fi=null}else throw Error(C(198));Ai||(Ai=!0,Fl=u)}}function dr(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Zu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ws(e){if(dr(e)!==e)throw Error(C(188))}function nf(e){var t=e.alternate;if(!t){if(t=dr(e),t===null)throw Error(C(188));return t!==e?null:e}for(var r=e,n=t;;){var i=r.return;if(i===null)break;var o=i.alternate;if(o===null){if(n=i.return,n!==null){r=n;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===r)return Ws(i),e;if(o===n)return Ws(i),t;o=o.sibling}throw Error(C(188))}if(r.return!==n.return)r=i,n=o;else{for(var l=!1,s=i.child;s;){if(s===r){l=!0,r=i,n=o;break}if(s===n){l=!0,n=i,r=o;break}s=s.sibling}if(!l){for(s=o.child;s;){if(s===r){l=!0,r=o,n=i;break}if(s===n){l=!0,n=o,r=i;break}s=s.sibling}if(!l)throw Error(C(189))}}if(r.alternate!==n)throw Error(C(190))}if(r.tag!==3)throw Error(C(188));return r.stateNode.current===r?e:t}function Qu(e){return e=nf(e),e!==null?Xu(e):null}function Xu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Xu(e);if(t!==null)return t;e=e.sibling}return null}var Ku=Le.unstable_scheduleCallback,Zs=Le.unstable_cancelCallback,of=Le.unstable_shouldYield,lf=Le.unstable_requestPaint,q=Le.unstable_now,af=Le.unstable_getCurrentPriorityLevel,Va=Le.unstable_ImmediatePriority,Yu=Le.unstable_UserBlockingPriority,Bi=Le.unstable_NormalPriority,sf=Le.unstable_LowPriority,Gu=Le.unstable_IdlePriority,yo=null,nt=null;function cf(e){if(nt&&typeof nt.onCommitFiberRoot=="function")try{nt.onCommitFiberRoot(yo,e,void 0,(e.current.flags&128)===128)}catch{}}var Xe=Math.clz32?Math.clz32:ff,uf=Math.log,df=Math.LN2;function ff(e){return e>>>=0,e===0?32:31-(uf(e)/df|0)|0}var ai=64,si=4194304;function pn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ui(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,i=e.suspendedLanes,o=e.pingedLanes,l=r&268435455;if(l!==0){var s=l&~i;s!==0?n=pn(s):(o&=l,o!==0&&(n=pn(o)))}else l=r&~i,l!==0?n=pn(l):o!==0&&(n=pn(o));if(n===0)return 0;if(t!==0&&t!==n&&!(t&i)&&(i=n&-n,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-Xe(t),i=1<<r,n|=e[r],t&=~i;return n}function pf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hf(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Xe(o),s=1<<l,c=i[l];c===-1?(!(s&r)||s&n)&&(i[l]=pf(s,t)):c<=t&&(e.expiredLanes|=s),o&=~s}}function Al(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ju(){var e=ai;return ai<<=1,!(ai&4194240)&&(ai=64),e}function Qo(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Kn(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Xe(t),e[t]=r}function mf(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-Xe(r),o=1<<i;t[i]=0,n[i]=-1,e[i]=-1,r&=~o}}function Wa(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-Xe(r),i=1<<n;i&t|e[n]&t&&(e[n]|=t),r&=~i}}var D=0;function qu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var e1,Za,t1,r1,n1,Bl=!1,ci=[],bt=null,Mt=null,It=null,Tn=new Map,zn=new Map,Nt=[],gf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qs(e,t){switch(e){case"focusin":case"focusout":bt=null;break;case"dragenter":case"dragleave":Mt=null;break;case"mouseover":case"mouseout":It=null;break;case"pointerover":case"pointerout":Tn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":zn.delete(t.pointerId)}}function on(e,t,r,n,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Gn(t),t!==null&&Za(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function vf(e,t,r,n,i){switch(t){case"focusin":return bt=on(bt,e,t,r,n,i),!0;case"dragenter":return Mt=on(Mt,e,t,r,n,i),!0;case"mouseover":return It=on(It,e,t,r,n,i),!0;case"pointerover":var o=i.pointerId;return Tn.set(o,on(Tn.get(o)||null,e,t,r,n,i)),!0;case"gotpointercapture":return o=i.pointerId,zn.set(o,on(zn.get(o)||null,e,t,r,n,i)),!0}return!1}function i1(e){var t=Yt(e.target);if(t!==null){var r=dr(t);if(r!==null){if(t=r.tag,t===13){if(t=Zu(r),t!==null){e.blockedOn=t,n1(e.priority,function(){t1(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Si(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Ul(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);Ol=n,r.target.dispatchEvent(n),Ol=null}else return t=Gn(r),t!==null&&Za(t),e.blockedOn=r,!1;t.shift()}return!0}function Xs(e,t,r){Si(e)&&r.delete(t)}function yf(){Bl=!1,bt!==null&&Si(bt)&&(bt=null),Mt!==null&&Si(Mt)&&(Mt=null),It!==null&&Si(It)&&(It=null),Tn.forEach(Xs),zn.forEach(Xs)}function ln(e,t){e.blockedOn===t&&(e.blockedOn=null,Bl||(Bl=!0,Le.unstable_scheduleCallback(Le.unstable_NormalPriority,yf)))}function Rn(e){function t(i){return ln(i,e)}if(0<ci.length){ln(ci[0],e);for(var r=1;r<ci.length;r++){var n=ci[r];n.blockedOn===e&&(n.blockedOn=null)}}for(bt!==null&&ln(bt,e),Mt!==null&&ln(Mt,e),It!==null&&ln(It,e),Tn.forEach(t),zn.forEach(t),r=0;r<Nt.length;r++)n=Nt[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<Nt.length&&(r=Nt[0],r.blockedOn===null);)i1(r),r.blockedOn===null&&Nt.shift()}var Or=xt.ReactCurrentBatchConfig,Hi=!0;function xf(e,t,r,n){var i=D,o=Or.transition;Or.transition=null;try{D=1,Qa(e,t,r,n)}finally{D=i,Or.transition=o}}function wf(e,t,r,n){var i=D,o=Or.transition;Or.transition=null;try{D=4,Qa(e,t,r,n)}finally{D=i,Or.transition=o}}function Qa(e,t,r,n){if(Hi){var i=Ul(e,t,r,n);if(i===null)nl(e,t,n,Vi,r),Qs(e,n);else if(vf(i,e,t,r,n))n.stopPropagation();else if(Qs(e,n),t&4&&-1<gf.indexOf(e)){for(;i!==null;){var o=Gn(i);if(o!==null&&e1(o),o=Ul(e,t,r,n),o===null&&nl(e,t,n,Vi,r),o===i)break;i=o}i!==null&&n.stopPropagation()}else nl(e,t,n,null,r)}}var Vi=null;function Ul(e,t,r,n){if(Vi=null,e=Ha(n),e=Yt(e),e!==null)if(t=dr(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Zu(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Vi=e,null}function o1(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(af()){case Va:return 1;case Yu:return 4;case Bi:case sf:return 16;case Gu:return 536870912;default:return 16}default:return 16}}var zt=null,Xa=null,Ci=null;function l1(){if(Ci)return Ci;var e,t=Xa,r=t.length,n,i="value"in zt?zt.value:zt.textContent,o=i.length;for(e=0;e<r&&t[e]===i[e];e++);var l=r-e;for(n=1;n<=l&&t[r-n]===i[o-n];n++);return Ci=i.slice(e,1<n?1-n:void 0)}function Ei(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ui(){return!0}function Ks(){return!1}function Me(e){function t(r,n,i,o,l){this._reactName=r,this._targetInst=i,this.type=n,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(r=e[s],this[s]=r?r(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ui:Ks,this.isPropagationStopped=Ks,this}return K(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=ui)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=ui)},persist:function(){},isPersistent:ui}),t}var Jr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ka=Me(Jr),Yn=K({},Jr,{view:0,detail:0}),kf=Me(Yn),Xo,Ko,an,xo=K({},Yn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ya,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==an&&(an&&e.type==="mousemove"?(Xo=e.screenX-an.screenX,Ko=e.screenY-an.screenY):Ko=Xo=0,an=e),Xo)},movementY:function(e){return"movementY"in e?e.movementY:Ko}}),Ys=Me(xo),jf=K({},xo,{dataTransfer:0}),Sf=Me(jf),Cf=K({},Yn,{relatedTarget:0}),Yo=Me(Cf),Ef=K({},Jr,{animationName:0,elapsedTime:0,pseudoElement:0}),Pf=Me(Ef),Nf=K({},Jr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),_f=Me(Nf),Tf=K({},Jr,{data:0}),Gs=Me(Tf),zf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Lf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Lf[e])?!!t[e]:!1}function Ya(){return bf}var Mf=K({},Yn,{key:function(e){if(e.key){var t=zf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ei(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Rf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ya,charCode:function(e){return e.type==="keypress"?Ei(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ei(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),If=Me(Mf),Of=K({},xo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Js=Me(Of),$f=K({},Yn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ya}),Df=Me($f),Ff=K({},Jr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Af=Me(Ff),Bf=K({},xo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Uf=Me(Bf),Hf=[9,13,27,32],Ga=mt&&"CompositionEvent"in window,yn=null;mt&&"documentMode"in document&&(yn=document.documentMode);var Vf=mt&&"TextEvent"in window&&!yn,a1=mt&&(!Ga||yn&&8<yn&&11>=yn),qs=String.fromCharCode(32),ec=!1;function s1(e,t){switch(e){case"keyup":return Hf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function c1(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var kr=!1;function Wf(e,t){switch(e){case"compositionend":return c1(t);case"keypress":return t.which!==32?null:(ec=!0,qs);case"textInput":return e=t.data,e===qs&&ec?null:e;default:return null}}function Zf(e,t){if(kr)return e==="compositionend"||!Ga&&s1(e,t)?(e=l1(),Ci=Xa=zt=null,kr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return a1&&t.locale!=="ko"?null:t.data;default:return null}}var Qf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Qf[e.type]:t==="textarea"}function u1(e,t,r,n){Bu(n),t=Wi(t,"onChange"),0<t.length&&(r=new Ka("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var xn=null,Ln=null;function Xf(e){k1(e,0)}function wo(e){var t=Cr(e);if(Mu(t))return e}function Kf(e,t){if(e==="change")return t}var d1=!1;if(mt){var Go;if(mt){var Jo="oninput"in document;if(!Jo){var rc=document.createElement("div");rc.setAttribute("oninput","return;"),Jo=typeof rc.oninput=="function"}Go=Jo}else Go=!1;d1=Go&&(!document.documentMode||9<document.documentMode)}function nc(){xn&&(xn.detachEvent("onpropertychange",f1),Ln=xn=null)}function f1(e){if(e.propertyName==="value"&&wo(Ln)){var t=[];u1(t,Ln,e,Ha(e)),Wu(Xf,t)}}function Yf(e,t,r){e==="focusin"?(nc(),xn=t,Ln=r,xn.attachEvent("onpropertychange",f1)):e==="focusout"&&nc()}function Gf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return wo(Ln)}function Jf(e,t){if(e==="click")return wo(t)}function qf(e,t){if(e==="input"||e==="change")return wo(t)}function e2(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ge=typeof Object.is=="function"?Object.is:e2;function bn(e,t){if(Ge(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var i=r[n];if(!Cl.call(t,i)||!Ge(e[i],t[i]))return!1}return!0}function ic(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function oc(e,t){var r=ic(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=ic(r)}}function p1(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?p1(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function h1(){for(var e=window,t=Di();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Di(e.document)}return t}function Ja(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function t2(e){var t=h1(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&p1(r.ownerDocument.documentElement,r)){if(n!==null&&Ja(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,o=Math.min(n.start,i);n=n.end===void 0?o:Math.min(n.end,i),!e.extend&&o>n&&(i=n,n=o,o=i),i=oc(r,o);var l=oc(r,n);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>n?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var r2=mt&&"documentMode"in document&&11>=document.documentMode,jr=null,Hl=null,wn=null,Vl=!1;function lc(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Vl||jr==null||jr!==Di(n)||(n=jr,"selectionStart"in n&&Ja(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),wn&&bn(wn,n)||(wn=n,n=Wi(Hl,"onSelect"),0<n.length&&(t=new Ka("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=jr)))}function di(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Sr={animationend:di("Animation","AnimationEnd"),animationiteration:di("Animation","AnimationIteration"),animationstart:di("Animation","AnimationStart"),transitionend:di("Transition","TransitionEnd")},qo={},m1={};mt&&(m1=document.createElement("div").style,"AnimationEvent"in window||(delete Sr.animationend.animation,delete Sr.animationiteration.animation,delete Sr.animationstart.animation),"TransitionEvent"in window||delete Sr.transitionend.transition);function ko(e){if(qo[e])return qo[e];if(!Sr[e])return e;var t=Sr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in m1)return qo[e]=t[r];return e}var g1=ko("animationend"),v1=ko("animationiteration"),y1=ko("animationstart"),x1=ko("transitionend"),w1=new Map,ac="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wt(e,t){w1.set(e,t),ur(t,[e])}for(var el=0;el<ac.length;el++){var tl=ac[el],n2=tl.toLowerCase(),i2=tl[0].toUpperCase()+tl.slice(1);Wt(n2,"on"+i2)}Wt(g1,"onAnimationEnd");Wt(v1,"onAnimationIteration");Wt(y1,"onAnimationStart");Wt("dblclick","onDoubleClick");Wt("focusin","onFocus");Wt("focusout","onBlur");Wt(x1,"onTransitionEnd");Fr("onMouseEnter",["mouseout","mouseover"]);Fr("onMouseLeave",["mouseout","mouseover"]);Fr("onPointerEnter",["pointerout","pointerover"]);Fr("onPointerLeave",["pointerout","pointerover"]);ur("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ur("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ur("onBeforeInput",["compositionend","keypress","textInput","paste"]);ur("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ur("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ur("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),o2=new Set("cancel close invalid load scroll toggle".split(" ").concat(hn));function sc(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,rf(n,t,void 0,e),e.currentTarget=null}function k1(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],i=n.event;n=n.listeners;e:{var o=void 0;if(t)for(var l=n.length-1;0<=l;l--){var s=n[l],c=s.instance,u=s.currentTarget;if(s=s.listener,c!==o&&i.isPropagationStopped())break e;sc(i,s,u),o=c}else for(l=0;l<n.length;l++){if(s=n[l],c=s.instance,u=s.currentTarget,s=s.listener,c!==o&&i.isPropagationStopped())break e;sc(i,s,u),o=c}}}if(Ai)throw e=Fl,Ai=!1,Fl=null,e}function B(e,t){var r=t[Kl];r===void 0&&(r=t[Kl]=new Set);var n=e+"__bubble";r.has(n)||(j1(t,e,2,!1),r.add(n))}function rl(e,t,r){var n=0;t&&(n|=4),j1(r,e,n,t)}var fi="_reactListening"+Math.random().toString(36).slice(2);function Mn(e){if(!e[fi]){e[fi]=!0,Tu.forEach(function(r){r!=="selectionchange"&&(o2.has(r)||rl(r,!1,e),rl(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[fi]||(t[fi]=!0,rl("selectionchange",!1,t))}}function j1(e,t,r,n){switch(o1(t)){case 1:var i=xf;break;case 4:i=wf;break;default:i=Qa}r=i.bind(null,t,r,e),i=void 0,!Dl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):i!==void 0?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function nl(e,t,r,n,i){var o=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var l=n.tag;if(l===3||l===4){var s=n.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(l===4)for(l=n.return;l!==null;){var c=l.tag;if((c===3||c===4)&&(c=l.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;l=l.return}for(;s!==null;){if(l=Yt(s),l===null)return;if(c=l.tag,c===5||c===6){n=o=l;continue e}s=s.parentNode}}n=n.return}Wu(function(){var u=o,f=Ha(r),h=[];e:{var g=w1.get(e);if(g!==void 0){var v=Ka,y=e;switch(e){case"keypress":if(Ei(r)===0)break e;case"keydown":case"keyup":v=If;break;case"focusin":y="focus",v=Yo;break;case"focusout":y="blur",v=Yo;break;case"beforeblur":case"afterblur":v=Yo;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Ys;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Sf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Df;break;case g1:case v1:case y1:v=Pf;break;case x1:v=Af;break;case"scroll":v=kf;break;case"wheel":v=Uf;break;case"copy":case"cut":case"paste":v=_f;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Js}var w=(t&4)!==0,P=!w&&e==="scroll",p=w?g!==null?g+"Capture":null:g;w=[];for(var d=u,m;d!==null;){m=d;var x=m.stateNode;if(m.tag===5&&x!==null&&(m=x,p!==null&&(x=_n(d,p),x!=null&&w.push(In(d,x,m)))),P)break;d=d.return}0<w.length&&(g=new v(g,y,null,r,f),h.push({event:g,listeners:w}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",g&&r!==Ol&&(y=r.relatedTarget||r.fromElement)&&(Yt(y)||y[gt]))break e;if((v||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,v?(y=r.relatedTarget||r.toElement,v=u,y=y?Yt(y):null,y!==null&&(P=dr(y),y!==P||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=u),v!==y)){if(w=Ys,x="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(w=Js,x="onPointerLeave",p="onPointerEnter",d="pointer"),P=v==null?g:Cr(v),m=y==null?g:Cr(y),g=new w(x,d+"leave",v,r,f),g.target=P,g.relatedTarget=m,x=null,Yt(f)===u&&(w=new w(p,d+"enter",y,r,f),w.target=m,w.relatedTarget=P,x=w),P=x,v&&y)t:{for(w=v,p=y,d=0,m=w;m;m=gr(m))d++;for(m=0,x=p;x;x=gr(x))m++;for(;0<d-m;)w=gr(w),d--;for(;0<m-d;)p=gr(p),m--;for(;d--;){if(w===p||p!==null&&w===p.alternate)break t;w=gr(w),p=gr(p)}w=null}else w=null;v!==null&&cc(h,g,v,w,!1),y!==null&&P!==null&&cc(h,P,y,w,!0)}}e:{if(g=u?Cr(u):window,v=g.nodeName&&g.nodeName.toLowerCase(),v==="select"||v==="input"&&g.type==="file")var k=Kf;else if(tc(g))if(d1)k=qf;else{k=Gf;var j=Yf}else(v=g.nodeName)&&v.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(k=Jf);if(k&&(k=k(e,u))){u1(h,k,r,f);break e}j&&j(e,g,u),e==="focusout"&&(j=g._wrapperState)&&j.controlled&&g.type==="number"&&Rl(g,"number",g.value)}switch(j=u?Cr(u):window,e){case"focusin":(tc(j)||j.contentEditable==="true")&&(jr=j,Hl=u,wn=null);break;case"focusout":wn=Hl=jr=null;break;case"mousedown":Vl=!0;break;case"contextmenu":case"mouseup":case"dragend":Vl=!1,lc(h,r,f);break;case"selectionchange":if(r2)break;case"keydown":case"keyup":lc(h,r,f)}var S;if(Ga)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else kr?s1(e,r)&&(T="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(T="onCompositionStart");T&&(a1&&r.locale!=="ko"&&(kr||T!=="onCompositionStart"?T==="onCompositionEnd"&&kr&&(S=l1()):(zt=f,Xa="value"in zt?zt.value:zt.textContent,kr=!0)),j=Wi(u,T),0<j.length&&(T=new Gs(T,e,null,r,f),h.push({event:T,listeners:j}),S?T.data=S:(S=c1(r),S!==null&&(T.data=S)))),(S=Vf?Wf(e,r):Zf(e,r))&&(u=Wi(u,"onBeforeInput"),0<u.length&&(f=new Gs("onBeforeInput","beforeinput",null,r,f),h.push({event:f,listeners:u}),f.data=S))}k1(h,t)})}function In(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Wi(e,t){for(var r=t+"Capture",n=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=_n(e,r),o!=null&&n.unshift(In(e,o,i)),o=_n(e,t),o!=null&&n.push(In(e,o,i))),e=e.return}return n}function gr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function cc(e,t,r,n,i){for(var o=t._reactName,l=[];r!==null&&r!==n;){var s=r,c=s.alternate,u=s.stateNode;if(c!==null&&c===n)break;s.tag===5&&u!==null&&(s=u,i?(c=_n(r,o),c!=null&&l.unshift(In(r,c,s))):i||(c=_n(r,o),c!=null&&l.push(In(r,c,s)))),r=r.return}l.length!==0&&e.push({event:t,listeners:l})}var l2=/\r\n?/g,a2=/\u0000|\uFFFD/g;function uc(e){return(typeof e=="string"?e:""+e).replace(l2,`
`).replace(a2,"")}function pi(e,t,r){if(t=uc(t),uc(e)!==t&&r)throw Error(C(425))}function Zi(){}var Wl=null,Zl=null;function Ql(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Xl=typeof setTimeout=="function"?setTimeout:void 0,s2=typeof clearTimeout=="function"?clearTimeout:void 0,dc=typeof Promise=="function"?Promise:void 0,c2=typeof queueMicrotask=="function"?queueMicrotask:typeof dc<"u"?function(e){return dc.resolve(null).then(e).catch(u2)}:Xl;function u2(e){setTimeout(function(){throw e})}function il(e,t){var r=t,n=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(n===0){e.removeChild(i),Rn(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=i}while(r);Rn(t)}function Ot(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function fc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var qr=Math.random().toString(36).slice(2),rt="__reactFiber$"+qr,On="__reactProps$"+qr,gt="__reactContainer$"+qr,Kl="__reactEvents$"+qr,d2="__reactListeners$"+qr,f2="__reactHandles$"+qr;function Yt(e){var t=e[rt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[gt]||r[rt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=fc(e);e!==null;){if(r=e[rt])return r;e=fc(e)}return t}e=r,r=e.parentNode}return null}function Gn(e){return e=e[rt]||e[gt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Cr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function jo(e){return e[On]||null}var Yl=[],Er=-1;function Zt(e){return{current:e}}function V(e){0>Er||(e.current=Yl[Er],Yl[Er]=null,Er--)}function A(e,t){Er++,Yl[Er]=e.current,e.current=t}var Vt={},me=Zt(Vt),Ce=Zt(!1),nr=Vt;function Ar(e,t){var r=e.type.contextTypes;if(!r)return Vt;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in r)i[o]=t[o];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ee(e){return e=e.childContextTypes,e!=null}function Qi(){V(Ce),V(me)}function pc(e,t,r){if(me.current!==Vt)throw Error(C(168));A(me,t),A(Ce,r)}function S1(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var i in n)if(!(i in t))throw Error(C(108,K0(e)||"Unknown",i));return K({},r,n)}function Xi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Vt,nr=me.current,A(me,e),A(Ce,Ce.current),!0}function hc(e,t,r){var n=e.stateNode;if(!n)throw Error(C(169));r?(e=S1(e,t,nr),n.__reactInternalMemoizedMergedChildContext=e,V(Ce),V(me),A(me,e)):V(Ce),A(Ce,r)}var dt=null,So=!1,ol=!1;function C1(e){dt===null?dt=[e]:dt.push(e)}function p2(e){So=!0,C1(e)}function Qt(){if(!ol&&dt!==null){ol=!0;var e=0,t=D;try{var r=dt;for(D=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}dt=null,So=!1}catch(i){throw dt!==null&&(dt=dt.slice(e+1)),Ku(Va,Qt),i}finally{D=t,ol=!1}}return null}var Pr=[],Nr=0,Ki=null,Yi=0,Oe=[],$e=0,ir=null,ft=1,pt="";function Xt(e,t){Pr[Nr++]=Yi,Pr[Nr++]=Ki,Ki=e,Yi=t}function E1(e,t,r){Oe[$e++]=ft,Oe[$e++]=pt,Oe[$e++]=ir,ir=e;var n=ft;e=pt;var i=32-Xe(n)-1;n&=~(1<<i),r+=1;var o=32-Xe(t)+i;if(30<o){var l=i-i%5;o=(n&(1<<l)-1).toString(32),n>>=l,i-=l,ft=1<<32-Xe(t)+i|r<<i|n,pt=o+e}else ft=1<<o|r<<i|n,pt=e}function qa(e){e.return!==null&&(Xt(e,1),E1(e,1,0))}function es(e){for(;e===Ki;)Ki=Pr[--Nr],Pr[Nr]=null,Yi=Pr[--Nr],Pr[Nr]=null;for(;e===ir;)ir=Oe[--$e],Oe[$e]=null,pt=Oe[--$e],Oe[$e]=null,ft=Oe[--$e],Oe[$e]=null}var Re=null,ze=null,Z=!1,Qe=null;function P1(e,t){var r=De(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function mc(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Re=e,ze=Ot(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Re=e,ze=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=ir!==null?{id:ft,overflow:pt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=De(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Re=e,ze=null,!0):!1;default:return!1}}function Gl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Jl(e){if(Z){var t=ze;if(t){var r=t;if(!mc(e,t)){if(Gl(e))throw Error(C(418));t=Ot(r.nextSibling);var n=Re;t&&mc(e,t)?P1(n,r):(e.flags=e.flags&-4097|2,Z=!1,Re=e)}}else{if(Gl(e))throw Error(C(418));e.flags=e.flags&-4097|2,Z=!1,Re=e}}}function gc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Re=e}function hi(e){if(e!==Re)return!1;if(!Z)return gc(e),Z=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ql(e.type,e.memoizedProps)),t&&(t=ze)){if(Gl(e))throw N1(),Error(C(418));for(;t;)P1(e,t),t=Ot(t.nextSibling)}if(gc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){ze=Ot(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}ze=null}}else ze=Re?Ot(e.stateNode.nextSibling):null;return!0}function N1(){for(var e=ze;e;)e=Ot(e.nextSibling)}function Br(){ze=Re=null,Z=!1}function ts(e){Qe===null?Qe=[e]:Qe.push(e)}var h2=xt.ReactCurrentBatchConfig;function We(e,t){if(e&&e.defaultProps){t=K({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}var Gi=Zt(null),Ji=null,_r=null,rs=null;function ns(){rs=_r=Ji=null}function is(e){var t=Gi.current;V(Gi),e._currentValue=t}function ql(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function $r(e,t){Ji=e,rs=_r=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Se=!0),e.firstContext=null)}function Ae(e){var t=e._currentValue;if(rs!==e)if(e={context:e,memoizedValue:t,next:null},_r===null){if(Ji===null)throw Error(C(308));_r=e,Ji.dependencies={lanes:0,firstContext:e}}else _r=_r.next=e;return t}var Gt=null;function os(e){Gt===null?Gt=[e]:Gt.push(e)}function _1(e,t,r,n){var i=t.interleaved;return i===null?(r.next=r,os(t)):(r.next=i.next,i.next=r),t.interleaved=r,vt(e,n)}function vt(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Pt=!1;function ls(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function T1(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ht(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function $t(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,O&2){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,vt(e,r)}return i=n.interleaved,i===null?(t.next=t,os(n)):(t.next=i.next,i.next=t),n.interleaved=t,vt(e,r)}function Pi(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Wa(e,r)}}function vc(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var i=null,o=null;if(r=r.firstBaseUpdate,r!==null){do{var l={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};o===null?i=o=l:o=o.next=l,r=r.next}while(r!==null);o===null?i=o=t:o=o.next=t}else i=o=t;r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function qi(e,t,r,n){var i=e.updateQueue;Pt=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,u=c.next;c.next=null,l===null?o=u:l.next=u,l=c;var f=e.alternate;f!==null&&(f=f.updateQueue,s=f.lastBaseUpdate,s!==l&&(s===null?f.firstBaseUpdate=u:s.next=u,f.lastBaseUpdate=c))}if(o!==null){var h=i.baseState;l=0,f=u=c=null,s=o;do{var g=s.lane,v=s.eventTime;if((n&g)===g){f!==null&&(f=f.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var y=e,w=s;switch(g=t,v=r,w.tag){case 1:if(y=w.payload,typeof y=="function"){h=y.call(v,h,g);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,g=typeof y=="function"?y.call(v,h,g):y,g==null)break e;h=K({},h,g);break e;case 2:Pt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[s]:g.push(s))}else v={eventTime:v,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},f===null?(u=f=v,c=h):f=f.next=v,l|=g;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;g=s,s=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(1);if(f===null&&(c=h),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);lr|=l,e.lanes=l,e.memoizedState=h}}function yc(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],i=n.callback;if(i!==null){if(n.callback=null,n=r,typeof i!="function")throw Error(C(191,i));i.call(n)}}}var z1=new _u.Component().refs;function ea(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:K({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Co={isMounted:function(e){return(e=e._reactInternals)?dr(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=xe(),i=Ft(e),o=ht(n,i);o.payload=t,r!=null&&(o.callback=r),t=$t(e,o,i),t!==null&&(Ke(t,e,i,n),Pi(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=xe(),i=Ft(e),o=ht(n,i);o.tag=1,o.payload=t,r!=null&&(o.callback=r),t=$t(e,o,i),t!==null&&(Ke(t,e,i,n),Pi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=xe(),n=Ft(e),i=ht(r,n);i.tag=2,t!=null&&(i.callback=t),t=$t(e,i,n),t!==null&&(Ke(t,e,n,r),Pi(t,e,n))}};function xc(e,t,r,n,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,o,l):t.prototype&&t.prototype.isPureReactComponent?!bn(r,n)||!bn(i,o):!0}function R1(e,t,r){var n=!1,i=Vt,o=t.contextType;return typeof o=="object"&&o!==null?o=Ae(o):(i=Ee(t)?nr:me.current,n=t.contextTypes,o=(n=n!=null)?Ar(e,i):Vt),t=new t(r,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Co,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function wc(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&Co.enqueueReplaceState(t,t.state,null)}function ta(e,t,r,n){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs=z1,ls(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ae(o):(o=Ee(t)?nr:me.current,i.context=Ar(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(ea(e,t,o,r),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Co.enqueueReplaceState(i,i.state,null),qi(e,r,i,n),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function sn(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(C(309));var n=r.stateNode}if(!n)throw Error(C(147,e));var i=n,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var s=i.refs;s===z1&&(s=i.refs={}),l===null?delete s[o]:s[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(C(284));if(!r._owner)throw Error(C(290,e))}return e}function mi(e,t){throw e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function kc(e){var t=e._init;return t(e._payload)}function L1(e){function t(p,d){if(e){var m=p.deletions;m===null?(p.deletions=[d],p.flags|=16):m.push(d)}}function r(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function n(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function i(p,d){return p=At(p,d),p.index=0,p.sibling=null,p}function o(p,d,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<d?(p.flags|=2,d):m):(p.flags|=2,d)):(p.flags|=1048576,d)}function l(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,d,m,x){return d===null||d.tag!==6?(d=fl(m,p.mode,x),d.return=p,d):(d=i(d,m),d.return=p,d)}function c(p,d,m,x){var k=m.type;return k===wr?f(p,d,m.props.children,x,m.key):d!==null&&(d.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Et&&kc(k)===d.type)?(x=i(d,m.props),x.ref=sn(p,d,m),x.return=p,x):(x=Li(m.type,m.key,m.props,null,p.mode,x),x.ref=sn(p,d,m),x.return=p,x)}function u(p,d,m,x){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=pl(m,p.mode,x),d.return=p,d):(d=i(d,m.children||[]),d.return=p,d)}function f(p,d,m,x,k){return d===null||d.tag!==7?(d=tr(m,p.mode,x,k),d.return=p,d):(d=i(d,m),d.return=p,d)}function h(p,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=fl(""+d,p.mode,m),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case ii:return m=Li(d.type,d.key,d.props,null,p.mode,m),m.ref=sn(p,null,d),m.return=p,m;case xr:return d=pl(d,p.mode,m),d.return=p,d;case Et:var x=d._init;return h(p,x(d._payload),m)}if(fn(d)||rn(d))return d=tr(d,p.mode,m,null),d.return=p,d;mi(p,d)}return null}function g(p,d,m,x){var k=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return k!==null?null:s(p,d,""+m,x);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ii:return m.key===k?c(p,d,m,x):null;case xr:return m.key===k?u(p,d,m,x):null;case Et:return k=m._init,g(p,d,k(m._payload),x)}if(fn(m)||rn(m))return k!==null?null:f(p,d,m,x,null);mi(p,m)}return null}function v(p,d,m,x,k){if(typeof x=="string"&&x!==""||typeof x=="number")return p=p.get(m)||null,s(d,p,""+x,k);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ii:return p=p.get(x.key===null?m:x.key)||null,c(d,p,x,k);case xr:return p=p.get(x.key===null?m:x.key)||null,u(d,p,x,k);case Et:var j=x._init;return v(p,d,m,j(x._payload),k)}if(fn(x)||rn(x))return p=p.get(m)||null,f(d,p,x,k,null);mi(d,x)}return null}function y(p,d,m,x){for(var k=null,j=null,S=d,T=d=0,F=null;S!==null&&T<m.length;T++){S.index>T?(F=S,S=null):F=S.sibling;var b=g(p,S,m[T],x);if(b===null){S===null&&(S=F);break}e&&S&&b.alternate===null&&t(p,S),d=o(b,d,T),j===null?k=b:j.sibling=b,j=b,S=F}if(T===m.length)return r(p,S),Z&&Xt(p,T),k;if(S===null){for(;T<m.length;T++)S=h(p,m[T],x),S!==null&&(d=o(S,d,T),j===null?k=S:j.sibling=S,j=S);return Z&&Xt(p,T),k}for(S=n(p,S);T<m.length;T++)F=v(S,p,T,m[T],x),F!==null&&(e&&F.alternate!==null&&S.delete(F.key===null?T:F.key),d=o(F,d,T),j===null?k=F:j.sibling=F,j=F);return e&&S.forEach(function(ge){return t(p,ge)}),Z&&Xt(p,T),k}function w(p,d,m,x){var k=rn(m);if(typeof k!="function")throw Error(C(150));if(m=k.call(m),m==null)throw Error(C(151));for(var j=k=null,S=d,T=d=0,F=null,b=m.next();S!==null&&!b.done;T++,b=m.next()){S.index>T?(F=S,S=null):F=S.sibling;var ge=g(p,S,b.value,x);if(ge===null){S===null&&(S=F);break}e&&S&&ge.alternate===null&&t(p,S),d=o(ge,d,T),j===null?k=ge:j.sibling=ge,j=ge,S=F}if(b.done)return r(p,S),Z&&Xt(p,T),k;if(S===null){for(;!b.done;T++,b=m.next())b=h(p,b.value,x),b!==null&&(d=o(b,d,T),j===null?k=b:j.sibling=b,j=b);return Z&&Xt(p,T),k}for(S=n(p,S);!b.done;T++,b=m.next())b=v(S,p,T,b.value,x),b!==null&&(e&&b.alternate!==null&&S.delete(b.key===null?T:b.key),d=o(b,d,T),j===null?k=b:j.sibling=b,j=b);return e&&S.forEach(function(ot){return t(p,ot)}),Z&&Xt(p,T),k}function P(p,d,m,x){if(typeof m=="object"&&m!==null&&m.type===wr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case ii:e:{for(var k=m.key,j=d;j!==null;){if(j.key===k){if(k=m.type,k===wr){if(j.tag===7){r(p,j.sibling),d=i(j,m.props.children),d.return=p,p=d;break e}}else if(j.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Et&&kc(k)===j.type){r(p,j.sibling),d=i(j,m.props),d.ref=sn(p,j,m),d.return=p,p=d;break e}r(p,j);break}else t(p,j);j=j.sibling}m.type===wr?(d=tr(m.props.children,p.mode,x,m.key),d.return=p,p=d):(x=Li(m.type,m.key,m.props,null,p.mode,x),x.ref=sn(p,d,m),x.return=p,p=x)}return l(p);case xr:e:{for(j=m.key;d!==null;){if(d.key===j)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){r(p,d.sibling),d=i(d,m.children||[]),d.return=p,p=d;break e}else{r(p,d);break}else t(p,d);d=d.sibling}d=pl(m,p.mode,x),d.return=p,p=d}return l(p);case Et:return j=m._init,P(p,d,j(m._payload),x)}if(fn(m))return y(p,d,m,x);if(rn(m))return w(p,d,m,x);mi(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(r(p,d.sibling),d=i(d,m),d.return=p,p=d):(r(p,d),d=fl(m,p.mode,x),d.return=p,p=d),l(p)):r(p,d)}return P}var Ur=L1(!0),b1=L1(!1),Jn={},it=Zt(Jn),$n=Zt(Jn),Dn=Zt(Jn);function Jt(e){if(e===Jn)throw Error(C(174));return e}function as(e,t){switch(A(Dn,t),A($n,e),A(it,Jn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:bl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=bl(t,e)}V(it),A(it,t)}function Hr(){V(it),V($n),V(Dn)}function M1(e){Jt(Dn.current);var t=Jt(it.current),r=bl(t,e.type);t!==r&&(A($n,e),A(it,r))}function ss(e){$n.current===e&&(V(it),V($n))}var Q=Zt(0);function eo(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ll=[];function cs(){for(var e=0;e<ll.length;e++)ll[e]._workInProgressVersionPrimary=null;ll.length=0}var Ni=xt.ReactCurrentDispatcher,al=xt.ReactCurrentBatchConfig,or=0,X=null,re=null,ie=null,to=!1,kn=!1,Fn=0,m2=0;function fe(){throw Error(C(321))}function us(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Ge(e[r],t[r]))return!1;return!0}function ds(e,t,r,n,i,o){if(or=o,X=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ni.current=e===null||e.memoizedState===null?x2:w2,e=r(n,i),kn){o=0;do{if(kn=!1,Fn=0,25<=o)throw Error(C(301));o+=1,ie=re=null,t.updateQueue=null,Ni.current=k2,e=r(n,i)}while(kn)}if(Ni.current=ro,t=re!==null&&re.next!==null,or=0,ie=re=X=null,to=!1,t)throw Error(C(300));return e}function fs(){var e=Fn!==0;return Fn=0,e}function et(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ie===null?X.memoizedState=ie=e:ie=ie.next=e,ie}function Be(){if(re===null){var e=X.alternate;e=e!==null?e.memoizedState:null}else e=re.next;var t=ie===null?X.memoizedState:ie.next;if(t!==null)ie=t,re=e;else{if(e===null)throw Error(C(310));re=e,e={memoizedState:re.memoizedState,baseState:re.baseState,baseQueue:re.baseQueue,queue:re.queue,next:null},ie===null?X.memoizedState=ie=e:ie=ie.next=e}return ie}function An(e,t){return typeof t=="function"?t(e):t}function sl(e){var t=Be(),r=t.queue;if(r===null)throw Error(C(311));r.lastRenderedReducer=e;var n=re,i=n.baseQueue,o=r.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}n.baseQueue=i=o,r.pending=null}if(i!==null){o=i.next,n=n.baseState;var s=l=null,c=null,u=o;do{var f=u.lane;if((or&f)===f)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),n=u.hasEagerState?u.eagerState:e(n,u.action);else{var h={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(s=c=h,l=n):c=c.next=h,X.lanes|=f,lr|=f}u=u.next}while(u!==null&&u!==o);c===null?l=n:c.next=s,Ge(n,t.memoizedState)||(Se=!0),t.memoizedState=n,t.baseState=l,t.baseQueue=c,r.lastRenderedState=n}if(e=r.interleaved,e!==null){i=e;do o=i.lane,X.lanes|=o,lr|=o,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function cl(e){var t=Be(),r=t.queue;if(r===null)throw Error(C(311));r.lastRenderedReducer=e;var n=r.dispatch,i=r.pending,o=t.memoizedState;if(i!==null){r.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);Ge(o,t.memoizedState)||(Se=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),r.lastRenderedState=o}return[o,n]}function I1(){}function O1(e,t){var r=X,n=Be(),i=t(),o=!Ge(n.memoizedState,i);if(o&&(n.memoizedState=i,Se=!0),n=n.queue,ps(F1.bind(null,r,n,e),[e]),n.getSnapshot!==t||o||ie!==null&&ie.memoizedState.tag&1){if(r.flags|=2048,Bn(9,D1.bind(null,r,n,i,t),void 0,null),ae===null)throw Error(C(349));or&30||$1(r,t,i)}return i}function $1(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function D1(e,t,r,n){t.value=r,t.getSnapshot=n,A1(t)&&B1(e)}function F1(e,t,r){return r(function(){A1(t)&&B1(e)})}function A1(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Ge(e,r)}catch{return!0}}function B1(e){var t=vt(e,1);t!==null&&Ke(t,e,1,-1)}function jc(e){var t=et();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:An,lastRenderedState:e},t.queue=e,e=e.dispatch=y2.bind(null,X,e),[t.memoizedState,e]}function Bn(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function U1(){return Be().memoizedState}function _i(e,t,r,n){var i=et();X.flags|=e,i.memoizedState=Bn(1|t,r,void 0,n===void 0?null:n)}function Eo(e,t,r,n){var i=Be();n=n===void 0?null:n;var o=void 0;if(re!==null){var l=re.memoizedState;if(o=l.destroy,n!==null&&us(n,l.deps)){i.memoizedState=Bn(t,r,o,n);return}}X.flags|=e,i.memoizedState=Bn(1|t,r,o,n)}function Sc(e,t){return _i(8390656,8,e,t)}function ps(e,t){return Eo(2048,8,e,t)}function H1(e,t){return Eo(4,2,e,t)}function V1(e,t){return Eo(4,4,e,t)}function W1(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Z1(e,t,r){return r=r!=null?r.concat([e]):null,Eo(4,4,W1.bind(null,t,e),r)}function hs(){}function Q1(e,t){var r=Be();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&us(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function X1(e,t){var r=Be();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&us(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function K1(e,t,r){return or&21?(Ge(r,t)||(r=Ju(),X.lanes|=r,lr|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Se=!0),e.memoizedState=r)}function g2(e,t){var r=D;D=r!==0&&4>r?r:4,e(!0);var n=al.transition;al.transition={};try{e(!1),t()}finally{D=r,al.transition=n}}function Y1(){return Be().memoizedState}function v2(e,t,r){var n=Ft(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},G1(e))J1(t,r);else if(r=_1(e,t,r,n),r!==null){var i=xe();Ke(r,e,n,i),q1(r,t,n)}}function y2(e,t,r){var n=Ft(e),i={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(G1(e))J1(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,s=o(l,r);if(i.hasEagerState=!0,i.eagerState=s,Ge(s,l)){var c=t.interleaved;c===null?(i.next=i,os(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}r=_1(e,t,i,n),r!==null&&(i=xe(),Ke(r,e,n,i),q1(r,t,n))}}function G1(e){var t=e.alternate;return e===X||t!==null&&t===X}function J1(e,t){kn=to=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function q1(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Wa(e,r)}}var ro={readContext:Ae,useCallback:fe,useContext:fe,useEffect:fe,useImperativeHandle:fe,useInsertionEffect:fe,useLayoutEffect:fe,useMemo:fe,useReducer:fe,useRef:fe,useState:fe,useDebugValue:fe,useDeferredValue:fe,useTransition:fe,useMutableSource:fe,useSyncExternalStore:fe,useId:fe,unstable_isNewReconciler:!1},x2={readContext:Ae,useCallback:function(e,t){return et().memoizedState=[e,t===void 0?null:t],e},useContext:Ae,useEffect:Sc,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,_i(4194308,4,W1.bind(null,t,e),r)},useLayoutEffect:function(e,t){return _i(4194308,4,e,t)},useInsertionEffect:function(e,t){return _i(4,2,e,t)},useMemo:function(e,t){var r=et();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=et();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=v2.bind(null,X,e),[n.memoizedState,e]},useRef:function(e){var t=et();return e={current:e},t.memoizedState=e},useState:jc,useDebugValue:hs,useDeferredValue:function(e){return et().memoizedState=e},useTransition:function(){var e=jc(!1),t=e[0];return e=g2.bind(null,e[1]),et().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=X,i=et();if(Z){if(r===void 0)throw Error(C(407));r=r()}else{if(r=t(),ae===null)throw Error(C(349));or&30||$1(n,t,r)}i.memoizedState=r;var o={value:r,getSnapshot:t};return i.queue=o,Sc(F1.bind(null,n,o,e),[e]),n.flags|=2048,Bn(9,D1.bind(null,n,o,r,t),void 0,null),r},useId:function(){var e=et(),t=ae.identifierPrefix;if(Z){var r=pt,n=ft;r=(n&~(1<<32-Xe(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=Fn++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=m2++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},w2={readContext:Ae,useCallback:Q1,useContext:Ae,useEffect:ps,useImperativeHandle:Z1,useInsertionEffect:H1,useLayoutEffect:V1,useMemo:X1,useReducer:sl,useRef:U1,useState:function(){return sl(An)},useDebugValue:hs,useDeferredValue:function(e){var t=Be();return K1(t,re.memoizedState,e)},useTransition:function(){var e=sl(An)[0],t=Be().memoizedState;return[e,t]},useMutableSource:I1,useSyncExternalStore:O1,useId:Y1,unstable_isNewReconciler:!1},k2={readContext:Ae,useCallback:Q1,useContext:Ae,useEffect:ps,useImperativeHandle:Z1,useInsertionEffect:H1,useLayoutEffect:V1,useMemo:X1,useReducer:cl,useRef:U1,useState:function(){return cl(An)},useDebugValue:hs,useDeferredValue:function(e){var t=Be();return re===null?t.memoizedState=e:K1(t,re.memoizedState,e)},useTransition:function(){var e=cl(An)[0],t=Be().memoizedState;return[e,t]},useMutableSource:I1,useSyncExternalStore:O1,useId:Y1,unstable_isNewReconciler:!1};function Vr(e,t){try{var r="",n=t;do r+=X0(n),n=n.return;while(n);var i=r}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function ul(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function ra(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var j2=typeof WeakMap=="function"?WeakMap:Map;function ed(e,t,r){r=ht(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){io||(io=!0,fa=n),ra(e,t)},r}function td(e,t,r){r=ht(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var i=t.value;r.payload=function(){return n(i)},r.callback=function(){ra(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(r.callback=function(){ra(e,t),typeof n!="function"&&(Dt===null?Dt=new Set([this]):Dt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),r}function Cc(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new j2;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(r)||(i.add(r),e=O2.bind(null,e,t,r),t.then(e,e))}function Ec(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Pc(e,t,r,n,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=ht(-1,1),t.tag=2,$t(r,t,1))),r.lanes|=1),e)}var S2=xt.ReactCurrentOwner,Se=!1;function ye(e,t,r,n){t.child=e===null?b1(t,null,r,n):Ur(t,e.child,r,n)}function Nc(e,t,r,n,i){r=r.render;var o=t.ref;return $r(t,i),n=ds(e,t,r,n,o,i),r=fs(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,yt(e,t,i)):(Z&&r&&qa(t),t.flags|=1,ye(e,t,n,i),t.child)}function _c(e,t,r,n,i){if(e===null){var o=r.type;return typeof o=="function"&&!js(o)&&o.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=o,rd(e,t,o,n,i)):(e=Li(r.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(r=r.compare,r=r!==null?r:bn,r(l,n)&&e.ref===t.ref)return yt(e,t,i)}return t.flags|=1,e=At(o,n),e.ref=t.ref,e.return=t,t.child=e}function rd(e,t,r,n,i){if(e!==null){var o=e.memoizedProps;if(bn(o,n)&&e.ref===t.ref)if(Se=!1,t.pendingProps=n=o,(e.lanes&i)!==0)e.flags&131072&&(Se=!0);else return t.lanes=e.lanes,yt(e,t,i)}return na(e,t,r,n,i)}function nd(e,t,r){var n=t.pendingProps,i=n.children,o=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},A(zr,Te),Te|=r;else{if(!(r&1073741824))return e=o!==null?o.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,A(zr,Te),Te|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=o!==null?o.baseLanes:r,A(zr,Te),Te|=n}else o!==null?(n=o.baseLanes|r,t.memoizedState=null):n=r,A(zr,Te),Te|=n;return ye(e,t,i,r),t.child}function id(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function na(e,t,r,n,i){var o=Ee(r)?nr:me.current;return o=Ar(t,o),$r(t,i),r=ds(e,t,r,n,o,i),n=fs(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,yt(e,t,i)):(Z&&n&&qa(t),t.flags|=1,ye(e,t,r,i),t.child)}function Tc(e,t,r,n,i){if(Ee(r)){var o=!0;Xi(t)}else o=!1;if($r(t,i),t.stateNode===null)Ti(e,t),R1(t,r,n),ta(t,r,n,i),n=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var c=l.context,u=r.contextType;typeof u=="object"&&u!==null?u=Ae(u):(u=Ee(r)?nr:me.current,u=Ar(t,u));var f=r.getDerivedStateFromProps,h=typeof f=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==n||c!==u)&&wc(t,l,n,u),Pt=!1;var g=t.memoizedState;l.state=g,qi(t,n,l,i),c=t.memoizedState,s!==n||g!==c||Ce.current||Pt?(typeof f=="function"&&(ea(t,r,f,n),c=t.memoizedState),(s=Pt||xc(t,r,s,n,g,c,u))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=c),l.props=n,l.state=c,l.context=u,n=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{l=t.stateNode,T1(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:We(t.type,s),l.props=u,h=t.pendingProps,g=l.context,c=r.contextType,typeof c=="object"&&c!==null?c=Ae(c):(c=Ee(r)?nr:me.current,c=Ar(t,c));var v=r.getDerivedStateFromProps;(f=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==h||g!==c)&&wc(t,l,n,c),Pt=!1,g=t.memoizedState,l.state=g,qi(t,n,l,i);var y=t.memoizedState;s!==h||g!==y||Ce.current||Pt?(typeof v=="function"&&(ea(t,r,v,n),y=t.memoizedState),(u=Pt||xc(t,r,u,n,g,y,c)||!1)?(f||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(n,y,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(n,y,c)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=y),l.props=n,l.state=y,l.context=c,n=u):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),n=!1)}return ia(e,t,r,n,o,i)}function ia(e,t,r,n,i,o){id(e,t);var l=(t.flags&128)!==0;if(!n&&!l)return i&&hc(t,r,!1),yt(e,t,o);n=t.stateNode,S2.current=t;var s=l&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&l?(t.child=Ur(t,e.child,null,o),t.child=Ur(t,null,s,o)):ye(e,t,s,o),t.memoizedState=n.state,i&&hc(t,r,!0),t.child}function od(e){var t=e.stateNode;t.pendingContext?pc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&pc(e,t.context,!1),as(e,t.containerInfo)}function zc(e,t,r,n,i){return Br(),ts(i),t.flags|=256,ye(e,t,r,n),t.child}var oa={dehydrated:null,treeContext:null,retryLane:0};function la(e){return{baseLanes:e,cachePool:null,transitions:null}}function ld(e,t,r){var n=t.pendingProps,i=Q.current,o=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),A(Q,i&1),e===null)return Jl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=n.children,e=n.fallback,o?(n=t.mode,o=t.child,l={mode:"hidden",children:l},!(n&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=_o(l,n,0,null),e=tr(e,n,r,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=la(r),t.memoizedState=oa,e):ms(t,l));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return C2(e,t,l,n,s,i,r);if(o){o=n.fallback,l=t.mode,i=e.child,s=i.sibling;var c={mode:"hidden",children:n.children};return!(l&1)&&t.child!==i?(n=t.child,n.childLanes=0,n.pendingProps=c,t.deletions=null):(n=At(i,c),n.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=At(s,o):(o=tr(o,l,r,null),o.flags|=2),o.return=t,n.return=t,n.sibling=o,t.child=n,n=o,o=t.child,l=e.child.memoizedState,l=l===null?la(r):{baseLanes:l.baseLanes|r,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~r,t.memoizedState=oa,n}return o=e.child,e=o.sibling,n=At(o,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function ms(e,t){return t=_o({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function gi(e,t,r,n){return n!==null&&ts(n),Ur(t,e.child,null,r),e=ms(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function C2(e,t,r,n,i,o,l){if(r)return t.flags&256?(t.flags&=-257,n=ul(Error(C(422))),gi(e,t,l,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=n.fallback,i=t.mode,n=_o({mode:"visible",children:n.children},i,0,null),o=tr(o,i,l,null),o.flags|=2,n.return=t,o.return=t,n.sibling=o,t.child=n,t.mode&1&&Ur(t,e.child,null,l),t.child.memoizedState=la(l),t.memoizedState=oa,o);if(!(t.mode&1))return gi(e,t,l,null);if(i.data==="$!"){if(n=i.nextSibling&&i.nextSibling.dataset,n)var s=n.dgst;return n=s,o=Error(C(419)),n=ul(o,n,void 0),gi(e,t,l,n)}if(s=(l&e.childLanes)!==0,Se||s){if(n=ae,n!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(n.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,vt(e,i),Ke(n,e,i,-1))}return ks(),n=ul(Error(C(421))),gi(e,t,l,n)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=$2.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,ze=Ot(i.nextSibling),Re=t,Z=!0,Qe=null,e!==null&&(Oe[$e++]=ft,Oe[$e++]=pt,Oe[$e++]=ir,ft=e.id,pt=e.overflow,ir=t),t=ms(t,n.children),t.flags|=4096,t)}function Rc(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),ql(e.return,t,r)}function dl(e,t,r,n,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=r,o.tailMode=i)}function ad(e,t,r){var n=t.pendingProps,i=n.revealOrder,o=n.tail;if(ye(e,t,n.children,r),n=Q.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Rc(e,r,t);else if(e.tag===19)Rc(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(A(Q,n),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;r!==null;)e=r.alternate,e!==null&&eo(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),dl(t,!1,i,r,o);break;case"backwards":for(r=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&eo(e)===null){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}dl(t,!0,r,null,o);break;case"together":dl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ti(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function yt(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),lr|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,r=At(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=At(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function E2(e,t,r){switch(t.tag){case 3:od(t),Br();break;case 5:M1(t);break;case 1:Ee(t.type)&&Xi(t);break;case 4:as(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,i=t.memoizedProps.value;A(Gi,n._currentValue),n._currentValue=i;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(A(Q,Q.current&1),t.flags|=128,null):r&t.child.childLanes?ld(e,t,r):(A(Q,Q.current&1),e=yt(e,t,r),e!==null?e.sibling:null);A(Q,Q.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return ad(e,t,r);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),A(Q,Q.current),n)break;return null;case 22:case 23:return t.lanes=0,nd(e,t,r)}return yt(e,t,r)}var sd,aa,cd,ud;sd=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};aa=function(){};cd=function(e,t,r,n){var i=e.memoizedProps;if(i!==n){e=t.stateNode,Jt(it.current);var o=null;switch(r){case"input":i=Tl(e,i),n=Tl(e,n),o=[];break;case"select":i=K({},i,{value:void 0}),n=K({},n,{value:void 0}),o=[];break;case"textarea":i=Ll(e,i),n=Ll(e,n),o=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=Zi)}Ml(r,n);var l;r=null;for(u in i)if(!n.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(l in s)s.hasOwnProperty(l)&&(r||(r={}),r[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Pn.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in n){var c=n[u];if(s=i!=null?i[u]:void 0,n.hasOwnProperty(u)&&c!==s&&(c!=null||s!=null))if(u==="style")if(s){for(l in s)!s.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(r||(r={}),r[l]="");for(l in c)c.hasOwnProperty(l)&&s[l]!==c[l]&&(r||(r={}),r[l]=c[l])}else r||(o||(o=[]),o.push(u,r)),r=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,s=s?s.__html:void 0,c!=null&&s!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Pn.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&B("scroll",e),o||s===c||(o=[])):(o=o||[]).push(u,c))}r&&(o=o||[]).push("style",r);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};ud=function(e,t,r,n){r!==n&&(t.flags|=4)};function cn(e,t){if(!Z)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function pe(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,n|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function P2(e,t,r){var n=t.pendingProps;switch(es(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pe(t),null;case 1:return Ee(t.type)&&Qi(),pe(t),null;case 3:return n=t.stateNode,Hr(),V(Ce),V(me),cs(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(hi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Qe!==null&&(ma(Qe),Qe=null))),aa(e,t),pe(t),null;case 5:ss(t);var i=Jt(Dn.current);if(r=t.type,e!==null&&t.stateNode!=null)cd(e,t,r,n,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(C(166));return pe(t),null}if(e=Jt(it.current),hi(t)){n=t.stateNode,r=t.type;var o=t.memoizedProps;switch(n[rt]=t,n[On]=o,e=(t.mode&1)!==0,r){case"dialog":B("cancel",n),B("close",n);break;case"iframe":case"object":case"embed":B("load",n);break;case"video":case"audio":for(i=0;i<hn.length;i++)B(hn[i],n);break;case"source":B("error",n);break;case"img":case"image":case"link":B("error",n),B("load",n);break;case"details":B("toggle",n);break;case"input":As(n,o),B("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!o.multiple},B("invalid",n);break;case"textarea":Us(n,o),B("invalid",n)}Ml(r,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var s=o[l];l==="children"?typeof s=="string"?n.textContent!==s&&(o.suppressHydrationWarning!==!0&&pi(n.textContent,s,e),i=["children",s]):typeof s=="number"&&n.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&pi(n.textContent,s,e),i=["children",""+s]):Pn.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&B("scroll",n)}switch(r){case"input":oi(n),Bs(n,o,!0);break;case"textarea":oi(n),Hs(n);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(n.onclick=Zi)}n=i,t.updateQueue=n,n!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=$u(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=l.createElement(r,{is:n.is}):(e=l.createElement(r),r==="select"&&(l=e,n.multiple?l.multiple=!0:n.size&&(l.size=n.size))):e=l.createElementNS(e,r),e[rt]=t,e[On]=n,sd(e,t,!1,!1),t.stateNode=e;e:{switch(l=Il(r,n),r){case"dialog":B("cancel",e),B("close",e),i=n;break;case"iframe":case"object":case"embed":B("load",e),i=n;break;case"video":case"audio":for(i=0;i<hn.length;i++)B(hn[i],e);i=n;break;case"source":B("error",e),i=n;break;case"img":case"image":case"link":B("error",e),B("load",e),i=n;break;case"details":B("toggle",e),i=n;break;case"input":As(e,n),i=Tl(e,n),B("invalid",e);break;case"option":i=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},i=K({},n,{value:void 0}),B("invalid",e);break;case"textarea":Us(e,n),i=Ll(e,n),B("invalid",e);break;default:i=n}Ml(r,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var c=s[o];o==="style"?Au(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Du(e,c)):o==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&Nn(e,c):typeof c=="number"&&Nn(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Pn.hasOwnProperty(o)?c!=null&&o==="onScroll"&&B("scroll",e):c!=null&&Fa(e,o,c,l))}switch(r){case"input":oi(e),Bs(e,n,!1);break;case"textarea":oi(e),Hs(e);break;case"option":n.value!=null&&e.setAttribute("value",""+Ht(n.value));break;case"select":e.multiple=!!n.multiple,o=n.value,o!=null?br(e,!!n.multiple,o,!1):n.defaultValue!=null&&br(e,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Zi)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return pe(t),null;case 6:if(e&&t.stateNode!=null)ud(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(C(166));if(r=Jt(Dn.current),Jt(it.current),hi(t)){if(n=t.stateNode,r=t.memoizedProps,n[rt]=t,(o=n.nodeValue!==r)&&(e=Re,e!==null))switch(e.tag){case 3:pi(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&pi(n.nodeValue,r,(e.mode&1)!==0)}o&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[rt]=t,t.stateNode=n}return pe(t),null;case 13:if(V(Q),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Z&&ze!==null&&t.mode&1&&!(t.flags&128))N1(),Br(),t.flags|=98560,o=!1;else if(o=hi(t),n!==null&&n.dehydrated!==null){if(e===null){if(!o)throw Error(C(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(C(317));o[rt]=t}else Br(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;pe(t),o=!1}else Qe!==null&&(ma(Qe),Qe=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||Q.current&1?ne===0&&(ne=3):ks())),t.updateQueue!==null&&(t.flags|=4),pe(t),null);case 4:return Hr(),aa(e,t),e===null&&Mn(t.stateNode.containerInfo),pe(t),null;case 10:return is(t.type._context),pe(t),null;case 17:return Ee(t.type)&&Qi(),pe(t),null;case 19:if(V(Q),o=t.memoizedState,o===null)return pe(t),null;if(n=(t.flags&128)!==0,l=o.rendering,l===null)if(n)cn(o,!1);else{if(ne!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=eo(e),l!==null){for(t.flags|=128,cn(o,!1),n=l.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)o=r,e=n,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return A(Q,Q.current&1|2),t.child}e=e.sibling}o.tail!==null&&q()>Wr&&(t.flags|=128,n=!0,cn(o,!1),t.lanes=4194304)}else{if(!n)if(e=eo(l),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),cn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!Z)return pe(t),null}else 2*q()-o.renderingStartTime>Wr&&r!==1073741824&&(t.flags|=128,n=!0,cn(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(r=o.last,r!==null?r.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=q(),t.sibling=null,r=Q.current,A(Q,n?r&1|2:r&1),t):(pe(t),null);case 22:case 23:return ws(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?Te&1073741824&&(pe(t),t.subtreeFlags&6&&(t.flags|=8192)):pe(t),null;case 24:return null;case 25:return null}throw Error(C(156,t.tag))}function N2(e,t){switch(es(t),t.tag){case 1:return Ee(t.type)&&Qi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Hr(),V(Ce),V(me),cs(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ss(t),null;case 13:if(V(Q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));Br()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return V(Q),null;case 4:return Hr(),null;case 10:return is(t.type._context),null;case 22:case 23:return ws(),null;case 24:return null;default:return null}}var vi=!1,he=!1,_2=typeof WeakSet=="function"?WeakSet:Set,_=null;function Tr(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){G(e,t,n)}else r.current=null}function sa(e,t,r){try{r()}catch(n){G(e,t,n)}}var Lc=!1;function T2(e,t){if(Wl=Hi,e=h1(),Ja(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var i=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break e}var l=0,s=-1,c=-1,u=0,f=0,h=e,g=null;t:for(;;){for(var v;h!==r||i!==0&&h.nodeType!==3||(s=l+i),h!==o||n!==0&&h.nodeType!==3||(c=l+n),h.nodeType===3&&(l+=h.nodeValue.length),(v=h.firstChild)!==null;)g=h,h=v;for(;;){if(h===e)break t;if(g===r&&++u===i&&(s=l),g===o&&++f===n&&(c=l),(v=h.nextSibling)!==null)break;h=g,g=h.parentNode}h=v}r=s===-1||c===-1?null:{start:s,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(Zl={focusedElem:e,selectionRange:r},Hi=!1,_=t;_!==null;)if(t=_,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,_=e;else for(;_!==null;){t=_;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,P=y.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?w:We(t.type,w),P);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(x){G(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,_=e;break}_=t.return}return y=Lc,Lc=!1,y}function jn(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&sa(t,r,o)}i=i.next}while(i!==n)}}function Po(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function ca(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function dd(e){var t=e.alternate;t!==null&&(e.alternate=null,dd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[rt],delete t[On],delete t[Kl],delete t[d2],delete t[f2])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function fd(e){return e.tag===5||e.tag===3||e.tag===4}function bc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||fd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ua(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Zi));else if(n!==4&&(e=e.child,e!==null))for(ua(e,t,r),e=e.sibling;e!==null;)ua(e,t,r),e=e.sibling}function da(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(da(e,t,r),e=e.sibling;e!==null;)da(e,t,r),e=e.sibling}var se=null,Ze=!1;function jt(e,t,r){for(r=r.child;r!==null;)pd(e,t,r),r=r.sibling}function pd(e,t,r){if(nt&&typeof nt.onCommitFiberUnmount=="function")try{nt.onCommitFiberUnmount(yo,r)}catch{}switch(r.tag){case 5:he||Tr(r,t);case 6:var n=se,i=Ze;se=null,jt(e,t,r),se=n,Ze=i,se!==null&&(Ze?(e=se,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):se.removeChild(r.stateNode));break;case 18:se!==null&&(Ze?(e=se,r=r.stateNode,e.nodeType===8?il(e.parentNode,r):e.nodeType===1&&il(e,r),Rn(e)):il(se,r.stateNode));break;case 4:n=se,i=Ze,se=r.stateNode.containerInfo,Ze=!0,jt(e,t,r),se=n,Ze=i;break;case 0:case 11:case 14:case 15:if(!he&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&sa(r,t,l),i=i.next}while(i!==n)}jt(e,t,r);break;case 1:if(!he&&(Tr(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(s){G(r,t,s)}jt(e,t,r);break;case 21:jt(e,t,r);break;case 22:r.mode&1?(he=(n=he)||r.memoizedState!==null,jt(e,t,r),he=n):jt(e,t,r);break;default:jt(e,t,r)}}function Mc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new _2),t.forEach(function(n){var i=D2.bind(null,e,n);r.has(n)||(r.add(n),n.then(i,i))})}}function Ve(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var i=r[n];try{var o=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:se=s.stateNode,Ze=!1;break e;case 3:se=s.stateNode.containerInfo,Ze=!0;break e;case 4:se=s.stateNode.containerInfo,Ze=!0;break e}s=s.return}if(se===null)throw Error(C(160));pd(o,l,i),se=null,Ze=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){G(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)hd(t,e),t=t.sibling}function hd(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ve(t,e),Je(e),n&4){try{jn(3,e,e.return),Po(3,e)}catch(w){G(e,e.return,w)}try{jn(5,e,e.return)}catch(w){G(e,e.return,w)}}break;case 1:Ve(t,e),Je(e),n&512&&r!==null&&Tr(r,r.return);break;case 5:if(Ve(t,e),Je(e),n&512&&r!==null&&Tr(r,r.return),e.flags&32){var i=e.stateNode;try{Nn(i,"")}catch(w){G(e,e.return,w)}}if(n&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=r!==null?r.memoizedProps:o,s=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Iu(i,o),Il(s,l);var u=Il(s,o);for(l=0;l<c.length;l+=2){var f=c[l],h=c[l+1];f==="style"?Au(i,h):f==="dangerouslySetInnerHTML"?Du(i,h):f==="children"?Nn(i,h):Fa(i,f,h,u)}switch(s){case"input":zl(i,o);break;case"textarea":Ou(i,o);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?br(i,!!o.multiple,v,!1):g!==!!o.multiple&&(o.defaultValue!=null?br(i,!!o.multiple,o.defaultValue,!0):br(i,!!o.multiple,o.multiple?[]:"",!1))}i[On]=o}catch(w){G(e,e.return,w)}}break;case 6:if(Ve(t,e),Je(e),n&4){if(e.stateNode===null)throw Error(C(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){G(e,e.return,w)}}break;case 3:if(Ve(t,e),Je(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{Rn(t.containerInfo)}catch(w){G(e,e.return,w)}break;case 4:Ve(t,e),Je(e);break;case 13:Ve(t,e),Je(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(ys=q())),n&4&&Mc(e);break;case 22:if(f=r!==null&&r.memoizedState!==null,e.mode&1?(he=(u=he)||f,Ve(t,e),he=u):Ve(t,e),Je(e),n&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(_=e,f=e.child;f!==null;){for(h=_=f;_!==null;){switch(g=_,v=g.child,g.tag){case 0:case 11:case 14:case 15:jn(4,g,g.return);break;case 1:Tr(g,g.return);var y=g.stateNode;if(typeof y.componentWillUnmount=="function"){n=g,r=g.return;try{t=n,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(w){G(n,r,w)}}break;case 5:Tr(g,g.return);break;case 22:if(g.memoizedState!==null){Oc(h);continue}}v!==null?(v.return=g,_=v):Oc(h)}f=f.sibling}e:for(f=null,h=e;;){if(h.tag===5){if(f===null){f=h;try{i=h.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=h.stateNode,c=h.memoizedProps.style,l=c!=null&&c.hasOwnProperty("display")?c.display:null,s.style.display=Fu("display",l))}catch(w){G(e,e.return,w)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(w){G(e,e.return,w)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ve(t,e),Je(e),n&4&&Mc(e);break;case 21:break;default:Ve(t,e),Je(e)}}function Je(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(fd(r)){var n=r;break e}r=r.return}throw Error(C(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&(Nn(i,""),n.flags&=-33);var o=bc(e);da(e,o,i);break;case 3:case 4:var l=n.stateNode.containerInfo,s=bc(e);ua(e,s,l);break;default:throw Error(C(161))}}catch(c){G(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function z2(e,t,r){_=e,md(e)}function md(e,t,r){for(var n=(e.mode&1)!==0;_!==null;){var i=_,o=i.child;if(i.tag===22&&n){var l=i.memoizedState!==null||vi;if(!l){var s=i.alternate,c=s!==null&&s.memoizedState!==null||he;s=vi;var u=he;if(vi=l,(he=c)&&!u)for(_=i;_!==null;)l=_,c=l.child,l.tag===22&&l.memoizedState!==null?$c(i):c!==null?(c.return=l,_=c):$c(i);for(;o!==null;)_=o,md(o),o=o.sibling;_=i,vi=s,he=u}Ic(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,_=o):Ic(e)}}function Ic(e){for(;_!==null;){var t=_;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:he||Po(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!he)if(r===null)n.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:We(t.type,r.memoizedProps);n.componentDidUpdate(i,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&yc(t,o,n);break;case 3:var l=t.updateQueue;if(l!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}yc(t,l,r)}break;case 5:var s=t.stateNode;if(r===null&&t.flags&4){r=s;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&Rn(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}he||t.flags&512&&ca(t)}catch(g){G(t,t.return,g)}}if(t===e){_=null;break}if(r=t.sibling,r!==null){r.return=t.return,_=r;break}_=t.return}}function Oc(e){for(;_!==null;){var t=_;if(t===e){_=null;break}var r=t.sibling;if(r!==null){r.return=t.return,_=r;break}_=t.return}}function $c(e){for(;_!==null;){var t=_;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Po(4,t)}catch(c){G(t,r,c)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var i=t.return;try{n.componentDidMount()}catch(c){G(t,i,c)}}var o=t.return;try{ca(t)}catch(c){G(t,o,c)}break;case 5:var l=t.return;try{ca(t)}catch(c){G(t,l,c)}}}catch(c){G(t,t.return,c)}if(t===e){_=null;break}var s=t.sibling;if(s!==null){s.return=t.return,_=s;break}_=t.return}}var R2=Math.ceil,no=xt.ReactCurrentDispatcher,gs=xt.ReactCurrentOwner,Fe=xt.ReactCurrentBatchConfig,O=0,ae=null,te=null,ue=0,Te=0,zr=Zt(0),ne=0,Un=null,lr=0,No=0,vs=0,Sn=null,je=null,ys=0,Wr=1/0,ct=null,io=!1,fa=null,Dt=null,yi=!1,Rt=null,oo=0,Cn=0,pa=null,zi=-1,Ri=0;function xe(){return O&6?q():zi!==-1?zi:zi=q()}function Ft(e){return e.mode&1?O&2&&ue!==0?ue&-ue:h2.transition!==null?(Ri===0&&(Ri=Ju()),Ri):(e=D,e!==0||(e=window.event,e=e===void 0?16:o1(e.type)),e):1}function Ke(e,t,r,n){if(50<Cn)throw Cn=0,pa=null,Error(C(185));Kn(e,r,n),(!(O&2)||e!==ae)&&(e===ae&&(!(O&2)&&(No|=r),ne===4&&_t(e,ue)),Pe(e,n),r===1&&O===0&&!(t.mode&1)&&(Wr=q()+500,So&&Qt()))}function Pe(e,t){var r=e.callbackNode;hf(e,t);var n=Ui(e,e===ae?ue:0);if(n===0)r!==null&&Zs(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&Zs(r),t===1)e.tag===0?p2(Dc.bind(null,e)):C1(Dc.bind(null,e)),c2(function(){!(O&6)&&Qt()}),r=null;else{switch(qu(n)){case 1:r=Va;break;case 4:r=Yu;break;case 16:r=Bi;break;case 536870912:r=Gu;break;default:r=Bi}r=Sd(r,gd.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function gd(e,t){if(zi=-1,Ri=0,O&6)throw Error(C(327));var r=e.callbackNode;if(Dr()&&e.callbackNode!==r)return null;var n=Ui(e,e===ae?ue:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=lo(e,n);else{t=n;var i=O;O|=2;var o=yd();(ae!==e||ue!==t)&&(ct=null,Wr=q()+500,er(e,t));do try{M2();break}catch(s){vd(e,s)}while(1);ns(),no.current=o,O=i,te!==null?t=0:(ae=null,ue=0,t=ne)}if(t!==0){if(t===2&&(i=Al(e),i!==0&&(n=i,t=ha(e,i))),t===1)throw r=Un,er(e,0),_t(e,n),Pe(e,q()),r;if(t===6)_t(e,n);else{if(i=e.current.alternate,!(n&30)&&!L2(i)&&(t=lo(e,n),t===2&&(o=Al(e),o!==0&&(n=o,t=ha(e,o))),t===1))throw r=Un,er(e,0),_t(e,n),Pe(e,q()),r;switch(e.finishedWork=i,e.finishedLanes=n,t){case 0:case 1:throw Error(C(345));case 2:Kt(e,je,ct);break;case 3:if(_t(e,n),(n&130023424)===n&&(t=ys+500-q(),10<t)){if(Ui(e,0)!==0)break;if(i=e.suspendedLanes,(i&n)!==n){xe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Xl(Kt.bind(null,e,je,ct),t);break}Kt(e,je,ct);break;case 4:if(_t(e,n),(n&4194240)===n)break;for(t=e.eventTimes,i=-1;0<n;){var l=31-Xe(n);o=1<<l,l=t[l],l>i&&(i=l),n&=~o}if(n=i,n=q()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*R2(n/1960))-n,10<n){e.timeoutHandle=Xl(Kt.bind(null,e,je,ct),n);break}Kt(e,je,ct);break;case 5:Kt(e,je,ct);break;default:throw Error(C(329))}}}return Pe(e,q()),e.callbackNode===r?gd.bind(null,e):null}function ha(e,t){var r=Sn;return e.current.memoizedState.isDehydrated&&(er(e,t).flags|=256),e=lo(e,t),e!==2&&(t=je,je=r,t!==null&&ma(t)),e}function ma(e){je===null?je=e:je.push.apply(je,e)}function L2(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var i=r[n],o=i.getSnapshot;i=i.value;try{if(!Ge(o(),i))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function _t(e,t){for(t&=~vs,t&=~No,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Xe(t),n=1<<r;e[r]=-1,t&=~n}}function Dc(e){if(O&6)throw Error(C(327));Dr();var t=Ui(e,0);if(!(t&1))return Pe(e,q()),null;var r=lo(e,t);if(e.tag!==0&&r===2){var n=Al(e);n!==0&&(t=n,r=ha(e,n))}if(r===1)throw r=Un,er(e,0),_t(e,t),Pe(e,q()),r;if(r===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Kt(e,je,ct),Pe(e,q()),null}function xs(e,t){var r=O;O|=1;try{return e(t)}finally{O=r,O===0&&(Wr=q()+500,So&&Qt())}}function ar(e){Rt!==null&&Rt.tag===0&&!(O&6)&&Dr();var t=O;O|=1;var r=Fe.transition,n=D;try{if(Fe.transition=null,D=1,e)return e()}finally{D=n,Fe.transition=r,O=t,!(O&6)&&Qt()}}function ws(){Te=zr.current,V(zr)}function er(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,s2(r)),te!==null)for(r=te.return;r!==null;){var n=r;switch(es(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Qi();break;case 3:Hr(),V(Ce),V(me),cs();break;case 5:ss(n);break;case 4:Hr();break;case 13:V(Q);break;case 19:V(Q);break;case 10:is(n.type._context);break;case 22:case 23:ws()}r=r.return}if(ae=e,te=e=At(e.current,null),ue=Te=t,ne=0,Un=null,vs=No=lr=0,je=Sn=null,Gt!==null){for(t=0;t<Gt.length;t++)if(r=Gt[t],n=r.interleaved,n!==null){r.interleaved=null;var i=n.next,o=r.pending;if(o!==null){var l=o.next;o.next=i,n.next=l}r.pending=n}Gt=null}return e}function vd(e,t){do{var r=te;try{if(ns(),Ni.current=ro,to){for(var n=X.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}to=!1}if(or=0,ie=re=X=null,kn=!1,Fn=0,gs.current=null,r===null||r.return===null){ne=1,Un=t,te=null;break}e:{var o=e,l=r.return,s=r,c=t;if(t=ue,s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,f=s,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var v=Ec(l);if(v!==null){v.flags&=-257,Pc(v,l,s,o,t),v.mode&1&&Cc(o,u,t),t=v,c=u;var y=t.updateQueue;if(y===null){var w=new Set;w.add(c),t.updateQueue=w}else y.add(c);break e}else{if(!(t&1)){Cc(o,u,t),ks();break e}c=Error(C(426))}}else if(Z&&s.mode&1){var P=Ec(l);if(P!==null){!(P.flags&65536)&&(P.flags|=256),Pc(P,l,s,o,t),ts(Vr(c,s));break e}}o=c=Vr(c,s),ne!==4&&(ne=2),Sn===null?Sn=[o]:Sn.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=ed(o,c,t);vc(o,p);break e;case 1:s=c;var d=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Dt===null||!Dt.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=td(o,s,t);vc(o,x);break e}}o=o.return}while(o!==null)}wd(r)}catch(k){t=k,te===r&&r!==null&&(te=r=r.return);continue}break}while(1)}function yd(){var e=no.current;return no.current=ro,e===null?ro:e}function ks(){(ne===0||ne===3||ne===2)&&(ne=4),ae===null||!(lr&268435455)&&!(No&268435455)||_t(ae,ue)}function lo(e,t){var r=O;O|=2;var n=yd();(ae!==e||ue!==t)&&(ct=null,er(e,t));do try{b2();break}catch(i){vd(e,i)}while(1);if(ns(),O=r,no.current=n,te!==null)throw Error(C(261));return ae=null,ue=0,ne}function b2(){for(;te!==null;)xd(te)}function M2(){for(;te!==null&&!of();)xd(te)}function xd(e){var t=jd(e.alternate,e,Te);e.memoizedProps=e.pendingProps,t===null?wd(e):te=t,gs.current=null}function wd(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=N2(r,t),r!==null){r.flags&=32767,te=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ne=6,te=null;return}}else if(r=P2(r,t,Te),r!==null){te=r;return}if(t=t.sibling,t!==null){te=t;return}te=t=e}while(t!==null);ne===0&&(ne=5)}function Kt(e,t,r){var n=D,i=Fe.transition;try{Fe.transition=null,D=1,I2(e,t,r,n)}finally{Fe.transition=i,D=n}return null}function I2(e,t,r,n){do Dr();while(Rt!==null);if(O&6)throw Error(C(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var o=r.lanes|r.childLanes;if(mf(e,o),e===ae&&(te=ae=null,ue=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||yi||(yi=!0,Sd(Bi,function(){return Dr(),null})),o=(r.flags&15990)!==0,r.subtreeFlags&15990||o){o=Fe.transition,Fe.transition=null;var l=D;D=1;var s=O;O|=4,gs.current=null,T2(e,r),hd(r,e),t2(Zl),Hi=!!Wl,Zl=Wl=null,e.current=r,z2(r),lf(),O=s,D=l,Fe.transition=o}else e.current=r;if(yi&&(yi=!1,Rt=e,oo=i),o=e.pendingLanes,o===0&&(Dt=null),cf(r.stateNode),Pe(e,q()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)i=t[r],n(i.value,{componentStack:i.stack,digest:i.digest});if(io)throw io=!1,e=fa,fa=null,e;return oo&1&&e.tag!==0&&Dr(),o=e.pendingLanes,o&1?e===pa?Cn++:(Cn=0,pa=e):Cn=0,Qt(),null}function Dr(){if(Rt!==null){var e=qu(oo),t=Fe.transition,r=D;try{if(Fe.transition=null,D=16>e?16:e,Rt===null)var n=!1;else{if(e=Rt,Rt=null,oo=0,O&6)throw Error(C(331));var i=O;for(O|=4,_=e.current;_!==null;){var o=_,l=o.child;if(_.flags&16){var s=o.deletions;if(s!==null){for(var c=0;c<s.length;c++){var u=s[c];for(_=u;_!==null;){var f=_;switch(f.tag){case 0:case 11:case 15:jn(8,f,o)}var h=f.child;if(h!==null)h.return=f,_=h;else for(;_!==null;){f=_;var g=f.sibling,v=f.return;if(dd(f),f===u){_=null;break}if(g!==null){g.return=v,_=g;break}_=v}}}var y=o.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var P=w.sibling;w.sibling=null,w=P}while(w!==null)}}_=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,_=l;else e:for(;_!==null;){if(o=_,o.flags&2048)switch(o.tag){case 0:case 11:case 15:jn(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,_=p;break e}_=o.return}}var d=e.current;for(_=d;_!==null;){l=_;var m=l.child;if(l.subtreeFlags&2064&&m!==null)m.return=l,_=m;else e:for(l=d;_!==null;){if(s=_,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Po(9,s)}}catch(k){G(s,s.return,k)}if(s===l){_=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,_=x;break e}_=s.return}}if(O=i,Qt(),nt&&typeof nt.onPostCommitFiberRoot=="function")try{nt.onPostCommitFiberRoot(yo,e)}catch{}n=!0}return n}finally{D=r,Fe.transition=t}}return!1}function Fc(e,t,r){t=Vr(r,t),t=ed(e,t,1),e=$t(e,t,1),t=xe(),e!==null&&(Kn(e,1,t),Pe(e,t))}function G(e,t,r){if(e.tag===3)Fc(e,e,r);else for(;t!==null;){if(t.tag===3){Fc(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Dt===null||!Dt.has(n))){e=Vr(r,e),e=td(t,e,1),t=$t(t,e,1),e=xe(),t!==null&&(Kn(t,1,e),Pe(t,e));break}}t=t.return}}function O2(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=xe(),e.pingedLanes|=e.suspendedLanes&r,ae===e&&(ue&r)===r&&(ne===4||ne===3&&(ue&130023424)===ue&&500>q()-ys?er(e,0):vs|=r),Pe(e,t)}function kd(e,t){t===0&&(e.mode&1?(t=si,si<<=1,!(si&130023424)&&(si=4194304)):t=1);var r=xe();e=vt(e,t),e!==null&&(Kn(e,t,r),Pe(e,r))}function $2(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),kd(e,r)}function D2(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(C(314))}n!==null&&n.delete(t),kd(e,r)}var jd;jd=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ce.current)Se=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return Se=!1,E2(e,t,r);Se=!!(e.flags&131072)}else Se=!1,Z&&t.flags&1048576&&E1(t,Yi,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;Ti(e,t),e=t.pendingProps;var i=Ar(t,me.current);$r(t,r),i=ds(null,t,n,e,i,r);var o=fs();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ee(n)?(o=!0,Xi(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ls(t),i.updater=Co,t.stateNode=i,i._reactInternals=t,ta(t,n,e,r),t=ia(null,t,n,!0,o,r)):(t.tag=0,Z&&o&&qa(t),ye(null,t,i,r),t=t.child),t;case 16:n=t.elementType;e:{switch(Ti(e,t),e=t.pendingProps,i=n._init,n=i(n._payload),t.type=n,i=t.tag=A2(n),e=We(n,e),i){case 0:t=na(null,t,n,e,r);break e;case 1:t=Tc(null,t,n,e,r);break e;case 11:t=Nc(null,t,n,e,r);break e;case 14:t=_c(null,t,n,We(n.type,e),r);break e}throw Error(C(306,n,""))}return t;case 0:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:We(n,i),na(e,t,n,i,r);case 1:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:We(n,i),Tc(e,t,n,i,r);case 3:e:{if(od(t),e===null)throw Error(C(387));n=t.pendingProps,o=t.memoizedState,i=o.element,T1(e,t),qi(t,n,null,r);var l=t.memoizedState;if(n=l.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Vr(Error(C(423)),t),t=zc(e,t,n,r,i);break e}else if(n!==i){i=Vr(Error(C(424)),t),t=zc(e,t,n,r,i);break e}else for(ze=Ot(t.stateNode.containerInfo.firstChild),Re=t,Z=!0,Qe=null,r=b1(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Br(),n===i){t=yt(e,t,r);break e}ye(e,t,n,r)}t=t.child}return t;case 5:return M1(t),e===null&&Jl(t),n=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,Ql(n,i)?l=null:o!==null&&Ql(n,o)&&(t.flags|=32),id(e,t),ye(e,t,l,r),t.child;case 6:return e===null&&Jl(t),null;case 13:return ld(e,t,r);case 4:return as(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Ur(t,null,n,r):ye(e,t,n,r),t.child;case 11:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:We(n,i),Nc(e,t,n,i,r);case 7:return ye(e,t,t.pendingProps,r),t.child;case 8:return ye(e,t,t.pendingProps.children,r),t.child;case 12:return ye(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,A(Gi,n._currentValue),n._currentValue=l,o!==null)if(Ge(o.value,l)){if(o.children===i.children&&!Ce.current){t=yt(e,t,r);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){l=o.child;for(var c=s.firstContext;c!==null;){if(c.context===n){if(o.tag===1){c=ht(-1,r&-r),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?c.next=c:(c.next=f.next,f.next=c),u.pending=c}}o.lanes|=r,c=o.alternate,c!==null&&(c.lanes|=r),ql(o.return,r,t),s.lanes|=r;break}c=c.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(C(341));l.lanes|=r,s=l.alternate,s!==null&&(s.lanes|=r),ql(l,r,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}ye(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,n=t.pendingProps.children,$r(t,r),i=Ae(i),n=n(i),t.flags|=1,ye(e,t,n,r),t.child;case 14:return n=t.type,i=We(n,t.pendingProps),i=We(n.type,i),_c(e,t,n,i,r);case 15:return rd(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:We(n,i),Ti(e,t),t.tag=1,Ee(n)?(e=!0,Xi(t)):e=!1,$r(t,r),R1(t,n,i),ta(t,n,i,r),ia(null,t,n,!0,e,r);case 19:return ad(e,t,r);case 22:return nd(e,t,r)}throw Error(C(156,t.tag))};function Sd(e,t){return Ku(e,t)}function F2(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function De(e,t,r,n){return new F2(e,t,r,n)}function js(e){return e=e.prototype,!(!e||!e.isReactComponent)}function A2(e){if(typeof e=="function")return js(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ba)return 11;if(e===Ua)return 14}return 2}function At(e,t){var r=e.alternate;return r===null?(r=De(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Li(e,t,r,n,i,o){var l=2;if(n=e,typeof e=="function")js(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case wr:return tr(r.children,i,o,t);case Aa:l=8,i|=8;break;case El:return e=De(12,r,t,i|2),e.elementType=El,e.lanes=o,e;case Pl:return e=De(13,r,t,i),e.elementType=Pl,e.lanes=o,e;case Nl:return e=De(19,r,t,i),e.elementType=Nl,e.lanes=o,e;case Lu:return _o(r,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case zu:l=10;break e;case Ru:l=9;break e;case Ba:l=11;break e;case Ua:l=14;break e;case Et:l=16,n=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return t=De(l,r,t,i),t.elementType=e,t.type=n,t.lanes=o,t}function tr(e,t,r,n){return e=De(7,e,n,t),e.lanes=r,e}function _o(e,t,r,n){return e=De(22,e,n,t),e.elementType=Lu,e.lanes=r,e.stateNode={isHidden:!1},e}function fl(e,t,r){return e=De(6,e,null,t),e.lanes=r,e}function pl(e,t,r){return t=De(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function B2(e,t,r,n,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Qo(0),this.expirationTimes=Qo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qo(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ss(e,t,r,n,i,o,l,s,c){return e=new B2(e,t,r,s,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=De(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},ls(o),e}function U2(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xr,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function Cd(e){if(!e)return Vt;e=e._reactInternals;e:{if(dr(e)!==e||e.tag!==1)throw Error(C(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ee(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(C(171))}if(e.tag===1){var r=e.type;if(Ee(r))return S1(e,r,t)}return t}function Ed(e,t,r,n,i,o,l,s,c){return e=Ss(r,n,!0,e,i,o,l,s,c),e.context=Cd(null),r=e.current,n=xe(),i=Ft(r),o=ht(n,i),o.callback=t??null,$t(r,o,i),e.current.lanes=i,Kn(e,i,n),Pe(e,n),e}function To(e,t,r,n){var i=t.current,o=xe(),l=Ft(i);return r=Cd(r),t.context===null?t.context=r:t.pendingContext=r,t=ht(o,l),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=$t(i,t,l),e!==null&&(Ke(e,i,l,o),Pi(e,i,l)),l}function ao(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ac(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Cs(e,t){Ac(e,t),(e=e.alternate)&&Ac(e,t)}function H2(){return null}var Pd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Es(e){this._internalRoot=e}zo.prototype.render=Es.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));To(e,t,null,null)};zo.prototype.unmount=Es.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ar(function(){To(null,e,null,null)}),t[gt]=null}};function zo(e){this._internalRoot=e}zo.prototype.unstable_scheduleHydration=function(e){if(e){var t=r1();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Nt.length&&t!==0&&t<Nt[r].priority;r++);Nt.splice(r,0,e),r===0&&i1(e)}};function Ps(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ro(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Bc(){}function V2(e,t,r,n,i){if(i){if(typeof n=="function"){var o=n;n=function(){var u=ao(l);o.call(u)}}var l=Ed(t,n,e,0,null,!1,!1,"",Bc);return e._reactRootContainer=l,e[gt]=l.current,Mn(e.nodeType===8?e.parentNode:e),ar(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof n=="function"){var s=n;n=function(){var u=ao(c);s.call(u)}}var c=Ss(e,0,!1,null,null,!1,!1,"",Bc);return e._reactRootContainer=c,e[gt]=c.current,Mn(e.nodeType===8?e.parentNode:e),ar(function(){To(t,c,r,n)}),c}function Lo(e,t,r,n,i){var o=r._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var s=i;i=function(){var c=ao(l);s.call(c)}}To(t,l,e,i)}else l=V2(r,t,e,i,n);return ao(l)}e1=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=pn(t.pendingLanes);r!==0&&(Wa(t,r|1),Pe(t,q()),!(O&6)&&(Wr=q()+500,Qt()))}break;case 13:ar(function(){var n=vt(e,1);if(n!==null){var i=xe();Ke(n,e,1,i)}}),Cs(e,1)}};Za=function(e){if(e.tag===13){var t=vt(e,134217728);if(t!==null){var r=xe();Ke(t,e,134217728,r)}Cs(e,134217728)}};t1=function(e){if(e.tag===13){var t=Ft(e),r=vt(e,t);if(r!==null){var n=xe();Ke(r,e,t,n)}Cs(e,t)}};r1=function(){return D};n1=function(e,t){var r=D;try{return D=e,t()}finally{D=r}};$l=function(e,t,r){switch(t){case"input":if(zl(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var i=jo(n);if(!i)throw Error(C(90));Mu(n),zl(n,i)}}}break;case"textarea":Ou(e,r);break;case"select":t=r.value,t!=null&&br(e,!!r.multiple,t,!1)}};Hu=xs;Vu=ar;var W2={usingClientEntryPoint:!1,Events:[Gn,Cr,jo,Bu,Uu,xs]},un={findFiberByHostInstance:Yt,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Z2={bundleType:un.bundleType,version:un.version,rendererPackageName:un.rendererPackageName,rendererConfig:un.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:xt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Qu(e),e===null?null:e.stateNode},findFiberByHostInstance:un.findFiberByHostInstance||H2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xi.isDisabled&&xi.supportsFiber)try{yo=xi.inject(Z2),nt=xi}catch{}}be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W2;be.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ps(t))throw Error(C(200));return U2(e,t,null,r)};be.createRoot=function(e,t){if(!Ps(e))throw Error(C(299));var r=!1,n="",i=Pd;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ss(e,1,!1,null,null,r,!1,n,i),e[gt]=t.current,Mn(e.nodeType===8?e.parentNode:e),new Es(t)};be.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=Qu(t),e=e===null?null:e.stateNode,e};be.flushSync=function(e){return ar(e)};be.hydrate=function(e,t,r){if(!Ro(t))throw Error(C(200));return Lo(null,e,t,!0,r)};be.hydrateRoot=function(e,t,r){if(!Ps(e))throw Error(C(405));var n=r!=null&&r.hydratedSources||null,i=!1,o="",l=Pd;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(l=r.onRecoverableError)),t=Ed(t,null,e,1,r??null,i,!1,o,l),e[gt]=t.current,Mn(e),n)for(e=0;e<n.length;e++)r=n[e],i=r._getVersion,i=i(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new zo(t)};be.render=function(e,t,r){if(!Ro(t))throw Error(C(200));return Lo(null,e,t,!1,r)};be.unmountComponentAtNode=function(e){if(!Ro(e))throw Error(C(40));return e._reactRootContainer?(ar(function(){Lo(null,null,e,!1,function(){e._reactRootContainer=null,e[gt]=null})}),!0):!1};be.unstable_batchedUpdates=xs;be.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!Ro(r))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return Lo(e,t,r,!1,n)};be.version="18.2.0-next-9e3b772b8-20220608";function Nd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Nd)}catch(e){console.error(e)}}Nd(),Eu.exports=be;var Q2=Eu.exports,Uc=Q2;Sl.createRoot=Uc.createRoot,Sl.hydrateRoot=Uc.hydrateRoot;/**
 * @remix-run/router v1.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Hn(){return Hn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Hn.apply(this,arguments)}var Lt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Lt||(Lt={}));const Hc="popstate";function X2(e){e===void 0&&(e={});function t(n,i){let{pathname:o,search:l,hash:s}=n.location;return ga("",{pathname:o,search:l,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function r(n,i){return typeof i=="string"?i:so(i)}return Y2(t,r,null,e)}function J(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ns(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function K2(){return Math.random().toString(36).substr(2,8)}function Vc(e,t){return{usr:e.state,key:e.key,idx:t}}function ga(e,t,r,n){return r===void 0&&(r=null),Hn({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?en(t):t,{state:r,key:t&&t.key||n||K2()})}function so(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function en(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function Y2(e,t,r,n){n===void 0&&(n={});let{window:i=document.defaultView,v5Compat:o=!1}=n,l=i.history,s=Lt.Pop,c=null,u=f();u==null&&(u=0,l.replaceState(Hn({},l.state,{idx:u}),""));function f(){return(l.state||{idx:null}).idx}function h(){s=Lt.Pop;let P=f(),p=P==null?null:P-u;u=P,c&&c({action:s,location:w.location,delta:p})}function g(P,p){s=Lt.Push;let d=ga(w.location,P,p);r&&r(d,P),u=f()+1;let m=Vc(d,u),x=w.createHref(d);try{l.pushState(m,"",x)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;i.location.assign(x)}o&&c&&c({action:s,location:w.location,delta:1})}function v(P,p){s=Lt.Replace;let d=ga(w.location,P,p);r&&r(d,P),u=f();let m=Vc(d,u),x=w.createHref(d);l.replaceState(m,"",x),o&&c&&c({action:s,location:w.location,delta:0})}function y(P){let p=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof P=="string"?P:so(P);return J(p,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,p)}let w={get action(){return s},get location(){return e(i,l)},listen(P){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Hc,h),c=P,()=>{i.removeEventListener(Hc,h),c=null}},createHref(P){return t(i,P)},createURL:y,encodeLocation(P){let p=y(P);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:g,replace:v,go(P){return l.go(P)}};return w}var Wc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Wc||(Wc={}));function G2(e,t,r){r===void 0&&(r="/");let n=typeof t=="string"?en(t):t,i=Vn(n.pathname||"/",r);if(i==null)return null;let o=_d(e);J2(o);let l=null;for(let s=0;l==null&&s<o.length;++s)l=ap(o[s],cp(i));return l}function _d(e,t,r,n){t===void 0&&(t=[]),r===void 0&&(r=[]),n===void 0&&(n="");let i=(o,l,s)=>{let c={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};c.relativePath.startsWith("/")&&(J(c.relativePath.startsWith(n),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(n.length));let u=Bt([n,c.relativePath]),f=r.concat(c);o.children&&o.children.length>0&&(J(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),_d(o.children,t,f,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:op(u,o.index),routesMeta:f})};return e.forEach((o,l)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))i(o,l);else for(let c of Td(o.path))i(o,l,c)}),t}function Td(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,i=r.endsWith("?"),o=r.replace(/\?$/,"");if(n.length===0)return i?[o,""]:[o];let l=Td(n.join("/")),s=[];return s.push(...l.map(c=>c===""?o:[o,c].join("/"))),i&&s.push(...l),s.map(c=>e.startsWith("/")&&c===""?"/":c)}function J2(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:lp(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const q2=/^:\w+$/,ep=3,tp=2,rp=1,np=10,ip=-2,Zc=e=>e==="*";function op(e,t){let r=e.split("/"),n=r.length;return r.some(Zc)&&(n+=ip),t&&(n+=tp),r.filter(i=>!Zc(i)).reduce((i,o)=>i+(q2.test(o)?ep:o===""?rp:np),n)}function lp(e,t){return e.length===t.length&&e.slice(0,-1).every((n,i)=>n===t[i])?e[e.length-1]-t[t.length-1]:0}function ap(e,t){let{routesMeta:r}=e,n={},i="/",o=[];for(let l=0;l<r.length;++l){let s=r[l],c=l===r.length-1,u=i==="/"?t:t.slice(i.length)||"/",f=va({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},u);if(!f)return null;Object.assign(n,f.params);let h=s.route;o.push({params:n,pathname:Bt([i,f.pathname]),pathnameBase:pp(Bt([i,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(i=Bt([i,f.pathnameBase]))}return o}function va(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=sp(e.path,e.caseSensitive,e.end),i=t.match(r);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:n.reduce((u,f,h)=>{let{paramName:g,isOptional:v}=f;if(g==="*"){let w=s[h]||"";l=o.slice(0,o.length-w.length).replace(/(.)\/+$/,"$1")}const y=s[h];return v&&!y?u[g]=void 0:u[g]=up(y||"",g),u},{}),pathname:o,pathnameBase:l,pattern:e}}function sp(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),Ns(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let n=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(l,s,c)=>(n.push({paramName:s,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(n.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),n]}function cp(e){try{return decodeURI(e)}catch(t){return Ns(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function up(e,t){try{return decodeURIComponent(e)}catch(r){return Ns(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+r+").")),e}}function Vn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}function dp(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:i=""}=typeof e=="string"?en(e):e;return{pathname:r?r.startsWith("/")?r:fp(r,t):t,search:hp(n),hash:mp(i)}}function fp(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?r.length>1&&r.pop():i!=="."&&r.push(i)}),r.length>1?r.join("/"):"/"}function hl(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function zd(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function Rd(e,t,r,n){n===void 0&&(n=!1);let i;typeof e=="string"?i=en(e):(i=Hn({},e),J(!i.pathname||!i.pathname.includes("?"),hl("?","pathname","search",i)),J(!i.pathname||!i.pathname.includes("#"),hl("#","pathname","hash",i)),J(!i.search||!i.search.includes("#"),hl("#","search","hash",i)));let o=e===""||i.pathname==="",l=o?"/":i.pathname,s;if(n||l==null)s=r;else{let h=t.length-1;if(l.startsWith("..")){let g=l.split("/");for(;g[0]==="..";)g.shift(),h-=1;i.pathname=g.join("/")}s=h>=0?t[h]:"/"}let c=dp(i,s),u=l&&l!=="/"&&l.endsWith("/"),f=(o||l===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(u||f)&&(c.pathname+="/"),c}const Bt=e=>e.join("/").replace(/\/\/+/g,"/"),pp=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),hp=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,mp=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function gp(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Ld=["post","put","patch","delete"];new Set(Ld);const vp=["get",...Ld];new Set(vp);/**
 * React Router v6.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function co(){return co=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},co.apply(this,arguments)}const bo=E.createContext(null),bd=E.createContext(null),fr=E.createContext(null),Mo=E.createContext(null),pr=E.createContext({outlet:null,matches:[],isDataRoute:!1}),Md=E.createContext(null);function yp(e,t){let{relative:r}=t===void 0?{}:t;qn()||J(!1);let{basename:n,navigator:i}=E.useContext(fr),{hash:o,pathname:l,search:s}=Io(e,{relative:r}),c=l;return n!=="/"&&(c=l==="/"?n:Bt([n,l])),i.createHref({pathname:c,search:s,hash:o})}function qn(){return E.useContext(Mo)!=null}function ei(){return qn()||J(!1),E.useContext(Mo).location}function Id(e){E.useContext(fr).static||E.useLayoutEffect(e)}function hr(){let{isDataRoute:e}=E.useContext(pr);return e?Rp():xp()}function xp(){qn()||J(!1);let e=E.useContext(bo),{basename:t,navigator:r}=E.useContext(fr),{matches:n}=E.useContext(pr),{pathname:i}=ei(),o=JSON.stringify(zd(n).map(c=>c.pathnameBase)),l=E.useRef(!1);return Id(()=>{l.current=!0}),E.useCallback(function(c,u){if(u===void 0&&(u={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let f=Rd(c,JSON.parse(o),i,u.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Bt([t,f.pathname])),(u.replace?r.replace:r.push)(f,u.state,u)},[t,r,o,i,e])}function Io(e,t){let{relative:r}=t===void 0?{}:t,{matches:n}=E.useContext(pr),{pathname:i}=ei(),o=JSON.stringify(zd(n).map(l=>l.pathnameBase));return E.useMemo(()=>Rd(e,JSON.parse(o),i,r==="path"),[e,o,i,r])}function wp(e,t){return kp(e,t)}function kp(e,t,r){qn()||J(!1);let{navigator:n}=E.useContext(fr),{matches:i}=E.useContext(pr),o=i[i.length-1],l=o?o.params:{};o&&o.pathname;let s=o?o.pathnameBase:"/";o&&o.route;let c=ei(),u;if(t){var f;let w=typeof t=="string"?en(t):t;s==="/"||(f=w.pathname)!=null&&f.startsWith(s)||J(!1),u=w}else u=c;let h=u.pathname||"/",g=s==="/"?h:h.slice(s.length)||"/",v=G2(e,{pathname:g}),y=Pp(v&&v.map(w=>Object.assign({},w,{params:Object.assign({},l,w.params),pathname:Bt([s,n.encodeLocation?n.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?s:Bt([s,n.encodeLocation?n.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,r);return t&&y?E.createElement(Mo.Provider,{value:{location:co({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Lt.Pop}},y):y}function jp(){let e=zp(),t=gp(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},t),r?E.createElement("pre",{style:i},r):null,o)}const Sp=E.createElement(jp,null);class Cp extends E.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error?E.createElement(pr.Provider,{value:this.props.routeContext},E.createElement(Md.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Ep(e){let{routeContext:t,match:r,children:n}=e,i=E.useContext(bo);return i&&i.static&&i.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=r.route.id),E.createElement(pr.Provider,{value:t},n)}function Pp(e,t,r){var n;if(t===void 0&&(t=[]),r===void 0&&(r=null),e==null){var i;if((i=r)!=null&&i.errors)e=r.matches;else return null}let o=e,l=(n=r)==null?void 0:n.errors;if(l!=null){let s=o.findIndex(c=>c.route.id&&(l==null?void 0:l[c.route.id]));s>=0||J(!1),o=o.slice(0,Math.min(o.length,s+1))}return o.reduceRight((s,c,u)=>{let f=c.route.id?l==null?void 0:l[c.route.id]:null,h=null;r&&(h=c.route.errorElement||Sp);let g=t.concat(o.slice(0,u+1)),v=()=>{let y;return f?y=h:c.route.Component?y=E.createElement(c.route.Component,null):c.route.element?y=c.route.element:y=s,E.createElement(Ep,{match:c,routeContext:{outlet:s,matches:g,isDataRoute:r!=null},children:y})};return r&&(c.route.ErrorBoundary||c.route.errorElement||u===0)?E.createElement(Cp,{location:r.location,revalidation:r.revalidation,component:h,error:f,children:v(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):v()},null)}var Od=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Od||{}),uo=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(uo||{});function Np(e){let t=E.useContext(bo);return t||J(!1),t}function _p(e){let t=E.useContext(bd);return t||J(!1),t}function Tp(e){let t=E.useContext(pr);return t||J(!1),t}function $d(e){let t=Tp(),r=t.matches[t.matches.length-1];return r.route.id||J(!1),r.route.id}function zp(){var e;let t=E.useContext(Md),r=_p(uo.UseRouteError),n=$d(uo.UseRouteError);return t||((e=r.errors)==null?void 0:e[n])}function Rp(){let{router:e}=Np(Od.UseNavigateStable),t=$d(uo.UseNavigateStable),r=E.useRef(!1);return Id(()=>{r.current=!0}),E.useCallback(function(i,o){o===void 0&&(o={}),r.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,co({fromRouteId:t},o)))},[e,t])}function qe(e){J(!1)}function Lp(e){let{basename:t="/",children:r=null,location:n,navigationType:i=Lt.Pop,navigator:o,static:l=!1}=e;qn()&&J(!1);let s=t.replace(/^\/*/,"/"),c=E.useMemo(()=>({basename:s,navigator:o,static:l}),[s,o,l]);typeof n=="string"&&(n=en(n));let{pathname:u="/",search:f="",hash:h="",state:g=null,key:v="default"}=n,y=E.useMemo(()=>{let w=Vn(u,s);return w==null?null:{location:{pathname:w,search:f,hash:h,state:g,key:v},navigationType:i}},[s,u,f,h,g,v,i]);return y==null?null:E.createElement(fr.Provider,{value:c},E.createElement(Mo.Provider,{children:r,value:y}))}function bp(e){let{children:t,location:r}=e;return wp(ya(t),r)}new Promise(()=>{});function ya(e,t){t===void 0&&(t=[]);let r=[];return E.Children.forEach(e,(n,i)=>{if(!E.isValidElement(n))return;let o=[...t,i];if(n.type===E.Fragment){r.push.apply(r,ya(n.props.children,o));return}n.type!==qe&&J(!1),!n.props.index||!n.props.children||J(!1);let l={id:n.props.id||o.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(l.children=ya(n.props.children,o)),r.push(l)}),r}/**
 * React Router DOM v6.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fo(){return fo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},fo.apply(this,arguments)}function Dd(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,o;for(o=0;o<n.length;o++)i=n[o],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}function Mp(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Ip(e,t){return e.button===0&&(!t||t==="_self")&&!Mp(e)}const Op=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],$p=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],Dp=E.createContext({isTransitioning:!1}),Fp="startTransition",Qc=O0[Fp];function Ap(e){let{basename:t,children:r,future:n,window:i}=e,o=E.useRef();o.current==null&&(o.current=X2({window:i,v5Compat:!0}));let l=o.current,[s,c]=E.useState({action:l.action,location:l.location}),{v7_startTransition:u}=n||{},f=E.useCallback(h=>{u&&Qc?Qc(()=>c(h)):c(h)},[c,u]);return E.useLayoutEffect(()=>l.listen(f),[l,f]),E.createElement(Lp,{basename:t,children:r,location:s.location,navigationType:s.action,navigator:l})}const Bp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Up=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Hp=E.forwardRef(function(t,r){let{onClick:n,relative:i,reloadDocument:o,replace:l,state:s,target:c,to:u,preventScrollReset:f,unstable_viewTransition:h}=t,g=Dd(t,Op),{basename:v}=E.useContext(fr),y,w=!1;if(typeof u=="string"&&Up.test(u)&&(y=u,Bp))try{let m=new URL(window.location.href),x=u.startsWith("//")?new URL(m.protocol+u):new URL(u),k=Vn(x.pathname,v);x.origin===m.origin&&k!=null?u=k+x.search+x.hash:w=!0}catch{}let P=yp(u,{relative:i}),p=Wp(u,{replace:l,state:s,target:c,preventScrollReset:f,relative:i,unstable_viewTransition:h});function d(m){n&&n(m),m.defaultPrevented||p(m)}return E.createElement("a",fo({},g,{href:y||P,onClick:w||o?n:d,ref:r,target:c}))}),Tt=E.forwardRef(function(t,r){let{"aria-current":n="page",caseSensitive:i=!1,className:o="",end:l=!1,style:s,to:c,unstable_viewTransition:u,children:f}=t,h=Dd(t,$p),g=Io(c,{relative:h.relative}),v=ei(),y=E.useContext(bd),{navigator:w}=E.useContext(fr),P=y!=null&&Zp(g)&&u===!0,p=w.encodeLocation?w.encodeLocation(g).pathname:g.pathname,d=v.pathname,m=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;i||(d=d.toLowerCase(),m=m?m.toLowerCase():null,p=p.toLowerCase());let x=d===p||!l&&d.startsWith(p)&&d.charAt(p.length)==="/",k=m!=null&&(m===p||!l&&m.startsWith(p)&&m.charAt(p.length)==="/"),j={isActive:x,isPending:k,isTransitioning:P},S=x?n:void 0,T;typeof o=="function"?T=o(j):T=[o,x?"active":null,k?"pending":null,P?"transitioning":null].filter(Boolean).join(" ");let F=typeof s=="function"?s(j):s;return E.createElement(Hp,fo({},h,{"aria-current":S,className:T,ref:r,style:F,to:c,unstable_viewTransition:u}),typeof f=="function"?f(j):f)});var xa;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(xa||(xa={}));var Xc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Xc||(Xc={}));function Vp(e){let t=E.useContext(bo);return t||J(!1),t}function Wp(e,t){let{target:r,replace:n,state:i,preventScrollReset:o,relative:l,unstable_viewTransition:s}=t===void 0?{}:t,c=hr(),u=ei(),f=Io(e,{relative:l});return E.useCallback(h=>{if(Ip(h,r)){h.preventDefault();let g=n!==void 0?n:so(u)===so(f);c(e,{replace:g,state:i,preventScrollReset:o,relative:l,unstable_viewTransition:s})}},[u,c,f,n,i,r,e,o,l,s])}function Zp(e,t){t===void 0&&(t={});let r=E.useContext(Dp);r==null&&J(!1);let{basename:n}=Vp(xa.useViewTransitionState),i=Io(e,{relative:t.relative});if(!r.isTransitioning)return!1;let o=Vn(r.currentLocation.pathname,n)||r.currentLocation.pathname,l=Vn(r.nextLocation.pathname,n)||r.nextLocation.pathname;return va(i.pathname,l)!=null||va(i.pathname,o)!=null}var le=function(){return le=Object.assign||function(t){for(var r,n=1,i=arguments.length;n<i;n++){r=arguments[n];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},le.apply(this,arguments)};function Wn(e,t,r){if(r||arguments.length===2)for(var n=0,i=t.length,o;n<i;n++)(o||!(n in t))&&(o||(o=Array.prototype.slice.call(t,0,n)),o[n]=t[n]);return e.concat(o||Array.prototype.slice.call(t))}var U="-ms-",En="-moz-",$="-webkit-",Fd="comm",Oo="rule",_s="decl",Qp="@import",Ad="@keyframes",Xp="@layer",Kp=Math.abs,Ts=String.fromCharCode,wa=Object.assign;function Yp(e,t){return oe(e,0)^45?(((t<<2^oe(e,0))<<2^oe(e,1))<<2^oe(e,2))<<2^oe(e,3):0}function Bd(e){return e.trim()}function ut(e,t){return(e=t.exec(e))?e[0]:e}function L(e,t,r){return e.replace(t,r)}function bi(e,t){return e.indexOf(t)}function oe(e,t){return e.charCodeAt(t)|0}function Zr(e,t,r){return e.slice(t,r)}function tt(e){return e.length}function Ud(e){return e.length}function mn(e,t){return t.push(e),e}function Gp(e,t){return e.map(t).join("")}function Kc(e,t){return e.filter(function(r){return!ut(r,t)})}var $o=1,Qr=1,Hd=0,Ue=0,ee=0,tn="";function Do(e,t,r,n,i,o,l,s){return{value:e,root:t,parent:r,type:n,props:i,children:o,line:$o,column:Qr,length:l,return:"",siblings:s}}function Ct(e,t){return wa(Do("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function vr(e){for(;e.root;)e=Ct(e.root,{children:[e]});mn(e,e.siblings)}function Jp(){return ee}function qp(){return ee=Ue>0?oe(tn,--Ue):0,Qr--,ee===10&&(Qr=1,$o--),ee}function Ye(){return ee=Ue<Hd?oe(tn,Ue++):0,Qr++,ee===10&&(Qr=1,$o++),ee}function rr(){return oe(tn,Ue)}function Mi(){return Ue}function Fo(e,t){return Zr(tn,e,t)}function ka(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function eh(e){return $o=Qr=1,Hd=tt(tn=e),Ue=0,[]}function th(e){return tn="",e}function ml(e){return Bd(Fo(Ue-1,ja(e===91?e+2:e===40?e+1:e)))}function rh(e){for(;(ee=rr())&&ee<33;)Ye();return ka(e)>2||ka(ee)>3?"":" "}function nh(e,t){for(;--t&&Ye()&&!(ee<48||ee>102||ee>57&&ee<65||ee>70&&ee<97););return Fo(e,Mi()+(t<6&&rr()==32&&Ye()==32))}function ja(e){for(;Ye();)switch(ee){case e:return Ue;case 34:case 39:e!==34&&e!==39&&ja(ee);break;case 40:e===41&&ja(e);break;case 92:Ye();break}return Ue}function ih(e,t){for(;Ye()&&e+ee!==47+10;)if(e+ee===42+42&&rr()===47)break;return"/*"+Fo(t,Ue-1)+"*"+Ts(e===47?e:Ye())}function oh(e){for(;!ka(rr());)Ye();return Fo(e,Ue)}function lh(e){return th(Ii("",null,null,null,[""],e=eh(e),0,[0],e))}function Ii(e,t,r,n,i,o,l,s,c){for(var u=0,f=0,h=l,g=0,v=0,y=0,w=1,P=1,p=1,d=0,m="",x=i,k=o,j=n,S=m;P;)switch(y=d,d=Ye()){case 40:if(y!=108&&oe(S,h-1)==58){bi(S+=L(ml(d),"&","&\f"),"&\f")!=-1&&(p=-1);break}case 34:case 39:case 91:S+=ml(d);break;case 9:case 10:case 13:case 32:S+=rh(y);break;case 92:S+=nh(Mi()-1,7);continue;case 47:switch(rr()){case 42:case 47:mn(ah(ih(Ye(),Mi()),t,r,c),c);break;default:S+="/"}break;case 123*w:s[u++]=tt(S)*p;case 125*w:case 59:case 0:switch(d){case 0:case 125:P=0;case 59+f:p==-1&&(S=L(S,/\f/g,"")),v>0&&tt(S)-h&&mn(v>32?Gc(S+";",n,r,h-1,c):Gc(L(S," ","")+";",n,r,h-2,c),c);break;case 59:S+=";";default:if(mn(j=Yc(S,t,r,u,f,i,s,m,x=[],k=[],h,o),o),d===123)if(f===0)Ii(S,t,j,j,x,o,h,s,k);else switch(g===99&&oe(S,3)===110?100:g){case 100:case 108:case 109:case 115:Ii(e,j,j,n&&mn(Yc(e,j,j,0,0,i,s,m,i,x=[],h,k),k),i,k,h,s,n?x:k);break;default:Ii(S,j,j,j,[""],k,0,s,k)}}u=f=v=0,w=p=1,m=S="",h=l;break;case 58:h=1+tt(S),v=y;default:if(w<1){if(d==123)--w;else if(d==125&&w++==0&&qp()==125)continue}switch(S+=Ts(d),d*w){case 38:p=f>0?1:(S+="\f",-1);break;case 44:s[u++]=(tt(S)-1)*p,p=1;break;case 64:rr()===45&&(S+=ml(Ye())),g=rr(),f=h=tt(m=S+=oh(Mi())),d++;break;case 45:y===45&&tt(S)==2&&(w=0)}}return o}function Yc(e,t,r,n,i,o,l,s,c,u,f,h){for(var g=i-1,v=i===0?o:[""],y=Ud(v),w=0,P=0,p=0;w<n;++w)for(var d=0,m=Zr(e,g+1,g=Kp(P=l[w])),x=e;d<y;++d)(x=Bd(P>0?v[d]+" "+m:L(m,/&\f/g,v[d])))&&(c[p++]=x);return Do(e,t,r,i===0?Oo:s,c,u,f,h)}function ah(e,t,r,n){return Do(e,t,r,Fd,Ts(Jp()),Zr(e,2,-2),0,n)}function Gc(e,t,r,n,i){return Do(e,t,r,_s,Zr(e,0,n),Zr(e,n+1,-1),n,i)}function Vd(e,t,r){switch(Yp(e,t)){case 5103:return $+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return $+e+e;case 4789:return En+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return $+e+En+e+U+e+e;case 5936:switch(oe(e,t+11)){case 114:return $+e+U+L(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return $+e+U+L(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return $+e+U+L(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return $+e+U+e+e;case 6165:return $+e+U+"flex-"+e+e;case 5187:return $+e+L(e,/(\w+).+(:[^]+)/,$+"box-$1$2"+U+"flex-$1$2")+e;case 5443:return $+e+U+"flex-item-"+L(e,/flex-|-self/g,"")+(ut(e,/flex-|baseline/)?"":U+"grid-row-"+L(e,/flex-|-self/g,""))+e;case 4675:return $+e+U+"flex-line-pack"+L(e,/align-content|flex-|-self/g,"")+e;case 5548:return $+e+U+L(e,"shrink","negative")+e;case 5292:return $+e+U+L(e,"basis","preferred-size")+e;case 6060:return $+"box-"+L(e,"-grow","")+$+e+U+L(e,"grow","positive")+e;case 4554:return $+L(e,/([^-])(transform)/g,"$1"+$+"$2")+e;case 6187:return L(L(L(e,/(zoom-|grab)/,$+"$1"),/(image-set)/,$+"$1"),e,"")+e;case 5495:case 3959:return L(e,/(image-set\([^]*)/,$+"$1$`$1");case 4968:return L(L(e,/(.+:)(flex-)?(.*)/,$+"box-pack:$3"+U+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+$+e+e;case 4200:if(!ut(e,/flex-|baseline/))return U+"grid-column-align"+Zr(e,t)+e;break;case 2592:case 3360:return U+L(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(n,i){return t=i,ut(n.props,/grid-\w+-end/)})?~bi(e+(r=r[t].value),"span")?e:U+L(e,"-start","")+e+U+"grid-row-span:"+(~bi(r,"span")?ut(r,/\d+/):+ut(r,/\d+/)-+ut(e,/\d+/))+";":U+L(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(n){return ut(n.props,/grid-\w+-start/)})?e:U+L(L(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return L(e,/(.+)-inline(.+)/,$+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(tt(e)-1-t>6)switch(oe(e,t+1)){case 109:if(oe(e,t+4)!==45)break;case 102:return L(e,/(.+:)(.+)-([^]+)/,"$1"+$+"$2-$3$1"+En+(oe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~bi(e,"stretch")?Vd(L(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return L(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,i,o,l,s,c,u){return U+i+":"+o+u+(l?U+i+"-span:"+(s?c:+c-+o)+u:"")+e});case 4949:if(oe(e,t+6)===121)return L(e,":",":"+$)+e;break;case 6444:switch(oe(e,oe(e,14)===45?18:11)){case 120:return L(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+$+(oe(e,14)===45?"inline-":"")+"box$3$1"+$+"$2$3$1"+U+"$2box$3")+e;case 100:return L(e,":",":"+U)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return L(e,"scroll-","scroll-snap-")+e}return e}function po(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function sh(e,t,r,n){switch(e.type){case Xp:if(e.children.length)break;case Qp:case _s:return e.return=e.return||e.value;case Fd:return"";case Ad:return e.return=e.value+"{"+po(e.children,n)+"}";case Oo:if(!tt(e.value=e.props.join(",")))return""}return tt(r=po(e.children,n))?e.return=e.value+"{"+r+"}":""}function ch(e){var t=Ud(e);return function(r,n,i,o){for(var l="",s=0;s<t;s++)l+=e[s](r,n,i,o)||"";return l}}function uh(e){return function(t){t.root||(t=t.return)&&e(t)}}function dh(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case _s:e.return=Vd(e.value,e.length,r);return;case Ad:return po([Ct(e,{value:L(e.value,"@","@"+$)})],n);case Oo:if(e.length)return Gp(r=e.props,function(i){switch(ut(i,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":vr(Ct(e,{props:[L(i,/:(read-\w+)/,":"+En+"$1")]})),vr(Ct(e,{props:[i]})),wa(e,{props:Kc(r,n)});break;case"::placeholder":vr(Ct(e,{props:[L(i,/:(plac\w+)/,":"+$+"input-$1")]})),vr(Ct(e,{props:[L(i,/:(plac\w+)/,":"+En+"$1")]})),vr(Ct(e,{props:[L(i,/:(plac\w+)/,U+"input-$1")]})),vr(Ct(e,{props:[i]})),wa(e,{props:Kc(r,n)});break}return""})}}var fh={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Xr=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",zs=typeof window<"u"&&"HTMLElement"in window,ph=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),hh={},Ao=Object.freeze([]),Kr=Object.freeze({});function Wd(e,t,r){return r===void 0&&(r=Kr),e.theme!==r.theme&&e.theme||t||r.theme}var Zd=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),mh=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,gh=/(^-|-$)/g;function Jc(e){return e.replace(mh,"-").replace(gh,"")}var vh=/(a)(d)/gi,qc=function(e){return String.fromCharCode(e+(e>25?39:97))};function Sa(e){var t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=qc(t%52)+r;return(qc(t%52)+r).replace(vh,"$1-$2")}var gl,Rr=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},Qd=function(e){return Rr(5381,e)};function Xd(e){return Sa(Qd(e)>>>0)}function yh(e){return e.displayName||e.name||"Component"}function vl(e){return typeof e=="string"&&!0}var Kd=typeof Symbol=="function"&&Symbol.for,Yd=Kd?Symbol.for("react.memo"):60115,xh=Kd?Symbol.for("react.forward_ref"):60112,wh={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},kh={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Gd={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},jh=((gl={})[xh]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},gl[Yd]=Gd,gl);function eu(e){return("type"in(t=e)&&t.type.$$typeof)===Yd?Gd:"$$typeof"in e?jh[e.$$typeof]:wh;var t}var Sh=Object.defineProperty,Ch=Object.getOwnPropertyNames,tu=Object.getOwnPropertySymbols,Eh=Object.getOwnPropertyDescriptor,Ph=Object.getPrototypeOf,ru=Object.prototype;function Jd(e,t,r){if(typeof t!="string"){if(ru){var n=Ph(t);n&&n!==ru&&Jd(e,n,r)}var i=Ch(t);tu&&(i=i.concat(tu(t)));for(var o=eu(e),l=eu(t),s=0;s<i.length;++s){var c=i[s];if(!(c in kh||r&&r[c]||l&&c in l||o&&c in o)){var u=Eh(t,c);try{Sh(e,c,u)}catch{}}}}return e}function sr(e){return typeof e=="function"}function Rs(e){return typeof e=="object"&&"styledComponentId"in e}function qt(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Ca(e,t){if(e.length===0)return"";for(var r=e[0],n=1;n<e.length;n++)r+=t?t+e[n]:e[n];return r}function Zn(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Ea(e,t,r){if(r===void 0&&(r=!1),!r&&!Zn(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=Ea(e[n],t[n]);else if(Zn(t))for(var n in t)e[n]=Ea(e[n],t[n]);return e}function Ls(e,t){Object.defineProperty(e,"toString",{value:t})}function cr(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Nh=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var r=0,n=0;n<t;n++)r+=this.groupSizes[n];return r},e.prototype.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var n=this.groupSizes,i=n.length,o=i;t>=o;)if((o<<=1)<0)throw cr(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var l=i;l<o;l++)this.groupSizes[l]=0}for(var s=this.indexOfGroup(t+1),c=(l=0,r.length);l<c;l++)this.tag.insertRule(s,r[l])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],n=this.indexOfGroup(t),i=n+r;this.groupSizes[t]=0;for(var o=n;o<i;o++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var n=this.groupSizes[t],i=this.indexOfGroup(t),o=i+n,l=i;l<o;l++)r+="".concat(this.tag.getRule(l)).concat(`/*!sc*/
`);return r},e}(),Oi=new Map,ho=new Map,yl=1,wi=function(e){if(Oi.has(e))return Oi.get(e);for(;ho.has(yl);)yl++;var t=yl++;return Oi.set(e,t),ho.set(t,e),t},_h=function(e,t){Oi.set(e,t),ho.set(t,e)},Th="style[".concat(Xr,"][").concat("data-styled-version",'="').concat("6.1.0",'"]'),zh=new RegExp("^".concat(Xr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Rh=function(e,t,r){for(var n,i=r.split(","),o=0,l=i.length;o<l;o++)(n=i[o])&&e.registerName(t,n)},Lh=function(e,t){for(var r,n=((r=t.textContent)!==null&&r!==void 0?r:"").split(`/*!sc*/
`),i=[],o=0,l=n.length;o<l;o++){var s=n[o].trim();if(s){var c=s.match(zh);if(c){var u=0|parseInt(c[1],10),f=c[2];u!==0&&(_h(f,u),Rh(e,f,c[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(s)}}};function bh(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var qd=function(e){var t=document.head,r=e||t,n=document.createElement("style"),i=function(s){var c=Array.from(s.querySelectorAll("style[".concat(Xr,"]")));return c[c.length-1]}(r),o=i!==void 0?i.nextSibling:null;n.setAttribute(Xr,"active"),n.setAttribute("data-styled-version","6.1.0");var l=bh();return l&&n.setAttribute("nonce",l),r.insertBefore(n,o),n},Mh=function(){function e(t){this.element=qd(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var n=document.styleSheets,i=0,o=n.length;i<o;i++){var l=n[i];if(l.ownerNode===r)return l}throw cr(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var r=this.sheet.cssRules[t];return r&&r.cssText?r.cssText:""},e}(),Ih=function(){function e(t){this.element=qd(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,r){if(t<=this.length&&t>=0){var n=document.createTextNode(r);return this.element.insertBefore(n,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Oh=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),nu=zs,$h={isServer:!zs,useCSSOMInjection:!ph},mo=function(){function e(t,r,n){t===void 0&&(t=Kr),r===void 0&&(r={});var i=this;this.options=le(le({},$h),t),this.gs=r,this.names=new Map(n),this.server=!!t.isServer,!this.server&&zs&&nu&&(nu=!1,function(o){for(var l=document.querySelectorAll(Th),s=0,c=l.length;s<c;s++){var u=l[s];u&&u.getAttribute(Xr)!=="active"&&(Lh(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Ls(this,function(){return function(o){for(var l=o.getTag(),s=l.length,c="",u=function(h){var g=function(p){return ho.get(p)}(h);if(g===void 0)return"continue";var v=o.names.get(g),y=l.getGroup(h);if(v===void 0||y.length===0)return"continue";var w="".concat(Xr,".g").concat(h,'[id="').concat(g,'"]'),P="";v!==void 0&&v.forEach(function(p){p.length>0&&(P+="".concat(p,","))}),c+="".concat(y).concat(w,'{content:"').concat(P,'"}').concat(`/*!sc*/
`)},f=0;f<s;f++)u(f);return c}(i)})}return e.registerId=function(t){return wi(t)},e.prototype.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new e(le(le({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(r){var n=r.useCSSOMInjection,i=r.target;return r.isServer?new Oh(i):n?new Mh(i):new Ih(i)}(this.options),new Nh(t)));var t},e.prototype.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},e.prototype.registerName=function(t,r){if(wi(t),this.names.has(t))this.names.get(t).add(r);else{var n=new Set;n.add(r),this.names.set(t,n)}},e.prototype.insertRules=function(t,r,n){this.registerName(t,r),this.getTag().insertRules(wi(t),n)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(wi(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Dh=/&/g,Fh=/^\s*\/\/.*$/gm;function e0(e,t){return e.map(function(r){return r.type==="rule"&&(r.value="".concat(t," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(t," ")),r.props=r.props.map(function(n){return"".concat(t," ").concat(n)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=e0(r.children,t)),r})}function Ah(e){var t,r,n,i=e===void 0?Kr:e,o=i.options,l=o===void 0?Kr:o,s=i.plugins,c=s===void 0?Ao:s,u=function(g,v,y){return y===r||y.startsWith(r)&&y.endsWith(r)&&y.replaceAll(r,"").length>0?".".concat(t):g},f=c.slice();f.push(function(g){g.type===Oo&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(Dh,r).replace(n,u))}),l.prefix&&f.push(dh),f.push(sh);var h=function(g,v,y,w){v===void 0&&(v=""),y===void 0&&(y=""),w===void 0&&(w="&"),t=w,r=v,n=new RegExp("\\".concat(r,"\\b"),"g");var P=g.replace(Fh,""),p=lh(y||v?"".concat(y," ").concat(v," { ").concat(P," }"):P);l.namespace&&(p=e0(p,l.namespace));var d=[];return po(p,ch(f.concat(uh(function(m){return d.push(m)})))),d};return h.hash=c.length?c.reduce(function(g,v){return v.name||cr(15),Rr(g,v.name)},5381).toString():"",h}var Bh=new mo,Pa=Ah(),t0=H.createContext({shouldForwardProp:void 0,styleSheet:Bh,stylis:Pa});t0.Consumer;H.createContext(void 0);function Na(){return E.useContext(t0)}var Uh=function(){function e(t,r){var n=this;this.inject=function(i,o){o===void 0&&(o=Pa);var l=n.name+o.hash;i.hasNameForId(n.id,l)||i.insertRules(n.id,l,o(n.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=r,Ls(this,function(){throw cr(12,String(n.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Pa),this.name+t.hash},e}(),Hh=function(e){return e>="A"&&e<="Z"};function iu(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(r===1&&n==="-"&&e[0]==="-")return e;Hh(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var r0=function(e){return e==null||e===!1||e===""},n0=function(e){var t,r,n=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!r0(o)&&(Array.isArray(o)&&o.isCss||sr(o)?n.push("".concat(iu(i),":"),o,";"):Zn(o)?n.push.apply(n,Wn(Wn(["".concat(i," {")],n0(o),!1),["}"],!1)):n.push("".concat(iu(i),": ").concat((t=i,(r=o)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||t in fh||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function Ut(e,t,r,n){if(r0(e))return[];if(Rs(e))return[".".concat(e.styledComponentId)];if(sr(e)){if(!sr(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return Ut(i,t,r,n)}var o;return e instanceof Uh?r?(e.inject(r,n),[e.getName(n)]):[e]:Zn(e)?n0(e):Array.isArray(e)?Array.prototype.concat.apply(Ao,e.map(function(l){return Ut(l,t,r,n)})):[e.toString()]}function i0(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(sr(r)&&!Rs(r))return!1}return!0}var Vh=Qd("6.1.0"),Wh=function(){function e(t,r,n){this.rules=t,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&i0(t),this.componentId=r,this.baseHash=Rr(Vh,r),this.baseStyle=n,mo.registerId(r)}return e.prototype.generateAndInjectStyles=function(t,r,n){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,r,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))i=qt(i,this.staticRulesId);else{var o=Ca(Ut(this.rules,t,r,n)),l=Sa(Rr(this.baseHash,o)>>>0);if(!r.hasNameForId(this.componentId,l)){var s=n(o,".".concat(l),void 0,this.componentId);r.insertRules(this.componentId,l,s)}i=qt(i,l),this.staticRulesId=l}else{for(var c=Rr(this.baseHash,n.hash),u="",f=0;f<this.rules.length;f++){var h=this.rules[f];if(typeof h=="string")u+=h;else if(h){var g=Ca(Ut(h,t,r,n));c=Rr(c,g+f),u+=g}}if(u){var v=Sa(c>>>0);r.hasNameForId(this.componentId,v)||r.insertRules(this.componentId,v,n(u,".".concat(v),void 0,this.componentId)),i=qt(i,v)}}return i},e}(),Yr=H.createContext(void 0);Yr.Consumer;function Zh(e){var t=H.useContext(Yr),r=E.useMemo(function(){return function(n,i){if(!n)throw cr(14);if(sr(n)){var o=n(i);return o}if(Array.isArray(n)||typeof n!="object")throw cr(8);return i?le(le({},i),n):n}(e.theme,t)},[e.theme,t]);return e.children?H.createElement(Yr.Provider,{value:r},e.children):null}var xl={};function Qh(e,t,r){var n=Rs(e),i=e,o=!vl(e),l=t.attrs,s=l===void 0?Ao:l,c=t.componentId,u=c===void 0?function(m,x){var k=typeof m!="string"?"sc":Jc(m);xl[k]=(xl[k]||0)+1;var j="".concat(k,"-").concat(Xd("6.1.0"+k+xl[k]));return x?"".concat(x,"-").concat(j):j}(t.displayName,t.parentComponentId):c,f=t.displayName;f===void 0&&function(m){return vl(m)?"styled.".concat(m):"Styled(".concat(yh(m),")")}(e);var h=t.displayName&&t.componentId?"".concat(Jc(t.displayName),"-").concat(t.componentId):t.componentId||u,g=n&&i.attrs?i.attrs.concat(s).filter(Boolean):s,v=t.shouldForwardProp;if(n&&i.shouldForwardProp){var y=i.shouldForwardProp;if(t.shouldForwardProp){var w=t.shouldForwardProp;v=function(m,x){return y(m,x)&&w(m,x)}}else v=y}var P=new Wh(r,h,n?i.componentStyle:void 0);function p(m,x){return function(k,j,S){var T=k.attrs,F=k.componentStyle,b=k.defaultProps,ge=k.foldedComponentIds,ot=k.styledComponentId,lt=k.target,mr=H.useContext(Yr),He=Na(),at=k.shouldForwardProp||He.shouldForwardProp,ve=function(st,Ne,wt){for(var _e,Ie=le(le({},Ne),{className:void 0,theme:wt}),Bo=0;Bo<st.length;Bo+=1){var ri=sr(_e=st[Bo])?_e(Ie):_e;for(var kt in ri)Ie[kt]=kt==="className"?qt(Ie[kt],ri[kt]):kt==="style"?le(le({},Ie[kt]),ri[kt]):ri[kt]}return Ne.className&&(Ie.className=qt(Ie.className,Ne.className)),Ie}(T,j,Wd(j,mr,b)||Kr),N=ve.as||lt,z={};for(var R in ve)ve[R]===void 0||R[0]==="$"||R==="as"||R==="theme"||(R==="forwardedAs"?z.as=ve.forwardedAs:at&&!at(R,N)||(z[R]=ve[R]));var W=function(st,Ne){var wt=Na(),_e=st.generateAndInjectStyles(Ne,wt.styleSheet,wt.stylis);return _e}(F,ve),Y=qt(ge,ot);return W&&(Y+=" "+W),ve.className&&(Y+=" "+ve.className),z[vl(N)&&!Zd.has(N)?"class":"className"]=Y,z.ref=S,E.createElement(N,z)}(d,m,x)}var d=H.forwardRef(p);return d.attrs=g,d.componentStyle=P,d.shouldForwardProp=v,d.foldedComponentIds=n?qt(i.foldedComponentIds,i.styledComponentId):"",d.styledComponentId=h,d.target=n?i.target:e,Object.defineProperty(d,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(m){this._foldedDefaultProps=n?function(x){for(var k=[],j=1;j<arguments.length;j++)k[j-1]=arguments[j];for(var S=0,T=k;S<T.length;S++)Ea(x,T[S],!0);return x}({},i.defaultProps,m):m}}),Ls(d,function(){return".".concat(d.styledComponentId)}),o&&Jd(d,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),d}function ou(e,t){for(var r=[e[0]],n=0,i=t.length;n<i;n+=1)r.push(t[n],e[n+1]);return r}var lu=function(e){return Object.assign(e,{isCss:!0})};function o0(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(sr(e)||Zn(e)){var n=e;return lu(Ut(ou(Ao,Wn([n],t,!0))))}var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?Ut(i):lu(Ut(ou(i,t)))}function _a(e,t,r){if(r===void 0&&(r=Kr),!t)throw cr(1,t);var n=function(i){for(var o=[],l=1;l<arguments.length;l++)o[l-1]=arguments[l];return e(t,r,o0.apply(void 0,Wn([i],o,!1)))};return n.attrs=function(i){return _a(e,t,le(le({},r),{attrs:Array.prototype.concat(r.attrs,i).filter(Boolean)}))},n.withConfig=function(i){return _a(e,t,le(le({},r),i))},n}var l0=function(e){return _a(Qh,e)},I=l0;Zd.forEach(function(e){I[e]=l0(e)});var Xh=function(){function e(t,r){this.rules=t,this.componentId=r,this.isStatic=i0(t),mo.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,r,n,i){var o=i(Ca(Ut(this.rules,r,n,i)),""),l=this.componentId+t;n.insertRules(l,l,o)},e.prototype.removeStyles=function(t,r){r.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,r,n,i){t>2&&mo.registerId(this.componentId+t),this.removeStyles(t,n),this.createStyles(t,r,n,i)},e}();function Kh(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=o0.apply(void 0,Wn([e],t,!1)),i="sc-global-".concat(Xd(JSON.stringify(n))),o=new Xh(n,i),l=function(c){var u=Na(),f=H.useContext(Yr),h=H.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&s(h,c,u.styleSheet,f,u.stylis),H.useLayoutEffect(function(){if(!u.styleSheet.server)return s(h,c,u.styleSheet,f,u.stylis),function(){return o.removeStyles(h,u.styleSheet)}},[h,c,u.styleSheet,f,u.stylis]),null};function s(c,u,f,h,g){if(o.isStatic)o.renderStyles(c,hh,f,g);else{var v=le(le({},u),{theme:Wd(u,h,l.defaultProps)});o.renderStyles(c,v,f,g)}}return H.memo(l)}function Ta(){return Ta=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Ta.apply(this,arguments)}var Yh=H.createElement("svg",{viewBox:"-2 -5 14 20",height:"100%",width:"100%",style:{position:"absolute",top:0}},H.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"})),Gh=H.createElement("svg",{height:"100%",width:"100%",viewBox:"-2 -5 17 21",style:{position:"absolute",top:0}},H.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}));function au(e){if(e.length===7)return e;for(var t="#",r=1;r<4;r+=1)t+=e[r]+e[r];return t}function su(e,t,r,n,i){return function(o,l,s,c,u){var f=(o-s)/(l-s);if(f===0)return c;if(f===1)return u;for(var h="#",g=1;g<6;g+=2){var v=parseInt(c.substr(g,2),16),y=parseInt(u.substr(g,2),16),w=Math.round((1-f)*v+f*y).toString(16);w.length===1&&(w="0"+w),h+=w}return h}(e,t,r,au(n),au(i))}var a0=function(e){function t(r){e.call(this,r);var n=r.height,i=r.width,o=r.checked;this.t=r.handleDiameter||n-2,this.i=Math.max(i-n,i-(n+this.t)/2),this.o=Math.max(0,(n-this.t)/2),this.state={h:o?this.i:this.o},this.l=0,this.u=0,this.p=this.p.bind(this),this.v=this.v.bind(this),this.g=this.g.bind(this),this.k=this.k.bind(this),this.m=this.m.bind(this),this.M=this.M.bind(this),this.T=this.T.bind(this),this.$=this.$.bind(this),this.C=this.C.bind(this),this.D=this.D.bind(this),this.O=this.O.bind(this),this.S=this.S.bind(this)}return e&&(t.__proto__=e),(t.prototype=Object.create(e&&e.prototype)).constructor=t,t.prototype.componentDidMount=function(){this.W=!0},t.prototype.componentDidUpdate=function(r){r.checked!==this.props.checked&&this.setState({h:this.props.checked?this.i:this.o})},t.prototype.componentWillUnmount=function(){this.W=!1},t.prototype.I=function(r){this.H.focus(),this.setState({R:r,j:!0,B:Date.now()})},t.prototype.L=function(r){var n=this.state,i=n.R,o=n.h,l=(this.props.checked?this.i:this.o)+r-i;n.N||r===i||this.setState({N:!0});var s=Math.min(this.i,Math.max(this.o,l));s!==o&&this.setState({h:s})},t.prototype.U=function(r){var n=this.state,i=n.h,o=n.N,l=n.B,s=this.props.checked,c=(this.i+this.o)/2;this.setState({h:this.props.checked?this.i:this.o});var u=Date.now()-l;(!o||u<250||s&&i<=c||!s&&i>=c)&&this.A(r),this.W&&this.setState({N:!1,j:!1}),this.l=Date.now()},t.prototype.p=function(r){r.preventDefault(),typeof r.button=="number"&&r.button!==0||(this.I(r.clientX),window.addEventListener("mousemove",this.v),window.addEventListener("mouseup",this.g))},t.prototype.v=function(r){r.preventDefault(),this.L(r.clientX)},t.prototype.g=function(r){this.U(r),window.removeEventListener("mousemove",this.v),window.removeEventListener("mouseup",this.g)},t.prototype.k=function(r){this.X=null,this.I(r.touches[0].clientX)},t.prototype.m=function(r){this.L(r.touches[0].clientX)},t.prototype.M=function(r){r.preventDefault(),this.U(r)},t.prototype.$=function(r){Date.now()-this.l>50&&(this.A(r),Date.now()-this.u>50&&this.W&&this.setState({j:!1}))},t.prototype.C=function(){this.u=Date.now()},t.prototype.D=function(){this.setState({j:!0})},t.prototype.O=function(){this.setState({j:!1})},t.prototype.S=function(r){this.H=r},t.prototype.T=function(r){r.preventDefault(),this.H.focus(),this.A(r),this.W&&this.setState({j:!1})},t.prototype.A=function(r){var n=this.props;(0,n.onChange)(!n.checked,r,n.id)},t.prototype.render=function(){var r=this.props,n=r.checked,i=r.disabled,o=r.className,l=r.offColor,s=r.onColor,c=r.offHandleColor,u=r.onHandleColor,f=r.checkedIcon,h=r.uncheckedIcon,g=r.checkedHandleIcon,v=r.uncheckedHandleIcon,y=r.boxShadow,w=r.activeBoxShadow,P=r.height,p=r.width,d=r.borderRadius,m=function(He,at){var ve={};for(var N in He)Object.prototype.hasOwnProperty.call(He,N)&&at.indexOf(N)===-1&&(ve[N]=He[N]);return ve}(r,["checked","disabled","className","offColor","onColor","offHandleColor","onHandleColor","checkedIcon","uncheckedIcon","checkedHandleIcon","uncheckedHandleIcon","boxShadow","activeBoxShadow","height","width","borderRadius","handleDiameter"]),x=this.state,k=x.h,j=x.N,S=x.j,T={position:"relative",display:"inline-block",textAlign:"left",opacity:i?.5:1,direction:"ltr",borderRadius:P/2,WebkitTransition:"opacity 0.25s",MozTransition:"opacity 0.25s",transition:"opacity 0.25s",touchAction:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",userSelect:"none"},F={height:P,width:p,margin:Math.max(0,(this.t-P)/2),position:"relative",background:su(k,this.i,this.o,l,s),borderRadius:typeof d=="number"?d:P/2,cursor:i?"default":"pointer",WebkitTransition:j?null:"background 0.25s",MozTransition:j?null:"background 0.25s",transition:j?null:"background 0.25s"},b={height:P,width:Math.min(1.5*P,p-(this.t+P)/2+1),position:"relative",opacity:(k-this.o)/(this.i-this.o),pointerEvents:"none",WebkitTransition:j?null:"opacity 0.25s",MozTransition:j?null:"opacity 0.25s",transition:j?null:"opacity 0.25s"},ge={height:P,width:Math.min(1.5*P,p-(this.t+P)/2+1),position:"absolute",opacity:1-(k-this.o)/(this.i-this.o),right:0,top:0,pointerEvents:"none",WebkitTransition:j?null:"opacity 0.25s",MozTransition:j?null:"opacity 0.25s",transition:j?null:"opacity 0.25s"},ot={height:this.t,width:this.t,background:su(k,this.i,this.o,c,u),display:"inline-block",cursor:i?"default":"pointer",borderRadius:typeof d=="number"?d-1:"50%",position:"absolute",transform:"translateX("+k+"px)",top:Math.max(0,(P-this.t)/2),outline:0,boxShadow:S?w:y,border:0,WebkitTransition:j?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",MozTransition:j?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",transition:j?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s"},lt={height:this.t,width:this.t,opacity:Math.max(2*(1-(k-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:j?null:"opacity 0.25s",MozTransition:j?null:"opacity 0.25s",transition:j?null:"opacity 0.25s"},mr={height:this.t,width:this.t,opacity:Math.max(2*((k-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:j?null:"opacity 0.25s",MozTransition:j?null:"opacity 0.25s",transition:j?null:"opacity 0.25s"};return H.createElement("div",{className:o,style:T},H.createElement("div",{className:"react-switch-bg",style:F,onClick:i?null:this.T,onMouseDown:function(He){return He.preventDefault()}},f&&H.createElement("div",{style:b},f),h&&H.createElement("div",{style:ge},h)),H.createElement("div",{className:"react-switch-handle",style:ot,onClick:function(He){return He.preventDefault()},onMouseDown:i?null:this.p,onTouchStart:i?null:this.k,onTouchMove:i?null:this.m,onTouchEnd:i?null:this.M,onTouchCancel:i?null:this.O},v&&H.createElement("div",{style:lt},v),g&&H.createElement("div",{style:mr},g)),H.createElement("input",Ta({},{type:"checkbox",role:"switch","aria-checked":n,checked:n,disabled:i,style:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",width:1}},m,{ref:this.S,onFocus:this.D,onBlur:this.O,onKeyUp:this.C,onChange:this.$})))},t}(E.Component);a0.defaultProps={disabled:!1,offColor:"#888",onColor:"#080",offHandleColor:"#fff",onHandleColor:"#fff",uncheckedIcon:Yh,checkedIcon:Gh,boxShadow:null,activeBoxShadow:"0 0 2px 3px #3bf",height:28,width:56};function go(){return go=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},go.apply(this,arguments)}function Jh(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Qn(e,t){return Qn=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},Qn(e,t)}function qh(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Qn(e,t)}function za(e){return za=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},za(e)}function em(e){try{return Function.toString.call(e).indexOf("[native code]")!==-1}catch{return typeof e=="function"}}function tm(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function $i(e,t,r){return tm()?$i=Reflect.construct.bind():$i=function(i,o,l){var s=[null];s.push.apply(s,o);var c=Function.bind.apply(i,s),u=new c;return l&&Qn(u,l.prototype),u},$i.apply(null,arguments)}function Ra(e){var t=typeof Map=="function"?new Map:void 0;return Ra=function(n){if(n===null||!em(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(typeof t<"u"){if(t.has(n))return t.get(n);t.set(n,i)}function i(){return $i(n,arguments,za(this).constructor)}return i.prototype=Object.create(n.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),Qn(i,n)},Ra(e)}var Lr=function(e){qh(t,e);function t(r){var n;return n=e.call(this,"An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#"+r+" for more information.")||this,Jh(n)}return t}(Ra(Error));function wl(e){return Math.round(e*255)}function rm(e,t,r){return wl(e)+","+wl(t)+","+wl(r)}function cu(e,t,r,n){if(n===void 0&&(n=rm),t===0)return n(r,r,r);var i=(e%360+360)%360/60,o=(1-Math.abs(2*r-1))*t,l=o*(1-Math.abs(i%2-1)),s=0,c=0,u=0;i>=0&&i<1?(s=o,c=l):i>=1&&i<2?(s=l,c=o):i>=2&&i<3?(c=o,u=l):i>=3&&i<4?(c=l,u=o):i>=4&&i<5?(s=l,u=o):i>=5&&i<6&&(s=o,u=l);var f=r-o/2,h=s+f,g=c+f,v=u+f;return n(h,g,v)}var uu={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};function nm(e){if(typeof e!="string")return e;var t=e.toLowerCase();return uu[t]?"#"+uu[t]:e}var im=/^#[a-fA-F0-9]{6}$/,om=/^#[a-fA-F0-9]{8}$/,lm=/^#[a-fA-F0-9]{3}$/,am=/^#[a-fA-F0-9]{4}$/,kl=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,sm=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,cm=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,um=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;function La(e){if(typeof e!="string")throw new Lr(3);var t=nm(e);if(t.match(im))return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16)};if(t.match(om)){var r=parseFloat((parseInt(""+t[7]+t[8],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16),alpha:r}}if(t.match(lm))return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16)};if(t.match(am)){var n=parseFloat((parseInt(""+t[4]+t[4],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16),alpha:n}}var i=kl.exec(t);if(i)return{red:parseInt(""+i[1],10),green:parseInt(""+i[2],10),blue:parseInt(""+i[3],10)};var o=sm.exec(t.substring(0,50));if(o)return{red:parseInt(""+o[1],10),green:parseInt(""+o[2],10),blue:parseInt(""+o[3],10),alpha:parseFloat(""+o[4])>1?parseFloat(""+o[4])/100:parseFloat(""+o[4])};var l=cm.exec(t);if(l){var s=parseInt(""+l[1],10),c=parseInt(""+l[2],10)/100,u=parseInt(""+l[3],10)/100,f="rgb("+cu(s,c,u)+")",h=kl.exec(f);if(!h)throw new Lr(4,t,f);return{red:parseInt(""+h[1],10),green:parseInt(""+h[2],10),blue:parseInt(""+h[3],10)}}var g=um.exec(t.substring(0,50));if(g){var v=parseInt(""+g[1],10),y=parseInt(""+g[2],10)/100,w=parseInt(""+g[3],10)/100,P="rgb("+cu(v,y,w)+")",p=kl.exec(P);if(!p)throw new Lr(4,t,P);return{red:parseInt(""+p[1],10),green:parseInt(""+p[2],10),blue:parseInt(""+p[3],10),alpha:parseFloat(""+g[4])>1?parseFloat(""+g[4])/100:parseFloat(""+g[4])}}throw new Lr(5)}var dm=function(t){return t.length===7&&t[1]===t[2]&&t[3]===t[4]&&t[5]===t[6]?"#"+t[1]+t[3]+t[5]:t},du=dm;function yr(e){var t=e.toString(16);return t.length===1?"0"+t:t}function fu(e,t,r){if(typeof e=="number"&&typeof t=="number"&&typeof r=="number")return du("#"+yr(e)+yr(t)+yr(r));if(typeof e=="object"&&t===void 0&&r===void 0)return du("#"+yr(e.red)+yr(e.green)+yr(e.blue));throw new Lr(6)}function fm(e,t,r,n){if(typeof e=="string"&&typeof t=="number"){var i=La(e);return"rgba("+i.red+","+i.green+","+i.blue+","+t+")"}else{if(typeof e=="number"&&typeof t=="number"&&typeof r=="number"&&typeof n=="number")return n>=1?fu(e,t,r):"rgba("+e+","+t+","+r+","+n+")";if(typeof e=="object"&&t===void 0&&r===void 0&&n===void 0)return e.alpha>=1?fu(e.red,e.green,e.blue):"rgba("+e.red+","+e.green+","+e.blue+","+e.alpha+")"}throw new Lr(7)}function s0(e,t,r){return function(){var i=r.concat(Array.prototype.slice.call(arguments));return i.length>=t?e.apply(this,i):s0(e,t,i)}}function c0(e){return s0(e,e.length,[])}function pm(e,t,r){if(t==="transparent")return r;if(r==="transparent")return t;if(e===0)return r;var n=La(t),i=go({},n,{alpha:typeof n.alpha=="number"?n.alpha:1}),o=La(r),l=go({},o,{alpha:typeof o.alpha=="number"?o.alpha:1}),s=i.alpha-l.alpha,c=parseFloat(e)*2-1,u=c*s===-1?c:c+s,f=1+c*s,h=(u/f+1)/2,g=1-h,v={red:Math.floor(i.red*h+l.red*g),green:Math.floor(i.green*h+l.green*g),blue:Math.floor(i.blue*h+l.blue*g),alpha:i.alpha*parseFloat(e)+l.alpha*(1-parseFloat(e))};return fm(v)}var hm=c0(pm),mm=hm;function gm(e,t){return t==="transparent"?t:mm(parseFloat(e),"rgb(0, 0, 0)",t)}var vm=c0(gm),ym=vm;const xm=I.div`
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
`;function wm({toggleTheme:e}){const t=E.useContext(Yr);if(!t)throw new Error("ThemeContext não foi encontrado. Verifique se ele está sendo provido corretamente.");const{colors:r,title:n}=t;return a.jsxs(xm,{children:[a.jsx("header",{children:a.jsxs("div",{children:[a.jsxs("span",{className:"logo",children:[a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",className:"iconify iconify--logos",width:"35.93",height:"32",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 228",children:a.jsx("path",{d:"M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"})}),a.jsx("span",{children:"JP"})]}),a.jsxs("span",{className:"menu",children:[a.jsx(Tt,{to:"/",children:"Home"}),a.jsx(Tt,{to:"/projects",children:"Projetos"}),a.jsx(Tt,{to:"/contact",children:"Contato"})]})]})}),a.jsx(a0,{onChange:e,checked:n==="light",checkedIcon:!1,uncheckedIcon:!1,height:25,width:80,handleDiameter:20,offColor:ym(.3,r.react),onColor:r.react})]})}const km=I.div`
    margin: auto;
    width: 80%;

    @media (max-width: 1080px) {
        width: 90%;
    }

    span.react {
        color: var(--react);
    }
`,jm=I.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
    }
`,Sm=I.div`
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
`,Cm=I.div`
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
`,Em=I.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
    }
`,Pm=I.div`
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
`,Nm=I.div`
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
`,_m=I.div`
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
`,Tm=I.div`
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
`,jl=I.div`
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
`,zm=I.div`
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
`,Rm=I.div`
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
`;function Lm(){const e=()=>{window.scrollTo(0,0)};return a.jsxs(km,{children:[a.jsx("title",{children:"João - Home"}),a.jsxs(jm,{children:[a.jsx(Sm,{children:a.jsx("img",{src:"../../public/perfil2.jfif",alt:""})}),a.jsxs(Cm,{children:[a.jsx("h2",{children:"Oi, me chamo João Paulo"}),a.jsxs("p",{children:[a.jsx("span",{className:"react",children:"Full Stack"})," Developer"]}),a.jsx("p",{children:"Formado em Análise e Desenvolvimento de Sistemas, Desenvolvedor Web com experiência em desenvolvimento de projetos."})]})]}),a.jsxs(Em,{children:[a.jsxs(Pm,{children:[a.jsxs("h3",{children:["Minhas principais ",a.jsx("span",{className:"react",children:"habilidades"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"Javascript"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"Typescript"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"React"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"Node"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"PHP"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"HTML"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]})]}),a.jsx(Nm,{children:a.jsx("img",{src:"../../public/tag.webp",alt:""})})]}),a.jsxs(_m,{children:[a.jsxs("p",{children:["Conheça alguns dos meus ",a.jsx("span",{className:"react",children:"projetos"})]}),a.jsxs(Tt,{to:"/projects",onClick:e,children:["Ver mais projetos ",a.jsx("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 512 512",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"})})]})]}),a.jsxs(Tm,{children:[a.jsx(Tt,{to:"/projects/1",onClick:e,children:a.jsxs(jl,{children:[a.jsxs("p",{children:[a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",className:"iconify iconify--logos",width:"35.93",height:"32",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 228",children:a.jsx("path",{d:"M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"})}),a.jsx("span",{children:"Portfólio"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/PortfolioBlack.png",alt:""}),a.jsxs("article",{children:[a.jsx("span",{children:"Javascript"}),a.jsx("span",{children:"Typescript"}),a.jsx("span",{children:"React"}),a.jsx("span",{children:"HTML"}),a.jsx("span",{children:"CSS"}),a.jsx("span",{children:"Vite"}),a.jsx("span",{children:"Styled-Components"}),a.jsx("span",{children:"Emailjs"})]}),a.jsx("p",{children:"Esse é meu Portfólio desenvolvido usando principalmente Typescript e React"})]}),a.jsx("p",{children:"Ver projeto"})]})}),a.jsx(Tt,{to:"/projects/2",onClick:e,children:a.jsxs(jl,{children:[a.jsxs("p",{children:[a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",className:"iconify iconify--logos",width:"35.93",height:"32",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 228",children:a.jsx("path",{d:"M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"})}),a.jsx("span",{children:"DT Money"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/dtMoney.png",alt:""}),a.jsx("br",{}),a.jsxs("article",{children:[a.jsx("span",{children:"Javascript"}),a.jsx("span",{children:"Typescript"}),a.jsx("span",{children:"React"}),a.jsx("span",{children:"HTML"}),a.jsx("span",{children:"CSS"}),a.jsx("span",{children:"Styled-Components"})]}),a.jsx("p",{children:"Programa para calcular suas despesas com facilidade e clareza"})]}),a.jsx("p",{children:"Ver projeto"})]})}),a.jsx(Tt,{to:"/projects/3",onClick:e,children:a.jsxs(jl,{children:[a.jsxs("p",{children:[a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",className:"iconify iconify--logos",width:"35.93",height:"32",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 228",children:a.jsx("path",{d:"M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"})}),a.jsx("span",{children:"Conversor de Moedas"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/ConversorDeMoedas.png",alt:""}),a.jsx("br",{}),a.jsxs("article",{children:[a.jsx("span",{children:"PHP"}),a.jsx("span",{children:"HTML"}),a.jsx("span",{children:"CSS"})]}),a.jsx("p",{children:"Programa criado em HTML, CSS e PHP utilizando API do Banco do Brasil"})]}),a.jsx("p",{children:"Ver projeto"})]})})]}),a.jsxs(zm,{children:[a.jsxs("p",{children:["Entre em ",a.jsx("span",{className:"react",children:"Contato"})," comigo"]}),a.jsx("p",{children:"Sinta-se à vontade para entrar em contato comigo para discutir projetos interessantes na área de desenvolvimento de software."})]}),a.jsxs(Rm,{children:[a.jsxs("div",{children:[a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",className:"iconify iconify--logos",width:"35.93",height:"32",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 228",children:a.jsx("path",{d:"M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"})}),a.jsx("span",{children:"João Paulo •"}),a.jsx("a",{href:"https://www.linkedin.com/in/joaovecchio/",target:"_blank",children:a.jsx("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 16 16",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"})})}),a.jsx("a",{href:"https://github.com/JoaopvSalles",target:"_blank",children:a.jsx("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 16 16",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"})})}),a.jsxs("p",{children:[a.jsx("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 512 512",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"})})," joaopaulovs2000@gmail.com"]})]}),a.jsxs(Tt,{to:"/contact",onClick:e,children:["Enviar email agora ",a.jsx("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 512 512",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"})})]})]})]})}const u0=I.div`
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
`,bm=I.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 4rem;

    @media (max-width: 500px) {
        gap: 0.5rem;
    }
`,Mm=I.button`
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
`,Im=I.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0.5rem;

    @media (max-width: 1080px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 720px) {
        grid-template-columns: 1fr;
    }
`,Om=I.div`
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
`,$m=I.p`
    svg {
        height: 1.2rem;
        width: 1.2rem;
        margin-right: 0.4rem;
        margin-bottom: -4px;
        fill: var(--black);
    }
`,Dm=I.img`
    margin: 1.5rem auto;
    width: 100%;
`,Fm=I.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
`,St=I.span`
    border-radius: 5px;
    background-color: var(--react);
    color: var(--white);
    font-weight: bold;
    font-size: 0.8rem;
    padding: 0.2rem;
    text-align: center;
`,Am=I.p`
    color: var(--black);
`,Bm=I.p`
    margin-top: 1rem;
    color: var(--black);
`,Um=I.a`
    text-decoration: none;
    color: var(--black);
`,pu=[{id:1,categories:["Javascript","Typescript","React","HTML","CSS","Vite","Styled-Components","Emailjs"],name:"Portfólio",imageUrl:"../../public/PortfolioBlack.png",tech1:"Javascript",tech2:"Typescript",tech3:"React",tech4:"HTML",tech5:"CSS",tech6:"Vite",tech7:"Styled-Components",tech8:"Emailjs",description:"Esse é meu Portfólio desenvolvido usando principalmente Typescript e React",link:"/projects/1"},{id:2,categories:["Javascript","Typescript","React","HTML","CSS","Styled-Components"],name:"DT Money",imageUrl:"../../public/dtMoney.png",tech1:"Javascript",tech2:"Typescript",tech3:"React",tech4:"HTML",tech5:"CSS",tech6:"Styled-Components",description:"Programa para calcular suas despesas com facilidade e clareza",link:"/projects/2"},{id:3,categories:["PHP","HTML","CSS"],name:"Conversor de Moedas",imageUrl:"../../public/ConversorDeMoedas.png",tech1:"PHP",tech2:"HTML",tech3:"CSS",description:"Programa criado em HTML, CSS e PHP utilizando API do Banco do Brasil",link:"/projects/3"},{id:4,categories:["Node","HTML","CSS"],name:"Projeto",imageUrl:"../../public/EmBreve.png",tech1:"Node",tech2:"HTML",tech3:"CSS",description:"Em Breve",link:"#"},{id:5,categories:["Node","HTML","CSS"],name:"Projeto",imageUrl:"../../public/EmBreve.png",tech1:"Node",tech2:"HTML",tech3:"CSS",description:"Em Breve",link:"#"},{id:6,categories:["HTML","CSS"],name:"Projeto",imageUrl:"../../public/EmBreve.png",tech1:"HTML",tech2:"CSS",description:"Em Breve",link:"#"}],Hm=["Javascript","Typescript","React","Node","PHP","HTML","CSS","Vite","Styled-Components","Emailjs"],Vm=({name:e,imageUrl:t,tech1:r,tech2:n,tech3:i,tech4:o,tech5:l,tech6:s,tech7:c,tech8:u,description:f,link:h})=>a.jsxs(u0,{children:[a.jsx("title",{children:"João - Projetos"}),a.jsx(Um,{href:h,children:a.jsxs(Om,{children:[a.jsxs($m,{children:[a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",className:"iconify iconify--logos",width:"35.93",height:"32",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 228",children:a.jsx("path",{d:"M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"})}),a.jsx("span",{children:e})]}),a.jsx(Dm,{src:t,alt:e}),a.jsxs(Fm,{children:[r&&a.jsx(St,{children:r}),n&&a.jsx(St,{children:n}),i&&a.jsx(St,{children:i}),o&&a.jsx(St,{children:o}),l&&a.jsx(St,{children:l}),s&&a.jsx(St,{children:s}),c&&a.jsx(St,{children:c}),u&&a.jsx(St,{children:u})]}),a.jsx(Am,{children:f}),a.jsx(Bm,{children:"Ver Projeto"})]})})]});function Wm(){const[e,t]=E.useState([]),r=i=>{t(o=>o.includes(i)?o.filter(l=>l!==i):[...o,i])},n=e.length===0?pu:pu.filter(i=>i.categories.some(o=>e.includes(o)));return a.jsx(u0,{children:a.jsxs("div",{className:"title",children:[a.jsxs("h2",{children:["Conheça meus principais ",a.jsx("span",{className:"react",children:" projetos"})]}),a.jsx(bm,{children:Hm.map(i=>a.jsx(Mm,{onClick:()=>r(i),active:e.includes(i),children:i.charAt(0).toUpperCase()+i.slice(1)},i))}),a.jsx(Im,{children:n.map(i=>a.jsx(Vm,{...i},i.id))})]})})}const Zm=I.div`
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
`,Qm="/Portfolio/assets/PortfolioBlack-4668ceb9.png",Xm="/Portfolio/assets/PortfolioWhite-379594db.png";function Km(){const e=hr(),t=[Qm,Xm],[r,n]=E.useState(0),[i,o]=E.useState(null),l=u=>{o(u),setTimeout(()=>{n(f=>u==="next"?(f+1)%t.length:(f-1+t.length)%t.length),o(null)},500)},s=()=>l("next"),c=()=>l("prev");return a.jsxs(Zm,{children:[a.jsxs("div",{className:"return",onClick:()=>e(-1),children:[a.jsxs("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 24 24",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:[a.jsx("path",{fill:"none",d:"M0 0h24v24H0z"}),a.jsx("path",{d:"M17.77 3.77L16 2 6 12l10 10 1.77-1.77L9.54 12z"})]}),a.jsx("span",{children:"Voltar"})]}),a.jsxs("h2",{children:["Projeto ",a.jsx("span",{className:"react",children:"Portfólio"})]}),a.jsxs("div",{className:"project",children:[a.jsxs("div",{className:"img-carousel",children:[a.jsx("button",{className:"prev",onClick:c,children:a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"48",height:"48",fill:"currentColor",children:a.jsx("path",{d:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z"})})}),t.map((u,f)=>a.jsx("img",{src:u,alt:`Imagem ${f}`,className:`
                                ${f===r?"active":""}
                                ${i==="next"&&f===(r+1)%t.length?"next-enter":""}
                                ${i==="next"&&f===r?"next-exit":""}
                                ${i==="prev"&&f===(r-1+t.length)%t.length?"prev-enter":""}
                                ${i==="prev"&&f===r?"prev-exit":""}
                            `},f)),a.jsx("button",{className:"next",onClick:s,children:a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"48",height:"48",fill:"currentColor",children:a.jsx("path",{d:"M8.59 16.59L13.17 12l-4.58-4.59L10 6l6 6-6 6z"})})})]}),a.jsxs("div",{className:"description",children:[a.jsxs("h3",{children:[a.jsx("span",{className:"react",children:"Descrição"})," do projeto:"]}),a.jsxs("p",{children:["Este é o meu próprio portfólio, desenvolvido com o objetivo de apresentar meus principais projetos pessoais e habilidades de desenvolvimento web.",a.jsx("br",{}),"Utilizando pricinpalmente TypeScript e React, este portfólio é uma plataforma que destaca minha experiência em desenvolvimento de software."]})]})]}),a.jsxs("div",{className:"details",children:[a.jsxs("div",{className:"functions",children:[a.jsxs("h3",{children:["Principais ",a.jsx("span",{className:"react",children:"Funcionalidades"}),":"]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"Visualizar projetos"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"Alterar entre tema claro ou escuro"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"Filtrar projetos por tag"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"Enviar Email para contato"})]})]}),a.jsxs("div",{className:"techs",children:[a.jsxs("h3",{children:["Principais ",a.jsx("span",{className:"react",children:"Tecnologias"}),":"]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"Javascript"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"Typescript"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"React"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"HTML"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"Vite"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"Styled-Components"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"Emailjs"})]})]}),a.jsxs("div",{className:"repository",children:[a.jsxs("h3",{children:["Onde ",a.jsx("span",{className:"react",children:"Encontrar"})," o Projeto:"]}),a.jsxs("a",{href:"https://github.com/JoaopvSalles",target:"_blank",children:[a.jsx("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 16 16",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"})}),"Ver Repositório"]})]})]})]})}const Ym=I.div`
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
`;function Gm(){const e=hr();return a.jsxs(Ym,{children:[a.jsxs("div",{className:"return",onClick:()=>e(-1),children:[a.jsxs("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 24 24",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:[a.jsx("path",{fill:"none",d:"M0 0h24v24H0z"}),a.jsx("path",{d:"M17.77 3.77L16 2 6 12l10 10 1.77-1.77L9.54 12z"})]}),a.jsx("span",{children:"Voltar"})]}),a.jsxs("h2",{children:["Projeto ",a.jsx("span",{className:"react",children:"DT Money"})]}),a.jsxs("div",{className:"project",children:[a.jsx("div",{className:"img",children:a.jsx("img",{src:"../../public/dtMoney.png",alt:""})}),a.jsxs("div",{className:"description",children:[a.jsxs("h3",{children:[a.jsx("span",{className:"react",children:"Descrição"})," do projeto:"]}),a.jsxs("p",{children:["Programa para calcular suas despesas.",a.jsx("br",{}),a.jsx("br",{}),"Como cadastar uma nova transação:",a.jsx("br",{}),'- clique em "nova transação"',a.jsx("br",{}),"- digite um título,",a.jsx("br",{}),"- digite um valor em R$,",a.jsx("br",{}),'- marque uma opção "entrada" ou "saída" caso você tenha recebido ou gasto dinheiro com a transação,',a.jsx("br",{}),"- digite uma categoria,",a.jsx("br",{}),'- clique em "cadastrar".',a.jsx("br",{}),a.jsx("br",{}),"Sua transição será adicionada a uma lista com todas as informações fornecidas e será gerada uma data exata do dia em que foi cadastrado a transição, e então você poderá adicionar uma nova transação.",a.jsx("br",{}),a.jsx("br",{}),'Conforme você adiciona novas transações o programa irá calcular automaticamente, seu saldo total de "entrada" em R$, seu saldo total de "saída" em R$, e seu saldo "final" em R$ positivo ou negativo.']})]})]}),a.jsxs("div",{className:"details",children:[a.jsxs("div",{className:"functions",children:[a.jsxs("h3",{children:["Principais ",a.jsx("span",{className:"react",children:"Funcionalidades"}),":"]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"Criar novos cards com transações"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"Adicionar data do dia em que a trasação é criada"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"Calcular saldos de Entrada, Saída e Total"})]})]}),a.jsxs("div",{className:"techs",children:[a.jsxs("h3",{children:["Principais ",a.jsx("span",{className:"react",children:"Tecnologias"}),":"]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"Javascript"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"Typescript"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"React"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"HTML"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"Styled-Components"})]})]}),a.jsxs("div",{className:"repository",children:[a.jsxs("h3",{children:["Onde ",a.jsx("span",{className:"react",children:"Encontrar"})," o Projeto:"]}),a.jsxs("a",{href:"https://github.com/JoaopvSalles/dtmoney",target:"_blank",children:[a.jsx("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 16 16",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"})}),"Ver Repositório"]})]})]})]})}const Jm=I.div`
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
`;function qm(){const e=hr();return a.jsxs(Jm,{children:[a.jsxs("div",{className:"return",onClick:()=>e(-1),children:[a.jsxs("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 24 24",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:[a.jsx("path",{fill:"none",d:"M0 0h24v24H0z"}),a.jsx("path",{d:"M17.77 3.77L16 2 6 12l10 10 1.77-1.77L9.54 12z"})]}),a.jsx("span",{children:"Voltar"})]}),a.jsxs("h2",{children:["Projeto ",a.jsx("span",{className:"react",children:"Conversor de Moedas"})]}),a.jsxs("div",{className:"project",children:[a.jsx("div",{className:"img",children:a.jsx("img",{src:"../../public/ConversorDeMoedas.png",alt:""})}),a.jsxs("div",{className:"description",children:[a.jsxs("h3",{children:[a.jsx("span",{className:"react",children:"Descrição"})," do projeto:"]}),a.jsxs("p",{children:["Programa criado em HTML CSS PHP utilizando API com o intuito de praticar e desenvolver conhecimento nas tecnologias.",a.jsx("br",{}),'Digite um valor em Real e clique em "Converter", o programa irá fazer a conversão atualizada para o Dolar diretamente pela API do Banco do Brasil e mostrar o resultado na tela.']})]})]}),a.jsxs("div",{className:"details",children:[a.jsxs("div",{className:"functions",children:[a.jsxs("h3",{children:["Principais ",a.jsx("span",{className:"react",children:"Funcionalidades"}),":"]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"Cálculo de conversão de Real para Dolar"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"Integração com API do Banco do Brasil"})]})]}),a.jsxs("div",{className:"techs",children:[a.jsxs("h3",{children:["Principais ",a.jsx("span",{className:"react",children:"Tecnologias"}),":"]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"PHP"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"HTML"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]})]}),a.jsxs("div",{className:"repository",children:[a.jsxs("h3",{children:["Onde ",a.jsx("span",{className:"react",children:"Encontrar"})," o Projeto:"]}),a.jsxs("a",{href:"https://github.com/JoaopvSalles/Project-PHP-ConversorDeMoedas",target:"_blank",children:[a.jsx("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 16 16",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"})}),"Ver Repositório"]})]})]})]})}const e3=I.div`
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
`;function t3(){const e=hr();return a.jsxs(e3,{children:[a.jsxs("div",{className:"return",onClick:()=>e(-1),children:[a.jsxs("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 24 24",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:[a.jsx("path",{fill:"none",d:"M0 0h24v24H0z"}),a.jsx("path",{d:"M17.77 3.77L16 2 6 12l10 10 1.77-1.77L9.54 12z"})]}),a.jsx("span",{children:"Voltar"})]}),a.jsxs("h2",{children:["Projeto ",a.jsx("span",{className:"react",children:"Nome Projeto"})]}),a.jsxs("div",{className:"project",children:[a.jsx("div",{className:"img",children:a.jsx("img",{src:"../../public/EmBreve.png",alt:""})}),a.jsxs("div",{className:"description",children:[a.jsxs("h3",{children:[a.jsx("span",{className:"react",children:"Descrição"})," do projeto:"]}),a.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus animi cumque deserunt praesentium alias tenetur quas ab quaerat, possimus pariatur? Neque, facere provident quisquam cum veniam sed eveniet soluta a"})]})]}),a.jsxs("div",{className:"details",children:[a.jsxs("div",{className:"functions",children:[a.jsxs("h3",{children:["Principais ",a.jsx("span",{className:"react",children:"Funcionalidades"}),":"]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]})]}),a.jsxs("div",{className:"techs",children:[a.jsxs("h3",{children:["Principais ",a.jsx("span",{className:"react",children:"Tecnologias"}),":"]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]})]}),a.jsxs("div",{className:"repository",children:[a.jsxs("h3",{children:["Onde ",a.jsx("span",{className:"react",children:"Encontrar"})," o Projeto:"]}),a.jsxs("a",{href:"https://github.com/JoaopvSalles",target:"_blank",children:[a.jsx("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 16 16",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"})}),"Ver Repositório"]})]})]})]})}const r3=I.div`
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
`;function n3(){const e=hr();return a.jsxs(r3,{children:[a.jsxs("div",{className:"return",onClick:()=>e(-1),children:[a.jsxs("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 24 24",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:[a.jsx("path",{fill:"none",d:"M0 0h24v24H0z"}),a.jsx("path",{d:"M17.77 3.77L16 2 6 12l10 10 1.77-1.77L9.54 12z"})]}),a.jsx("span",{children:"Voltar"})]}),a.jsxs("h2",{children:["Projeto ",a.jsx("span",{className:"react",children:"Nome Projeto"})]}),a.jsxs("div",{className:"project",children:[a.jsx("div",{className:"img",children:a.jsx("img",{src:"../../public/EmBreve.png",alt:""})}),a.jsxs("div",{className:"description",children:[a.jsxs("h3",{children:[a.jsx("span",{className:"react",children:"Descrição"})," do projeto:"]}),a.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus animi cumque deserunt praesentium alias tenetur quas ab quaerat, possimus pariatur? Neque, facere provident quisquam cum veniam sed eveniet soluta a"})]})]}),a.jsxs("div",{className:"details",children:[a.jsxs("div",{className:"functions",children:[a.jsxs("h3",{children:["Principais ",a.jsx("span",{className:"react",children:"Funcionalidades"}),":"]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]})]}),a.jsxs("div",{className:"techs",children:[a.jsxs("h3",{children:["Principais ",a.jsx("span",{className:"react",children:"Tecnologias"}),":"]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]})]}),a.jsxs("div",{className:"repository",children:[a.jsxs("h3",{children:["Onde ",a.jsx("span",{className:"react",children:"Encontrar"})," o Projeto:"]}),a.jsxs("a",{href:"https://github.com/JoaopvSalles",target:"_blank",children:[a.jsx("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 16 16",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"})}),"Ver Repositório"]})]})]})]})}const i3=I.div`
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
`;function o3(){const e=hr();return a.jsxs(i3,{children:[a.jsxs("div",{className:"return",onClick:()=>e(-1),children:[a.jsxs("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 24 24",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:[a.jsx("path",{fill:"none",d:"M0 0h24v24H0z"}),a.jsx("path",{d:"M17.77 3.77L16 2 6 12l10 10 1.77-1.77L9.54 12z"})]}),a.jsx("span",{children:"Voltar"})]}),a.jsxs("h2",{children:["Projeto ",a.jsx("span",{className:"react",children:"Nome Projeto"})]}),a.jsxs("div",{className:"project",children:[a.jsx("div",{className:"img",children:a.jsx("img",{src:"../../public/EmBreve.png",alt:""})}),a.jsxs("div",{className:"description",children:[a.jsxs("h3",{children:[a.jsx("span",{className:"react",children:"Descrição"})," do projeto:"]}),a.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus animi cumque deserunt praesentium alias tenetur quas ab quaerat, possimus pariatur? Neque, facere provident quisquam cum veniam sed eveniet soluta a"})]})]}),a.jsxs("div",{className:"details",children:[a.jsxs("div",{className:"functions",children:[a.jsxs("h3",{children:["Principais ",a.jsx("span",{className:"react",children:"Funcionalidades"}),":"]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]})]}),a.jsxs("div",{className:"techs",children:[a.jsxs("h3",{children:["Principais ",a.jsx("span",{className:"react",children:"Tecnologias"}),":"]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]})]}),a.jsxs("div",{className:"repository",children:[a.jsxs("h3",{children:["Onde ",a.jsx("span",{className:"react",children:"Encontrar"})," o Projeto:"]}),a.jsxs("a",{href:"https://github.com/JoaopvSalles",target:"_blank",children:[a.jsx("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 16 16",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"})}),"Ver Repositório"]})]})]})]})}class ti{constructor(t=0,r="Network Error"){this.status=t,this.text=r}}const l3=()=>{if(!(typeof localStorage>"u"))return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,t)=>Promise.resolve(localStorage.setItem(e,t)),remove:e=>Promise.resolve(localStorage.removeItem(e))}},ce={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:l3()},bs=e=>e?typeof e=="string"?{publicKey:e}:e.toString()==="[object Object]"?e:{}:{},a3=(e,t="https://api.emailjs.com")=>{if(!e)return;const r=bs(e);ce.publicKey=r.publicKey,ce.blockHeadless=r.blockHeadless,ce.storageProvider=r.storageProvider,ce.blockList=r.blockList,ce.limitRate=r.limitRate,ce.origin=r.origin||t},d0=async(e,t,r={})=>{const n=await fetch(ce.origin+e,{method:"POST",headers:r,body:t}),i=await n.text(),o=new ti(n.status,i);if(n.ok)return o;throw o},f0=(e,t,r)=>{if(!e||typeof e!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||typeof t!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!r||typeof r!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},s3=e=>{if(e&&e.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},p0=e=>e.webdriver||!e.languages||e.languages.length===0,h0=()=>new ti(451,"Unavailable For Headless Browser"),c3=(e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if(typeof t!="string")throw"The BlockList watchVariable has to be a string"},u3=e=>{var t;return!((t=e.list)!=null&&t.length)||!e.watchVariable},d3=(e,t)=>e instanceof FormData?e.get(t):e[t],m0=(e,t)=>{if(u3(e))return!1;c3(e.list,e.watchVariable);const r=d3(t,e.watchVariable);return typeof r!="string"?!1:e.list.includes(r)},g0=()=>new ti(403,"Forbidden"),f3=(e,t)=>{if(typeof e!="number"||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&typeof t!="string")throw"The LimitRate ID has to be a non-empty string"},p3=async(e,t,r)=>{const n=Number(await r.get(e)||0);return t-Date.now()+n},v0=async(e,t,r)=>{if(!t.throttle||!r)return!1;f3(t.throttle,t.id);const n=t.id||e;return await p3(n,t.throttle,r)>0?!0:(await r.set(n,Date.now().toString()),!1)},y0=()=>new ti(429,"Too Many Requests"),h3=async(e,t,r,n)=>{const i=bs(n),o=i.publicKey||ce.publicKey,l=i.blockHeadless||ce.blockHeadless,s=i.storageProvider||ce.storageProvider,c={...ce.blockList,...i.blockList},u={...ce.limitRate,...i.limitRate};return l&&p0(navigator)?Promise.reject(h0()):(f0(o,e,t),s3(r),r&&m0(c,r)?Promise.reject(g0()):await v0(location.pathname,u,s)?Promise.reject(y0()):d0("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:o,service_id:e,template_id:t,template_params:r}),{"Content-type":"application/json"}))},m3=e=>{if(!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},g3=e=>typeof e=="string"?document.querySelector(e):e,v3=async(e,t,r,n)=>{const i=bs(n),o=i.publicKey||ce.publicKey,l=i.blockHeadless||ce.blockHeadless,s=ce.storageProvider||i.storageProvider,c={...ce.blockList,...i.blockList},u={...ce.limitRate,...i.limitRate};if(l&&p0(navigator))return Promise.reject(h0());const f=g3(r);f0(o,e,t),m3(f);const h=new FormData(f);return m0(c,h)?Promise.reject(g0()):await v0(location.pathname,u,s)?Promise.reject(y0()):(h.append("lib_version","4.4.1"),h.append("service_id",e),h.append("template_id",t),h.append("user_id",o),d0("/api/v1.0/email/send-form",h))},y3={init:a3,send:h3,sendForm:v3,EmailJSResponseStatus:ti},x3=I.div`
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
`;function w3(){const[e,t]=E.useState(""),[r,n]=E.useState(""),[i,o]=E.useState(""),[l,s]=E.useState(!1),[c,u]=E.useState(""),f=h=>{h.preventDefault(),s(!0);const g={from_name:e,from_email:r,message:i};y3.send("service_0q54xn8","template_jc9eaws",g,"FhikmvDk7JNVakgwA").then(()=>{u("E-mail enviado com sucesso!"),t(""),n(""),o("")}).catch(v=>{u("Erro ao enviar o e-mail. Tente novamente."),console.error("Erro ao enviar o e-mail:",v)}).finally(()=>{s(!1)})};return a.jsxs(x3,{children:[a.jsx("title",{children:"João - Contato"}),a.jsxs("header",{children:[a.jsxs("h2",{children:["Entre em ",a.jsx("span",{className:"react",children:"contato"})," comigo:"]}),a.jsx("p",{children:"Sinta-se à vontade para entrar em contato comigo pelas redes sociais ou enviando um email."})]}),a.jsxs("section",{className:"redes",children:[a.jsxs("h3",{children:["Minhas ",a.jsx("span",{className:"react",children:"Redes Sociais"}),":"]}),a.jsxs("a",{href:"https://www.linkedin.com/in/joaovecchio/",target:"_blank",children:[a.jsx("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 16 16",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"})}),"LinkeIn"]}),a.jsxs("a",{href:"https://github.com/JoaopvSalles",target:"_blank",children:[a.jsx("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 16 16",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"})}),"Github"]})]}),a.jsxs("section",{className:"email",children:[a.jsxs("h3",{children:["Me envie um ",a.jsx("span",{className:"react",children:"Email"}),":"]}),a.jsxs("form",{onSubmit:f,children:[a.jsx("label",{htmlFor:"name",children:"Seu nome"}),a.jsx("input",{type:"text",id:"name",value:e,onChange:h=>t(h.target.value),placeholder:"Seu nome",required:!0}),a.jsx("label",{htmlFor:"email",children:"Seu email"}),a.jsx("input",{type:"email",id:"email",value:r,onChange:h=>n(h.target.value),placeholder:"exemplo@email.com",required:!0}),a.jsx("label",{htmlFor:"message",children:"Mensagem"}),a.jsx("textarea",{id:"message",value:i,onChange:h=>o(h.target.value),placeholder:"Olá, ...",required:!0}),a.jsxs("button",{type:"submit",disabled:l,children:[l?"Enviando...":"Enviar email",a.jsx("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 512 512",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"})})]})]}),c&&a.jsx("p",{className:`status-message ${c.includes("sucesso")?"success":"error"}`,children:c})]})]})}const k3=I.div`
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
`;function j3(){return a.jsx(k3,{children:a.jsx("div",{children:a.jsxs("p",{children:["Copyrights © 2023 - Developed by João ",a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",className:"iconify iconify--logos",width:"35.93",height:"32",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 228",children:a.jsx("path",{d:"M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"})})," v3.1.0"]})})})}function S3(e,t){const[r,n]=E.useState(()=>{const i=localStorage.getItem(e);return i?JSON.parse(i):t});return E.useEffect(()=>{localStorage.setItem(e,JSON.stringify(r))},[e,r]),[r,n]}const C3=Kh`
 
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
`,hu={title:"light",colors:{white:"#ffffff",black:"#000000",react:"#00D8FF",border:"#aaaaaa",background:"#FFFAFA"}},E3={title:"dark",colors:{white:"#000000",black:"#ffffff",react:"#00D8FF",border:"#aaaaaa",background:"#282a36"}};function P3(){const[e,t]=S3("theme",hu),r=()=>{t(e.title==="light"?E3:hu)};return a.jsx(Ap,{basename:"/Portfolio",children:a.jsxs(Zh,{theme:e,children:[a.jsx(wm,{toggleTheme:r}),a.jsxs(bp,{children:[a.jsx(qe,{path:"/",element:a.jsx(Lm,{})}),a.jsx(qe,{path:"/projects",element:a.jsx(Wm,{})}),a.jsx(qe,{path:"/projects/1",element:a.jsx(Km,{})}),a.jsx(qe,{path:"/projects/2",element:a.jsx(Gm,{})}),a.jsx(qe,{path:"/projects/3",element:a.jsx(qm,{})}),a.jsx(qe,{path:"/projects/4",element:a.jsx(t3,{})}),a.jsx(qe,{path:"/projects/5",element:a.jsx(n3,{})}),a.jsx(qe,{path:"/projects/6",element:a.jsx(o3,{})}),a.jsx(qe,{path:"/contact",element:a.jsx(w3,{})})]}),a.jsx(j3,{}),a.jsx(C3,{})]})})}Sl.createRoot(document.getElementById("root")).render(a.jsx(H.StrictMode,{children:a.jsx(P3,{})}));
