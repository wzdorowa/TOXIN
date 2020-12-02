const elements = document.querySelectorAll('.room-cost-form__input-container');
console.log('elements', elements);

elements.forEach(element => {
  const elementInput = element.querySelector('.input__content');
  console.log('elementInput', elementInput);
  const datepicker = document.querySelector('.room-cost-form__datepicker');
  console.log('datepicker', datepicker);

  elementInput.onfocus = () => {
    datepicker.classList.add('room-cost-form__datepicker_visible');
  };
  elementInput.onblur = () => {
    datepicker.classList.remove('room-cost-form__datepicker_visible');
  };
});
