import { useEffect } from 'react';

export function useParallax(selector = '.floater', strength = 26) {
  useEffect(() => {
    const nodes = [...document.querySelectorAll(selector)];
    if (!nodes.length) return;

    const onMove = (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * strength;
      const y = (event.clientY / window.innerHeight - 0.5) * strength;

      nodes.forEach((node, index) => {
        const depth = (index + 1) * 0.34;
        node.style.transform = `translate(${x * depth}px, ${y * depth}px)`;
      });
    };

    window.addEventListener('pointermove', onMove);

    return () => {
      window.removeEventListener('pointermove', onMove);
    };
  }, [selector, strength]);
}
