import React from 'react';

function LogoIcon() {
  return React.createElement('img', {
    className: 'logo-icon-img logo-icon-spin',
    src: 'https://cdn-icons-png.flaticon.com/512/9102/9102459.png',
    alt: 'Barber Shop icon by Flaticon',
    width: 38,
    height: 38,
    loading: 'eager',
    decoding: 'async'
  });
}

export function Header() {
  return React.createElement(
    'header',
    { className: 'nav' },
    React.createElement(
      'div',
      { className: 'container nav-inner' },
      React.createElement(
        'div',
        { className: 'logo' },
        React.createElement(LogoIcon),
        React.createElement(
          'div',
          { className: 'logo-text' },
          React.createElement('strong', null, 'BARBERTON'),
          React.createElement('span', null, 'premium barber experience')
        )
      ),
      React.createElement(
        'nav',
        { className: 'menu' },
        React.createElement('a', { href: '#services' }, 'Услуги'),
        React.createElement('a', { href: '#gallery' }, 'Галерея'),
        React.createElement('a', { href: '#pricing' }, 'Прайс'),
        React.createElement('a', { href: '#contacts' }, 'Контакты'),
        React.createElement('a', { className: 'menu-cta', href: 'tel:+79990000000' }, 'Запись')
      )
    )
  );
}
