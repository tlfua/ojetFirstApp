define(['exports', 'preact/jsx-runtime', 'preact/compat', './useModal-129c8a8d', './UNSAFE_Layer', './UNSAFE_Modal/themes/ModalStyles.css'], (function(e,t,r,n,o,s){"use strict";const l=r.forwardRef((({variant:e="scrim"},r)=>{const n=s.multiVariantStyles({backdrop:"transparent"===e?"transparent":"scrim"});return t.jsx("div",{ref:r,class:n})}));function a(e){const t=[];let r=e.previousSibling;for(;null!=r;)1===r.nodeType&&t.push(r),r=r.previousSibling;for(r=e.nextSibling;null!=r;)1===r.nodeType&&t.push(r),r=r.nextSibling;return t}function i(e){if(!e.modalRef)return[];const t=[];let r=e.modalRef.parentElement;do{if(!r)break;a(r).forEach((e=>{"script"!==e.tagName.toLowerCase()&&"true"!==e.getAttribute("aria-hidden")&&(t.push(e),e.setAttribute("aria-hidden","true"))})),r=r.parentElement}while(r&&"body"!==r.tagName.toLowerCase());return t}const d=new class{constructor(){this.modals=[],this.styleBackup=[]}push(e){if(-1===this._findModalIndex(e)&&(this.modals.push({modal:e,ariaHiddenChildren:i(e)}),1===this.modals.length)){const t=this._getOwnerDocument(e.modalRef).body,r=window.innerWidth-document.documentElement.clientWidth;if(r>1){Math.round(document.documentElement.getBoundingClientRect().left)+document.documentElement.scrollLeft?(this.styleBackup.push({property:"padding-left",value:t.style.paddingLeft}),t.style.paddingLeft=`${r}px`):(this.styleBackup.push({property:"padding-right",value:t.style.paddingRight}),t.style.paddingRight=`${r}px`)}this.styleBackup.push({property:"overflow",value:t.style.overflow}),this.styleBackup.push({property:"overflow-x",value:t.style.overflowX}),this.styleBackup.push({property:"overflow-y",value:t.style.overflowY}),t.style.overflow="hidden"}}pop(e){const t=this._findModalIndex(e);if(-1===t)return;if(t!==this.modals.length-1)return;const r=this.modals.pop();var n;if(r&&(n=r?.ariaHiddenChildren,n.forEach((e=>{e.removeAttribute("aria-hidden")}))),0===this.modals.length){const t=this._getOwnerDocument(e.modalRef).body;this.styleBackup.forEach((({property:e,value:r})=>{t.style.setProperty(e,r)}))}}isTopModal(e){return this.modals.length>0&&this.modals[this.modals.length-1]===e}_findModalIndex(e){let t=-1;return this.modals.forEach(((r,n)=>{r.modal!==e||(t=n)})),t}_getOwnerDocument(e){return e&&e.ownerDocument||document}};e.Modal=({children:e,isOpen:a,onBackdropClick:i,backdropVariant:u})=>{const c=d,{backdropRef:p}=n.useModal({isOpen:a,onBackdropClick:i}),h=r.useRef(null),f=r.useRef({}),m=()=>(f.current.modalRef=h.current,f.current);return r.useEffect((()=>{a&&h.current?c?.push(m()):f.current.modalRef&&c?.pop(m())}),[a,h.current]),r.useEffect((()=>()=>{f.current.modalRef&&c?.pop(m())}),[]),a?t.jsx(o.Layer,{children:t.jsxs("div",{ref:h,class:s.baseStyle,children:[t.jsx(l,{ref:p,variant:u}),e]})}):null}}));
//# sourceMappingURL=Modal-85c887df.js.map
