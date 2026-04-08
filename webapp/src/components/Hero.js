import React from 'react';

export function Hero({ telegramStatus }) {
  return React.createElement(
    'section',
    { className: 'container hero' },
    React.createElement(
      'div',
      null,
      React.createElement('div', { className: 'badge badge-v3' }, 'BLACK LABEL EDITION • v3'),
      React.createElement(
        'h1',
        null,
        'Barberton ',
        React.createElement('span', { className: 'gradient' }, 'BLACK LABEL'),
        React.createElement('br'),
        'Самый дерзкий редизайн.'
      ),
      React.createElement(
        'p',
        { className: 'lead' },
        'Полностью обновил визуал: новый барбер-фон, свежие иконки, жирная типографика и более агрессивный премиум-стиль. Если видишь старое — это кэш, обнови страницу принудительно.'
      ),
      React.createElement(
        'div',
        { className: 'actions' },
        React.createElement('a', { className: 'btn btn-main pulse', href: 'tel:+79990000000' }, 'Записаться сейчас'),
        React.createElement('a', { className: 'btn btn-ghost', href: '#gallery' }, 'Смотреть работы')
      ),
      React.createElement('div', { className: 'tg-status' }, telegramStatus)
    ),
    React.createElement(
      'aside',
      { className: 'glass hero-visual hero-visual-contrast' },
      React.createElement('img', {
        src: 'https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=900&q=70&v=9',
        alt: 'Барбер с инструментами',
        loading: 'eager',
        decoding: 'async',
        fetchPriority: 'high',
        width: 900,
        height: 1100
      }),
      React.createElement(
        'div',
        { className: 'hero-chip' },
        React.createElement('strong', null, 'New style deployed'),
        React.createElement('span', null, 'Hard refresh если не видно изменений')
      )
    )
  );
}
