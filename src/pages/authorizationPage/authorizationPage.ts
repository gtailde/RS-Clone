import { createHtmlElement } from '../../utils/createHtmlElement';
const logo = require('../../assets/icons/insta_logo.svg');
const bg = require('../../assets/img/bg.png');

class AuthorizationPage {
  wrapper: HTMLElement;
  leftSideWrapper: HTMLElement;
  rightSideWrapper: HTMLElement;
  constructor() {
    this.wrapper = createHtmlElement('authorization-wrapper', 'div');
    this.leftSideWrapper = createHtmlElement('left-side-wrapper', 'div');
    this.rightSideWrapper = createHtmlElement('right-side-wrapper', 'div');
  }

  appendTo(elem: HTMLElement, toElem: HTMLElement) {
    toElem.append(elem);
  }

  leftSideRender() {
    const image = createHtmlElement('authorization-image', 'img') as HTMLImageElement;
    image.src = bg;
    image.height = 550;
    image.width = 380;
    this.appendTo(image, this.leftSideWrapper);
  }

  rightSideRender() {
    // Sign In
    const authorizationFormWrapperSignIn = createHtmlElement(
      ['authorization-form-wrapper', 'authorization-form-wrapper-sign-in'],
      'div'
    );
    const authorizationFormSignIn = createHtmlElement(['authorization-form', 'authorization-form-sign-in'], 'form');
    this.appendTo(authorizationFormWrapperSignIn, this.rightSideWrapper);
    this.appendTo(authorizationFormSignIn, authorizationFormWrapperSignIn);

    const authorizationFormHeader = createHtmlElement('authorization-form__header', 'div');
    this.appendTo(authorizationFormHeader, authorizationFormSignIn);

    const authorizationFormLogoWrapper = createHtmlElement('authorization-form__logo-wrapper', 'div');
    const authorizationFormLogo = createHtmlElement('authorization-form__logo', 'img') as HTMLImageElement;
    authorizationFormLogo.src = logo;
    this.appendTo(authorizationFormLogo, authorizationFormLogoWrapper);
    this.appendTo(authorizationFormLogoWrapper, authorizationFormHeader);

    const authorizationFormBodyWrapper = createHtmlElement('authorization-form__body-wrapper', 'div');
    const authorizationFormBody = createHtmlElement('authorization-form__body', 'div');
    const authorizationFormBodyLogin = createHtmlElement(
      ['authorization-form__login', 'authorization-form__input'],
      'input'
    ) as HTMLInputElement;
    authorizationFormBodyLogin.placeholder = 'Телефон, имя пользователя или эл. адрес';

    const authorizationFormBodyPassword = createHtmlElement(
      ['authorization-form__password', 'authorization-form__input'],
      'input'
    ) as HTMLInputElement;
    authorizationFormBodyPassword.placeholder = 'Пароль';
    authorizationFormBodyPassword.type = 'password'

    const authorizationFormBodyLogIn = createHtmlElement(
      ['button', 'authorization-form__log-in'],
      'button',
      'Войти'
    ) as HTMLButtonElement;
    authorizationFormBodyLogIn.type = 'submit';

    const authorizationFormBodyLineWrapper = createHtmlElement('authorization-form__line-wrapper', 'div');
    const authorizationFormBodyLineLeft = createHtmlElement('authorization-form__line-left', 'div');
    const authorizationFormBodyLineText = createHtmlElement('authorization-form__line-text', 'div', 'ИЛИ');
    const authorizationFormBodyLineRight = createHtmlElement('authorization-form__line-right', 'div');
    this.appendTo(authorizationFormBodyLineLeft, authorizationFormBodyLineWrapper);
    this.appendTo(authorizationFormBodyLineLeft, authorizationFormBodyLineWrapper);
    this.appendTo(authorizationFormBodyLineText, authorizationFormBodyLineWrapper);
    this.appendTo(authorizationFormBodyLineRight, authorizationFormBodyLineWrapper);

    const authorizationFormBodyForgotPassword = createHtmlElement(
      'authorization-form__forgot',
      'a',
      'Забыли пароль?'
    ) as HTMLAnchorElement;
    authorizationFormBodyForgotPassword.href = '#';
    this.appendTo(authorizationFormBodyLogin, authorizationFormBody);
    this.appendTo(authorizationFormBodyPassword, authorizationFormBody);
    this.appendTo(authorizationFormBodyLogIn, authorizationFormBody);
    this.appendTo(authorizationFormBodyLineWrapper, authorizationFormBody);
    this.appendTo(authorizationFormBodyForgotPassword, authorizationFormBody);
    this.appendTo(authorizationFormBody, authorizationFormBodyWrapper);
    this.appendTo(authorizationFormBodyWrapper, authorizationFormSignIn);

    // Sign Up
    const authorizationFormSignUpWrapper = createHtmlElement(
      ['authorization-form-wrapper', 'authorization-form-wrapper__sign-up'],
      'div'
    );
    const authorizationFormSignUp = createHtmlElement(['authorization-form', 'authorization-form-sign-up'], 'div');

    this.appendTo(authorizationFormSignUp, authorizationFormSignUpWrapper);
    const authorizationFormSignUpLink = createHtmlElement('authorization-form__sign-up-link', 'div');
    authorizationFormSignUpLink.innerHTML = `У вас ещё нет аккаунта? <a href="#">Зарегистрироваться</a>`;
    this.appendTo(authorizationFormSignUpLink, authorizationFormSignUp);
    this.appendTo(authorizationFormSignUpWrapper, this.rightSideWrapper);
  }

  draw() {
    this.rightSideRender();
    this.leftSideRender();
    this.appendTo(this.wrapper, document.body);
    this.appendTo(this.leftSideWrapper, this.wrapper);
    this.appendTo(this.rightSideWrapper, this.wrapper);
  }
}

const implementsAuthorizationPage = new AuthorizationPage();
export default implementsAuthorizationPage;
