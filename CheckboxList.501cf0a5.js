parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"kzR5":[function(require,module,exports) {
function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var i=0;i<t.length;i++){var c=t[i];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}function i(e,i,c){return i&&t(e.prototype,i),c&&t(e,c),e}var c=function(){function t(i){e(this,t),this.checkboxList=i,this.checkboxListTitle=null,this.checkboxListToggle=null,this.checkboxListIndicator=null,this._findElements(),this._bindEventListeners()}return i(t,[{key:"_findElements",value:function(){this.checkboxListTitle=this.checkboxList.querySelector(".js-checkbox-list__title"),this.checkboxListToggle=this.checkboxList.querySelector(".js-checkbox-list__container_hidden"),this.checkboxListIndicator=this.checkboxList.querySelector(".js-checkbox-list__indicator")}},{key:"_handleCheckboxListTitleClick",value:function(){this.checkboxListToggle.classList.toggle("checkbox-list__container_hidden"),this.checkboxListIndicator.classList.toggle("checkbox-list__indicator_opened")}},{key:"_handleDocumentClick",value:function(e){e.target.closest(".checkbox-list")!==this.checkboxList&&this.checkboxListToggle.classList.add("checkbox-list__container_hidden")}},{key:"_bindEventListeners",value:function(){this.checkboxListTitle.addEventListener("click",this._handleCheckboxListTitleClick.bind(this)),document.addEventListener("click",this._handleDocumentClick.bind(this))}}]),t}(),n=document.querySelectorAll(".js-checkbox-list");n.forEach(function(e){new c(e)});
},{}]},{},["kzR5"], null)
//# sourceMappingURL=/TOXIN/CheckboxList.501cf0a5.js.map