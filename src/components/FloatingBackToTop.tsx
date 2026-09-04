import React, { useEffect, useState } from 'react';

export const FloatingBackToTop: React.FC = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!showButton) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '1.75rem',
        right: '1.75rem',
        zIndex: 90,
        display: 'flex',
        flexDirection: 'column',
        gap: '0.6rem',
        alignItems: 'center',
      }}
    >
      {/* Quick WhatsApp Support Icon */}
      <a
        href="https://wa.me/919049478926"
        target="_blank"
        rel="noreferrer"
        style={{
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          backgroundColor: '#25D366',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
          textDecoration: 'none',
          fontSize: '1.3rem',
          transition: 'transform 0.2s ease',
        }}
        title="Chat with Rajat on WhatsApp"
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        💬
      </a>

      {/* Back to Top button */}
      <button
        type="button"
        onClick={scrollToTop}
        style={{
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          backgroundColor: 'rgba(20, 20, 30, 0.9)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(138, 99, 248, 0.4)',
          color: 'var(--accent-color)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
          fontSize: '1.1rem',
          fontWeight: 'bold',
          transition: 'transform 0.2s ease, background-color 0.2s ease',
        }}
        title="Scroll to Top"
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.08)';
          e.currentTarget.style.backgroundColor = 'rgba(138, 99, 248, 0.25)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.backgroundColor = 'rgba(20, 20, 30, 0.9)';
        }}
      >
        ▲
      </button>
    </div>
  );
};
