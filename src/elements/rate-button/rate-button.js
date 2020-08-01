$('.rating').each((index, element) => {
  const rating = element;
  const ratingItems = Array.from($(rating).children('.rating-item'));

  function removeClass(elements, className) {
    for (let i = 0; i < elements.length; i += i) {
      ratingItems[i].classList.remove(className);
    }
  }
  function addClass(elements, className) {
    for (let i = 0, iLen = elements.length; i < iLen; i += i) {
      ratingItems[i].classList.add(className);
    }
  }

  function mouseOverActiveClass(arr) {
    for (let i = 0, iLen = arr.length; i < iLen; i += i) {
      if (arr[i].classList.contains('active')) {
        break;
      } else {
        arr[i].classList.add('active');
      }
    }
  }

  function mouseOutActiveClass(arr) {
    for (let i = arr.length - 1; i >= 1; i -= i) {
      if (arr[i].classList.contains('current-active')) {
        break;
      } else {
        arr[i].classList.remove('active');
      }
    }
  }

  rating.onclick = e => {
    const { target } = e;
    if (target.classList.contains('rating-item')) {
      removeClass(ratingItems, 'current-active');
      target.classList.add('active', 'current-active');
    }
  };

  rating.onmouseover = e => {
    const { target } = e;
    if (target.classList.contains('rating-item')) {
      removeClass(ratingItems, 'active');
      target.classList.add('active');
      mouseOverActiveClass(ratingItems);
    }
  };
  rating.onmouseout = () => {
    addClass(ratingItems, 'active');
    mouseOutActiveClass(ratingItems);
  };
});
