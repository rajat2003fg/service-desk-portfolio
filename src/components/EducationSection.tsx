import React from 'react';

export const EducationSection: React.FC = () => {
  const credentials = [
    {
      id: 'degree',
      type: 'ACADEMIC DEGREE',
      title: 'B.Tech in Computer Engineering',
      institution: 'Smt. Radhikatai Pandav College of Engineering, Nagpur',
      period: '2021 – 2025',
      badge: 'Degree Graduate',
      badgeColor: '#00FF88',
      accentColor: 'var(--accent-color)',
      icon: '🎓',
      desc: 'Comprehensive engineering curriculum covering Operating Systems internals, Computer Networks, Database Management Systems, System Architecture, and Object-Oriented Software Engineering.',
      highlights: ['Operating Systems Architecture', 'Computer Networks (TCP/IP)', 'Relational Database Management', 'System Assembly & Logic Design'],
    },
    {
      id: 'hsc',
      type: 'HIGHER SECONDARY',
      title: 'Higher Secondary Education (Class XII)',
      institution: 'Shri Ramswami Junior College, Nagpur',
      period: '2020 – 2021',
      badge: 'Science Stream',
      badgeColor: '#5A8CFF',
      accentColor: '#5A8CFF',
      icon: '🏛️',
      desc: 'Rigorous pre-engineering coursework in Mathematics, Physics, and analytical logic, instilling systematic problem-solving habits and diagnostic reasoning.',
      highlights: ['Advanced Mathematics', 'Physics & Electronics Basics', 'Analytical Logic', 'Systematic Problem Solving'],
    },
    {
      id: 'sql',
      type: 'INDUSTRY CERTIFICATION',
      title: 'SQL (Basic & Intermediate) Certified',
      institution: 'HackerRank Verified Credential',
      period: 'Verified 2024',
      badge: 'HackerRank Verified',
      badgeColor: '#00FF88',
      accentColor: '#00FF88',
      icon: '🥇',
      desc: 'Demonstrated mastery in writing complex multi-table SQL queries, INNER and LEFT JOINs, sub-queries, aggregations, and support ticket dataset reconciliation.',
      highlights: ['Complex Multi-Table JOINs', 'Aggregations & Grouping', 'Ticket Record Auditing', 'Database Integrity Verification'],
    },
    {
      id: 'cloud',
      type: 'INDUSTRY CERTIFICATION',
      title: 'Cloud Computing Certification',
      institution: 'NPTEL & IIT Kharagpur (Govt. of India)',
      period: 'Verified 2024',
      badge: 'NPTEL Verified',
      badgeColor: '#FFBD2E',
      accentColor: '#FFBD2E',
      icon: '☁️',
      desc: 'Formal training in cloud service models (IaaS/PaaS/SaaS), virtual machines, distributed systems, storage scalability, and datacenter reliability fundamentals.',
      highlights: ['Cloud Infrastructure (IaaS)', 'Virtualization & Hypervisors', 'SLA & High Availability', 'Distributed Network Principles'],
    },
  ];

  return (
    <section className="content-section" id="education">
      {/* Section Header */}
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <div className="section-tag" id="tagEducation">
          <span className="pulse-dot" style={{ width: '6px', height: '6px' }} />
          ACADEMIC & CREDENTIALS
        </div>
        <h2 className="section-heading" id="headingEducation">
          Education & Industry Certifications
        </h2>
        <p className="section-subheading" style={{ margin: '0 auto' }}>
          Computer engineering foundation coupled with verified technical credentials in SQL and Cloud Computing.
        </p>
      </div>

      {/* Top Status Banner - spans 100% full width like Telemetry */}
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
          <span style={{ color: '#fff', fontWeight: 600 }}>Verified Qualifications & Academic Foundation</span>
          <span style={{ color: 'var(--text-secondary)' }}>• 4 Verified Degrees & Industry Accreditations</span>
        </div>
        <div style={{ color: 'var(--accent-color)', fontWeight: 600 }}>
          Nagpur University & National Credential Verification
        </div>
      </div>

      {/* Responsive 4-Card Grid matching Telemetry */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
          gap: '1.5rem',
          width: '100%',
          boxSizing: 'border-box',
          marginBottom: '1.5rem',
        }}
      >
        {credentials.filter((item) => item.id !== 'hsc').map((item) => (
          <div
            key={item.id}
            className="glass-panel"
            style={{
              padding: '1.75rem',
              borderRadius: '16px',
              display: 'flex',
              flexDirection: 'column',
              border: '1px solid var(--glass-border)',
              borderTop: `3px solid ${item.accentColor}`,
              boxSizing: 'border-box',
              backgroundColor: 'rgba(15, 15, 24, 0.85)',
            }}
          >
            {/* Header info */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.6rem' }}>
              <span style={{ fontSize: '0.72rem', color: item.accentColor, fontWeight: 800, letterSpacing: '0.8px', textTransform: 'uppercase' }}>
                {item.type}
              </span>
              <span
                style={{
                  fontSize: '0.68rem',
                  color: item.badgeColor,
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  padding: '0.15rem 0.5rem',
                  borderRadius: '4px',
                  fontWeight: 700,
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                {item.period}
              </span>
            </div>

            {/* Title & Icon */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '1.5rem', lineHeight: 1 }}>{item.icon}</span>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#fff', margin: 0, lineHeight: 1.3 }}>
                  {item.title}
                </h3>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                  {item.institution}
                </div>
              </div>
            </div>

            {/* Summary paragraph */}
            <p style={{ fontSize: '0.84rem', color: '#d5d5d5', lineHeight: 1.55, marginBottom: '1.25rem' }}>
              {item.desc}
            </p>

            {/* Coursework & competency pills */}
            <div style={{ marginTop: 'auto' }}>
              <div style={{ fontSize: '0.7rem', color: 'var(--accent-color)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                Key Competencies:
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                {item.highlights.map((hl, hIdx) => (
                  <span
                    key={hIdx}
                    style={{
                      fontSize: '0.72rem',
                      color: '#e5e5e5',
                      backgroundColor: 'rgba(255, 255, 255, 0.035)',
                      padding: '0.2rem 0.55rem',
                      borderRadius: '4px',
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                    }}
                  >
                    ✓ {hl}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Full-width Technical Foundations Strip */}
      <div
        className="glass-panel"
        style={{
          padding: '1.25rem 1.5rem',
          borderRadius: '12px',
          border: '1px solid var(--glass-border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        <div>
          <span style={{ fontSize: '0.78rem', color: '#00FF88', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.6px', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <span>⚡</span>
            <span>CORE COMPUTER SCIENCE ACADEMIC PILLARS</span>
          </span>
          <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
            Operating Systems • Computer Networks • DBMS • Computer Organization • Data Structures
          </div>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {['English (Fluent)', 'Hindi (Fluent)', 'Marathi (Native)'].map((lang, lIdx) => (
            <span
              key={lIdx}
              style={{
                fontSize: '0.72rem',
                color: '#fff',
                backgroundColor: 'rgba(138, 99, 248, 0.12)',
                padding: '0.25rem 0.6rem',
                borderRadius: '6px',
                border: '1px solid rgba(138, 99, 248, 0.25)',
                fontWeight: 600,
              }}
            >
              🗣️ {lang}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
