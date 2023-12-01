define(['exports', 'preact/hooks', './hooks/UNSAFE_useUser', './utils/PRIVATE_floatingUtils'], (function(t,e,n,o){"use strict";function r(t){return t.split("-")[0]}function i(t){return t.split("-")[1]}function s(t){return["top","bottom"].includes(r(t))?"x":"y"}function l(t){return"y"===t?"height":"width"}function a(t,e,n){let{reference:o,floating:a}=t;const c=o.x+o.width/2-a.width/2,f=o.y+o.height/2-a.height/2,u=s(e),d=l(u),m=o[d]/2-a[d]/2,p="x"===u;let h;switch(r(e)){case"top":h={x:c,y:o.y-a.height};break;case"bottom":h={x:c,y:o.y+o.height};break;case"right":h={x:o.x+o.width,y:f};break;case"left":h={x:o.x-a.width,y:f};break;default:h={x:o.x,y:o.y}}switch(i(e)){case"start":h[u]-=m*(n&&p?-1:1);break;case"end":h[u]+=m*(n&&p?-1:1)}return h}function c(t){return"number"!=typeof t?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(t):{top:t,right:t,bottom:t,left:t}}function f(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}async function u(t,e){var n;void 0===e&&(e={});const{x:o,y:r,platform:i,rects:s,elements:l,strategy:a}=t,{boundary:u="clippingAncestors",rootBoundary:d="viewport",elementContext:m="floating",altBoundary:p=!1,padding:h=0}=e,g=c(h),y=l[p?"floating"===m?"reference":"floating":m],x=f(await i.getClippingRect({element:null==(n=await(null==i.isElement?void 0:i.isElement(y)))||n?y:y.contextElement||await(null==i.getDocumentElement?void 0:i.getDocumentElement(l.floating)),boundary:u,rootBoundary:d,strategy:a})),w=f(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({rect:"floating"===m?{...s.floating,x:o,y:r}:s.reference,offsetParent:await(null==i.getOffsetParent?void 0:i.getOffsetParent(l.floating)),strategy:a}):s[m]);return{top:x.top-w.top+g.top,bottom:w.bottom-x.bottom+g.bottom,left:x.left-w.left+g.left,right:w.right-x.right+g.right}}const d=Math.min,m=Math.max;function p(t,e,n){return m(t,d(e,n))}const h={left:"right",right:"left",bottom:"top",top:"bottom"};function g(t){return t.replace(/left|right|bottom|top/g,(t=>h[t]))}function y(t,e,n){void 0===n&&(n=!1);const o=i(t),r=s(t),a=l(r);let c="x"===r?o===(n?"end":"start")?"right":"left":"start"===o?"bottom":"top";return e.reference[a]>e.floating[a]&&(c=g(c)),{main:c,cross:g(c)}}const x={start:"end",end:"start"};function w(t){return t.replace(/start|end/g,(t=>x[t]))}const b=["top","right","bottom","left"];b.reduce(((t,e)=>t.concat(e,e+"-start",e+"-end")),[]);function v(t){return"x"===t?"y":"x"}function A(t){return t&&t.document&&t.location&&t.alert&&t.setInterval}function R(t){if(null==t)return window;if(!A(t)){const e=t.ownerDocument;return e&&e.defaultView||window}return t}function L(t){return R(t).getComputedStyle(t)}function D(t){return A(t)?"":t?(t.nodeName||"").toLowerCase():""}function T(){const t=navigator.userAgentData;return null!=t&&t.brands?t.brands.map((t=>t.brand+"/"+t.version)).join(" "):navigator.userAgent}function E(t){return t instanceof R(t).HTMLElement}function P(t){return t instanceof R(t).Element}function O(t){return"undefined"!=typeof ShadowRoot&&(t instanceof R(t).ShadowRoot||t instanceof ShadowRoot)}function S(t){const{overflow:e,overflowX:n,overflowY:o}=L(t);return/auto|scroll|overlay|hidden/.test(e+o+n)}function W(t){return["table","td","th"].includes(D(t))}function k(t){const e=/firefox/i.test(T()),n=L(t);return"none"!==n.transform||"none"!==n.perspective||"paint"===n.contain||["transform","perspective"].includes(n.willChange)||e&&"filter"===n.willChange||e&&!!n.filter&&"none"!==n.filter}function C(){return!/^((?!chrome|android).)*safari/i.test(T())}const H=Math.min,N=Math.max,$=Math.round;function j(t,e,n){var o,r,i,s;void 0===e&&(e=!1),void 0===n&&(n=!1);const l=t.getBoundingClientRect();let a=1,c=1;e&&E(t)&&(a=t.offsetWidth>0&&$(l.width)/t.offsetWidth||1,c=t.offsetHeight>0&&$(l.height)/t.offsetHeight||1);const f=P(t)?R(t):window,u=!C()&&n,d=(l.left+(u&&null!=(o=null==(r=f.visualViewport)?void 0:r.offsetLeft)?o:0))/a,m=(l.top+(u&&null!=(i=null==(s=f.visualViewport)?void 0:s.offsetTop)?i:0))/c,p=l.width/a,h=l.height/c;return{width:p,height:h,top:m,right:d+p,bottom:m+h,left:d,x:d,y:m}}function M(t){return(e=t,(e instanceof R(e).Node?t.ownerDocument:t.document)||window.document).documentElement;var e}function V(t){return P(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function z(t){return j(M(t)).left+V(t).scrollLeft}function F(t,e,n){const o=E(e),r=M(e),i=j(t,o&&function(t){const e=j(t);return $(e.width)!==t.offsetWidth||$(e.height)!==t.offsetHeight}(e),"fixed"===n);let s={scrollLeft:0,scrollTop:0};const l={x:0,y:0};if(o||!o&&"fixed"!==n)if(("body"!==D(e)||S(r))&&(s=V(e)),E(e)){const t=j(e,!0);l.x=t.x+e.clientLeft,l.y=t.y+e.clientTop}else r&&(l.x=z(r));return{x:i.left+s.scrollLeft-l.x,y:i.top+s.scrollTop-l.y,width:i.width,height:i.height}}function B(t){return"html"===D(t)?t:t.assignedSlot||t.parentNode||(O(t)?t.host:null)||M(t)}function U(t){return E(t)&&"fixed"!==getComputedStyle(t).position?t.offsetParent:null}function _(t){const e=R(t);let n=U(t);for(;n&&W(n)&&"static"===getComputedStyle(n).position;)n=U(n);return n&&("html"===D(n)||"body"===D(n)&&"static"===getComputedStyle(n).position&&!k(n))?e:n||function(t){let e=B(t);for(O(e)&&(e=e.host);E(e)&&!["html","body"].includes(D(e));){if(k(e))return e;e=e.parentNode}return null}(t)||e}function I(t){if(E(t))return{width:t.offsetWidth,height:t.offsetHeight};const e=j(t);return{width:e.width,height:e.height}}function X(t){const e=B(t);return["html","body","#document"].includes(D(e))?t.ownerDocument.body:E(e)&&S(e)?e:X(e)}function Y(t,e){var n;void 0===e&&(e=[]);const o=X(t),r=o===(null==(n=t.ownerDocument)?void 0:n.body),i=R(o),s=r?[i].concat(i.visualViewport||[],S(o)?o:[]):o,l=e.concat(s);return r?l:l.concat(Y(s))}function q(t,e,n){return"viewport"===e?f(function(t,e){const n=R(t),o=M(t),r=n.visualViewport;let i=o.clientWidth,s=o.clientHeight,l=0,a=0;if(r){i=r.width,s=r.height;const t=C();(t||!t&&"fixed"===e)&&(l=r.offsetLeft,a=r.offsetTop)}return{width:i,height:s,x:l,y:a}}(t,n)):P(e)?function(t,e){const n=j(t,!1,"fixed"===e),o=n.top+t.clientTop,r=n.left+t.clientLeft;return{top:o,left:r,x:r,y:o,right:r+t.clientWidth,bottom:o+t.clientHeight,width:t.clientWidth,height:t.clientHeight}}(e,n):f(function(t){var e;const n=M(t),o=V(t),r=null==(e=t.ownerDocument)?void 0:e.body,i=N(n.scrollWidth,n.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),s=N(n.scrollHeight,n.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0);let l=-o.scrollLeft+z(t);const a=-o.scrollTop;return"rtl"===L(r||n).direction&&(l+=N(n.clientWidth,r?r.clientWidth:0)-i),{width:i,height:s,x:l,y:a}}(M(t)))}function G(t){const e=Y(t),n=["absolute","fixed"].includes(L(t).position)&&E(t)?_(t):t;return P(n)?e.filter((t=>P(t)&&function(t,e){const n=null==e.getRootNode?void 0:e.getRootNode();if(t.contains(e))return!0;if(n&&O(n)){let n=e;do{if(n&&t===n)return!0;n=n.parentNode||n.host}while(n)}return!1}(t,n)&&"body"!==D(t))):[]}const J={getClippingRect:function(t){let{element:e,boundary:n,rootBoundary:o,strategy:r}=t;const i=[..."clippingAncestors"===n?G(e):[].concat(n),o],s=i[0],l=i.reduce(((t,n)=>{const o=q(e,n,r);return t.top=N(o.top,t.top),t.right=H(o.right,t.right),t.bottom=H(o.bottom,t.bottom),t.left=N(o.left,t.left),t}),q(e,s,r));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{rect:e,offsetParent:n,strategy:o}=t;const r=E(n),i=M(n);if(n===i)return e;let s={scrollLeft:0,scrollTop:0};const l={x:0,y:0};if((r||!r&&"fixed"!==o)&&(("body"!==D(n)||S(i))&&(s=V(n)),E(n))){const t=j(n,!0);l.x=t.x+n.clientLeft,l.y=t.y+n.clientTop}return{...e,x:e.x-s.scrollLeft+l.x,y:e.y-s.scrollTop+l.y}},isElement:P,getDimensions:I,getOffsetParent:_,getDocumentElement:M,getElementRects:t=>{let{reference:e,floating:n,strategy:o}=t;return{reference:F(e,_(n),o),floating:{...I(n),x:0,y:0}}},getClientRects:t=>Array.from(t.getClientRects()),isRTL:t=>"rtl"===L(t).direction};const K=(t,e,n)=>(async(t,e,n)=>{const{placement:o="bottom",strategy:r="absolute",middleware:i=[],platform:s}=n,l=await(null==s.isRTL?void 0:s.isRTL(e));let c=await s.getElementRects({reference:t,floating:e,strategy:r}),{x:f,y:u}=a(c,o,l),d=o,m={},p=0;for(let n=0;n<i.length;n++){const{name:h,fn:g}=i[n],{x:y,y:x,data:w,reset:b}=await g({x:f,y:u,initialPlacement:o,placement:d,strategy:r,middlewareData:m,rects:c,platform:s,elements:{reference:t,floating:e}});f=null!=y?y:f,u=null!=x?x:u,m={...m,[h]:{...m[h],...w}},b&&p<=50&&(p++,"object"==typeof b&&(b.placement&&(d=b.placement),b.rects&&(c=!0===b.rects?await s.getElementRects({reference:t,floating:e,strategy:r}):b.rects),({x:f,y:u}=a(c,d,l))),n=-1)}return{x:f,y:u,placement:d,strategy:r,middlewareData:m}})(t,e,{platform:J,...n}),Q=t=>({name:"offset",options:t,fn:async e=>function(t){return void 0===t&&(t=0),{name:"offset",options:t,async fn(e){const{x:n,y:o}=e,l=await async function(t,e){const{placement:n,platform:o,elements:l}=t,a=await(null==o.isRTL?void 0:o.isRTL(l.floating)),c=r(n),f=i(n),u="x"===s(n),d=["left","top"].includes(c)?-1:1,m=a&&u?-1:1,p="function"==typeof e?e(t):e;let{mainAxis:h,crossAxis:g,alignmentAxis:y}="number"==typeof p?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...p};return f&&"number"==typeof y&&(g="end"===f?-1*y:y),u?{x:g*m,y:h*d}:{x:h*d,y:g*m}}(e,t);return{x:n+l.x,y:o+l.y,data:l}}}}((e=>{let n;if(null!=(null!=e.middlewareData.flip?.overflows?e.middlewareData.flip?.overflows[0]:null)&&null!=t&&"object"==typeof t&&(n=Z(e.placement,e.initialPlacement,t)),!t)return 0;return n??t})).fn(e)}),Z=(t,e,n)=>{const o=e.split("-")[0],r=t.split("-")[0],i=e.split("-")[1],s=t.split("-")[1];return("right"===o||"left"===o)&&o===r&&i!==s||("top"===o||"bottom"===o)&&o===r&&i!==s?{mainAxis:n&&"object"==typeof n&&n.mainAxis?n.mainAxis:0,crossAxis:n&&"object"==typeof n&&n.crossAxis?-n.crossAxis:0}:n};function tt(t,e){if(t===e)return!0;if(typeof t!=typeof e)return!1;if("function"==typeof t&&t.toString()===e.toString())return!0;let n,o,r;if(t&&e&&"object"==typeof t){if(Array.isArray(t)){if(n=t.length,n!=e.length)return!1;for(o=n;0!=o--;)if(!tt(t[o],e[o]))return!1;return!0}if(r=Object.keys(t),n=r.length,n!==Object.keys(e).length)return!1;for(o=n;0!=o--;)if(!Object.prototype.hasOwnProperty.call(e,r[o]))return!1;for(o=n;0!=o--;){const n=r[o];if(("_owner"!==n||!t.$$typeof)&&!tt(t[n],e[n]))return!1}return!0}return t!=t&&e!=e}const et=(t,e)=>{const n=t.split("-")[0],r=t.split("-")[1],i=o.normalizePosition(n,e);let s,l;r&&(s={top:"start",bottom:"end"},l=r.replace(/top|bottom/g,(t=>s[t])));const a=["top","right","bottom","left","top-start","right-start","bottom-start","left-start","top-end","right-end","bottom-end","left-end"].filter((t=>l&&t===`${i}-${l}`||!l&&t===`${i}`))[0];return a||"bottom"};t.D=function(t){return void 0===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:i}=e,{mainAxis:l=!0,crossAxis:a=!1,limiter:c={fn:t=>{let{x:e,y:n}=t;return{x:e,y:n}}},...f}=t,d={x:n,y:o},m=await u(e,f),h=s(r(i)),g=v(h);let y=d[h],x=d[g];if(l){const t="y"===h?"bottom":"right";y=p(y+m["y"===h?"top":"left"],y,y-m[t])}if(a){const t="y"===g?"bottom":"right";x=p(x+m["y"===g?"top":"left"],x,x-m[t])}const w=c.fn({...e,[h]:y,[g]:x});return{...w,data:{x:w.x-n,y:w.y-o}}}}},t.L=function(t){return void 0===t&&(t={}),{options:t,fn(e){const{x:n,y:o,placement:i,rects:l,middlewareData:a}=e,{offset:c=0,mainAxis:f=!0,crossAxis:u=!0}=t,d={x:n,y:o},m=s(i),p=v(m);let h=d[m],g=d[p];const y="function"==typeof c?c({...l,placement:i}):c,x="number"==typeof y?{mainAxis:y,crossAxis:0}:{mainAxis:0,crossAxis:0,...y};if(f){const t="y"===m?"height":"width",e=l.reference[m]-l.floating[t]+x.mainAxis,n=l.reference[m]+l.reference[t]-x.mainAxis;h<e?h=e:h>n&&(h=n)}if(u){var w,b,A,R;const t="y"===m?"width":"height",e=["top","left"].includes(r(i)),n=l.reference[p]-l.floating[t]+(e&&null!=(w=null==(b=a.offset)?void 0:b[p])?w:0)+(e?0:x.crossAxis),o=l.reference[p]+l.reference[t]+(e?0:null!=(A=null==(R=a.offset)?void 0:R[p])?A:0)-(e?x.crossAxis:0);g<n?g=n:g>o&&(g=o)}return{[m]:h,[p]:g}}}},t.N=function(t,e,n,o){void 0===o&&(o={});const{ancestorScroll:r=!0,ancestorResize:i=!0,elementResize:s=!0,animationFrame:l=!1}=o,a=r&&!l,c=i&&!l,f=a||c?[...P(t)?Y(t):[],...Y(e)]:[];f.forEach((t=>{a&&t.addEventListener("scroll",n,{passive:!0}),c&&t.addEventListener("resize",n)}));let u,d=null;s&&(d=new ResizeObserver(n),P(t)&&!l&&d.observe(t),d.observe(e));let m=l?j(t):null;return l&&function e(){const o=j(t);!m||o.x===m.x&&o.y===m.y&&o.width===m.width&&o.height===m.height||n(),m=o,u=requestAnimationFrame(e)}(),s||n(),()=>{var t;f.forEach((t=>{a&&t.removeEventListener("scroll",n),c&&t.removeEventListener("resize",n)})),null==(t=d)||t.disconnect(),d=null,l&&cancelAnimationFrame(u)}},t.b=function(t){return void 0===t&&(t={}),{name:"flip",options:t,async fn(e){var n;const{placement:o,middlewareData:i,rects:s,initialPlacement:l,platform:a,elements:c}=e,{mainAxis:f=!0,crossAxis:d=!0,fallbackPlacements:m,fallbackStrategy:p="bestFit",flipAlignment:h=!0,...x}=t,b=r(o),v=m||(b!==l&&h?function(t){const e=g(t);return[w(t),e,w(e)]}(l):[g(l)]),A=[l,...v],R=await u(e,x),L=[];let D=(null==(n=i.flip)?void 0:n.overflows)||[];if(f&&L.push(R[b]),d){const{main:t,cross:e}=y(o,s,await(null==a.isRTL?void 0:a.isRTL(c.floating)));L.push(R[t],R[e])}if(D=[...D,{placement:o,overflows:L}],!L.every((t=>t<=0))){var T,E;const t=(null!=(T=null==(E=i.flip)?void 0:E.index)?T:0)+1,e=A[t];if(e)return{data:{index:t,overflows:D},reset:{placement:e}};let n="bottom";switch(p){case"bestFit":{var P;const t=null==(P=D.map((t=>[t,t.overflows.filter((t=>t>0)).reduce(((t,e)=>t+e),0)])).sort(((t,e)=>t[1]-e[1]))[0])?void 0:P[0].placement;t&&(n=t);break}case"initialPlacement":n=l}if(o!==n)return{reset:{placement:n}}}return{}}}},t.k=function(t){return void 0===t&&(t={}),{name:"size",options:t,async fn(e){const{placement:n,rects:o,platform:s,elements:l}=e,{apply:a,...c}=t,f=await u(e,c),d=r(n),p=i(n);let h,g;"top"===d||"bottom"===d?(h=d,g=p===(await(null==s.isRTL?void 0:s.isRTL(l.floating))?"start":"end")?"left":"right"):(g=d,h="end"===p?"top":"bottom");const y=m(f.left,0),x=m(f.right,0),w=m(f.top,0),b=m(f.bottom,0),v={availableHeight:o.floating.height-(["left","right"].includes(n)?2*(0!==w||0!==b?w+b:m(f.top,f.bottom)):f[h]),availableWidth:o.floating.width-(["top","bottom"].includes(n)?2*(0!==y||0!==x?y+x:m(f.left,f.right)):f[g])},A=await s.getDimensions(l.floating);null==a||a({...e,...v});const R=await s.getDimensions(l.floating);return A.width!==R.width||A.height!==R.height?{reset:{rects:!0}}:{}}}},t.logicalSide=et,t.m=t=>({name:"arrow",options:t,async fn(e){const{element:n,padding:o=0}=null!=t?t:{},{x:r,y:a,placement:f,rects:u,platform:d}=e;if(null==n)return{};const m=c(o),h={x:r,y:a},g=s(f),y=i(f),x=l(g),w=await d.getDimensions(n),b="y"===g?"top":"left",v="y"===g?"bottom":"right",A=u.reference[x]+u.reference[g]-h[g]-u.floating[x],R=h[g]-u.reference[g],L=await(null==d.getOffsetParent?void 0:d.getOffsetParent(n));let D=L?"y"===g?L.clientHeight||0:L.clientWidth||0:0;0===D&&(D=u.floating[x]);const T=A/2-R/2,E=m[b],P=D-w[x]-m[v],O=D/2-w[x]/2+T,S=p(E,O,P),W=("start"===y?m[b]:m[v])>0&&O!==S&&u.reference[x]<=u.floating[x];return{[g]:h[g]-(W?O<E?E-O:P-O:0),data:{[g]:S,centerOffset:O-S}}}}),t.offset=Q,t.useFloating=function({middleware:t,placement:r,strategy:i,onPosition:s,whileElementsMounted:l}){["top","top-start","top-end","top-start-corner","top-end-corner","start","start-top","start-bottom","start-top-corner","start-bottom-corner","bottom","bottom-start","bottom-end","bottom-start-corner","bottom-end-corner","end","end-top","end-bottom","end-top-corner","end-bottom-corner"].includes(r)||(r="bottom");const a=e.useRef(null),c=e.useRef(null),[f,u]=e.useState(null),[d,m]=e.useState(null),p=function(t){const n=e.useRef(t);return e.useLayoutEffect((()=>{n.current=t})),n}(l),h=e.useRef(!1),{direction:g}=n.useUser(),[y,x]=e.useState({x:null,y:null,strategy:i??"absolute",placement:"bottom",middlewareData:{}}),w=e.useRef(y),[b,v]=e.useState(t);tt(b?.map((({options:t})=>t)),t?.map((({options:t})=>t)))||v(t);const A=e.useCallback((()=>{if(!a.current||!c.current)return;const t=((t,e)=>{const n=t.split("-")[0],o=t.split("-")[1];if(null==t.split("-")[2])return{placement:t,offset:void 0};const r=["top-start","start-top","bottom-start","start-bottom","top-end","end-top","bottom-end","end-bottom"].filter((t=>t===`${n}-${o}`))[0];return"start"==o?{placement:r,offset:{crossAxis:-e.offsetWidth}}:"end"==o?{placement:r,offset:{crossAxis:e.offsetWidth}}:"top"==o?{placement:r,offset:{crossAxis:-e.offsetHeight}}:{placement:r,offset:{crossAxis:e.offsetHeight}}})(r,c.current),e=et(t.placement,g),n=b?.map((e=>{if("offset"===e.name){if("function"==typeof e.options)return null==t.offset?e:Q(t.offset);const n="number"==typeof e.options?{mainAxis:e.options,crossAxis:0}:e.options;return Q({mainAxis:(n&&n.mainAxis)??0,crossAxis:((t.offset&&t.offset.crossAxis)??0)+((n&&n.crossAxis)??0)})}return e}));K(a.current,c.current,{middleware:n,placement:e,strategy:i}).then((t=>{if(h.current){if(t.placement!==w.current.placement||t.x!==w.current.x||t.y!==w.current.y||t.middlewareData.arrow?.x!=w.current.middlewareData.arrow?.x||t.middlewareData.arrow?.y!=w.current.middlewareData.arrow?.y||t.middlewareData.arrow?.centerOffset!=w.current.middlewareData.arrow?.centerOffset){const e=n?.find((t=>"offset"===t.name))?.options,i=((t,e)=>{const n=t.split("-")[0];if("top"===n||"bottom"===n)return t;const r=t.split("-")[1],i=o.reverseNormalizePosition(n,e),s={start:"top",end:"bottom"},l=null!=r?r.replace(/start|end/g,(t=>s[t])):null,a=["top","top-start","top-end","end","end-top","end-bottom","bottom-start","bottom-end","bottom","start","start-top","start-bottom"].filter((t=>l&&t===`${i}-${l}`||!l&&t===`${i}`))[0];return a||"bottom"})(t.placement,g),l=t.middlewareData.offset,a={placement:i,origPlacement:r,x:t.x,y:t.y,arrow:t.middlewareData.arrow,offset:l,origOffset:e};s?.(a)}(t=>{w.current=t,x(t)})(t)}}))}),[b,r,g,i,s]);e.useLayoutEffect((()=>(h.current=!0,()=>{h.current=!1})),[]),e.useLayoutEffect((()=>{if(f&&d){if(p.current)return p.current(f,d,A);A()}}),[f,d,A,p]);const R=e.useCallback((t=>{a.current!==t&&(a.current=t,u(t))}),[]),L=e.useCallback((t=>{c.current!==t&&(c.current=t,m(t))}),[]),D=e.useMemo((()=>({reference:a,floating:c})),[]);return e.useMemo((()=>({...y,update:A,refs:D,reference:R,floating:L})),[y,A,D,R,L])}}));
//# sourceMappingURL=index-f653d9ca.js.map