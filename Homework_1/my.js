// Video data for education videos
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
    publishedDate: new Date('2023-08-15'),
  },
];

// Video data for sports videos
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

// Function to calculate time ago
function timeAgo(date) {
  const now = new Date();
  const seconds = Math.floor((now - date) / 1000);
  let interval = Math.floor(seconds / 31536000);
  
  if (interval >= 1) {
    return interval === 1 ? "1 year ago" : `${interval} years ago`;
  }
  
  interval = Math.floor(seconds / 2592000); // 30 days
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
  
  return seconds < 5 ? "Just now" : `${seconds} seconds ago`;
}

// Function to render videos in a category
function renderVideos(videoArray, containerId) {
  const container = document.getElementById(containerId);
  videoArray.forEach((video) => {
    const videoItem = document.createElement("div");
    videoItem.classList.add("video-item");

    // Create iframe
    const iframe = document.createElement("iframe");
    iframe.width = "100%";
    iframe.height = window.innerWidth < 600 ? 200 : 250; // Adaptive height
    iframe.src = video.src;
    iframe.setAttribute("allowfullscreen", "");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute(
      "allow",
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    );

    // Create description
    const description = document.createElement("p");
    description.classList.add("underneath");
    description.textContent = video.description;

    // Create channel info
    const channel = document.createElement("span");
    channel.classList.add("channel");
    channel.textContent = video.channel;

    // Append elements to videoItem
    videoItem.appendChild(iframe);
    videoItem.appendChild(description);
    videoItem.appendChild(channel);

    // Append videoItem to container
    container.appendChild(videoItem);

    // Time label
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

// Render education and sports videos
renderVideos(educationVideos, "education-videos");
renderVideos(sportsVideos, "sports-videos");

// Adjust video height on window resize
window.addEventListener("resize", () => {
  const iframes = document.querySelectorAll("iframe");
  iframes.forEach((iframe) => {
    iframe.height = window.innerWidth < 600 ? 200 : 250;
  });
});