parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"XVVl":[function(require,module,exports) {
function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function n(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}var i=function(){function t(n){e(this,t),this.datepickerGroup=n,this.datepicker=null,this.elementsInput=null,this.dropdownsArrow=null,this.buttonApply=null,this.buttonClear=null,this.calendar=null,this._findElement(),this._bindEventListeners(),this._setValueToInput()}return n(t,[{key:"_findElement",value:function(){this.datepicker=this.datepickerGroup.querySelector(".js-datepicker-group__datepicker"),this.elementsInput=this.datepickerGroup.querySelectorAll(".js-input__content"),this.dropdownsArrow=this.datepickerGroup.querySelectorAll(".js-input__icon-arrow-down"),this.buttonApply=this.datepickerGroup.querySelector(".js-calendar__buttons-container_with-button-apply"),this.buttonClear=this.datepickerGroup.querySelector(".js-calendar__buttons-container_with-button-clear"),this.calendar=this.datepickerGroup.querySelector(".js-datepicker-here")}},{key:"_addClass",value:function(){this.datepicker.classList.add("datepicker-group__datepicker_visible")}},{key:"_removeClass",value:function(){this.datepicker.classList.remove("datepicker-group__datepicker_visible")}},{key:"_toggleClass",value:function(){this.datepicker.classList.toggle("datepicker-group__datepicker_visible")}},{key:"_clearValues",value:function(){var e=$(this.datepickerGroup).find(".js-datepicker-here");$(e).datepicker().data("datepicker").clear()}},{key:"_handleInputContentFocus",value:function(){this._addClass()}},{key:"_handleIconArrowDownClick",value:function(){this._toggleClass()}},{key:"_handleButtonsContainerForApplyClick",value:function(){this._removeClass()}},{key:"_handleButtonsContainerForClearClick",value:function(){this._clearValues()}},{key:"_handleDocumentClick",value:function(e){this.datepickerGroup.contains(e.target)||this._removeClass()}},{key:"_bindEventListeners",value:function(){var e=this;this.elementsInput.forEach(function(t){t.addEventListener("focus",e._handleInputContentFocus.bind(e))}),this.dropdownsArrow.forEach(function(t){t.addEventListener("click",e._handleIconArrowDownClick.bind(e))}),this.buttonApply.addEventListener("click",this._handleButtonsContainerForApplyClick.bind(this)),this.buttonClear.addEventListener("click",this._handleButtonsContainerForClearClick.bind(this)),document.addEventListener("click",this._handleDocumentClick.bind(this),!0)}},{key:"_setValueToInput",value:function(){var e=this;1===$(this.calendar).parents(".datepicker-group__datepicker_with-one-input").length?$(this.calendar).datepicker({navTitles:{days:"MM <i>yyyy</i>"},multipleDatesSeparator:" - ",dateFormat:"dd M",onSelect:function(t,n){var i=e.datepickerGroup.querySelector(".js-input__content"),r="";n&&(n.forEach(function(){r=t}),i.value=r)}}):$(this.calendar).datepicker({navTitles:{days:"MM <i>yyyy</i>"},dateFormat:"dd.mm.yyyy",onSelect:function(t){var n=e.datepickerGroup.querySelectorAll(".js-input__content"),i="",r="";t.split("").forEach(function(e,t){t<10?i+=e:t>10&&(r+=e)}),n[0].value=i,n[1].value=r}})}}]),t}(),r=document.querySelectorAll(".js-datepicker-group");r.forEach(function(e){new i(e)});
},{}]},{},["XVVl"], null)
//# sourceMappingURL=/TOXIN/DatepickerGroup.1d19ee1e.js.map