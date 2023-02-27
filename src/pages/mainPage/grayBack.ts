import { createHtmlElement } from "../../utils/createHtmlElement";
import ch from "./menuSettingPosts";
import cg from "./pageWithAddPosts";
import menuNotif from "./notificationsPage";
import cx from "./searchPage";
class grayBack {
    wrapperBlock: HTMLElement;
    remove: HTMLElement
    constructor() {
        this.wrapperBlock = createHtmlElement('graybackground', 'div');
        this.remove = createHtmlElement('removeIcon', 'div');
    }
    appendTo(elem: HTMLElement, toElem: HTMLElement) {
        toElem.append(elem);
    }
    gray() {
        this.appendTo(this.wrapperBlock, document.body);
        this.appendTo(this.remove, document.body)
    }
    handler = (e: Event): void => {
        let target = e.target as HTMLElement;
        if (target.classList.contains('removeIcon_active')) {
            grayback.wrapperBlock.classList.remove('graybackground__active');
            grayback.wrapperBlock.classList.add('graybackground')
            target.classList.add('removeIcon');
            target.classList.remove('removeIcon_active');
            ch.wrapperMenuPost.classList.remove('menu');
            ch.wrapperMenuPost.classList.add('menu_active');
            ch.wrapperMenuPost.innerHTML = "";
            cg.wrapperBlock.classList.remove('blockAddPost');
            cg.wrapperBlock.classList.add('blockAddPost__active');
            cg.wrapperBlock.innerHTML = "";
            cg.wrapperBlock.remove()
            window.location.hash = "main"
        }
        if (this.wrapperBlock.classList.contains('graybackground__not')) {
            menuNotif.wrapperNotificationPages.innerHTML = "";
            menuNotif.wrapperNotificationPages.classList.add('notification__active');
            menuNotif.wrapperNotificationPages.classList.remove('notification');
            this.wrapperBlock.classList.add('graybackground')
            this.wrapperBlock.classList.remove('graybackground__not')
            menuNotif.wrapperNotificationPages.remove();
            cx.wrapperSearchPage.innerHTML = "";

            cx.wrapperSearchPage.classList.add('searchModalWindow__active');
            cx.wrapperSearchPage.classList.remove('searchModalWindow');
            cx.wrapperSearchPage.remove();
            window.location.hash = "main"
        }
    }
    draw() {
        this.gray();
        this.remove.addEventListener('click', this.handler)
        this.wrapperBlock.addEventListener('click', this.handler)
    }
}
const grayback = new grayBack();
export default grayback;