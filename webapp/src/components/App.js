import React from 'react';
import { Header } from './Header.js';
import { Hero } from './Hero.js';
import { Services } from './Services.js';
import { Gallery } from './Gallery.js';
import { Pricing } from './Pricing.js';
import { Reviews } from './Reviews.js';
import { Footer } from './Footer.js';
import { BackgroundFx } from './BackgroundFx.js';
import { Scissors } from './Scissors.js';
import { useParallax } from '../hooks/useParallax.js';
import { useTelegramStatus } from '../hooks/useTelegramStatus.js';

export function App() {
  useParallax('.floater, .tilt-card, .price-card', 20);
  const telegramStatus = useTelegramStatus();

  return React.createElement(
    'main',
    { className: 'app' },
    React.createElement(BackgroundFx),
    React.createElement('div', { className: 'floater f1' }),
    React.createElement('div', { className: 'floater f2' }),
    React.createElement('div', { className: 'floater f3' }),
    React.createElement('div', { className: 'floater f4' }),
    React.createElement(Scissors),
    React.createElement(Header),
    React.createElement(Hero, { telegramStatus }),
    React.createElement(Services),
    React.createElement(Gallery),
    React.createElement(Pricing),
    React.createElement(Reviews),
    React.createElement(Footer)
  );
}
