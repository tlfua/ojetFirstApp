!function(n,l){"object"==typeof exports&&"undefined"!=typeof module?l(exports):"function"==typeof define&&define.amd?define(["exports"],l):l((n||self).preact={})}(this,function(n){var l,u,i,t,o,f,r,e,c,s={},a=[],h=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,v=Array.isArray;function d(n,l){for(var u in l)n[u]=l[u];return n}function p(n){var l=n.parentNode;l&&l.removeChild(n)}function y(n,u,i){var t,o,f,r={};for(f in u)"key"==f?t=u[f]:"ref"==f?o=u[f]:r[f]=u[f];if(arguments.length>2&&(r.children=arguments.length>3?l.call(arguments,2):i),"function"==typeof n&&null!=n.defaultProps)for(f in n.defaultProps)void 0===r[f]&&(r[f]=n.defaultProps[f]);return _(n,r,t,o,null)}function _(n,l,t,o,f){var r={type:n,props:l,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==f?++i:f};return null==f&&null!=u.vnode&&u.vnode(r),r}function b(n){return n.children}function g(n,l){this.props=n,this.context=l}function k(n,l){if(null==l)return n.__?k(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return"function"==typeof n.type?k(n):null}function m(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return m(n)}}function w(n){(!n.__d&&(n.__d=!0)&&o.push(n)&&!x.__r++||f!==u.debounceRendering)&&((f=u.debounceRendering)||r)(x)}function x(){var n,l,u,i,t,f,r,c;for(o.sort(e);n=o.shift();)n.__d&&(l=o.length,i=void 0,t=void 0,r=(f=(u=n).__v).__e,(c=u.__P)&&(i=[],(t=d({},f)).__v=f.__v+1,z(c,f,t,u.__n,void 0!==c.ownerSVGElement,null!=f.__h?[r]:null,i,null==r?k(f):r,f.__h),L(i,f),f.__e!=r&&m(f)),o.length>l&&o.sort(e));x.__r=0}function P(n,l,u,i,t,o,f,r,e,c){var h,d,p,y,g,m,w,x=i&&i.__k||a,P=x.length;for(u.__k=[],h=0;h<l.length;h++)if(null!=(y=u.__k[h]=null==(y=l[h])||"boolean"==typeof y||"function"==typeof y?null:"string"==typeof y||"number"==typeof y||"bigint"==typeof y?_(null,y,null,null,y):v(y)?_(b,{children:y},null,null,null):y.__b>0?_(y.type,y.props,y.key,y.ref?y.ref:null,y.__v):y)){if(y.__=u,y.__b=u.__b+1,null===(p=x[h])||p&&y.key==p.key&&y.type===p.type)x[h]=void 0;else for(d=0;d<P;d++){if((p=x[d])&&y.key==p.key&&y.type===p.type){x[d]=void 0;break}p=null}z(n,y,p=p||s,t,o,f,r,e,c),g=y.__e,(d=y.ref)&&p.ref!=d&&(w||(w=[]),p.ref&&w.push(p.ref,null,y),w.push(d,y.__c||g,y)),null!=g?(null==m&&(m=g),"function"==typeof y.type&&y.__k===p.__k?y.__d=e=T(y,e,n):e=C(n,y,p,x,g,e),"function"==typeof u.type&&(u.__d=e)):e&&p.__e==e&&e.parentNode!=n&&(e=k(p))}for(u.__e=m,h=P;h--;)null!=x[h]&&("function"==typeof u.type&&null!=x[h].__e&&x[h].__e==u.__d&&(u.__d=S(i).nextSibling),O(x[h],x[h]));if(w)for(h=0;h<w.length;h++)N(w[h],w[++h],w[++h])}function T(n,l,u){for(var i,t=n.__k,o=0;t&&o<t.length;o++)(i=t[o])&&(i.__=n,l="function"==typeof i.type?T(i,l,u):C(u,i,i,t,i.__e,l));return l}function C(n,l,u,i,t,o){var f,r,e;if(void 0!==l.__d)f=l.__d,l.__d=void 0;else if(null==u||t!=o||null==t.parentNode)n:if(null==o||o.parentNode!==n)n.appendChild(t),f=null;else{for(r=o,e=0;(r=r.nextSibling)&&e<i.length;e+=1)if(r==t)break n;n.insertBefore(t,o),f=o}return void 0!==f?f:t.nextSibling}function S(n){var l,u,i;if(null==n.type||"string"==typeof n.type)return n.__e;if(n.__k)for(l=n.__k.length-1;l>=0;l--)if((u=n.__k[l])&&(i=S(u)))return i;return null}function $(n,l,u,i,t){var o;for(o in u)"children"===o||"key"===o||o in l||A(n,o,null,u[o],i);for(o in l)t&&"function"!=typeof l[o]||"children"===o||"key"===o||"value"===o||"checked"===o||u[o]===l[o]||A(n,o,l[o],u[o],i)}function j(n,l,u){"-"===l[0]?n.setProperty(l,null==u?"":u):n[l]=null==u?"":"number"!=typeof u||h.test(l)?u:u+"px"}function A(n,l,u,i,t){var o;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else{if("string"==typeof i&&(n.style.cssText=i=""),i)for(l in i)u&&l in u||j(n.style,l,"");if(u)for(l in u)i&&u[l]===i[l]||j(n.style,l,u[l])}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/Capture$/,"")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=u,u?i||n.addEventListener(l,o?I:H,o):n.removeEventListener(l,o?I:H,o);else if("dangerouslySetInnerHTML"!==l){if(t)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!==l&&"height"!==l&&"href"!==l&&"list"!==l&&"form"!==l&&"tabIndex"!==l&&"download"!==l&&"rowSpan"!==l&&"colSpan"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null==u||!1===u&&"-"!==l[4]?n.removeAttribute(l):n.setAttribute(l,u))}}function H(n){return this.l[n.type+!1](u.event?u.event(n):n)}function I(n){return this.l[n.type+!0](u.event?u.event(n):n)}function z(n,l,i,t,o,f,r,e,c){var s,a,h,p,y,_,k,m,w,x,T,C,S,$,j,A=l.type;if(void 0!==l.constructor)return null;null!=i.__h&&(c=i.__h,e=l.__e=i.__e,l.__h=null,f=[e]),(s=u.__b)&&s(l);try{n:if("function"==typeof A){if(m=l.props,w=(s=A.contextType)&&t[s.__c],x=s?w?w.props.value:s.__:t,i.__c?k=(a=l.__c=i.__c).__=a.__E:("prototype"in A&&A.prototype.render?l.__c=a=new A(m,x):(l.__c=a=new g(m,x),a.constructor=A,a.render=q),w&&w.sub(a),a.props=m,a.state||(a.state={}),a.context=x,a.__n=t,h=a.__d=!0,a.__h=[],a._sb=[]),null==a.__s&&(a.__s=a.state),null!=A.getDerivedStateFromProps&&(a.__s==a.state&&(a.__s=d({},a.__s)),d(a.__s,A.getDerivedStateFromProps(m,a.__s))),p=a.props,y=a.state,a.__v=l,h)null==A.getDerivedStateFromProps&&null!=a.componentWillMount&&a.componentWillMount(),null!=a.componentDidMount&&a.__h.push(a.componentDidMount);else{if(null==A.getDerivedStateFromProps&&m!==p&&null!=a.componentWillReceiveProps&&a.componentWillReceiveProps(m,x),!a.__e&&null!=a.shouldComponentUpdate&&!1===a.shouldComponentUpdate(m,a.__s,x)||l.__v===i.__v){for(l.__v!==i.__v&&(a.props=m,a.state=a.__s,a.__d=!1),a.__e=!1,l.__e=i.__e,l.__k=i.__k,l.__k.forEach(function(n){n&&(n.__=l)}),T=0;T<a._sb.length;T++)a.__h.push(a._sb[T]);a._sb=[],a.__h.length&&r.push(a);break n}null!=a.componentWillUpdate&&a.componentWillUpdate(m,a.__s,x),null!=a.componentDidUpdate&&a.__h.push(function(){a.componentDidUpdate(p,y,_)})}if(a.context=x,a.props=m,a.__P=n,C=u.__r,S=0,"prototype"in A&&A.prototype.render){for(a.state=a.__s,a.__d=!1,C&&C(l),s=a.render(a.props,a.state,a.context),$=0;$<a._sb.length;$++)a.__h.push(a._sb[$]);a._sb=[]}else do{a.__d=!1,C&&C(l),s=a.render(a.props,a.state,a.context),a.state=a.__s}while(a.__d&&++S<25);a.state=a.__s,null!=a.getChildContext&&(t=d(d({},t),a.getChildContext())),h||null==a.getSnapshotBeforeUpdate||(_=a.getSnapshotBeforeUpdate(p,y)),P(n,v(j=null!=s&&s.type===b&&null==s.key?s.props.children:s)?j:[j],l,i,t,o,f,r,e,c),a.base=l.__e,l.__h=null,a.__h.length&&r.push(a),k&&(a.__E=a.__=null),a.__e=!1}else null==f&&l.__v===i.__v?(l.__k=i.__k,l.__e=i.__e):l.__e=M(i.__e,l,i,t,o,f,r,c);(s=u.diffed)&&s(l)}catch(n){l.__v=null,(c||null!=f)&&(l.__e=e,l.__h=!!c,f[f.indexOf(e)]=null),u.__e(n,l,i)}}function L(n,l){u.__c&&u.__c(l,n),n.some(function(l){try{n=l.__h,l.__h=[],n.some(function(n){n.call(l)})}catch(n){u.__e(n,l.__v)}})}function M(n,u,i,t,o,f,r,e){var c,a,h,d=i.props,y=u.props,_=u.type,b=0;if("svg"===_&&(o=!0),null!=f)for(;b<f.length;b++)if((c=f[b])&&"setAttribute"in c==!!_&&(_?c.localName===_:3===c.nodeType)){n=c,f[b]=null;break}if(null==n){if(null===_)return document.createTextNode(y);n=o?document.createElementNS("http://www.w3.org/2000/svg",_):document.createElement(_,y.is&&y),f=null,e=!1}if(null===_)d===y||e&&n.data===y||(n.data=y);else{if(f=f&&l.call(n.childNodes),a=(d=i.props||s).dangerouslySetInnerHTML,h=y.dangerouslySetInnerHTML,!e){if(null!=f)for(d={},b=0;b<n.attributes.length;b++)d[n.attributes[b].name]=n.attributes[b].value;(h||a)&&(h&&(a&&h.__html==a.__html||h.__html===n.innerHTML)||(n.innerHTML=h&&h.__html||""))}if($(n,y,d,o,e),h)u.__k=[];else if(P(n,v(b=u.props.children)?b:[b],u,i,t,o&&"foreignObject"!==_,f,r,f?f[0]:i.__k&&k(i,0),e),null!=f)for(b=f.length;b--;)null!=f[b]&&p(f[b]);e||("value"in y&&void 0!==(b=y.value)&&(b!==n.value||"progress"===_&&!b||"option"===_&&b!==d.value)&&A(n,"value",b,d.value,!1),"checked"in y&&void 0!==(b=y.checked)&&b!==n.checked&&A(n,"checked",b,d.checked,!1))}return n}function N(n,l,i){try{"function"==typeof n?n(l):n.current=l}catch(n){u.__e(n,i)}}function O(n,l,i){var t,o;if(u.unmount&&u.unmount(n),(t=n.ref)&&(t.current&&t.current!==n.__e||N(t,null,l)),null!=(t=n.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount()}catch(n){u.__e(n,l)}t.base=t.__P=null,n.__c=void 0}if(t=n.__k)for(o=0;o<t.length;o++)t[o]&&O(t[o],l,i||"function"!=typeof n.type);i||null==n.__e||p(n.__e),n.__=n.__e=n.__d=void 0}function q(n,l,u){return this.constructor(n,u)}function B(n,i,t){var o,f,r;u.__&&u.__(n,i),f=(o="function"==typeof t)?null:t&&t.__k||i.__k,r=[],z(i,n=(!o&&t||i).__k=y(b,null,[n]),f||s,s,void 0!==i.ownerSVGElement,!o&&t?[t]:f?null:i.firstChild?l.call(i.childNodes):null,r,!o&&t?t:f?f.__e:i.firstChild,o),L(r,n)}l=a.slice,u={__e:function(n,l,u,i){for(var t,o,f;l=l.__;)if((t=l.__c)&&!t.__)try{if((o=t.constructor)&&null!=o.getDerivedStateFromError&&(t.setState(o.getDerivedStateFromError(n)),f=t.__d),null!=t.componentDidCatch&&(t.componentDidCatch(n,i||{}),f=t.__d),f)return t.__E=t}catch(l){n=l}throw n}},i=0,t=function(n){return null!=n&&void 0===n.constructor},g.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=d({},this.state),"function"==typeof n&&(n=n(d({},u),this.props)),n&&d(u,n),null!=n&&this.__v&&(l&&this._sb.push(l),w(this))},g.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),w(this))},g.prototype.render=b,o=[],r="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,e=function(n,l){return n.__v.__b-l.__v.__b},x.__r=0,c=0,n.Component=g,n.Fragment=b,n.cloneElement=function(n,u,i){var t,o,f,r,e=d({},n.props);for(f in n.type&&n.type.defaultProps&&(r=n.type.defaultProps),u)"key"==f?t=u[f]:"ref"==f?o=u[f]:e[f]=void 0===u[f]&&void 0!==r?r[f]:u[f];return arguments.length>2&&(e.children=arguments.length>3?l.call(arguments,2):i),_(n.type,e,t||n.key,o||n.ref,null)},n.createContext=function(n,l){var u={__c:l="__cC"+c++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var u,i;return this.getChildContext||(u=[],(i={})[l]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.some(function(n){n.__e=!0,w(n)})},this.sub=function(n){u.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u.splice(u.indexOf(n),1),l&&l.call(n)}}),n.children}};return u.Provider.__=u.Consumer.contextType=u},n.createElement=y,n.createRef=function(){return{current:null}},n.h=y,n.hydrate=function n(l,u){B(l,u,n)},n.isValidElement=t,n.options=u,n.render=B,n.toChildArray=function n(l,u){return u=u||[],null==l||"boolean"==typeof l||(v(l)?l.some(function(l){n(l,u)}):u.push(l)),u}});
//# sourceMappingURL=preact.umd.js.map
