parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Pobb":[function(require,module,exports) {
function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function t(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}var i=function(){function n(){e(this,n),this.user=null,this.userIcon=null,this.navigation=null,this.navigationIcon=null,this.submenu=null,this.menuItem=null,this._findElements(),this._bindEventListeners()}return t(n,[{key:"_findElements",value:function(){this.userIcon=document.querySelector(".js-header__user-icon"),this.user=document.querySelector(".js-header__user"),this.navigationIcon=document.querySelector(".js-header__navigation-icon"),this.navigation=document.querySelector(".js-header__navigation"),this.submenu=document.querySelectorAll(".js-header__submenu"),this.menuItem=document.querySelectorAll(".js-header__title-submenu")}},{key:"_handleUserIconClick",value:function(){this.user.classList.toggle("header__user_visible")}},{key:"_handleNavigationIconClick",value:function(){this.navigation.classList.toggle("header__navigation_visible")}},{key:"_handleSubmenuClick",value:function(e){this.submenu[e].classList.toggle("header__submenu_active")}},{key:"_bindEventListeners",value:function(){var e=this;this.userIcon.addEventListener("click",function(){e._handleUserIconClick()}),this.navigationIcon.addEventListener("click",function(){e._handleNavigationIconClick()}),this.menuItem.forEach(function(n,t){n.addEventListener("click",function(){e._handleSubmenuClick(t)})})}}]),n}();new i;
},{}]},{},["Pobb"], null)
//# sourceMappingURL=/TOXIN/Header.d38e5725.js.map