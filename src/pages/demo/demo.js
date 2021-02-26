import MaskedInput from '../../js/masked-input';

const maskedContainer = document.querySelectorAll(
  '.js-components__inputs-item-masked-field',
);
maskedContainer.forEach(element => {
  new MaskedInput(element);
});
