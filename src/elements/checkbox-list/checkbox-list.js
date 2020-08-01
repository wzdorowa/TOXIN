$(document).ready(function () {
  $('.chechbox-list__title').click(function () {
    $('.chechbox-list__slideToggle').slideToggle();
  });
});
const checkboxList = document.querySelector('.chechbox-list__title');
const checkboxOpened = document.querySelector('.chechbox-list__indicator');

checkboxList.onclick = function () {
  checkboxOpened.classList.toggle('opened');
};
