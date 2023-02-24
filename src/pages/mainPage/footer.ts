import { createHtmlElement } from "../../utils/createHtmlElement";
class footerBlockInLowPermission {
    wrapper: HTMLElement;
    constructor() {
        this.wrapper = createHtmlElement('footer', 'footer')
    }
    appendTo(elem: HTMLElement, toElem: HTMLElement) {
        toElem.append(elem);
    }
    footer() {
        this.appendTo(this.wrapper, document.body);
        const blockWithIcons = createHtmlElement('blockWithIcons', 'div');
        const iconMain = createHtmlElement('iconMain', 'div');
        const iconReals = createHtmlElement('iconReels', 'div');
        const iconSearchInFooter = createHtmlElement('iconSearchInFooter', 'div')
        const iconCreateInFooter = createHtmlElement('iconCreate', 'div');
        const iconMessageInFooter = createHtmlElement('iconMessage', 'div');
        const iconProfileInFooter = createHtmlElement('iconProfile', 'div');
        this.appendTo(blockWithIcons, this.wrapper);
        this.appendTo(iconMain, blockWithIcons);
        this.appendTo(iconSearchInFooter, blockWithIcons);
        this.appendTo(iconReals, blockWithIcons);
        this.appendTo(iconCreateInFooter, blockWithIcons);
        this.appendTo(iconMessageInFooter, blockWithIcons)
        this.appendTo(iconProfileInFooter, blockWithIcons);
    }
    draw() {
        this.footer();
    }
}
const drawFooter = new footerBlockInLowPermission();
export default drawFooter;