$(document).ready(() => {
  $('.chechbox-list__title').click(() => {
    $('.chechbox-list__slideToggle').slideToggle();
  });
});
const checkboxList = document.querySelector('.chechbox-list__title');
const checkboxOpened = document.querySelector('.chechbox-list__indicator');

checkboxList.onclick = () => {
  checkboxOpened.classList.toggle('opened');
};
