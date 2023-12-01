define(['exports', 'preact/jsx-runtime', './utils/UNSAFE_classNames', './UNSAFE_Flex', './hooks/UNSAFE_useFormContext', './hooks/UNSAFE_useFormFieldContext', './utils/UNSAFE_size', 'css!./LabelValueLayoutStyles.styles.css', './hooks/UNSAFE_useComponentTheme', './UNSAFE_TextField/themes/redwood/TextFieldTheme', './UNSAFE_Radio/themes/redwood/RadioTheme', './UNSAFE_Label/themes/redwood/LabelTheme', './UNSAFE_TextField/themes/redwood/FormLayoutTheme', './classNames-711dac8e', './Flex-cd926f6b', './utils/UNSAFE_interpolations/dimensions', './utils/UNSAFE_arrayUtils', './_curry1-ce36c4e7', './UNSAFE_Theme', './utils-7a8b0c59', './Common/themes/themeContract.css', './utils/UNSAFE_mergeInterpolations', './_curry3-4fb0ed44', './_curry2-d90c5517', './_has-580e26f1', 'module', './utils/UNSAFE_interpolations/boxalignment', './keys-df123de6', './utils/UNSAFE_interpolations/flexbox', './flexbox-5d7254d1', './utils/UNSAFE_interpolations/flexitem', './flexitem-391ab989', 'preact', 'preact/hooks', './utils/UNSAFE_logger', './UNSAFE_TextField/themes/TextFieldStyles.css', 'css!./SkeletonStyles.styles.css', 'css!./TextFieldLoadingStyles.styles.css', 'css!./TextFieldStyles.styles.css', './UNSAFE_TextField/themes/redwood/TextFieldBaseTheme.css', 'module', './UNSAFE_TextField/themes/redwood/TextFieldVariants.css', 'css!./TextFieldVariants.styles.css', './vanilla-extract-recipes-createRuntimeFn.esm-9d536a1b', './UNSAFE_Radio/themes/RadioStyles.css', 'css!./RadioStyles.styles.css', './UNSAFE_Radio/themes/redwood/RadioBaseTheme.css', 'module', './UNSAFE_Radio/themes/redwood/RadioVariants.css', './UNSAFE_Label/themes/LabelStyles.css', 'css!./LabelStyles.styles.css', './UNSAFE_Label/themes/redwood/LabelBaseTheme.css', 'module', './UNSAFE_Label/themes/redwood/LabelVariants.css', './UNSAFE_TextField/themes/FormLayoutStyles.css', './UNSAFE_TextField/themes/redwood/FormLayoutBaseTheme.css', 'module'], (function(e,s,t,l,a,o,d,r,i,m,_,n,S,y,F,c,u,h,x,b,T,L,N,U,A,E,p,w,R,V,f,C,z,B,g,v,j,k,I,W,G,P,M,O,$,q,D,H,J,K,Q,X,Y,Z,ee,se,te){"use strict";var le="LabelValueLayoutStyles_labelInnerStyles_base__z3rxc54",ae="LabelValueLayoutStyles_labelInnerStyles_start__z3rxc55",oe="LabelValueLayoutStyles_labelInnerStyles_startNotPureReadonly__z3rxc56",de="LabelValueLayoutStyles_labelInnerStyles_startWithNoTopRadioGroupUA__z3rxc57",re="LabelValueLayoutStyles_labelInnerStyles_noWrap__z3rxc58",ie="LabelValueLayoutStyles_labelSlotStyles_base__z3rxc50",me="LabelValueLayoutStyles_labelSlotStyles_start__z3rxc51",_e="LabelValueLayoutStyles_labelSlotStyles_top__z3rxc52",ne="LabelValueLayoutStyles_labelSlotStyles_topPureReadonly__z3rxc53";e.LabelValueLayout=({label:e,labelEdge:t,children:l,labelStartWidth:r="33%",parentComponentVariant:c="textField",hasTopUserAssistance:u=!1})=>{const{baseTheme:h}=i.useComponentTheme(m.TextFieldRedwoodTheme),{baseTheme:x}=i.useComponentTheme(_.RadioRedwoodTheme),{baseTheme:b}=i.useComponentTheme(n.LabelRedwoodTheme),{baseTheme:T}=i.useComponentTheme(S.FormLayoutRedwoodTheme),L=d.sizeToCSS(r),N=`calc(100% - ${L})`,U="start"===t?{flexBasis:L,width:L,maxWidth:L}:{},A="start"===t?{flexBasis:N,width:N,maxWidth:N}:{},{isFormLayout:E,isReadonly:p,labelWrapping:w}=a.useFormContext(),{isReadonly:R}=o.useFormFieldContext(),V=E&&p||!E&&R,f=y.classNames([T,ie,"start"===t&&me,"top"===t&&_e,"top"===t&&V&&ne]),C=y.classNames(["textField"===c&&h,"radioGroup"===c&&x,"radioGroup"===c&&b,T,le,"start"===t&&ae,"textField"===c&&"start"===t&&!V&&oe,"radioGroup"===c&&"start"===t&&!u&&de,"truncate"===w&&re]);return s.jsxs(F.Flex,{wrap:"wrap",align:"start",children:[s.jsx("div",{class:f,style:U,children:s.jsx("div",{class:C,children:e})}),s.jsx("div",{class:"LabelValueLayoutStyles_valueSlotStyles__z3rxc59",style:A,children:l})]})},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=UNSAFE_LabelValueLayout.js.map
