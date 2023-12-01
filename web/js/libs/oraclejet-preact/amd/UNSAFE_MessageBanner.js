define(['exports', 'preact/jsx-runtime', 'preact/hooks', './hooks/UNSAFE_useComponentTheme', './utils/UNSAFE_classNames', './hooks/PRIVATE_useMessagesFocusManager', './PRIVATE_Message', './UNSAFE_Flex', './UNSAFE_LiveRegion', './UNSAFE_MessageBanner/themes/redwood/MessageBannerTheme', './classNames-711dac8e', './Flex-cd926f6b', './MessagesManager-a5b0f8e7', './MessageUtils-d7aa982a', './utils/UNSAFE_logger', './_curry1-ce36c4e7', './_curry2-d90c5517', './utils/PRIVATE_timer', './PRIVATE_Message/themes/MessageStyles.css', 'css!./MessageStyles.styles.css', './MessageCloseButton-00ad3ddc', './UNSAFE_IconButton', './IconButton-9c80142c', 'preact', './UNSAFE_BaseButton', './BaseButton-43499a3c', './hooks/UNSAFE_usePress', './hooks/UNSAFE_useHover', './hooks/UNSAFE_useToggle', './hooks/UNSAFE_useActive', 'preact/compat', 'module', './utils/UNSAFE_interpolations/dimensions', './utils/UNSAFE_arrayUtils', './utils/UNSAFE_size', './UNSAFE_Theme', './utils-7a8b0c59', './Common/themes/themeContract.css', './utils/UNSAFE_mergeInterpolations', './_curry3-4fb0ed44', './_has-580e26f1', './utils/PRIVATE_clientHints', './clientHints-ff5d5d13', './hooks/UNSAFE_useTabbableMode', './utils/UNSAFE_mergeProps', './UNSAFE_ButtonLayout', './ButtonLayout-3ff84cd1', './UNSAFE_Text', './Text-4cc07262', './UNSAFE_Text/themes/TextStyles.css', 'css!./TextStyles.styles.css', './vanilla-extract-recipes-createRuntimeFn.esm-9d536a1b', './hooks/UNSAFE_useTooltip', './hooks/UNSAFE_useId', './UNSAFE_Floating', './Floating-86f9017c', './index-f653d9ca', './hooks/UNSAFE_useUser', './index-182af2cd', './Common', './Common/themes', './Common/themes/redwood/theme', './utils/PRIVATE_floatingUtils', './utils/PRIVATE_refUtils', './hooks/UNSAFE_useOutsideClick', './UNSAFE_Floating/themes/redwood/FloatingTheme', './UNSAFE_Floating/themes/FloatingStyles.css', 'css!./FloatingStyles.styles.css', './UNSAFE_Floating/themes/redwood/FloatingBaseTheme.css', 'module', './UNSAFE_Floating/themes/redwood/FloatingVariants.css', './vanilla-extract-dynamic.esm-acef6fab', './UNSAFE_Floating/themes/FloatingContract.css', './UNSAFE_Layer', './useThemeInterpolations-48286702', './hooks/UNSAFE_useColorScheme', './hooks/UNSAFE_useScale', './utils/UNSAFE_interpolations/theme', './hooks/UNSAFE_useFocus', './hooks/UNSAFE_useTouch', './hooks/UNSAFE_useAnimation', './useAnimation-95b1d0bd', './hooks/UNSAFE_useThemeInterpolations', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentTheme', './hooks/UNSAFE_useTooltip/themes/TooltipContentStyles.css', 'css!./TooltipContentStyles.styles.css', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentBaseTheme.css', 'module', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentVariants.css', 'css!./TooltipContentVariants.styles2.css', './PRIVATE_ThemedIcons/CloseIcon', './UNSAFE_Icon', './Icon-242ffb35', './UNSAFE_Icon/themes/IconStyle.css', 'css!./IconStyle.styles.css', './MessageDetail-1781f60a', './MessageFormattingUtils-d9c9a93f', './utils/UNSAFE_getLocale', './utils/UNSAFE_stringUtils', './stringUtils-46147426', './Message.types-1d4527af', './MessageStartIcon-2f4684ec', './PRIVATE_ThemedIcons/MessageConfirmationIcon', './PRIVATE_ThemedIcons/MessageErrorIcon', './PRIVATE_ThemedIcons/MessageInfoIcon', './PRIVATE_ThemedIcons/MessageWarningIcon', './MessageSummary-c98dd983', './MessageTimestamp-aebdab79', './utils/UNSAFE_interpolations/boxalignment', './keys-df123de6', './utils/UNSAFE_interpolations/flexbox', './flexbox-5d7254d1', './utils/UNSAFE_interpolations/flexitem', './flexitem-391ab989', './utils/UNSAFE_soundUtils', './UNSAFE_MessageBanner/themes/MessageBannerStyles.css', 'css!./MessageBannerStyles.styles.css', './UNSAFE_MessageBanner/themes/redwood/MessageBannerBaseTheme.css', 'module', './UNSAFE_MessageBanner/themes/redwood/MessageBannerVariants.css', 'css!./MessageBannerVariants.styles2.css', './PRIVATE_TransitionGroup', './hooks/UNSAFE_useMessagesContext'], (function(e,s,t,o,n,a,i,l,r,c,u,d,g,h,m,F,S,_,A,E,U,N,T,f,p,M,y,x,I,k,B,R,C,b,v,w,V,P,H,j,L,z,O,W,$,D,G,K,q,J,Q,X,Y,Z,ee,se,te,oe,ne,ae,ie,le,re,ce,ue,de,ge,he,me,Fe,Se,_e,Ae,Ee,Ue,Ne,Te,fe,pe,Me,ye,xe,Ie,ke,Be,Re,Ce,be,ve,we,Ve,Pe,He,je,Le,ze,Oe,We,$e,De,Ge,Ke,qe,Je,Qe,Xe,Ye,Ze,es,ss,ts,os,ns,as,is,ls,rs,cs,us,ds,gs,hs,ms){"use strict";const Fs={entering:e=>({to:{maxHeight:`${e.scrollHeight}px`,overflow:"hidden"},options:{duration:250},end:{maxHeight:"none",overflow:"initial"}}),exiting:e=>({..."none"===e.style.maxHeight&&{from:{maxHeight:`${e.scrollHeight}px`,overflow:"hidden"}},to:{maxHeight:0,overflow:"hidden"},end:{maxHeight:0,overflow:"hidden"},options:{duration:250}})},Ss={maxHeight:0,overflow:"hidden"};e.MessageBanner=function({closeButtonRenderer:e,detailRendererKey:n,data:l,onClose:m,renderers:F,translations:S,type:_="section"}){const A=t.useRef(new Map),E=t.useRef(null),U=t.useRef(null),[N,T]=t.useState(),[f,p]=t.useState(l.length>0),M=t.useRef(l.length),y=t.useRef(0);M.current=l.length;const x=t.useCallback((e=>s=>A.current.set(e,s)),[]);t.useImperativeHandle(U,(()=>({focus:()=>{if(l.length){const e=l[0].key;return A.current.get(e)?.focus(),!0}return!1},contains:e=>!(!l.length||!e)&&(E.current?.contains(e)??!1)})),[l]);const{controller:I,handlers:k}=a.useMessageFocusManager(U,{onFocus:t.useCallback((()=>{T(S?.navigationFromMessagesRegion)}),[T,S])}),B=t.useCallback((e=>{m?.(e)}),[m]),R=t.useCallback(((e,s,t)=>{const o=t?.contains(document.activeElement);if(0===M.current)return p(!1),void(o&&I.restorePriorFocus());const n=s+1<l.length?s+1:s-1;if(n>-1&&o){const e=l[n].key;A.current.get(e)?.focus()}}),[I,l]);if(t.useEffect((()=>{l.length?(p(!0),l.length>y.current&&T(S?.navigationToMessagesRegion),I.prioritize()):T(""),y.current=l.length}),[I,l,S]),!f&&0===l.length)return null;const{classes:C}=o.useComponentTheme(c.MessageBannerRedwoodTheme);return s.jsx("div",{ref:E,class:u.classNames(["oj-c-messagebanner",C]),tabIndex:-1,...k,children:s.jsxs(d.Flex,{direction:"column",gap:"section"===_?"1x":void 0,children:[s.jsx(g.MessagesManager,{animationStates:Fs,initialAnimationStyles:Ss,data:l,onMessageWillRemove:R,children:({index:t,item:o})=>s.jsx(i.Message,{messageRef:x(o.key),item:o,closeButtonRenderer:e,detailRenderer:h.getRenderer(o,n,F),index:t,variant:"page"===_?"pageBanner":"sectionBanner",onClose:B,translations:S},o.key)}),s.jsx(r.LiveRegion,{children:N})]})})},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=UNSAFE_MessageBanner.js.map
