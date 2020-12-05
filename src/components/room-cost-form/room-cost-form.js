const elements = document.querySelectorAll('.room-cost-form__input-container');

elements.forEach(element => {
  const elementInput = element.querySelector('.input__content');
  const datepicker = document.querySelector('.room-cost-form__datepicker');
  const buttonApply = datepicker.querySelector(
    '.calendar__buttons-container_for-apply',
  );

  elementInput.addEventListener('focus', () => {
    datepicker.classList.add('room-cost-form__datepicker_visible');
  });
  buttonApply.addEventListener('click', e => {
    e.preventDefault();
    datepicker.classList.remove('room-cost-form__datepicker_visible');
  });
});
