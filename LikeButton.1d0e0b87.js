parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"qOa4":[function(require,module,exports) {
function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function t(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function e(n,e,i){return e&&t(n.prototype,e),i&&t(n,i),n}var i=function(){function t(e){n(this,t),this.buttonContainer=e,this.likeButton=null,this.description="",this._findElements(),this._bindEventListener()}return e(t,[{key:"_findElements",value:function(){this.likeButton=this.buttonContainer.querySelector(".js-like-button__content"),this.description=this.buttonContainer.querySelector(".js-like-button__description")}},{key:"_handleClick",value:function(){!0===this.likeButton.checked?this.description.innerHTML=Number(this.description.innerHTML)+1:!1===this.likeButton.checked&&(this.description.innerHTML=Number(this.description.innerHTML)-1)}},{key:"_bindEventListener",value:function(){var n=this;this.likeButton.addEventListener("click",function(){n._handleClick()})}}]),t}(),o=document.querySelectorAll(".js-like-button");o.forEach(function(n){new i(n)});
},{}]},{},["qOa4"], null)
//# sourceMappingURL=/TOXIN/LikeButton.1d0e0b87.js.map