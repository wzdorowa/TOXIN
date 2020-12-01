const elements = document.querySelectorAll('.dropdown');

elements.forEach(element => {
  const elementInput = element.querySelector('.input__content');
  const dropDownList = element.querySelector('.dropdown__content');

  elementInput.onfocus = () => {
    dropDownList.classList.add('dropdown__content_visible');
  };
  elementInput.onblur = () => {
    dropDownList.classList.remove('dropdown__content_visible');
  };
});
