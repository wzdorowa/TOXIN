import MaskedInput from '../../components/masked-input/masked-input';

const maskedContainer = document.querySelectorAll(
  '.js-components__inputs-item-masked-field',
);
maskedContainer.forEach(element => {
  new MaskedInput(element);
});
