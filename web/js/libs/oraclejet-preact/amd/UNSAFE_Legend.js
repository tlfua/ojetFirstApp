define(['exports', 'preact/jsx-runtime', 'preact/hooks', './utils/UNSAFE_classNames', './UNSAFE_SvgShapes', './UNSAFE_Legend/themes/LegendStyles.css', './UNSAFE_Text', './classNames-711dac8e', './Text-4cc07262', 'preact/compat', './hooks/UNSAFE_useUser', './utils/UNSAFE_mergeProps', './hooks/UNSAFE_useTooltip', './UNSAFE_Flex', './Flex-cd926f6b', './UNSAFE_SvgShapes/themes/SvgShapesStyles.css', 'css!./SvgShapesStyles.styles.css', 'css!./LegendStyles.styles.css', './utils/UNSAFE_mergeInterpolations', './_curry1-ce36c4e7', './_curry3-4fb0ed44', './_curry2-d90c5517', './_has-580e26f1', './UNSAFE_Text/themes/TextStyles.css', 'css!./TextStyles.styles.css', './vanilla-extract-recipes-createRuntimeFn.esm-9d536a1b', './index-182af2cd', 'preact', './Common', './Common/themes', './Common/themes/redwood/theme', './Common/themes/themeContract.css', './hooks/UNSAFE_useId', './UNSAFE_Floating', './Floating-86f9017c', './index-f653d9ca', './utils/PRIVATE_floatingUtils', './utils/PRIVATE_refUtils', './hooks/UNSAFE_useOutsideClick', './utils/UNSAFE_arrayUtils', './hooks/UNSAFE_useComponentTheme', './utils/UNSAFE_logger', './utils-7a8b0c59', './UNSAFE_Floating/themes/redwood/FloatingTheme', './UNSAFE_Floating/themes/FloatingStyles.css', 'css!./FloatingStyles.styles.css', './UNSAFE_Floating/themes/redwood/FloatingBaseTheme.css', 'module', './UNSAFE_Floating/themes/redwood/FloatingVariants.css', './vanilla-extract-dynamic.esm-acef6fab', './UNSAFE_Floating/themes/FloatingContract.css', './UNSAFE_Layer', './useThemeInterpolations-48286702', './hooks/UNSAFE_useColorScheme', './hooks/UNSAFE_useScale', './utils/UNSAFE_interpolations/theme', './UNSAFE_Theme', './hooks/UNSAFE_useHover', './hooks/UNSAFE_useToggle', './hooks/UNSAFE_useFocus', './hooks/UNSAFE_useTouch', './hooks/UNSAFE_useAnimation', './useAnimation-95b1d0bd', './hooks/UNSAFE_useThemeInterpolations', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentTheme', './hooks/UNSAFE_useTooltip/themes/TooltipContentStyles.css', 'css!./TooltipContentStyles.styles.css', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentBaseTheme.css', 'module', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentVariants.css', 'css!./TooltipContentVariants.styles2.css', './utils/UNSAFE_interpolations/dimensions', './utils/UNSAFE_size', 'module', './utils/UNSAFE_interpolations/boxalignment', './keys-df123de6', './utils/UNSAFE_interpolations/flexbox', './flexbox-5d7254d1', './utils/UNSAFE_interpolations/flexitem', './flexitem-391ab989'], (function(e,t,i,o,n,s,r,l,d,a,c,u,m,h,f,I,g,x,p,S,F,y,C,b,R,A,v,E,N,T,w,U,_,k,P,W,j,L,V,D,M,B,H,z,O,$,q,K,G,J,Q,X,Y,Z,ee,te,ie,oe,ne,se,re,le,de,ae,ce,ue,me,he,fe,Ie,ge,xe,pe,Se,Fe,ye,Ce,be,Re,Ae){"use strict";function ve(e){const{imageMarkerStyle:i}=s.styles;return t.jsx("img",{class:i,src:e.source})}const Ee=({markerColor:e="#a6acb1",lineColor:i="#a6acb1",markerShape:o="square",isHidden:r=!1,lineStyle:l="none",...d})=>{const{legendSymbolBaseStyle:a}=s.styles,c=!(null==d.width&&null==d.height)&&("rectangle"===o||"ellipse"===o),u="none"!=l&&"none"!=o?2:3;return t.jsx("div",{className:a,style:{width:d.width,height:d.height},children:d.source?t.jsx(ve,{source:d.source}):t.jsx(n.SvgSymbol,{setAspectRatioNone:c,markerShape:r?"square":o,lineStyle:r?"none":l,lineColor:i,lineLength:d.lineLength,lineWidth:null!=d.lineWidth?d.lineWidth:u,markerColor:r?"transparent":e,borderColor:r?e||i:d.borderColor})})},Ne=({text:e,type:i="label",id:o,align:n="start",...r})=>{const{legendTextBaseStyle:a,legendTextTitle:c,legendTitleStartAlign:u,legendTitleCenterAlign:m,legendTitleEndAlign:h}=s.styles,f="title"===i;return t.jsx("div",{class:l.classNames([a,f?c:"",f&&"start"===n?u:"",f&&"center"===n?m:"",f&&"end"===n?h:""]),style:{...r},children:t.jsx(d.Text,{size:"inherit",variant:"inherit",weight:"inherit",truncation:"ellipsis",id:o,children:e})})},Te=a.forwardRef((({id:e,text:i,sectionIdx:o,itemIdx:n,isHighlighted:r,symbolHeight:d,symbolWidth:a,isFocused:c,isCurrent:u,isHidden:m,...h},f)=>{const I={fontFamily:h.textFontFamily,fontSize:h.textFontSize,color:h.textColor,fontStyle:h.textFontStyle,fontWeight:h.textFontWeight,textDecoration:h.textTextDecoration},g={lineStyle:h.lineStyle,lineWidth:h.lineWidth,markerShape:h.markerShape,markerColor:h.markerColor,source:h.source,borderColor:h.borderColor,lineColor:h.lineColor},x=r||null==r,{legendItemBaseStyle:p,legendItemIsCurrent:S,legendItemOpacity:F,legendItemFocusRing:y}=s.styles;return t.jsxs("div",{class:l.classNames([p,u&&null==r?S:"",x?"":F,c?y:"",h.class]),style:{gridRow:h.gridRow,gridColumn:h.gridCol,minWidth:void 0!==h.minWidth?`${h.minWidth}px`:void 0},id:e,ref:f,"data-oj-section":o,"data-oj-item":n,"aria-labelledby":h.labelledBy,role:null!=m?"menuitemcheckbox":"img","aria-checked":null!=m?!m:void 0,"aria-label":h["aria-label"]||i,children:[t.jsx(Ee,{...g,isHidden:m,lineLength:a,width:null!=a?`${a}px`:void 0,height:null!=d?`${d}px`:void 0}),t.jsx(Ne,{...I,text:i,type:"label"})]})})),we=e=>{const t=e.dataset.ojItem,i=e.dataset.ojSection;if(null!=t&&null!=i)return{itemIdx:Number(t),sectionIdx:Number(i)}};function Ue(e,t){if(t)return 0===t.length||new Set(t).has(e)}function _e(e,t){if(t)return new Set(t).has(e)}const ke=(e,t,i)=>{if(!e.isFocusVisible)return!1;const{itemIdx:o,sectionIdx:n}=e;return null==i?o===t:o===t&&n===i};function Pe(e,t,i,o){const n=o?.isCurrent;return n&&null!=o.itemIdx?t(o,e)?.datatip:i&&i.isCurrent?t(i,e)?.datatip:void 0}function We(e,t,i){return{"aria-label":t,"aria-disabled":e,role:i&&!e?"menu":"application"}}function je(){return`_${Math.random().toString(36).slice(2)}`}const Le=(e,t)=>e?.itemIdx===t?.itemIdx&&e?.sectionIdx===t?.sectionIdx,Ve=(e,t)=>{let i,o;return t?.isWrapped&&(i=t.itemsPerRow,o=Math.ceil(e/i),i=Math.ceil(e/o)),{itemsPerRow:i,itemsPerCol:o}};const De=({orientation:e="horizontal",highlightedIds:i,hiddenIds:o,focusedItemInfo:n,hoveredItemInfo:r,sectionIdx:d,activeId:a,isReadOnly:c,items:u,symbolHeight:m,symbolWidth:h,...f})=>{const I="horizontal"===e,g=f.isColumnWidthValidRef.current,x=g&&I?`repeat(${f.itemsPerRow}, ${f.itemWidth})`:void 0;f.isColumnWidthValidRef.current=!1;const{baseLegendStyles:p,baseLegendHorizontal:S,baseLegendVertical:F,baseLegendVerticalItem:y,baseLegendPaddingBottom:C,baseLegendPaddingTop:b,baseLegendPaddingEnd:R}=s.styles;return t.jsx("div",{className:l.classNames([p,I?S:F]),style:{gridTemplateColumns:x,maxWidth:g?"100%":""},children:u.map(((e,s)=>{const g=function(e,t,i,o,n,s,r,l){let d=!1;if(!n){const e=t===o.itemIdx&&i===o.sectionIdx,n=t===s?.itemIdx&&i===s?.sectionIdx;d=!!(e&&o.isCurrent||n&&s?.isCurrent)}return{isCurrent:d,isHighlighted:Ue(e.id,l),isHidden:_e(e.id,r),isFocused:ke(o,t,i),key:e.id,...e}}(e,s,d,n,c,r,o,i),x=n.sectionIdx===d&&n.itemIdx===s,{gridRow:p,gridCol:S}=function(e,t,i,o){let n,s;return i&&o&&e>i&&(n=t%o+1,s=Math.floor(t/o)+1),{gridRow:n,gridCol:s}}(u.length,s,f.itemsPerRow,f.itemsPerCol),F=null!=p&&p!=f.itemsPerCol,A=null!=p&&1!=p;return t.jsx(Te,{ref:x?f.focusedItemRef:void 0,itemIdx:s,sectionIdx:d,symbolHeight:m,symbolWidth:h,...f,...g,gridRow:p,gridCol:S,minWidth:f.itemWidth,id:g.isCurrent?a:"",class:l.classNames([I?"":y,A?b:"",F?C:"",R])})}))})};function Me(e,t,o,n,s,r,l){const[d,a]=i.useState({itemIdx:0,sectionIdx:0}),[u,m]=i.useState(),h=i.useRef(),{direction:f}=c.useUser(),I="rtl"===f,g=t=>{const i=we(t.target);Le(i,u)||(m(i&&{...i,isCurrent:!0}),h.current=je(),e&&(d&&a({...d,isCurrent:!1}),l?.(o(i))))},x=()=>{m(void 0),h.current=void 0,e&&l?.(o())};if(!e)return{focusedItemInfo:d,hoveredItemInfo:u,onPointerLeave:x,onPointerMove:g};const p=e=>{l?.(o(e)),h.current=je(),a(e)},S=e=>{Le(e,d)||(e.isCurrent=!0,e.isFocusVisible=!0,u&&m({...u,isCurrent:!1}),p(e))},F=()=>{const{sectionId:e,itemId:t}=o(d);null!=t&&(r?.({sectionId:e,itemId:t}),h.current=je())};return{focusedItemInfo:d,hoveredItemInfo:u,"aria-activedescendant":h.current,onPointerUp:e=>{const t=we(e.target);if(null!=t){a(t);const{sectionId:e,itemId:i}=o(t);null!=i&&(r?.({sectionId:e,itemId:i}),h.current=je())}},onPointerMove:g,onKeyUp:e=>{switch(e.code){case"Space":t&&F();break;case"Enter":F();break;case"Home":p({itemIdx:0,sectionIdx:0,isFocusVisible:!0,isCurrent:!0});break;case"End":p({itemIdx:-1,sectionIdx:-1,isCurrent:!0,isFocusVisible:!0});break;case"Tab":p({...d,isCurrent:!0,isFocusVisible:!0})}},onKeyDown:e=>{switch(e.key){case"Tab":return;case"ArrowDown":{const e=s(d);S(e);break}case"ArrowUp":{const e=n(d);S(e);break}case"ArrowRight":{const e=I?n(d):s(d);S(e);break}case"ArrowLeft":{const e=I?s(d):n(d);S(e);break}}(e=>{e.preventDefault(),e.stopPropagation()})(e)},onPointerLeave:x,onBlur:()=>{const e={...d,isCurrent:!1,isFocusVisible:!1};(null!=u||d.isCurrent)&&l?.(o(void 0)),a(e)}}}function Be(e,t){const{itemIdx:i}=e;return-1==i?t[t.length-1]:t[i]}function He(e){return{getItem:t=>Be(t,e),getDetailFromInfo:t=>{if(!t)return{itemId:void 0};return{itemId:Be(t,e).id}},getPrevItemInfo:t=>function(e,t){let i=e.itemIdx;return-1==e.itemIdx&&(i=t.length-1),i=Math.max(0,i-1),{sectionIdx:0,itemIdx:i}}(t,e),getNextItemInfo:t=>function(e,t){let i=e.itemIdx;return-1==e.itemIdx&&(i=t.length-1),i=Math.min(t.length-1,i+1),{sectionIdx:0,itemIdx:i}}(t,e)}}const ze=(e,t,i,o)=>{let n=0,s=8;if(e.current&&i.isCurrent&&t.current){const i=t.current,r=e.current.getBoundingClientRect();n=r.x+r.width/2-(i.x+i.width/2),n=o?-1*n:n,s+=i.y-r.y,s=Math.min(8,Math.max(s,r.height-i.height+8))}return{crossAxis:n,mainAxis:s}},Oe=({text:e,rootDimsRef:t,focusedItemRef:o,focusedItemInfo:n})=>{const{direction:s}=c.useUser(),r="rtl"===s,[l,d]=i.useState(ze(o,t,n,r)),[a,u]=i.useState(!1);i.useLayoutEffect((()=>{d(ze(o,t,n,r))}),[n]);const h=n?.isCurrent?"element":"pointer",{tooltipContent:f,tooltipProps:I}=m.useTooltipControlled({text:e,position:"top",isDisabled:!1,variant:"datatip",anchor:{x:h,y:h},offset:l,isOpen:a,onToggle:({value:e})=>u(e)});return{tooltipContent:f,tooltipProps:I}};function $e(e){const t=i.useRef(null);return i.useEffect((()=>{e.isFocusVisible&&t.current?.scrollIntoView({behavior:"smooth",block:"nearest",inline:"nearest"})}),[e]),{focusedItemRef:t}}const qe=function(e,t){return e.length===t.length&&e.every(((i,o)=>i.isWrapped===t[o].isWrapped&&i.maxItemWidth===t[o].maxItemWidth&&e[o].itemsPerRow===t[o].itemsPerRow))},Ke=e=>{let t=0;return[...e.children].forEach((e=>{const i=e;t=Math.max(t,Math.ceil(i.getBoundingClientRect().width))})),t};function Ge({items:e,rootRef:t,rootDimsRef:o,isSectional:n=!1,orientation:s}){const[r,l]=i.useState([]),d=i.useRef(!1),a=i.useRef(s);return i.useLayoutEffect((()=>{if(!t.current)return;o.current=t.current.getBoundingClientRect(),a.current=s;const e=[];[...(n?t.current.children[0]:t.current).children].forEach((t=>{const i=t.getBoundingClientRect().width,s=n?t.children[t.childElementCount-1]:t;let r=i>o.current?.width;s.childElementCount>0&&i===o.current?.width&&(r=!n&&s.children[s.childElementCount-1].offsetTop>s.children[0].offsetTop||n&&s.children[s.childElementCount-1].offsetTop>t.offsetTop);const l=Ke(s);e.push({maxItemWidth:Math.min(l,o.current?.width),itemsPerRow:Math.max(1,Math.floor(o.current?.width/l)),isWrapped:r})})),qe(r,e)||(d.current=!0,l(e))}),[e,s]),{layoutInfo:a.current!=s?[]:r,isColumnWidthValidRef:d}}function Je(e,t){const{sectionIdx:i,itemIdx:o}=e;if(-1==i&&-1==o){const e=t[t.length-1].items.length;return t[t.length-1].items[e-1]}return t[i].items[o]}function Qe(e){return{getItem:t=>Je(t,e),getDetailFromInfo:t=>{if(!t)return{itemId:void 0,sectionId:void 0};const i=Je(t,e),o=e[t.sectionIdx].id;return{itemId:i.id,sectionId:o}},getPrevItemInfo:t=>function(e,t){let{itemIdx:i,sectionIdx:o}=e;return-1==o&&-1==i&&(i=t[t.length-1].items.length-1,o=t.length-1),i-=1,i<0&&(0===o?i=0:(i=t[o-1].items.length-1,o-=1)),{itemIdx:i,sectionIdx:o}}(t,e),getNextItemInfo:t=>function(e,t){let{itemIdx:i,sectionIdx:o}=e;return-1==o&&-1==i?{itemIdx:t[t.length-1].items.length-1,sectionIdx:t.length-1}:(i+=1,i>=t[o].items.length&&(o===t.length-1?i=e.itemIdx:(o+=1,i=0)),{itemIdx:i,sectionIdx:o})}(t,e)}}e.Legend=function({orientation:e="horizontal",items:o,isReadOnly:n=!0,onItemAction:r,onInput:l,...d}){const a=i.useRef(null),c=i.useRef(),{getItem:m,getDetailFromInfo:h,getPrevItemInfo:f,getNextItemInfo:I}=He(o),{layoutInfo:g,isColumnWidthValidRef:x}=Ge({rootRef:a,rootDimsRef:c,items:o,orientation:e}),{hoveredItemInfo:p,focusedItemInfo:S,...F}=Me(!n,null!=d.hiddenIds,h,f,I,r,l),{focusedItemRef:y}=$e(S),C=Pe(o,m,S,p),{tooltipContent:b,tooltipProps:R}=Oe({text:C,rootDimsRef:c,focusedItemInfo:S,focusedItemRef:y}),A=We(n,d["aria-label"],d.hiddenIds),v=u.mergeProps(F,R),{itemsPerCol:E,itemsPerRow:N}=Ve(o.length,g[0]),{legendStyle:T}=s.styles;return t.jsxs("div",{ref:a,tabIndex:n?void 0:0,class:T,...A,...v,children:[t.jsx(De,{...d,focusedItemRef:y,items:o,isReadOnly:n,orientation:e,sectionIdx:0,itemsPerRow:N,isColumnWidthValidRef:x,itemsPerCol:E,itemWidth:g[0]?.isWrapped?g[0]?.maxItemWidth:void 0,focusedItemInfo:S,hoveredItemInfo:p,activeId:F["aria-activedescendant"]}),b]})},e.SectionalLegend=function({orientation:e="horizontal",sectionTitleHAlign:o="start",sections:n,isReadOnly:r=!0,onItemAction:l,onInput:d,...a}){const c=i.useRef(null),m=i.useRef(),{getItem:h,getDetailFromInfo:I,getPrevItemInfo:g,getNextItemInfo:x}=Qe(n),{layoutInfo:p,isColumnWidthValidRef:S}=Ge({rootRef:c,rootDimsRef:m,items:n,isSectional:!0,orientation:e}),{focusedItemInfo:F,hoveredItemInfo:y,...C}=Me(!r,null!=a.hiddenIds,I,g,x,l,d),{focusedItemRef:b}=$e(F),R=Pe(n,h,F,y),{tooltipContent:A,tooltipProps:v}=Oe({text:R,rootDimsRef:m,focusedItemInfo:F,focusedItemRef:b}),E=We(r,a["aria-label"],a.hiddenIds),N=u.mergeProps(C,v),T={fontFamily:a.sectionTitleFontFamily,fontSize:a.sectionTitleFontSize,color:a.sectionTitleColor,fontStyle:a.sectionTitleFontStyle,fontWeight:a.sectionTitleFontWeight,textDecoration:a.sectionTitleTextDecoration},{sectionalLegendBaseStyles:w}=s.styles,U="horizontal"===e;return t.jsxs("div",{ref:c,tabIndex:r?void 0:0,class:w,...E,...N,children:[t.jsx(f.Flex,{direction:U?"row":"column",wrap:"wrap",gap:"2.3x",children:n.map(((i,n)=>{const s=r?"":je(),l=p[n]?.isWrapped,d=!U||l?"column":"row",c=!U||l?"start":"center",{itemsPerCol:u,itemsPerRow:m}=Ve(i.items.length,p[n]);return t.jsxs(f.Flex,{align:c,direction:d,maxWidth:"100%",justify:"start",wrap:"wrap",children:[t.jsx(Ne,{text:i.title,...T,type:"title",id:s,align:o}),t.jsx(De,{...a,isColumnWidthValidRef:S,focusedItemRef:b,labelledBy:s,sectionIdx:n,items:i.items,orientation:e,itemsPerRow:m,itemsPerCol:u,itemWidth:p[n]?.isWrapped?p[n]?.maxItemWidth:void 0,isReadOnly:r,focusedItemInfo:F,hoveredItemInfo:y,activeId:C["aria-activedescendant"]})]})}))}),A]})},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=UNSAFE_Legend.js.map