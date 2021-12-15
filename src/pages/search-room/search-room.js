const filterButton = document.querySelector('.js-search-room__filter-button');
const filter = document.querySelector('.js-search-room__filter');

filterButton.addEventListener('click', () => {
  filter.classList.toggle('search-room__filter_open');
  filterButton.classList.toggle('search-room__filter-button_open');
});
