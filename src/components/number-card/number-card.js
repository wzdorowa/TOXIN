class NumberCard {
  constructor(element) {
    this.numberCardContainer = element;
    this.slides = null;
    this.dots = null;
    this.buttonPrev = null;
    this.buttonNext = null;
    this.slideIndex = 1;

    this.findElements();
    this.showSlides(this.slideIndex);
    this.bindEventListeners();
  }

  findElements() {
    this.slides = this.numberCardContainer.querySelectorAll(
      '.js-number-card__content',
    );
    this.dots = this.numberCardContainer.querySelectorAll(
      '.js-number-card__switch-slider',
    );
    this.buttonPrev = this.numberCardContainer.querySelector(
      '.js-number-card__prev',
    );
    this.buttonNext = this.numberCardContainer.querySelector(
      '.js-number-card__next',
    );
  }

  showSlides(slideNumber) {
    if (slideNumber > this.slides.length) {
      this.slideIndex = 1;
    }
    if (slideNumber < 1) {
      this.slideIndex = this.slides.length;
    }
    this.slides.forEach(element => {
      const slide = element;
      if (!slide.classList.contains('number-card__content_display_hidden')) {
        slide.classList.add('number-card__content_display_hidden');
      }
    });
    this.dots.forEach(element => {
      const slide = element;
      slide.className = element.className.replace(
        ' number-card__switch-slider-active',
        '',
      );
    });
    if (
      this.slides[this.slideIndex - 1].classList.contains(
        'number-card__content_display_hidden',
      )
    ) {
      this.slides[this.slideIndex - 1].classList.remove(
        'number-card__content_display_hidden',
      );
    }
    this.dots[this.slideIndex - 1].className +=
      ' number-card__switch-slider-active';
  }

  currentSlide(slideNumber) {
    this.showSlides((this.slideIndex = slideNumber));
  }

  handleButtonPrevClick() {
    this.showSlides((this.slideIndex -= 1));
  }

  handleButtonNextClick() {
    this.showSlides((this.slideIndex += 1));
  }

  handleDotsClick(index) {
    this.currentSlide(index + 1);
  }

  bindEventListeners() {
    this.buttonPrev.addEventListener(
      'click',
      this.handleButtonPrevClick.bind(this),
    );
    this.buttonNext.addEventListener(
      'click',
      this.handleButtonNextClick.bind(this),
    );
    this.dots.forEach((element, index) => {
      element.addEventListener('click', this.handleDotsClick.bind(this, index));
    });
  }
}
const elements = document.querySelectorAll('.js-number-card');
elements.forEach(element => {
  new NumberCard(element);
});
