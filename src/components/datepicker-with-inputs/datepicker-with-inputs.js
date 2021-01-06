const elements = document.querySelectorAll('.datepicker-group');
const datepicker = document.querySelectorAll('.datepicker-group__datepicker');

elements.forEach((element, index) => {
  const elementsInput = element.querySelectorAll('.input__content');
  const dropdownsArrow = element.querySelectorAll('.input__icon-arrow-down');

  document.addEventListener(
    'click',
    event => {
      const hide = () => {
        if (
          datepicker[index].classList.contains(
            'datepicker-group__datepicker_visible',
          )
        ) {
          datepicker[index].classList.remove(
            'datepicker-group__datepicker_visible',
          );
        }
      };
      if (!element.contains(event.target)) {
        hide();
      }
    },
    true,
  );
  dropdownsArrow.forEach(dropdownArrow => {
    const addOrRemoveClass = () => {
      if (
        datepicker[index].classList.contains(
          'datepicker-group__datepicker_visible',
        ) === false
      ) {
        datepicker[index].classList.add('datepicker-group__datepicker_visible');
      } else if (
        datepicker[index].classList.contains(
          'datepicker-group__datepicker_visible',
        )
      ) {
        datepicker[index].classList.remove(
          'datepicker-group__datepicker_visible',
        );
      }
    };
    dropdownArrow.addEventListener('click', () => {
      addOrRemoveClass();
    });
  });

  elementsInput.forEach(elementInput => {
    const addClass = () => {
      datepicker[index].classList.add('datepicker-group__datepicker_visible');
    };
    elementInput.addEventListener('focus', () => {
      addClass();
    });
  });

  datepicker.forEach((element, index) => {
    const buttonApply = element.querySelector(
      '.calendar__buttons-container_for-apply',
    );
    const buttonClear = element.querySelector(
      '.calendar__buttons-container_for-clear',
    );
    const applyDatepicker = e => {
      e.preventDefault();
      datepicker[index].classList.remove(
        'datepicker-group__datepicker_visible',
      );
    };
    const clearDatepicker = e => {
      e.preventDefault();
      const myCalendar = $(element).find('.calendar__content');
      const calendar = $(myCalendar).datepicker().data('datepicker');
      calendar.clear();
    };
    buttonApply.addEventListener('click', e => {
      applyDatepicker(e);
    });
    buttonClear.addEventListener('click', e => {
      clearDatepicker(e);
    });
  });
  const calendar = element.querySelector('.calendar__content');
  if ($(calendar).parents('.datepicker-group__datepicker_only').length === 1) {
    $(calendar).datepicker({
      navTitles: {
        days: 'MM <i>yyyy</i>',
      },
      multipleDatesSeparator: ' - ',
      dateFormat: 'dd M',
      onSelect: (fd, dates) => {
        const res = element.querySelector('.input__content');
        let string = '';

        if (dates) {
          dates.forEach(() => {
            string = fd;
          });
          res.value = string;
        }
      },
    });
  } else {
    $(calendar).datepicker({
      navTitles: {
        days: 'MM <i>yyyy</i>',
      },
      dateFormat: 'dd.mm.yyyy',
      onSelect: fd => {
        const res = element.querySelectorAll('.input__content');
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
        res[0].value = dayFrom;
        res[1].value = dayTo;
      },
    });
  }
});
