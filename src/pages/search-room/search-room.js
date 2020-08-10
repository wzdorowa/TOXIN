const element = $('.search-room__filter-access');

element.onclick = event => {
  const containerUser = $('.search-room__filter');
  containerUser.classList.toggle('search-room__filter_show');
  event.preventDefault();
};
