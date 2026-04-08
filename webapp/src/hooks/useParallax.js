import { useEffect } from 'react';

export function useParallax(selector = '.floater', strength = 26) {
  useEffect(() => {
    const nodes = [...document.querySelectorAll(selector)];
    if (!nodes.length) return;

    let frame = 0;

    const onMove = (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * strength;
      const y = (event.clientY / window.innerHeight - 0.5) * strength;

      if (frame) cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        nodes.forEach((node, index) => {
          const depth = (index + 1) * 0.32;
          node.style.setProperty('--px', `${x * depth}px`);
          node.style.setProperty('--py', `${y * depth}px`);
        });
      });
    };

    window.addEventListener('pointermove', onMove, { passive: true });

    return () => {
      window.removeEventListener('pointermove', onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [selector, strength]);
}
