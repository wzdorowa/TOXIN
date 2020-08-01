$('.range-slider-container__polzunok').slider({
  min: 0,
  max: 15450,
  values: [5000, 10000],
  range: true,
  animate: 'fast',
  slide(event, ui) {
    $('.range-slider-container__left-price').val(ui.values[0]);
    $('.range-slider-container__right-price').val(ui.values[1]);
  },
});
$('.range-slider-container__left-price').val(
  $('.range-slider-container__polzunok').slider('values', 0),
);
$('.range-slider-container__right-price').val(
  $('.range-slider-container__polzunok').slider('values', 1),
);
$(document).focusout(() => {
  let inputLeft = $('.range-slider-container__left-price')
    .val()
    .replace(/[^0-9]/g, '');
  const optLeft = $('.range-slider-container__polzunok').slider(
    'option',
    'min',
  );
  const whereRight = $('.range-slider-container__polzunok').slider('values', 1);
  let inputRight = $('.range-slider-container__right-price')
    .val()
    .replace(/[^0-9]/g, '');
  const optRight = $('.range-slider-container__polzunok').slider(
    'option',
    'max',
  );
  const whereLeft = $('.range-slider-container__polzunok').slider('values', 0);
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
  $('.range-slider-container__left-price').val(inputLeft);
  $('.range-slider-container__right-price').val(inputRight);
  $('.range-slider-container__polzunok').slider('values', [
    inputLeft,
    inputRight,
  ]);
});
