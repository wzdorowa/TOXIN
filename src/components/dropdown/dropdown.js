const elements = document.querySelectorAll('.dropdown');

elements.forEach(element => {
  const elementInput = element.querySelector('.input__content');
  const dropdownList = element.querySelector('.dropdown__content');
  const dropdownArrow = element.querySelector('.input__icon-arrow-down');
  const buttonApply = element.querySelector(
    '.dropdown__buttons-container_for-apply',
  );

  dropdownArrow.addEventListener('click', () => {
    if (
      dropdownList.classList.contains('dropdown__content_visible') === false
    ) {
      dropdownList.classList.add('dropdown__content_visible');
    } else if (dropdownList.classList.contains('dropdown__content_visible')) {
      dropdownList.classList.remove('dropdown__content_visible');
    }
  });
  elementInput.addEventListener('focus', () => {
    dropdownList.classList.add('dropdown__content_visible');
  });
  document.addEventListener('click', event => {
    if (event.target.closest('.dropdown') !== element) {
      dropdownList.classList.remove('dropdown__content_visible');
    }
  });
  buttonApply.addEventListener('click', e => {
    e.preventDefault();
    dropdownList.classList.remove('dropdown__content_visible');
  });
});
