import { useEffect, useState } from 'react';

export function useTelegramStatus() {
  const [status, setStatus] = useState('Проверяем окружение Telegram Mini App...');

  useEffect(() => {
    const tg = window.Telegram?.WebApp;

    if (tg) {
      tg.ready();
      tg.expand();
      setStatus('Telegram Mini App активен: можно подключить мгновенную запись через бота.');
      return;
    }

    setStatus('Сайт работает автономно. В Telegram откроется режим Mini App с быстрыми действиями.');
  }, []);

  return status;
}
