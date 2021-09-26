class DateDropdown {
  constructor(element) {
    this.datepickerGroup = element;
    this.datepicker = null;
    this.elementsInput = null;
    this.dropdownsArrow = null;
    this.buttonApply = null;
    this.buttonClear = null;
    this.calendar = null;
    this.dayFrom = '';
    this.dayTo = '';
    this.dates = [];

    this.findElement();
    this.setUserDataToCalendar();
    this.bindEventListeners();
    this.setValueToInput();
  }

  findElement() {
    this.datepicker = this.datepickerGroup.querySelector(
      '.js-date-dropdown__datepicker',
    );
    this.elementsInput = this.datepickerGroup.querySelectorAll(
      '.js-date-dropdown__input-content',
    );
    this.dropdownsArrow = this.datepickerGroup.querySelectorAll(
      '.js-date-dropdown__input-arrow-down',
    );
    this.buttonApply = this.datepickerGroup.querySelector(
      '.js-calendar__buttons-container_with-button-apply',
    );
    this.buttonClear = this.datepickerGroup.querySelector(
      '.js-calendar__buttons-container_with-button-clear',
    );
    this.calendar = this.datepickerGroup.querySelector('.js-datepicker-here');
    this.inputs = this.datepickerGroup.querySelectorAll(
      '.js-date-dropdown__input-content',
    );
  }

  setUserDataToCalendar() {
    this.dayFrom = this.calendar.dataset.dayFrom;
    this.dayTo = this.calendar.dataset.dayTo;
    const isDayFrom = this.dayFrom !== undefined && this.dayFrom !== '';
    const isDayTo = this.dayTo !== undefined && this.dayTo !== '';
    const isVerify = isDayFrom && isDayTo;

    if (isVerify) {
      const datepicker = $(this.calendar).datepicker().data('datepicker');

      const newFormatDayFrom = this.dayFrom.split('.').reverse().join('-');
      const newFormatDayTo = this.dayTo.split('.').reverse().join('-');
      datepicker.selectDate([
        new Date(newFormatDayFrom),
        new Date(newFormatDayTo),
      ]);
      this.inputs[0].value = this.dayFrom;
      this.inputs[1].value = this.dayTo;
      $(this.calendar).datepicker({
        moveToOtherMonthsOnSelect: false,
      });
    }
  }

  addClass() {
    this.datepicker.classList.add('date-dropdown__datepicker_visible');
  }

  removeClass() {
    this.datepicker.classList.remove('date-dropdown__datepicker_visible');
  }

  toggleClass() {
    this.datepicker.classList.toggle('date-dropdown__datepicker_visible');
  }

  clearValues() {
    const $myCalendar = $(this.datepickerGroup).find('.js-datepicker-here');
    const $calendar = $($myCalendar).datepicker().data('datepicker');
    $calendar.clear();
    this.inputs.forEach(element => {
      element.value = '';
    });
  }

  handleInputContentFocus() {
    this.toggleClass();
  }

  handleIconArrowDownClick() {
    this.toggleClass();
  }

  handleButtonsContainerForApplyClick() {
    this.removeClass();
  }

  handleButtonsContainerForClearClick() {
    this.clearValues();
  }

  handleDocumentClick(event) {
    if (!this.datepickerGroup.contains(event.target)) {
      this.removeClass();
      if (this.dates.length === 1) {
        this.clearValues();
      }
    }
  }

  bindEventListeners() {
    this.elementsInput.forEach(elementInput => {
      elementInput.addEventListener(
        'click',
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
      $(this.calendar).parents('.date-dropdown__datepicker_with-one-input')
        .length === 1
    ) {
      $(this.calendar).datepicker({
        navTitles: {
          days: 'MM <i>yyyy</i>',
        },
        multipleDatesSeparator: ' - ',
        dateFormat: 'dd M',
        moveToOtherMonthsOnSelect: false,
        onSelect: (fd, dates) => {
          this.dates = dates;
          const input = this.datepickerGroup.querySelector(
            '.js-date-dropdown__input-content',
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
        moveToOtherMonthsOnSelect: false,
        onSelect: (fd, dates) => {
          this.dates = dates;
          const inputs = this.datepickerGroup.querySelectorAll(
            '.js-date-dropdown__input-content',
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

const elements = document.querySelectorAll('.js-date-dropdown');
elements.forEach(element => {
  new DateDropdown(element);
});
