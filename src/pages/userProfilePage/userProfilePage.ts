/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createHtmlElement } from '../../utils/createHtmlElement';
const settings_icon = require('../../assets/icons/settings-icon.svg');
import UserStoriesComponent from '../../components/userStories/userStories';
import UserPublicationsComponent from '../../components/userPublications/userPublications';
import { getApi } from '../../components/api/api';

class UserProfilePage {
  wrapper: HTMLElement;
  // innerWrapper: HTMLElement;
  userStoriesComponent: UserStoriesComponent;
  userPublicaitonComponent: UserPublicationsComponent;
  id: string;
  constructor(id: string) {
    this.id = id;
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
    const userAboutImageAdd = createHtmlElement('user-about-image-add', 'form') as HTMLFormElement;
    userAboutImageAdd.id = 'addImageForm';
    const userAboutImageAddButton = createHtmlElement('user-about-image-add-button', 'input') as HTMLInputElement;
    const userAboutImageAddButtonLabel = createHtmlElement(
      'user-about-image-add-button-label',
      'label',
      'Добавить'
    ) as HTMLLabelElement;
    // userAboutImageAddButtonLabel.htmlFor = 'user-about-image-add-button';
    userAboutImageAddButton.type = 'file';
    userAboutImageAddButton.accept = 'image/*';
    userAboutImageAddButton.name = 'add';
    userAboutImageAddButton.id = 'add';
    userAboutImageAddButtonLabel.append(userAboutImageAddButton);
    userAboutImageAdd.append(userAboutImageAddButtonLabel);
    userAboutImageWrapper.append(userAboutImageAdd);

    const userImage = new Image();


    userImage.className = 'user-about-image';
    userImage.style.cursor = 'pointer';

    this.appendTo(userImage, userAboutImageWrapper);
    this.appendTo(userAboutImageWrapper, userAboutWrapper);

    // User profile photo add
    const icon = document.querySelector('.main-blockWithPages__PngProfilePage') as HTMLElement;
    userAboutImageAdd.addEventListener('change', async (e) => {
      const image = document.querySelector('.user-about-image-add-button') as HTMLInputElement;

      const uploadImage = getApi.uploadIMG(image);
      uploadImage.then((result) => {
        let userId;
        if (localStorage.getItem('userDataAccess') !== null) {

          userId = JSON.parse(localStorage.getItem('userDataAccess')!);
          console.log(result.file);
          const saveToProfile = getApi.addIMG(userId.id, 'profile', result.file);
          localStorage.setItem('img', `${result.file}`)
          userImage.src = `${result.file}`;
          icon.style.background = `url(${result.file})`;
          icon.style.backgroundRepeat = "no-repeat";
          icon.style.backgroundSize = "contain"

          saveToProfile.then(res => { console.log(res); })
        }
        // const loadImageToProfile = getApi.addIMG();
      });
    });
    let a = localStorage.getItem('img')!;
    console.log(a)
    // userImage.src = localStorage.getItem('img');

    if (localStorage.getItem('img') !== null) {
      userImage.src = a;
    } else { userImage.src = 'https://via.placeholder.com/150'; }
    console.log(localStorage)
    const userAboutInfoWrapper = createHtmlElement('user-about-info', 'div');
    const userAboutInfoHeader = createHtmlElement('user-about-info__header', 'div');
    this.appendTo(userAboutInfoHeader, userAboutInfoWrapper);
    const userAboutInfoHeaderUserName = createHtmlElement('user-about-info__username', 'div');
    getApi.getDataFromUser(this.id).then((result) => {
      userAboutInfoHeaderUserName.innerHTML = result.username;

    });
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
export default UserProfilePage;
