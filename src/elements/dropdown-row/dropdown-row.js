class DropdownRow {
  constructor(element) {
    this._dropdownRow = element;
    this._signs = [];
    this._minusSign = null;
    this._plusSign = null;
    this._listItems = [];
    this._numberContainer = null;

    this._findElements();
    this._bindEventListeners();
  }

  _findElements() {
    this._listItems = this._dropdownRow.querySelectorAll(
      '.js-dropdown-row__amount',
    );
    this._signs = this._dropdownRow.querySelectorAll(
      '.js-dropdown-row__amount_with-sign',
    );
    [this.firstArg, this._numberContainer] = this._listItems;
    [this._minusSign, this._plusSign] = this._signs;
  }

  _add() {
    const currentValue = this._numberContainer.innerHTML;
    let result = 0;
    result = Number(currentValue) + 1;

    this._numberContainer.innerHTML = String(result);
  }

  _subtract() {
    const currentValue = this._numberContainer.innerHTML;
    let result = 0;
    result = currentValue - 1;
    if (result < 0) {
      this._numberContainer.innerHTML = '0';
    } else {
      this._numberContainer.innerHTML = result;
    }
  }

  _handlePlusSignClick() {
    this._add();
  }

  _handleMinusSignClick() {
    this._subtract();
  }

  _bindEventListeners() {
    this._plusSign.addEventListener(
      'click',
      this._handlePlusSignClick.bind(this),
    );
    this._minusSign.addEventListener(
      'click',
      this._handleMinusSignClick.bind(this),
    );
  }
}

const dropdownRows = document.querySelectorAll('.js-dropdown-row');
dropdownRows.forEach(element => {
  new DropdownRow(element);
});
