import React from 'react';

export function Scissors() {
  return React.createElement(
    'div',
    { className: 'scissors-wrap', 'aria-hidden': 'true' },
    React.createElement(
      'svg',
      {
        className: 'scissors sc-1',
        viewBox: '0 0 120 120',
        role: 'img',
        'aria-label': 'Scissors animation'
      },
      React.createElement('circle', { cx: '20', cy: '20', r: '13' }),
      React.createElement('circle', { cx: '20', cy: '100', r: '13' }),
      React.createElement('path', { d: 'M30 28 L102 8 L63 55 Z' }),
      React.createElement('path', { d: 'M30 92 L102 112 L63 65 Z' }),
      React.createElement('path', { d: 'M28 30 L60 60 L28 90' })
    ),
    React.createElement(
      'svg',
      {
        className: 'scissors sc-2',
        viewBox: '0 0 120 120',
        role: 'img',
        'aria-label': 'Scissors animation secondary'
      },
      React.createElement('circle', { cx: '20', cy: '20', r: '13' }),
      React.createElement('circle', { cx: '20', cy: '100', r: '13' }),
      React.createElement('path', { d: 'M30 28 L102 8 L63 55 Z' }),
      React.createElement('path', { d: 'M30 92 L102 112 L63 65 Z' }),
      React.createElement('path', { d: 'M28 30 L60 60 L28 90' })
    )
  );
}
