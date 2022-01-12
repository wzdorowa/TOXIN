class DateDropdown {
  constructor(element) {
    this.datepickerGroup = element;
    this.datepicker = null;
    this.elementsInput = null;
    this.dropdownsArrow = null;
    this.buttonApply = null;
    this.buttonClear = null;
    this.calendar = null;
    this.dates = [];

    this._findElement();
    this._setDefaultDate();
    this._bindEventListeners();
    this._setValueToInput();
  }

  _findElement() {
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
      '.js-calendar__button-apply',
    );
    this.buttonClear = this.datepickerGroup.querySelector(
      '.js-calendar__button-clear',
    );
    this.calendar = this.datepickerGroup.querySelector('.js-datepicker-here');
    this.inputs = this.datepickerGroup.querySelectorAll(
      '.js-date-dropdown__input-content',
    );
  }

  _setDefaultDate() {
    const today = new Date();
    const dayAfter = new Date();
    dayAfter.setDate(dayAfter.getDate() + 4);

    const datepicker = $(this.calendar).datepicker().data('datepicker');

    $(this.calendar).datepicker({
      minDate: today,
    });

    datepicker.selectDate([today, dayAfter]);
    if (this.inputs.length > 1) {
      const todayShort = today
        .toISOString()
        .replace(/T.*/, '')
        .split('-')
        .reverse()
        .join('.');
      const dayAfterShort = dayAfter
        .toISOString()
        .replace(/T.*/, '')
        .split('-')
        .reverse()
        .join('.');

      this.inputs[0].value = todayShort;
      this.inputs[1].value = dayAfterShort;
    } else {
      const options = { month: 'short', day: 'numeric' };
      const todayShort = Array.from(today.toLocaleString('ru-RU', options));
      todayShort.pop();
      const formatTodayShort = todayShort.join('');
      const dayAfterShort = Array.from(
        dayAfter.toLocaleString('ru-RU', options),
      );
      dayAfterShort.pop();
      const formatDayAfterShort = dayAfterShort.join('');

      this.inputs[0].value = `${formatTodayShort} - ${formatDayAfterShort}`;
    }

    this._showButtonClear();

    $(this.calendar).datepicker({
      moveToOtherMonthsOnSelect: false,
    });
  }

  _addClass() {
    this.datepicker.classList.add('date-dropdown__datepicker_visible');
  }

  _removeClass() {
    this.datepicker.classList.remove('date-dropdown__datepicker_visible');
  }

  _toggleClass() {
    this.datepicker.classList.toggle('date-dropdown__datepicker_visible');
  }

  _clearValues() {
    const $myCalendar = $(this.datepickerGroup).find('.js-datepicker-here');
    const $calendar = $($myCalendar).datepicker().data('datepicker');
    $calendar.clear();
    this.inputs.forEach(element => {
      const input = element;
      input.value = '';
    });
  }

  _hideButtonClear() {
    if (!this.buttonClear.classList.contains('calendar__button-clear_hidden')) {
      this.buttonClear.classList.add('calendar__button-clear_hidden');
    }
  }

  _showButtonClear() {
    if (this.buttonClear.classList.contains('calendar__button-clear_hidden')) {
      this.buttonClear.classList.remove('calendar__button-clear_hidden');
    }
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
    this._hideButtonClear();
  }

  _handleDocumentClick(event) {
    if (!this.datepickerGroup.contains(event.target)) {
      this._removeClass();
      if (this.dates.length === 1) {
        this._clearValues();
        this._hideButtonClear();
      }
    }
  }

  _bindEventListeners() {
    this.elementsInput.forEach(elementInput => {
      elementInput.addEventListener('click', () => {
        this._handleInputContentFocus();
      });
    });
    this.dropdownsArrow.forEach(dropdownArrow => {
      dropdownArrow.addEventListener('click', () => {
        this._handleIconArrowDownClick();
      });
    });
    this.buttonApply.addEventListener('click', () => {
      this._handleButtonsContainerForApplyClick();
    });
    this.buttonClear.addEventListener('click', () => {
      this._handleButtonsContainerForClearClick();
    });
    document.addEventListener(
      'click',
      () => {
        this._handleDocumentClick();
      },
      true,
    );
  }

  _setValueToInput() {
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

            this._showButtonClear();
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

          this._showButtonClear();
        },
      });
    }
  }
}

const elements = document.querySelectorAll('.js-date-dropdown');
elements.forEach(element => {
  new DateDropdown(element);
});
