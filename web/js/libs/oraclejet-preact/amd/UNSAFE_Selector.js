define(['exports', 'preact/jsx-runtime', './utils/UNSAFE_classNames', './utils/UNSAFE_keys', './hooks/PRIVATE_useSelection', './hooks/UNSAFE_useTabbableMode', './PRIVATE_ThemedIcons/CheckboxOffIcon', './PRIVATE_ThemedIcons/CheckboxOnIcon', './PRIVATE_ThemedIcons/CheckboxMixedIcon', './UNSAFE_Flex', './hooks/UNSAFE_useComponentTheme', './hooks/UNSAFE_useInteractionStyle', './UNSAFE_Selector/themes/SelectorStyles.css', './UNSAFE_Radio/themes/redwood/RadioIconTheme', './classNames-711dac8e', './PRIVATE_Icons/CheckboxMixed', './PRIVATE_Icons/CheckboxOn', './PRIVATE_Icons/CheckboxOff', './Flex-cd926f6b', 'preact/hooks', './utils/UNSAFE_arrayUtils', './hooks/UNSAFE_useUser', './index-182af2cd', 'preact', './Common', './Common/themes', './Common/themes/redwood/theme', './Common/themes/themeContract.css', 'preact/compat', './utils/PRIVATE_collectionUtils', './utils/PRIVATE_clientHints', './clientHints-ff5d5d13', './utils/UNSAFE_interpolations/dimensions', './utils/UNSAFE_size', './UNSAFE_Theme', './utils-7a8b0c59', './_curry1-ce36c4e7', './utils/UNSAFE_mergeInterpolations', './_curry3-4fb0ed44', './_curry2-d90c5517', './_has-580e26f1', 'module', './utils/UNSAFE_interpolations/boxalignment', './keys-df123de6', './utils/UNSAFE_interpolations/flexbox', './flexbox-5d7254d1', './utils/UNSAFE_interpolations/flexitem', './flexitem-391ab989', './utils/UNSAFE_logger', './utils/UNSAFE_mergeProps', './hooks/UNSAFE_useHover', './hooks/UNSAFE_useToggle', './hooks/UNSAFE_useActive', 'css!./SelectorStyles.styles.css', './vanilla-extract-recipes-createRuntimeFn.esm-9d536a1b', './UNSAFE_Radio/themes/RadioIconStyles.css', 'css!./RadioIconStyles.styles.css', './UNSAFE_Radio/themes/redwood/RadioIconBaseTheme.css', 'module', './UNSAFE_Radio/themes/redwood/RadioIconVariants.css', 'css!./RadioIconVariants.styles.css', './UNSAFE_Icon', './Icon-242ffb35', './hooks/UNSAFE_useTooltip', './hooks/UNSAFE_useId', './UNSAFE_Floating', './Floating-86f9017c', './index-f653d9ca', './utils/PRIVATE_floatingUtils', './utils/PRIVATE_refUtils', './hooks/UNSAFE_useOutsideClick', './UNSAFE_Floating/themes/redwood/FloatingTheme', './UNSAFE_Floating/themes/FloatingStyles.css', 'css!./FloatingStyles.styles.css', './UNSAFE_Floating/themes/redwood/FloatingBaseTheme.css', 'module', './UNSAFE_Floating/themes/redwood/FloatingVariants.css', './vanilla-extract-dynamic.esm-acef6fab', './UNSAFE_Floating/themes/FloatingContract.css', './UNSAFE_Layer', './useThemeInterpolations-48286702', './hooks/UNSAFE_useColorScheme', './hooks/UNSAFE_useScale', './utils/UNSAFE_interpolations/theme', './hooks/UNSAFE_useFocus', './hooks/UNSAFE_useTouch', './hooks/UNSAFE_useAnimation', './useAnimation-95b1d0bd', './hooks/UNSAFE_useThemeInterpolations', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentTheme', './hooks/UNSAFE_useTooltip/themes/TooltipContentStyles.css', 'css!./TooltipContentStyles.styles.css', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentBaseTheme.css', 'module', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentVariants.css', 'css!./TooltipContentVariants.styles2.css', './UNSAFE_Icon/themes/IconStyle.css', 'css!./IconStyle.styles.css'], (function(e,s,o,t,i,l,n,c,a,h,r,d,S,m,F,A,_,u,E,U,N,k,T,x,y,b,I,p,C,f,g,R,P,V,w,v,j,O,M,B,H,K,z,L,q,D,G,J,Q,W,X,Y,Z,$,ee,se,oe,te,ie,le,ne,ce,ae,he,re,de,Se,me,Fe,Ae,_e,ue,Ee,Ue,Ne,ke,Te,xe,ye,be,Ie,pe,Ce,fe,ge,Re,Pe,Ve,we,ve,je,Oe,Me,Be,He,Ke,ze,Le){"use strict";function qe(e){const{isTabbable:o}=l.useTabbableMode(),{interactionProps:t,applyActiveStyle:i}=d.useInteractionStyle(),{classes:n}=r.useComponentTheme(m.RadioIconRedwoodTheme,{iconSize:"4xUnits"}),c=S.multiVariantStyles({checked:e.checked?e.isPartial?"isPartiallyChecked":"isChecked":"notChecked",active:i?"isActive":"notActive"}),a=F.classNames([n,S.styles.checkbox,c]),h=e.checked?e.isPartial?"mixed":"true":"false";return s.jsx("div",{...t,class:a,tabIndex:o?0:-1,role:"checkbox","aria-label":e["aria-label"],"aria-checked":h,onClick:e.onClick,children:e.checked?e.isPartial?s.jsx(A.CheckboxMixed,{}):s.jsx(_.CheckboxOn,{}):s.jsx(u.CheckboxOff,{})})}const De=e=>{e.stopPropagation()},Ge=e=>{const s=e.onClick;return s?(e.onClick=e=>{s(e),De(e)},e):{onClick:De}};e.Checkbox=qe,e.Selector=function({"aria-label":e,rowKey:o,selectedKeys:l,isPartial:n,selectionMode:c="multiple",onChange:a}){const{selectionProps:h}=i.useSelection((()=>o),l,c,!1,"toggle",!1,a);return s.jsx("div",{class:S.styles.container,...Ge(h),children:s.jsx("div",{class:S.styles.base,children:s.jsx(E.Flex,{align:"center",justify:"center",width:"11x",height:"11x",children:s.jsx(qe,{checked:t.containsKey(l,o),"aria-label":e,isPartial:n})})})})},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=UNSAFE_Selector.js.map