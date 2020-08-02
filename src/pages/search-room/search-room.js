$(document).ready(() => {
  document.querySelector('.search-room__filter-access').onclick = e => {
    const containerUser = document.querySelector('.search-room__filter');
    containerUser.classList.toggle('search-room__filter_show');
    e.preventDefault();
  };
});
