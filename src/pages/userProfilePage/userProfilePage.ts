import { createHtmlElement } from '../../utils/createHtmlElement';
const settings_icon = require('../../assets/icons/settings-icon.svg');
import UserStoriesComponent from '../../components/userStories/userStories';
import UserPublicationsComponent from '../../components/userPublications/userPublications';
class UserProfilePage {
  wrapper: HTMLElement;
  // innerWrapper: HTMLElement;
  userStoriesComponent: UserStoriesComponent;
  userPublicaitonComponent: UserPublicationsComponent;
  constructor() {
    this.wrapper = createHtmlElement('user-profile-wrapper', 'div');
    // this.innerWrapper = createHtmlElement('user-profile-inner-wrapper', 'div');
    this.userStoriesComponent = new UserStoriesComponent();
    this.userPublicaitonComponent = new UserPublicationsComponent();
  }

  appendTo(elem: HTMLElement, toElem: HTMLElement) {
    toElem.append(elem);
  }

  renderUserAbout() {
    const userAboutWrapper = createHtmlElement('user-about-wrapper', 'div');

    // Top
    const userAboutImageWrapper = createHtmlElement('user-about-image-wrapper', 'div');
    const userImage = new Image();
    userImage.src = 'https://via.placeholder.com/150';
    userImage.className = 'user-about-image';
    this.appendTo(userImage, userAboutImageWrapper);
    this.appendTo(userAboutImageWrapper, userAboutWrapper);

    const userAboutInfoWrapper = createHtmlElement('user-about-info', 'div');
    const userAboutInfoHeader = createHtmlElement('user-about-info__header', 'div');
    this.appendTo(userAboutInfoHeader, userAboutInfoWrapper);
    const userAboutInfoHeaderUserName = createHtmlElement('user-about-info__username', 'div', 'username');
    const userAboutInfoHeaderEditButton = createHtmlElement(
      ['user-about-info__edit-button', 'button'],
      'button',
      'Редактировать профиль'
    );
    const userAboutInfoHeaderSettingsButton = createHtmlElement(
      'user-about-info__settings-button',
      'img'
    ) as HTMLImageElement;
    userAboutInfoHeaderSettingsButton.src = settings_icon;
    this.appendTo(userAboutInfoHeaderUserName, userAboutInfoHeader);
    this.appendTo(userAboutInfoHeaderEditButton, userAboutInfoHeader);
    this.appendTo(userAboutInfoHeaderSettingsButton, userAboutInfoHeader);
    this.appendTo(userAboutInfoWrapper, userAboutWrapper);

    // Middle
    const userAboutInfoData = createHtmlElement('user-about-info__data', 'div');
    this.appendTo(userAboutInfoData, userAboutInfoWrapper);
    const userAboutInfoDataPublicationsWrapper = createHtmlElement('user-about-info__publications-wrapper', 'div');
    const userAboutInfoDataPublicationsText = createHtmlElement(
      'user-about-info__publications-text',
      'div',
      'публикаций'
    );
    const userAboutInfoDataPublicationsCount = createHtmlElement(
      ['user-about-info__publications-count', 'user-about-count'],
      'span',
      '0'
    );
    this.appendTo(userAboutInfoDataPublicationsCount, userAboutInfoDataPublicationsWrapper);
    this.appendTo(userAboutInfoDataPublicationsText, userAboutInfoDataPublicationsWrapper);

    const userAboutInfoDataFollowersWrapper = createHtmlElement('user-about-info__followers-wrappers', 'div');
    const userAboutInfoDataFollowersText = createHtmlElement('user-about-info__followers-text', 'div', 'подписчиков');
    const userAboutInfoDataFollowersCount = createHtmlElement(
      ['user-about-info__followers-count', 'user-about-count'],
      'span',
      '0'
    );
    this.appendTo(userAboutInfoDataFollowersCount, userAboutInfoDataFollowersWrapper);
    this.appendTo(userAboutInfoDataFollowersText, userAboutInfoDataFollowersWrapper);

    const userAboutInfoDataSubscriptionsWrapper = createHtmlElement('user-about-info__subscriptions-wrapper', 'div');
    const userAboutInfoDataSubscriptionsText = createHtmlElement(
      'user-about-info__subscriptions-text',
      'div',
      'подписок'
    );
    const userAboutInfoDataSubscriptionsCount = createHtmlElement(
      ['user-about-info__subscriptions-count', 'user-about-count'],
      'span',
      ' 0'
    );
    this.appendTo(userAboutInfoDataSubscriptionsCount, userAboutInfoDataSubscriptionsWrapper);
    this.appendTo(userAboutInfoDataSubscriptionsText, userAboutInfoDataSubscriptionsWrapper);

    this.appendTo(userAboutInfoDataPublicationsWrapper, userAboutInfoData);
    this.appendTo(userAboutInfoDataFollowersWrapper, userAboutInfoData);
    this.appendTo(userAboutInfoDataSubscriptionsWrapper, userAboutInfoData);
    this.appendTo(userAboutInfoData, userAboutInfoWrapper);

    // Bottom
    const userAboutInfoDescriptions = createHtmlElement('user-about-info__descriptions', 'div');
    this.appendTo(userAboutInfoDescriptions, userAboutInfoWrapper);
    const userAboutInfoDescriptionsNickname = createHtmlElement('user-about-info__nickname', 'div', 'Nickname');
    const userAboutInfoDescriptionsProfession = createHtmlElement('user-about-info__profession', 'div', 'Profession');
    const userAboutInfoDescriptionsContent = createHtmlElement(
      'user-about-info__content',
      'div',
      'ContentContentContentContentContentContent'
    );
    this.appendTo(userAboutInfoDescriptionsNickname, userAboutInfoDescriptions);
    this.appendTo(userAboutInfoDescriptionsProfession, userAboutInfoDescriptions);
    this.appendTo(userAboutInfoDescriptionsContent, userAboutInfoDescriptions);
    this.appendTo(userAboutInfoDescriptions, userAboutInfoWrapper);

    // END
    this.appendTo(userAboutWrapper, this.wrapper);
    this.appendTo(this.wrapper, document.body);
  }

  renderUserStoriesComponent() {
    this.userStoriesComponent.draw();
  }

  renderUserPuplicationComponent() {
    this.userPublicaitonComponent.draw();
  }

  draw() {
    this.renderUserAbout();
    this.renderUserStoriesComponent();
    this.renderUserPuplicationComponent();
  }
}

const implementsUserProfilePage = new UserProfilePage();
export default implementsUserProfilePage;
