import { audioTracks, educationVideos, sportsVideos } from './mediaData.js';

const video = audioTracks[0] || educationVideos[0] || sportsVideos[0];

export const iframe = document.createElement("iframe");
iframe.width = "100%";
iframe.height = window.innerWidth < 600 ? 200 : 250;
iframe.src = video.src;
iframe.setAttribute("allowfullscreen", "");
iframe.setAttribute("frameborder", "0");
iframe.setAttribute(
  "allow",
  "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
);