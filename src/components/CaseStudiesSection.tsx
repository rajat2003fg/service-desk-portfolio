import React, { useState } from 'react';

export const CaseStudiesSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const cases = [
    {
      id: 0,
      code: 'INC-01',
      type: 'hardware',
      title: 'End-to-End Custom PC Building & POST Diagnostics',
      category: 'PC Hardware & Assembly',
      timeline: '2021 – 2025',
      badge: 'PC Assembly',
      summary: 'Building desktop systems from individual components and checking POST, thermals, and airflow.',
      problem: 'Assembled desktop systems from individual components and worked through compatibility, cabling, boot, and thermal checks.',
      diagnosticSteps: [
        'Inspected socket pins and mounted processor with Noctua air cooler and pea-sized thermal compound spread.',
        'Installed high-frequency DDR4 RAM into Motherboard primary slots 2 & 4 for dual-channel bandwidth.',
        'Connected 24-pin ATX, 8-pin EPS 12V CPU, and PCIe GPU power rails from Tier-A modular power supply.',
        'Created UEFI installation flash drive via Rufus with Windows 11 ISO (GPT partition scheme, UEFI non-CSM).',
      ],
      outcome: 'The system booted successfully and remained stable during follow-up checks.',
      skillsApplied: ['Component Compatibility', 'Thermal Management', 'BIOS Flashing & XMP', 'Cable Management & Airflow'],
    },
    {
      id: 1,
      code: 'INC-02',
      type: 'hardware',
      title: 'Hardware Failure Isolation & Boot Recovery',
      category: 'Root-Cause Diagnostics',
      timeline: '2022 – 2025',
      badge: 'L1 Isolation',
      summary: 'Isolating boot loop and chassis beep codes down to a defective memory module using breadboard testing.',
      problem: 'User desktop workstation suddenly failed to complete POST, looping into repeated reboot cycles with no display signal and continuous chassis beep codes.',
      diagnosticSteps: [
        'Cleared motherboard CMOS by removing CR2032 battery and shorting JBAT1 jumper to revert corrupted BIOS settings.',
        'Executed bare-minimum breadboard boot (CPU + single stick of RAM on non-conductive surface) to eliminate case shorts.',
        'Isolated bad RAM module by testing individual sticks across slots; ran MemTest86 which surfaced 14,000+ errors on stick #2.',
        'Replaced defective RAM module with matched dual-channel kit and updated BIOS microcode.',
      ],
      outcome: 'The system booted into Windows after the faulty module was replaced, with clean follow-up memory checks.',
      skillsApplied: ['MemTest86 Diagnostics', 'POST Beep Code Analysis', 'CMOS Hardware Reset', 'Component Isolation'],
    },
    {
      id: 2,
      code: 'INC-03',
      type: 'network',
      title: 'Home & Hostel Wi-Fi Network Infrastructure',
      category: 'Network & Connectivity',
      timeline: '2022 – 2025',
      badge: 'Network Tuning',
      summary: 'Troubleshooting unstable hostel and home Wi-Fi through router, DHCP, DNS, and channel checks.',
      problem: 'Hostel and home LAN suffered frequent drops, extreme latency (>600ms), and inability of mobile devices to obtain IP addresses during peak evening hours.',
      diagnosticSteps: [
        'Reviewed router status, connected devices, DHCP settings, and IP conflicts.',
        'Checked lease settings and device allocation to reduce connection failures.',
        'Reviewed 2.4GHz channel congestion and adjusted the router channel where appropriate.',
        'Tested DNS resolution and local connectivity with standard network troubleshooting commands.',
      ],
      outcome: 'Connectivity became more consistent across the affected devices after the router and channel changes.',
      skillsApplied: ['DHCP Pool Configuration', 'RF Channel Optimization', 'DNS Server Tuning', 'Subnet Addressing'],
    },
    {
      id: 3,
      code: 'INC-04',
      type: 'os',
      title: 'Windows OS Corruption & Malware Remediation',
      category: 'System Remediation',
      timeline: '2023 – 2025',
      badge: 'OS & Security',
      summary: 'Restoring unbootable Windows systems afflicted by BSODs and adware while preserving user files intact.',
      problem: 'User machine plagued by repetitive Critical Process Died BSODs, browser hijacking pop-ups, and inability to boot into normal desktop mode.',
      diagnosticSteps: [
        'Booted into Windows Safe Mode with Networking to halt rogue auto-start services and malicious browser extensions.',
        'Executed administrative DISM /Online /Cleanup-Image /RestoreHealth to download fresh system binaries from Windows Update.',
        'Ran SFC /scannow and DISM checks to repair Windows system files.',
        'Used safe-mode and Malwarebytes checks to troubleshoot malware and adware symptoms.',
      ],
      outcome: 'Recovered the operating system without wiping user documents, personal settings, or installed academic software.',
      skillsApplied: ['Safe Mode Triage', 'SFC / DISM Image Repair', 'Malware Eradication', 'User Data Preservation'],
    },
    {
      id: 4,
      code: 'INC-05',
      type: 'data',
      title: 'Support Data Validation & Query Automation',
      category: 'SQL & Analytics',
      timeline: '2024 – 2025',
      badge: 'HackerRank Certified',
      summary: 'Automating customer support ticket reconciliation and error parsing using SQL joins and Python scripts.',
      problem: 'Need to audit high volumes of user tickets, verify customer accounts against central databases, and generate daily resolution reports without manual errors.',
      diagnosticSteps: [
        'Engineered SQL scripts using multi-table INNER and LEFT JOINs with GROUP BY aggregations to cross-reference ticket IDs against user status.',
        'Built lightweight Python automation script utilizing CSV module to parse incoming error log dumps and extract repetitive crash signatures.',
        'Created dynamic Microsoft Excel pivot templates with conditional formatting for team lead visibility into resolution times.',
      ],
      outcome: 'Reduced manual log review effort and improved consistency when checking customer records.',
      skillsApplied: ['SQL Queries & Joins', 'Python Data Parsing', 'Excel Pivot Tables', 'Log File Analysis'],
    },
  ];

  const visibleCases = cases.slice(0, 3);

  return (
    <section className="content-section" id="projects">
      {/* Section Header */}
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <div className="section-tag" id="tagProjects">
          <span className="pulse-dot" style={{ width: '6px', height: '6px' }} />
          HANDS-ON EXPERIENCE
        </div>
        <h2 className="section-heading" id="headingProjects">
          Practical Troubleshooting Case Studies
        </h2>
        <p className="section-subheading" style={{ margin: '0 auto' }}>
          Documented technical incidents solved for family, friends, and hostel peers — showcasing root-cause isolation and structured resolution.
        </p>
      </div>

      {/* Incident Cards Grid: Matches Telemetry gridTemplateColumns minmax */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
          gap: '1.5rem',
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        {visibleCases.map((cs) => {
          const isExpanded = expandedId === cs.id;

          return (
            <div
              key={cs.id}
              className="glass-panel"
              style={{
                padding: '1.75rem',
                borderRadius: '16px',
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid var(--glass-border)',
                transition: 'all 0.25s ease',
                backgroundColor: 'rgba(15, 15, 24, 0.85)',
              }}
            >
              {/* Card Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--accent-color)', letterSpacing: '0.5px' }}>
                    {cs.code}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>• {cs.category}</span>
                </div>
                <span
                  style={{
                    fontSize: '0.68rem',
                    color: '#00FF88',
                    backgroundColor: 'rgba(0, 255, 136, 0.1)',
                    padding: '0.15rem 0.5rem',
                    borderRadius: '4px',
                    fontWeight: 700,
                  }}
                >
                  {cs.badge}
                </span>
              </div>

              {/* Title */}
              <h3 style={{ fontSize: '1.18rem', fontWeight: 700, color: '#fff', margin: '0 0 0.75rem 0', lineHeight: 1.35 }}>
                {cs.title}
              </h3>

              {/* Reported Symptoms */}
              <div
                style={{
                  backgroundColor: 'rgba(255, 189, 46, 0.06)',
                  border: '1px solid rgba(255, 189, 46, 0.2)',
                  borderRadius: '8px',
                  padding: '0.75rem 0.9rem',
                  marginBottom: '1rem',
                  fontSize: '0.82rem',
                  color: '#e5e5e5',
                  lineHeight: 1.5,
                }}
              >
                <div style={{ color: '#FFBD2E', fontWeight: 700, fontSize: '0.72rem', textTransform: 'uppercase', marginBottom: '0.2rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <span>⚠️</span>
                  <span>SYMPTOMS REPORTED</span>
                </div>
                {cs.problem}
              </div>

              {/* Diagnostic Steps */}
              <div style={{ marginBottom: '1rem', flex: 1 }}>
                <div style={{ fontSize: '0.72rem', color: '#5A8CFF', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <span>🛠️</span>
                  <span>ROOT-CAUSE TRIAGE STEPS</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                  {(isExpanded ? cs.diagnosticSteps : cs.diagnosticSteps.slice(0, 2)).map((step, idx) => (
                    <div
                      key={idx}
                      style={{
                        fontSize: '0.8rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.45,
                        display: 'flex',
                        gap: '0.5rem',
                      }}
                    >
                      <span style={{ color: 'var(--accent-color)', fontWeight: 700, minWidth: '16px' }}>
                        {idx + 1}.
                      </span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>

                {cs.diagnosticSteps.length > 2 && (
                  <button
                    type="button"
                    onClick={() => setExpandedId(isExpanded ? null : cs.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--accent-color)',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      padding: '0.35rem 0 0 0',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                    }}
                  >
                    {isExpanded ? '▲ Show Fewer Steps' : `▼ View All ${cs.diagnosticSteps.length} Diagnostic Steps`}
                  </button>
                )}
              </div>

              {/* Verified Outcome */}
              <div
                style={{
                  backgroundColor: 'rgba(0, 255, 136, 0.06)',
                  border: '1px solid rgba(0, 255, 136, 0.25)',
                  borderRadius: '8px',
                  padding: '0.75rem 0.9rem',
                  marginBottom: '1rem',
                  fontSize: '0.82rem',
                  color: '#fff',
                  lineHeight: 1.45,
                }}
              >
                <div style={{ color: '#00FF88', fontWeight: 700, fontSize: '0.72rem', textTransform: 'uppercase', marginBottom: '0.2rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <span>✅</span>
                  <span>VERIFIED RESOLUTION</span>
                </div>
                {cs.outcome}
              </div>

              {/* Applied Skills Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: 'auto' }}>
                {cs.skillsApplied.map((skill, skIdx) => (
                  <span
                    key={skIdx}
                    style={{
                      fontSize: '0.7rem',
                      color: '#d5d5d5',
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      padding: '0.2rem 0.5rem',
                      borderRadius: '4px',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
