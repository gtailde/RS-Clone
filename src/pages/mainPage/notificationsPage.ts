import { createHtmlElement } from "../../utils/createHtmlElement";
class menuPosts {
    wrapperNotificationPages: HTMLElement;
    constructor() {
        this.wrapperNotificationPages = createHtmlElement('notification', 'div');
    }
    appendTo(elem: HTMLElement, toElem: HTMLElement) {
        toElem.append(elem);
    }
    renderNotificationsPage() {
        this.appendTo(this.wrapperNotificationPages, document.body);
        const notificationMainText = createHtmlElement('notification__text', 'h2', 'Уведомления');
        const notificationTextTime = createHtmlElement('notification__OnThisWeek', 'p', 'На этой неделе');
        const notificationProfileOnThisWeek = createHtmlElement('notification__AccountInfoOnThisWeek', 'div');
        const borderGradientHistoryAccount = createHtmlElement('borderGradientNotification', 'div');
        const pngAccountNotification = createHtmlElement('pngStoryNotification', 'div');
        const textWithSubscribe = createHtmlElement('TextInAccount', 'p', 'подписался(-ась) на ваши обнобления.')
        const buttonWithTextSubscribe = createHtmlElement('buttonSubscribe', 'div');
        const textSubscribe = createHtmlElement('textSub', 'p', 'Подписаться');
        const lineLastAndToday = createHtmlElement('LineNotificationOnThisWeekAndLateWeek', 'hr');
        this.appendTo(notificationMainText, this.wrapperNotificationPages)
        this.appendTo(notificationTextTime, this.wrapperNotificationPages)
        this.appendTo(notificationProfileOnThisWeek, this.wrapperNotificationPages)
        this.appendTo(borderGradientHistoryAccount, notificationProfileOnThisWeek)
        this.appendTo(pngAccountNotification, borderGradientHistoryAccount)
        this.appendTo(textWithSubscribe, notificationProfileOnThisWeek)
        this.appendTo(buttonWithTextSubscribe, notificationProfileOnThisWeek)
        this.appendTo(textSubscribe, buttonWithTextSubscribe);
        this.appendTo(lineLastAndToday, this.wrapperNotificationPages);
    }
    draw() {
        this.renderNotificationsPage();
    }


}
const menuNotif = new menuPosts();
export default menuNotif;