$('.slider__range').slider({
  min: 0,
  max: 15450,
  values: [5000, 10000],
  range: true,
  animate: 'fast',
  slide(event, ui) {
    $('.slider__left-price').val(ui.values[0]);
    $('.slider__right-price').val(ui.values[1]);
  },
});
$('.slider__left-price').val($('.slider__range').slider('values', 0));
$('.slider__right-price').val($('.slider__range').slider('values', 1));
$(document).focusout(() => {
  let inputLeft = $('.slider__left-price')
    .val()
    .replace(/[^0-9]/g, '');
  const optLeft = $('.slider__range').slider('option', 'min');
  const whereRight = $('.slider__range').slider('values', 1);
  let inputRight = $('.slider__right-price')
    .val()
    .replace(/[^0-9]/g, '');
  const optRight = $('.slider__range').slider('option', 'max');
  const whereLeft = $('.slider__range').slider('values', 0);
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
  $('.slider__left-price').val(inputLeft);
  $('.slider__right-price').val(inputRight);
  $('.slider__range').slider('values', [inputLeft, inputRight]);
});
