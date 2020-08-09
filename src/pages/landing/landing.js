$(document).ready(() => {
  const dateInputs = $(document).find('.search-room__input-container');
  console.log('dateInputs', dateInputs.length);
  const items = new Array(2);
  items.forEach(element => {
    element.click(() => {
      $('.landing__datepicker').slideToggle();
    });
  });
  // $('.search-room__input-container').click(() => {
  //   $('.landing__datepicker').slideToggle();
  // });
});
