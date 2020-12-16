const elements = document.querySelectorAll('.dropdown');

elements.forEach(element => {
  const elementInput = element.querySelector('.input__content');
  const dropdownList = element.querySelector('.dropdown__content');
  const dropdownArrow = element.querySelector('.input__icon-arrow-down');
  const buttonApply = element.querySelector(
    '.dropdown__buttons-container_for-apply',
  );
  const buttonClear = element.querySelector(
    '.dropdown__buttons-container_for-clear',
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
  const rowsGroupParent = element.querySelector('.dropdown__rows');
  const rowsGroup = element.querySelectorAll('.dropdown-row');
  const numbers = element.querySelectorAll('.dropdown-row__amount_with-count');

  const countValues = (result, values, declinations) => {
    if (result === 0) {
      elementInput.value = '';
    } else {
      const newString = [];
      values.forEach((value, i) => {
        if (value !== 0) {
          const declination = declinations[i];
          if (String(value).includes('1')) {
            newString.push(`${String(value)} ${declination[0]}`);
          } else if (
            String(value).includes('2') ||
            String(value).includes('3') ||
            String(value).includes('4')
          ) {
            newString.push(`${String(value)} ${declination[1]}`);
          } else {
            newString.push(`${String(value)} ${declination[2]}`);
          }
        }
      });
      newString.forEach((string, index) => {
        if (
          (index === 0 && newString.length === 1) ||
          index === newString.length - 1
        ) {
          elementInput.value += `${newString[index]}`;
        } else if (index < newString.length - 1 && newString.length > 1) {
          elementInput.value += `${newString[index]}, `;
        }
      });
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
    });
    const amountGuests = adults + babies;
    const guests = [adults, babies];
    const declinationGuests = ['гость', 'гостя', 'гостей'];
    const declinationBabies = ['младенец', 'младенца', 'младенцев'];
    const declinations = [declinationGuests, declinationBabies];
    countValues(amountGuests, guests, declinations);
  };
  const countAmenities = () => {
    let bedrooms = 0;
    let beds = 0;
    let bathrooms = 0;

    numbers.forEach((number, index) => {
      if (index === 0) {
        bedrooms += Number(number.innerHTML);
      } else if (index === 1) {
        beds += Number(number.innerHTML);
      } else if (index === 2) {
        bathrooms += Number(number.innerHTML);
      }
    });
    const amountAmenities = bedrooms + beds + bathrooms;
    const amenities = [bedrooms, beds, bathrooms];
    const declinationBedrooms = ['спальня', 'спальни', 'спален'];
    const declinationBeds = ['кровать', 'кровати', 'кроватей'];
    const declinationBathrooms = [
      'ванная комната',
      'ванные комнаты',
      'ванных комнат',
    ];
    const declinations = [
      declinationBedrooms,
      declinationBeds,
      declinationBathrooms,
    ];
    countValues(amountAmenities, amenities, declinations);
  };
  rowsGroup.forEach(element => {
    element.addEventListener('click', e => {
      e.preventDefault();

      elementInput.value = null;
      if (
        rowsGroupParent.classList.contains(
          'dropdown__rows_for-count-the-guests',
        ) === true
      ) {
        countTheGuests();
      } else if (
        rowsGroupParent.classList.contains(
          'dropdown__rows_for-count-amenities',
        ) === true
      ) {
        countAmenities();
      }
    });
  });
  buttonApply.addEventListener('click', () => {
    dropdownList.classList.remove('dropdown__content_visible');
  });
  buttonClear.addEventListener('click', () => {
    elementInput.value = '';
    numbers.forEach(number => {
      const element = number;
      element.innerHTML = '0';
    });
  });
});
