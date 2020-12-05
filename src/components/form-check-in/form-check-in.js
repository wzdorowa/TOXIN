const inputs = document.querySelectorAll('.check-in__input-container_for-datepicker');

inputs.forEach(element => {
  const elementInput = element.querySelector('.input__content');
  const datepicker = document.querySelector('.check-in__datepicker');
  const buttonApply = datepicker.querySelector(
    '.calendar__buttons-container_for-apply',
  );

  elementInput.addEventListener('focus', () => {
    datepicker.classList.add('check-in__datepicker_visible');
  });
  buttonApply.addEventListener('click', e => {
    e.preventDefault();
    datepicker.classList.remove('check-in__datepicker_visible');
  });
});
