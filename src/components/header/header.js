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
    const toggle = () => {
      this.user.classList.toggle('header__user-icon_visible');
    };
    this.userIcon.addEventListener('click', toggle);
  }

  listenClickNavigationIcon() {
    const toggle = () => {
      this.navigation.classList.toggle('header__navigation-icon_visible');
    };
    this.navigationIcon.addEventListener('click', toggle);
  }
}
new Header();
