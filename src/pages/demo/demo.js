const maskedContainer = document.querySelectorAll(
  '.components__inputs-item-masked-field',
);

maskedContainer.forEach(element => {
  const maskedForDate = element.querySelector('.input__content');
  $(maskedForDate).inputmask('99.99.9999', { placeholder: 'ДД/ММ/ГГГГ' });
});
