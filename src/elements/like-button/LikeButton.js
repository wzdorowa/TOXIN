class LikeButton {
  constructor(element) {
    this.buttonContainer = element;
    this.likeButton = null;
    this.description = '';

    this._findElements();
    this._bindEventListener();
  }

  _findElements() {
    this.likeButton = this.buttonContainer.querySelector(
      '.js-like-button__content',
    );
    this.description = this.buttonContainer.querySelector(
      '.js-like-button__description',
    );
  }

  _handleClick = () => {
    if (this.likeButton.checked === true) {
      this.description.innerHTML = Number(this.description.innerHTML) + 1;
    } else if (this.likeButton.checked === false) {
      this.description.innerHTML = Number(this.description.innerHTML) - 1;
    }
  }

  _bindEventListener() {
    this.likeButton.addEventListener('click', this._handleClick);
  }
}

const buttons = document.querySelectorAll('.js-like-button');
buttons.forEach(button => {
  new LikeButton(button);
});
