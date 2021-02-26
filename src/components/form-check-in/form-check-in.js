import MaskedInput from '../../js/masked-input';

const maskedContainer = document.querySelectorAll(
  '.js-check-in__input-container_for-masked-field',
);
maskedContainer.forEach(element => {
  new MaskedInput(element);
});
