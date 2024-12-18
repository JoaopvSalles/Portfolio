function w0(e,t){for(var r=0;r<t.length;r++){const n=t[r];if(typeof n!="string"&&!Array.isArray(n)){for(const i in n)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(n,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>n[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();function k0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var gu={exports:{}},yo={},vu={exports:{}},b={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kn=Symbol.for("react.element"),j0=Symbol.for("react.portal"),S0=Symbol.for("react.fragment"),C0=Symbol.for("react.strict_mode"),E0=Symbol.for("react.profiler"),P0=Symbol.for("react.provider"),N0=Symbol.for("react.context"),_0=Symbol.for("react.forward_ref"),T0=Symbol.for("react.suspense"),z0=Symbol.for("react.memo"),R0=Symbol.for("react.lazy"),Is=Symbol.iterator;function L0(e){return e===null||typeof e!="object"?null:(e=Is&&e[Is]||e["@@iterator"],typeof e=="function"?e:null)}var yu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},xu=Object.assign,wu={};function Jr(e,t,r){this.props=e,this.context=t,this.refs=wu,this.updater=r||yu}Jr.prototype.isReactComponent={};Jr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Jr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ku(){}ku.prototype=Jr.prototype;function ba(e,t,r){this.props=e,this.context=t,this.refs=wu,this.updater=r||yu}var Ia=ba.prototype=new ku;Ia.constructor=ba;xu(Ia,Jr.prototype);Ia.isPureReactComponent=!0;var Os=Array.isArray,ju=Object.prototype.hasOwnProperty,Oa={current:null},Su={key:!0,ref:!0,__self:!0,__source:!0};function Cu(e,t,r){var n,i={},o=null,l=null;if(t!=null)for(n in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)ju.call(t,n)&&!Su.hasOwnProperty(n)&&(i[n]=t[n]);var s=arguments.length-2;if(s===1)i.children=r;else if(1<s){for(var c=Array(s),u=0;u<s;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(n in s=e.defaultProps,s)i[n]===void 0&&(i[n]=s[n]);return{$$typeof:Kn,type:e,key:o,ref:l,props:i,_owner:Oa.current}}function M0(e,t){return{$$typeof:Kn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function $a(e){return typeof e=="object"&&e!==null&&e.$$typeof===Kn}function b0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var $s=/\/+/g;function Ho(e,t){return typeof e=="object"&&e!==null&&e.key!=null?b0(""+e.key):t.toString(36)}function ji(e,t,r,n,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Kn:case j0:l=!0}}if(l)return l=e,i=i(l),e=n===""?"."+Ho(l,0):n,Os(i)?(r="",e!=null&&(r=e.replace($s,"$&/")+"/"),ji(i,t,r,"",function(u){return u})):i!=null&&($a(i)&&(i=M0(i,r+(!i.key||l&&l.key===i.key?"":(""+i.key).replace($s,"$&/")+"/")+e)),t.push(i)),1;if(l=0,n=n===""?".":n+":",Os(e))for(var s=0;s<e.length;s++){o=e[s];var c=n+Ho(o,s);l+=ji(o,t,r,c,i)}else if(c=L0(e),typeof c=="function")for(e=c.call(e),s=0;!(o=e.next()).done;)o=o.value,c=n+Ho(o,s++),l+=ji(o,t,r,c,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function ii(e,t,r){if(e==null)return e;var n=[],i=0;return ji(e,n,"","",function(o){return t.call(r,o,i++)}),n}function I0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var we={current:null},Si={transition:null},O0={ReactCurrentDispatcher:we,ReactCurrentBatchConfig:Si,ReactCurrentOwner:Oa};b.Children={map:ii,forEach:function(e,t,r){ii(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return ii(e,function(){t++}),t},toArray:function(e){return ii(e,function(t){return t})||[]},only:function(e){if(!$a(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};b.Component=Jr;b.Fragment=S0;b.Profiler=E0;b.PureComponent=ba;b.StrictMode=C0;b.Suspense=T0;b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O0;b.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=xu({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=Oa.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)ju.call(t,c)&&!Su.hasOwnProperty(c)&&(n[c]=t[c]===void 0&&s!==void 0?s[c]:t[c])}var c=arguments.length-2;if(c===1)n.children=r;else if(1<c){s=Array(c);for(var u=0;u<c;u++)s[u]=arguments[u+2];n.children=s}return{$$typeof:Kn,type:e.type,key:i,ref:o,props:n,_owner:l}};b.createContext=function(e){return e={$$typeof:N0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:P0,_context:e},e.Consumer=e};b.createElement=Cu;b.createFactory=function(e){var t=Cu.bind(null,e);return t.type=e,t};b.createRef=function(){return{current:null}};b.forwardRef=function(e){return{$$typeof:_0,render:e}};b.isValidElement=$a;b.lazy=function(e){return{$$typeof:R0,_payload:{_status:-1,_result:e},_init:I0}};b.memo=function(e,t){return{$$typeof:z0,type:e,compare:t===void 0?null:t}};b.startTransition=function(e){var t=Si.transition;Si.transition={};try{e()}finally{Si.transition=t}};b.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};b.useCallback=function(e,t){return we.current.useCallback(e,t)};b.useContext=function(e){return we.current.useContext(e)};b.useDebugValue=function(){};b.useDeferredValue=function(e){return we.current.useDeferredValue(e)};b.useEffect=function(e,t){return we.current.useEffect(e,t)};b.useId=function(){return we.current.useId()};b.useImperativeHandle=function(e,t,r){return we.current.useImperativeHandle(e,t,r)};b.useInsertionEffect=function(e,t){return we.current.useInsertionEffect(e,t)};b.useLayoutEffect=function(e,t){return we.current.useLayoutEffect(e,t)};b.useMemo=function(e,t){return we.current.useMemo(e,t)};b.useReducer=function(e,t,r){return we.current.useReducer(e,t,r)};b.useRef=function(e){return we.current.useRef(e)};b.useState=function(e){return we.current.useState(e)};b.useSyncExternalStore=function(e,t,r){return we.current.useSyncExternalStore(e,t,r)};b.useTransition=function(){return we.current.useTransition()};b.version="18.2.0";vu.exports=b;var E=vu.exports;const H=k0(E),$0=w0({__proto__:null,default:H},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D0=E,F0=Symbol.for("react.element"),A0=Symbol.for("react.fragment"),B0=Object.prototype.hasOwnProperty,U0=D0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,H0={key:!0,ref:!0,__self:!0,__source:!0};function Eu(e,t,r){var n,i={},o=null,l=null;r!==void 0&&(o=""+r),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(n in t)B0.call(t,n)&&!H0.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)i[n]===void 0&&(i[n]=t[n]);return{$$typeof:F0,type:e,key:o,ref:l,props:i,_owner:U0.current}}yo.Fragment=A0;yo.jsx=Eu;yo.jsxs=Eu;gu.exports=yo;var a=gu.exports,Cl={},Pu={exports:{}},Me={},Nu={exports:{}},_u={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,z){var R=N.length;N.push(z);e:for(;0<R;){var W=R-1>>>1,Y=N[W];if(0<i(Y,z))N[W]=z,N[R]=Y,R=W;else break e}}function r(N){return N.length===0?null:N[0]}function n(N){if(N.length===0)return null;var z=N[0],R=N.pop();if(R!==z){N[0]=R;e:for(var W=0,Y=N.length,st=Y>>>1;W<st;){var Ne=2*(W+1)-1,wt=N[Ne],_e=Ne+1,Ie=N[_e];if(0>i(wt,R))_e<Y&&0>i(Ie,wt)?(N[W]=Ie,N[_e]=R,W=_e):(N[W]=wt,N[Ne]=R,W=Ne);else if(_e<Y&&0>i(Ie,R))N[W]=Ie,N[_e]=R,W=_e;else break e}}return z}function i(N,z){var R=N.sortIndex-z.sortIndex;return R!==0?R:N.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var c=[],u=[],f=1,h=null,g=3,v=!1,y=!1,w=!1,P=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(N){for(var z=r(u);z!==null;){if(z.callback===null)n(u);else if(z.startTime<=N)n(u),z.sortIndex=z.expirationTime,t(c,z);else break;z=r(u)}}function x(N){if(w=!1,m(N),!y)if(r(c)!==null)y=!0,at(k);else{var z=r(u);z!==null&&ve(x,z.startTime-N)}}function k(N,z){y=!1,w&&(w=!1,p(T),T=-1),v=!0;var R=g;try{for(m(z),h=r(c);h!==null&&(!(h.expirationTime>z)||N&&!ge());){var W=h.callback;if(typeof W=="function"){h.callback=null,g=h.priorityLevel;var Y=W(h.expirationTime<=z);z=e.unstable_now(),typeof Y=="function"?h.callback=Y:h===r(c)&&n(c),m(z)}else n(c);h=r(c)}if(h!==null)var st=!0;else{var Ne=r(u);Ne!==null&&ve(x,Ne.startTime-z),st=!1}return st}finally{h=null,g=R,v=!1}}var j=!1,S=null,T=-1,F=5,M=-1;function ge(){return!(e.unstable_now()-M<F)}function ot(){if(S!==null){var N=e.unstable_now();M=N;var z=!0;try{z=S(!0,N)}finally{z?lt():(j=!1,S=null)}}else j=!1}var lt;if(typeof d=="function")lt=function(){d(ot)};else if(typeof MessageChannel<"u"){var gr=new MessageChannel,He=gr.port2;gr.port1.onmessage=ot,lt=function(){He.postMessage(null)}}else lt=function(){P(ot,0)};function at(N){S=N,j||(j=!0,lt())}function ve(N,z){T=P(function(){N(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,at(k))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return r(c)},e.unstable_next=function(N){switch(g){case 1:case 2:case 3:var z=3;break;default:z=g}var R=g;g=z;try{return N()}finally{g=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,z){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var R=g;g=N;try{return z()}finally{g=R}},e.unstable_scheduleCallback=function(N,z,R){var W=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?W+R:W):R=W,N){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=R+Y,N={id:f++,callback:z,priorityLevel:N,startTime:R,expirationTime:Y,sortIndex:-1},R>W?(N.sortIndex=R,t(u,N),r(c)===null&&N===r(u)&&(w?(p(T),T=-1):w=!0,ve(x,R-W))):(N.sortIndex=Y,t(c,N),y||v||(y=!0,at(k))),N},e.unstable_shouldYield=ge,e.unstable_wrapCallback=function(N){var z=g;return function(){var R=g;g=z;try{return N.apply(this,arguments)}finally{g=R}}}})(_u);Nu.exports=_u;var V0=Nu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tu=E,Le=V0;function C(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var zu=new Set,Nn={};function dr(e,t){Ar(e,t),Ar(e+"Capture",t)}function Ar(e,t){for(Nn[e]=t,e=0;e<t.length;e++)zu.add(t[e])}var mt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),El=Object.prototype.hasOwnProperty,W0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ds={},Fs={};function Z0(e){return El.call(Fs,e)?!0:El.call(Ds,e)?!1:W0.test(e)?Fs[e]=!0:(Ds[e]=!0,!1)}function Q0(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function X0(e,t,r,n){if(t===null||typeof t>"u"||Q0(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ke(e,t,r,n,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var de={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){de[e]=new ke(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];de[t]=new ke(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){de[e]=new ke(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){de[e]=new ke(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){de[e]=new ke(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){de[e]=new ke(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){de[e]=new ke(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){de[e]=new ke(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){de[e]=new ke(e,5,!1,e.toLowerCase(),null,!1,!1)});var Da=/[\-:]([a-z])/g;function Fa(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Da,Fa);de[t]=new ke(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Da,Fa);de[t]=new ke(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Da,Fa);de[t]=new ke(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){de[e]=new ke(e,1,!1,e.toLowerCase(),null,!1,!1)});de.xlinkHref=new ke("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){de[e]=new ke(e,1,!1,e.toLowerCase(),null,!0,!0)});function Aa(e,t,r,n){var i=de.hasOwnProperty(t)?de[t]:null;(i!==null?i.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(X0(t,r,i,n)&&(r=null),n||i===null?Z0(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(t=i.attributeName,n=i.attributeNamespace,r===null?e.removeAttribute(t):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var xt=Tu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,oi=Symbol.for("react.element"),wr=Symbol.for("react.portal"),kr=Symbol.for("react.fragment"),Ba=Symbol.for("react.strict_mode"),Pl=Symbol.for("react.profiler"),Ru=Symbol.for("react.provider"),Lu=Symbol.for("react.context"),Ua=Symbol.for("react.forward_ref"),Nl=Symbol.for("react.suspense"),_l=Symbol.for("react.suspense_list"),Ha=Symbol.for("react.memo"),Et=Symbol.for("react.lazy"),Mu=Symbol.for("react.offscreen"),As=Symbol.iterator;function nn(e){return e===null||typeof e!="object"?null:(e=As&&e[As]||e["@@iterator"],typeof e=="function"?e:null)}var K=Object.assign,Vo;function fn(e){if(Vo===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Vo=t&&t[1]||""}return`
`+Vo+e}var Wo=!1;function Zo(e,t){if(!e||Wo)return"";Wo=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var n=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){n=u}e.call(t.prototype)}else{try{throw Error()}catch(u){n=u}e()}}catch(u){if(u&&n&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=n.stack.split(`
`),l=i.length-1,s=o.length-1;1<=l&&0<=s&&i[l]!==o[s];)s--;for(;1<=l&&0<=s;l--,s--)if(i[l]!==o[s]){if(l!==1||s!==1)do if(l--,s--,0>s||i[l]!==o[s]){var c=`
`+i[l].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=l&&0<=s);break}}}finally{Wo=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?fn(e):""}function K0(e){switch(e.tag){case 5:return fn(e.type);case 16:return fn("Lazy");case 13:return fn("Suspense");case 19:return fn("SuspenseList");case 0:case 2:case 15:return e=Zo(e.type,!1),e;case 11:return e=Zo(e.type.render,!1),e;case 1:return e=Zo(e.type,!0),e;default:return""}}function Tl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case kr:return"Fragment";case wr:return"Portal";case Pl:return"Profiler";case Ba:return"StrictMode";case Nl:return"Suspense";case _l:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Lu:return(e.displayName||"Context")+".Consumer";case Ru:return(e._context.displayName||"Context")+".Provider";case Ua:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ha:return t=e.displayName||null,t!==null?t:Tl(e.type)||"Memo";case Et:t=e._payload,e=e._init;try{return Tl(e(t))}catch{}}return null}function Y0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Tl(t);case 8:return t===Ba?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ht(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function bu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function G0(e){var t=bu(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,o=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){n=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(l){n=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function li(e){e._valueTracker||(e._valueTracker=G0(e))}function Iu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=bu(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function Fi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function zl(e,t){var r=t.checked;return K({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Bs(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=Ht(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ou(e,t){t=t.checked,t!=null&&Aa(e,"checked",t,!1)}function Rl(e,t){Ou(e,t);var r=Ht(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ll(e,t.type,r):t.hasOwnProperty("defaultValue")&&Ll(e,t.type,Ht(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Us(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Ll(e,t,r){(t!=="number"||Fi(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var pn=Array.isArray;function br(e,t,r,n){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&n&&(e[r].defaultSelected=!0)}else{for(r=""+Ht(r),t=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ml(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(C(91));return K({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Hs(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(C(92));if(pn(r)){if(1<r.length)throw Error(C(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Ht(r)}}function $u(e,t){var r=Ht(t.value),n=Ht(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function Vs(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Du(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function bl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Du(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ai,Fu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,i){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ai=ai||document.createElement("div"),ai.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ai.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function _n(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var vn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},J0=["Webkit","ms","Moz","O"];Object.keys(vn).forEach(function(e){J0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),vn[t]=vn[e]})});function Au(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||vn.hasOwnProperty(e)&&vn[e]?(""+t).trim():t+"px"}function Bu(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,i=Au(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,i):e[r]=i}}var q0=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Il(e,t){if(t){if(q0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(C(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(C(61))}if(t.style!=null&&typeof t.style!="object")throw Error(C(62))}}function Ol(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $l=null;function Va(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Dl=null,Ir=null,Or=null;function Ws(e){if(e=Jn(e)){if(typeof Dl!="function")throw Error(C(280));var t=e.stateNode;t&&(t=So(t),Dl(e.stateNode,e.type,t))}}function Uu(e){Ir?Or?Or.push(e):Or=[e]:Ir=e}function Hu(){if(Ir){var e=Ir,t=Or;if(Or=Ir=null,Ws(e),t)for(e=0;e<t.length;e++)Ws(t[e])}}function Vu(e,t){return e(t)}function Wu(){}var Qo=!1;function Zu(e,t,r){if(Qo)return e(t,r);Qo=!0;try{return Vu(e,t,r)}finally{Qo=!1,(Ir!==null||Or!==null)&&(Wu(),Hu())}}function Tn(e,t){var r=e.stateNode;if(r===null)return null;var n=So(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(C(231,t,typeof r));return r}var Fl=!1;if(mt)try{var on={};Object.defineProperty(on,"passive",{get:function(){Fl=!0}}),window.addEventListener("test",on,on),window.removeEventListener("test",on,on)}catch{Fl=!1}function ef(e,t,r,n,i,o,l,s,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(r,u)}catch(f){this.onError(f)}}var yn=!1,Ai=null,Bi=!1,Al=null,tf={onError:function(e){yn=!0,Ai=e}};function rf(e,t,r,n,i,o,l,s,c){yn=!1,Ai=null,ef.apply(tf,arguments)}function nf(e,t,r,n,i,o,l,s,c){if(rf.apply(this,arguments),yn){if(yn){var u=Ai;yn=!1,Ai=null}else throw Error(C(198));Bi||(Bi=!0,Al=u)}}function fr(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Qu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Zs(e){if(fr(e)!==e)throw Error(C(188))}function of(e){var t=e.alternate;if(!t){if(t=fr(e),t===null)throw Error(C(188));return t!==e?null:e}for(var r=e,n=t;;){var i=r.return;if(i===null)break;var o=i.alternate;if(o===null){if(n=i.return,n!==null){r=n;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===r)return Zs(i),e;if(o===n)return Zs(i),t;o=o.sibling}throw Error(C(188))}if(r.return!==n.return)r=i,n=o;else{for(var l=!1,s=i.child;s;){if(s===r){l=!0,r=i,n=o;break}if(s===n){l=!0,n=i,r=o;break}s=s.sibling}if(!l){for(s=o.child;s;){if(s===r){l=!0,r=o,n=i;break}if(s===n){l=!0,n=o,r=i;break}s=s.sibling}if(!l)throw Error(C(189))}}if(r.alternate!==n)throw Error(C(190))}if(r.tag!==3)throw Error(C(188));return r.stateNode.current===r?e:t}function Xu(e){return e=of(e),e!==null?Ku(e):null}function Ku(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ku(e);if(t!==null)return t;e=e.sibling}return null}var Yu=Le.unstable_scheduleCallback,Qs=Le.unstable_cancelCallback,lf=Le.unstable_shouldYield,af=Le.unstable_requestPaint,q=Le.unstable_now,sf=Le.unstable_getCurrentPriorityLevel,Wa=Le.unstable_ImmediatePriority,Gu=Le.unstable_UserBlockingPriority,Ui=Le.unstable_NormalPriority,cf=Le.unstable_LowPriority,Ju=Le.unstable_IdlePriority,xo=null,nt=null;function uf(e){if(nt&&typeof nt.onCommitFiberRoot=="function")try{nt.onCommitFiberRoot(xo,e,void 0,(e.current.flags&128)===128)}catch{}}var Xe=Math.clz32?Math.clz32:pf,df=Math.log,ff=Math.LN2;function pf(e){return e>>>=0,e===0?32:31-(df(e)/ff|0)|0}var si=64,ci=4194304;function hn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Hi(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,i=e.suspendedLanes,o=e.pingedLanes,l=r&268435455;if(l!==0){var s=l&~i;s!==0?n=hn(s):(o&=l,o!==0&&(n=hn(o)))}else l=r&~i,l!==0?n=hn(l):o!==0&&(n=hn(o));if(n===0)return 0;if(t!==0&&t!==n&&!(t&i)&&(i=n&-n,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-Xe(t),i=1<<r,n|=e[r],t&=~i;return n}function hf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mf(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Xe(o),s=1<<l,c=i[l];c===-1?(!(s&r)||s&n)&&(i[l]=hf(s,t)):c<=t&&(e.expiredLanes|=s),o&=~s}}function Bl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function qu(){var e=si;return si<<=1,!(si&4194240)&&(si=64),e}function Xo(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Yn(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Xe(t),e[t]=r}function gf(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-Xe(r),o=1<<i;t[i]=0,n[i]=-1,e[i]=-1,r&=~o}}function Za(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-Xe(r),i=1<<n;i&t|e[n]&t&&(e[n]|=t),r&=~i}}var D=0;function e1(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var t1,Qa,r1,n1,i1,Ul=!1,ui=[],Mt=null,bt=null,It=null,zn=new Map,Rn=new Map,Nt=[],vf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xs(e,t){switch(e){case"focusin":case"focusout":Mt=null;break;case"dragenter":case"dragleave":bt=null;break;case"mouseover":case"mouseout":It=null;break;case"pointerover":case"pointerout":zn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rn.delete(t.pointerId)}}function ln(e,t,r,n,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Jn(t),t!==null&&Qa(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function yf(e,t,r,n,i){switch(t){case"focusin":return Mt=ln(Mt,e,t,r,n,i),!0;case"dragenter":return bt=ln(bt,e,t,r,n,i),!0;case"mouseover":return It=ln(It,e,t,r,n,i),!0;case"pointerover":var o=i.pointerId;return zn.set(o,ln(zn.get(o)||null,e,t,r,n,i)),!0;case"gotpointercapture":return o=i.pointerId,Rn.set(o,ln(Rn.get(o)||null,e,t,r,n,i)),!0}return!1}function o1(e){var t=Gt(e.target);if(t!==null){var r=fr(t);if(r!==null){if(t=r.tag,t===13){if(t=Qu(r),t!==null){e.blockedOn=t,i1(e.priority,function(){r1(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ci(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Hl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);$l=n,r.target.dispatchEvent(n),$l=null}else return t=Jn(r),t!==null&&Qa(t),e.blockedOn=r,!1;t.shift()}return!0}function Ks(e,t,r){Ci(e)&&r.delete(t)}function xf(){Ul=!1,Mt!==null&&Ci(Mt)&&(Mt=null),bt!==null&&Ci(bt)&&(bt=null),It!==null&&Ci(It)&&(It=null),zn.forEach(Ks),Rn.forEach(Ks)}function an(e,t){e.blockedOn===t&&(e.blockedOn=null,Ul||(Ul=!0,Le.unstable_scheduleCallback(Le.unstable_NormalPriority,xf)))}function Ln(e){function t(i){return an(i,e)}if(0<ui.length){an(ui[0],e);for(var r=1;r<ui.length;r++){var n=ui[r];n.blockedOn===e&&(n.blockedOn=null)}}for(Mt!==null&&an(Mt,e),bt!==null&&an(bt,e),It!==null&&an(It,e),zn.forEach(t),Rn.forEach(t),r=0;r<Nt.length;r++)n=Nt[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<Nt.length&&(r=Nt[0],r.blockedOn===null);)o1(r),r.blockedOn===null&&Nt.shift()}var $r=xt.ReactCurrentBatchConfig,Vi=!0;function wf(e,t,r,n){var i=D,o=$r.transition;$r.transition=null;try{D=1,Xa(e,t,r,n)}finally{D=i,$r.transition=o}}function kf(e,t,r,n){var i=D,o=$r.transition;$r.transition=null;try{D=4,Xa(e,t,r,n)}finally{D=i,$r.transition=o}}function Xa(e,t,r,n){if(Vi){var i=Hl(e,t,r,n);if(i===null)il(e,t,n,Wi,r),Xs(e,n);else if(yf(i,e,t,r,n))n.stopPropagation();else if(Xs(e,n),t&4&&-1<vf.indexOf(e)){for(;i!==null;){var o=Jn(i);if(o!==null&&t1(o),o=Hl(e,t,r,n),o===null&&il(e,t,n,Wi,r),o===i)break;i=o}i!==null&&n.stopPropagation()}else il(e,t,n,null,r)}}var Wi=null;function Hl(e,t,r,n){if(Wi=null,e=Va(n),e=Gt(e),e!==null)if(t=fr(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Qu(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Wi=e,null}function l1(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(sf()){case Wa:return 1;case Gu:return 4;case Ui:case cf:return 16;case Ju:return 536870912;default:return 16}default:return 16}}var zt=null,Ka=null,Ei=null;function a1(){if(Ei)return Ei;var e,t=Ka,r=t.length,n,i="value"in zt?zt.value:zt.textContent,o=i.length;for(e=0;e<r&&t[e]===i[e];e++);var l=r-e;for(n=1;n<=l&&t[r-n]===i[o-n];n++);return Ei=i.slice(e,1<n?1-n:void 0)}function Pi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function di(){return!0}function Ys(){return!1}function be(e){function t(r,n,i,o,l){this._reactName=r,this._targetInst=i,this.type=n,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(r=e[s],this[s]=r?r(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?di:Ys,this.isPropagationStopped=Ys,this}return K(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=di)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=di)},persist:function(){},isPersistent:di}),t}var qr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ya=be(qr),Gn=K({},qr,{view:0,detail:0}),jf=be(Gn),Ko,Yo,sn,wo=K({},Gn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ga,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sn&&(sn&&e.type==="mousemove"?(Ko=e.screenX-sn.screenX,Yo=e.screenY-sn.screenY):Yo=Ko=0,sn=e),Ko)},movementY:function(e){return"movementY"in e?e.movementY:Yo}}),Gs=be(wo),Sf=K({},wo,{dataTransfer:0}),Cf=be(Sf),Ef=K({},Gn,{relatedTarget:0}),Go=be(Ef),Pf=K({},qr,{animationName:0,elapsedTime:0,pseudoElement:0}),Nf=be(Pf),_f=K({},qr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Tf=be(_f),zf=K({},qr,{data:0}),Js=be(zf),Rf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Lf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Mf[e])?!!t[e]:!1}function Ga(){return bf}var If=K({},Gn,{key:function(e){if(e.key){var t=Rf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Pi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Lf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ga,charCode:function(e){return e.type==="keypress"?Pi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Pi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Of=be(If),$f=K({},wo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qs=be($f),Df=K({},Gn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ga}),Ff=be(Df),Af=K({},qr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Bf=be(Af),Uf=K({},wo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Hf=be(Uf),Vf=[9,13,27,32],Ja=mt&&"CompositionEvent"in window,xn=null;mt&&"documentMode"in document&&(xn=document.documentMode);var Wf=mt&&"TextEvent"in window&&!xn,s1=mt&&(!Ja||xn&&8<xn&&11>=xn),ec=String.fromCharCode(32),tc=!1;function c1(e,t){switch(e){case"keyup":return Vf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function u1(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var jr=!1;function Zf(e,t){switch(e){case"compositionend":return u1(t);case"keypress":return t.which!==32?null:(tc=!0,ec);case"textInput":return e=t.data,e===ec&&tc?null:e;default:return null}}function Qf(e,t){if(jr)return e==="compositionend"||!Ja&&c1(e,t)?(e=a1(),Ei=Ka=zt=null,jr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return s1&&t.locale!=="ko"?null:t.data;default:return null}}var Xf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Xf[e.type]:t==="textarea"}function d1(e,t,r,n){Uu(n),t=Zi(t,"onChange"),0<t.length&&(r=new Ya("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var wn=null,Mn=null;function Kf(e){j1(e,0)}function ko(e){var t=Er(e);if(Iu(t))return e}function Yf(e,t){if(e==="change")return t}var f1=!1;if(mt){var Jo;if(mt){var qo="oninput"in document;if(!qo){var nc=document.createElement("div");nc.setAttribute("oninput","return;"),qo=typeof nc.oninput=="function"}Jo=qo}else Jo=!1;f1=Jo&&(!document.documentMode||9<document.documentMode)}function ic(){wn&&(wn.detachEvent("onpropertychange",p1),Mn=wn=null)}function p1(e){if(e.propertyName==="value"&&ko(Mn)){var t=[];d1(t,Mn,e,Va(e)),Zu(Kf,t)}}function Gf(e,t,r){e==="focusin"?(ic(),wn=t,Mn=r,wn.attachEvent("onpropertychange",p1)):e==="focusout"&&ic()}function Jf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ko(Mn)}function qf(e,t){if(e==="click")return ko(t)}function e2(e,t){if(e==="input"||e==="change")return ko(t)}function t2(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ge=typeof Object.is=="function"?Object.is:t2;function bn(e,t){if(Ge(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var i=r[n];if(!El.call(t,i)||!Ge(e[i],t[i]))return!1}return!0}function oc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function lc(e,t){var r=oc(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=oc(r)}}function h1(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?h1(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function m1(){for(var e=window,t=Fi();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Fi(e.document)}return t}function qa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function r2(e){var t=m1(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&h1(r.ownerDocument.documentElement,r)){if(n!==null&&qa(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,o=Math.min(n.start,i);n=n.end===void 0?o:Math.min(n.end,i),!e.extend&&o>n&&(i=n,n=o,o=i),i=lc(r,o);var l=lc(r,n);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>n?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var n2=mt&&"documentMode"in document&&11>=document.documentMode,Sr=null,Vl=null,kn=null,Wl=!1;function ac(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Wl||Sr==null||Sr!==Fi(n)||(n=Sr,"selectionStart"in n&&qa(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),kn&&bn(kn,n)||(kn=n,n=Zi(Vl,"onSelect"),0<n.length&&(t=new Ya("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=Sr)))}function fi(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Cr={animationend:fi("Animation","AnimationEnd"),animationiteration:fi("Animation","AnimationIteration"),animationstart:fi("Animation","AnimationStart"),transitionend:fi("Transition","TransitionEnd")},el={},g1={};mt&&(g1=document.createElement("div").style,"AnimationEvent"in window||(delete Cr.animationend.animation,delete Cr.animationiteration.animation,delete Cr.animationstart.animation),"TransitionEvent"in window||delete Cr.transitionend.transition);function jo(e){if(el[e])return el[e];if(!Cr[e])return e;var t=Cr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in g1)return el[e]=t[r];return e}var v1=jo("animationend"),y1=jo("animationiteration"),x1=jo("animationstart"),w1=jo("transitionend"),k1=new Map,sc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wt(e,t){k1.set(e,t),dr(t,[e])}for(var tl=0;tl<sc.length;tl++){var rl=sc[tl],i2=rl.toLowerCase(),o2=rl[0].toUpperCase()+rl.slice(1);Wt(i2,"on"+o2)}Wt(v1,"onAnimationEnd");Wt(y1,"onAnimationIteration");Wt(x1,"onAnimationStart");Wt("dblclick","onDoubleClick");Wt("focusin","onFocus");Wt("focusout","onBlur");Wt(w1,"onTransitionEnd");Ar("onMouseEnter",["mouseout","mouseover"]);Ar("onMouseLeave",["mouseout","mouseover"]);Ar("onPointerEnter",["pointerout","pointerover"]);Ar("onPointerLeave",["pointerout","pointerover"]);dr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));dr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));dr("onBeforeInput",["compositionend","keypress","textInput","paste"]);dr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));dr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));dr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),l2=new Set("cancel close invalid load scroll toggle".split(" ").concat(mn));function cc(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,nf(n,t,void 0,e),e.currentTarget=null}function j1(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],i=n.event;n=n.listeners;e:{var o=void 0;if(t)for(var l=n.length-1;0<=l;l--){var s=n[l],c=s.instance,u=s.currentTarget;if(s=s.listener,c!==o&&i.isPropagationStopped())break e;cc(i,s,u),o=c}else for(l=0;l<n.length;l++){if(s=n[l],c=s.instance,u=s.currentTarget,s=s.listener,c!==o&&i.isPropagationStopped())break e;cc(i,s,u),o=c}}}if(Bi)throw e=Al,Bi=!1,Al=null,e}function B(e,t){var r=t[Yl];r===void 0&&(r=t[Yl]=new Set);var n=e+"__bubble";r.has(n)||(S1(t,e,2,!1),r.add(n))}function nl(e,t,r){var n=0;t&&(n|=4),S1(r,e,n,t)}var pi="_reactListening"+Math.random().toString(36).slice(2);function In(e){if(!e[pi]){e[pi]=!0,zu.forEach(function(r){r!=="selectionchange"&&(l2.has(r)||nl(r,!1,e),nl(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[pi]||(t[pi]=!0,nl("selectionchange",!1,t))}}function S1(e,t,r,n){switch(l1(t)){case 1:var i=wf;break;case 4:i=kf;break;default:i=Xa}r=i.bind(null,t,r,e),i=void 0,!Fl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):i!==void 0?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function il(e,t,r,n,i){var o=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var l=n.tag;if(l===3||l===4){var s=n.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(l===4)for(l=n.return;l!==null;){var c=l.tag;if((c===3||c===4)&&(c=l.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;l=l.return}for(;s!==null;){if(l=Gt(s),l===null)return;if(c=l.tag,c===5||c===6){n=o=l;continue e}s=s.parentNode}}n=n.return}Zu(function(){var u=o,f=Va(r),h=[];e:{var g=k1.get(e);if(g!==void 0){var v=Ya,y=e;switch(e){case"keypress":if(Pi(r)===0)break e;case"keydown":case"keyup":v=Of;break;case"focusin":y="focus",v=Go;break;case"focusout":y="blur",v=Go;break;case"beforeblur":case"afterblur":v=Go;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Gs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Cf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Ff;break;case v1:case y1:case x1:v=Nf;break;case w1:v=Bf;break;case"scroll":v=jf;break;case"wheel":v=Hf;break;case"copy":case"cut":case"paste":v=Tf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=qs}var w=(t&4)!==0,P=!w&&e==="scroll",p=w?g!==null?g+"Capture":null:g;w=[];for(var d=u,m;d!==null;){m=d;var x=m.stateNode;if(m.tag===5&&x!==null&&(m=x,p!==null&&(x=Tn(d,p),x!=null&&w.push(On(d,x,m)))),P)break;d=d.return}0<w.length&&(g=new v(g,y,null,r,f),h.push({event:g,listeners:w}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",g&&r!==$l&&(y=r.relatedTarget||r.fromElement)&&(Gt(y)||y[gt]))break e;if((v||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,v?(y=r.relatedTarget||r.toElement,v=u,y=y?Gt(y):null,y!==null&&(P=fr(y),y!==P||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=u),v!==y)){if(w=Gs,x="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(w=qs,x="onPointerLeave",p="onPointerEnter",d="pointer"),P=v==null?g:Er(v),m=y==null?g:Er(y),g=new w(x,d+"leave",v,r,f),g.target=P,g.relatedTarget=m,x=null,Gt(f)===u&&(w=new w(p,d+"enter",y,r,f),w.target=m,w.relatedTarget=P,x=w),P=x,v&&y)t:{for(w=v,p=y,d=0,m=w;m;m=vr(m))d++;for(m=0,x=p;x;x=vr(x))m++;for(;0<d-m;)w=vr(w),d--;for(;0<m-d;)p=vr(p),m--;for(;d--;){if(w===p||p!==null&&w===p.alternate)break t;w=vr(w),p=vr(p)}w=null}else w=null;v!==null&&uc(h,g,v,w,!1),y!==null&&P!==null&&uc(h,P,y,w,!0)}}e:{if(g=u?Er(u):window,v=g.nodeName&&g.nodeName.toLowerCase(),v==="select"||v==="input"&&g.type==="file")var k=Yf;else if(rc(g))if(f1)k=e2;else{k=Jf;var j=Gf}else(v=g.nodeName)&&v.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(k=qf);if(k&&(k=k(e,u))){d1(h,k,r,f);break e}j&&j(e,g,u),e==="focusout"&&(j=g._wrapperState)&&j.controlled&&g.type==="number"&&Ll(g,"number",g.value)}switch(j=u?Er(u):window,e){case"focusin":(rc(j)||j.contentEditable==="true")&&(Sr=j,Vl=u,kn=null);break;case"focusout":kn=Vl=Sr=null;break;case"mousedown":Wl=!0;break;case"contextmenu":case"mouseup":case"dragend":Wl=!1,ac(h,r,f);break;case"selectionchange":if(n2)break;case"keydown":case"keyup":ac(h,r,f)}var S;if(Ja)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else jr?c1(e,r)&&(T="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(T="onCompositionStart");T&&(s1&&r.locale!=="ko"&&(jr||T!=="onCompositionStart"?T==="onCompositionEnd"&&jr&&(S=a1()):(zt=f,Ka="value"in zt?zt.value:zt.textContent,jr=!0)),j=Zi(u,T),0<j.length&&(T=new Js(T,e,null,r,f),h.push({event:T,listeners:j}),S?T.data=S:(S=u1(r),S!==null&&(T.data=S)))),(S=Wf?Zf(e,r):Qf(e,r))&&(u=Zi(u,"onBeforeInput"),0<u.length&&(f=new Js("onBeforeInput","beforeinput",null,r,f),h.push({event:f,listeners:u}),f.data=S))}j1(h,t)})}function On(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Zi(e,t){for(var r=t+"Capture",n=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Tn(e,r),o!=null&&n.unshift(On(e,o,i)),o=Tn(e,t),o!=null&&n.push(On(e,o,i))),e=e.return}return n}function vr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function uc(e,t,r,n,i){for(var o=t._reactName,l=[];r!==null&&r!==n;){var s=r,c=s.alternate,u=s.stateNode;if(c!==null&&c===n)break;s.tag===5&&u!==null&&(s=u,i?(c=Tn(r,o),c!=null&&l.unshift(On(r,c,s))):i||(c=Tn(r,o),c!=null&&l.push(On(r,c,s)))),r=r.return}l.length!==0&&e.push({event:t,listeners:l})}var a2=/\r\n?/g,s2=/\u0000|\uFFFD/g;function dc(e){return(typeof e=="string"?e:""+e).replace(a2,`
`).replace(s2,"")}function hi(e,t,r){if(t=dc(t),dc(e)!==t&&r)throw Error(C(425))}function Qi(){}var Zl=null,Ql=null;function Xl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Kl=typeof setTimeout=="function"?setTimeout:void 0,c2=typeof clearTimeout=="function"?clearTimeout:void 0,fc=typeof Promise=="function"?Promise:void 0,u2=typeof queueMicrotask=="function"?queueMicrotask:typeof fc<"u"?function(e){return fc.resolve(null).then(e).catch(d2)}:Kl;function d2(e){setTimeout(function(){throw e})}function ol(e,t){var r=t,n=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(n===0){e.removeChild(i),Ln(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=i}while(r);Ln(t)}function Ot(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function pc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var en=Math.random().toString(36).slice(2),rt="__reactFiber$"+en,$n="__reactProps$"+en,gt="__reactContainer$"+en,Yl="__reactEvents$"+en,f2="__reactListeners$"+en,p2="__reactHandles$"+en;function Gt(e){var t=e[rt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[gt]||r[rt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=pc(e);e!==null;){if(r=e[rt])return r;e=pc(e)}return t}e=r,r=e.parentNode}return null}function Jn(e){return e=e[rt]||e[gt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Er(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function So(e){return e[$n]||null}var Gl=[],Pr=-1;function Zt(e){return{current:e}}function V(e){0>Pr||(e.current=Gl[Pr],Gl[Pr]=null,Pr--)}function A(e,t){Pr++,Gl[Pr]=e.current,e.current=t}var Vt={},me=Zt(Vt),Ce=Zt(!1),ir=Vt;function Br(e,t){var r=e.type.contextTypes;if(!r)return Vt;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in r)i[o]=t[o];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ee(e){return e=e.childContextTypes,e!=null}function Xi(){V(Ce),V(me)}function hc(e,t,r){if(me.current!==Vt)throw Error(C(168));A(me,t),A(Ce,r)}function C1(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var i in n)if(!(i in t))throw Error(C(108,Y0(e)||"Unknown",i));return K({},r,n)}function Ki(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Vt,ir=me.current,A(me,e),A(Ce,Ce.current),!0}function mc(e,t,r){var n=e.stateNode;if(!n)throw Error(C(169));r?(e=C1(e,t,ir),n.__reactInternalMemoizedMergedChildContext=e,V(Ce),V(me),A(me,e)):V(Ce),A(Ce,r)}var dt=null,Co=!1,ll=!1;function E1(e){dt===null?dt=[e]:dt.push(e)}function h2(e){Co=!0,E1(e)}function Qt(){if(!ll&&dt!==null){ll=!0;var e=0,t=D;try{var r=dt;for(D=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}dt=null,Co=!1}catch(i){throw dt!==null&&(dt=dt.slice(e+1)),Yu(Wa,Qt),i}finally{D=t,ll=!1}}return null}var Nr=[],_r=0,Yi=null,Gi=0,Oe=[],$e=0,or=null,ft=1,pt="";function Kt(e,t){Nr[_r++]=Gi,Nr[_r++]=Yi,Yi=e,Gi=t}function P1(e,t,r){Oe[$e++]=ft,Oe[$e++]=pt,Oe[$e++]=or,or=e;var n=ft;e=pt;var i=32-Xe(n)-1;n&=~(1<<i),r+=1;var o=32-Xe(t)+i;if(30<o){var l=i-i%5;o=(n&(1<<l)-1).toString(32),n>>=l,i-=l,ft=1<<32-Xe(t)+i|r<<i|n,pt=o+e}else ft=1<<o|r<<i|n,pt=e}function es(e){e.return!==null&&(Kt(e,1),P1(e,1,0))}function ts(e){for(;e===Yi;)Yi=Nr[--_r],Nr[_r]=null,Gi=Nr[--_r],Nr[_r]=null;for(;e===or;)or=Oe[--$e],Oe[$e]=null,pt=Oe[--$e],Oe[$e]=null,ft=Oe[--$e],Oe[$e]=null}var Re=null,ze=null,Z=!1,Qe=null;function N1(e,t){var r=De(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function gc(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Re=e,ze=Ot(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Re=e,ze=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=or!==null?{id:ft,overflow:pt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=De(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Re=e,ze=null,!0):!1;default:return!1}}function Jl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ql(e){if(Z){var t=ze;if(t){var r=t;if(!gc(e,t)){if(Jl(e))throw Error(C(418));t=Ot(r.nextSibling);var n=Re;t&&gc(e,t)?N1(n,r):(e.flags=e.flags&-4097|2,Z=!1,Re=e)}}else{if(Jl(e))throw Error(C(418));e.flags=e.flags&-4097|2,Z=!1,Re=e}}}function vc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Re=e}function mi(e){if(e!==Re)return!1;if(!Z)return vc(e),Z=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Xl(e.type,e.memoizedProps)),t&&(t=ze)){if(Jl(e))throw _1(),Error(C(418));for(;t;)N1(e,t),t=Ot(t.nextSibling)}if(vc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){ze=Ot(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}ze=null}}else ze=Re?Ot(e.stateNode.nextSibling):null;return!0}function _1(){for(var e=ze;e;)e=Ot(e.nextSibling)}function Ur(){ze=Re=null,Z=!1}function rs(e){Qe===null?Qe=[e]:Qe.push(e)}var m2=xt.ReactCurrentBatchConfig;function We(e,t){if(e&&e.defaultProps){t=K({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}var Ji=Zt(null),qi=null,Tr=null,ns=null;function is(){ns=Tr=qi=null}function os(e){var t=Ji.current;V(Ji),e._currentValue=t}function ea(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function Dr(e,t){qi=e,ns=Tr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Se=!0),e.firstContext=null)}function Ae(e){var t=e._currentValue;if(ns!==e)if(e={context:e,memoizedValue:t,next:null},Tr===null){if(qi===null)throw Error(C(308));Tr=e,qi.dependencies={lanes:0,firstContext:e}}else Tr=Tr.next=e;return t}var Jt=null;function ls(e){Jt===null?Jt=[e]:Jt.push(e)}function T1(e,t,r,n){var i=t.interleaved;return i===null?(r.next=r,ls(t)):(r.next=i.next,i.next=r),t.interleaved=r,vt(e,n)}function vt(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Pt=!1;function as(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function z1(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ht(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function $t(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,O&2){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,vt(e,r)}return i=n.interleaved,i===null?(t.next=t,ls(n)):(t.next=i.next,i.next=t),n.interleaved=t,vt(e,r)}function Ni(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Za(e,r)}}function yc(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var i=null,o=null;if(r=r.firstBaseUpdate,r!==null){do{var l={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};o===null?i=o=l:o=o.next=l,r=r.next}while(r!==null);o===null?i=o=t:o=o.next=t}else i=o=t;r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function eo(e,t,r,n){var i=e.updateQueue;Pt=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,u=c.next;c.next=null,l===null?o=u:l.next=u,l=c;var f=e.alternate;f!==null&&(f=f.updateQueue,s=f.lastBaseUpdate,s!==l&&(s===null?f.firstBaseUpdate=u:s.next=u,f.lastBaseUpdate=c))}if(o!==null){var h=i.baseState;l=0,f=u=c=null,s=o;do{var g=s.lane,v=s.eventTime;if((n&g)===g){f!==null&&(f=f.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var y=e,w=s;switch(g=t,v=r,w.tag){case 1:if(y=w.payload,typeof y=="function"){h=y.call(v,h,g);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,g=typeof y=="function"?y.call(v,h,g):y,g==null)break e;h=K({},h,g);break e;case 2:Pt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[s]:g.push(s))}else v={eventTime:v,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},f===null?(u=f=v,c=h):f=f.next=v,l|=g;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;g=s,s=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(1);if(f===null&&(c=h),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);ar|=l,e.lanes=l,e.memoizedState=h}}function xc(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],i=n.callback;if(i!==null){if(n.callback=null,n=r,typeof i!="function")throw Error(C(191,i));i.call(n)}}}var R1=new Tu.Component().refs;function ta(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:K({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Eo={isMounted:function(e){return(e=e._reactInternals)?fr(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=xe(),i=Ft(e),o=ht(n,i);o.payload=t,r!=null&&(o.callback=r),t=$t(e,o,i),t!==null&&(Ke(t,e,i,n),Ni(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=xe(),i=Ft(e),o=ht(n,i);o.tag=1,o.payload=t,r!=null&&(o.callback=r),t=$t(e,o,i),t!==null&&(Ke(t,e,i,n),Ni(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=xe(),n=Ft(e),i=ht(r,n);i.tag=2,t!=null&&(i.callback=t),t=$t(e,i,n),t!==null&&(Ke(t,e,n,r),Ni(t,e,n))}};function wc(e,t,r,n,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,o,l):t.prototype&&t.prototype.isPureReactComponent?!bn(r,n)||!bn(i,o):!0}function L1(e,t,r){var n=!1,i=Vt,o=t.contextType;return typeof o=="object"&&o!==null?o=Ae(o):(i=Ee(t)?ir:me.current,n=t.contextTypes,o=(n=n!=null)?Br(e,i):Vt),t=new t(r,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Eo,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function kc(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&Eo.enqueueReplaceState(t,t.state,null)}function ra(e,t,r,n){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs=R1,as(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ae(o):(o=Ee(t)?ir:me.current,i.context=Br(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(ta(e,t,o,r),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Eo.enqueueReplaceState(i,i.state,null),eo(e,r,i,n),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function cn(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(C(309));var n=r.stateNode}if(!n)throw Error(C(147,e));var i=n,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var s=i.refs;s===R1&&(s=i.refs={}),l===null?delete s[o]:s[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(C(284));if(!r._owner)throw Error(C(290,e))}return e}function gi(e,t){throw e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function jc(e){var t=e._init;return t(e._payload)}function M1(e){function t(p,d){if(e){var m=p.deletions;m===null?(p.deletions=[d],p.flags|=16):m.push(d)}}function r(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function n(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function i(p,d){return p=At(p,d),p.index=0,p.sibling=null,p}function o(p,d,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<d?(p.flags|=2,d):m):(p.flags|=2,d)):(p.flags|=1048576,d)}function l(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,d,m,x){return d===null||d.tag!==6?(d=pl(m,p.mode,x),d.return=p,d):(d=i(d,m),d.return=p,d)}function c(p,d,m,x){var k=m.type;return k===kr?f(p,d,m.props.children,x,m.key):d!==null&&(d.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Et&&jc(k)===d.type)?(x=i(d,m.props),x.ref=cn(p,d,m),x.return=p,x):(x=Mi(m.type,m.key,m.props,null,p.mode,x),x.ref=cn(p,d,m),x.return=p,x)}function u(p,d,m,x){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=hl(m,p.mode,x),d.return=p,d):(d=i(d,m.children||[]),d.return=p,d)}function f(p,d,m,x,k){return d===null||d.tag!==7?(d=rr(m,p.mode,x,k),d.return=p,d):(d=i(d,m),d.return=p,d)}function h(p,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=pl(""+d,p.mode,m),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case oi:return m=Mi(d.type,d.key,d.props,null,p.mode,m),m.ref=cn(p,null,d),m.return=p,m;case wr:return d=hl(d,p.mode,m),d.return=p,d;case Et:var x=d._init;return h(p,x(d._payload),m)}if(pn(d)||nn(d))return d=rr(d,p.mode,m,null),d.return=p,d;gi(p,d)}return null}function g(p,d,m,x){var k=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return k!==null?null:s(p,d,""+m,x);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case oi:return m.key===k?c(p,d,m,x):null;case wr:return m.key===k?u(p,d,m,x):null;case Et:return k=m._init,g(p,d,k(m._payload),x)}if(pn(m)||nn(m))return k!==null?null:f(p,d,m,x,null);gi(p,m)}return null}function v(p,d,m,x,k){if(typeof x=="string"&&x!==""||typeof x=="number")return p=p.get(m)||null,s(d,p,""+x,k);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case oi:return p=p.get(x.key===null?m:x.key)||null,c(d,p,x,k);case wr:return p=p.get(x.key===null?m:x.key)||null,u(d,p,x,k);case Et:var j=x._init;return v(p,d,m,j(x._payload),k)}if(pn(x)||nn(x))return p=p.get(m)||null,f(d,p,x,k,null);gi(d,x)}return null}function y(p,d,m,x){for(var k=null,j=null,S=d,T=d=0,F=null;S!==null&&T<m.length;T++){S.index>T?(F=S,S=null):F=S.sibling;var M=g(p,S,m[T],x);if(M===null){S===null&&(S=F);break}e&&S&&M.alternate===null&&t(p,S),d=o(M,d,T),j===null?k=M:j.sibling=M,j=M,S=F}if(T===m.length)return r(p,S),Z&&Kt(p,T),k;if(S===null){for(;T<m.length;T++)S=h(p,m[T],x),S!==null&&(d=o(S,d,T),j===null?k=S:j.sibling=S,j=S);return Z&&Kt(p,T),k}for(S=n(p,S);T<m.length;T++)F=v(S,p,T,m[T],x),F!==null&&(e&&F.alternate!==null&&S.delete(F.key===null?T:F.key),d=o(F,d,T),j===null?k=F:j.sibling=F,j=F);return e&&S.forEach(function(ge){return t(p,ge)}),Z&&Kt(p,T),k}function w(p,d,m,x){var k=nn(m);if(typeof k!="function")throw Error(C(150));if(m=k.call(m),m==null)throw Error(C(151));for(var j=k=null,S=d,T=d=0,F=null,M=m.next();S!==null&&!M.done;T++,M=m.next()){S.index>T?(F=S,S=null):F=S.sibling;var ge=g(p,S,M.value,x);if(ge===null){S===null&&(S=F);break}e&&S&&ge.alternate===null&&t(p,S),d=o(ge,d,T),j===null?k=ge:j.sibling=ge,j=ge,S=F}if(M.done)return r(p,S),Z&&Kt(p,T),k;if(S===null){for(;!M.done;T++,M=m.next())M=h(p,M.value,x),M!==null&&(d=o(M,d,T),j===null?k=M:j.sibling=M,j=M);return Z&&Kt(p,T),k}for(S=n(p,S);!M.done;T++,M=m.next())M=v(S,p,T,M.value,x),M!==null&&(e&&M.alternate!==null&&S.delete(M.key===null?T:M.key),d=o(M,d,T),j===null?k=M:j.sibling=M,j=M);return e&&S.forEach(function(ot){return t(p,ot)}),Z&&Kt(p,T),k}function P(p,d,m,x){if(typeof m=="object"&&m!==null&&m.type===kr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case oi:e:{for(var k=m.key,j=d;j!==null;){if(j.key===k){if(k=m.type,k===kr){if(j.tag===7){r(p,j.sibling),d=i(j,m.props.children),d.return=p,p=d;break e}}else if(j.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Et&&jc(k)===j.type){r(p,j.sibling),d=i(j,m.props),d.ref=cn(p,j,m),d.return=p,p=d;break e}r(p,j);break}else t(p,j);j=j.sibling}m.type===kr?(d=rr(m.props.children,p.mode,x,m.key),d.return=p,p=d):(x=Mi(m.type,m.key,m.props,null,p.mode,x),x.ref=cn(p,d,m),x.return=p,p=x)}return l(p);case wr:e:{for(j=m.key;d!==null;){if(d.key===j)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){r(p,d.sibling),d=i(d,m.children||[]),d.return=p,p=d;break e}else{r(p,d);break}else t(p,d);d=d.sibling}d=hl(m,p.mode,x),d.return=p,p=d}return l(p);case Et:return j=m._init,P(p,d,j(m._payload),x)}if(pn(m))return y(p,d,m,x);if(nn(m))return w(p,d,m,x);gi(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(r(p,d.sibling),d=i(d,m),d.return=p,p=d):(r(p,d),d=pl(m,p.mode,x),d.return=p,p=d),l(p)):r(p,d)}return P}var Hr=M1(!0),b1=M1(!1),qn={},it=Zt(qn),Dn=Zt(qn),Fn=Zt(qn);function qt(e){if(e===qn)throw Error(C(174));return e}function ss(e,t){switch(A(Fn,t),A(Dn,e),A(it,qn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:bl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=bl(t,e)}V(it),A(it,t)}function Vr(){V(it),V(Dn),V(Fn)}function I1(e){qt(Fn.current);var t=qt(it.current),r=bl(t,e.type);t!==r&&(A(Dn,e),A(it,r))}function cs(e){Dn.current===e&&(V(it),V(Dn))}var Q=Zt(0);function to(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var al=[];function us(){for(var e=0;e<al.length;e++)al[e]._workInProgressVersionPrimary=null;al.length=0}var _i=xt.ReactCurrentDispatcher,sl=xt.ReactCurrentBatchConfig,lr=0,X=null,re=null,ie=null,ro=!1,jn=!1,An=0,g2=0;function fe(){throw Error(C(321))}function ds(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Ge(e[r],t[r]))return!1;return!0}function fs(e,t,r,n,i,o){if(lr=o,X=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_i.current=e===null||e.memoizedState===null?w2:k2,e=r(n,i),jn){o=0;do{if(jn=!1,An=0,25<=o)throw Error(C(301));o+=1,ie=re=null,t.updateQueue=null,_i.current=j2,e=r(n,i)}while(jn)}if(_i.current=no,t=re!==null&&re.next!==null,lr=0,ie=re=X=null,ro=!1,t)throw Error(C(300));return e}function ps(){var e=An!==0;return An=0,e}function et(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ie===null?X.memoizedState=ie=e:ie=ie.next=e,ie}function Be(){if(re===null){var e=X.alternate;e=e!==null?e.memoizedState:null}else e=re.next;var t=ie===null?X.memoizedState:ie.next;if(t!==null)ie=t,re=e;else{if(e===null)throw Error(C(310));re=e,e={memoizedState:re.memoizedState,baseState:re.baseState,baseQueue:re.baseQueue,queue:re.queue,next:null},ie===null?X.memoizedState=ie=e:ie=ie.next=e}return ie}function Bn(e,t){return typeof t=="function"?t(e):t}function cl(e){var t=Be(),r=t.queue;if(r===null)throw Error(C(311));r.lastRenderedReducer=e;var n=re,i=n.baseQueue,o=r.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}n.baseQueue=i=o,r.pending=null}if(i!==null){o=i.next,n=n.baseState;var s=l=null,c=null,u=o;do{var f=u.lane;if((lr&f)===f)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),n=u.hasEagerState?u.eagerState:e(n,u.action);else{var h={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(s=c=h,l=n):c=c.next=h,X.lanes|=f,ar|=f}u=u.next}while(u!==null&&u!==o);c===null?l=n:c.next=s,Ge(n,t.memoizedState)||(Se=!0),t.memoizedState=n,t.baseState=l,t.baseQueue=c,r.lastRenderedState=n}if(e=r.interleaved,e!==null){i=e;do o=i.lane,X.lanes|=o,ar|=o,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function ul(e){var t=Be(),r=t.queue;if(r===null)throw Error(C(311));r.lastRenderedReducer=e;var n=r.dispatch,i=r.pending,o=t.memoizedState;if(i!==null){r.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);Ge(o,t.memoizedState)||(Se=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),r.lastRenderedState=o}return[o,n]}function O1(){}function $1(e,t){var r=X,n=Be(),i=t(),o=!Ge(n.memoizedState,i);if(o&&(n.memoizedState=i,Se=!0),n=n.queue,hs(A1.bind(null,r,n,e),[e]),n.getSnapshot!==t||o||ie!==null&&ie.memoizedState.tag&1){if(r.flags|=2048,Un(9,F1.bind(null,r,n,i,t),void 0,null),ae===null)throw Error(C(349));lr&30||D1(r,t,i)}return i}function D1(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function F1(e,t,r,n){t.value=r,t.getSnapshot=n,B1(t)&&U1(e)}function A1(e,t,r){return r(function(){B1(t)&&U1(e)})}function B1(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Ge(e,r)}catch{return!0}}function U1(e){var t=vt(e,1);t!==null&&Ke(t,e,1,-1)}function Sc(e){var t=et();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Bn,lastRenderedState:e},t.queue=e,e=e.dispatch=x2.bind(null,X,e),[t.memoizedState,e]}function Un(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function H1(){return Be().memoizedState}function Ti(e,t,r,n){var i=et();X.flags|=e,i.memoizedState=Un(1|t,r,void 0,n===void 0?null:n)}function Po(e,t,r,n){var i=Be();n=n===void 0?null:n;var o=void 0;if(re!==null){var l=re.memoizedState;if(o=l.destroy,n!==null&&ds(n,l.deps)){i.memoizedState=Un(t,r,o,n);return}}X.flags|=e,i.memoizedState=Un(1|t,r,o,n)}function Cc(e,t){return Ti(8390656,8,e,t)}function hs(e,t){return Po(2048,8,e,t)}function V1(e,t){return Po(4,2,e,t)}function W1(e,t){return Po(4,4,e,t)}function Z1(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Q1(e,t,r){return r=r!=null?r.concat([e]):null,Po(4,4,Z1.bind(null,t,e),r)}function ms(){}function X1(e,t){var r=Be();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&ds(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function K1(e,t){var r=Be();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&ds(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function Y1(e,t,r){return lr&21?(Ge(r,t)||(r=qu(),X.lanes|=r,ar|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Se=!0),e.memoizedState=r)}function v2(e,t){var r=D;D=r!==0&&4>r?r:4,e(!0);var n=sl.transition;sl.transition={};try{e(!1),t()}finally{D=r,sl.transition=n}}function G1(){return Be().memoizedState}function y2(e,t,r){var n=Ft(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},J1(e))q1(t,r);else if(r=T1(e,t,r,n),r!==null){var i=xe();Ke(r,e,n,i),ed(r,t,n)}}function x2(e,t,r){var n=Ft(e),i={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(J1(e))q1(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,s=o(l,r);if(i.hasEagerState=!0,i.eagerState=s,Ge(s,l)){var c=t.interleaved;c===null?(i.next=i,ls(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}r=T1(e,t,i,n),r!==null&&(i=xe(),Ke(r,e,n,i),ed(r,t,n))}}function J1(e){var t=e.alternate;return e===X||t!==null&&t===X}function q1(e,t){jn=ro=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function ed(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Za(e,r)}}var no={readContext:Ae,useCallback:fe,useContext:fe,useEffect:fe,useImperativeHandle:fe,useInsertionEffect:fe,useLayoutEffect:fe,useMemo:fe,useReducer:fe,useRef:fe,useState:fe,useDebugValue:fe,useDeferredValue:fe,useTransition:fe,useMutableSource:fe,useSyncExternalStore:fe,useId:fe,unstable_isNewReconciler:!1},w2={readContext:Ae,useCallback:function(e,t){return et().memoizedState=[e,t===void 0?null:t],e},useContext:Ae,useEffect:Cc,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Ti(4194308,4,Z1.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Ti(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ti(4,2,e,t)},useMemo:function(e,t){var r=et();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=et();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=y2.bind(null,X,e),[n.memoizedState,e]},useRef:function(e){var t=et();return e={current:e},t.memoizedState=e},useState:Sc,useDebugValue:ms,useDeferredValue:function(e){return et().memoizedState=e},useTransition:function(){var e=Sc(!1),t=e[0];return e=v2.bind(null,e[1]),et().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=X,i=et();if(Z){if(r===void 0)throw Error(C(407));r=r()}else{if(r=t(),ae===null)throw Error(C(349));lr&30||D1(n,t,r)}i.memoizedState=r;var o={value:r,getSnapshot:t};return i.queue=o,Cc(A1.bind(null,n,o,e),[e]),n.flags|=2048,Un(9,F1.bind(null,n,o,r,t),void 0,null),r},useId:function(){var e=et(),t=ae.identifierPrefix;if(Z){var r=pt,n=ft;r=(n&~(1<<32-Xe(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=An++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=g2++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},k2={readContext:Ae,useCallback:X1,useContext:Ae,useEffect:hs,useImperativeHandle:Q1,useInsertionEffect:V1,useLayoutEffect:W1,useMemo:K1,useReducer:cl,useRef:H1,useState:function(){return cl(Bn)},useDebugValue:ms,useDeferredValue:function(e){var t=Be();return Y1(t,re.memoizedState,e)},useTransition:function(){var e=cl(Bn)[0],t=Be().memoizedState;return[e,t]},useMutableSource:O1,useSyncExternalStore:$1,useId:G1,unstable_isNewReconciler:!1},j2={readContext:Ae,useCallback:X1,useContext:Ae,useEffect:hs,useImperativeHandle:Q1,useInsertionEffect:V1,useLayoutEffect:W1,useMemo:K1,useReducer:ul,useRef:H1,useState:function(){return ul(Bn)},useDebugValue:ms,useDeferredValue:function(e){var t=Be();return re===null?t.memoizedState=e:Y1(t,re.memoizedState,e)},useTransition:function(){var e=ul(Bn)[0],t=Be().memoizedState;return[e,t]},useMutableSource:O1,useSyncExternalStore:$1,useId:G1,unstable_isNewReconciler:!1};function Wr(e,t){try{var r="",n=t;do r+=K0(n),n=n.return;while(n);var i=r}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function dl(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function na(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var S2=typeof WeakMap=="function"?WeakMap:Map;function td(e,t,r){r=ht(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){oo||(oo=!0,pa=n),na(e,t)},r}function rd(e,t,r){r=ht(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var i=t.value;r.payload=function(){return n(i)},r.callback=function(){na(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(r.callback=function(){na(e,t),typeof n!="function"&&(Dt===null?Dt=new Set([this]):Dt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),r}function Ec(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new S2;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(r)||(i.add(r),e=$2.bind(null,e,t,r),t.then(e,e))}function Pc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Nc(e,t,r,n,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=ht(-1,1),t.tag=2,$t(r,t,1))),r.lanes|=1),e)}var C2=xt.ReactCurrentOwner,Se=!1;function ye(e,t,r,n){t.child=e===null?b1(t,null,r,n):Hr(t,e.child,r,n)}function _c(e,t,r,n,i){r=r.render;var o=t.ref;return Dr(t,i),n=fs(e,t,r,n,o,i),r=ps(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,yt(e,t,i)):(Z&&r&&es(t),t.flags|=1,ye(e,t,n,i),t.child)}function Tc(e,t,r,n,i){if(e===null){var o=r.type;return typeof o=="function"&&!Ss(o)&&o.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=o,nd(e,t,o,n,i)):(e=Mi(r.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(r=r.compare,r=r!==null?r:bn,r(l,n)&&e.ref===t.ref)return yt(e,t,i)}return t.flags|=1,e=At(o,n),e.ref=t.ref,e.return=t,t.child=e}function nd(e,t,r,n,i){if(e!==null){var o=e.memoizedProps;if(bn(o,n)&&e.ref===t.ref)if(Se=!1,t.pendingProps=n=o,(e.lanes&i)!==0)e.flags&131072&&(Se=!0);else return t.lanes=e.lanes,yt(e,t,i)}return ia(e,t,r,n,i)}function id(e,t,r){var n=t.pendingProps,i=n.children,o=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},A(Rr,Te),Te|=r;else{if(!(r&1073741824))return e=o!==null?o.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,A(Rr,Te),Te|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=o!==null?o.baseLanes:r,A(Rr,Te),Te|=n}else o!==null?(n=o.baseLanes|r,t.memoizedState=null):n=r,A(Rr,Te),Te|=n;return ye(e,t,i,r),t.child}function od(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function ia(e,t,r,n,i){var o=Ee(r)?ir:me.current;return o=Br(t,o),Dr(t,i),r=fs(e,t,r,n,o,i),n=ps(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,yt(e,t,i)):(Z&&n&&es(t),t.flags|=1,ye(e,t,r,i),t.child)}function zc(e,t,r,n,i){if(Ee(r)){var o=!0;Ki(t)}else o=!1;if(Dr(t,i),t.stateNode===null)zi(e,t),L1(t,r,n),ra(t,r,n,i),n=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var c=l.context,u=r.contextType;typeof u=="object"&&u!==null?u=Ae(u):(u=Ee(r)?ir:me.current,u=Br(t,u));var f=r.getDerivedStateFromProps,h=typeof f=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==n||c!==u)&&kc(t,l,n,u),Pt=!1;var g=t.memoizedState;l.state=g,eo(t,n,l,i),c=t.memoizedState,s!==n||g!==c||Ce.current||Pt?(typeof f=="function"&&(ta(t,r,f,n),c=t.memoizedState),(s=Pt||wc(t,r,s,n,g,c,u))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=c),l.props=n,l.state=c,l.context=u,n=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{l=t.stateNode,z1(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:We(t.type,s),l.props=u,h=t.pendingProps,g=l.context,c=r.contextType,typeof c=="object"&&c!==null?c=Ae(c):(c=Ee(r)?ir:me.current,c=Br(t,c));var v=r.getDerivedStateFromProps;(f=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==h||g!==c)&&kc(t,l,n,c),Pt=!1,g=t.memoizedState,l.state=g,eo(t,n,l,i);var y=t.memoizedState;s!==h||g!==y||Ce.current||Pt?(typeof v=="function"&&(ta(t,r,v,n),y=t.memoizedState),(u=Pt||wc(t,r,u,n,g,y,c)||!1)?(f||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(n,y,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(n,y,c)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=y),l.props=n,l.state=y,l.context=c,n=u):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),n=!1)}return oa(e,t,r,n,o,i)}function oa(e,t,r,n,i,o){od(e,t);var l=(t.flags&128)!==0;if(!n&&!l)return i&&mc(t,r,!1),yt(e,t,o);n=t.stateNode,C2.current=t;var s=l&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&l?(t.child=Hr(t,e.child,null,o),t.child=Hr(t,null,s,o)):ye(e,t,s,o),t.memoizedState=n.state,i&&mc(t,r,!0),t.child}function ld(e){var t=e.stateNode;t.pendingContext?hc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&hc(e,t.context,!1),ss(e,t.containerInfo)}function Rc(e,t,r,n,i){return Ur(),rs(i),t.flags|=256,ye(e,t,r,n),t.child}var la={dehydrated:null,treeContext:null,retryLane:0};function aa(e){return{baseLanes:e,cachePool:null,transitions:null}}function ad(e,t,r){var n=t.pendingProps,i=Q.current,o=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),A(Q,i&1),e===null)return ql(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=n.children,e=n.fallback,o?(n=t.mode,o=t.child,l={mode:"hidden",children:l},!(n&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=To(l,n,0,null),e=rr(e,n,r,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=aa(r),t.memoizedState=la,e):gs(t,l));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return E2(e,t,l,n,s,i,r);if(o){o=n.fallback,l=t.mode,i=e.child,s=i.sibling;var c={mode:"hidden",children:n.children};return!(l&1)&&t.child!==i?(n=t.child,n.childLanes=0,n.pendingProps=c,t.deletions=null):(n=At(i,c),n.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=At(s,o):(o=rr(o,l,r,null),o.flags|=2),o.return=t,n.return=t,n.sibling=o,t.child=n,n=o,o=t.child,l=e.child.memoizedState,l=l===null?aa(r):{baseLanes:l.baseLanes|r,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~r,t.memoizedState=la,n}return o=e.child,e=o.sibling,n=At(o,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function gs(e,t){return t=To({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function vi(e,t,r,n){return n!==null&&rs(n),Hr(t,e.child,null,r),e=gs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function E2(e,t,r,n,i,o,l){if(r)return t.flags&256?(t.flags&=-257,n=dl(Error(C(422))),vi(e,t,l,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=n.fallback,i=t.mode,n=To({mode:"visible",children:n.children},i,0,null),o=rr(o,i,l,null),o.flags|=2,n.return=t,o.return=t,n.sibling=o,t.child=n,t.mode&1&&Hr(t,e.child,null,l),t.child.memoizedState=aa(l),t.memoizedState=la,o);if(!(t.mode&1))return vi(e,t,l,null);if(i.data==="$!"){if(n=i.nextSibling&&i.nextSibling.dataset,n)var s=n.dgst;return n=s,o=Error(C(419)),n=dl(o,n,void 0),vi(e,t,l,n)}if(s=(l&e.childLanes)!==0,Se||s){if(n=ae,n!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(n.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,vt(e,i),Ke(n,e,i,-1))}return js(),n=dl(Error(C(421))),vi(e,t,l,n)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=D2.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,ze=Ot(i.nextSibling),Re=t,Z=!0,Qe=null,e!==null&&(Oe[$e++]=ft,Oe[$e++]=pt,Oe[$e++]=or,ft=e.id,pt=e.overflow,or=t),t=gs(t,n.children),t.flags|=4096,t)}function Lc(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),ea(e.return,t,r)}function fl(e,t,r,n,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=r,o.tailMode=i)}function sd(e,t,r){var n=t.pendingProps,i=n.revealOrder,o=n.tail;if(ye(e,t,n.children,r),n=Q.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Lc(e,r,t);else if(e.tag===19)Lc(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(A(Q,n),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;r!==null;)e=r.alternate,e!==null&&to(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),fl(t,!1,i,r,o);break;case"backwards":for(r=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&to(e)===null){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}fl(t,!0,r,null,o);break;case"together":fl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function zi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function yt(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),ar|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,r=At(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=At(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function P2(e,t,r){switch(t.tag){case 3:ld(t),Ur();break;case 5:I1(t);break;case 1:Ee(t.type)&&Ki(t);break;case 4:ss(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,i=t.memoizedProps.value;A(Ji,n._currentValue),n._currentValue=i;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(A(Q,Q.current&1),t.flags|=128,null):r&t.child.childLanes?ad(e,t,r):(A(Q,Q.current&1),e=yt(e,t,r),e!==null?e.sibling:null);A(Q,Q.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return sd(e,t,r);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),A(Q,Q.current),n)break;return null;case 22:case 23:return t.lanes=0,id(e,t,r)}return yt(e,t,r)}var cd,sa,ud,dd;cd=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};sa=function(){};ud=function(e,t,r,n){var i=e.memoizedProps;if(i!==n){e=t.stateNode,qt(it.current);var o=null;switch(r){case"input":i=zl(e,i),n=zl(e,n),o=[];break;case"select":i=K({},i,{value:void 0}),n=K({},n,{value:void 0}),o=[];break;case"textarea":i=Ml(e,i),n=Ml(e,n),o=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=Qi)}Il(r,n);var l;r=null;for(u in i)if(!n.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(l in s)s.hasOwnProperty(l)&&(r||(r={}),r[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Nn.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in n){var c=n[u];if(s=i!=null?i[u]:void 0,n.hasOwnProperty(u)&&c!==s&&(c!=null||s!=null))if(u==="style")if(s){for(l in s)!s.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(r||(r={}),r[l]="");for(l in c)c.hasOwnProperty(l)&&s[l]!==c[l]&&(r||(r={}),r[l]=c[l])}else r||(o||(o=[]),o.push(u,r)),r=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,s=s?s.__html:void 0,c!=null&&s!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Nn.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&B("scroll",e),o||s===c||(o=[])):(o=o||[]).push(u,c))}r&&(o=o||[]).push("style",r);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};dd=function(e,t,r,n){r!==n&&(t.flags|=4)};function un(e,t){if(!Z)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function pe(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,n|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function N2(e,t,r){var n=t.pendingProps;switch(ts(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pe(t),null;case 1:return Ee(t.type)&&Xi(),pe(t),null;case 3:return n=t.stateNode,Vr(),V(Ce),V(me),us(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(mi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Qe!==null&&(ga(Qe),Qe=null))),sa(e,t),pe(t),null;case 5:cs(t);var i=qt(Fn.current);if(r=t.type,e!==null&&t.stateNode!=null)ud(e,t,r,n,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(C(166));return pe(t),null}if(e=qt(it.current),mi(t)){n=t.stateNode,r=t.type;var o=t.memoizedProps;switch(n[rt]=t,n[$n]=o,e=(t.mode&1)!==0,r){case"dialog":B("cancel",n),B("close",n);break;case"iframe":case"object":case"embed":B("load",n);break;case"video":case"audio":for(i=0;i<mn.length;i++)B(mn[i],n);break;case"source":B("error",n);break;case"img":case"image":case"link":B("error",n),B("load",n);break;case"details":B("toggle",n);break;case"input":Bs(n,o),B("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!o.multiple},B("invalid",n);break;case"textarea":Hs(n,o),B("invalid",n)}Il(r,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var s=o[l];l==="children"?typeof s=="string"?n.textContent!==s&&(o.suppressHydrationWarning!==!0&&hi(n.textContent,s,e),i=["children",s]):typeof s=="number"&&n.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&hi(n.textContent,s,e),i=["children",""+s]):Nn.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&B("scroll",n)}switch(r){case"input":li(n),Us(n,o,!0);break;case"textarea":li(n),Vs(n);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(n.onclick=Qi)}n=i,t.updateQueue=n,n!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Du(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=l.createElement(r,{is:n.is}):(e=l.createElement(r),r==="select"&&(l=e,n.multiple?l.multiple=!0:n.size&&(l.size=n.size))):e=l.createElementNS(e,r),e[rt]=t,e[$n]=n,cd(e,t,!1,!1),t.stateNode=e;e:{switch(l=Ol(r,n),r){case"dialog":B("cancel",e),B("close",e),i=n;break;case"iframe":case"object":case"embed":B("load",e),i=n;break;case"video":case"audio":for(i=0;i<mn.length;i++)B(mn[i],e);i=n;break;case"source":B("error",e),i=n;break;case"img":case"image":case"link":B("error",e),B("load",e),i=n;break;case"details":B("toggle",e),i=n;break;case"input":Bs(e,n),i=zl(e,n),B("invalid",e);break;case"option":i=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},i=K({},n,{value:void 0}),B("invalid",e);break;case"textarea":Hs(e,n),i=Ml(e,n),B("invalid",e);break;default:i=n}Il(r,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var c=s[o];o==="style"?Bu(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Fu(e,c)):o==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&_n(e,c):typeof c=="number"&&_n(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Nn.hasOwnProperty(o)?c!=null&&o==="onScroll"&&B("scroll",e):c!=null&&Aa(e,o,c,l))}switch(r){case"input":li(e),Us(e,n,!1);break;case"textarea":li(e),Vs(e);break;case"option":n.value!=null&&e.setAttribute("value",""+Ht(n.value));break;case"select":e.multiple=!!n.multiple,o=n.value,o!=null?br(e,!!n.multiple,o,!1):n.defaultValue!=null&&br(e,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Qi)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return pe(t),null;case 6:if(e&&t.stateNode!=null)dd(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(C(166));if(r=qt(Fn.current),qt(it.current),mi(t)){if(n=t.stateNode,r=t.memoizedProps,n[rt]=t,(o=n.nodeValue!==r)&&(e=Re,e!==null))switch(e.tag){case 3:hi(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&hi(n.nodeValue,r,(e.mode&1)!==0)}o&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[rt]=t,t.stateNode=n}return pe(t),null;case 13:if(V(Q),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Z&&ze!==null&&t.mode&1&&!(t.flags&128))_1(),Ur(),t.flags|=98560,o=!1;else if(o=mi(t),n!==null&&n.dehydrated!==null){if(e===null){if(!o)throw Error(C(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(C(317));o[rt]=t}else Ur(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;pe(t),o=!1}else Qe!==null&&(ga(Qe),Qe=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||Q.current&1?ne===0&&(ne=3):js())),t.updateQueue!==null&&(t.flags|=4),pe(t),null);case 4:return Vr(),sa(e,t),e===null&&In(t.stateNode.containerInfo),pe(t),null;case 10:return os(t.type._context),pe(t),null;case 17:return Ee(t.type)&&Xi(),pe(t),null;case 19:if(V(Q),o=t.memoizedState,o===null)return pe(t),null;if(n=(t.flags&128)!==0,l=o.rendering,l===null)if(n)un(o,!1);else{if(ne!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=to(e),l!==null){for(t.flags|=128,un(o,!1),n=l.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)o=r,e=n,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return A(Q,Q.current&1|2),t.child}e=e.sibling}o.tail!==null&&q()>Zr&&(t.flags|=128,n=!0,un(o,!1),t.lanes=4194304)}else{if(!n)if(e=to(l),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),un(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!Z)return pe(t),null}else 2*q()-o.renderingStartTime>Zr&&r!==1073741824&&(t.flags|=128,n=!0,un(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(r=o.last,r!==null?r.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=q(),t.sibling=null,r=Q.current,A(Q,n?r&1|2:r&1),t):(pe(t),null);case 22:case 23:return ks(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?Te&1073741824&&(pe(t),t.subtreeFlags&6&&(t.flags|=8192)):pe(t),null;case 24:return null;case 25:return null}throw Error(C(156,t.tag))}function _2(e,t){switch(ts(t),t.tag){case 1:return Ee(t.type)&&Xi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Vr(),V(Ce),V(me),us(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return cs(t),null;case 13:if(V(Q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));Ur()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return V(Q),null;case 4:return Vr(),null;case 10:return os(t.type._context),null;case 22:case 23:return ks(),null;case 24:return null;default:return null}}var yi=!1,he=!1,T2=typeof WeakSet=="function"?WeakSet:Set,_=null;function zr(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){G(e,t,n)}else r.current=null}function ca(e,t,r){try{r()}catch(n){G(e,t,n)}}var Mc=!1;function z2(e,t){if(Zl=Vi,e=m1(),qa(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var i=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break e}var l=0,s=-1,c=-1,u=0,f=0,h=e,g=null;t:for(;;){for(var v;h!==r||i!==0&&h.nodeType!==3||(s=l+i),h!==o||n!==0&&h.nodeType!==3||(c=l+n),h.nodeType===3&&(l+=h.nodeValue.length),(v=h.firstChild)!==null;)g=h,h=v;for(;;){if(h===e)break t;if(g===r&&++u===i&&(s=l),g===o&&++f===n&&(c=l),(v=h.nextSibling)!==null)break;h=g,g=h.parentNode}h=v}r=s===-1||c===-1?null:{start:s,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(Ql={focusedElem:e,selectionRange:r},Vi=!1,_=t;_!==null;)if(t=_,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,_=e;else for(;_!==null;){t=_;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,P=y.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?w:We(t.type,w),P);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(x){G(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,_=e;break}_=t.return}return y=Mc,Mc=!1,y}function Sn(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&ca(t,r,o)}i=i.next}while(i!==n)}}function No(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function ua(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function fd(e){var t=e.alternate;t!==null&&(e.alternate=null,fd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[rt],delete t[$n],delete t[Yl],delete t[f2],delete t[p2])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function pd(e){return e.tag===5||e.tag===3||e.tag===4}function bc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||pd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function da(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Qi));else if(n!==4&&(e=e.child,e!==null))for(da(e,t,r),e=e.sibling;e!==null;)da(e,t,r),e=e.sibling}function fa(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(fa(e,t,r),e=e.sibling;e!==null;)fa(e,t,r),e=e.sibling}var se=null,Ze=!1;function jt(e,t,r){for(r=r.child;r!==null;)hd(e,t,r),r=r.sibling}function hd(e,t,r){if(nt&&typeof nt.onCommitFiberUnmount=="function")try{nt.onCommitFiberUnmount(xo,r)}catch{}switch(r.tag){case 5:he||zr(r,t);case 6:var n=se,i=Ze;se=null,jt(e,t,r),se=n,Ze=i,se!==null&&(Ze?(e=se,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):se.removeChild(r.stateNode));break;case 18:se!==null&&(Ze?(e=se,r=r.stateNode,e.nodeType===8?ol(e.parentNode,r):e.nodeType===1&&ol(e,r),Ln(e)):ol(se,r.stateNode));break;case 4:n=se,i=Ze,se=r.stateNode.containerInfo,Ze=!0,jt(e,t,r),se=n,Ze=i;break;case 0:case 11:case 14:case 15:if(!he&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&ca(r,t,l),i=i.next}while(i!==n)}jt(e,t,r);break;case 1:if(!he&&(zr(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(s){G(r,t,s)}jt(e,t,r);break;case 21:jt(e,t,r);break;case 22:r.mode&1?(he=(n=he)||r.memoizedState!==null,jt(e,t,r),he=n):jt(e,t,r);break;default:jt(e,t,r)}}function Ic(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new T2),t.forEach(function(n){var i=F2.bind(null,e,n);r.has(n)||(r.add(n),n.then(i,i))})}}function Ve(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var i=r[n];try{var o=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:se=s.stateNode,Ze=!1;break e;case 3:se=s.stateNode.containerInfo,Ze=!0;break e;case 4:se=s.stateNode.containerInfo,Ze=!0;break e}s=s.return}if(se===null)throw Error(C(160));hd(o,l,i),se=null,Ze=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){G(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)md(t,e),t=t.sibling}function md(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ve(t,e),Je(e),n&4){try{Sn(3,e,e.return),No(3,e)}catch(w){G(e,e.return,w)}try{Sn(5,e,e.return)}catch(w){G(e,e.return,w)}}break;case 1:Ve(t,e),Je(e),n&512&&r!==null&&zr(r,r.return);break;case 5:if(Ve(t,e),Je(e),n&512&&r!==null&&zr(r,r.return),e.flags&32){var i=e.stateNode;try{_n(i,"")}catch(w){G(e,e.return,w)}}if(n&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=r!==null?r.memoizedProps:o,s=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Ou(i,o),Ol(s,l);var u=Ol(s,o);for(l=0;l<c.length;l+=2){var f=c[l],h=c[l+1];f==="style"?Bu(i,h):f==="dangerouslySetInnerHTML"?Fu(i,h):f==="children"?_n(i,h):Aa(i,f,h,u)}switch(s){case"input":Rl(i,o);break;case"textarea":$u(i,o);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?br(i,!!o.multiple,v,!1):g!==!!o.multiple&&(o.defaultValue!=null?br(i,!!o.multiple,o.defaultValue,!0):br(i,!!o.multiple,o.multiple?[]:"",!1))}i[$n]=o}catch(w){G(e,e.return,w)}}break;case 6:if(Ve(t,e),Je(e),n&4){if(e.stateNode===null)throw Error(C(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){G(e,e.return,w)}}break;case 3:if(Ve(t,e),Je(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{Ln(t.containerInfo)}catch(w){G(e,e.return,w)}break;case 4:Ve(t,e),Je(e);break;case 13:Ve(t,e),Je(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(xs=q())),n&4&&Ic(e);break;case 22:if(f=r!==null&&r.memoizedState!==null,e.mode&1?(he=(u=he)||f,Ve(t,e),he=u):Ve(t,e),Je(e),n&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(_=e,f=e.child;f!==null;){for(h=_=f;_!==null;){switch(g=_,v=g.child,g.tag){case 0:case 11:case 14:case 15:Sn(4,g,g.return);break;case 1:zr(g,g.return);var y=g.stateNode;if(typeof y.componentWillUnmount=="function"){n=g,r=g.return;try{t=n,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(w){G(n,r,w)}}break;case 5:zr(g,g.return);break;case 22:if(g.memoizedState!==null){$c(h);continue}}v!==null?(v.return=g,_=v):$c(h)}f=f.sibling}e:for(f=null,h=e;;){if(h.tag===5){if(f===null){f=h;try{i=h.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=h.stateNode,c=h.memoizedProps.style,l=c!=null&&c.hasOwnProperty("display")?c.display:null,s.style.display=Au("display",l))}catch(w){G(e,e.return,w)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(w){G(e,e.return,w)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ve(t,e),Je(e),n&4&&Ic(e);break;case 21:break;default:Ve(t,e),Je(e)}}function Je(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(pd(r)){var n=r;break e}r=r.return}throw Error(C(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&(_n(i,""),n.flags&=-33);var o=bc(e);fa(e,o,i);break;case 3:case 4:var l=n.stateNode.containerInfo,s=bc(e);da(e,s,l);break;default:throw Error(C(161))}}catch(c){G(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function R2(e,t,r){_=e,gd(e)}function gd(e,t,r){for(var n=(e.mode&1)!==0;_!==null;){var i=_,o=i.child;if(i.tag===22&&n){var l=i.memoizedState!==null||yi;if(!l){var s=i.alternate,c=s!==null&&s.memoizedState!==null||he;s=yi;var u=he;if(yi=l,(he=c)&&!u)for(_=i;_!==null;)l=_,c=l.child,l.tag===22&&l.memoizedState!==null?Dc(i):c!==null?(c.return=l,_=c):Dc(i);for(;o!==null;)_=o,gd(o),o=o.sibling;_=i,yi=s,he=u}Oc(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,_=o):Oc(e)}}function Oc(e){for(;_!==null;){var t=_;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:he||No(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!he)if(r===null)n.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:We(t.type,r.memoizedProps);n.componentDidUpdate(i,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&xc(t,o,n);break;case 3:var l=t.updateQueue;if(l!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}xc(t,l,r)}break;case 5:var s=t.stateNode;if(r===null&&t.flags&4){r=s;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&Ln(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}he||t.flags&512&&ua(t)}catch(g){G(t,t.return,g)}}if(t===e){_=null;break}if(r=t.sibling,r!==null){r.return=t.return,_=r;break}_=t.return}}function $c(e){for(;_!==null;){var t=_;if(t===e){_=null;break}var r=t.sibling;if(r!==null){r.return=t.return,_=r;break}_=t.return}}function Dc(e){for(;_!==null;){var t=_;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{No(4,t)}catch(c){G(t,r,c)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var i=t.return;try{n.componentDidMount()}catch(c){G(t,i,c)}}var o=t.return;try{ua(t)}catch(c){G(t,o,c)}break;case 5:var l=t.return;try{ua(t)}catch(c){G(t,l,c)}}}catch(c){G(t,t.return,c)}if(t===e){_=null;break}var s=t.sibling;if(s!==null){s.return=t.return,_=s;break}_=t.return}}var L2=Math.ceil,io=xt.ReactCurrentDispatcher,vs=xt.ReactCurrentOwner,Fe=xt.ReactCurrentBatchConfig,O=0,ae=null,te=null,ue=0,Te=0,Rr=Zt(0),ne=0,Hn=null,ar=0,_o=0,ys=0,Cn=null,je=null,xs=0,Zr=1/0,ct=null,oo=!1,pa=null,Dt=null,xi=!1,Rt=null,lo=0,En=0,ha=null,Ri=-1,Li=0;function xe(){return O&6?q():Ri!==-1?Ri:Ri=q()}function Ft(e){return e.mode&1?O&2&&ue!==0?ue&-ue:m2.transition!==null?(Li===0&&(Li=qu()),Li):(e=D,e!==0||(e=window.event,e=e===void 0?16:l1(e.type)),e):1}function Ke(e,t,r,n){if(50<En)throw En=0,ha=null,Error(C(185));Yn(e,r,n),(!(O&2)||e!==ae)&&(e===ae&&(!(O&2)&&(_o|=r),ne===4&&_t(e,ue)),Pe(e,n),r===1&&O===0&&!(t.mode&1)&&(Zr=q()+500,Co&&Qt()))}function Pe(e,t){var r=e.callbackNode;mf(e,t);var n=Hi(e,e===ae?ue:0);if(n===0)r!==null&&Qs(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&Qs(r),t===1)e.tag===0?h2(Fc.bind(null,e)):E1(Fc.bind(null,e)),u2(function(){!(O&6)&&Qt()}),r=null;else{switch(e1(n)){case 1:r=Wa;break;case 4:r=Gu;break;case 16:r=Ui;break;case 536870912:r=Ju;break;default:r=Ui}r=Cd(r,vd.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function vd(e,t){if(Ri=-1,Li=0,O&6)throw Error(C(327));var r=e.callbackNode;if(Fr()&&e.callbackNode!==r)return null;var n=Hi(e,e===ae?ue:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=ao(e,n);else{t=n;var i=O;O|=2;var o=xd();(ae!==e||ue!==t)&&(ct=null,Zr=q()+500,tr(e,t));do try{I2();break}catch(s){yd(e,s)}while(1);is(),io.current=o,O=i,te!==null?t=0:(ae=null,ue=0,t=ne)}if(t!==0){if(t===2&&(i=Bl(e),i!==0&&(n=i,t=ma(e,i))),t===1)throw r=Hn,tr(e,0),_t(e,n),Pe(e,q()),r;if(t===6)_t(e,n);else{if(i=e.current.alternate,!(n&30)&&!M2(i)&&(t=ao(e,n),t===2&&(o=Bl(e),o!==0&&(n=o,t=ma(e,o))),t===1))throw r=Hn,tr(e,0),_t(e,n),Pe(e,q()),r;switch(e.finishedWork=i,e.finishedLanes=n,t){case 0:case 1:throw Error(C(345));case 2:Yt(e,je,ct);break;case 3:if(_t(e,n),(n&130023424)===n&&(t=xs+500-q(),10<t)){if(Hi(e,0)!==0)break;if(i=e.suspendedLanes,(i&n)!==n){xe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Kl(Yt.bind(null,e,je,ct),t);break}Yt(e,je,ct);break;case 4:if(_t(e,n),(n&4194240)===n)break;for(t=e.eventTimes,i=-1;0<n;){var l=31-Xe(n);o=1<<l,l=t[l],l>i&&(i=l),n&=~o}if(n=i,n=q()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*L2(n/1960))-n,10<n){e.timeoutHandle=Kl(Yt.bind(null,e,je,ct),n);break}Yt(e,je,ct);break;case 5:Yt(e,je,ct);break;default:throw Error(C(329))}}}return Pe(e,q()),e.callbackNode===r?vd.bind(null,e):null}function ma(e,t){var r=Cn;return e.current.memoizedState.isDehydrated&&(tr(e,t).flags|=256),e=ao(e,t),e!==2&&(t=je,je=r,t!==null&&ga(t)),e}function ga(e){je===null?je=e:je.push.apply(je,e)}function M2(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var i=r[n],o=i.getSnapshot;i=i.value;try{if(!Ge(o(),i))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function _t(e,t){for(t&=~ys,t&=~_o,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Xe(t),n=1<<r;e[r]=-1,t&=~n}}function Fc(e){if(O&6)throw Error(C(327));Fr();var t=Hi(e,0);if(!(t&1))return Pe(e,q()),null;var r=ao(e,t);if(e.tag!==0&&r===2){var n=Bl(e);n!==0&&(t=n,r=ma(e,n))}if(r===1)throw r=Hn,tr(e,0),_t(e,t),Pe(e,q()),r;if(r===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Yt(e,je,ct),Pe(e,q()),null}function ws(e,t){var r=O;O|=1;try{return e(t)}finally{O=r,O===0&&(Zr=q()+500,Co&&Qt())}}function sr(e){Rt!==null&&Rt.tag===0&&!(O&6)&&Fr();var t=O;O|=1;var r=Fe.transition,n=D;try{if(Fe.transition=null,D=1,e)return e()}finally{D=n,Fe.transition=r,O=t,!(O&6)&&Qt()}}function ks(){Te=Rr.current,V(Rr)}function tr(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,c2(r)),te!==null)for(r=te.return;r!==null;){var n=r;switch(ts(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Xi();break;case 3:Vr(),V(Ce),V(me),us();break;case 5:cs(n);break;case 4:Vr();break;case 13:V(Q);break;case 19:V(Q);break;case 10:os(n.type._context);break;case 22:case 23:ks()}r=r.return}if(ae=e,te=e=At(e.current,null),ue=Te=t,ne=0,Hn=null,ys=_o=ar=0,je=Cn=null,Jt!==null){for(t=0;t<Jt.length;t++)if(r=Jt[t],n=r.interleaved,n!==null){r.interleaved=null;var i=n.next,o=r.pending;if(o!==null){var l=o.next;o.next=i,n.next=l}r.pending=n}Jt=null}return e}function yd(e,t){do{var r=te;try{if(is(),_i.current=no,ro){for(var n=X.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}ro=!1}if(lr=0,ie=re=X=null,jn=!1,An=0,vs.current=null,r===null||r.return===null){ne=1,Hn=t,te=null;break}e:{var o=e,l=r.return,s=r,c=t;if(t=ue,s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,f=s,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var v=Pc(l);if(v!==null){v.flags&=-257,Nc(v,l,s,o,t),v.mode&1&&Ec(o,u,t),t=v,c=u;var y=t.updateQueue;if(y===null){var w=new Set;w.add(c),t.updateQueue=w}else y.add(c);break e}else{if(!(t&1)){Ec(o,u,t),js();break e}c=Error(C(426))}}else if(Z&&s.mode&1){var P=Pc(l);if(P!==null){!(P.flags&65536)&&(P.flags|=256),Nc(P,l,s,o,t),rs(Wr(c,s));break e}}o=c=Wr(c,s),ne!==4&&(ne=2),Cn===null?Cn=[o]:Cn.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=td(o,c,t);yc(o,p);break e;case 1:s=c;var d=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Dt===null||!Dt.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=rd(o,s,t);yc(o,x);break e}}o=o.return}while(o!==null)}kd(r)}catch(k){t=k,te===r&&r!==null&&(te=r=r.return);continue}break}while(1)}function xd(){var e=io.current;return io.current=no,e===null?no:e}function js(){(ne===0||ne===3||ne===2)&&(ne=4),ae===null||!(ar&268435455)&&!(_o&268435455)||_t(ae,ue)}function ao(e,t){var r=O;O|=2;var n=xd();(ae!==e||ue!==t)&&(ct=null,tr(e,t));do try{b2();break}catch(i){yd(e,i)}while(1);if(is(),O=r,io.current=n,te!==null)throw Error(C(261));return ae=null,ue=0,ne}function b2(){for(;te!==null;)wd(te)}function I2(){for(;te!==null&&!lf();)wd(te)}function wd(e){var t=Sd(e.alternate,e,Te);e.memoizedProps=e.pendingProps,t===null?kd(e):te=t,vs.current=null}function kd(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=_2(r,t),r!==null){r.flags&=32767,te=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ne=6,te=null;return}}else if(r=N2(r,t,Te),r!==null){te=r;return}if(t=t.sibling,t!==null){te=t;return}te=t=e}while(t!==null);ne===0&&(ne=5)}function Yt(e,t,r){var n=D,i=Fe.transition;try{Fe.transition=null,D=1,O2(e,t,r,n)}finally{Fe.transition=i,D=n}return null}function O2(e,t,r,n){do Fr();while(Rt!==null);if(O&6)throw Error(C(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var o=r.lanes|r.childLanes;if(gf(e,o),e===ae&&(te=ae=null,ue=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||xi||(xi=!0,Cd(Ui,function(){return Fr(),null})),o=(r.flags&15990)!==0,r.subtreeFlags&15990||o){o=Fe.transition,Fe.transition=null;var l=D;D=1;var s=O;O|=4,vs.current=null,z2(e,r),md(r,e),r2(Ql),Vi=!!Zl,Ql=Zl=null,e.current=r,R2(r),af(),O=s,D=l,Fe.transition=o}else e.current=r;if(xi&&(xi=!1,Rt=e,lo=i),o=e.pendingLanes,o===0&&(Dt=null),uf(r.stateNode),Pe(e,q()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)i=t[r],n(i.value,{componentStack:i.stack,digest:i.digest});if(oo)throw oo=!1,e=pa,pa=null,e;return lo&1&&e.tag!==0&&Fr(),o=e.pendingLanes,o&1?e===ha?En++:(En=0,ha=e):En=0,Qt(),null}function Fr(){if(Rt!==null){var e=e1(lo),t=Fe.transition,r=D;try{if(Fe.transition=null,D=16>e?16:e,Rt===null)var n=!1;else{if(e=Rt,Rt=null,lo=0,O&6)throw Error(C(331));var i=O;for(O|=4,_=e.current;_!==null;){var o=_,l=o.child;if(_.flags&16){var s=o.deletions;if(s!==null){for(var c=0;c<s.length;c++){var u=s[c];for(_=u;_!==null;){var f=_;switch(f.tag){case 0:case 11:case 15:Sn(8,f,o)}var h=f.child;if(h!==null)h.return=f,_=h;else for(;_!==null;){f=_;var g=f.sibling,v=f.return;if(fd(f),f===u){_=null;break}if(g!==null){g.return=v,_=g;break}_=v}}}var y=o.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var P=w.sibling;w.sibling=null,w=P}while(w!==null)}}_=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,_=l;else e:for(;_!==null;){if(o=_,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Sn(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,_=p;break e}_=o.return}}var d=e.current;for(_=d;_!==null;){l=_;var m=l.child;if(l.subtreeFlags&2064&&m!==null)m.return=l,_=m;else e:for(l=d;_!==null;){if(s=_,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:No(9,s)}}catch(k){G(s,s.return,k)}if(s===l){_=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,_=x;break e}_=s.return}}if(O=i,Qt(),nt&&typeof nt.onPostCommitFiberRoot=="function")try{nt.onPostCommitFiberRoot(xo,e)}catch{}n=!0}return n}finally{D=r,Fe.transition=t}}return!1}function Ac(e,t,r){t=Wr(r,t),t=td(e,t,1),e=$t(e,t,1),t=xe(),e!==null&&(Yn(e,1,t),Pe(e,t))}function G(e,t,r){if(e.tag===3)Ac(e,e,r);else for(;t!==null;){if(t.tag===3){Ac(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Dt===null||!Dt.has(n))){e=Wr(r,e),e=rd(t,e,1),t=$t(t,e,1),e=xe(),t!==null&&(Yn(t,1,e),Pe(t,e));break}}t=t.return}}function $2(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=xe(),e.pingedLanes|=e.suspendedLanes&r,ae===e&&(ue&r)===r&&(ne===4||ne===3&&(ue&130023424)===ue&&500>q()-xs?tr(e,0):ys|=r),Pe(e,t)}function jd(e,t){t===0&&(e.mode&1?(t=ci,ci<<=1,!(ci&130023424)&&(ci=4194304)):t=1);var r=xe();e=vt(e,t),e!==null&&(Yn(e,t,r),Pe(e,r))}function D2(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),jd(e,r)}function F2(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(C(314))}n!==null&&n.delete(t),jd(e,r)}var Sd;Sd=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ce.current)Se=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return Se=!1,P2(e,t,r);Se=!!(e.flags&131072)}else Se=!1,Z&&t.flags&1048576&&P1(t,Gi,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;zi(e,t),e=t.pendingProps;var i=Br(t,me.current);Dr(t,r),i=fs(null,t,n,e,i,r);var o=ps();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ee(n)?(o=!0,Ki(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,as(t),i.updater=Eo,t.stateNode=i,i._reactInternals=t,ra(t,n,e,r),t=oa(null,t,n,!0,o,r)):(t.tag=0,Z&&o&&es(t),ye(null,t,i,r),t=t.child),t;case 16:n=t.elementType;e:{switch(zi(e,t),e=t.pendingProps,i=n._init,n=i(n._payload),t.type=n,i=t.tag=B2(n),e=We(n,e),i){case 0:t=ia(null,t,n,e,r);break e;case 1:t=zc(null,t,n,e,r);break e;case 11:t=_c(null,t,n,e,r);break e;case 14:t=Tc(null,t,n,We(n.type,e),r);break e}throw Error(C(306,n,""))}return t;case 0:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:We(n,i),ia(e,t,n,i,r);case 1:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:We(n,i),zc(e,t,n,i,r);case 3:e:{if(ld(t),e===null)throw Error(C(387));n=t.pendingProps,o=t.memoizedState,i=o.element,z1(e,t),eo(t,n,null,r);var l=t.memoizedState;if(n=l.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Wr(Error(C(423)),t),t=Rc(e,t,n,r,i);break e}else if(n!==i){i=Wr(Error(C(424)),t),t=Rc(e,t,n,r,i);break e}else for(ze=Ot(t.stateNode.containerInfo.firstChild),Re=t,Z=!0,Qe=null,r=b1(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Ur(),n===i){t=yt(e,t,r);break e}ye(e,t,n,r)}t=t.child}return t;case 5:return I1(t),e===null&&ql(t),n=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,Xl(n,i)?l=null:o!==null&&Xl(n,o)&&(t.flags|=32),od(e,t),ye(e,t,l,r),t.child;case 6:return e===null&&ql(t),null;case 13:return ad(e,t,r);case 4:return ss(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Hr(t,null,n,r):ye(e,t,n,r),t.child;case 11:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:We(n,i),_c(e,t,n,i,r);case 7:return ye(e,t,t.pendingProps,r),t.child;case 8:return ye(e,t,t.pendingProps.children,r),t.child;case 12:return ye(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,A(Ji,n._currentValue),n._currentValue=l,o!==null)if(Ge(o.value,l)){if(o.children===i.children&&!Ce.current){t=yt(e,t,r);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){l=o.child;for(var c=s.firstContext;c!==null;){if(c.context===n){if(o.tag===1){c=ht(-1,r&-r),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?c.next=c:(c.next=f.next,f.next=c),u.pending=c}}o.lanes|=r,c=o.alternate,c!==null&&(c.lanes|=r),ea(o.return,r,t),s.lanes|=r;break}c=c.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(C(341));l.lanes|=r,s=l.alternate,s!==null&&(s.lanes|=r),ea(l,r,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}ye(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,n=t.pendingProps.children,Dr(t,r),i=Ae(i),n=n(i),t.flags|=1,ye(e,t,n,r),t.child;case 14:return n=t.type,i=We(n,t.pendingProps),i=We(n.type,i),Tc(e,t,n,i,r);case 15:return nd(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:We(n,i),zi(e,t),t.tag=1,Ee(n)?(e=!0,Ki(t)):e=!1,Dr(t,r),L1(t,n,i),ra(t,n,i,r),oa(null,t,n,!0,e,r);case 19:return sd(e,t,r);case 22:return id(e,t,r)}throw Error(C(156,t.tag))};function Cd(e,t){return Yu(e,t)}function A2(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function De(e,t,r,n){return new A2(e,t,r,n)}function Ss(e){return e=e.prototype,!(!e||!e.isReactComponent)}function B2(e){if(typeof e=="function")return Ss(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ua)return 11;if(e===Ha)return 14}return 2}function At(e,t){var r=e.alternate;return r===null?(r=De(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Mi(e,t,r,n,i,o){var l=2;if(n=e,typeof e=="function")Ss(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case kr:return rr(r.children,i,o,t);case Ba:l=8,i|=8;break;case Pl:return e=De(12,r,t,i|2),e.elementType=Pl,e.lanes=o,e;case Nl:return e=De(13,r,t,i),e.elementType=Nl,e.lanes=o,e;case _l:return e=De(19,r,t,i),e.elementType=_l,e.lanes=o,e;case Mu:return To(r,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ru:l=10;break e;case Lu:l=9;break e;case Ua:l=11;break e;case Ha:l=14;break e;case Et:l=16,n=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return t=De(l,r,t,i),t.elementType=e,t.type=n,t.lanes=o,t}function rr(e,t,r,n){return e=De(7,e,n,t),e.lanes=r,e}function To(e,t,r,n){return e=De(22,e,n,t),e.elementType=Mu,e.lanes=r,e.stateNode={isHidden:!1},e}function pl(e,t,r){return e=De(6,e,null,t),e.lanes=r,e}function hl(e,t,r){return t=De(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function U2(e,t,r,n,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xo(0),this.expirationTimes=Xo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xo(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Cs(e,t,r,n,i,o,l,s,c){return e=new U2(e,t,r,s,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=De(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},as(o),e}function H2(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:wr,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function Ed(e){if(!e)return Vt;e=e._reactInternals;e:{if(fr(e)!==e||e.tag!==1)throw Error(C(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ee(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(C(171))}if(e.tag===1){var r=e.type;if(Ee(r))return C1(e,r,t)}return t}function Pd(e,t,r,n,i,o,l,s,c){return e=Cs(r,n,!0,e,i,o,l,s,c),e.context=Ed(null),r=e.current,n=xe(),i=Ft(r),o=ht(n,i),o.callback=t??null,$t(r,o,i),e.current.lanes=i,Yn(e,i,n),Pe(e,n),e}function zo(e,t,r,n){var i=t.current,o=xe(),l=Ft(i);return r=Ed(r),t.context===null?t.context=r:t.pendingContext=r,t=ht(o,l),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=$t(i,t,l),e!==null&&(Ke(e,i,l,o),Ni(e,i,l)),l}function so(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Bc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Es(e,t){Bc(e,t),(e=e.alternate)&&Bc(e,t)}function V2(){return null}var Nd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ps(e){this._internalRoot=e}Ro.prototype.render=Ps.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));zo(e,t,null,null)};Ro.prototype.unmount=Ps.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;sr(function(){zo(null,e,null,null)}),t[gt]=null}};function Ro(e){this._internalRoot=e}Ro.prototype.unstable_scheduleHydration=function(e){if(e){var t=n1();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Nt.length&&t!==0&&t<Nt[r].priority;r++);Nt.splice(r,0,e),r===0&&o1(e)}};function Ns(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Lo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Uc(){}function W2(e,t,r,n,i){if(i){if(typeof n=="function"){var o=n;n=function(){var u=so(l);o.call(u)}}var l=Pd(t,n,e,0,null,!1,!1,"",Uc);return e._reactRootContainer=l,e[gt]=l.current,In(e.nodeType===8?e.parentNode:e),sr(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof n=="function"){var s=n;n=function(){var u=so(c);s.call(u)}}var c=Cs(e,0,!1,null,null,!1,!1,"",Uc);return e._reactRootContainer=c,e[gt]=c.current,In(e.nodeType===8?e.parentNode:e),sr(function(){zo(t,c,r,n)}),c}function Mo(e,t,r,n,i){var o=r._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var s=i;i=function(){var c=so(l);s.call(c)}}zo(t,l,e,i)}else l=W2(r,t,e,i,n);return so(l)}t1=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=hn(t.pendingLanes);r!==0&&(Za(t,r|1),Pe(t,q()),!(O&6)&&(Zr=q()+500,Qt()))}break;case 13:sr(function(){var n=vt(e,1);if(n!==null){var i=xe();Ke(n,e,1,i)}}),Es(e,1)}};Qa=function(e){if(e.tag===13){var t=vt(e,134217728);if(t!==null){var r=xe();Ke(t,e,134217728,r)}Es(e,134217728)}};r1=function(e){if(e.tag===13){var t=Ft(e),r=vt(e,t);if(r!==null){var n=xe();Ke(r,e,t,n)}Es(e,t)}};n1=function(){return D};i1=function(e,t){var r=D;try{return D=e,t()}finally{D=r}};Dl=function(e,t,r){switch(t){case"input":if(Rl(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var i=So(n);if(!i)throw Error(C(90));Iu(n),Rl(n,i)}}}break;case"textarea":$u(e,r);break;case"select":t=r.value,t!=null&&br(e,!!r.multiple,t,!1)}};Vu=ws;Wu=sr;var Z2={usingClientEntryPoint:!1,Events:[Jn,Er,So,Uu,Hu,ws]},dn={findFiberByHostInstance:Gt,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Q2={bundleType:dn.bundleType,version:dn.version,rendererPackageName:dn.rendererPackageName,rendererConfig:dn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:xt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Xu(e),e===null?null:e.stateNode},findFiberByHostInstance:dn.findFiberByHostInstance||V2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wi.isDisabled&&wi.supportsFiber)try{xo=wi.inject(Q2),nt=wi}catch{}}Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z2;Me.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ns(t))throw Error(C(200));return H2(e,t,null,r)};Me.createRoot=function(e,t){if(!Ns(e))throw Error(C(299));var r=!1,n="",i=Nd;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Cs(e,1,!1,null,null,r,!1,n,i),e[gt]=t.current,In(e.nodeType===8?e.parentNode:e),new Ps(t)};Me.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=Xu(t),e=e===null?null:e.stateNode,e};Me.flushSync=function(e){return sr(e)};Me.hydrate=function(e,t,r){if(!Lo(t))throw Error(C(200));return Mo(null,e,t,!0,r)};Me.hydrateRoot=function(e,t,r){if(!Ns(e))throw Error(C(405));var n=r!=null&&r.hydratedSources||null,i=!1,o="",l=Nd;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(l=r.onRecoverableError)),t=Pd(t,null,e,1,r??null,i,!1,o,l),e[gt]=t.current,In(e),n)for(e=0;e<n.length;e++)r=n[e],i=r._getVersion,i=i(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new Ro(t)};Me.render=function(e,t,r){if(!Lo(t))throw Error(C(200));return Mo(null,e,t,!1,r)};Me.unmountComponentAtNode=function(e){if(!Lo(e))throw Error(C(40));return e._reactRootContainer?(sr(function(){Mo(null,null,e,!1,function(){e._reactRootContainer=null,e[gt]=null})}),!0):!1};Me.unstable_batchedUpdates=ws;Me.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!Lo(r))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return Mo(e,t,r,!1,n)};Me.version="18.2.0-next-9e3b772b8-20220608";function _d(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_d)}catch(e){console.error(e)}}_d(),Pu.exports=Me;var X2=Pu.exports,Hc=X2;Cl.createRoot=Hc.createRoot,Cl.hydrateRoot=Hc.hydrateRoot;/**
 * @remix-run/router v1.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vn(){return Vn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Vn.apply(this,arguments)}var Lt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Lt||(Lt={}));const Vc="popstate";function K2(e){e===void 0&&(e={});function t(n,i){let{pathname:o,search:l,hash:s}=n.location;return va("",{pathname:o,search:l,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function r(n,i){return typeof i=="string"?i:co(i)}return G2(t,r,null,e)}function J(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function _s(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Y2(){return Math.random().toString(36).substr(2,8)}function Wc(e,t){return{usr:e.state,key:e.key,idx:t}}function va(e,t,r,n){return r===void 0&&(r=null),Vn({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?tn(t):t,{state:r,key:t&&t.key||n||Y2()})}function co(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function tn(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function G2(e,t,r,n){n===void 0&&(n={});let{window:i=document.defaultView,v5Compat:o=!1}=n,l=i.history,s=Lt.Pop,c=null,u=f();u==null&&(u=0,l.replaceState(Vn({},l.state,{idx:u}),""));function f(){return(l.state||{idx:null}).idx}function h(){s=Lt.Pop;let P=f(),p=P==null?null:P-u;u=P,c&&c({action:s,location:w.location,delta:p})}function g(P,p){s=Lt.Push;let d=va(w.location,P,p);r&&r(d,P),u=f()+1;let m=Wc(d,u),x=w.createHref(d);try{l.pushState(m,"",x)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;i.location.assign(x)}o&&c&&c({action:s,location:w.location,delta:1})}function v(P,p){s=Lt.Replace;let d=va(w.location,P,p);r&&r(d,P),u=f();let m=Wc(d,u),x=w.createHref(d);l.replaceState(m,"",x),o&&c&&c({action:s,location:w.location,delta:0})}function y(P){let p=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof P=="string"?P:co(P);return J(p,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,p)}let w={get action(){return s},get location(){return e(i,l)},listen(P){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Vc,h),c=P,()=>{i.removeEventListener(Vc,h),c=null}},createHref(P){return t(i,P)},createURL:y,encodeLocation(P){let p=y(P);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:g,replace:v,go(P){return l.go(P)}};return w}var Zc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Zc||(Zc={}));function J2(e,t,r){r===void 0&&(r="/");let n=typeof t=="string"?tn(t):t,i=Wn(n.pathname||"/",r);if(i==null)return null;let o=Td(e);q2(o);let l=null;for(let s=0;l==null&&s<o.length;++s)l=sp(o[s],up(i));return l}function Td(e,t,r,n){t===void 0&&(t=[]),r===void 0&&(r=[]),n===void 0&&(n="");let i=(o,l,s)=>{let c={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};c.relativePath.startsWith("/")&&(J(c.relativePath.startsWith(n),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(n.length));let u=Bt([n,c.relativePath]),f=r.concat(c);o.children&&o.children.length>0&&(J(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Td(o.children,t,f,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:lp(u,o.index),routesMeta:f})};return e.forEach((o,l)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))i(o,l);else for(let c of zd(o.path))i(o,l,c)}),t}function zd(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,i=r.endsWith("?"),o=r.replace(/\?$/,"");if(n.length===0)return i?[o,""]:[o];let l=zd(n.join("/")),s=[];return s.push(...l.map(c=>c===""?o:[o,c].join("/"))),i&&s.push(...l),s.map(c=>e.startsWith("/")&&c===""?"/":c)}function q2(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:ap(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const ep=/^:\w+$/,tp=3,rp=2,np=1,ip=10,op=-2,Qc=e=>e==="*";function lp(e,t){let r=e.split("/"),n=r.length;return r.some(Qc)&&(n+=op),t&&(n+=rp),r.filter(i=>!Qc(i)).reduce((i,o)=>i+(ep.test(o)?tp:o===""?np:ip),n)}function ap(e,t){return e.length===t.length&&e.slice(0,-1).every((n,i)=>n===t[i])?e[e.length-1]-t[t.length-1]:0}function sp(e,t){let{routesMeta:r}=e,n={},i="/",o=[];for(let l=0;l<r.length;++l){let s=r[l],c=l===r.length-1,u=i==="/"?t:t.slice(i.length)||"/",f=ya({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},u);if(!f)return null;Object.assign(n,f.params);let h=s.route;o.push({params:n,pathname:Bt([i,f.pathname]),pathnameBase:hp(Bt([i,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(i=Bt([i,f.pathnameBase]))}return o}function ya(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=cp(e.path,e.caseSensitive,e.end),i=t.match(r);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:n.reduce((u,f,h)=>{let{paramName:g,isOptional:v}=f;if(g==="*"){let w=s[h]||"";l=o.slice(0,o.length-w.length).replace(/(.)\/+$/,"$1")}const y=s[h];return v&&!y?u[g]=void 0:u[g]=dp(y||"",g),u},{}),pathname:o,pathnameBase:l,pattern:e}}function cp(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),_s(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let n=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(l,s,c)=>(n.push({paramName:s,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(n.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),n]}function up(e){try{return decodeURI(e)}catch(t){return _s(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function dp(e,t){try{return decodeURIComponent(e)}catch(r){return _s(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+r+").")),e}}function Wn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}function fp(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:i=""}=typeof e=="string"?tn(e):e;return{pathname:r?r.startsWith("/")?r:pp(r,t):t,search:mp(n),hash:gp(i)}}function pp(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?r.length>1&&r.pop():i!=="."&&r.push(i)}),r.length>1?r.join("/"):"/"}function ml(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Rd(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function Ld(e,t,r,n){n===void 0&&(n=!1);let i;typeof e=="string"?i=tn(e):(i=Vn({},e),J(!i.pathname||!i.pathname.includes("?"),ml("?","pathname","search",i)),J(!i.pathname||!i.pathname.includes("#"),ml("#","pathname","hash",i)),J(!i.search||!i.search.includes("#"),ml("#","search","hash",i)));let o=e===""||i.pathname==="",l=o?"/":i.pathname,s;if(n||l==null)s=r;else{let h=t.length-1;if(l.startsWith("..")){let g=l.split("/");for(;g[0]==="..";)g.shift(),h-=1;i.pathname=g.join("/")}s=h>=0?t[h]:"/"}let c=fp(i,s),u=l&&l!=="/"&&l.endsWith("/"),f=(o||l===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(u||f)&&(c.pathname+="/"),c}const Bt=e=>e.join("/").replace(/\/\/+/g,"/"),hp=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),mp=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,gp=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function vp(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Md=["post","put","patch","delete"];new Set(Md);const yp=["get",...Md];new Set(yp);/**
 * React Router v6.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function uo(){return uo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},uo.apply(this,arguments)}const bo=E.createContext(null),bd=E.createContext(null),pr=E.createContext(null),Io=E.createContext(null),hr=E.createContext({outlet:null,matches:[],isDataRoute:!1}),Id=E.createContext(null);function xp(e,t){let{relative:r}=t===void 0?{}:t;ei()||J(!1);let{basename:n,navigator:i}=E.useContext(pr),{hash:o,pathname:l,search:s}=Oo(e,{relative:r}),c=l;return n!=="/"&&(c=l==="/"?n:Bt([n,l])),i.createHref({pathname:c,search:s,hash:o})}function ei(){return E.useContext(Io)!=null}function ti(){return ei()||J(!1),E.useContext(Io).location}function Od(e){E.useContext(pr).static||E.useLayoutEffect(e)}function mr(){let{isDataRoute:e}=E.useContext(hr);return e?Lp():wp()}function wp(){ei()||J(!1);let e=E.useContext(bo),{basename:t,navigator:r}=E.useContext(pr),{matches:n}=E.useContext(hr),{pathname:i}=ti(),o=JSON.stringify(Rd(n).map(c=>c.pathnameBase)),l=E.useRef(!1);return Od(()=>{l.current=!0}),E.useCallback(function(c,u){if(u===void 0&&(u={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let f=Ld(c,JSON.parse(o),i,u.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Bt([t,f.pathname])),(u.replace?r.replace:r.push)(f,u.state,u)},[t,r,o,i,e])}function Oo(e,t){let{relative:r}=t===void 0?{}:t,{matches:n}=E.useContext(hr),{pathname:i}=ti(),o=JSON.stringify(Rd(n).map(l=>l.pathnameBase));return E.useMemo(()=>Ld(e,JSON.parse(o),i,r==="path"),[e,o,i,r])}function kp(e,t){return jp(e,t)}function jp(e,t,r){ei()||J(!1);let{navigator:n}=E.useContext(pr),{matches:i}=E.useContext(hr),o=i[i.length-1],l=o?o.params:{};o&&o.pathname;let s=o?o.pathnameBase:"/";o&&o.route;let c=ti(),u;if(t){var f;let w=typeof t=="string"?tn(t):t;s==="/"||(f=w.pathname)!=null&&f.startsWith(s)||J(!1),u=w}else u=c;let h=u.pathname||"/",g=s==="/"?h:h.slice(s.length)||"/",v=J2(e,{pathname:g}),y=Np(v&&v.map(w=>Object.assign({},w,{params:Object.assign({},l,w.params),pathname:Bt([s,n.encodeLocation?n.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?s:Bt([s,n.encodeLocation?n.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,r);return t&&y?E.createElement(Io.Provider,{value:{location:uo({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Lt.Pop}},y):y}function Sp(){let e=Rp(),t=vp(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},t),r?E.createElement("pre",{style:i},r):null,o)}const Cp=E.createElement(Sp,null);class Ep extends E.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error?E.createElement(hr.Provider,{value:this.props.routeContext},E.createElement(Id.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Pp(e){let{routeContext:t,match:r,children:n}=e,i=E.useContext(bo);return i&&i.static&&i.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=r.route.id),E.createElement(hr.Provider,{value:t},n)}function Np(e,t,r){var n;if(t===void 0&&(t=[]),r===void 0&&(r=null),e==null){var i;if((i=r)!=null&&i.errors)e=r.matches;else return null}let o=e,l=(n=r)==null?void 0:n.errors;if(l!=null){let s=o.findIndex(c=>c.route.id&&(l==null?void 0:l[c.route.id]));s>=0||J(!1),o=o.slice(0,Math.min(o.length,s+1))}return o.reduceRight((s,c,u)=>{let f=c.route.id?l==null?void 0:l[c.route.id]:null,h=null;r&&(h=c.route.errorElement||Cp);let g=t.concat(o.slice(0,u+1)),v=()=>{let y;return f?y=h:c.route.Component?y=E.createElement(c.route.Component,null):c.route.element?y=c.route.element:y=s,E.createElement(Pp,{match:c,routeContext:{outlet:s,matches:g,isDataRoute:r!=null},children:y})};return r&&(c.route.ErrorBoundary||c.route.errorElement||u===0)?E.createElement(Ep,{location:r.location,revalidation:r.revalidation,component:h,error:f,children:v(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):v()},null)}var $d=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}($d||{}),fo=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(fo||{});function _p(e){let t=E.useContext(bo);return t||J(!1),t}function Tp(e){let t=E.useContext(bd);return t||J(!1),t}function zp(e){let t=E.useContext(hr);return t||J(!1),t}function Dd(e){let t=zp(),r=t.matches[t.matches.length-1];return r.route.id||J(!1),r.route.id}function Rp(){var e;let t=E.useContext(Id),r=Tp(fo.UseRouteError),n=Dd(fo.UseRouteError);return t||((e=r.errors)==null?void 0:e[n])}function Lp(){let{router:e}=_p($d.UseNavigateStable),t=Dd(fo.UseNavigateStable),r=E.useRef(!1);return Od(()=>{r.current=!0}),E.useCallback(function(i,o){o===void 0&&(o={}),r.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,uo({fromRouteId:t},o)))},[e,t])}function qe(e){J(!1)}function Mp(e){let{basename:t="/",children:r=null,location:n,navigationType:i=Lt.Pop,navigator:o,static:l=!1}=e;ei()&&J(!1);let s=t.replace(/^\/*/,"/"),c=E.useMemo(()=>({basename:s,navigator:o,static:l}),[s,o,l]);typeof n=="string"&&(n=tn(n));let{pathname:u="/",search:f="",hash:h="",state:g=null,key:v="default"}=n,y=E.useMemo(()=>{let w=Wn(u,s);return w==null?null:{location:{pathname:w,search:f,hash:h,state:g,key:v},navigationType:i}},[s,u,f,h,g,v,i]);return y==null?null:E.createElement(pr.Provider,{value:c},E.createElement(Io.Provider,{children:r,value:y}))}function bp(e){let{children:t,location:r}=e;return kp(xa(t),r)}new Promise(()=>{});function xa(e,t){t===void 0&&(t=[]);let r=[];return E.Children.forEach(e,(n,i)=>{if(!E.isValidElement(n))return;let o=[...t,i];if(n.type===E.Fragment){r.push.apply(r,xa(n.props.children,o));return}n.type!==qe&&J(!1),!n.props.index||!n.props.children||J(!1);let l={id:n.props.id||o.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(l.children=xa(n.props.children,o)),r.push(l)}),r}/**
 * React Router DOM v6.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function po(){return po=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},po.apply(this,arguments)}function Fd(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,o;for(o=0;o<n.length;o++)i=n[o],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}function Ip(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Op(e,t){return e.button===0&&(!t||t==="_self")&&!Ip(e)}const $p=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Dp=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],Fp=E.createContext({isTransitioning:!1}),Ap="startTransition",Xc=$0[Ap];function Bp(e){let{basename:t,children:r,future:n,window:i}=e,o=E.useRef();o.current==null&&(o.current=K2({window:i,v5Compat:!0}));let l=o.current,[s,c]=E.useState({action:l.action,location:l.location}),{v7_startTransition:u}=n||{},f=E.useCallback(h=>{u&&Xc?Xc(()=>c(h)):c(h)},[c,u]);return E.useLayoutEffect(()=>l.listen(f),[l,f]),E.createElement(Mp,{basename:t,children:r,location:s.location,navigationType:s.action,navigator:l})}const Up=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Hp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Vp=E.forwardRef(function(t,r){let{onClick:n,relative:i,reloadDocument:o,replace:l,state:s,target:c,to:u,preventScrollReset:f,unstable_viewTransition:h}=t,g=Fd(t,$p),{basename:v}=E.useContext(pr),y,w=!1;if(typeof u=="string"&&Hp.test(u)&&(y=u,Up))try{let m=new URL(window.location.href),x=u.startsWith("//")?new URL(m.protocol+u):new URL(u),k=Wn(x.pathname,v);x.origin===m.origin&&k!=null?u=k+x.search+x.hash:w=!0}catch{}let P=xp(u,{relative:i}),p=Zp(u,{replace:l,state:s,target:c,preventScrollReset:f,relative:i,unstable_viewTransition:h});function d(m){n&&n(m),m.defaultPrevented||p(m)}return E.createElement("a",po({},g,{href:y||P,onClick:w||o?n:d,ref:r,target:c}))}),Tt=E.forwardRef(function(t,r){let{"aria-current":n="page",caseSensitive:i=!1,className:o="",end:l=!1,style:s,to:c,unstable_viewTransition:u,children:f}=t,h=Fd(t,Dp),g=Oo(c,{relative:h.relative}),v=ti(),y=E.useContext(bd),{navigator:w}=E.useContext(pr),P=y!=null&&Qp(g)&&u===!0,p=w.encodeLocation?w.encodeLocation(g).pathname:g.pathname,d=v.pathname,m=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;i||(d=d.toLowerCase(),m=m?m.toLowerCase():null,p=p.toLowerCase());let x=d===p||!l&&d.startsWith(p)&&d.charAt(p.length)==="/",k=m!=null&&(m===p||!l&&m.startsWith(p)&&m.charAt(p.length)==="/"),j={isActive:x,isPending:k,isTransitioning:P},S=x?n:void 0,T;typeof o=="function"?T=o(j):T=[o,x?"active":null,k?"pending":null,P?"transitioning":null].filter(Boolean).join(" ");let F=typeof s=="function"?s(j):s;return E.createElement(Vp,po({},h,{"aria-current":S,className:T,ref:r,style:F,to:c,unstable_viewTransition:u}),typeof f=="function"?f(j):f)});var wa;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(wa||(wa={}));var Kc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Kc||(Kc={}));function Wp(e){let t=E.useContext(bo);return t||J(!1),t}function Zp(e,t){let{target:r,replace:n,state:i,preventScrollReset:o,relative:l,unstable_viewTransition:s}=t===void 0?{}:t,c=mr(),u=ti(),f=Oo(e,{relative:l});return E.useCallback(h=>{if(Op(h,r)){h.preventDefault();let g=n!==void 0?n:co(u)===co(f);c(e,{replace:g,state:i,preventScrollReset:o,relative:l,unstable_viewTransition:s})}},[u,c,f,n,i,r,e,o,l,s])}function Qp(e,t){t===void 0&&(t={});let r=E.useContext(Fp);r==null&&J(!1);let{basename:n}=Wp(wa.useViewTransitionState),i=Oo(e,{relative:t.relative});if(!r.isTransitioning)return!1;let o=Wn(r.currentLocation.pathname,n)||r.currentLocation.pathname,l=Wn(r.nextLocation.pathname,n)||r.nextLocation.pathname;return ya(i.pathname,l)!=null||ya(i.pathname,o)!=null}var le=function(){return le=Object.assign||function(t){for(var r,n=1,i=arguments.length;n<i;n++){r=arguments[n];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},le.apply(this,arguments)};function Zn(e,t,r){if(r||arguments.length===2)for(var n=0,i=t.length,o;n<i;n++)(o||!(n in t))&&(o||(o=Array.prototype.slice.call(t,0,n)),o[n]=t[n]);return e.concat(o||Array.prototype.slice.call(t))}var U="-ms-",Pn="-moz-",$="-webkit-",Ad="comm",$o="rule",Ts="decl",Xp="@import",Bd="@keyframes",Kp="@layer",Yp=Math.abs,zs=String.fromCharCode,ka=Object.assign;function Gp(e,t){return oe(e,0)^45?(((t<<2^oe(e,0))<<2^oe(e,1))<<2^oe(e,2))<<2^oe(e,3):0}function Ud(e){return e.trim()}function ut(e,t){return(e=t.exec(e))?e[0]:e}function L(e,t,r){return e.replace(t,r)}function bi(e,t){return e.indexOf(t)}function oe(e,t){return e.charCodeAt(t)|0}function Qr(e,t,r){return e.slice(t,r)}function tt(e){return e.length}function Hd(e){return e.length}function gn(e,t){return t.push(e),e}function Jp(e,t){return e.map(t).join("")}function Yc(e,t){return e.filter(function(r){return!ut(r,t)})}var Do=1,Xr=1,Vd=0,Ue=0,ee=0,rn="";function Fo(e,t,r,n,i,o,l,s){return{value:e,root:t,parent:r,type:n,props:i,children:o,line:Do,column:Xr,length:l,return:"",siblings:s}}function Ct(e,t){return ka(Fo("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function yr(e){for(;e.root;)e=Ct(e.root,{children:[e]});gn(e,e.siblings)}function qp(){return ee}function eh(){return ee=Ue>0?oe(rn,--Ue):0,Xr--,ee===10&&(Xr=1,Do--),ee}function Ye(){return ee=Ue<Vd?oe(rn,Ue++):0,Xr++,ee===10&&(Xr=1,Do++),ee}function nr(){return oe(rn,Ue)}function Ii(){return Ue}function Ao(e,t){return Qr(rn,e,t)}function ja(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function th(e){return Do=Xr=1,Vd=tt(rn=e),Ue=0,[]}function rh(e){return rn="",e}function gl(e){return Ud(Ao(Ue-1,Sa(e===91?e+2:e===40?e+1:e)))}function nh(e){for(;(ee=nr())&&ee<33;)Ye();return ja(e)>2||ja(ee)>3?"":" "}function ih(e,t){for(;--t&&Ye()&&!(ee<48||ee>102||ee>57&&ee<65||ee>70&&ee<97););return Ao(e,Ii()+(t<6&&nr()==32&&Ye()==32))}function Sa(e){for(;Ye();)switch(ee){case e:return Ue;case 34:case 39:e!==34&&e!==39&&Sa(ee);break;case 40:e===41&&Sa(e);break;case 92:Ye();break}return Ue}function oh(e,t){for(;Ye()&&e+ee!==47+10;)if(e+ee===42+42&&nr()===47)break;return"/*"+Ao(t,Ue-1)+"*"+zs(e===47?e:Ye())}function lh(e){for(;!ja(nr());)Ye();return Ao(e,Ue)}function ah(e){return rh(Oi("",null,null,null,[""],e=th(e),0,[0],e))}function Oi(e,t,r,n,i,o,l,s,c){for(var u=0,f=0,h=l,g=0,v=0,y=0,w=1,P=1,p=1,d=0,m="",x=i,k=o,j=n,S=m;P;)switch(y=d,d=Ye()){case 40:if(y!=108&&oe(S,h-1)==58){bi(S+=L(gl(d),"&","&\f"),"&\f")!=-1&&(p=-1);break}case 34:case 39:case 91:S+=gl(d);break;case 9:case 10:case 13:case 32:S+=nh(y);break;case 92:S+=ih(Ii()-1,7);continue;case 47:switch(nr()){case 42:case 47:gn(sh(oh(Ye(),Ii()),t,r,c),c);break;default:S+="/"}break;case 123*w:s[u++]=tt(S)*p;case 125*w:case 59:case 0:switch(d){case 0:case 125:P=0;case 59+f:p==-1&&(S=L(S,/\f/g,"")),v>0&&tt(S)-h&&gn(v>32?Jc(S+";",n,r,h-1,c):Jc(L(S," ","")+";",n,r,h-2,c),c);break;case 59:S+=";";default:if(gn(j=Gc(S,t,r,u,f,i,s,m,x=[],k=[],h,o),o),d===123)if(f===0)Oi(S,t,j,j,x,o,h,s,k);else switch(g===99&&oe(S,3)===110?100:g){case 100:case 108:case 109:case 115:Oi(e,j,j,n&&gn(Gc(e,j,j,0,0,i,s,m,i,x=[],h,k),k),i,k,h,s,n?x:k);break;default:Oi(S,j,j,j,[""],k,0,s,k)}}u=f=v=0,w=p=1,m=S="",h=l;break;case 58:h=1+tt(S),v=y;default:if(w<1){if(d==123)--w;else if(d==125&&w++==0&&eh()==125)continue}switch(S+=zs(d),d*w){case 38:p=f>0?1:(S+="\f",-1);break;case 44:s[u++]=(tt(S)-1)*p,p=1;break;case 64:nr()===45&&(S+=gl(Ye())),g=nr(),f=h=tt(m=S+=lh(Ii())),d++;break;case 45:y===45&&tt(S)==2&&(w=0)}}return o}function Gc(e,t,r,n,i,o,l,s,c,u,f,h){for(var g=i-1,v=i===0?o:[""],y=Hd(v),w=0,P=0,p=0;w<n;++w)for(var d=0,m=Qr(e,g+1,g=Yp(P=l[w])),x=e;d<y;++d)(x=Ud(P>0?v[d]+" "+m:L(m,/&\f/g,v[d])))&&(c[p++]=x);return Fo(e,t,r,i===0?$o:s,c,u,f,h)}function sh(e,t,r,n){return Fo(e,t,r,Ad,zs(qp()),Qr(e,2,-2),0,n)}function Jc(e,t,r,n,i){return Fo(e,t,r,Ts,Qr(e,0,n),Qr(e,n+1,-1),n,i)}function Wd(e,t,r){switch(Gp(e,t)){case 5103:return $+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return $+e+e;case 4789:return Pn+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return $+e+Pn+e+U+e+e;case 5936:switch(oe(e,t+11)){case 114:return $+e+U+L(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return $+e+U+L(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return $+e+U+L(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return $+e+U+e+e;case 6165:return $+e+U+"flex-"+e+e;case 5187:return $+e+L(e,/(\w+).+(:[^]+)/,$+"box-$1$2"+U+"flex-$1$2")+e;case 5443:return $+e+U+"flex-item-"+L(e,/flex-|-self/g,"")+(ut(e,/flex-|baseline/)?"":U+"grid-row-"+L(e,/flex-|-self/g,""))+e;case 4675:return $+e+U+"flex-line-pack"+L(e,/align-content|flex-|-self/g,"")+e;case 5548:return $+e+U+L(e,"shrink","negative")+e;case 5292:return $+e+U+L(e,"basis","preferred-size")+e;case 6060:return $+"box-"+L(e,"-grow","")+$+e+U+L(e,"grow","positive")+e;case 4554:return $+L(e,/([^-])(transform)/g,"$1"+$+"$2")+e;case 6187:return L(L(L(e,/(zoom-|grab)/,$+"$1"),/(image-set)/,$+"$1"),e,"")+e;case 5495:case 3959:return L(e,/(image-set\([^]*)/,$+"$1$`$1");case 4968:return L(L(e,/(.+:)(flex-)?(.*)/,$+"box-pack:$3"+U+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+$+e+e;case 4200:if(!ut(e,/flex-|baseline/))return U+"grid-column-align"+Qr(e,t)+e;break;case 2592:case 3360:return U+L(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(n,i){return t=i,ut(n.props,/grid-\w+-end/)})?~bi(e+(r=r[t].value),"span")?e:U+L(e,"-start","")+e+U+"grid-row-span:"+(~bi(r,"span")?ut(r,/\d+/):+ut(r,/\d+/)-+ut(e,/\d+/))+";":U+L(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(n){return ut(n.props,/grid-\w+-start/)})?e:U+L(L(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return L(e,/(.+)-inline(.+)/,$+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(tt(e)-1-t>6)switch(oe(e,t+1)){case 109:if(oe(e,t+4)!==45)break;case 102:return L(e,/(.+:)(.+)-([^]+)/,"$1"+$+"$2-$3$1"+Pn+(oe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~bi(e,"stretch")?Wd(L(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return L(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,i,o,l,s,c,u){return U+i+":"+o+u+(l?U+i+"-span:"+(s?c:+c-+o)+u:"")+e});case 4949:if(oe(e,t+6)===121)return L(e,":",":"+$)+e;break;case 6444:switch(oe(e,oe(e,14)===45?18:11)){case 120:return L(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+$+(oe(e,14)===45?"inline-":"")+"box$3$1"+$+"$2$3$1"+U+"$2box$3")+e;case 100:return L(e,":",":"+U)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return L(e,"scroll-","scroll-snap-")+e}return e}function ho(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function ch(e,t,r,n){switch(e.type){case Kp:if(e.children.length)break;case Xp:case Ts:return e.return=e.return||e.value;case Ad:return"";case Bd:return e.return=e.value+"{"+ho(e.children,n)+"}";case $o:if(!tt(e.value=e.props.join(",")))return""}return tt(r=ho(e.children,n))?e.return=e.value+"{"+r+"}":""}function uh(e){var t=Hd(e);return function(r,n,i,o){for(var l="",s=0;s<t;s++)l+=e[s](r,n,i,o)||"";return l}}function dh(e){return function(t){t.root||(t=t.return)&&e(t)}}function fh(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case Ts:e.return=Wd(e.value,e.length,r);return;case Bd:return ho([Ct(e,{value:L(e.value,"@","@"+$)})],n);case $o:if(e.length)return Jp(r=e.props,function(i){switch(ut(i,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":yr(Ct(e,{props:[L(i,/:(read-\w+)/,":"+Pn+"$1")]})),yr(Ct(e,{props:[i]})),ka(e,{props:Yc(r,n)});break;case"::placeholder":yr(Ct(e,{props:[L(i,/:(plac\w+)/,":"+$+"input-$1")]})),yr(Ct(e,{props:[L(i,/:(plac\w+)/,":"+Pn+"$1")]})),yr(Ct(e,{props:[L(i,/:(plac\w+)/,U+"input-$1")]})),yr(Ct(e,{props:[i]})),ka(e,{props:Yc(r,n)});break}return""})}}var ph={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Kr=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Rs=typeof window<"u"&&"HTMLElement"in window,hh=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),mh={},Bo=Object.freeze([]),Yr=Object.freeze({});function Zd(e,t,r){return r===void 0&&(r=Yr),e.theme!==r.theme&&e.theme||t||r.theme}var Qd=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),gh=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,vh=/(^-|-$)/g;function qc(e){return e.replace(gh,"-").replace(vh,"")}var yh=/(a)(d)/gi,eu=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ca(e){var t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=eu(t%52)+r;return(eu(t%52)+r).replace(yh,"$1-$2")}var vl,Lr=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},Xd=function(e){return Lr(5381,e)};function Kd(e){return Ca(Xd(e)>>>0)}function xh(e){return e.displayName||e.name||"Component"}function yl(e){return typeof e=="string"&&!0}var Yd=typeof Symbol=="function"&&Symbol.for,Gd=Yd?Symbol.for("react.memo"):60115,wh=Yd?Symbol.for("react.forward_ref"):60112,kh={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},jh={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Jd={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Sh=((vl={})[wh]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},vl[Gd]=Jd,vl);function tu(e){return("type"in(t=e)&&t.type.$$typeof)===Gd?Jd:"$$typeof"in e?Sh[e.$$typeof]:kh;var t}var Ch=Object.defineProperty,Eh=Object.getOwnPropertyNames,ru=Object.getOwnPropertySymbols,Ph=Object.getOwnPropertyDescriptor,Nh=Object.getPrototypeOf,nu=Object.prototype;function qd(e,t,r){if(typeof t!="string"){if(nu){var n=Nh(t);n&&n!==nu&&qd(e,n,r)}var i=Eh(t);ru&&(i=i.concat(ru(t)));for(var o=tu(e),l=tu(t),s=0;s<i.length;++s){var c=i[s];if(!(c in jh||r&&r[c]||l&&c in l||o&&c in o)){var u=Ph(t,c);try{Ch(e,c,u)}catch{}}}}return e}function cr(e){return typeof e=="function"}function Ls(e){return typeof e=="object"&&"styledComponentId"in e}function er(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Ea(e,t){if(e.length===0)return"";for(var r=e[0],n=1;n<e.length;n++)r+=t?t+e[n]:e[n];return r}function Qn(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Pa(e,t,r){if(r===void 0&&(r=!1),!r&&!Qn(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=Pa(e[n],t[n]);else if(Qn(t))for(var n in t)e[n]=Pa(e[n],t[n]);return e}function Ms(e,t){Object.defineProperty(e,"toString",{value:t})}function ur(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var _h=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var r=0,n=0;n<t;n++)r+=this.groupSizes[n];return r},e.prototype.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var n=this.groupSizes,i=n.length,o=i;t>=o;)if((o<<=1)<0)throw ur(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var l=i;l<o;l++)this.groupSizes[l]=0}for(var s=this.indexOfGroup(t+1),c=(l=0,r.length);l<c;l++)this.tag.insertRule(s,r[l])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],n=this.indexOfGroup(t),i=n+r;this.groupSizes[t]=0;for(var o=n;o<i;o++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var n=this.groupSizes[t],i=this.indexOfGroup(t),o=i+n,l=i;l<o;l++)r+="".concat(this.tag.getRule(l)).concat(`/*!sc*/
`);return r},e}(),$i=new Map,mo=new Map,xl=1,ki=function(e){if($i.has(e))return $i.get(e);for(;mo.has(xl);)xl++;var t=xl++;return $i.set(e,t),mo.set(t,e),t},Th=function(e,t){$i.set(e,t),mo.set(t,e)},zh="style[".concat(Kr,"][").concat("data-styled-version",'="').concat("6.1.0",'"]'),Rh=new RegExp("^".concat(Kr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Lh=function(e,t,r){for(var n,i=r.split(","),o=0,l=i.length;o<l;o++)(n=i[o])&&e.registerName(t,n)},Mh=function(e,t){for(var r,n=((r=t.textContent)!==null&&r!==void 0?r:"").split(`/*!sc*/
`),i=[],o=0,l=n.length;o<l;o++){var s=n[o].trim();if(s){var c=s.match(Rh);if(c){var u=0|parseInt(c[1],10),f=c[2];u!==0&&(Th(f,u),Lh(e,f,c[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(s)}}};function bh(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var e0=function(e){var t=document.head,r=e||t,n=document.createElement("style"),i=function(s){var c=Array.from(s.querySelectorAll("style[".concat(Kr,"]")));return c[c.length-1]}(r),o=i!==void 0?i.nextSibling:null;n.setAttribute(Kr,"active"),n.setAttribute("data-styled-version","6.1.0");var l=bh();return l&&n.setAttribute("nonce",l),r.insertBefore(n,o),n},Ih=function(){function e(t){this.element=e0(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var n=document.styleSheets,i=0,o=n.length;i<o;i++){var l=n[i];if(l.ownerNode===r)return l}throw ur(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var r=this.sheet.cssRules[t];return r&&r.cssText?r.cssText:""},e}(),Oh=function(){function e(t){this.element=e0(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,r){if(t<=this.length&&t>=0){var n=document.createTextNode(r);return this.element.insertBefore(n,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),$h=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),iu=Rs,Dh={isServer:!Rs,useCSSOMInjection:!hh},go=function(){function e(t,r,n){t===void 0&&(t=Yr),r===void 0&&(r={});var i=this;this.options=le(le({},Dh),t),this.gs=r,this.names=new Map(n),this.server=!!t.isServer,!this.server&&Rs&&iu&&(iu=!1,function(o){for(var l=document.querySelectorAll(zh),s=0,c=l.length;s<c;s++){var u=l[s];u&&u.getAttribute(Kr)!=="active"&&(Mh(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Ms(this,function(){return function(o){for(var l=o.getTag(),s=l.length,c="",u=function(h){var g=function(p){return mo.get(p)}(h);if(g===void 0)return"continue";var v=o.names.get(g),y=l.getGroup(h);if(v===void 0||y.length===0)return"continue";var w="".concat(Kr,".g").concat(h,'[id="').concat(g,'"]'),P="";v!==void 0&&v.forEach(function(p){p.length>0&&(P+="".concat(p,","))}),c+="".concat(y).concat(w,'{content:"').concat(P,'"}').concat(`/*!sc*/
`)},f=0;f<s;f++)u(f);return c}(i)})}return e.registerId=function(t){return ki(t)},e.prototype.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new e(le(le({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(r){var n=r.useCSSOMInjection,i=r.target;return r.isServer?new $h(i):n?new Ih(i):new Oh(i)}(this.options),new _h(t)));var t},e.prototype.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},e.prototype.registerName=function(t,r){if(ki(t),this.names.has(t))this.names.get(t).add(r);else{var n=new Set;n.add(r),this.names.set(t,n)}},e.prototype.insertRules=function(t,r,n){this.registerName(t,r),this.getTag().insertRules(ki(t),n)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(ki(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Fh=/&/g,Ah=/^\s*\/\/.*$/gm;function t0(e,t){return e.map(function(r){return r.type==="rule"&&(r.value="".concat(t," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(t," ")),r.props=r.props.map(function(n){return"".concat(t," ").concat(n)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=t0(r.children,t)),r})}function Bh(e){var t,r,n,i=e===void 0?Yr:e,o=i.options,l=o===void 0?Yr:o,s=i.plugins,c=s===void 0?Bo:s,u=function(g,v,y){return y===r||y.startsWith(r)&&y.endsWith(r)&&y.replaceAll(r,"").length>0?".".concat(t):g},f=c.slice();f.push(function(g){g.type===$o&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(Fh,r).replace(n,u))}),l.prefix&&f.push(fh),f.push(ch);var h=function(g,v,y,w){v===void 0&&(v=""),y===void 0&&(y=""),w===void 0&&(w="&"),t=w,r=v,n=new RegExp("\\".concat(r,"\\b"),"g");var P=g.replace(Ah,""),p=ah(y||v?"".concat(y," ").concat(v," { ").concat(P," }"):P);l.namespace&&(p=t0(p,l.namespace));var d=[];return ho(p,uh(f.concat(dh(function(m){return d.push(m)})))),d};return h.hash=c.length?c.reduce(function(g,v){return v.name||ur(15),Lr(g,v.name)},5381).toString():"",h}var Uh=new go,Na=Bh(),r0=H.createContext({shouldForwardProp:void 0,styleSheet:Uh,stylis:Na});r0.Consumer;H.createContext(void 0);function _a(){return E.useContext(r0)}var Hh=function(){function e(t,r){var n=this;this.inject=function(i,o){o===void 0&&(o=Na);var l=n.name+o.hash;i.hasNameForId(n.id,l)||i.insertRules(n.id,l,o(n.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=r,Ms(this,function(){throw ur(12,String(n.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Na),this.name+t.hash},e}(),Vh=function(e){return e>="A"&&e<="Z"};function ou(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(r===1&&n==="-"&&e[0]==="-")return e;Vh(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var n0=function(e){return e==null||e===!1||e===""},i0=function(e){var t,r,n=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!n0(o)&&(Array.isArray(o)&&o.isCss||cr(o)?n.push("".concat(ou(i),":"),o,";"):Qn(o)?n.push.apply(n,Zn(Zn(["".concat(i," {")],i0(o),!1),["}"],!1)):n.push("".concat(ou(i),": ").concat((t=i,(r=o)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||t in ph||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function Ut(e,t,r,n){if(n0(e))return[];if(Ls(e))return[".".concat(e.styledComponentId)];if(cr(e)){if(!cr(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return Ut(i,t,r,n)}var o;return e instanceof Hh?r?(e.inject(r,n),[e.getName(n)]):[e]:Qn(e)?i0(e):Array.isArray(e)?Array.prototype.concat.apply(Bo,e.map(function(l){return Ut(l,t,r,n)})):[e.toString()]}function o0(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(cr(r)&&!Ls(r))return!1}return!0}var Wh=Xd("6.1.0"),Zh=function(){function e(t,r,n){this.rules=t,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&o0(t),this.componentId=r,this.baseHash=Lr(Wh,r),this.baseStyle=n,go.registerId(r)}return e.prototype.generateAndInjectStyles=function(t,r,n){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,r,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))i=er(i,this.staticRulesId);else{var o=Ea(Ut(this.rules,t,r,n)),l=Ca(Lr(this.baseHash,o)>>>0);if(!r.hasNameForId(this.componentId,l)){var s=n(o,".".concat(l),void 0,this.componentId);r.insertRules(this.componentId,l,s)}i=er(i,l),this.staticRulesId=l}else{for(var c=Lr(this.baseHash,n.hash),u="",f=0;f<this.rules.length;f++){var h=this.rules[f];if(typeof h=="string")u+=h;else if(h){var g=Ea(Ut(h,t,r,n));c=Lr(c,g+f),u+=g}}if(u){var v=Ca(c>>>0);r.hasNameForId(this.componentId,v)||r.insertRules(this.componentId,v,n(u,".".concat(v),void 0,this.componentId)),i=er(i,v)}}return i},e}(),Gr=H.createContext(void 0);Gr.Consumer;function Qh(e){var t=H.useContext(Gr),r=E.useMemo(function(){return function(n,i){if(!n)throw ur(14);if(cr(n)){var o=n(i);return o}if(Array.isArray(n)||typeof n!="object")throw ur(8);return i?le(le({},i),n):n}(e.theme,t)},[e.theme,t]);return e.children?H.createElement(Gr.Provider,{value:r},e.children):null}var wl={};function Xh(e,t,r){var n=Ls(e),i=e,o=!yl(e),l=t.attrs,s=l===void 0?Bo:l,c=t.componentId,u=c===void 0?function(m,x){var k=typeof m!="string"?"sc":qc(m);wl[k]=(wl[k]||0)+1;var j="".concat(k,"-").concat(Kd("6.1.0"+k+wl[k]));return x?"".concat(x,"-").concat(j):j}(t.displayName,t.parentComponentId):c,f=t.displayName;f===void 0&&function(m){return yl(m)?"styled.".concat(m):"Styled(".concat(xh(m),")")}(e);var h=t.displayName&&t.componentId?"".concat(qc(t.displayName),"-").concat(t.componentId):t.componentId||u,g=n&&i.attrs?i.attrs.concat(s).filter(Boolean):s,v=t.shouldForwardProp;if(n&&i.shouldForwardProp){var y=i.shouldForwardProp;if(t.shouldForwardProp){var w=t.shouldForwardProp;v=function(m,x){return y(m,x)&&w(m,x)}}else v=y}var P=new Zh(r,h,n?i.componentStyle:void 0);function p(m,x){return function(k,j,S){var T=k.attrs,F=k.componentStyle,M=k.defaultProps,ge=k.foldedComponentIds,ot=k.styledComponentId,lt=k.target,gr=H.useContext(Gr),He=_a(),at=k.shouldForwardProp||He.shouldForwardProp,ve=function(st,Ne,wt){for(var _e,Ie=le(le({},Ne),{className:void 0,theme:wt}),Uo=0;Uo<st.length;Uo+=1){var ni=cr(_e=st[Uo])?_e(Ie):_e;for(var kt in ni)Ie[kt]=kt==="className"?er(Ie[kt],ni[kt]):kt==="style"?le(le({},Ie[kt]),ni[kt]):ni[kt]}return Ne.className&&(Ie.className=er(Ie.className,Ne.className)),Ie}(T,j,Zd(j,gr,M)||Yr),N=ve.as||lt,z={};for(var R in ve)ve[R]===void 0||R[0]==="$"||R==="as"||R==="theme"||(R==="forwardedAs"?z.as=ve.forwardedAs:at&&!at(R,N)||(z[R]=ve[R]));var W=function(st,Ne){var wt=_a(),_e=st.generateAndInjectStyles(Ne,wt.styleSheet,wt.stylis);return _e}(F,ve),Y=er(ge,ot);return W&&(Y+=" "+W),ve.className&&(Y+=" "+ve.className),z[yl(N)&&!Qd.has(N)?"class":"className"]=Y,z.ref=S,E.createElement(N,z)}(d,m,x)}var d=H.forwardRef(p);return d.attrs=g,d.componentStyle=P,d.shouldForwardProp=v,d.foldedComponentIds=n?er(i.foldedComponentIds,i.styledComponentId):"",d.styledComponentId=h,d.target=n?i.target:e,Object.defineProperty(d,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(m){this._foldedDefaultProps=n?function(x){for(var k=[],j=1;j<arguments.length;j++)k[j-1]=arguments[j];for(var S=0,T=k;S<T.length;S++)Pa(x,T[S],!0);return x}({},i.defaultProps,m):m}}),Ms(d,function(){return".".concat(d.styledComponentId)}),o&&qd(d,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),d}function lu(e,t){for(var r=[e[0]],n=0,i=t.length;n<i;n+=1)r.push(t[n],e[n+1]);return r}var au=function(e){return Object.assign(e,{isCss:!0})};function l0(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(cr(e)||Qn(e)){var n=e;return au(Ut(lu(Bo,Zn([n],t,!0))))}var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?Ut(i):au(Ut(lu(i,t)))}function Ta(e,t,r){if(r===void 0&&(r=Yr),!t)throw ur(1,t);var n=function(i){for(var o=[],l=1;l<arguments.length;l++)o[l-1]=arguments[l];return e(t,r,l0.apply(void 0,Zn([i],o,!1)))};return n.attrs=function(i){return Ta(e,t,le(le({},r),{attrs:Array.prototype.concat(r.attrs,i).filter(Boolean)}))},n.withConfig=function(i){return Ta(e,t,le(le({},r),i))},n}var a0=function(e){return Ta(Xh,e)},I=a0;Qd.forEach(function(e){I[e]=a0(e)});var Kh=function(){function e(t,r){this.rules=t,this.componentId=r,this.isStatic=o0(t),go.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,r,n,i){var o=i(Ea(Ut(this.rules,r,n,i)),""),l=this.componentId+t;n.insertRules(l,l,o)},e.prototype.removeStyles=function(t,r){r.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,r,n,i){t>2&&go.registerId(this.componentId+t),this.removeStyles(t,n),this.createStyles(t,r,n,i)},e}();function Yh(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=l0.apply(void 0,Zn([e],t,!1)),i="sc-global-".concat(Kd(JSON.stringify(n))),o=new Kh(n,i),l=function(c){var u=_a(),f=H.useContext(Gr),h=H.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&s(h,c,u.styleSheet,f,u.stylis),H.useLayoutEffect(function(){if(!u.styleSheet.server)return s(h,c,u.styleSheet,f,u.stylis),function(){return o.removeStyles(h,u.styleSheet)}},[h,c,u.styleSheet,f,u.stylis]),null};function s(c,u,f,h,g){if(o.isStatic)o.renderStyles(c,mh,f,g);else{var v=le(le({},u),{theme:Zd(u,h,l.defaultProps)});o.renderStyles(c,v,f,g)}}return H.memo(l)}function za(){return za=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},za.apply(this,arguments)}var Gh=H.createElement("svg",{viewBox:"-2 -5 14 20",height:"100%",width:"100%",style:{position:"absolute",top:0}},H.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"})),Jh=H.createElement("svg",{height:"100%",width:"100%",viewBox:"-2 -5 17 21",style:{position:"absolute",top:0}},H.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}));function su(e){if(e.length===7)return e;for(var t="#",r=1;r<4;r+=1)t+=e[r]+e[r];return t}function cu(e,t,r,n,i){return function(o,l,s,c,u){var f=(o-s)/(l-s);if(f===0)return c;if(f===1)return u;for(var h="#",g=1;g<6;g+=2){var v=parseInt(c.substr(g,2),16),y=parseInt(u.substr(g,2),16),w=Math.round((1-f)*v+f*y).toString(16);w.length===1&&(w="0"+w),h+=w}return h}(e,t,r,su(n),su(i))}var s0=function(e){function t(r){e.call(this,r);var n=r.height,i=r.width,o=r.checked;this.t=r.handleDiameter||n-2,this.i=Math.max(i-n,i-(n+this.t)/2),this.o=Math.max(0,(n-this.t)/2),this.state={h:o?this.i:this.o},this.l=0,this.u=0,this.p=this.p.bind(this),this.v=this.v.bind(this),this.g=this.g.bind(this),this.k=this.k.bind(this),this.m=this.m.bind(this),this.M=this.M.bind(this),this.T=this.T.bind(this),this.$=this.$.bind(this),this.C=this.C.bind(this),this.D=this.D.bind(this),this.O=this.O.bind(this),this.S=this.S.bind(this)}return e&&(t.__proto__=e),(t.prototype=Object.create(e&&e.prototype)).constructor=t,t.prototype.componentDidMount=function(){this.W=!0},t.prototype.componentDidUpdate=function(r){r.checked!==this.props.checked&&this.setState({h:this.props.checked?this.i:this.o})},t.prototype.componentWillUnmount=function(){this.W=!1},t.prototype.I=function(r){this.H.focus(),this.setState({R:r,j:!0,B:Date.now()})},t.prototype.L=function(r){var n=this.state,i=n.R,o=n.h,l=(this.props.checked?this.i:this.o)+r-i;n.N||r===i||this.setState({N:!0});var s=Math.min(this.i,Math.max(this.o,l));s!==o&&this.setState({h:s})},t.prototype.U=function(r){var n=this.state,i=n.h,o=n.N,l=n.B,s=this.props.checked,c=(this.i+this.o)/2;this.setState({h:this.props.checked?this.i:this.o});var u=Date.now()-l;(!o||u<250||s&&i<=c||!s&&i>=c)&&this.A(r),this.W&&this.setState({N:!1,j:!1}),this.l=Date.now()},t.prototype.p=function(r){r.preventDefault(),typeof r.button=="number"&&r.button!==0||(this.I(r.clientX),window.addEventListener("mousemove",this.v),window.addEventListener("mouseup",this.g))},t.prototype.v=function(r){r.preventDefault(),this.L(r.clientX)},t.prototype.g=function(r){this.U(r),window.removeEventListener("mousemove",this.v),window.removeEventListener("mouseup",this.g)},t.prototype.k=function(r){this.X=null,this.I(r.touches[0].clientX)},t.prototype.m=function(r){this.L(r.touches[0].clientX)},t.prototype.M=function(r){r.preventDefault(),this.U(r)},t.prototype.$=function(r){Date.now()-this.l>50&&(this.A(r),Date.now()-this.u>50&&this.W&&this.setState({j:!1}))},t.prototype.C=function(){this.u=Date.now()},t.prototype.D=function(){this.setState({j:!0})},t.prototype.O=function(){this.setState({j:!1})},t.prototype.S=function(r){this.H=r},t.prototype.T=function(r){r.preventDefault(),this.H.focus(),this.A(r),this.W&&this.setState({j:!1})},t.prototype.A=function(r){var n=this.props;(0,n.onChange)(!n.checked,r,n.id)},t.prototype.render=function(){var r=this.props,n=r.checked,i=r.disabled,o=r.className,l=r.offColor,s=r.onColor,c=r.offHandleColor,u=r.onHandleColor,f=r.checkedIcon,h=r.uncheckedIcon,g=r.checkedHandleIcon,v=r.uncheckedHandleIcon,y=r.boxShadow,w=r.activeBoxShadow,P=r.height,p=r.width,d=r.borderRadius,m=function(He,at){var ve={};for(var N in He)Object.prototype.hasOwnProperty.call(He,N)&&at.indexOf(N)===-1&&(ve[N]=He[N]);return ve}(r,["checked","disabled","className","offColor","onColor","offHandleColor","onHandleColor","checkedIcon","uncheckedIcon","checkedHandleIcon","uncheckedHandleIcon","boxShadow","activeBoxShadow","height","width","borderRadius","handleDiameter"]),x=this.state,k=x.h,j=x.N,S=x.j,T={position:"relative",display:"inline-block",textAlign:"left",opacity:i?.5:1,direction:"ltr",borderRadius:P/2,WebkitTransition:"opacity 0.25s",MozTransition:"opacity 0.25s",transition:"opacity 0.25s",touchAction:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",userSelect:"none"},F={height:P,width:p,margin:Math.max(0,(this.t-P)/2),position:"relative",background:cu(k,this.i,this.o,l,s),borderRadius:typeof d=="number"?d:P/2,cursor:i?"default":"pointer",WebkitTransition:j?null:"background 0.25s",MozTransition:j?null:"background 0.25s",transition:j?null:"background 0.25s"},M={height:P,width:Math.min(1.5*P,p-(this.t+P)/2+1),position:"relative",opacity:(k-this.o)/(this.i-this.o),pointerEvents:"none",WebkitTransition:j?null:"opacity 0.25s",MozTransition:j?null:"opacity 0.25s",transition:j?null:"opacity 0.25s"},ge={height:P,width:Math.min(1.5*P,p-(this.t+P)/2+1),position:"absolute",opacity:1-(k-this.o)/(this.i-this.o),right:0,top:0,pointerEvents:"none",WebkitTransition:j?null:"opacity 0.25s",MozTransition:j?null:"opacity 0.25s",transition:j?null:"opacity 0.25s"},ot={height:this.t,width:this.t,background:cu(k,this.i,this.o,c,u),display:"inline-block",cursor:i?"default":"pointer",borderRadius:typeof d=="number"?d-1:"50%",position:"absolute",transform:"translateX("+k+"px)",top:Math.max(0,(P-this.t)/2),outline:0,boxShadow:S?w:y,border:0,WebkitTransition:j?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",MozTransition:j?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",transition:j?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s"},lt={height:this.t,width:this.t,opacity:Math.max(2*(1-(k-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:j?null:"opacity 0.25s",MozTransition:j?null:"opacity 0.25s",transition:j?null:"opacity 0.25s"},gr={height:this.t,width:this.t,opacity:Math.max(2*((k-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:j?null:"opacity 0.25s",MozTransition:j?null:"opacity 0.25s",transition:j?null:"opacity 0.25s"};return H.createElement("div",{className:o,style:T},H.createElement("div",{className:"react-switch-bg",style:F,onClick:i?null:this.T,onMouseDown:function(He){return He.preventDefault()}},f&&H.createElement("div",{style:M},f),h&&H.createElement("div",{style:ge},h)),H.createElement("div",{className:"react-switch-handle",style:ot,onClick:function(He){return He.preventDefault()},onMouseDown:i?null:this.p,onTouchStart:i?null:this.k,onTouchMove:i?null:this.m,onTouchEnd:i?null:this.M,onTouchCancel:i?null:this.O},v&&H.createElement("div",{style:lt},v),g&&H.createElement("div",{style:gr},g)),H.createElement("input",za({},{type:"checkbox",role:"switch","aria-checked":n,checked:n,disabled:i,style:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",width:1}},m,{ref:this.S,onFocus:this.D,onBlur:this.O,onKeyUp:this.C,onChange:this.$})))},t}(E.Component);s0.defaultProps={disabled:!1,offColor:"#888",onColor:"#080",offHandleColor:"#fff",onHandleColor:"#fff",uncheckedIcon:Gh,checkedIcon:Jh,boxShadow:null,activeBoxShadow:"0 0 2px 3px #3bf",height:28,width:56};function vo(){return vo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},vo.apply(this,arguments)}function qh(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Xn(e,t){return Xn=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},Xn(e,t)}function em(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Xn(e,t)}function Ra(e){return Ra=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},Ra(e)}function tm(e){try{return Function.toString.call(e).indexOf("[native code]")!==-1}catch{return typeof e=="function"}}function rm(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Di(e,t,r){return rm()?Di=Reflect.construct.bind():Di=function(i,o,l){var s=[null];s.push.apply(s,o);var c=Function.bind.apply(i,s),u=new c;return l&&Xn(u,l.prototype),u},Di.apply(null,arguments)}function La(e){var t=typeof Map=="function"?new Map:void 0;return La=function(n){if(n===null||!tm(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(typeof t<"u"){if(t.has(n))return t.get(n);t.set(n,i)}function i(){return Di(n,arguments,Ra(this).constructor)}return i.prototype=Object.create(n.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),Xn(i,n)},La(e)}var Mr=function(e){em(t,e);function t(r){var n;return n=e.call(this,"An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#"+r+" for more information.")||this,qh(n)}return t}(La(Error));function kl(e){return Math.round(e*255)}function nm(e,t,r){return kl(e)+","+kl(t)+","+kl(r)}function uu(e,t,r,n){if(n===void 0&&(n=nm),t===0)return n(r,r,r);var i=(e%360+360)%360/60,o=(1-Math.abs(2*r-1))*t,l=o*(1-Math.abs(i%2-1)),s=0,c=0,u=0;i>=0&&i<1?(s=o,c=l):i>=1&&i<2?(s=l,c=o):i>=2&&i<3?(c=o,u=l):i>=3&&i<4?(c=l,u=o):i>=4&&i<5?(s=l,u=o):i>=5&&i<6&&(s=o,u=l);var f=r-o/2,h=s+f,g=c+f,v=u+f;return n(h,g,v)}var du={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};function im(e){if(typeof e!="string")return e;var t=e.toLowerCase();return du[t]?"#"+du[t]:e}var om=/^#[a-fA-F0-9]{6}$/,lm=/^#[a-fA-F0-9]{8}$/,am=/^#[a-fA-F0-9]{3}$/,sm=/^#[a-fA-F0-9]{4}$/,jl=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,cm=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,um=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,dm=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;function Ma(e){if(typeof e!="string")throw new Mr(3);var t=im(e);if(t.match(om))return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16)};if(t.match(lm)){var r=parseFloat((parseInt(""+t[7]+t[8],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16),alpha:r}}if(t.match(am))return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16)};if(t.match(sm)){var n=parseFloat((parseInt(""+t[4]+t[4],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16),alpha:n}}var i=jl.exec(t);if(i)return{red:parseInt(""+i[1],10),green:parseInt(""+i[2],10),blue:parseInt(""+i[3],10)};var o=cm.exec(t.substring(0,50));if(o)return{red:parseInt(""+o[1],10),green:parseInt(""+o[2],10),blue:parseInt(""+o[3],10),alpha:parseFloat(""+o[4])>1?parseFloat(""+o[4])/100:parseFloat(""+o[4])};var l=um.exec(t);if(l){var s=parseInt(""+l[1],10),c=parseInt(""+l[2],10)/100,u=parseInt(""+l[3],10)/100,f="rgb("+uu(s,c,u)+")",h=jl.exec(f);if(!h)throw new Mr(4,t,f);return{red:parseInt(""+h[1],10),green:parseInt(""+h[2],10),blue:parseInt(""+h[3],10)}}var g=dm.exec(t.substring(0,50));if(g){var v=parseInt(""+g[1],10),y=parseInt(""+g[2],10)/100,w=parseInt(""+g[3],10)/100,P="rgb("+uu(v,y,w)+")",p=jl.exec(P);if(!p)throw new Mr(4,t,P);return{red:parseInt(""+p[1],10),green:parseInt(""+p[2],10),blue:parseInt(""+p[3],10),alpha:parseFloat(""+g[4])>1?parseFloat(""+g[4])/100:parseFloat(""+g[4])}}throw new Mr(5)}var fm=function(t){return t.length===7&&t[1]===t[2]&&t[3]===t[4]&&t[5]===t[6]?"#"+t[1]+t[3]+t[5]:t},fu=fm;function xr(e){var t=e.toString(16);return t.length===1?"0"+t:t}function pu(e,t,r){if(typeof e=="number"&&typeof t=="number"&&typeof r=="number")return fu("#"+xr(e)+xr(t)+xr(r));if(typeof e=="object"&&t===void 0&&r===void 0)return fu("#"+xr(e.red)+xr(e.green)+xr(e.blue));throw new Mr(6)}function pm(e,t,r,n){if(typeof e=="string"&&typeof t=="number"){var i=Ma(e);return"rgba("+i.red+","+i.green+","+i.blue+","+t+")"}else{if(typeof e=="number"&&typeof t=="number"&&typeof r=="number"&&typeof n=="number")return n>=1?pu(e,t,r):"rgba("+e+","+t+","+r+","+n+")";if(typeof e=="object"&&t===void 0&&r===void 0&&n===void 0)return e.alpha>=1?pu(e.red,e.green,e.blue):"rgba("+e.red+","+e.green+","+e.blue+","+e.alpha+")"}throw new Mr(7)}function c0(e,t,r){return function(){var i=r.concat(Array.prototype.slice.call(arguments));return i.length>=t?e.apply(this,i):c0(e,t,i)}}function u0(e){return c0(e,e.length,[])}function hm(e,t,r){if(t==="transparent")return r;if(r==="transparent")return t;if(e===0)return r;var n=Ma(t),i=vo({},n,{alpha:typeof n.alpha=="number"?n.alpha:1}),o=Ma(r),l=vo({},o,{alpha:typeof o.alpha=="number"?o.alpha:1}),s=i.alpha-l.alpha,c=parseFloat(e)*2-1,u=c*s===-1?c:c+s,f=1+c*s,h=(u/f+1)/2,g=1-h,v={red:Math.floor(i.red*h+l.red*g),green:Math.floor(i.green*h+l.green*g),blue:Math.floor(i.blue*h+l.blue*g),alpha:i.alpha*parseFloat(e)+l.alpha*(1-parseFloat(e))};return pm(v)}var mm=u0(hm),gm=mm;function vm(e,t){return t==="transparent"?t:gm(parseFloat(e),"rgb(0, 0, 0)",t)}var ym=u0(vm),xm=ym;const wm=I.div`
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
`;function km({toggleTheme:e}){const t=E.useContext(Gr);if(!t)throw new Error("ThemeContext não foi encontrado. Verifique se ele está sendo provido corretamente.");const{colors:r,title:n}=t;return a.jsxs(wm,{children:[a.jsx("header",{children:a.jsxs("div",{children:[a.jsxs("span",{className:"logo",children:[a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",className:"iconify iconify--logos",width:"35.93",height:"32",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 228",children:a.jsx("path",{d:"M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"})}),a.jsx("span",{children:"JP"})]}),a.jsxs("span",{className:"menu",children:[a.jsx(Tt,{to:"/",children:"Home"}),a.jsx(Tt,{to:"/projects",children:"Projetos"}),a.jsx(Tt,{to:"/contact",children:"Contato"})]})]})}),a.jsx(s0,{onChange:e,checked:n==="light",checkedIcon:!1,uncheckedIcon:!1,height:25,width:80,handleDiameter:20,offColor:xm(.3,r.react),onColor:r.react})]})}const jm=I.div`
    margin: auto;
    width: 80%;

    @media (max-width: 1080px) {
        width: 90%;
    }

    span.react {
        color: var(--react);
    }
`,Sm=I.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
    }
`,Cm=I.div`
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
`,Em=I.div`
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
`,Pm=I.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
    }
`,Nm=I.div`
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
`,_m=I.div`
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
`,Tm=I.div`
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
`,zm=I.div`
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
`,Sl=I.div`
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
`,Rm=I.div`
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
`,Lm=I.div`
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
`,Xt="/react.svg",Mm="PortfolioBlack.png",bm="dtMoney.png",Im="ConversorDeMoedas.png";function Om(){const e=()=>{window.scrollTo(0,0)};return a.jsxs(jm,{children:[a.jsx("title",{children:"João - Home"}),a.jsxs(Sm,{children:[a.jsx(Cm,{children:a.jsx("img",{src:"/assets/Perfil.png",alt:""})}),a.jsxs(Em,{children:[a.jsx("h2",{children:"Oi, me chamo João Paulo"}),a.jsxs("p",{children:[a.jsx("span",{className:"react",children:"Full Stack"})," Developer"]}),a.jsx("p",{children:"Formado em Análise e Desenvolvimento de Sistemas, Desenvolvedor Web com experiência em desenvolvimento de projetos."})]})]}),a.jsxs(Pm,{children:[a.jsxs(Nm,{children:[a.jsxs("h3",{children:["Minhas principais ",a.jsx("span",{className:"react",children:"habilidades"})]}),a.jsxs("p",{children:[a.jsx("img",{src:Xt,alt:""}),a.jsx("span",{children:"Javascript"})]}),a.jsxs("p",{children:[a.jsx("img",{src:Xt,alt:""}),a.jsx("span",{children:"Typescript"})]}),a.jsxs("p",{children:[a.jsx("img",{src:Xt,alt:""}),a.jsx("span",{children:"React"})]}),a.jsxs("p",{children:[a.jsx("img",{src:Xt,alt:""}),a.jsx("span",{children:"Node"})]}),a.jsxs("p",{children:[a.jsx("img",{src:Xt,alt:""}),a.jsx("span",{children:"PHP"})]}),a.jsxs("p",{children:[a.jsx("img",{src:Xt,alt:""}),a.jsx("span",{children:"HTML"})]}),a.jsxs("p",{children:[a.jsx("img",{src:Xt,alt:""}),a.jsx("span",{children:"CSS"})]})]}),a.jsx(_m,{children:a.jsx("img",{src:"/Portfolio/assets/tag.webp",alt:""})})]}),a.jsxs(Tm,{children:[a.jsxs("p",{children:["Conheça alguns dos meus ",a.jsx("span",{className:"react",children:"projetos"})]}),a.jsxs(Tt,{to:"/projects",onClick:e,children:["Ver mais projetos ",a.jsx("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 512 512",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"})})]})]}),a.jsxs(zm,{children:[a.jsx(Tt,{to:"/projects/1",onClick:e,children:a.jsxs(Sl,{children:[a.jsxs("p",{children:[a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",className:"iconify iconify--logos",width:"35.93",height:"32",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 228",children:a.jsx("path",{d:"M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"})}),a.jsx("span",{children:"Portfólio"})]}),a.jsxs("p",{children:[a.jsx("img",{src:Mm,alt:""}),a.jsxs("article",{children:[a.jsx("span",{children:"Javascript"}),a.jsx("span",{children:"Typescript"}),a.jsx("span",{children:"React"}),a.jsx("span",{children:"HTML"}),a.jsx("span",{children:"CSS"}),a.jsx("span",{children:"Vite"}),a.jsx("span",{children:"Styled-Components"}),a.jsx("span",{children:"Emailjs"})]}),a.jsx("p",{children:"Esse é meu Portfólio desenvolvido usando principalmente Typescript e React"})]}),a.jsx("p",{children:"Ver projeto"})]})}),a.jsx(Tt,{to:"/projects/2",onClick:e,children:a.jsxs(Sl,{children:[a.jsxs("p",{children:[a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",className:"iconify iconify--logos",width:"35.93",height:"32",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 228",children:a.jsx("path",{d:"M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"})}),a.jsx("span",{children:"DT Money"})]}),a.jsxs("p",{children:[a.jsx("img",{src:bm,alt:""}),a.jsx("br",{}),a.jsxs("article",{children:[a.jsx("span",{children:"Javascript"}),a.jsx("span",{children:"Typescript"}),a.jsx("span",{children:"React"}),a.jsx("span",{children:"HTML"}),a.jsx("span",{children:"CSS"}),a.jsx("span",{children:"Styled-Components"})]}),a.jsx("p",{children:"Programa para calcular suas despesas com facilidade e clareza"})]}),a.jsx("p",{children:"Ver projeto"})]})}),a.jsx(Tt,{to:"/projects/3",onClick:e,children:a.jsxs(Sl,{children:[a.jsxs("p",{children:[a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",className:"iconify iconify--logos",width:"35.93",height:"32",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 228",children:a.jsx("path",{d:"M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"})}),a.jsx("span",{children:"Conversor de Moedas"})]}),a.jsxs("p",{children:[a.jsx("img",{src:Im,alt:""}),a.jsx("br",{}),a.jsxs("article",{children:[a.jsx("span",{children:"PHP"}),a.jsx("span",{children:"HTML"}),a.jsx("span",{children:"CSS"})]}),a.jsx("p",{children:"Programa criado em HTML, CSS e PHP utilizando API do Banco do Brasil"})]}),a.jsx("p",{children:"Ver projeto"})]})})]}),a.jsxs(Rm,{children:[a.jsxs("p",{children:["Entre em ",a.jsx("span",{className:"react",children:"Contato"})," comigo"]}),a.jsx("p",{children:"Sinta-se à vontade para entrar em contato comigo para discutir projetos interessantes na área de desenvolvimento de software."})]}),a.jsxs(Lm,{children:[a.jsxs("div",{children:[a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",className:"iconify iconify--logos",width:"35.93",height:"32",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 228",children:a.jsx("path",{d:"M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"})}),a.jsx("span",{children:"João Paulo •"}),a.jsx("a",{href:"https://www.linkedin.com/in/joaovecchio/",target:"_blank",children:a.jsx("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 16 16",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"})})}),a.jsx("a",{href:"https://github.com/JoaopvSalles",target:"_blank",children:a.jsx("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 16 16",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"})})}),a.jsxs("p",{children:[a.jsx("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 512 512",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"})})," joaopaulovs2000@gmail.com"]})]}),a.jsxs(Tt,{to:"/contact",onClick:e,children:["Enviar email agora ",a.jsx("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 512 512",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"})})]})]})]})}const d0=I.div`
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
`,$m=I.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 4rem;

    @media (max-width: 500px) {
        gap: 0.5rem;
    }
`,Dm=I.button`
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
`,Fm=I.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0.5rem;

    @media (max-width: 1080px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 720px) {
        grid-template-columns: 1fr;
    }
`,Am=I.div`
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
`,Bm=I.p`
    svg {
        height: 1.2rem;
        width: 1.2rem;
        margin-right: 0.4rem;
        margin-bottom: -4px;
        fill: var(--black);
    }
`,Um=I.img`
    margin: 1.5rem auto;
    width: 100%;
`,Hm=I.div`
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
`,Vm=I.p`
    color: var(--black);
`,Wm=I.p`
    margin-top: 1rem;
    color: var(--black);
`,Zm=I.a`
    text-decoration: none;
    color: var(--black);
`,hu=[{id:1,categories:["Javascript","Typescript","React","HTML","CSS","Vite","Styled-Components","Emailjs"],name:"Portfólio",imageUrl:"../../public/PortfolioBlack.png",tech1:"Javascript",tech2:"Typescript",tech3:"React",tech4:"HTML",tech5:"CSS",tech6:"Vite",tech7:"Styled-Components",tech8:"Emailjs",description:"Esse é meu Portfólio desenvolvido usando principalmente Typescript e React",link:"/projects/1"},{id:2,categories:["Javascript","Typescript","React","HTML","CSS","Styled-Components"],name:"DT Money",imageUrl:"../../public/dtMoney.png",tech1:"Javascript",tech2:"Typescript",tech3:"React",tech4:"HTML",tech5:"CSS",tech6:"Styled-Components",description:"Programa para calcular suas despesas com facilidade e clareza",link:"/projects/2"},{id:3,categories:["PHP","HTML","CSS"],name:"Conversor de Moedas",imageUrl:"../../public/ConversorDeMoedas.png",tech1:"PHP",tech2:"HTML",tech3:"CSS",description:"Programa criado em HTML, CSS e PHP utilizando API do Banco do Brasil",link:"/projects/3"},{id:4,categories:["Node","HTML","CSS"],name:"Projeto",imageUrl:"../../public/EmBreve.png",tech1:"Node",tech2:"HTML",tech3:"CSS",description:"Em Breve",link:"#"},{id:5,categories:["Node","HTML","CSS"],name:"Projeto",imageUrl:"../../public/EmBreve.png",tech1:"Node",tech2:"HTML",tech3:"CSS",description:"Em Breve",link:"#"},{id:6,categories:["HTML","CSS"],name:"Projeto",imageUrl:"../../public/EmBreve.png",tech1:"HTML",tech2:"CSS",description:"Em Breve",link:"#"}],Qm=["Javascript","Typescript","React","Node","PHP","HTML","CSS","Vite","Styled-Components","Emailjs"],Xm=({name:e,imageUrl:t,tech1:r,tech2:n,tech3:i,tech4:o,tech5:l,tech6:s,tech7:c,tech8:u,description:f,link:h})=>a.jsxs(d0,{children:[a.jsx("title",{children:"João - Projetos"}),a.jsx(Zm,{href:h,children:a.jsxs(Am,{children:[a.jsxs(Bm,{children:[a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",className:"iconify iconify--logos",width:"35.93",height:"32",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 228",children:a.jsx("path",{d:"M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"})}),a.jsx("span",{children:e})]}),a.jsx(Um,{src:t,alt:e}),a.jsxs(Hm,{children:[r&&a.jsx(St,{children:r}),n&&a.jsx(St,{children:n}),i&&a.jsx(St,{children:i}),o&&a.jsx(St,{children:o}),l&&a.jsx(St,{children:l}),s&&a.jsx(St,{children:s}),c&&a.jsx(St,{children:c}),u&&a.jsx(St,{children:u})]}),a.jsx(Vm,{children:f}),a.jsx(Wm,{children:"Ver Projeto"})]})})]});function Km(){const[e,t]=E.useState([]),r=i=>{t(o=>o.includes(i)?o.filter(l=>l!==i):[...o,i])},n=e.length===0?hu:hu.filter(i=>i.categories.some(o=>e.includes(o)));return a.jsx(d0,{children:a.jsxs("div",{className:"title",children:[a.jsxs("h2",{children:["Conheça meus principais ",a.jsx("span",{className:"react",children:" projetos"})]}),a.jsx($m,{children:Qm.map(i=>a.jsx(Dm,{onClick:()=>r(i),active:e.includes(i),children:i.charAt(0).toUpperCase()+i.slice(1)},i))}),a.jsx(Fm,{children:n.map(i=>a.jsx(Xm,{...i},i.id))})]})})}const Ym=I.div`
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
`,Gm="public/PortfolioBlack.png",Jm="public/PortfolioWhite.png";function qm(){const e=mr(),t=[Gm,Jm],[r,n]=E.useState(0),[i,o]=E.useState(null),l=u=>{o(u),setTimeout(()=>{n(f=>u==="next"?(f+1)%t.length:(f-1+t.length)%t.length),o(null)},500)},s=()=>l("next"),c=()=>l("prev");return a.jsxs(Ym,{children:[a.jsxs("div",{className:"return",onClick:()=>e(-1),children:[a.jsxs("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 24 24",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:[a.jsx("path",{fill:"none",d:"M0 0h24v24H0z"}),a.jsx("path",{d:"M17.77 3.77L16 2 6 12l10 10 1.77-1.77L9.54 12z"})]}),a.jsx("span",{children:"Voltar"})]}),a.jsxs("h2",{children:["Projeto ",a.jsx("span",{className:"react",children:"Portfólio"})]}),a.jsxs("div",{className:"project",children:[a.jsxs("div",{className:"img-carousel",children:[a.jsx("button",{className:"prev",onClick:c,children:a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"48",height:"48",fill:"currentColor",children:a.jsx("path",{d:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z"})})}),t.map((u,f)=>a.jsx("img",{src:u,alt:`Imagem ${f}`,className:`
                                ${f===r?"active":""}
                                ${i==="next"&&f===(r+1)%t.length?"next-enter":""}
                                ${i==="next"&&f===r?"next-exit":""}
                                ${i==="prev"&&f===(r-1+t.length)%t.length?"prev-enter":""}
                                ${i==="prev"&&f===r?"prev-exit":""}
                            `},f)),a.jsx("button",{className:"next",onClick:s,children:a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"48",height:"48",fill:"currentColor",children:a.jsx("path",{d:"M8.59 16.59L13.17 12l-4.58-4.59L10 6l6 6-6 6z"})})})]}),a.jsxs("div",{className:"description",children:[a.jsxs("h3",{children:[a.jsx("span",{className:"react",children:"Descrição"})," do projeto:"]}),a.jsxs("p",{children:["Este é o meu próprio portfólio, desenvolvido com o objetivo de apresentar meus principais projetos pessoais e habilidades de desenvolvimento web.",a.jsx("br",{}),"Utilizando pricinpalmente TypeScript e React, este portfólio é uma plataforma que destaca minha experiência em desenvolvimento de software."]})]})]}),a.jsxs("div",{className:"details",children:[a.jsxs("div",{className:"functions",children:[a.jsxs("h3",{children:["Principais ",a.jsx("span",{className:"react",children:"Funcionalidades"}),":"]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"Visualizar projetos"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"Alterar entre tema claro ou escuro"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"Filtrar projetos por tag"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"Enviar Email para contato"})]})]}),a.jsxs("div",{className:"techs",children:[a.jsxs("h3",{children:["Principais ",a.jsx("span",{className:"react",children:"Tecnologias"}),":"]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"Javascript"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"Typescript"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"React"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"HTML"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"Vite"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"Styled-Components"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"Emailjs"})]})]}),a.jsxs("div",{className:"repository",children:[a.jsxs("h3",{children:["Onde ",a.jsx("span",{className:"react",children:"Encontrar"})," o Projeto:"]}),a.jsxs("a",{href:"https://github.com/JoaopvSalles",target:"_blank",children:[a.jsx("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 16 16",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"})}),"Ver Repositório"]})]})]})]})}const e3=I.div`
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
`;function t3(){const e=mr();return a.jsxs(e3,{children:[a.jsxs("div",{className:"return",onClick:()=>e(-1),children:[a.jsxs("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 24 24",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:[a.jsx("path",{fill:"none",d:"M0 0h24v24H0z"}),a.jsx("path",{d:"M17.77 3.77L16 2 6 12l10 10 1.77-1.77L9.54 12z"})]}),a.jsx("span",{children:"Voltar"})]}),a.jsxs("h2",{children:["Projeto ",a.jsx("span",{className:"react",children:"DT Money"})]}),a.jsxs("div",{className:"project",children:[a.jsx("div",{className:"img",children:a.jsx("img",{src:"../../public/dtMoney.png",alt:""})}),a.jsxs("div",{className:"description",children:[a.jsxs("h3",{children:[a.jsx("span",{className:"react",children:"Descrição"})," do projeto:"]}),a.jsxs("p",{children:["Programa para calcular suas despesas.",a.jsx("br",{}),a.jsx("br",{}),"Como cadastar uma nova transação:",a.jsx("br",{}),'- clique em "nova transação"',a.jsx("br",{}),"- digite um título,",a.jsx("br",{}),"- digite um valor em R$,",a.jsx("br",{}),'- marque uma opção "entrada" ou "saída" caso você tenha recebido ou gasto dinheiro com a transação,',a.jsx("br",{}),"- digite uma categoria,",a.jsx("br",{}),'- clique em "cadastrar".',a.jsx("br",{}),a.jsx("br",{}),"Sua transição será adicionada a uma lista com todas as informações fornecidas e será gerada uma data exata do dia em que foi cadastrado a transição, e então você poderá adicionar uma nova transação.",a.jsx("br",{}),a.jsx("br",{}),'Conforme você adiciona novas transações o programa irá calcular automaticamente, seu saldo total de "entrada" em R$, seu saldo total de "saída" em R$, e seu saldo "final" em R$ positivo ou negativo.']})]})]}),a.jsxs("div",{className:"details",children:[a.jsxs("div",{className:"functions",children:[a.jsxs("h3",{children:["Principais ",a.jsx("span",{className:"react",children:"Funcionalidades"}),":"]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"Criar novos cards com transações"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"Adicionar data do dia em que a trasação é criada"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"Calcular saldos de Entrada, Saída e Total"})]})]}),a.jsxs("div",{className:"techs",children:[a.jsxs("h3",{children:["Principais ",a.jsx("span",{className:"react",children:"Tecnologias"}),":"]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"Javascript"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"Typescript"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"React"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"HTML"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"Styled-Components"})]})]}),a.jsxs("div",{className:"repository",children:[a.jsxs("h3",{children:["Onde ",a.jsx("span",{className:"react",children:"Encontrar"})," o Projeto:"]}),a.jsxs("a",{href:"https://github.com/JoaopvSalles/dtmoney",target:"_blank",children:[a.jsx("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 16 16",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"})}),"Ver Repositório"]})]})]})]})}const r3=I.div`
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
`;function n3(){const e=mr();return a.jsxs(r3,{children:[a.jsxs("div",{className:"return",onClick:()=>e(-1),children:[a.jsxs("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 24 24",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:[a.jsx("path",{fill:"none",d:"M0 0h24v24H0z"}),a.jsx("path",{d:"M17.77 3.77L16 2 6 12l10 10 1.77-1.77L9.54 12z"})]}),a.jsx("span",{children:"Voltar"})]}),a.jsxs("h2",{children:["Projeto ",a.jsx("span",{className:"react",children:"Conversor de Moedas"})]}),a.jsxs("div",{className:"project",children:[a.jsx("div",{className:"img",children:a.jsx("img",{src:"../../public/ConversorDeMoedas.png",alt:""})}),a.jsxs("div",{className:"description",children:[a.jsxs("h3",{children:[a.jsx("span",{className:"react",children:"Descrição"})," do projeto:"]}),a.jsxs("p",{children:["Programa criado em HTML CSS PHP utilizando API com o intuito de praticar e desenvolver conhecimento nas tecnologias.",a.jsx("br",{}),'Digite um valor em Real e clique em "Converter", o programa irá fazer a conversão atualizada para o Dolar diretamente pela API do Banco do Brasil e mostrar o resultado na tela.']})]})]}),a.jsxs("div",{className:"details",children:[a.jsxs("div",{className:"functions",children:[a.jsxs("h3",{children:["Principais ",a.jsx("span",{className:"react",children:"Funcionalidades"}),":"]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"Cálculo de conversão de Real para Dolar"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"Integração com API do Banco do Brasil"})]})]}),a.jsxs("div",{className:"techs",children:[a.jsxs("h3",{children:["Principais ",a.jsx("span",{className:"react",children:"Tecnologias"}),":"]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"PHP"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"HTML"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]})]}),a.jsxs("div",{className:"repository",children:[a.jsxs("h3",{children:["Onde ",a.jsx("span",{className:"react",children:"Encontrar"})," o Projeto:"]}),a.jsxs("a",{href:"https://github.com/JoaopvSalles/Project-PHP-ConversorDeMoedas",target:"_blank",children:[a.jsx("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 16 16",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"})}),"Ver Repositório"]})]})]})]})}const i3=I.div`
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
`;function o3(){const e=mr();return a.jsxs(i3,{children:[a.jsxs("div",{className:"return",onClick:()=>e(-1),children:[a.jsxs("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 24 24",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:[a.jsx("path",{fill:"none",d:"M0 0h24v24H0z"}),a.jsx("path",{d:"M17.77 3.77L16 2 6 12l10 10 1.77-1.77L9.54 12z"})]}),a.jsx("span",{children:"Voltar"})]}),a.jsxs("h2",{children:["Projeto ",a.jsx("span",{className:"react",children:"Nome Projeto"})]}),a.jsxs("div",{className:"project",children:[a.jsx("div",{className:"img",children:a.jsx("img",{src:"../../public/EmBreve.png",alt:""})}),a.jsxs("div",{className:"description",children:[a.jsxs("h3",{children:[a.jsx("span",{className:"react",children:"Descrição"})," do projeto:"]}),a.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus animi cumque deserunt praesentium alias tenetur quas ab quaerat, possimus pariatur? Neque, facere provident quisquam cum veniam sed eveniet soluta a"})]})]}),a.jsxs("div",{className:"details",children:[a.jsxs("div",{className:"functions",children:[a.jsxs("h3",{children:["Principais ",a.jsx("span",{className:"react",children:"Funcionalidades"}),":"]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]})]}),a.jsxs("div",{className:"techs",children:[a.jsxs("h3",{children:["Principais ",a.jsx("span",{className:"react",children:"Tecnologias"}),":"]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]})]}),a.jsxs("div",{className:"repository",children:[a.jsxs("h3",{children:["Onde ",a.jsx("span",{className:"react",children:"Encontrar"})," o Projeto:"]}),a.jsxs("a",{href:"https://github.com/JoaopvSalles",target:"_blank",children:[a.jsx("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 16 16",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"})}),"Ver Repositório"]})]})]})]})}const l3=I.div`
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
`;function a3(){const e=mr();return a.jsxs(l3,{children:[a.jsxs("div",{className:"return",onClick:()=>e(-1),children:[a.jsxs("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 24 24",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:[a.jsx("path",{fill:"none",d:"M0 0h24v24H0z"}),a.jsx("path",{d:"M17.77 3.77L16 2 6 12l10 10 1.77-1.77L9.54 12z"})]}),a.jsx("span",{children:"Voltar"})]}),a.jsxs("h2",{children:["Projeto ",a.jsx("span",{className:"react",children:"Nome Projeto"})]}),a.jsxs("div",{className:"project",children:[a.jsx("div",{className:"img",children:a.jsx("img",{src:"../../public/EmBreve.png",alt:""})}),a.jsxs("div",{className:"description",children:[a.jsxs("h3",{children:[a.jsx("span",{className:"react",children:"Descrição"})," do projeto:"]}),a.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus animi cumque deserunt praesentium alias tenetur quas ab quaerat, possimus pariatur? Neque, facere provident quisquam cum veniam sed eveniet soluta a"})]})]}),a.jsxs("div",{className:"details",children:[a.jsxs("div",{className:"functions",children:[a.jsxs("h3",{children:["Principais ",a.jsx("span",{className:"react",children:"Funcionalidades"}),":"]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]})]}),a.jsxs("div",{className:"techs",children:[a.jsxs("h3",{children:["Principais ",a.jsx("span",{className:"react",children:"Tecnologias"}),":"]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]})]}),a.jsxs("div",{className:"repository",children:[a.jsxs("h3",{children:["Onde ",a.jsx("span",{className:"react",children:"Encontrar"})," o Projeto:"]}),a.jsxs("a",{href:"https://github.com/JoaopvSalles",target:"_blank",children:[a.jsx("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 16 16",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"})}),"Ver Repositório"]})]})]})]})}const s3=I.div`
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
`;function c3(){const e=mr();return a.jsxs(s3,{children:[a.jsxs("div",{className:"return",onClick:()=>e(-1),children:[a.jsxs("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 24 24",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:[a.jsx("path",{fill:"none",d:"M0 0h24v24H0z"}),a.jsx("path",{d:"M17.77 3.77L16 2 6 12l10 10 1.77-1.77L9.54 12z"})]}),a.jsx("span",{children:"Voltar"})]}),a.jsxs("h2",{children:["Projeto ",a.jsx("span",{className:"react",children:"Nome Projeto"})]}),a.jsxs("div",{className:"project",children:[a.jsx("div",{className:"img",children:a.jsx("img",{src:"../../public/EmBreve.png",alt:""})}),a.jsxs("div",{className:"description",children:[a.jsxs("h3",{children:[a.jsx("span",{className:"react",children:"Descrição"})," do projeto:"]}),a.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus animi cumque deserunt praesentium alias tenetur quas ab quaerat, possimus pariatur? Neque, facere provident quisquam cum veniam sed eveniet soluta a"})]})]}),a.jsxs("div",{className:"details",children:[a.jsxs("div",{className:"functions",children:[a.jsxs("h3",{children:["Principais ",a.jsx("span",{className:"react",children:"Funcionalidades"}),":"]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]})]}),a.jsxs("div",{className:"techs",children:[a.jsxs("h3",{children:["Principais ",a.jsx("span",{className:"react",children:"Tecnologias"}),":"]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]}),a.jsxs("p",{children:[a.jsx("img",{src:"../../public/react.svg",alt:""}),a.jsx("span",{children:"CSS"})]})]}),a.jsxs("div",{className:"repository",children:[a.jsxs("h3",{children:["Onde ",a.jsx("span",{className:"react",children:"Encontrar"})," o Projeto:"]}),a.jsxs("a",{href:"https://github.com/JoaopvSalles",target:"_blank",children:[a.jsx("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 16 16",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"})}),"Ver Repositório"]})]})]})]})}class ri{constructor(t=0,r="Network Error"){this.status=t,this.text=r}}const u3=()=>{if(!(typeof localStorage>"u"))return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,t)=>Promise.resolve(localStorage.setItem(e,t)),remove:e=>Promise.resolve(localStorage.removeItem(e))}},ce={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:u3()},bs=e=>e?typeof e=="string"?{publicKey:e}:e.toString()==="[object Object]"?e:{}:{},d3=(e,t="https://api.emailjs.com")=>{if(!e)return;const r=bs(e);ce.publicKey=r.publicKey,ce.blockHeadless=r.blockHeadless,ce.storageProvider=r.storageProvider,ce.blockList=r.blockList,ce.limitRate=r.limitRate,ce.origin=r.origin||t},f0=async(e,t,r={})=>{const n=await fetch(ce.origin+e,{method:"POST",headers:r,body:t}),i=await n.text(),o=new ri(n.status,i);if(n.ok)return o;throw o},p0=(e,t,r)=>{if(!e||typeof e!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||typeof t!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!r||typeof r!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},f3=e=>{if(e&&e.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},h0=e=>e.webdriver||!e.languages||e.languages.length===0,m0=()=>new ri(451,"Unavailable For Headless Browser"),p3=(e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if(typeof t!="string")throw"The BlockList watchVariable has to be a string"},h3=e=>{var t;return!((t=e.list)!=null&&t.length)||!e.watchVariable},m3=(e,t)=>e instanceof FormData?e.get(t):e[t],g0=(e,t)=>{if(h3(e))return!1;p3(e.list,e.watchVariable);const r=m3(t,e.watchVariable);return typeof r!="string"?!1:e.list.includes(r)},v0=()=>new ri(403,"Forbidden"),g3=(e,t)=>{if(typeof e!="number"||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&typeof t!="string")throw"The LimitRate ID has to be a non-empty string"},v3=async(e,t,r)=>{const n=Number(await r.get(e)||0);return t-Date.now()+n},y0=async(e,t,r)=>{if(!t.throttle||!r)return!1;g3(t.throttle,t.id);const n=t.id||e;return await v3(n,t.throttle,r)>0?!0:(await r.set(n,Date.now().toString()),!1)},x0=()=>new ri(429,"Too Many Requests"),y3=async(e,t,r,n)=>{const i=bs(n),o=i.publicKey||ce.publicKey,l=i.blockHeadless||ce.blockHeadless,s=i.storageProvider||ce.storageProvider,c={...ce.blockList,...i.blockList},u={...ce.limitRate,...i.limitRate};return l&&h0(navigator)?Promise.reject(m0()):(p0(o,e,t),f3(r),r&&g0(c,r)?Promise.reject(v0()):await y0(location.pathname,u,s)?Promise.reject(x0()):f0("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:o,service_id:e,template_id:t,template_params:r}),{"Content-type":"application/json"}))},x3=e=>{if(!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},w3=e=>typeof e=="string"?document.querySelector(e):e,k3=async(e,t,r,n)=>{const i=bs(n),o=i.publicKey||ce.publicKey,l=i.blockHeadless||ce.blockHeadless,s=ce.storageProvider||i.storageProvider,c={...ce.blockList,...i.blockList},u={...ce.limitRate,...i.limitRate};if(l&&h0(navigator))return Promise.reject(m0());const f=w3(r);p0(o,e,t),x3(f);const h=new FormData(f);return g0(c,h)?Promise.reject(v0()):await y0(location.pathname,u,s)?Promise.reject(x0()):(h.append("lib_version","4.4.1"),h.append("service_id",e),h.append("template_id",t),h.append("user_id",o),f0("/api/v1.0/email/send-form",h))},j3={init:d3,send:y3,sendForm:k3,EmailJSResponseStatus:ri},S3=I.div`
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
`;function C3(){const[e,t]=E.useState(""),[r,n]=E.useState(""),[i,o]=E.useState(""),[l,s]=E.useState(!1),[c,u]=E.useState(""),f=h=>{h.preventDefault(),s(!0);const g={from_name:e,from_email:r,message:i};j3.send("service_0q54xn8","template_jc9eaws",g,"FhikmvDk7JNVakgwA").then(()=>{u("E-mail enviado com sucesso!"),t(""),n(""),o("")}).catch(v=>{u("Erro ao enviar o e-mail. Tente novamente."),console.error("Erro ao enviar o e-mail:",v)}).finally(()=>{s(!1)})};return a.jsxs(S3,{children:[a.jsx("title",{children:"João - Contato"}),a.jsxs("header",{children:[a.jsxs("h2",{children:["Entre em ",a.jsx("span",{className:"react",children:"contato"})," comigo:"]}),a.jsx("p",{children:"Sinta-se à vontade para entrar em contato comigo pelas redes sociais ou enviando um email."})]}),a.jsxs("section",{className:"redes",children:[a.jsxs("h3",{children:["Minhas ",a.jsx("span",{className:"react",children:"Redes Sociais"}),":"]}),a.jsxs("a",{href:"https://www.linkedin.com/in/joaovecchio/",target:"_blank",children:[a.jsx("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 16 16",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"})}),"LinkeIn"]}),a.jsxs("a",{href:"https://github.com/JoaopvSalles",target:"_blank",children:[a.jsx("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 16 16",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"})}),"Github"]})]}),a.jsxs("section",{className:"email",children:[a.jsxs("h3",{children:["Me envie um ",a.jsx("span",{className:"react",children:"Email"}),":"]}),a.jsxs("form",{onSubmit:f,children:[a.jsx("label",{htmlFor:"name",children:"Seu nome"}),a.jsx("input",{type:"text",id:"name",value:e,onChange:h=>t(h.target.value),placeholder:"Seu nome",required:!0}),a.jsx("label",{htmlFor:"email",children:"Seu email"}),a.jsx("input",{type:"email",id:"email",value:r,onChange:h=>n(h.target.value),placeholder:"exemplo@email.com",required:!0}),a.jsx("label",{htmlFor:"message",children:"Mensagem"}),a.jsx("textarea",{id:"message",value:i,onChange:h=>o(h.target.value),placeholder:"Olá, ...",required:!0}),a.jsxs("button",{type:"submit",disabled:l,children:[l?"Enviando...":"Enviar email",a.jsx("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 512 512",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"})})]})]}),c&&a.jsx("p",{className:`status-message ${c.includes("sucesso")?"success":"error"}`,children:c})]})]})}const E3=I.div`
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
`;function P3(){return a.jsx(E3,{children:a.jsx("div",{children:a.jsxs("p",{children:["Copyrights © 2023 - Developed by João ",a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",className:"iconify iconify--logos",width:"35.93",height:"32",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 228",children:a.jsx("path",{d:"M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"})})," v3.1.0"]})})})}function N3(e,t){const[r,n]=E.useState(()=>{const i=localStorage.getItem(e);return i?JSON.parse(i):t});return E.useEffect(()=>{localStorage.setItem(e,JSON.stringify(r))},[e,r]),[r,n]}const _3=Yh`
 
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
`,mu={title:"light",colors:{white:"#ffffff",black:"#000000",react:"#00D8FF",border:"#aaaaaa",background:"#FFFAFA"}},T3={title:"dark",colors:{white:"#000000",black:"#ffffff",react:"#00D8FF",border:"#aaaaaa",background:"#282a36"}};function z3(){const[e,t]=N3("theme",mu),r=()=>{t(e.title==="light"?T3:mu)};return a.jsx(Bp,{basename:"/Portfolio",children:a.jsxs(Qh,{theme:e,children:[a.jsx(km,{toggleTheme:r}),a.jsxs(bp,{children:[a.jsx(qe,{path:"/",element:a.jsx(Om,{})}),a.jsx(qe,{path:"/projects",element:a.jsx(Km,{})}),a.jsx(qe,{path:"/projects/1",element:a.jsx(qm,{})}),a.jsx(qe,{path:"/projects/2",element:a.jsx(t3,{})}),a.jsx(qe,{path:"/projects/3",element:a.jsx(n3,{})}),a.jsx(qe,{path:"/projects/4",element:a.jsx(o3,{})}),a.jsx(qe,{path:"/projects/5",element:a.jsx(a3,{})}),a.jsx(qe,{path:"/projects/6",element:a.jsx(c3,{})}),a.jsx(qe,{path:"/contact",element:a.jsx(C3,{})})]}),a.jsx(P3,{}),a.jsx(_3,{})]})})}Cl.createRoot(document.getElementById("root")).render(a.jsx(H.StrictMode,{children:a.jsx(z3,{})}));
