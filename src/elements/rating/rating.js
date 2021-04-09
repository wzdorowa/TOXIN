class Rating {
  constructor(element) {
    this.rating = element;
    this.ratingItems = null;

    this._findElements();
    this._bindEventListener();
  }

  _findElements() {
    this.ratingItems = Array.from($(this.rating).children('.js-rating-item'));
  }

  _removeClass(array, className) {
    array.forEach((_element, i) => {
      const elements = new Array(2);
      for (let j = 1; j < elements.length; j += 1) {
        this.ratingItems[i].classList.remove(className);
      }
    });
  }

  _addClass(array, className) {
    array.forEach((_element, i) => {
      const elements = new Array(2);
      for (let j = 1; j < elements.length; j += 1) {
        this.ratingItems[i].classList.add(className);
      }
    });
  }

  _mouseOverActiveClass() {
    for (let i = 0, iLength = this.ratingItems.length; i < iLength; i += 1) {
      if (this.ratingItems[i].classList.contains('active')) {
        break;
      } else {
        this.ratingItems[i].classList.add('active');
      }
    }
  }

  _mouseOutActiveClass() {
    for (let i = this.ratingItems.length - 1; i >= 1; i -= 1) {
      if (this.ratingItems[i].classList.contains('current-active')) {
        break;
      } else {
        this.ratingItems[i].classList.remove('active');
      }
    }
  }

  _handleRatingClick(event) {
    const targetElement = event.target;
    if (targetElement.classList.contains('rating-item')) {
      this._removeClass(this.ratingItems, 'current-active');
      targetElement.classList.add('active', 'current-active');
    }
  }

  _handleRatingMouseover(event) {
    const targetElement = event.target;
    if (targetElement.classList.contains('rating-item')) {
      this._removeClass(this.ratingItems, 'active');
      targetElement.classList.add('active');
      this._mouseOverActiveClass(this.ratingItems);
    }
  }

  _handleRatingMouseout() {
    this._addClass(this.ratingItems, 'active');
    this._mouseOutActiveClass(this.ratingItems);
  }

  _bindEventListener() {
    this.rating.addEventListener('click', this._handleRatingClick.bind(this));
    this.rating.addEventListener(
      'mouseover',
      this._handleRatingMouseover.bind(this),
    );
    this.rating.addEventListener(
      'mouseout',
      this._handleRatingMouseout.bind(this),
    );
  }
}
$('.js-rating').each((index, element) => {
  new Rating(element);
});
