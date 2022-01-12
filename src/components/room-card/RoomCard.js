class RoomCard {
  constructor(element) {
    this.numberCardContainer = element;
    this.slides = null;
    this.dots = null;
    this.buttonPrev = null;
    this.buttonNext = null;
    this.slideIndex = 1;

    this._findElements();
    this._showSlides(this.slideIndex);
    this._bindEventListeners();
  }

  _findElements() {
    this.slides = this.numberCardContainer.querySelectorAll(
      '.js-room-card__content',
    );
    this.dots = this.numberCardContainer.querySelectorAll(
      '.js-room-card__switch-slider',
    );
    this.buttonPrev = this.numberCardContainer.querySelector(
      '.js-room-card__prev',
    );
    this.buttonNext = this.numberCardContainer.querySelector(
      '.js-room-card__next',
    );
  }

  _showSlides(slideNumber) {
    if (slideNumber > this.slides.length) {
      this.slideIndex = 1;
    }
    if (slideNumber < 1) {
      this.slideIndex = this.slides.length;
    }
    this.slides.forEach(element => {
      const slide = element;
      if (!slide.classList.contains('room-card__content_display_hidden')) {
        slide.classList.add('room-card__content_display_hidden');
      }
    });
    this.dots.forEach(element => {
      const slide = element;
      slide.className = element.className.replace(
        ' room-card__switch-slider-active',
        '',
      );
    });
    if (
      this.slides[this.slideIndex - 1].classList.contains(
        'room-card__content_display_hidden',
      )
    ) {
      this.slides[this.slideIndex - 1].classList.remove(
        'room-card__content_display_hidden',
      );
    }
    this.dots[this.slideIndex - 1].className +=
      ' room-card__switch-slider-active';
  }

  _currentSlide(slideNumber) {
    this._showSlides((this.slideIndex = slideNumber));
  }

  _handleButtonPrevClick() {
    this._showSlides((this.slideIndex -= 1));
  }

  _handleButtonNextClick() {
    this._showSlides((this.slideIndex += 1));
  }

  _handleDotsClick(index) {
    this._currentSlide(index + 1);
  }

  _bindEventListeners() {
    this.buttonPrev.addEventListener('click', () => {
      this._handleButtonPrevClick();
    });
    this.buttonNext.addEventListener('click', () => {
      this._handleButtonNextClick();
    });
    this.dots.forEach((element, index) => {
      element.addEventListener('click', () => {
        this._handleDotsClick(index);
      });
    });
  }
}
const elements = document.querySelectorAll('.js-room-card');
elements.forEach(element => {
  new RoomCard(element);
});
