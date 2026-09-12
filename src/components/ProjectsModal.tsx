import React from 'react';

interface ProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectContact: () => void;
}

export const ProjectsModal: React.FC<ProjectsModalProps> = ({
  isOpen,
  onClose,
  onSelectContact,
}) => {
  if (!isOpen) return null;

  const caseStudies = [
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
      desc: 'Troubleshot recurring BSODs, system freezes, and malware symptoms using SFC/DISM checks, clean boot diagnostics, safe mode, and file-preserving recovery steps.',
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
  ];

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
          maxWidth: '700px',
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

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
          <span style={{ color: 'var(--accent-color)', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '1px' }}>
            HANDS-ON TROUBLESHOOTING & PROJECTS
          </span>
        </div>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, margin: '0 0 0.5rem 0', color: '#fff' }}>
          Technical Case Studies & Practical Experience
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem', lineHeight: '1.5' }}>
          Real-world support cases solved for users, peers, and hostel networks demonstrating methodical root-cause analysis and patient technical communication.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
          {caseStudies.map((item, idx) => (
            <div
              key={idx}
              style={{
                padding: '1.25rem',
                borderRadius: '12px',
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid var(--glass-border)',
                transition: 'all 0.3s ease',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.35rem' }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#fff', margin: 0 }}>
                  {item.title}
                </h3>
                <span
                  style={{
                    fontSize: '0.75rem',
                    color: '#00FF88',
                    backgroundColor: 'rgba(0, 255, 136, 0.1)',
                    padding: '0.2rem 0.6rem',
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

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <button
            type="button"
            className="btn btn-primary"
            style={{ flex: 1, minWidth: '180px' }}
            onClick={() => {
              onClose();
              onSelectContact();
            }}
          >
            CONTACT RAJAT NIMJE
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
