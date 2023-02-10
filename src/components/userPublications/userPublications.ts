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
    const UserPublications = createHtmlElement('user-publications', 'div');
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
    this.appendTo(this.wrapper, target);
  }
}
