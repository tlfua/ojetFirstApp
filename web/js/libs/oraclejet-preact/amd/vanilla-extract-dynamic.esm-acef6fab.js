define(['exports'], (function(r){"use strict";function n(r){var n=r.match(/^var\((.*)\)$/);return n?n[1]:r}function t(r,n){var t=r;for(var e of n){if(!(e in t))throw new Error("Path ".concat(n.join(" -> ")," does not exist in object"));t=t[e]}return t}function e(r,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],o=r.constructor();for(var i in r){var a=r[i],c=[...t,i];"string"==typeof a||"number"==typeof a||null==a?o[i]=n(a,c):"object"!=typeof a||Array.isArray(a)?console.warn('Skipping invalid key "'.concat(c.join("."),'". Should be a string, number, null or object. Received: "').concat(Array.isArray(a)?"Array":typeof a,'"')):o[i]=e(a,n,c)}return o}r.assignInlineVars=function(r,o){var i={};if("object"==typeof o){var a=r;e(o,((r,e)=>{var o=t(a,e);i[n(o)]=String(r)}))}else{var c=r;for(var f in c)i[n(f)]=c[f]}return Object.defineProperty(i,"toString",{value:function(){return Object.keys(this).map((r=>"".concat(r,":").concat(this[r]))).join(";")},writable:!1}),i}}));
//# sourceMappingURL=vanilla-extract-dynamic.esm-acef6fab.js.map