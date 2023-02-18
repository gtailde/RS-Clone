import { createHtmlElement } from "../../utils/createHtmlElement";
import grayback from "./grayBack";
class menuPosts {
    wrapperMenuPost: HTMLElement;
    constructor() {
        this.wrapperMenuPost = createHtmlElement('menu', 'div');
    }
    appendTo(elem: HTMLElement, toElem: HTMLElement) {
        toElem.append(elem);
    }
    renderMenuPost() {
        const firstElementMenu = createHtmlElement('TextElementInMenu', 'p', 'Пожаловаться');
        const secondElementMenu = createHtmlElement('TextElementInMenu', 'p', 'Отменить подписку');
        const thirdElementMenu = createHtmlElement('TextElementInMenu', 'p', 'Добавить в избранное');
        const fourthElementMenu = createHtmlElement('TextElementInMenu', 'p', 'Перейти к публикации');
        const fifthElementMenu = createHtmlElement('TextElementInMenu', 'p', 'Поделиться...');
        const sixthElementMenu = createHtmlElement('TextElementInMenu', 'p', 'Копировать ссылку');
        const seventhElementMenu = createHtmlElement('TextElementInMenu', 'p', 'Вставить на сайт');
        const eigthElementMenu = createHtmlElement('TextElementInMenu', 'p', 'Информация об аккаунте');
        const ninethElementMenu = createHtmlElement('TextElementInMenu', 'p', 'Отмена');
        this.appendTo(this.wrapperMenuPost, document.body);
        const firstLine = createHtmlElement('LineInMenu', 'hr');
        const secondLine = createHtmlElement('LineInMenu', 'hr');
        const thirdLine = createHtmlElement('LineInMenu', 'hr');
        const fourthLine = createHtmlElement('LineInMenu', 'hr');
        const fifthLine = createHtmlElement('LineInMenu', 'hr');
        const sixthLine = createHtmlElement('LineInMenu', 'hr');
        const seventhLine = createHtmlElement('LineInMenu', 'hr');
        const eigthLine = createHtmlElement('LineInMenu', 'hr');
        // const nineLine = createHtmlElement('lineInMenu', 'hr');
        this.appendTo(firstElementMenu, this.wrapperMenuPost);
        this.appendTo(firstLine, this.wrapperMenuPost)
        this.appendTo(secondElementMenu, this.wrapperMenuPost)
        this.appendTo(secondLine, this.wrapperMenuPost)
        this.appendTo(thirdElementMenu, this.wrapperMenuPost)
        this.appendTo(thirdLine, this.wrapperMenuPost)
        this.appendTo(fourthElementMenu, this.wrapperMenuPost)
        this.appendTo(fourthLine, this.wrapperMenuPost)
        this.appendTo(fifthElementMenu, this.wrapperMenuPost)
        this.appendTo(fifthLine, this.wrapperMenuPost)
        this.appendTo(sixthElementMenu, this.wrapperMenuPost)
        this.appendTo(sixthLine, this.wrapperMenuPost)
        this.appendTo(seventhElementMenu, this.wrapperMenuPost)
        this.appendTo(seventhLine, this.wrapperMenuPost)
        this.appendTo(eigthElementMenu, this.wrapperMenuPost)
        this.appendTo(eigthLine, this.wrapperMenuPost);
        this.appendTo(ninethElementMenu, this.wrapperMenuPost);
        // this.appendTo(nineLine, this.wrapperMenuPost)
    }

    handler = (e: Event): void => {
        let target = e.target as HTMLElement;
        if (target.classList.contains('TextElementInMenu')) {
            if (target.innerHTML === "Отмена") {
                grayback.wrapperBlock.classList.remove('graybackground__active');
                grayback.wrapperBlock.classList.add('graybackground')
                grayback.remove.classList.add('removeIcon');
                grayback.remove.classList.remove('removeIcon_active');
                this.wrapperMenuPost.classList.remove('menu');
                this.wrapperMenuPost.classList.add('menu_active');
                this.wrapperMenuPost.innerHTML = "";
            }

        }
    }
    draw() {
        this.renderMenuPost();
        this.wrapperMenuPost.addEventListener('click', this.handler)
    }
}
const ch = new menuPosts();
export default ch;