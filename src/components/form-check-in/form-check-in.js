import MaskedInput from '../masked-input/masked-input';

const maskedContainer = document.querySelectorAll(
  '.js-form-check-in__input-container_with-masked-field',
);
maskedContainer.forEach(element => {
  new MaskedInput(element);
});
