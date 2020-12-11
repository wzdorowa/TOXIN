const elements = document.querySelectorAll('.inputs-with-datepicker');
const datepicker = document.querySelectorAll(
  '.inputs-with-datepicker__datepicker',
);

elements.forEach((element, index) => {
  const elementsInput = element.querySelectorAll('.input__content');
  const dropdownsArrow = element.querySelectorAll('.input__icon-arrow-down');

  dropdownsArrow.forEach(dropdownArrow => {
    dropdownArrow.addEventListener('click', () => {
      if (
        datepicker[index].classList.contains(
          'inputs-with-datepicker__datepicker_visible',
        ) === false
      ) {
        datepicker[index].classList.add(
          'inputs-with-datepicker__datepicker_visible',
        );
      } else if (
        datepicker[index].classList.contains(
          'inputs-with-datepicker__datepicker_visible',
        )
      ) {
        datepicker[index].classList.remove(
          'inputs-with-datepicker__datepicker_visible',
        );
      }
    });
  });

  elementsInput.forEach(elementInput => {
    elementInput.addEventListener('focus', () => {
      datepicker[index].classList.add(
        'inputs-with-datepicker__datepicker_visible',
      );
    });
  });

  datepicker.forEach(element => {
    const buttonApply = element.querySelector(
      '.calendar__buttons-container_for-apply',
    );
    buttonApply.addEventListener('click', e => {
      e.preventDefault();
      datepicker[index].classList.remove(
        'inputs-with-datepicker__datepicker_visible',
      );
    });
  });
});

const maskedContainer = document.querySelectorAll('.inputs__item-masked-field');
maskedContainer.forEach(() => {
  $('.input__content').mask("99.99.9999", {placeholder: "ДД.ММ.ГГГГ"});
});
