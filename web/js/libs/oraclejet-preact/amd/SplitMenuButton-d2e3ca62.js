define(['exports', 'preact/jsx-runtime', './UNSAFE_ButtonLayout', './PRIVATE_ThemedIcons/NavDownIcon', './UNSAFE_Menu', './UNSAFE_BaseButton', './utils/UNSAFE_classNames', './hooks/UNSAFE_useTabbableMode', './utils/UNSAFE_interpolations/dimensions', './utils/UNSAFE_mergeInterpolations', 'module', 'preact/compat', 'preact/hooks', './classNames-711dac8e', './BaseButton-43499a3c', './ButtonLayout-3ff84cd1', './Menu-94e30196'], (function(e,n,s,t,a,i,o,l,r,c,d,u,p,m,b,y,B){"use strict";const f="_1wi4nye",h="_1qljftu",j="_1jbmydi",v="_12wt61q",x=["embedded","min","noBorderRadiusStart"],N=[...x,"active"],A=["embedded","fill","noBorderRadiusEnd"],D=[...A,"active"],_=[...Object.values(r.dimensionInterpolations)],k=c.mergeInterpolations(_),E=u.forwardRef((({children:e,label:s="",variant:a="outlined",isDisabled:i=!1,size:o="md",onAction:r,...c},d)=>{const[u,x]=p.useState(!1),[N,A]=p.useState(!1),{class:D,..._}=k(c),E=p.useCallback((e=>{" "===e.key||"Enter"===e.key?A(!0):"ArrowDown"==e.key&&(!i&&x((e=>!e)),e.preventDefault())}),[i,x,A]),I=p.useCallback((e=>{" "!==e.key&&"Enter"!==e.key||(!i&&r&&r(),A(!1))}),[i,r,A]),U=p.useCallback((()=>{A(!1)}),[A]),F=p.useRef(null);p.useImperativeHandle(d,(()=>F.current),[F]);const g=()=>{x(!u)},M=e=>{"dismissed"!==e.reason&&"itemAction"!==e.reason||F.current?.focus(),x(!1)},R=m.classNames([f,i&&h]),z=m.classNames([j]),C=()=>n.jsx(b.BaseButton,{elementDetails:{type:"span"},ref:F,isDisabled:i,styling:["container","min"],variant:a,size:o,"aria-label":s,"aria-roledescription":"split menu button, press down arrow to invoke menu","aria-expanded":u,children:n.jsxs(l.TabbableModeContext.Provider,{value:{isTabbable:!1},children:[n.jsx(b.BaseButton,{elementDetails:{type:"span"},variant:a,styling:w(N),size:o,isDisabled:i,"aria-hidden":!0,onAction:r,children:s}),n.jsx("div",{class:`${R}`}),n.jsx(b.BaseButton,{elementDetails:{type:"span"},variant:a,styling:S(u),size:o,isDisabled:i,"aria-hidden":!0,onAction:g,children:n.jsx(y.ButtonLayout,{display:"icons",startIcon:n.jsx(t.NavDownIcon,{}),size:o,styling:"embedded"})})]})});return i?n.jsx("span",{role:"toolbar",class:`${z} ${D}`,style:_,children:C()}):n.jsxs("span",{role:"toolbar",class:`${z} ${D}`,style:_,onKeyDown:!i&&E,onKeyUp:I,onBlur:U,children:[C(),n.jsx(B.Menu,{anchorRef:F,isOpen:u,onClose:M,children:n.jsx("span",{className:v,children:e})})]})}));function S(e){return e?N:x}function w(e){return e?D:A}e.SplitMenuButton=E}));
//# sourceMappingURL=SplitMenuButton-d2e3ca62.js.map