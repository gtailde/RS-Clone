import { createHtmlElement } from "../../utils/createHtmlElement";
import messBlock from "./messageBlockWithWriteMessage";
import grayback from "./grayBack";
class messageBlockWritenMessage {
    wrapperBlockMessagePage: HTMLElement;
    MainBlockWithHistory: HTMLElement
    constructor() {
        this.wrapperBlockMessagePage = createHtmlElement('wrapperMessagePage', 'div');
        this.MainBlockWithHistory = createHtmlElement('blockWithMessageHistory', 'div');
    }
    appendTo(elem: HTMLElement, toElem: HTMLElement) {
        toElem.append(elem);
    }
    messagePage() {
        this.appendTo(this.wrapperBlockMessagePage, document.body);
        const blockWithNamingAndReseelectAccount = createHtmlElement('blockWithNamingAndReselectAccount', 'div');
        const namingYourAccound = createHtmlElement('nameYourAccountInMessagePage', 'p', 'Name');
        const imgArrowMessageBlock = createHtmlElement('imgReselectACCOUNT', 'div');
        const imgWriteMessage = createHtmlElement('imgWritter', 'div');
        const blockWithAccountMessage = createHtmlElement('blockWithAccountMessage', 'div');
        const profileInfoInBlockWithAccountMessage = createHtmlElement('profileInfo', 'div');
        const imgProfileIconMessage = createHtmlElement('profileOnMessage', 'div');
        const blockWithInfoWithAccount = createHtmlElement('blockWithNameAndOtherInfo', 'div');
        const NameInBlock = createHtmlElement('name', 'p', 'naming');
        const statusAccountOrSendingMessage = createHtmlElement('statusAccountOrSendingMessage', 'div');
        const nameAccountInStatus = createHtmlElement('statusName', 'p', 'kfkfkddd');
        const dotStatus = createHtmlElement('dot', 'div', '.');
        const timingInStatus = createHtmlElement('timing', 'div', '71 days');
        this.appendTo(blockWithNamingAndReseelectAccount, this.wrapperBlockMessagePage);
        this.appendTo(profileInfoInBlockWithAccountMessage, blockWithNamingAndReseelectAccount)
        this.appendTo(namingYourAccound, blockWithNamingAndReseelectAccount);
        this.appendTo(imgArrowMessageBlock, blockWithNamingAndReseelectAccount);
        this.appendTo(imgWriteMessage, blockWithNamingAndReseelectAccount);
        this.appendTo(blockWithAccountMessage, this.wrapperBlockMessagePage)
        this.appendTo(profileInfoInBlockWithAccountMessage, blockWithAccountMessage);
        this.appendTo(imgProfileIconMessage, profileInfoInBlockWithAccountMessage);
        this.appendTo(blockWithInfoWithAccount, profileInfoInBlockWithAccountMessage)
        this.appendTo(NameInBlock, blockWithInfoWithAccount);
        this.appendTo(statusAccountOrSendingMessage, blockWithInfoWithAccount);
        this.appendTo(nameAccountInStatus, statusAccountOrSendingMessage);
        this.appendTo(dotStatus, statusAccountOrSendingMessage);
        this.appendTo(timingInStatus, statusAccountOrSendingMessage)


    }
    renderMessageBlockWithZeroMessage() {
        this.appendTo(this.MainBlockWithHistory, this.wrapperBlockMessagePage)
        const imgIconsWithPlaneInMessage = createHtmlElement('imgIconsWithPlane', 'div');
        const textMessageBlockFirst = createHtmlElement('textYourMessage', 'h1', 'Ваши сообщения');
        const textMessageBlockSecond = createHtmlElement('textYourMessageSecond', 'p', 'Отправляйте личные фото и сообщения другу или группе.');
        const buttonWriteMessage = createHtmlElement('buttonWriteMessage', 'button', 'Отправить сообщение')
        this.appendTo(imgIconsWithPlaneInMessage, this.MainBlockWithHistory);
        this.appendTo(textMessageBlockFirst, this.MainBlockWithHistory);
        this.appendTo(textMessageBlockSecond, this.MainBlockWithHistory);
        this.appendTo(buttonWriteMessage, this.MainBlockWithHistory)
    }
    renderMessageBlockWithSomeMessage() {
        const messageBlock = createHtmlElement('blockWithMessageHistory__messageBlock__active', 'div');
        const headerPart = createHtmlElement('messageBlock__headerPartWithAccountInfo', 'div')
        const mainPart = createHtmlElement('blockWithMessageHistory__messageBlock__main', 'div')
        const footerPart = createHtmlElement('blockWithMessageHistory__messageBlock__footer', 'div')
        const imageProfileMessage = createHtmlElement('messageBlock__headerPartWithAccountInfo__photoImg', 'div');
        const blockWithTextInfoAboutAcount = createHtmlElement('messageBlock__headerPartWithAccountInfo__blockWithNameAndTiming', 'div');
        const nameAccountInBlock = createHtmlElement('messageBlock__headerPartWithAccountInfo__blockWithNameAndTiming__h3', 'h3', 'Naming');
        const textWithTimingInfo = createHtmlElement('messageBlock__headerPartWithAccountInfo__blockWithNameAndTiming__timing', 'p', 'Today 1 hr ago');
        const headerBlockwithIcons = createHtmlElement('messageBlock__headerPartWithAccountInfo__blockWithPng', 'div');
        const imageWithCallIcons = createHtmlElement('ba1', 'div');
        const imageWithVideoCallIcons = createHtmlElement('ba2', 'div');
        const imageWithInfoAndSettingIcons = createHtmlElement('ba3', 'div');
        const iconProfileMessageInMessage = createHtmlElement('iconProfMessage', 'div');
        const blockWithNotYourMessage = createHtmlElement('messagenotYour', 'div');
        const messageNotYouText = createHtmlElement('messageNotYour', 'p', 'hghghgufhgufhgfuhgu');
        const blockWithYouMessage = createHtmlElement('YourMessaage', 'div');
        const textWithYouMessage = createHtmlElement('messageYour', 'p', 'ghghghghghgh');
        const footerBlock = createHtmlElement('foterBlockWithInput', 'div');
        const iconsOnInputFirst = createHtmlElement('FirstSmile', 'div');
        const inputWithMessage = createHtmlElement('inputWriteMessage', 'input');
        inputWithMessage.setAttribute('type', 'text');
        inputWithMessage.setAttribute('placeholder', 'Напишите сообщение...')
        const iconsOnInputSecond = createHtmlElement('secondIconInputPhoto', 'div');
        const iconsOnInputTheerd = createHtmlElement('TheerdIconInputLike', 'div')
        const buttonSendMessage = createHtmlElement('buttonSendMessage', 'button', 'Отправить');
        this.appendTo(messageBlock, this.MainBlockWithHistory)
        this.appendTo(headerPart, messageBlock);
        this.appendTo(mainPart, messageBlock)
        this.appendTo(imageProfileMessage, headerPart);
        this.appendTo(blockWithTextInfoAboutAcount, headerPart)
        this.appendTo(nameAccountInBlock, blockWithTextInfoAboutAcount);
        this.appendTo(textWithTimingInfo, blockWithTextInfoAboutAcount);
        this.appendTo(headerBlockwithIcons, headerPart);
        this.appendTo(imageWithCallIcons, headerBlockwithIcons);
        this.appendTo(imageWithVideoCallIcons, headerBlockwithIcons);
        this.appendTo(imageWithInfoAndSettingIcons, headerBlockwithIcons);
        this.appendTo(blockWithNotYourMessage, mainPart);
        this.appendTo(iconProfileMessageInMessage, blockWithNotYourMessage);
        this.appendTo(messageNotYouText, blockWithNotYourMessage);
        this.appendTo(blockWithYouMessage, mainPart);
        this.appendTo(textWithYouMessage, blockWithYouMessage);
        this.appendTo(footerPart, messageBlock)
        this.appendTo(footerBlock, footerPart);
        this.appendTo(iconsOnInputFirst, footerBlock);
        this.appendTo(inputWithMessage, footerBlock);
        this.appendTo(iconsOnInputSecond, footerBlock);
        this.appendTo(iconsOnInputTheerd, footerBlock);
        this.appendTo(buttonSendMessage, footerBlock);
    }
    handler = (e: Event): void => {
        let target = e.target as HTMLElement;
        if (target.classList.contains('imgWritter')) {
            grayback.wrapperBlock.classList.add('graybackground__active');
            grayback.wrapperBlock.classList.remove('graybackground');
            grayback.draw();
            messBlock.draw()
        }
        if (target.classList.contains('buttonWriteMessage')) {
            grayback.wrapperBlock.classList.add('graybackground__active');
            grayback.wrapperBlock.classList.remove('graybackground');
            grayback.draw();
            messBlock.draw()
        }

    }
    draw() {
        this.messagePage();
        this.renderMessageBlockWithZeroMessage();
        this.wrapperBlockMessagePage.addEventListener('click', this.handler)
    }


}
const message = new messageBlockWritenMessage();
export default message;