import React from 'react';

export type SectionTab = 'resume' | 'skills' | 'projects' | 'education' | 'contact';

interface QuickDockProps {
  onOpenSection: (tab: SectionTab) => void;
  onScrollToSection?: (sectionId: string) => void;
  activeSection?: SectionTab | null;
}

export const QuickDock: React.FC<QuickDockProps> = ({
  onOpenSection,
  onScrollToSection,
  activeSection,
}) => {
  const dockItems: { id: SectionTab; label: string; icon: string; keyHint: string; targetId: string }[] = [
    { id: 'skills', label: 'Skills', icon: '⚙️', keyHint: '2', targetId: 'skills' },
    { id: 'projects', label: 'Cases', icon: '🛠️', keyHint: '3', targetId: 'projects' },
    { id: 'education', label: 'Education', icon: '🎓', keyHint: '4', targetId: 'education' },
    { id: 'resume', label: 'Resume', icon: '📄', keyHint: '1', targetId: 'resume' },
    { id: 'contact', label: 'Contact', icon: '✉️', keyHint: '5', targetId: 'contact' },
  ];

  const handleClick = (item: typeof dockItems[0]) => {
    // If mobile or requested, open the focused tab modal
    if (window.innerWidth <= 768) {
      onOpenSection(item.id);
    } else if (onScrollToSection) {
      onScrollToSection(item.targetId);
    } else {
      const el = document.getElementById(item.targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        onOpenSection(item.id);
      }
    }
  };

  return (
    <div
      className="quick-dock animate-fade-up delay-4"
      id="quickDock"
      style={{
        position: 'fixed',
        bottom: '1.25rem',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 90,
        display: 'flex',
        alignItems: 'center',
        gap: '0.35rem',
        padding: '0.35rem 0.6rem',
        borderRadius: '30px',
        backgroundColor: 'rgba(15, 15, 20, 0.85)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.14)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.55), 0 0 20px rgba(138, 99, 248, 0.15)',
        maxWidth: '94vw',
        overflowX: 'auto',
      }}
    >
      <button
        type="button"
        onClick={() => {
          if (onScrollToSection) onScrollToSection('heroSection');
          else document.getElementById('heroSection')?.scrollIntoView({ behavior: 'smooth' });
        }}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontSize: '0.7rem',
          color: 'var(--accent-color)',
          fontWeight: 700,
          letterSpacing: '0.8px',
          textTransform: 'uppercase',
          padding: '0 0.5rem 0 0.4rem',
          borderRight: '1px solid rgba(255, 255, 255, 0.1)',
          whiteSpace: 'nowrap',
          display: 'flex',
          alignItems: 'center',
          gap: '0.35rem',
        }}
        title="Scroll to Top"
      >
        <span className="pulse-dot" style={{ width: '6px', height: '6px' }} />
        SECTIONS
      </button>

      {dockItems.map((item) => {
        const isActive = activeSection === item.id;
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => handleClick(item)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              padding: '0.35rem 0.75rem',
              borderRadius: '20px',
              border: isActive
                ? '1px solid var(--accent-color)'
                : '1px solid transparent',
              backgroundColor: isActive
                ? 'rgba(138, 99, 248, 0.22)'
                : 'rgba(255, 255, 255, 0.04)',
              color: isActive ? '#fff' : '#d5d5d5',
              fontSize: '0.78rem',
              fontWeight: 600,
              fontFamily: 'var(--font-secondary)',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              if (!isActive) {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.color = '#fff';
                e.currentTarget.style.borderColor = 'rgba(138, 99, 248, 0.4)';
              }
            }}
            onMouseLeave={(e) => {
              if (!isActive) {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.04)';
                e.currentTarget.style.color = '#d5d5d5';
                e.currentTarget.style.borderColor = 'transparent';
              }
            }}
            title={`Go to ${item.label} (Click to scroll, or press ${item.keyHint})`}
          >
            <span style={{ fontSize: '0.85rem' }}>{item.icon}</span>
            <span>{item.label}</span>
          </button>
        );
      })}

      {/* Direct Tab Modal Launcher */}
      <button
        type="button"
        onClick={() => onOpenSection('resume')}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.25rem',
          padding: '0.3rem 0.65rem',
          borderRadius: '16px',
          border: '1px solid rgba(138, 99, 248, 0.4)',
          backgroundColor: 'rgba(138, 99, 248, 0.15)',
          color: 'var(--accent-color)',
          fontSize: '0.72rem',
          fontWeight: 700,
          cursor: 'pointer',
          whiteSpace: 'nowrap',
          marginLeft: '0.2rem',
        }}
        title="Open in Focused Modal Tab"
      >
        <span>🗖</span>
        <span>TAB VIEW</span>
      </button>
    </div>
  );
};
