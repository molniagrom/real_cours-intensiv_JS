import { audioTracks, educationVideos, sportsVideos } from './mediaData.js';

const video = audioTracks[0] || educationVideos[0] || sportsVideos[0];

export const iframe = document.createElement("iframe");
iframe.classList.add("height-adaptive");
iframe.width = "100%";
iframe.height = window.innerWidth < 768 ? 200 : 250; // Screen size for adaptive (tablets)
iframe.src = video.src;
iframe.setAttribute("allowfullscreen", "");
iframe.setAttribute("frameborder", "0");
iframe.setAttribute(
  "allow",
  "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
);