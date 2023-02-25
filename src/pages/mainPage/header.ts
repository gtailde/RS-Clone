import { createHtmlElement } from "../../utils/createHtmlElement";
class headerBlockInMainPages {
    wrapper: HTMLElement;
    constructor() {
        this.wrapper = createHtmlElement('header', 'header')
    }
    appendTo(elem: HTMLElement, toElem: HTMLElement) {
        toElem.append(elem);
    }
    header() {
        const header = createHtmlElement('headerBlock', 'div');
        const logo = createHtmlElement('logoContainer', 'div');
        const inputSearch = createHtmlElement('inputSearch', 'input');
        const iconNotificationInHeader = createHtmlElement('iconNotification', 'div');
        inputSearch.setAttribute('type', 'search')
        inputSearch.setAttribute('placeholder', 'Поиск');
        this.appendTo(logo, header);
        this.appendTo(inputSearch, header);
        this.appendTo(iconNotificationInHeader, header);
        this.appendTo(header, this.wrapper);
        this.appendTo(this.wrapper, document.body);
    }
    draw() {
        this.header();
    }
}
const header = new headerBlockInMainPages();
export default header;