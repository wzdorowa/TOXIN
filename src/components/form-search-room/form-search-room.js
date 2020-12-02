const elements = document.querySelectorAll('.search-room__input-container');

elements.forEach(element => {
  const elementInput = element.querySelector('.input__content');
  const datepicker = document.querySelector('.search-room__datepicker');

  elementInput.onfocus = () => {
    datepicker.classList.add('search-room__datepicker_visible');
  };
  elementInput.onblur = () => {
    datepicker.classList.remove('search-room__datepicker_visible');
  };
});
