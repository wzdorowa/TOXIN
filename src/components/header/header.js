class Header {
  constructor() {
    this.user = null;
    this.userIcon = null;
    this.navigation = null;
    this.navigationIcon = null;

    this.findElements();
    this.bindEventListeners();
  }

  findElements() {
    this.userIcon = document.querySelector('.header__user-icon');
    this.user = document.querySelector('.header__user');
    this.navigationIcon = document.querySelector('.header__navigation-icon');
    this.navigation = document.querySelector('.header__navigation');
  }

  handleUserIconClick() {
    this.user.classList.toggle('header__user-icon_visible');
  }

  handleNavigationIconClick() {
    this.navigation.classList.toggle('header__navigation-icon_visible');
  }

  bindEventListeners() {
    this.userIcon.addEventListener(
      'click',
      this.handleUserIconClick.bind(this),
    );
    this.navigationIcon.addEventListener(
      'click',
      this.handleNavigationIconClick.bind(this),
    );
  }
}
new Header();
