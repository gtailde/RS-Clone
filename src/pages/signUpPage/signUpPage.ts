import { createHtmlElement } from '../../utils/createHtmlElement';
const logo = require('../../assets/icons/insta_logo.svg');
class SignUpPage {
  wrapper: HTMLElement;

  constructor() {
    this.wrapper = createHtmlElement('sign-up-wrapper', 'div');
  }

  appendTo(elem: HTMLElement, toElem: HTMLElement) {
    toElem.append(elem);
  }

  renderHeaderSignUp() {
    const signUp = createHtmlElement('sign-up', 'div');
    const signUpHeader = createHtmlElement('sign-up-header', 'div');
    const signUpLogo = createHtmlElement('sign-up-logo', 'img') as HTMLImageElement;
    signUpLogo.src = logo;
    const signUpDescriptions = createHtmlElement(
      'sign-up-descriptions',
      'div',
      'Зарегистрируйтесь, чтобы смотреть фото и видео ваших друзей.'
    );
    const signUpFacebookButton = createHtmlElement(
      'sign-up-facebook-button',
      'a',
      'Войти через Facebook'
    ) as HTMLAnchorElement;
    signUpFacebookButton.href = 'https://www.facebook.com';
    this.appendTo(signUpLogo, signUpHeader);
    this.appendTo(signUpDescriptions, signUpHeader);
    this.appendTo(signUpFacebookButton, signUpHeader);
    this.appendTo(signUpHeader, signUp);
    this.appendTo(signUp, document.body);
  }

  renderFormSignUp() {
    const signUp = document.querySelector('.sign-up') as HTMLDivElement;
    const signIn = createHtmlElement('registration-sign-in', 'div');
    const signInContent = createHtmlElement('registration-sign-in__content', 'div');
    signInContent.innerHTML = `
      Есть аккаунт? <a href="/">Вход</a>
    `;
    this.appendTo(signInContent, signIn);
    const signUpFormBodyWrapper = createHtmlElement('sign-up-form__body-wrapper', 'div');
    const signUpFormBody = createHtmlElement('sign-up-form__body', 'form');
    const signUpFormBodyLogin = createHtmlElement(
      ['signUp-form__mobile-or-email', 'signUp-form__input'],
      'input'
    ) as HTMLInputElement;
    signUpFormBodyLogin.placeholder = 'Моб. телефон или эл. адрес';

    const signUpFormBodyFirstLastName = createHtmlElement(
      ['signUp-form__first-last-name', 'signUp-form__input'],
      'input'
    ) as HTMLInputElement;
    signUpFormBodyFirstLastName.placeholder = 'Имя и фамилия';

    const signUpFormBodyUserName = createHtmlElement(
      ['signUp-form__username', 'signUp-form__input'],
      'input'
    ) as HTMLInputElement;
    signUpFormBodyUserName.placeholder = 'Имя пользователя';

    const signUpFormBodyPassword = createHtmlElement(
      ['signUp-form__password', 'signUp-form__input'],
      'input'
    ) as HTMLInputElement;
    signUpFormBodyPassword.placeholder = 'Пароль';
    signUpFormBodyPassword.type = 'password';
    signUpFormBodyPassword.pattern = '^[a-zA-Z]\\w{3,14}$';

    const signUpFormBodyButtonSubmit = createHtmlElement(
      ['signUp-form__submit', 'button'],
      'button',
      'Далее'
    ) as HTMLInputElement;

    const signUpFormBodyLineWrapper = createHtmlElement('signUp-form__line-wrapper', 'div');
    const signUpFormBodyLineLeft = createHtmlElement('signUp-form__line-left', 'div');
    const signUpFormBodyLineText = createHtmlElement('signUp-form__line-text', 'div', 'ИЛИ');
    const signUpFormBodyLineRight = createHtmlElement('signUp-form__line-right', 'div');
    this.appendTo(signUpFormBodyLineLeft, signUpFormBodyLineWrapper);
    this.appendTo(signUpFormBodyLineLeft, signUpFormBodyLineWrapper);
    this.appendTo(signUpFormBodyLineText, signUpFormBodyLineWrapper);
    this.appendTo(signUpFormBodyLineRight, signUpFormBodyLineWrapper);
    this.appendTo(signUpFormBodyLineWrapper, signUpFormBody);

    this.appendTo(signUpFormBodyLogin, signUpFormBody);
    this.appendTo(signUpFormBodyFirstLastName, signUpFormBody);
    this.appendTo(signUpFormBodyUserName, signUpFormBody);
    this.appendTo(signUpFormBodyPassword, signUpFormBody);
    this.appendTo(signUpFormBodyButtonSubmit, signUpFormBody);
    this.appendTo(signUpFormBody, signUpFormBodyWrapper);
    this.appendTo(signUpFormBodyWrapper, signUp);

    this.appendTo(signUp, this.wrapper);
    this.appendTo(signIn, this.wrapper);
    this.appendTo(this.wrapper, document.body);
  }

  draw() {
    this.renderHeaderSignUp();
    this.renderFormSignUp();
  }
}

const implementsSignUpPage = new SignUpPage();

export default implementsSignUpPage;
