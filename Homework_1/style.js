// Устанавливаем текст для логотипа и иконки меню
logo.textContent = 'My Logo';
menuIcon.textContent = '≡'; // Символ для иконки меню
h1.textContent = 'Playlist';

// Применяем стили
const styles = {
  '*': {
    margin: '0',
    padding: '0',
    boxSizing: 'border-box',
  },
  body: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#1c1c1c',
    color: '#fff',
  },
  header: {
    backgroundColor: '#333',
    padding: '10px',
    display: 'flex',
    alignItems: 'center',
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '8px',
    alignItems: 'center',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#ff2c91',
  },
  menuIcon: {
    fontSize: '1.5rem',
    color: '#fff',
    cursor: 'pointer',
  },
  main: {
    padding: '20px',
  },
  playlistSection: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  h1: {
    marginBottom: '20px',
    fontSize: '2rem',
  },
};

// Применяем стили к элементам
function applyStyles(element, styles) {
  for (const property in styles) {
    element.style[property] = styles[property];
  }
}

// Применяем стили
applyStyles(header, styles.header);
applyStyles(nav, styles.nav);
applyStyles(logo, styles.logo);
applyStyles(menuIcon, styles.menuIcon);
applyStyles(main, styles.main);
applyStyles(h1, styles.h1);