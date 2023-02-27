import { createHtmlElement } from "../../utils/createHtmlElement";
import grayback from "./grayBack";
class messageBlockWritenMessage {
    wrapperBlockWritenMessage: HTMLElement;
    header: HTMLElement;
    footer: HTMLElement;
    main: HTMLElement;
    constructor() {
        this.wrapperBlockWritenMessage = createHtmlElement('wrapper1', 'div');
        this.header = createHtmlElement('headerMessageBlockForSearch', 'header');
        this.main = createHtmlElement('mainMessageBlockForSearch', 'main')
        this.footer = createHtmlElement('footerMessageBlockForSearch', 'footer')
    }
    appendTo(elem: HTMLElement, toElem: HTMLElement) {
        toElem.append(elem);
    }
    renderMessageBlockWithWriten() {
        this.appendTo(this.wrapperBlockWritenMessage, document.body);
        this.appendTo(this.header, this.wrapperBlockWritenMessage);
        this.appendTo(this.main, this.wrapperBlockWritenMessage);
        this.appendTo(this.footer, this.wrapperBlockWritenMessage);
        const imgHeaderCloseButton = createHtmlElement('iconCancleButton', 'div');
        const textHeaderNamingPage = createHtmlElement('header__namaing', 'p', 'Новое сообщение');
        const linkOnSecondPage = createHtmlElement('Link', 'a', 'Далее');
        const lineHeaderMain = createHtmlElement('lineheaderMain', 'hr');
        linkOnSecondPage.setAttribute('href', '#');
        const textWho = createHtmlElement('main__Who', 'p', 'Кому:');
        const inputSearchAccountProfile = createHtmlElement('SearchPeople', 'input');
        inputSearchAccountProfile.setAttribute('placeholder', 'Поиск...');
        inputSearchAccountProfile.setAttribute('type', 'search');
        const lineFooterMain = createHtmlElement('supperLine', 'hr');
        const textWithSearchingSuccessed = createHtmlElement('successed', 'p', 'Найденные')
        const profileSearchAccount = createHtmlElement('profileSearchAccount', 'div');
        const imgProfileAcount = createHtmlElement('profileMessageImg', 'div');
        const namingAccountSearchProfile = createHtmlElement('namingAccountSearch', 'div', 'ghghghghghg');
        const checker = createHtmlElement('checker', 'div')
        this.appendTo(imgHeaderCloseButton, this.header)
        this.appendTo(textHeaderNamingPage, this.header)
        this.appendTo(linkOnSecondPage, this.header)
        this.appendTo(lineHeaderMain, this.wrapperBlockWritenMessage)
        this.appendTo(textWho, this.main)
        this.appendTo(inputSearchAccountProfile, this.main)
        this.appendTo(lineFooterMain, this.wrapperBlockWritenMessage)
        this.appendTo(textWithSearchingSuccessed, this.footer)
        this.appendTo(profileSearchAccount, this.footer)
        this.appendTo(imgProfileAcount, profileSearchAccount)
        this.appendTo(namingAccountSearchProfile, profileSearchAccount)
        this.appendTo(checker, profileSearchAccount);
    }
    handler = (e: Event): void => {
        let target = e.target as HTMLElement;
        if (target.classList.contains('iconCancleButton')) {
            grayback.wrapperBlock.classList.add('graybackground')
            grayback.wrapperBlock.classList.remove('graybackground__active');
            this.header.innerHTML = "";
            this.main.innerHTML = "";
            this.footer.innerHTML = "";
            this.wrapperBlockWritenMessage.innerHTML = "";
            this.wrapperBlockWritenMessage.remove()
            grayback.wrapperBlock.remove();
            grayback.remove.remove()

        }
        if (target.classList.contains('checker')) {
            target.classList.toggle('checker__active');
        }

    }
    draw() {
        this.renderMessageBlockWithWriten();
        this.wrapperBlockWritenMessage.addEventListener('click', this.handler)
    }
}
const messBlock = new messageBlockWritenMessage();
export default messBlock;