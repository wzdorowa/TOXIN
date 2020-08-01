$(document).ready(() => {
  document.querySelector('.search-room-filter-access').onclick = e => {
    const containerUser = document.querySelector('.search-room-filter');
    containerUser.classList.toggle('display-show');
    e.preventDefault();
  };
});
