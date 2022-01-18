import convertNumToWordform from './helpers';
import { guests, amenities } from './variables';

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

    this._findElement();
    this._bindEventListeners();
    this._calculateTheResult();
  }

  _findElement() {
    this.elementInput = this.dropdown.querySelector(
      '.js-dropdown__input-content',
    );
    this.parentInput = this.dropdown.querySelector('.js-dropdown__input');
    this.dropdownList = this.dropdown.querySelector('.js-dropdown__content');
    this.dropdownArrow = this.dropdown.querySelector(
      '.js-dropdown__input-arrow-down',
    );
    this.buttonApply = this.dropdown.querySelector(
      '.js-dropdown__button-apply',
    );
    this.buttonClear = this.dropdown.querySelector(
      '.js-dropdown__button-clear',
    );
    this.rowsGroupParent = this.dropdown.querySelector('.js-dropdown__rows');
    this.rowsGroups = this.dropdown.querySelectorAll('.js-dropdown__row');

    this.rowsGroups.forEach(element => {
      const amountElement = element.querySelector('.js-dropdown__amount');
      this.numberContainer.push(amountElement);
    });
    this.rowsGroups.forEach(element => {
      const minusSign = element.querySelector('.js-dropdown__minus');
      const plusSign = element.querySelector('.js-dropdown__plus');
      this.minusSign.push(minusSign);
      this.plusSign.push(plusSign);
    });
  }

  _addClass() {
    this.dropdownList.classList.add('dropdown__content_visible');
    if (this.parentInput.contains(this.elementInput)) {
      this.elementInput.classList.add('dropdown__input-content_opened');
    }
  }

  _removeClass() {
    this.dropdownList.classList.remove('dropdown__content_visible');
    if (this.parentInput.contains(this.elementInput)) {
      this.elementInput.classList.remove('dropdown__input-content_opened');
    }
  }

  _toggleClass() {
    this.dropdownList.classList.toggle('dropdown__content_visible');
    if (this.parentInput.contains(this.elementInput)) {
      this.elementInput.classList.toggle('dropdown__input-content_opened');
    }
  }

  _addNumber(index) {
    const currentValue = this.numberContainer[index].innerHTML;
    let result = 0;
    result = Number(currentValue) + 1;

    this.numberContainer[index].innerHTML = String(result);
    this.minusSign[index].classList.remove('dropdown__minus_disabled');
  }

  _subtractNumber(index) {
    const currentValue = this.numberContainer[index].innerHTML;
    let result = 0;
    result = currentValue - 1;
    if (result < 0) {
      this.numberContainer[index].innerHTML = '0';
      this.minusSign[index].classList.add('dropdown__minus_disabled');
    } else {
      this.numberContainer[index].innerHTML = result;
    }
  }

  _handlePlusSignClick(index) {
    this._addNumber(index);
  }

  _handleMinusSignClick(index) {
    this._subtractNumber(index);
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

  _hideButtonClear() {
    if (
      this.buttonClear && !this.buttonClear.classList.contains('.dropdown__button-clear_hidden')
    ) {
      this.buttonClear.classList.add('dropdown__button-clear_hidden');
    }
  }

  _showButtonClear() {
    if (this.buttonClear && this.buttonClear.classList.contains('dropdown__button-clear_hidden')) {
      this.buttonClear.classList.remove('dropdown__button-clear_hidden');
    }
  }

  _handleButtonsContainerForClearClick() {
    this.elementInput.value = '';
    this.numberContainer.forEach(number => {
      const element = number;
      element.innerHTML = '0';
    });
    this._hideButtonClear();
  }

  _handleDocumentClick(event) {
    if (event.target.closest('.dropdown') !== this.dropdown) {
      this._removeClass();
    }
  }

  _setValues(sum, values, declinations) {
    if (sum === 0) {
      this.elementInput.value = '';
      this._hideButtonClear();
    } else {
      const newString = [];
      values.forEach((value, i) => {
        if (value !== 0) {
          const declination = declinations[i];
          newString.push(
            `${String(value)} ${convertNumToWordform(value, declination)}`,
          );
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
      this._showButtonClear();
    }
  }

  _calculateTheResult() {
    const typeWordsForm = this.dropdown.getAttribute('data-words-form');
    const wordsForm = [];
  
    if (typeWordsForm === 'guests') {
      guests.forEach(element => {
        wordsForm.push(element);
      });
    }

    if (typeWordsForm === 'amenities') {
      amenities.forEach(element => {
        wordsForm.push(element);
      });
    }

    this.elementInput.value = null;

    let firstValue = 0;
    let secondValue = 0;
    let thirstValue = 0;

    if (Object.values(wordsForm).length < 3) {
      this.numberContainer.forEach((number, index) => {
        if (Number(number.innerHTML) === 0) {
          this.minusSign[index].classList.add('dropdown__minus_disabled');
        }
        if (index <= 1) {
          firstValue += Number(number.innerHTML);
        } else if (index === 2) {
          secondValue += Number(number.innerHTML);
        }
      });
    } else {
      this.numberContainer.forEach((number, index) => {
        if (Number(number.innerHTML) === 0) {
          this.minusSign[index].classList.add('dropdown__minus_disabled');
        }
        if (index === 0) {
          firstValue += Number(number.innerHTML);
        } else if (index === 1) {
          secondValue += Number(number.innerHTML);
        } else if (index === 2) {
          thirstValue += Number(number.innerHTML);
        }
      });
    }
    const sum = firstValue + secondValue + thirstValue;
    const values = [firstValue, secondValue, thirstValue];
    this._setValues(sum, values, wordsForm);
  }

  _bindEventListeners() {
    this.dropdownArrow.addEventListener('click', () => {
      this._handleIconArrowDownClick();
    });
    this.elementInput.addEventListener('focus', () => {
      this._handleInputContentFocus();
    });
    if (this.buttonApply) {
      this.buttonApply.addEventListener('click', () => {
        this._handleButtonsContainerForApplyClick();
      });
    }
    if (this.buttonClear) {
      this.buttonClear.addEventListener('click', () => {
        this._handleButtonsContainerForClearClick();
      });
    }
    document.addEventListener('click', (event) => {
      this._handleDocumentClick(event);
    });
    this.rowsGroups.forEach(element => {
      element.addEventListener('click', () => {
        this._calculateTheResult();
      });
    });
    this.plusSign.forEach((element, index) => {
      element.addEventListener('click', () => {
        this._handlePlusSignClick(index);
      });
    });
    this.minusSign.forEach((element, index) => {
      element.addEventListener('click', () => {
        this._handleMinusSignClick(index);
      });
    });
  }
}

const elements = document.querySelectorAll('.js-dropdown');
elements.forEach(element => {
  new Dropdown(element);
});
