import React, { useState } from 'react';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  const [downloading, setDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      setDownloadSuccess(true);
      
      const resumeContent = 
`RAJAT NIMJE
Technical Support Analyst | IT Service Desk (L1)
Nagpur, Maharashtra | rajatnimje434@gmail.com | +91 9049478926
LinkedIn: linkedin.com/in/connect-with-rajat-nimje
Portfolio: rajat2003fg.github.io/service-desk-portfolio

================================================================================
PROFESSIONAL SUMMARY
================================================================================
B.Tech Computer Engineering graduate with hands-on, practical experience
troubleshooting PCs, Windows operating systems, hardware components, and
home/hostel networks. Strong root-cause analysis approach, comfortable
explaining technical solutions to non-technical users in clear, simple language.
Seeking to bring a structured, customer-first troubleshooting mindset to a
Global IT Service Desk L1 Analyst role.

================================================================================
CORE SKILLS
================================================================================
• Windows OS installation, configuration, drivers, and troubleshooting
• PC hardware diagnostics — RAM, storage, PSU, overheating, boot failures, peripherals
• Network & Wi-Fi troubleshooting — router configuration, connectivity issues, home/hostel setups
• Software & OS-level issue resolution — corruption, malware cleanup, application errors
• Root-cause analysis and structured troubleshooting methodology
• Clear, patient communication with end users over calls and chat
• Python and SQL queries (joins, validation), plus Excel for data checks and reporting
• Documentation and issue-tracking discipline

================================================================================
RELEVANT EXPERIENCE
================================================================================
Independent PC Building, Repair & IT Troubleshooting
Self-directed support for family, friends, and hostel-mates
• Assembled and configured custom desktop PCs end-to-end, including component selection, OS installation, drivers, and software setup.
• Diagnosed and resolved hardware issues including faulty RAM, storage failures, overheating, and boot problems.
• Resolved software issues involving Windows OS corruption, malware infections, and application errors.
• Set up and troubleshot home and hostel Wi-Fi networks, including router configuration and connectivity issues.
• Guided non-technical users to resolutions over calls and chat using simple, step-by-step instructions — building a customer-support communication style.

================================================================================
EDUCATION
================================================================================
• B.Tech in Computer Engineering — Smt. Radhikatai Pandav College of Engineering, Nagpur (2021 – 2025)
• Higher Secondary Education (Class XII) — Shri Ramswami Junior College, Nagpur (2020 – 2021)

================================================================================
CERTIFICATIONS
================================================================================
• SQL Certification — HackerRank
• Cloud Computing — NPTEL, 2025

================================================================================
WHY I'M A FIT FOR THIS ROLE
================================================================================
• Genuinely enjoy troubleshooting — comfortable staying calm and methodical under a queue of user issues.
• Already used to explaining fixes to non-technical people, which maps directly to end-user IT support.
• Foundational computer engineering degree backing up the practical, hands-on experience.
`;

      const element = document.createElement('a');
      const file = new Blob([resumeContent], { type: 'text/plain;charset=utf-8' });
      element.href = URL.createObjectURL(file);
      element.download = 'Rajat_Nimje_Resume.txt';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }, 800);
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
          maxWidth: '720px',
          width: '100%',
          maxHeight: '88vh',
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

        {/* Top Header info */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
          <span className="pulse-dot" />
          <span style={{ color: 'var(--accent-color)', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '1px' }}>
            OFFICIAL RESUME & PROFILE
          </span>
        </div>

        <h2 style={{ fontSize: '2.2rem', fontWeight: 800, margin: '0 0 0.25rem 0', color: '#fff' }}>
          Rajat Nimje
        </h2>
        <div style={{ fontSize: '1.05rem', color: 'var(--accent-color)', fontWeight: 600, marginBottom: '0.75rem' }}>
          Technical Support Analyst | IT Service Desk (L1)
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.75rem', paddingBottom: '1rem', borderBottom: '1px solid var(--glass-border)' }}>
          <span>📍 Nagpur, Maharashtra</span>
          <span>✉️ <a href="mailto:rajatnimje434@gmail.com" style={{ color: '#fff', textDecoration: 'none' }}>rajatnimje434@gmail.com</a></span>
          <span>📞 <a href="tel:+919049478926" style={{ color: '#fff', textDecoration: 'none' }}>+91 9049478926</a></span>
          <span>🔗 <a href="https://linkedin.com/in/connect-with-rajat-nimje" target="_blank" rel="noreferrer" style={{ color: 'var(--accent-color)', textDecoration: 'none' }}>LinkedIn</a></span>
          <span>💻 <a href="https://github.com/rajat2003fg" target="_blank" rel="noreferrer" style={{ color: 'var(--accent-color)', textDecoration: 'none' }}>GitHub</a></span>
        </div>

        {/* Professional Summary */}
        <div style={{ marginBottom: '1.75rem' }}>
          <h3 style={{ fontSize: '0.9rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--accent-color)', marginBottom: '0.5rem' }}>
            Professional Summary
          </h3>
          <p style={{ color: '#e5e5e5', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
            B.Tech Computer Engineering graduate with hands-on, practical experience troubleshooting PCs, Windows operating systems, hardware components, and home/hostel networks. Strong root-cause analysis approach, comfortable explaining technical solutions to non-technical users in clear, simple language. Seeking to bring a structured, customer-first troubleshooting mindset to a Global IT Service Desk L1/L2 Analyst role.
          </p>
        </div>

        {/* Core Skills */}
        <div style={{ marginBottom: '1.75rem' }}>
          <h3 style={{ fontSize: '0.9rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--accent-color)', marginBottom: '0.75rem' }}>
            Core Skills
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.6rem' }}>
            {[
              'Windows OS installation, config & drivers',
              'PC Hardware Diagnostics (RAM, Storage, PSU, Boot)',
              'Network & Wi-Fi Troubleshooting (Routers, DHCP, DNS)',
              'Software & OS issue resolution & Malware cleanup',
              'Root-cause analysis & structured methodology',
              'Clear, patient end-user communication (Calls & Chat)',
              'Python, SQL Queries (Joins, Validation) & Excel reporting',
              'Documentation & issue-tracking discipline',
            ].map((skill, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.5rem 0.75rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  borderRadius: '6px',
                  border: '1px solid var(--glass-border)',
                  fontSize: '0.85rem',
                  color: '#f0f0f0',
                }}
              >
                <span style={{ color: '#00FF88', fontSize: '0.85rem' }}>✓</span>
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div style={{ marginBottom: '1.75rem' }}>
          <h3 style={{ fontSize: '0.9rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--accent-color)', marginBottom: '0.75rem' }}>
            Relevant Experience
          </h3>
          <div style={{ padding: '1.25rem', backgroundColor: 'rgba(255, 255, 255, 0.03)', borderRadius: '10px', border: '1px solid var(--glass-border)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.25rem' }}>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff', margin: 0 }}>
                Independent PC Building, Repair & IT Troubleshooting
              </h4>
              <span style={{ fontSize: '0.8rem', color: 'var(--accent-color)', fontWeight: 600 }}>Hands-on Support</span>
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
              Self-directed support for family, friends, and hostel-mates
            </div>
            <ul style={{ paddingLeft: '1.2rem', margin: 0, color: '#d5d5d5', fontSize: '0.85rem', lineHeight: '1.55', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <li>Assembled and configured custom desktop PCs end-to-end, including component selection, OS installation, drivers, and software setup.</li>
              <li>Diagnosed and resolved hardware issues including faulty RAM, storage failures, overheating, and boot problems.</li>
              <li>Resolved software issues involving Windows OS corruption, malware infections, and application errors.</li>
              <li>Set up and troubleshot home and hostel Wi-Fi networks, including router configuration and connectivity issues.</li>
              <li>Guided non-technical users to resolutions over calls and chat using simple, step-by-step instructions — building a customer-support communication style.</li>
            </ul>
          </div>
        </div>

        {/* Education & Certifications Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', marginBottom: '1.75rem' }}>
          {/* Education */}
          <div style={{ padding: '1.2rem', backgroundColor: 'rgba(255, 255, 255, 0.03)', borderRadius: '10px', border: '1px solid var(--glass-border)' }}>
            <h3 style={{ fontSize: '0.85rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--accent-color)', marginBottom: '0.75rem' }}>
              Education
            </h3>
            <div style={{ marginBottom: '0.75rem' }}>
              <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#fff' }}>B.Tech in Computer Engineering</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Smt. Radhikatai Pandav College of Engineering, Nagpur</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--accent-color)', marginTop: '0.2rem' }}>2021 – 2025</div>
            </div>
            <div>
              <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#fff' }}>Higher Secondary Education (Class XII)</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Shri Ramswami Junior College, Nagpur</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--accent-color)', marginTop: '0.2rem' }}>2020 – 2021</div>
            </div>
          </div>

          {/* Certifications */}
          <div style={{ padding: '1.2rem', backgroundColor: 'rgba(255, 255, 255, 0.03)', borderRadius: '10px', border: '1px solid var(--glass-border)' }}>
            <h3 style={{ fontSize: '0.85rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--accent-color)', marginBottom: '0.75rem' }}>
              Certifications
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <span style={{ color: '#00FF88', fontSize: '1rem' }}>🏆</span>
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#fff' }}>SQL Certification</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>HackerRank Verified</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <span style={{ color: '#00FF88', fontSize: '1rem' }}>☁️</span>
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#fff' }}>Cloud Computing Certification</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>NPTEL, 2025</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why I'm a Fit */}
        <div style={{ marginBottom: '2rem', padding: '1.2rem', backgroundColor: 'rgba(138, 99, 248, 0.08)', borderRadius: '10px', border: '1px solid rgba(138, 99, 248, 0.25)' }}>
          <h3 style={{ fontSize: '0.85rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: '#9C7AFA', marginBottom: '0.5rem' }}>
            Why I'm a Fit For This Role
          </h3>
          <ul style={{ paddingLeft: '1.2rem', margin: 0, color: '#e5e5e5', fontSize: '0.85rem', lineHeight: '1.5', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <li><strong>Genuinely enjoy troubleshooting:</strong> Comfortable staying calm and methodical under a queue of user tickets and issues.</li>
            <li><strong>End-user communication:</strong> Used to explaining fixes to non-technical people clearly, mapping directly to L1 IT support.</li>
            <li><strong>Engineering foundation:</strong> Foundational computer engineering degree backing up practical, hands-on diagnostic experience.</li>
          </ul>
        </div>

        {downloadSuccess ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#00FF88', fontSize: '0.9rem', marginBottom: '1rem' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span>Resume downloaded successfully as Rajat_Nimje_Resume.txt!</span>
          </div>
        ) : null}

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <button
            type="button"
            className="btn btn-primary"
            style={{ flex: 1, minWidth: '200px' }}
            onClick={handleDownload}
            disabled={downloading}
          >
            {downloading ? 'GENERATING RESUME...' : 'DOWNLOAD RESUME FILE'}
          </button>
          <button
            type="button"
            className="btn btn-outline"
            onClick={onClose}
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};
