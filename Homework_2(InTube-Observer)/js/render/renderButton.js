// import { buttons } from "../media/mediaData";

export function renderButtons(buttonDetails) {
    // Создание кнопки и добавление её в интерфейс
    const button = document.createElement("button");
    button.classList.add("reaction");
    button.innerText = buttonDetails.text;
    // Добавление кнопки в тело документа (или в нужный контейнер)
    document.body.append(button); // Измените на нужный контейнер
    return button; // Возвращаем созданный элемент кнопки
}