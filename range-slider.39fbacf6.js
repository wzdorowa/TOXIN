parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"N9Jl":[function(require,module,exports) {
$(".slider__range").slider({min:0,max:15450,values:[5e3,1e4],range:!0,animate:"fast",slide:function(e,r){$(".slider__left-price").val(r.values[0]),$(".slider__right-price").val(r.values[1])}}),$(".slider__left-price").val($(".slider__range").slider("values",0)),$(".slider__right-price").val($(".slider__range").slider("values",1)),$(".slider__range").focusout(function(){var e=$(".slider__left-price").val().replace(/[^0-9]/g,""),r=$(".slider__range").slider("option","min"),l=$(".slider__range").slider("values",1),i=$(".slider__right-price").val().replace(/[^0-9]/g,""),s=$(".slider__range").slider("option","max"),a=$(".slider__range").slider("values",0);e>l&&(e=l),e<r&&(e=r),""===e&&(e=0),i<a&&(i=a),i>s&&(i=s),""===i&&(i=0),$(".slider__left-price").val(e),$(".slider__right-price").val(i),$(".slider__range").slider("values",[e,i])});
},{}]},{},["N9Jl"], null)
//# sourceMappingURL=/range-slider.39fbacf6.js.map