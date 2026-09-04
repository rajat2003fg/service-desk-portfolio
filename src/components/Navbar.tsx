import React, { useState } from 'react';

interface NavbarProps {
  activeLink: string;
  setActiveLink: (link: string) => void;
  onOpenContact: () => void;
  onOpenCv?: () => void;
  onOpenProjects?: () => void;
  onScrollTo?: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeLink,
  setActiveLink,
  onOpenContact,
  onOpenCv,
  onOpenProjects,
  onScrollTo,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'HOME', id: 'home', target: 'heroSection' },
    { label: 'SKILLS', id: 'skills', target: 'skills' },
    { label: 'CASE STUDIES', id: 'projects', target: 'projects' },
    { label: 'EDUCATION', id: 'education', target: 'education' },
    { label: 'RESUME', id: 'resume', target: 'resume' },
    { label: 'CONTACT', id: 'contact', target: 'contact' },
  ];

  const handleLinkClick = (targetId: string, linkId?: string) => {
    setActiveLink(linkId || targetId);
    setMobileMenuOpen(false);
    if (onScrollTo) {
      onScrollTo(targetId);
    } else {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="navbar animate-fade-up delay-0" id="navbar">
      {/* Brand Logo */}
      <a
        href="#home"
        className="logo"
        id="navLogo"
        onClick={(e) => {
          e.preventDefault();
          handleLinkClick('heroSection', 'home');
        }}
      >
        <span className="logo-icon" aria-hidden="true">
          {/* Hexagonal / IT Service Server Icon */}
          <svg
            width="28"
            height="28"
            viewBox="0 0 32 32"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 3L28 9.5V22.5L16 29L4 22.5V9.5L16 3Z" stroke="url(#logoGrad)" />
            <path d="M16 3V16M28 9.5L16 16M4 9.5L16 16" stroke="url(#logoGrad)" />
            <path d="M16 16V29" stroke="url(#logoGrad)" />
            <circle cx="16" cy="16" r="3" fill="#8A63F8" />
            <defs>
              <linearGradient id="logoGrad" x1="4" y1="3" x2="28" y2="29" gradientUnits="userSpaceOnUse">
                <stop stopColor="#8A63F8" />
                <stop offset="1" stopColor="#5C43FA" />
              </linearGradient>
            </defs>
          </svg>
        </span>
        <span>RAJAT NIMJE</span>
      </a>

      {/* Desktop Navigation Links */}
      <ul className="nav-links" id="navLinks">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              className={`nav-link ${activeLink === item.id ? 'active' : ''}`}
              onClick={() => handleLinkClick(item.target, item.id)}
              id={`navLink-${item.id}`}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>

      {/* Desktop CTA Action */}
      <div className="nav-actions" id="navActions">
        <button
          type="button"
          className="btn btn-outline"
          id="btnNavWorkTogether"
          onClick={() => handleLinkClick('contact', 'contact')}
        >
          GET IN TOUCH
        </button>
      </div>

      {/* Mobile Menu Toggle (<= 1024px) */}
      <button
        type="button"
        className="mobile-menu-toggle"
        id="mobileMenuToggle"
        aria-label="Toggle navigation menu"
        aria-expanded={mobileMenuOpen}
        aria-controls="mobileNavDrawer"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        )}
      </button>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer" id="mobileNavDrawer">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
            <div className="logo">
              <span className="logo-icon">
                <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 3L28 9.5V22.5L16 29L4 22.5V9.5L16 3Z" stroke="#8A63F8" />
                  <path d="M16 3V16M28 9.5L16 16M4 9.5L16 16" stroke="#8A63F8" />
                </svg>
              </span>
              <span>RAJAT NIMJE</span>
            </div>
            <button
              type="button"
              className="mobile-menu-toggle"
              style={{ display: 'flex' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`nav-link ${activeLink === item.id ? 'active' : ''}`}
                style={{ fontSize: '1.2rem', textAlign: 'left' }}
                onClick={() => handleLinkClick(item.target, item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="btn btn-primary"
            style={{ width: '100%' }}
            onClick={() => {
              setMobileMenuOpen(false);
              handleLinkClick('contact', 'contact');
            }}
          >
            GET IN TOUCH
          </button>
        </div>
      )}
    </nav>
  );
};
