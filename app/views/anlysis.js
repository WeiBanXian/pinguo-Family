(function() {
    var Zepto=function(){function L(t){return null==t?String(t):j[S.call(t)]||"object"}function Z(t){return"function"==L(t)}function _(t){return null!=t&&t==t.window}function $(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function D(t){return"object"==L(t)}function M(t){return D(t)&&!_(t)&&Object.getPrototypeOf(t)==Object.prototype}function R(t){return"number"==typeof t.length}function k(t){return s.call(t,function(t){return null!=t})}function z(t){return t.length>0?n.fn.concat.apply([],t):t}function F(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function q(t){return t in f?f[t]:f[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function H(t,e){return"number"!=typeof e||c[F(t)]?e:e+"px"}function I(t){var e,n;return u[t]||(e=a.createElement(t),a.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),u[t]=n),u[t]}function V(t){return"children"in t?o.call(t.children):n.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function B(n,i,r){for(e in i)r&&(M(i[e])||A(i[e]))?(M(i[e])&&!M(n[e])&&(n[e]={}),A(i[e])&&!A(n[e])&&(n[e]=[]),B(n[e],i[e],r)):i[e]!==t&&(n[e]=i[e])}function U(t,e){return null==e?n(t):n(t).filter(e)}function J(t,e,n,i){return Z(e)?e.call(t,n,i):e}function X(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function W(e,n){var i=e.className||"",r=i&&i.baseVal!==t;return n===t?r?i.baseVal:i:void(r?i.baseVal=n:e.className=n)}function Y(t){try{return t?"true"==t||("false"==t?!1:"null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?n.parseJSON(t):t):t}catch(e){return t}}function G(t,e){e(t);for(var n=0,i=t.childNodes.length;i>n;n++)G(t.childNodes[n],e)}var t,e,n,i,C,N,r=[],o=r.slice,s=r.filter,a=window.document,u={},f={},c={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},l=/^\s*<(\w+|!)[^>]*>/,h=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,p=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,d=/^(?:body|html)$/i,m=/([A-Z])/g,g=["val","css","html","text","data","width","height","offset"],v=["after","prepend","before","append"],y=a.createElement("table"),x=a.createElement("tr"),b={tr:a.createElement("tbody"),tbody:y,thead:y,tfoot:y,td:x,th:x,"*":a.createElement("div")},w=/complete|loaded|interactive/,E=/^[\w-]*$/,j={},S=j.toString,T={},O=a.createElement("div"),P={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},A=Array.isArray||function(t){return t instanceof Array};return T.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,r=t.parentNode,o=!r;return o&&(r=O).appendChild(t),i=~T.qsa(r,e).indexOf(t),o&&O.removeChild(t),i},C=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},N=function(t){return s.call(t,function(e,n){return t.indexOf(e)==n})},T.fragment=function(e,i,r){var s,u,f;return h.test(e)&&(s=n(a.createElement(RegExp.$1))),s||(e.replace&&(e=e.replace(p,"<$1></$2>")),i===t&&(i=l.test(e)&&RegExp.$1),i in b||(i="*"),f=b[i],f.innerHTML=""+e,s=n.each(o.call(f.childNodes),function(){f.removeChild(this)})),M(r)&&(u=n(s),n.each(r,function(t,e){g.indexOf(t)>-1?u[t](e):u.attr(t,e)})),s},T.Z=function(t,e){return t=t||[],t.__proto__=n.fn,t.selector=e||"",t},T.isZ=function(t){return t instanceof T.Z},T.init=function(e,i){var r;if(!e)return T.Z();if("string"==typeof e)if(e=e.trim(),"<"==e[0]&&l.test(e))r=T.fragment(e,RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=T.qsa(a,e)}else{if(Z(e))return n(a).ready(e);if(T.isZ(e))return e;if(A(e))r=k(e);else if(D(e))r=[e],e=null;else if(l.test(e))r=T.fragment(e.trim(),RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=T.qsa(a,e)}}return T.Z(r,e)},n=function(t,e){return T.init(t,e)},n.extend=function(t){var e,n=o.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){B(t,n,e)}),t},T.qsa=function(t,e){var n,i="#"==e[0],r=!i&&"."==e[0],s=i||r?e.slice(1):e,a=E.test(s);return $(t)&&a&&i?(n=t.getElementById(s))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:o.call(a&&!i?r?t.getElementsByClassName(s):t.getElementsByTagName(e):t.querySelectorAll(e))},n.contains=a.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},n.type=L,n.isFunction=Z,n.isWindow=_,n.isArray=A,n.isPlainObject=M,n.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},n.inArray=function(t,e,n){return r.indexOf.call(e,t,n)},n.camelCase=C,n.trim=function(t){return null==t?"":String.prototype.trim.call(t)},n.uuid=0,n.support={},n.expr={},n.map=function(t,e){var n,r,o,i=[];if(R(t))for(r=0;r<t.length;r++)n=e(t[r],r),null!=n&&i.push(n);else for(o in t)n=e(t[o],o),null!=n&&i.push(n);return z(i)},n.each=function(t,e){var n,i;if(R(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(i in t)if(e.call(t[i],i,t[i])===!1)return t;return t},n.grep=function(t,e){return s.call(t,e)},window.JSON&&(n.parseJSON=JSON.parse),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){j["[object "+e+"]"]=e.toLowerCase()}),n.fn={forEach:r.forEach,reduce:r.reduce,push:r.push,sort:r.sort,indexOf:r.indexOf,concat:r.concat,map:function(t){return n(n.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return n(o.apply(this,arguments))},ready:function(t){return w.test(a.readyState)&&a.body?t(n):a.addEventListener("DOMContentLoaded",function(){t(n)},!1),this},get:function(e){return e===t?o.call(this):this[e>=0?e:e+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return r.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return Z(t)?this.not(this.not(t)):n(s.call(this,function(e){return T.matches(e,t)}))},add:function(t,e){return n(N(this.concat(n(t,e))))},is:function(t){return this.length>0&&T.matches(this[0],t)},not:function(e){var i=[];if(Z(e)&&e.call!==t)this.each(function(t){e.call(this,t)||i.push(this)});else{var r="string"==typeof e?this.filter(e):R(e)&&Z(e.item)?o.call(e):n(e);this.forEach(function(t){r.indexOf(t)<0&&i.push(t)})}return n(i)},has:function(t){return this.filter(function(){return D(t)?n.contains(this,t):n(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!D(t)?t:n(t)},last:function(){var t=this[this.length-1];return t&&!D(t)?t:n(t)},find:function(t){var e,i=this;return e=t?"object"==typeof t?n(t).filter(function(){var t=this;return r.some.call(i,function(e){return n.contains(e,t)})}):1==this.length?n(T.qsa(this[0],t)):this.map(function(){return T.qsa(this,t)}):n()},closest:function(t,e){var i=this[0],r=!1;for("object"==typeof t&&(r=n(t));i&&!(r?r.indexOf(i)>=0:T.matches(i,t));)i=i!==e&&!$(i)&&i.parentNode;return n(i)},parents:function(t){for(var e=[],i=this;i.length>0;)i=n.map(i,function(t){return(t=t.parentNode)&&!$(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return U(e,t)},parent:function(t){return U(N(this.pluck("parentNode")),t)},children:function(t){return U(this.map(function(){return V(this)}),t)},contents:function(){return this.map(function(){return o.call(this.childNodes)})},siblings:function(t){return U(this.map(function(t,e){return s.call(V(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return n.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=I(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var e=Z(t);if(this[0]&&!e)var i=n(t).get(0),r=i.parentNode||this.length>1;return this.each(function(o){n(this).wrapAll(e?t.call(this,o):r?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){n(this[0]).before(t=n(t));for(var e;(e=t.children()).length;)t=e.first();n(t).append(this)}return this},wrapInner:function(t){var e=Z(t);return this.each(function(i){var r=n(this),o=r.contents(),s=e?t.call(this,i):t;o.length?o.wrapAll(s):r.append(s)})},unwrap:function(){return this.parent().each(function(){n(this).replaceWith(n(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(e){return this.each(function(){var i=n(this);(e===t?"none"==i.css("display"):e)?i.show():i.hide()})},prev:function(t){return n(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return n(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var i=this.innerHTML;n(this).empty().append(J(this,t,e,i))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=J(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this[0].textContent:null},attr:function(n,i){var r;return"string"!=typeof n||1 in arguments?this.each(function(t){if(1===this.nodeType)if(D(n))for(e in n)X(this,e,n[e]);else X(this,n,J(this,i,t,this.getAttribute(n)))}):this.length&&1===this[0].nodeType?!(r=this[0].getAttribute(n))&&n in this[0]?this[0][n]:r:t},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){X(this,t)},this)})},prop:function(t,e){return t=P[t]||t,1 in arguments?this.each(function(n){this[t]=J(this,e,n,this[t])}):this[0]&&this[0][t]},data:function(e,n){var i="data-"+e.replace(m,"-$1").toLowerCase(),r=1 in arguments?this.attr(i,n):this.attr(i);return null!==r?Y(r):t},val:function(t){return 0 in arguments?this.each(function(e){this.value=J(this,t,e,this.value)}):this[0]&&(this[0].multiple?n(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(t){if(t)return this.each(function(e){var i=n(this),r=J(this,t,e,i.offset()),o=i.offsetParent().offset(),s={top:r.top-o.top,left:r.left-o.left};"static"==i.css("position")&&(s.position="relative"),i.css(s)});if(!this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(t,i){if(arguments.length<2){var r,o=this[0];if(!o)return;if(r=getComputedStyle(o,""),"string"==typeof t)return o.style[C(t)]||r.getPropertyValue(t);if(A(t)){var s={};return n.each(t,function(t,e){s[e]=o.style[C(e)]||r.getPropertyValue(e)}),s}}var a="";if("string"==L(t))i||0===i?a=F(t)+":"+H(t,i):this.each(function(){this.style.removeProperty(F(t))});else for(e in t)t[e]||0===t[e]?a+=F(e)+":"+H(e,t[e])+";":this.each(function(){this.style.removeProperty(F(e))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(n(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?r.some.call(this,function(t){return this.test(W(t))},q(t)):!1},addClass:function(t){return t?this.each(function(e){if("className"in this){i=[];var r=W(this),o=J(this,t,e,r);o.split(/\s+/g).forEach(function(t){n(this).hasClass(t)||i.push(t)},this),i.length&&W(this,r+(r?" ":"")+i.join(" "))}}):this},removeClass:function(e){return this.each(function(n){if("className"in this){if(e===t)return W(this,"");i=W(this),J(this,e,n,i).split(/\s+/g).forEach(function(t){i=i.replace(q(t)," ")}),W(this,i.trim())}})},toggleClass:function(e,i){return e?this.each(function(r){var o=n(this),s=J(this,e,r,W(this));s.split(/\s+/g).forEach(function(e){(i===t?!o.hasClass(e):i)?o.addClass(e):o.removeClass(e)})}):this},scrollTop:function(e){if(this.length){var n="scrollTop"in this[0];return e===t?n?this[0].scrollTop:this[0].pageYOffset:this.each(n?function(){this.scrollTop=e}:function(){this.scrollTo(this.scrollX,e)})}},scrollLeft:function(e){if(this.length){var n="scrollLeft"in this[0];return e===t?n?this[0].scrollLeft:this[0].pageXOffset:this.each(n?function(){this.scrollLeft=e}:function(){this.scrollTo(e,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),i=this.offset(),r=d.test(e[0].nodeName)?{top:0,left:0}:e.offset();return i.top-=parseFloat(n(t).css("margin-top"))||0,i.left-=parseFloat(n(t).css("margin-left"))||0,r.top+=parseFloat(n(e[0]).css("border-top-width"))||0,r.left+=parseFloat(n(e[0]).css("border-left-width"))||0,{top:i.top-r.top,left:i.left-r.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||a.body;t&&!d.test(t.nodeName)&&"static"==n(t).css("position");)t=t.offsetParent;return t})}},n.fn.detach=n.fn.remove,["width","height"].forEach(function(e){var i=e.replace(/./,function(t){return t[0].toUpperCase()});n.fn[e]=function(r){var o,s=this[0];return r===t?_(s)?s["inner"+i]:$(s)?s.documentElement["scroll"+i]:(o=this.offset())&&o[e]:this.each(function(t){s=n(this),s.css(e,J(this,r,t,s[e]()))})}}),v.forEach(function(t,e){var i=e%2;n.fn[t]=function(){var t,o,r=n.map(arguments,function(e){return t=L(e),"object"==t||"array"==t||null==e?e:T.fragment(e)}),s=this.length>1;return r.length<1?this:this.each(function(t,u){o=i?u:u.parentNode,u=0==e?u.nextSibling:1==e?u.firstChild:2==e?u:null;var f=n.contains(a.documentElement,o);r.forEach(function(t){if(s)t=t.cloneNode(!0);else if(!o)return n(t).remove();o.insertBefore(t,u),f&&G(t,function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},n.fn[i?t+"To":"insert"+(e?"Before":"After")]=function(e){return n(e)[t](this),this}}),T.Z.prototype=n.fn,T.uniq=N,T.deserializeValue=Y,n.zepto=T,n}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(t){function l(t){return t._zid||(t._zid=e++)}function h(t,e,n,i){if(e=p(e),e.ns)var r=d(e.ns);return(s[l(t)]||[]).filter(function(t){return!(!t||e.e&&t.e!=e.e||e.ns&&!r.test(t.ns)||n&&l(t.fn)!==l(n)||i&&t.sel!=i)})}function p(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function d(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function m(t,e){return t.del&&!u&&t.e in f||!!e}function g(t){return c[t]||u&&f[t]||t}function v(e,i,r,o,a,u,f){var h=l(e),d=s[h]||(s[h]=[]);i.split(/\s/).forEach(function(i){if("ready"==i)return t(document).ready(r);var s=p(i);s.fn=r,s.sel=a,s.e in c&&(r=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?s.fn.apply(this,arguments):void 0}),s.del=u;var l=u||r;s.proxy=function(t){if(t=j(t),!t.isImmediatePropagationStopped()){t.data=o;var i=l.apply(e,t._args==n?[t]:[t].concat(t._args));return i===!1&&(t.preventDefault(),t.stopPropagation()),i}},s.i=d.length,d.push(s),"addEventListener"in e&&e.addEventListener(g(s.e),s.proxy,m(s,f))})}function y(t,e,n,i,r){var o=l(t);(e||"").split(/\s/).forEach(function(e){h(t,e,n,i).forEach(function(e){delete s[o][e.i],"removeEventListener"in t&&t.removeEventListener(g(e.e),e.proxy,m(e,r))})})}function j(e,i){return(i||!e.isDefaultPrevented)&&(i||(i=e),t.each(E,function(t,n){var r=i[t];e[t]=function(){return this[n]=x,r&&r.apply(i,arguments)},e[n]=b}),(i.defaultPrevented!==n?i.defaultPrevented:"returnValue"in i?i.returnValue===!1:i.getPreventDefault&&i.getPreventDefault())&&(e.isDefaultPrevented=x)),e}function S(t){var e,i={originalEvent:t};for(e in t)w.test(e)||t[e]===n||(i[e]=t[e]);return j(i,t)}var n,e=1,i=Array.prototype.slice,r=t.isFunction,o=function(t){return"string"==typeof t},s={},a={},u="onfocusin"in window,f={focus:"focusin",blur:"focusout"},c={mouseenter:"mouseover",mouseleave:"mouseout"};a.click=a.mousedown=a.mouseup=a.mousemove="MouseEvents",t.event={add:v,remove:y},t.proxy=function(e,n){var s=2 in arguments&&i.call(arguments,2);if(r(e)){var a=function(){return e.apply(n,s?s.concat(i.call(arguments)):arguments)};return a._zid=l(e),a}if(o(n))return s?(s.unshift(e[n],e),t.proxy.apply(null,s)):t.proxy(e[n],e);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,i){return this.on(t,e,n,i,1)};var x=function(){return!0},b=function(){return!1},w=/^([A-Z]|returnValue$|layer[XY]$)/,E={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,s,a,u,f){var c,l,h=this;return e&&!o(e)?(t.each(e,function(t,e){h.on(t,s,a,e,f)}),h):(o(s)||r(u)||u===!1||(u=a,a=s,s=n),(r(a)||a===!1)&&(u=a,a=n),u===!1&&(u=b),h.each(function(n,r){f&&(c=function(t){return y(r,t.type,u),u.apply(this,arguments)}),s&&(l=function(e){var n,o=t(e.target).closest(s,r).get(0);return o&&o!==r?(n=t.extend(S(e),{currentTarget:o,liveFired:r}),(c||u).apply(o,[n].concat(i.call(arguments,1)))):void 0}),v(r,e,u,a,s,l||c)}))},t.fn.off=function(e,i,s){var a=this;return e&&!o(e)?(t.each(e,function(t,e){a.off(t,i,e)}),a):(o(i)||r(s)||s===!1||(s=i,i=n),s===!1&&(s=b),a.each(function(){y(this,e,s,i)}))},t.fn.trigger=function(e,n){return e=o(e)||t.isPlainObject(e)?t.Event(e):j(e),e._args=n,this.each(function(){e.type in f&&"function"==typeof this[e.type]?this[e.type]():"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,n){var i,r;return this.each(function(s,a){i=S(o(e)?t.Event(e):e),i._args=n,i.target=a,t.each(h(a,e.type||e),function(t,e){return r=e.proxy(i),i.isImmediatePropagationStopped()?!1:void 0})}),r},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return 0 in arguments?this.bind(e,t):this.trigger(e)}}),t.Event=function(t,e){o(t)||(e=t,t=e.type);var n=document.createEvent(a[t]||"Events"),i=!0;if(e)for(var r in e)"bubbles"==r?i=!!e[r]:n[r]=e[r];return n.initEvent(t,i,!0),j(n)}}(Zepto),function(t){function h(e,n,i){var r=t.Event(n);return t(e).trigger(r,i),!r.isDefaultPrevented()}function p(t,e,i,r){return t.global?h(e||n,i,r):void 0}function d(e){e.global&&0===t.active++&&p(e,null,"ajaxStart")}function m(e){e.global&&!--t.active&&p(e,null,"ajaxStop")}function g(t,e){var n=e.context;return e.beforeSend.call(n,t,e)===!1||p(e,n,"ajaxBeforeSend",[t,e])===!1?!1:void p(e,n,"ajaxSend",[t,e])}function v(t,e,n,i){var r=n.context,o="success";n.success.call(r,t,o,e),i&&i.resolveWith(r,[t,o,e]),p(n,r,"ajaxSuccess",[e,n,t]),x(o,e,n)}function y(t,e,n,i,r){var o=i.context;i.error.call(o,n,e,t),r&&r.rejectWith(o,[n,e,t]),p(i,o,"ajaxError",[n,i,t||e]),x(e,n,i)}function x(t,e,n){var i=n.context;n.complete.call(i,e,t),p(n,i,"ajaxComplete",[e,n]),m(n)}function b(){}function w(t){return t&&(t=t.split(";",2)[0]),t&&(t==f?"html":t==u?"json":s.test(t)?"script":a.test(t)&&"xml")||"text"}function E(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function j(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=E(e.url,e.data),e.data=void 0)}function S(e,n,i,r){return t.isFunction(n)&&(r=i,i=n,n=void 0),t.isFunction(i)||(r=i,i=void 0),{url:e,data:n,success:i,dataType:r}}function C(e,n,i,r){var o,s=t.isArray(n),a=t.isPlainObject(n);t.each(n,function(n,u){o=t.type(u),r&&(n=i?r:r+"["+(a||"object"==o||"array"==o?n:"")+"]"),!r&&s?e.add(u.name,u.value):"array"==o||!i&&"object"==o?C(e,u,i,n):e.add(n,u)})}var i,r,e=0,n=window.document,o=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,s=/^(?:text|application)\/javascript/i,a=/^(?:text|application)\/xml/i,u="application/json",f="text/html",c=/^\s*$/,l=n.createElement("a");l.href=window.location.href,t.active=0,t.ajaxJSONP=function(i,r){if(!("type"in i))return t.ajax(i);var f,h,o=i.jsonpCallback,s=(t.isFunction(o)?o():o)||"jsonp"+ ++e,a=n.createElement("script"),u=window[s],c=function(e){t(a).triggerHandler("error",e||"abort")},l={abort:c};return r&&r.promise(l),t(a).on("load error",function(e,n){clearTimeout(h),t(a).off().remove(),"error"!=e.type&&f?v(f[0],l,i,r):y(null,n||"error",l,i,r),window[s]=u,f&&t.isFunction(u)&&u(f[0]),u=f=void 0}),g(l,i)===!1?(c("abort"),l):(window[s]=function(){f=arguments},a.src=i.url.replace(/\?(.+)=\?/,"?$1="+s),n.head.appendChild(a),i.timeout>0&&(h=setTimeout(function(){c("timeout")},i.timeout)),l)},t.ajaxSettings={type:"GET",beforeSend:b,success:b,error:b,complete:b,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:u,xml:"application/xml, text/xml",html:f,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var a,o=t.extend({},e||{}),s=t.Deferred&&t.Deferred();for(i in t.ajaxSettings)void 0===o[i]&&(o[i]=t.ajaxSettings[i]);d(o),o.crossDomain||(a=n.createElement("a"),a.href=o.url,a.href=a.href,o.crossDomain=l.protocol+"//"+l.host!=a.protocol+"//"+a.host),o.url||(o.url=window.location.toString()),j(o);var u=o.dataType,f=/\?.+=\?/.test(o.url);if(f&&(u="jsonp"),o.cache!==!1&&(e&&e.cache===!0||"script"!=u&&"jsonp"!=u)||(o.url=E(o.url,"_="+Date.now())),"jsonp"==u)return f||(o.url=E(o.url,o.jsonp?o.jsonp+"=?":o.jsonp===!1?"":"callback=?")),t.ajaxJSONP(o,s);var C,h=o.accepts[u],p={},m=function(t,e){p[t.toLowerCase()]=[t,e]},x=/^([\w-]+:)\/\//.test(o.url)?RegExp.$1:window.location.protocol,S=o.xhr(),T=S.setRequestHeader;if(s&&s.promise(S),o.crossDomain||m("X-Requested-With","XMLHttpRequest"),m("Accept",h||"*/*"),(h=o.mimeType||h)&&(h.indexOf(",")>-1&&(h=h.split(",",2)[0]),S.overrideMimeType&&S.overrideMimeType(h)),(o.contentType||o.contentType!==!1&&o.data&&"GET"!=o.type.toUpperCase())&&m("Content-Type",o.contentType||"application/x-www-form-urlencoded"),o.headers)for(r in o.headers)m(r,o.headers[r]);if(S.setRequestHeader=m,S.onreadystatechange=function(){if(4==S.readyState){S.onreadystatechange=b,clearTimeout(C);var e,n=!1;if(S.status>=200&&S.status<300||304==S.status||0==S.status&&"file:"==x){u=u||w(o.mimeType||S.getResponseHeader("content-type")),e=S.responseText;try{"script"==u?(1,eval)(e):"xml"==u?e=S.responseXML:"json"==u&&(e=c.test(e)?null:t.parseJSON(e))}catch(i){n=i}n?y(n,"parsererror",S,o,s):v(e,S,o,s)}else y(S.statusText||null,S.status?"error":"abort",S,o,s)}},g(S,o)===!1)return S.abort(),y(null,"abort",S,o,s),S;if(o.xhrFields)for(r in o.xhrFields)S[r]=o.xhrFields[r];var N="async"in o?o.async:!0;S.open(o.type,o.url,N,o.username,o.password);for(r in p)T.apply(S,p[r]);return o.timeout>0&&(C=setTimeout(function(){S.onreadystatechange=b,S.abort(),y(null,"timeout",S,o,s)},o.timeout)),S.send(o.data?o.data:null),S},t.get=function(){return t.ajax(S.apply(null,arguments))},t.post=function(){var e=S.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=S.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,i){if(!this.length)return this;var a,r=this,s=e.split(/\s/),u=S(e,n,i),f=u.success;return s.length>1&&(u.url=s[0],a=s[1]),u.success=function(e){r.html(a?t("<div>").html(e.replace(o,"")).find(a):e),f&&f.apply(r,arguments)},t.ajax(u),this};var T=encodeURIComponent;t.param=function(e,n){var i=[];return i.add=function(e,n){t.isFunction(n)&&(n=n()),null==n&&(n=""),this.push(T(e)+"="+T(n))},C(i,e,n),i.join("&").replace(/%20/g,"+")}}(Zepto),function(t){t.fn.serializeArray=function(){var e,n,i=[],r=function(t){return t.forEach?t.forEach(r):void i.push({name:e,value:t})};return this[0]&&t.each(this[0].elements,function(i,o){n=o.type,e=o.name,e&&"fieldset"!=o.nodeName.toLowerCase()&&!o.disabled&&"submit"!=n&&"reset"!=n&&"button"!=n&&"file"!=n&&("radio"!=n&&"checkbox"!=n||o.checked)&&r(t(o).val())}),i},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(0 in arguments)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(Zepto),function(t){"__proto__"in{}||t.extend(t.zepto,{Z:function(e,n){return e=e||[],t.extend(e,t.fn),e.selector=n||"",e.__Z=!0,e},isZ:function(e){return"array"===t.type(e)&&"__Z"in e}});try{getComputedStyle(void 0)}catch(e){var n=getComputedStyle;window.getComputedStyle=function(t){try{return n(t)}catch(e){return null}}}}(Zepto);

    var data = {item_app_adv_display_selfportrait: {
		num: 52914,
		only: 47243
	},
item_app_adv_display_poker: {
		num: 47122,
		only: 42456
	},
item_app_adv_display_bestie: {
		num: 24988,
		only: 23816
	},
item_app_adv_display_camera360: {
		num: 24890,
		only: 23868
	},
item_app_adv_display_mix: {
		num: 15584,
		only: 15128
	},
item_app_adv_display_april: {
		num: 13993,
		only: 13582
	},
item_app_adv_display_c360lite: {
		num: 13492,
		only: 9413
	},
item_app_adv_display_hdr: {
		num: 10828,
		only: 10652
	},
item_app_adv_display_funy: {
		num: 10147,
		only: 9987
	},
item_app_adv_display_bw: {
		num: 9167,
		only: 9030
	},
item_app_adv_display_sketch: {
		num: 7963,
		only: 7850
	},
item_app_adv_display_magicskin: {
		num: 7236,
		only: 7135
	},
item_app_adv_display_wonderland: {
		num: 6731,
		only: 6648
	},
item_app_adv_display_yummy: {
		num: 6128,
		only: 6057
	},
item_app_adv_click_selfportrait: {
		num: 5880,
		only: 4934
	},
item_app_adv_display_starringnight: {
		num: 5644,
		only: 5582
	},
item_app_adv_display_magicsky: {
		num: 5399,
		only: 5343
	},
item_app_adv_display_magiccolor: {
		num: 5109,
		only: 5061
	},
item_app_adv_display_bird: {
		num: 5025,
		only: 4786
	},
item_app_adv_display_camAlien: {
		num: 4776,
		only: 4550
	},
item_app_adv_display_storm: {
		num: 4687,
		only: 4645
	},
item_app_adv_display_lights: {
		num: 4591,
		only: 4550
	},
item_app_adv_display_castle: {
		num: 4556,
		only: 4338
	},
item_app_adv_display_loft: {
	num: 4387,
	only: 4346
},
item_app_adv_display_koreanstyle: {
	num: 4283,
	only: 4231
},
item_app_adv_display_clouds: {
	num: 4278,
	only: 4081
},
item_app_adv_display_lomo: {
	num: 4181,
	only: 4144
},
item_app_adv_display_flare: {
	num: 4113,
	only: 3926
},
item_app_adv_display_Oppsfoto: {
	num: 3989,
	only: 3954
},
item_app_adv_display_hollywood: {
	num: 3982,
	only: 3934
},
item_app_adv_display_flyPath: {
	num: 3970,
	only: 3790
},
item_app_adv_display_funClouds: {
	num: 3785,
	only: 3619
},
item_app_adv_display_galaxy: {
	num: 3625,
	only: 3501
},
item_app_adv_display_lightcolor: {
	num: 3510,
	only: 3471
},
item_app_adv_display_glow: {
	num: 3432,
	only: 3338
},
item_app_adv_display_gospel: {
	num: 3404,
	only: 3304
},
item_app_adv_display_kite: {
	num: 3286,
	only: 3192
},
item_app_adv_display_magicFish: {
	num: 3141,
	only: 3052
},
item_app_adv_display_meteor: {
	num: 3038,
	only: 2961
},
item_app_adv_display_mirage: {
	num: 2939,
	only: 2868
},
item_app_adv_display_filmflex: {
	num: 2843,
	only: 2820
},
item_app_adv_display_planet: {
	num: 2814,
	only: 2751
},
item_app_adv_display_rainbow: {
	num: 2753,
	only: 2692
},
item_app_adv_display_snowCap: {
	num: 2671,
	only: 2612
},
item_app_adv_display_starTrek: {
	num: 2582,
	only: 2527
},
item_app_adv_display_endwar: {
	num: 2571,
	only: 2555
},
item_app_adv_display_sunset: {
	num: 2487,
	only: 2436
},
item_app_adv_display_thunder: {
	num: 2398,
	only: 2350
},
item_app_adv_display_tornado: {
	num: 2292,
	only: 2245
},
item_app_adv_display_endWar: {
	num: 2086,
	only: 2062
},
item_app_adv_display_filmFlex: {
	num: 1981,
	only: 1959
},
item_app_adv_click_poker: {
	num: 1960,
	only: 1620
},
item_app_adv_display_hollyWood: {
	num: 1891,
	only: 1869
},
item_app_adv_display_koreanStyle: {
	num: 1804,
	only: 1784
},
item_app_adv_display_lightColor: {
	num: 1728,
	only: 1708
},
item_app_adv_click_bestie: {
	num: 1596,
	only: 1479
},
item_app_adv_click_mix: {
	num: 1128,
	only: 1009
},
item_app_adv_click_april: {
	num: 1080,
	only: 992
},
item_app_adv_click_hdr: {
	num: 930,
	only: 835
},
item_app_adv_click_camera360: {
	num: 860,
	only: 755
},
item_app_adv_click_sketch: {
	num: 490,
	only: 441
},
item_app_adv_click_bw: {
	num: 446,
	only: 400
},
item_app_adv_click_c360lite: {
	num: 443,
	only: 339
},
item_app_adv_click_magicskin: {
	num: 416,
	only: 376
},
item_app_adv_click_funy: {
	num: 373,
	only: 328
},
item_app_adv_click_starringnight: {
	num: 305,
	only: 276
},
item_app_adv_click_koreanstyle: {
	num: 274,
	only: 250
},
item_app_adv_click_wonderland: {
	num: 269,
	only: 246
},
item_app_adv_click_castle: {
	num: 260,
	only: 214
},
item_app_adv_click_clouds: {
	num: 241,
	only: 222
},
item_app_adv_click_bird: {
	num: 237,
	only: 215
},
item_app_adv_click_lightcolor: {
	num: 231,
	only: 204
},
item_app_adv_click_tornado: {
	num: 225,
	only: 169
},
item_app_adv_click_camAlien: {
	num: 214,
	only: 187
},
item_app_adv_click_galaxy: {
	num: 207,
	only: 175
},
item_app_adv_click_storm: {
	num: 204,
	only: 189
},
item_app_adv_click_hollywood: {
	num: 197,
	only: 184
},
item_app_adv_click_Oppsfoto: {
	num: 191,
	only: 174
},
item_app_adv_click_thunder: {
	num: 186,
	only: 164
},
item_app_adv_click_magicsky: {
	num: 175,
	only: 165
},
item_app_adv_click_magiccolor: {
num: 162,
only: 154
},
item_app_adv_click_flare: {
num: 159,
only: 150
},
item_app_adv_click_lights: {
num: 138,
only: 130
},
item_app_adv_click_sunset: {
num: 136,
only: 117
},
item_app_adv_click_filmflex: {
num: 128,
only: 115
},
item_app_adv_click_glow: {
num: 126,
only: 116
},
item_app_adv_click_flyPath: {
num: 125,
only: 115
},
item_app_adv_click_yummy: {
num: 111,
only: 106
},
item_app_adv_click_kite: {
num: 109,
only: 97
},
item_app_adv_click_snowCap: {
num: 108,
only: 102
},
item_app_adv_click_magicFish: {
num: 107,
only: 100
},
item_app_adv_click_lomo: {
num: 105,
only: 101
},
item_app_adv_click_gospel: {
num: 102,
only: 92
},
item_app_adv_click_loft: {
num: 101,
only: 95
},
item_app_adv_click_rainbow: {
num: 98,
only: 89
},
item_app_adv_click_planet: {
num: 97,
only: 88
},
item_app_adv_click_funClouds: {
num: 87,
only: 79
},
item_app_adv_click_koreanStyle: {
num: 86,
only: 74
},
item_app_adv_click_meteor: {
num: 79,
only: 73
},
item_app_adv_click_endwar: {
num: 79,
only: 70
},
item_app_adv_click_lightColor: {
num: 70,
only: 65
},
item_app_adv_click_mirage: {
num: 68,
only: 60
},
item_app_adv_click_starTrek: {
num: 56,
only: 53
},
item_app_adv_click_hollyWood: {
num: 45,
only: 44
},
item_app_adv_click_endWar: {
num: 43,
only: 40
},
item_app_adv_click_filmFlex: {
num: 41,
only: 39
}
}
var data_ios = {item_en_ios_app_adv_display_bestie: {
	num: 3351,
	only: 3170
},
item_en_ios_app_adv_display_mix: {
	num: 3332,
	only: 3154
},
item_zh_ios_app_adv_display_bestie: {
	num: 3148,
	only: 2989
},
item_zh_ios_app_adv_display_mix: {
	num: 3141,
	only: 2984
},
item_en_ios_app_adv_display_april: {
	num: 1171,
	only: 1142
},
item_zh_ios_app_adv_display_april: {
	num: 1132,
	only: 1099
},
item_en_ios_app_adv_display_poker: {
	num: 1034,
	only: 1011
},
item_zh_ios_app_adv_display_poker: {
	num: 999,
	only: 974
},
item_en_ios_app_adv_display_oopsfoto: {
	num: 907,
	only: 889
},
item_zh_ios_app_adv_display_oopsfoto: {
	num: 881,
	only: 863
},
item_zh_ios_app_adv_display_idcamera: {
	num: 799,
	only: 783
},
item_en_ios_app_adv_display_selfportrait: {
	num: 795,
	only: 782
},
item_en_ios_app_adv_display_hdr: {
	num: 750,
	only: 739
},
item_zh_ios_app_adv_display_selfportrait: {
	num: 722,
	only: 711
},
item_en_ios_app_adv_display_funy: {
	num: 707,
	only: 698
},
item_en_ios_app_adv_display_bw: {
	num: 662,
	only: 654
},
item_zh_ios_app_adv_display_hdr: {
	num: 660,
	only: 649
},
item_en_ios_app_adv_display_koreanstyle: {
	num: 625,
	only: 619
},
item_zh_ios_app_adv_display_funy: {
	num: 613,
	only: 603
},
item_en_ios_app_adv_display_hollywood: {
	num: 590,
	only: 585
},
item_en_ios_app_adv_display_sketch: {
	num: 562,
	only: 557
},
item_zh_ios_app_adv_display_bw: {
	num: 540,
	only: 532
},
item_en_ios_app_adv_display_lightcolor: {
	num: 527,
	only: 522
},
item_zh_ios_app_adv_display_sketch: {
	num: 502,
	only: 495
},
item_en_ios_app_adv_display_magicskin: {
	num: 501,
	only: 496
},
item_en_ios_app_adv_display_wonderland: {
	num: 475,
	only: 471
},
item_zh_ios_app_adv_display_magicskin: {
	num: 474,
	only: 467
},
item_zh_ios_app_adv_display_wonderland: {
	num: 441,
	only: 435
},
item_en_ios_app_adv_display_filmflex: {
	num: 436,
	only: 432
},
item_en_ios_app_adv_display_yummy: {
	num: 425,
	only: 421
},
item_zh_ios_app_adv_display_yummy: {
	num: 411,
	only: 405
},
item_en_ios_app_adv_display_endwar: {
	num: 399,
	only: 396
},
item_zh_ios_app_adv_display_starringnight: {
	num: 391,
	only: 385
},
item_en_ios_app_adv_display_starringnight: {
	num: 376,
	only: 373
},
item_zh_ios_app_adv_display_magicsky: {
	num: 369,
	only: 363
},
item_en_ios_app_adv_display_magicsky: {
	num: 357,
	only: 354
},
item_zh_ios_app_adv_display_magiccolor: {
	num: 348,
	only: 342
},
item_en_ios_app_adv_display_magiccolor: {
	num: 341,
	only: 338
},
item_zh_ios_app_adv_display_storm: {
	num: 323,
	only: 319
},
item_en_ios_app_adv_display_storm: {
	num: 318,
	only: 315
},
item_en_ios_app_adv_display_lights: {
	num: 308,
	only: 305
},
item_zh_ios_app_adv_display_lights: {
	num: 303,
	only: 301
},
item_en_ios_app_adv_display_loft: {
	num: 292,
	only: 290
},
item_zh_ios_app_adv_display_loft: {
	num: 289,
	only: 287
},
item_en_ios_app_adv_display_lomo: {
	num: 279,
	only: 277
},
item_zh_ios_app_adv_display_lomo: {
	num: 278,
	only: 276
},
item_en_ios_app_adv_display_idcamera: {
	num: 275,
	only: 273
},
item_zh_ios_app_adv_display_endWar: {
	num: 266,
	only: 265
},
item_en_ios_app_adv_display_bird: {
	num: 263,
	only: 262
},
item_en_ios_app_adv_display_camAlien: {
	num: 254,
	only: 253
},
item_en_ios_app_adv_display_castle: {
	num: 249,
	only: 248
},
item_zh_ios_app_adv_display_filmFlex: {
	num: 246,
	only: 245
},
item_en_ios_app_adv_display_clouds: {
	num: 240,
	only: 239
},
item_zh_ios_app_adv_display_hollyWood: {
	num: 237,
	only: 236
},
item_zh_ios_app_adv_display_koreanStyle: {
	num: 228,
	only: 227
},
item_en_ios_app_adv_display_flare: {
	num: 227,
	only: 226
},
item_en_ios_app_adv_display_flyPath: {
	num: 221,
	only: 220
},
item_zh_ios_app_adv_display_lightColor: {
	num: 219,
	only: 218
},
item_en_ios_app_adv_display_funClouds: {
	num: 210,
	only: 209
},
item_zh_ios_app_adv_display_bird: {
	num: 210,
	only: 209
},
item_en_ios_app_adv_display_galaxy: {
	num: 205,
	only: 204
},
item_zh_ios_app_adv_click_bestie: {
	num: 204,
	only: 188
},
item_zh_ios_app_adv_display_camAlien: {
	num: 202,
	only: 201
},
item_en_ios_app_adv_display_glow: {
	num: 199,
	only: 198
},
item_zh_ios_app_adv_display_castle: {
	num: 199,
	only: 198
},
item_en_ios_app_adv_display_gospel: {
	num: 188,
	only: 187
},
item_zh_ios_app_adv_display_clouds: {
	num: 181,
	only: 180
},
item_en_ios_app_adv_display_kite: {
	num: 180,
	only: 179
},
item_en_ios_app_adv_display_magicFish: {
	num: 176,
	only: 175
},
item_zh_ios_app_adv_display_flare: {
	num: 175,
	only: 174
},
item_zh_ios_app_adv_display_flyPath: {
	num: 169,
	only: 168
},
item_zh_ios_app_adv_display_funClouds: {
	num: 166,
	only: 165
},
item_en_ios_app_adv_display_meteor: {
	num: 164,
	only: 163
},
item_zh_ios_app_adv_display_galaxy: {
	num: 161,
	only: 160
},
item_en_ios_app_adv_display_mirage: {
	num: 159,
	only: 158
},
item_en_ios_app_adv_display_planet: {
	num: 157,
	only: 156
},
item_zh_ios_app_adv_display_glow: {
	num: 154,
	only: 153
},
item_zh_ios_app_adv_display_gospel: {
	num: 150,
	only: 149
},
item_en_ios_app_adv_display_rainbow: {
	num: 149,
	only: 149
},
item_zh_ios_app_adv_click_mix: {
	num: 147,
	only: 140
},
item_zh_ios_app_adv_display_kite: {
	num: 145,
	only: 144
},
item_en_ios_app_adv_display_snowCap: {
	num: 145,
	only: 145
},
item_en_ios_app_adv_display_starTrek: {
	num: 143,
	only: 143
},
item_en_ios_app_adv_display_sunset: {
	num: 140,
	only: 140
},
item_zh_ios_app_adv_display_magicFish: {
	num: 140,
	only: 139
},
item_zh_ios_app_adv_display_meteor: {
	num: 136,
	only: 135
},
item_zh_ios_app_adv_display_mirage: {
	num: 134,
	only: 133
},
item_zh_ios_app_adv_display_planet: {
	num: 133,
	only: 132
},
item_zh_ios_app_adv_display_rainbow: {
	num: 132,
	only: 131
},
item_zh_ios_app_adv_display_snowCap: {
	num: 130,
	only: 129
},
item_zh_ios_app_adv_display_starTrek: {
	num: 127,
	only: 126
},
item_en_ios_app_adv_display_thunder: {
	num: 126,
	only: 126
},
item_en_ios_app_adv_display_tornado: {
	num: 122,
	only: 122
},
item_zh_ios_app_adv_display_sunset: {
	num: 122,
	only: 121
},
item_zh_ios_app_adv_display_thunder: {
	num: 117,
	only: 116
},
item_zh_ios_app_adv_click_idcamera: {
	num: 116,
	only: 103
},
item_zh_ios_app_adv_display_tornado: {
	num: 115,
	only: 114
},
item_en_ios_app_adv_click_bestie: {
	num: 95,
	only: 82
},
item_zh_ios_app_adv_click_selfportrait: {
	num: 86,
	only: 74
},
item_zh_ios_app_adv_click_april: {
	num: 58,
	only: 50
},
item_zh_ios_app_adv_click_hdr: {
	num: 49,
	only: 40
},
item_en_ios_app_adv_click_selfportrait: {
	num: 40,
	only: 36
},
item_zh_ios_app_adv_click_poker: {
	num: 33,
	only: 30
},
item_zh_ios_app_adv_click_sketch: {
	num: 30,
	only: 25
},
item_en_ios_app_adv_click_april: {
	num: 30,
	only: 29
},
item_zh_ios_app_adv_click_oopsfoto: {
	num: 28,
	only: 25
},
item_en_ios_app_adv_click_mix: {
	num: 28,
	only: 25
},
item_zh_ios_app_adv_click_bw: {
	num: 27,
	only: 22
},
item_en_ios_app_adv_click_magicskin: {
	num: 26,
	only: 22
},
item_en_ios_app_adv_click_hdr: {
	num: 25,
	only: 24
},
item_zh_ios_app_adv_click_magicskin: {
	num: 25,
	only: 23
},
item_en_ios_app_adv_click_lightcolor: {
	num: 24,
	only: 23
},
item_zh_ios_app_adv_click_wonderland: {
	num: 23,
	only: 22
},
item_en_ios_app_adv_click_koreanstyle: {
	num: 22,
	only: 20
},
item_zh_ios_app_adv_click_starringnight: {
	num: 21,
	only: 18
},
item_zh_ios_app_adv_click_funy: {
	num: 20,
	only: 19
},
item_en_ios_app_adv_click_oopsfoto: {
	num: 19,
	only: 19
},
item_en_ios_app_adv_click_bw: {
	num: 18,
	only: 15
},
item_en_ios_app_adv_click_funy: {
	num: 17,
	only: 16
},
item_en_ios_app_adv_click_hollywood: {
	num: 16,
	only: 16
},
item_en_ios_app_adv_click_starringnight: {
	num: 13,
	only: 10
},
item_zh_ios_app_adv_click_koreanStyle: {
	num: 13,
	only: 12
},
item_zh_ios_app_adv_click_magiccolor: {
	num: 13,
	only: 12
},
item_en_ios_app_adv_click_sketch: {
	num: 13,
	only: 11
},
item_zh_ios_app_adv_click_clouds: {
	num: 12,
	only: 11
},
item_zh_ios_app_adv_click_magicsky: {
	num: 12,
	only: 11
},
item_en_ios_app_adv_click_filmflex: {
	num: 10,
	only: 10
},
item_en_ios_app_adv_click_magicsky: {
	num: 10,
	only: 9
},
item_zh_ios_app_adv_click_camAlien: {
	num: 9,
	only: 9
},
item_zh_ios_app_adv_click_lomo: {
	num: 8,
	only: 8
},
item_zh_ios_app_adv_click_thunder: {
	num: 8,
	only: 6
},
item_en_ios_app_adv_click_lights: {
	num: 8,
	only: 7
},
item_zh_ios_app_adv_click_planet: {
	num: 8,
	only: 6
},
item_en_ios_app_adv_click_poker: {
	num: 8,
	only: 8
},
item_en_ios_app_adv_click_galaxy: {
	num: 8,
	only: 8
},
item_zh_ios_app_adv_click_lights: {
	num: 7,
	only: 7
},
item_zh_ios_app_adv_click_galaxy: {
	num: 7,
	only: 7
},
item_zh_ios_app_adv_click_loft: {
	num: 7,
	only: 6
},
item_en_ios_app_adv_click_castle: {
	num: 7,
	only: 5
},
item_en_ios_app_adv_click_kite: {
	num: 7,
	only: 6
},
item_zh_ios_app_adv_click_flare: {
	num: 7,
	only: 7
},
item_zh_ios_app_adv_click_bird: {
	num: 7,
	only: 7
},
item_en_ios_app_adv_click_clouds: {
	num: 6,
	only: 6
},
item_zh_ios_app_adv_click_gospel: {
	num: 6,
	only: 5
},
item_en_ios_app_adv_click_tornado: {
	num: 6,
	only: 6
},
item_en_ios_app_adv_click_storm: {
	num: 6,
	only: 5
},
item_zh_ios_app_adv_click_filmFlex: {
	num: 6,
	only: 5
},
item_en_ios_app_adv_click_gospel: {
	num: 5,
	only: 4
},
item_zh_ios_app_adv_click_funClouds: {
	num: 5,
	only: 5
},
item_en_ios_app_adv_click_glow: {
	num: 5,
	only: 5
},
item_zh_ios_app_adv_click_castle: {
	num: 5,
	only: 5
},
item_en_ios_app_adv_click_planet: {
	num: 5,
	only: 5
},
item_en_ios_app_adv_click_wonderland: {
	num: 5,
	only: 5
},
item_zh_ios_app_adv_click_yummy: {
	num: 5,
	only: 5
},
item_zh_ios_app_adv_click_flyPath: {
	num: 5,
	only: 5
},
item_en_ios_app_adv_click_magiccolor: {
	num: 5,
	only: 4
},
item_en_ios_app_adv_click_sunset: {
	num: 4,
	only: 3
},
item_zh_ios_app_adv_click_rainbow: {
	num: 4,
	only: 4
},
item_zh_ios_app_adv_click_sunset: {
	num: 4,
	only: 4
},
item_en_ios_app_adv_click_lomo: {
	num: 4,
	only: 4
},
item_en_ios_app_adv_click_flyPath: {
	num: 4,
	only: 4
},
item_en_ios_app_adv_click_thunder: {
	num: 4,
	only: 4
},
item_en_ios_app_adv_click_camAlien: {
	num: 4,
	only: 4
},
item_zh_ios_app_adv_click_hollyWood: {
	num: 4,
	only: 4
},
item_en_ios_app_adv_click_idcamera: {
	num: 4,
	only: 4
},
item_en_ios_app_adv_click_flare: {
	num: 3,
	only: 2
},
item_zh_ios_app_adv_click_glow: {
	num: 3,
	only: 3
},
item_zh_ios_app_adv_click_endWar: {
	num: 3,
	only: 2
},
item_en_ios_app_adv_click_yummy: {
	num: 3,
	only: 3
},
item_en_ios_app_adv_click_magicFish: {
	num: 3,
	only: 3
},
item_zh_ios_app_adv_click_meteor: {
	num: 3,
	only: 2
},
item_en_ios_app_adv_click_endwar: {
	num: 3,
	only: 3
},
item_zh_ios_app_adv_click_lightColor: {
	num: 3,
	only: 3
},
item_zh_ios_app_adv_click_snowCap: {
	num: 3,
	only: 3
},
item_zh_ios_app_adv_click_storm: {
	num: 2,
	only: 1
},
item_en_ios_app_adv_click_loft: {
	num: 2,
	only: 2
},
item_en_ios_app_adv_click_snowCap: {
	num: 2,
	only: 2
},
item_zh_ios_app_adv_click_mirage: {
	num: 2,
	only: 2
},
item_en_ios_app_adv_click_bird: {
	num: 2,
	only: 2
},
item_en_ios_app_adv_click_starTrek: {
	num: 1,
	only: 1
},
item_en_ios_app_adv_click_meteor: {
	num: 1,
	only: 1
},
item_zh_ios_app_adv_click_tornado: {
	num: 1,
	only: 1
},
item_en_ios_app_adv_click_funClouds: {
	num: 1,
	only: 1
},
item_zh_ios_app_adv_click_kite: {
	num: 1,
	only: 1
}
};

var data_android = {item_en_android_PV_PV: {
	num: 419,
	only: 385
},
item_zh_android_PV_PV: {
	num: 242,
	only: 225
},
item_en_android_app_adv_display_c360lite: {
	num: 404,
	only: 371
},
item_en_android_app_adv_display_bestie: {
	num: 399,
	only: 365
},
item_zh_android_app_adv_display_c360lite: {
	num: 239,
	only: 220
},
item_zh_android_app_adv_display_bestie: {
	num: 238,
	only: 218
},
item_en_android_app_adv_display_mix: {
	num: 226,
	only: 215
},
item_en_android_app_adv_display_april: {
	num: 207,
	only: 197
},
item_en_android_app_adv_display_poker: {
	num: 191,
	only: 182
},
item_en_android_app_adv_display_selfportrait: {
	num: 174,
	only: 166
},
item_zh_android_app_adv_display_mix: {
	num: 170,
	only: 160
},
item_en_android_app_adv_display_bird: {
	num: 167,
	only: 160
},
item_en_android_app_adv_display_camAlien: {
	num: 158,
	only: 152
},
item_en_android_app_adv_display_castle: {
	num: 153,
	only: 147
},
item_zh_android_app_adv_display_april: {
	num: 152,
	only: 144
},
item_zh_android_app_adv_display_poker: {
	num: 144,
	only: 138
},
item_en_android_app_adv_display_clouds: {
	num: 139,
	only: 134
},
item_en_android_app_adv_display_flare: {
	num: 135,
	only: 131
},
item_zh_android_app_adv_display_selfportrait: {
	num: 135,
	only: 128
},
item_zh_android_app_adv_display_bird: {
	num: 131,
	only: 124
},
item_en_android_app_adv_display_flyPath: {
	num: 130,
	only: 125
},
item_zh_android_app_adv_display_camAlien: {
	num: 126,
	only: 119
},
item_en_android_app_adv_display_funClouds: {
	num: 120,
	only: 116
},
item_zh_android_app_adv_display_castle: {
	num: 119,
	only: 113
},
item_en_android_app_adv_display_galaxy: {
	num: 114,
	only: 110
},
item_en_android_app_adv_display_glow: {
	num: 111,
	only: 107
},
item_zh_android_app_adv_display_clouds: {
	num: 109,
	only: 104
},
item_en_android_app_adv_display_gospel: {
	num: 108,
	only: 104
},
item_zh_android_app_adv_display_flare: {
	num: 108,
	only: 104
},
item_zh_android_app_adv_display_flyPath: {
	num: 103,
	only: 100
},
item_en_android_app_adv_display_kite: {
	num: 99,
	only: 97
},
item_zh_android_app_adv_display_funClouds: {
	num: 97,
	only: 94
},
item_en_android_app_adv_display_magicFish: {
	num: 94,
	only: 91
},
item_en_android_app_adv_display_meteor: {
	num: 93,
	only: 90
},
item_zh_android_app_adv_display_galaxy: {
	num: 90,
	only: 88
},
item_en_android_app_adv_display_mirage: {
	num: 90,
	only: 87
},
item_zh_android_app_adv_display_glow: {
	num: 89,
	only: 87
},
item_en_android_app_adv_display_planet: {
	num: 88,
	only: 85
},
item_zh_android_app_adv_display_gospel: {
	num: 84,
	only: 83
},
item_en_android_app_adv_display_rainbow: {
	num: 83,
	only: 80
},
item_zh_android_app_adv_display_kite: {
	num: 82,
	only: 81
},
item_en_android_app_adv_display_starTrek: {
	num: 81,
	only: 80
},
item_en_android_app_adv_display_sunset: {
	num: 81,
	only: 79
},
item_en_android_app_adv_display_snowCap: {
	num: 80,
	only: 79
},
item_en_android_app_adv_display_thunder: {
	num: 77,
	only: 75
},
item_zh_android_app_adv_display_magicFish: {
	num: 76,
	only: 76
},
item_en_android_app_adv_display_tornado: {
	num: 73,
	only: 71
},
item_zh_android_app_adv_display_meteor: {
	num: 67,
	only: 67
},
item_zh_android_app_adv_display_mirage: {
	num: 62,
	only: 62
},
item_zh_android_app_adv_display_planet: {
	num: 61,
	only: 61
},
item_zh_android_app_adv_display_rainbow: {
	num: 60,
	only: 60
},
item_zh_android_app_adv_display_snowCap: {
	num: 56,
	only: 56
},
item_zh_android_app_adv_display_starTrek: {
	num: 56,
	only: 56
},
item_zh_android_app_adv_display_sunset: {
	num: 54,
	only: 54
},
item_zh_android_app_adv_display_thunder: {
	num: 52,
	only: 52
},
item_zh_android_app_adv_display_tornado: {
	num: 50,
	only: 50
},
item_en_android_app_adv_click_bestie: {
	num: 49,
	only: 31
},
item_zh_android_app_adv_click_bestie: {
	num: 26,
	only: 21
},
item_en_android_app_adv_click_selfportrait: {
	num: 23,
	only: 17
},
item_en_android_app_adv_click_c360lite: {
	num: 22,
	only: 16
},
item_zh_android_app_adv_click_selfportrait: {
	num: 19,
	only: 15
},
item_zh_android_app_adv_click_c360lite: {
	num: 19,
	only: 18
},
item_zh_android_app_adv_click_april: {
	num: 15,
	only: 12
},
item_en_android_app_adv_click_bird: {
	num: 14,
	only: 13
},
item_en_android_app_adv_click_tornado: {
	num: 14,
	only: 8
},
item_zh_android_app_adv_click_gospel: {
	num: 12,
	only: 10
},
item_zh_android_app_adv_click_camAlien: {
	num: 11,
	only: 10
},
item_en_android_app_adv_click_galaxy: {
	num: 9,
	only: 8
},
item_en_android_app_adv_click_april: {
	num: 9,
	only: 7
},
item_en_android_app_adv_click_camAlien: {
	num: 8,
	only: 6
},
item_zh_android_app_adv_click_castle: {
	num: 7,
	only: 6
},
item_zh_android_app_adv_click_flare: {
	num: 7,
	only: 7
},
item_zh_android_app_adv_click_clouds: {
	num: 7,
	only: 5
},
item_en_android_app_adv_click_flare: {
	num: 7,
	only: 6
},
item_en_android_app_adv_click_sunset: {
	num: 6,
	only: 5
},
item_en_android_app_adv_click_castle: {
	num: 6,
	only: 6
},
item_zh_android_app_adv_click_mix: {
	num: 6,
	only: 6
},
item_en_android_app_adv_click_flyPath: {
	num: 6,
	only: 4
},
item_en_android_app_adv_click_poker: {
	num: 5,
	only: 4
},
item_en_android_app_adv_click_gospel: {
	num: 5,
	only: 4
},
item_en_android_app_adv_click_planet: {
	num: 5,
	only: 4
},
item_en_android_app_adv_click_magicFish: {
	num: 5,
	only: 4
},
item_zh_android_app_adv_click_bird: {
	num: 5,
	only: 4
},
item_zh_android_app_adv_click_poker: {
	num: 5,
	only: 4
},
item_en_android_app_adv_click_rainbow: {
	num: 4,
	only: 4
},
item_en_android_app_adv_click_starTrek: {
	num: 4,
	only: 4
},
item_zh_android_app_adv_click_mirage: {
	num: 4,
	only: 4
},
item_zh_android_app_adv_click_flyPath: {
	num: 4,
	only: 4
},
item_en_android_app_adv_click_clouds: {
	num: 3,
	only: 3
},
item_en_android_app_adv_click_funClouds: {
	num: 3,
	only: 3
},
item_zh_android_app_adv_click_rainbow: {
	num: 3,
	only: 2
},
item_en_android_app_adv_click_meteor: {
	num: 3,
	only: 3
},
item_en_android_app_adv_click_kite: {
	num: 3,
	only: 3
},
item_zh_android_app_adv_click_thunder: {
	num: 3,
	only: 3
},
item_zh_android_app_adv_click_meteor: {
	num: 3,
	only: 3
},
item_zh_android_app_adv_click_sunset: {
	num: 3,
	only: 3
},
item_zh_android_app_adv_click_planet: {
	num: 2,
	only: 2
},
item_zh_android_app_adv_click_galaxy: {
	num: 2,
	only: 2
},
item_zh_android_app_adv_click_funClouds: {
	num: 2,
	only: 2
},
item_zh_android_app_adv_click_starTrek: {
	num: 2,
	only: 2
},
item_zh_android_app_adv_click_magicFish: {
	num: 1,
	only: 1
},
item_zh_android_app_adv_click_tornado: {
	num: 1,
	only: 1
},
item_en_android_app_adv_click_thunder: {
	num: 1,
	only: 1
},
item_en_android_app_adv_click_mix: {
	num: 1,
	only: 1
},
item_en_android_app_adv_click_glow: {
	num: 1,
	only: 1
},
item_zh_android_app_adv_click_snowCap: {
	num: 1,
	only: 1
}}

var data_zh = [], data_en = [];

// for (var key in data_ios) {
//     if (key.indexOf("zh_ios") > -1) {
//         data_zh.push({
//             name: key.replace("zh_ios_", ""),
//             num: data_ios[key].num
//         });
//     }
//     if (key.indexOf("en_ios") > -1) {
//         data_en.push({
//             name: key.replace("en_ios_", ""),
//             num: data_ios[key].num
//         });
//     }
// }

// for (var key in data_android) {
//     if (key.indexOf("zh_android") > -1) {
//         data_zh.push({
//             name: key.replace("zh_android_", ""),
//             num: data_android[key].num
//         });
//     }
//     if (key.indexOf("en_android") > -1) {
//         data_en.push({
//             name: key.replace("en_android_", ""),
//             num: data_android[key].num
//         });
//     }
// }

// var mergeData = {};
// for (var i in data_zh) {
// 	for (var j in data_en) {
// 		if (data_zh[i].name == data_en[j].name) {
// 			mergeData[data_en[j].name] = {
// 				num: data_zh[i].num + data_en[j].num
// 			}
// 		}
// 	}
// }

// console.log(mergeData.length)
// // return;
// var data = mergeData;
// console.log(data)
    var displayList = [],
        clickList = [];
    for (var key in data) {
        if (key.indexOf("display") > -1) {
            displayList.push({
                name: key.replace("display_", ""),
                displayNum: data[key].num
            });
        }
        if (key.indexOf("click") > -1) {
            clickList.push({
                name: key.replace("click_", ""),
                clickNum: data[key].num
            });
        }
    }
    var resultList = [];
    for (var i in displayList) {
        for (var j in clickList) {
            if (displayList[i].name === clickList[j].name) {
                resultList.push({
                    name: clickList[j].name.replace("item_app_adv_", ""),
                    display: displayList[i].displayNum,
                    click: clickList[j].clickNum,
                    ctr: clickList[j].clickNum/displayList[i].displayNum
                })
            }
        }
    }
    var reverseStatus = false;
    // console.log(resultList)
    var render = function (resultList) {
        $("body").empty();
        var list = '';
        for (var i in resultList) {
            var item = resultList[i];
            list += (`<tr><td>${item.name}</td><td>${item.display}</td><td>${item.click}</td><td>${(item.ctr*100).toFixed(2) + "%"}</td></tr>`);
        }
        var tableDom =
            `
                <table>
                    <th id="appName">应用名</th>
                    <th id="display">展示量
                        <img src="./resource/images/down_arrow.png" alt="" class="arrow displayArrow" />
                    </th>
                    <th id="click">点击量
                        <img src="./resource/images/down_arrow.png" alt="" class="arrow clickArrow" />
                    </th>
                    <th id="ctr">点击率
                        <img src="./resource/images/down_arrow.png" alt="" class="arrow ctrArrow" />
                    </th>
                    ${list}
                </table>
            `
        $("body").append(tableDom);

        $("#display").click(function () {
            if (!reverseStatus) {
                render(quickSortDisplay(resultList).reverse())
                $(".displayArrow").addClass("upArrow");
                reverseStatus = true;
            } else {
                render(quickSortDisplay(resultList))
                $(".displayArrow").removeClass("upArrow");
                reverseStatus = false;
            }
        });
        $("#click").click(function () {
            if (!reverseStatus) {
                render(quickSortClick(resultList).reverse())
                $(".clickArrow").addClass("upArrow");
                reverseStatus = true;
            } else {
                render(quickSortClick(resultList))
                $(".clickArrow").removeClass("upArrow");
                reverseStatus = false;
            }
        });
        $("#ctr").click(function () {
            if (!reverseStatus) {
                render(quickSortCtr(resultList).reverse())
                $(".ctrArrow").addClass("upArrow");
                reverseStatus = true;
            } else {
                render(quickSortCtr(resultList))
                $(".ctrArrow").removeClass("upArrow");
                reverseStatus = false;
            }
        });
    }
    render(resultList);

    var quickSortDisplay = function(arr) {
        if (arr.length <= 1) {
            return arr;
        }
        var pivotIndex = Math.floor(arr.length / 2);
        var pivot = arr.splice(pivotIndex, 1)[0];
        var left = [];
        var right = [];
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].display < pivot.display) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }
        return quickSortDisplay(left).concat([pivot], quickSortDisplay(right));
    };
    var quickSortClick = function(arr) {
        if (arr.length <= 1) {
            return arr;
        }
        var pivotIndex = Math.floor(arr.length / 2);
        var pivot = arr.splice(pivotIndex, 1)[0];
        var left = [];
        var right = [];
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].click < pivot.click) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }
        return quickSortClick(left).concat([pivot], quickSortClick(right));
    };
    var quickSortCtr = function(arr) {
        if (arr.length <= 1) {
            return arr;
        }
        var pivotIndex = Math.floor(arr.length / 2);
        var pivot = arr.splice(pivotIndex, 1)[0];
        var left = [];
        var right = [];
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].ctr < pivot.ctr) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }
        return quickSortCtr(left).concat([pivot], quickSortCtr(right));
    };
    // var quickSort = function(arr) {
    //     if (arr.length <= 1) {
    //         return arr;
    //     }
    //     var pivotIndex = Math.floor(arr.length / 2);
    //     var pivot = arr.splice(pivotIndex, 1)[0];
    //     var left = [];
    //     var right = [];
    //     for (var i = 0; i < arr.length; i++) {
    //         if (arr[i] < pivot) {
    //             left.push(arr[i]);
    //         } else {
    //             right.push(arr[i]);
    //         }
    //     }
    //     return quickSortCtr(left).concat([pivot], quickSortCtr(right));
    // };


    // $("#appName").click(function () {
    //     var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
    //     console.log(quickSort(arr).reverse());
    // });
    // // console.log(quickSort(resultList).reverse());
    // // render(quickSort(resultList).reverse())
    // // console.log([0].concat([9,89], [2],[90]))
})()




















