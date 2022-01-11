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
      '.js-checkbox-list__title',
    );
    this.checkboxListToggle = this.checkboxList.querySelector(
      '.js-checkbox-list__container',
    );
    this.checkboxListIndicator = this.checkboxList.querySelector(
      '.js-checkbox-list__indicator',
    );
  }

  _handleCheckboxListTitleClick() {
    this.checkboxListToggle.classList.toggle('checkbox-list__container_hidden');
    this.checkboxListIndicator.classList.toggle(
      'checkbox-list__indicator_opened',
    );
  }

  _bindEventListeners() {
    this.checkboxListTitle.addEventListener(
      'click',
      this._handleCheckboxListTitleClick.bind(this),
    );
  }
}

const checkboxLists = document.querySelectorAll('.js-checkbox-list');
checkboxLists.forEach(element => {
  new CheckboxList(element);
});
