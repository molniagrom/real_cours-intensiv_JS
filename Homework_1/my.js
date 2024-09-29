const audioTracks = [
  {
    h2: "You want a new ringtone?",
    src: "./Zivert - Life.mp3",
    description: "Zivert - Life",
    type: "audio/mpeg",
  },
];

const educationVideos = [
  {
    src: "https://www.youtube.com/embed/BSQ3LSwyWlE",
    description:
      "JavaScript - Way of the Samurai, Browser, first program, foreign language learning simulator",
    channel: "It-Kamasutra",
    live: true,
    publishedDate: new Date('2024-07-20'),
  },
  {
    src: "https://www.youtube.com/embed/5ZBY9c4hbr8?si=CQ5yLGwEJoLrdK9W",
    description: "JavaScript - Installing VS code, code editor",
    channel: "It-Kamasutra",
    live: false,
    publishedDate: new Date('2024-09-01'),
  },
  {
    src: "https://www.youtube.com/embed/UGqumQi0hwc?si=E6a1RA79TYgeJeYQ",
    description: "JavaScript - Express, Typescript, Nodemon",
    channel: "It-Kamasutra",
    live: false,
    publishedDate: new Date('2024-07-15'),
  },
];

const sportsVideos = [
  {
    src: "https://www.youtube.com/embed/7fQ-KkOKL7w",
    description: "20 MIN FULL BODY WORKOUT - Beginner Version",
    channel: "Pamela Reif",
    live: false,
    publishedDate: new Date('2023-09-05'),
  },
  {
    src: "https://www.youtube.com/embed/E1JT1CKEOuA",
    description: "Sports training online - Stretching Yoga",
    channel: "Seva Prithodko",
    live: false,
    publishedDate: new Date('2021-08-25'),
  },
  {
    src: "https://www.youtube.com/embed/23WTBzutLJE",
    description: "PERFECT 20 MIN FULL BODY WORKOUT - FOR BEGINNERS",
    channel: "BullyJuice",
    live: false,
    publishedDate: new Date('2024-09-23'),
  },
];

function timeAgo(date) {
  const now = new Date();
  const seconds = Math.floor((now - date) / 1000); // How many seconds elapsed between the two times.
  let interval = Math.floor(seconds / 31536000); // divide the number of seconds by the number of seconds in a year to find out how many full years have passed
  
  if (interval >= 1) {
    return interval === 1 ? "1 year ago" : `${interval} years ago`;
  }
  
  const secindsInMonth = 2592000;
  interval = Math.floor(seconds / secindsInMonth); // 30 days ~ If the condition for years is false, we recalculate the interval for months.
  if (interval >= 1) {
    return interval === 1 ? "1 month ago" : `${interval} months ago`;
  }
  
  interval = Math.floor(seconds / 86400); // 1 day
  if (interval >= 7) {
    const weeks = Math.floor(interval / 7);
    return weeks === 1 ? "1 week ago" : `${weeks} weeks ago`;
  }
  
  if (interval >= 1) {
    return interval === 1 ? "1 day ago" : `${interval} days ago`;
  }
  
  interval = Math.floor(seconds / 3600); // 1 hour
  if (interval >= 1) {
    return interval === 1 ? "1 hour ago" : `${interval} hours ago`;
  }
  
  interval = Math.floor(seconds / 60); // 1 minute
  if (interval >= 1) {
    return interval === 1 ? "1 minute ago" : `${interval} minutes ago`;
  }
// сделать так чтобы была только одна проверка if else
  return interval === 1 ? `1 ${intervalUnitsName} a go` : `${interval} ${intervalUnitsName}s ago`;
  return seconds < 5 ? "Just now" : `${seconds} seconds ago`;

}
function renderVideos(videoArray, containerId) {
  const container = document.getElementById(containerId);
  videoArray.forEach((video) => {
    const videoItem = document.createElement("div");
    videoItem.classList.add("video-item");

   
    const iframe = document.createElement("iframe");
    iframe.width = "100%";
    iframe.height = window.innerWidth < 600 ? 200 : 250;
    iframe.src = video.src;
    iframe.setAttribute("allowfullscreen", "");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute(
      "allow",
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    );

   
    const description = document.createElement("p");
    description.classList.add("underneath");
    description.textContent = video.description;

   
    const channel = document.createElement("span");
    channel.classList.add("channel");
    channel.textContent = video.channel;

   
    videoItem.appendChild(iframe);
    videoItem.appendChild(description);
    videoItem.appendChild(channel);

    
    container.appendChild(videoItem);

    if (video.live) {
      const liveLabel = document.createElement("span");
      liveLabel.classList.add("label", "live");
      liveLabel.textContent = "• Live Stream";
      videoItem.appendChild(liveLabel);
    } else {
      const timeLabel = document.createElement("span");
      timeLabel.classList.add("label", "unLive");
      timeLabel.textContent = timeAgo(video.publishedDate);
      videoItem.appendChild(timeLabel);
    }
  });
}

function renderAudioTracks(audioArray, containerId) {
  const container = document.getElementById(containerId);
  
  audioArray.forEach((audio) => {
    const audioItem = document.createElement("div");
    audioItem.classList.add("audio-item");

    const h2Element = document.createElement("h2");
    h2Element.textContent = audio.h2;

    const audioElement = document.createElement("audio");
    audioElement.controls = true;

    const source = document.createElement("source");
    source.src = audio.src;
    source.type = audio.type;

    audioElement.appendChild(source);

    const description = document.createElement("p");
    description.classList.add("underneath");
    description.textContent = audio.description;

    audioItem.appendChild(h2Element); 
    audioItem.appendChild(description);
    audioItem.appendChild(audioElement);

    container.appendChild(audioItem);
  });
}

renderVideos(educationVideos, "education-videos");
renderVideos(sportsVideos, "sports-videos");

renderAudioTracks(audioTracks, "audio-tracks");

window.addEventListener("resize", () => {
  const iframes = document.querySelectorAll("iframe");
  iframes.forEach((iframe) => {
    iframe.height = window.innerWidth < 600 ? 200 : 250;
  });
});

