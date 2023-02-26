import { createHtmlElement } from "../../utils/createHtmlElement";
import drawLeftBlock from "./LeftBlock";
import drawFooter from "./footer"
import header from "./header";
import cx from "./searchPage";
import ch from "./menuSettingPosts";
import grayback from "./grayBack";
import message from "./messagePage";
import cg from "./pageWithAddPosts";
import menuNotif from "./notificationsPage";
import exportSettings from "./settingsMenu";
class MainPages {
    wrapperContainer: HTMLElement;
    Container: HTMLElement;
    line: HTMLElement;
    constructor() {
        this.Container = createHtmlElement('mainCentralContainer', 'div');
        this.line = createHtmlElement('MainleftLine', 'div');
        this.wrapperContainer = createHtmlElement('wrapper', 'div');
    }
    appendTo(elem: HTMLElement, toElem: HTMLElement) {
        toElem.append(elem);
    }
    storyBlock() {
        const secondBlock = createHtmlElement('mainCentralContainer__StoryBlock', 'div');

        this.appendTo(secondBlock, this.Container);
        for (let i = 0; i < 10; i++) {
            const Story = createHtmlElement('Story', 'div');
            this.appendTo(Story, secondBlock);
            const borderGradientStory = createHtmlElement('borderGradient', 'div');
            const pngStoryImg = createHtmlElement('pngStory', 'div');
            // pngStoryImg.style.background = `url(${link})`;
            const AccountName = createHtmlElement('nameAccount', 'p', 'test');
            this.appendTo(pngStoryImg, borderGradientStory);
            this.appendTo(borderGradientStory, Story);
            this.appendTo(AccountName, Story)
        }

    }
    contentBlock() {
        const mainCentralContainerContainerWithContent = createHtmlElement('mainCentralContainer__ContainerWithContent', 'div');
        this.appendTo(mainCentralContainerContainerWithContent, this.Container)
        const content = createHtmlElement('Content', 'div');
        for (let i = 0; i < 1; i++) {
            const HeaderPartBlockContent = createHtmlElement('Content__HeaderPart', 'div');
            this.appendTo(HeaderPartBlockContent, content);
            const borderProfileAvatarContent = createHtmlElement('borderProfileGradient', 'div');
            const PngAvatar = createHtmlElement('pngProfile', 'div');
            this.appendTo(PngAvatar, borderProfileAvatarContent);
            this.appendTo(borderProfileAvatarContent, HeaderPartBlockContent);
            const textContent = createHtmlElement('textContent', 'div');
            const textInformation = createHtmlElement('textInformation', 'div');
            this.appendTo(textContent, HeaderPartBlockContent)
            this.appendTo(textInformation, textContent);
            const nameAccontInContent = createHtmlElement('nameAccontInContent', 'div', 'Gog');
            const dot = createHtmlElement('dot', 'div', '.');
            const timeBeforeAddContent = createHtmlElement('timeBeforeAddContent', 'div', '1dn');
            this.appendTo(nameAccontInContent, textInformation);
            this.appendTo(dot, textInformation);
            this.appendTo(timeBeforeAddContent, textInformation);
            const textInformationAboutAudio = createHtmlElement('textInformationAudio', 'div');
            this.appendTo(textInformationAboutAudio, textContent)
            const HeaderPartSettingsDots = createHtmlElement('HeaderPart__dots', 'div');
            this.appendTo(HeaderPartSettingsDots, HeaderPartBlockContent)
            const contentVideoOrPicture = createHtmlElement('contentVideoOrPicture', 'div');
            this.appendTo(contentVideoOrPicture, content);
            const contentLikeCommentBookmark = createHtmlElement('contentLikeCommentBookmark', 'div');
            const like = createHtmlElement('like', 'div');
            const comment = createHtmlElement('comment', 'div');
            const share = createHtmlElement('share', 'div');
            const bookmark = createHtmlElement('bookmark', 'div');
            this.appendTo(like, contentLikeCommentBookmark);
            this.appendTo(comment, contentLikeCommentBookmark);
            this.appendTo(share, contentLikeCommentBookmark);
            this.appendTo(bookmark, contentLikeCommentBookmark);
            this.appendTo(contentLikeCommentBookmark, content);
            const likeText = createHtmlElement('likeText', 'div', 'N отметок "Нравится"');
            this.appendTo(likeText, content)
            const description = createHtmlElement("description", 'div');
            const namingAccountDescription = createHtmlElement('namingAccountDescription', 'p', 'NamingAccount');
            const textDescription = createHtmlElement('textDescription', 'p', 'Description');
            this.appendTo(namingAccountDescription, description);
            this.appendTo(textDescription, description);
            this.appendTo(description, content)
            //new file with function , with data in input
            const commentBlock = createHtmlElement('commentBlock', 'div');
            const namingAccountcComment = createHtmlElement('namingAccountDescription', 'p', 'NamingAccount');
            const textComment = createHtmlElement('textDescription', 'p', 'Comment');
            this.appendTo(namingAccountcComment, commentBlock);
            this.appendTo(textComment, commentBlock);
            this.appendTo(commentBlock, content);
            ////////////////////////////////////////////
            const InputInComment = createHtmlElement('InputInComment', 'input');
            InputInComment.setAttribute('type', 'text');
            InputInComment.setAttribute('placeholder', 'Добавитье комментарий...')
            const lineBetween = createHtmlElement('line', 'div');
            this.appendTo(InputInComment, content)
            this.appendTo(lineBetween, content)
        }
        this.appendTo(content, mainCentralContainerContainerWithContent)

    }
    rightRecommendation() {
        const rightContainer = createHtmlElement('rightContainer', 'div');
        this.appendTo(rightContainer, this.Container);
        const YourProfile = createHtmlElement('profileInfoYourAccount', 'div');
        const photoYourProfile = createHtmlElement('PhotoYourProfile', 'div');
        this.appendTo(photoYourProfile, YourProfile);
        this.appendTo(YourProfile, rightContainer);
        const textInfoAboutYourAcc = createHtmlElement('textInformationNikAndName', 'div');
        const textInfoNikName = createHtmlElement('textInformationNik', 'div', 'testingAccountName')
        const textInfoName = createHtmlElement('textInformationName', 'div', 'testingName');
        this.appendTo(textInfoNikName, textInfoAboutYourAcc);
        this.appendTo(textInfoName, textInfoAboutYourAcc);
        this.appendTo(textInfoAboutYourAcc, YourProfile)
        const buttonLinkReload = createHtmlElement('buttonLinkReload', 'div', 'Переключиться');
        this.appendTo(buttonLinkReload, YourProfile);
        const separation = createHtmlElement('separation', 'div');
        const textRecommendation = createHtmlElement('textRecommendation', 'p', 'Рекомендации для вас');
        this.appendTo(textRecommendation, separation);
        this.appendTo(separation, rightContainer);
        const all = createHtmlElement('all', 'div', 'Все');
        this.appendTo(all, separation);
        for (let i = 0; i < 5; i++) {
            const recommendation = createHtmlElement('recommendation', 'div');
            const ProfileRecommendationAccount = createHtmlElement('profileAccount', 'div');
            const photoRecommendationAccount = createHtmlElement('photoProfile', 'div');
            const textInfoRecommendationNikAndName = createHtmlElement('textInformationNikAndName', 'div')
            const textInfoRecNik = createHtmlElement('textInformationNik', 'div', 'testingAccountName');
            const textInfoRecName = createHtmlElement('textInformationName', 'div', 'testingName');
            const buttonLinkSubscribe = createHtmlElement('buttonLinkSubscribe', 'div', 'Подписаться');
            this.appendTo(photoRecommendationAccount, ProfileRecommendationAccount);
            this.appendTo(ProfileRecommendationAccount, recommendation);
            this.appendTo(recommendation, rightContainer);
            this.appendTo(textInfoRecNik, textInfoRecommendationNikAndName);
            this.appendTo(textInfoRecName, textInfoRecommendationNikAndName);
            this.appendTo(textInfoRecommendationNikAndName, ProfileRecommendationAccount)
            this.appendTo(buttonLinkSubscribe, ProfileRecommendationAccount);
        }
        const blockWithInfo = createHtmlElement('blockWithNothing', 'div');
        const Information = createHtmlElement('textBlockNothing', 'p', 'Информация');
        const Help = createHtmlElement('textBlockNothing', 'p', 'Помощь');
        const Press = createHtmlElement('textBlockNothing', 'p', 'Пресса');
        const API = createHtmlElement('textBlockNothing', 'p', 'API');
        const Work = createHtmlElement('textBlockNothing', 'p', 'Вакансии');
        const Konfidencial = createHtmlElement('textBlockNothing', 'p', 'Конфиденциальность');
        const conditions = createHtmlElement('textBlockNothing', 'p', 'Условия');
        const place = createHtmlElement('textBlockNothing', 'p', 'Места');
        const languange = createHtmlElement('textBlockNothing', 'p', 'Язык');
        const dot = createHtmlElement('textBlockNothing', 'p', '·');
        this.appendTo(Information, blockWithInfo);
        // this.appendTo(dot, blockWithInfo);
        this.appendTo(Help, blockWithInfo);
        // this.appendTo(dot, blockWithInfo);
        this.appendTo(Press, blockWithInfo);
        // this.appendTo(dot, blockWithInfo);
        this.appendTo(API, blockWithInfo);
        // this.appendTo(dot, blockWithInfo);
        this.appendTo(Work, blockWithInfo);
        // this.appendTo(dot, blockWithInfo);
        this.appendTo(Konfidencial, blockWithInfo);
        // this.appendTo(dot, blockWithInfo);
        this.appendTo(conditions, blockWithInfo);
        // this.appendTo(dot, blockWithInfo);
        this.appendTo(place, blockWithInfo);
        // this.appendTo(dot, blockWithInfo);
        this.appendTo(languange, blockWithInfo);
        this.appendTo(blockWithInfo, this.Container)
        const elementWithInfoAboutCreators = createHtmlElement('from', 'p', '©2023 INSTAGRAM FROM FIRETEAM')
        this.appendTo(elementWithInfoAboutCreators, this.Container)
    }

