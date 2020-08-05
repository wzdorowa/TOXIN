$('.number-card').each((index, element) => {
  const numberCardContainer = element;
  const slides = Array.from(
    $(numberCardContainer).find('.number-card__content'),
  );
  const dots = Array.from(
    $(numberCardContainer).find('.number-card__switch-slider'),
  );
  const prev = Array.from($(numberCardContainer).find('.number-card__prev'));
  const next = Array.from($(numberCardContainer).find('.number-card__next'));

  /* Индекс слайда по умолчанию */
  let slideIndex = 1;

  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    slides.forEach(element => {
      const slide = element;
      slide.style.display = 'none';
    });
    dots.forEach(element => {
      const slide = element;
      slide.className = element.className.replace(
        ' number-card__switch-slider-active',
        '',
      );
    });
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' number-card__switch-slider-active';
  }
  /* Устанавливает текущий слайд */
  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  showSlides(slideIndex);

  /* Функция уменьшяет индекс на 1, показывает предыдущий слайд */
  prev[0].onclick = () => {
    showSlides((slideIndex -= 1));
  };
  /* Функция увеличивает индекс на 1, показывает следующй слайд */
  next[0].onclick = () => {
    showSlides((slideIndex += 1));
  };
  dots.forEach((element, i) => {
    element.addEventListener('click', () => currentSlide(i + 1));
  });
});
