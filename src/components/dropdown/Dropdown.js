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
    this.bindEventListeners();
    this.calculateTheResult();
  }

  findElement() {
    this.elementInput = this.dropdown.querySelector('.js-input__content');
    this.parentInput = this.dropdown.querySelector('.js-dropdown__list');
    this.dropdownList = this.dropdown.querySelector('.js-dropdown__content');
    this.dropdownArrow = this.dropdown.querySelector(
      '.js-input__icon-arrow-down',
    );
    this.buttonApply = this.dropdown.querySelector(
      '.js-dropdown__buttons-container_with-button-apply',
    );
    this.buttonClear = this.dropdown.querySelector(
      '.js-dropdown__buttons-container_with-button-clear',
    );
    this.rowsGroupParent = this.dropdown.querySelector('.dropdown__rows');
    this.rowsGroup = this.dropdown.querySelectorAll('.js-dropdown-row');
    this.numbers = this.dropdown.querySelectorAll(
      '.js-dropdown-row__amount_with-count',
    );
  }

  addClass() {
    this.dropdownList.classList.add('dropdown__content_visible');
    if (this.parentInput.contains(this.elementInput)) {
      this.elementInput.classList.add('input__content_opened');
    }
  }

  removeClass() {
    this.dropdownList.classList.remove('dropdown__content_visible');
    if (this.parentInput.contains(this.elementInput)) {
      this.elementInput.classList.remove('input__content_opened');
    }
  }

  toggleClass() {
    this.dropdownList.classList.toggle('dropdown__content_visible');
    if (this.parentInput.contains(this.elementInput)) {
      this.elementInput.classList.toggle('input__content_opened');
    }
  }

  handleIconArrowDownClick() {
    this.toggleClass();
  }

  handleInputContentFocus() {
    this.addClass();
  }

  handleButtonsContainerForApplyClick() {
    this.removeClass();
  }

  handleButtonsContainerForClearClick() {
    this.elementInput.value = '';
    this.numbers.forEach(number => {
      const element = number;
      element.innerHTML = '0';
    });
  }

  handleDocumentClick(event) {
    if (event.target.closest('.dropdown') !== this.dropdown) {
      this.removeClass();
    }
  }

  countValues(result, values, declinations) {
    const isMatchingValue = value => {
      return (
        String(value).includes('2') ||
        String(value).includes('3') ||
        String(value).includes('4')
      );
    };
    if (result === 0) {
      this.elementInput.value = '';
      if (
        !this.buttonClear.classList.contains(
          '.dropdown__buttons-container_hidden',
        )
      ) {
        this.buttonClear.classList.add('dropdown__buttons-container_hidden');
      }
    } else {
      const newString = [];
      values.forEach((value, i) => {
        if (value !== 0) {
          const declination = declinations[i];
          if (String(value).includes('1')) {
            newString.push(`${String(value)} ${declination[0]}`);
          } else if (isMatchingValue(value)) {
            newString.push(`${String(value)} ${declination[1]}`);
          } else {
            newString.push(`${String(value)} ${declination[2]}`);
          }
        }
      });
      newString.forEach((string, index) => {
        const firstOrLastElementString =
          (index === 0 && newString.length === 1) ||
          index === newString.length - 1;
        const intermediateElementString =
          index < newString.length - 1 && newString.length > 1;
        const futureStringLength =
          this.elementInput.value.length + newString[index].length;
        if (firstOrLastElementString) {
          if (futureStringLength >= 23) {
            const stringWithoutComma = this.elementInput.value.substring(0, 20);
            this.elementInput.value = `${stringWithoutComma}...`;
          } else {
            this.elementInput.value += `${newString[index]}`;
          }
        } else if (intermediateElementString) {
          this.elementInput.value += `${newString[index]}, `;
        }
      });
      if (
        this.buttonClear.classList.contains(
          'dropdown__buttons-container_hidden',
        )
      ) {
        this.buttonClear.classList.remove('dropdown__buttons-container_hidden');
      }
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

  calculateTheResult() {
    this.elementInput.value = null;
    if (
      this.rowsGroupParent.classList.contains(
        'dropdown__rows_for-count-the-guests',
      )
    ) {
      this.countTheGuests();
    } else if (
      this.rowsGroupParent.classList.contains(
        'dropdown__rows_for-count-amenities',
      )
    ) {
      this.countAmenities();
    }
  }

  bindEventListeners() {
    this.dropdownArrow.addEventListener(
      'click',
      this.handleIconArrowDownClick.bind(this),
    );
    this.elementInput.addEventListener(
      'focus',
      this.handleInputContentFocus.bind(this),
    );
    this.buttonApply.addEventListener(
      'click',
      this.handleButtonsContainerForApplyClick.bind(this),
    );
    this.buttonClear.addEventListener(
      'click',
      this.handleButtonsContainerForClearClick.bind(this),
    );
    document.addEventListener('click', this.handleDocumentClick.bind(this));
    this.rowsGroup.forEach(element => {
      element.addEventListener('click', this.calculateTheResult.bind(this));
    });
  }
}

const elements = document.querySelectorAll('.js-dropdown');
elements.forEach(element => {
  new Dropdown(element);
});
