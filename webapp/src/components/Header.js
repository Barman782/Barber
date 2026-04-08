import React from 'react';

function LogoIcon() {
  return React.createElement(
    'svg',
    {
      className: 'logo-mark',
      viewBox: '0 0 64 64',
      role: 'img',
      'aria-label': 'Barberton logo'
    },
    React.createElement('rect', { x: '6', y: '6', width: '52', height: '52', rx: '16' }),
    React.createElement('path', { d: 'M23 18v28M23 18h12c5 0 8 3 8 7 0 4-3 7-8 7h-12m12 0c5 0 8 3 8 7s-3 7-8 7H23' }),
    React.createElement('circle', { cx: '14', cy: '20', r: '4' }),
    React.createElement('circle', { cx: '14', cy: '44', r: '4' }),
    React.createElement('path', { d: 'M18 22l8 8-8 8' })
  );
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
          React.createElement('span', null, 'signature cuts & beard craft')
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
