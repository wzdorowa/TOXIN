$(document).ready(() => {
  document.querySelector('.header__user-icon').onclick = e => {
    const containerUser = document.querySelector('.header__user');
    containerUser.classList.toggle('header__user-icon_show');
    e.preventDefault();
  };
  document.querySelector('.header__navigation-icon').onclick = e => {
    const containerUser = document.querySelector('.header__navigation');
    containerUser.classList.toggle('header__navigation-icon_show');
    e.preventDefault();
  };
});
