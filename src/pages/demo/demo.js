const maskedContainer = document.querySelectorAll('.inputs__item-masked-field');
maskedContainer.forEach(() => {
  $('.input__content').mask('99.99.9999', { placeholder: 'ДД.ММ.ГГГГ' });
});
