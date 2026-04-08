import React from 'react';

export function Hero({ telegramStatus }) {
  return React.createElement(
    'section',
    { className: 'container hero' },
    React.createElement(
      'div',
      null,
      React.createElement('div', { className: 'badge' }, 'Barberton • fades, beard, style'),
      React.createElement(
        'h1',
        null,
        'Barberton 2.0: стрижки с ',
        React.createElement('span', { className: 'gradient' }, 'характером'),
        React.createElement('br'),
        'и динамикой нового уровня.'
      ),
      React.createElement(
        'p',
        { className: 'lead' },
        'Усилил концепт: больше контраста, больше анимации, больше барбер-атмосферы. Теперь лендинг с отдельными блоками прайса и отзывов, чтобы визуально было сразу понятно, что это премиум-сервис.'
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
      { className: 'glass hero-visual' },
      React.createElement('img', {
        src: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=900&q=70&v=2',
        alt: 'Барбер делает современную стрижку',
        loading: 'eager',
        decoding: 'async',
        fetchPriority: 'high',
        width: 900,
        height: 1100
      }),
      React.createElement(
        'div',
        { className: 'hero-chip' },
        React.createElement('strong', null, '7+ лет опыта'),
        React.createElement('span', null, '1200+ клиентов • рейтинг 5.0')
      )
    )
  );
}
