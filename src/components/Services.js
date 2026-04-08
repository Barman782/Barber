import React from 'react';

function CutIcon() {
  return React.createElement(
    'svg',
    { viewBox: '0 0 64 64', 'aria-hidden': 'true' },
    React.createElement('circle', { cx: '14', cy: '18', r: '7' }),
    React.createElement('circle', { cx: '14', cy: '46', r: '7' }),
    React.createElement('path', { d: 'M20 22L56 10 34 30z' }),
    React.createElement('path', { d: 'M20 42L56 54 34 34z' }),
    React.createElement('path', { d: 'M18 23l15 10-15 10' })
  );
}

function BeardIcon() {
  return React.createElement(
    'svg',
    { viewBox: '0 0 64 64', 'aria-hidden': 'true' },
    React.createElement('path', { d: 'M18 14h28v6H18z' }),
    React.createElement('path', { d: 'M14 26h36l-4 12H18z' }),
    React.createElement('path', { d: 'M22 38c0 8 5 12 10 12s10-4 10-12' }),
    React.createElement('path', { d: 'M20 48h24' })
  );
}

function PremiumIcon() {
  return React.createElement(
    'svg',
    { viewBox: '0 0 64 64', 'aria-hidden': 'true' },
    React.createElement('path', { d: 'M32 8 12 18v16c0 13 9 20 20 24 11-4 20-11 20-24V18z' }),
    React.createElement('path', { d: 'm24 32 6 6 10-12' })
  );
}

const services = [
  { Icon: CutIcon, title: 'Мужская стрижка', text: 'Fade, crop, taper — чистая геометрия и форма под твой стиль.' },
  { Icon: BeardIcon, title: 'Борода и контур', text: 'Четкая линия бороды, симметрия и уход для плотной текстуры.' },
  { Icon: PremiumIcon, title: 'Комплекс Premium', text: 'Стрижка + борода + укладка. Полный образ за один визит.' }
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
          React.createElement(
            'div',
            { className: `service-icon-svg icon-motion-${index + 1}` },
            React.createElement(service.Icon)
          ),
          React.createElement('h3', null, service.title),
          React.createElement('p', { className: 'lead' }, service.text)
        )
      )
    )
  );
}
