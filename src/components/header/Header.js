class Header {
  constructor() {
    this.user = null;
    this.userIcon = null;
    this.navigation = null;
    this.navigationIcon = null;

    this._findElements();
    this._bindEventListeners();
  }

  _findElements() {
    this.userIcon = document.querySelector('.js-header__user-icon');
    this.user = document.querySelector('.js-header__user');
    this.navigationIcon = document.querySelector('.js-header__navigation-icon');
    this.navigation = document.querySelector('.js-header__navigation');
  }

  _handleUserIconClick() {
    this.user.classList.toggle('header__user-icon_visible');
  }

  _handleNavigationIconClick() {
    this.navigation.classList.toggle('header__navigation-icon_visible');
  }

  _bindEventListeners() {
    this.userIcon.addEventListener(
      'click',
      this._handleUserIconClick.bind(this),
    );
    this.navigationIcon.addEventListener(
      'click',
      this._handleNavigationIconClick.bind(this),
    );
  }
}
new Header();
