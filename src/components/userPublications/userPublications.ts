import { createHtmlElement } from '../../utils/createHtmlElement';
const publicationsIcon = require('../../assets/icons/publications-icon.svg');
const savedIcon = require('../../assets/icons/saved-icon.svg');

export default class UserPublicationsComponent {
  wrapper: HTMLElement;

  constructor() {
    this.wrapper = createHtmlElement('user-publications-wrapper', 'div');
  }

  appendTo(elem: HTMLElement, toElem: HTMLElement) {
    toElem.append(elem);
  }

  draw() {
    const target = document.querySelector('.user-profile-wrapper') as HTMLElement;
    const UserPublications = createHtmlElement('user-publications', 'div') as HTMLElement;
    UserPublications.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      if (target.className === 'user-publications__posts__content') {
        target.parentElement?.classList.add('user-publications__header--active');
        target.parentElement?.nextElementSibling?.classList.remove('user-publications__header--active');
      }
      if (target.className === 'user-publications__saved') {
        target.parentElement?.classList.add('user-publications__header--active');
        target.parentElement?.previousElementSibling?.classList.remove('user-publications__header--active');
      }
    });
    const UserPublicationsHeader = createHtmlElement('user-publications__header', 'div');
    const UserPublicationsPosts = createHtmlElement(
      ['user-publications__posts', 'user-publications__item__wrapper'],
      'div'
    );
    const UserPublicationsPostsIcon = createHtmlElement('user-publications__posts__icon', 'img') as HTMLImageElement;
    UserPublicationsPostsIcon.src = publicationsIcon;
    const UserPublicationsPostsContent = createHtmlElement('user-publications__posts__content', 'a', 'Публикации');
    this.appendTo(UserPublicationsPostsIcon, UserPublicationsPosts);
    this.appendTo(UserPublicationsPostsContent, UserPublicationsPosts);
    const UserPublicationsSaved = createHtmlElement(
      ['user-publications__saved', 'user-publications__item__wrapper'],
      'div'
    );
    const UserPublicationsSavedIcon = createHtmlElement('user-publications__saved__icon', 'img') as HTMLImageElement;
    UserPublicationsSavedIcon.src = savedIcon;
    const UserPublicationsSavedContent = createHtmlElement('user-publications__saved', 'a', 'Сохраненное');
    this.appendTo(UserPublicationsSavedIcon, UserPublicationsSaved);
    this.appendTo(UserPublicationsSavedContent, UserPublicationsSaved);

    this.appendTo(UserPublicationsSavedContent, UserPublicationsSaved);
    this.appendTo(UserPublicationsPosts, UserPublicationsHeader);
    this.appendTo(UserPublicationsSaved, UserPublicationsHeader);
    this.appendTo(UserPublicationsHeader, UserPublications);
    this.appendTo(UserPublications, this.wrapper);

    const UserPublicationsItemsWrapper = createHtmlElement('user-publications-items-wrapper', 'div');
    const UserPublicationsItems = createHtmlElement('user-publications-items', 'div');
    const UserPublicationsItem = createHtmlElement('user-publications-item', 'div');
    this.appendTo(UserPublicationsItems, UserPublicationsItemsWrapper);
    this.appendTo(UserPublicationsItem, UserPublicationsItems);
    this.appendTo(UserPublicationsItemsWrapper, this.wrapper);
    this.appendTo(this.wrapper, target);
  }
}
