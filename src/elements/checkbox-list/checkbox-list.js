$(document).ready(function() {
    $('.chechbox-list__title').click(function() {
        $('.chechbox-list__slideToggle').slideToggle();
    })
})
var checkboxList = document.querySelector(".chechbox-list__title");
var checkboxRotate = document.querySelector(".chechbox-list__indicator");

checkboxList.onclick = function(){
    checkboxRotate.classList.toggle('rotate')
  }