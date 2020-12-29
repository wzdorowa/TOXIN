const checkboxLists = document.querySelectorAll('.checkbox-list');

checkboxLists.forEach(element => {
  const checkboxListTitle = element.querySelector('.checkbox-list__title');
  const checkboxListToggle = element.querySelector(
    '.checkbox-list__container_hidden',
  );

  checkboxListTitle.onclick = () => {
    checkboxListToggle.classList.toggle('checkbox-list__container_hidden');
  };

  document.addEventListener('click', event => {
    if (event.target.closest('.checkbox-list') !== element) {
      checkboxListToggle.classList.add('checkbox-list__container_hidden');
    }
  });
});
