$(document).ready(function() {
    $('.chechbox-list__title').click(function() {
        $('.chechbox-list__slideToggle').slideToggle();
    })
})
var checkboxList = document.querySelector(".chechbox-list__title");
var checkboxOpened = document.querySelector(".chechbox-list__indicator");

checkboxList.onclick = function(){
    checkboxOpened.classList.toggle('opened')
  }