define(['exports', '../UNSAFE_Theme', '../utils-7a8b0c59', '../Common/themes/themeContract.css'], (function(e,t,s,i){"use strict";e.sizeToCSS=e=>0===e||(e=>0===parseFloat(e))(e)?0:(e=>e.startsWith("calc(")&&e.endsWith(")"))(e)||(e=>e.endsWith("%"))(e)?e:(e=>e.startsWith("--"))(e)?`var(${e})`:(e=>e.endsWith("x"))(e)?(e=>{const t=e.slice(0,e.length-1),i=Number(t);return isNaN(i)?0:s.xUnits(i)})(e):0,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=UNSAFE_size.js.map
