(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{34:function(e,t,r){},36:function(e,t,r){"use strict";var n=r(1),o=r.n(n);t.a=function(){return o.a.createElement("header",{"data-test":"main-banner"},"React App for validating step definitions...")}},39:function(e,t,r){"use strict";r.r(t);var n=r(1),o=r.n(n),a=r(6),i=(r(34),r(36));t.default=function(){return o.a.createElement("div",{className:"Home"},o.a.createElement(i.a,null),o.a.createElement("h1",null,"Other page"),o.a.createElement("p",{className:"Home-intro"},o.a.createElement(a.a,{to:"/","data-test":"go-to-home-link"},"Go to Home page")))}},6:function(e,t,r){"use strict";var n=r(1),o=r.n(n),a=r(0),i=r.n(a),c=r(4),u=r.n(c),s=r(8),p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var f=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},h=function(e){function t(){var r,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return r=n=l(this,e.call.apply(e,[this].concat(a))),n.handleClick=function(e){if(n.props.onClick&&n.props.onClick(e),!e.defaultPrevented&&0===e.button&&!n.props.target&&!f(e)){e.preventDefault();var t=n.context.router.history,r=n.props,o=r.replace,a=r.to;o?t.replace(a):t.push(a)}},l(n,r)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),r=e.innerRef,n=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(e,["replace","to","innerRef"]);u()(this.context.router,"You should not use <Link> outside a <Router>"),u()(void 0!==t,'You must specify the "to" property');var a=this.context.router.history,i="string"===typeof t?Object(s.b)(t,null,null,a.location):t,c=a.createHref(i);return o.a.createElement("a",p({},n,{onClick:this.handleClick,href:c,ref:r}))},t}(o.a.Component);h.propTypes={onClick:i.a.func,target:i.a.string,replace:i.a.bool,to:i.a.oneOfType([i.a.string,i.a.object]).isRequired,innerRef:i.a.oneOfType([i.a.string,i.a.func])},h.defaultProps={replace:!1},h.contextTypes={router:i.a.shape({history:i.a.shape({push:i.a.func.isRequired,replace:i.a.func.isRequired,createHref:i.a.func.isRequired}).isRequired}).isRequired},t.a=h}}]);
//# sourceMappingURL=2.e73f8798.chunk.js.map