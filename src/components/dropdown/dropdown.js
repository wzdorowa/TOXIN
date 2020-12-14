const elements = document.querySelectorAll('.dropdown');

elements.forEach((element, index) => {
  const elementInput = element.querySelector('.input__content');
  const dropdownList = element.querySelector('.dropdown__content');
  const dropdownArrow = element.querySelector('.input__icon-arrow-down');
  const buttonApply = element.querySelector(
    '.dropdown__buttons-container_for-apply',
  );

  dropdownArrow.addEventListener('click', () => {
    if (
      dropdownList.classList.contains('dropdown__content_visible') === false
    ) {
      dropdownList.classList.add('dropdown__content_visible');
    } else if (dropdownList.classList.contains('dropdown__content_visible')) {
      dropdownList.classList.remove('dropdown__content_visible');
    }
  });
  elementInput.addEventListener('focus', () => {
    dropdownList.classList.add('dropdown__content_visible');
  });
  document.addEventListener('click', event => {
    if (event.target.closest('.dropdown') !== element) {
      dropdownList.classList.remove('dropdown__content_visible');
    }
  });
  const signsGroup = element.querySelectorAll('.dropdown-row__amount-counter');
  console.log('signsGroup[index]', signsGroup[index]);
  signsGroup[index].addEventListener('click', e => {
    e.preventDefault();

    const numbers = element.querySelectorAll(
      '.dropdown-row__amount_with-count',
    );

    const countValues = value => {
      if (value === 0) {
        elementInput.value += 'Сколько гостей';
      } else if (String(value).includes('1')) {
        elementInput.value += `${String(value)} гость`;
      } else if (
        String(value).includes('2') ||
        String(value).includes('3') ||
        String(value).includes('4')
      ) {
        elementInput.value += `${String(value)} гостя`;
      } else {
        elementInput.value += `${String(value)} гостей`;
      }
    };
    const countTheGuests = () => {
      let adults = 0;
      let babies = 0;
      numbers.forEach((number, index) => {
        if (index <= 1) {
          adults += Number(number.innerHTML);
        } else if (index === 2) {
          babies += Number(number.innerHTML);
        }
        countValues(adults);
        countValues(babies);
      });
    };
    const countAmenities = () => {
      let bedrooms = 0;
      let beds = 0;
      let bathrooms = 0;

      numbers.forEach((number, index) => {
        if (index <= 1) {
          bedrooms += Number(number.innerHTML);
        } else if (index === 2) {
          beds += Number(number.innerHTML);
        } else if (index === 2) {
          bathrooms += Number(number.innerHTML);
        }
        countValues(bedrooms);
        countValues(beds);
        countValues(bathrooms);
      });
    };
  });
  buttonApply.addEventListener('click', () => {
    dropdownList.classList.remove('dropdown__content_visible');
  });
});
