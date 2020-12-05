const elements = document.querySelectorAll('.check-in__input-container');

elements.forEach(element => {
  const elementInput = element.querySelector('.input__content');
  const datepicker = document.querySelector('.check-in__datepicker');

  elementInput.onfocus = () => {
    datepicker.classList.add('check-in__datepicker_visible');
  };
  elementInput.onblur = () => {
    datepicker.classList.remove('check-in__datepicker_visible');
  };
});