$(document).ready(() => {
  $('.checkbox-list__title').click(() => {
    $('.checkbox-list__slide-toggle').slideToggle();
  });
  const checkboxList = document.querySelector('.checkbox-list__title');
  const checkboxOpened = document.querySelector('.checkbox-list__indicator');

  checkboxList.onclick = () => {
    checkboxOpened.classList.toggle('opened');
  };
});
