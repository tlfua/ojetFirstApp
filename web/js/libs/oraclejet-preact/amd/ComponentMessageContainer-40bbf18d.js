define(['exports', 'preact/jsx-runtime', './PRIVATE_Message', './ComponentMessage-1122915f', './UNSAFE_ComponentMessage/themes/ComponentMessageStyles.css', './MessagesManager-a5b0f8e7'], (function(e,s,a,t,n,i){"use strict";function o(e){return e.map(((e,s)=>({key:s,data:{closeAffordance:"off",severity:e.severity||"error",detail:e.detail}})))}e.ComponentMessageContainer=function({fieldLabel:e,messages:a=[]}){return s.jsx("div",{class:n.componentMessageContainerBase,children:s.jsx(i.MessagesManager,{data:o(a),children:({item:a})=>s.jsx(t.ComponentMessage,{detail:a.data.detail,fieldLabel:e,severity:a.data.severity},a.key)})})}}));
//# sourceMappingURL=ComponentMessageContainer-40bbf18d.js.map
