class Header {
  constructor() {
    this.user = null;
    this.userIcon = null;
    this.navigation = null;
    this.navigationIcon = null;
    this.submenu = null;
    this.menuItem = null;

    this._findElements();
    this._bindEventListeners();
  }

  _findElements() {
    this.userIcon = document.querySelector('.js-header__user-icon');
    this.user = document.querySelector('.js-header__user');
    this.navigationIcon = document.querySelector('.js-header__navigation-icon');
    this.navigation = document.querySelector('.js-header__navigation');
    this.submenu = document.querySelectorAll('.js-header__submenu');
    this.menuItem = document.querySelectorAll('.js-header__title-submenu');
  }

  _handleUserIconClick() {
    this.user.classList.toggle('header__user_visible');
  }

  _handleNavigationIconClick() {
    this.navigation.classList.toggle('header__navigation_visible');
  }

  _handleSubmenuClick(index) {
    this.submenu[index].classList.toggle('header__submenu_active');
  }

  _bindEventListeners() {
    this.userIcon.addEventListener('click', () => {
      this._handleUserIconClick();
    });
    this.navigationIcon.addEventListener('click', () => {
      this._handleNavigationIconClick();
    });
    this.menuItem.forEach((element, index) => {
      element.addEventListener('click', () => {
        this._handleSubmenuClick(index);
      });
    });
  }
}
new Header();
