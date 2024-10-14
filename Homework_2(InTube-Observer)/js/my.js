// Version 0.2.
import { buttons, educationVideos, sportsVideos } from './media/mediaData.js';
import { renderButtons } from './render/renderButton.js';
import { renderVideos } from './render/renderVideos.js';

let button1;
let button2;

// Функция для обновления интерфейса после удаления
const refreshUI = () => {
    const educationContainer = document.getElementById("education-videos");
    educationContainer.innerHTML = ''; // Очистить текущие видео
    const educationVideoElements = renderVideos(educationVideos);
    educationVideoElements.forEach((videoObject) => {
        educationContainer.append(videoObject);
    });

    const sportsContainer = document.getElementById("sports-videos");
    sportsContainer.innerHTML = ''; // Очистить текущие видео
    const sportsVideoElements = renderVideos(sportsVideos);
    sportsVideoElements.forEach((videoObject) => {
        sportsContainer.append(videoObject);
    });

};

// Функция для удаления образовательных видео
const deleteEducationVideos = () => {
    educationVideos.length = 0; // Очистить массив
    refreshUI(); // Обновить интерфейс
    if (button1) button1.remove(); // Удалить кнопку удаления образовательных видео
};

// Функция для удаления спортивных видео
const deleteSportsVideos = () => {
    sportsVideos.length = 0; // Очистить массив
    refreshUI(); // Обновить интерфейс
    if (button2) button2.remove(); // Удалить кнопку удаления спортивных видео
};

// Начальное отображение интерфейса
refreshUI();

// Создание кнопок и добавление обработчиков событий
const createButtons = () => {
    button1 = renderButtons(buttons[0]);
    button2 = renderButtons(buttons[1]);

    button1.addEventListener("click", () => {
        deleteEducationVideos();
        button1.remove(); // Удалить кнопку сразу после нажатия
    });

    button2.addEventListener("click", () => {
        deleteSportsVideos();
        button2.remove(); // Удалить кнопку сразу после нажатия
    });
};

// Вызов функции для создания кнопок
createButtons();

// Обработчик изменения размера окна
window.addEventListener("resize", () => {
    const iframes = document.querySelectorAll(".height-adaptive");
    iframes.forEach((iframe) => {
        iframe.height = window.innerWidth < 768 ? 200 : 250; // Адаптивный размер
    });
});

// ......................................

// Version 0.2.
// Импорт необходимых данных и функций
// import { audioTracks, educationVideos, sportsVideos, subscribe, emit } from './media/mediaData.js';
// import { renderAudioTracks } from './render/renderAudioTracks.js';
// import { renderVideos } from './render/renderVideos.js';

// // Контейнеры для медиа-контента
// const educationContainer = document.getElementById("education-videos");
// const sportsContainer = document.getElementById("sports-videos");
// const audioContainer = document.getElementById("audio-tracks");

// // Функция refresh для обновления контента на странице
// function refresh() {
//   // Очищаем контейнеры
//   educationContainer.innerHTML = "";
//   sportsContainer.innerHTML = "";
//   audioContainer.innerHTML = "";

//   // Отображаем образовательные видео
//   const educationVideoElements = renderVideos(educationVideos);
//   educationVideoElements.forEach((videoObject) => {
//     educationContainer.append(videoObject);
//   });

//   // Отображаем спортивные видео
//   const sportsVideoElements = renderVideos(sportsVideos);
//   sportsVideoElements.forEach((videoObject) => {
//     sportsContainer.append(videoObject);
//   });

//   // Отображаем аудиотреки
//   const audioElements = renderAudioTracks(audioTracks);
//   audioElements.forEach((audioObject) => {
//     audioContainer.append(audioObject);
//   });
// }

// // Подписываем refresh на обновления через обсервер
// subscribe(refresh);

// // Создаем кнопки и добавляем их в DOM
// const buttonContainer = document.createElement("div");
// buttonContainer.style.margin = "20px";
// buttonContainer.style.display = "flex";
// buttonContainer.style.gap = "10px";

// const addButton = document.createElement("button");
// addButton.textContent = "Добавить плейлист";
// addButton.style.padding = "10px 20px";
// addButton.style.cursor = "pointer";

