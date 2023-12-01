define(['exports', 'preact/hooks', 'preact/jsx-runtime', './UNSAFE_useId', '../UNSAFE_Floating', '../UNSAFE_Layer', './UNSAFE_useHover', './UNSAFE_useFocus', './UNSAFE_useTouch', '../utils/UNSAFE_mergeProps', '../utils/UNSAFE_arrayUtils', './UNSAFE_useAnimation', './UNSAFE_useComponentTheme', './UNSAFE_useThemeInterpolations', '../utils/UNSAFE_classNames', './UNSAFE_useTooltip/themes/redwood/TooltipContentTheme', '../useThemeInterpolations-48286702', '../useAnimation-95b1d0bd', '../classNames-711dac8e', '../index-182af2cd', './UNSAFE_useColorScheme', '../Floating-86f9017c', 'preact/compat', './UNSAFE_useToggle', '../utils/UNSAFE_logger', '../_curry1-ce36c4e7', '../_curry2-d90c5517', './UNSAFE_useTooltip/themes/TooltipContentStyles.css', 'css!./../TooltipContentStyles.styles.css', './UNSAFE_useTooltip/themes/redwood/TooltipContentBaseTheme.css', 'module', './UNSAFE_useTooltip/themes/redwood/TooltipContentVariants.css', 'css!./../TooltipContentVariants.styles2.css', '../vanilla-extract-recipes-createRuntimeFn.esm-9d536a1b', './UNSAFE_useScale', '../utils/UNSAFE_interpolations/theme', '../UNSAFE_Theme', '../utils-7a8b0c59', '../Common/themes/themeContract.css', '../utils/UNSAFE_mergeInterpolations', '../_curry3-4fb0ed44', '../_has-580e26f1', 'preact', '../Common', '../Common/themes', '../Common/themes/redwood/theme', '../index-f653d9ca', './UNSAFE_useUser', '../utils/PRIVATE_floatingUtils', '../utils/PRIVATE_refUtils', './UNSAFE_useOutsideClick', '../UNSAFE_Floating/themes/redwood/FloatingTheme', '../UNSAFE_Floating/themes/FloatingStyles.css', 'css!./../FloatingStyles.styles.css', '../UNSAFE_Floating/themes/redwood/FloatingBaseTheme.css', 'module', '../UNSAFE_Floating/themes/redwood/FloatingVariants.css', '../vanilla-extract-dynamic.esm-acef6fab', '../UNSAFE_Floating/themes/FloatingContract.css'], (function(e,t,o,n,s,i,r,u,a,l,c,m,d,p,h,g,f,E,A,T,F,S,_,v,U,b,N,y,P,x,C,R,w,B,k,H,I,j,L,D,G,O,M,V,$,K,X,Y,q,z,J,Q,W,Z,ee,te,oe,ne,se){"use strict";const ie=({children:e,id:n,isOpen:s,isDatatip:i,onTransitionEnd:r,...u})=>{const a=t.useRef(null),l=t.useRef(null),{classes:c,styles:m}=d.useComponentTheme(g.TooltipContentRedwoodTheme,{variant:i?"datatip":"tooltip"}),p=f.useThemeInterpolations(),{nodeRef:h}=E.useAnimation(s?"mounted":"unmounted",{animationStates:{mounted:e=>{const t=e.firstChild;return{from:{maxHeight:"0",opacity:"0%"},to:{maxHeight:`${t?.offsetHeight}px`,opacity:i?"100%":"95%"},options:{duration:i?1:100,easing:[0,0,.2,1]}}},unmounted:e=>({from:{opacity:i?"100%":"95%"},to:{maxHeight:"0",opacity:"0%"},options:{duration:i?1:100,easing:[0,0,.2,1]}})},isAnimatedOnMount:!0,onAnimationEnd:()=>r?.()});return t.useEffect((()=>{a.current&&l.current?.offsetHeight&&(a.current.style.height=`${l.current?.offsetHeight}px`)}),[]),o.jsx("div",{ref:a,id:n,role:"tooltip",class:A.classNames([m.wrapper,p]),children:o.jsx("div",{ref:h,class:m.inner,...u,children:o.jsx("div",{ref:l,class:A.classNames([c,m.content]),children:e})})})},re=(c.stringLiteralArray(["start","top-start","top","top-end","end","bottom-end","bottom","bottom-start"]),c.stringLiteralArray(["element","pointer"]),({text:e,isOpen:s=!1,variant:c="tooltip",position:m="bottom",isDisabled:d=!1,anchor:p={x:"element",y:"element"},offset:h={mainAxis:0,crossAxis:0},onToggle:g})=>{const f=d||!e,E=t.useRef(!0),A=t.useRef(!1),[_,v]=t.useState(!f&&s?"mounting":"unmounted"),[U,b]=t.useState(!1);b(!1);const N="datatip"===c,y=t.useRef(!0),{hoverProps:P,isHover:x}=r.useHover({}),{touchProps:C,isTouch:R}=a.useTouch({isDisabled:d}),{focusProps:w,isFocus:B}=u.useFocus({isDisabled:x||R}),{hoverProps:k,isHover:H}=r.useHover({isDisabled:d}),I="pointer"===p.x||"pointer"===p.y,j=t.useRef(n.useId()),L=t.useRef(null),D=t.useRef({x:-9999,y:-9999}),G=I&&!B?D:L,O=N?0:250,M=t.useRef(null),V=t.useRef(null),$=()=>{M.current&&clearTimeout(M.current)},K=t.useCallback((e=>{if(e)switch(_){case"unmounting":case"unmounted":v("mountPending");break;case"unmountPending":$(),v("mounted")}else switch(_){case"mounting":case"mounted":v("unmountPending");break;case"mountPending":$(),J(),v("unmounted")}}),[_]);t.useEffect((()=>{E.current?E.current=!1:v(s?"mounting":"unmounting")}),[s]),t.useEffect((()=>{y.current?y.current=!1:I&&x&&"unmounted"===_||(V.current&&clearTimeout(V.current),V.current=setTimeout((()=>{K(x||B&&!A.current||H||R)}),20))}),[x,B,H,R,I,_,K,A.current]),t.useLayoutEffect((()=>{"mountPending"!==_&&"unmountPending"!==_||(M.current=setTimeout((()=>g?.({value:"mountPending"===_})),O))}),[_,O,g]);const X={onFocus:t.useCallback((e=>{(e.eventPhase===Event.AT_TARGET||e.eventPhase===Event.BUBBLING_PHASE&&N)&&(L.current=e.target)}),[N]),onBlur:t.useCallback((e=>{e.eventPhase===Event.AT_TARGET&&(A.current=!1)}),[])},Y={onMouseEnter:t.useCallback((e=>{(e.eventPhase===Event.AT_TARGET||e.eventPhase===Event.BUBBLING_PHASE&&N)&&(L.current=e.target)}),[N])},q={onKeyUp:t.useCallback((e=>{"Escape"===e.code&&(e.preventDefault(),A.current=!0,g?.({value:!1}))}),[g])};let z;const J=()=>{D.current={x:-9999,y:-9999}};if(f)z=l.mergeProps(P,w,Y,X);else{const e={"aria-describedby":j.current,...I&&{onMouseLeave:()=>{"mounting"!==_&&$()},onMouseMove:e=>{(e.eventPhase===Event.AT_TARGET||e.eventPhase===Event.BUBBLING_PHASE&&N)&&(e=>{if("unmounted"!==_&&("datatip"!==c||"mounted"!==_))return;const t=L?.current?.getBoundingClientRect(),o=document.body.scrollLeft+(t?.left||0)+(t?.width||0),n=document.body.scrollTop+(t?.top||0)+(t?.height||0),s="pointer"===p.x?e.clientX:o,i="pointer"===p.y?e.clientY:n;"mounted"===_?(D.current={x:s,y:i},!0!==U&&b(!0)):"unmounted"===_&&($(),M.current=setTimeout((()=>{"unmounted"===_&&(D.current={x:s,y:i},g?.({value:!0}))}),O))})(e)}}};z=l.mergeProps(P,w,C,Y,X,e,q)}if(f)return $(),J(),{tooltipContent:null,tooltipProps:z};const Q=(e=>{let t="bottom";switch(e){case"top":case"end":case"bottom":case"start":t=e;break;case"top-end":t="top-end-corner";break;case"bottom-end":t="bottom-end-corner";break;case"bottom-start":t="bottom-start-corner";break;case"top-start":t="top-start-corner"}return t})(m),W=F.useColorScheme(),Z=W&&"light"!==W?"light":"dark",ee=o.jsx(ie,{id:j.current,isOpen:["mounting","mounted","unmountPending"].includes(_),...k,isDatatip:N,onTransitionEnd:()=>{"mounting"===_&&v("mounted"),"unmounting"===_&&(J(),v("unmounted"))},children:e}),te=o.jsx(i.Layer,{logicalParentRef:L,children:o.jsx(S.Floating,{anchorRef:G,placement:Q,offsetValue:h,children:"tooltip"===c?o.jsx(T.EnvironmentProvider,{environment:{colorScheme:Z},children:ee}):o.jsx(o.Fragment,{children:ee})})});return{tooltipContent:!["unmounted","mountPending"].includes(_)&&te,tooltipProps:z}});e.useTooltip=({text:e,position:o="bottom",isDisabled:n=!1,anchor:s={x:"element",y:"element"},offset:i,variant:r="tooltip"})=>{const[u,a]=t.useState(!1),l=n||!e,c=i||{mainAxis:8,crossAxis:0},{tooltipContent:m,tooltipProps:d}=re({text:e,isOpen:u,position:o,isDisabled:l,offset:c,anchor:s,variant:r,onToggle:({value:e})=>a(e)});return{tooltipContent:m,tooltipProps:d}},e.useTooltipControlled=re,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=UNSAFE_useTooltip.js.map
