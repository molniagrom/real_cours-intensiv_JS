// Version 0.2.

import { audioTracks, educationVideos, sportsVideos } from './media/mediaData.js';
import { renderAudioTracks } from './render/renderAudioTracks.js';
import { renderVideos } from './render/renderVideos.js';

//  Добавление элементов в контейнеры

// Для образовательных видео
const educationContainer = document.getElementById("education-videos");
const educationVideoElements = renderVideos(educationVideos);
educationVideoElements.forEach((videoObject) => {
  educationContainer.append(videoObject);
});

// Для спортивных видео
const sportsContainer = document.getElementById("sports-videos");
const sportsVideoElements = renderVideos(sportsVideos);
sportsVideoElements.forEach((videoObject) => {
  sportsContainer.append(videoObject);
});

// Для аудиотреков
const audioContainer = document.getElementById("audio-tracks");
const audioElements = renderAudioTracks(audioTracks);
audioElements.forEach((audioObject) => {
  audioContainer.append(audioObject);
});

// Обработчик изменения размера окна
window.addEventListener("resize", () => {
  const iframes = document.querySelectorAll(".height-adaptive");
  iframes.forEach((iframe) => {
    iframe.height = window.innerWidth < 768 ? 200 : 250; // Screen size for adaptive (tablets)
  });
});


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