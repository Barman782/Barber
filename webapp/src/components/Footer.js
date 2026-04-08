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
      'г. Москва, ул. Стиля, 21',
      React.createElement('br'),
      'Ежедневно: 10:00–22:00'
    ),
    React.createElement(
      'div',
      { className: 'footer-links' },
      React.createElement('a', { href: 'tel:+79990000000' }, '+7 (999) 000-00-00'),
      React.createElement('a', { href: '#', onClick: (e) => e.preventDefault() }, '@barberton.style'),
      React.createElement('a', { href: '#', onClick: (e) => e.preventDefault() }, 'Запись в Direct')
    )
  );
}
