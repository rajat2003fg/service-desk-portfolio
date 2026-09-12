import React from 'react';

interface HeroFooterProps {
  onScrollClick: () => void;
  onOpenAvailability: () => void;
  onSelectSection?: (sectionId: 'resume' | 'skills' | 'projects' | 'education' | 'contact') => void;
}

export const HeroFooter: React.FC<HeroFooterProps> = ({
  onScrollClick,
  onOpenAvailability,
  onSelectSection,
}) => {
  return (
    <footer className="hero-footer animate-fade-up delay-5" id="heroFooter">
      {/* Left Section: Key Stats and Social Channels */}
      <div className="footer-left" id="footerLeft">
        <div className="stats-group" id="statsGroup">
          <div
            className="stat-item"
            id="statItemExperience"
            onClick={() => onSelectSection?.('skills')}
            style={{ cursor: 'pointer' }}
            title="Click to view Skills & L1 Service Desk profile"
            role="button"
            tabIndex={0}
          >
            <span className="stat-number">L1</span>
            <span className="stat-label">Service Desk Ready ↗</span>
          </div>

          <div className="stat-line" aria-hidden="true"></div>

          <div
            className="stat-item"
            id="statItemProjects"
            onClick={() => onSelectSection?.('education')}
            style={{ cursor: 'pointer' }}
            title="Click to view Education & Certifications"
            role="button"
            tabIndex={0}
          >
            <span className="stat-number">2025</span>
            <span className="stat-label">B.Tech Engineering ↗</span>
          </div>

          <div className="stat-line" aria-hidden="true"></div>

          <div
            className="stat-item"
            id="statItemAwards"
            onClick={() => onSelectSection?.('projects')}
            style={{ cursor: 'pointer' }}
            title="Click to view Hands-on Troubleshooting Projects"
            role="button"
            tabIndex={0}
          >
            <span className="stat-number">L1</span>
            <span className="stat-label">Hands-on Troubleshooting ↗</span>
          </div>
        </div>

        {/* Social Links with Direct Resume Channels */}
        <div className="social-links" id="socialLinks">
          <a
            href="https://linkedin.com/in/connect-with-rajat-nimje"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="LinkedIn Profile"
            id="socialLinkLinkedin"
            title="LinkedIn: connect-with-rajat-nimje"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <a
            href="https://github.com/rajat2003fg"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="GitHub Profile"
            id="socialLinkGithub"
            title="GitHub: rajat2003fg"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <a
            href="mailto:rajatnimje434@gmail.com"
            className="social-link"
            aria-label="Email Rajat Nimje"
            id="socialLinkEmail"
            title="Email: rajatnimje434@gmail.com"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </a>
          <a
            href="tel:+919049478926"
            className="social-link"
            aria-label="Call Rajat Nimje"
            id="socialLinkPhone"
            title="Phone: +91 9049478926"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Middle Section: Scroll Indicator with Animated Wheel */}
      <div
        className="scroll-indicator"
        id="scrollIndicator"
        onClick={onScrollClick}
        role="button"
        tabIndex={0}
        aria-label="Scroll down to explore"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            onScrollClick();
          }
        }}
      >
        <div className="mouse-pill" aria-hidden="true">
          <div className="wheel"></div>
        </div>
        <span className="scroll-indicator-text">EXPLORE</span>
      </div>

      {/* Right Section: Glassmorphism Panel (Availability Card) */}
      <div
        className="availability-card glass-panel"
        id="availabilityCard"
        onClick={onOpenAvailability}
        style={{ cursor: 'pointer' }}
        title="Click to inquire or interview"
      >
        <div className="panel-header">
          <span className="pulse-dot" aria-label="Status active"></span>
          <span className="panel-status-text">AVAILABLE FOR HIRE</span>
        </div>
        <p className="panel-desc">
          Actively seeking Global IT Service Desk (L1) & Technical Support roles. Open to relocation & remote.
        </p>
      </div>
    </footer>
  );
};
