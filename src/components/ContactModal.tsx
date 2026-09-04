import React, { useState } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    roleType: 'Global IT Service Desk (L1)',
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      onClose();
    }, 2400);
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(3, 3, 5, 0.88)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        zIndex: 999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
      }}
      onClick={onClose}
    >
      <div
        className="glass-panel"
        style={{
          maxWidth: '560px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '2.5rem',
          borderRadius: '16px',
          position: 'relative',
          boxShadow: '0 24px 64px rgba(0, 0, 0, 0.75)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            background: 'none',
            border: 'none',
            color: 'var(--text-secondary)',
            cursor: 'pointer',
            padding: '0.25rem',
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {formSubmitted ? (
          <div style={{ textAlign: 'center', padding: '2rem 0' }}>
            <div
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'rgba(0, 255, 136, 0.15)',
                color: '#00FF88',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem',
              }}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, margin: '0 0 0.5rem 0', color: '#fff' }}>Inquiry Sent to Rajat!</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.5' }}>
              Thank you for considering my profile. I will respond to your email promptly. You can also reach me directly at <strong>+91 9049478926</strong>.
            </p>
          </div>
        ) : (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <span className="pulse-dot" />
              <span style={{ color: 'var(--accent-color)', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '1px' }}>
                DIRECT CONTACT
              </span>
            </div>
            <h2 style={{ fontSize: '1.9rem', fontWeight: 700, margin: '0 0 0.5rem 0', color: '#fff' }}>
              Get in Touch with Rajat Nimje
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: '1.25rem', lineHeight: '1.5' }}>
              Available for full-time IT Service Desk Analyst (L1) and Technical Support roles. Open to relocation (Nagpur, Mumbai, Pune, Bengaluru) or remote.
            </p>

            {/* Quick Contact Badges */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem', marginBottom: '1.5rem', padding: '0.9rem', backgroundColor: 'rgba(255, 255, 255, 0.03)', borderRadius: '10px', border: '1px solid var(--glass-border)' }}>
              <div>
                <span style={{ display: 'block', fontSize: '0.72rem', color: 'var(--accent-color)', fontWeight: 600 }}>PHONE / WHATSAPP</span>
                <a href="tel:+919049478926" style={{ color: '#fff', fontSize: '0.88rem', textDecoration: 'none', fontWeight: 500 }}>+91 9049478926</a>
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '0.72rem', color: 'var(--accent-color)', fontWeight: 600 }}>DIRECT EMAIL</span>
                <a href="mailto:rajatnimje434@gmail.com" style={{ color: '#fff', fontSize: '0.88rem', textDecoration: 'none', fontWeight: 500 }}>rajatnimje434@gmail.com</a>
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '0.72rem', color: 'var(--accent-color)', fontWeight: 600 }}>LOCATION</span>
                <span style={{ color: '#e5e5e5', fontSize: '0.85rem' }}>Nagpur, Maharashtra</span>
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '0.72rem', color: 'var(--accent-color)', fontWeight: 600 }}>LINKEDIN</span>
                <a href="https://linkedin.com/in/connect-with-rajat-nimje" target="_blank" rel="noreferrer" style={{ color: '#00FF88', fontSize: '0.85rem', textDecoration: 'none' }}>connect-with-rajat-nimje</a>
              </div>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.25rem', letterSpacing: '0.5px' }}>
                  YOUR NAME / RECRUITER NAME
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins (Talent Acquisition)"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 0.9rem',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--glass-border)',
                    color: '#fff',
                    fontFamily: 'var(--font-secondary)',
                    fontSize: '0.88rem',
                    outline: 'none',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.25rem', letterSpacing: '0.5px' }}>
                  WORK EMAIL
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 0.9rem',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--glass-border)',
                    color: '#fff',
                    fontFamily: 'var(--font-secondary)',
                    fontSize: '0.88rem',
                    outline: 'none',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.25rem', letterSpacing: '0.5px' }}>
                  ROLE / INQUIRY TYPE
                </label>
                <select
                  value={formData.roleType}
                  onChange={(e) => setFormData({ ...formData, roleType: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 0.9rem',
                    borderRadius: '8px',
                    backgroundColor: '#111116',
                    border: '1px solid var(--glass-border)',
                    color: '#fff',
                    fontFamily: 'var(--font-secondary)',
                    fontSize: '0.88rem',
                    outline: 'none',
                  }}
                >
                  <option value="Global IT Service Desk (L1)">Global IT Service Desk (L1)</option>
                  <option value="Technical Support Analyst">Technical Support Analyst</option>
                  <option value="Desktop & PC Hardware Support Engineer">Desktop & PC Hardware Support Engineer</option>
                  <option value="Network & Systems Administrator (Associate)">Network & Systems Administrator (Associate)</option>
                  <option value="General Recruiter Inquiry">General Recruiter Inquiry</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.25rem', letterSpacing: '0.5px' }}>
                  MESSAGE / ROLE DETAILS
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Share details about the role, location, team, or schedule..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 0.9rem',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--glass-border)',
                    color: '#fff',
                    fontFamily: 'var(--font-secondary)',
                    fontSize: '0.88rem',
                    outline: 'none',
                    resize: 'none',
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', marginTop: '0.5rem' }}
              >
                SEND MESSAGE TO RAJAT
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
