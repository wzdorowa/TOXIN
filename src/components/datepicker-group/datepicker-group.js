class Datepicker {
  constructor(element) {
    this.datepickerGroup = element;
    this.datepicker = null;
    this.elementsInput = null;
    this.dropdownsArrow = null;
    this.buttonApply = null;
    this.buttonClear = null;
    this.calendar = null;

    this.findElement();
    this.bindEventListeners();
    this.setValueToInput();
  }

  findElement() {
    this.datepicker = this.datepickerGroup.querySelector(
      '.js-datepicker-group__datepicker',
    );
    this.elementsInput = this.datepickerGroup.querySelectorAll(
      '.js-input__content',
    );
    this.dropdownsArrow = this.datepickerGroup.querySelectorAll(
      '.js-input__icon-arrow-down',
    );
    this.buttonApply = this.datepickerGroup.querySelector(
      '.js-calendar__buttons-container_for-apply',
    );
    this.buttonClear = this.datepickerGroup.querySelector(
      '.js-calendar__buttons-container_for-clear',
    );
    this.calendar = this.datepickerGroup.querySelector('.js-calendar__content');
  }

  addClass() {
    this.datepicker.classList.add('datepicker-group__datepicker_visible');
  }

  removeClass() {
    this.datepicker.classList.remove('datepicker-group__datepicker_visible');
  }

  toggleClass() {
    this.datepicker.classList.toggle('datepicker-group__datepicker_visible');
  }

  clearValues() {
    const $myCalendar = $(this.datepickerGroup).find('.js-calendar__content');
    const $calendar = $($myCalendar).datepicker().data('datepicker');
    $calendar.clear();
  }

  handleInputContentFocus() {
    this.addClass();
  }

  handleIconArrowDownClick() {
    this.toggleClass();
  }

  handleButtonsContainerForApplyClick() {
    this.removeClass();
  }

  handleButtonsContainerForClearClick() {
    console.log(this);
    this.clearValues();
  }

  handleDocumentClick(event) {
    if (!this.datepickerGroup.contains(event.target)) {
      this.removeClass();
    }
  }

  bindEventListeners() {
    this.elementsInput.forEach(elementInput => {
      elementInput.addEventListener(
        'focus',
        this.handleInputContentFocus.bind(this),
      );
    });
    this.dropdownsArrow.forEach(dropdownArrow => {
      dropdownArrow.addEventListener(
        'click',
        this.handleIconArrowDownClick.bind(this),
      );
    });
    this.buttonApply.addEventListener(
      'click',
      this.handleButtonsContainerForApplyClick.bind(this),
    );
    this.buttonClear.addEventListener(
      'click',
      this.handleButtonsContainerForClearClick.bind(this),
    );
    document.addEventListener(
      'click',
      this.handleDocumentClick.bind(this),
      true,
    );
  }

  setValueToInput() {
    if (
      $(this.calendar).parents('.datepicker-group__datepicker_only').length ===
      1
    ) {
      $(this.calendar).datepicker({
        navTitles: {
          days: 'MM <i>yyyy</i>',
        },
        multipleDatesSeparator: ' - ',
        dateFormat: 'dd M',
        onSelect: (fd, dates) => {
          const input = this.datepickerGroup.querySelector(
            '.js-input__content',
          );
          let string = '';

          if (dates) {
            dates.forEach(() => {
              string = fd;
            });
            input.value = string;
          }
        },
      });
    } else {
      $(this.calendar).datepicker({
        navTitles: {
          days: 'MM <i>yyyy</i>',
        },
        dateFormat: 'dd.mm.yyyy',
        onSelect: fd => {
          const inputs = this.datepickerGroup.querySelectorAll(
            '.js-input__content',
          );
          let dayFrom = '';
          let dayTo = '';

          const signs = fd.split('');
          signs.forEach((element, i) => {
            if (i < 10) {
              dayFrom += element;
            } else if (i > 10) {
              dayTo += element;
            }
          });
          inputs[0].value = dayFrom;
          inputs[1].value = dayTo;
        },
      });
    }
  }
}

const elements = document.querySelectorAll('.js-datepicker-group');
elements.forEach(element => {
  new Datepicker(element);
});
