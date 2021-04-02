class Header {
  constructor() {
    this._user = null;
    this._userIcon = null;
    this._navigation = null;
    this._navigationIcon = null;

    this._findElements();
    this._bindEventListeners();
  }

  _findElements() {
    this._userIcon = document.querySelector('.js-header__user-icon');
    this._user = document.querySelector('.js-header__user');
    this._navigationIcon = document.querySelector('.js-header__navigation-icon');
    this._navigation = document.querySelector('.js-header__navigation');
  }

  _handleUserIconClick() {
    this._user.classList.toggle('header__user-icon_visible');
  }

  _handleNavigationIconClick() {
    this._navigation.classList.toggle('header__navigation-icon_visible');
  }

  _bindEventListeners() {
    this._userIcon.addEventListener(
      'click',
      this._handleUserIconClick.bind(this),
    );
    this._navigationIcon.addEventListener(
      'click',
      this._handleNavigationIconClick.bind(this),
    );
  }
}
new Header();
