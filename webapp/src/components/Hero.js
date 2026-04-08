import React from 'react';

export function Hero({ telegramStatus }) {
  return React.createElement(
    'section',
    { className: 'container hero' },
    React.createElement(
      'div',
      null,
      React.createElement('div', { className: 'badge' }, '✂️ Barberton Premium Style'),
      React.createElement(
        'h1',
        null,
        'Меня зовут ',
        React.createElement('span', { className: 'gradient' }, 'Barberton'),
        '.',
        React.createElement('br'),
        'Сделаю тебе стрижку, которую запомнят.'
      ),
      React.createElement(
        'p',
        { className: 'lead' },
        'Современные фейды, текстурные стрижки, идеальный контур бороды и уход по премиум стандарту. Здесь динамика, стиль и атмосфера «вау» с первого взгляда.'
      ),
      React.createElement(
        'div',
        { className: 'actions' },
        React.createElement('a', { className: 'btn btn-main', href: 'tel:+79990000000' }, 'Записаться сейчас'),
        React.createElement('a', { className: 'btn btn-ghost', href: '#contacts' }, 'Связаться')
      )
    ),
    React.createElement(
      'aside',
      { className: 'glass' },
      React.createElement('h2', { style: { marginTop: 0 } }, 'Почему это топчик'),
      React.createElement(
        'p',
        { className: 'lead' },
        'Подбор образа под тип лица, твой стиль жизни и ритм дня. Чёткая форма, удобная укладка и внимание к деталям, которые выделяют тебя в толпе.'
      ),
      React.createElement(
        'div',
        { className: 'metrics' },
        React.createElement('div', { className: 'metric' }, React.createElement('strong', null, '7+ лет'), 'опыта'),
        React.createElement('div', { className: 'metric' }, React.createElement('strong', null, '1 200+'), 'клиентов'),
        React.createElement('div', { className: 'metric' }, React.createElement('strong', null, '5.0 ★'), 'рейтинг')
      ),
      React.createElement('div', { className: 'tg-status' }, telegramStatus)
    )
  );
}
