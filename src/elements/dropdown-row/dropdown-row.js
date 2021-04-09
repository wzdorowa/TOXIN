class DropdownRow {
  constructor(element) {
    this.dropdownRow = element;
    this.signs = [];
    this.minusSign = null;
    this.plusSign = null;
    this.listItems = [];
    this.numberContainer = null;

    this._findElements();
    this._bindEventListeners();
  }

  _findElements() {
    this.listItems = this.dropdownRow.querySelectorAll(
      '.js-dropdown-row__amount',
    );
    this.signs = this.dropdownRow.querySelectorAll(
      '.js-dropdown-row__amount_with-sign',
    );
    [this.firstArg, this.numberContainer] = this.listItems;
    [this.minusSign, this.plusSign] = this.signs;
  }

  _add() {
    const currentValue = this.numberContainer.innerHTML;
    let result = 0;
    result = Number(currentValue) + 1;

    this.numberContainer.innerHTML = String(result);
  }

  _subtract() {
    const currentValue = this.numberContainer.innerHTML;
    let result = 0;
    result = currentValue - 1;
    if (result < 0) {
      this.numberContainer.innerHTML = '0';
    } else {
      this.numberContainer.innerHTML = result;
    }
  }

  _handlePlusSignClick() {
    this._add();
  }

  _handleMinusSignClick() {
    this._subtract();
  }

  _bindEventListeners() {
    this.plusSign.addEventListener(
      'click',
      this._handlePlusSignClick.bind(this),
    );
    this.minusSign.addEventListener(
      'click',
      this._handleMinusSignClick.bind(this),
    );
  }
}

const dropdownRows = document.querySelectorAll('.js-dropdown-row');
dropdownRows.forEach(element => {
  new DropdownRow(element);
});
