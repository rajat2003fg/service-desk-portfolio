import React, { useState } from 'react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Global IT Service Desk (L1) Role',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(`Name / Company: ${formData.name}\nReply email: ${formData.email}\n\n${formData.message}`);
    window.location.href = `mailto:rajatnimje434@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: 'Global IT Service Desk (L1) Role',
        message: '',
      });
    }, 4000);
  };

  return (
    <section className="content-section" id="contact">
      {/* Section Header */}
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <div className="section-tag" id="tagContact">
          <span className="pulse-dot" style={{ width: '6px', height: '6px' }} />
          GET IN TOUCH
        </div>
        <h2 className="section-heading" id="headingContact">
          Let's Work Together
        </h2>
        <p className="section-subheading" style={{ margin: '0 auto' }}>
          Open for Global IT Service Desk, L1 Technical Support, and Hardware/Network Analyst opportunities.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))', gap: '1.5rem', width: '100%', boxSizing: 'border-box' }}>
        {/* Contact Info & Channels */}
        <div className="glass-panel" style={{ padding: '2.25rem', borderRadius: '16px' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff', marginBottom: '0.75rem' }}>
            Direct Contact Information
          </h3>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.75rem' }}>
            Feel free to reach out via call, WhatsApp, email, or LinkedIn for technical screenings, interview schedules, or role discussions.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
            <a
              href="tel:+919049478926"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '0.85rem 1rem',
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                borderRadius: '10px',
                border: '1px solid var(--glass-border)',
                color: '#fff',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
            >
              <span style={{ fontSize: '1.4rem' }}>📞</span>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Direct Phone</div>
                <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#fff' }}>+91 9049478926</div>
              </div>
            </a>

            <a
              href="mailto:rajatnimje434@gmail.com"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '0.85rem 1rem',
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                borderRadius: '10px',
                border: '1px solid var(--glass-border)',
                color: '#fff',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
            >
              <span style={{ fontSize: '1.4rem' }}>✉️</span>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Primary Email</div>
                <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#fff' }}>rajatnimje434@gmail.com</div>
              </div>
            </a>

            <a
              href="https://wa.me/919049478926"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '0.85rem 1rem',
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                borderRadius: '10px',
                border: '1px solid var(--glass-border)',
                color: '#fff',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
            >
              <span style={{ fontSize: '1.4rem' }}>💬</span>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>WhatsApp Chat</div>
                <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#00FF88' }}>Chat on WhatsApp ↗</div>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/rajat-nimje"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '0.85rem 1rem',
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                borderRadius: '10px',
                border: '1px solid var(--glass-border)',
                color: '#fff',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
            >
              <span style={{ fontSize: '1.4rem' }}>🔗</span>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Professional Network</div>
                <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--accent-color)' }}>linkedin.com/in/rajat-nimje ↗</div>
              </div>
            </a>
          </div>
        </div>

        {/* Quick Message Form */}
        <div className="glass-panel" style={{ padding: '2.25rem', borderRadius: '16px' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff', marginBottom: '0.75rem' }}>
            Send an Opportunity Message
          </h3>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
            Recruiting for an L1 Service Desk or IT Analyst position? Send a quick note.
          </p>

          {submitted ? (
            <div
              style={{
                padding: '1.5rem',
                backgroundColor: 'rgba(0, 255, 136, 0.08)',
                border: '1px solid rgba(0, 255, 136, 0.3)',
                borderRadius: '10px',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>✓</div>
              <h4 style={{ color: '#00FF88', margin: '0 0 0.25rem 0' }}>Thank You for Reaching Out!</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
                Your email draft is ready. Send it from your mail app and Rajat will respond promptly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label htmlFor="contact-name" style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                  YOUR NAME / COMPANY
                </label>
                <input
                  type="text"
                  id="contact-name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. John Doe / TechCorp HR"
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--glass-border)',
                    borderRadius: '8px',
                    color: '#fff',
                    fontSize: '0.88rem',
                    outline: 'none',
                  }}
                />
              </div>

              <div>
                <label htmlFor="contact-email" style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                  YOUR EMAIL
                </label>
                <input
                  type="email"
                  id="contact-email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@company.com"
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--glass-border)',
                    borderRadius: '8px',
                    color: '#fff',
                    fontSize: '0.88rem',
                    outline: 'none',
                  }}
                />
              </div>

              <div>
                <label htmlFor="contact-message" style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                  ROLE / INQUIRY DETAILS
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell Rajat about the L1 Service Desk / Technical Support role, location/shift details, or scheduling an interview..."
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--glass-border)',
                    borderRadius: '8px',
                    color: '#fff',
                    fontSize: '0.88rem',
                    outline: 'none',
                    resize: 'vertical',
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{
                  width: '100%',
                  padding: '0.85rem',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  marginTop: '0.5rem',
                }}
              >
                TRANSMIT INQUIRY 🚀
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
