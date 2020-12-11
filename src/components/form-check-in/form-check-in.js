const maskedContainer = document.querySelectorAll(
  '.check-in__input-container_for-masked-field',
);
maskedContainer.forEach(() => {
  $('.input__content').mask('99.99.9999', { placeholder: 'ДД.ММ.ГГГГ' });
});
