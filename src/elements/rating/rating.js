class Rating {
  constructor(element) {
    this._rating = element;
    this._ratingItems = null;

    this._findElements();
    this._bindEventListener();
  }

  _findElements() {
    this._ratingItems = Array.from($(this._rating).children('.js-rating-item'));
  }

  _removeClass(array, className) {
    array.forEach((_element, i) => {
      const elements = new Array(2);
      for (let j = 1; j < elements.length; j += 1) {
        this._ratingItems[i].classList.remove(className);
      }
    });
  }

  _addClass(array, className) {
    array.forEach((_element, i) => {
      const elements = new Array(2);
      for (let j = 1; j < elements.length; j += 1) {
        this._ratingItems[i].classList.add(className);
      }
    });
  }

  _mouseOverActiveClass() {
    for (let i = 0, iLength = this._ratingItems.length; i < iLength; i += 1) {
      if (this._ratingItems[i].classList.contains('active')) {
        break;
      } else {
        this._ratingItems[i].classList.add('active');
      }
    }
  }

  _mouseOutActiveClass() {
    for (let i = this._ratingItems.length - 1; i >= 1; i -= 1) {
      if (this._ratingItems[i].classList.contains('current-active')) {
        break;
      } else {
        this._ratingItems[i].classList.remove('active');
      }
    }
  }

  _handleRatingClick(event) {
    const targetElement = event.target;
    if (targetElement.classList.contains('rating-item')) {
      this._removeClass(this._ratingItems, 'current-active');
      targetElement.classList.add('active', 'current-active');
    }
  }

  _handleRatingMouseover(event) {
    const targetElement = event.target;
    if (targetElement.classList.contains('rating-item')) {
      this._removeClass(this._ratingItems, 'active');
      targetElement.classList.add('active');
      this._mouseOverActiveClass(this._ratingItems);
    }
  }

  _handleRatingMouseout() {
    this._addClass(this._ratingItems, 'active');
    this._mouseOutActiveClass(this._ratingItems);
  }

  _bindEventListener() {
    this._rating.addEventListener('click', this._handleRatingClick.bind(this));
    this._rating.addEventListener(
      'mouseover',
      this._handleRatingMouseover.bind(this),
    );
    this._rating.addEventListener(
      'mouseout',
      this._handleRatingMouseout.bind(this),
    );
  }
}
$('.js-rating').each((index, element) => {
  new Rating(element);
});
