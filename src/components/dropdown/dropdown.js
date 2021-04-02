class Dropdown {
  constructor(element) {
    this._dropdown = element;
    this._elementInput = null;
    this._dropdownList = null;
    this._dropdownArrow = null;
    this._buttonApply = null;
    this._buttonClear = null;
    this._rowsGroupParent = null;
    this._rowsGroup = null;
    this.numbers = null;

    this._findElement();
    this._bindEventListeners();
  }

  _findElement() {
    this._elementInput = this._dropdown.querySelector('.js-input__content');
    this._dropdownList = this._dropdown.querySelector('.js-dropdown__content');
    this._dropdownArrow = this._dropdown.querySelector(
      '.js-input__icon-arrow-down',
    );
    this._buttonApply = this._dropdown.querySelector(
      '.js-dropdown__buttons-container_with-button-apply',
    );
    this._buttonClear = this._dropdown.querySelector(
      '.js-dropdown__buttons-container_with-button-clear',
    );
    this._rowsGroupParent = this._dropdown.querySelector('.dropdown__rows');
    this._rowsGroup = this._dropdown.querySelectorAll('.js-dropdown-row');
    this._numbers = this._dropdown.querySelectorAll(
      '.js-dropdown-row__amount_with-count',
    );
  }

  _addClass() {
    this._dropdownList.classList.add('dropdown__content_visible');
  }

  _removeClass() {
    this._dropdownList.classList.remove('dropdown__content_visible');
  }

  _toggleClass() {
    this._dropdownList.classList.toggle('dropdown__content_visible');
  }

  _handleIconArrowDownClick() {
    this._toggleClass();
  }

  _handleInputContentFocus() {
    this._addClass();
  }

  _handleButtonsContainerForApplyClick() {
    this._removeClass();
  }

  _handleButtonsContainerForClearClick() {
    this._elementInput.value = '';
    this._numbers.forEach(number => {
      const element = number;
      element.innerHTML = '0';
    });
  }

  _handleDocumentClick(event) {
    if (event.target.closest('.dropdown') !== this._dropdown) {
      this._removeClass();
    }
  }

  _countValues(result, values, declinations) {
    const isMatchingValue = value => {
      return (
        String(value).includes('2') ||
        String(value).includes('3') ||
        String(value).includes('4')
      );
    };
    if (result === 0) {
      this._elementInput.value = '';
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
          this._elementInput.value.length + newString[index].length;
        if (firstOrLastElementString) {
          if (futureStringLength >= 23) {
            const stringWithoutComma = this._elementInput.value.substring(0, 20);
            this._elementInput.value = `${stringWithoutComma}...`;
          } else {
            this._elementInput.value += `${newString[index]}`;
          }
        } else if (intermediateElementString) {
          this._elementInput.value += `${newString[index]}, `;
        }
      });
    }
  }

  _countTheGuests() {
    let adults = 0;
    let babies = 0;
    this._numbers.forEach((number, index) => {
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
    this._countValues(amountGuests, guests, declinations);
  }

  _countAmenities() {
    let bedrooms = 0;
    let beds = 0;
    let bathrooms = 0;

    this._numbers.forEach((number, index) => {
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
    this._countValues(amountAmenities, amenities, declinations);
  }

  _handleDropdownRowsClick(event) {
    event.preventDefault();

    this._elementInput.value = null;
    if (
      this._rowsGroupParent.classList.contains(
        'dropdown__rows_for-count-the-guests',
      )
    ) {
      this._countTheGuests();
    } else if (
      this._rowsGroupParent.classList.contains(
        'dropdown__rows_for-count-amenities',
      )
    ) {
      this._countAmenities();
    }
  }

  _bindEventListeners() {
    this._dropdownArrow.addEventListener(
      'click',
      this._handleIconArrowDownClick.bind(this),
    );
    this._elementInput.addEventListener(
      'focus',
      this._handleInputContentFocus.bind(this),
    );
    this._buttonApply.addEventListener(
      'click',
      this._handleButtonsContainerForApplyClick.bind(this),
    );
    this._buttonClear.addEventListener(
      'click',
      this._handleButtonsContainerForClearClick.bind(this),
    );
    document.addEventListener('click', this._handleDocumentClick.bind(this));
    this._rowsGroup.forEach(element => {
      element.addEventListener(
        'click',
        this._handleDropdownRowsClick.bind(this),
      );
    });
  }
}

const elements = document.querySelectorAll('.js-dropdown');
elements.forEach(element => {
  new Dropdown(element);
});
