define(['exports', './UNSAFE_classNames', '../_curry1-ce36c4e7', '../_curry3-4fb0ed44', '../_has-580e26f1', '../classNames-711dac8e', '../_curry2-d90c5517'], (function(e,r,c,t,n,s,u){"use strict";var o=function(e){return"[object Object]"===Object.prototype.toString.call(e)},a=t._curry3_1,_=n._has_1,i=a((function(e,r,c){var t,n={};for(t in r)_(t,r)&&(n[t]=_(t,c)?e(t,r[t],c[t]):r[t]);for(t in c)_(t,c)&&!_(t,n)&&(n[t]=c[t]);return n})),f=t._curry3_1,l=o,d=i,y=f((function e(r,c,t){return d((function(c,t,n){return l(t)&&l(n)?e(r,t,n):r(c,t,n)}),c,t)}));const b=(e,r,c)=>"class"===e?s.classNames([r,c]):c;e.mergeInterpolations=e=>r=>e.reduce(((e,c)=>y(b,e,c(r))),{}),Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=UNSAFE_mergeInterpolations.js.map