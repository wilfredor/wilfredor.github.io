(()=>{var e={553:e=>{!function(){"use strict";var t=document,n=window,i=t.documentElement,r=t.createElement.bind(t),a=r("div"),o=r("table"),s=r("tbody"),c=r("tr"),u=Array.isArray,d=Array.prototype,l=d.concat,f=d.filter,p=d.indexOf,m=d.map,h=d.push,g=d.slice,v=d.some,b=d.splice,y=/^#(?:[\w-]|\\.|[^\x00-\xa0])*$/,E=/^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/,C=/<.+>/,A=/^\w+$/;function I(e,t){var n,i=!!(n=t)&&11===n.nodeType;return e&&(i||M(t)||O(t))?!i&&E.test(e)?t.getElementsByClassName(e.slice(1).replace(/\\/g,"")):!i&&A.test(e)?t.getElementsByTagName(e):t.querySelectorAll(e):[]}var _=function(){function e(e,i){if(e){if(w(e))return e;var r=e;if(D(e)){var a=(w(i)?i[0]:i)||t;if(!(r=y.test(e)&&"getElementById"in a?a.getElementById(e.slice(1).replace(/\\/g,"")):C.test(e)?K(e):I(e,a)))return}else if(N(e))return this.ready(e);(r.nodeType||r===n)&&(r=[r]),this.length=r.length;for(var o=0,s=this.length;o<s;o++)this[o]=r[o]}}return e.prototype.init=function(t,n){return new e(t,n)},e}(),x=_.prototype,T=x.init;function w(e){return e instanceof _}function P(e){return!!e&&e===e.window}function M(e){return!!e&&9===e.nodeType}function O(e){return!!e&&1===e.nodeType}function S(e){return"boolean"==typeof e}function N(e){return"function"==typeof e}function D(e){return"string"==typeof e}function j(e){return void 0===e}function q(e){return null===e}function R(e){return!isNaN(parseFloat(e))&&isFinite(e)}function B(e){if("object"!=typeof e||null===e)return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function L(e,t,n){if(n){for(var i=e.length;i--;)if(!1===t.call(e[i],i,e[i]))return e}else if(B(e))for(var r=Object.keys(e),a=(i=0,r.length);i<a;i++){var o=r[i];if(!1===t.call(e[o],o,e[o]))return e}else for(i=0,a=e.length;i<a;i++)if(!1===t.call(e[i],i,e[i]))return e;return e}function z(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=!!S(e[0])&&e.shift(),i=e.shift(),r=e.length;if(!i)return{};if(!r)return z(n,T,i);for(var a=0;a<r;a++){var o=e[a];for(var s in o)n&&(u(o[s])||B(o[s]))?(i[s]&&i[s].constructor===o[s].constructor||(i[s]=new o[s].constructor),z(n,i[s],o[s])):i[s]=o[s]}return i}T.fn=T.prototype=x,x.length=0,x.splice=b,"function"==typeof Symbol&&(x[Symbol.iterator]=d[Symbol.iterator]),T.isWindow=P,T.isFunction=N,T.isArray=u,T.isNumeric=R,T.isPlainObject=B,T.each=L,x.each=function(e){return L(this,e)},x.empty=function(){return this.each((function(e,t){for(;t.firstChild;)t.removeChild(t.firstChild)}))},x.text=function(e){return j(e)?this[0]?this[0].textContent:"":this.each((function(t,n){O(n)&&(n.textContent=e)}))},T.extend=z,x.extend=function(e){return z(x,e)};var k=/\S+/g;function F(e){return D(e)&&e.match(k)||[]}function G(e,t,i){if(O(e)){var r=n.getComputedStyle(e,null);return i?r.getPropertyValue(t)||void 0:r[t]||e.style[t]}}function H(e,t){return parseInt(G(e,t),10)||0}function W(e,t){return H(e,"border".concat(t?"Left":"Top","Width"))+H(e,"padding".concat(t?"Left":"Top"))+H(e,"padding".concat(t?"Right":"Bottom"))+H(e,"border".concat(t?"Right":"Bottom","Width"))}x.toggleClass=function(e,t){var n=F(e),i=!j(t);return this.each((function(e,r){O(r)&&L(n,(function(e,n){i?t?r.classList.add(n):r.classList.remove(n):r.classList.toggle(n)}))}))},x.addClass=function(e){return this.toggleClass(e,!0)},x.removeAttr=function(e){var t=F(e);return this.each((function(e,n){O(n)&&L(t,(function(e,t){n.removeAttribute(t)}))}))},x.attr=function(e,t){if(e){if(D(e)){if(arguments.length<2){if(!this[0]||!O(this[0]))return;var n=this[0].getAttribute(e);return q(n)?void 0:n}return j(t)?this:q(t)?this.removeAttr(e):this.each((function(n,i){O(i)&&i.setAttribute(e,t)}))}for(var i in e)this.attr(i,e[i]);return this}},x.removeClass=function(e){return arguments.length?this.toggleClass(e,!1):this.attr("class","")},x.hasClass=function(e){return!!e&&v.call(this,(function(t){return O(t)&&t.classList.contains(e)}))},x.get=function(e){return j(e)?g.call(this):this[(e=Number(e))<0?e+this.length:e]},x.eq=function(e){return T(this.get(e))},x.first=function(){return this.eq(0)},x.last=function(){return this.eq(-1)};var $={};function U(e){return"none"===G(e,"display")}function J(e,t){var n=e&&(e.matches||e.webkitMatchesSelector||e.msMatchesSelector);return!!n&&!!t&&n.call(e,t)}function V(e){return D(e)?function(t,n){return J(n,e)}:N(e)?e:w(e)?function(t,n){return e.is(n)}:e?function(t,n){return n===e}:function(){return!1}}function Q(e,t){return t?e.filter(t):e}x.filter=function(e){var t=V(e);return T(f.call(this,(function(e,n){return t.call(e,n,e)})))},x.detach=function(e){return Q(this,e).each((function(e,t){t.parentNode&&t.parentNode.removeChild(t)})),this};var Y=/^\s*<(\w+)[^>]*>/,X=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,Z={"*":a,tr:s,td:c,th:c,thead:o,tbody:o,tfoot:o};function K(e){if(!D(e))return[];if(X.test(e))return[r(RegExp.$1)];var t=Y.test(e)&&RegExp.$1,n=Z[t]||Z["*"];return n.innerHTML=e,T(n.childNodes).detach().get()}function ee(e,t,n,i){for(var r=[],a=N(t),o=i&&V(i),s=0,c=e.length;s<c;s++)if(a){var u=t(e[s]);u.length&&h.apply(r,u)}else for(var d=e[s][t];!(null==d||i&&o(-1,d));)r.push(d),d=n?d[t]:null;return r}function te(e){return e.multiple&&e.options?ee(f.call(e.options,(function(e){return e.selected&&!e.disabled&&!e.parentNode.disabled})),"value"):e.value||""}function ne(e){return e.length>1?f.call(e,(function(e,t,n){return p.call(n,e)===t})):e}T.parseHTML=K,x.has=function(e){var t=D(e)?function(t,n){return I(e,n).length}:function(t,n){return n.contains(e)};return this.filter(t)},x.not=function(e){var t=V(e);return this.filter((function(n,i){return(!D(e)||O(i))&&!t.call(i,n,i)}))},x.val=function(e){return arguments.length?this.each((function(t,n){var i=n.multiple&&n.options;if(i||Re.test(n.type)){var r=u(e)?m.call(e,String):q(e)?[]:[String(e)];i?L(n.options,(function(e,t){t.selected=r.indexOf(t.value)>=0}),!0):n.checked=r.indexOf(n.value)>=0}else n.value=j(e)||q(e)?"":e})):this[0]&&te(this[0])},x.is=function(e){var t=V(e);return v.call(this,(function(e,n){return t.call(e,n,e)}))},T.guid=1,T.unique=ne,x.add=function(e,t){return T(ne(this.get().concat(T(e,t).get())))},x.children=function(e){return Q(T(ne(ee(this,(function(e){return e.children})))),e)},x.parent=function(e){return Q(T(ne(ee(this,"parentNode"))),e)},x.index=function(e){var t=e?T(e)[0]:this[0],n=e?this:T(t).parent().children();return p.call(n,t)},x.closest=function(e){var t=this.filter(e);if(t.length)return t;var n=this.parent();return n.length?n.closest(e):t},x.siblings=function(e){return Q(T(ne(ee(this,(function(e){return T(e).parent().children().not(e)})))),e)},x.find=function(e){return T(ne(ee(this,(function(t){return I(e,t)}))))};var ie=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,re=/^$|^module$|\/(java|ecma)script/i,ae=["type","src","nonce","noModule"];function oe(e,t,n,a,o,s,c,u){return L(e,(function(e,s){L(T(s),(function(e,s){L(T(t),(function(t,c){var u=n?c:s,d=n?e:t;!function(e,t,n,a,o){a?e.insertBefore(t,n?e.firstChild:null):"HTML"===e.nodeName?e.parentNode.replaceChild(t,e):e.parentNode.insertBefore(t,n?e:e.nextSibling),o&&function(e,t){var n=T(e);n.filter("script").add(n.find("script")).each((function(e,n){if(re.test(n.type)&&i.contains(n)){var a=r("script");a.text=n.textContent.replace(ie,""),L(ae,(function(e,t){n[t]&&(a[t]=n[t])})),t.head.insertBefore(a,null),t.head.removeChild(a)}}))}(t,e.ownerDocument)}(n?s:c,d?u.cloneNode(!0):u,a,o,!d)}),u)}),c)}),s),t}x.after=function(){return oe(arguments,this,!1,!1,!1,!0,!0)},x.append=function(){return oe(arguments,this,!1,!1,!0)},x.html=function(e){if(!arguments.length)return this[0]&&this[0].innerHTML;if(j(e))return this;var t=/<script[\s>]/.test(e);return this.each((function(n,i){O(i)&&(t?T(i).empty().append(e):i.innerHTML=e)}))},x.appendTo=function(e){return oe(arguments,this,!0,!1,!0)},x.wrapInner=function(e){return this.each((function(t,n){var i=T(n),r=i.contents();r.length?r.wrapAll(e):i.append(e)}))},x.before=function(){return oe(arguments,this,!1,!0)},x.wrapAll=function(e){for(var t=T(e),n=t[0];n.children.length;)n=n.firstElementChild;return this.first().before(t),this.appendTo(n)},x.wrap=function(e){return this.each((function(t,n){var i=T(e)[0];T(n).wrapAll(t?i.cloneNode(!0):i)}))},x.insertAfter=function(e){return oe(arguments,this,!0,!1,!1,!1,!1,!0)},x.insertBefore=function(e){return oe(arguments,this,!0,!0)},x.prepend=function(){return oe(arguments,this,!1,!0,!0,!0,!0)},x.prependTo=function(e){return oe(arguments,this,!0,!0,!0,!1,!1,!0)},x.contents=function(){return T(ne(ee(this,(function(e){return"IFRAME"===e.tagName?[e.contentDocument]:"TEMPLATE"===e.tagName?e.content.childNodes:e.childNodes}))))},x.next=function(e,t,n){return Q(T(ne(ee(this,"nextElementSibling",t,n))),e)},x.nextAll=function(e){return this.next(e,!0)},x.nextUntil=function(e,t){return this.next(t,!0,e)},x.parents=function(e,t){return Q(T(ne(ee(this,"parentElement",!0,t))),e)},x.parentsUntil=function(e,t){return this.parents(t,e)},x.prev=function(e,t,n){return Q(T(ne(ee(this,"previousElementSibling",t,n))),e)},x.prevAll=function(e){return this.prev(e,!0)},x.prevUntil=function(e,t){return this.prev(t,!0,e)},x.map=function(e){return T(l.apply([],m.call(this,(function(t,n){return e.call(t,n,t)}))))},x.clone=function(){return this.map((function(e,t){return t.cloneNode(!0)}))},x.offsetParent=function(){return this.map((function(e,t){for(var n=t.offsetParent;n&&"static"===G(n,"position");)n=n.offsetParent;return n||i}))},x.slice=function(e,t){return T(g.call(this,e,t))};var se=/-([a-z])/g;function ce(e){return e.replace(se,(function(e,t){return t.toUpperCase()}))}x.ready=function(e){var n=function(){return setTimeout(e,0,T)};return"loading"!==t.readyState?n():t.addEventListener("DOMContentLoaded",n),this},x.unwrap=function(){return this.parent().each((function(e,t){if("BODY"!==t.tagName){var n=T(t);n.replaceWith(n.children())}})),this},x.offset=function(){var e=this[0];if(e){var t=e.getBoundingClientRect();return{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}}},x.position=function(){var e=this[0];if(e){var t="fixed"===G(e,"position"),n=t?e.getBoundingClientRect():this.offset();if(!t){for(var i=e.ownerDocument,r=e.offsetParent||i.documentElement;(r===i.body||r===i.documentElement)&&"static"===G(r,"position");)r=r.parentNode;if(r!==e&&O(r)){var a=T(r).offset();n.top-=a.top+H(r,"borderTopWidth"),n.left-=a.left+H(r,"borderLeftWidth")}}return{top:n.top-H(e,"marginTop"),left:n.left-H(e,"marginLeft")}}};var ue={class:"className",contenteditable:"contentEditable",for:"htmlFor",readonly:"readOnly",maxlength:"maxLength",tabindex:"tabIndex",colspan:"colSpan",rowspan:"rowSpan",usemap:"useMap"};x.prop=function(e,t){if(e){if(D(e))return e=ue[e]||e,arguments.length<2?this[0]&&this[0][e]:this.each((function(n,i){i[e]=t}));for(var n in e)this.prop(n,e[n]);return this}},x.removeProp=function(e){return this.each((function(t,n){delete n[ue[e]||e]}))};var de=/^--/;function le(e){return de.test(e)}var fe={},pe=a.style,me=["webkit","moz","ms"];function he(e,t){if(void 0===t&&(t=le(e)),t)return e;if(!fe[e]){var n=ce(e),i="".concat(n[0].toUpperCase()).concat(n.slice(1));L("".concat(n," ").concat(me.join("".concat(i," "))).concat(i).split(" "),(function(t,n){if(n in pe)return fe[e]=n,!1}))}return fe[e]}var ge={animationIterationCount:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0};function ve(e,t,n){return void 0===n&&(n=le(e)),n||ge[e]||!R(t)?t:"".concat(t,"px")}function be(e,t){try{return e(t)}catch(e){return t}}x.css=function(e,t){if(D(e)){var n=le(e);return e=he(e,n),arguments.length<2?this[0]&&G(this[0],e,n):e?(t=ve(e,t,n),this.each((function(i,r){O(r)&&(n?r.style.setProperty(e,t):r.style[e]=t)}))):this}for(var i in e)this.css(i,e[i]);return this};var ye=/^\s+|\s+$/;function Ee(e,t){var n=e.dataset[t]||e.dataset[ce(t)];return ye.test(n)?n:be(JSON.parse,n)}function Ce(e,t,n){n=be(JSON.stringify,n),e.dataset[ce(t)]=n}function Ae(e,t){var n=e.documentElement;return Math.max(e.body["scroll".concat(t)],n["scroll".concat(t)],e.body["offset".concat(t)],n["offset".concat(t)],n["client".concat(t)])}x.data=function(e,t){if(!e){if(!this[0])return;var n={};for(var i in this[0].dataset)n[i]=Ee(this[0],i);return n}if(D(e))return arguments.length<2?this[0]&&Ee(this[0],e):j(t)?this:this.each((function(n,i){Ce(i,e,t)}));for(var i in e)this.data(i,e[i]);return this},L([!0,!1],(function(e,t){L(["Width","Height"],(function(e,n){var i="".concat(t?"outer":"inner").concat(n);x[i]=function(i){if(this[0])return P(this[0])?t?this[0]["inner".concat(n)]:this[0].document.documentElement["client".concat(n)]:M(this[0])?Ae(this[0],n):this[0]["".concat(t?"offset":"client").concat(n)]+(i&&t?H(this[0],"margin".concat(e?"Top":"Left"))+H(this[0],"margin".concat(e?"Bottom":"Right")):0)}}))})),L(["Width","Height"],(function(e,t){var n=t.toLowerCase();x[n]=function(i){if(!this[0])return j(i)?void 0:this;if(!arguments.length)return P(this[0])?this[0].document.documentElement["client".concat(t)]:M(this[0])?Ae(this[0],t):this[0].getBoundingClientRect()[n]-W(this[0],!e);var r=parseInt(i,10);return this.each((function(t,i){if(O(i)){var a=G(i,"boxSizing");i.style[n]=ve(n,r+("border-box"===a?W(i,!e):0))}}))}}));var Ie="___cd";x.toggle=function(e){return this.each((function(n,i){O(i)&&((j(e)?U(i):e)?(i.style.display=i[Ie]||"",U(i)&&(i.style.display=function(e){if($[e])return $[e];var n=r(e);t.body.insertBefore(n,null);var i=G(n,"display");return t.body.removeChild(n),$[e]="none"!==i?i:"block"}(i.tagName))):(i[Ie]=G(i,"display"),i.style.display="none"))}))},x.hide=function(){return this.toggle(!1)},x.show=function(){return this.toggle(!0)};var _e="___ce",xe={focus:"focusin",blur:"focusout"},Te={mouseenter:"mouseover",mouseleave:"mouseout"},we=/^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;function Pe(e){return Te[e]||xe[e]||e}function Me(e){var t=e.split(".");return[t[0],t.slice(1).sort()]}function Oe(e){return e[_e]=e[_e]||{}}function Se(e,t){return!t||!v.call(t,(function(t){return e.indexOf(t)<0}))}function Ne(e,t,n,i,r){var a=Oe(e);if(t)a[t]&&(a[t]=a[t].filter((function(a){var o=a[0],s=a[1],c=a[2];if(r&&c.guid!==r.guid||!Se(o,n)||i&&i!==s)return!0;e.removeEventListener(t,c)})));else for(t in a)Ne(e,t,n,i,r)}x.trigger=function(e,n){if(D(e)){var i=Me(e),r=i[0],a=i[1],o=Pe(r);if(!o)return this;var s=we.test(o)?"MouseEvents":"HTMLEvents";(e=t.createEvent(s)).initEvent(o,!0,!0),e.namespace=a.join("."),e.___ot=r}e.___td=n;var c=e.___ot in xe;return this.each((function(t,n){c&&N(n[e.___ot])&&(n["___i".concat(e.type)]=!0,n[e.___ot](),n["___i".concat(e.type)]=!1),n.dispatchEvent(e)}))},x.off=function(e,t,n){var i=this;if(j(e))this.each((function(e,t){(O(t)||M(t)||P(t))&&Ne(t)}));else if(D(e))N(t)&&(n=t,t=""),L(F(e),(function(e,r){var a=Me(r),o=a[0],s=a[1],c=Pe(o);i.each((function(e,i){(O(i)||M(i)||P(i))&&Ne(i,c,s,t,n)}))}));else for(var r in e)this.off(r,e[r]);return this},x.remove=function(e){return Q(this,e).detach().off(),this},x.replaceWith=function(e){return this.before(e).remove()},x.replaceAll=function(e){return T(e).replaceWith(this),this},x.on=function(e,t,n,i,r){var a=this;if(!D(e)){for(var o in e)this.on(o,t,n,e[o],r);return this}return D(t)||(j(t)||q(t)?t="":j(n)?(n=t,t=""):(i=n,n=t,t="")),N(i)||(i=n,n=void 0),i?(L(F(e),(function(e,o){var s=Me(o),c=s[0],u=s[1],d=Pe(c),l=c in Te,f=c in xe;d&&a.each((function(e,a){if(O(a)||M(a)||P(a)){var o=function(e){if(e.target["___i".concat(e.type)])return e.stopImmediatePropagation();if((!e.namespace||Se(u,e.namespace.split(".")))&&(t||!(f&&(e.target!==a||e.___ot===d)||l&&e.relatedTarget&&a.contains(e.relatedTarget)))){var s=a;if(t){for(var c=e.target;!J(c,t);){if(c===a)return;if(!(c=c.parentNode))return}s=c}Object.defineProperty(e,"currentTarget",{configurable:!0,get:function(){return s}}),Object.defineProperty(e,"delegateTarget",{configurable:!0,get:function(){return a}}),Object.defineProperty(e,"data",{configurable:!0,get:function(){return n}});var p=i.call(s,e,e.___td);r&&Ne(a,d,u,t,o),!1===p&&(e.preventDefault(),e.stopPropagation())}};o.guid=i.guid=i.guid||T.guid++,function(e,t,n,i,r){var a=Oe(e);a[t]=a[t]||[],a[t].push([n,i,r]),e.addEventListener(t,r)}(a,d,u,t,o)}}))})),this):this},x.one=function(e,t,n,i){return this.on(e,t,n,i,!0)};var De=/%20/g,je=/\r?\n/g,qe=/file|reset|submit|button|image/i,Re=/radio|checkbox/i;x.serialize=function(){var e="";return this.each((function(t,n){L(n.elements||[n],(function(t,n){if(!(n.disabled||!n.name||"FIELDSET"===n.tagName||qe.test(n.type)||Re.test(n.type)&&!n.checked)){var i=te(n);j(i)||L(u(i)?i:[i],(function(t,i){e+=function(e,t){return"&".concat(encodeURIComponent(e),"=").concat(encodeURIComponent(t.replace(je,"\r\n")).replace(De,"+"))}(n.name,i)}))}}))})),e.slice(1)},e.exports=T}()},423:function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Area=void 0;var r=i(n(82)),a=n(967),o=i(n(432)),s=function(){function e(e,t){this._lang=r.default,this._id=e,this._lang=t}return Object.defineProperty(e.prototype,"porcent",{get:function(){return this._porcent},set:function(e){this._porcent=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"id",{get:function(){return this.id},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"description",{get:function(){var e=this;return this._lang.areas.filter((function(t){return t.id===e._id}))[0].description},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"carreras",{get:function(){return this._lang.carreras[this._id-1].description},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"questions",{get:function(){var e=this,t=[];return o.default.questionsInAreas().filter((function(t){return t.areaId===e._id}))[0].questionsId.forEach((function(n){t.push(new a.Question(n,e._lang))})),t},enumerable:!1,configurable:!0}),e}();t.Area=s},967:function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Question=void 0;var r=n(423),a=i(n(82)),o=i(n(432)),s=function(){function e(e,t){this._lang=a.default,this._id=e,this._lang=t}return Object.defineProperty(e.prototype,"id",{get:function(){return this.id},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"description",{get:function(){var e=this;return this._lang.questions.filter((function(t){return t.id===e._id}))[0].description},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"area",{get:function(){var e=this;return new r.Area(o.default.questionsInAreas().filter((function(t){return t.questionsId.includes(e._id)}))[0].areaId,this._lang)},enumerable:!1,configurable:!0}),e}();t.Question=s},9:function(e,t,n){"use strict";var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(r,a){function o(e){try{c(i.next(e))}catch(e){a(e)}}function s(e){try{c(i.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,s)}c((i=i.apply(e,t||[])).next())}))},r=this&&this.__generator||function(e,t){var n,i,r,a,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(s){return function(c){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;a&&(a=0,s[0]&&(o=0)),o;)try{if(n=1,i&&(r=2&s[0]?i.return:s[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,s[1])).done)return r;switch(i=0,r&&(s=[2&s[0],r.value]),s[0]){case 0:case 1:r=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,i=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!((r=(r=o.trys).length>0&&r[r.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!r||s[1]>r[0]&&s[1]<r[3])){o.label=s[1];break}if(6===s[0]&&o.label<r[1]){o.label=r[1],r=s;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(s);break}r[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(e){s=[6,e],i=0}finally{n=r=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,c])}}},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=a(n(553)),s=a(n(900)),c=a(n(82)),u=a(n(432)),d=n(967),l=n(423),f=c.default;function p(e){var t=document.querySelectorAll("tr:not(:first-child) td:nth-child(2)");document.getElementById("Activity").innerHTML=e.labels.Activity,t.forEach((function(t,n){var i=new d.Question(n+1,e);t.innerHTML=i.description}))}function m(e){return i(this,void 0,void 0,(function(){var t;return r(this,(function(n){switch(n.label){case 0:return t="./lang/".concat(e,".json"),[4,fetch(t)];case 1:return[2,n.sent().text()]}}))}))}window.onload=function(){var e=this;(0,o.default)("#btn_procesar").on("click",(function(){return function(){if(function(e){for(var t=0;t<=e-1;t++){var n=document.getElementsByName("question".concat(t)),i=n[0],r=n[1];if(!i.checked&&!r.checked)return i.focus(),i.parentElement.parentElement.style.background="lightcoral",alert("".concat(f.labels.AllQuestionsNeedToBeAnswered," ").concat(t+1)),!1}return!0}(f.questions.length)){var e=(t=[0,0,0,0,0],Array.from(document.querySelectorAll('input[name^="question"]')).forEach((function(e,n){(0,o.default)(e).is(":checked")&&u.default.questionsInAreas().forEach((function(e,i){e.questionsId.includes(n+1)&&t[i]++}))})),t);!function(e){for(var t=document.getElementsByClassName("areas")[0],n=[],i=1;i<f.areas.length;i++){var r=new l.Area(i,f);r.porcent=e[i],n.push(r)}n.sort((function(e,t){return t.porcent>e.porcent?1:-1})),n.forEach((function(e){var n=document.createElement("h1"),i=document.createElement("p");n.innerText="".concat(e.description," ").concat(e.porcent," %"),i.innerText=e.carreras,t.appendChild(n),t.appendChild(i)})),document.getElementsByTagName("table")[0].innerHTML="",document.getElementById("btn_procesar").style.display="none"}(e.map((function(t){return n=t,i=e.reduce((function(e,t){return e+t}),0),Math.floor(100*n/i);var n,i})))}var t}()})),(0,o.default)("#lang").on("change",(function(t){return i(e,void 0,void 0,(function(){return r(this,(function(e){switch(e.label){case 0:return[4,m(t.value)];case 1:return p(f=e.sent()),[2]}}))}))})),f.questions.forEach((function(e,t){return s.default.addRow(t)})),p(f)}},432:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){}return e.questionsInAreas=function(){return[{areaId:1,questionsId:[4,9,12,20,28,31,35,39,43,46,50,65,67,68,75,77]},{areaId:2,questionsId:[6,13,23,25,34,37,38,42,49,52,55,63,66,70,72,78]},{areaId:3,questionsId:[5,10,15,19,21,26,29,33,36,44,53,56,59,62,71,80]},{areaId:4,questionsId:[1,7,11,17,18,24,30,41,48,51,58,60,61,64,73,79]},{areaId:5,questionsId:[2,3,8,14,16,22,27,32,40,45,47,54,57,69,74,76]}]},e}();t.default=n},900:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){}return e.addRow=function(t){var n,i=this,r=null===(n=document.getElementById("table"))||void 0===n?void 0:n.getElementsByTagName("tbody")[0];if(r){var a=document.createElement("tr");[t+1,"",e.createRadio(t),e.createRadio(t)].forEach((function(e){var t=document.createElement("td");i.addCellContent(e,t),a.appendChild(t)})),r.appendChild(a)}},e.addCellContent=function(e,t){e instanceof HTMLInputElement?t.appendChild(e):t.textContent=e.toString()},e.createRadio=function(e){var t=document.createElement("input");return t.type="radio",t.name="question".concat(e),t},e}();t.default=n},82:e=>{"use strict";e.exports=JSON.parse('{"questions":[{"id":1,"description":"Desenhar programas de computação e explorar novas aplicações tecnológicas para uso da internet."},{"id":2,"description":"Criar, cuidar e tratar animais domésticos e de campo"},{"id":3,"description":"Investigar sobre áreas verdes, meio ambiente e mudanças climáticas"},{"id":4,"description":"Ilustrar, desenhar e animar digitalmente."},{"id":5,"description":"Selecionar, capacitar e motivar o pessoal de uma organização/empresa"},{"id":6,"description":"Realizar escavações para descobrir restos do passado"},{"id":7,"description":"Resolver problemas de cálculo para construir edificações."},{"id":8,"description":"Desenhar cursos para ensinar as pessoas sobre temas de saúde e higiene"},{"id":9,"description":"Tocar um instrumento, compor música e fazer parte de um conjunto musical ou orquestra."},{"id":10,"description":"Planejar quais são as metas de uma organização pública ou privada a médio e longo prazo."},{"id":11,"description":"Desenhar e planejar a produção em massa de artigos como móveis, carros, equipamentos de escritório, embalagens e envases para alimentos e outros."},{"id":12,"description":"Desenhar logotipos e capas de uma revista"},{"id":13,"description":"Organizar eventos e atender aos seus assistentes."},{"id":14,"description":"Atender a saúde de pessoas doentes."},{"id":15,"description":"Controlar rendimentos e despesas de fundos e apresentar o balanço final de uma instituição"},{"id":16,"description":"Fazer experimentos com plantas (frutas, árvores, flores)"},{"id":17,"description":"Conceber planos para residências, edifícios e cidadelas."},{"id":18,"description":"Investigar e testar novos produtos farmacêuticos."},{"id":19,"description":"Fazer propostas e formular estratégias para aproveitar as relações econômicas entre dois países."},{"id":20,"description":"Pintar, fazer esculturas, ilustrar livros de arte, etc."},{"id":21,"description":"Elaborar campanhas para introduzir um novo produto no mercado."},{"id":22,"description":"Examinar e tratar problemas visuais"},{"id":23,"description":"Defender clientes individuais ou empresas em julgamentos de diferentes naturezas."},{"id":24,"description":"Desenhar máquinas que possam simular atividades humanas."},{"id":25,"description":"Investigar as causas e efeitos dos transtornos emocionais"},{"id":26,"description":"Supervisionar as vendas de um centro comercial"},{"id":27,"description":"Atender e realizar exercícios para pessoas com limitações físicas, problemas de linguagem, etc."},{"id":28,"description":"Preparar-se para ser modelo profissional."},{"id":29,"description":"Aconselhar as pessoas sobre planos de poupança e investimentos."},{"id":30,"description":"Elaborar mapas, planos e imagens para o estudo e análise de dados geográficos."},{"id":31,"description":"Desenhar jogos interativos eletrônicos para computador."},{"id":32,"description":"Realizar o controle de qualidade dos alimentos"},{"id":33,"description":"Ter um negócio próprio de tipo comercial."},{"id":34,"description":"Analisar os fenômenos políticos e participar ativamente deles."},{"id":35,"description":"Escrever roteiros para televisão, contos, romances e artigos jornalísticos."},{"id":36,"description":"Organizar um plano de distribuição e venda de um grande armazém."},{"id":37,"description":"Estudar as costumes e a forma de vida das comunidades rurais e urbanas."},{"id":38,"description":"Gerenciar e avaliar acordos internacionais de cooperação para o desenvolvimento social."},{"id":39,"description":"Fazer campanhas publicitárias para produtos e serviços"},{"id":40,"description":"Trabalhar investigando a reprodução de peixes, camarões e outros animais marinhos."},{"id":41,"description":"Fabricar produtos alimentícios de consumo em massa"},{"id":42,"description":"Gerenciar e avaliar projetos de desenvolvimento em uma instituição educacional e/ou fundação."},{"id":43,"description":"Redesenhar e decorar espaços físicos em residências, escritórios e lojas comerciais."},{"id":44,"description":"Administrar uma empresa de turismo e/ou agências de viagem."},{"id":45,"description":"Aplicar métodos alternativos à medicina tradicional para atender pessoas com doenças de diversas naturezas."},{"id":46,"description":"Desenhar roupas para crianças, jovens e adultos."},{"id":47,"description":"Investigar organismos vivos para elaborar vacinas."},{"id":48,"description":"Manusear e/ou dar manutenção a dispositivos/aparelhos tecnológicos em aviões, navios, radares, etc."},{"id":49,"description":"Estudar idiomas estrangeiros - atuais e antigos- para fazer traduções."},{"id":50,"description":"Restaurar peças e obras de arte"},{"id":51,"description":"Revisar e dar manutenção a artefatos elétricos, eletrônicos e computadores."},{"id":52,"description":"Ensinar crianças de 0 a 5 anos"},{"id":53,"description":"Investigar e/ou sondar novos mercados."},{"id":54,"description":"Atender a saúde dental das pessoas"},{"id":55,"description":"Tratar crianças, jovens e adultos com problemas psicológicos."},{"id":56,"description":"Criar estratégias de promoção e venda de novos produtos equatorianos no mercado internacional."},{"id":57,"description":"Planejar e recomendar dietas para pessoas diabéticas e/ou com sobrepeso."},{"id":58,"description":"Trabalhar em uma empresa petrolífera em cargos técnicos."},{"id":59,"description":"Administrar uma empresa (familiar, privada ou pública)"},{"id":60,"description":"Ter um ateliê de reparação e manutenção de carros, tratores, etc."},{"id":61,"description":"Executar projetos de extração minera e metalúrgica."},{"id":62,"description":"Assistir executivos de multinacionais com manuseio de vários idiomas."},{"id":63,"description":"Desenhar programas educativos para crianças com deficiência."},{"id":64,"description":"Aplicar conhecimentos de estatística em investigações em diversas áreas (social, administrativa, saúde, etc.)"},{"id":65,"description":"Fotografar fatos históricos, lugares significativos, rostos, paisagens e produtos variados."},{"id":66,"description":"Trabalhar em museus e bibliotecas nacionais e internacionais."},{"id":67,"description":"Fazer parte de um grupo de teatro."},{"id":68,"description":"Produzir curtas-metragens, spots publicitários, programas educativos, de ficção, etc."},{"id":69,"description":"Estudar a influência entre as correntes marinhas e o clima e suas consequências ecológicas."},{"id":70,"description":"Estudar profundamente uma religião para orientar espiritualmente as pessoas que precisam."},{"id":71,"description":"Assessorar investidores na compra de bens/ações em mercados nacionais e internacionais."},{"id":72,"description":"Participar na criação de novas leis para melhorar o país."},{"id":73,"description":"Explorar o espaço sideral, os planetas, características e componentes."},{"id":74,"description":"Melhorar a imagem facial e corporal das pessoas aplicando diferentes técnicas."},{"id":75,"description":"Decorar jardins de casas e parques públicos."},{"id":76,"description":"Administrar e renovar cardápios de refeições em um hotel ou restaurante."},{"id":77,"description":"Trabalhar como apresentador de televisão, locutor de rádio e televisão, animador de programas culturais e concursos."},{"id":78,"description":"Projetar e executar programas de turismo."},{"id":79,"description":"Administrar e organizar adequadamente a ocupação do espaço físico de cidades, países etc., usando imagens de satélite, mapas."},{"id":80,"description":"Organizar, planejar e administrar centros educacionais"}],"areas":[{"id":1,"description":"ARTE E CRIATIVIDADE"},{"id":2,"description":"CIÊNCIAS SOCIAIS"},{"id":3,"description":"ECONÔMICA, ADMINISTRATIVA E FINANCEIRA"},{"id":4,"description":"CIÊNCIA E TECNOLOGIA"},{"id":5,"description":"CIÊNCIAS ECOLÓGICAS, BIOLÓGICAS E DA SAÚDE"}],"carreras":[{"id":1,"description":"Design Gráfico, Design e Decoração de Interiores, Design de Jardins, Design de Moda, Design de Jóias, Artes Plásticas (pintura, escultura, dança, teatro, artesanato, cerâmica), Desenho Publicitário, Restauração e museologia, modelagem, fotografia, Fotografia Digital, gestão gráfica e publicitária, locução e publicidade, atuação, Camarografia, Arte Industrial, Produção Audiovisual e Multimídia, Comunicação e Produção em Rádio e Televisão, Design de Paisagem, Cinema e Vídeo, Comunicação cênica para televisão."},{"id":2,"description":"Psicologia em geral, Trabalho Social, Idiomas, Educação Internacional, História e Geografia, Jornalismo, Jornalismo Digital, Direito, Ciências Políticas, Sociologia, Antropologia, Arqueologia, Gestão Social e Desenvolvimento, Conselhos Familiares, Comunicação e publicidade, administração educacional, Educação Especial, Psicopedagogia, Estímulo Precoce, Tradução Simultânea, Linguística, Educação de Crianças, Biblioteconomia, Museologia, Relações Internacionais e Diplomacia, Comunicação Social com ênfase em Marketing e Gestão de Empresas, Redação Criativa e Publicitária, Relações Públicas e Comunicação Organizacional; Hotelaria e Turismo; Teologia, Instituição Sacerdotal."},{"id":3,"description":"Administração de Empresas, Contabilidade, Auditoria, Vendas, Marketing Estratégico, Gestão e Negócios Internacionais, Gestão Empresarial, Gestão Financeira, Engenharia Comercial, Comércio Exterior, Banca e Finanças, Gestão de Recursos Humanos, Comunicações Integradas em Marketing, Administração de Empresas Ecoturísticas e de Hospitalidade, Ciências Econômicas e Financeiras, Administração e Ciências Políticas, Ciências Empresariais, Comércio Eletrônico, Empreendedorismo, Gestão de Organismos Públicos (Municípios, Ministérios, etc.), Gestão de Centros Educacionais."},{"id":4,"description":"Ingeniería en Sistemas Computacionales,  Geología, Ingeniería Civil, Arquitectura, Electrónica, Telemática, Telecomunicaciones, Ingeniería Mecatrónica  (Robótica), Imagen y Sonido,  Minas, Petróleo y Metalurgia,  Ingeniería Mecánica, Ingeniería Industrial, Física, Matemáticas Aplicadas, Ingeniería en Estadística, Ingeniería Automotriz, Biotecnología Ambiental, Ingeniería Geográfica, Carreras militares (marina, aviación, ejército), Ingeniería en Costas y Obras Portuarias, Estadística Informática, Programación y Desarrollo de Sistemas, Tecnología en Informática Educativa, Astronomía, Ingeniería en ciencias geográficas y desarrollo sustentable "},{"id":5,"description":"Biología, Bioquímica, Farmacia, Biología Marina, Bioanálisis, Biotecnología, Ciencias Ambientales,  Zootecnia, Veterinaria, Nutrición y Estética, Cosmetología,  Dietética y Estética, Medicina, Obstetricia, Urgencias Médicas, Odontología, Enfermería, Tecnología, Oceanografía y Ciencias Ambientales, Médica, Agronomía, Horticultura y Fruticultura, Ingeniería de Alimentos, Gastronomía, Chef, Cultura Física, Deportes y Rehabilitación, Gestión Ambiental, Ingeniería Ambiental, Optometría, Homeopatía, Reflexología."}],"labels":{"AllQuestionsNeedToBeAnswered":"Você deve responder a todas as perguntas, faltando:","Activity":"Atividade"}}')}},t={};!function n(i){var r=t[i];if(void 0!==r)return r.exports;var a=t[i]={exports:{}};return e[i].call(a.exports,a,a.exports,n),a.exports}(9)})();