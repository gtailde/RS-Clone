import { createHtmlElement } from "../../utils/createHtmlElement";
class AddPosts {
    wrapperBlock: HTMLElement;
    constructor() {
        this.wrapperBlock = createHtmlElement('blockAddPost', 'div');
    }
    appendTo(elem: HTMLElement, toElem: HTMLElement) {
        toElem.append(elem);
    }
    PageAddPost() {
        this.appendTo(this.wrapperBlock, document.body);
        const textBlock = createHtmlElement('blockAddPost__nameBlock', 'p', 'Создание публикации');
        this.appendTo(textBlock, this.wrapperBlock);
        const lineInAddPage = createHtmlElement('lineInAddPage', 'hr');
        const iconAddPosts = createHtmlElement('iconAddPosts', 'div')
        const textOnButtonWithAddFunction = createHtmlElement('blockAddPost__AddPost', 'p', 'Перетащите сюда фото или видео');
        const buttonAddPost = createHtmlElement('AddPost', 'button', 'Выбрать на компьютере');
        this.appendTo(lineInAddPage, this.wrapperBlock)
        this.appendTo(iconAddPosts, this.wrapperBlock)
        this.appendTo(textOnButtonWithAddFunction, this.wrapperBlock)
        this.appendTo(buttonAddPost, this.wrapperBlock)
    }
    draw() {
        this.PageAddPost();
    }
}
const cg = new AddPosts();
export default cg;