define(['exports', 'preact/jsx-runtime', './hooks/UNSAFE_useAccessibleContext', './hooks/UNSAFE_useFormContext', './hooks/UNSAFE_useTabbableMode', './utils/UNSAFE_classNames', './utils/UNSAFE_interpolations/text', './utils/UNSAFE_mergeInterpolations', './hooks/UNSAFE_useFormFieldContext', './hooks/UNSAFE_useComponentTheme', './UNSAFE_TextField/themes/redwood/ReadonlyTextFieldInputTheme', './hooks/UNSAFE_useTranslationBundle', './classNames-711dac8e'], (function(e,a,o,s,t,l,r,n,i,d,u,b,c){"use strict";e.ReadonlyTextFieldInput=function({"aria-describedby":e,"aria-label":l,"aria-labelledby":F,autoFocus:m,as:y="div",elementRef:x,hasEmptyLabel:p,hasInsideLabel:h=!1,inlineUserAssistance:A,innerReadonlyField:T,rows:f,type:N,value:E="",variant:U,..._}){const L=b.useTranslationBundle("@oracle/oraclejet-preact").formControl_loading(),{isFormLayout:S,isReadonly:C}=s.useFormContext(),{isLoading:I}=i.useFormFieldContext(),R=I?L:l,j=[...Object.values(r.textInterpolations)],v=n.mergeInterpolations(j),{class:k}=v(_),{classes:g}=d.useComponentTheme(u.ReadonlyTextFieldInputRedwoodTheme,{textarea:"textarea"===U?"isTextArea":"notTextArea",formLayout:S?"isFormLayout":"notFormLayout",readonlyForm:C?"isReadonlyForm":"notReadonlyForm",insideLabel:h?"hasInsideLabel":"noInsideLabel"}),w=c.classNames([g,k]),{isTabbable:B,tabbableModeProps:M}=t.useTabbableMode(),{UNSAFE_ariaLabelledBy:O}=o.useAccessibleContext(),P=p?function(...e){return e.filter(Boolean).join(" ")||void 0}(F,O):F;return"input"===y?a.jsx("input",{"aria-describedby":e,"aria-label":R,"aria-labelledby":P,autofocus:m,class:w,readonly:!0,ref:x,type:N,value:E,...!B&&M}):"textarea"===y?a.jsx("textarea",{"aria-describedby":e,"aria-label":R,"aria-labelledby":P,autofocus:m,class:w,readonly:!0,ref:x,rows:f,...!B&&M,children:E}):a.jsx("div",{"aria-describedby":e,"aria-label":R,"aria-labelledby":P,"aria-readonly":!0,autofocus:m,class:w,ref:x,role:"textbox",...M,children:E})}}));
//# sourceMappingURL=ReadonlyTextFieldInput-541a2315.js.map
