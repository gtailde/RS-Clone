import { createHtmlElement } from "../../utils/createHtmlElement";
import UserProfilePage from "../userProfilePage/userProfilePage";
class leftBlockWithAnyPages {
    [x: string]: any;
    wrapper: HTMLElement;
    constructor() {
        this.wrapper = createHtmlElement('left-Container', 'div');
    }
    appendTo(elem: HTMLElement, toElem: HTMLElement) {
        toElem.append(elem);
    }
    renderInstagramLeftBlock() {
        const iconAboutWrapper = createHtmlElement('left-Container__logoLinkOnMainPage', 'a')
        iconAboutWrapper.setAttribute('href', '#');
        const iconLogo = createHtmlElement('left-Container__logoContainer', 'div');
        const blockWithPages = createHtmlElement('main-blockWithPages', 'div');
        const blockWithMain = createHtmlElement('main-blockWithPages__blockWithMainSearchAndOthersPages', 'div');
        const iconMain = createHtmlElement('main-blockWithPages__PngMainPage__active', 'div');
        const textMain = createHtmlElement('textMain', 'p', 'Главная');
        const blockWithSearch = createHtmlElement('main-blockWithPages__blockWithMainSearchAndOthersPages', 'div');
        const iconSearch = createHtmlElement(['png', 'main-blockWithPages__PngSearchPage'], 'div');
        const textSearch = createHtmlElement('textMain', 'p', 'Поисковой запрос');
        const blockWithInterestingPost = createHtmlElement('main-blockWithPages__blockWithMainSearchAndOthersPages', 'div');
        const iconInterestingPost = createHtmlElement(['png', 'main-blockWithPages__PngInterestingPage'], 'div');
        const textInterestingPost = createHtmlElement('textMain', 'p', 'Интересное');
        const blockWithMessage = createHtmlElement('main-blockWithPages__blockWithMainSearchAndOthersPages', 'div');
        const iconMessage = createHtmlElement(['png', 'main-blockWithPages__PngMessagePage'], 'div');
        const textMessage = createHtmlElement('textMain', 'p', 'Сообщения');
        const blockWithNotification = createHtmlElement('main-blockWithPages__blockWithMainSearchAndOthersPages', 'div');
        const iconNotification = createHtmlElement(['png', 'main-blockWithPages__PngNotesPage'], 'div');
        const textNotification = createHtmlElement('textMain', 'p', 'Уведомления');
        const blockWithCreate = createHtmlElement('main-blockWithPages__blockWithMainSearchAndOthersPages', 'div');
        const iconCreate = createHtmlElement(['png', 'main-blockWithPages__PngCreatePage'], 'div');
        const textCreate = createHtmlElement('textMain', 'p', 'Создать');
        const blockWithProfile = createHtmlElement('main-blockWithPages__blockWithMainSearchAndOthersPages', 'div');
        const iconProfile = createHtmlElement(['png', 'main-blockWithPages__PngProfilePage'], 'div');
        const textProfile = createHtmlElement('textMain', 'p', 'Профиль');
        const blockWithElse = createHtmlElement(['main-blockWithPages__blockWithMainSearchAndOthersPages', 'else'], 'div');
        const iconElse = createHtmlElement(['png', 'main-blockWithPages__PngMenuPage'], 'div');
        const textElse = createHtmlElement('textMain', 'p', 'Ещё');
        this.appendTo(iconCreate, blockWithCreate);
        this.appendTo(textCreate, blockWithCreate);
        this.appendTo(iconProfile, blockWithProfile);
        this.appendTo(textProfile, blockWithProfile);
        this.appendTo(iconSearch, blockWithSearch);
        this.appendTo(textSearch, blockWithSearch);
        this.appendTo(iconElse, blockWithElse);
        this.appendTo(textElse, blockWithElse);
        this.appendTo(iconMain, blockWithMain)
        this.appendTo(textMain, blockWithMain)
        this.appendTo(iconNotification, blockWithNotification);
        this.appendTo(textNotification, blockWithNotification);
        this.appendTo(iconMessage, blockWithMessage)
        this.appendTo(textMessage, blockWithMessage)
        this.appendTo(iconInterestingPost, blockWithInterestingPost);
        this.appendTo(textInterestingPost, blockWithInterestingPost);
        this.appendTo(blockWithMain, blockWithPages)
        this.appendTo(blockWithSearch, blockWithPages);
        this.appendTo(blockWithInterestingPost, blockWithPages)
        this.appendTo(blockWithMessage, blockWithPages);
        this.appendTo(blockWithNotification, blockWithPages);
        this.appendTo(blockWithCreate, blockWithPages);
        this.appendTo(blockWithProfile, blockWithPages);
        this.appendTo(blockWithElse, blockWithPages);
        this.appendTo(iconLogo, iconAboutWrapper)
        this.appendTo(this.wrapper, document.body)
        this.appendTo(iconAboutWrapper, this.wrapper)
        this.appendTo(blockWithPages, this.wrapper)
        const srcImage = document.querySelector('.user-about-image') as HTMLImageElement;
        let link = localStorage.getItem('img')!;
        console.log(link);
        if (localStorage.getItem('img') !== null) {
            iconProfile.style.background = `url(${link})`;
            iconProfile.style.backgroundRepeat = "no-repeat";
            iconProfile.style.backgroundSize = "contain"
        }
        else {
            iconProfile.style.background = `url(${require('../../assets/icons/profile.jpg')})`;
            iconProfile.style.backgroundRepeat = "no-repeat";
            iconProfile.style.backgroundSize = "contain"
        }
    }
    // handler = () => {
    //     const checker = document.querySelectorAll('.textMain');
    //     console.log(checker);
    //     var ell;
    //     checker.forEach(el => {
    //         if (el.classList.contains('__active')) {
    //             ell = el;

    //         }
    //     })
    //     console.log(ell)
    // }
    draw() {
        this.renderInstagramLeftBlock();

        // this.handler()

    }
}
const drawLeftBlock = new leftBlockWithAnyPages();
export default drawLeftBlock;
