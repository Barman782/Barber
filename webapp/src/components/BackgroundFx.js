import React from 'react';

const particles = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  x: (i * 17) % 100,
  size: 5 + (i % 4) * 3,
  delay: (i % 7) * 0.45,
  duration: 7 + (i % 5)
}));

export function BackgroundFx() {
  return React.createElement(
    'div',
    { className: 'bg-fx', 'aria-hidden': 'true' },
    React.createElement('div', { className: 'barber-pole pole-left' }),
    React.createElement('div', { className: 'barber-pole pole-right' }),
    React.createElement('div', { className: 'bg-grid' }),
    React.createElement('div', { className: 'bg-wave bg-wave-1' }),
    React.createElement('div', { className: 'bg-wave bg-wave-2' }),
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
