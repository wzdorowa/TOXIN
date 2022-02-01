const elements = document.querySelectorAll('.js-datepicker-here');

elements.forEach(element => {
  $(element).datepicker({
    navTitles: {
      days: 'MM <i>yyyy</i>',
    }
  });
});