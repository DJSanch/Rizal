'use client';
import React from 'react';

export default function ScrollProgress() {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function onScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(1, Math.max(0, scrollTop / docHeight)) : 0;
      if (ref.current) {
        ref.current.style.transform = `scaleX(${progress})`;
      }
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed left-0 right-0 top-0 z-40 h-1 bg-transparent">
      <div
        ref={ref}
        className="h-full origin-left bg-primary transition-transform duration-150 ease-linear"
        style={{ transform: 'scaleX(0)' }}
        aria-hidden
      />
    </div>
  );
}


