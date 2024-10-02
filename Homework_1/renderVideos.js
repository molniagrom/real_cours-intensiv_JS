import { iframe } from "./iframe.js"; 
import { timeAgo } from "./timeAgo.js";

export function renderVideos(videoArray) {
    const videoObjects = [];
  
    videoArray.forEach((videoDetails) => {
      const video = videoDetails[0];
  
      const videoObject = document.createElement('div');
      videoObject.classList.add('video-object');
      
      const iframeClone = iframe.cloneNode(true); // Клонируем iframe
      iframeClone.src = video.src;
      iframeClone.height = window.innerWidth < 600 ? 200 : 250;
  
      const description = document.createElement("p");
      description.classList.add("underneath");
      description.textContent = video.description;
  
      const channel = document.createElement("span");
      channel.classList.add("channel");
      channel.textContent = video.channel;
  
      videoObject.append(iframeClone);
      videoObject.append(description);
      videoObject.append(channel);
  
      if (video.live) {
        const liveLabel = document.createElement("span");
        liveLabel.classList.add("label", "live");
        liveLabel.textContent = "• Прямой эфир";
        videoObject.append(liveLabel);
      } else {
        const timeLabel = document.createElement("span");
        timeLabel.classList.add("label", "unLive");
        timeLabel.textContent = timeAgo(video.publishedDate);
        videoObject.append(timeLabel);
      }
  
      // Добавляем созданный videoObject в массив
      videoObjects.push(videoObject);
    });
  
    // Возвращаем массив элементов
    return videoObjects;
  }
  