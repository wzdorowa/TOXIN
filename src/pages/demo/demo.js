const maskedContainer = document.querySelectorAll('.inputs__item-masked-field');

maskedContainer.forEach(element => {
  const maskedForDate = element.querySelector('.input__content');
  $(maskedForDate).inputmask('99.99.9999', { placeholder: 'ДД/ММ/ГГГГ' });
});
