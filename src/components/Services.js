import React from 'react';

const services = [
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/9102/9102468.png',
    title: 'Мужская стрижка',
    text: 'Точная геометрия, плавные переходы и укладка, которая держит форму весь день.'
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/9102/9102459.png',
    title: 'Борода и контур',
    text: 'Горячее полотенце, чистые линии и деликатная работа с кожей без раздражения.'
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/9102/9102473.png',
    title: 'Комплекс Premium',
    text: 'Стрижка + борода + рекомендации по уходу. Полный апгрейд образа за один визит.'
  }
];

export function Services() {
  return React.createElement(
    'section',
    { className: 'container services-wrap', id: 'services' },
    React.createElement('h2', { className: 'section-title' }, 'Услуги'),
    React.createElement(
      'div',
      { className: 'services' },
      ...services.map((service, index) =>
        React.createElement(
          'article',
          { className: 'card tilt-card', key: service.title },
          React.createElement('img', {
            className: `service-icon-img icon-motion-${index + 1}`,
            src: service.icon,
            alt: `${service.title} icon`,
            loading: index === 0 ? 'eager' : 'lazy',
            decoding: 'async',
            width: 64,
            height: 64
          }),
          React.createElement('h3', null, service.title),
          React.createElement('p', { className: 'lead' }, service.text)
        )
      )
    )
  );
}
