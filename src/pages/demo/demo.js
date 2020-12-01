const elements = document.querySelectorAll('.inputs-with-datepicker');
const datepicker = document.querySelectorAll(
  '.inputs-with-datepicker__datepicker',
);

elements.forEach((element, index) => {
  const elementsInput = element.querySelectorAll('.input__content');

  elementsInput.forEach(elementInput => {
    elementInput.onfocus = () => {
      datepicker[index].classList.add(
        'inputs-with-datepicker__datepicker_visible',
      );
    };
  });

  elementsInput.forEach(elementInput => {
    elementInput.onblur = () => {
      datepicker[index].classList.remove(
        'inputs-with-datepicker__datepicker_visible',
      );
    };
  });
});
