import { createHtmlElement } from "../../utils/createHtmlElement";
import drawLeftBlock from "./LeftBlock";
import drawFooter from "./footer"
import header from "./header";
class MainPages {
    Container: HTMLElement;
    line: HTMLElement;
    constructor() {
        this.Container = createHtmlElement('mainCentralContainer', 'div');
        this.line = createHtmlElement('MainleftLine', 'div');
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
        for (let i = 0; i < 4; i++) {


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
        const wrapperContainer = createHtmlElement('wrapper', 'div');
        this.appendTo(drawLeftBlock.wrapper, wrapperContainer)
        this.appendTo(this.line, wrapperContainer);
        this.appendTo(this.Container, wrapperContainer); 4
        this.appendTo(wrapperContainer, document.body);
    }
    draw() {
        header.draw()
        drawLeftBlock.draw()
        this.renderMainPages();
        this.storyBlock();
        this.contentBlock()
        this.rightRecommendation()
        drawFooter.draw()

    }
}
const mainPages = new MainPages();
export default mainPages;