class CheckboxList {
  constructor(element) {
    this.checkboxList = element;
    this.checkboxListTitle = null;
    this.checkboxListToggle = null;
    this.checkboxListIndicator = null;

    this.findElements();
    this.listenClickCheckboxListTitle();
    this.listenClickDocument();
  }

  findElements() {
    this.checkboxListTitle = this.checkboxList.querySelector(
      '.checkbox-list__title',
    );
    this.checkboxListToggle = this.checkboxList.querySelector(
      '.checkbox-list__container_hidden',
    );
    this.checkboxListIndicator = this.checkboxList.querySelector(
      '.checkbox-list__indicator',
    );
  }

  listenClickCheckboxListTitle() {
    const toggleClassList = () => {
      this.checkboxListToggle.classList.toggle(
        'checkbox-list__container_hidden',
      );
      this.checkboxListIndicator.classList.toggle(
        'checkbox-list__indicator_opened',
      );
    };
    this.checkboxListTitle.addEventListener('click', toggleClassList);
  }

  listenClickDocument() {
    const addClass = event => {
      if (event.target.closest('.checkbox-list') !== this.checkboxList) {
        this.checkboxListToggle.classList.add(
          'checkbox-list__container_hidden',
        );
      }
    };
    document.addEventListener('click', addClass);
  }
}

const checkboxLists = document.querySelectorAll('.checkbox-list');
checkboxLists.forEach(element => {
  new CheckboxList(element);
});
