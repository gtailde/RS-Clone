import { createHtmlElement } from '../../utils/createHtmlElement';
// type TUserStoriesData = {
//   title: string;
//   image: HTMLImageElement;
//   data: string[];
// };

export default class UserStoriesComponent {
  wrapper: HTMLElement;
  // userStoriesData: TUserStoriesData;
  constructor() {
    this.wrapper = createHtmlElement('user-stories-wrapper', 'div');
    // this.userStoriesData = userStoriesObject;
  }

  appendTo(elem: HTMLElement, toElem: HTMLElement) {
    toElem.append(elem);
  }
  draw() {
    const target = document.body as HTMLElement;
    // const arrowLeft = createHtmlElement('user-stories-arrow--left', 'img') as HTMLImageElement;
    // const arrowRight = createHtmlElement('user-stories-arrow--right', 'img') as HTMLImageElement;
    const userStoriesItem = createHtmlElement('user-stories-item', 'div');
    const userStoriesItemImage = createHtmlElement('user-stories-item__image', 'img') as HTMLImageElement;
    userStoriesItemImage.src = 'https://via.placeholder.com/77';
    const userStoriesItemText = createHtmlElement('user-stories-item__text', 'div', 'Title');

    const userStoriesItemAddButtonWrapper = createHtmlElement(
      ['user-stories-item', 'user-stories-item__button-wrapper'],
      'div'
    );
    const userStoriesAddButton = createHtmlElement(
      ['user-stories-item__image', 'user-stories-item__button'],
      'img'
    ) as HTMLImageElement;
    userStoriesAddButton.src = 'https://via.placeholder.com/77';
    const userStoriesAddButtonText = createHtmlElement('user-stories-item__image', 'div', 'Добавить');

    this.appendTo(userStoriesAddButton, userStoriesItemAddButtonWrapper);
    this.appendTo(userStoriesAddButtonText, userStoriesItemAddButtonWrapper);
    this.appendTo(userStoriesItemImage, userStoriesItem);
    this.appendTo(userStoriesItemText, userStoriesItem);
    this.appendTo(userStoriesItem, this.wrapper);

    this.appendTo(userStoriesItemAddButtonWrapper, this.wrapper);

    this.appendTo(this.wrapper, target);
  }
}
