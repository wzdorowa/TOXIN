parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"EvF2":[function(require,module,exports) {
function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function n(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}var i=function(){function t(n){e(this,t),this._numberCardContainer=n,this._slides=null,this._dots=null,this._buttonPrev=null,this._buttonNext=null,this._slideIndex=1,this._findElements(),this._showSlides(this._slideIndex),this._bindEventListeners()}return n(t,[{key:"_findElements",value:function(){this._slides=this._numberCardContainer.querySelectorAll(".js-number-card__content"),this._dots=this._numberCardContainer.querySelectorAll(".js-number-card__switch-slider"),this._buttonPrev=this._numberCardContainer.querySelector(".js-number-card__prev"),this._buttonNext=this._numberCardContainer.querySelector(".js-number-card__next")}},{key:"_showSlides",value:function(e){e>this._slides.length&&(this._slideIndex=1),e<1&&(this._slideIndex=this._slides.length),this._slides.forEach(function(e){var t=e;t.classList.contains("number-card__content_display_hidden")||t.classList.add("number-card__content_display_hidden")}),this._dots.forEach(function(e){e.className=e.className.replace(" number-card__switch-slider-active","")}),this._slides[this._slideIndex-1].classList.contains("number-card__content_display_hidden")&&this._slides[this._slideIndex-1].classList.remove("number-card__content_display_hidden"),this._dots[this._slideIndex-1].className+=" number-card__switch-slider-active"}},{key:"_currentSlide",value:function(e){this._showSlides(this._slideIndex=e)}},{key:"_handleButtonPrevClick",value:function(){this._showSlides(this._slideIndex-=1)}},{key:"_handleButtonNextClick",value:function(){this._showSlides(this._slideIndex+=1)}},{key:"_handleDotsClick",value:function(e){this._currentSlide(e+1)}},{key:"_bindEventListeners",value:function(){var e=this;this._buttonPrev.addEventListener("click",this._handleButtonPrevClick.bind(this)),this._buttonNext.addEventListener("click",this._handleButtonNextClick.bind(this)),this._dots.forEach(function(t,n){t.addEventListener("click",e._handleDotsClick.bind(e,n))})}}]),t}(),s=document.querySelectorAll(".js-number-card");s.forEach(function(e){new i(e)});
},{}]},{},["EvF2"], null)
//# sourceMappingURL=/TOXIN/number-card.a742a5b6.js.map