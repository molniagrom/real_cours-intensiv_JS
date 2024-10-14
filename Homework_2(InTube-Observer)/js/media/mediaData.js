export const audioTracks = [
  {
    h2: "You want a new ringtone?",
    src: "./Zivert - Life.mp3",
    description: "Zivert - Life",
    type: "audio/mpeg",
  },
];

export const educationVideos = [
  [
    {
      src: "https://www.youtube.com/embed/BSQ3LSwyWlE",
      description:
        "JavaScript - Way of the Samurai, Browser, first program, foreign language learning simulator",
      channel: "It-Kamasutra",
      live: true,
      publishedDate: new Date("2024-07-20"),
    },
    {
      audience: "12+",
      category: "education",
    },
  ],
  [
    {
      src: "https://www.youtube.com/embed/5ZBY9c4hbr8?si=CQ5yLGwEJoLrdK9W",
      description: "JavaScript - Installing VS code, code editor",
      channel: "It-Kamasutra",
      live: false,
      publishedDate: new Date("2024-09-01"),
    },
    {
      audience: "12+",
      category: "education",
    },
  ],
  [
    {
      src: "https://www.youtube.com/embed/UGqumQi0hwc?si=E6a1RA79TYgeJeYQ",
      description: "JavaScript - Express, Typescript, Nodemon",
      channel: "It-Kamasutra",
      live: false,
      publishedDate: new Date("2024-07-15"),
    },
    {
      audience: "12+",
      category: "education",
    },
  ],
];

export const sportsVideos = [
  [
    {
      src: "https://www.youtube.com/embed/7fQ-KkOKL7w",
      description: "20 MIN FULL BODY WORKOUT - Beginner Version",
      channel: "Pamela Reif",
      live: false,
      publishedDate: new Date("2023-09-05"),
    },
    {
      audience: "6+",
      category: "sport",
    },
  ],
  [
    {
      src: "https://www.youtube.com/embed/E1JT1CKEOuA",
      description: "Sports training online - Stretching Yoga",
      channel: "Seva Prithodko",
      live: false,
      publishedDate: new Date("2021-08-25"),
    },
    {
      audience: "6+",
      category: "sport",
    },
  ],
  [
    {
      src: "https://www.youtube.com/embed/23WTBzutLJE",
      description: "PERFECT 20 MIN FULL BODY WORKOUT - FOR BEGINNERS",
      channel: "BullyJuice",
      live: false,
      publishedDate: new Date("2024-09-23"),
    },
    {
      audience: "6+",
      category: "sport",
    },
  ],
];
// buttons
export const buttons = [
  {
    text: "Delete educational videos",
  },
  {
    text: "Delete sports videos",
  },
];

export const deleteSportsVideos = (id) => {
  sportsVideos = sportsVideos.filter((p) => p.id !== id);
  refresh();
};
export const deleteEducationVideos = (id) => {
  educationVideos = educationVideos.filter((p) => p.id !== id);
  refresh();
};

// .....................................

// // Список наблюдателей
// const observers = [];

// /**
//  * Функция для подписки на изменения данных
//  * @param {function} observer - Функция, которая будет вызвана при изменении данных
//  */
// export const subscribe = (observer) => {
//   observers.push(observer); // Добавляем наблюдателя в список
// };

// /**
//  * Функция для отписки от изменений данных
//  * @param {function} observer - Функция, которую нужно удалить из списка наблюдателей
//  */
// export const unsubscribe = (observer) => {
//   const index = observers.indexOf(observer);
//   if (index > -1) {
//     observers.splice(index, 1); // Удаляем наблюдателя из списка
//   }
// };

// /**
//  * Функция для уведомления всех наблюдателей об изменениях
//  */
// export const emit = () => {
//   observers.forEach((observer) => observer()); // Вызываем все функции-наблюдатели
// };

// // Пример использования в существующих функциях управления данными
// export const addAudioTrack = (newTrack) => {
//   audioTracks.push(newTrack);
//   emit(); // Уведомляем всех, что данные изменились
// };

// export const addEducationVideo = (newVideo) => {
//   educationVideos.push([newVideo]);
//   emit();
// };

// export const addSportsVideo = (newVideo) => {
//   sportsVideos.push([newVideo]);
//   emit();
// };
