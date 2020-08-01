$(document).ready(function () {
  document.querySelector('.header-container__user-icon').onclick = function (
    e,
  ) {
    const containerUser = document.querySelector('.header-container__user');
    containerUser.classList.toggle('display-show');
    e.preventDefault();
  };
  document.querySelector(
    '.header-container__navigation-icon',
  ).onclick = function (e) {
    const containerUser = document.querySelector(
      '.header-container__navigation',
    );
    containerUser.classList.toggle('display-show');
    e.preventDefault();
  };
});
