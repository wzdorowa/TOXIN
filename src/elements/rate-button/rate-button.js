class Rating {
  constructor(element) {
    this.rating = element;
    this.ratingItems = null;

    this.findElements();
    this.bindEventListener();
  }

  findElements() {
    this.ratingItems = Array.from($(this.rating).children('.rating-item'));
  }

  removeClass(array, className) {
    array.forEach((_element, i) => {
      const elements = new Array(2);
      for (let j = 1; j < elements.length; j += 1) {
        this.ratingItems[i].classList.remove(className);
      }
    });
  }

  addClass(array, className) {
    array.forEach((_element, i) => {
      const elements = new Array(2);
      for (let j = 1; j < elements.length; j += 1) {
        this.ratingItems[i].classList.add(className);
      }
    });
  }

  mouseOverActiveClass() {
    for (let i = 0, iLength = this.ratingItems.length; i < iLength; i += 1) {
      if (this.ratingItems[i].classList.contains('active')) {
        break;
      } else {
        this.ratingItems[i].classList.add('active');
      }
    }
  }

  mouseOutActiveClass() {
    for (let i = this.ratingItems.length - 1; i >= 1; i -= 1) {
      if (this.ratingItems[i].classList.contains('current-active')) {
        break;
      } else {
        this.ratingItems[i].classList.remove('active');
      }
    }
  }

  handleRatingClick(event) {
    const targetElement = event.target;
    if (targetElement.classList.contains('rating-item')) {
      this.removeClass(this.ratingItems, 'current-active');
      targetElement.classList.add('active', 'current-active');
    }
  }

  handleRatingMouseover(event) {
    const targetElement = event.target;
    if (targetElement.classList.contains('rating-item')) {
      this.removeClass(this.ratingItems, 'active');
      targetElement.classList.add('active');
      this.mouseOverActiveClass(this.ratingItems);
    }
  }

  handleRatingMouseout() {
    this.addClass(this.ratingItems, 'active');
    this.mouseOutActiveClass(this.ratingItems);
  }

  bindEventListener() {
    this.rating.addEventListener('click', this.handleRatingClick.bind(this));
    this.rating.addEventListener(
      'mouseover',
      this.handleRatingMouseover.bind(this),
    );
    this.rating.addEventListener(
      'mouseout',
      this.handleRatingMouseout.bind(this),
    );
  }
}
$('.rating').each((index, element) => {
  new Rating(element);
});
