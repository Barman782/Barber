import React from 'react';

const photos = [
  {
    src: 'https://images.unsplash.com/photo-1503951458645-643d53dff0f1?auto=format&fit=crop&w=1200&q=70&v=3',
    alt: 'Барбер с машинкой делает fade'
  },
  {
    src: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1200&q=70&v=3',
    alt: 'Рабочее место в барбершопе'
  },
  {
    src: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1200&q=70&v=3',
    alt: 'Барбер оформляет бороду'
  },
  {
    src: 'https://images.unsplash.com/photo-1622288432450-277d0fef5ed6?auto=format&fit=crop&w=1200&q=70&v=3',
    alt: 'Премиальный интерьер барбершопа'
  }
];

export function Gallery() {
  return React.createElement(
    'section',
    { className: 'container gallery-wrap', id: 'gallery' },
    React.createElement('h2', { className: 'section-title' }, 'Галерея barber-визуала'),
    React.createElement(
      'div',
      { className: 'gallery-grid' },
      ...photos.map((photo, index) =>
        React.createElement(
          'figure',
          { className: `gallery-card gallery-card-${index + 1}`, key: photo.src },
          React.createElement('img', {
            src: photo.src,
            alt: photo.alt,
            loading: index === 0 ? 'eager' : 'lazy',
            decoding: 'async',
            width: 1200,
            height: 800
          })
        )
      )
    )
  );
}
