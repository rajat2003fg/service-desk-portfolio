import React, { useState } from 'react';

interface ResumeSectionProps {
  onDownloadResume: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onDownloadResume }) => {
  const [copied, setCopied] = useState(false);

  const copyText = () => {
    const text = `RAJAT NIMJE
Nagpur, Maharashtra, India | +91 9049478926 | rajatnimje434@gmail.com
B.Tech Computer Engineering (2025) - Smt. Radhikatai Pandav College of Engineering
HackerRank Certified in SQL | Cloud Computing Certified (NPTEL/IIT Kharagpur)

TARGET ROLE: L1 Technical Support Analyst / IT Service Desk Engineer

TECHNICAL SKILLS:
- Hardware: Custom PC assembly, motherboard POST diagnostics, RAM MemTest86, thermal management, PSU rail checks
- Operating Systems: Windows 10/11 deployment, Rufus USB creation, driver rollback (DDU), BSOD minidump triage, SFC/DISM repairs, malware removal
- Networking: Wi-Fi router setup, DHCP/DNS configuration, packet loss ping/tracert triage, Cat6 cabling, file/printer sharing
- Data & Tools: SQL (HackerRank Certified), Python log parsing, Excel pivot tables, Git, Command Prompt / PowerShell

EDUCATION:
- B.Tech in Computer Engineering | 2021 - 2025 | Smt. Radhikatai Pandav College of Engineering, Nagpur
- Higher Secondary Certificate (Class XII) | 2020 - 2021 | Shri Ramswami Junior College, Nagpur

AVAILABILITY: Immediate Joiner (0 Days Notice) | Ready for 24/7 Rotational Shifts & Relocation`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="content-section" id="resume">
      {/* Section Header */}
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <div className="section-tag" id="tagResume">
          <span className="pulse-dot" style={{ width: '6px', height: '6px' }} />
          CURRICULUM VITAE
        </div>
        <h2 className="section-heading" id="headingResume">
          Resume & Career Overview
        </h2>
        <p className="section-subheading" style={{ margin: '0 auto' }}>
          Official candidate profile for Global IT Service Desk & L1 Technical Support Analyst roles.
        </p>
      </div>

      {/* Top Status Banner: spans 100% full width like Telemetry */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: 'rgba(15, 15, 24, 0.7)',
          border: '1px solid var(--glass-border)',
          borderRadius: '10px',
          padding: '0.65rem 1.25rem',
          marginBottom: '1.5rem',
          fontSize: '0.8rem',
          color: 'var(--text-secondary)',
          flexWrap: 'wrap',
          gap: '0.5rem',
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span className="pulse-dot" style={{ width: '7px', height: '7px', backgroundColor: '#00FF88' }} />
          <span style={{ color: '#fff', fontWeight: 600 }}>Candidate Status: Immediate Joiner</span>
          <span style={{ color: 'var(--text-secondary)' }}>• 0-Day Notice Period • Available for 24/7 Rotational Shifts</span>
        </div>
        <div style={{ color: '#00FF88', fontWeight: 600 }}>
          Nagpur, Maharashtra • Open to Relocation / Remote / Hybrid
        </div>
      </div>

      {/* Balanced 2-Column Full-Width Dashboard */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
          gap: '1.5rem',
          width: '100%',
          boxSizing: 'border-box',
          alignItems: 'stretch',
        }}
      >
        {/* Column 1: Profile & Executive Summary Card */}
        <div
          className="glass-panel"
          style={{
            padding: '2rem',
            borderRadius: '16px',
            display: 'flex',
            flexDirection: 'column',
            border: '1px solid var(--glass-border)',
            backgroundColor: 'rgba(15, 15, 24, 0.85)',
            width: '100%',
            maxWidth: '100%',
            minWidth: 0,
            boxSizing: 'border-box',
          }}
        >
          {/* Header */}
          <div style={{ borderBottom: '1px solid var(--glass-border)', paddingBottom: '1.25rem', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.4rem' }}>
              <div>
                <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#fff', margin: 0 }}>
                  Rajat Nimje
                </h3>
                <div style={{ fontSize: '0.86rem', color: 'var(--accent-color)', fontWeight: 600, marginTop: '0.2rem' }}>
                  L1 Technical Support Analyst | IT Service Desk Engineer
                </div>
              </div>
              <span style={{ fontSize: '0.72rem', color: '#00FF88', backgroundColor: 'rgba(0, 255, 136, 0.12)', padding: '0.25rem 0.6rem', borderRadius: '6px', fontWeight: 700 }}>
                ● 2025 GRADUATE READY
              </span>
            </div>
          </div>

          {/* Executive Summary */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ fontSize: '0.78rem', color: 'var(--accent-color)', textTransform: 'uppercase', letterSpacing: '0.8px', fontWeight: 700, marginBottom: '0.5rem' }}>
              EXECUTIVE PROFILE
            </h4>
            <p style={{ color: '#e5e5e5', fontSize: '0.88rem', lineHeight: 1.65, margin: 0 }}>
              B.Tech Computer Engineering graduate (2025) with deep hands-on expertise in custom desktop PC assembly, component diagnostics, Windows OS kernel repair, and network connectivity troubleshooting. Proven ability to systematically isolate root causes using tools like MemTest86, SFC/DISM, and packet loss diagnostics. Experienced in writing SQL queries to audit customer ticket datasets and logs. Dedicated to patient, empathetic user communication and high First-Contact Resolution (FCR) rates.
            </p>
          </div>

          {/* Key Value Propositions */}
          <div style={{ marginBottom: '1.75rem' }}>
            <h4 style={{ fontSize: '0.78rem', color: '#5A8CFF', textTransform: 'uppercase', letterSpacing: '0.8px', fontWeight: 700, marginBottom: '0.6rem' }}>
              SERVICE DESK COMPETENCIES
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                { title: 'Zero POST Boot Failure Record', desc: '100% successful boot rate across all bare-metal desktop builds' },
                { title: 'Hardware Isolation & Breadboarding', desc: 'Rapid elimination of faulty RAM, failing power supplies, and storage bad blocks' },
                { title: 'OS Integrity & Malware Extraction', desc: 'Repairing corrupted system binaries without wiping user profiles or data' },
                { title: 'Customer-First De-escalation', desc: 'Translating complex technical diagnostics into clear, calm instructions for non-technical users' },
              ].map((val, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    gap: '0.6rem',
                    fontSize: '0.82rem',
                    color: '#d5d5d5',
                    backgroundColor: 'rgba(255, 255, 255, 0.025)',
                    padding: '0.65rem 0.85rem',
                    borderRadius: '8px',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                  }}
                >
                  <span style={{ color: '#00FF88', fontWeight: 700 }}>✓</span>
                  <div>
                    <strong style={{ color: '#fff' }}>{val.title}: </strong>
                    <span>{val.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons: Responsive Grid so buttons never overflow the card boundary */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
              gap: '0.75rem',
              marginTop: 'auto',
              width: '100%',
              boxSizing: 'border-box',
            }}
          >
            <button
              type="button"
              className="btn btn-primary"
              onClick={onDownloadResume}
              style={{
                fontSize: '0.8rem',
                padding: '0.75rem 1rem',
                width: '100%',
                minWidth: 0,
                boxSizing: 'border-box',
                whiteSpace: 'normal',
                textAlign: 'center',
                lineHeight: 1.3,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.45rem',
              }}
            >
              <span style={{ fontSize: '1.05rem', flexShrink: 0 }}>📄</span>
              <span style={{ fontWeight: 700 }}>DOWNLOAD RESUME (PDF)</span>
            </button>
            <button
              type="button"
              className="btn btn-outline"
              onClick={copyText}
              style={{
                fontSize: '0.8rem',
                padding: '0.75rem 1rem',
                width: '100%',
                minWidth: 0,
                boxSizing: 'border-box',
                whiteSpace: 'normal',
                textAlign: 'center',
                lineHeight: 1.3,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.45rem',
              }}
            >
              <span style={{ flexShrink: 0 }}>{copied ? '✓' : '📋'}</span>
              <span>{copied ? 'COPIED TO CLIPBOARD' : 'COPY PLAIN TEXT'}</span>
            </button>
          </div>
        </div>

        {/* Column 2: Technical Toolkit & Candidate Data Card */}
        <div
          className="glass-panel"
          style={{
            padding: '2rem',
            borderRadius: '16px',
            display: 'flex',
            flexDirection: 'column',
            border: '1px solid var(--glass-border)',
            backgroundColor: 'rgba(15, 15, 24, 0.85)',
            width: '100%',
            maxWidth: '100%',
            minWidth: 0,
            boxSizing: 'border-box',
          }}
        >
          {/* Header */}
          <div style={{ borderBottom: '1px solid var(--glass-border)', paddingBottom: '1.25rem', marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff', margin: '0 0 0.25rem 0' }}>
              Technical Expertise & Hiring Specifications
            </h3>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
              Verified skills matrix for IT Service Desk, L1 Support & Systems Administration
            </div>
          </div>

          {/* Technical Toolkit Grid */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ fontSize: '0.78rem', color: 'var(--accent-color)', textTransform: 'uppercase', letterSpacing: '0.8px', fontWeight: 700, marginBottom: '0.6rem' }}>
              TECHNICAL REPERTOIRE
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '0.75rem' }}>
              {[
                { title: '🖥️ PC Hardware & Assembly', badge: 'Expert', desc: 'Desktop builds, MemTest86, thermal paste, PSU checks' },
                { title: '🪟 Windows OS & Triage', badge: 'Expert', desc: 'Win 10/11 deployment, DISM/SFC, DDU, malware eradication' },
                { title: '🌐 Networking & Wi-Fi', badge: 'Advanced', desc: 'Routers, DHCP IP leases, DNS resolvers, ping hop tests' },
                { title: '📊 SQL & Log Parsing', badge: 'Certified', desc: 'HackerRank Certified SQL, Python error logs, Excel pivot' },
              ].map((t, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    padding: '0.85rem 1rem',
                    borderRadius: '10px',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.3rem' }}>
                    <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#fff' }}>{t.title}</span>
                    <span style={{ fontSize: '0.65rem', color: '#00FF88', fontWeight: 700 }}>{t.badge}</span>
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                    {t.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Candidate Deployment Specs */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ fontSize: '0.78rem', color: '#FFBD2E', textTransform: 'uppercase', letterSpacing: '0.8px', fontWeight: 700, marginBottom: '0.6rem' }}>
              EMPLOYMENT & LOGISTICS DETAILS
            </h4>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 190px), 1fr))',
                gap: '0.75rem',
                fontSize: '0.82rem',
              }}
            >
              <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)', padding: '0.75rem', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                <span style={{ color: 'var(--text-secondary)', display: 'block', fontSize: '0.72rem' }}>NOTICE PERIOD</span>
                <strong style={{ color: '#00FF88' }}>Immediate Joiner (0 Days)</strong>
              </div>
              <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)', padding: '0.75rem', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                <span style={{ color: 'var(--text-secondary)', display: 'block', fontSize: '0.72rem' }}>LOCATION / MOBILITY</span>
                <strong style={{ color: '#fff' }}>Nagpur (Relocation Ready)</strong>
              </div>
              <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)', padding: '0.75rem', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                <span style={{ color: 'var(--text-secondary)', display: 'block', fontSize: '0.72rem' }}>SHIFT FLEXIBILITY</span>
                <strong style={{ color: '#fff' }}>24/7 Rotational Shifts</strong>
              </div>
              <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)', padding: '0.75rem', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                <span style={{ color: 'var(--text-secondary)', display: 'block', fontSize: '0.72rem' }}>COMMUNICATION</span>
                <strong style={{ color: '#fff' }}>Fluent English & Hindi</strong>
              </div>
            </div>
          </div>

          {/* Quick Contact Ribbon */}
          <div
            style={{
              backgroundColor: 'rgba(138, 99, 248, 0.08)',
              border: '1px solid rgba(138, 99, 248, 0.25)',
              borderRadius: '10px',
              padding: '0.85rem 1rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '0.6rem',
              fontSize: '0.8rem',
              marginTop: 'auto',
            }}
          >
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', color: '#e5e5e5' }}>
              <span>📞 +91 9049478926</span>
              <span>✉️ rajatnimje434@gmail.com</span>
            </div>
            <span style={{ color: '#00FF88', fontWeight: 700, fontSize: '0.75rem' }}>
              ● READY TO INTERVIEW
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
