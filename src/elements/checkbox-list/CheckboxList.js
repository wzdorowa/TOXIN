class CheckboxList {
  constructor(element) {
    this.checkboxList = element;
    this.checkboxListTitle = null;
    this.checkboxListToggle = null;
    this.checkboxListIndicator = null;

    this._findElements();
    this._bindEventListeners();
  }

  _findElements() {
    this.checkboxListTitle = this.checkboxList.querySelector(
      '.js-checkbox-list__title-wrapper',
    );
  }

  _handleCheckboxListTitleClick = () => {
    this.checkboxList.classList.toggle('checkbox-list_closed');
  }

  _bindEventListeners() {
    this.checkboxListTitle.addEventListener('click', this._handleCheckboxListTitleClick);
  }
}

const checkboxLists = document.querySelectorAll('.js-checkbox-list');
checkboxLists.forEach(element => {
  new CheckboxList(element);
});
