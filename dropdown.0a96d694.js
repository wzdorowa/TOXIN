parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Y1qH":[function(require,module,exports) {
var n=document.querySelectorAll(".dropdown");n.forEach(function(n){var o=n.querySelector(".input__content"),t=n.querySelector(".dropdown__content"),e=n.querySelector(".input__icon-arrow-down"),c=n.querySelector(".dropdown__buttons-container_for-apply"),r=n.querySelector(".dropdown__buttons-container_for-clear");e.addEventListener("click",function(){!1===t.classList.contains("dropdown__content_visible")?t.classList.add("dropdown__content_visible"):t.classList.contains("dropdown__content_visible")&&t.classList.remove("dropdown__content_visible")}),o.addEventListener("focus",function(){t.classList.add("dropdown__content_visible")}),document.addEventListener("click",function(o){o.target.closest(".dropdown")!==n&&t.classList.remove("dropdown__content_visible")});var i=n.querySelector(".dropdown__rows"),s=n.querySelectorAll(".dropdown-row"),a=n.querySelectorAll(".dropdown-row__amount_with-count"),d=function(n,t,e){if(0===n)o.value="";else{var c=[];t.forEach(function(n,o){var t=e[o];String(n).includes("1")?c[o]="".concat(String(n)," ").concat(t[0]):String(n).includes("2")||String(n).includes("3")||String(n).includes("4")?c[o]="".concat(String(n)," ").concat(t[1]):c[o]="".concat(String(n)," ").concat(t[2])}),c.forEach(function(n,t){t<c.length-1?o.value+="".concat(c[t],", "):t===c.length-1&&(o.value+="".concat(c[t]))})}};s.forEach(function(n){n.addEventListener("click",function(n){n.preventDefault(),o.value=null,!0===i.classList.contains("dropdown__rows_for-count-the-guests")?function(){var n=0,o=0;a.forEach(function(t,e){e<=1?n+=Number(t.innerHTML):2===e&&(o+=Number(t.innerHTML))});d(n+o,[n,o],[["гость","гостя","гостей"],["младенец","младенца","младенцев"]])}():!0===i.classList.contains("dropdown__rows_for-count-amenities")&&function(){var n=0,o=0,t=0;a.forEach(function(e,c){0===c?n+=Number(e.innerHTML):1===c?o+=Number(e.innerHTML):2===c&&(t+=Number(e.innerHTML))});d(n+o+t,[n,o,t],[["спальня","спальни","спален"],["кровать","кровати","кроватей"],["ванная комната","ванные комнаты","ванных комнат"]])}()})}),c.addEventListener("click",function(){t.classList.remove("dropdown__content_visible")}),r.addEventListener("click",function(){o.value="",a.forEach(function(n){n.innerHTML="0"})})});
},{}]},{},["Y1qH"], null)
//# sourceMappingURL=/TOXIN/dropdown.0a96d694.js.map