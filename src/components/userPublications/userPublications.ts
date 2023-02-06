import { createHtmlElement } from '../../utils/createHtmlElement';
const publicationsIcon = require('../../assets/icons/publications-icon.svg');
const savedIcon = require('../../assets/icons/saved-icon.svg');

class UserPublicationsComponent {
  wrapper: HTMLElement;

  constructor() {
    this.wrapper = createHtmlElement('user-publications-wrapper', 'div', 'user-publications-wrapper');
  }

  appendTo(elem: HTMLElement, toElem: HTMLElement) {
    toElem.append(elem);
  }
}
