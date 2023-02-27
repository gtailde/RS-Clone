import { createHtmlElement } from '../../utils/createHtmlElement';
const publicationsIcon = require('../../assets/icons/publications-icon.svg');
const savedIcon = require('../../assets/icons/saved-icon.svg');
const likedIcon = require('../../assets/icons/liked-icon.svg');
const commentIcon = require('../../assets/icons/comment-icon.svg');
const smileIcon = require('../../assets/icons/smile-icon.svg');
const dotsIcon = require('../../assets/icons/dots-icon.svg');
// import drawLeftBlock from '../../pages/mainPage/LeftBlock';
// import drawFooter from '../../pages/mainPage/footer';

export default class UserPublicationsComponent {
  wrapper: HTMLElement;

  constructor() {
    this.wrapper = createHtmlElement('user-publications-wrapper', 'div');
  }

  appendTo(elem: HTMLElement, toElem: HTMLElement) {
    toElem.append(elem);
  }
  appendAll(elements: HTMLElement[], to: HTMLElement) {
    elements.forEach((elem) => {
      to.append(elem);
    });
  }

  getUserPostComponent() {
    const wrapper = createHtmlElement('user-post-wrapper', 'div');
    wrapper.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      if (!target.offsetParent?.className.includes('user-post-wrapper')) {
        wrapper.remove();
      }
    });
    const innerWrapper = createHtmlElement('user-post-wrapper-inner', 'div');
    wrapper.append(innerWrapper);

    const userPostImageWrapper = createHtmlElement('user-post-image-wrapper', 'div');
    const userPostImage = createHtmlElement('user-post-image', 'img') as HTMLImageElement;
    userPostImage.src = 'https://via.placeholder.com/500';
    userPostImage.style.backgroundSize = 'cover';
    userPostImageWrapper.append(userPostImage);
    innerWrapper.append(userPostImageWrapper);

    const userPostContentWrapper = createHtmlElement('user-post-content-wrapper', 'div');
    const userPostContentHeader = createHtmlElement('user-post-content-header', 'div');
    const userPostContentHeaderIcon = createHtmlElement('user-post-content-header__icon', 'img') as HTMLImageElement;
    userPostContentHeaderIcon.src = 'https://via.placeholder.com/24';
    const userPostContentHeaderUserName = createHtmlElement('user-post-content-header__username', 'div', 'username');
    const userPostSettingsIcon = createHtmlElement('user-post-settings-icon', 'img') as HTMLImageElement;
    userPostSettingsIcon.src = dotsIcon;
    this.appendAll(
      [userPostContentHeaderIcon, userPostContentHeaderUserName, userPostSettingsIcon],
      userPostContentHeader
    );

    const userPostContentText = createHtmlElement(
      'user-post-content-text',
      'div',
      ' fsdfsdfdloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem'
    );
    userPostContentText.insertAdjacentHTML('afterbegin', '<span class="post-username">username</span>');
    const userPostContentReactions = createHtmlElement('user-post-content-reactions', 'div');
    const userPostContentLiked = createHtmlElement('user-post-content-liked', 'img') as HTMLImageElement;
    const userPostContentComments = createHtmlElement('user-post-content-comments', 'img') as HTMLImageElement;
    userPostContentLiked.src = likedIcon;
    userPostContentComments.src = commentIcon;
    this.appendAll([userPostContentLiked, userPostContentComments], userPostContentReactions);
    this.appendAll([userPostContentHeader, userPostContentText, userPostContentReactions], userPostContentWrapper);

    const userCommentsWrapper = createHtmlElement('user-post-comments-wrapper', 'div');
    const userCommentsSmilesWrapper = createHtmlElement('user-post-comments-smiles-wrapper', 'div');
    const userCommentsSmiles = createHtmlElement('user-post-comments-smiles', 'img') as HTMLImageElement;
    userCommentsSmiles.src = smileIcon;
    userCommentsSmilesWrapper.append(userCommentsSmiles);
    const userCommentsTextInput = createHtmlElement('user-post-comments-input', 'input') as HTMLInputElement;
    userCommentsTextInput.placeholder = 'Добавьте комментарий';
    const userCommentsButtonSend = createHtmlElement(
      'user-post-comments-button',
      'button',
      'Опубликовать'
    ) as HTMLButtonElement;
    userCommentsButtonSend.disabled = true;
    this.appendAll([userCommentsSmiles, userCommentsTextInput, userCommentsButtonSend], userCommentsWrapper);

    userPostContentWrapper.append(userCommentsWrapper);
    innerWrapper.append(userPostContentWrapper);
    return wrapper;
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
    UserPublicationsItemsWrapper.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;

      if (target.className.includes('user-publications-item')) {
        const component = this.getUserPostComponent(/*id, postId*/)
        document.body.prepend(component);
      }
    });
    const UserPublicationsItems = createHtmlElement('user-publications-items', 'div');
    const UserPublicationsItem = createHtmlElement('user-publications-item', 'div');
    this.appendTo(UserPublicationsItems, UserPublicationsItemsWrapper);
    this.appendTo(UserPublicationsItem, UserPublicationsItems);
    this.appendTo(UserPublicationsItemsWrapper, this.wrapper);
    this.appendTo(this.wrapper, target);
  }
}
