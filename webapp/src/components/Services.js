import React from 'react';

const services = [
  {
    icon: '💈',
    title: 'Мужская стрижка',
    text: 'Точная геометрия, плавные переходы и стильная укладка под твой вайб.'
  },
  {
    icon: '🪒',
    title: 'Королевское бритьё',
    text: 'Горячее полотенце, чистый контур и максимально аккуратная работа с кожей.'
  },
  {
    icon: '🔥',
    title: 'Комплекс Premium',
    text: 'Стрижка + борода + уход. Полный апгрейд образа за один визит.'
  }
];

export function Services() {
  return React.createElement(
    'section',
    { className: 'container services', id: 'services' },
    ...services.map((service) =>
      React.createElement(
        'article',
        { className: 'card', key: service.title },
        React.createElement('div', { style: { fontSize: '1.3rem' } }, service.icon),
        React.createElement('h3', null, service.title),
        React.createElement('p', { className: 'lead' }, service.text)
      )
    )
  );
}
