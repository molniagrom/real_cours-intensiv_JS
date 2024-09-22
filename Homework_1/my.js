  // Video data for education videos
  const educationVideos = [
    {
      src: "https://www.youtube.com/embed/BSQ3LSwyWlE",
      description:
        "JavaScript - Way of the Samurai, Browser, first program, foreign language learning simulator",
      channel: "It-Kamasutra",
      live: true,
    },
    {
      src: "https://www.youtube.com/embed/aANdGBY1R_o",
      description: "JavaScript - Installing VS code, code editor",
      channel: "It-Kamasutra",
      live: false,
    },
    {
      src: "https://www.youtube.com/embed/quUQtnZb4Q8",
      description: "JavaScript - Express, Typescript, Nodemon",
      channel: "It-Kamasutra",
      live: false,
    },
  ];

  // Video data for sports videos
  const sportsVideos = [
    {
      src: "https://www.youtube.com/embed/7fQ-KkOKL7w",
      description: "20 MIN FULL BODY WORKOUT - Beginner Version",
      channel: "Pamela Reif",
      live: false,
    },
    {
      src: "https://www.youtube.com/embed/E1JT1CKEOuA",
      description: "Sports training online - Stretching Yoga",
      channel: "Seva Prithodko",
      live: false,
    },
    {
      src: "https://www.youtube.com/embed/23WTBzutLJE",
      description: "PERFECT 20 MIN FULL BODY WORKOUT - FOR BEGINNERS",
      channel: "BullyJuice",
      live: false,
    },
  ];

  // Function to render videos in a category
  function renderVideos(videoArray, containerId) {
    const container = document.getElementById(containerId);
    videoArray.forEach((video) => {
      const videoItem = document.createElement("div");
      videoItem.classList.add("video-item");

      // Create iframe
      const iframe = document.createElement("iframe");
      iframe.width = "100%";
      iframe.height = window.innerWidth < 600 ? 200 : 300; // Adaptive height
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

      function getRandomNumber() {
        return Math.floor(Math.random() * 12) + 1;
      }

      function weeksOrweek(number) {
        if (number === 1) {
          return "week";
        } else {
          return "weeks";
        }
      }

      // Пример использования
      if (video.live) {
        const liveLabel = document.createElement("span");
        liveLabel.classList.add("label", "live");
        liveLabel.textContent = "• Live Stream";
        videoItem.appendChild(liveLabel);
      } else {
        const randomNumber = getRandomNumber(); // Получаем случайное число
        const unLiveLabel = document.createElement("span");
        unLiveLabel.classList.add("label", "unLive");
        unLiveLabel.textContent = `${randomNumber} ${weeksOrweek(
          randomNumber
        )} ago`;
        videoItem.appendChild(unLiveLabel);
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
      iframe.height = window.innerWidth < 600 ? 200 : 300;
    });
  });