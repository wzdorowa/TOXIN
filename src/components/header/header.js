class Header {
  constructor() {
    this.user = null;
    this.userIcon = null;
    this.navigation = null;
    this.navigationIcon = null;

    this.findElements();
    this.listenClickUserIcon();
    this.listenClickNavigationIcon();
  }

  findElements() {
    this.userIcon = document.querySelector('.header__user-icon');
    this.user = document.querySelector('.header__user');
    this.navigationIcon = document.querySelector('.header__navigation-icon');
    this.navigation = document.querySelector('.header__navigation');
  }

  listenClickUserIcon() {
    this.userIcon.addEventListener('click', () => {
      this.user.classList.toggle('header__user-icon_visible');
    });
  }

  listenClickNavigationIcon() {
    this.navigationIcon.addEventListener('click', () => {
      this.navigation.classList.toggle('header__navigation-icon_visible');
    });
  }
}
new Header();
