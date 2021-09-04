class LikeButton {
  constructor(element) {
    this.buttonContainer = element;
    this.likeButton = null;
    this.description = '';

    this.findElements();
    this.bindEventListener();
  }

  findElements() {
    this.likeButton = this.buttonContainer.querySelector(
      '.js-like-button__content',
    );
    this.description = this.buttonContainer.querySelector(
      '.js-like-button__description',
    );
  }

  handleClick() {
    if (this.likeButton.checked === true) {
      this.description.innerHTML = Number(this.description.innerHTML) + 1;
    }
    if (this.likeButton.checked === false) {
      this.description.innerHTML = Number(this.description.innerHTML) - 1;
    }
  }

  bindEventListener() {
    this.likeButton.addEventListener('click', this.handleClick.bind(this));
  }
}

const buttons = document.querySelectorAll('.js-like-button');
buttons.forEach(button => {
  new LikeButton(button);
});