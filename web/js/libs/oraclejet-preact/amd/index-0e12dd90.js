define(['exports'], (function(t){"use strict";function n(t){return null!=t&&"object"==typeof t&&!0===t["@@functional/placeholder"]}function e(t){return function e(r){return 0===arguments.length||n(r)?e:t.apply(this,arguments)}}function r(t){return function r(u,a){switch(arguments.length){case 0:return r;case 1:return n(u)?r:e((function(n){return t(u,n)}));default:return n(u)&&n(a)?r:n(u)?e((function(n){return t(n,a)})):n(a)?e((function(n){return t(u,n)})):t(u,a)}}}var u=Array.isArray||function(t){return null!=t&&t.length>=0&&"[object Array]"===Object.prototype.toString.call(t)};function a(t){return"[object String]"===Object.prototype.toString.call(t)}"undefined"!=typeof Symbol&&Symbol.iterator;function o(t,n){return Object.prototype.hasOwnProperty.call(n,t)}var c=Object.prototype.toString,i=function(){return"[object Arguments]"===c.call(arguments)?function(t){return"[object Arguments]"===c.call(t)}:function(t){return o("callee",t)}}(),f=!{toString:null}.propertyIsEnumerable("toString"),l=["constructor","valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],s=function(){return arguments.propertyIsEnumerable("length")}(),y=function(t,n){for(var e=0;e<t.length;){if(t[e]===n)return!0;e+=1}return!1},p="function"!=typeof Object.keys||s?e((function(t){if(Object(t)!==t)return[];var n,e,r=[],u=s&&i(t);for(n in t)!o(n,t)||u&&"length"===n||(r[r.length]=n);if(f)for(e=l.length-1;e>=0;)o(n=l[e],t)&&!y(r,n)&&(r[r.length]=n),e-=1;return r})):e((function(t){return Object(t)!==t?[]:Object.keys(t)}));Number.isInteger;var g=e((function(t){return null===t?"Null":void 0===t?"Undefined":Object.prototype.toString.call(t).slice(8,-1)}));function b(t){for(var n,e=[];!(n=t.next()).done;)e.push(n.value);return e}function m(t,n,e){for(var r=0,u=e.length;r<u;){if(t(n,e[r]))return!0;r+=1}return!1}var v="function"==typeof Object.is?Object.is:function(t,n){return t===n?0!==t||1/t==1/n:t!=t&&n!=n};function O(t,n,e,r){var u=b(t);function a(t,n){return d(t,n,e.slice(),r.slice())}return!m((function(t,n){return!m(a,n,t)}),b(n),u)}function d(t,n,e,r){if(v(t,n))return!0;var u=g(t);if(u!==g(n))return!1;if(null==t||null==n)return!1;if("function"==typeof t["fantasy-land/equals"]||"function"==typeof n["fantasy-land/equals"])return"function"==typeof t["fantasy-land/equals"]&&t["fantasy-land/equals"](n)&&"function"==typeof n["fantasy-land/equals"]&&n["fantasy-land/equals"](t);if("function"==typeof t.equals||"function"==typeof n.equals)return"function"==typeof t.equals&&t.equals(n)&&"function"==typeof n.equals&&n.equals(t);switch(u){case"Arguments":case"Array":case"Object":if("function"==typeof t.constructor&&"Promise"===function(t){var n=String(t).match(/^function (\w*)/);return null==n?"":n[1]}(t.constructor))return t===n;break;case"Boolean":case"Number":case"String":if(typeof t!=typeof n||!v(t.valueOf(),n.valueOf()))return!1;break;case"Date":if(!v(t.valueOf(),n.valueOf()))return!1;break;case"Error":return t.name===n.name&&t.message===n.message;case"RegExp":if(t.source!==n.source||t.global!==n.global||t.ignoreCase!==n.ignoreCase||t.multiline!==n.multiline||t.sticky!==n.sticky||t.unicode!==n.unicode)return!1}for(var a=e.length-1;a>=0;){if(e[a]===t)return r[a]===n;a-=1}switch(u){case"Map":return t.size===n.size&&O(t.entries(),n.entries(),e.concat([t]),r.concat([n]));case"Set":return t.size===n.size&&O(t.values(),n.values(),e.concat([t]),r.concat([n]));case"Arguments":case"Array":case"Object":case"Boolean":case"Number":case"String":case"Date":case"Error":case"RegExp":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"ArrayBuffer":break;default:return!1}var c=p(t);if(c.length!==p(n).length)return!1;var i=e.concat([t]),f=r.concat([n]);for(a=c.length-1;a>=0;){var l=c[a];if(!o(l,n)||!d(n[l],t[l],i,f))return!1;a-=1}return!0}var h=r((function(t,n){return d(t,n,[],[])}));var j=function(t){return(t<10?"0":"")+t};Date.prototype.toISOString;function A(t){return"[object Object]"===Object.prototype.toString.call(t)}var S=e((function(t){return null!=t&&"function"==typeof t["fantasy-land/empty"]?t["fantasy-land/empty"]():null!=t&&null!=t.constructor&&"function"==typeof t.constructor["fantasy-land/empty"]?t.constructor["fantasy-land/empty"]():null!=t&&"function"==typeof t.empty?t.empty():null!=t&&null!=t.constructor&&"function"==typeof t.constructor.empty?t.constructor.empty():u(t)?[]:a(t)?"":A(t)?{}:i(t)?function(){return arguments}():void 0}));"function"==typeof Object.assign&&Object.assign;var q=e((function(t){return null!=t&&h(t,S(t))}));var k="\t\n\v\f\r                　\u2028\u2029\ufeff";String.prototype.trim;t.equals=h,t.isEmpty=q,t.keys=p}));
//# sourceMappingURL=index-0e12dd90.js.map
