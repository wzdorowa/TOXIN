class CheckboxList {
  constructor(element) {
    this.checkboxList = element;
    this.checkboxListTitle = null;
    this.checkboxListToggle = null;
    this.checkboxListIndicator = null;

    this.findElements();
    this.bindEventListeners();
  }

  findElements() {
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

  handleCheckboxListTitleClick() {
    this.checkboxListToggle.classList.toggle('checkbox-list__container_hidden');
    this.checkboxListIndicator.classList.toggle(
      'checkbox-list__indicator_opened',
    );
  }

  handleDocumentClick(event) {
    if (event.target.closest('.checkbox-list') !== this.checkboxList) {
      this.checkboxListToggle.classList.add('checkbox-list__container_hidden');
    }
  }

  bindEventListeners() {
    this.checkboxListTitle.addEventListener(
      'click',
      this.handleCheckboxListTitleClick.bind(this),
    );
    document.addEventListener('click', this.handleDocumentClick.bind(this));
  }
}

const checkboxLists = document.querySelectorAll('.js-checkbox-list');
checkboxLists.forEach(element => {
  new CheckboxList(element);
});
