import { createHtmlElement } from "../../utils/createHtmlElement";
class searchPage {
    wrapperSearchPage: HTMLElement;
    constructor() {
        this.wrapperSearchPage = createHtmlElement('searchModalWindow', 'div');
    }
    appendTo(elem: HTMLElement, toElem: HTMLElement) {
        toElem.append(elem);
    }
    searchPage() {
        const TextNameSearchPage = createHtmlElement('nameSearchMenu', 'h3', 'Поисковый запрос');
        this.appendTo(this.wrapperSearchPage, document.body);
        const InputSearchBlock = createHtmlElement('inputTextSearch', 'input');
        InputSearchBlock.setAttribute('type', 'search');
        InputSearchBlock.setAttribute('placeholder', 'Поиск');
        const blockWithCancleButton = createHtmlElement('cancleButton', 'div');
        const inputInCancleBlockButtonClearSearch = createHtmlElement('inputClearSearch', 'input');
        inputInCancleBlockButtonClearSearch.setAttribute('type', 'submit');
        inputInCancleBlockButtonClearSearch.setAttribute('value', '');
        const lineInputInSearchPage = createHtmlElement('lineInput', 'div');
        const textBlockWithTimingAndClear = createHtmlElement('textBlockWithTimingAndClear', 'div');
        const textWhenYouSearch = createHtmlElement('textwhen', 'p', 'Недавнее');
        const findingPeople = createHtmlElement('findingPeople', 'div');
        const profileAccountInRecommend = createHtmlElement('profileRecommend', 'div');
        const recProfSetting = createHtmlElement('recProfSetting', 'div')
        const awatarProfileAccount = createHtmlElement('awatarProfileAccount', 'div');
        const textOnRecProfileAccount = createHtmlElement('textOnRecProfileAccount', 'div');
        const SecondNamingProfAcc = createHtmlElement('SecondNamingProfAcc', 'p', 'ghghgghgghggh')
        const nameProfileAccount = createHtmlElement('nameProfileAccountSearch', 'p', 'name');
        const cancleButtonRecommended = createHtmlElement('cancleButtonRecommended', 'div');
        const textWithClearAll = createHtmlElement('textWithClearAll', 'p', 'Очистить всё')
        this.appendTo(inputInCancleBlockButtonClearSearch, blockWithCancleButton);
        this.appendTo(TextNameSearchPage, this.wrapperSearchPage);
        this.appendTo(InputSearchBlock, this.wrapperSearchPage)
        this.appendTo(blockWithCancleButton, this.wrapperSearchPage);
        this.appendTo(lineInputInSearchPage, this.wrapperSearchPage);
        this.appendTo(textBlockWithTimingAndClear, this.wrapperSearchPage)
        this.appendTo(textWhenYouSearch, textBlockWithTimingAndClear);
        this.appendTo(textWithClearAll, textBlockWithTimingAndClear)
        this.appendTo(findingPeople, this.wrapperSearchPage)
        this.appendTo(profileAccountInRecommend, this.wrapperSearchPage);
        this.appendTo(recProfSetting, profileAccountInRecommend);
        this.appendTo(awatarProfileAccount, recProfSetting);
        this.appendTo(textOnRecProfileAccount, recProfSetting);
        this.appendTo(nameProfileAccount, textOnRecProfileAccount)
        this.appendTo(SecondNamingProfAcc, textOnRecProfileAccount)

        this.appendTo(cancleButtonRecommended, recProfSetting);



    }
    draw() {
        this.searchPage();
    }
}
const cx = new searchPage();
export default cx;