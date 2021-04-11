class DatepickerGroup {
  constructor(element) {
    this.datepickerGroup = element;
    this.datepicker = null;
    this.elementsInput = null;
    this.dropdownsArrow = null;
    this.buttonApply = null;
    this.buttonClear = null;
    this.calendar = null;

    this._findElement();
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
  }

  _handleInputContentFocus() {
    this._addClass();
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
        'focus',
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
