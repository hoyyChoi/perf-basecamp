import { useEffect, useRef } from 'react';
import styles from './CustomCursor.module.css';

type CustomCursorProps = { text?: string };

const CustomCursor = ({ text = '' }: CustomCursorProps) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const posRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const el = cursorRef.current;
    if (!el) return;

    const onMove = (e: PointerEvent) => {
      posRef.current.x = e.clientX;
      posRef.current.y = e.clientY;

      if (rafRef.current == null) {
        rafRef.current = requestAnimationFrame(() => {
          rafRef.current = null;
          const { x, y } = posRef.current;
          el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        });
      }
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', onMove);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div ref={cursorRef} className={styles.cursor} aria-hidden>
      {text.split('').map((char, i) => (
        <span key={i} className={styles.character}>
          {char}
        </span>
      ))}
    </div>
  );
};

export default CustomCursor;
