define(['exports', 'preact/jsx-runtime', 'preact/hooks', './hooks/UNSAFE_useTabbableMode', './hooks/UNSAFE_useTranslationBundle', './utils/UNSAFE_classNames', './PRIVATE_ThemedIcons/HelpIcon', './UNSAFE_Popup', './hooks/UNSAFE_useFocusWithin', './useFocusWithin-958da158', './UNSAFE_UserAssistance/themes/UserAssistanceStyles.css', './hooks/UNSAFE_useComponentTheme', './UNSAFE_Label/themes/redwood/LabelTheme', './classNames-711dac8e'], (function(e,s,o,n,u,t,c,r,a,i,l,p,d,h){"use strict";function f(){const e=o.useRef(null),{focusProps:s,isFocused:n}=i.useFocusWithin();return{isFocused:n,popupProps:{onTransitionEnd:o.useCallback((o=>{o?(s.onfocusin&&e.current?.addEventListener("focusin",s.onfocusin,!1),s.onfocusout&&e.current?.addEventListener("focusout",s.onfocusout,!1)):(s.onfocusin&&e.current?.removeEventListener("focusin",s.onfocusin,!1),s.onfocusout&&e.current?.removeEventListener("focusout",s.onfocusout,!1))}),[s.onfocusin,s.onfocusout,e]),ref:e}}}e.CompactHelpSource=function({children:e,id:t,labelEdge:a,source:i}){const[b,m]=o.useState(!1),E=u.useTranslationBundle("@oracle/oraclejet-preact").userAssistance_learnMore(),{isTabbable:F,tabbableModeProps:A}=n.useTabbableMode(),S=o.useRef(null),T=e??E,{baseTheme:N}=p.useComponentTheme(d.LabelRedwoodTheme),_=h.classNames([N,l.helpIconBase,"start"===a&&l.helpIconLabelEdgeStart]),{isFocused:x,popupProps:U}=f(),L=!0===b||!0===x;return s.jsxs(s.Fragment,{children:[s.jsx("a",{target:"_blank",...i&&{href:i},"aria-label":T,class:_,id:t,ref:S,role:"link",onMouseEnter:()=>m(!0),onMouseLeave:()=>m(!1),onFocus:()=>m(!0),onBlur:()=>m(!1),...F?{tabIndex:0}:A,children:s.jsx(c.HelpIcon,{})}),s.jsx(r.Popup,{...U,placement:"end-top-corner",isOpen:L,anchorRef:S,flipOptions:{mainAxis:!0,crossAxis:!1},children:s.jsx("div",{class:l.helpContentStyles,children:T})})]})},e.usePopupFocusWithin=f}));
//# sourceMappingURL=CompactHelpSource-74bf1316.js.map
