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
      '.js-checkbox-list__container_hidden',
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

  _handleDocumentClick(event) {
    if (event.target.closest('.checkbox-list') !== this.checkboxList) {
      this.checkboxListToggle.classList.add('checkbox-list__container_hidden');
    }
  }

  _bindEventListeners() {
    this.checkboxListTitle.addEventListener(
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
