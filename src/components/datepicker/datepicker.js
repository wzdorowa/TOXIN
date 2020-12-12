const calendar = document.querySelectorAll('.datepicker-here');
calendar.forEach(element => {
  $(element).datepicker({
    navTitles: {
      days: 'MM <i>yyyy</i>',
    },
    dateFormat: 'dd.mm.yyyy',
  });
});
