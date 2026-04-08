import React from 'react';
import { Header } from './Header.js';
import { Hero } from './Hero.js';
import { Services } from './Services.js';
import { Footer } from './Footer.js';
import { Scissors } from './Scissors.js';
import { useParallax } from '../hooks/useParallax.js';
import { useTelegramStatus } from '../hooks/useTelegramStatus.js';

export function App() {
  useParallax('.floater', 28);
  const telegramStatus = useTelegramStatus();

  return React.createElement(
    'main',
    { className: 'app' },
    React.createElement('div', { className: 'floater f1' }),
    React.createElement('div', { className: 'floater f2' }),
    React.createElement('div', { className: 'floater f3' }),
    React.createElement(Scissors),
    React.createElement(Header),
    React.createElement(Hero, { telegramStatus }),
    React.createElement(Services),
    React.createElement(Footer)
  );
}
