class Slider {
  constructor(element) {
    this.slider = element;
    this.priceMin = '.js-slider__left-price';
    this.priceMax = '.js-slider__right-price';

    this._initial();
    this._listenFocusout();
  }

  _initial() {
    $(this.slider).slider({
      min: 0,
      max: 15450,
      values: [5000, 10000],
      range: true,
      animate: 'fast',
      slide(event, ui) {
        $(this.priceMin).val(ui.values[0].toLocaleString('ru-RU'));
        $(this.priceMax).val(ui.values[1].toLocaleString('ru-RU'));
      },
    });

    $(this.priceMin).val('5 000');
    $(this.priceMax).val('10 000');
  }

  _listenFocusout() {
    $(this.slider).focusout(() => {
      this.priceMin.val().replace(/[^0-9]/g, '');
      const optLeft = $(this.slider).slider('option', 'min');
      const whereRight = $(this.slider).slider('values', 1);

      this.priceMax.val().replace(/[^0-9]/g, '');
      const optRight = $(this.slider).slider('option', 'max');
      const whereLeft = $(this.slider).slider('values', 0);

      if (this.priceMin > whereRight) {
        this.priceMin = whereRight;
      }
      if (this.priceMin < optLeft) {
        this.priceMin = optLeft;
      }
      if (this.priceMin === '') {
        this.priceMin = 0;
      }
      if (this.priceMax < whereLeft) {
        this.priceMax = whereLeft;
      }
      if (this.priceMax > optRight) {
        this.priceMax = optRight;
      }
      if (this.priceMax === '') {
        this.priceMax = 0;
      }

      $('.js-slider__left-price').val(
        Number(this.priceMin).toLocaleString('ru-RU'),
      );
      $('.js-slider__right-price').val(
        Number(this.priceMax).toLocaleString('ru-RU'),
      );
      $(this.slider).slider('values', [this.priceMin, this.priceMax]);
    });
  }
}

const elements = document.querySelectorAll('.js-slider__range');
elements.forEach(element => {
  new Slider(element);
});
