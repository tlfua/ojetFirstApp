define(['exports', 'preact/jsx-runtime', 'preact', './UNSAFE_BaseButton', './UNSAFE_ButtonLayout', 'preact/compat', './hooks/UNSAFE_useTooltip', './BaseButton-43499a3c', './ButtonLayout-3ff84cd1'], (function(t,o,e,i,a,s,n,r,c){"use strict";const u=s.forwardRef((({variant:t="outlined",isDisabled:i=!1,isRepeat:a=!1,size:s="md",autofocus:u,onAction:l,tooltip:d,"aria-label":p,"aria-describedby":B,...f},b)=>{const{tooltipContent:y,tooltipProps:x}=n.useTooltip({text:d||p});return o.jsxs(e.Fragment,{children:[o.jsx(r.BaseButton,{...x,ref:b,isDisabled:i,isRepeat:a,size:s,autofocus:u,variant:t,styling:["min"],onAction:l,"aria-describedby":B,"aria-label":p??d,children:o.jsx(c.ButtonLayout,{display:"icons",startIcon:f.children,size:s})}),y]})}));t.IconButton=u}));
//# sourceMappingURL=IconButton-9c80142c.js.map
