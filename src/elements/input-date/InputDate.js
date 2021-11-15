class InputDate {
  constructor(element) {
    this.maskedContainer = element;

    this.setMaskedField();
  }

  setMaskedField() {
    $(this.maskedContainer).inputmask('99.99.9999', {
      placeholder: 'ДД/ММ/ГГГГ',
    });
  }
}

const inputs = document.querySelectorAll('.js-input-date');
inputs.forEach(input => {
  new InputDate(input);
});
