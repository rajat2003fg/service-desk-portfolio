import React, { useState, useEffect } from 'react';
import { SectionTab } from './QuickDock';

interface FrostedSectionHubProps {
  isOpen: boolean;
  activeTab: SectionTab;
  onTabChange: (tab: SectionTab) => void;
  onClose: () => void;
}

export const FrostedSectionHub: React.FC<FrostedSectionHubProps> = ({
  isOpen,
  activeTab,
  onTabChange,
  onClose,
}) => {
  const [viewMode, setViewMode] = useState<'modal' | 'drawer'>('modal');
  const [downloading, setDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    roleType: 'Global IT Service Desk (L1)',
    message: '',
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === '1') {
        onTabChange('resume');
      } else if (e.key === '2') {
        onTabChange('skills');
      } else if (e.key === '3') {
        onTabChange('projects');
      } else if (e.key === '4') {
        onTabChange('education');
      } else if (e.key === '5') {
        onTabChange('contact');
      } else if (e.key.toLowerCase() === 'd') {
        setViewMode((prev) => (prev === 'modal' ? 'drawer' : 'modal'));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onTabChange]);

  if (!isOpen) return null;

  const handleDownloadResume = () => {
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
• Already used to explaining fixes to non-technical people, which maps directly to L1 IT support.
• Foundational computer engineering degree backing up the practical, hands-on experience.
`;
      const element = document.createElement('a');
      const file = new Blob([resumeContent], { type: 'text/plain;charset=utf-8' });
      element.href = URL.createObjectURL(file);
      element.download = 'Rajat_Nimje_Resume.txt';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }, 700);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
    setTimeout(() => {
      setContactSubmitted(false);
      onClose();
    }, 2400);
  };

  const tabs: { id: SectionTab; label: string; icon: string }[] = [
    { id: 'resume', label: 'Resume', icon: '📄' },
    { id: 'skills', label: 'Skills', icon: '⚙️' },
    { id: 'projects', label: 'Troubleshooting Cases', icon: '🛠️' },
    { id: 'education', label: 'Education & Certs', icon: '🎓' },
    { id: 'contact', label: 'Contact', icon: '✉️' },
  ];

  const isDrawer = viewMode === 'drawer';

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: isDrawer ? 'rgba(3, 3, 5, 0.45)' : 'rgba(3, 3, 5, 0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        zIndex: 999,
        display: 'flex',
        alignItems: isDrawer ? 'stretch' : 'center',
        justifyContent: isDrawer ? 'flex-end' : 'center',
        padding: isDrawer ? 0 : '1.5rem',
        transition: 'all 0.3s ease',
      }}
      onClick={onClose}
    >
      <div
        className="glass-panel"
        style={{
          width: isDrawer ? '640px' : '100%',
          maxWidth: isDrawer ? '94vw' : '780px',
          height: isDrawer ? '100vh' : 'auto',
          maxHeight: isDrawer ? '100vh' : '90vh',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: isDrawer ? '0px' : '16px',
          borderLeft: isDrawer ? '1px solid rgba(255, 255, 255, 0.12)' : undefined,
          position: 'relative',
          boxShadow: '0 24px 64px rgba(0, 0, 0, 0.75)',
          overflow: 'hidden',
          animation: isDrawer ? 'slideInRight 0.3s cubic-bezier(0.16, 1, 0.3, 1)' : undefined,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Hub Control Bar */}
        <div
          style={{
            padding: '1.25rem 1.75rem',
            borderBottom: '1px solid var(--glass-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            backgroundColor: 'rgba(20, 20, 25, 0.7)',
            flexShrink: 0,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span className="pulse-dot" style={{ width: '8px', height: '8px' }} />
            <span style={{ fontSize: '0.95rem', fontWeight: 800, color: '#fff', letterSpacing: '0.5px' }}>
              RAJAT NIMJE <span style={{ color: 'var(--accent-color)', fontWeight: 600, fontSize: '0.82rem' }}>| L1 SUPPORT</span>
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {/* View Mode Toggle: Modal vs Side Drawer */}
            <button
              type="button"
              onClick={() => setViewMode((prev) => (prev === 'modal' ? 'drawer' : 'modal'))}
              title={`Switch to ${isDrawer ? 'Center Modal' : 'Side Drawer'} mode (Press D)`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: 'var(--text-secondary)',
                padding: '0.35rem 0.65rem',
                borderRadius: '6px',
                fontSize: '0.75rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              <span>{isDrawer ? '🗖 Center Modal' : '⫸ Side Drawer'}</span>
            </button>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close dialog"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: 'var(--text-secondary)',
                cursor: 'pointer',
                borderRadius: '6px',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              title="Close (Press Esc)"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>

        {/* Section Tabs Navigation Bar */}
        <div
          style={{
            display: 'flex',
            gap: '0.3rem',
            padding: '0.6rem 1.75rem',
            borderBottom: '1px solid var(--glass-border)',
            backgroundColor: 'rgba(10, 10, 15, 0.5)',
            overflowX: 'auto',
            flexShrink: 0,
          }}
        >
          {tabs.map((tab, idx) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => onTabChange(tab.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: '0.45rem 0.85rem',
                  borderRadius: '8px',
                  backgroundColor: isActive ? 'rgba(138, 99, 248, 0.22)' : 'transparent',
                  border: isActive ? '1px solid var(--accent-color)' : '1px solid transparent',
                  color: isActive ? '#fff' : 'var(--text-secondary)',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s ease',
                }}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
                <span
                  style={{
                    fontSize: '0.65rem',
                    opacity: 0.6,
                    marginLeft: '0.2rem',
                  }}
                >
                  [{idx + 1}]
                </span>
              </button>
            );
          })}
        </div>

        {/* Scrollable Content Body */}
        <div
          style={{
            padding: '1.75rem',
            overflowY: 'auto',
            flex: 1,
            color: '#d5d5d5',
          }}
        >
          {/* TAB 1: RESUME */}
          {activeTab === 'resume' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
                <div>
                  <h2 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#fff', margin: '0 0 0.25rem 0' }}>
                    Rajat Nimje
                  </h2>
                  <div style={{ fontSize: '1rem', color: 'var(--accent-color)', fontWeight: 600 }}>
                    Technical Support Analyst | IT Service Desk (L1)
                  </div>
                </div>

                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleDownloadResume}
                  disabled={downloading}
                  style={{ fontSize: '0.82rem', padding: '0.5rem 1rem' }}
                >
                  {downloading ? 'GENERATING...' : 'DOWNLOAD RESUME (.TXT)'}
                </button>
              </div>

              {downloadSuccess && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#00FF88', fontSize: '0.85rem', marginBottom: '1.25rem' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Resume downloaded successfully as Rajat_Nimje_Resume.txt!</span>
                </div>
              )}

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', paddingBottom: '0.9rem', borderBottom: '1px solid var(--glass-border)' }}>
                <span>📍 Nagpur, Maharashtra</span>
                <span>✉️ rajatnimje434@gmail.com</span>
                <span>📞 +91 9049478926</span>
                <span>🔗 <a href="https://linkedin.com/in/connect-with-rajat-nimje" target="_blank" rel="noreferrer" style={{ color: 'var(--accent-color)' }}>LinkedIn</a></span>
                <span>💻 <a href="https://github.com/rajat2003fg" target="_blank" rel="noreferrer" style={{ color: 'var(--accent-color)' }}>GitHub</a></span>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '0.85rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--accent-color)', marginBottom: '0.4rem' }}>
                  Professional Summary
                </h3>
                <p style={{ color: '#e5e5e5', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                  B.Tech Computer Engineering graduate with hands-on, practical experience troubleshooting PCs, Windows operating systems, hardware components, and home/hostel networks. Strong root-cause analysis approach, comfortable explaining technical solutions to non-technical users in clear, simple language. Seeking to bring a structured, customer-first troubleshooting mindset to a Global IT Service Desk L1 Analyst role.
                </p>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '0.85rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--accent-color)', marginBottom: '0.4rem' }}>
                  Relevant Experience
                </h3>
                <div style={{ padding: '1rem', backgroundColor: 'rgba(255, 255, 255, 0.03)', borderRadius: '8px', border: '1px solid var(--glass-border)' }}>
                  <div style={{ fontWeight: 700, color: '#fff', fontSize: '0.95rem' }}>
                    Independent PC Building, Repair & IT Troubleshooting
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                    Self-directed support for family, friends, and hostel-mates (2021 – Present)
                  </div>
                  <ul style={{ paddingLeft: '1.2rem', margin: 0, fontSize: '0.85rem', lineHeight: 1.5, display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    <li>Assembled and configured custom desktop PCs end-to-end, including component selection, OS installation, drivers, and software setup.</li>
                    <li>Diagnosed and resolved hardware issues including faulty RAM, storage failures, overheating, and boot problems.</li>
                    <li>Resolved software issues involving Windows OS corruption, malware infections, and application errors.</li>
                    <li>Set up and troubleshot home and hostel Wi-Fi networks, including router configuration and connectivity issues.</li>
                    <li>Guided non-technical users to resolutions over calls and chat using simple, step-by-step instructions.</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: SKILLS */}
          {activeTab === 'skills' && (
            <div>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#fff', margin: '0 0 0.5rem 0' }}>
                Technical Competencies & L1 Service Desk Toolkit
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                Practical, hands-on diagnostic abilities honed through desktop builds, system recovery, and direct user assistance.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.85rem' }}>
                {[
                  {
                    category: 'Operating Systems',
                    icon: '🪟',
                    skills: ['Windows 10 & 11 OS Setup', 'Driver Installation & Updates', 'System File Check (SFC / DISM)', 'Safe Mode & Recovery Tools'],
                  },
                  {
                    category: 'PC Hardware Diagnostics',
                    icon: '🖥️',
                    skills: ['Faulty RAM Testing (MemTest86)', 'SSD / HDD Health & Bad Sectors', 'PSU Power Rails & Boot POST', 'Thermal Paste & Overheating Fixes'],
                  },
                  {
                    category: 'Networking & Connectivity',
                    icon: '🌐',
                    skills: ['Home & Hostel Wi-Fi Setup', 'Router Config & DHCP Scopes', 'DNS & Gateway Troubleshooting', 'Packet Loss & Latency Diagnostics'],
                  },
                  {
                    category: 'Software & Remediation',
                    icon: '🛡️',
                    skills: ['OS Corruption Recovery', 'Malware & Spyware Eradication', 'BSOD Crash Dump Analysis', 'App Dependency & DLL Resolution'],
                  },
                  {
                    category: 'Data & Scripting',
                    icon: '📊',
                    skills: ['SQL Queries & Table Joins', 'HackerRank SQL Certified', 'Excel Data Checks & Pivots', 'Python Log Parsing Scripts'],
                  },
                  {
                    category: 'Service Desk Practices',
                    icon: '🎧',
                    skills: ['Root-Cause Analysis', 'Patient Non-Tech Communication', 'Step-by-Step Call/Chat Guidance', 'Ticket Documentation Discipline'],
                  },
                ].map((group, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '1.15rem',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid var(--glass-border)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.65rem' }}>
                      <span style={{ fontSize: '1.1rem' }}>{group.icon}</span>
                      <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fff', margin: 0 }}>
                        {group.category}
                      </h3>
                    </div>
                    <ul style={{ paddingLeft: '1.2rem', margin: 0, fontSize: '0.82rem', color: '#d5d5d5', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                      {group.skills.map((s, sIdx) => (
                        <li key={sIdx}>{s}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: PROJECTS / CASE STUDIES */}
          {activeTab === 'projects' && (
            <div>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#fff', margin: '0 0 0.5rem 0' }}>
                Practical Troubleshooting Case Studies
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                Real-world support scenarios resolved for peers, family, and hostel LAN networks.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  {
                    title: 'End-to-End Custom PC Building & Diagnostics',
                    category: 'PC Hardware & Assembly',
                    year: '2021 – 2025',
                    badge: 'Hardware & OS',
                    desc: 'Selected components, assembled custom desktop rigs, flashed BIOS, installed Windows OS with optimal driver configurations, and verified stable thermals under high loads.',
                    deliverables: ['Component Selection & Sourcing', 'Thermal Paste & Cooler Mounting', 'Driver & Firmware Optimization'],
                  },
                  {
                    title: 'Hardware Failure Isolation & Boot Recovery',
                    category: 'Root-Cause Diagnostics',
                    year: '2022 – 2025',
                    badge: 'L1 Troubleshooting',
                    desc: 'Systematically diagnosed and repaired hardware boot failures: identified faulty memory using MemTest86, isolated bad SSD/HDD sectors, tested power supply rails, and cleared CMOS configurations.',
                    deliverables: ['RAM & Storage Swap Testing', 'PSU Load & Overheating Fixes', 'POST & Boot Sector Repair'],
                  },
                  {
                    title: 'Home & Hostel Wi-Fi Network Infrastructure',
                    category: 'Network & Connectivity',
                    year: '2022 – 2025',
                    badge: 'Networking',
                    desc: 'Configured consumer and hostel wireless routers, managed DHCP pools, resolved IP conflicts, fixed DNS resolution bottlenecks, and repositioned access points for high-density coverage.',
                    deliverables: ['Router & Subnet Configuration', 'DNS & Gateway Troubleshooting', 'Packet Loss & Latency Testing'],
                  },
                  {
                    title: 'Windows OS Corruption & Malware Cleanup',
                    category: 'System Remediation',
                    year: '2023 – 2025',
                    badge: 'OS & Security',
                    desc: 'Remediated recurring BSODs, system freezes, and malware infections. Utilized SFC/DISM repairs, clean boot diagnostics, safe mode malware extraction, and backup restoration to preserve user files.',
                    deliverables: ['BSOD Root-Cause Triage', 'Malware & Adware Eradication', 'System File & Registry Repairs'],
                  },
                  {
                    title: 'Support Data Validation & Query Automation',
                    category: 'Python & SQL Analytics',
                    year: '2024 – 2025',
                    badge: 'HackerRank Certified',
                    desc: 'Wrote robust SQL queries (joins, aggregations, data integrity checks) and lightweight Python automation scripts to parse error logs, format ticket records, and generate Excel summaries.',
                    deliverables: ['SQL Queries & Table Joins', 'Excel Data Checks & Pivot Tables', 'Log File Parsing Scripts'],
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '1.25rem',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid var(--glass-border)',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.35rem' }}>
                      <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', margin: 0 }}>
                        {item.title}
                      </h3>
                      <span
                        style={{
                          fontSize: '0.72rem',
                          color: '#00FF88',
                          backgroundColor: 'rgba(0, 255, 136, 0.1)',
                          padding: '0.2rem 0.55rem',
                          borderRadius: '4px',
                          fontWeight: 600,
                          textTransform: 'uppercase',
                        }}
                      >
                        {item.badge}
                      </span>
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--accent-color)', marginBottom: '0.5rem', fontWeight: 500 }}>
                      {item.category} • {item.year}
                    </div>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: '0 0 0.75rem 0', lineHeight: 1.5 }}>
                      {item.desc}
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {item.deliverables.map((del, dIdx) => (
                        <span
                          key={dIdx}
                          style={{
                            fontSize: '0.72rem',
                            color: '#d5d5d5',
                            backgroundColor: 'rgba(255, 255, 255, 0.05)',
                            padding: '0.15rem 0.5rem',
                            borderRadius: '4px',
                            border: '1px solid rgba(255, 255, 255, 0.06)',
                          }}
                        >
                          • {del}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: EDUCATION & CERTS */}
          {activeTab === 'education' && (
            <div>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#fff', margin: '0 0 0.5rem 0' }}>
                Education & Credentials
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                Academic grounding in Computer Engineering paired with industry-verified certifications.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ padding: '1.25rem', backgroundColor: 'rgba(255, 255, 255, 0.03)', borderRadius: '10px', border: '1px solid var(--glass-border)' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--accent-color)', fontWeight: 700, letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    DEGREE EDUCATION
                  </div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff' }}>B.Tech in Computer Engineering</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                    Smt. Radhikatai Pandav College of Engineering, Nagpur
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#00FF88', marginTop: '0.5rem', fontWeight: 600 }}>
                    Graduation: 2025
                  </div>
                </div>

                <div style={{ padding: '1.25rem', backgroundColor: 'rgba(255, 255, 255, 0.03)', borderRadius: '10px', border: '1px solid var(--glass-border)' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--accent-color)', fontWeight: 700, letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    SECONDARY EDUCATION
                  </div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff' }}>Higher Secondary Education (Class XII)</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                    Shri Ramswami Junior College, Nagpur
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#00FF88', marginTop: '0.5rem', fontWeight: 600 }}>
                    2020 – 2021
                  </div>
                </div>
              </div>

              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#fff', marginBottom: '0.75rem' }}>
                Verified Certifications
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.85rem' }}>
                <div style={{ padding: '1rem', backgroundColor: 'rgba(255, 255, 255, 0.03)', borderRadius: '8px', border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ fontSize: '1.5rem' }}>🏆</span>
                  <div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fff' }}>SQL Certification</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>HackerRank Verified</div>
                  </div>
                </div>

                <div style={{ padding: '1rem', backgroundColor: 'rgba(255, 255, 255, 0.03)', borderRadius: '8px', border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ fontSize: '1.5rem' }}>☁️</span>
                  <div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fff' }}>Cloud Computing Certification</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>NPTEL, 2025</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: CONTACT */}
          {activeTab === 'contact' && (
            <div>
              {contactSubmitted ? (
                <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: 'rgba(0, 255, 136, 0.15)', color: '#00FF88', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff', margin: '0 0 0.5rem 0' }}>
                    Message Received!
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    Thank you for reaching out! Rajat will respond promptly.
                  </p>
                </div>
              ) : (
                <div>
                  <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#fff', margin: '0 0 0.5rem 0' }}>
                    Contact & Recruiter Inquiry
                  </h2>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.25rem' }}>
                    Actively available for full-time Global IT Service Desk (L1) & Technical Support roles.
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem', marginBottom: '1.5rem', padding: '0.9rem', backgroundColor: 'rgba(255, 255, 255, 0.03)', borderRadius: '8px', border: '1px solid var(--glass-border)' }}>
                    <div>
                      <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--accent-color)', fontWeight: 600 }}>PHONE / CALL</span>
                      <a href="tel:+919049478926" style={{ color: '#fff', fontSize: '0.85rem', textDecoration: 'none' }}>+91 9049478926</a>
                    </div>
                    <div>
                      <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--accent-color)', fontWeight: 600 }}>EMAIL</span>
                      <a href="mailto:rajatnimje434@gmail.com" style={{ color: '#fff', fontSize: '0.85rem', textDecoration: 'none' }}>rajatnimje434@gmail.com</a>
                    </div>
                    <div>
                      <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--accent-color)', fontWeight: 600 }}>LOCATION</span>
                      <span style={{ color: '#fff', fontSize: '0.85rem' }}>Nagpur, Maharashtra</span>
                    </div>
                    <div>
                      <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--accent-color)', fontWeight: 600 }}>LINKEDIN</span>
                      <a href="https://linkedin.com/in/connect-with-rajat-nimje" target="_blank" rel="noreferrer" style={{ color: '#00FF88', fontSize: '0.85rem', textDecoration: 'none' }}>connect-with-rajat-nimje</a>
                    </div>
                  </div>

                  <form onSubmit={handleContactSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.2rem' }}>
                        YOUR NAME / COMPANY
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Morgan (Tech Hiring)"
                        value={contactData.name}
                        onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '0.75rem',
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
                      <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.2rem' }}>
                        WORK EMAIL
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={contactData.email}
                        onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '0.75rem',
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
                      <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.2rem' }}>
                        ROLE / INQUIRY TYPE
                      </label>
                      <select
                        value={contactData.roleType}
                        onChange={(e) => setContactData({ ...contactData, roleType: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '0.75rem',
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
                        <option value="Desktop Support Engineer">Desktop Support Engineer</option>
                        <option value="General Recruiter Inquiry">General Recruiter Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.2rem' }}>
                        MESSAGE
                      </label>
                      <textarea
                        required
                        rows={3}
                        placeholder="Briefly describe the role, team, or opportunity..."
                        value={contactData.message}
                        onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '0.75rem',
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
                      style={{ width: '100%', marginTop: '0.4rem' }}
                    >
                      SEND INQUIRY TO RAJAT
                    </button>
                  </form>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
