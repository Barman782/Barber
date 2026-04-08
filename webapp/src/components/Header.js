import React from 'react';

export function Header() {
  return React.createElement(
    'header',
    { className: 'nav' },
    React.createElement(
      'div',
      { className: 'container nav-inner' },
      React.createElement('div', { className: 'logo' }, React.createElement('span', null, 'Barber'), 'ton'),
      React.createElement(
        'nav',
        { className: 'menu' },
        React.createElement('a', { href: '#services' }, 'Услуги'),
        React.createElement('a', { href: '#contacts' }, 'Контакты'),
        React.createElement('a', { href: 'tel:+79990000000' }, 'Запись')
      )
    )
  );
}
