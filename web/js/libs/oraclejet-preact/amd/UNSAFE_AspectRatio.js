define(['exports', 'preact/jsx-runtime', 'css!./UNSAFE_AspectRatio.css', './utils/UNSAFE_interpolations/dimensions', './utils/UNSAFE_mergeInterpolations', './utils/UNSAFE_classNames', './utils/UNSAFE_arrayUtils', './classNames-711dac8e', './utils/UNSAFE_size', './UNSAFE_Theme', './utils-7a8b0c59', './Common/themes/themeContract.css', './_curry1-ce36c4e7', './_curry3-4fb0ed44', './_curry2-d90c5517', './_has-580e26f1'], (function(e,s,t,r,i,a,n,c,o,l,m,u,d,_,p,A){"use strict";const N=n.stringLiteralArray(["9/16","1/1","6/5","5/4","4/3","11/8","1.43/1","3/2","14/9","16/10","1.6180/1","5/3","16/9","1.85/1","1.9/1","2/1","2.2/1","64/21","2.4/1","2.414/1","2.76/1","32/9","18/5","4/1"]),h=n.stringLiteralArray(["maxWidth","minWidth","width"]),y=Array.from(h,(e=>r.dimensionInterpolations[e])),E=i.mergeInterpolations(y);e.AspectRatio=function({children:e,ratio:t="1/1",...r}){const{class:i,...a}=E(r),n={...a,"--oj-c-PRIVATE-DO-NOT-USE-aspect-ratio":t};return s.jsx("div",{class:c.classNames(["gp6npr",i]),style:n,children:e})},e.ratios=N,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=UNSAFE_AspectRatio.js.map