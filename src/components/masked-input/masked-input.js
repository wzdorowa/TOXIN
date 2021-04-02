class MaskedInput {
  constructor(element) {
    this._maskedContainer = element;

    this._setMaskedField();
  }

  _setMaskedField() {
    const maskedForDate = this._maskedContainer.querySelector('.input__content');
    $(maskedForDate).inputmask('99.99.9999', { placeholder: 'ДД/ММ/ГГГГ' });
  }
}
export default MaskedInput;
