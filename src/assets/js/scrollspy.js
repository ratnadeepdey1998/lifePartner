/**
 * Extend jquery with a scrollspy plugin.
 * This watches the window scroll and fires events when elements are scrolled into viewport.
 *
 * throttle() and getTime() taken from Underscore.js
 * https://github.com/jashkenas/underscore
 *
 * @author Copyright 2013 John Smart
 * @license https://raw.github.com/thesmart/jquery-scrollspy/master/LICENSE
 * @see https://github.com/thesmart
 * @version 0.1.2
 */ !function(t){var n=t(window),o=[],r=[],e=!1,l=0,i={top:0,right:0,bottom:0,left:0};function c(){++l;var e,c,f,u,a,s=n.scrollTop(),p=n.scrollLeft(),h=p+n.width(),$=s+n.height(),y=(e=s+i.top,c=h+i.right,f=$+i.bottom,u=p+i.left,a=t(),t.each(o,function(t,n){var o=n.offset().top,r=n.offset().left,l=r+n.width(),i=o+n.height();r>c||l<u||o>f||i<e||a.push(n)}),a);t.each(y,function(t,n){"number"!=typeof n.data("scrollSpy:ticks")&&n.triggerHandler("scrollSpy:enter"),n.data("scrollSpy:ticks",l)}),t.each(r,function(t,n){var o=n.data("scrollSpy:ticks");"number"==typeof o&&o!==l&&(n.triggerHandler("scrollSpy:exit"),n.data("scrollSpy:ticks",null))}),r=y}function f(){n.trigger("scrollSpy:winSize")}/**
	 * Get time in ms
   * @license https://raw.github.com/jashkenas/underscore/master/LICENSE
	 * @type {function}
	 * @return {number}
	 */ var u=Date.now||function(){return new Date().getTime()};/**
	 * Returns a function, that, when invoked, will only be triggered at most once
	 * during a given window of time. Normally, the throttled function will run
	 * as much as it can, without ever going more than once per `wait` duration;
	 * but if you'd like to disable the execution on the leading edge, pass
	 * `{leading: false}`. To disable execution on the trailing edge, ditto.
	 * @license https://raw.github.com/jashkenas/underscore/master/LICENSE
	 * @param {function} func
	 * @param {number} wait
	 * @param {Object=} options
	 * @returns {Function}
	 */ function a(t,n,o){var r,e,l,i=null,c=0;o||(o={});var f=function(){c=!1===o.leading?0:u(),i=null,l=t.apply(r,e),r=e=null};return function(){var a=u();c||!1!==o.leading||(c=a);var s=n-(a-c);return r=this,e=arguments,s<=0?(clearTimeout(i),i=null,c=a,l=t.apply(r,e),r=e=null):i||!1===o.trailing||(i=setTimeout(f,s)),l}}t.scrollSpy=function(r,l){(r=t(r)).each(function(n,r){o.push(t(r))}),l=l||{throttle:100},i.top=l.offsetTop||0,i.right=l.offsetRight||0,i.bottom=l.offsetBottom||0,i.left=l.offsetLeft||0;var f=a(c,l.throttle||100),u=function(){t(document).ready(f)};return e||(n.on("scroll",u),n.on("resize",u),e=!0),setTimeout(u,0),r},t.winSizeSpy=function(o){return t.winSizeSpy=function(){return n},o=o||{throttle:100},n.on("resize",a(f,o.throttle||100))},t.fn.scrollSpy=function(n){return t.scrollSpy(t(this),n)}}(jQuery);