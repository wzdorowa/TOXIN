class Input {
  constructor(element) {
    this.maskedContainer = element;

    this._setMaskedField();
  }

  _setMaskedField() {
    const maskedForDate = this.maskedContainer.querySelector('.input__content');
    $(maskedForDate).inputmask('99.99.9999', { placeholder: 'ДД/ММ/ГГГГ' });
  }
}

const elements = document.querySelectorAll(
  '.js-input_with-input-mask',
);
elements.forEach(element => {
  new Input(element);
});