class Dropdown {
  constructor(element) {
    this.dropdown = element;
    this.elementInput = null;
    this.dropdownList = null;
    this.dropdownArrow = null;
    this.buttonApply = null;
    this.buttonClear = null;
    this.rowsGroupParent = null;
    this.rowsGroup = [];

    this.dropdownRow = element;
    this.signs = [];
    this.minusSign = [];
    this.plusSign = [];
    this.listItems = [];
    this.firstArg = [];
    this.numberContainer = [];

    this.findElement();
    this.bindEventListeners();
    this.calculateTheResult();
  }

  findElement() {
    this.elementInput = this.dropdown.querySelector(
      '.js-dropdown__input-content',
    );
    this.parentInput = this.dropdown.querySelector('.js-dropdown__input');
    this.dropdownList = this.dropdown.querySelector('.js-dropdown__content');
    this.dropdownArrow = this.dropdown.querySelector(
      '.js-dropdown__input-arrow-down',
    );
    this.buttonApply = this.dropdown.querySelector(
      '.js-dropdown__buttons-container_with-button-apply',
    );
    this.buttonClear = this.dropdown.querySelector(
      '.js-dropdown__buttons-container_with-button-clear',
    );
    this.rowsGroupParent = this.dropdown.querySelector('.js-dropdown__rows');
    this.rowsGroups = this.dropdown.querySelectorAll('.js-dropdown__row');

    this.rowsGroups.forEach(element => {
      const list = element.querySelectorAll('.js-dropdown__row-amount');
      this.listItems.push(list);
    });
    this.rowsGroups.forEach(element => {
      const list = element.querySelectorAll(
        '.js-dropdown__row-amount_with-sign',
      );
      this.signs.push(list);
    });

    this.listItems.forEach(element => {
      this.firstArg.push(element[0]);
      this.numberContainer.push(element[1]);
    });
    console.log('this.numberContainer', this.numberContainer);
    this.signs.forEach(element => {
      this.minusSign.push(element[0]);
      this.plusSign.push(element[1]);
    });
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

  addNumber(index) {
    const currentValue = this.numberContainer[index].innerHTML;
    let result = 0;
    result = Number(currentValue) + 1;

    this.numberContainer[index].innerHTML = String(result);
  }

  subtractNumber(index) {
    const currentValue = this.numberContainer[index].innerHTML;
    let result = 0;
    result = currentValue - 1;
    if (result < 0) {
      this.numberContainer[index].innerHTML = '0';
    } else {
      this.numberContainer[index].innerHTML = result;
    }
  }

  handlePlusSignClick(index) {
    this.addNumber(index);
  }

  handleMinusSignClick(index) {
    this.subtractNumber(index);
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
    this.numberContainer.forEach(number => {
      const element = number;
      element.innerHTML = '0';
    });
    if (
      !this.buttonClear.classList.contains(
        '.dropdown__buttons-container_hidden',
      )
    ) {
      this.buttonClear.classList.add('dropdown__buttons-container_hidden');
    }
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
          if (String(value).length === 1) {
            if (String(value).includes('1')) {
              newString.push(`${String(value)} ${declination[0]}`);
            } else if (isMatchingValue(value)) {
              newString.push(`${String(value)} ${declination[1]}`);
            } else {
              newString.push(`${String(value)} ${declination[2]}`);
            }
          }
          if (String(value).length === 2) {
            if (String(value)[1].includes('1')) {
              if (value === 11) {
                newString.push(`${String(value)} ${declination[2]}`);
              } else {
                newString.push(`${String(value)} ${declination[0]}`);
              }
            } else if (isMatchingValue(String(value)[1])) {
              if (value === 12 || value === 13 || value === 14) {
                newString.push(`${String(value)} ${declination[2]}`);
              } else {
                newString.push(`${String(value)} ${declination[1]}`);
              }
            } else {
              newString.push(`${String(value)} ${declination[2]}`);
            }
          }
        }
      });
      newString.forEach((string, index) => {
        const firstOrLastElementString =
          (index === 0 && newString.length === 1) ||
          index === newString.length - 1;
        const intermediateElementString =
          index < newString.length - 1 && newString.length > 1;
        if (firstOrLastElementString) {
          this.elementInput.value += `${newString[index]}`;
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
    this.numberContainer.forEach((number, index) => {
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

    this.numberContainer.forEach((number, index) => {
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
    this.rowsGroups.forEach(element => {
      element.addEventListener('click', this.calculateTheResult.bind(this));
    });
    this.plusSign.forEach((element, index) => {
      element.addEventListener(
        'click',
        this.handlePlusSignClick.bind(this, index),
      );
    });
    // this.plusSign.addEventListener(
    //   'click',
    //   this.handlePlusSignClick.bind(this),
    // );
    this.minusSign.forEach((element, index) => {
      element.addEventListener(
        'click',
        this.handleMinusSignClick.bind(this, index),
      );
    });
    // this.minusSign.addEventListener(
    //   'click',
    //   this.handleMinusSignClick.bind(this),
    // );
  }
}

const elements = document.querySelectorAll('.js-dropdown');
elements.forEach(element => {
  new Dropdown(element);
});
