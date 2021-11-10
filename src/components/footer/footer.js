import InputMask from '../../elements/InputMask/InputMask';

const elements = document.querySelectorAll('.js-footer__subscribe-input');
elements.forEach(element => {
  new InputMask(element);
});
