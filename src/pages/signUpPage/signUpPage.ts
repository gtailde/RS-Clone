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
    const signUpFormBodyLoginWrapper = createHtmlElement(['signUp-form-input-wrapper'], 'div');
    const signUpFormBodyLogin = createHtmlElement(
      ['signUp-form__mobile-or-email', 'signUp-form__input'],
      'input'
    ) as HTMLInputElement;
    signUpFormBodyLogin.placeholder = 'Моб. телефон или эл. адрес';
    signUpFormBodyLogin.required = true;
    signUpFormBodyLogin.pattern = '^(?:\\d{10}|\\w+@\\w+\\.\\w{2,3})$';
    signUpFormBodyLogin.oninput = (e) => {
      const target = e.target as HTMLInputElement;
      const regex = target.pattern;
      if (target.value.search(regex) === -1) {
        target.parentElement?.classList.add('signUp-form__input--invalid');
        target.parentElement?.classList.remove('signUp-form__input--valid');
      } else {
        target.parentElement?.classList.add('signUp-form__input--valid');
        target.parentElement?.classList.remove('signUp-form__input--invalid');
      }

      if (String(target.value.length) === '0') {
        target.parentElement?.classList.remove('signUp-form__input--invalid');
        target.parentElement?.classList.remove('signUp-form__input--valid');
      }
    };

    const signUpFormBodyFirstLastNameWrapper = createHtmlElement(['signUp-form-input-wrapper'], 'div');
    const signUpFormBodyFirstLastName = createHtmlElement(
      ['signUp-form__first-last-name', 'signUp-form__input'],
      'input'
    ) as HTMLInputElement;
    signUpFormBodyFirstLastName.placeholder = 'Имя и фамилия';
    signUpFormBodyFirstLastName.required = true;
    signUpFormBodyFirstLastName.oninput = (e) => {
      const target = e.target as HTMLInputElement;
      if (target.value.length > 3) {
        target.parentElement?.classList.remove('signUp-form__input--invalid');
        target.parentElement?.classList.add('signUp-form__input--valid');
      } else {
        target.parentElement?.classList.add('signUp-form__input--invalid');
        target.parentElement?.classList.remove('signUp-form__input--valid');
      }
      if (target.value === '') {
        target.parentElement?.classList.remove('signUp-form__input--invalid');
        target.parentElement?.classList.remove('signUp-form__input--valid');
      }
    };

    const signUpFormBodyUserNameWrapper = createHtmlElement(['signUp-form-input-wrapper'], 'div');

    const signUpFormBodyUserName = createHtmlElement(
      ['signUp-form__username', 'signUp-form__input'],
      'input'
    ) as HTMLInputElement;
    signUpFormBodyUserName.placeholder = 'Имя пользователя';
    signUpFormBodyUserName.required = true;
    signUpFormBodyUserName.oninput = (e) => {
      const target = e.target as HTMLInputElement;
      if (target.value.length > 3) {
        target.parentElement?.classList.remove('signUp-form__input--invalid');
        target.parentElement?.classList.add('signUp-form__input--valid');
      } else {
        target.parentElement?.classList.add('signUp-form__input--invalid');
        target.parentElement?.classList.remove('signUp-form__input--valid');
      }
      if (target.value === '') {
        target.parentElement?.classList.remove('signUp-form__input--invalid');
        target.parentElement?.classList.remove('signUp-form__input--valid');
      }
    };

    const signUpFormBodyPasswordWrapper = createHtmlElement(['signUp-form-input-wrapper'], 'div');
    const signUpFormBodyPassword = createHtmlElement(
      ['signUp-form__password', 'signUp-form__input'],
      'input'
    ) as HTMLInputElement;
    signUpFormBodyPassword.placeholder = 'Пароль';
    signUpFormBodyPassword.type = 'password';
    signUpFormBodyPassword.pattern = '((?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{3,20})';
    signUpFormBodyPassword.required = true;
    signUpFormBodyPassword.oninput = (e) => {
      const target = e.target as HTMLInputElement;
      const showUnshowPassword = createHtmlElement('show-unshow-password', 'div', 'Показать');
      if (!(target.nextElementSibling?.className === 'show-unshow-password')) {
        target.parentElement?.append(showUnshowPassword);
      }
      showUnshowPassword.onclick = (e) => {
        if (target.type === 'password') {
          target.type = 'text';
          showUnshowPassword.textContent = 'Скрыть';
        } else {
          showUnshowPassword.textContent = 'Показать';
          target.type = 'password';
        }
      };
      showUnshowPassword.style.position = 'absolute';
      showUnshowPassword.style.top = '9px';
      showUnshowPassword.style.right = '40px';
      showUnshowPassword.style.fontSize = '14px';
      showUnshowPassword.style.fontWeight = 'bold';
      const pattern = target.pattern;
      if (target.value.search(pattern) === -1) {
        target.parentElement?.classList.add('signUp-form__input--invalid');
        target.parentElement?.classList.remove('signUp-form__input--valid');
      } else {
        target.parentElement?.classList.remove('signUp-form__input--invalid');
        target.parentElement?.classList.add('signUp-form__input--valid');
      }
      if (target.value === '') {
        target.parentElement?.classList.remove('signUp-form__input--invalid');
        target.parentElement?.classList.remove('signUp-form__input--valid');
        target.nextElementSibling?.remove();
      }
    };

    const signUpFormBodyPolicy = createHtmlElement('signUp-form__policy', 'div');
    signUpFormBodyPolicy.innerHTML = `Люди, которые пользуются нашим сервисом, могли загрузить вашу контактную информацию в Instagram. <a href="https://www.facebook.com/help/instagram/261704639352628" target="_blank">Подробнее</a>
    <br><br>
    Регистрируясь, вы принимаете наши <a href="https://help.instagram.com/581066165581870/?locale=ru_RU">Условия</a>. Прочитайте <a href="https://www.facebook.com/privacy/policy">Политику конфиденциальности</a>, чтобы узнать, как мы получаем, используем и передаем ваши данные, а также посмотрите <a href="https://help.instagram.com/1896641480634370/">Политику в отношении файлов cookie</a>, чтобы узнать, как мы используем файлы cookie и подобные технологии.`;
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

    this.appendTo(signUpFormBodyLogin, signUpFormBodyLoginWrapper);
    this.appendTo(signUpFormBodyLoginWrapper, signUpFormBody);
    this.appendTo(signUpFormBodyFirstLastName, signUpFormBodyFirstLastNameWrapper);
    this.appendTo(signUpFormBodyFirstLastNameWrapper, signUpFormBody);
    this.appendTo(signUpFormBodyUserName, signUpFormBodyUserNameWrapper);
    this.appendTo(signUpFormBodyUserNameWrapper, signUpFormBody);
    this.appendTo(signUpFormBodyPassword, signUpFormBodyPasswordWrapper);
    this.appendTo(signUpFormBodyPasswordWrapper, signUpFormBody);
    this.appendTo(signUpFormBodyPolicy, signUpFormBody);
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
