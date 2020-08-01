$(document).ready(function () {
  document.querySelector('.search-room-filter-access').onclick = function (e) {
    const containerUser = document.querySelector('.search-room-filter');
    containerUser.classList.toggle('display-show');
    e.preventDefault();
  };
});
