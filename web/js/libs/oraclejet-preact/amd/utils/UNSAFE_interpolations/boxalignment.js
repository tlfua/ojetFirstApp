define(['exports', 'css!./boxalignment.css', '../../keys-df123de6', '../UNSAFE_size', '../UNSAFE_arrayUtils', '../../_curry1-ce36c4e7', '../../_has-580e26f1', '../../UNSAFE_Theme', '../../utils-7a8b0c59', '../../Common/themes/themeContract.css'], (function(e,i,t,n,s,a,r,l,_,c){"use strict";const o={baseline:"_1m3e7gi",center:"_1fef7u5",end:"_145hvzw",start:"_189tazq",inherit:"_1le3nti",initial:"_1wi46qp",stretch:"_1lildin"},u={center:"_1ua877h",end:"zialjf",start:"tm4314",inherit:"_1xhxxpj",initial:"_67b5nf",around:"_1nnxib8",between:"ty75dt",evenly:"c9mvrk"},d={align:({align:e})=>void 0===e?{}:{class:o[e]},justify:({justify:e})=>void 0===e?{}:{class:u[e]},gap:({gap:e})=>{if(void 0===e)return{};{const[i,t=i]=s.coerceArray(e);return{gap:`${n.sizeToCSS(i)} ${n.sizeToCSS(t)}`}}}},f=t.keys_1(o),y=t.keys_1(u);e.aligns=f,e.boxAlignmentInterpolations=d,e.justifies=y,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=boxalignment.js.map