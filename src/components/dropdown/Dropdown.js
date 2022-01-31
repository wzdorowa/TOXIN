import convertNumToWordform from './helpers';
import { guests, amenities } from './variables';

class Dropdown {
  constructor(element) {
    this.dropdown = element;
    this.dropdownInput = null;
    this.dropdownList = null;
    this.dropdownArrow = null;
    this.buttonApply = null;
    this.buttonClear = null;
    this.dropdownRows = [];
    this.dropdownItems = [];

    this._findElement();
    this._bindEventListeners();
    this._calculateTheResult();
  }

  _findElement() {
    this.dropdownInput = this.dropdown.querySelector(
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
    this.dropdownRows = this.dropdown.querySelectorAll('.js-dropdown__row');

    this.dropdownRows.forEach(element => {
      const dropdownRowData = {};
      dropdownRowData.minus = element.querySelector('.js-dropdown__minus');
      dropdownRowData.plus = element.querySelector('.js-dropdown__plus');
      dropdownRowData.value = element.querySelector('.js-dropdown__amount');
      this.dropdownItems.push(dropdownRowData);
    });
  }

  _addClass() {
    this.dropdownList.classList.add('dropdown__content_visible');
    if (this.parentInput.contains(this.dropdownInput)) {
      this.dropdownInput.classList.add('dropdown__input-content_opened');
    }
  }

  _removeClass() {
    this.dropdownList.classList.remove('dropdown__content_visible');
    if (this.parentInput.contains(this.dropdownInput)) {
      this.dropdownInput.classList.remove('dropdown__input-content_opened');
    }
  }

  _toggleClass() {
    this.dropdownList.classList.toggle('dropdown__content_visible');
    if (this.parentInput.contains(this.dropdownInput)) {
      this.dropdownInput.classList.toggle('dropdown__input-content_opened');
    }
  }

  _addNumber(index) {
    const currentValue = this.dropdownItems[index].value.innerHTML;
    let result = 0;
    result = Number(currentValue) + 1;

    this.dropdownItems[index].value.innerHTML = String(result);
    this.dropdownItems[index].minus.classList.remove('dropdown__minus_disabled');
  }

  _subtractNumber(index) {
    const currentValue = this.dropdownItems[index].value.innerHTML;
    let result = 0;
    result = currentValue - 1;
    if (result <= 0) {
      this.dropdownItems[index].value.innerHTML = '0';
      this.dropdownItems[index].minus.classList.add('dropdown__minus_disabled');
    } else {
      this.dropdownItems[index].value.innerHTML = result;
    }
  }

  _handlePlusSignClick = (index) => {
    this._addNumber(index);
  }

  _handleMinusSignClick = (index) => {
    this._subtractNumber(index);
  }

  _handleIconArrowDownClick = () => {
    this._toggleClass();
  }

  _handleInputContentFocus = () => {
    this._addClass();
  }

  _handleButtonsContainerForApplyClick = () => {
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

  _handleButtonsContainerForClearClick = () => {
    this.dropdownInput.value = '';
    this.dropdownItems.forEach(item => {
      const amount = item.value;
      const minus = item.minus;

      amount.innerHTML = '0';
      minus.classList.add('dropdown__minus_disabled');
    });
    this._hideButtonClear();
  }

  _handleDocumentClick = (event) => {
    if (event.target.closest('.dropdown') !== this.dropdown) {
      this._removeClass();
    }
  }

  _setValues(sum, values, declinations) {
    if (sum === 0) {
      this.dropdownInput.value = '';
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
          this.dropdownInput.value += `${newString[index]}`;
        } else if (intermediateElementString) {
          this.dropdownInput.value += `${newString[index]}, `;
        }
      });
      this._showButtonClear();
    }
  }

  _calculateTheResult = () => {
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

    this.dropdownInput.value = null;

    let firstValue = 0;
    let secondValue = 0;
    let thirstValue = 0;

    if (Object.values(wordsForm).length < 3) {
      this.dropdownItems.forEach((item, index) => {
        if (Number(item.value.innerHTML) === 0) {
          this.dropdownItems[index].minus.classList.add('dropdown__minus_disabled');
        }
        if (index <= 1) {
          firstValue += Number(item.value.innerHTML);
        } else if (index === 2) {
          secondValue += Number(item.value.innerHTML);
        }
      });
    } else {
      this.dropdownItems.forEach((item, index) => {
        if (Number(item.value.innerHTML) === 0) {
          this.dropdownItems[index].minus.classList.add('dropdown__minus_disabled');
        }
        if (index === 0) {
          firstValue += Number(item.value.innerHTML);
        } else if (index === 1) {
          secondValue += Number(item.value.innerHTML);
        } else if (index === 2) {
          thirstValue += Number(item.value.innerHTML);
        }
      });
    }
    const sum = firstValue + secondValue + thirstValue;
    const values = [firstValue, secondValue, thirstValue];
    this._setValues(sum, values, wordsForm);
  }

  _bindEventListeners() {
    this.dropdownArrow.addEventListener('click', this._handleIconArrowDownClick);
    this.dropdownInput.addEventListener('focus', this._handleInputContentFocus);
    if (this.buttonApply) {
      this.buttonApply.addEventListener('click', this._handleButtonsContainerForApplyClick);
    }
    if (this.buttonClear) {
      this.buttonClear.addEventListener('click', this._handleButtonsContainerForClearClick);
    }
    document.addEventListener('click', this._handleDocumentClick);
    this.dropdownRows.forEach(element => {
      element.addEventListener('click', this._calculateTheResult);
    });
    this.dropdownItems.forEach((item, index) => {
      item.plus.addEventListener('click', this._handlePlusSignClick.bind(this, index));
    });
    this.dropdownItems.forEach((item, index) => {
      item.minus.addEventListener('click', this._handleMinusSignClick.bind(this, index));
    });
  }
}

const elements = document.querySelectorAll('.js-dropdown');
elements.forEach(element => {
  new Dropdown(element);
});
