class Rating {
  constructor(element) {
    this.rating = element;
    this.ratingItems = null;

    this.findElements();
    this.listenClickRating();
    this.listenMouseoverRating();
    this.listenMouseoutRating();
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

  listenClickRating() {
    this.rating.addEventListener('click', e => {
      const targetElement = e.target;
      if (targetElement.classList.contains('rating-item')) {
        this.removeClass(this.ratingItems, 'current-active');
        targetElement.classList.add('active', 'current-active');
      }
    });
  }

  listenMouseoverRating() {
    this.rating.addEventListener('mouseover', e => {
      const targetElement = e.target;
      if (targetElement.classList.contains('rating-item')) {
        this.removeClass(this.ratingItems, 'active');
        targetElement.classList.add('active');
        this.mouseOverActiveClass(this.ratingItems);
      }
    });
  }

  listenMouseoutRating() {
    this.rating.addEventListener('mouseout', () => {
      this.addClass(this.ratingItems, 'active');
      this.mouseOutActiveClass(this.ratingItems);
    });
  }
}
$('.rating').each((index, element) => {
  new Rating(element);
});
