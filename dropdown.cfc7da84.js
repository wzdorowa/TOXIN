parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Y1qH":[function(require,module,exports) {
function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function t(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function e(n,e,o){return e&&t(n.prototype,e),o&&t(n,o),n}var o=function(){function t(e){n(this,t),this.dropdown=e,this.elementInput=null,this.dropdownList=null,this.dropdownArrow=null,this.buttonApply=null,this.buttonClear=null,this.rowsGroupParent=null,this.rowsGroup=null,this.numbers=null,this.findElement(),this.bindEventListeners()}return e(t,[{key:"findElement",value:function(){this.elementInput=this.dropdown.querySelector(".js-input__content"),this.dropdownList=this.dropdown.querySelector(".js-dropdown__content"),this.dropdownArrow=this.dropdown.querySelector(".js-input__icon-arrow-down"),this.buttonApply=this.dropdown.querySelector(".js-dropdown__buttons-container_for-apply"),this.buttonClear=this.dropdown.querySelector(".js-dropdown__buttons-container_for-clear"),this.rowsGroupParent=this.dropdown.querySelector(".dropdown__rows"),this.rowsGroup=this.dropdown.querySelectorAll(".js-dropdown-row"),this.numbers=this.dropdown.querySelectorAll(".js-dropdown-row__amount_with-count")}},{key:"addClass",value:function(){this.dropdownList.classList.add("dropdown__content_visible")}},{key:"removeClass",value:function(){this.dropdownList.classList.remove("dropdown__content_visible")}},{key:"toggleClass",value:function(){this.dropdownList.classList.toggle("dropdown__content_visible")}},{key:"handleIconArrowDownClick",value:function(){this.toggleClass()}},{key:"handleInputContentFocus",value:function(){this.addClass()}},{key:"handleButtonsContainerForApplyClick",value:function(){this.removeClass()}},{key:"handleButtonsContainerForClearClick",value:function(){this.elementInput.value="",this.numbers.forEach(function(n){n.innerHTML="0"})}},{key:"handleDocumentClick",value:function(n){n.target.closest(".dropdown")!==this.dropdown&&this.removeClass()}},{key:"countValues",value:function(n,t,e){var o=this;if(0===n)this.elementInput.value="";else{var i=[];t.forEach(function(n,t){if(0!==n){var o=e[t];String(n).includes("1")?i.push("".concat(String(n)," ").concat(o[0])):String(n).includes("2")||String(n).includes("3")||String(n).includes("4")?i.push("".concat(String(n)," ").concat(o[1])):i.push("".concat(String(n)," ").concat(o[2]))}}),i.forEach(function(n,t){0===t&&1===i.length||t===i.length-1?o.elementInput.value+="".concat(i[t]):t<i.length-1&&i.length>1&&(o.elementInput.value+="".concat(i[t],", "))})}}},{key:"countTheGuests",value:function(){var n=0,t=0;this.numbers.forEach(function(e,o){o<=1?n+=Number(e.innerHTML):2===o&&(t+=Number(e.innerHTML))});var e=n+t,o=[n,t],i=[["гость","гостя","гостей"],["младенец","младенца","младенцев"]];this.countValues(e,o,i)}},{key:"countAmenities",value:function(){var n=0,t=0,e=0;this.numbers.forEach(function(o,i){0===i?n+=Number(o.innerHTML):1===i?t+=Number(o.innerHTML):2===i&&(e+=Number(o.innerHTML))});var o=n+t+e,i=[n,t,e],r=[["спальня","спальни","спален"],["кровать","кровати","кроватей"],["ванная комната","ванные комнаты","ванных комнат"]];this.countValues(o,i,r)}},{key:"handleDropdownRowsClick",value:function(n){n.preventDefault(),this.elementInput.value=null,this.rowsGroupParent.classList.contains("dropdown__rows_for-count-the-guests")?this.countTheGuests():this.rowsGroupParent.classList.contains("dropdown__rows_for-count-amenities")&&this.countAmenities()}},{key:"bindEventListeners",value:function(){var n=this;this.dropdownArrow.addEventListener("click",this.handleIconArrowDownClick.bind(this)),this.elementInput.addEventListener("focus",this.handleInputContentFocus.bind(this)),this.buttonApply.addEventListener("click",this.handleButtonsContainerForApplyClick.bind(this)),this.buttonClear.addEventListener("click",this.handleButtonsContainerForClearClick.bind(this)),document.addEventListener("click",this.handleDocumentClick.bind(this)),this.rowsGroup.forEach(function(t){t.addEventListener("click",n.handleDropdownRowsClick.bind(n))})}}]),t}(),i=document.querySelectorAll(".js-dropdown");i.forEach(function(n){new o(n)});
},{}]},{},["Y1qH"], null)
//# sourceMappingURL=/TOXIN/dropdown.cfc7da84.js.map