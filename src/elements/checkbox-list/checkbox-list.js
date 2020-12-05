// $(document).ready(() => {
//   $('.checkbox-list__title').click(() => {
//     $('.checkbox-list__slide-toggle').slideToggle();
//   });
// });
const checkboxLists = document.querySelectorAll('.checkbox-list');

checkboxLists.forEach(element => {
  const checkboxListTitle = element.querySelector('.checkbox-list__title');
  const checkboxListToggle = element.querySelector('.checkbox-list__toggle');

  checkboxListTitle.onclick = () => {
    checkboxListToggle.classList.toggle('checkbox-list__toggle');
  };
});
