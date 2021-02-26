$('.js-slider__range').slider({
  min: 0,
  max: 15450,
  values: [5000, 10000],
  range: true,
  animate: 'fast',
  slide(event, ui) {
    $('.js-slider__left-price').val(ui.values[0]);
    $('.js-slider__right-price').val(ui.values[1]);
  },
});
$('.js-slider__left-price').val($('.js-slider__range').slider('values', 0));
$('.js-slider__right-price').val($('.js-slider__range').slider('values', 1));
$('.js-slider__range').focusout(() => {
  let inputLeft = $('.js-slider__left-price')
    .val()
    .replace(/[^0-9]/g, '');
  const optLeft = $('.js-slider__range').slider('option', 'min');
  const whereRight = $('.js-slider__range').slider('values', 1);
  let inputRight = $('.js-slider__right-price')
    .val()
    .replace(/[^0-9]/g, '');
  const optRight = $('.js-slider__range').slider('option', 'max');
  const whereLeft = $('.js-slider__range').slider('values', 0);
  if (inputLeft > whereRight) {
    inputLeft = whereRight;
  }
  if (inputLeft < optLeft) {
    inputLeft = optLeft;
  }
  if (inputLeft === '') {
    inputLeft = 0;
  }
  if (inputRight < whereLeft) {
    inputRight = whereLeft;
  }
  if (inputRight > optRight) {
    inputRight = optRight;
  }
  if (inputRight === '') {
    inputRight = 0;
  }
  $('.js-slider__left-price').val(inputLeft);
  $('.js-slider__right-price').val(inputRight);
  $('.js-slider__range').slider('values', [inputLeft, inputRight]);
});
