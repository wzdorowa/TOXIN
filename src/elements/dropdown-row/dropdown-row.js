class DropdownRow {
  constructor(element) {
    this.dropdownRow = element;
    this.signs = [];
    this.minusSign = null;
    this.plusSign = null;
    this.listItems = [];
    this.numberContainer = null;

    this.findElements();
    this.listenClickPlusSign();
    this.listenClickMinusSign();
  }

  findElements() {
    this.listItems = this.dropdownRow.querySelectorAll('.dropdown-row__amount');
    this.signs = this.dropdownRow.querySelectorAll(
      '.dropdown-row__amount_with-sign',
    );
    [this.firstArg, this.numberContainer] = this.listItems;
    [this.minusSign, this.plusSign] = this.signs;
  }

  add() {
    const currentValue = this.numberContainer.innerHTML;
    let result = 0;
    result = Number(currentValue) + 1;

    this.numberContainer.innerHTML = String(result);
  }

  subtract() {
    const currentValue = this.numberContainer.innerHTML;
    let result = 0;
    result = currentValue - 1;
    if (result < 0) {
      this.numberContainer.innerHTML = '0';
    } else {
      this.numberContainer.innerHTML = result;
    }
  }

  listenClickPlusSign() {
    this.plusSign.addEventListener('click', () => {
      this.add();
    });
  }

  listenClickMinusSign() {
    this.minusSign.addEventListener('click', () => {
      this.subtract();
    });
  }
}

const dropdownRows = document.querySelectorAll('.dropdown-row');
dropdownRows.forEach(element => {
  new DropdownRow(element);
});
