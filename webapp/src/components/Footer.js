import React from 'react';

export function Footer() {
  return React.createElement(
    'footer',
    { className: 'container footer', id: 'contacts' },
    React.createElement(
      'div',
      null,
      React.createElement('strong', null, 'Barberton Studio'),
      React.createElement('br'),
      'г. Москва, ул. Стиля, 21'
    ),
    React.createElement(
      'div',
      null,
      'Телефон: ',
      React.createElement('a', { href: 'tel:+79990000000', style: { color: '#e9d5ff' } }, '+7 (999) 000-00-00'),
      React.createElement('br'),
      'Instagram: @barberton.style'
    )
  );
}
