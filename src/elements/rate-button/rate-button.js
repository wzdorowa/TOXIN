$('.rating').each((index, element) => {
  const rating = element;
  const ratingItems = Array.from($(rating).children('.rating-item'));

  function removeClass(arr, className) {
    arr.forEach((_element, i) => {
      const arg = new Array(2);
      for (let j = 1; j < arg.length; j += 1) {
        ratingItems[i].classList.remove(className);
      }
    });
  }
  function addClass(arr, className) {
    arr.forEach((_element, i) => {
      const arg = new Array(2);
      for (let j = 1; j < arg.length; j += 1) {
        ratingItems[i].classList.add(className);
      }
    });
  }
  function mouseOverActiveClass(arr) {
    for (let i = 0, iLen = arr.length; i < iLen; i += 1) {
      if (arr[i].classList.contains('active')) {
        break;
      } else {
        arr[i].classList.add('active');
      }
    }
  }
  function mouseOutActiveClass(arr) {
    for (let i = arr.length - 1; i >= 1; i -= 1) {
      if (arr[i].classList.contains('current-active')) {
        break;
      } else {
        arr[i].classList.remove('active');
      }
    }
  }
  rating.onclick = e => {
    const targetElement = e.target;
    if (targetElement.classList.contains('rating-item')) {
      removeClass(ratingItems, 'current-active');
      targetElement.classList.add('active', 'current-active');
    }
  };
  rating.onmouseover = e => {
    const targetElement = e.target;
    if (targetElement.classList.contains('rating-item')) {
      removeClass(ratingItems, 'active');
      targetElement.classList.add('active');
      mouseOverActiveClass(ratingItems);
    }
  };
  rating.onmouseout = () => {
    addClass(ratingItems, 'active');
    mouseOutActiveClass(ratingItems);
  };
});
