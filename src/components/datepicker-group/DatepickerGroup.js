class DatepickerGroup {
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

    this._findElement();
    this.setUserDataToCalendar();
    this._bindEventListeners();
    this._setValueToInput();
  }

  _findElement() {
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
      '.js-calendar__buttons-container_with-button-apply',
    );
    this.buttonClear = this.datepickerGroup.querySelector(
      '.js-calendar__buttons-container_with-button-clear',
    );
    this.calendar = this.datepickerGroup.querySelector('.js-datepicker-here');
    this.inputs = this.datepickerGroup.querySelectorAll('.js-input__content');
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
    }
  }

  _addClass() {
    this.datepicker.classList.add('datepicker-group__datepicker_visible');
  }

  _removeClass() {
    this.datepicker.classList.remove('datepicker-group__datepicker_visible');
  }

  _toggleClass() {
    this.datepicker.classList.toggle('datepicker-group__datepicker_visible');
  }

  _clearValues() {
    const $myCalendar = $(this.datepickerGroup).find('.js-datepicker-here');
    const $calendar = $($myCalendar).datepicker().data('datepicker');
    $calendar.clear();
    this.inputs.forEach(input => {
      input.value = '';
    });
  }

  _handleInputContentFocus() {
    this._toggleClass();
  }

  _handleIconArrowDownClick() {
    this._toggleClass();
  }

  _handleButtonsContainerForApplyClick() {
    this._removeClass();
  }

  _handleButtonsContainerForClearClick() {
    this._clearValues();
  }

  _handleDocumentClick(event) {
    if (!this.datepickerGroup.contains(event.target)) {
      this._removeClass();
    }
  }

  _bindEventListeners() {
    this.elementsInput.forEach(elementInput => {
      elementInput.addEventListener(
        'click',
        this._handleInputContentFocus.bind(this),
      );
    });
    this.dropdownsArrow.forEach(dropdownArrow => {
      dropdownArrow.addEventListener(
        'click',
        this._handleIconArrowDownClick.bind(this),
      );
    });
    this.buttonApply.addEventListener(
      'click',
      this._handleButtonsContainerForApplyClick.bind(this),
    );
    this.buttonClear.addEventListener(
      'click',
      this._handleButtonsContainerForClearClick.bind(this),
    );
    document.addEventListener(
      'click',
      this._handleDocumentClick.bind(this),
      true,
    );
  }

  _setValueToInput() {
    if (
      $(this.calendar).parents('.datepicker-group__datepicker_with-one-input')
        .length === 1
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
  new DatepickerGroup(element);
});
