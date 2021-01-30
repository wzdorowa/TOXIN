class MaskedInput {
  constructor(element) {
    this.maskedContainer = element;

    this.setMaskedField();
  }

  setMaskedField() {
    const maskedForDate = this.maskedContainer.querySelector('.input__content');
    $(maskedForDate).inputmask('99.99.9999', { placeholder: 'ДД/ММ/ГГГГ' });
  }
}
export default MaskedInput;
