// Создаем и вставляем элементы с помощью JavaScript

// Создание элементов header и nav
const header = document.createElement('header');
const nav = document.createElement('nav');
const logo = document.createElement('span');
logo.classList.add('logo');
logo.textContent = 'IntTube';
const menuIcon = document.createElement('div');
menuIcon.classList.add('menu-icon');
menuIcon.textContent = '☰';

// Добавляем элементы в nav и header
nav.appendChild(logo);
nav.appendChild(menuIcon);
header.appendChild(nav);
document.body.appendChild(header);

// Создание основного контента
const main = document.createElement('main');
const playlistSection = document.createElement('section');
playlistSection.classList.add('playlist-section');

// Заголовок плейлиста
const h1 = document.createElement('h1');
h1.textContent = 'My Playlists';
playlistSection.appendChild(h1);

// Функция для создания категории
function createCategory(title, videos) {
  const category = document.createElement('div');
  category.classList.add('category');

  const h2 = document.createElement('h2');
  h2.textContent = title;
  category.appendChild(h2);

  const videoGrid = document.createElement('div');
  videoGrid.classList.add('video-grid');

  videos.forEach((video) => {
    const videoItem = document.createElement('div');
    videoItem.classList.add('video-item');

    const iframe = document.createElement('iframe');
    iframe.width = "100%";
    iframe.height = "200";
    iframe.src = video.url;
    iframe.frameborder = "0";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;
    videoItem.appendChild(iframe);

    const h3 = document.createElement('h3');
    h3.textContent = video.title;
    videoItem.appendChild(h3);

    const p = document.createElement('p');
    p.textContent = video.description;
    videoItem.appendChild(p);

    if (video.live) {
      const liveLabel = document.createElement('span');
      liveLabel.classList.add('label', 'live');
      liveLabel.textContent = '• Live Stream';
      videoItem.appendChild(liveLabel);
    }

    const date = document.createElement('span');
    date.classList.add('date');
    date.textContent = video.date;
    videoItem.appendChild(date);

    const channel = document.createElement('span');
    channel.classList.add('channel');
    channel.textContent = video.channel;
    videoItem.appendChild(channel);

    videoGrid.appendChild(videoItem);
  });

  category.appendChild(videoGrid);
  playlistSection.appendChild(category);
}

// Данные для каждой категории видео
const educationVideos = [
  {
    title: 'JavaScript - Way of the Samurai',
    description: 'JavaScript - Way of the Samurai, Browser, first program, foreign language learning simulator',
    url: 'https://www.youtube.com/embed/BSQ3LSwyWlE',
    live: true,
    date: '',
    channel: 'It-Kamasutra',
  },
  {
    title: 'JavaScript - The Way of the Samurai',
    description: 'Installing VS code, code editor',
    url: 'https://www.youtube.com/embed/BSQ3LSwyWlE',
    live: false,
    date: '1 week ago',
    channel: 'It-Kamasutra',
  },
  {
    title: 'Reboot - Express, Typescript, Nodemon',
    description: 'Back-end - The Samurai Way',
    url: 'https://www.youtube.com/embed/BSQ3LSwyWlE',
    live: false,
    date: '2 weeks ago',
    channel: 'It-Kamasutra',
  }
];

const sportsVideos = [
  {
    title: '20 MIN FULL BODY WORKOUT',
    description: 'Beginner Version // No Equipment',
    url: 'https://www.youtube.com/embed/BSQ3LSwyWlE',
    live: false,
    date: '12 hours ago',
    channel: 'Pamela Reif',
  },
  {
    title: 'Sports training online',
    description: 'Filming and editing - Stretching Yoga',
    url: 'https://www.youtube.com/embed/BSQ3LSwyWlE',
    live: false,
    date: '1 week ago',
    channel: 'Seva Prithodko',
  },
  {
    title: 'PERFECT 20 MIN FULL BODY WORKOUT',
    description: 'FOR BEGINNERS (No Equipment)',
    url: 'https://www.youtube.com/embed/BSQ3LSwyWlE',
    live: false,
    date: '2 weeks ago',
    channel: 'BullyJuice',
  }
];

// Добавляем категории на страницу
createCategory('Education Videos', educationVideos);
createCategory('Online training sports', sportsVideos);

// Добавляем основной контент на страницу
main.appendChild(playlistSection);
document.body.appendChild(main);
