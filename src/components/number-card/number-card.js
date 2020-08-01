$('.numberCard-container').each((index, element) => {
  const numberCardContainer = element;
  const slides = Array.from(
    $(numberCardContainer).find('.numberCard-container__content'),
  );
  const dots = Array.from(
    $(numberCardContainer).find('.numberCard-container__switch-slider'),
  );
  const prev = Array.from(
    $(numberCardContainer).find('.numberCard-container__prev'),
  );
  const next = Array.from(
    $(numberCardContainer).find('.numberCard-container__next'),
  );

  /* Индекс слайда по умолчанию */
  let slideIndex = 1;
  showSlides(slideIndex);

  /* Функция уменьшяет индекс на 1, показывает предыдущий слайд */
  prev[0].onclick = function () {
    showSlides((slideIndex -= 1));
  };
  /* Функция увеличивает индекс на 1, показывает следующй слайд */
  next[0].onclick = function () {
    showSlides((slideIndex += 1));
  };
  dots.forEach((element, i) => {
    element.addEventListener('click', () => currentSlide(i + 1));
  });
  /* Устанавливает текущий слайд */
  function currentSlide(n) {
    showSlides((slideIndex = n));
  }
  /* Основная функция слайдера */
  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    slides.forEach((element, i) => {
      element.style.display = 'none';
    });
    dots.forEach((element, i) => {
      element.className = element.className.replace(
        ' numberCard-container__switch-slider-active',
        '',
      );
    });
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className +=
      ' numberCard-container__switch-slider-active';
  }
});
