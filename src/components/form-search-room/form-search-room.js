const elements = document.querySelectorAll('.search-room__input-container');

elements.forEach(element => {
  const elementInput = element.querySelector('.input__content');
  const datepicker = document.querySelector('.search-room__datepicker');
  const buttonApply = datepicker.querySelector(
    '.calendar__buttons-container_for-apply',
  );

  elementInput.addEventListener('focus', () => {
    datepicker.classList.add('search-room__datepicker_visible');
  });
  buttonApply.addEventListener('click', e => {
    e.preventDefault();
    datepicker.classList.remove('search-room__datepicker_visible');
  });
});
