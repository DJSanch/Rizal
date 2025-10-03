'use client';
import React from 'react';
import { Button } from '@/components/ui/button';

export default function BackToTop() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        right: '1rem',
        bottom: '1rem',
        zIndex: 50,
        transition: 'opacity 200ms ease, transform 200ms ease',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(8px)'
      }}
    >
      <Button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        variant="secondary"
        className="shadow"
        aria-label="Back to top"
      >
        ↑ Top
      </Button>
    </div>
  );
}


