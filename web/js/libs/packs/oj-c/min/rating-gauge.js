define("oj-c/utils/UNSAFE_meterUtils/meterUtils",["require","exports"],(function(require,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getThresholdColorByIndex=void 0;const t=["danger","warning","success"];e.getThresholdColorByIndex=(e,a)=>e.color?e.color:t[a%t.length]}));var __importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};define("oj-c/rating-gauge/rating-gauge",["require","exports","preact/jsx-runtime","@oracle/oraclejet-preact/translationBundle","@oracle/oraclejet-preact/UNSAFE_RatingGauge","ojs/ojvcomponent","preact/hooks","@oracle/oraclejet-preact/hooks/UNSAFE_useTabbableMode","../utils/UNSAFE_meterUtils/meterUtils","css!oj-c/rating-gauge/rating-gauge-styles.css"],(function(require,e,t,a,l,r,o,n,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.RatingGauge=void 0,a=__importDefault(a),e.RatingGauge=(0,r.registerCustomElement)("oj-c-rating-gauge",(({max:e=5,value:a=0,size:n="md",color:s="neutral",step:u=1,readonly:d=!1,disabled:c=!1,changed:g=!1,...p})=>{const[b,y]=(0,o.useState)(a),[m,h]=(0,o.useState)(),_=p.thresholds?.map(((e,t)=>({...e,color:(0,i.getThresholdColorByIndex)(e,t)})));return(0,t.jsx)(r.Root,{children:(0,t.jsx)(l.RatingGauge,{isReadonly:d,isDisabled:c,value:null!=m?m:b,step:u,max:e,size:n,color:s,thresholds:_,tooltip:p.tooltip,datatip:p.datatip?.({value:null!=m?m:b}),onCommit:e=>{y(e.value),p.onValueChanged?.(e.value),g||p.onChangedChanged?.(!0)},onInput:e=>{h(e.value),p.onTransientValueChanged?.(e.value)},"aria-label":p["aria-label"],"aria-labelledby":p.labelledBy??void 0,"aria-describedby":p.describedBy??void 0})})}),"RatingGauge",{properties:{max:{type:"number"},readonly:{type:"boolean"},disabled:{type:"boolean"},changed:{type:"boolean",writeback:!0},value:{type:"number|null",writeback:!0},step:{type:"number"},describedBy:{type:"string|null"},labelledBy:{type:"string|null"},size:{type:"string",enumValues:["sm","md","lg"]},color:{type:"string",enumValues:["neutral","gold"]},thresholds:{type:"Array<object>"},datatip:{type:"function"},tooltip:{type:"string"},transientValue:{type:"number",readOnly:!0,writeback:!0}},extension:{_WRITEBACK_PROPS:["changed","value","transientValue"],_READ_ONLY_PROPS:["transientValue"],_OBSERVED_GLOBAL_PROPS:["aria-label"]}},{max:5,value:0,size:"md",color:"neutral",step:1,readonly:!1,disabled:!1,changed:!1},{"@oracle/oraclejet-preact":a.default},{consume:[n.TabbableModeContext]})}));
//# sourceMappingURL=rating-gauge.js.map