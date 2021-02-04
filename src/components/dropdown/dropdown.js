class Dropdown {
  constructor(element) {
    this.dropdown = element;
    this.elementInput = null;
    this.dropdownList = null;
    this.dropdownArrow = null;
    this.buttonApply = null;
    this.buttonClear = null;
    this.rowsGroupParent = null;
    this.rowsGroup = null;
    this.numbers = null;

    this.findElement();
    this.listenClickDropdownArrow();
    this.listenFocusInput();
    this.listenButtonApply();
    this.listenButtonClear();
    this.listenClickDocument();
    this.listenRowsGroup();
  }

  findElement() {
    this.elementInput = this.dropdown.querySelector('.input__content');
    this.dropdownList = this.dropdown.querySelector('.dropdown__content');
    this.dropdownArrow = this.dropdown.querySelector('.input__icon-arrow-down');
    this.buttonApply = this.dropdown.querySelector(
      '.dropdown__buttons-container_for-apply',
    );
    this.buttonClear = this.dropdown.querySelector(
      '.dropdown__buttons-container_for-clear',
    );
    this.rowsGroupParent = this.dropdown.querySelector('.dropdown__rows');
    this.rowsGroup = this.dropdown.querySelectorAll('.dropdown-row');
    this.numbers = this.dropdown.querySelectorAll(
      '.dropdown-row__amount_with-count',
    );
  }

  addClass() {
    this.dropdownList.classList.add('dropdown__content_visible');
  }

  removeClass() {
    this.dropdownList.classList.remove('dropdown__content_visible');
  }

  toggleClass() {
    if (
      this.dropdownList.classList.contains('dropdown__content_visible') ===
      false
    ) {
      this.addClass();
    } else if (
      this.dropdownList.classList.contains('dropdown__content_visible')
    ) {
      this.removeClass();
    }
  }

  listenClickDropdownArrow() {
    const toggleClass = () => {
      this.toggleClass();
    };
    this.dropdownArrow.addEventListener('click', toggleClass);
  }

  listenFocusInput() {
    const addClass = () => {
      this.addClass();
    };
    this.elementInput.addEventListener('focus', addClass);
  }

  listenButtonApply() {
    const removeClass = () => {
      this.removeClass();
    };
    this.buttonApply.addEventListener('click', removeClass);
  }

  listenButtonClear() {
    const clearInput = () => {
      this.elementInput.value = '';
      this.numbers.forEach(number => {
        const element = number;
        element.innerHTML = '0';
      });
    };
    this.buttonClear.addEventListener('click', clearInput);
  }

  listenClickDocument() {
    const removeClass = event => {
      if (event.target.closest('.dropdown') !== this.dropdown) {
        this.removeClass();
      }
    };
    document.addEventListener('click', removeClass);
  }

  countValues(result, values, declinations) {
    if (result === 0) {
      this.elementInput.value = '';
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
          this.elementInput.value += `${newString[index]}`;
        } else if (index < newString.length - 1 && newString.length > 1) {
          this.elementInput.value += `${newString[index]}, `;
        }
      });
    }
  }

  countTheGuests() {
    let adults = 0;
    let babies = 0;
    this.numbers.forEach((number, index) => {
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
    this.countValues(amountGuests, guests, declinations);
  }

  countAmenities() {
    let bedrooms = 0;
    let beds = 0;
    let bathrooms = 0;

    this.numbers.forEach((number, index) => {
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
    this.countValues(amountAmenities, amenities, declinations);
  }

  listenRowsGroup() {
    const defineCategory = event => {
      event.preventDefault();

      this.elementInput.value = null;
      if (
        this.rowsGroupParent.classList.contains(
          'dropdown__rows_for-count-the-guests',
        ) === true
      ) {
        this.countTheGuests();
      } else if (
        this.rowsGroupParent.classList.contains(
          'dropdown__rows_for-count-amenities',
        ) === true
      ) {
        this.countAmenities();
      }
    };
    this.rowsGroup.forEach(element => {
      element.addEventListener('click', defineCategory);
    });
  }
}

const elements = document.querySelectorAll('.dropdown');
elements.forEach(element => {
  new Dropdown(element);
});
