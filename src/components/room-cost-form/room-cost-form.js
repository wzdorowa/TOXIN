const elements = document.querySelectorAll('.room-cost-form__input-container');

elements.forEach(element => {
  const elementInput = element.querySelector('.input__content');
  const datepicker = document.querySelector('.room-cost-form__datepicker');

  elementInput.onfocus = () => {
    datepicker.classList.add('room-cost-form__datepicker_visible');
  };
  elementInput.onblur = () => {
    datepicker.classList.remove('room-cost-form__datepicker_visible');
  };
});