    renderMainPages() {

        this.appendTo(header.wrapper, this.wrapperContainer)
        this.appendTo(drawLeftBlock.wrapper, this.wrapperContainer)
        this.appendTo(this.line, this.wrapperContainer);
        this.appendTo(this.Container, this.wrapperContainer);
        this.appendTo(this.wrapperContainer, document.body);
        this.appendTo(drawFooter.wrapper, this.wrapperContainer)
    }
    handler = (e: Event): void => {
        let target = e.target as HTMLElement;
        // const textMain = document.querySelectorAll('.textMain.__active');
        // console.log(textMain)
        if (target.classList.contains("HeaderPart__dots")) {
            grayback.wrapperBlock.classList.remove('graybackground')
            grayback.wrapperBlock.classList.add('graybackground__active');
            ch.wrapperMenuPost.classList.remove('menu_active');
            ch.wrapperMenuPost.classList.add('menu');
            grayback.remove.classList.add('removeIcon_active');
            grayback.remove.classList.remove('removeIcon');
            grayback.draw();
            ch.draw();
        }
        // if (target.classList.contains('main-blockWithPages__blockWithMainSearchAndOthersPages')) {

        //     if (target.innerText === "Сообщения") {
        //         target.classList.remove('__active')
        //         message.draw();
        //         this.Container.innerHTML = ""
        //         target.removeEventListener('click', this.handler);
        //         target.children[1].classList.add('__active')
        //     }
        //     if (target.innerText === "Создать") {
        //         target.classList.remove('__active')
        //         target.classList.add('__active');
        //         target.removeEventListener('click', this.handler);
        //         drawFooter.wrapper.innerHTML = "";
        //         header.wrapper.innerHTML = "";
        //         drawLeftBlock.wrapper.innerHTML = "";
        //         this.Container.innerHTML = "";
        //         message.wrapperBlockMessagePage.innerHTML = ""
        //         message.MainBlockWithHistory.innerHTML = "";
        //         message.MainBlockWithHistory.remove();
        //         message.wrapperBlockMessagePage.remove()
        //         this.draw();
        //         target.children[1].classList.add('__active');
        //         grayback.wrapperBlock.classList.remove('graybackground')
        //         grayback.wrapperBlock.classList.add('graybackground__active');
        //         cg.wrapperBlock.innerHTML = ""
        //         grayback.remove.classList.add('removeIcon_active');
        //         grayback.remove.classList.remove('removeIcon');
        //         cg.wrapperBlock.classList.remove('blockAddPost__active');
        //         cg.wrapperBlock.classList.add('blockAddPost');
        //         grayback.draw();
        //         cg.draw();

        //     }
        // }
        if (target.classList.contains('textMain')) {

            if (target.innerHTML === "Сообщения") {

                // target.classList.add('__active');
                target.removeEventListener('click', this.handler);
                message.wrapperBlockMessagePage.innerHTML = ""
                message.MainBlockWithHistory.innerHTML = "";
                this.Container.innerHTML = ""
                message.draw();

                window.location.hash = "message"

            }
            if (target.innerHTML === "Создать") {
                // clear()
                // target.classList.add('__active');

                // drawFooter.wrapper.innerHTML = "";
                // header.wrapper.innerHTML = "";
                // drawLeftBlock.wrapper.innerHTML = "";
                // this.Container.innerHTML = "";
                // message.wrapperBlockMessagePage.innerHTML = ""
                // message.MainBlockWithHistory.innerHTML = "";
                // message.MainBlockWithHistory.remove();
                // message.wrapperBlockMessagePage.remove()
                // this.draw();
                grayback.wrapperBlock.classList.remove('graybackground')
                grayback.wrapperBlock.classList.add('graybackground__active');
                cg.wrapperBlock.innerHTML = ""
                grayback.remove.classList.add('removeIcon_active');
                grayback.remove.classList.remove('removeIcon');
                cg.wrapperBlock.classList.remove('blockAddPost__active');
                cg.wrapperBlock.classList.add('blockAddPost');
                grayback.draw();
                menuNotif.wrapperNotificationPages.innerHTML = "";
                menuNotif.wrapperNotificationPages.classList.add('notification__active');
                menuNotif.wrapperNotificationPages.classList.remove('notification');
                grayback.wrapperBlock.classList.remove('graybackground__not');
                menuNotif.wrapperNotificationPages.remove();
                cx.wrapperSearchPage.innerHTML = "";
                cx.wrapperSearchPage.classList.add('searchModalWindow__active');
                cx.wrapperSearchPage.classList.remove('searchModalWindow');
                cx.wrapperSearchPage.remove();
                window.location.hash = "create"
                cg.draw();
                target.removeEventListener('click', this.handler);
            }
            if (target.innerHTML === "Уведомления") {
                // textMain[0].classList.remove('__active')
                // target.classList.add('textMain__active');
                // target.classList.remove('textMain');
                grayback.draw();
                grayback.wrapperBlock.classList.add('graybackground__not');
                grayback.wrapperBlock.classList.remove('graybackground');
                grayback.wrapperBlock.classList.remove('graybackground__active');
                // drawFooter.wrapper.innerHTML = "";
                // header.wrapper.innerHTML = "";
                // drawLeftBlock.wrapper.innerHTML = "";
                // this.Container.innerHTML = "";
                // this.draw();
                grayback.wrapperBlock.classList.remove('graybackground');
                // message.wrapperBlockMessagePage.innerHTML = ""
                // message.MainBlockWithHistory.innerHTML = "";
                // message.MainBlockWithHistory.remove();
                // message.wrapperBlockMessagePage.remove();
                menuNotif.wrapperNotificationPages.innerHTML = ""
                if (menuNotif.wrapperNotificationPages.classList.contains('notification__active')) {
                    menuNotif.wrapperNotificationPages.classList.remove('notification__active')
                }
                // menuNotif.wrapperNotificationPages.classList.remove('notification__active');
                menuNotif.wrapperNotificationPages.classList.add('notification')
                menuNotif.draw()
                target.removeEventListener('click', this.handler);
                window.location.hash = "notification";
            }
            if (target.innerHTML === "Поисковой запрос") {
                // target.classList.add('__active');
                menuNotif.wrapperNotificationPages.innerHTML = "";
                menuNotif.wrapperNotificationPages.classList.add('notification__active');
                menuNotif.wrapperNotificationPages.classList.remove('notification');
                menuNotif.wrapperNotificationPages.remove();
                cx.wrapperSearchPage.innerHTML = "";

                // cx.wrapperSearchPage.classList.add('searchModalWindow__active');
                // cx.wrapperSearchPage.classList.remove('searchModalWindow');
                // cx.wrapperSearchPage.remove();
                grayback.draw();
                // drawFooter.wrapper.innerHTML = "";
                // header.wrapper.innerHTML = "";
                // drawLeftBlock.wrapper.innerHTML = "";
                // this.Container.innerHTML = "";
                // this.draw();
                grayback.wrapperBlock.classList.add('graybackground__not');
                grayback.wrapperBlock.classList.remove('graybackground__active');
                grayback.wrapperBlock.classList.remove('graybackground');
                // message.wrapperBlockMessagePage.innerHTML = ""
                // message.MainBlockWithHistory.innerHTML = "";
                // message.MainBlockWithHistory.remove();
                // message.wrapperBlockMessagePage.remove();
                cx.wrapperSearchPage.innerHTML = ""
                cx.wrapperSearchPage.classList.remove('searchModalWindow__active');
                cx.wrapperSearchPage.classList.add('searchModalWindow')
                cx.draw();
                target.removeEventListener('click', this.handler);
                window.location.hash = "search";
            }
            if (target.innerHTML === "Главная") {
                // target.classList.add('__active');
                target.removeEventListener('click', this.handler);
                drawFooter.wrapper.innerHTML = "";
                header.wrapper.innerHTML = "";
                drawLeftBlock.wrapper.innerHTML = "";
                this.Container.innerHTML = "";
                window.location.hash = "main"
                this.draw();
                grayback.wrapperBlock.classList.remove('graybackground');
                message.wrapperBlockMessagePage.innerHTML = ""
                message.MainBlockWithHistory.innerHTML = "";
                message.MainBlockWithHistory.remove();
                message.wrapperBlockMessagePage.remove();
                cx.wrapperSearchPage.innerHTML = ""
                cx.wrapperSearchPage.classList.add('searchModalWindow__active');
                cx.wrapperSearchPage.classList.remove('searchModalWindow')
            }
            if (target.innerHTML === "Ещё") {
                target.removeEventListener('click', this.handler);
                message.wrapperBlockMessagePage.innerHTML = ""
                message.MainBlockWithHistory.innerHTML = "";
                message.MainBlockWithHistory.remove();
                message.wrapperBlockMessagePage.remove();
                cx.wrapperSearchPage.innerHTML = ""
                // grayback.draw();
                // grayback.wrapperBlock.classList.add('graybackground__not');
                // grayback.wrapperBlock.classList.remove('graybackground__active');
                // grayback.wrapperBlock.classList.remove('graybackground');
                cx.wrapperSearchPage.classList.add('searchModalWindow__active');
                cx.wrapperSearchPage.classList.remove('searchModalWindow');

                exportSettings.wrapperSetting.classList.add('wrapperSetting__active');
                exportSettings.wrapperSetting.classList.remove('wrapperSetting');
                exportSettings.draw();


            }
        }

    }
    draw() {
        window.location.hash = "main"
        header.draw()
        drawLeftBlock.draw()
        drawFooter.draw();
        this.renderMainPages();
        this.storyBlock();
        this.contentBlock()
        this.rightRecommendation()
        this.wrapperContainer.addEventListener('click', this.handler)
    }
}
const mainPages = new MainPages();
export default mainPages;