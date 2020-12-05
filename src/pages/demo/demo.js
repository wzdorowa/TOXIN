const elements = document.querySelectorAll('.inputs-with-datepicker');
const datepicker = document.querySelectorAll(
  '.inputs-with-datepicker__datepicker',
);

elements.forEach((element, index) => {
  const elementsInput = element.querySelectorAll('.input__content');

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
