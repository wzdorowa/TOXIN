class NumberCard {
  constructor(element) {
    this._numberCardContainer = element;
    this._slides = null;
    this._dots = null;
    this._buttonPrev = null;
    this._buttonNext = null;
    this._slideIndex = 1;

    this._findElements();
    this._showSlides(this._slideIndex);
    this._bindEventListeners();
  }

  _findElements() {
    this._slides = this._numberCardContainer.querySelectorAll(
      '.js-number-card__content',
    );
    this._dots = this._numberCardContainer.querySelectorAll(
      '.js-number-card__switch-slider',
    );
    this._buttonPrev = this._numberCardContainer.querySelector(
      '.js-number-card__prev',
    );
    this._buttonNext = this._numberCardContainer.querySelector(
      '.js-number-card__next',
    );
  }

  _showSlides(slideNumber) {
    if (slideNumber > this._slides.length) {
      this._slideIndex = 1;
    }
    if (slideNumber < 1) {
      this._slideIndex = this._slides.length;
    }
    this._slides.forEach(element => {
      const slide = element;
      if (!slide.classList.contains('number-card__content_display_hidden')) {
        slide.classList.add('number-card__content_display_hidden');
      }
    });
    this._dots.forEach(element => {
      const slide = element;
      slide.className = element.className.replace(
        ' number-card__switch-slider-active',
        '',
      );
    });
    if (
      this._slides[this._slideIndex - 1].classList.contains(
        'number-card__content_display_hidden',
      )
    ) {
      this._slides[this._slideIndex - 1].classList.remove(
        'number-card__content_display_hidden',
      );
    }
    this._dots[this._slideIndex - 1].className +=
      ' number-card__switch-slider-active';
  }

  _currentSlide(slideNumber) {
    this._showSlides((this._slideIndex = slideNumber));
  }

  _handleButtonPrevClick() {
    this._showSlides((this._slideIndex -= 1));
  }

  _handleButtonNextClick() {
    this._showSlides((this._slideIndex += 1));
  }

  _handleDotsClick(index) {
    this._currentSlide(index + 1);
  }

  _bindEventListeners() {
    this._buttonPrev.addEventListener(
      'click',
      this._handleButtonPrevClick.bind(this),
    );
    this._buttonNext.addEventListener(
      'click',
      this._handleButtonNextClick.bind(this),
    );
    this._dots.forEach((element, index) => {
      element.addEventListener('click', this._handleDotsClick.bind(this, index));
    });
  }
}
const elements = document.querySelectorAll('.js-number-card');
elements.forEach(element => {
  new NumberCard(element);
});
