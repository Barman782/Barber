import React from 'react';

const plans = [
  { name: 'Fade Start', price: '1 800 ₽', time: '45 мин', features: ['Fade + укладка', 'Мытьё головы', 'Советы по стайлингу'] },
  { name: 'Beard Pro', price: '1 500 ₽', time: '35 мин', features: ['Контур и длина', 'Горячее полотенце', 'Уход за кожей'] },
  { name: 'Full Upgrade', price: '2 900 ₽', time: '70 мин', features: ['Стрижка + борода', 'Укладка премиум', 'Фото-результат'] }
];

export function Pricing() {
  return React.createElement(
    'section',
    { className: 'container pricing-wrap', id: 'pricing' },
    React.createElement('h2', { className: 'section-title' }, 'Прайс и форматы'),
    React.createElement(
      'div',
      { className: 'pricing-grid' },
      ...plans.map((plan) =>
        React.createElement(
          'article',
          { className: 'price-card', key: plan.name },
          React.createElement('h3', null, plan.name),
          React.createElement('p', { className: 'price-value' }, plan.price),
          React.createElement('p', { className: 'lead' }, plan.time),
          React.createElement(
            'ul',
            null,
            ...plan.features.map((item) => React.createElement('li', { key: item }, item))
          ),
          React.createElement('a', { href: 'tel:+79990000000', className: 'btn btn-main' }, 'Выбрать')
        )
      )
    )
  );
}
