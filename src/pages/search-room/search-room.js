class Filter {
  constructor(element) {
    this.filter = element;

    this._findElements();
    this._handleFilterButtonClick();
  }

  _findElements() {
    this.filterButton = document.querySelector(
      '.js-search-room__filter-button',
    );
  }

  _handleFilterButtonClick() {
    this.filterButton.addEventListener('click', () => {
      this.filter.classList.toggle('search-room__filter_open');
      this.filterButton.classList.toggle('search-room__filter-button_open');
    });
  }
}

const filter = document.querySelector('.js-search-room__filter');
if (filter !== null) {
  new Filter(filter);
}
