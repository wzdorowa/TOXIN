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
    this.listenFocusInput();
    this.listenClickDropdownArrow();
    this.listenButtonApply();
    this.listenButtonClear();
    this.listenClickDocument();
    this.setValueToInput();
  }

  findElement() {
    this.datepicker = this.datepickerGroup.querySelector(
      '.datepicker-group__datepicker',
    );
    this.elementsInput = this.datepickerGroup.querySelectorAll(
      '.input__content',
    );
    this.dropdownsArrow = this.datepickerGroup.querySelectorAll(
      '.input__icon-arrow-down',
    );
    this.buttonApply = this.datepickerGroup.querySelector(
      '.calendar__buttons-container_for-apply',
    );
    this.buttonClear = this.datepickerGroup.querySelector(
      '.calendar__buttons-container_for-clear',
    );
    this.calendar = this.datepickerGroup.querySelector('.calendar__content');
  }

  addClass() {
    this.datepicker.classList.add('datepicker-group__datepicker_visible');
  }

  removeClass() {
    this.datepicker.classList.remove('datepicker-group__datepicker_visible');
  }

  toggleClass() {
    if (
      this.datepicker.classList.contains(
        'datepicker-group__datepicker_visible',
      ) === false
    ) {
      this.addClass();
    } else if (
      this.datepicker.classList.contains('datepicker-group__datepicker_visible')
    ) {
      this.removeClass();
    }
  }

  clearValues() {
    const $myCalendar = $(this.datepickerGroup).find('.calendar__content');
    const $calendar = $($myCalendar).datepicker().data('datepicker');
    $calendar.clear();
  }

  listenFocusInput() {
    this.elementsInput.forEach(elementInput => {
      elementInput.addEventListener('focus', () => {
        this.addClass();
      });
    });
  }

  listenClickDropdownArrow() {
    this.dropdownsArrow.forEach(dropdownArrow => {
      dropdownArrow.addEventListener('click', () => {
        this.toggleClass();
      });
    });
  }

  listenButtonApply() {
    this.buttonApply.addEventListener('click', () => {
      this.removeClass();
    });
  }

  listenButtonClear() {
    this.buttonClear.addEventListener('click', () => {
      this.clearValues();
    });
  }

  listenClickDocument() {
    document.addEventListener(
      'click',
      event => {
        if (!this.datepickerGroup.contains(event.target)) {
          this.removeClass();
        }
      },
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
          const input = this.datepickerGroup.querySelector('.input__content');
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
            '.input__content',
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

const elements = document.querySelectorAll('.datepicker-group');
elements.forEach(element => {
  new Datepicker(element);
});
