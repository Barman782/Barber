import React from 'react';

const particles = Array.from({ length: 16 }, (_, i) => ({
  id: i,
  x: (i * 13) % 100,
  size: 6 + (i % 4) * 4,
  delay: (i % 6) * 0.6,
  duration: 8 + (i % 5)
}));

export function BackgroundFx() {
  return React.createElement(
    'div',
    { className: 'bg-fx', 'aria-hidden': 'true' },
    React.createElement('div', { className: 'bg-grid' }),
    React.createElement('div', { className: 'bg-orb bg-orb-1' }),
    React.createElement('div', { className: 'bg-orb bg-orb-2' }),
    React.createElement('div', { className: 'bg-orb bg-orb-3' }),
    ...particles.map((particle) =>
      React.createElement('span', {
        key: particle.id,
        className: 'bg-particle',
        style: {
          left: `${particle.x}%`,
          width: `${particle.size}px`,
          height: `${particle.size}px`,
          animationDelay: `${particle.delay}s`,
          animationDuration: `${particle.duration}s`
        }
      })
    )
  );
}
