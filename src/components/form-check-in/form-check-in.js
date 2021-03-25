import MaskedInput from '../../js/masked-input';

const maskedContainer = document.querySelectorAll(
  '.js-form-check-in__input-container_with-masked-field',
);
maskedContainer.forEach(element => {
  new MaskedInput(element);
});
