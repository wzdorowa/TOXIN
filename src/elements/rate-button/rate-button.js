$('.rating').each(() => {
//var rating = document.querySelector('.rating');
//var ratingItem = document.querySelectorAll('.rating-item');
const rating = this;
const ratingItems = $(this).find('.rating-item');

rating.onclick = function(e){
  var target = e.target;
  if(target.classList.contains('rating-item')){
    removeClass(ratingItems,'current-active')
    target.classList.add('active','current-active');
  }
}

rating.onmouseover = function(e) {
  var target = e.target;
  if(target.classList.contains('rating-item')){
    removeClass(ratingItems,'active')
    target.classList.add('active');
    mouseOverActiveClass(ratingItems)
  }
}
rating.onmouseout = function(){
  addClass(ratingItems,'active');
  mouseOutActiveClas(ratingItems);
}

function removeClass(arr) {
  for(var i = 0, iLen = arr.length; i <iLen; i ++) {
    for(var j = 1; j < arguments.length; j ++) {
      ratingItems[i].classList.remove(arguments[j]);
    }
  }
}
function addClass(arr) {
  for(var i = 0, iLen = arr.length; i <iLen; i ++) {
    for(var j = 1; j < arguments.length; j ++) {
      ratingItems[i].classList.add(arguments[j]);
    }
  }
}

function mouseOverActiveClass(arr){
  for(var i = 0, iLen = arr.length; i < iLen; i++) {
    if(arr[i].classList.contains('active')){
      break;
    }else {
      arr[i].classList.add('active');
    }
  }
}

function mouseOutActiveClas(arr){
  for(var i = arr.length-1; i >=1; i--) {
    if(arr[i].classList.contains('current-active')){
      break;
    }else {
      arr[i].classList.remove('active');
    }
  }
}
})