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
    this.listenClickButtonPrev();
    this.listenClickButtonNext();
    this.listenClickDots();
  }

  findElements() {
    this.slides = this.numberCardContainer.querySelectorAll(
      '.number-card__content',
    );
    this.dots = this.numberCardContainer.querySelectorAll(
      '.number-card__switch-slider',
    );
    this.buttonPrev = this.numberCardContainer.querySelector(
      '.number-card__prev',
    );
    this.buttonNext = this.numberCardContainer.querySelector(
      '.number-card__next',
    );
  }

  showSlides(n) {
    if (n > this.slides.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = this.slides.length;
    }
    this.slides.forEach(element => {
      const slide = element;
      slide.style.display = 'none';
    });
    this.dots.forEach(element => {
      const slide = element;
      slide.className = element.className.replace(
        ' number-card__switch-slider-active',
        '',
      );
    });
    this.slides[this.slideIndex - 1].style.display = 'block';
    this.dots[this.slideIndex - 1].className +=
      ' number-card__switch-slider-active';
  }

  currentSlide(n) {
    this.showSlides((this.slideIndex = n));
  }

  listenClickButtonPrev() {
    const showPrevSlides = () => {
      this.showSlides((this.slideIndex -= 1));
    };
    this.buttonPrev.addEventListener('click', showPrevSlides);
  }

  listenClickButtonNext() {
    const showNextSlides = () => {
      this.showSlides((this.slideIndex += 1));
    };
    this.buttonNext.addEventListener('click', showNextSlides);
  }

  listenClickDots() {
    this.dots.forEach((element, i) => {
      const showCurrentSlide = () => {
        this.currentSlide(i + 1);
      };
      element.addEventListener('click', showCurrentSlide);
    });
  }
}
const elements = document.querySelectorAll('.number-card');
elements.forEach(element => {
  new NumberCard(element);
});
