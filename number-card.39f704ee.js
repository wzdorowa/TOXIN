parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"EvF2":[function(require,module,exports) {
$(".number-card").each(function(n,c){var r=c,e=Array.from($(r).find(".number-card__content")),a=Array.from($(r).find(".number-card__switch-slider")),i=Array.from($(r).find(".number-card__prev")),t=Array.from($(r).find(".number-card__next")),o=1;function f(n){n>e.length&&(o=1),n<1&&(o=e.length),e.forEach(function(n){n.style.display="none"}),a.forEach(function(n){n.className=n.className.replace(" number-card__switch-slider-active","")}),e[o-1].style.display="block",a[o-1].className+=" number-card__switch-slider-active"}f(o),i[0].onclick=function(){f(o-=1)},t[0].onclick=function(){f(o+=1)},a.forEach(function(n,c){n.addEventListener("click",function(){f(o=c+1)})})});
},{}]},{},["EvF2"], null)
//# sourceMappingURL=/TOXIN/build/number-card.39f704ee.js.map