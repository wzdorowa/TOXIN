const elements = document.querySelectorAll('.search-room__input-container');

elements.forEach(element => {
  const elementInput = element.querySelector('.input__content');
  const datepicker = document.querySelector('.search-room__datepicker');
  const buttonApply = datepicker.querySelector(
    '.calendar__buttons-container_for-apply',
  );
  const dropdownArrow = element.querySelector('.input__icon-arrow-down');

  dropdownArrow.addEventListener('click', () => {
    if (
      datepicker.classList.contains('search-room__datepicker_visible') === false
    ) {
      datepicker.classList.add('search-room__datepicker_visible');
    } else if (
      datepicker.classList.contains('search-room__datepicker_visible')
    ) {
      datepicker.classList.remove('search-room__datepicker_visible');
    }
  });

  elementInput.addEventListener('focus', () => {
    datepicker.classList.add('search-room__datepicker_visible');
  });
  buttonApply.addEventListener('click', e => {
    e.preventDefault();
    datepicker.classList.remove('search-room__datepicker_visible');
  });
});
