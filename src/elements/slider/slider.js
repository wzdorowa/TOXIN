class Slider {
  constructor(element) {
    this.slider = element;

    this._initialSlider();
  }

  _initialSlider() {
    $('.js-slider__range').slider({
      range: true,
      min: 0,
      max: 14450,
      values: ['5000', '10000'],
      slide: this._setValues,
    });

    $('.js-slider__left-price').val('5 000');
    $('.js-slider__right-price').val('10 000');
  }

  _setValues(event, ui) {
    $('.js-slider__left-price').val(Number(ui.values[0]).toLocaleString('ru-RU'));
    $('.js-slider__right-price').val(Number(ui.values[1]).toLocaleString('ru-RU'));
  }
}

const elements = document.querySelectorAll('.js-slider__range');
elements.forEach(element => {
  new Slider(element);
});