import React from 'react';

const reviews = [
  { name: 'Артём', text: 'Фейд идеальный, форма держится даже через 3 недели.', score: '5.0' },
  { name: 'Илья', text: 'Сделал бороду так, что на работе все спросили контакты мастера.', score: '5.0' },
  { name: 'Максим', text: 'Очень быстро, чётко и без лишней суеты. Сайт и сервис — топ.', score: '5.0' }
];

export function Reviews() {
  return React.createElement(
    'section',
    { className: 'container reviews-wrap' },
    React.createElement('h2', { className: 'section-title' }, 'Отзывы клиентов'),
    React.createElement(
      'div',
      { className: 'reviews-grid' },
      ...reviews.map((review) =>
        React.createElement(
          'article',
          { className: 'review-card', key: review.name },
          React.createElement('strong', null, `${review.name} • ${review.score} ★`),
          React.createElement('p', { className: 'lead' }, review.text)
        )
      )
    )
  );
}
