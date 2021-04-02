class Datepicker {
  constructor(element) {
    this._datepickerGroup = element;
    this._datepicker = null;
    this._elementsInput = null;
    this._dropdownsArrow = null;
    this._buttonApply = null;
    this._buttonClear = null;
    this._calendar = null;

    this._findElement();
    this._bindEventListeners();
    this._setValueToInput();
  }

  _findElement() {
    this._datepicker = this._datepickerGroup.querySelector(
      '.js-datepicker-group__datepicker',
    );
    this._elementsInput = this._datepickerGroup.querySelectorAll(
      '.js-input__content',
    );
    this._dropdownsArrow = this._datepickerGroup.querySelectorAll(
      '.js-input__icon-arrow-down',
    );
    this._buttonApply = this._datepickerGroup.querySelector(
      '.js-calendar__buttons-container_with-button-apply',
    );
    this._buttonClear = this._datepickerGroup.querySelector(
      '.js-calendar__buttons-container_with-button-clear',
    );
    this._calendar = this._datepickerGroup.querySelector('.js-datepicker-here');
  }

  _addClass() {
    this._datepicker.classList.add('datepicker-group__datepicker_visible');
  }

  _removeClass() {
    this._datepicker.classList.remove('datepicker-group__datepicker_visible');
  }

  _toggleClass() {
    this._datepicker.classList.toggle('datepicker-group__datepicker_visible');
  }

  _clearValues() {
    const $myCalendar = $(this._datepickerGroup).find('.js-datepicker-here');
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
    if (!this._datepickerGroup.contains(event.target)) {
      this._removeClass();
    }
  }

  _bindEventListeners() {
    this._elementsInput.forEach(elementInput => {
      elementInput.addEventListener(
        'focus',
        this._handleInputContentFocus.bind(this),
      );
    });
    this._dropdownsArrow.forEach(dropdownArrow => {
      dropdownArrow.addEventListener(
        'click',
        this._handleIconArrowDownClick.bind(this),
      );
    });
    this._buttonApply.addEventListener(
      'click',
      this._handleButtonsContainerForApplyClick.bind(this),
    );
    this._buttonClear.addEventListener(
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
      $(this._calendar).parents('.datepicker-group__datepicker_with-one-input')
        .length === 1
    ) {
      $(this._calendar).datepicker({
        navTitles: {
          days: 'MM <i>yyyy</i>',
        },
        multipleDatesSeparator: ' - ',
        dateFormat: 'dd M',
        onSelect: (fd, dates) => {
          const input = this._datepickerGroup.querySelector(
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
      $(this._calendar).datepicker({
        navTitles: {
          days: 'MM <i>yyyy</i>',
        },
        dateFormat: 'dd.mm.yyyy',
        onSelect: fd => {
          const inputs = this._datepickerGroup.querySelectorAll(
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
