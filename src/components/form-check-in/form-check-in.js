const maskedContainer = document.querySelectorAll(
  '.check-in__input-container_for-masked-field',
);
maskedContainer.forEach(element => {
  const maskedForDate = element.querySelector('.input__content');
  $(maskedForDate).inputmask('99.99.9999', { placeholder: 'ДД/ММ/ГГГГ' });
});
