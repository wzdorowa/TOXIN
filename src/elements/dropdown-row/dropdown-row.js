const dropdownRows = document.querySelectorAll('.dropdown-row');

dropdownRows.forEach(element => {
  const signs = element.querySelectorAll('.dropdown-row__amount_with-sign');
  const minusSign = signs[0];
  const plusSign = signs[1];
  const listItems = element.querySelectorAll('.dropdown-row__amount');
  const numberContainer = listItems[1];

  const add = () => {
    const currentValue = numberContainer.innerHTML;
    let result = 0;
    result = Number(currentValue) + 1;
    numberContainer.innerHTML = String(result);
  };
  const subtract = () => {
    const currentValue = numberContainer.innerHTML;
    let result = 0;
    result = currentValue - 1;
    if (result < 0) {
      numberContainer.innerHTML = '0';
    } else {
      numberContainer.innerHTML = result;
    }
  };
  plusSign.addEventListener('click', add);
  minusSign.addEventListener('click', subtract);
});
