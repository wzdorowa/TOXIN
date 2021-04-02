class CheckboxList {
  constructor(element) {
    this._checkboxList = element;
    this._checkboxListTitle = null;
    this._checkboxListToggle = null;
    this._checkboxListIndicator = null;

    this._findElements();
    this._bindEventListeners();
  }

  _findElements() {
    this._checkboxListTitle = this._checkboxList.querySelector(
      '.js-checkbox-list__title',
    );
    this._checkboxListToggle = this._checkboxList.querySelector(
      '.js-checkbox-list__container_hidden',
    );
    this._checkboxListIndicator = this._checkboxList.querySelector(
      '.js-checkbox-list__indicator',
    );
  }

  _handleCheckboxListTitleClick() {
    this._checkboxListToggle.classList.toggle('checkbox-list__container_hidden');
    this._checkboxListIndicator.classList.toggle(
      'checkbox-list__indicator_opened',
    );
  }

  _handleDocumentClick(event) {
    if (event.target.closest('.checkbox-list') !== this._checkboxList) {
      this._checkboxListToggle.classList.add('checkbox-list__container_hidden');
    }
  }

  _bindEventListeners() {
    this._checkboxListTitle.addEventListener(
      'click',
      this._handleCheckboxListTitleClick.bind(this),
    );
    document.addEventListener('click', this._handleDocumentClick.bind(this));
  }
}

const checkboxLists = document.querySelectorAll('.js-checkbox-list');
checkboxLists.forEach(element => {
  new CheckboxList(element);
});
