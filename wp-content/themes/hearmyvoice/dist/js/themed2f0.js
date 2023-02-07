/*!
  * Bootstrap v4.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery")):"function"==typeof define&&define.amd?define(["exports","jquery"],e):e((t=t||self).bootstrap={},t.jQuery)}(this,function(t,p){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function l(o){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},e=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.forEach(function(t){var e,n,i;e=o,i=r[n=t],n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i})}return o}p=p&&p.hasOwnProperty("default")?p.default:p;var e="transitionend";function n(t){var e=this,n=!1;return p(this).one(m.TRANSITION_END,function(){n=!0}),setTimeout(function(){n||m.triggerTransitionEnd(e)},t),this}var m={TRANSITION_END:"bsTransitionEnd",getUID:function(t){for(;t+=~~(1e6*Math.random()),document.getElementById(t););return t},getSelectorFromElement:function(t){var e=t.getAttribute("data-target");if(!e||"#"===e){var n=t.getAttribute("href");e=n&&"#"!==n?n.trim():""}try{return document.querySelector(e)?e:null}catch(t){return null}},getTransitionDurationFromElement:function(t){if(!t)return 0;var e=p(t).css("transition-duration"),n=p(t).css("transition-delay"),i=parseFloat(e),o=parseFloat(n);return i||o?(e=e.split(",")[0],n=n.split(",")[0],1e3*(parseFloat(e)+parseFloat(n))):0},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(t){p(t).trigger(e)},supportsTransitionEnd:function(){return Boolean(e)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var o=n[i],r=e[i],s=r&&m.isElement(r)?"element":(a=r,{}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());if(!new RegExp(o).test(s))throw new Error(t.toUpperCase()+': Option "'+i+'" provided type "'+s+'" but expected type "'+o+'".')}var a},findShadowRoot:function(t){if(!document.documentElement.attachShadow)return null;if("function"!=typeof t.getRootNode)return t instanceof ShadowRoot?t:t.parentNode?m.findShadowRoot(t.parentNode):null;var e=t.getRootNode();return e instanceof ShadowRoot?e:null}};p.fn.emulateTransitionEnd=n,p.event.special[m.TRANSITION_END]={bindType:e,delegateType:e,handle:function(t){if(p(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}};var o="alert",r="bs.alert",a="."+r,c=p.fn[o],h={CLOSE:"close"+a,CLOSED:"closed"+a,CLICK_DATA_API:"click"+a+".data-api"},u="alert",f="fade",d="show",g=function(){function i(t){this._element=t}var t=i.prototype;return t.close=function(t){var e=this._element;t&&(e=this._getRootElement(t)),this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},t.dispose=function(){p.removeData(this._element,r),this._element=null},t._getRootElement=function(t){var e=m.getSelectorFromElement(t),n=!1;return e&&(n=document.querySelector(e)),n||(n=p(t).closest("."+u)[0]),n},t._triggerCloseEvent=function(t){var e=p.Event(h.CLOSE);return p(t).trigger(e),e},t._removeElement=function(e){var n=this;if(p(e).removeClass(d),p(e).hasClass(f)){var t=m.getTransitionDurationFromElement(e);p(e).one(m.TRANSITION_END,function(t){return n._destroyElement(e,t)}).emulateTransitionEnd(t)}else this._destroyElement(e)},t._destroyElement=function(t){p(t).detach().trigger(h.CLOSED).remove()},i._jQueryInterface=function(n){return this.each(function(){var t=p(this),e=t.data(r);e||(e=new i(this),t.data(r,e)),"close"===n&&e[n](this)})},i._handleDismiss=function(e){return function(t){t&&t.preventDefault(),e.close(this)}},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}}]),i}();p(document).on(h.CLICK_DATA_API,'[data-dismiss="alert"]',g._handleDismiss(new g)),p.fn[o]=g._jQueryInterface,p.fn[o].Constructor=g,p.fn[o].noConflict=function(){return p.fn[o]=c,g._jQueryInterface};var _="button",v="bs.button",y="."+v,E=".data-api",b=p.fn[_],w="active",C="btn",T="focus",S='[data-toggle^="button"]',D='[data-toggle="buttons"]',I='input:not([type="hidden"])',A=".active",O=".btn",N={CLICK_DATA_API:"click"+y+E,FOCUS_BLUR_DATA_API:"focus"+y+E+" blur"+y+E},k=function(){function n(t){this._element=t}var t=n.prototype;return t.toggle=function(){var t=!0,e=!0,n=p(this._element).closest(D)[0];if(n){var i=this._element.querySelector(I);if(i){if("radio"===i.type)if(i.checked&&this._element.classList.contains(w))t=!1;else{var o=n.querySelector(A);o&&p(o).removeClass(w)}if(t){if(i.hasAttribute("disabled")||n.hasAttribute("disabled")||i.classList.contains("disabled")||n.classList.contains("disabled"))return;i.checked=!this._element.classList.contains(w),p(i).trigger("change")}i.focus(),e=!1}}e&&this._element.setAttribute("aria-pressed",!this._element.classList.contains(w)),t&&p(this._element).toggleClass(w)},t.dispose=function(){p.removeData(this._element,v),this._element=null},n._jQueryInterface=function(e){return this.each(function(){var t=p(this).data(v);t||(t=new n(this),p(this).data(v,t)),"toggle"===e&&t[e]()})},s(n,null,[{key:"VERSION",get:function(){return"4.3.1"}}]),n}();p(document).on(N.CLICK_DATA_API,S,function(t){t.preventDefault();var e=t.target;p(e).hasClass(C)||(e=p(e).closest(O)),k._jQueryInterface.call(p(e),"toggle")}).on(N.FOCUS_BLUR_DATA_API,S,function(t){var e=p(t.target).closest(O)[0];p(e).toggleClass(T,/^focus(in)?$/.test(t.type))}),p.fn[_]=k._jQueryInterface,p.fn[_].Constructor=k,p.fn[_].noConflict=function(){return p.fn[_]=b,k._jQueryInterface};var L="carousel",x="bs.carousel",P="."+x,H=".data-api",j=p.fn[L],R={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},F={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},M="next",W="prev",U="left",B="right",q={SLIDE:"slide"+P,SLID:"slid"+P,KEYDOWN:"keydown"+P,MOUSEENTER:"mouseenter"+P,MOUSELEAVE:"mouseleave"+P,TOUCHSTART:"touchstart"+P,TOUCHMOVE:"touchmove"+P,TOUCHEND:"touchend"+P,POINTERDOWN:"pointerdown"+P,POINTERUP:"pointerup"+P,DRAG_START:"dragstart"+P,LOAD_DATA_API:"load"+P+H,CLICK_DATA_API:"click"+P+H},K="carousel",Q="active",V="slide",Y="carousel-item-right",z="carousel-item-left",X="carousel-item-next",G="carousel-item-prev",$="pointer-event",J=".active",Z=".active.carousel-item",tt=".carousel-item",et=".carousel-item img",nt=".carousel-item-next, .carousel-item-prev",it=".carousel-indicators",ot="[data-slide], [data-slide-to]",rt='[data-ride="carousel"]',st={TOUCH:"touch",PEN:"pen"},at=function(){function r(t,e){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(e),this._element=t,this._indicatorsElement=this._element.querySelector(it),this._touchSupported="ontouchstart"in document.documentElement||0<navigator.maxTouchPoints,this._pointerEvent=Boolean(window.PointerEvent||window.MSPointerEvent),this._addEventListeners()}var t=r.prototype;return t.next=function(){this._isSliding||this._slide(M)},t.nextWhenVisible=function(){!document.hidden&&p(this._element).is(":visible")&&"hidden"!==p(this._element).css("visibility")&&this.next()},t.prev=function(){this._isSliding||this._slide(W)},t.pause=function(t){t||(this._isPaused=!0),this._element.querySelector(nt)&&(m.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},t.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},t.to=function(t){var e=this;this._activeElement=this._element.querySelector(Z);var n=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0))if(this._isSliding)p(this._element).one(q.SLID,function(){return e.to(t)});else{if(n===t)return this.pause(),void this.cycle();var i=n<t?M:W;this._slide(i,this._items[t])}},t.dispose=function(){p(this._element).off(P),p.removeData(this._element,x),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},t._getConfig=function(t){return t=l({},R,t),m.typeCheckConfig(L,t,F),t},t._handleSwipe=function(){var t=Math.abs(this.touchDeltaX);if(!(t<=40)){var e=t/this.touchDeltaX;0<e&&this.prev(),e<0&&this.next()}},t._addEventListeners=function(){var e=this;this._config.keyboard&&p(this._element).on(q.KEYDOWN,function(t){return e._keydown(t)}),"hover"===this._config.pause&&p(this._element).on(q.MOUSEENTER,function(t){return e.pause(t)}).on(q.MOUSELEAVE,function(t){return e.cycle(t)}),this._config.touch&&this._addTouchEventListeners()},t._addTouchEventListeners=function(){var n=this;if(this._touchSupported){var e=function(t){n._pointerEvent&&st[t.originalEvent.pointerType.toUpperCase()]?n.touchStartX=t.originalEvent.clientX:n._pointerEvent||(n.touchStartX=t.originalEvent.touches[0].clientX)},i=function(t){n._pointerEvent&&st[t.originalEvent.pointerType.toUpperCase()]&&(n.touchDeltaX=t.originalEvent.clientX-n.touchStartX),n._handleSwipe(),"hover"===n._config.pause&&(n.pause(),n.touchTimeout&&clearTimeout(n.touchTimeout),n.touchTimeout=setTimeout(function(t){return n.cycle(t)},500+n._config.interval))};p(this._element.querySelectorAll(et)).on(q.DRAG_START,function(t){return t.preventDefault()}),this._pointerEvent?(p(this._element).on(q.POINTERDOWN,function(t){return e(t)}),p(this._element).on(q.POINTERUP,function(t){return i(t)}),this._element.classList.add($)):(p(this._element).on(q.TOUCHSTART,function(t){return e(t)}),p(this._element).on(q.TOUCHMOVE,function(t){var e;(e=t).originalEvent.touches&&1<e.originalEvent.touches.length?n.touchDeltaX=0:n.touchDeltaX=e.originalEvent.touches[0].clientX-n.touchStartX}),p(this._element).on(q.TOUCHEND,function(t){return i(t)}))}},t._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}},t._getItemIndex=function(t){return this._items=t&&t.parentNode?[].slice.call(t.parentNode.querySelectorAll(tt)):[],this._items.indexOf(t)},t._getItemByDirection=function(t,e){var n=t===M,i=t===W,o=this._getItemIndex(e),r=this._items.length-1;if((i&&0===o||n&&o===r)&&!this._config.wrap)return e;var s=(o+(t===W?-1:1))%this._items.length;return-1===s?this._items[this._items.length-1]:this._items[s]},t._triggerSlideEvent=function(t,e){var n=this._getItemIndex(t),i=this._getItemIndex(this._element.querySelector(Z)),o=p.Event(q.SLIDE,{relatedTarget:t,direction:e,from:i,to:n});return p(this._element).trigger(o),o},t._setActiveIndicatorElement=function(t){if(this._indicatorsElement){var e=[].slice.call(this._indicatorsElement.querySelectorAll(J));p(e).removeClass(Q);var n=this._indicatorsElement.children[this._getItemIndex(t)];n&&p(n).addClass(Q)}},t._slide=function(t,e){var n,i,o,r=this,s=this._element.querySelector(Z),a=this._getItemIndex(s),l=e||s&&this._getItemByDirection(t,s),c=this._getItemIndex(l),h=Boolean(this._interval);if(o=t===M?(n=z,i=X,U):(n=Y,i=G,B),l&&p(l).hasClass(Q))this._isSliding=!1;else if(!this._triggerSlideEvent(l,o).isDefaultPrevented()&&s&&l){this._isSliding=!0,h&&this.pause(),this._setActiveIndicatorElement(l);var u=p.Event(q.SLID,{relatedTarget:l,direction:o,from:a,to:c});if(p(this._element).hasClass(V)){p(l).addClass(i),m.reflow(l),p(s).addClass(n),p(l).addClass(n);var f=parseInt(l.getAttribute("data-interval"),10);this._config.interval=f?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,f):this._config.defaultInterval||this._config.interval;var d=m.getTransitionDurationFromElement(s);p(s).one(m.TRANSITION_END,function(){p(l).removeClass(n+" "+i).addClass(Q),p(s).removeClass(Q+" "+i+" "+n),r._isSliding=!1,setTimeout(function(){return p(r._element).trigger(u)},0)}).emulateTransitionEnd(d)}else p(s).removeClass(Q),p(l).addClass(Q),this._isSliding=!1,p(this._element).trigger(u);h&&this.cycle()}},r._jQueryInterface=function(i){return this.each(function(){var t=p(this).data(x),e=l({},R,p(this).data());"object"==typeof i&&(e=l({},e,i));var n="string"==typeof i?i:e.slide;if(t||(t=new r(this,e),p(this).data(x,t)),"number"==typeof i)t.to(i);else if("string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}else e.interval&&e.ride&&(t.pause(),t.cycle())})},r._dataApiClickHandler=function(t){var e=m.getSelectorFromElement(this);if(e){var n=p(e)[0];if(n&&p(n).hasClass(K)){var i=l({},p(n).data(),p(this).data()),o=this.getAttribute("data-slide-to");o&&(i.interval=!1),r._jQueryInterface.call(p(n),i),o&&p(n).data(x).to(o),t.preventDefault()}}},s(r,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return R}}]),r}();p(document).on(q.CLICK_DATA_API,ot,at._dataApiClickHandler),p(window).on(q.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(rt)),e=0,n=t.length;e<n;e++){var i=p(t[e]);at._jQueryInterface.call(i,i.data())}}),p.fn[L]=at._jQueryInterface,p.fn[L].Constructor=at,p.fn[L].noConflict=function(){return p.fn[L]=j,at._jQueryInterface};var lt="collapse",ct="bs.collapse",ht="."+ct,ut=p.fn[lt],ft={toggle:!0,parent:""},dt={toggle:"boolean",parent:"(string|element)"},pt={SHOW:"show"+ht,SHOWN:"shown"+ht,HIDE:"hide"+ht,HIDDEN:"hidden"+ht,CLICK_DATA_API:"click"+ht+".data-api"},mt="show",gt="collapse",_t="collapsing",vt="collapsed",yt="width",Et="height",bt=".show, .collapsing",wt='[data-toggle="collapse"]',Ct=function(){function a(e,t){this._isTransitioning=!1,this._element=e,this._config=this._getConfig(t),this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'));for(var n=[].slice.call(document.querySelectorAll(wt)),i=0,o=n.length;i<o;i++){var r=n[i],s=m.getSelectorFromElement(r),a=[].slice.call(document.querySelectorAll(s)).filter(function(t){return t===e});null!==s&&0<a.length&&(this._selector=s,this._triggerArray.push(r))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var t=a.prototype;return t.toggle=function(){p(this._element).hasClass(mt)?this.hide():this.show()},t.show=function(){var t,e,n=this;if(!this._isTransitioning&&!p(this._element).hasClass(mt)&&(this._parent&&0===(t=[].slice.call(this._parent.querySelectorAll(bt)).filter(function(t){return"string"==typeof n._config.parent?t.getAttribute("data-parent")===n._config.parent:t.classList.contains(gt)})).length&&(t=null),!(t&&(e=p(t).not(this._selector).data(ct))&&e._isTransitioning))){var i=p.Event(pt.SHOW);if(p(this._element).trigger(i),!i.isDefaultPrevented()){t&&(a._jQueryInterface.call(p(t).not(this._selector),"hide"),e||p(t).data(ct,null));var o=this._getDimension();p(this._element).removeClass(gt).addClass(_t),this._element.style[o]=0,this._triggerArray.length&&p(this._triggerArray).removeClass(vt).attr("aria-expanded",!0),this.setTransitioning(!0);var r="scroll"+(o[0].toUpperCase()+o.slice(1)),s=m.getTransitionDurationFromElement(this._element);p(this._element).one(m.TRANSITION_END,function(){p(n._element).removeClass(_t).addClass(gt).addClass(mt),n._element.style[o]="",n.setTransitioning(!1),p(n._element).trigger(pt.SHOWN)}).emulateTransitionEnd(s),this._element.style[o]=this._element[r]+"px"}}},t.hide=function(){var t=this;if(!this._isTransitioning&&p(this._element).hasClass(mt)){var e=p.Event(pt.HIDE);if(p(this._element).trigger(e),!e.isDefaultPrevented()){var n=this._getDimension();this._element.style[n]=this._element.getBoundingClientRect()[n]+"px",m.reflow(this._element),p(this._element).addClass(_t).removeClass(gt).removeClass(mt);var i=this._triggerArray.length;if(0<i)for(var o=0;o<i;o++){var r=this._triggerArray[o],s=m.getSelectorFromElement(r);if(null!==s)p([].slice.call(document.querySelectorAll(s))).hasClass(mt)||p(r).addClass(vt).attr("aria-expanded",!1)}this.setTransitioning(!0);this._element.style[n]="";var a=m.getTransitionDurationFromElement(this._element);p(this._element).one(m.TRANSITION_END,function(){t.setTransitioning(!1),p(t._element).removeClass(_t).addClass(gt).trigger(pt.HIDDEN)}).emulateTransitionEnd(a)}}},t.setTransitioning=function(t){this._isTransitioning=t},t.dispose=function(){p.removeData(this._element,ct),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},t._getConfig=function(t){return(t=l({},ft,t)).toggle=Boolean(t.toggle),m.typeCheckConfig(lt,t,dt),t},t._getDimension=function(){return p(this._element).hasClass(yt)?yt:Et},t._getParent=function(){var t,n=this;m.isElement(this._config.parent)?(t=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(t=this._config.parent[0])):t=document.querySelector(this._config.parent);var e='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',i=[].slice.call(t.querySelectorAll(e));return p(i).each(function(t,e){n._addAriaAndCollapsedClass(a._getTargetFromElement(e),[e])}),t},t._addAriaAndCollapsedClass=function(t,e){var n=p(t).hasClass(mt);e.length&&p(e).toggleClass(vt,!n).attr("aria-expanded",n)},a._getTargetFromElement=function(t){var e=m.getSelectorFromElement(t);return e?document.querySelector(e):null},a._jQueryInterface=function(i){return this.each(function(){var t=p(this),e=t.data(ct),n=l({},ft,t.data(),"object"==typeof i&&i?i:{});if(!e&&n.toggle&&/show|hide/.test(i)&&(n.toggle=!1),e||(e=new a(this,n),t.data(ct,e)),"string"==typeof i){if("undefined"==typeof e[i])throw new TypeError('No method named "'+i+'"');e[i]()}})},s(a,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return ft}}]),a}();p(document).on(pt.CLICK_DATA_API,wt,function(t){"A"===t.currentTarget.tagName&&t.preventDefault();var n=p(this),e=m.getSelectorFromElement(this),i=[].slice.call(document.querySelectorAll(e));p(i).each(function(){var t=p(this),e=t.data(ct)?"toggle":n.data();Ct._jQueryInterface.call(t,e)})}),p.fn[lt]=Ct._jQueryInterface,p.fn[lt].Constructor=Ct,p.fn[lt].noConflict=function(){return p.fn[lt]=ut,Ct._jQueryInterface};for(var Tt="undefined"!=typeof window&&"undefined"!=typeof document,St=["Edge","Trident","Firefox"],Dt=0,It=0;It<St.length;It+=1)if(Tt&&0<=navigator.userAgent.indexOf(St[It])){Dt=1;break}var At=Tt&&window.Promise?function(t){var e=!1;return function(){e||(e=!0,window.Promise.resolve().then(function(){e=!1,t()}))}}:function(t){var e=!1;return function(){e||(e=!0,setTimeout(function(){e=!1,t()},Dt))}};function Ot(t){return t&&"[object Function]"==={}.toString.call(t)}function Nt(t,e){if(1!==t.nodeType)return[];var n=t.ownerDocument.defaultView.getComputedStyle(t,null);return e?n[e]:n}function kt(t){return"HTML"===t.nodeName?t:t.parentNode||t.host}function Lt(t){if(!t)return document.body;switch(t.nodeName){case"HTML":case"BODY":return t.ownerDocument.body;case"#document":return t.body}var e=Nt(t),n=e.overflow,i=e.overflowX,o=e.overflowY;return/(auto|scroll|overlay)/.test(n+o+i)?t:Lt(kt(t))}var xt=Tt&&!(!window.MSInputMethodContext||!document.documentMode),Pt=Tt&&/MSIE 10/.test(navigator.userAgent);function Ht(t){return 11===t?xt:10===t?Pt:xt||Pt}function jt(t){if(!t)return document.documentElement;for(var e=Ht(10)?document.body:null,n=t.offsetParent||null;n===e&&t.nextElementSibling;)n=(t=t.nextElementSibling).offsetParent;var i=n&&n.nodeName;return i&&"BODY"!==i&&"HTML"!==i?-1!==["TH","TD","TABLE"].indexOf(n.nodeName)&&"static"===Nt(n,"position")?jt(n):n:t?t.ownerDocument.documentElement:document.documentElement}function Rt(t){return null!==t.parentNode?Rt(t.parentNode):t}function Ft(t,e){if(!(t&&t.nodeType&&e&&e.nodeType))return document.documentElement;var n=t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING,i=n?t:e,o=n?e:t,r=document.createRange();r.setStart(i,0),r.setEnd(o,0);var s,a,l=r.commonAncestorContainer;if(t!==l&&e!==l||i.contains(o))return"BODY"===(a=(s=l).nodeName)||"HTML"!==a&&jt(s.firstElementChild)!==s?jt(l):l;var c=Rt(t);return c.host?Ft(c.host,e):Ft(t,Rt(e).host)}function Mt(t){var e="top"===(1<arguments.length&&void 0!==arguments[1]?arguments[1]:"top")?"scrollTop":"scrollLeft",n=t.nodeName;if("BODY"!==n&&"HTML"!==n)return t[e];var i=t.ownerDocument.documentElement;return(t.ownerDocument.scrollingElement||i)[e]}function Wt(t,e){var n="x"===e?"Left":"Top",i="Left"===n?"Right":"Bottom";return parseFloat(t["border"+n+"Width"],10)+parseFloat(t["border"+i+"Width"],10)}function Ut(t,e,n,i){return Math.max(e["offset"+t],e["scroll"+t],n["client"+t],n["offset"+t],n["scroll"+t],Ht(10)?parseInt(n["offset"+t])+parseInt(i["margin"+("Height"===t?"Top":"Left")])+parseInt(i["margin"+("Height"===t?"Bottom":"Right")]):0)}function Bt(t){var e=t.body,n=t.documentElement,i=Ht(10)&&getComputedStyle(n);return{height:Ut("Height",e,n,i),width:Ut("Width",e,n,i)}}var qt=function(){function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}}(),Kt=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},Qt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t};function Vt(t){return Qt({},t,{right:t.left+t.width,bottom:t.top+t.height})}function Yt(t){var e={};try{if(Ht(10)){e=t.getBoundingClientRect();var n=Mt(t,"top"),i=Mt(t,"left");e.top+=n,e.left+=i,e.bottom+=n,e.right+=i}else e=t.getBoundingClientRect()}catch(t){}var o={left:e.left,top:e.top,width:e.right-e.left,height:e.bottom-e.top},r="HTML"===t.nodeName?Bt(t.ownerDocument):{},s=r.width||t.clientWidth||o.right-o.left,a=r.height||t.clientHeight||o.bottom-o.top,l=t.offsetWidth-s,c=t.offsetHeight-a;if(l||c){var h=Nt(t);l-=Wt(h,"x"),c-=Wt(h,"y"),o.width-=l,o.height-=c}return Vt(o)}function zt(t,e){var n=2<arguments.length&&void 0!==arguments[2]&&arguments[2],i=Ht(10),o="HTML"===e.nodeName,r=Yt(t),s=Yt(e),a=Lt(t),l=Nt(e),c=parseFloat(l.borderTopWidth,10),h=parseFloat(l.borderLeftWidth,10);n&&o&&(s.top=Math.max(s.top,0),s.left=Math.max(s.left,0));var u=Vt({top:r.top-s.top-c,left:r.left-s.left-h,width:r.width,height:r.height});if(u.marginTop=0,u.marginLeft=0,!i&&o){var f=parseFloat(l.marginTop,10),d=parseFloat(l.marginLeft,10);u.top-=c-f,u.bottom-=c-f,u.left-=h-d,u.right-=h-d,u.marginTop=f,u.marginLeft=d}return(i&&!n?e.contains(a):e===a&&"BODY"!==a.nodeName)&&(u=function(t,e){var n=2<arguments.length&&void 0!==arguments[2]&&arguments[2],i=Mt(e,"top"),o=Mt(e,"left"),r=n?-1:1;return t.top+=i*r,t.bottom+=i*r,t.left+=o*r,t.right+=o*r,t}(u,e)),u}function Xt(t){if(!t||!t.parentElement||Ht())return document.documentElement;for(var e=t.parentElement;e&&"none"===Nt(e,"transform");)e=e.parentElement;return e||document.documentElement}function Gt(t,e,n,i){var o=4<arguments.length&&void 0!==arguments[4]&&arguments[4],r={top:0,left:0},s=o?Xt(t):Ft(t,e);if("viewport"===i)r=function(t){var e=1<arguments.length&&void 0!==arguments[1]&&arguments[1],n=t.ownerDocument.documentElement,i=zt(t,n),o=Math.max(n.clientWidth,window.innerWidth||0),r=Math.max(n.clientHeight,window.innerHeight||0),s=e?0:Mt(n),a=e?0:Mt(n,"left");return Vt({top:s-i.top+i.marginTop,left:a-i.left+i.marginLeft,width:o,height:r})}(s,o);else{var a=void 0;"scrollParent"===i?"BODY"===(a=Lt(kt(e))).nodeName&&(a=t.ownerDocument.documentElement):a="window"===i?t.ownerDocument.documentElement:i;var l=zt(a,s,o);if("HTML"!==a.nodeName||function t(e){var n=e.nodeName;if("BODY"===n||"HTML"===n)return!1;if("fixed"===Nt(e,"position"))return!0;var i=kt(e);return!!i&&t(i)}(s))r=l;else{var c=Bt(t.ownerDocument),h=c.height,u=c.width;r.top+=l.top-l.marginTop,r.bottom=h+l.top,r.left+=l.left-l.marginLeft,r.right=u+l.left}}var f="number"==typeof(n=n||0);return r.left+=f?n:n.left||0,r.top+=f?n:n.top||0,r.right-=f?n:n.right||0,r.bottom-=f?n:n.bottom||0,r}function $t(t,e,i,n,o){var r=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===t.indexOf("auto"))return t;var s=Gt(i,n,r,o),a={top:{width:s.width,height:e.top-s.top},right:{width:s.right-e.right,height:s.height},bottom:{width:s.width,height:s.bottom-e.bottom},left:{width:e.left-s.left,height:s.height}},l=Object.keys(a).map(function(t){return Qt({key:t},a[t],{area:(e=a[t],e.width*e.height)});var e}).sort(function(t,e){return e.area-t.area}),c=l.filter(function(t){var e=t.width,n=t.height;return e>=i.clientWidth&&n>=i.clientHeight}),h=0<c.length?c[0].key:l[0].key,u=t.split("-")[1];return h+(u?"-"+u:"")}function Jt(t,e,n){var i=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return zt(n,i?Xt(e):Ft(e,n),i)}function Zt(t){var e=t.ownerDocument.defaultView.getComputedStyle(t),n=parseFloat(e.marginTop||0)+parseFloat(e.marginBottom||0),i=parseFloat(e.marginLeft||0)+parseFloat(e.marginRight||0);return{width:t.offsetWidth+i,height:t.offsetHeight+n}}function te(t){var e={left:"right",right:"left",bottom:"top",top:"bottom"};return t.replace(/left|right|bottom|top/g,function(t){return e[t]})}function ee(t,e,n){n=n.split("-")[0];var i=Zt(t),o={width:i.width,height:i.height},r=-1!==["right","left"].indexOf(n),s=r?"top":"left",a=r?"left":"top",l=r?"height":"width",c=r?"width":"height";return o[s]=e[s]+e[l]/2-i[l]/2,o[a]=n===a?e[a]-i[c]:e[te(a)],o}function ne(t,e){return Array.prototype.find?t.find(e):t.filter(e)[0]}function ie(t,n,e){return(void 0===e?t:t.slice(0,function(t,e,n){if(Array.prototype.findIndex)return t.findIndex(function(t){return t[e]===n});var i=ne(t,function(t){return t[e]===n});return t.indexOf(i)}(t,"name",e))).forEach(function(t){t.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var e=t.function||t.fn;t.enabled&&Ot(e)&&(n.offsets.popper=Vt(n.offsets.popper),n.offsets.reference=Vt(n.offsets.reference),n=e(n,t))}),n}function oe(t,n){return t.some(function(t){var e=t.name;return t.enabled&&e===n})}function re(t){for(var e=[!1,"ms","Webkit","Moz","O"],n=t.charAt(0).toUpperCase()+t.slice(1),i=0;i<e.length;i++){var o=e[i],r=o?""+o+n:t;if("undefined"!=typeof document.body.style[r])return r}return null}function se(t){var e=t.ownerDocument;return e?e.defaultView:window}function ae(t,e,n,i){n.updateBound=i,se(t).addEventListener("resize",n.updateBound,{passive:!0});var o=Lt(t);return function t(e,n,i,o){var r="BODY"===e.nodeName,s=r?e.ownerDocument.defaultView:e;s.addEventListener(n,i,{passive:!0}),r||t(Lt(s.parentNode),n,i,o),o.push(s)}(o,"scroll",n.updateBound,n.scrollParents),n.scrollElement=o,n.eventsEnabled=!0,n}function le(){var t,e;this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=(t=this.reference,e=this.state,se(t).removeEventListener("resize",e.updateBound),e.scrollParents.forEach(function(t){t.removeEventListener("scroll",e.updateBound)}),e.updateBound=null,e.scrollParents=[],e.scrollElement=null,e.eventsEnabled=!1,e))}function ce(t){return""!==t&&!isNaN(parseFloat(t))&&isFinite(t)}function he(n,i){Object.keys(i).forEach(function(t){var e="";-1!==["width","height","top","right","bottom","left"].indexOf(t)&&ce(i[t])&&(e="px"),n.style[t]=i[t]+e})}var ue=Tt&&/Firefox/i.test(navigator.userAgent);function fe(t,e,n){var i=ne(t,function(t){return t.name===e}),o=!!i&&t.some(function(t){return t.name===n&&t.enabled&&t.order<i.order});if(!o){var r="`"+e+"`",s="`"+n+"`";console.warn(s+" modifier is required by "+r+" modifier in order to work, be sure to include it before "+r+"!")}return o}var de=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],pe=de.slice(3);function me(t){var e=1<arguments.length&&void 0!==arguments[1]&&arguments[1],n=pe.indexOf(t),i=pe.slice(n+1).concat(pe.slice(0,n));return e?i.reverse():i}var ge="flip",_e="clockwise",ve="counterclockwise";function ye(t,o,r,e){var s=[0,0],a=-1!==["right","left"].indexOf(e),n=t.split(/(\+|\-)/).map(function(t){return t.trim()}),i=n.indexOf(ne(n,function(t){return-1!==t.search(/,|\s/)}));n[i]&&-1===n[i].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var l=/\s*,\s*|\s+/,c=-1!==i?[n.slice(0,i).concat([n[i].split(l)[0]]),[n[i].split(l)[1]].concat(n.slice(i+1))]:[n];return(c=c.map(function(t,e){var n=(1===e?!a:a)?"height":"width",i=!1;return t.reduce(function(t,e){return""===t[t.length-1]&&-1!==["+","-"].indexOf(e)?(t[t.length-1]=e,i=!0,t):i?(t[t.length-1]+=e,i=!1,t):t.concat(e)},[]).map(function(t){return function(t,e,n,i){var o=t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+o[1],s=o[2];if(!r)return t;if(0!==s.indexOf("%"))return"vh"!==s&&"vw"!==s?r:("vh"===s?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*r;var a=void 0;switch(s){case"%p":a=n;break;case"%":case"%r":default:a=i}return Vt(a)[e]/100*r}(t,n,o,r)})})).forEach(function(n,i){n.forEach(function(t,e){ce(t)&&(s[i]+=t*("-"===n[e-1]?-1:1))})}),s}var Ee={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(t){var e=t.placement,n=e.split("-")[0],i=e.split("-")[1];if(i){var o=t.offsets,r=o.reference,s=o.popper,a=-1!==["bottom","top"].indexOf(n),l=a?"left":"top",c=a?"width":"height",h={start:Kt({},l,r[l]),end:Kt({},l,r[l]+r[c]-s[c])};t.offsets.popper=Qt({},s,h[i])}return t}},offset:{order:200,enabled:!0,fn:function(t,e){var n=e.offset,i=t.placement,o=t.offsets,r=o.popper,s=o.reference,a=i.split("-")[0],l=void 0;return l=ce(+n)?[+n,0]:ye(n,r,s,a),"left"===a?(r.top+=l[0],r.left-=l[1]):"right"===a?(r.top+=l[0],r.left+=l[1]):"top"===a?(r.left+=l[0],r.top-=l[1]):"bottom"===a&&(r.left+=l[0],r.top+=l[1]),t.popper=r,t},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(t,i){var e=i.boundariesElement||jt(t.instance.popper);t.instance.reference===e&&(e=jt(e));var n=re("transform"),o=t.instance.popper.style,r=o.top,s=o.left,a=o[n];o.top="",o.left="",o[n]="";var l=Gt(t.instance.popper,t.instance.reference,i.padding,e,t.positionFixed);o.top=r,o.left=s,o[n]=a,i.boundaries=l;var c=i.priority,h=t.offsets.popper,u={primary:function(t){var e=h[t];return h[t]<l[t]&&!i.escapeWithReference&&(e=Math.max(h[t],l[t])),Kt({},t,e)},secondary:function(t){var e="right"===t?"left":"top",n=h[e];return h[t]>l[t]&&!i.escapeWithReference&&(n=Math.min(h[e],l[t]-("right"===t?h.width:h.height))),Kt({},e,n)}};return c.forEach(function(t){var e=-1!==["left","top"].indexOf(t)?"primary":"secondary";h=Qt({},h,u[e](t))}),t.offsets.popper=h,t},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(t){var e=t.offsets,n=e.popper,i=e.reference,o=t.placement.split("-")[0],r=Math.floor,s=-1!==["top","bottom"].indexOf(o),a=s?"right":"bottom",l=s?"left":"top",c=s?"width":"height";return n[a]<r(i[l])&&(t.offsets.popper[l]=r(i[l])-n[c]),n[l]>r(i[a])&&(t.offsets.popper[l]=r(i[a])),t}},arrow:{order:500,enabled:!0,fn:function(t,e){var n;if(!fe(t.instance.modifiers,"arrow","keepTogether"))return t;var i=e.element;if("string"==typeof i){if(!(i=t.instance.popper.querySelector(i)))return t}else if(!t.instance.popper.contains(i))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),t;var o=t.placement.split("-")[0],r=t.offsets,s=r.popper,a=r.reference,l=-1!==["left","right"].indexOf(o),c=l?"height":"width",h=l?"Top":"Left",u=h.toLowerCase(),f=l?"left":"top",d=l?"bottom":"right",p=Zt(i)[c];a[d]-p<s[u]&&(t.offsets.popper[u]-=s[u]-(a[d]-p)),a[u]+p>s[d]&&(t.offsets.popper[u]+=a[u]+p-s[d]),t.offsets.popper=Vt(t.offsets.popper);var m=a[u]+a[c]/2-p/2,g=Nt(t.instance.popper),_=parseFloat(g["margin"+h],10),v=parseFloat(g["border"+h+"Width"],10),y=m-t.offsets.popper[u]-_-v;return y=Math.max(Math.min(s[c]-p,y),0),t.arrowElement=i,t.offsets.arrow=(Kt(n={},u,Math.round(y)),Kt(n,f,""),n),t},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(p,m){if(oe(p.instance.modifiers,"inner"))return p;if(p.flipped&&p.placement===p.originalPlacement)return p;var g=Gt(p.instance.popper,p.instance.reference,m.padding,m.boundariesElement,p.positionFixed),_=p.placement.split("-")[0],v=te(_),y=p.placement.split("-")[1]||"",E=[];switch(m.behavior){case ge:E=[_,v];break;case _e:E=me(_);break;case ve:E=me(_,!0);break;default:E=m.behavior}return E.forEach(function(t,e){if(_!==t||E.length===e+1)return p;_=p.placement.split("-")[0],v=te(_);var n,i=p.offsets.popper,o=p.offsets.reference,r=Math.floor,s="left"===_&&r(i.right)>r(o.left)||"right"===_&&r(i.left)<r(o.right)||"top"===_&&r(i.bottom)>r(o.top)||"bottom"===_&&r(i.top)<r(o.bottom),a=r(i.left)<r(g.left),l=r(i.right)>r(g.right),c=r(i.top)<r(g.top),h=r(i.bottom)>r(g.bottom),u="left"===_&&a||"right"===_&&l||"top"===_&&c||"bottom"===_&&h,f=-1!==["top","bottom"].indexOf(_),d=!!m.flipVariations&&(f&&"start"===y&&a||f&&"end"===y&&l||!f&&"start"===y&&c||!f&&"end"===y&&h);(s||u||d)&&(p.flipped=!0,(s||u)&&(_=E[e+1]),d&&(y="end"===(n=y)?"start":"start"===n?"end":n),p.placement=_+(y?"-"+y:""),p.offsets.popper=Qt({},p.offsets.popper,ee(p.instance.popper,p.offsets.reference,p.placement)),p=ie(p.instance.modifiers,p,"flip"))}),p},behavior:"flip",padding:5,boundariesElement:"viewport"},inner:{order:700,enabled:!1,fn:function(t){var e=t.placement,n=e.split("-")[0],i=t.offsets,o=i.popper,r=i.reference,s=-1!==["left","right"].indexOf(n),a=-1===["top","left"].indexOf(n);return o[s?"left":"top"]=r[n]-(a?o[s?"width":"height"]:0),t.placement=te(e),t.offsets.popper=Vt(o),t}},hide:{order:800,enabled:!0,fn:function(t){if(!fe(t.instance.modifiers,"hide","preventOverflow"))return t;var e=t.offsets.reference,n=ne(t.instance.modifiers,function(t){return"preventOverflow"===t.name}).boundaries;if(e.bottom<n.top||e.left>n.right||e.top>n.bottom||e.right<n.left){if(!0===t.hide)return t;t.hide=!0,t.attributes["x-out-of-boundaries"]=""}else{if(!1===t.hide)return t;t.hide=!1,t.attributes["x-out-of-boundaries"]=!1}return t}},computeStyle:{order:850,enabled:!0,fn:function(t,e){var n=e.x,i=e.y,o=t.offsets.popper,r=ne(t.instance.modifiers,function(t){return"applyStyle"===t.name}).gpuAcceleration;void 0!==r&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var s,a,l,c,h,u,f,d,p,m,g,_,v,y,E=void 0!==r?r:e.gpuAcceleration,b=jt(t.instance.popper),w=Yt(b),C={position:o.position},T=(s=t,a=window.devicePixelRatio<2||!ue,l=s.offsets,c=l.popper,h=l.reference,u=Math.round,f=Math.floor,d=function(t){return t},p=u(h.width),m=u(c.width),g=-1!==["left","right"].indexOf(s.placement),_=-1!==s.placement.indexOf("-"),y=a?u:d,{left:(v=a?g||_||p%2==m%2?u:f:d)(p%2==1&&m%2==1&&!_&&a?c.left-1:c.left),top:y(c.top),bottom:y(c.bottom),right:v(c.right)}),S="bottom"===n?"top":"bottom",D="right"===i?"left":"right",I=re("transform"),A=void 0,O=void 0;if(O="bottom"===S?"HTML"===b.nodeName?-b.clientHeight+T.bottom:-w.height+T.bottom:T.top,A="right"===D?"HTML"===b.nodeName?-b.clientWidth+T.right:-w.width+T.right:T.left,E&&I)C[I]="translate3d("+A+"px, "+O+"px, 0)",C[S]=0,C[D]=0,C.willChange="transform";else{var N="bottom"===S?-1:1,k="right"===D?-1:1;C[S]=O*N,C[D]=A*k,C.willChange=S+", "+D}var L={"x-placement":t.placement};return t.attributes=Qt({},L,t.attributes),t.styles=Qt({},C,t.styles),t.arrowStyles=Qt({},t.offsets.arrow,t.arrowStyles),t},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(t){var e,n;return he(t.instance.popper,t.styles),e=t.instance.popper,n=t.attributes,Object.keys(n).forEach(function(t){!1!==n[t]?e.setAttribute(t,n[t]):e.removeAttribute(t)}),t.arrowElement&&Object.keys(t.arrowStyles).length&&he(t.arrowElement,t.arrowStyles),t},onLoad:function(t,e,n,i,o){var r=Jt(o,e,t,n.positionFixed),s=$t(n.placement,r,e,t,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding);return e.setAttribute("x-placement",s),he(e,{position:n.positionFixed?"fixed":"absolute"}),n},gpuAcceleration:void 0}}},be=function(){function r(t,e){var n=this,i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),this.scheduleUpdate=function(){return requestAnimationFrame(n.update)},this.update=At(this.update.bind(this)),this.options=Qt({},r.Defaults,i),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=t&&t.jquery?t[0]:t,this.popper=e&&e.jquery?e[0]:e,this.options.modifiers={},Object.keys(Qt({},r.Defaults.modifiers,i.modifiers)).forEach(function(t){n.options.modifiers[t]=Qt({},r.Defaults.modifiers[t]||{},i.modifiers?i.modifiers[t]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(t){return Qt({name:t},n.options.modifiers[t])}).sort(function(t,e){return t.order-e.order}),this.modifiers.forEach(function(t){t.enabled&&Ot(t.onLoad)&&t.onLoad(n.reference,n.popper,n.options,t,n.state)}),this.update();var o=this.options.eventsEnabled;o&&this.enableEventListeners(),this.state.eventsEnabled=o}return qt(r,[{key:"update",value:function(){return function(){if(!this.state.isDestroyed){var t={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};t.offsets.reference=Jt(this.state,this.popper,this.reference,this.options.positionFixed),t.placement=$t(this.options.placement,t.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),t.originalPlacement=t.placement,t.positionFixed=this.options.positionFixed,t.offsets.popper=ee(this.popper,t.offsets.reference,t.placement),t.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",t=ie(this.modifiers,t),this.state.isCreated?this.options.onUpdate(t):(this.state.isCreated=!0,this.options.onCreate(t))}}.call(this)}},{key:"destroy",value:function(){return function(){return this.state.isDestroyed=!0,oe(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[re("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}.call(this)}},{key:"enableEventListeners",value:function(){return function(){this.state.eventsEnabled||(this.state=ae(this.reference,this.options,this.state,this.scheduleUpdate))}.call(this)}},{key:"disableEventListeners",value:function(){return le.call(this)}}]),r}();be.Utils=("undefined"!=typeof window?window:global).PopperUtils,be.placements=de,be.Defaults=Ee;var we="dropdown",Ce="bs.dropdown",Te="."+Ce,Se=".data-api",De=p.fn[we],Ie=new RegExp("38|40|27"),Ae={HIDE:"hide"+Te,HIDDEN:"hidden"+Te,SHOW:"show"+Te,SHOWN:"shown"+Te,CLICK:"click"+Te,CLICK_DATA_API:"click"+Te+Se,KEYDOWN_DATA_API:"keydown"+Te+Se,KEYUP_DATA_API:"keyup"+Te+Se},Oe="disabled",Ne="show",ke="dropup",Le="dropright",xe="dropleft",Pe="dropdown-menu-right",He="position-static",je='[data-toggle="dropdown"]',Re=".dropdown form",Fe=".dropdown-menu",Me=".navbar-nav",We=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Ue="top-start",Be="top-end",qe="bottom-start",Ke="bottom-end",Qe="right-start",Ve="left-start",Ye={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic"},ze={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string"},Xe=function(){function c(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var t=c.prototype;return t.toggle=function(){if(!this._element.disabled&&!p(this._element).hasClass(Oe)){var t=c._getParentFromElement(this._element),e=p(this._menu).hasClass(Ne);if(c._clearMenus(),!e){var n={relatedTarget:this._element},i=p.Event(Ae.SHOW,n);if(p(t).trigger(i),!i.isDefaultPrevented()){if(!this._inNavbar){if("undefined"==typeof be)throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");var o=this._element;"parent"===this._config.reference?o=t:m.isElement(this._config.reference)&&(o=this._config.reference,"undefined"!=typeof this._config.reference.jquery&&(o=this._config.reference[0])),"scrollParent"!==this._config.boundary&&p(t).addClass(He),this._popper=new be(o,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===p(t).closest(Me).length&&p(document.body).children().on("mouseover",null,p.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),p(this._menu).toggleClass(Ne),p(t).toggleClass(Ne).trigger(p.Event(Ae.SHOWN,n))}}}},t.show=function(){if(!(this._element.disabled||p(this._element).hasClass(Oe)||p(this._menu).hasClass(Ne))){var t={relatedTarget:this._element},e=p.Event(Ae.SHOW,t),n=c._getParentFromElement(this._element);p(n).trigger(e),e.isDefaultPrevented()||(p(this._menu).toggleClass(Ne),p(n).toggleClass(Ne).trigger(p.Event(Ae.SHOWN,t)))}},t.hide=function(){if(!this._element.disabled&&!p(this._element).hasClass(Oe)&&p(this._menu).hasClass(Ne)){var t={relatedTarget:this._element},e=p.Event(Ae.HIDE,t),n=c._getParentFromElement(this._element);p(n).trigger(e),e.isDefaultPrevented()||(p(this._menu).toggleClass(Ne),p(n).toggleClass(Ne).trigger(p.Event(Ae.HIDDEN,t)))}},t.dispose=function(){p.removeData(this._element,Ce),p(this._element).off(Te),this._element=null,(this._menu=null)!==this._popper&&(this._popper.destroy(),this._popper=null)},t.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},t._addEventListeners=function(){var e=this;p(this._element).on(Ae.CLICK,function(t){t.preventDefault(),t.stopPropagation(),e.toggle()})},t._getConfig=function(t){return t=l({},this.constructor.Default,p(this._element).data(),t),m.typeCheckConfig(we,t,this.constructor.DefaultType),t},t._getMenuElement=function(){if(!this._menu){var t=c._getParentFromElement(this._element);t&&(this._menu=t.querySelector(Fe))}return this._menu},t._getPlacement=function(){var t=p(this._element.parentNode),e=qe;return t.hasClass(ke)?(e=Ue,p(this._menu).hasClass(Pe)&&(e=Be)):t.hasClass(Le)?e=Qe:t.hasClass(xe)?e=Ve:p(this._menu).hasClass(Pe)&&(e=Ke),e},t._detectNavbar=function(){return 0<p(this._element).closest(".navbar").length},t._getOffset=function(){var e=this,t={};return"function"==typeof this._config.offset?t.fn=function(t){return t.offsets=l({},t.offsets,e._config.offset(t.offsets,e._element)||{}),t}:t.offset=this._config.offset,t},t._getPopperConfig=function(){var t={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(t.modifiers.applyStyle={enabled:!1}),t},c._jQueryInterface=function(e){return this.each(function(){var t=p(this).data(Ce);if(t||(t=new c(this,"object"==typeof e?e:null),p(this).data(Ce,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},c._clearMenus=function(t){if(!t||3!==t.which&&("keyup"!==t.type||9===t.which))for(var e=[].slice.call(document.querySelectorAll(je)),n=0,i=e.length;n<i;n++){var o=c._getParentFromElement(e[n]),r=p(e[n]).data(Ce),s={relatedTarget:e[n]};if(t&&"click"===t.type&&(s.clickEvent=t),r){var a=r._menu;if(p(o).hasClass(Ne)&&!(t&&("click"===t.type&&/input|textarea/i.test(t.target.tagName)||"keyup"===t.type&&9===t.which)&&p.contains(o,t.target))){var l=p.Event(Ae.HIDE,s);p(o).trigger(l),l.isDefaultPrevented()||("ontouchstart"in document.documentElement&&p(document.body).children().off("mouseover",null,p.noop),e[n].setAttribute("aria-expanded","false"),p(a).removeClass(Ne),p(o).removeClass(Ne).trigger(p.Event(Ae.HIDDEN,s)))}}}},c._getParentFromElement=function(t){var e,n=m.getSelectorFromElement(t);return n&&(e=document.querySelector(n)),e||t.parentNode},c._dataApiKeydownHandler=function(t){if((/input|textarea/i.test(t.target.tagName)?!(32===t.which||27!==t.which&&(40!==t.which&&38!==t.which||p(t.target).closest(Fe).length)):Ie.test(t.which))&&(t.preventDefault(),t.stopPropagation(),!this.disabled&&!p(this).hasClass(Oe))){var e=c._getParentFromElement(this),n=p(e).hasClass(Ne);if(n&&(!n||27!==t.which&&32!==t.which)){var i=[].slice.call(e.querySelectorAll(We));if(0!==i.length){var o=i.indexOf(t.target);38===t.which&&0<o&&o--,40===t.which&&o<i.length-1&&o++,o<0&&(o=0),i[o].focus()}}else{if(27===t.which){var r=e.querySelector(je);p(r).trigger("focus")}p(this).trigger("click")}}},s(c,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return Ye}},{key:"DefaultType",get:function(){return ze}}]),c}();p(document).on(Ae.KEYDOWN_DATA_API,je,Xe._dataApiKeydownHandler).on(Ae.KEYDOWN_DATA_API,Fe,Xe._dataApiKeydownHandler).on(Ae.CLICK_DATA_API+" "+Ae.KEYUP_DATA_API,Xe._clearMenus).on(Ae.CLICK_DATA_API,je,function(t){t.preventDefault(),t.stopPropagation(),Xe._jQueryInterface.call(p(this),"toggle")}).on(Ae.CLICK_DATA_API,Re,function(t){t.stopPropagation()}),p.fn[we]=Xe._jQueryInterface,p.fn[we].Constructor=Xe,p.fn[we].noConflict=function(){return p.fn[we]=De,Xe._jQueryInterface};var Ge="modal",$e="bs.modal",Je="."+$e,Ze=p.fn[Ge],tn={backdrop:!0,keyboard:!0,focus:!0,show:!0},en={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},nn={HIDE:"hide"+Je,HIDDEN:"hidden"+Je,SHOW:"show"+Je,SHOWN:"shown"+Je,FOCUSIN:"focusin"+Je,RESIZE:"resize"+Je,CLICK_DISMISS:"click.dismiss"+Je,KEYDOWN_DISMISS:"keydown.dismiss"+Je,MOUSEUP_DISMISS:"mouseup.dismiss"+Je,MOUSEDOWN_DISMISS:"mousedown.dismiss"+Je,CLICK_DATA_API:"click"+Je+".data-api"},on="modal-dialog-scrollable",rn="modal-scrollbar-measure",sn="modal-backdrop",an="modal-open",ln="fade",cn="show",hn=".modal-dialog",un=".modal-body",fn='[data-toggle="modal"]',dn='[data-dismiss="modal"]',pn=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",mn=".sticky-top",gn=function(){function o(t,e){this._config=this._getConfig(e),this._element=t,this._dialog=t.querySelector(hn),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0}var t=o.prototype;return t.toggle=function(t){return this._isShown?this.hide():this.show(t)},t.show=function(t){var e=this;if(!this._isShown&&!this._isTransitioning){p(this._element).hasClass(ln)&&(this._isTransitioning=!0);var n=p.Event(nn.SHOW,{relatedTarget:t});p(this._element).trigger(n),this._isShown||n.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),p(this._element).on(nn.CLICK_DISMISS,dn,function(t){return e.hide(t)}),p(this._dialog).on(nn.MOUSEDOWN_DISMISS,function(){p(e._element).one(nn.MOUSEUP_DISMISS,function(t){p(t.target).is(e._element)&&(e._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return e._showElement(t)}))}},t.hide=function(t){var e=this;if(t&&t.preventDefault(),this._isShown&&!this._isTransitioning){var n=p.Event(nn.HIDE);if(p(this._element).trigger(n),this._isShown&&!n.isDefaultPrevented()){this._isShown=!1;var i=p(this._element).hasClass(ln);if(i&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),p(document).off(nn.FOCUSIN),p(this._element).removeClass(cn),p(this._element).off(nn.CLICK_DISMISS),p(this._dialog).off(nn.MOUSEDOWN_DISMISS),i){var o=m.getTransitionDurationFromElement(this._element);p(this._element).one(m.TRANSITION_END,function(t){return e._hideModal(t)}).emulateTransitionEnd(o)}else this._hideModal()}}},t.dispose=function(){[window,this._element,this._dialog].forEach(function(t){return p(t).off(Je)}),p(document).off(nn.FOCUSIN),p.removeData(this._element,$e),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null},t.handleUpdate=function(){this._adjustDialog()},t._getConfig=function(t){return t=l({},tn,t),m.typeCheckConfig(Ge,t,en),t},t._showElement=function(t){var e=this,n=p(this._element).hasClass(ln);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),p(this._dialog).hasClass(on)?this._dialog.querySelector(un).scrollTop=0:this._element.scrollTop=0,n&&m.reflow(this._element),p(this._element).addClass(cn),this._config.focus&&this._enforceFocus();var i=p.Event(nn.SHOWN,{relatedTarget:t}),o=function(){e._config.focus&&e._element.focus(),e._isTransitioning=!1,p(e._element).trigger(i)};if(n){var r=m.getTransitionDurationFromElement(this._dialog);p(this._dialog).one(m.TRANSITION_END,o).emulateTransitionEnd(r)}else o()},t._enforceFocus=function(){var e=this;p(document).off(nn.FOCUSIN).on(nn.FOCUSIN,function(t){document!==t.target&&e._element!==t.target&&0===p(e._element).has(t.target).length&&e._element.focus()})},t._setEscapeEvent=function(){var e=this;this._isShown&&this._config.keyboard?p(this._element).on(nn.KEYDOWN_DISMISS,function(t){27===t.which&&(t.preventDefault(),e.hide())}):this._isShown||p(this._element).off(nn.KEYDOWN_DISMISS)},t._setResizeEvent=function(){var e=this;this._isShown?p(window).on(nn.RESIZE,function(t){return e.handleUpdate(t)}):p(window).off(nn.RESIZE)},t._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._isTransitioning=!1,this._showBackdrop(function(){p(document.body).removeClass(an),t._resetAdjustments(),t._resetScrollbar(),p(t._element).trigger(nn.HIDDEN)})},t._removeBackdrop=function(){this._backdrop&&(p(this._backdrop).remove(),this._backdrop=null)},t._showBackdrop=function(t){var e=this,n=p(this._element).hasClass(ln)?ln:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className=sn,n&&this._backdrop.classList.add(n),p(this._backdrop).appendTo(document.body),p(this._element).on(nn.CLICK_DISMISS,function(t){e._ignoreBackdropClick?e._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===e._config.backdrop?e._element.focus():e.hide())}),n&&m.reflow(this._backdrop),p(this._backdrop).addClass(cn),!t)return;if(!n)return void t();var i=m.getTransitionDurationFromElement(this._backdrop);p(this._backdrop).one(m.TRANSITION_END,t).emulateTransitionEnd(i)}else if(!this._isShown&&this._backdrop){p(this._backdrop).removeClass(cn);var o=function(){e._removeBackdrop(),t&&t()};if(p(this._element).hasClass(ln)){var r=m.getTransitionDurationFromElement(this._backdrop);p(this._backdrop).one(m.TRANSITION_END,o).emulateTransitionEnd(r)}else o()}else t&&t()},t._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},t._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},t._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=t.left+t.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},t._setScrollbar=function(){var o=this;if(this._isBodyOverflowing){var t=[].slice.call(document.querySelectorAll(pn)),e=[].slice.call(document.querySelectorAll(mn));p(t).each(function(t,e){var n=e.style.paddingRight,i=p(e).css("padding-right");p(e).data("padding-right",n).css("padding-right",parseFloat(i)+o._scrollbarWidth+"px")}),p(e).each(function(t,e){var n=e.style.marginRight,i=p(e).css("margin-right");p(e).data("margin-right",n).css("margin-right",parseFloat(i)-o._scrollbarWidth+"px")});var n=document.body.style.paddingRight,i=p(document.body).css("padding-right");p(document.body).data("padding-right",n).css("padding-right",parseFloat(i)+this._scrollbarWidth+"px")}p(document.body).addClass(an)},t._resetScrollbar=function(){var t=[].slice.call(document.querySelectorAll(pn));p(t).each(function(t,e){var n=p(e).data("padding-right");p(e).removeData("padding-right"),e.style.paddingRight=n||""});var e=[].slice.call(document.querySelectorAll(""+mn));p(e).each(function(t,e){var n=p(e).data("margin-right");"undefined"!=typeof n&&p(e).css("margin-right",n).removeData("margin-right")});var n=p(document.body).data("padding-right");p(document.body).removeData("padding-right"),document.body.style.paddingRight=n||""},t._getScrollbarWidth=function(){var t=document.createElement("div");t.className=rn,document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},o._jQueryInterface=function(n,i){return this.each(function(){var t=p(this).data($e),e=l({},tn,p(this).data(),"object"==typeof n&&n?n:{});if(t||(t=new o(this,e),p(this).data($e,t)),"string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n](i)}else e.show&&t.show(i)})},s(o,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return tn}}]),o}();p(document).on(nn.CLICK_DATA_API,fn,function(t){var e,n=this,i=m.getSelectorFromElement(this);i&&(e=document.querySelector(i));var o=p(e).data($e)?"toggle":l({},p(e).data(),p(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var r=p(e).one(nn.SHOW,function(t){t.isDefaultPrevented()||r.one(nn.HIDDEN,function(){p(n).is(":visible")&&n.focus()})});gn._jQueryInterface.call(p(e),o,this)}),p.fn[Ge]=gn._jQueryInterface,p.fn[Ge].Constructor=gn,p.fn[Ge].noConflict=function(){return p.fn[Ge]=Ze,gn._jQueryInterface};var _n=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],vn={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},yn=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,En=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;function bn(t,s,e){if(0===t.length)return t;if(e&&"function"==typeof e)return e(t);for(var n=(new window.DOMParser).parseFromString(t,"text/html"),a=Object.keys(s),l=[].slice.call(n.body.querySelectorAll("*")),i=function(t,e){var n=l[t],i=n.nodeName.toLowerCase();if(-1===a.indexOf(n.nodeName.toLowerCase()))return n.parentNode.removeChild(n),"continue";var o=[].slice.call(n.attributes),r=[].concat(s["*"]||[],s[i]||[]);o.forEach(function(t){(function(t,e){var n=t.nodeName.toLowerCase();if(-1!==e.indexOf(n))return-1===_n.indexOf(n)||Boolean(t.nodeValue.match(yn)||t.nodeValue.match(En));for(var i=e.filter(function(t){return t instanceof RegExp}),o=0,r=i.length;o<r;o++)if(n.match(i[o]))return!0;return!1})(t,r)||n.removeAttribute(t.nodeName)})},o=0,r=l.length;o<r;o++)i(o);return n.body.innerHTML}var wn="tooltip",Cn="bs.tooltip",Tn="."+Cn,Sn=p.fn[wn],Dn="bs-tooltip",In=new RegExp("(^|\\s)"+Dn+"\\S+","g"),An=["sanitize","whiteList","sanitizeFn"],On={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string|function)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)",sanitize:"boolean",sanitizeFn:"(null|function)",whiteList:"object"},Nn={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},kn={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent",sanitize:!0,sanitizeFn:null,whiteList:vn},Ln="show",xn="out",Pn={HIDE:"hide"+Tn,HIDDEN:"hidden"+Tn,SHOW:"show"+Tn,SHOWN:"shown"+Tn,INSERTED:"inserted"+Tn,CLICK:"click"+Tn,FOCUSIN:"focusin"+Tn,FOCUSOUT:"focusout"+Tn,MOUSEENTER:"mouseenter"+Tn,MOUSELEAVE:"mouseleave"+Tn},Hn="fade",jn="show",Rn=".tooltip-inner",Fn=".arrow",Mn="hover",Wn="focus",Un="click",Bn="manual",qn=function(){function i(t,e){if("undefined"==typeof be)throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var t=i.prototype;return t.enable=function(){this._isEnabled=!0},t.disable=function(){this._isEnabled=!1},t.toggleEnabled=function(){this._isEnabled=!this._isEnabled},t.toggle=function(t){if(this._isEnabled)if(t){var e=this.constructor.DATA_KEY,n=p(t.currentTarget).data(e);n||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),p(t.currentTarget).data(e,n)),n._activeTrigger.click=!n._activeTrigger.click,n._isWithActiveTrigger()?n._enter(null,n):n._leave(null,n)}else{if(p(this.getTipElement()).hasClass(jn))return void this._leave(null,this);this._enter(null,this)}},t.dispose=function(){clearTimeout(this._timeout),p.removeData(this.element,this.constructor.DATA_KEY),p(this.element).off(this.constructor.EVENT_KEY),p(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&p(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,(this._activeTrigger=null)!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},t.show=function(){var e=this;if("none"===p(this.element).css("display"))throw new Error("Please use show on visible elements");var t=p.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){p(this.element).trigger(t);var n=m.findShadowRoot(this.element),i=p.contains(null!==n?n:this.element.ownerDocument.documentElement,this.element);if(t.isDefaultPrevented()||!i)return;var o=this.getTipElement(),r=m.getUID(this.constructor.NAME);o.setAttribute("id",r),this.element.setAttribute("aria-describedby",r),this.setContent(),this.config.animation&&p(o).addClass(Hn);var s="function"==typeof this.config.placement?this.config.placement.call(this,o,this.element):this.config.placement,a=this._getAttachment(s);this.addAttachmentClass(a);var l=this._getContainer();p(o).data(this.constructor.DATA_KEY,this),p.contains(this.element.ownerDocument.documentElement,this.tip)||p(o).appendTo(l),p(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new be(this.element,o,{placement:a,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement},arrow:{element:Fn},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){return e._handlePopperPlacementChange(t)}}),p(o).addClass(jn),"ontouchstart"in document.documentElement&&p(document.body).children().on("mouseover",null,p.noop);var c=function(){e.config.animation&&e._fixTransition();var t=e._hoverState;e._hoverState=null,p(e.element).trigger(e.constructor.Event.SHOWN),t===xn&&e._leave(null,e)};if(p(this.tip).hasClass(Hn)){var h=m.getTransitionDurationFromElement(this.tip);p(this.tip).one(m.TRANSITION_END,c).emulateTransitionEnd(h)}else c()}},t.hide=function(t){var e=this,n=this.getTipElement(),i=p.Event(this.constructor.Event.HIDE),o=function(){e._hoverState!==Ln&&n.parentNode&&n.parentNode.removeChild(n),e._cleanTipClass(),e.element.removeAttribute("aria-describedby"),p(e.element).trigger(e.constructor.Event.HIDDEN),null!==e._popper&&e._popper.destroy(),t&&t()};if(p(this.element).trigger(i),!i.isDefaultPrevented()){if(p(n).removeClass(jn),"ontouchstart"in document.documentElement&&p(document.body).children().off("mouseover",null,p.noop),this._activeTrigger[Un]=!1,this._activeTrigger[Wn]=!1,this._activeTrigger[Mn]=!1,p(this.tip).hasClass(Hn)){var r=m.getTransitionDurationFromElement(n);p(n).one(m.TRANSITION_END,o).emulateTransitionEnd(r)}else o();this._hoverState=""}},t.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},t.isWithContent=function(){return Boolean(this.getTitle())},t.addAttachmentClass=function(t){p(this.getTipElement()).addClass(Dn+"-"+t)},t.getTipElement=function(){return this.tip=this.tip||p(this.config.template)[0],this.tip},t.setContent=function(){var t=this.getTipElement();this.setElementContent(p(t.querySelectorAll(Rn)),this.getTitle()),p(t).removeClass(Hn+" "+jn)},t.setElementContent=function(t,e){"object"!=typeof e||!e.nodeType&&!e.jquery?this.config.html?(this.config.sanitize&&(e=bn(e,this.config.whiteList,this.config.sanitizeFn)),t.html(e)):t.text(e):this.config.html?p(e).parent().is(t)||t.empty().append(e):t.text(p(e).text())},t.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},t._getOffset=function(){var e=this,t={};return"function"==typeof this.config.offset?t.fn=function(t){return t.offsets=l({},t.offsets,e.config.offset(t.offsets,e.element)||{}),t}:t.offset=this.config.offset,t},t._getContainer=function(){return!1===this.config.container?document.body:m.isElement(this.config.container)?p(this.config.container):p(document).find(this.config.container)},t._getAttachment=function(t){return Nn[t.toUpperCase()]},t._setListeners=function(){var i=this;this.config.trigger.split(" ").forEach(function(t){if("click"===t)p(i.element).on(i.constructor.Event.CLICK,i.config.selector,function(t){return i.toggle(t)});else if(t!==Bn){var e=t===Mn?i.constructor.Event.MOUSEENTER:i.constructor.Event.FOCUSIN,n=t===Mn?i.constructor.Event.MOUSELEAVE:i.constructor.Event.FOCUSOUT;p(i.element).on(e,i.config.selector,function(t){return i._enter(t)}).on(n,i.config.selector,function(t){return i._leave(t)})}}),p(this.element).closest(".modal").on("hide.bs.modal",function(){i.element&&i.hide()}),this.config.selector?this.config=l({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},t._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},t._enter=function(t,e){var n=this.constructor.DATA_KEY;(e=e||p(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),p(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusin"===t.type?Wn:Mn]=!0),p(e.getTipElement()).hasClass(jn)||e._hoverState===Ln?e._hoverState=Ln:(clearTimeout(e._timeout),e._hoverState=Ln,e.config.delay&&e.config.delay.show?e._timeout=setTimeout(function(){e._hoverState===Ln&&e.show()},e.config.delay.show):e.show())},t._leave=function(t,e){var n=this.constructor.DATA_KEY;(e=e||p(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),p(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusout"===t.type?Wn:Mn]=!1),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState=xn,e.config.delay&&e.config.delay.hide?e._timeout=setTimeout(function(){e._hoverState===xn&&e.hide()},e.config.delay.hide):e.hide())},t._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},t._getConfig=function(t){var e=p(this.element).data();return Object.keys(e).forEach(function(t){-1!==An.indexOf(t)&&delete e[t]}),"number"==typeof(t=l({},this.constructor.Default,e,"object"==typeof t&&t?t:{})).delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),m.typeCheckConfig(wn,t,this.constructor.DefaultType),t.sanitize&&(t.template=bn(t.template,t.whiteList,t.sanitizeFn)),t},t._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},t._cleanTipClass=function(){var t=p(this.getTipElement()),e=t.attr("class").match(In);null!==e&&e.length&&t.removeClass(e.join(""))},t._handlePopperPlacementChange=function(t){var e=t.instance;this.tip=e.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},t._fixTransition=function(){var t=this.getTipElement(),e=this.config.animation;null===t.getAttribute("x-placement")&&(p(t).removeClass(Hn),this.config.animation=!1,this.hide(),this.show(),this.config.animation=e)},i._jQueryInterface=function(n){return this.each(function(){var t=p(this).data(Cn),e="object"==typeof n&&n;if((t||!/dispose|hide/.test(n))&&(t||(t=new i(this,e),p(this).data(Cn,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return kn}},{key:"NAME",get:function(){return wn}},{key:"DATA_KEY",get:function(){return Cn}},{key:"Event",get:function(){return Pn}},{key:"EVENT_KEY",get:function(){return Tn}},{key:"DefaultType",get:function(){return On}}]),i}();p.fn[wn]=qn._jQueryInterface,p.fn[wn].Constructor=qn,p.fn[wn].noConflict=function(){return p.fn[wn]=Sn,qn._jQueryInterface};var Kn="popover",Qn="bs.popover",Vn="."+Qn,Yn=p.fn[Kn],zn="bs-popover",Xn=new RegExp("(^|\\s)"+zn+"\\S+","g"),Gn=l({},qn.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),$n=l({},qn.DefaultType,{content:"(string|element|function)"}),Jn="fade",Zn="show",ti=".popover-header",ei=".popover-body",ni={HIDE:"hide"+Vn,HIDDEN:"hidden"+Vn,SHOW:"show"+Vn,SHOWN:"shown"+Vn,INSERTED:"inserted"+Vn,CLICK:"click"+Vn,FOCUSIN:"focusin"+Vn,FOCUSOUT:"focusout"+Vn,MOUSEENTER:"mouseenter"+Vn,MOUSELEAVE:"mouseleave"+Vn},ii=function(t){var e,n;function i(){return t.apply(this,arguments)||this}n=t,(e=i).prototype=Object.create(n.prototype),(e.prototype.constructor=e).__proto__=n;var o=i.prototype;return o.isWithContent=function(){return this.getTitle()||this._getContent()},o.addAttachmentClass=function(t){p(this.getTipElement()).addClass(zn+"-"+t)},o.getTipElement=function(){return this.tip=this.tip||p(this.config.template)[0],this.tip},o.setContent=function(){var t=p(this.getTipElement());this.setElementContent(t.find(ti),this.getTitle());var e=this._getContent();"function"==typeof e&&(e=e.call(this.element)),this.setElementContent(t.find(ei),e),t.removeClass(Jn+" "+Zn)},o._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},o._cleanTipClass=function(){var t=p(this.getTipElement()),e=t.attr("class").match(Xn);null!==e&&0<e.length&&t.removeClass(e.join(""))},i._jQueryInterface=function(n){return this.each(function(){var t=p(this).data(Qn),e="object"==typeof n?n:null;if((t||!/dispose|hide/.test(n))&&(t||(t=new i(this,e),p(this).data(Qn,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return Gn}},{key:"NAME",get:function(){return Kn}},{key:"DATA_KEY",get:function(){return Qn}},{key:"Event",get:function(){return ni}},{key:"EVENT_KEY",get:function(){return Vn}},{key:"DefaultType",get:function(){return $n}}]),i}(qn);p.fn[Kn]=ii._jQueryInterface,p.fn[Kn].Constructor=ii,p.fn[Kn].noConflict=function(){return p.fn[Kn]=Yn,ii._jQueryInterface};var oi="scrollspy",ri="bs.scrollspy",si="."+ri,ai=p.fn[oi],li={offset:10,method:"auto",target:""},ci={offset:"number",method:"string",target:"(string|element)"},hi={ACTIVATE:"activate"+si,SCROLL:"scroll"+si,LOAD_DATA_API:"load"+si+".data-api"},ui="dropdown-item",fi="active",di='[data-spy="scroll"]',pi=".nav, .list-group",mi=".nav-link",gi=".nav-item",_i=".list-group-item",vi=".dropdown",yi=".dropdown-item",Ei=".dropdown-toggle",bi="offset",wi="position",Ci=function(){function n(t,e){var n=this;this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(e),this._selector=this._config.target+" "+mi+","+this._config.target+" "+_i+","+this._config.target+" "+yi,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,p(this._scrollElement).on(hi.SCROLL,function(t){return n._process(t)}),this.refresh(),this._process()}var t=n.prototype;return t.refresh=function(){var e=this,t=this._scrollElement===this._scrollElement.window?bi:wi,o="auto"===this._config.method?t:this._config.method,r=o===wi?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),[].slice.call(document.querySelectorAll(this._selector)).map(function(t){var e,n=m.getSelectorFromElement(t);if(n&&(e=document.querySelector(n)),e){var i=e.getBoundingClientRect();if(i.width||i.height)return[p(e)[o]().top+r,n]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(t){e._offsets.push(t[0]),e._targets.push(t[1])})},t.dispose=function(){p.removeData(this._element,ri),p(this._scrollElement).off(si),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},t._getConfig=function(t){if("string"!=typeof(t=l({},li,"object"==typeof t&&t?t:{})).target){var e=p(t.target).attr("id");e||(e=m.getUID(oi),p(t.target).attr("id",e)),t.target="#"+e}return m.typeCheckConfig(oi,t,ci),t},t._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},t._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},t._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},t._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),n<=t){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&0<this._offsets[0])return this._activeTarget=null,void this._clear();for(var o=this._offsets.length;o--;){this._activeTarget!==this._targets[o]&&t>=this._offsets[o]&&("undefined"==typeof this._offsets[o+1]||t<this._offsets[o+1])&&this._activate(this._targets[o])}}},t._activate=function(e){this._activeTarget=e,this._clear();var t=this._selector.split(",").map(function(t){return t+'[data-target="'+e+'"],'+t+'[href="'+e+'"]'}),n=p([].slice.call(document.querySelectorAll(t.join(","))));n.hasClass(ui)?(n.closest(vi).find(Ei).addClass(fi),n.addClass(fi)):(n.addClass(fi),n.parents(pi).prev(mi+", "+_i).addClass(fi),n.parents(pi).prev(gi).children(mi).addClass(fi)),p(this._scrollElement).trigger(hi.ACTIVATE,{relatedTarget:e})},t._clear=function(){[].slice.call(document.querySelectorAll(this._selector)).filter(function(t){return t.classList.contains(fi)}).forEach(function(t){return t.classList.remove(fi)})},n._jQueryInterface=function(e){return this.each(function(){var t=p(this).data(ri);if(t||(t=new n(this,"object"==typeof e&&e),p(this).data(ri,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},s(n,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return li}}]),n}();p(window).on(hi.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(di)),e=t.length;e--;){var n=p(t[e]);Ci._jQueryInterface.call(n,n.data())}}),p.fn[oi]=Ci._jQueryInterface,p.fn[oi].Constructor=Ci,p.fn[oi].noConflict=function(){return p.fn[oi]=ai,Ci._jQueryInterface};var Ti="bs.tab",Si="."+Ti,Di=p.fn.tab,Ii={HIDE:"hide"+Si,HIDDEN:"hidden"+Si,SHOW:"show"+Si,SHOWN:"shown"+Si,CLICK_DATA_API:"click"+Si+".data-api"},Ai="dropdown-menu",Oi="active",Ni="disabled",ki="fade",Li="show",xi=".dropdown",Pi=".nav, .list-group",Hi=".active",ji="> li > .active",Ri='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',Fi=".dropdown-toggle",Mi="> .dropdown-menu .active",Wi=function(){function i(t){this._element=t}var t=i.prototype;return t.show=function(){var n=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&p(this._element).hasClass(Oi)||p(this._element).hasClass(Ni))){var t,i,e=p(this._element).closest(Pi)[0],o=m.getSelectorFromElement(this._element);if(e){var r="UL"===e.nodeName||"OL"===e.nodeName?ji:Hi;i=(i=p.makeArray(p(e).find(r)))[i.length-1]}var s=p.Event(Ii.HIDE,{relatedTarget:this._element}),a=p.Event(Ii.SHOW,{relatedTarget:i});if(i&&p(i).trigger(s),p(this._element).trigger(a),!a.isDefaultPrevented()&&!s.isDefaultPrevented()){o&&(t=document.querySelector(o)),this._activate(this._element,e);var l=function(){var t=p.Event(Ii.HIDDEN,{relatedTarget:n._element}),e=p.Event(Ii.SHOWN,{relatedTarget:i});p(i).trigger(t),p(n._element).trigger(e)};t?this._activate(t,t.parentNode,l):l()}}},t.dispose=function(){p.removeData(this._element,Ti),this._element=null},t._activate=function(t,e,n){var i=this,o=(!e||"UL"!==e.nodeName&&"OL"!==e.nodeName?p(e).children(Hi):p(e).find(ji))[0],r=n&&o&&p(o).hasClass(ki),s=function(){return i._transitionComplete(t,o,n)};if(o&&r){var a=m.getTransitionDurationFromElement(o);p(o).removeClass(Li).one(m.TRANSITION_END,s).emulateTransitionEnd(a)}else s()},t._transitionComplete=function(t,e,n){if(e){p(e).removeClass(Oi);var i=p(e.parentNode).find(Mi)[0];i&&p(i).removeClass(Oi),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!1)}if(p(t).addClass(Oi),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),m.reflow(t),t.classList.contains(ki)&&t.classList.add(Li),t.parentNode&&p(t.parentNode).hasClass(Ai)){var o=p(t).closest(xi)[0];if(o){var r=[].slice.call(o.querySelectorAll(Fi));p(r).addClass(Oi)}t.setAttribute("aria-expanded",!0)}n&&n()},i._jQueryInterface=function(n){return this.each(function(){var t=p(this),e=t.data(Ti);if(e||(e=new i(this),t.data(Ti,e)),"string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}}]),i}();p(document).on(Ii.CLICK_DATA_API,Ri,function(t){t.preventDefault(),Wi._jQueryInterface.call(p(this),"show")}),p.fn.tab=Wi._jQueryInterface,p.fn.tab.Constructor=Wi,p.fn.tab.noConflict=function(){return p.fn.tab=Di,Wi._jQueryInterface};var Ui="toast",Bi="bs.toast",qi="."+Bi,Ki=p.fn[Ui],Qi={CLICK_DISMISS:"click.dismiss"+qi,HIDE:"hide"+qi,HIDDEN:"hidden"+qi,SHOW:"show"+qi,SHOWN:"shown"+qi},Vi="fade",Yi="hide",zi="show",Xi="showing",Gi={animation:"boolean",autohide:"boolean",delay:"number"},$i={animation:!0,autohide:!0,delay:500},Ji='[data-dismiss="toast"]',Zi=function(){function i(t,e){this._element=t,this._config=this._getConfig(e),this._timeout=null,this._setListeners()}var t=i.prototype;return t.show=function(){var t=this;p(this._element).trigger(Qi.SHOW),this._config.animation&&this._element.classList.add(Vi);var e=function(){t._element.classList.remove(Xi),t._element.classList.add(zi),p(t._element).trigger(Qi.SHOWN),t._config.autohide&&t.hide()};if(this._element.classList.remove(Yi),this._element.classList.add(Xi),this._config.animation){var n=m.getTransitionDurationFromElement(this._element);p(this._element).one(m.TRANSITION_END,e).emulateTransitionEnd(n)}else e()},t.hide=function(t){var e=this;this._element.classList.contains(zi)&&(p(this._element).trigger(Qi.HIDE),t?this._close():this._timeout=setTimeout(function(){e._close()},this._config.delay))},t.dispose=function(){clearTimeout(this._timeout),this._timeout=null,this._element.classList.contains(zi)&&this._element.classList.remove(zi),p(this._element).off(Qi.CLICK_DISMISS),p.removeData(this._element,Bi),this._element=null,this._config=null},t._getConfig=function(t){return t=l({},$i,p(this._element).data(),"object"==typeof t&&t?t:{}),m.typeCheckConfig(Ui,t,this.constructor.DefaultType),t},t._setListeners=function(){var t=this;p(this._element).on(Qi.CLICK_DISMISS,Ji,function(){return t.hide(!0)})},t._close=function(){var t=this,e=function(){t._element.classList.add(Yi),p(t._element).trigger(Qi.HIDDEN)};if(this._element.classList.remove(zi),this._config.animation){var n=m.getTransitionDurationFromElement(this._element);p(this._element).one(m.TRANSITION_END,e).emulateTransitionEnd(n)}else e()},i._jQueryInterface=function(n){return this.each(function(){var t=p(this),e=t.data(Bi);if(e||(e=new i(this,"object"==typeof n&&n),t.data(Bi,e)),"string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n](this)}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"DefaultType",get:function(){return Gi}},{key:"Default",get:function(){return $i}}]),i}();p.fn[Ui]=Zi._jQueryInterface,p.fn[Ui].Constructor=Zi,p.fn[Ui].noConflict=function(){return p.fn[Ui]=Ki,Zi._jQueryInterface},function(){if("undefined"==typeof p)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var t=p.fn.jquery.split(" ")[0].split(".");if(t[0]<2&&t[1]<9||1===t[0]&&9===t[1]&&t[2]<1||4<=t[0])throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(),t.Util=m,t.Alert=g,t.Button=k,t.Carousel=at,t.Collapse=Ct,t.Dropdown=Xe,t.Modal=gn,t.Popover=ii,t.Scrollspy=Ci,t.Tab=Wi,t.Toast=Zi,t.Tooltip=qn,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=bootstrap.bundle.min.js.map
;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('jquery'));
  } else {
    root.jquery_mhead_js = factory(root.jQuery);
  }
}(this, function(jQuery) {
/*
 * jQuery mhead v1.0.1
 * @requires jQuery 1.7.0 or later
 *
 * mmenu.frebsite.nl/mhead-plugin
 *
 * Copyright (c) Fred Heusschen
 * www.frebsite.nl
 *
 * License: CC-BY-4.0
 * http://creativecommons.org/licenses/by/4.0/
 */
!function(t){function i(){t[n].glbl||(a={$wndw:t(window),$docu:t(document),$html:t("html"),$body:t("body")},o={},r={},h={},t.each([o,r,h],function(t,i){i.add=function(t){t=t.split(" ");for(var n=0,s=t.length;n<s;n++)i[t[n]]=i.mh(t[n])}}),o.mh=function(t){return"mh-"+t},o.add("head sticky scrolledout align btns list hamburger"),o.umh=function(t){return"mh-"==t.slice(0,3)&&(t=t.slice(3)),t},r.mh=function(t){return"mh-"+t},h.mh=function(t){return t+".mh"},h.add("scroll click"),t[n]._c=o,t[n]._d=r,t[n]._e=h,t[n].glbl=a)}var n="mhead",s="1.0.1";if(!(t[n]&&t[n].version>s)){t[n]=function(t,i,n){return this.$head=t,this.opts=i,this.conf=n,this._initButtons(),this._initList(),this._initHamburger(),this._initScroll(),this},t[n].version=s,t[n].defaults={scroll:{hide:0,show:0,tolerance:4},hamburger:{menu:null,animation:"collapse"}},t[n].configuration={initButtons:!0,initList:!0,initHamburger:!0,initScroll:!0},t[n].prototype={_initButtons:function(){if(!this.conf.initButtons)return this;var t=!1,i={left:0,right:0},n=0,s=0;for(var r in i)t=t||this.$head.hasClass(o.align+"-"+r),(n=this.$head.children("."+o.btns+"-"+r).children().length)&&(s=Math.max(n,s),i[r]=n);if(!t)for(var r in i)i[r]=s;for(var r in i)if(i[r]){var h=o.btns+"-"+r;i[r]>1&&(h+="-"+i[r]),this.$head.addClass(h)}return this},_initList:function(){return this.conf.initList?void this.$head.find("."+o.list).each(function(){t(this).children().appendTo(this)}):this},_initScroll:function(){if(!this.conf.initScroll)return this;if(!this.opts.scroll||this.opts.scroll.hide===!1)return this;this.$head.hasClass(o.sticky)||this.$head.addClass(o.sticky);var t=this,i=0,n=null,s=this.$head.offset().top+this.$head.outerHeight();return this.opts.scroll.hide=Math.max(s,this.opts.scroll.hide||0),this.opts.scroll.show=Math.max(s,this.opts.scroll.show||0),a.$wndw.on(h.scroll,function(){var s=a.$wndw.scrollTop(),r=i-s,h=r<0?"down":"up";r=Math.abs(r),i=s,null===n&&(n=s>t.opts.scroll.show),n?"up"==h&&(s<t.opts.scroll.show||r>t.opts.scroll.tolerance)&&(n=!1,t.$head.removeClass(o.scrolledout)):"down"==h&&s>t.opts.scroll.hide&&r>t.opts.scroll.tolerance&&(n=!0,t.$head.addClass(o.scrolledout))}).trigger(h.scroll),this},_initHamburger:function(){if(!this.conf.initHamburger)return this;var i=this.$head.find("."+o.hamburger);if(i.length){var n=this;return i.each(function(){var i=t(this),s=t('<button class="hamburger"><span class="hamburger-box"><span class="hamburger-inner"></span></span></button>'),o=i.attr("href");i.replaceWith(s),s.addClass("hamburger--"+n.opts.hamburger.animation);for(var r=t(),a=[o,n.opts.hamburger.menu,".mm-menu"],e=0;e<a.length;e++)if(a[e]&&(r=t(a[e]),r.length&&r.is(".mm-menu"))){r=r.first();break}var l=r.data("mmenu");s.on(h.click,function(){l.open()}),l.bind("open:finish",function(){setTimeout(function(){s.addClass("is-active")},100)}),l.bind("close:finish",function(){setTimeout(function(){s.removeClass("is-active")},100)})}),this}}},t.fn[n]=function(s,o){return i(),s=t.extend(!0,{},t[n].defaults,s),o=t.extend(!0,{},t[n].configuration,o),this.each(function(){var i=t(this);if(!i.data(n)){var r=new t[n](i,s,o);i.data(n,r)}})},t[n].support={touch:"ontouchstart"in window||navigator.msMaxTouchPoints||!1};var o,r,h,a}}(jQuery);
return true;
}));

/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.8.1
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
/* global window, document, define, jQuery, setInterval, clearInterval */
;(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }

}(function($) {
    'use strict';
    var Slick = window.Slick || {};

    Slick = (function() {

        var instanceUid = 0;

        function Slick(element, settings) {

            var _ = this, dataSettings;

            _.defaults = {
                accessibility: true,
                adaptiveHeight: false,
                appendArrows: $(element),
                appendDots: $(element),
                arrows: true,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: false,
                autoplaySpeed: 3000,
                centerMode: false,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function(slider, i) {
                    return $('<button type="button" />').text(i + 1);
                },
                dots: false,
                dotsClass: 'slick-dots',
                draggable: true,
                easing: 'linear',
                edgeFriction: 0.35,
                fade: false,
                focusOnSelect: false,
                focusOnChange: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: false,
                pauseOnHover: true,
                pauseOnFocus: true,
                pauseOnDotsHover: false,
                respondTo: 'window',
                responsive: null,
                rows: 1,
                rtl: false,
                slide: '',
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: true,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                useTransform: true,
                variableWidth: false,
                vertical: false,
                verticalSwiping: false,
                waitForAnimate: true,
                zIndex: 1000
            };

            _.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: false,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                swiping: false,
                $list: null,
                touchObject: {},
                transformsEnabled: false,
                unslicked: false
            };

            $.extend(_, _.initials);

            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.focussed = false;
            _.interrupted = false;
            _.hidden = 'hidden';
            _.paused = true;
            _.positionProp = null;
            _.respondTo = null;
            _.rowCount = 1;
            _.shouldClick = true;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = 'visibilitychange';
            _.windowWidth = 0;
            _.windowTimer = null;

            dataSettings = $(element).data('slick') || {};

            _.options = $.extend({}, _.defaults, settings, dataSettings);

            _.currentSlide = _.options.initialSlide;

            _.originalSettings = _.options;

            if (typeof document.mozHidden !== 'undefined') {
                _.hidden = 'mozHidden';
                _.visibilityChange = 'mozvisibilitychange';
            } else if (typeof document.webkitHidden !== 'undefined') {
                _.hidden = 'webkitHidden';
                _.visibilityChange = 'webkitvisibilitychange';
            }

            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);

            _.instanceUid = instanceUid++;

            // A simple way to check for HTML strings
            // Strict HTML recognition (must start with <)
            // Extracted from jQuery v1.11 source
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;


            _.registerBreakpoints();
            _.init(true);

        }

        return Slick;

    }());

    Slick.prototype.activateADA = function() {
        var _ = this;

        _.$slideTrack.find('.slick-active').attr({
            'aria-hidden': 'false'
        }).find('a, input, button, select').attr({
            'tabindex': '0'
        });

    };

    Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            addBefore = index;
            index = null;
        } else if (index < 0 || (index >= _.slideCount)) {
            return false;
        }

        _.unload();

        if (typeof(index) === 'number') {
            if (index === 0 && _.$slides.length === 0) {
                $(markup).appendTo(_.$slideTrack);
            } else if (addBefore) {
                $(markup).insertBefore(_.$slides.eq(index));
            } else {
                $(markup).insertAfter(_.$slides.eq(index));
            }
        } else {
            if (addBefore === true) {
                $(markup).prependTo(_.$slideTrack);
            } else {
                $(markup).appendTo(_.$slideTrack);
            }
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slides.each(function(index, element) {
            $(element).attr('data-slick-index', index);
        });

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.animateHeight = function() {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({
                height: targetHeight
            }, _.options.speed);
        }
    };

    Slick.prototype.animateSlide = function(targetLeft, callback) {

        var animProps = {},
            _ = this;

        _.animateHeight();

        if (_.options.rtl === true && _.options.vertical === false) {
            targetLeft = -targetLeft;
        }
        if (_.transformsEnabled === false) {
            if (_.options.vertical === false) {
                _.$slideTrack.animate({
                    left: targetLeft
                }, _.options.speed, _.options.easing, callback);
            } else {
                _.$slideTrack.animate({
                    top: targetLeft
                }, _.options.speed, _.options.easing, callback);
            }

        } else {

            if (_.cssTransitions === false) {
                if (_.options.rtl === true) {
                    _.currentLeft = -(_.currentLeft);
                }
                $({
                    animStart: _.currentLeft
                }).animate({
                    animStart: targetLeft
                }, {
                    duration: _.options.speed,
                    easing: _.options.easing,
                    step: function(now) {
                        now = Math.ceil(now);
                        if (_.options.vertical === false) {
                            animProps[_.animType] = 'translate(' +
                                now + 'px, 0px)';
                            _.$slideTrack.css(animProps);
                        } else {
                            animProps[_.animType] = 'translate(0px,' +
                                now + 'px)';
                            _.$slideTrack.css(animProps);
                        }
                    },
                    complete: function() {
                        if (callback) {
                            callback.call();
                        }
                    }
                });

            } else {

                _.applyTransition();
                targetLeft = Math.ceil(targetLeft);

                if (_.options.vertical === false) {
                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                } else {
                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                }
                _.$slideTrack.css(animProps);

                if (callback) {
                    setTimeout(function() {

                        _.disableTransition();

                        callback.call();
                    }, _.options.speed);
                }

            }

        }

    };

    Slick.prototype.getNavTarget = function() {

        var _ = this,
            asNavFor = _.options.asNavFor;

        if ( asNavFor && asNavFor !== null ) {
            asNavFor = $(asNavFor).not(_.$slider);
        }

        return asNavFor;

    };

    Slick.prototype.asNavFor = function(index) {

        var _ = this,
            asNavFor = _.getNavTarget();

        if ( asNavFor !== null && typeof asNavFor === 'object' ) {
            asNavFor.each(function() {
                var target = $(this).slick('getSlick');
                if(!target.unslicked) {
                    target.slideHandler(index, true);
                }
            });
        }

    };

    Slick.prototype.applyTransition = function(slide) {

        var _ = this,
            transition = {};

        if (_.options.fade === false) {
            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
        } else {
            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
        }

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.autoPlay = function() {

        var _ = this;

        _.autoPlayClear();

        if ( _.slideCount > _.options.slidesToShow ) {
            _.autoPlayTimer = setInterval( _.autoPlayIterator, _.options.autoplaySpeed );
        }

    };

    Slick.prototype.autoPlayClear = function() {

        var _ = this;

        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }

    };

    Slick.prototype.autoPlayIterator = function() {

        var _ = this,
            slideTo = _.currentSlide + _.options.slidesToScroll;

        if ( !_.paused && !_.interrupted && !_.focussed ) {

            if ( _.options.infinite === false ) {

                if ( _.direction === 1 && ( _.currentSlide + 1 ) === ( _.slideCount - 1 )) {
                    _.direction = 0;
                }

                else if ( _.direction === 0 ) {

                    slideTo = _.currentSlide - _.options.slidesToScroll;

                    if ( _.currentSlide - 1 === 0 ) {
                        _.direction = 1;
                    }

                }

            }

            _.slideHandler( slideTo );

        }

    };

    Slick.prototype.buildArrows = function() {

        var _ = this;

        if (_.options.arrows === true ) {

            _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
            _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

            if( _.slideCount > _.options.slidesToShow ) {

                _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

                if (_.htmlExpr.test(_.options.prevArrow)) {
                    _.$prevArrow.prependTo(_.options.appendArrows);
                }

                if (_.htmlExpr.test(_.options.nextArrow)) {
                    _.$nextArrow.appendTo(_.options.appendArrows);
                }

                if (_.options.infinite !== true) {
                    _.$prevArrow
                        .addClass('slick-disabled')
                        .attr('aria-disabled', 'true');
                }

            } else {

                _.$prevArrow.add( _.$nextArrow )

                    .addClass('slick-hidden')
                    .attr({
                        'aria-disabled': 'true',
                        'tabindex': '-1'
                    });

            }

        }

    };

    Slick.prototype.buildDots = function() {

        var _ = this,
            i, dot;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$slider.addClass('slick-dotted');

            dot = $('<ul />').addClass(_.options.dotsClass);

            for (i = 0; i <= _.getDotCount(); i += 1) {
                dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
            }

            _.$dots = dot.appendTo(_.options.appendDots);

            _.$dots.find('li').first().addClass('slick-active');

        }

    };

    Slick.prototype.buildOut = function() {

        var _ = this;

        _.$slides =
            _.$slider
                .children( _.options.slide + ':not(.slick-cloned)')
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        _.$slides.each(function(index, element) {
            $(element)
                .attr('data-slick-index', index)
                .data('originalStyling', $(element).attr('style') || '');
        });

        _.$slider.addClass('slick-slider');

        _.$slideTrack = (_.slideCount === 0) ?
            $('<div class="slick-track"/>').appendTo(_.$slider) :
            _.$slides.wrapAll('<div class="slick-track"/>').parent();

        _.$list = _.$slideTrack.wrap(
            '<div class="slick-list"/>').parent();
        _.$slideTrack.css('opacity', 0);

        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
            _.options.slidesToScroll = 1;
        }

        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

        _.setupInfinite();

        _.buildArrows();

        _.buildDots();

        _.updateDots();


        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        if (_.options.draggable === true) {
            _.$list.addClass('draggable');
        }

    };

    Slick.prototype.buildRows = function() {

        var _ = this, a, b, c, newSlides, numOfSlides, originalSlides,slidesPerSection;

        newSlides = document.createDocumentFragment();
        originalSlides = _.$slider.children();

        if(_.options.rows > 0) {

            slidesPerSection = _.options.slidesPerRow * _.options.rows;
            numOfSlides = Math.ceil(
                originalSlides.length / slidesPerSection
            );

            for(a = 0; a < numOfSlides; a++){
                var slide = document.createElement('div');
                for(b = 0; b < _.options.rows; b++) {
                    var row = document.createElement('div');
                    for(c = 0; c < _.options.slidesPerRow; c++) {
                        var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
                        if (originalSlides.get(target)) {
                            row.appendChild(originalSlides.get(target));
                        }
                    }
                    slide.appendChild(row);
                }
                newSlides.appendChild(slide);
            }

            _.$slider.empty().append(newSlides);
            _.$slider.children().children().children()
                .css({
                    'width':(100 / _.options.slidesPerRow) + '%',
                    'display': 'inline-block'
                });

        }

    };

    Slick.prototype.checkResponsive = function(initial, forceUpdate) {

        var _ = this,
            breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
        var sliderWidth = _.$slider.width();
        var windowWidth = window.innerWidth || $(window).width();

        if (_.respondTo === 'window') {
            respondToWidth = windowWidth;
        } else if (_.respondTo === 'slider') {
            respondToWidth = sliderWidth;
        } else if (_.respondTo === 'min') {
            respondToWidth = Math.min(windowWidth, sliderWidth);
        }

        if ( _.options.responsive &&
            _.options.responsive.length &&
            _.options.responsive !== null) {

            targetBreakpoint = null;

            for (breakpoint in _.breakpoints) {
                if (_.breakpoints.hasOwnProperty(breakpoint)) {
                    if (_.originalSettings.mobileFirst === false) {
                        if (respondToWidth < _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    } else {
                        if (respondToWidth > _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    }
                }
            }

            if (targetBreakpoint !== null) {
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                        _.activeBreakpoint =
                            targetBreakpoint;
                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                            _.unslick(targetBreakpoint);
                        } else {
                            _.options = $.extend({}, _.originalSettings,
                                _.breakpointSettings[
                                    targetBreakpoint]);
                            if (initial === true) {
                                _.currentSlide = _.options.initialSlide;
                            }
                            _.refresh(initial);
                        }
                        triggerBreakpoint = targetBreakpoint;
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                        _.unslick(targetBreakpoint);
                    } else {
                        _.options = $.extend({}, _.originalSettings,
                            _.breakpointSettings[
                                targetBreakpoint]);
                        if (initial === true) {
                            _.currentSlide = _.options.initialSlide;
                        }
                        _.refresh(initial);
                    }
                    triggerBreakpoint = targetBreakpoint;
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = _.originalSettings;
                    if (initial === true) {
                        _.currentSlide = _.options.initialSlide;
                    }
                    _.refresh(initial);
                    triggerBreakpoint = targetBreakpoint;
                }
            }

            // only trigger breakpoints during an actual break. not on initialize.
            if( !initial && triggerBreakpoint !== false ) {
                _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
            }
        }

    };

    Slick.prototype.changeSlide = function(event, dontAnimate) {

        var _ = this,
            $target = $(event.currentTarget),
            indexOffset, slideOffset, unevenOffset;

        // If target is a link, prevent default action.
        if($target.is('a')) {
            event.preventDefault();
        }

        // If target is not the <li> element (ie: a child), find the <li>.
        if(!$target.is('li')) {
            $target = $target.closest('li');
        }

        unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

        switch (event.data.message) {

            case 'previous':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                }
                break;

            case 'next':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                }
                break;

            case 'index':
                var index = event.data.index === 0 ? 0 :
                    event.data.index || $target.index() * _.options.slidesToScroll;

                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                $target.children().trigger('focus');
                break;

            default:
                return;
        }

    };

    Slick.prototype.checkNavigable = function(index) {

        var _ = this,
            navigables, prevNavigable;

        navigables = _.getNavigableIndexes();
        prevNavigable = 0;
        if (index > navigables[navigables.length - 1]) {
            index = navigables[navigables.length - 1];
        } else {
            for (var n in navigables) {
                if (index < navigables[n]) {
                    index = prevNavigable;
                    break;
                }
                prevNavigable = navigables[n];
            }
        }

        return index;
    };

    Slick.prototype.cleanUpEvents = function() {

        var _ = this;

        if (_.options.dots && _.$dots !== null) {

            $('li', _.$dots)
                .off('click.slick', _.changeSlide)
                .off('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .off('mouseleave.slick', $.proxy(_.interrupt, _, false));

            if (_.options.accessibility === true) {
                _.$dots.off('keydown.slick', _.keyHandler);
            }
        }

        _.$slider.off('focus.slick blur.slick');

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
            _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);

            if (_.options.accessibility === true) {
                _.$prevArrow && _.$prevArrow.off('keydown.slick', _.keyHandler);
                _.$nextArrow && _.$nextArrow.off('keydown.slick', _.keyHandler);
            }
        }

        _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
        _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
        _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
        _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

        _.$list.off('click.slick', _.clickHandler);

        $(document).off(_.visibilityChange, _.visibility);

        _.cleanUpSlideEvents();

        if (_.options.accessibility === true) {
            _.$list.off('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().off('click.slick', _.selectHandler);
        }

        $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);

        $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);

        $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);

        $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);

    };

    Slick.prototype.cleanUpSlideEvents = function() {

        var _ = this;

        _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
        _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));

    };

    Slick.prototype.cleanUpRows = function() {

        var _ = this, originalSlides;

        if(_.options.rows > 0) {
            originalSlides = _.$slides.children().children();
            originalSlides.removeAttr('style');
            _.$slider.empty().append(originalSlides);
        }

    };

    Slick.prototype.clickHandler = function(event) {

        var _ = this;

        if (_.shouldClick === false) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }

    };

    Slick.prototype.destroy = function(refresh) {

        var _ = this;

        _.autoPlayClear();

        _.touchObject = {};

        _.cleanUpEvents();

        $('.slick-cloned', _.$slider).detach();

        if (_.$dots) {
            _.$dots.remove();
        }

        if ( _.$prevArrow && _.$prevArrow.length ) {

            _.$prevArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.prevArrow )) {
                _.$prevArrow.remove();
            }
        }

        if ( _.$nextArrow && _.$nextArrow.length ) {

            _.$nextArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.nextArrow )) {
                _.$nextArrow.remove();
            }
        }


        if (_.$slides) {

            _.$slides
                .removeClass('slick-slide slick-active slick-center slick-visible slick-current')
                .removeAttr('aria-hidden')
                .removeAttr('data-slick-index')
                .each(function(){
                    $(this).attr('style', $(this).data('originalStyling'));
                });

            _.$slideTrack.children(this.options.slide).detach();

            _.$slideTrack.detach();

            _.$list.detach();

            _.$slider.append(_.$slides);
        }

        _.cleanUpRows();

        _.$slider.removeClass('slick-slider');
        _.$slider.removeClass('slick-initialized');
        _.$slider.removeClass('slick-dotted');

        _.unslicked = true;

        if(!refresh) {
            _.$slider.trigger('destroy', [_]);
        }

    };

    Slick.prototype.disableTransition = function(slide) {

        var _ = this,
            transition = {};

        transition[_.transitionType] = '';

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.fadeSlide = function(slideIndex, callback) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).css({
                zIndex: _.options.zIndex
            });

            _.$slides.eq(slideIndex).animate({
                opacity: 1
            }, _.options.speed, _.options.easing, callback);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 1,
                zIndex: _.options.zIndex
            });

            if (callback) {
                setTimeout(function() {

                    _.disableTransition(slideIndex);

                    callback.call();
                }, _.options.speed);
            }

        }

    };

    Slick.prototype.fadeSlideOut = function(slideIndex) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).animate({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            }, _.options.speed, _.options.easing);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            });

        }

    };

    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {

        var _ = this;

        if (filter !== null) {

            _.$slidesCache = _.$slides;

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.focusHandler = function() {

        var _ = this;

        _.$slider
            .off('focus.slick blur.slick')
            .on('focus.slick blur.slick', '*', function(event) {

            event.stopImmediatePropagation();
            var $sf = $(this);

            setTimeout(function() {

                if( _.options.pauseOnFocus ) {
                    _.focussed = $sf.is(':focus');
                    _.autoPlay();
                }

            }, 0);

        });
    };

    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {

        var _ = this;
        return _.currentSlide;

    };

    Slick.prototype.getDotCount = function() {

        var _ = this;

        var breakPoint = 0;
        var counter = 0;
        var pagerQty = 0;

        if (_.options.infinite === true) {
            if (_.slideCount <= _.options.slidesToShow) {
                 ++pagerQty;
            } else {
                while (breakPoint < _.slideCount) {
                    ++pagerQty;
                    breakPoint = counter + _.options.slidesToScroll;
                    counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
                }
            }
        } else if (_.options.centerMode === true) {
            pagerQty = _.slideCount;
        } else if(!_.options.asNavFor) {
            pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
        }else {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        }

        return pagerQty - 1;

    };

    Slick.prototype.getLeft = function(slideIndex) {

        var _ = this,
            targetLeft,
            verticalHeight,
            verticalOffset = 0,
            targetSlide,
            coef;

        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight(true);

        if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
                coef = -1

                if (_.options.vertical === true && _.options.centerMode === true) {
                    if (_.options.slidesToShow === 2) {
                        coef = -1.5;
                    } else if (_.options.slidesToShow === 1) {
                        coef = -2
                    }
                }
                verticalOffset = (verticalHeight * _.options.slidesToShow) * coef;
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    if (slideIndex > _.slideCount) {
                        _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
                        verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
                    } else {
                        _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
                        verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
                    }
                }
            }
        } else {
            if (slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
                verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
            }
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.slideOffset = 0;
            verticalOffset = 0;
        }

        if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) {
            _.slideOffset = ((_.slideWidth * Math.floor(_.options.slidesToShow)) / 2) - ((_.slideWidth * _.slideCount) / 2);
        } else if (_.options.centerMode === true && _.options.infinite === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
        } else if (_.options.centerMode === true) {
            _.slideOffset = 0;
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
        }

        if (_.options.vertical === false) {
            targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
        } else {
            targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
        }

        if (_.options.variableWidth === true) {

            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
            } else {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
            }

            if (_.options.rtl === true) {
                if (targetSlide[0]) {
                    targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                } else {
                    targetLeft =  0;
                }
            } else {
                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
            }

            if (_.options.centerMode === true) {
                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                } else {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                }

                if (_.options.rtl === true) {
                    if (targetSlide[0]) {
                        targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                    } else {
                        targetLeft =  0;
                    }
                } else {
                    targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                }

                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
            }
        }

        return targetLeft;

    };

    Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {

        var _ = this;

        return _.options[option];

    };

    Slick.prototype.getNavigableIndexes = function() {

        var _ = this,
            breakPoint = 0,
            counter = 0,
            indexes = [],
            max;

        if (_.options.infinite === false) {
            max = _.slideCount;
        } else {
            breakPoint = _.options.slidesToScroll * -1;
            counter = _.options.slidesToScroll * -1;
            max = _.slideCount * 2;
        }

        while (breakPoint < max) {
            indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }

        return indexes;

    };

    Slick.prototype.getSlick = function() {

        return this;

    };

    Slick.prototype.getSlideCount = function() {

        var _ = this,
            slidesTraversed, swipedSlide, centerOffset;

        centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

        if (_.options.swipeToSlide === true) {
            _.$slideTrack.find('.slick-slide').each(function(index, slide) {
                if (slide.offsetLeft - centerOffset + ($(slide).outerWidth() / 2) > (_.swipeLeft * -1)) {
                    swipedSlide = slide;
                    return false;
                }
            });

            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;

            return slidesTraversed;

        } else {
            return _.options.slidesToScroll;
        }

    };

    Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'index',
                index: parseInt(slide)
            }
        }, dontAnimate);

    };

    Slick.prototype.init = function(creation) {

        var _ = this;

        if (!$(_.$slider).hasClass('slick-initialized')) {

            $(_.$slider).addClass('slick-initialized');

            _.buildRows();
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();
            _.checkResponsive(true);
            _.focusHandler();

        }

        if (creation) {
            _.$slider.trigger('init', [_]);
        }

        if (_.options.accessibility === true) {
            _.initADA();
        }

        if ( _.options.autoplay ) {

            _.paused = false;
            _.autoPlay();

        }

    };

    Slick.prototype.initADA = function() {
        var _ = this,
                numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow),
                tabControlIndexes = _.getNavigableIndexes().filter(function(val) {
                    return (val >= 0) && (val < _.slideCount);
                });

        _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
            'aria-hidden': 'true',
            'tabindex': '-1'
        }).find('a, input, button, select').attr({
            'tabindex': '-1'
        });

        if (_.$dots !== null) {
            _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i) {
                var slideControlIndex = tabControlIndexes.indexOf(i);

                $(this).attr({
                    'role': 'tabpanel',
                    'id': 'slick-slide' + _.instanceUid + i,
                    'tabindex': -1
                });

                if (slideControlIndex !== -1) {
                   var ariaButtonControl = 'slick-slide-control' + _.instanceUid + slideControlIndex
                   if ($('#' + ariaButtonControl).length) {
                     $(this).attr({
                         'aria-describedby': ariaButtonControl
                     });
                   }
                }
            });

            _.$dots.attr('role', 'tablist').find('li').each(function(i) {
                var mappedSlideIndex = tabControlIndexes[i];

                $(this).attr({
                    'role': 'presentation'
                });

                $(this).find('button').first().attr({
                    'role': 'tab',
                    'id': 'slick-slide-control' + _.instanceUid + i,
                    'aria-controls': 'slick-slide' + _.instanceUid + mappedSlideIndex,
                    'aria-label': (i + 1) + ' of ' + numDotGroups,
                    'aria-selected': null,
                    'tabindex': '-1'
                });

            }).eq(_.currentSlide).find('button').attr({
                'aria-selected': 'true',
                'tabindex': '0'
            }).end();
        }

        for (var i=_.currentSlide, max=i+_.options.slidesToShow; i < max; i++) {
          if (_.options.focusOnChange) {
            _.$slides.eq(i).attr({'tabindex': '0'});
          } else {
            _.$slides.eq(i).removeAttr('tabindex');
          }
        }

        _.activateADA();

    };

    Slick.prototype.initArrowEvents = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'previous'
               }, _.changeSlide);
            _.$nextArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'next'
               }, _.changeSlide);

            if (_.options.accessibility === true) {
                _.$prevArrow.on('keydown.slick', _.keyHandler);
                _.$nextArrow.on('keydown.slick', _.keyHandler);
            }
        }

    };

    Slick.prototype.initDotEvents = function() {

        var _ = this;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            $('li', _.$dots).on('click.slick', {
                message: 'index'
            }, _.changeSlide);

            if (_.options.accessibility === true) {
                _.$dots.on('keydown.slick', _.keyHandler);
            }
        }

        if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.slideCount > _.options.slidesToShow) {

            $('li', _.$dots)
                .on('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initSlideEvents = function() {

        var _ = this;

        if ( _.options.pauseOnHover ) {

            _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
            _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initializeEvents = function() {

        var _ = this;

        _.initArrowEvents();

        _.initDotEvents();
        _.initSlideEvents();

        _.$list.on('touchstart.slick mousedown.slick', {
            action: 'start'
        }, _.swipeHandler);
        _.$list.on('touchmove.slick mousemove.slick', {
            action: 'move'
        }, _.swipeHandler);
        _.$list.on('touchend.slick mouseup.slick', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('touchcancel.slick mouseleave.slick', {
            action: 'end'
        }, _.swipeHandler);

        _.$list.on('click.slick', _.clickHandler);

        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

        if (_.options.accessibility === true) {
            _.$list.on('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));

        $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));

        $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);

        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(_.setPosition);

    };

    Slick.prototype.initUI = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.show();
            _.$nextArrow.show();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.show();

        }

    };

    Slick.prototype.keyHandler = function(event) {

        var _ = this;
         //Dont slide if the cursor is inside the form fields and arrow keys are pressed
        if(!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
            if (event.keyCode === 37 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'next' :  'previous'
                    }
                });
            } else if (event.keyCode === 39 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'previous' : 'next'
                    }
                });
            }
        }

    };

    Slick.prototype.lazyLoad = function() {

        var _ = this,
            loadRange, cloneRange, rangeStart, rangeEnd;

        function loadImages(imagesScope) {

            $('img[data-lazy]', imagesScope).each(function() {

                var image = $(this),
                    imageSource = $(this).attr('data-lazy'),
                    imageSrcSet = $(this).attr('data-srcset'),
                    imageSizes  = $(this).attr('data-sizes') || _.$slider.attr('data-sizes'),
                    imageToLoad = document.createElement('img');

                imageToLoad.onload = function() {

                    image
                        .animate({ opacity: 0 }, 100, function() {

                            if (imageSrcSet) {
                                image
                                    .attr('srcset', imageSrcSet );

                                if (imageSizes) {
                                    image
                                        .attr('sizes', imageSizes );
                                }
                            }

                            image
                                .attr('src', imageSource)
                                .animate({ opacity: 1 }, 200, function() {
                                    image
                                        .removeAttr('data-lazy data-srcset data-sizes')
                                        .removeClass('slick-loading');
                                });
                            _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                        });

                };

                imageToLoad.onerror = function() {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                };

                imageToLoad.src = imageSource;

            });

        }

        if (_.options.centerMode === true) {
            if (_.options.infinite === true) {
                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2;
            } else {
                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
            }
        } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
            if (_.options.fade === true) {
                if (rangeStart > 0) rangeStart--;
                if (rangeEnd <= _.slideCount) rangeEnd++;
            }
        }

        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);

        if (_.options.lazyLoad === 'anticipated') {
            var prevSlide = rangeStart - 1,
                nextSlide = rangeEnd,
                $slides = _.$slider.find('.slick-slide');

            for (var i = 0; i < _.options.slidesToScroll; i++) {
                if (prevSlide < 0) prevSlide = _.slideCount - 1;
                loadRange = loadRange.add($slides.eq(prevSlide));
                loadRange = loadRange.add($slides.eq(nextSlide));
                prevSlide--;
                nextSlide++;
            }
        }

        loadImages(loadRange);

        if (_.slideCount <= _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-slide');
            loadImages(cloneRange);
        } else
        if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
            loadImages(cloneRange);
        } else if (_.currentSlide === 0) {
            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
            loadImages(cloneRange);
        }

    };

    Slick.prototype.loadSlider = function() {

        var _ = this;

        _.setPosition();

        _.$slideTrack.css({
            opacity: 1
        });

        _.$slider.removeClass('slick-loading');

        _.initUI();

        if (_.options.lazyLoad === 'progressive') {
            _.progressiveLazyLoad();
        }

    };

    Slick.prototype.next = Slick.prototype.slickNext = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'next'
            }
        });

    };

    Slick.prototype.orientationChange = function() {

        var _ = this;

        _.checkResponsive();
        _.setPosition();

    };

    Slick.prototype.pause = Slick.prototype.slickPause = function() {

        var _ = this;

        _.autoPlayClear();
        _.paused = true;

    };

    Slick.prototype.play = Slick.prototype.slickPlay = function() {

        var _ = this;

        _.autoPlay();
        _.options.autoplay = true;
        _.paused = false;
        _.focussed = false;
        _.interrupted = false;

    };

    Slick.prototype.postSlide = function(index) {

        var _ = this;

        if( !_.unslicked ) {

            _.$slider.trigger('afterChange', [_, index]);

            _.animating = false;

            if (_.slideCount > _.options.slidesToShow) {
                _.setPosition();
            }

            _.swipeLeft = null;

            if ( _.options.autoplay ) {
                _.autoPlay();
            }

            if (_.options.accessibility === true) {
                _.initADA();

                if (_.options.focusOnChange) {
                    var $currentSlide = $(_.$slides.get(_.currentSlide));
                    $currentSlide.attr('tabindex', 0).focus();
                }
            }

        }

    };

    Slick.prototype.prev = Slick.prototype.slickPrev = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'previous'
            }
        });

    };

    Slick.prototype.preventDefault = function(event) {

        event.preventDefault();

    };

    Slick.prototype.progressiveLazyLoad = function( tryCount ) {

        tryCount = tryCount || 1;

        var _ = this,
            $imgsToLoad = $( 'img[data-lazy]', _.$slider ),
            image,
            imageSource,
            imageSrcSet,
            imageSizes,
            imageToLoad;

        if ( $imgsToLoad.length ) {

            image = $imgsToLoad.first();
            imageSource = image.attr('data-lazy');
            imageSrcSet = image.attr('data-srcset');
            imageSizes  = image.attr('data-sizes') || _.$slider.attr('data-sizes');
            imageToLoad = document.createElement('img');

            imageToLoad.onload = function() {

                if (imageSrcSet) {
                    image
                        .attr('srcset', imageSrcSet );

                    if (imageSizes) {
                        image
                            .attr('sizes', imageSizes );
                    }
                }

                image
                    .attr( 'src', imageSource )
                    .removeAttr('data-lazy data-srcset data-sizes')
                    .removeClass('slick-loading');

                if ( _.options.adaptiveHeight === true ) {
                    _.setPosition();
                }

                _.$slider.trigger('lazyLoaded', [ _, image, imageSource ]);
                _.progressiveLazyLoad();

            };

            imageToLoad.onerror = function() {

                if ( tryCount < 3 ) {

                    /**
                     * try to load the image 3 times,
                     * leave a slight delay so we don't get
                     * servers blocking the request.
                     */
                    setTimeout( function() {
                        _.progressiveLazyLoad( tryCount + 1 );
                    }, 500 );

                } else {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                    _.progressiveLazyLoad();

                }

            };

            imageToLoad.src = imageSource;

        } else {

            _.$slider.trigger('allImagesLoaded', [ _ ]);

        }

    };

    Slick.prototype.refresh = function( initializing ) {

        var _ = this, currentSlide, lastVisibleIndex;

        lastVisibleIndex = _.slideCount - _.options.slidesToShow;

        // in non-infinite sliders, we don't want to go past the
        // last visible index.
        if( !_.options.infinite && ( _.currentSlide > lastVisibleIndex )) {
            _.currentSlide = lastVisibleIndex;
        }

        // if less slides than to show, go to start.
        if ( _.slideCount <= _.options.slidesToShow ) {
            _.currentSlide = 0;

        }

        currentSlide = _.currentSlide;

        _.destroy(true);

        $.extend(_, _.initials, { currentSlide: currentSlide });

        _.init();

        if( !initializing ) {

            _.changeSlide({
                data: {
                    message: 'index',
                    index: currentSlide
                }
            }, false);

        }

    };

    Slick.prototype.registerBreakpoints = function() {

        var _ = this, breakpoint, currentBreakpoint, l,
            responsiveSettings = _.options.responsive || null;

        if ( $.type(responsiveSettings) === 'array' && responsiveSettings.length ) {

            _.respondTo = _.options.respondTo || 'window';

            for ( breakpoint in responsiveSettings ) {

                l = _.breakpoints.length-1;

                if (responsiveSettings.hasOwnProperty(breakpoint)) {
                    currentBreakpoint = responsiveSettings[breakpoint].breakpoint;

                    // loop through the breakpoints and cut out any existing
                    // ones with the same breakpoint number, we don't want dupes.
                    while( l >= 0 ) {
                        if( _.breakpoints[l] && _.breakpoints[l] === currentBreakpoint ) {
                            _.breakpoints.splice(l,1);
                        }
                        l--;
                    }

                    _.breakpoints.push(currentBreakpoint);
                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;

                }

            }

            _.breakpoints.sort(function(a, b) {
                return ( _.options.mobileFirst ) ? a-b : b-a;
            });

        }

    };

    Slick.prototype.reinit = function() {

        var _ = this;

        _.$slides =
            _.$slideTrack
                .children(_.options.slide)
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }

        _.registerBreakpoints();

        _.setProps();
        _.setupInfinite();
        _.buildArrows();
        _.updateArrows();
        _.initArrowEvents();
        _.buildDots();
        _.updateDots();
        _.initDotEvents();
        _.cleanUpSlideEvents();
        _.initSlideEvents();

        _.checkResponsive(false, true);

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        _.setPosition();
        _.focusHandler();

        _.paused = !_.options.autoplay;
        _.autoPlay();

        _.$slider.trigger('reInit', [_]);

    };

    Slick.prototype.resize = function() {

        var _ = this;

        if ($(window).width() !== _.windowWidth) {
            clearTimeout(_.windowDelay);
            _.windowDelay = window.setTimeout(function() {
                _.windowWidth = $(window).width();
                _.checkResponsive();
                if( !_.unslicked ) { _.setPosition(); }
            }, 50);
        }
    };

    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1;
        } else {
            index = removeBefore === true ? --index : index;
        }

        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
            return false;
        }

        _.unload();

        if (removeAll === true) {
            _.$slideTrack.children().remove();
        } else {
            _.$slideTrack.children(this.options.slide).eq(index).remove();
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.setCSS = function(position) {

        var _ = this,
            positionProps = {},
            x, y;

        if (_.options.rtl === true) {
            position = -position;
        }
        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';

        positionProps[_.positionProp] = position;

        if (_.transformsEnabled === false) {
            _.$slideTrack.css(positionProps);
        } else {
            positionProps = {};
            if (_.cssTransitions === false) {
                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                _.$slideTrack.css(positionProps);
            } else {
                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                _.$slideTrack.css(positionProps);
            }
        }

    };

    Slick.prototype.setDimensions = function() {

        var _ = this;

        if (_.options.vertical === false) {
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: ('0px ' + _.options.centerPadding)
                });
            }
        } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: (_.options.centerPadding + ' 0px')
                });
            }
        }

        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();


        if (_.options.vertical === false && _.options.variableWidth === false) {
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));

        } else if (_.options.variableWidth === true) {
            _.$slideTrack.width(5000 * _.slideCount);
        } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
        }

        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);

    };

    Slick.prototype.setFade = function() {

        var _ = this,
            targetLeft;

        _.$slides.each(function(index, element) {
            targetLeft = (_.slideWidth * index) * -1;
            if (_.options.rtl === true) {
                $(element).css({
                    position: 'relative',
                    right: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            } else {
                $(element).css({
                    position: 'relative',
                    left: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            }
        });

        _.$slides.eq(_.currentSlide).css({
            zIndex: _.options.zIndex - 1,
            opacity: 1
        });

    };

    Slick.prototype.setHeight = function() {

        var _ = this;

        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css('height', targetHeight);
        }

    };

    Slick.prototype.setOption =
    Slick.prototype.slickSetOption = function() {

        /**
         * accepts arguments in format of:
         *
         *  - for changing a single option's value:
         *     .slick("setOption", option, value, refresh )
         *
         *  - for changing a set of responsive options:
         *     .slick("setOption", 'responsive', [{}, ...], refresh )
         *
         *  - for updating multiple values at once (not responsive)
         *     .slick("setOption", { 'option': value, ... }, refresh )
         */

        var _ = this, l, item, option, value, refresh = false, type;

        if( $.type( arguments[0] ) === 'object' ) {

            option =  arguments[0];
            refresh = arguments[1];
            type = 'multiple';

        } else if ( $.type( arguments[0] ) === 'string' ) {

            option =  arguments[0];
            value = arguments[1];
            refresh = arguments[2];

            if ( arguments[0] === 'responsive' && $.type( arguments[1] ) === 'array' ) {

                type = 'responsive';

            } else if ( typeof arguments[1] !== 'undefined' ) {

                type = 'single';

            }

        }

        if ( type === 'single' ) {

            _.options[option] = value;


        } else if ( type === 'multiple' ) {

            $.each( option , function( opt, val ) {

                _.options[opt] = val;

            });


        } else if ( type === 'responsive' ) {

            for ( item in value ) {

                if( $.type( _.options.responsive ) !== 'array' ) {

                    _.options.responsive = [ value[item] ];

                } else {

                    l = _.options.responsive.length-1;

                    // loop through the responsive object and splice out duplicates.
                    while( l >= 0 ) {

                        if( _.options.responsive[l].breakpoint === value[item].breakpoint ) {

                            _.options.responsive.splice(l,1);

                        }

                        l--;

                    }

                    _.options.responsive.push( value[item] );

                }

            }

        }

        if ( refresh ) {

            _.unload();
            _.reinit();

        }

    };

    Slick.prototype.setPosition = function() {

        var _ = this;

        _.setDimensions();

        _.setHeight();

        if (_.options.fade === false) {
            _.setCSS(_.getLeft(_.currentSlide));
        } else {
            _.setFade();
        }

        _.$slider.trigger('setPosition', [_]);

    };

    Slick.prototype.setProps = function() {

        var _ = this,
            bodyStyle = document.body.style;

        _.positionProp = _.options.vertical === true ? 'top' : 'left';

        if (_.positionProp === 'top') {
            _.$slider.addClass('slick-vertical');
        } else {
            _.$slider.removeClass('slick-vertical');
        }

        if (bodyStyle.WebkitTransition !== undefined ||
            bodyStyle.MozTransition !== undefined ||
            bodyStyle.msTransition !== undefined) {
            if (_.options.useCSS === true) {
                _.cssTransitions = true;
            }
        }

        if ( _.options.fade ) {
            if ( typeof _.options.zIndex === 'number' ) {
                if( _.options.zIndex < 3 ) {
                    _.options.zIndex = 3;
                }
            } else {
                _.options.zIndex = _.defaults.zIndex;
            }
        }

        if (bodyStyle.OTransform !== undefined) {
            _.animType = 'OTransform';
            _.transformType = '-o-transform';
            _.transitionType = 'OTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.MozTransform !== undefined) {
            _.animType = 'MozTransform';
            _.transformType = '-moz-transform';
            _.transitionType = 'MozTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.webkitTransform !== undefined) {
            _.animType = 'webkitTransform';
            _.transformType = '-webkit-transform';
            _.transitionType = 'webkitTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.msTransform !== undefined) {
            _.animType = 'msTransform';
            _.transformType = '-ms-transform';
            _.transitionType = 'msTransition';
            if (bodyStyle.msTransform === undefined) _.animType = false;
        }
        if (bodyStyle.transform !== undefined && _.animType !== false) {
            _.animType = 'transform';
            _.transformType = 'transform';
            _.transitionType = 'transition';
        }
        _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);
    };


    Slick.prototype.setSlideClasses = function(index) {

        var _ = this,
            centerOffset, allSlides, indexOffset, remainder;

        allSlides = _.$slider
            .find('.slick-slide')
            .removeClass('slick-active slick-center slick-current')
            .attr('aria-hidden', 'true');

        _.$slides
            .eq(index)
            .addClass('slick-current');

        if (_.options.centerMode === true) {

            var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0;

            centerOffset = Math.floor(_.options.slidesToShow / 2);

            if (_.options.infinite === true) {

                if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {
                    _.$slides
                        .slice(index - centerOffset + evenCoef, index + centerOffset + 1)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    indexOffset = _.options.slidesToShow + index;
                    allSlides
                        .slice(indexOffset - centerOffset + 1 + evenCoef, indexOffset + centerOffset + 2)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

                if (index === 0) {

                    allSlides
                        .eq(allSlides.length - 1 - _.options.slidesToShow)
                        .addClass('slick-center');

                } else if (index === _.slideCount - 1) {

                    allSlides
                        .eq(_.options.slidesToShow)
                        .addClass('slick-center');

                }

            }

            _.$slides
                .eq(index)
                .addClass('slick-center');

        } else {

            if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {

                _.$slides
                    .slice(index, index + _.options.slidesToShow)
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else if (allSlides.length <= _.options.slidesToShow) {

                allSlides
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else {

                remainder = _.slideCount % _.options.slidesToShow;
                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

                if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {

                    allSlides
                        .slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    allSlides
                        .slice(indexOffset, indexOffset + _.options.slidesToShow)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

            }

        }

        if (_.options.lazyLoad === 'ondemand' || _.options.lazyLoad === 'anticipated') {
            _.lazyLoad();
        }
    };

    Slick.prototype.setupInfinite = function() {

        var _ = this,
            i, slideIndex, infiniteCount;

        if (_.options.fade === true) {
            _.options.centerMode = false;
        }

        if (_.options.infinite === true && _.options.fade === false) {

            slideIndex = null;

            if (_.slideCount > _.options.slidesToShow) {

                if (_.options.centerMode === true) {
                    infiniteCount = _.options.slidesToShow + 1;
                } else {
                    infiniteCount = _.options.slidesToShow;
                }

                for (i = _.slideCount; i > (_.slideCount -
                        infiniteCount); i -= 1) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex - _.slideCount)
                        .prependTo(_.$slideTrack).addClass('slick-cloned');
                }
                for (i = 0; i < infiniteCount  + _.slideCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex + _.slideCount)
                        .appendTo(_.$slideTrack).addClass('slick-cloned');
                }
                _.$slideTrack.find('.slick-cloned').find('[id]').each(function() {
                    $(this).attr('id', '');
                });

            }

        }

    };

    Slick.prototype.interrupt = function( toggle ) {

        var _ = this;

        if( !toggle ) {
            _.autoPlay();
        }
        _.interrupted = toggle;

    };

    Slick.prototype.selectHandler = function(event) {

        var _ = this;

        var targetElement =
            $(event.target).is('.slick-slide') ?
                $(event.target) :
                $(event.target).parents('.slick-slide');

        var index = parseInt(targetElement.attr('data-slick-index'));

        if (!index) index = 0;

        if (_.slideCount <= _.options.slidesToShow) {

            _.slideHandler(index, false, true);
            return;

        }

        _.slideHandler(index);

    };

    Slick.prototype.slideHandler = function(index, sync, dontAnimate) {

        var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
            _ = this, navTarget;

        sync = sync || false;

        if (_.animating === true && _.options.waitForAnimate === true) {
            return;
        }

        if (_.options.fade === true && _.currentSlide === index) {
            return;
        }

        if (sync === false) {
            _.asNavFor(index);
        }

        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);

        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        }

        if ( _.options.autoplay ) {
            clearInterval(_.autoPlayTimer);
        }

        if (targetSlide < 0) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
            } else {
                animSlide = _.slideCount + targetSlide;
            }
        } else if (targetSlide >= _.slideCount) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = 0;
            } else {
                animSlide = targetSlide - _.slideCount;
            }
        } else {
            animSlide = targetSlide;
        }

        _.animating = true;

        _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;

        _.setSlideClasses(_.currentSlide);

        if ( _.options.asNavFor ) {

            navTarget = _.getNavTarget();
            navTarget = navTarget.slick('getSlick');

            if ( navTarget.slideCount <= navTarget.options.slidesToShow ) {
                navTarget.setSlideClasses(_.currentSlide);
            }

        }

        _.updateDots();
        _.updateArrows();

        if (_.options.fade === true) {
            if (dontAnimate !== true) {

                _.fadeSlideOut(oldSlide);

                _.fadeSlide(animSlide, function() {
                    _.postSlide(animSlide);
                });

            } else {
                _.postSlide(animSlide);
            }
            _.animateHeight();
            return;
        }

        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
            _.animateSlide(targetLeft, function() {
                _.postSlide(animSlide);
            });
        } else {
            _.postSlide(animSlide);
        }

    };

    Slick.prototype.startLoad = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.hide();
            _.$nextArrow.hide();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.hide();

        }

        _.$slider.addClass('slick-loading');

    };

    Slick.prototype.swipeDirection = function() {

        var xDist, yDist, r, swipeAngle, _ = this;

        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);

        swipeAngle = Math.round(r * 180 / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }

        if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
            return (_.options.rtl === false ? 'right' : 'left');
        }
        if (_.options.verticalSwiping === true) {
            if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
                return 'down';
            } else {
                return 'up';
            }
        }

        return 'vertical';

    };

    Slick.prototype.swipeEnd = function(event) {

        var _ = this,
            slideCount,
            direction;

        _.dragging = false;
        _.swiping = false;

        if (_.scrolling) {
            _.scrolling = false;
            return false;
        }

        _.interrupted = false;
        _.shouldClick = ( _.touchObject.swipeLength > 10 ) ? false : true;

        if ( _.touchObject.curX === undefined ) {
            return false;
        }

        if ( _.touchObject.edgeHit === true ) {
            _.$slider.trigger('edge', [_, _.swipeDirection() ]);
        }

        if ( _.touchObject.swipeLength >= _.touchObject.minSwipe ) {

            direction = _.swipeDirection();

            switch ( direction ) {

                case 'left':
                case 'down':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide + _.getSlideCount() ) :
                            _.currentSlide + _.getSlideCount();

                    _.currentDirection = 0;

                    break;

                case 'right':
                case 'up':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide - _.getSlideCount() ) :
                            _.currentSlide - _.getSlideCount();

                    _.currentDirection = 1;

                    break;

                default:


            }

            if( direction != 'vertical' ) {

                _.slideHandler( slideCount );
                _.touchObject = {};
                _.$slider.trigger('swipe', [_, direction ]);

            }

        } else {

            if ( _.touchObject.startX !== _.touchObject.curX ) {

                _.slideHandler( _.currentSlide );
                _.touchObject = {};

            }

        }

    };

    Slick.prototype.swipeHandler = function(event) {

        var _ = this;

        if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
            return;
        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
            return;
        }

        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?
            event.originalEvent.touches.length : 1;

        _.touchObject.minSwipe = _.listWidth / _.options
            .touchThreshold;

        if (_.options.verticalSwiping === true) {
            _.touchObject.minSwipe = _.listHeight / _.options
                .touchThreshold;
        }

        switch (event.data.action) {

            case 'start':
                _.swipeStart(event);
                break;

            case 'move':
                _.swipeMove(event);
                break;

            case 'end':
                _.swipeEnd(event);
                break;

        }

    };

    Slick.prototype.swipeMove = function(event) {

        var _ = this,
            edgeWasHit = false,
            curLeft, swipeDirection, swipeLength, positionOffset, touches, verticalSwipeLength;

        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

        if (!_.dragging || _.scrolling || touches && touches.length !== 1) {
            return false;
        }

        curLeft = _.getLeft(_.currentSlide);

        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;

        _.touchObject.swipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));

        verticalSwipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));

        if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) {
            _.scrolling = true;
            return false;
        }

        if (_.options.verticalSwiping === true) {
            _.touchObject.swipeLength = verticalSwipeLength;
        }

        swipeDirection = _.swipeDirection();

        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
            _.swiping = true;
            event.preventDefault();
        }

        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
        if (_.options.verticalSwiping === true) {
            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
        }


        swipeLength = _.touchObject.swipeLength;

        _.touchObject.edgeHit = false;

        if (_.options.infinite === false) {
            if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = true;
            }
        }

        if (_.options.vertical === false) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        } else {
            _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
        }
        if (_.options.verticalSwiping === true) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        }

        if (_.options.fade === true || _.options.touchMove === false) {
            return false;
        }

        if (_.animating === true) {
            _.swipeLeft = null;
            return false;
        }

        _.setCSS(_.swipeLeft);

    };

    Slick.prototype.swipeStart = function(event) {

        var _ = this,
            touches;

        _.interrupted = true;

        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
            _.touchObject = {};
            return false;
        }

        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
            touches = event.originalEvent.touches[0];
        }

        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;

        _.dragging = true;

    };

    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {

        var _ = this;

        if (_.$slidesCache !== null) {

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.unload = function() {

        var _ = this;

        $('.slick-cloned', _.$slider).remove();

        if (_.$dots) {
            _.$dots.remove();
        }

        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
            _.$prevArrow.remove();
        }

        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
            _.$nextArrow.remove();
        }

        _.$slides
            .removeClass('slick-slide slick-active slick-visible slick-current')
            .attr('aria-hidden', 'true')
            .css('width', '');

    };

    Slick.prototype.unslick = function(fromBreakpoint) {

        var _ = this;
        _.$slider.trigger('unslick', [_, fromBreakpoint]);
        _.destroy();

    };

    Slick.prototype.updateArrows = function() {

        var _ = this,
            centerOffset;

        centerOffset = Math.floor(_.options.slidesToShow / 2);

        if ( _.options.arrows === true &&
            _.slideCount > _.options.slidesToShow &&
            !_.options.infinite ) {

            _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            if (_.currentSlide === 0) {

                _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            }

        }

    };

    Slick.prototype.updateDots = function() {

        var _ = this;

        if (_.$dots !== null) {

            _.$dots
                .find('li')
                    .removeClass('slick-active')
                    .end();

            _.$dots
                .find('li')
                .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
                .addClass('slick-active');

        }

    };

    Slick.prototype.visibility = function() {

        var _ = this;

        if ( _.options.autoplay ) {

            if ( document[_.hidden] ) {

                _.interrupted = true;

            } else {

                _.interrupted = false;

            }

        }

    };

    $.fn.slick = function() {
        var _ = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = _.length,
            i,
            ret;
        for (i = 0; i < l; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined')
                _[i].slick = new Slick(_[i], opt);
            else
                ret = _[i].slick[opt].apply(_[i].slick, args);
            if (typeof ret != 'undefined') return ret;
        }
        return _;
    };

}));

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
                if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// playground: stackblitz.com/edit/countup-typescript
var CountUp = /** @class */ (function () {
    function CountUp(target, endVal, options) {
        var _this = this;
        this.target = target;
        this.endVal = endVal;
        this.options = options;
        this.version = '2.0.4';
        this.defaults = {
            startVal: 0,
            decimalPlaces: 0,
            duration: 2,
            useEasing: true,
            useGrouping: true,
            smartEasingThreshold: 999,
            smartEasingAmount: 333,
            separator: ',',
            decimal: '.',
            prefix: '',
            suffix: ''
        };
        this.finalEndVal = null; // for smart easing
        this.useEasing = true;
        this.countDown = false;
        this.error = '';
        this.startVal = 0;
        this.paused = true;
        this.count = function (timestamp) {
            if (!_this.startTime) {
                _this.startTime = timestamp;
            }
            var progress = timestamp - _this.startTime;
            _this.remaining = _this.duration - progress;
            // to ease or not to ease
            if (_this.useEasing) {
                if (_this.countDown) {
                    _this.frameVal = _this.startVal - _this.easingFn(progress, 0, _this.startVal - _this.endVal, _this.duration);
                } else {
                    _this.frameVal = _this.easingFn(progress, _this.startVal, _this.endVal - _this.startVal, _this.duration);
                }
            } else {
                if (_this.countDown) {
                    _this.frameVal = _this.startVal - ((_this.startVal - _this.endVal) * (progress / _this.duration));
                } else {
                    _this.frameVal = _this.startVal + (_this.endVal - _this.startVal) * (progress / _this.duration);
                }
            }
            // don't go past endVal since progress can exceed duration in the last frame
            if (_this.countDown) {
                _this.frameVal = (_this.frameVal < _this.endVal) ? _this.endVal : _this.frameVal;
            } else {
                _this.frameVal = (_this.frameVal > _this.endVal) ? _this.endVal : _this.frameVal;
            }
            // decimal
            _this.frameVal = Math.round(_this.frameVal * _this.decimalMult) / _this.decimalMult;
            // format and print value
            _this.printValue(_this.frameVal);
            // whether to continue
            if (progress < _this.duration) {
                _this.rAF = requestAnimationFrame(_this.count);
            } else if (_this.finalEndVal !== null) {
                // smart easing
                _this.update(_this.finalEndVal);
            } else {
                if (_this.callback) {
                    _this.callback();
                }
            }
        };
        // default format and easing functions
        this.formatNumber = function (num) {
            var neg = (num < 0) ? '-' : '';
            var result, x, x1, x2, x3;
            result = Math.abs(num).toFixed(_this.options.decimalPlaces);
            result += '';
            x = result.split('.');
            x1 = x[0];
            x2 = x.length > 1 ? _this.options.decimal + x[1] : '';
            if (_this.options.useGrouping) {
                x3 = '';
                for (var i = 0, len = x1.length; i < len; ++i) {
                    if (i !== 0 && (i % 3) === 0) {
                        x3 = _this.options.separator + x3;
                    }
                    x3 = x1[len - i - 1] + x3;
                }
                x1 = x3;
            }
            // optional numeral substitution
            if (_this.options.numerals && _this.options.numerals.length) {
                x1 = x1.replace(/[0-9]/g, function (w) {
                    return _this.options.numerals[+w];
                });
                x2 = x2.replace(/[0-9]/g, function (w) {
                    return _this.options.numerals[+w];
                });
            }
            return neg + _this.options.prefix + x1 + x2 + _this.options.suffix;
        };
        this.easeOutExpo = function (t, b, c, d) {
            return c * (-Math.pow(2, -10 * t / d) + 1) * 1024 / 1023 + b;
        };
        this.options = __assign({}, this.defaults, options);
        this.formattingFn = (this.options.formattingFn) ?
            this.options.formattingFn : this.formatNumber;
        this.easingFn = (this.options.easingFn) ?
            this.options.easingFn : this.easeOutExpo;
        this.startVal = this.validateValue(this.options.startVal);
        this.frameVal = this.startVal;
        this.endVal = this.validateValue(endVal);
        this.options.decimalPlaces = Math.max(0 || this.options.decimalPlaces);
        this.decimalMult = Math.pow(10, this.options.decimalPlaces);
        this.resetDuration();
        this.options.separator = String(this.options.separator);
        this.useEasing = this.options.useEasing;
        if (this.options.separator === '') {
            this.options.useGrouping = false;
        }
        this.el = (typeof target === 'string') ? document.getElementById(target) : target;
        if (this.el) {
            this.printValue(this.startVal);
        } else {
            this.error = '[CountUp] target is null or undefined';
        }
    }
    // determines where easing starts and whether to count down or up
    CountUp.prototype.determineDirectionAndSmartEasing = function () {
        var end = (this.finalEndVal) ? this.finalEndVal : this.endVal;
        this.countDown = (this.startVal > end);
        var animateAmount = end - this.startVal;
        if (Math.abs(animateAmount) > this.options.smartEasingThreshold) {
            this.finalEndVal = end;
            var up = (this.countDown) ? 1 : -1;
            this.endVal = end + (up * this.options.smartEasingAmount);
            this.duration = this.duration / 2;
        } else {
            this.endVal = end;
            this.finalEndVal = null;
        }
        if (this.finalEndVal) {
            this.useEasing = false;
        } else {
            this.useEasing = this.options.useEasing;
        }
    };
    // start animation
    CountUp.prototype.start = function (callback) {
        if (this.error) {
            return;
        }
        this.callback = callback;
        if (this.duration > 0) {
            this.determineDirectionAndSmartEasing();
            this.paused = false;
            this.rAF = requestAnimationFrame(this.count);
        } else {
            this.printValue(this.endVal);
        }
    };
    // pause/resume animation
    CountUp.prototype.pauseResume = function () {
        if (!this.paused) {
            cancelAnimationFrame(this.rAF);
        } else {
            this.startTime = null;
            this.duration = this.remaining;
            this.startVal = this.frameVal;
            this.determineDirectionAndSmartEasing();
            this.rAF = requestAnimationFrame(this.count);
        }
        this.paused = !this.paused;
    };
    // reset to startVal so animation can be run again
    CountUp.prototype.reset = function () {
        cancelAnimationFrame(this.rAF);
        this.paused = true;
        this.resetDuration();
        this.startVal = this.validateValue(this.options.startVal);
        this.frameVal = this.startVal;
        this.printValue(this.startVal);
    };
    // pass a new endVal and start animation
    CountUp.prototype.update = function (newEndVal) {
        cancelAnimationFrame(this.rAF);
        this.startTime = null;
        this.endVal = this.validateValue(newEndVal);
        if (this.endVal === this.frameVal) {
            return;
        }
        this.startVal = this.frameVal;
        if (!this.finalEndVal) {
            this.resetDuration();
        }
        this.determineDirectionAndSmartEasing();
        this.rAF = requestAnimationFrame(this.count);
    };
    CountUp.prototype.printValue = function (val) {
        var result = this.formattingFn(val);
        if (this.el.tagName === 'INPUT') {
            var input = this.el;
            input.value = result;
        } else if (this.el.tagName === 'text' || this.el.tagName === 'tspan') {
            this.el.textContent = result;
        } else {
            this.el.innerHTML = result;
        }
    };
    CountUp.prototype.ensureNumber = function (n) {
        return (typeof n === 'number' && !isNaN(n));
    };
    CountUp.prototype.validateValue = function (value) {
        var newValue = Number(value);
        if (!this.ensureNumber(newValue)) {
            this.error = "[CountUp] invalid start or end value: " + value;
            return null;
        } else {
            return newValue;
        }
    };
    CountUp.prototype.resetDuration = function () {
        this.startTime = null;
        this.duration = Number(this.options.duration) * 1000;
        this.remaining = this.duration;
    };
    return CountUp;
}());
/*! jQuery Validation Plugin - v1.19.0 - 11/28/2018
 * https://jqueryvalidation.org/
 * Copyright (c) 2018 Jörn Zaefferer; Licensed MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof module&&module.exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){a.extend(a.fn,{validate:function(b){if(!this.length)return void(b&&b.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."));var c=a.data(this[0],"validator");return c?c:(this.attr("novalidate","novalidate"),c=new a.validator(b,this[0]),a.data(this[0],"validator",c),c.settings.onsubmit&&(this.on("click.validate",":submit",function(b){c.submitButton=b.currentTarget,a(this).hasClass("cancel")&&(c.cancelSubmit=!0),void 0!==a(this).attr("formnovalidate")&&(c.cancelSubmit=!0)}),this.on("submit.validate",function(b){function d(){var d,e;return c.submitButton&&(c.settings.submitHandler||c.formSubmitted)&&(d=a("<input type='hidden'/>").attr("name",c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)),!(c.settings.submitHandler&&!c.settings.debug)||(e=c.settings.submitHandler.call(c,c.currentForm,b),d&&d.remove(),void 0!==e&&e)}return c.settings.debug&&b.preventDefault(),c.cancelSubmit?(c.cancelSubmit=!1,d()):c.form()?c.pendingRequest?(c.formSubmitted=!0,!1):d():(c.focusInvalid(),!1)})),c)},valid:function(){var b,c,d;return a(this[0]).is("form")?b=this.validate().form():(d=[],b=!0,c=a(this[0].form).validate(),this.each(function(){b=c.element(this)&&b,b||(d=d.concat(c.errorList))}),c.errorList=d),b},rules:function(b,c){var d,e,f,g,h,i,j=this[0],k="undefined"!=typeof this.attr("contenteditable")&&"false"!==this.attr("contenteditable");if(null!=j&&(!j.form&&k&&(j.form=this.closest("form")[0],j.name=this.attr("name")),null!=j.form)){if(b)switch(d=a.data(j.form,"validator").settings,e=d.rules,f=a.validator.staticRules(j),b){case"add":a.extend(f,a.validator.normalizeRule(c)),delete f.messages,e[j.name]=f,c.messages&&(d.messages[j.name]=a.extend(d.messages[j.name],c.messages));break;case"remove":return c?(i={},a.each(c.split(/\s/),function(a,b){i[b]=f[b],delete f[b]}),i):(delete e[j.name],f)}return g=a.validator.normalizeRules(a.extend({},a.validator.classRules(j),a.validator.attributeRules(j),a.validator.dataRules(j),a.validator.staticRules(j)),j),g.required&&(h=g.required,delete g.required,g=a.extend({required:h},g)),g.remote&&(h=g.remote,delete g.remote,g=a.extend(g,{remote:h})),g}}}),a.extend(a.expr.pseudos||a.expr[":"],{blank:function(b){return!a.trim(""+a(b).val())},filled:function(b){var c=a(b).val();return null!==c&&!!a.trim(""+c)},unchecked:function(b){return!a(b).prop("checked")}}),a.validator=function(b,c){this.settings=a.extend(!0,{},a.validator.defaults,b),this.currentForm=c,this.init()},a.validator.format=function(b,c){return 1===arguments.length?function(){var c=a.makeArray(arguments);return c.unshift(b),a.validator.format.apply(this,c)}:void 0===c?b:(arguments.length>2&&c.constructor!==Array&&(c=a.makeArray(arguments).slice(1)),c.constructor!==Array&&(c=[c]),a.each(c,function(a,c){b=b.replace(new RegExp("\\{"+a+"\\}","g"),function(){return c})}),b)},a.extend(a.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",pendingClass:"pending",validClass:"valid",errorElement:"label",focusCleanup:!1,focusInvalid:!0,errorContainer:a([]),errorLabelContainer:a([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(a){this.lastActive=a,this.settings.focusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass),this.hideThese(this.errorsFor(a)))},onfocusout:function(a){this.checkable(a)||!(a.name in this.submitted)&&this.optional(a)||this.element(a)},onkeyup:function(b,c){var d=[16,17,18,20,35,36,37,38,39,40,45,144,225];9===c.which&&""===this.elementValue(b)||a.inArray(c.keyCode,d)!==-1||(b.name in this.submitted||b.name in this.invalid)&&this.element(b)},onclick:function(a){a.name in this.submitted?this.element(a):a.parentNode.name in this.submitted&&this.element(a.parentNode)},highlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).addClass(c).removeClass(d):a(b).addClass(c).removeClass(d)},unhighlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).removeClass(c).addClass(d):a(b).removeClass(c).addClass(d)}},setDefaults:function(b){a.extend(a.validator.defaults,b)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",equalTo:"Please enter the same value again.",maxlength:a.validator.format("Please enter no more than {0} characters."),minlength:a.validator.format("Please enter at least {0} characters."),rangelength:a.validator.format("Please enter a value between {0} and {1} characters long."),range:a.validator.format("Please enter a value between {0} and {1}."),max:a.validator.format("Please enter a value less than or equal to {0}."),min:a.validator.format("Please enter a value greater than or equal to {0}."),step:a.validator.format("Please enter a multiple of {0}.")},autoCreateRanges:!1,prototype:{init:function(){function b(b){var c="undefined"!=typeof a(this).attr("contenteditable")&&"false"!==a(this).attr("contenteditable");if(!this.form&&c&&(this.form=a(this).closest("form")[0],this.name=a(this).attr("name")),d===this.form){var e=a.data(this.form,"validator"),f="on"+b.type.replace(/^validate/,""),g=e.settings;g[f]&&!a(this).is(g.ignore)&&g[f].call(e,this,b)}}this.labelContainer=a(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||a(this.currentForm),this.containers=a(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var c,d=this.currentForm,e=this.groups={};a.each(this.settings.groups,function(b,c){"string"==typeof c&&(c=c.split(/\s/)),a.each(c,function(a,c){e[c]=b})}),c=this.settings.rules,a.each(c,function(b,d){c[b]=a.validator.normalizeRule(d)}),a(this.currentForm).on("focusin.validate focusout.validate keyup.validate",":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']",b).on("click.validate","select, option, [type='radio'], [type='checkbox']",b),this.settings.invalidHandler&&a(this.currentForm).on("invalid-form.validate",this.settings.invalidHandler)},form:function(){return this.checkForm(),a.extend(this.submitted,this.errorMap),this.invalid=a.extend({},this.errorMap),this.valid()||a(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var a=0,b=this.currentElements=this.elements();b[a];a++)this.check(b[a]);return this.valid()},element:function(b){var c,d,e=this.clean(b),f=this.validationTargetFor(e),g=this,h=!0;return void 0===f?delete this.invalid[e.name]:(this.prepareElement(f),this.currentElements=a(f),d=this.groups[f.name],d&&a.each(this.groups,function(a,b){b===d&&a!==f.name&&(e=g.validationTargetFor(g.clean(g.findByName(a))),e&&e.name in g.invalid&&(g.currentElements.push(e),h=g.check(e)&&h))}),c=this.check(f)!==!1,h=h&&c,c?this.invalid[f.name]=!1:this.invalid[f.name]=!0,this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),a(b).attr("aria-invalid",!c)),h},showErrors:function(b){if(b){var c=this;a.extend(this.errorMap,b),this.errorList=a.map(this.errorMap,function(a,b){return{message:a,element:c.findByName(b)[0]}}),this.successList=a.grep(this.successList,function(a){return!(a.name in b)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){a.fn.resetForm&&a(this.currentForm).resetForm(),this.invalid={},this.submitted={},this.prepareForm(),this.hideErrors();var b=this.elements().removeData("previousValue").removeAttr("aria-invalid");this.resetElements(b)},resetElements:function(a){var b;if(this.settings.unhighlight)for(b=0;a[b];b++)this.settings.unhighlight.call(this,a[b],this.settings.errorClass,""),this.findByName(a[b].name).removeClass(this.settings.validClass);else a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(a){var b,c=0;for(b in a)void 0!==a[b]&&null!==a[b]&&a[b]!==!1&&c++;return c},hideErrors:function(){this.hideThese(this.toHide)},hideThese:function(a){a.not(this.containers).text(""),this.addWrapper(a).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{a(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(b){}},findLastActive:function(){var b=this.lastActive;return b&&1===a.grep(this.errorList,function(a){return a.element.name===b.name}).length&&b},elements:function(){var b=this,c={};return a(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function(){var d=this.name||a(this).attr("name"),e="undefined"!=typeof a(this).attr("contenteditable")&&"false"!==a(this).attr("contenteditable");return!d&&b.settings.debug&&window.console&&console.error("%o has no name assigned",this),e&&(this.form=a(this).closest("form")[0],this.name=d),this.form===b.currentForm&&(!(d in c||!b.objectLength(a(this).rules()))&&(c[d]=!0,!0))})},clean:function(b){return a(b)[0]},errors:function(){var b=this.settings.errorClass.split(" ").join(".");return a(this.settings.errorElement+"."+b,this.errorContext)},resetInternals:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=a([]),this.toHide=a([])},reset:function(){this.resetInternals(),this.currentElements=a([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(a){this.reset(),this.toHide=this.errorsFor(a)},elementValue:function(b){var c,d,e=a(b),f=b.type,g="undefined"!=typeof e.attr("contenteditable")&&"false"!==e.attr("contenteditable");return"radio"===f||"checkbox"===f?this.findByName(b.name).filter(":checked").val():"number"===f&&"undefined"!=typeof b.validity?b.validity.badInput?"NaN":e.val():(c=g?e.text():e.val(),"file"===f?"C:\\fakepath\\"===c.substr(0,12)?c.substr(12):(d=c.lastIndexOf("/"),d>=0?c.substr(d+1):(d=c.lastIndexOf("\\"),d>=0?c.substr(d+1):c)):"string"==typeof c?c.replace(/\r/g,""):c)},check:function(b){b=this.validationTargetFor(this.clean(b));var c,d,e,f,g=a(b).rules(),h=a.map(g,function(a,b){return b}).length,i=!1,j=this.elementValue(b);"function"==typeof g.normalizer?f=g.normalizer:"function"==typeof this.settings.normalizer&&(f=this.settings.normalizer),f&&(j=f.call(b,j),delete g.normalizer);for(d in g){e={method:d,parameters:g[d]};try{if(c=a.validator.methods[d].call(this,j,b,e.parameters),"dependency-mismatch"===c&&1===h){i=!0;continue}if(i=!1,"pending"===c)return void(this.toHide=this.toHide.not(this.errorsFor(b)));if(!c)return this.formatAndAdd(b,e),!1}catch(k){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+b.id+", check the '"+e.method+"' method.",k),k instanceof TypeError&&(k.message+=".  Exception occurred when checking element "+b.id+", check the '"+e.method+"' method."),k}}if(!i)return this.objectLength(g)&&this.successList.push(b),!0},customDataMessage:function(b,c){return a(b).data("msg"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase())||a(b).data("msg")},customMessage:function(a,b){var c=this.settings.messages[a];return c&&(c.constructor===String?c:c[b])},findDefined:function(){for(var a=0;a<arguments.length;a++)if(void 0!==arguments[a])return arguments[a]},defaultMessage:function(b,c){"string"==typeof c&&(c={method:c});var d=this.findDefined(this.customMessage(b.name,c.method),this.customDataMessage(b,c.method),!this.settings.ignoreTitle&&b.title||void 0,a.validator.messages[c.method],"<strong>Warning: No message defined for "+b.name+"</strong>"),e=/\$?\{(\d+)\}/g;return"function"==typeof d?d=d.call(this,c.parameters,b):e.test(d)&&(d=a.validator.format(d.replace(e,"{$1}"),c.parameters)),d},formatAndAdd:function(a,b){var c=this.defaultMessage(a,b);this.errorList.push({message:c,element:a,method:b.method}),this.errorMap[a.name]=c,this.submitted[a.name]=c},addWrapper:function(a){return this.settings.wrapper&&(a=a.add(a.parent(this.settings.wrapper))),a},defaultShowErrors:function(){var a,b,c;for(a=0;this.errorList[a];a++)c=this.errorList[a],this.settings.highlight&&this.settings.highlight.call(this,c.element,this.settings.errorClass,this.settings.validClass),this.showLabel(c.element,c.message);if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(a=0;this.successList[a];a++)this.showLabel(this.successList[a]);if(this.settings.unhighlight)for(a=0,b=this.validElements();b[a];a++)this.settings.unhighlight.call(this,b[a],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return a(this.errorList).map(function(){return this.element})},showLabel:function(b,c){var d,e,f,g,h=this.errorsFor(b),i=this.idOrName(b),j=a(b).attr("aria-describedby");h.length?(h.removeClass(this.settings.validClass).addClass(this.settings.errorClass),h.html(c)):(h=a("<"+this.settings.errorElement+">").attr("id",i+"-error").addClass(this.settings.errorClass).html(c||""),d=h,this.settings.wrapper&&(d=h.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.length?this.labelContainer.append(d):this.settings.errorPlacement?this.settings.errorPlacement.call(this,d,a(b)):d.insertAfter(b),h.is("label")?h.attr("for",i):0===h.parents("label[for='"+this.escapeCssMeta(i)+"']").length&&(f=h.attr("id"),j?j.match(new RegExp("\\b"+this.escapeCssMeta(f)+"\\b"))||(j+=" "+f):j=f,a(b).attr("aria-describedby",j),e=this.groups[b.name],e&&(g=this,a.each(g.groups,function(b,c){c===e&&a("[name='"+g.escapeCssMeta(b)+"']",g.currentForm).attr("aria-describedby",h.attr("id"))})))),!c&&this.settings.success&&(h.text(""),"string"==typeof this.settings.success?h.addClass(this.settings.success):this.settings.success(h,b)),this.toShow=this.toShow.add(h)},errorsFor:function(b){var c=this.escapeCssMeta(this.idOrName(b)),d=a(b).attr("aria-describedby"),e="label[for='"+c+"'], label[for='"+c+"'] *";return d&&(e=e+", #"+this.escapeCssMeta(d).replace(/\s+/g,", #")),this.errors().filter(e)},escapeCssMeta:function(a){return a.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g,"\\$1")},idOrName:function(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)},validationTargetFor:function(b){return this.checkable(b)&&(b=this.findByName(b.name)),a(b).not(this.settings.ignore)[0]},checkable:function(a){return/radio|checkbox/i.test(a.type)},findByName:function(b){return a(this.currentForm).find("[name='"+this.escapeCssMeta(b)+"']")},getLength:function(b,c){switch(c.nodeName.toLowerCase()){case"select":return a("option:selected",c).length;case"input":if(this.checkable(c))return this.findByName(c.name).filter(":checked").length}return b.length},depend:function(a,b){return!this.dependTypes[typeof a]||this.dependTypes[typeof a](a,b)},dependTypes:{"boolean":function(a){return a},string:function(b,c){return!!a(b,c.form).length},"function":function(a,b){return a(b)}},optional:function(b){var c=this.elementValue(b);return!a.validator.methods.required.call(this,c,b)&&"dependency-mismatch"},startRequest:function(b){this.pending[b.name]||(this.pendingRequest++,a(b).addClass(this.settings.pendingClass),this.pending[b.name]=!0)},stopRequest:function(b,c){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[b.name],a(b).removeClass(this.settings.pendingClass),c&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(a(this.currentForm).submit(),this.submitButton&&a("input:hidden[name='"+this.submitButton.name+"']",this.currentForm).remove(),this.formSubmitted=!1):!c&&0===this.pendingRequest&&this.formSubmitted&&(a(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(b,c){return c="string"==typeof c&&c||"remote",a.data(b,"previousValue")||a.data(b,"previousValue",{old:null,valid:!0,message:this.defaultMessage(b,{method:c})})},destroy:function(){this.resetForm(),a(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur").find(".validate-lessThan-blur").off(".validate-lessThan").removeClass("validate-lessThan-blur").find(".validate-lessThanEqual-blur").off(".validate-lessThanEqual").removeClass("validate-lessThanEqual-blur").find(".validate-greaterThanEqual-blur").off(".validate-greaterThanEqual").removeClass("validate-greaterThanEqual-blur").find(".validate-greaterThan-blur").off(".validate-greaterThan").removeClass("validate-greaterThan-blur")}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(b,c){b.constructor===String?this.classRuleSettings[b]=c:a.extend(this.classRuleSettings,b)},classRules:function(b){var c={},d=a(b).attr("class");return d&&a.each(d.split(" "),function(){this in a.validator.classRuleSettings&&a.extend(c,a.validator.classRuleSettings[this])}),c},normalizeAttributeRule:function(a,b,c,d){/min|max|step/.test(c)&&(null===b||/number|range|text/.test(b))&&(d=Number(d),isNaN(d)&&(d=void 0)),d||0===d?a[c]=d:b===c&&"range"!==b&&(a[c]=!0)},attributeRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)"required"===c?(d=b.getAttribute(c),""===d&&(d=!0),d=!!d):d=f.attr(c),this.normalizeAttributeRule(e,g,c,d);return e.maxlength&&/-1|2147483647|524288/.test(e.maxlength)&&delete e.maxlength,e},dataRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)d=f.data("rule"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase()),""===d&&(d=!0),this.normalizeAttributeRule(e,g,c,d);return e},staticRules:function(b){var c={},d=a.data(b.form,"validator");return d.settings.rules&&(c=a.validator.normalizeRule(d.settings.rules[b.name])||{}),c},normalizeRules:function(b,c){return a.each(b,function(d,e){if(e===!1)return void delete b[d];if(e.param||e.depends){var f=!0;switch(typeof e.depends){case"string":f=!!a(e.depends,c.form).length;break;case"function":f=e.depends.call(c,c)}f?b[d]=void 0===e.param||e.param:(a.data(c.form,"validator").resetElements(a(c)),delete b[d])}}),a.each(b,function(d,e){b[d]=a.isFunction(e)&&"normalizer"!==d?e(c):e}),a.each(["minlength","maxlength"],function(){b[this]&&(b[this]=Number(b[this]))}),a.each(["rangelength","range"],function(){var c;b[this]&&(a.isArray(b[this])?b[this]=[Number(b[this][0]),Number(b[this][1])]:"string"==typeof b[this]&&(c=b[this].replace(/[\[\]]/g,"").split(/[\s,]+/),b[this]=[Number(c[0]),Number(c[1])]))}),a.validator.autoCreateRanges&&(null!=b.min&&null!=b.max&&(b.range=[b.min,b.max],delete b.min,delete b.max),null!=b.minlength&&null!=b.maxlength&&(b.rangelength=[b.minlength,b.maxlength],delete b.minlength,delete b.maxlength)),b},normalizeRule:function(b){if("string"==typeof b){var c={};a.each(b.split(/\s/),function(){c[this]=!0}),b=c}return b},addMethod:function(b,c,d){a.validator.methods[b]=c,a.validator.messages[b]=void 0!==d?d:a.validator.messages[b],c.length<3&&a.validator.addClassRules(b,a.validator.normalizeRule(b))},methods:{required:function(b,c,d){if(!this.depend(d,c))return"dependency-mismatch";if("select"===c.nodeName.toLowerCase()){var e=a(c).val();return e&&e.length>0}return this.checkable(c)?this.getLength(b,c)>0:void 0!==b&&null!==b&&b.length>0},email:function(a,b){return this.optional(b)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)},url:function(a,b){return this.optional(b)||/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(a)},date:function(){var a=!1;return function(b,c){return a||(a=!0,this.settings.debug&&window.console&&console.warn("The `date` method is deprecated and will be removed in version '2.0.0'.\nPlease don't use it, since it relies on the Date constructor, which\nbehaves very differently across browsers and locales. Use `dateISO`\ninstead or one of the locale specific methods in `localizations/`\nand `additional-methods.js`.")),this.optional(c)||!/Invalid|NaN/.test(new Date(b).toString())}}(),dateISO:function(a,b){return this.optional(b)||/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)},number:function(a,b){return this.optional(b)||/^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)},digits:function(a,b){return this.optional(b)||/^\d+$/.test(a)},minlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d},maxlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e<=d},rangelength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d[0]&&e<=d[1]},min:function(a,b,c){return this.optional(b)||a>=c},max:function(a,b,c){return this.optional(b)||a<=c},range:function(a,b,c){return this.optional(b)||a>=c[0]&&a<=c[1]},step:function(b,c,d){var e,f=a(c).attr("type"),g="Step attribute on input type "+f+" is not supported.",h=["text","number","range"],i=new RegExp("\\b"+f+"\\b"),j=f&&!i.test(h.join()),k=function(a){var b=(""+a).match(/(?:\.(\d+))?$/);return b&&b[1]?b[1].length:0},l=function(a){return Math.round(a*Math.pow(10,e))},m=!0;if(j)throw new Error(g);return e=k(d),(k(b)>e||l(b)%l(d)!==0)&&(m=!1),this.optional(c)||m},equalTo:function(b,c,d){var e=a(d);return this.settings.onfocusout&&e.not(".validate-equalTo-blur").length&&e.addClass("validate-equalTo-blur").on("blur.validate-equalTo",function(){a(c).valid()}),b===e.val()},remote:function(b,c,d,e){if(this.optional(c))return"dependency-mismatch";e="string"==typeof e&&e||"remote";var f,g,h,i=this.previousValue(c,e);return this.settings.messages[c.name]||(this.settings.messages[c.name]={}),i.originalMessage=i.originalMessage||this.settings.messages[c.name][e],this.settings.messages[c.name][e]=i.message,d="string"==typeof d&&{url:d}||d,h=a.param(a.extend({data:b},d.data)),i.old===h?i.valid:(i.old=h,f=this,this.startRequest(c),g={},g[c.name]=b,a.ajax(a.extend(!0,{mode:"abort",port:"validate"+c.name,dataType:"json",data:g,context:f.currentForm,success:function(a){var d,g,h,j=a===!0||"true"===a;f.settings.messages[c.name][e]=i.originalMessage,j?(h=f.formSubmitted,f.resetInternals(),f.toHide=f.errorsFor(c),f.formSubmitted=h,f.successList.push(c),f.invalid[c.name]=!1,f.showErrors()):(d={},g=a||f.defaultMessage(c,{method:e,parameters:b}),d[c.name]=i.message=g,f.invalid[c.name]=!0,f.showErrors(d)),i.valid=j,f.stopRequest(c,j)}},d)),"pending")}}});var b,c={};return a.ajaxPrefilter?a.ajaxPrefilter(function(a,b,d){var e=a.port;"abort"===a.mode&&(c[e]&&c[e].abort(),c[e]=d)}):(b=a.ajax,a.ajax=function(d){var e=("mode"in d?d:a.ajaxSettings).mode,f=("port"in d?d:a.ajaxSettings).port;return"abort"===e?(c[f]&&c[f].abort(),c[f]=b.apply(this,arguments),c[f]):b.apply(this,arguments)}),a});
/*!
 * Flickity PACKAGED v2.2.2
 * Touch, responsive, flickable carousels
 *
 * Licensed GPLv3 for open source use
 * or Flickity Commercial License for commercial use
 *
 * https://flickity.metafizzy.co
 * Copyright 2015-2021 Metafizzy
 */
(function (e, i) {
	if (typeof define == "function" && define.amd) {
		define("jquery-bridget/jquery-bridget", ["jquery"], function (t) {
			return i(e, t);
		});
	} else if (typeof module == "object" && module.exports) {
		module.exports = i(e, require("jquery"));
	} else {
		e.jQueryBridget = i(e, e.jQuery);
	}
})(window, function t(e, r) {
	"use strict";
	var o = Array.prototype.slice;
	var i = e.console;
	var u =
		typeof i == "undefined"
			? function () {}
			: function (t) {
					i.error(t);
			  };
	function n(h, s, c) {
		c = c || r || e.jQuery;
		if (!c) {
			return;
		}
		if (!s.prototype.option) {
			s.prototype.option = function (t) {
				if (!c.isPlainObject(t)) {
					return;
				}
				this.options = c.extend(true, this.options, t);
			};
		}
		c.fn[h] = function (t) {
			if (typeof t == "string") {
				var e = o.call(arguments, 1);
				return i(this, t, e);
			}
			n(this, t);
			return this;
		};
		function i(t, r, o) {
			var a;
			var l = "$()." + h + '("' + r + '")';
			t.each(function (t, e) {
				var i = c.data(e, h);
				if (!i) {
					u(h + " not initialized. Cannot call methods, i.e. " + l);
					return;
				}
				var n = i[r];
				if (!n || r.charAt(0) == "_") {
					u(l + " is not a valid method");
					return;
				}
				var s = n.apply(i, o);
				a = a === undefined ? s : a;
			});
			return a !== undefined ? a : t;
		}
		function n(t, n) {
			t.each(function (t, e) {
				var i = c.data(e, h);
				if (i) {
					i.option(n);
					i._init();
				} else {
					i = new s(e, n);
					c.data(e, h, i);
				}
			});
		}
		a(c);
	}
	function a(t) {
		if (!t || (t && t.bridget)) {
			return;
		}
		t.bridget = n;
	}
	a(r || e.jQuery);
	return n;
});
(function (t, e) {
	if (typeof define == "function" && define.amd) {
		define("ev-emitter/ev-emitter", e);
	} else if (typeof module == "object" && module.exports) {
		module.exports = e();
	} else {
		t.EvEmitter = e();
	}
})(typeof window != "undefined" ? window : this, function () {
	function t() {}
	var e = t.prototype;
	e.on = function (t, e) {
		if (!t || !e) {
			return;
		}
		var i = (this._events = this._events || {});
		var n = (i[t] = i[t] || []);
		if (n.indexOf(e) == -1) {
			n.push(e);
		}
		return this;
	};
	e.once = function (t, e) {
		if (!t || !e) {
			return;
		}
		this.on(t, e);
		var i = (this._onceEvents = this._onceEvents || {});
		var n = (i[t] = i[t] || {});
		n[e] = true;
		return this;
	};
	e.off = function (t, e) {
		var i = this._events && this._events[t];
		if (!i || !i.length) {
			return;
		}
		var n = i.indexOf(e);
		if (n != -1) {
			i.splice(n, 1);
		}
		return this;
	};
	e.emitEvent = function (t, e) {
		var i = this._events && this._events[t];
		if (!i || !i.length) {
			return;
		}
		i = i.slice(0);
		e = e || [];
		var n = this._onceEvents && this._onceEvents[t];
		for (var s = 0; s < i.length; s++) {
			var r = i[s];
			var o = n && n[r];
			if (o) {
				this.off(t, r);
				delete n[r];
			}
			r.apply(this, e);
		}
		return this;
	};
	e.allOff = function () {
		delete this._events;
		delete this._onceEvents;
	};
	return t;
});
/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 */
(function (t, e) {
	if (typeof define == "function" && define.amd) {
		define("get-size/get-size", e);
	} else if (typeof module == "object" && module.exports) {
		module.exports = e();
	} else {
		t.getSize = e();
	}
})(window, function t() {
	"use strict";
	function m(t) {
		var e = parseFloat(t);
		var i = t.indexOf("%") == -1 && !isNaN(e);
		return i && e;
	}
	function e() {}
	var i =
		typeof console == "undefined"
			? e
			: function (t) {
					console.error(t);
			  };
	var y = [
		"paddingLeft",
		"paddingRight",
		"paddingTop",
		"paddingBottom",
		"marginLeft",
		"marginRight",
		"marginTop",
		"marginBottom",
		"borderLeftWidth",
		"borderRightWidth",
		"borderTopWidth",
		"borderBottomWidth",
	];
	var b = y.length;
	function E() {
		var t = {
			width: 0,
			height: 0,
			innerWidth: 0,
			innerHeight: 0,
			outerWidth: 0,
			outerHeight: 0,
		};
		for (var e = 0; e < b; e++) {
			var i = y[e];
			t[i] = 0;
		}
		return t;
	}
	function S(t) {
		var e = getComputedStyle(t);
		if (!e) {
			i(
				"Style returned " +
					e +
					". Are you running this code in a hidden iframe on Firefox? " +
					"See https://bit.ly/getsizebug1"
			);
		}
		return e;
	}
	var n = false;
	var C;
	function x() {
		if (n) {
			return;
		}
		n = true;
		var t = document.createElement("div");
		t.style.width = "200px";
		t.style.padding = "1px 2px 3px 4px";
		t.style.borderStyle = "solid";
		t.style.borderWidth = "1px 2px 3px 4px";
		t.style.boxSizing = "border-box";
		var e = document.body || document.documentElement;
		e.appendChild(t);
		var i = S(t);
		C = Math.round(m(i.width)) == 200;
		s.isBoxSizeOuter = C;
		e.removeChild(t);
	}
	function s(t) {
		x();
		if (typeof t == "string") {
			t = document.querySelector(t);
		}
		if (!t || typeof t != "object" || !t.nodeType) {
			return;
		}
		var e = S(t);
		if (e.display == "none") {
			return E();
		}
		var i = {};
		i.width = t.offsetWidth;
		i.height = t.offsetHeight;
		var n = (i.isBorderBox = e.boxSizing == "border-box");
		for (var s = 0; s < b; s++) {
			var r = y[s];
			var o = e[r];
			var a = parseFloat(o);
			i[r] = !isNaN(a) ? a : 0;
		}
		var l = i.paddingLeft + i.paddingRight;
		var h = i.paddingTop + i.paddingBottom;
		var c = i.marginLeft + i.marginRight;
		var u = i.marginTop + i.marginBottom;
		var d = i.borderLeftWidth + i.borderRightWidth;
		var f = i.borderTopWidth + i.borderBottomWidth;
		var p = n && C;
		var v = m(e.width);
		if (v !== false) {
			i.width = v + (p ? 0 : l + d);
		}
		var g = m(e.height);
		if (g !== false) {
			i.height = g + (p ? 0 : h + f);
		}
		i.innerWidth = i.width - (l + d);
		i.innerHeight = i.height - (h + f);
		i.outerWidth = i.width + c;
		i.outerHeight = i.height + u;
		return i;
	}
	return s;
});
(function (t, e) {
	"use strict";
	if (typeof define == "function" && define.amd) {
		define("desandro-matches-selector/matches-selector", e);
	} else if (typeof module == "object" && module.exports) {
		module.exports = e();
	} else {
		t.matchesSelector = e();
	}
})(window, function t() {
	"use strict";
	var n = (function () {
		var t = window.Element.prototype;
		if (t.matches) {
			return "matches";
		}
		if (t.matchesSelector) {
			return "matchesSelector";
		}
		var e = ["webkit", "moz", "ms", "o"];
		for (var i = 0; i < e.length; i++) {
			var n = e[i];
			var s = n + "MatchesSelector";
			if (t[s]) {
				return s;
			}
		}
	})();
	return function t(e, i) {
		return e[n](i);
	};
});
(function (e, i) {
	if (typeof define == "function" && define.amd) {
		define("fizzy-ui-utils/utils", [
			"desandro-matches-selector/matches-selector",
		], function (t) {
			return i(e, t);
		});
	} else if (typeof module == "object" && module.exports) {
		module.exports = i(e, require("desandro-matches-selector"));
	} else {
		e.fizzyUIUtils = i(e, e.matchesSelector);
	}
})(window, function t(h, r) {
	var c = {};
	c.extend = function (t, e) {
		for (var i in e) {
			t[i] = e[i];
		}
		return t;
	};
	c.modulo = function (t, e) {
		return ((t % e) + e) % e;
	};
	var i = Array.prototype.slice;
	c.makeArray = function (t) {
		if (Array.isArray(t)) {
			return t;
		}
		if (t === null || t === undefined) {
			return [];
		}
		var e = typeof t == "object" && typeof t.length == "number";
		if (e) {
			return i.call(t);
		}
		return [t];
	};
	c.removeFrom = function (t, e) {
		var i = t.indexOf(e);
		if (i != -1) {
			t.splice(i, 1);
		}
	};
	c.getParent = function (t, e) {
		while (t.parentNode && t != document.body) {
			t = t.parentNode;
			if (r(t, e)) {
				return t;
			}
		}
	};
	c.getQueryElement = function (t) {
		if (typeof t == "string") {
			return document.querySelector(t);
		}
		return t;
	};
	c.handleEvent = function (t) {
		var e = "on" + t.type;
		if (this[e]) {
			this[e](t);
		}
	};
	c.filterFindElements = function (t, n) {
		t = c.makeArray(t);
		var s = [];
		t.forEach(function (t) {
			if (!(t instanceof HTMLElement)) {
				return;
			}
			if (!n) {
				s.push(t);
				return;
			}
			if (r(t, n)) {
				s.push(t);
			}
			var e = t.querySelectorAll(n);
			for (var i = 0; i < e.length; i++) {
				s.push(e[i]);
			}
		});
		return s;
	};
	c.debounceMethod = function (t, e, n) {
		n = n || 100;
		var s = t.prototype[e];
		var r = e + "Timeout";
		t.prototype[e] = function () {
			var t = this[r];
			clearTimeout(t);
			var e = arguments;
			var i = this;
			this[r] = setTimeout(function () {
				s.apply(i, e);
				delete i[r];
			}, n);
		};
	};
	c.docReady = function (t) {
		var e = document.readyState;
		if (e == "complete" || e == "interactive") {
			setTimeout(t);
		} else {
			document.addEventListener("DOMContentLoaded", t);
		}
	};
	c.toDashed = function (t) {
		return t
			.replace(/(.)([A-Z])/g, function (t, e, i) {
				return e + "-" + i;
			})
			.toLowerCase();
	};
	var u = h.console;
	c.htmlInit = function (a, l) {
		c.docReady(function () {
			var t = c.toDashed(l);
			var s = "data-" + t;
			var e = document.querySelectorAll("[" + s + "]");
			var i = document.querySelectorAll(".js-" + t);
			var n = c.makeArray(e).concat(c.makeArray(i));
			var r = s + "-options";
			var o = h.jQuery;
			n.forEach(function (e) {
				var t = e.getAttribute(s) || e.getAttribute(r);
				var i;
				try {
					i = t && JSON.parse(t);
				} catch (t) {
					if (u) {
						u.error(
							"Error parsing " +
								s +
								" on " +
								e.className +
								": " +
								t
						);
					}
					return;
				}
				var n = new a(e, i);
				if (o) {
					o.data(e, l, n);
				}
			});
		});
	};
	return c;
});
(function (e, i) {
	if (typeof define == "function" && define.amd) {
		define("flickity/js/cell", ["get-size/get-size"], function (t) {
			return i(e, t);
		});
	} else if (typeof module == "object" && module.exports) {
		module.exports = i(e, require("get-size"));
	} else {
		e.Flickity = e.Flickity || {};
		e.Flickity.Cell = i(e, e.getSize);
	}
})(window, function t(e, i) {
	function n(t, e) {
		this.element = t;
		this.parent = e;
		this.create();
	}
	var s = n.prototype;
	s.create = function () {
		this.element.style.position = "absolute";
		this.element.setAttribute("aria-hidden", "true");
		this.x = 0;
		this.shift = 0;
	};
	s.destroy = function () {
		this.unselect();
		this.element.style.position = "";
		var t = this.parent.originSide;
		this.element.style[t] = "";
		this.element.removeAttribute("aria-hidden");
	};
	s.getSize = function () {
		this.size = i(this.element);
	};
	s.setPosition = function (t) {
		this.x = t;
		this.updateTarget();
		this.renderPosition(t);
	};
	s.updateTarget = s.setDefaultTarget = function () {
		var t = this.parent.originSide == "left" ? "marginLeft" : "marginRight";
		this.target =
			this.x + this.size[t] + this.size.width * this.parent.cellAlign;
	};
	s.renderPosition = function (t) {
		var e = this.parent.originSide;
		this.element.style[e] = this.parent.getPositionValue(t);
	};
	s.select = function () {
		this.element.classList.add("is-selected");
		this.element.removeAttribute("aria-hidden");
	};
	s.unselect = function () {
		this.element.classList.remove("is-selected");
		this.element.setAttribute("aria-hidden", "true");
	};
	s.wrapShift = function (t) {
		this.shift = t;
		this.renderPosition(this.x + this.parent.slideableWidth * t);
	};
	s.remove = function () {
		this.element.parentNode.removeChild(this.element);
	};
	return n;
});
(function (t, e) {
	if (typeof define == "function" && define.amd) {
		define("flickity/js/slide", e);
	} else if (typeof module == "object" && module.exports) {
		module.exports = e();
	} else {
		t.Flickity = t.Flickity || {};
		t.Flickity.Slide = e();
	}
})(window, function t() {
	"use strict";
	function e(t) {
		this.parent = t;
		this.isOriginLeft = t.originSide == "left";
		this.cells = [];
		this.outerWidth = 0;
		this.height = 0;
	}
	var i = e.prototype;
	i.addCell = function (t) {
		this.cells.push(t);
		this.outerWidth += t.size.outerWidth;
		this.height = Math.max(t.size.outerHeight, this.height);
		if (this.cells.length == 1) {
			this.x = t.x;
			var e = this.isOriginLeft ? "marginLeft" : "marginRight";
			this.firstMargin = t.size[e];
		}
	};
	i.updateTarget = function () {
		var t = this.isOriginLeft ? "marginRight" : "marginLeft";
		var e = this.getLastCell();
		var i = e ? e.size[t] : 0;
		var n = this.outerWidth - (this.firstMargin + i);
		this.target = this.x + this.firstMargin + n * this.parent.cellAlign;
	};
	i.getLastCell = function () {
		return this.cells[this.cells.length - 1];
	};
	i.select = function () {
		this.cells.forEach(function (t) {
			t.select();
		});
	};
	i.unselect = function () {
		this.cells.forEach(function (t) {
			t.unselect();
		});
	};
	i.getCellElements = function () {
		return this.cells.map(function (t) {
			return t.element;
		});
	};
	return e;
});
(function (e, i) {
	if (typeof define == "function" && define.amd) {
		define("flickity/js/animate", ["fizzy-ui-utils/utils"], function (t) {
			return i(e, t);
		});
	} else if (typeof module == "object" && module.exports) {
		module.exports = i(e, require("fizzy-ui-utils"));
	} else {
		e.Flickity = e.Flickity || {};
		e.Flickity.animatePrototype = i(e, e.fizzyUIUtils);
	}
})(window, function t(e, i) {
	var n = {};
	n.startAnimation = function () {
		if (this.isAnimating) {
			return;
		}
		this.isAnimating = true;
		this.restingFrames = 0;
		this.animate();
	};
	n.animate = function () {
		this.applyDragForce();
		this.applySelectedAttraction();
		var t = this.x;
		this.integratePhysics();
		this.positionSlider();
		this.settle(t);
		if (this.isAnimating) {
			var e = this;
			requestAnimationFrame(function t() {
				e.animate();
			});
		}
	};
	n.positionSlider = function () {
		var t = this.x;
		if (this.options.wrapAround && this.cells.length > 1) {
			t = i.modulo(t, this.slideableWidth);
			t -= this.slideableWidth;
			this.shiftWrapCells(t);
		}
		this.setTranslateX(t, this.isAnimating);
		this.dispatchScrollEvent();
	};
	n.setTranslateX = function (t, e) {
		t += this.cursorPosition;
		t = this.options.rightToLeft ? -t : t;
		var i = this.getPositionValue(t);
		this.slider.style.transform = e
			? "translate3d(" + i + ",0,0)"
			: "translateX(" + i + ")";
	};
	n.dispatchScrollEvent = function () {
		var t = this.slides[0];
		if (!t) {
			return;
		}
		var e = -this.x - t.target;
		var i = e / this.slidesWidth;
		this.dispatchEvent("scroll", null, [i, e]);
	};
	n.positionSliderAtSelected = function () {
		if (!this.cells.length) {
			return;
		}
		this.x = -this.selectedSlide.target;
		this.velocity = 0;
		this.positionSlider();
	};
	n.getPositionValue = function (t) {
		if (this.options.percentPosition) {
			return Math.round((t / this.size.innerWidth) * 1e4) * 0.01 + "%";
		} else {
			return Math.round(t) + "px";
		}
	};
	n.settle = function (t) {
		var e =
			!this.isPointerDown &&
			Math.round(this.x * 100) == Math.round(t * 100);
		if (e) {
			this.restingFrames++;
		}
		if (this.restingFrames > 2) {
			this.isAnimating = false;
			delete this.isFreeScrolling;
			this.positionSlider();
			this.dispatchEvent("settle", null, [this.selectedIndex]);
		}
	};
	n.shiftWrapCells = function (t) {
		var e = this.cursorPosition + t;
		this._shiftCells(this.beforeShiftCells, e, -1);
		var i =
			this.size.innerWidth -
			(t + this.slideableWidth + this.cursorPosition);
		this._shiftCells(this.afterShiftCells, i, 1);
	};
	n._shiftCells = function (t, e, i) {
		for (var n = 0; n < t.length; n++) {
			var s = t[n];
			var r = e > 0 ? i : 0;
			s.wrapShift(r);
			e -= s.size.outerWidth;
		}
	};
	n._unshiftCells = function (t) {
		if (!t || !t.length) {
			return;
		}
		for (var e = 0; e < t.length; e++) {
			t[e].wrapShift(0);
		}
	};
	n.integratePhysics = function () {
		this.x += this.velocity;
		this.velocity *= this.getFrictionFactor();
	};
	n.applyForce = function (t) {
		this.velocity += t;
	};
	n.getFrictionFactor = function () {
		return (
			1 -
			this.options[
				this.isFreeScrolling ? "freeScrollFriction" : "friction"
			]
		);
	};
	n.getRestingPosition = function () {
		return this.x + this.velocity / (1 - this.getFrictionFactor());
	};
	n.applyDragForce = function () {
		if (!this.isDraggable || !this.isPointerDown) {
			return;
		}
		var t = this.dragX - this.x;
		var e = t - this.velocity;
		this.applyForce(e);
	};
	n.applySelectedAttraction = function () {
		var t = this.isDraggable && this.isPointerDown;
		if (t || this.isFreeScrolling || !this.slides.length) {
			return;
		}
		var e = this.selectedSlide.target * -1 - this.x;
		var i = e * this.options.selectedAttraction;
		this.applyForce(i);
	};
	return n;
});
(function (o, a) {
	if (typeof define == "function" && define.amd) {
		define("flickity/js/flickity", [
			"ev-emitter/ev-emitter",
			"get-size/get-size",
			"fizzy-ui-utils/utils",
			"./cell",
			"./slide",
			"./animate",
		], function (t, e, i, n, s, r) {
			return a(o, t, e, i, n, s, r);
		});
	} else if (typeof module == "object" && module.exports) {
		module.exports = a(
			o,
			require("ev-emitter"),
			require("get-size"),
			require("fizzy-ui-utils"),
			require("./cell"),
			require("./slide"),
			require("./animate")
		);
	} else {
		var t = o.Flickity;
		o.Flickity = a(
			o,
			o.EvEmitter,
			o.getSize,
			o.fizzyUIUtils,
			t.Cell,
			t.Slide,
			t.animatePrototype
		);
	}
})(window, function t(n, e, i, a, s, o, r) {
	var l = n.jQuery;
	var h = n.getComputedStyle;
	var c = n.console;
	function u(t, e) {
		t = a.makeArray(t);
		while (t.length) {
			e.appendChild(t.shift());
		}
	}
	var d = 0;
	var f = {};
	function p(t, e) {
		var i = a.getQueryElement(t);
		if (!i) {
			if (c) {
				c.error("Bad element for Flickity: " + (i || t));
			}
			return;
		}
		this.element = i;
		if (this.element.flickityGUID) {
			var n = f[this.element.flickityGUID];
			if (n) n.option(e);
			return n;
		}
		if (l) {
			this.$element = l(this.element);
		}
		this.options = a.extend({}, this.constructor.defaults);
		this.option(e);
		this._create();
	}
	p.defaults = {
		accessibility: true,
		cellAlign: "center",
		freeScrollFriction: 0.075,
		friction: 0.28,
		namespaceJQueryEvents: true,
		percentPosition: true,
		resize: true,
		selectedAttraction: 0.025,
		setGallerySize: true,
	};
	p.createMethods = [];
	var v = p.prototype;
	a.extend(v, e.prototype);
	v._create = function () {
		var t = (this.guid = ++d);
		this.element.flickityGUID = t;
		f[t] = this;
		this.selectedIndex = 0;
		this.restingFrames = 0;
		this.x = 0;
		this.velocity = 0;
		this.originSide = this.options.rightToLeft ? "right" : "left";
		this.viewport = document.createElement("div");
		this.viewport.className = "flickity-viewport";
		this._createSlider();
		if (this.options.resize || this.options.watchCSS) {
			n.addEventListener("resize", this);
		}
		for (var e in this.options.on) {
			var i = this.options.on[e];
			this.on(e, i);
		}
		p.createMethods.forEach(function (t) {
			this[t]();
		}, this);
		if (this.options.watchCSS) {
			this.watchCSS();
		} else {
			this.activate();
		}
	};
	v.option = function (t) {
		a.extend(this.options, t);
	};
	v.activate = function () {
		if (this.isActive) {
			return;
		}
		this.isActive = true;
		this.element.classList.add("flickity-enabled");
		if (this.options.rightToLeft) {
			this.element.classList.add("flickity-rtl");
		}
		this.getSize();
		var t = this._filterFindCellElements(this.element.children);
		u(t, this.slider);
		this.viewport.appendChild(this.slider);
		this.element.appendChild(this.viewport);
		this.reloadCells();
		if (this.options.accessibility) {
			this.element.tabIndex = 0;
			this.element.addEventListener("keydown", this);
		}
		this.emitEvent("activate");
		this.selectInitialIndex();
		this.isInitActivated = true;
		this.dispatchEvent("ready");
	};
	v._createSlider = function () {
		var t = document.createElement("div");
		t.className = "flickity-slider";
		t.style[this.originSide] = 0;
		this.slider = t;
	};
	v._filterFindCellElements = function (t) {
		return a.filterFindElements(t, this.options.cellSelector);
	};
	v.reloadCells = function () {
		this.cells = this._makeCells(this.slider.children);
		this.positionCells();
		this._getWrapShiftCells();
		this.setGallerySize();
	};
	v._makeCells = function (t) {
		var e = this._filterFindCellElements(t);
		var i = e.map(function (t) {
			return new s(t, this);
		}, this);
		return i;
	};
	v.getLastCell = function () {
		return this.cells[this.cells.length - 1];
	};
	v.getLastSlide = function () {
		return this.slides[this.slides.length - 1];
	};
	v.positionCells = function () {
		this._sizeCells(this.cells);
		this._positionCells(0);
	};
	v._positionCells = function (t) {
		t = t || 0;
		this.maxCellHeight = t ? this.maxCellHeight || 0 : 0;
		var e = 0;
		if (t > 0) {
			var i = this.cells[t - 1];
			e = i.x + i.size.outerWidth;
		}
		var n = this.cells.length;
		for (var s = t; s < n; s++) {
			var r = this.cells[s];
			r.setPosition(e);
			e += r.size.outerWidth;
			this.maxCellHeight = Math.max(
				r.size.outerHeight,
				this.maxCellHeight
			);
		}
		this.slideableWidth = e;
		this.updateSlides();
		this._containSlides();
		this.slidesWidth = n
			? this.getLastSlide().target - this.slides[0].target
			: 0;
	};
	v._sizeCells = function (t) {
		t.forEach(function (t) {
			t.getSize();
		});
	};
	v.updateSlides = function () {
		this.slides = [];
		if (!this.cells.length) {
			return;
		}
		var n = new o(this);
		this.slides.push(n);
		var t = this.originSide == "left";
		var s = t ? "marginRight" : "marginLeft";
		var r = this._getCanCellFit();
		this.cells.forEach(function (t, e) {
			if (!n.cells.length) {
				n.addCell(t);
				return;
			}
			var i =
				n.outerWidth - n.firstMargin + (t.size.outerWidth - t.size[s]);
			if (r.call(this, e, i)) {
				n.addCell(t);
			} else {
				n.updateTarget();
				n = new o(this);
				this.slides.push(n);
				n.addCell(t);
			}
		}, this);
		n.updateTarget();
		this.updateSelectedSlide();
	};
	v._getCanCellFit = function () {
		var t = this.options.groupCells;
		if (!t) {
			return function () {
				return false;
			};
		} else if (typeof t == "number") {
			var e = parseInt(t, 10);
			return function (t) {
				return t % e !== 0;
			};
		}
		var i = typeof t == "string" && t.match(/^(\d+)%$/);
		var n = i ? parseInt(i[1], 10) / 100 : 1;
		return function (t, e) {
			return e <= (this.size.innerWidth + 1) * n;
		};
	};
	v._init = v.reposition = function () {
		this.positionCells();
		this.positionSliderAtSelected();
	};
	v.getSize = function () {
		this.size = i(this.element);
		this.setCellAlign();
		this.cursorPosition = this.size.innerWidth * this.cellAlign;
	};
	var g = {
		center: { left: 0.5, right: 0.5 },
		left: { left: 0, right: 1 },
		right: { right: 0, left: 1 },
	};
	v.setCellAlign = function () {
		var t = g[this.options.cellAlign];
		this.cellAlign = t ? t[this.originSide] : this.options.cellAlign;
	};
	v.setGallerySize = function () {
		if (this.options.setGallerySize) {
			var t =
				this.options.adaptiveHeight && this.selectedSlide
					? this.selectedSlide.height
					: this.maxCellHeight;
			this.viewport.style.height = t + "px";
		}
	};
	v._getWrapShiftCells = function () {
		if (!this.options.wrapAround) {
			return;
		}
		this._unshiftCells(this.beforeShiftCells);
		this._unshiftCells(this.afterShiftCells);
		var t = this.cursorPosition;
		var e = this.cells.length - 1;
		this.beforeShiftCells = this._getGapCells(t, e, -1);
		t = this.size.innerWidth - this.cursorPosition;
		this.afterShiftCells = this._getGapCells(t, 0, 1);
	};
	v._getGapCells = function (t, e, i) {
		var n = [];
		while (t > 0) {
			var s = this.cells[e];
			if (!s) {
				break;
			}
			n.push(s);
			e += i;
			t -= s.size.outerWidth;
		}
		return n;
	};
	v._containSlides = function () {
		if (
			!this.options.contain ||
			this.options.wrapAround ||
			!this.cells.length
		) {
			return;
		}
		var t = this.options.rightToLeft;
		var e = t ? "marginRight" : "marginLeft";
		var i = t ? "marginLeft" : "marginRight";
		var n = this.slideableWidth - this.getLastCell().size[i];
		var s = n < this.size.innerWidth;
		var r = this.cursorPosition + this.cells[0].size[e];
		var o = n - this.size.innerWidth * (1 - this.cellAlign);
		this.slides.forEach(function (t) {
			if (s) {
				t.target = n * this.cellAlign;
			} else {
				t.target = Math.max(t.target, r);
				t.target = Math.min(t.target, o);
			}
		}, this);
	};
	v.dispatchEvent = function (t, e, i) {
		var n = e ? [e].concat(i) : i;
		this.emitEvent(t, n);
		if (l && this.$element) {
			t += this.options.namespaceJQueryEvents ? ".flickity" : "";
			var s = t;
			if (e) {
				var r = new l.Event(e);
				r.type = t;
				s = r;
			}
			this.$element.trigger(s, i);
		}
	};
	v.select = function (t, e, i) {
		if (!this.isActive) {
			return;
		}
		t = parseInt(t, 10);
		this._wrapSelect(t);
		if (this.options.wrapAround || e) {
			t = a.modulo(t, this.slides.length);
		}
		if (!this.slides[t]) {
			return;
		}
		var n = this.selectedIndex;
		this.selectedIndex = t;
		this.updateSelectedSlide();
		if (i) {
			this.positionSliderAtSelected();
		} else {
			this.startAnimation();
		}
		if (this.options.adaptiveHeight) {
			this.setGallerySize();
		}
		this.dispatchEvent("select", null, [t]);
		if (t != n) {
			this.dispatchEvent("change", null, [t]);
		}
		this.dispatchEvent("cellSelect");
	};
	v._wrapSelect = function (t) {
		var e = this.slides.length;
		var i = this.options.wrapAround && e > 1;
		if (!i) {
			return t;
		}
		var n = a.modulo(t, e);
		var s = Math.abs(n - this.selectedIndex);
		var r = Math.abs(n + e - this.selectedIndex);
		var o = Math.abs(n - e - this.selectedIndex);
		if (!this.isDragSelect && r < s) {
			t += e;
		} else if (!this.isDragSelect && o < s) {
			t -= e;
		}
		if (t < 0) {
			this.x -= this.slideableWidth;
		} else if (t >= e) {
			this.x += this.slideableWidth;
		}
	};
	v.previous = function (t, e) {
		this.select(this.selectedIndex - 1, t, e);
	};
	v.next = function (t, e) {
		this.select(this.selectedIndex + 1, t, e);
	};
	v.updateSelectedSlide = function () {
		var t = this.slides[this.selectedIndex];
		if (!t) {
			return;
		}
		this.unselectSelectedSlide();
		this.selectedSlide = t;
		t.select();
		this.selectedCells = t.cells;
		this.selectedElements = t.getCellElements();
		this.selectedCell = t.cells[0];
		this.selectedElement = this.selectedElements[0];
	};
	v.unselectSelectedSlide = function () {
		if (this.selectedSlide) {
			this.selectedSlide.unselect();
		}
	};
	v.selectInitialIndex = function () {
		var t = this.options.initialIndex;
		if (this.isInitActivated) {
			this.select(this.selectedIndex, false, true);
			return;
		}
		if (t && typeof t == "string") {
			var e = this.queryCell(t);
			if (e) {
				this.selectCell(t, false, true);
				return;
			}
		}
		var i = 0;
		if (t && this.slides[t]) {
			i = t;
		}
		this.select(i, false, true);
	};
	v.selectCell = function (t, e, i) {
		var n = this.queryCell(t);
		if (!n) {
			return;
		}
		var s = this.getCellSlideIndex(n);
		this.select(s, e, i);
	};
	v.getCellSlideIndex = function (t) {
		for (var e = 0; e < this.slides.length; e++) {
			var i = this.slides[e];
			var n = i.cells.indexOf(t);
			if (n != -1) {
				return e;
			}
		}
	};
	v.getCell = function (t) {
		for (var e = 0; e < this.cells.length; e++) {
			var i = this.cells[e];
			if (i.element == t) {
				return i;
			}
		}
	};
	v.getCells = function (t) {
		t = a.makeArray(t);
		var i = [];
		t.forEach(function (t) {
			var e = this.getCell(t);
			if (e) {
				i.push(e);
			}
		}, this);
		return i;
	};
	v.getCellElements = function () {
		return this.cells.map(function (t) {
			return t.element;
		});
	};
	v.getParentCell = function (t) {
		var e = this.getCell(t);
		if (e) {
			return e;
		}
		t = a.getParent(t, ".flickity-slider > *");
		return this.getCell(t);
	};
	v.getAdjacentCellElements = function (t, e) {
		if (!t) {
			return this.selectedSlide.getCellElements();
		}
		e = e === undefined ? this.selectedIndex : e;
		var i = this.slides.length;
		if (1 + t * 2 >= i) {
			return this.getCellElements();
		}
		var n = [];
		for (var s = e - t; s <= e + t; s++) {
			var r = this.options.wrapAround ? a.modulo(s, i) : s;
			var o = this.slides[r];
			if (o) {
				n = n.concat(o.getCellElements());
			}
		}
		return n;
	};
	v.queryCell = function (t) {
		if (typeof t == "number") {
			return this.cells[t];
		}
		if (typeof t == "string") {
			if (t.match(/^[#.]?[\d/]/)) {
				return;
			}
			t = this.element.querySelector(t);
		}
		return this.getCell(t);
	};
	v.uiChange = function () {
		this.emitEvent("uiChange");
	};
	v.childUIPointerDown = function (t) {
		if (t.type != "touchstart") {
			t.preventDefault();
		}
		this.focus();
	};
	v.onresize = function () {
		this.watchCSS();
		this.resize();
	};
	a.debounceMethod(p, "onresize", 150);
	v.resize = function () {
		if (!this.isActive) {
			return;
		}
		this.getSize();
		if (this.options.wrapAround) {
			this.x = a.modulo(this.x, this.slideableWidth);
		}
		this.positionCells();
		this._getWrapShiftCells();
		this.setGallerySize();
		this.emitEvent("resize");
		var t = this.selectedElements && this.selectedElements[0];
		this.selectCell(t, false, true);
	};
	v.watchCSS = function () {
		var t = this.options.watchCSS;
		if (!t) {
			return;
		}
		var e = h(this.element, ":after").content;
		if (e.indexOf("flickity") != -1) {
			this.activate();
		} else {
			this.deactivate();
		}
	};
	v.onkeydown = function (t) {
		var e =
			document.activeElement && document.activeElement != this.element;
		if (!this.options.accessibility || e) {
			return;
		}
		var i = p.keyboardHandlers[t.keyCode];
		if (i) {
			i.call(this);
		}
	};
	p.keyboardHandlers = {
		37: function () {
			var t = this.options.rightToLeft ? "next" : "previous";
			this.uiChange();
			this[t]();
		},
		39: function () {
			var t = this.options.rightToLeft ? "previous" : "next";
			this.uiChange();
			this[t]();
		},
	};
	v.focus = function () {
		var t = n.pageYOffset;
		this.element.focus({ preventScroll: true });
		if (n.pageYOffset != t) {
			n.scrollTo(n.pageXOffset, t);
		}
	};
	v.deactivate = function () {
		if (!this.isActive) {
			return;
		}
		this.element.classList.remove("flickity-enabled");
		this.element.classList.remove("flickity-rtl");
		this.unselectSelectedSlide();
		this.cells.forEach(function (t) {
			t.destroy();
		});
		this.element.removeChild(this.viewport);
		u(this.slider.children, this.element);
		if (this.options.accessibility) {
			this.element.removeAttribute("tabIndex");
			this.element.removeEventListener("keydown", this);
		}
		this.isActive = false;
		this.emitEvent("deactivate");
	};
	v.destroy = function () {
		this.deactivate();
		n.removeEventListener("resize", this);
		this.allOff();
		this.emitEvent("destroy");
		if (l && this.$element) {
			l.removeData(this.element, "flickity");
		}
		delete this.element.flickityGUID;
		delete f[this.guid];
	};
	a.extend(v, r);
	p.data = function (t) {
		t = a.getQueryElement(t);
		var e = t && t.flickityGUID;
		return e && f[e];
	};
	a.htmlInit(p, "flickity");
	if (l && l.bridget) {
		l.bridget("flickity", p);
	}
	p.setJQuery = function (t) {
		l = t;
	};
	p.Cell = s;
	p.Slide = o;
	return p;
});
/*!
 * Unipointer v2.3.0
 * base class for doing one thing with pointer event
 * MIT license
 */
(function (e, i) {
	if (typeof define == "function" && define.amd) {
		define("unipointer/unipointer", ["ev-emitter/ev-emitter"], function (
			t
		) {
			return i(e, t);
		});
	} else if (typeof module == "object" && module.exports) {
		module.exports = i(e, require("ev-emitter"));
	} else {
		e.Unipointer = i(e, e.EvEmitter);
	}
})(window, function t(s, e) {
	function i() {}
	function n() {}
	var r = (n.prototype = Object.create(e.prototype));
	r.bindStartEvent = function (t) {
		this._bindStartEvent(t, true);
	};
	r.unbindStartEvent = function (t) {
		this._bindStartEvent(t, false);
	};
	r._bindStartEvent = function (t, e) {
		e = e === undefined ? true : e;
		var i = e ? "addEventListener" : "removeEventListener";
		var n = "mousedown";
		if (s.PointerEvent) {
			n = "pointerdown";
		} else if ("ontouchstart" in s) {
			n = "touchstart";
		}
		t[i](n, this);
	};
	r.handleEvent = function (t) {
		var e = "on" + t.type;
		if (this[e]) {
			this[e](t);
		}
	};
	r.getTouch = function (t) {
		for (var e = 0; e < t.length; e++) {
			var i = t[e];
			if (i.identifier == this.pointerIdentifier) {
				return i;
			}
		}
	};
	r.onmousedown = function (t) {
		var e = t.button;
		if (e && e !== 0 && e !== 1) {
			return;
		}
		this._pointerDown(t, t);
	};
	r.ontouchstart = function (t) {
		this._pointerDown(t, t.changedTouches[0]);
	};
	r.onpointerdown = function (t) {
		this._pointerDown(t, t);
	};
	r._pointerDown = function (t, e) {
		if (t.button || this.isPointerDown) {
			return;
		}
		this.isPointerDown = true;
		this.pointerIdentifier =
			e.pointerId !== undefined ? e.pointerId : e.identifier;
		this.pointerDown(t, e);
	};
	r.pointerDown = function (t, e) {
		this._bindPostStartEvents(t);
		this.emitEvent("pointerDown", [t, e]);
	};
	var o = {
		mousedown: ["mousemove", "mouseup"],
		touchstart: ["touchmove", "touchend", "touchcancel"],
		pointerdown: ["pointermove", "pointerup", "pointercancel"],
	};
	r._bindPostStartEvents = function (t) {
		if (!t) {
			return;
		}
		var e = o[t.type];
		e.forEach(function (t) {
			s.addEventListener(t, this);
		}, this);
		this._boundPointerEvents = e;
	};
	r._unbindPostStartEvents = function () {
		if (!this._boundPointerEvents) {
			return;
		}
		this._boundPointerEvents.forEach(function (t) {
			s.removeEventListener(t, this);
		}, this);
		delete this._boundPointerEvents;
	};
	r.onmousemove = function (t) {
		this._pointerMove(t, t);
	};
	r.onpointermove = function (t) {
		if (t.pointerId == this.pointerIdentifier) {
			this._pointerMove(t, t);
		}
	};
	r.ontouchmove = function (t) {
		var e = this.getTouch(t.changedTouches);
		if (e) {
			this._pointerMove(t, e);
		}
	};
	r._pointerMove = function (t, e) {
		this.pointerMove(t, e);
	};
	r.pointerMove = function (t, e) {
		this.emitEvent("pointerMove", [t, e]);
	};
	r.onmouseup = function (t) {
		this._pointerUp(t, t);
	};
	r.onpointerup = function (t) {
		if (t.pointerId == this.pointerIdentifier) {
			this._pointerUp(t, t);
		}
	};
	r.ontouchend = function (t) {
		var e = this.getTouch(t.changedTouches);
		if (e) {
			this._pointerUp(t, e);
		}
	};
	r._pointerUp = function (t, e) {
		this._pointerDone();
		this.pointerUp(t, e);
	};
	r.pointerUp = function (t, e) {
		this.emitEvent("pointerUp", [t, e]);
	};
	r._pointerDone = function () {
		this._pointerReset();
		this._unbindPostStartEvents();
		this.pointerDone();
	};
	r._pointerReset = function () {
		this.isPointerDown = false;
		delete this.pointerIdentifier;
	};
	r.pointerDone = i;
	r.onpointercancel = function (t) {
		if (t.pointerId == this.pointerIdentifier) {
			this._pointerCancel(t, t);
		}
	};
	r.ontouchcancel = function (t) {
		var e = this.getTouch(t.changedTouches);
		if (e) {
			this._pointerCancel(t, e);
		}
	};
	r._pointerCancel = function (t, e) {
		this._pointerDone();
		this.pointerCancel(t, e);
	};
	r.pointerCancel = function (t, e) {
		this.emitEvent("pointerCancel", [t, e]);
	};
	n.getPointerPoint = function (t) {
		return { x: t.pageX, y: t.pageY };
	};
	return n;
});
/*!
 * Unidragger v2.3.1
 * Draggable base class
 * MIT license
 */
(function (e, i) {
	if (typeof define == "function" && define.amd) {
		define("unidragger/unidragger", ["unipointer/unipointer"], function (
			t
		) {
			return i(e, t);
		});
	} else if (typeof module == "object" && module.exports) {
		module.exports = i(e, require("unipointer"));
	} else {
		e.Unidragger = i(e, e.Unipointer);
	}
})(window, function t(r, e) {
	function i() {}
	var n = (i.prototype = Object.create(e.prototype));
	n.bindHandles = function () {
		this._bindHandles(true);
	};
	n.unbindHandles = function () {
		this._bindHandles(false);
	};
	n._bindHandles = function (t) {
		t = t === undefined ? true : t;
		var e = t ? "addEventListener" : "removeEventListener";
		var i = t ? this._touchActionValue : "";
		for (var n = 0; n < this.handles.length; n++) {
			var s = this.handles[n];
			this._bindStartEvent(s, t);
			s[e]("click", this);
			if (r.PointerEvent) {
				s.style.touchAction = i;
			}
		}
	};
	n._touchActionValue = "none";
	n.pointerDown = function (t, e) {
		var i = this.okayPointerDown(t);
		if (!i) {
			return;
		}
		this.pointerDownPointer = { pageX: e.pageX, pageY: e.pageY };
		t.preventDefault();
		this.pointerDownBlur();
		this._bindPostStartEvents(t);
		this.emitEvent("pointerDown", [t, e]);
	};
	var s = { TEXTAREA: true, INPUT: true, SELECT: true, OPTION: true };
	var o = {
		radio: true,
		checkbox: true,
		button: true,
		submit: true,
		image: true,
		file: true,
	};
	n.okayPointerDown = function (t) {
		var e = s[t.target.nodeName];
		var i = o[t.target.type];
		var n = !e || i;
		if (!n) {
			this._pointerReset();
		}
		return n;
	};
	n.pointerDownBlur = function () {
		var t = document.activeElement;
		var e = t && t.blur && t != document.body;
		if (e) {
			t.blur();
		}
	};
	n.pointerMove = function (t, e) {
		var i = this._dragPointerMove(t, e);
		this.emitEvent("pointerMove", [t, e, i]);
		this._dragMove(t, e, i);
	};
	n._dragPointerMove = function (t, e) {
		var i = {
			x: e.pageX - this.pointerDownPointer.pageX,
			y: e.pageY - this.pointerDownPointer.pageY,
		};
		if (!this.isDragging && this.hasDragStarted(i)) {
			this._dragStart(t, e);
		}
		return i;
	};
	n.hasDragStarted = function (t) {
		return Math.abs(t.x) > 3 || Math.abs(t.y) > 3;
	};
	n.pointerUp = function (t, e) {
		this.emitEvent("pointerUp", [t, e]);
		this._dragPointerUp(t, e);
	};
	n._dragPointerUp = function (t, e) {
		if (this.isDragging) {
			this._dragEnd(t, e);
		} else {
			this._staticClick(t, e);
		}
	};
	n._dragStart = function (t, e) {
		this.isDragging = true;
		this.isPreventingClicks = true;
		this.dragStart(t, e);
	};
	n.dragStart = function (t, e) {
		this.emitEvent("dragStart", [t, e]);
	};
	n._dragMove = function (t, e, i) {
		if (!this.isDragging) {
			return;
		}
		this.dragMove(t, e, i);
	};
	n.dragMove = function (t, e, i) {
		t.preventDefault();
		this.emitEvent("dragMove", [t, e, i]);
	};
	n._dragEnd = function (t, e) {
		this.isDragging = false;
		setTimeout(
			function () {
				delete this.isPreventingClicks;
			}.bind(this)
		);
		this.dragEnd(t, e);
	};
	n.dragEnd = function (t, e) {
		this.emitEvent("dragEnd", [t, e]);
	};
	n.onclick = function (t) {
		if (this.isPreventingClicks) {
			t.preventDefault();
		}
	};
	n._staticClick = function (t, e) {
		if (this.isIgnoringMouseUp && t.type == "mouseup") {
			return;
		}
		this.staticClick(t, e);
		if (t.type != "mouseup") {
			this.isIgnoringMouseUp = true;
			setTimeout(
				function () {
					delete this.isIgnoringMouseUp;
				}.bind(this),
				400
			);
		}
	};
	n.staticClick = function (t, e) {
		this.emitEvent("staticClick", [t, e]);
	};
	i.getPointerPoint = e.getPointerPoint;
	return i;
});
(function (n, s) {
	if (typeof define == "function" && define.amd) {
		define("flickity/js/drag", [
			"./flickity",
			"unidragger/unidragger",
			"fizzy-ui-utils/utils",
		], function (t, e, i) {
			return s(n, t, e, i);
		});
	} else if (typeof module == "object" && module.exports) {
		module.exports = s(
			n,
			require("./flickity"),
			require("unidragger"),
			require("fizzy-ui-utils")
		);
	} else {
		n.Flickity = s(n, n.Flickity, n.Unidragger, n.fizzyUIUtils);
	}
})(window, function t(n, e, i, a) {
	a.extend(e.defaults, { draggable: ">1", dragThreshold: 3 });
	e.createMethods.push("_createDrag");
	var s = e.prototype;
	a.extend(s, i.prototype);
	s._touchActionValue = "pan-y";
	var r = "createTouch" in document;
	var o = false;
	s._createDrag = function () {
		this.on("activate", this.onActivateDrag);
		this.on("uiChange", this._uiChangeDrag);
		this.on("deactivate", this.onDeactivateDrag);
		this.on("cellChange", this.updateDraggable);
		if (r && !o) {
			n.addEventListener("touchmove", function () {});
			o = true;
		}
	};
	s.onActivateDrag = function () {
		this.handles = [this.viewport];
		this.bindHandles();
		this.updateDraggable();
	};
	s.onDeactivateDrag = function () {
		this.unbindHandles();
		this.element.classList.remove("is-draggable");
	};
	s.updateDraggable = function () {
		if (this.options.draggable == ">1") {
			this.isDraggable = this.slides.length > 1;
		} else {
			this.isDraggable = this.options.draggable;
		}
		if (this.isDraggable) {
			this.element.classList.add("is-draggable");
		} else {
			this.element.classList.remove("is-draggable");
		}
	};
	s.bindDrag = function () {
		this.options.draggable = true;
		this.updateDraggable();
	};
	s.unbindDrag = function () {
		this.options.draggable = false;
		this.updateDraggable();
	};
	s._uiChangeDrag = function () {
		delete this.isFreeScrolling;
	};
	s.pointerDown = function (t, e) {
		if (!this.isDraggable) {
			this._pointerDownDefault(t, e);
			return;
		}
		var i = this.okayPointerDown(t);
		if (!i) {
			return;
		}
		this._pointerDownPreventDefault(t);
		this.pointerDownFocus(t);
		if (document.activeElement != this.element) {
			this.pointerDownBlur();
		}
		this.dragX = this.x;
		this.viewport.classList.add("is-pointer-down");
		this.pointerDownScroll = h();
		n.addEventListener("scroll", this);
		this._pointerDownDefault(t, e);
	};
	s._pointerDownDefault = function (t, e) {
		this.pointerDownPointer = { pageX: e.pageX, pageY: e.pageY };
		this._bindPostStartEvents(t);
		this.dispatchEvent("pointerDown", t, [e]);
	};
	var l = { INPUT: true, TEXTAREA: true, SELECT: true };
	s.pointerDownFocus = function (t) {
		var e = l[t.target.nodeName];
		if (!e) {
			this.focus();
		}
	};
	s._pointerDownPreventDefault = function (t) {
		var e = t.type == "touchstart";
		var i = t.pointerType == "touch";
		var n = l[t.target.nodeName];
		if (!e && !i && !n) {
			t.preventDefault();
		}
	};
	s.hasDragStarted = function (t) {
		return Math.abs(t.x) > this.options.dragThreshold;
	};
	s.pointerUp = function (t, e) {
		delete this.isTouchScrolling;
		this.viewport.classList.remove("is-pointer-down");
		this.dispatchEvent("pointerUp", t, [e]);
		this._dragPointerUp(t, e);
	};
	s.pointerDone = function () {
		n.removeEventListener("scroll", this);
		delete this.pointerDownScroll;
	};
	s.dragStart = function (t, e) {
		if (!this.isDraggable) {
			return;
		}
		this.dragStartPosition = this.x;
		this.startAnimation();
		n.removeEventListener("scroll", this);
		this.dispatchEvent("dragStart", t, [e]);
	};
	s.pointerMove = function (t, e) {
		var i = this._dragPointerMove(t, e);
		this.dispatchEvent("pointerMove", t, [e, i]);
		this._dragMove(t, e, i);
	};
	s.dragMove = function (t, e, i) {
		if (!this.isDraggable) {
			return;
		}
		t.preventDefault();
		this.previousDragX = this.dragX;
		var n = this.options.rightToLeft ? -1 : 1;
		if (this.options.wrapAround) {
			i.x %= this.slideableWidth;
		}
		var s = this.dragStartPosition + i.x * n;
		if (!this.options.wrapAround && this.slides.length) {
			var r = Math.max(-this.slides[0].target, this.dragStartPosition);
			s = s > r ? (s + r) * 0.5 : s;
			var o = Math.min(
				-this.getLastSlide().target,
				this.dragStartPosition
			);
			s = s < o ? (s + o) * 0.5 : s;
		}
		this.dragX = s;
		this.dragMoveTime = new Date();
		this.dispatchEvent("dragMove", t, [e, i]);
	};
	s.dragEnd = function (t, e) {
		if (!this.isDraggable) {
			return;
		}
		if (this.options.freeScroll) {
			this.isFreeScrolling = true;
		}
		var i = this.dragEndRestingSelect();
		if (this.options.freeScroll && !this.options.wrapAround) {
			var n = this.getRestingPosition();
			this.isFreeScrolling =
				-n > this.slides[0].target && -n < this.getLastSlide().target;
		} else if (!this.options.freeScroll && i == this.selectedIndex) {
			i += this.dragEndBoostSelect();
		}
		delete this.previousDragX;
		this.isDragSelect = this.options.wrapAround;
		this.select(i);
		delete this.isDragSelect;
		this.dispatchEvent("dragEnd", t, [e]);
	};
	s.dragEndRestingSelect = function () {
		var t = this.getRestingPosition();
		var e = Math.abs(this.getSlideDistance(-t, this.selectedIndex));
		var i = this._getClosestResting(t, e, 1);
		var n = this._getClosestResting(t, e, -1);
		var s = i.distance < n.distance ? i.index : n.index;
		return s;
	};
	s._getClosestResting = function (t, e, i) {
		var n = this.selectedIndex;
		var s = Infinity;
		var r =
			this.options.contain && !this.options.wrapAround
				? function (t, e) {
						return t <= e;
				  }
				: function (t, e) {
						return t < e;
				  };
		while (r(e, s)) {
			n += i;
			s = e;
			e = this.getSlideDistance(-t, n);
			if (e === null) {
				break;
			}
			e = Math.abs(e);
		}
		return { distance: s, index: n - i };
	};
	s.getSlideDistance = function (t, e) {
		var i = this.slides.length;
		var n = this.options.wrapAround && i > 1;
		var s = n ? a.modulo(e, i) : e;
		var r = this.slides[s];
		if (!r) {
			return null;
		}
		var o = n ? this.slideableWidth * Math.floor(e / i) : 0;
		return t - (r.target + o);
	};
	s.dragEndBoostSelect = function () {
		if (
			this.previousDragX === undefined ||
			!this.dragMoveTime ||
			new Date() - this.dragMoveTime > 100
		) {
			return 0;
		}
		var t = this.getSlideDistance(-this.dragX, this.selectedIndex);
		var e = this.previousDragX - this.dragX;
		if (t > 0 && e > 0) {
			return 1;
		} else if (t < 0 && e < 0) {
			return -1;
		}
		return 0;
	};
	s.staticClick = function (t, e) {
		var i = this.getParentCell(t.target);
		var n = i && i.element;
		var s = i && this.cells.indexOf(i);
		this.dispatchEvent("staticClick", t, [e, n, s]);
	};
	s.onscroll = function () {
		var t = h();
		var e = this.pointerDownScroll.x - t.x;
		var i = this.pointerDownScroll.y - t.y;
		if (Math.abs(e) > 3 || Math.abs(i) > 3) {
			this._pointerDone();
		}
	};
	function h() {
		return { x: n.pageXOffset, y: n.pageYOffset };
	}
	return e;
});
(function (n, s) {
	if (typeof define == "function" && define.amd) {
		define("flickity/js/prev-next-button", [
			"./flickity",
			"unipointer/unipointer",
			"fizzy-ui-utils/utils",
		], function (t, e, i) {
			return s(n, t, e, i);
		});
	} else if (typeof module == "object" && module.exports) {
		module.exports = s(
			n,
			require("./flickity"),
			require("unipointer"),
			require("fizzy-ui-utils")
		);
	} else {
		s(n, n.Flickity, n.Unipointer, n.fizzyUIUtils);
	}
})(window, function t(e, i, n, s) {
	"use strict";
	var r = "http://www.w3.org/2000/svg";
	function o(t, e) {
		this.direction = t;
		this.parent = e;
		this._create();
	}
	o.prototype = Object.create(n.prototype);
	o.prototype._create = function () {
		this.isEnabled = true;
		this.isPrevious = this.direction == -1;
		var t = this.parent.options.rightToLeft ? 1 : -1;
		this.isLeft = this.direction == t;
		var e = (this.element = document.createElement("button"));
		e.className = "flickity-button flickity-prev-next-button";
		e.className += this.isPrevious ? " previous" : " next";
		e.setAttribute("type", "button");
		this.disable();
		e.setAttribute("aria-label", this.isPrevious ? "Previous" : "Next");
		var i = this.createSVG();
		e.appendChild(i);
		this.parent.on("select", this.update.bind(this));
		this.on(
			"pointerDown",
			this.parent.childUIPointerDown.bind(this.parent)
		);
	};
	o.prototype.activate = function () {
		this.bindStartEvent(this.element);
		this.element.addEventListener("click", this);
		this.parent.element.appendChild(this.element);
	};
	o.prototype.deactivate = function () {
		this.parent.element.removeChild(this.element);
		this.unbindStartEvent(this.element);
		this.element.removeEventListener("click", this);
	};
	o.prototype.createSVG = function () {
		var t = document.createElementNS(r, "svg");
		t.setAttribute("class", "flickity-button-icon");
		t.setAttribute("viewBox", "0 0 100 100");
		var e = document.createElementNS(r, "path");
		var i = a(this.parent.options.arrowShape);
		e.setAttribute("d", i);
		e.setAttribute("class", "arrow");
		if (!this.isLeft) {
			e.setAttribute("transform", "translate(100, 100) rotate(180) ");
		}
		t.appendChild(e);
		return t;
	};
	function a(t) {
		if (typeof t == "string") {
			return t;
		}
		return (
			"M " +
			t.x0 +
			",50" +
			" L " +
			t.x1 +
			"," +
			(t.y1 + 50) +
			" L " +
			t.x2 +
			"," +
			(t.y2 + 50) +
			" L " +
			t.x3 +
			",50 " +
			" L " +
			t.x2 +
			"," +
			(50 - t.y2) +
			" L " +
			t.x1 +
			"," +
			(50 - t.y1) +
			" Z"
		);
	}
	o.prototype.handleEvent = s.handleEvent;
	o.prototype.onclick = function () {
		if (!this.isEnabled) {
			return;
		}
		this.parent.uiChange();
		var t = this.isPrevious ? "previous" : "next";
		this.parent[t]();
	};
	o.prototype.enable = function () {
		if (this.isEnabled) {
			return;
		}
		this.element.disabled = false;
		this.isEnabled = true;
	};
	o.prototype.disable = function () {
		if (!this.isEnabled) {
			return;
		}
		this.element.disabled = true;
		this.isEnabled = false;
	};
	o.prototype.update = function () {
		var t = this.parent.slides;
		if (this.parent.options.wrapAround && t.length > 1) {
			this.enable();
			return;
		}
		var e = t.length ? t.length - 1 : 0;
		var i = this.isPrevious ? 0 : e;
		var n = this.parent.selectedIndex == i ? "disable" : "enable";
		this[n]();
	};
	o.prototype.destroy = function () {
		this.deactivate();
		this.allOff();
	};
	s.extend(i.defaults, {
		prevNextButtons: true,
		arrowShape: { x0: 10, x1: 60, y1: 50, x2: 70, y2: 40, x3: 30 },
	});
	i.createMethods.push("_createPrevNextButtons");
	var l = i.prototype;
	l._createPrevNextButtons = function () {
		if (!this.options.prevNextButtons) {
			return;
		}
		this.prevButton = new o(-1, this);
		this.nextButton = new o(1, this);
		this.on("activate", this.activatePrevNextButtons);
	};
	l.activatePrevNextButtons = function () {
		this.prevButton.activate();
		this.nextButton.activate();
		this.on("deactivate", this.deactivatePrevNextButtons);
	};
	l.deactivatePrevNextButtons = function () {
		this.prevButton.deactivate();
		this.nextButton.deactivate();
		this.off("deactivate", this.deactivatePrevNextButtons);
	};
	i.PrevNextButton = o;
	return i;
});
(function (n, s) {
	if (typeof define == "function" && define.amd) {
		define("flickity/js/page-dots", [
			"./flickity",
			"unipointer/unipointer",
			"fizzy-ui-utils/utils",
		], function (t, e, i) {
			return s(n, t, e, i);
		});
	} else if (typeof module == "object" && module.exports) {
		module.exports = s(
			n,
			require("./flickity"),
			require("unipointer"),
			require("fizzy-ui-utils")
		);
	} else {
		s(n, n.Flickity, n.Unipointer, n.fizzyUIUtils);
	}
})(window, function t(e, i, n, s) {
	function r(t) {
		this.parent = t;
		this._create();
	}
	r.prototype = Object.create(n.prototype);
	r.prototype._create = function () {
		this.holder = document.createElement("ol");
		this.holder.className = "flickity-page-dots";
		this.dots = [];
		this.handleClick = this.onClick.bind(this);
		this.on(
			"pointerDown",
			this.parent.childUIPointerDown.bind(this.parent)
		);
	};
	r.prototype.activate = function () {
		this.setDots();
		this.holder.addEventListener("click", this.handleClick);
		this.bindStartEvent(this.holder);
		this.parent.element.appendChild(this.holder);
	};
	r.prototype.deactivate = function () {
		this.holder.removeEventListener("click", this.handleClick);
		this.unbindStartEvent(this.holder);
		this.parent.element.removeChild(this.holder);
	};
	r.prototype.setDots = function () {
		var t = this.parent.slides.length - this.dots.length;
		if (t > 0) {
			this.addDots(t);
		} else if (t < 0) {
			this.removeDots(-t);
		}
	};
	r.prototype.addDots = function (t) {
		var e = document.createDocumentFragment();
		var i = [];
		var n = this.dots.length;
		var s = n + t;
		for (var r = n; r < s; r++) {
			var o = document.createElement("li");
			o.className = "dot";
			o.setAttribute("aria-label", "Page dot " + (r + 1));
			e.appendChild(o);
			i.push(o);
		}
		this.holder.appendChild(e);
		this.dots = this.dots.concat(i);
	};
	r.prototype.removeDots = function (t) {
		var e = this.dots.splice(this.dots.length - t, t);
		e.forEach(function (t) {
			this.holder.removeChild(t);
		}, this);
	};
	r.prototype.updateSelected = function () {
		if (this.selectedDot) {
			this.selectedDot.className = "dot";
			this.selectedDot.removeAttribute("aria-current");
		}
		if (!this.dots.length) {
			return;
		}
		this.selectedDot = this.dots[this.parent.selectedIndex];
		this.selectedDot.className = "dot is-selected";
		this.selectedDot.setAttribute("aria-current", "step");
	};
	r.prototype.onTap = r.prototype.onClick = function (t) {
		var e = t.target;
		if (e.nodeName != "LI") {
			return;
		}
		this.parent.uiChange();
		var i = this.dots.indexOf(e);
		this.parent.select(i);
	};
	r.prototype.destroy = function () {
		this.deactivate();
		this.allOff();
	};
	i.PageDots = r;
	s.extend(i.defaults, { pageDots: true });
	i.createMethods.push("_createPageDots");
	var o = i.prototype;
	o._createPageDots = function () {
		if (!this.options.pageDots) {
			return;
		}
		this.pageDots = new r(this);
		this.on("activate", this.activatePageDots);
		this.on("select", this.updateSelectedPageDots);
		this.on("cellChange", this.updatePageDots);
		this.on("resize", this.updatePageDots);
		this.on("deactivate", this.deactivatePageDots);
	};
	o.activatePageDots = function () {
		this.pageDots.activate();
	};
	o.updateSelectedPageDots = function () {
		this.pageDots.updateSelected();
	};
	o.updatePageDots = function () {
		this.pageDots.setDots();
	};
	o.deactivatePageDots = function () {
		this.pageDots.deactivate();
	};
	i.PageDots = r;
	return i;
});
(function (t, n) {
	if (typeof define == "function" && define.amd) {
		define("flickity/js/player", [
			"ev-emitter/ev-emitter",
			"fizzy-ui-utils/utils",
			"./flickity",
		], function (t, e, i) {
			return n(t, e, i);
		});
	} else if (typeof module == "object" && module.exports) {
		module.exports = n(
			require("ev-emitter"),
			require("fizzy-ui-utils"),
			require("./flickity")
		);
	} else {
		n(t.EvEmitter, t.fizzyUIUtils, t.Flickity);
	}
})(window, function t(e, i, n) {
	function s(t) {
		this.parent = t;
		this.state = "stopped";
		this.onVisibilityChange = this.visibilityChange.bind(this);
		this.onVisibilityPlay = this.visibilityPlay.bind(this);
	}
	s.prototype = Object.create(e.prototype);
	s.prototype.play = function () {
		if (this.state == "playing") {
			return;
		}
		var t = document.hidden;
		if (t) {
			document.addEventListener(
				"visibilitychange",
				this.onVisibilityPlay
			);
			return;
		}
		this.state = "playing";
		document.addEventListener("visibilitychange", this.onVisibilityChange);
		this.tick();
	};
	s.prototype.tick = function () {
		if (this.state != "playing") {
			return;
		}
		var t = this.parent.options.autoPlay;
		t = typeof t == "number" ? t : 3e3;
		var e = this;
		this.clear();
		this.timeout = setTimeout(function () {
			e.parent.next(true);
			e.tick();
		}, t);
	};
	s.prototype.stop = function () {
		this.state = "stopped";
		this.clear();
		document.removeEventListener(
			"visibilitychange",
			this.onVisibilityChange
		);
	};
	s.prototype.clear = function () {
		clearTimeout(this.timeout);
	};
	s.prototype.pause = function () {
		if (this.state == "playing") {
			this.state = "paused";
			this.clear();
		}
	};
	s.prototype.unpause = function () {
		if (this.state == "paused") {
			this.play();
		}
	};
	s.prototype.visibilityChange = function () {
		var t = document.hidden;
		this[t ? "pause" : "unpause"]();
	};
	s.prototype.visibilityPlay = function () {
		this.play();
		document.removeEventListener("visibilitychange", this.onVisibilityPlay);
	};
	i.extend(n.defaults, { pauseAutoPlayOnHover: true });
	n.createMethods.push("_createPlayer");
	var r = n.prototype;
	r._createPlayer = function () {
		this.player = new s(this);
		this.on("activate", this.activatePlayer);
		this.on("uiChange", this.stopPlayer);
		this.on("pointerDown", this.stopPlayer);
		this.on("deactivate", this.deactivatePlayer);
	};
	r.activatePlayer = function () {
		if (!this.options.autoPlay) {
			return;
		}
		this.player.play();
		this.element.addEventListener("mouseenter", this);
	};
	r.playPlayer = function () {
		this.player.play();
	};
	r.stopPlayer = function () {
		this.player.stop();
	};
	r.pausePlayer = function () {
		this.player.pause();
	};
	r.unpausePlayer = function () {
		this.player.unpause();
	};
	r.deactivatePlayer = function () {
		this.player.stop();
		this.element.removeEventListener("mouseenter", this);
	};
	r.onmouseenter = function () {
		if (!this.options.pauseAutoPlayOnHover) {
			return;
		}
		this.player.pause();
		this.element.addEventListener("mouseleave", this);
	};
	r.onmouseleave = function () {
		this.player.unpause();
		this.element.removeEventListener("mouseleave", this);
	};
	n.Player = s;
	return n;
});
(function (i, n) {
	if (typeof define == "function" && define.amd) {
		define("flickity/js/add-remove-cell", [
			"./flickity",
			"fizzy-ui-utils/utils",
		], function (t, e) {
			return n(i, t, e);
		});
	} else if (typeof module == "object" && module.exports) {
		module.exports = n(i, require("./flickity"), require("fizzy-ui-utils"));
	} else {
		n(i, i.Flickity, i.fizzyUIUtils);
	}
})(window, function t(e, i, n) {
	function l(t) {
		var e = document.createDocumentFragment();
		t.forEach(function (t) {
			e.appendChild(t.element);
		});
		return e;
	}
	var s = i.prototype;
	s.insert = function (t, e) {
		var i = this._makeCells(t);
		if (!i || !i.length) {
			return;
		}
		var n = this.cells.length;
		e = e === undefined ? n : e;
		var s = l(i);
		var r = e == n;
		if (r) {
			this.slider.appendChild(s);
		} else {
			var o = this.cells[e].element;
			this.slider.insertBefore(s, o);
		}
		if (e === 0) {
			this.cells = i.concat(this.cells);
		} else if (r) {
			this.cells = this.cells.concat(i);
		} else {
			var a = this.cells.splice(e, n - e);
			this.cells = this.cells.concat(i).concat(a);
		}
		this._sizeCells(i);
		this.cellChange(e, true);
	};
	s.append = function (t) {
		this.insert(t, this.cells.length);
	};
	s.prepend = function (t) {
		this.insert(t, 0);
	};
	s.remove = function (t) {
		var e = this.getCells(t);
		if (!e || !e.length) {
			return;
		}
		var i = this.cells.length - 1;
		e.forEach(function (t) {
			t.remove();
			var e = this.cells.indexOf(t);
			i = Math.min(e, i);
			n.removeFrom(this.cells, t);
		}, this);
		this.cellChange(i, true);
	};
	s.cellSizeChange = function (t) {
		var e = this.getCell(t);
		if (!e) {
			return;
		}
		e.getSize();
		var i = this.cells.indexOf(e);
		this.cellChange(i);
	};
	s.cellChange = function (t, e) {
		var i = this.selectedElement;
		this._positionCells(t);
		this._getWrapShiftCells();
		this.setGallerySize();
		var n = this.getCell(i);
		if (n) {
			this.selectedIndex = this.getCellSlideIndex(n);
		}
		this.selectedIndex = Math.min(
			this.slides.length - 1,
			this.selectedIndex
		);
		this.emitEvent("cellChange", [t]);
		this.select(this.selectedIndex);
		if (e) {
			this.positionSliderAtSelected();
		}
	};
	return i;
});
(function (i, n) {
	if (typeof define == "function" && define.amd) {
		define("flickity/js/lazyload", [
			"./flickity",
			"fizzy-ui-utils/utils",
		], function (t, e) {
			return n(i, t, e);
		});
	} else if (typeof module == "object" && module.exports) {
		module.exports = n(i, require("./flickity"), require("fizzy-ui-utils"));
	} else {
		n(i, i.Flickity, i.fizzyUIUtils);
	}
})(window, function t(e, i, o) {
	"use strict";
	i.createMethods.push("_createLazyload");
	var n = i.prototype;
	n._createLazyload = function () {
		this.on("select", this.lazyLoad);
	};
	n.lazyLoad = function () {
		var t = this.options.lazyLoad;
		if (!t) {
			return;
		}
		var e = typeof t == "number" ? t : 0;
		var i = this.getAdjacentCellElements(e);
		var n = [];
		i.forEach(function (t) {
			var e = s(t);
			n = n.concat(e);
		});
		n.forEach(function (t) {
			new r(t, this);
		}, this);
	};
	function s(t) {
		if (t.nodeName == "IMG") {
			var e = t.getAttribute("data-flickity-lazyload");
			var i = t.getAttribute("data-flickity-lazyload-src");
			var n = t.getAttribute("data-flickity-lazyload-srcset");
			if (e || i || n) {
				return [t];
			}
		}
		var s =
			"img[data-flickity-lazyload], " +
			"img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]";
		var r = t.querySelectorAll(s);
		return o.makeArray(r);
	}
	function r(t, e) {
		this.img = t;
		this.flickity = e;
		this.load();
	}
	r.prototype.handleEvent = o.handleEvent;
	r.prototype.load = function () {
		this.img.addEventListener("load", this);
		this.img.addEventListener("error", this);
		var t =
			this.img.getAttribute("data-flickity-lazyload") ||
			this.img.getAttribute("data-flickity-lazyload-src");
		var e = this.img.getAttribute("data-flickity-lazyload-srcset");
		this.img.src = t;
		if (e) {
			this.img.setAttribute("srcset", e);
		}
		this.img.removeAttribute("data-flickity-lazyload");
		this.img.removeAttribute("data-flickity-lazyload-src");
		this.img.removeAttribute("data-flickity-lazyload-srcset");
	};
	r.prototype.onload = function (t) {
		this.complete(t, "flickity-lazyloaded");
	};
	r.prototype.onerror = function (t) {
		this.complete(t, "flickity-lazyerror");
	};
	r.prototype.complete = function (t, e) {
		this.img.removeEventListener("load", this);
		this.img.removeEventListener("error", this);
		var i = this.flickity.getParentCell(this.img);
		var n = i && i.element;
		this.flickity.cellSizeChange(n);
		this.img.classList.add(e);
		this.flickity.dispatchEvent("lazyLoad", t, n);
	};
	i.LazyLoader = r;
	return i;
});
/*!
 * Flickity v2.2.2
 * Touch, responsive, flickable carousels
 *
 * Licensed GPLv3 for open source use
 * or Flickity Commercial License for commercial use
 *
 * https://flickity.metafizzy.co
 * Copyright 2015-2021 Metafizzy
 */
(function (t, e) {
	if (typeof define == "function" && define.amd) {
		define("flickity/js/index", [
			"./flickity",
			"./drag",
			"./prev-next-button",
			"./page-dots",
			"./player",
			"./add-remove-cell",
			"./lazyload",
		], e);
	} else if (typeof module == "object" && module.exports) {
		module.exports = e(
			require("./flickity"),
			require("./drag"),
			require("./prev-next-button"),
			require("./page-dots"),
			require("./player"),
			require("./add-remove-cell"),
			require("./lazyload")
		);
	}
})(window, function t(e) {
	return e;
});
/*!
 * Flickity asNavFor v2.0.2
 * enable asNavFor for Flickity
 */
(function (t, e) {
	if (typeof define == "function" && define.amd) {
		define("flickity-as-nav-for/as-nav-for", [
			"flickity/js/index",
			"fizzy-ui-utils/utils",
		], e);
	} else if (typeof module == "object" && module.exports) {
		module.exports = e(require("flickity"), require("fizzy-ui-utils"));
	} else {
		t.Flickity = e(t.Flickity, t.fizzyUIUtils);
	}
})(window, function t(n, s) {
	n.createMethods.push("_createAsNavFor");
	var e = n.prototype;
	e._createAsNavFor = function () {
		this.on("activate", this.activateAsNavFor);
		this.on("deactivate", this.deactivateAsNavFor);
		this.on("destroy", this.destroyAsNavFor);
		var e = this.options.asNavFor;
		if (!e) {
			return;
		}
		var i = this;
		setTimeout(function t() {
			i.setNavCompanion(e);
		});
	};
	e.setNavCompanion = function (t) {
		t = s.getQueryElement(t);
		var e = n.data(t);
		if (!e || e == this) {
			return;
		}
		this.navCompanion = e;
		var i = this;
		this.onNavCompanionSelect = function () {
			i.navCompanionSelect();
		};
		e.on("select", this.onNavCompanionSelect);
		this.on("staticClick", this.onNavStaticClick);
		this.navCompanionSelect(true);
	};
	e.navCompanionSelect = function (t) {
		var e = this.navCompanion && this.navCompanion.selectedCells;
		if (!e) {
			return;
		}
		var i = e[0];
		var n = this.navCompanion.cells.indexOf(i);
		var s = n + e.length - 1;
		var r = Math.floor(a(n, s, this.navCompanion.cellAlign));
		this.selectCell(r, false, t);
		this.removeNavSelectedElements();
		if (r >= this.cells.length) {
			return;
		}
		var o = this.cells.slice(n, s + 1);
		this.navSelectedElements = o.map(function (t) {
			return t.element;
		});
		this.changeNavSelectedClass("add");
	};
	function a(t, e, i) {
		return (e - t) * i + t;
	}
	e.changeNavSelectedClass = function (e) {
		this.navSelectedElements.forEach(function (t) {
			t.classList[e]("is-nav-selected");
		});
	};
	e.activateAsNavFor = function () {
		this.navCompanionSelect(true);
	};
	e.removeNavSelectedElements = function () {
		if (!this.navSelectedElements) {
			return;
		}
		this.changeNavSelectedClass("remove");
		delete this.navSelectedElements;
	};
	e.onNavStaticClick = function (t, e, i, n) {
		if (typeof n == "number") {
			this.navCompanion.selectCell(n);
		}
	};
	e.deactivateAsNavFor = function () {
		this.removeNavSelectedElements();
	};
	e.destroyAsNavFor = function () {
		if (!this.navCompanion) {
			return;
		}
		this.navCompanion.off("select", this.onNavCompanionSelect);
		this.off("staticClick", this.onNavStaticClick);
		delete this.navCompanion;
	};
	return n;
});
/*!
 * imagesLoaded v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
(function (e, i) {
	"use strict";
	if (typeof define == "function" && define.amd) {
		define("imagesloaded/imagesloaded", [
			"ev-emitter/ev-emitter",
		], function (t) {
			return i(e, t);
		});
	} else if (typeof module == "object" && module.exports) {
		module.exports = i(e, require("ev-emitter"));
	} else {
		e.imagesLoaded = i(e, e.EvEmitter);
	}
})(typeof window !== "undefined" ? window : this, function t(e, i) {
	var s = e.jQuery;
	var r = e.console;
	function o(t, e) {
		for (var i in e) {
			t[i] = e[i];
		}
		return t;
	}
	var n = Array.prototype.slice;
	function a(t) {
		if (Array.isArray(t)) {
			return t;
		}
		var e = typeof t == "object" && typeof t.length == "number";
		if (e) {
			return n.call(t);
		}
		return [t];
	}
	function l(t, e, i) {
		if (!(this instanceof l)) {
			return new l(t, e, i);
		}
		var n = t;
		if (typeof t == "string") {
			n = document.querySelectorAll(t);
		}
		if (!n) {
			r.error("Bad element for imagesLoaded " + (n || t));
			return;
		}
		this.elements = a(n);
		this.options = o({}, this.options);
		if (typeof e == "function") {
			i = e;
		} else {
			o(this.options, e);
		}
		if (i) {
			this.on("always", i);
		}
		this.getImages();
		if (s) {
			this.jqDeferred = new s.Deferred();
		}
		setTimeout(this.check.bind(this));
	}
	l.prototype = Object.create(i.prototype);
	l.prototype.options = {};
	l.prototype.getImages = function () {
		this.images = [];
		this.elements.forEach(this.addElementImages, this);
	};
	l.prototype.addElementImages = function (t) {
		if (t.nodeName == "IMG") {
			this.addImage(t);
		}
		if (this.options.background === true) {
			this.addElementBackgroundImages(t);
		}
		var e = t.nodeType;
		if (!e || !h[e]) {
			return;
		}
		var i = t.querySelectorAll("img");
		for (var n = 0; n < i.length; n++) {
			var s = i[n];
			this.addImage(s);
		}
		if (typeof this.options.background == "string") {
			var r = t.querySelectorAll(this.options.background);
			for (n = 0; n < r.length; n++) {
				var o = r[n];
				this.addElementBackgroundImages(o);
			}
		}
	};
	var h = { 1: true, 9: true, 11: true };
	l.prototype.addElementBackgroundImages = function (t) {
		var e = getComputedStyle(t);
		if (!e) {
			return;
		}
		var i = /url\((['"])?(.*?)\1\)/gi;
		var n = i.exec(e.backgroundImage);
		while (n !== null) {
			var s = n && n[2];
			if (s) {
				this.addBackground(s, t);
			}
			n = i.exec(e.backgroundImage);
		}
	};
	l.prototype.addImage = function (t) {
		var e = new c(t);
		this.images.push(e);
	};
	l.prototype.addBackground = function (t, e) {
		var i = new u(t, e);
		this.images.push(i);
	};
	l.prototype.check = function () {
		var n = this;
		this.progressedCount = 0;
		this.hasAnyBroken = false;
		if (!this.images.length) {
			this.complete();
			return;
		}
		function e(t, e, i) {
			setTimeout(function () {
				n.progress(t, e, i);
			});
		}
		this.images.forEach(function (t) {
			t.once("progress", e);
			t.check();
		});
	};
	l.prototype.progress = function (t, e, i) {
		this.progressedCount++;
		this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded;
		this.emitEvent("progress", [this, t, e]);
		if (this.jqDeferred && this.jqDeferred.notify) {
			this.jqDeferred.notify(this, t);
		}
		if (this.progressedCount == this.images.length) {
			this.complete();
		}
		if (this.options.debug && r) {
			r.log("progress: " + i, t, e);
		}
	};
	l.prototype.complete = function () {
		var t = this.hasAnyBroken ? "fail" : "done";
		this.isComplete = true;
		this.emitEvent(t, [this]);
		this.emitEvent("always", [this]);
		if (this.jqDeferred) {
			var e = this.hasAnyBroken ? "reject" : "resolve";
			this.jqDeferred[e](this);
		}
	};
	function c(t) {
		this.img = t;
	}
	c.prototype = Object.create(i.prototype);
	c.prototype.check = function () {
		var t = this.getIsImageComplete();
		if (t) {
			this.confirm(this.img.naturalWidth !== 0, "naturalWidth");
			return;
		}
		this.proxyImage = new Image();
		this.proxyImage.addEventListener("load", this);
		this.proxyImage.addEventListener("error", this);
		this.img.addEventListener("load", this);
		this.img.addEventListener("error", this);
		this.proxyImage.src = this.img.src;
	};
	c.prototype.getIsImageComplete = function () {
		return this.img.complete && this.img.naturalWidth;
	};
	c.prototype.confirm = function (t, e) {
		this.isLoaded = t;
		this.emitEvent("progress", [this, this.img, e]);
	};
	c.prototype.handleEvent = function (t) {
		var e = "on" + t.type;
		if (this[e]) {
			this[e](t);
		}
	};
	c.prototype.onload = function () {
		this.confirm(true, "onload");
		this.unbindEvents();
	};
	c.prototype.onerror = function () {
		this.confirm(false, "onerror");
		this.unbindEvents();
	};
	c.prototype.unbindEvents = function () {
		this.proxyImage.removeEventListener("load", this);
		this.proxyImage.removeEventListener("error", this);
		this.img.removeEventListener("load", this);
		this.img.removeEventListener("error", this);
	};
	function u(t, e) {
		this.url = t;
		this.element = e;
		this.img = new Image();
	}
	u.prototype = Object.create(c.prototype);
	u.prototype.check = function () {
		this.img.addEventListener("load", this);
		this.img.addEventListener("error", this);
		this.img.src = this.url;
		var t = this.getIsImageComplete();
		if (t) {
			this.confirm(this.img.naturalWidth !== 0, "naturalWidth");
			this.unbindEvents();
		}
	};
	u.prototype.unbindEvents = function () {
		this.img.removeEventListener("load", this);
		this.img.removeEventListener("error", this);
	};
	u.prototype.confirm = function (t, e) {
		this.isLoaded = t;
		this.emitEvent("progress", [this, this.element, e]);
	};
	l.makeJQueryPlugin = function (t) {
		t = t || e.jQuery;
		if (!t) {
			return;
		}
		s = t;
		s.fn.imagesLoaded = function (t, e) {
			var i = new l(this, t, e);
			return i.jqDeferred.promise(s(this));
		};
	};
	l.makeJQueryPlugin();
	return l;
});
/*!
 * Flickity imagesLoaded v2.0.0
 * enables imagesLoaded option for Flickity
 */
(function (i, n) {
	if (typeof define == "function" && define.amd) {
		define(["flickity/js/index", "imagesloaded/imagesloaded"], function (
			t,
			e
		) {
			return n(i, t, e);
		});
	} else if (typeof module == "object" && module.exports) {
		module.exports = n(i, require("flickity"), require("imagesloaded"));
	} else {
		i.Flickity = n(i, i.Flickity, i.imagesLoaded);
	}
})(window, function t(e, i, s) {
	"use strict";
	i.createMethods.push("_createImagesLoaded");
	var n = i.prototype;
	n._createImagesLoaded = function () {
		this.on("activate", this.imagesLoaded);
	};
	n.imagesLoaded = function () {
		if (!this.options.imagesLoaded) {
			return;
		}
		var n = this;
		function t(t, e) {
			var i = n.getParentCell(e.img);
			n.cellSizeChange(i && i.element);
			if (!n.options.freeScroll) {
				n.positionSliderAtSelected();
			}
		}
		s(this.slider).on("progress", t);
	};
	return i;
});

jQuery(document).ready(function ($) {
    // $(document).ready(function() {
    // cache DOM nodes
    var $donateBoxTypes = $("#donate-box-type>ul>li");
    var $donateBoxOptions = $("#donate-box-options>ul>li");
    var $donateBoxIframeWrapper = $(".donate-box__iframe");
    var $donateFooter = $(".donate-footer");
    var $donateBgWrapper = $(".donate-main__bg__wrapper");

    // slick carousel for donate involve
    $(".donate-involve__card__slider").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2.5,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    centerMode: true,
                    centerPadding: "20px",
                    slidesToShow: 1,
                },
            },
        ],
    });

    // handle donate involve mobile tabs via slect change event
    $("#donate_tab_select").on("change", function () {
        var tab_val = $(this).val();
        var attr = '[href="' + tab_val + '"]';
        $(attr).tab("show");
    });
    // handle donate involve tabs
    $("#donate-involve-tabs>li>a").on("click", function (e) {
        e.preventDefault();
        $(this).tab("show");
    });
    // then refresh slick slider to avoid width issue
    $("#donate-involve-tabs>li>a").on("shown.bs.tab", function () {
        $(".donate-involve__card__slider").slick("refresh");
    });

    // handle donate involve mobile tabs
    // $("#donate-involve-dropdown-menu>a").on("click", function(e) {
    //   e.preventDefault();
    //   $(this)
    //     .tab("show")
    //     .siblings(".dropdown-item")
    //     .removeClass("active");
    //   $donateInvolveDropdownText.text($(this).text());
    // });
    // then refresh slick slider to avoid width issue
    $("#donate-involve-dropdown-menu>a").on("shown.bs.tab", function () {
        $(".donate-involve__card__slider").slick("refresh");
    });

    // handle donate box types
    $donateBoxTypes.on("click", function (e) {
        $(this).addClass("active").siblings("li").removeClass("active");
    });

    // handle donate box options
    $donateBoxOptions.on("click", function (e) {
        $(this).addClass("active").siblings("li").removeClass("active");
    });

    // handle donate iframe
    $("#donate-box-type li, #donate-box-options li").click(function () {
        var data_type = $("#donate-box-type li.active").data("type");
        var iframe = $("#donate-box-options li.active").data(data_type);
        if (iframe) {
            $donateBoxIframeWrapper.addClass("active");
            $donateFooter.addClass("active");
            $donateBgWrapper.addClass("active");

            $("#donate-box-iframe").attr("src", iframe);
        } else {
            $donateBoxIframeWrapper.removeClass("active");
        }
       // console.log(iframe);
    });
});
jQuery(document).ready(function ($) {
    // how-money-help component slider
    $(".how-money-help .cards, .other-way-to-get-involved .items").flickity({
        // options
        cellAlign: "center",
        wrapAround: true,
        watchCSS: true,
        contain: true,
        prevNextButtons: false,
        initialIndex: 1,
    });
});

// Main javascript entry point
// Should handle bootstrapping/starting application

"use strict";
jQuery(document).ready(function ($) {
	//console.log("appjs loaded");

	// $(document).ready(function() {
	// cache DOM nodes
	var $siteNav = $("#site-main-nav");
	var $mobileNav = $("#mobile-nav");
	var $siteHeader = $("#site-header");
	var $siteSearch = $("#site-search");
	var $siteSearchTrigger = $("#search-trigger");
	var $megamenuTriggers = $siteNav.find("li.has-megamenu>a");
	var $megamenuClosers = $(".megamenu-close");
	var $megamenuTabs = $(".megamenu-tab>a");
	var $megamenuTabPanes = $(".megamenu-tab-pane");
	// var $mobileSubmenuTriggers = $mobileNav.find("li.has-submenu>a");
	var $mobileSubmenuTriggers = $mobileNav.find("li.menu-item-has-children>a");
	var $footerAccordionTriggers = $(".will-accordion__trigger");

	// functions
	var addBackDrop = function (backDropName) {
		$("body")
			.addClass("backdrop-active")
			.append('<div class="backdrop" id="' + backDropName + '"></div>');
	};

	var removeBackDrop = function (backDropName) {
		$("body")
			.removeClass("backdrop-active")
			.find("#" + backDropName)
			.remove();
	};

	var closeMegamenu = function (e) {
		$siteNav.find("li.has-megamenu").removeClass("active");
		removeBackDrop("megamenu-backdrop");
	};

	var closeSiteSearch = function (e) {
		$siteSearch.removeClass("active").find("#search").val("");
		$siteSearchTrigger.removeClass("active");
		$siteHeader.removeClass("search-active");
		removeBackDrop("sitesearch-backdrop");
	};

	// handle escape button
	$(document).on("keydown", function (e) {
		if (e.keyCode === 27) {
			// if pressed ESC, then
			closeMegamenu(); // close megamenu
			closeSiteSearch(); // close sitesearch
		}
	});

	// enable anchor smooth scroll
	$('a[data-scroll="smooth"]:not([href="#"])').click(function () {
		if (
			location.pathname.replace(/^\//, "") ==
				this.pathname.replace(/^\//, "") &&
			location.hostname == this.hostname
		) {
			var target = $(this.hash);
			target = target.length
				? target
				: $("[name=" + this.hash.slice(1) + "]");
			if (target.length) {
				$("html, body").animate(
					{
						scrollTop: target.offset().top,
					},
					1000
				);
				return false;
			}
		}
	});

	// handle back to top button
	if ($("#back-to-top").length) {
		var scrollTrigger = 200, // px
			backToTop = function () {
				var scrollTop = $(window).scrollTop();
				if (scrollTop > scrollTrigger) {
					$("#back-to-top").addClass("shown");
				} else {
					$("#back-to-top").removeClass("shown");
				}
			};

		backToTop();
		$(window).on("scroll", function () {
			backToTop();
		});
		$("#back-to-top").on("click", function (e) {
			e.preventDefault();
			$("html,body").animate(
				{
					scrollTop: 0,
				},
				700
			);
		});
	}

	// handle sticky header
	$siteHeader.mhead();

	$(window).on("scroll", function () {
		if (window.scrollY > 100) {
			$siteHeader.addClass("scrolled");
		} else {
			$siteHeader.removeClass("scrolled");
		}
	});

	// handle megamenu
	$megamenuTriggers.on("click", function (e) {
		e.preventDefault();
		// close site search in case it's open
		closeSiteSearch();

		$megamenuTabPanes.hide();
		$(this)
			.parent()
			.addClass("active")
			.siblings(".has-megamenu")
			.removeClass("active");

		// remove existing and then add megamenu backdrop
		removeBackDrop("megamenu-backdrop");
		addBackDrop("megamenu-backdrop");
		// handle megamenu backdrop
		$("#megamenu-backdrop").on("click", closeMegamenu);
	});

	$megamenuClosers.on("click", function (e) {
		$megamenuTabPanes.hide();
		$(this).closest(".has-megamenu").removeClass("active");

		// remove megamenu backdrop
		removeBackDrop("megamenu-backdrop");
	});

	$megamenuTabs.on("mouseover", function (e) {
		e.preventDefault();
		var hrefId = $(this).attr("href");
		$(hrefId).show().siblings(".megamenu-tab-pane").hide();
	});

	// handle mobile nav
	$("#mobileNav-toggler")
		.unbind("click")
		.on("click", function (e) {
			// close search box incase it's open
			closeSiteSearch();

			$(this).toggleClass("active");
			$siteHeader.toggleClass("active");
			$mobileNav.toggleClass("active");
		});

	$mobileSubmenuTriggers.unbind("click").on("click", function (e) {
		e.preventDefault();
		$(this)
			.siblings(".sub-menu")
			.toggleClass("active")
			.parent(".menu-item-has-children")
			.toggleClass("active");
	});

	//   toggle site search
	$("#search-trigger").on("click", function (e) {
		// close megamenu in case it's open
		closeMegamenu();

		$(this).addClass("active");
		$siteHeader.addClass("search-active");
		$siteSearch.addClass("active").find("#search").focus();

		// remove existing and then add sitesearch backdrop
		removeBackDrop("sitesearch-backdrop");
		addBackDrop("sitesearch-backdrop");
		// handle sitesearch backdrop
		$("#sitesearch-backdrop").on("click", closeSiteSearch);
	});

	$(".site-search__close").on("click", closeSiteSearch);

	// handle footer accordions
	$footerAccordionTriggers.on("click", function (e) {
		$(this)
			.toggleClass("active")
			.siblings(".will-accordion__content")
			.toggleClass("active");
	});

	// handle form controlers
	// autoresize textarea on content input
	$(".textarea")
		.on("change keyup keydown paste cut", "textarea", function () {
			$(this).height(0).height(this.scrollHeight);
		})
		.find("textarea")
		.change();
	// focus on clicking select dropdown
	$(".select.has-suffix>.suffix").on("click", function (e) {
		$(this).siblings("select")[0].focus();
	});

	// handle footer logo widget with slick
	$(".widget--logos ul").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		autoplay: true,
		autoplaySpeed: 1000,
		centerMode: true,
		centerPadding: 0,
		mobileFirst: true,
		responsive: [
			{
				breakpoint: 560,
				settings: "unslick",
			},
		],
	});

	// console.log( "site url > ", current_site_url )

	// // console.log( "current url > " + current_url)
	// console.log( "current p id > " + current_menu_parent_id)
	// console.log( "current a selector > " + a_selector)

	/*
   Dynamic Image based on device width
  */

	// Loop through all the element first which dynamic bg background
	var all_dynamic_bg = $("*.dynamic-bg");

	all_dynamic_bg.each(function (index) {
		//console.log("lol");
		var bg_desktop_url = $(this).attr("data-desktop-bg");
		var bg_mobile_url = $(this).attr("data-mobile-bg");

		if ($(window).width() > 600) {
			// Desktop
			$(this).css("background-image", "url(" + bg_desktop_url + ")");
		} else {
			$(this).css("background-image", "url(" + bg_mobile_url + ")");
		}
	});
});

// Main javascript entry point
// Should handle bootstrapping/starting application

"use strict";
jQuery(document).ready(function ($) {
    //console.log("appjs loaded");

    // $(document).ready(function() {
    // cache DOM nodes
    var $homeInvolveDropdownText = $("#home-involve-dropdown-toggler").find(
        ".text"
    );
    var $homeDiscoverMapSVG = $("#home-map-svg");

    //console.log($homeDiscoverMapSVG);

    var $homeDiscoverMapSVGPaths = $homeDiscoverMapSVG.find(
        "path.ableChildAfrica"
    );
    var $homeSupportModal = $("#homeSupportModal");
    var $homeSupportVideo = $("#homeSupportVideo");
    var $slickHomeFeatures = $("#slick-home-features");
    var $slickHomeSingleFeature = $slickHomeFeatures.find(".feature");

    // slick carousel for home features
    $slickHomeFeatures.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        centerMode: true,
        centerPadding: "40px",
        infinite: false,
        mobileFirst: true,
        responsive: [{
            breakpoint: 768,
            settings: "unslick"
        }]
    });
    // make slides advance to center mode upon click
    $slickHomeFeatures.on("click", ".slick-slide", function (e) {
        e.stopPropagation();
        var index = $(this).data("slick-index");
        if ($slickHomeFeatures.slick("slickCurrentSlide") !== index) {
            $slickHomeFeatures.slick("slickGoTo", index);
        }
    });

    // handle slick home single feature
    $slickHomeSingleFeature.on("click", function (e) {
        $(this)
            .addClass("hover")
            .siblings(".feature")
            .removeClass("hover");
    });

    // slick carousel for home involve
    $(".home-involve__card__slider").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2.5
                }
            },
            {
                breakpoint: 768,
                settings: {
                    centerMode: true,
                    centerPadding: "20px",
                    slidesToShow: 1
                }
            }
        ]
    });

    // handle home involve mobile tabs via slect change event
    $("#get_involved_select").on("change", function () {
        var tab_val = $(this).val();
        var attr = '[href="' + tab_val + '"]';
        $(attr).tab("show");
    });

    // handle home involve desktop tabs
    $("#home-involve-tabs>li>a").on("click", function (e) {
        e.preventDefault();
        $(this).tab("show");
    });
    // then refresh slick slider to avoid width issue
    $("#home-involve-tabs>li>a").on("shown.bs.tab", function () {
        $(".home-involve__card__slider").slick("refresh");
    });

    $("#home-involve-dropdown-menu>a").on("shown.bs.tab", function () {
        $(".home-involve__card__slider").slick("refresh");
    });

    // handle home support video
    $homeSupportModal.on("hide.bs.modal", function () {
        $homeSupportVideo.attr("src", "");
    });

    // handle home discover tabs and map area change
    //console.log($homeDiscoverMapSVGPaths);
    $("#home-discover-tabs>li>a").on("click mouseover", function (e) {
        e.preventDefault();
        var $self = $(this);
        var discoverArea = "#" + $self.data("area");
        $self.tab("show");

        $homeDiscoverMapSVGPaths.css({
            fill: "#ece4de",
            stroke: "#2f3e58"
        });
        $homeDiscoverMapSVG.find(discoverArea).css({
            fill: "#ee6f44"
        });
    });
    // make the first area highlighted on DOM load
    var firstArea = $("#home-discover-tabs>li>a.active").data("area");
    //console.log(firstArea);
    $homeDiscoverMapSVG.find("#" + firstArea).css({
        fill: "#e94e1b"
    });
});

// Fet Card Section Home
jQuery(document).ready(function ($) {
    if ($("body").hasClass("page-template-page-home")) {
        // mobile breakpoint
        var mobile_bp = 601;

        // get window width
        var c_w_w = $(window).outerWidth();

        // active the slider if current window width is less than the mobile BP
        if (c_w_w < mobile_bp) {
            // remove all the not-active and

            $(".fet-cards-container .items").slick({
                arrows: false,
                centerMode: true,
                centerPadding: "25px",
                slidesToShow: 1,
                dots: true,
                infinite: true
            });
        } else {
            // Toggling active class

            // set the main items container height fixed for height jumping issue
            var max_card_height = get_max_height("div.fet-card");
            $(".fet-cards-container").css("min-height", max_card_height);
            console.log("home min height ", max_card_height);
            $("div.fet-card").on("click", function () {
                if (!$(this).hasClass("active")) {
                    console.log("lol")

                    $("div.fet-card").removeClass("active-by-js");
                    $(this).addClass("active-by-js");
                    $(this).addClass("active");

                    setTimeout(function () {
                        $("div.fet-card").each(function () {
                            if (!$(this).hasClass("active-by-js")) {
                                $(this).removeClass("active");
                            }
                        });
                        // alert("Hello");
                    }, 500);
                }
            });
        }
    } // check if page template select or not

    // This function will return the max height of the passed element
    function get_max_height(elem) {
        var h = 0;
        // $(elem)
        $(elem).each(function (index) {
            var currentHeight = $(this).outerHeight();
            h = currentHeight > h ? currentHeight : h;
        });

        return h;
    }







});
// cache DOM nodes
jQuery(document).ready(function($) {
    var $homeInvolveDropdownText = $("#team-members-dropdown-toggler").find(
        ".text"
    );
    // handle team tabs via slect change event
    $("#team_tab_select").on("change", function() {
        var tab_val = $(this).val();
        var attr = '[href="' + tab_val + '"]';
        $(attr).tab("show");
    });
    // handle team member tabs
    $("#team-members-tabs>li>a").on("click", function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
    // handle home involve mobile tabs
    $("#team-members-dropdown-menu>a").on("click", function(e) {
        e.preventDefault();
        $(this)
            .tab("show")
            .siblings(".dropdown-item")
            .removeClass("active");
        $homeInvolveDropdownText.text($(this).text());
    });
});

jQuery(document).ready(function( $ ) {
// $(document).ready(function() {
  // cache DOM nodes
  var $formSubmitBtn = $("#contact-form-submit");

  // toggle submit ability based on agreement check
  $("input#agreement").on("change", function(e) {
    $formSubmitBtn.prop("disabled", function(index, value) {
      return !value;
    });
  });

  //   handle form validation
  $("#contact-form").validate({
    highlight: function(element) {
      $(element)
        .parent()
        .addClass("error");
    },
    unhighlight: function(element) {
      $(element)
        .parent()
        .removeClass("error");
    },
    errorElement: "span",
    rules: {
      confirm_email: {
        equalTo: "#email"
      }
    },
    messages: {
      confirm_email: {
        equalTo: "Please enter the same email as above"
      }
    }
  });
});

jQuery(document).ready(function ($) {

    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });

    
    if(!document.querySelector('.banner')){
        $('header').addClass('no-banner');
    }
    
});


var passed_btn;
var validation = true;


jQuery(document).ready(function ($) {

    $('.give-donation-level-btn').each(function(){
        $(this).find('.give-recurring-multilevel-label').remove();
        // console.log($(this).text());
        let coma_removed = $(this).text().replace(',', '');
        $(this).text(coma_removed);
    })

    $(document).on("touchstart click",".give-donation-level-btn",function(e){
        // setTimeout(() => {
        //     console.log($('#give-amount').val());
        // }, 100);

        if($(this).hasClass('give-btn-level-custom')){
            $(this).parents('#give-donation-level-button-wrap').next().addClass('active');          
        }
        else{
            $(this).parents('#give-donation-level-button-wrap').next().removeClass('active');          
        }
    })

    $(document).on("touchstart click",".switch-container",function(e){
        $(this).toggleClass('active');
        let target_element = $(this).parents('.form-row').find('.give-gift-aid-accept-term-condition');
        target_element.click();

        if($(this).hasClass('active')){
            $('.show-on-second-step .give-submit').addClass('disable');
        }
        else{
            $('.show-on-second-step .give-submit').removeClass('disable');
        }
    });

    function do_wrapping(){
    
        // console.log($('input[name="give-cs-form-currency"]').val());
        if(!document.querySelector('.currency-name')){
            $('.give-donation-level-btn').each(function(){
                if(!($(this).hasClass('give-btn-level-custom'))){
                    $(this).append('<span class="currency-name" style="margin-left: 3px;">'+localStorage.getItem("current_currency")+'</span>');
                }
            })
        }

        if(!document.querySelector('#custom-field-holder-simple')){
            $('#simple-donation-form #give-donation-level-button-wrap').after('<div class="custom-input-button-field-holder" id="custom-field-holder-simple"><input type="number" id="simple-donation-custom-input" class="custom-input-button-field" placeholder="Enter amount" oninput="fill_simple(this)" onClick="select_custom_button(this)"></div>');
            //$('#recurring-donation-form #give-donation-level-button-wrap').after('<div class="custom-input-button-field-holder" id="custom-field-holder-recurring"><input type="number" id="recurring-donation-custom-input" class="custom-input-button-field" placeholder="Enter amount" oninput="fill_recurring(this)" onClick="select_custom_button(this)"></div>');
        }
    
        $('#simple-donation-form #give-donation-level-button-wrap, #simple-donation-form #custom-field-holder-simple').wrapAll('<div id="simple-step-1" class="simple-form-step"></div>');

        if(!document.querySelector('#simple-step-1 .give-submit')){
            $('#simple-step-1').append('<input type="button" class="give-submit give-btn" value="Donate" onClick="go_to_simple_step(2, this)">');
        }

    
        $('#simple-donation-form #give-payment-mode-select, #simple-donation-form #give_checkout_user_info, #simple-donation-form #give_cc_fields').wrap('<div class="show-on-third-step"></div>');
        $('#give-purchase-button').wrap('<div class="show-on-third-step"></div>');
        
        if(!document.querySelector('.show-on-second-step .give-submit')){
            $('#simple-donation-form .give-gift-aid-dedicate-donation').append('<input type="button" class="give-submit give-btn" value="Next step" onClick="go_to_simple_step(3, this)">');
        }
        $('#simple-donation-form .give-gift-aid-dedicate-donation').wrap('<div class="show-on-second-step"></div>');
    
    }

    do_wrapping();


    $('#go-to-edit').on('click', function(){

        do_wrapping();

        document.querySelector('.amount-holder').style.display = 'none';
        document.querySelector('.title-only').style.display = 'block';

        document.querySelector('#simple-donation-form').classList.add('step-1-active');

        document.querySelector('#simple-step-1').style.display = 'block';
        let all_second_step = document.querySelectorAll('.show-on-second-step');
        all_second_step.forEach(element => {
            element.classList.remove('active');
        });
        let all_third_step = document.querySelectorAll('.show-on-third-step');
        all_third_step.forEach(element => {
            element.classList.remove('active');
        });
        document.querySelector('#simple-donation-form').classList.remove('step-3-active');
    })



    $(document).on("touchstart click",".give-submit",function(e){
        $('html, body').animate({
            scrollTop: $(".banner-donate").offset().top
        }, 400);
    });


        

    function validate_form(elem){
        validation = true;

        if($(elem).parents('.give-gift-aid-address-fields').find('[name="give_gift_aid_card_address"]').val() == ''){
            validation = false;
        }

        if($(elem).parents('.give-gift-aid-address-fields').find('[name="give_gift_aid_card_city"]').val() == ''){
            validation = false;
        }

        if($(elem).parents('.give-gift-aid-address-fields').find('[name="give_gift_aid_card_state"]').val() == ''){
            validation = false;
        }

        if($(elem).parents('.give-gift-aid-address-fields').find('[name="give_gift_aid_card_zip"]').val() == ''){
            validation = false;
        }


        if(validation){
            $(elem).parents('.give-gift-aid-dedicate-donation').find('.give-submit').removeClass('disable');
        }
        else{
            $(elem).parents('.give-gift-aid-dedicate-donation').find('.give-submit').addClass('disable');
        }
    }



    $(document).on("keyup",'[name="give_gift_aid_card_address"]',function(e){
        validate_form(e.target); 
    });
  
    $(document).on("keyup",'[name="give_gift_aid_card_city"]',function(e){
        validate_form(e.target); 
    });

    $(document).on("keyup",'[name="give_gift_aid_card_state"]',function(e){
        validate_form(e.target); 
    });

    $(document).on("keyup",'[name="give_gift_aid_card_zip"]',function(e){
        validate_form(e.target); 
    });


});


function go_to_simple_step(step, elem){

    document.querySelector('#simple-donation-form').classList.remove('step-1-active');

    let selected_amount = document.querySelector('#give-amount').value;
    
    var quarter_amount = parseFloat(selected_amount).toFixed(2);
    quarter_amount = (quarter_amount * 0.25).toFixed(2);

    var currancy_sign;
    
    document.querySelector('#selected_amount').innerHTML = selected_amount;
    
    let currancy_msg = document.querySelector('input[name="give-cs-form-currency"]').value;
   
    if(currancy_msg == 'GBP'){
        currancy_sign = '£';
    }
    if(currancy_msg == 'USD'){
        currancy_sign = '$';
    }

    document.querySelector('.percentage-amount').innerHTML = currancy_sign + quarter_amount;

    if(step == 2){

        document.querySelector('#give-amount').focus();

        document.querySelector('#simple-step-1').style.display = 'none';
        let all_second_step = document.querySelectorAll('.show-on-second-step');
        all_second_step.forEach(element => {
            element.classList.add('active');
        });
        let all_third_step = document.querySelectorAll('.show-on-third-step');
        all_third_step.forEach(element => {
            element.classList.remove('active');
        });

        document.querySelector('#simple-donation-form').classList.add('step-2-active');
       
        document.querySelector('#simple-donation-form').classList.remove('step-3-active');
    }
    if(step == 3){

      
        elem.classList.remove('disable');

        document.querySelector('#simple-step-1').style.display = 'none';
        let all_second_step = document.querySelectorAll('.show-on-second-step');
        all_second_step.forEach(element => {
            element.classList.remove('active');
        });
        let all_third_step = document.querySelectorAll('.show-on-third-step');
        all_third_step.forEach(element => {
            element.classList.add('active');
        });

        document.querySelector('#simple-donation-form').classList.remove('step-2-active');
        document.querySelector('#simple-donation-form').classList.add('step-3-active');
       
    }
    
    document.querySelector('#simple-donation-form .title-only').style.display = 'none';
    document.querySelector('#simple-donation-form .amount-holder').style.display = 'block';
}

function select_custom_button(elem){
    
    let all_btns = document.querySelectorAll('.give-donation-level-btn');
    
    all_btns.forEach(element => {
        element.classList.remove('give-default-level');
        if(element.classList.contains('give-btn-level-custom')){
            element.classList.add('give-default-level');
        }
    });    
    

}

function fill_simple(elem){
    let fetched_val = parseInt(elem.value);
    document.querySelector('#simple-donation-form #give-amount').value = fetched_val;
    document.querySelector('#simple-donation-form #give-amount').setAttribute('data-amount', fetched_val);
    document.querySelector('#simple-donation-form [name="give-price-id"]').value='custom';
    console.log(document.querySelector('#simple-donation-form #give-amount').value);
    document.querySelector('#simple-donation-form #selected_amount').innerHTML = fetched_val;
}



// donate modal code
jQuery(document).ready(function ($) {
    $(document).on("keyup", function (e) {
        //console.log();
        if (e.keyCode == 27) {
            $("html").removeClass("show-aca-donate-modal");
        }
    });

    // when click donate button from navigation
    $(".nav-donate-btn").on("click", function (e) {
        e.preventDefault();
        $("html").addClass("show-aca-donate-modal");
    });


     // when click donate button from navigation
     $("a[href='#donation']").on("click", function (e) {
        e.preventDefault();
        $("html").addClass("show-aca-donate-modal");
    });


    // hide the modal
    $(".btn-close-aca-modal").on("click", function (e) {
        e.preventDefault();
        $("html").removeClass("show-aca-donate-modal");
    });

    $('#give-purchase-button').on('click', function(){
        let passed_email = $('#give-email').val();
        let currancy_msg = $('input[name="give-cs-form-currency"]').val();
        var processed_sign;
        if(currancy_msg == 'GBP'){
            processed_sign = '£';
        }
        if(currancy_msg == 'USD'){
            processed_sign = '$';
        }
        let processed_data = processed_sign + $('#give-amount').val();
        
        localStorage.setItem('passed_email', passed_email);
        localStorage.setItem('processed_data', processed_data);
    });

});

jQuery(document).ready(function ($) {
	/**
	 * Dynamic select
	 *
	 */

	$("div.dynamic-select-field").each(function (i) {
		var selectOptions = $(this).find("option");

		var outputHTML = '<div class="js-div">';
		selectOptions.each(function () {
			var attr_string = "";
			$.each(this.attributes, function () {
				attr_string += " " + this.name + "='" + this.value + "'";
			});

			var is_selected = "";

			if ($(this).attr("selected")) {
				is_selected = " isSelected ";
			}

			if ($(this).attr("disabled")) {
				outputHTML +=
					'<div class="disable" >' + $(this).html() + "</div>";
			} else {
				outputHTML +=
					"<div " +
					attr_string +
					' data-value="' +
					$(this).attr("value") +
					'"  ' +
					is_selected +
					"  >" +
					$(this).html() +
					"</div>";
			}
		});
		outputHTML += "</div>";
		$(this).append(outputHTML);
	});

	$("body").on("click", "div.dynamic-select-field label", function (e) {
		var t = $(this);

		if (t.parents(".dynamic-select-field").hasClass("js-div-visible")) {
			$("div").removeClass("js-div-visible");
		} else {
			$("div").removeClass("js-div-visible");
			t.parents(".dynamic-select-field").toggleClass("js-div-visible");
		}

		// console.log("ttt");
		// $("div").removeClass("js-div-visible");
		// var wrapper = $(this).parents(".dynamic-select-field");
		// wrapper.toggleClass("js-div-visible");
		e.stopPropagation();
	});

	$("body").on("click", "div.js-div div:not(.disable)", function (e) {
		var wrapper = $(this).parents(".dynamic-select-field");
		var clickedValue = $(this).data("value").toString();
		var clickedText = $(this).text();
		// console.log(clickedValue, clickedText);
		wrapper.find("select").val(clickedValue).trigger("change");
		// wrapper.find("select").trigger("change");
		wrapper.find("label").find("span").html(clickedText);
		wrapper.toggleClass("js-div-visible");
		// e.stopPropagation();
	});

	// remove box when click else where
	$("body").on("click", function (e) {
		if ($(this).parents(".dynamic-select-field")) {
			$("div").removeClass("js-div-visible");
		}
	});
});

// This file will contain code which require for workplace

jQuery(document).ready(function ($) {
    //console.log("from workplace");

    if ($("body").hasClass("single-workplaces") || $(".component-fet-workplace")[0]) {
       // console.log("got it workpace page");
        // mobile breakpoint
        var mobile_bp = 601;

        // get window width
        var c_w_w = $(window).outerWidth();
        // active the slider if current window width is less than the mobile BP
        if (c_w_w < mobile_bp) {
            // remove all the not-active and

            $(".fet-cards-container .items").slick({
                arrows: false,
                centerMode: true,
                dots: true,
                centerPadding: "50px",
                slidesToShow: 1,
                infinite: true,
            });
        } else {
            // Toggling active class

            // set the main items container height fixed for height jumping issue
            var max_card_height = get_max_height("div.fet-card-number");
            $(".fet-cards-container").css("min-height", max_card_height);

            $("div.fet-card-number").on("click", function () {
                if (!$(this).hasClass("active")) {
                    $("div.fet-card-number").removeClass("active-by-js");
                    $(this).addClass("active-by-js");
                    $(this).addClass("active");

                    setTimeout(function () {
                        $("div.fet-card-number").each(function () {
                            if (!$(this).hasClass("active-by-js")) {
                                $(this).removeClass("active");
                            }
                        });
                        // alert("Hello");
                    }, 500);
                }
            });
        }

        //** JQUERY count up */

        /* Card one */

        // for (var i = 0; i < 3; i++) {
        //   // get number

        // }

        if ($(window).outerWidth() > 601) {
            var section_position = $(".fet-section").position().top;
            var vw = $(window).height();
            var is_animate = true;

            $(window).on("scroll", function () {
                var c_scroll_pos = $(window).scrollTop();
                var scroll_bottom = vw + c_scroll_pos;

                if (scroll_bottom > section_position + 200 && is_animate) {
                    is_animate = false;
                    var card_one_number = $("#fet-card-1").attr("data-count");
                    var card_zero_number = $("#fet-card-0").attr("data-count");
                    var card_two_number = $("#fet-card-2").attr("data-count");

                    // console.log(card_one_number);
                    if (card_one_number) {
                        var card_one = new CountUp("fet-card-1", card_one_number, {
                            duration: 3,
                        });
                        card_one.start();
                    }

                    if (card_zero_number) {
                        var card_zero = new CountUp("fet-card-0", card_zero_number, {
                            duration: 3,
                        });
                        card_zero.start();
                    }

                    if (card_two_number) {
                        var card_two = new CountUp("fet-card-2", card_two_number, {
                            duration: 3,
                        });
                        card_two.start();
                    }
                }

                // console.log(c_scroll_pos)
            });
        }

        // get container position

        // var card_one = new CountUp('fet-card-0', 5793);

        // if (!demo.error) {
        //   demo.start();
        // } else {
        //   console.error(demo.error);
        // }
    } // check if Single workplace page or not

    // This function will return the max height of the passed element
    function get_max_height(elem) {
        var h = 0;
        // $(elem)
        $(elem).each(function (index) {
            var currentHeight = $(this).outerHeight();
            h = currentHeight > h ? currentHeight : h;
        });

        return h;
    }
});

 "use strict";
 jQuery(document).ready(function ($) {
     var mega_menu_tracker = false;


     // trigger mega menu
     $("li.has-mega-menu > a").on("click", function (e) {
         //  console.log("sdds")
         e.preventDefault()

         if ($(this).parent("li").hasClass("active")) {
             close_mega_menu()
         } else {
             close_mega_menu()
             $(this).parent("li").addClass("active")
             $("body").addClass("mega-menu-opened")
             mega_menu_tracker = true
         }
     })




     $("li.has-children a").on("click", function (e) {
         e.preventDefault()
         var child_id = $(this).parent("li").data('child-id')
         var li_toggle_class = 'show-child'
         var ul_toggle_class = 'show-child'

         $(this).parents('.mega-menu').find("li.has-children").removeClass(li_toggle_class)
         $(this).parents('.mega-menu').find("[data-menu-parent-id]").removeClass(ul_toggle_class)

         $(this).parents('.mega-menu').find(".menu-forth-level").addClass("no-bg")
         $(this).parent("li").addClass(li_toggle_class)
         $("[data-menu-parent-id='" + child_id + "']").addClass(ul_toggle_class)
     })


     // Close mega menu
     function close_mega_menu() {
         $("li.has-mega-menu").removeClass("active")
         $("body").removeClass("mega-menu-opened")
         mega_menu_tracker = false
     }


     $(document).click(function (event) {
         $target = $(event.target);
         //  console.log($target)



         if ($target.parent("button").hasClass("close-mega-menu") || $target.hasClass("close-mega-menu")) {
             close_mega_menu()

         } else {

             if ($target.closest(".mega-menu").length) {
                 //  console.log("yes you click inside")
             } else if (!$target.parent("li").hasClass("has-mega-menu")) {
                 close_mega_menu()
             }

         }

     });


     $(document).keyup(function (e) {
         if (e.key === "Escape") { // escape key maps to keycode `27`
             close_mega_menu()
         }
     });




     // Main Navigation select fix
     var current_site_url = window.location.href;

    //  console.log(
    //      "fff",
    //      current_site_url.lastIndexOf("/"),
    //      current_site_url.length
    //  );

     if (current_site_url.lastIndexOf("/") === current_site_url.length - 1) {
         current_site_url = current_site_url.substring(
             0,
             current_site_url.length - 1
         );
     }

     //console.log("current site url >", current_site_url)

     // loop through all a in mega menu
     var all_a = $(".main-navigation > ul li a");

    //  console.log("all anchror link ",
    //      all_a)

    //  console.log(typeof all_a)

     $.each(all_a, function (k, ele) {
         //console.log(k, ele)
         var c_a_link = $(ele).attr("href"); // current anchor link
         c_a_link = removeSlash(c_a_link)

         var c_a_pid = $(ele).attr("data-pid"); // current anchor parent id

        //  console.log(c_a_pid)
        //  console.log("current site url ", current_site_url)
        //  console.log("check url  ", c_a_link)



         // we interest only link which have parent id
         if (c_a_pid) {
             // check if current link matched with the site url
             if (current_site_url.indexOf(c_a_link) === 0) {

                 //console.log("find in " + c_a_pid)


                 var attr_selector = '[data-id="' + c_a_pid + '"]';
                 $(".main-navigation > ul > li" + attr_selector).addClass(
                     "currently_active"
                 );
                 //console.log("found", c_a_pid)
             }
         }

     })

     function removeSlash(str) {
         if (str) {


             if (str.lastIndexOf("/") === str.length - 1) {
                 str = str.substring(0, str.length - 1);
             }
             return str
         }
         //  console.log("from remove slash ", str)
         return str
     }




 })
jQuery(document).ready(function ($) {

    // $(".banner-slider-items").slick({
    //     infinite: true,
    //     arrows: false,
    //     // slidesToShow: 1,
    //     // slidesToScroll: 3
    // });




    // Home slider
    var time = 2;
    var $bar,
        $slick,
        isPause,
        tick,
        percentTime;

    $slick = $('.banner-slider-items');
    $bar = $('div.slider-progress .progress');

    $slick.slick({
        adaptiveHeight: false,
        dots: false,
        mobileFirst: true,
        pauseOnDotsHover: false,
        arrows: false,
        fade: true,
        draggable: false
    });

    function startProgressbar() {
        resetProgressbar();
        percentTime = 0;
        isPause = false;
        tick = setInterval(interval, 50);
    }

    function interval() {
        if (isPause === false) {
            percentTime += 1 / (time + 0.1);
            $bar.css({
                width: percentTime + "%"
            });
            if (percentTime >= 100) {
                $slick.slick('slickNext');
                startProgressbar();
            }
        }
    }


    function resetProgressbar() {
        $bar.css({
            width: 0 + '%'
        });
        clearTimeout(tick);
    }

    startProgressbar();






    // carousel navigation
    $(".home-main-slider .carousel-nav.next").on("click", function () {
        $slick.slick('slickNext');
        // resetProgressbar()
        // startProgressbar()
    })
    $(".home-main-slider .carousel-nav.prev").on("click", function () {
        $slick.slick('slickPrev');
        // resetProgressbar()
        // startProgressbar()
    })
    $slick.on('afterChange', function (event, slick, currentSlide, nextSlide) {
        resetProgressbar()
        startProgressbar()
    });





})
/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
;(function (factory) { 
if (typeof define === 'function' && define.amd) { 
 // AMD. Register as an anonymous module. 
 define(['jquery'], factory); 
 } else if (typeof exports === 'object') { 
 // Node/CommonJS 
 factory(require('jquery')); 
 } else { 
 // Browser globals 
 factory(window.jQuery || window.Zepto); 
 } 
 }(function($) { 

/*>>core*/
/**
 * 
 * Magnific Popup Core JS file
 * 
 */


/**
 * Private static constants
 */
var CLOSE_EVENT = 'Close',
	BEFORE_CLOSE_EVENT = 'BeforeClose',
	AFTER_CLOSE_EVENT = 'AfterClose',
	BEFORE_APPEND_EVENT = 'BeforeAppend',
	MARKUP_PARSE_EVENT = 'MarkupParse',
	OPEN_EVENT = 'Open',
	CHANGE_EVENT = 'Change',
	NS = 'mfp',
	EVENT_NS = '.' + NS,
	READY_CLASS = 'mfp-ready',
	REMOVING_CLASS = 'mfp-removing',
	PREVENT_CLOSE_CLASS = 'mfp-prevent-close';


/**
 * Private vars 
 */
/*jshint -W079 */
var mfp, // As we have only one instance of MagnificPopup object, we define it locally to not to use 'this'
	MagnificPopup = function(){},
	_isJQ = !!(window.jQuery),
	_prevStatus,
	_window = $(window),
	_document,
	_prevContentType,
	_wrapClasses,
	_currPopupType;


/**
 * Private functions
 */
var _mfpOn = function(name, f) {
		mfp.ev.on(NS + name + EVENT_NS, f);
	},
	_getEl = function(className, appendTo, html, raw) {
		var el = document.createElement('div');
		el.className = 'mfp-'+className;
		if(html) {
			el.innerHTML = html;
		}
		if(!raw) {
			el = $(el);
			if(appendTo) {
				el.appendTo(appendTo);
			}
		} else if(appendTo) {
			appendTo.appendChild(el);
		}
		return el;
	},
	_mfpTrigger = function(e, data) {
		mfp.ev.triggerHandler(NS + e, data);

		if(mfp.st.callbacks) {
			// converts "mfpEventName" to "eventName" callback and triggers it if it's present
			e = e.charAt(0).toLowerCase() + e.slice(1);
			if(mfp.st.callbacks[e]) {
				mfp.st.callbacks[e].apply(mfp, $.isArray(data) ? data : [data]);
			}
		}
	},
	_getCloseBtn = function(type) {
		if(type !== _currPopupType || !mfp.currTemplate.closeBtn) {
			mfp.currTemplate.closeBtn = $( mfp.st.closeMarkup.replace('%title%', mfp.st.tClose ) );
			_currPopupType = type;
		}
		return mfp.currTemplate.closeBtn;
	},
	// Initialize Magnific Popup only when called at least once
	_checkInstance = function() {
		if(!$.magnificPopup.instance) {
			/*jshint -W020 */
			mfp = new MagnificPopup();
			mfp.init();
			$.magnificPopup.instance = mfp;
		}
	},
	// CSS transition detection, http://stackoverflow.com/questions/7264899/detect-css-transitions-using-javascript-and-without-modernizr
	supportsTransitions = function() {
		var s = document.createElement('p').style, // 's' for style. better to create an element if body yet to exist
			v = ['ms','O','Moz','Webkit']; // 'v' for vendor

		if( s['transition'] !== undefined ) {
			return true; 
		}
			
		while( v.length ) {
			if( v.pop() + 'Transition' in s ) {
				return true;
			}
		}
				
		return false;
	};



/**
 * Public functions
 */
MagnificPopup.prototype = {

	constructor: MagnificPopup,

	/**
	 * Initializes Magnific Popup plugin. 
	 * This function is triggered only once when $.fn.magnificPopup or $.magnificPopup is executed
	 */
	init: function() {
		var appVersion = navigator.appVersion;
		mfp.isLowIE = mfp.isIE8 = document.all && !document.addEventListener;
		mfp.isAndroid = (/android/gi).test(appVersion);
		mfp.isIOS = (/iphone|ipad|ipod/gi).test(appVersion);
		mfp.supportsTransition = supportsTransitions();

		// We disable fixed positioned lightbox on devices that don't handle it nicely.
		// If you know a better way of detecting this - let me know.
		mfp.probablyMobile = (mfp.isAndroid || mfp.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent) );
		_document = $(document);

		mfp.popupsCache = {};
	},

	/**
	 * Opens popup
	 * @param  data [description]
	 */
	open: function(data) {

		var i;

		if(data.isObj === false) { 
			// convert jQuery collection to array to avoid conflicts later
			mfp.items = data.items.toArray();

			mfp.index = 0;
			var items = data.items,
				item;
			for(i = 0; i < items.length; i++) {
				item = items[i];
				if(item.parsed) {
					item = item.el[0];
				}
				if(item === data.el[0]) {
					mfp.index = i;
					break;
				}
			}
		} else {
			mfp.items = $.isArray(data.items) ? data.items : [data.items];
			mfp.index = data.index || 0;
		}

		// if popup is already opened - we just update the content
		if(mfp.isOpen) {
			mfp.updateItemHTML();
			return;
		}
		
		mfp.types = []; 
		_wrapClasses = '';
		if(data.mainEl && data.mainEl.length) {
			mfp.ev = data.mainEl.eq(0);
		} else {
			mfp.ev = _document;
		}

		if(data.key) {
			if(!mfp.popupsCache[data.key]) {
				mfp.popupsCache[data.key] = {};
			}
			mfp.currTemplate = mfp.popupsCache[data.key];
		} else {
			mfp.currTemplate = {};
		}



		mfp.st = $.extend(true, {}, $.magnificPopup.defaults, data ); 
		mfp.fixedContentPos = mfp.st.fixedContentPos === 'auto' ? !mfp.probablyMobile : mfp.st.fixedContentPos;

		if(mfp.st.modal) {
			mfp.st.closeOnContentClick = false;
			mfp.st.closeOnBgClick = false;
			mfp.st.showCloseBtn = false;
			mfp.st.enableEscapeKey = false;
		}
		

		// Building markup
		// main containers are created only once
		if(!mfp.bgOverlay) {

			// Dark overlay
			mfp.bgOverlay = _getEl('bg').on('click'+EVENT_NS, function() {
				mfp.close();
			});

			mfp.wrap = _getEl('wrap').attr('tabindex', -1).on('click'+EVENT_NS, function(e) {
				if(mfp._checkIfClose(e.target)) {
					mfp.close();
				}
			});

			mfp.container = _getEl('container', mfp.wrap);
		}

		mfp.contentContainer = _getEl('content');
		if(mfp.st.preloader) {
			mfp.preloader = _getEl('preloader', mfp.container, mfp.st.tLoading);
		}


		// Initializing modules
		var modules = $.magnificPopup.modules;
		for(i = 0; i < modules.length; i++) {
			var n = modules[i];
			n = n.charAt(0).toUpperCase() + n.slice(1);
			mfp['init'+n].call(mfp);
		}
		_mfpTrigger('BeforeOpen');


		if(mfp.st.showCloseBtn) {
			// Close button
			if(!mfp.st.closeBtnInside) {
				mfp.wrap.append( _getCloseBtn() );
			} else {
				_mfpOn(MARKUP_PARSE_EVENT, function(e, template, values, item) {
					values.close_replaceWith = _getCloseBtn(item.type);
				});
				_wrapClasses += ' mfp-close-btn-in';
			}
		}

		if(mfp.st.alignTop) {
			_wrapClasses += ' mfp-align-top';
		}

	

		if(mfp.fixedContentPos) {
			mfp.wrap.css({
				overflow: mfp.st.overflowY,
				overflowX: 'hidden',
				overflowY: mfp.st.overflowY
			});
		} else {
			mfp.wrap.css({ 
				top: _window.scrollTop(),
				position: 'absolute'
			});
		}
		if( mfp.st.fixedBgPos === false || (mfp.st.fixedBgPos === 'auto' && !mfp.fixedContentPos) ) {
			mfp.bgOverlay.css({
				height: _document.height(),
				position: 'absolute'
			});
		}

		

		if(mfp.st.enableEscapeKey) {
			// Close on ESC key
			_document.on('keyup' + EVENT_NS, function(e) {
				if(e.keyCode === 27) {
					mfp.close();
				}
			});
		}

		_window.on('resize' + EVENT_NS, function() {
			mfp.updateSize();
		});


		if(!mfp.st.closeOnContentClick) {
			_wrapClasses += ' mfp-auto-cursor';
		}
		
		if(_wrapClasses)
			mfp.wrap.addClass(_wrapClasses);


		// this triggers recalculation of layout, so we get it once to not to trigger twice
		var windowHeight = mfp.wH = _window.height();

		
		var windowStyles = {};

		if( mfp.fixedContentPos ) {
            if(mfp._hasScrollBar(windowHeight)){
                var s = mfp._getScrollbarSize();
                if(s) {
                    windowStyles.marginRight = s;
                }
            }
        }

		if(mfp.fixedContentPos) {
			if(!mfp.isIE7) {
				windowStyles.overflow = 'hidden';
			} else {
				// ie7 double-scroll bug
				$('body, html').css('overflow', 'hidden');
			}
		}

		
		
		var classesToadd = mfp.st.mainClass;
		if(mfp.isIE7) {
			classesToadd += ' mfp-ie7';
		}
		if(classesToadd) {
			mfp._addClassToMFP( classesToadd );
		}

		// add content
		mfp.updateItemHTML();

		_mfpTrigger('BuildControls');

		// remove scrollbar, add margin e.t.c
		$('html').css(windowStyles);
		
		// add everything to DOM
		mfp.bgOverlay.add(mfp.wrap).prependTo( mfp.st.prependTo || $(document.body) );

		// Save last focused element
		mfp._lastFocusedEl = document.activeElement;
		
		// Wait for next cycle to allow CSS transition
		setTimeout(function() {
			
			if(mfp.content) {
				mfp._addClassToMFP(READY_CLASS);
				mfp._setFocus();
			} else {
				// if content is not defined (not loaded e.t.c) we add class only for BG
				mfp.bgOverlay.addClass(READY_CLASS);
			}
			
			// Trap the focus in popup
			_document.on('focusin' + EVENT_NS, mfp._onFocusIn);

		}, 16);

		mfp.isOpen = true;
		mfp.updateSize(windowHeight);
		_mfpTrigger(OPEN_EVENT);

		return data;
	},

	/**
	 * Closes the popup
	 */
	close: function() {
		if(!mfp.isOpen) return;
		_mfpTrigger(BEFORE_CLOSE_EVENT);

		mfp.isOpen = false;
		// for CSS3 animation
		if(mfp.st.removalDelay && !mfp.isLowIE && mfp.supportsTransition )  {
			mfp._addClassToMFP(REMOVING_CLASS);
			setTimeout(function() {
				mfp._close();
			}, mfp.st.removalDelay);
		} else {
			mfp._close();
		}
	},

	/**
	 * Helper for close() function
	 */
	_close: function() {
		_mfpTrigger(CLOSE_EVENT);

		var classesToRemove = REMOVING_CLASS + ' ' + READY_CLASS + ' ';

		mfp.bgOverlay.detach();
		mfp.wrap.detach();
		mfp.container.empty();

		if(mfp.st.mainClass) {
			classesToRemove += mfp.st.mainClass + ' ';
		}

		mfp._removeClassFromMFP(classesToRemove);

		if(mfp.fixedContentPos) {
			var windowStyles = {marginRight: ''};
			if(mfp.isIE7) {
				$('body, html').css('overflow', '');
			} else {
				windowStyles.overflow = '';
			}
			$('html').css(windowStyles);
		}
		
		_document.off('keyup' + EVENT_NS + ' focusin' + EVENT_NS);
		mfp.ev.off(EVENT_NS);

		// clean up DOM elements that aren't removed
		mfp.wrap.attr('class', 'mfp-wrap').removeAttr('style');
		mfp.bgOverlay.attr('class', 'mfp-bg');
		mfp.container.attr('class', 'mfp-container');

		// remove close button from target element
		if(mfp.st.showCloseBtn &&
		(!mfp.st.closeBtnInside || mfp.currTemplate[mfp.currItem.type] === true)) {
			if(mfp.currTemplate.closeBtn)
				mfp.currTemplate.closeBtn.detach();
		}


		if(mfp.st.autoFocusLast && mfp._lastFocusedEl) {
			$(mfp._lastFocusedEl).focus(); // put tab focus back
		}
		mfp.currItem = null;	
		mfp.content = null;
		mfp.currTemplate = null;
		mfp.prevHeight = 0;

		_mfpTrigger(AFTER_CLOSE_EVENT);
	},
	
	updateSize: function(winHeight) {

		if(mfp.isIOS) {
			// fixes iOS nav bars https://github.com/dimsemenov/Magnific-Popup/issues/2
			var zoomLevel = document.documentElement.clientWidth / window.innerWidth;
			var height = window.innerHeight * zoomLevel;
			mfp.wrap.css('height', height);
			mfp.wH = height;
		} else {
			mfp.wH = winHeight || _window.height();
		}
		// Fixes #84: popup incorrectly positioned with position:relative on body
		if(!mfp.fixedContentPos) {
			mfp.wrap.css('height', mfp.wH);
		}

		_mfpTrigger('Resize');

	},

	/**
	 * Set content of popup based on current index
	 */
	updateItemHTML: function() {
		var item = mfp.items[mfp.index];

		// Detach and perform modifications
		mfp.contentContainer.detach();

		if(mfp.content)
			mfp.content.detach();

		if(!item.parsed) {
			item = mfp.parseEl( mfp.index );
		}

		var type = item.type;

		_mfpTrigger('BeforeChange', [mfp.currItem ? mfp.currItem.type : '', type]);
		// BeforeChange event works like so:
		// _mfpOn('BeforeChange', function(e, prevType, newType) { });

		mfp.currItem = item;

		if(!mfp.currTemplate[type]) {
			var markup = mfp.st[type] ? mfp.st[type].markup : false;

			// allows to modify markup
			_mfpTrigger('FirstMarkupParse', markup);

			if(markup) {
				mfp.currTemplate[type] = $(markup);
			} else {
				// if there is no markup found we just define that template is parsed
				mfp.currTemplate[type] = true;
			}
		}

		if(_prevContentType && _prevContentType !== item.type) {
			mfp.container.removeClass('mfp-'+_prevContentType+'-holder');
		}

		var newContent = mfp['get' + type.charAt(0).toUpperCase() + type.slice(1)](item, mfp.currTemplate[type]);
		mfp.appendContent(newContent, type);

		item.preloaded = true;

		_mfpTrigger(CHANGE_EVENT, item);
		_prevContentType = item.type;

		// Append container back after its content changed
		mfp.container.prepend(mfp.contentContainer);

		_mfpTrigger('AfterChange');
	},


	/**
	 * Set HTML content of popup
	 */
	appendContent: function(newContent, type) {
		mfp.content = newContent;

		if(newContent) {
			if(mfp.st.showCloseBtn && mfp.st.closeBtnInside &&
				mfp.currTemplate[type] === true) {
				// if there is no markup, we just append close button element inside
				if(!mfp.content.find('.mfp-close').length) {
					mfp.content.append(_getCloseBtn());
				}
			} else {
				mfp.content = newContent;
			}
		} else {
			mfp.content = '';
		}

		_mfpTrigger(BEFORE_APPEND_EVENT);
		mfp.container.addClass('mfp-'+type+'-holder');

		mfp.contentContainer.append(mfp.content);
	},


	/**
	 * Creates Magnific Popup data object based on given data
	 * @param  {int} index Index of item to parse
	 */
	parseEl: function(index) {
		var item = mfp.items[index],
			type;

		if(item.tagName) {
			item = { el: $(item) };
		} else {
			type = item.type;
			item = { data: item, src: item.src };
		}

		if(item.el) {
			var types = mfp.types;

			// check for 'mfp-TYPE' class
			for(var i = 0; i < types.length; i++) {
				if( item.el.hasClass('mfp-'+types[i]) ) {
					type = types[i];
					break;
				}
			}

			item.src = item.el.attr('data-mfp-src');
			if(!item.src) {
				item.src = item.el.attr('href');
			}
		}

		item.type = type || mfp.st.type || 'inline';
		item.index = index;
		item.parsed = true;
		mfp.items[index] = item;
		_mfpTrigger('ElementParse', item);

		return mfp.items[index];
	},


	/**
	 * Initializes single popup or a group of popups
	 */
	addGroup: function(el, options) {
		var eHandler = function(e) {
			e.mfpEl = this;
			mfp._openClick(e, el, options);
		};

		if(!options) {
			options = {};
		}

		var eName = 'click.magnificPopup';
		options.mainEl = el;

		if(options.items) {
			options.isObj = true;
			el.off(eName).on(eName, eHandler);
		} else {
			options.isObj = false;
			if(options.delegate) {
				el.off(eName).on(eName, options.delegate , eHandler);
			} else {
				options.items = el;
				el.off(eName).on(eName, eHandler);
			}
		}
	},
	_openClick: function(e, el, options) {
		var midClick = options.midClick !== undefined ? options.midClick : $.magnificPopup.defaults.midClick;


		if(!midClick && ( e.which === 2 || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey ) ) {
			return;
		}

		var disableOn = options.disableOn !== undefined ? options.disableOn : $.magnificPopup.defaults.disableOn;

		if(disableOn) {
			if($.isFunction(disableOn)) {
				if( !disableOn.call(mfp) ) {
					return true;
				}
			} else { // else it's number
				if( _window.width() < disableOn ) {
					return true;
				}
			}
		}

		if(e.type) {
			e.preventDefault();

			// This will prevent popup from closing if element is inside and popup is already opened
			if(mfp.isOpen) {
				e.stopPropagation();
			}
		}

		options.el = $(e.mfpEl);
		if(options.delegate) {
			options.items = el.find(options.delegate);
		}
		mfp.open(options);
	},


	/**
	 * Updates text on preloader
	 */
	updateStatus: function(status, text) {

		if(mfp.preloader) {
			if(_prevStatus !== status) {
				mfp.container.removeClass('mfp-s-'+_prevStatus);
			}

			if(!text && status === 'loading') {
				text = mfp.st.tLoading;
			}

			var data = {
				status: status,
				text: text
			};
			// allows to modify status
			_mfpTrigger('UpdateStatus', data);

			status = data.status;
			text = data.text;

			mfp.preloader.html(text);

			mfp.preloader.find('a').on('click', function(e) {
				e.stopImmediatePropagation();
			});

			mfp.container.addClass('mfp-s-'+status);
			_prevStatus = status;
		}
	},


	/*
		"Private" helpers that aren't private at all
	 */
	// Check to close popup or not
	// "target" is an element that was clicked
	_checkIfClose: function(target) {

		if($(target).hasClass(PREVENT_CLOSE_CLASS)) {
			return;
		}

		var closeOnContent = mfp.st.closeOnContentClick;
		var closeOnBg = mfp.st.closeOnBgClick;

		if(closeOnContent && closeOnBg) {
			return true;
		} else {

			// We close the popup if click is on close button or on preloader. Or if there is no content.
			if(!mfp.content || $(target).hasClass('mfp-close') || (mfp.preloader && target === mfp.preloader[0]) ) {
				return true;
			}

			// if click is outside the content
			if(  (target !== mfp.content[0] && !$.contains(mfp.content[0], target))  ) {
				if(closeOnBg) {
					// last check, if the clicked element is in DOM, (in case it's removed onclick)
					if( $.contains(document, target) ) {
						return true;
					}
				}
			} else if(closeOnContent) {
				return true;
			}

		}
		return false;
	},
	_addClassToMFP: function(cName) {
		mfp.bgOverlay.addClass(cName);
		mfp.wrap.addClass(cName);
	},
	_removeClassFromMFP: function(cName) {
		this.bgOverlay.removeClass(cName);
		mfp.wrap.removeClass(cName);
	},
	_hasScrollBar: function(winHeight) {
		return (  (mfp.isIE7 ? _document.height() : document.body.scrollHeight) > (winHeight || _window.height()) );
	},
	_setFocus: function() {
		(mfp.st.focus ? mfp.content.find(mfp.st.focus).eq(0) : mfp.wrap).focus();
	},
	_onFocusIn: function(e) {
		if( e.target !== mfp.wrap[0] && !$.contains(mfp.wrap[0], e.target) ) {
			mfp._setFocus();
			return false;
		}
	},
	_parseMarkup: function(template, values, item) {
		var arr;
		if(item.data) {
			values = $.extend(item.data, values);
		}
		_mfpTrigger(MARKUP_PARSE_EVENT, [template, values, item] );

		$.each(values, function(key, value) {
			if(value === undefined || value === false) {
				return true;
			}
			arr = key.split('_');
			if(arr.length > 1) {
				var el = template.find(EVENT_NS + '-'+arr[0]);

				if(el.length > 0) {
					var attr = arr[1];
					if(attr === 'replaceWith') {
						if(el[0] !== value[0]) {
							el.replaceWith(value);
						}
					} else if(attr === 'img') {
						if(el.is('img')) {
							el.attr('src', value);
						} else {
							el.replaceWith( $('<img>').attr('src', value).attr('class', el.attr('class')) );
						}
					} else {
						el.attr(arr[1], value);
					}
				}

			} else {
				template.find(EVENT_NS + '-'+key).html(value);
			}
		});
	},

	_getScrollbarSize: function() {
		// thx David
		if(mfp.scrollbarSize === undefined) {
			var scrollDiv = document.createElement("div");
			scrollDiv.style.cssText = 'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;';
			document.body.appendChild(scrollDiv);
			mfp.scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
			document.body.removeChild(scrollDiv);
		}
		return mfp.scrollbarSize;
	}

}; /* MagnificPopup core prototype end */




/**
 * Public static functions
 */
$.magnificPopup = {
	instance: null,
	proto: MagnificPopup.prototype,
	modules: [],

	open: function(options, index) {
		_checkInstance();

		if(!options) {
			options = {};
		} else {
			options = $.extend(true, {}, options);
		}

		options.isObj = true;
		options.index = index || 0;
		return this.instance.open(options);
	},

	close: function() {
		return $.magnificPopup.instance && $.magnificPopup.instance.close();
	},

	registerModule: function(name, module) {
		if(module.options) {
			$.magnificPopup.defaults[name] = module.options;
		}
		$.extend(this.proto, module.proto);
		this.modules.push(name);
	},

	defaults: {

		// Info about options is in docs:
		// http://dimsemenov.com/plugins/magnific-popup/documentation.html#options

		disableOn: 0,

		key: null,

		midClick: false,

		mainClass: '',

		preloader: true,

		focus: '', // CSS selector of input to focus after popup is opened

		closeOnContentClick: false,

		closeOnBgClick: true,

		closeBtnInside: true,

		showCloseBtn: true,

		enableEscapeKey: true,

		modal: false,

		alignTop: false,

		removalDelay: 0,

		prependTo: null,

		fixedContentPos: 'auto',

		fixedBgPos: 'auto',

		overflowY: 'auto',

		closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',

		tClose: 'Close (Esc)',

		tLoading: 'Loading...',

		autoFocusLast: true

	}
};



$.fn.magnificPopup = function(options) {
	_checkInstance();

	var jqEl = $(this);

	// We call some API method of first param is a string
	if (typeof options === "string" ) {

		if(options === 'open') {
			var items,
				itemOpts = _isJQ ? jqEl.data('magnificPopup') : jqEl[0].magnificPopup,
				index = parseInt(arguments[1], 10) || 0;

			if(itemOpts.items) {
				items = itemOpts.items[index];
			} else {
				items = jqEl;
				if(itemOpts.delegate) {
					items = items.find(itemOpts.delegate);
				}
				items = items.eq( index );
			}
			mfp._openClick({mfpEl:items}, jqEl, itemOpts);
		} else {
			if(mfp.isOpen)
				mfp[options].apply(mfp, Array.prototype.slice.call(arguments, 1));
		}

	} else {
		// clone options obj
		options = $.extend(true, {}, options);

		/*
		 * As Zepto doesn't support .data() method for objects
		 * and it works only in normal browsers
		 * we assign "options" object directly to the DOM element. FTW!
		 */
		if(_isJQ) {
			jqEl.data('magnificPopup', options);
		} else {
			jqEl[0].magnificPopup = options;
		}

		mfp.addGroup(jqEl, options);

	}
	return jqEl;
};

/*>>core*/

/*>>inline*/

var INLINE_NS = 'inline',
	_hiddenClass,
	_inlinePlaceholder,
	_lastInlineElement,
	_putInlineElementsBack = function() {
		if(_lastInlineElement) {
			_inlinePlaceholder.after( _lastInlineElement.addClass(_hiddenClass) ).detach();
			_lastInlineElement = null;
		}
	};

$.magnificPopup.registerModule(INLINE_NS, {
	options: {
		hiddenClass: 'hide', // will be appended with `mfp-` prefix
		markup: '',
		tNotFound: 'Content not found'
	},
	proto: {

		initInline: function() {
			mfp.types.push(INLINE_NS);

			_mfpOn(CLOSE_EVENT+'.'+INLINE_NS, function() {
				_putInlineElementsBack();
			});
		},

		getInline: function(item, template) {

			_putInlineElementsBack();

			if(item.src) {
				var inlineSt = mfp.st.inline,
					el = $(item.src);

				if(el.length) {

					// If target element has parent - we replace it with placeholder and put it back after popup is closed
					var parent = el[0].parentNode;
					if(parent && parent.tagName) {
						if(!_inlinePlaceholder) {
							_hiddenClass = inlineSt.hiddenClass;
							_inlinePlaceholder = _getEl(_hiddenClass);
							_hiddenClass = 'mfp-'+_hiddenClass;
						}
						// replace target inline element with placeholder
						_lastInlineElement = el.after(_inlinePlaceholder).detach().removeClass(_hiddenClass);
					}

					mfp.updateStatus('ready');
				} else {
					mfp.updateStatus('error', inlineSt.tNotFound);
					el = $('<div>');
				}

				item.inlineElement = el;
				return el;
			}

			mfp.updateStatus('ready');
			mfp._parseMarkup(template, {}, item);
			return template;
		}
	}
});

/*>>inline*/

/*>>ajax*/
var AJAX_NS = 'ajax',
	_ajaxCur,
	_removeAjaxCursor = function() {
		if(_ajaxCur) {
			$(document.body).removeClass(_ajaxCur);
		}
	},
	_destroyAjaxRequest = function() {
		_removeAjaxCursor();
		if(mfp.req) {
			mfp.req.abort();
		}
	};

$.magnificPopup.registerModule(AJAX_NS, {

	options: {
		settings: null,
		cursor: 'mfp-ajax-cur',
		tError: '<a href="%url%">The content</a> could not be loaded.'
	},

	proto: {
		initAjax: function() {
			mfp.types.push(AJAX_NS);
			_ajaxCur = mfp.st.ajax.cursor;

			_mfpOn(CLOSE_EVENT+'.'+AJAX_NS, _destroyAjaxRequest);
			_mfpOn('BeforeChange.' + AJAX_NS, _destroyAjaxRequest);
		},
		getAjax: function(item) {

			if(_ajaxCur) {
				$(document.body).addClass(_ajaxCur);
			}

			mfp.updateStatus('loading');

			var opts = $.extend({
				url: item.src,
				success: function(data, textStatus, jqXHR) {
					var temp = {
						data:data,
						xhr:jqXHR
					};

					_mfpTrigger('ParseAjax', temp);

					mfp.appendContent( $(temp.data), AJAX_NS );

					item.finished = true;

					_removeAjaxCursor();

					mfp._setFocus();

					setTimeout(function() {
						mfp.wrap.addClass(READY_CLASS);
					}, 16);

					mfp.updateStatus('ready');

					_mfpTrigger('AjaxContentAdded');
				},
				error: function() {
					_removeAjaxCursor();
					item.finished = item.loadError = true;
					mfp.updateStatus('error', mfp.st.ajax.tError.replace('%url%', item.src));
				}
			}, mfp.st.ajax.settings);

			mfp.req = $.ajax(opts);

			return '';
		}
	}
});

/*>>ajax*/

/*>>image*/
var _imgInterval,
	_getTitle = function(item) {
		if(item.data && item.data.title !== undefined)
			return item.data.title;

		var src = mfp.st.image.titleSrc;

		if(src) {
			if($.isFunction(src)) {
				return src.call(mfp, item);
			} else if(item.el) {
				return item.el.attr(src) || '';
			}
		}
		return '';
	};

$.magnificPopup.registerModule('image', {

	options: {
		markup: '<div class="mfp-figure">'+
					'<div class="mfp-close"></div>'+
					'<figure>'+
						'<div class="mfp-img"></div>'+
						'<figcaption>'+
							'<div class="mfp-bottom-bar">'+
								'<div class="mfp-title"></div>'+
								'<div class="mfp-counter"></div>'+
							'</div>'+
						'</figcaption>'+
					'</figure>'+
				'</div>',
		cursor: 'mfp-zoom-out-cur',
		titleSrc: 'title',
		verticalFit: true,
		tError: '<a href="%url%">The image</a> could not be loaded.'
	},

	proto: {
		initImage: function() {
			var imgSt = mfp.st.image,
				ns = '.image';

			mfp.types.push('image');

			_mfpOn(OPEN_EVENT+ns, function() {
				if(mfp.currItem.type === 'image' && imgSt.cursor) {
					$(document.body).addClass(imgSt.cursor);
				}
			});

			_mfpOn(CLOSE_EVENT+ns, function() {
				if(imgSt.cursor) {
					$(document.body).removeClass(imgSt.cursor);
				}
				_window.off('resize' + EVENT_NS);
			});

			_mfpOn('Resize'+ns, mfp.resizeImage);
			if(mfp.isLowIE) {
				_mfpOn('AfterChange', mfp.resizeImage);
			}
		},
		resizeImage: function() {
			var item = mfp.currItem;
			if(!item || !item.img) return;

			if(mfp.st.image.verticalFit) {
				var decr = 0;
				// fix box-sizing in ie7/8
				if(mfp.isLowIE) {
					decr = parseInt(item.img.css('padding-top'), 10) + parseInt(item.img.css('padding-bottom'),10);
				}
				item.img.css('max-height', mfp.wH-decr);
			}
		},
		_onImageHasSize: function(item) {
			if(item.img) {

				item.hasSize = true;

				if(_imgInterval) {
					clearInterval(_imgInterval);
				}

				item.isCheckingImgSize = false;

				_mfpTrigger('ImageHasSize', item);

				if(item.imgHidden) {
					if(mfp.content)
						mfp.content.removeClass('mfp-loading');

					item.imgHidden = false;
				}

			}
		},

		/**
		 * Function that loops until the image has size to display elements that rely on it asap
		 */
		findImageSize: function(item) {

			var counter = 0,
				img = item.img[0],
				mfpSetInterval = function(delay) {

					if(_imgInterval) {
						clearInterval(_imgInterval);
					}
					// decelerating interval that checks for size of an image
					_imgInterval = setInterval(function() {
						if(img.naturalWidth > 0) {
							mfp._onImageHasSize(item);
							return;
						}

						if(counter > 200) {
							clearInterval(_imgInterval);
						}

						counter++;
						if(counter === 3) {
							mfpSetInterval(10);
						} else if(counter === 40) {
							mfpSetInterval(50);
						} else if(counter === 100) {
							mfpSetInterval(500);
						}
					}, delay);
				};

			mfpSetInterval(1);
		},

		getImage: function(item, template) {

			var guard = 0,

				// image load complete handler
				onLoadComplete = function() {
					if(item) {
						if (item.img[0].complete) {
							item.img.off('.mfploader');

							if(item === mfp.currItem){
								mfp._onImageHasSize(item);

								mfp.updateStatus('ready');
							}

							item.hasSize = true;
							item.loaded = true;

							_mfpTrigger('ImageLoadComplete');

						}
						else {
							// if image complete check fails 200 times (20 sec), we assume that there was an error.
							guard++;
							if(guard < 200) {
								setTimeout(onLoadComplete,100);
							} else {
								onLoadError();
							}
						}
					}
				},

				// image error handler
				onLoadError = function() {
					if(item) {
						item.img.off('.mfploader');
						if(item === mfp.currItem){
							mfp._onImageHasSize(item);
							mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src) );
						}

						item.hasSize = true;
						item.loaded = true;
						item.loadError = true;
					}
				},
				imgSt = mfp.st.image;


			var el = template.find('.mfp-img');
			if(el.length) {
				var img = document.createElement('img');
				img.className = 'mfp-img';
				if(item.el && item.el.find('img').length) {
					img.alt = item.el.find('img').attr('alt');
				}
				item.img = $(img).on('load.mfploader', onLoadComplete).on('error.mfploader', onLoadError);
				img.src = item.src;

				// without clone() "error" event is not firing when IMG is replaced by new IMG
				// TODO: find a way to avoid such cloning
				if(el.is('img')) {
					item.img = item.img.clone();
				}

				img = item.img[0];
				if(img.naturalWidth > 0) {
					item.hasSize = true;
				} else if(!img.width) {
					item.hasSize = false;
				}
			}

			mfp._parseMarkup(template, {
				title: _getTitle(item),
				img_replaceWith: item.img
			}, item);

			mfp.resizeImage();

			if(item.hasSize) {
				if(_imgInterval) clearInterval(_imgInterval);

				if(item.loadError) {
					template.addClass('mfp-loading');
					mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src) );
				} else {
					template.removeClass('mfp-loading');
					mfp.updateStatus('ready');
				}
				return template;
			}

			mfp.updateStatus('loading');
			item.loading = true;

			if(!item.hasSize) {
				item.imgHidden = true;
				template.addClass('mfp-loading');
				mfp.findImageSize(item);
			}

			return template;
		}
	}
});

/*>>image*/

/*>>zoom*/
var hasMozTransform,
	getHasMozTransform = function() {
		if(hasMozTransform === undefined) {
			hasMozTransform = document.createElement('p').style.MozTransform !== undefined;
		}
		return hasMozTransform;
	};

$.magnificPopup.registerModule('zoom', {

	options: {
		enabled: false,
		easing: 'ease-in-out',
		duration: 300,
		opener: function(element) {
			return element.is('img') ? element : element.find('img');
		}
	},

	proto: {

		initZoom: function() {
			var zoomSt = mfp.st.zoom,
				ns = '.zoom',
				image;

			if(!zoomSt.enabled || !mfp.supportsTransition) {
				return;
			}

			var duration = zoomSt.duration,
				getElToAnimate = function(image) {
					var newImg = image.clone().removeAttr('style').removeAttr('class').addClass('mfp-animated-image'),
						transition = 'all '+(zoomSt.duration/1000)+'s ' + zoomSt.easing,
						cssObj = {
							position: 'fixed',
							zIndex: 9999,
							left: 0,
							top: 0,
							'-webkit-backface-visibility': 'hidden'
						},
						t = 'transition';

					cssObj['-webkit-'+t] = cssObj['-moz-'+t] = cssObj['-o-'+t] = cssObj[t] = transition;

					newImg.css(cssObj);
					return newImg;
				},
				showMainContent = function() {
					mfp.content.css('visibility', 'visible');
				},
				openTimeout,
				animatedImg;

			_mfpOn('BuildControls'+ns, function() {
				if(mfp._allowZoom()) {

					clearTimeout(openTimeout);
					mfp.content.css('visibility', 'hidden');

					// Basically, all code below does is clones existing image, puts in on top of the current one and animated it

					image = mfp._getItemToZoom();

					if(!image) {
						showMainContent();
						return;
					}

					animatedImg = getElToAnimate(image);

					animatedImg.css( mfp._getOffset() );

					mfp.wrap.append(animatedImg);

					openTimeout = setTimeout(function() {
						animatedImg.css( mfp._getOffset( true ) );
						openTimeout = setTimeout(function() {

							showMainContent();

							setTimeout(function() {
								animatedImg.remove();
								image = animatedImg = null;
								_mfpTrigger('ZoomAnimationEnded');
							}, 16); // avoid blink when switching images

						}, duration); // this timeout equals animation duration

					}, 16); // by adding this timeout we avoid short glitch at the beginning of animation


					// Lots of timeouts...
				}
			});
			_mfpOn(BEFORE_CLOSE_EVENT+ns, function() {
				if(mfp._allowZoom()) {

					clearTimeout(openTimeout);

					mfp.st.removalDelay = duration;

					if(!image) {
						image = mfp._getItemToZoom();
						if(!image) {
							return;
						}
						animatedImg = getElToAnimate(image);
					}

					animatedImg.css( mfp._getOffset(true) );
					mfp.wrap.append(animatedImg);
					mfp.content.css('visibility', 'hidden');

					setTimeout(function() {
						animatedImg.css( mfp._getOffset() );
					}, 16);
				}

			});

			_mfpOn(CLOSE_EVENT+ns, function() {
				if(mfp._allowZoom()) {
					showMainContent();
					if(animatedImg) {
						animatedImg.remove();
					}
					image = null;
				}
			});
		},

		_allowZoom: function() {
			return mfp.currItem.type === 'image';
		},

		_getItemToZoom: function() {
			if(mfp.currItem.hasSize) {
				return mfp.currItem.img;
			} else {
				return false;
			}
		},

		// Get element postion relative to viewport
		_getOffset: function(isLarge) {
			var el;
			if(isLarge) {
				el = mfp.currItem.img;
			} else {
				el = mfp.st.zoom.opener(mfp.currItem.el || mfp.currItem);
			}

			var offset = el.offset();
			var paddingTop = parseInt(el.css('padding-top'),10);
			var paddingBottom = parseInt(el.css('padding-bottom'),10);
			offset.top -= ( $(window).scrollTop() - paddingTop );


			/*

			Animating left + top + width/height looks glitchy in Firefox, but perfect in Chrome. And vice-versa.

			 */
			var obj = {
				width: el.width(),
				// fix Zepto height+padding issue
				height: (_isJQ ? el.innerHeight() : el[0].offsetHeight) - paddingBottom - paddingTop
			};

			// I hate to do this, but there is no another option
			if( getHasMozTransform() ) {
				obj['-moz-transform'] = obj['transform'] = 'translate(' + offset.left + 'px,' + offset.top + 'px)';
			} else {
				obj.left = offset.left;
				obj.top = offset.top;
			}
			return obj;
		}

	}
});



/*>>zoom*/

/*>>iframe*/

var IFRAME_NS = 'iframe',
	_emptyPage = '//about:blank',

	_fixIframeBugs = function(isShowing) {
		if(mfp.currTemplate[IFRAME_NS]) {
			var el = mfp.currTemplate[IFRAME_NS].find('iframe');
			if(el.length) {
				// reset src after the popup is closed to avoid "video keeps playing after popup is closed" bug
				if(!isShowing) {
					el[0].src = _emptyPage;
				}

				// IE8 black screen bug fix
				if(mfp.isIE8) {
					el.css('display', isShowing ? 'block' : 'none');
				}
			}
		}
	};

$.magnificPopup.registerModule(IFRAME_NS, {

	options: {
		markup: '<div class="mfp-iframe-scaler">'+
					'<div class="mfp-close"></div>'+
					'<iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe>'+
				'</div>',

		srcAction: 'iframe_src',

		// we don't care and support only one default type of URL by default
		patterns: {
			youtube: {
				index: 'youtube.com',
				id: 'v=',
				src: '//www.youtube.com/embed/%id%?autoplay=1'
			},
			vimeo: {
				index: 'vimeo.com/',
				id: '/',
				src: '//player.vimeo.com/video/%id%?autoplay=1'
			},
			gmaps: {
				index: '//maps.google.',
				src: '%id%&output=embed'
			}
		}
	},

	proto: {
		initIframe: function() {
			mfp.types.push(IFRAME_NS);

			_mfpOn('BeforeChange', function(e, prevType, newType) {
				if(prevType !== newType) {
					if(prevType === IFRAME_NS) {
						_fixIframeBugs(); // iframe if removed
					} else if(newType === IFRAME_NS) {
						_fixIframeBugs(true); // iframe is showing
					}
				}// else {
					// iframe source is switched, don't do anything
				//}
			});

			_mfpOn(CLOSE_EVENT + '.' + IFRAME_NS, function() {
				_fixIframeBugs();
			});
		},

		getIframe: function(item, template) {
			var embedSrc = item.src;
			var iframeSt = mfp.st.iframe;

			$.each(iframeSt.patterns, function() {
				if(embedSrc.indexOf( this.index ) > -1) {
					if(this.id) {
						if(typeof this.id === 'string') {
							embedSrc = embedSrc.substr(embedSrc.lastIndexOf(this.id)+this.id.length, embedSrc.length);
						} else {
							embedSrc = this.id.call( this, embedSrc );
						}
					}
					embedSrc = this.src.replace('%id%', embedSrc );
					return false; // break;
				}
			});

			var dataObj = {};
			if(iframeSt.srcAction) {
				dataObj[iframeSt.srcAction] = embedSrc;
			}
			mfp._parseMarkup(template, dataObj, item);

			mfp.updateStatus('ready');

			return template;
		}
	}
});



/*>>iframe*/

/*>>gallery*/
/**
 * Get looped index depending on number of slides
 */
var _getLoopedId = function(index) {
		var numSlides = mfp.items.length;
		if(index > numSlides - 1) {
			return index - numSlides;
		} else  if(index < 0) {
			return numSlides + index;
		}
		return index;
	},
	_replaceCurrTotal = function(text, curr, total) {
		return text.replace(/%curr%/gi, curr + 1).replace(/%total%/gi, total);
	};

$.magnificPopup.registerModule('gallery', {

	options: {
		enabled: false,
		arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
		preload: [0,2],
		navigateByImgClick: true,
		arrows: true,

		tPrev: 'Previous (Left arrow key)',
		tNext: 'Next (Right arrow key)',
		tCounter: '%curr% of %total%'
	},

	proto: {
		initGallery: function() {

			var gSt = mfp.st.gallery,
				ns = '.mfp-gallery';

			mfp.direction = true; // true - next, false - prev

			if(!gSt || !gSt.enabled ) return false;

			_wrapClasses += ' mfp-gallery';

			_mfpOn(OPEN_EVENT+ns, function() {

				if(gSt.navigateByImgClick) {
					mfp.wrap.on('click'+ns, '.mfp-img', function() {
						if(mfp.items.length > 1) {
							mfp.next();
							return false;
						}
					});
				}

				_document.on('keydown'+ns, function(e) {
					if (e.keyCode === 37) {
						mfp.prev();
					} else if (e.keyCode === 39) {
						mfp.next();
					}
				});
			});

			_mfpOn('UpdateStatus'+ns, function(e, data) {
				if(data.text) {
					data.text = _replaceCurrTotal(data.text, mfp.currItem.index, mfp.items.length);
				}
			});

			_mfpOn(MARKUP_PARSE_EVENT+ns, function(e, element, values, item) {
				var l = mfp.items.length;
				values.counter = l > 1 ? _replaceCurrTotal(gSt.tCounter, item.index, l) : '';
			});

			_mfpOn('BuildControls' + ns, function() {
				if(mfp.items.length > 1 && gSt.arrows && !mfp.arrowLeft) {
					var markup = gSt.arrowMarkup,
						arrowLeft = mfp.arrowLeft = $( markup.replace(/%title%/gi, gSt.tPrev).replace(/%dir%/gi, 'left') ).addClass(PREVENT_CLOSE_CLASS),
						arrowRight = mfp.arrowRight = $( markup.replace(/%title%/gi, gSt.tNext).replace(/%dir%/gi, 'right') ).addClass(PREVENT_CLOSE_CLASS);

					arrowLeft.click(function() {
						mfp.prev();
					});
					arrowRight.click(function() {
						mfp.next();
					});

					mfp.container.append(arrowLeft.add(arrowRight));
				}
			});

			_mfpOn(CHANGE_EVENT+ns, function() {
				if(mfp._preloadTimeout) clearTimeout(mfp._preloadTimeout);

				mfp._preloadTimeout = setTimeout(function() {
					mfp.preloadNearbyImages();
					mfp._preloadTimeout = null;
				}, 16);
			});


			_mfpOn(CLOSE_EVENT+ns, function() {
				_document.off(ns);
				mfp.wrap.off('click'+ns);
				mfp.arrowRight = mfp.arrowLeft = null;
			});

		},
		next: function() {
			mfp.direction = true;
			mfp.index = _getLoopedId(mfp.index + 1);
			mfp.updateItemHTML();
		},
		prev: function() {
			mfp.direction = false;
			mfp.index = _getLoopedId(mfp.index - 1);
			mfp.updateItemHTML();
		},
		goTo: function(newIndex) {
			mfp.direction = (newIndex >= mfp.index);
			mfp.index = newIndex;
			mfp.updateItemHTML();
		},
		preloadNearbyImages: function() {
			var p = mfp.st.gallery.preload,
				preloadBefore = Math.min(p[0], mfp.items.length),
				preloadAfter = Math.min(p[1], mfp.items.length),
				i;

			for(i = 1; i <= (mfp.direction ? preloadAfter : preloadBefore); i++) {
				mfp._preloadItem(mfp.index+i);
			}
			for(i = 1; i <= (mfp.direction ? preloadBefore : preloadAfter); i++) {
				mfp._preloadItem(mfp.index-i);
			}
		},
		_preloadItem: function(index) {
			index = _getLoopedId(index);

			if(mfp.items[index].preloaded) {
				return;
			}

			var item = mfp.items[index];
			if(!item.parsed) {
				item = mfp.parseEl( index );
			}

			_mfpTrigger('LazyLoad', item);

			if(item.type === 'image') {
				item.img = $('<img class="mfp-img" />').on('load.mfploader', function() {
					item.hasSize = true;
				}).on('error.mfploader', function() {
					item.hasSize = true;
					item.loadError = true;
					_mfpTrigger('LazyLoadError', item);
				}).attr('src', item.src);
			}


			item.preloaded = true;
		}
	}
});

/*>>gallery*/

/*>>retina*/

var RETINA_NS = 'retina';

$.magnificPopup.registerModule(RETINA_NS, {
	options: {
		replaceSrc: function(item) {
			return item.src.replace(/\.\w+$/, function(m) { return '@2x' + m; });
		},
		ratio: 1 // Function or number.  Set to 1 to disable.
	},
	proto: {
		initRetina: function() {
			if(window.devicePixelRatio > 1) {

				var st = mfp.st.retina,
					ratio = st.ratio;

				ratio = !isNaN(ratio) ? ratio : ratio();

				if(ratio > 1) {
					_mfpOn('ImageHasSize' + '.' + RETINA_NS, function(e, item) {
						item.img.css({
							'max-width': item.img[0].naturalWidth / ratio,
							'width': '100%'
						});
					});
					_mfpOn('ElementParse' + '.' + RETINA_NS, function(e, item) {
						item.src = st.replaceSrc(item, ratio);
					});
				}
			}

		}
	}
});

/*>>retina*/
 _checkInstance(); }));