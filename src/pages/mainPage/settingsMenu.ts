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
import mainPages from "./mainPage";
class settingsMenu {
    wrapperSetting: HTMLElement;
    constructor() {
        this.wrapperSetting = createHtmlElement('wrapperSetting', 'div');
    }
    appendTo(elem: HTMLElement, toElem: HTMLElement) {
        toElem.append(elem);
    }
    settingsMenu() {
        this.appendTo(this.wrapperSetting, document.body);
        const changeThemeWhiteAndDark = createHtmlElement('changeThemeWhiteAndDark', 'button', 'Черная тема');
        changeThemeWhiteAndDark.setAttribute('data-show', 'true');
        this.appendTo(changeThemeWhiteAndDark, this.wrapperSetting)

        // changeThemeWhiteAndDark.style.backgroundColor = "white"
        // changeThemeWhiteAndDark.style.color = "black"
    }
    handler = (e: Event): void => {
        let j = mainPages.Container.querySelectorAll('.nameAccontInContent');
        let dot = mainPages.Container.querySelectorAll('.dot');
        let comment = mainPages.Container.querySelectorAll('.namingAccountDescription');
        let inputInCommentBlock = mainPages.Container.querySelectorAll('.InputInComment');
        let contentVideo = mainPages.Container.querySelectorAll(".contentVideoOrPicture");
        let textInformationNick = mainPages.Container.querySelectorAll(".textInformationNik");
        let photoProfile = mainPages.Container.querySelectorAll('.photoProfile')
        let photoYourProf = mainPages.Container.querySelector('.PhotoYourProfile') as HTMLElement;
        let all = mainPages.Container.querySelector('.all') as HTMLElement;
        const logo = drawLeftBlock.wrapper.querySelector('.left-Container__logoContainer') as HTMLElement;
        const iconMain = drawLeftBlock.wrapper.querySelector('.main-blockWithPages__PngMainPage__active') as HTMLElement;
        const iconSearch = drawLeftBlock.wrapper.querySelector('.main-blockWithPages__PngSearchPage') as HTMLElement;
        const iconInterestings = drawLeftBlock.wrapper.querySelector('.main-blockWithPages__PngInterestingPage') as HTMLElement;
        const iconMessages = drawLeftBlock.wrapper.querySelector('.main-blockWithPages__PngMessagePage') as HTMLElement;
        const iconNotify = drawLeftBlock.wrapper.querySelector('.main-blockWithPages__PngNotesPage') as HTMLElement;
        const IconCreates = drawLeftBlock.wrapper.querySelector('.main-blockWithPages__PngCreatePage') as HTMLElement;
        const iconProfile = drawLeftBlock.wrapper.querySelector('.main-blockWithPages__PngProfilePage') as HTMLElement;
        const iconElsE = drawLeftBlock.wrapper.querySelector('.main-blockWithPages__PngMenuPage') as HTMLElement;
        const dotsINHeader = mainPages.Container.querySelector('.HeaderPart__dots') as HTMLElement;
        const likes = mainPages.Container.querySelector('.like') as HTMLElement;
        const commentBlockInContent = mainPages.Container.querySelector('.comment') as HTMLElement;
        const Replace = mainPages.Container.querySelector('.share') as HTMLElement;
        const bookmarkInContent = mainPages.Container.querySelector('.bookmark') as HTMLElement;
        const nLike = mainPages.Container.querySelector('.likeText') as HTMLElement;
        const searchNameHeader = cx.wrapperSearchPage.querySelector('.nameSearchMenu');
        const textwhenSearch = cx.wrapperSearchPage.querySelector('.textwhen');
        const nameProfileAccountSearch = cx.wrapperSearchPage.querySelector('.nameProfileAccountSearch');
        console.log(logo)

        let target = e.target as HTMLElement;
        if (target.classList.contains('wrapperSetting__active')) {
            target.classList.remove('wrapperSetting__active');
            target.classList.add('wrapperSetting')
        }
        if (target.classList.contains('wrapperSetting')) {
            target.classList.remove('wrapperSetting');
            target.classList.add('wrapperSetting__active')
        }
        if (target.classList.contains('changeThemeWhiteAndDark')) {
            if (target.getAttribute('data-show') === "true") {
                target.setAttribute('data-show', "false");
                target.innerHTML = "Белая тема";
                target.style.backgroundColor = "black";
                target.style.color = "white";
                nLike.style.color = "white"
                cx.wrapperSearchPage.style.background = "black";

                dotsINHeader.style.backgroundImage = `url(${require('../../assets/icons/iconsForWhite/threeDot.png')})`;
                dotsINHeader.style.backgroundRepeat = "no-repeat";
                dotsINHeader.style.backgroundSize = "contain";
                logo.style.backgroundImage = `url(${require('../../assets/icons/iconsForWhite/PickForName.png')})`;
                logo.style.backgroundRepeat = "no-repeat";
                logo.style.backgroundSize = "contain";
                likes.style.backgroundImage = `url(${require('../../assets/icons/iconsForWhite/WhiteHeart.png')})`;
                likes.style.backgroundRepeat = "no-repeat";
                likes.style.backgroundSize = "contain";
                commentBlockInContent.style.backgroundImage = `url(${require('../../assets/icons/iconsForWhite/WhiteMessageInBlock.png')})`;
                commentBlockInContent.style.backgroundRepeat = "no-repeat";
                commentBlockInContent.style.backgroundSize = "contain";
                Replace.style.backgroundImage = `url(${require('../../assets/icons/iconsForWhite/WhiteReport.png')})`;
                Replace.style.backgroundRepeat = "no-repeat";
                Replace.style.backgroundSize = "contain";
                bookmarkInContent.style.backgroundImage = `url(${require('../../assets/icons/iconsForWhite/WhiteBookmark.png')})`;
                bookmarkInContent.style.backgroundRepeat = "no-repeat";
                bookmarkInContent.style.backgroundSize = "contain";
                iconMain.style.background = `url(${require('../../assets/icons/iconsForWhite/whiteMain.png')})`;
                iconMain.style.backgroundRepeat = "no-repeat";
                iconMain.style.backgroundSize = "contain";
                iconSearch.style.background = `url(${require('../../assets/icons/iconsForWhite/WhiteSearch.png')})`;
                iconSearch.style.backgroundRepeat = "no-repeat";
                iconSearch.style.backgroundSize = "contain";
                iconInterestings.style.background = `url(${require('../../assets/icons/iconsForWhite/WhiteIntar.png')})`;
                iconInterestings.style.backgroundRepeat = "no-repeat";
                iconInterestings.style.backgroundSize = "contain";
                iconMessages.style.backgroundImage = `url(${require('../../assets/icons/iconsForWhite/WhiteMessageInBlock.png')})`;
                iconMessages.style.backgroundRepeat = "no-repeat";
                iconMessages.style.backgroundSize = "contain";
                iconNotify.style.backgroundImage = `url(${require('../../assets/icons/iconsForWhite/WhiteHeart.png')})`;
                iconNotify.style.backgroundRepeat = "no-repeat";
                iconNotify.style.backgroundSize = "contain";
                IconCreates.style.backgroundImage = `url(${require('../../assets/icons/iconsForWhite/WhiteCreate.png')})`;
                IconCreates.style.backgroundRepeat = "no-repeat";
                IconCreates.style.backgroundSize = "contain";
                iconProfile.style.backgroundImage = `url(${require('../../assets/icons/iconsForWhite/prof.jpeg')})`;
                iconProfile.style.backgroundRepeat = "no-repeat";
                iconProfile.style.backgroundSize = "contain";
                iconProfile.style.borderRadius = "12px";
                iconProfile.style.height = "24px"
                iconElsE.style.backgroundImage = `url(${require('../../assets/icons/iconsForWhite/menuWhite.png')})`;
                iconElsE.style.backgroundRepeat = "no-repeat";
                iconElsE.style.backgroundSize = "contain";
                j.forEach(el => { el.setAttribute('style', 'color:white;') })
                dot.forEach(el => { el.setAttribute('style', 'color:white;') })
                comment.forEach(el => { el.setAttribute('style', 'color:white;') })
                inputInCommentBlock.forEach(el => { el.setAttribute('style', 'background:black') })
                contentVideo.forEach(el => { el.setAttribute('style', 'background-color:white') })
                textInformationNick.forEach(el => { el.setAttribute('style', 'color:white') });
                photoProfile.forEach(el => { el.setAttribute('style', 'background-color:white') })
                photoYourProf?.setAttribute('style', 'background-color:white')
                all?.setAttribute('style', 'color:white')
                drawLeftBlock.wrapper.style.background = "black"
                drawLeftBlock.wrapper.style.color = "white"
                mainPages.line.style.borderLeft = "2px solid white"
                document.body.style.background = "black";
                document.body.style.color = "white"
            }
            else {
                // searchNameHeader.style.color = "black";
                // textwhenSearch.style.color = "black";
                // nameProfileAccountSearch.style.color = "black";
                nLike.style.color = "black"
                cx.wrapperSearchPage.style.background = "#eeeeee"
                dotsINHeader.style.backgroundImage = `url(${require('../../assets/icons/dots.png')})`;
                dotsINHeader.style.backgroundRepeat = "no-repeat";
                dotsINHeader.style.backgroundSize = "contain";
                likes.style.backgroundImage = `url(${require('../../assets/icons/heart\ \(2\).png')})`;
                likes.style.backgroundRepeat = "no-repeat";
                likes.style.backgroundSize = "contain";
                commentBlockInContent.style.backgroundImage = `url(${require('../../assets/icons/messenger.png')})`;
                commentBlockInContent.style.backgroundRepeat = "no-repeat";
                commentBlockInContent.style.backgroundSize = "contain";
                Replace.style.backgroundImage = `url(${require('../../assets/icons/plane.png')})`;
                Replace.style.backgroundRepeat = "no-repeat";
                Replace.style.backgroundSize = "contain";
                bookmarkInContent.style.backgroundImage = `url(${require('../../assets/icons/bookmark.png')})`;
                bookmarkInContent.style.backgroundRepeat = "no-repeat";
                bookmarkInContent.style.backgroundSize = "contain";
                logo.style.backgroundImage = `url(${require('../../assets/icons/Instagram_logo.svg.png')})`;
                logo.style.backgroundRepeat = "no-repeat";
                logo.style.backgroundSize = "contain";
                iconMain.style.backgroundImage = `url(${require('../../assets/icons/home_activ.png')})`;
                iconMain.style.backgroundRepeat = "no-repeat";
                iconMain.style.backgroundSize = "contain";
                iconSearch.style.background = `url(${require('../../assets/icons/svg-image.png')})`;
                iconSearch.style.backgroundRepeat = "no-repeat";
                iconSearch.style.backgroundSize = "contain";
                iconInterestings.style.background = `url(${require('../../assets/icons/compass\ \(1\).png')})`;
                iconInterestings.style.backgroundRepeat = "no-repeat";
                iconInterestings.style.backgroundSize = "contain";
                iconMessages.style.backgroundImage = `url(${require('../../assets/icons/messenger.png')})`;
                iconMessages.style.backgroundRepeat = "no-repeat";
                iconMessages.style.backgroundSize = "contain";
                iconNotify.style.backgroundImage = `url(${require('../../assets/icons/heart\ \(4\).png')})`;
                iconNotify.style.backgroundRepeat = "no-repeat";
                iconNotify.style.backgroundSize = "contain";
                IconCreates.style.backgroundImage = `url(${require('../../assets/icons/create.png')})`;
                IconCreates.style.backgroundRepeat = "no-repeat";
                IconCreates.style.backgroundSize = "contain";
                iconProfile.style.backgroundImage = `url(${require('../../assets/icons/profile.jpg')})`;
                iconProfile.style.backgroundRepeat = "no-repeat";
                iconProfile.style.backgroundSize = "contain";
                iconProfile.style.borderRadius = "0";
                iconProfile.style.height = "29px"
                iconElsE.style.backgroundImage = `url(${require('../../assets/icons/menu.png')})`;
                iconElsE.style.backgroundRepeat = "no-repeat";
                iconElsE.style.backgroundSize = "contain";
                target.setAttribute('data-show', "true");
                target.innerHTML = "Черная тема"
                target.style.backgroundColor = "white";
                target.style.color = "black"
                j.forEach(el => { el.setAttribute('style', 'color:black;') })
                dot.forEach(el => { el.setAttribute('style', 'color:gray;') })
                comment.forEach(el => { el.setAttribute('style', 'color:black;') })
                photoProfile.forEach(el => { el.setAttribute('style', 'background-color:black') })
                inputInCommentBlock.forEach(el => { el.setAttribute('style', 'background:white') })
                contentVideo.forEach(el => { el.setAttribute('style', 'background-color:black') })
                textInformationNick.forEach(el => { el.setAttribute('style', 'color:black') })
                all?.setAttribute('style', 'color:black')
                photoYourProf?.setAttribute('style', 'background-color:black')
                drawLeftBlock.wrapper.style.background = "white"
                drawLeftBlock.wrapper.style.color = "black"
                mainPages.line.style.borderLeft = "1px solid black"
                document.body.style.background = "white";
                document.body.style.color = "black"
            }
        }
    }
    draw() {
        this.settingsMenu();
        this.wrapperSetting.addEventListener('click', this.handler)
    }
}
const exportSettings = new settingsMenu();
export default exportSettings;