// const deleteButton = document.createElement("button");
// deleteButton.textContent = "Удалить плейлист";
// deleteButton.style.padding = "10px 20px";
// deleteButton.style.cursor = "pointer";

// buttonContainer.append(addButton, deleteButton);
// document.body.prepend(buttonContainer); // Добавляем кнопки в начало страницы

// // Логика для добавления нового плейлиста
// addButton.addEventListener("click", () => {
//   const newPlaylist = {
//     h2: "Новый плейлист",
//     src: "./default-track.mp3",
//     description: "Описание нового плейлиста",
//     type: "audio/mpeg",
//   };

//   audioTracks.push(newPlaylist); // Добавляем новый плейлист в данные
//   emit(); // Уведомляем всех наблюдателей об изменении данных
//   refresh(); // Обновляем отображение
// });

// // Логика для удаления последнего плейлиста
// deleteButton.addEventListener("click", () => {
//   if (audioTracks.length > 0) {
//     audioTracks.pop(); // Удаляем последний плейлист из данных
//     emit(); // Уведомляем всех наблюдателей об изменении данных
//     refresh(); // Обновляем отображение
//   } else {
//     alert("Нет доступных плейлистов для удаления!"); // Сообщение, если нечего удалять
//   }
// });

// // Инициализируем начальное отображение контента
// refresh();

// // Обработчик изменения размера окна
// window.addEventListener("resize", () => {
//   const iframes = document.querySelectorAll(".height-adaptive");
//   iframes.forEach((iframe) => {
//     iframe.height = window.innerWidth < 768 ? 200 : 250; // Screen size for adaptive (tablets)
//   });
// });

// ......................................

// Version 0.1.

// import { timeAgo } from "./timeAgo.js";
// import { audioTracks, educationVideos, sportsVideos } from './mediaData.js';
// import { iframe } from "./iframe.js";

// function renderVideos(videoArray, containerId) {
//   const container = document.getElementById(containerId);

//   // Проходимся по каждому вложенному массиву
//   videoArray.forEach((videoDetails) => {
//     const video = videoDetails[0]; // Извлекаем первый элемент, который содержит информацию о видео
//     //const metadata = videoDetails[1]; // Извлекаем второй элемент, который содержит метаданные

//     // const videoObject = document.createElement('div');
//     // videoObject.classList.add('video-item');

//     const description = document.createElement("p");
//     description.classList.add("underneath");
//     description.textContent = video.description;

//     const channel = document.createElement("span");
//     channel.classList.add("channel");
//     channel.textContent = video.channel;

//     videoObject.append(iframe);
//     videoObject.append(description);
//     videoObject.append(channel);

//     container.append(videoObject);

//     if (video.live) {
//       const liveLabel = document.createElement("span");
//       liveLabel.classList.add("label", "live");
//       liveLabel.textContent = "• Прямой эфир";
//       videoObject.appendChild(liveLabel);
//     } else {
//       const timeLabel = document.createElement("span");
//       timeLabel.classList.add("label", "unLive");
//       timeLabel.textContent = timeAgo(video.publishedDate);
//       videoObject.appendChild(timeLabel);
//     }
//   });
// }

// function renderAudioTracks(audioArray, containerId) {
//   const container = document.getElementById(containerId);

//   audioArray.forEach((audio) => {
//     const audioObject = document.createElement("div");
//     audioObject.classList.add("audio-item");

//     const h2Element = document.createElement("h2");
//     h2Element.textContent = audio.h2;

//     const audioElement = document.createElement("audio");
//     audioElement.controls = true;

//     const source = document.createElement("source");
//     source.src = audio.src;
//     source.type = audio.type;

//     audioElement.appendChild(source);

//     const description = document.createElement("p");
//     description.classList.add("underneath");
//     description.textContent = audio.description;

//     audioObject.appendChild(h2Element);
//     audioObject.appendChild(description);
//     audioObject.appendChild(audioElement);

//     container.appendChild(audioObject);
//   });
// }

// renderVideos(educationVideos, "education-videos");
// renderVideos(sportsVideos, "sports-videos");

// renderAudioTracks(audioTracks, "audio-tracks");

// window.addEventListener("resize", () => {
//   const iframes = document.querySelectorAll("iframe");
//   iframes.forEach((iframe) => {
//     iframe.height = window.innerWidth < 600 ? 200 : 250;
//   });
// });
