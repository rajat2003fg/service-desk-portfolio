import React from 'react';

export const SkillsSection: React.FC = () => {
  const categories = [
    {
      id: 'hardware',
      title: 'PC Hardware & Assembly',
      icon: '🖥️',
      badge: 'Diagnostics',
      summary: 'Component-level triage, custom desktop building, POST diagnostics, and thermal optimization.',
      skills: [
        { name: 'Custom Desktop PC Assembly', level: 'Hands-on', desc: 'Motherboard, CPU cooler, RAM, PSU wiring, and front-panel headers' },
        { name: 'RAM Memory Testing', level: 'Advanced', desc: 'MemTest86, bad address isolation, and dual-channel configurations' },
        { name: 'Storage Health & Bad Sectors', level: 'Advanced', desc: 'NVMe/SATA SSD testing, SMART logs, and bad block remediation' },
        { name: 'PSU & Power Rail Testing', level: 'Intermediate', desc: 'ATX multimeter checks, reboot under load, and ripple diagnostics' },
        { name: 'Thermals & Cooler Mounting', level: 'Advanced', desc: 'Thermal paste repasting, air/AIO cooling, and throttle abatement' },
        { name: 'BIOS / UEFI Configuration', level: 'Advanced', desc: 'Firmware flashing, CMOS battery reset, boot priorities, and TPM' },
      ],
    },
    {
      id: 'os',
      title: 'Windows OS & System Recovery',
      icon: '🪟',
      badge: 'L1 Service Desk',
      summary: 'Windows OS troubleshooting, driver issues, system recovery, and startup problems.',
      skills: [
        { name: 'Windows 10 & 11 Deployment', level: 'Hands-on', desc: 'Clean ISO installation, Rufus USB creation, and partition layout' },
        { name: 'Driver Management', level: 'Hands-on', desc: 'Display driver cleanup, rollback, and chipset updates' },
        { name: 'System Recovery', level: 'Hands-on', desc: 'SFC /scannow, DISM component checks, and startup troubleshooting' },
        { name: 'BSOD Crash Dump Triage', level: 'Advanced', desc: 'BlueScreenView, minidump analysis, and faulty sys file tracking' },
        { name: 'Malware & Adware Troubleshooting', level: 'Hands-on', desc: 'Safe mode cleanup, rogue startup processes, and quarantine' },
        { name: 'Safe Mode & Recovery Console', level: 'Advanced', desc: 'BCD rebuild, startup repair, and Windows PE emergency boots' },
      ],
    },
    {
      id: 'network',
      title: 'Networking & Connectivity',
      icon: '🌐',
      badge: 'Infrastructure',
      summary: 'Configuring LAN, home/hostel Wi-Fi routers, DNS resolvers, and resolving connectivity bottlenecks.',
      skills: [
        { name: 'Wi-Fi Router Configuration', level: 'Advanced', desc: 'SSID security, 2.4/5GHz channel selection, and firmware updates' },
        { name: 'DHCP & Subnet Management', level: 'Advanced', desc: 'IP pool allocation, static IP assignment, and conflict fixes' },
        { name: 'DNS & Gateway Troubleshooting', level: 'Advanced', desc: 'ipconfig /flushdns, alternate DNS setup (1.1.1.1/8.8.8.8)' },
        { name: 'Packet Loss & Latency Triage', level: 'Advanced', desc: 'Ping -t, tracert route hop analysis, and Wi-Fi interference checks' },
        { name: 'RJ45 & Ethernet Cabling', level: 'Intermediate', desc: 'Cat6 cable testing, crimping basics, and switch port checks' },
        { name: 'Local Network File & Printer Sharing', level: 'Intermediate', desc: 'SMB share permissions and local network discovery' },
      ],
    },
    {
      id: 'data',
      title: 'Data Validation & Automation',
      icon: '📊',
      badge: 'Analytics',
      summary: 'Writing SQL queries and Python scripts to validate support datasets, parse logs, and generate reports.',
      skills: [
        { name: 'SQL Querying & Joins', level: 'Certified', desc: 'HackerRank SQL Certified; inner/left joins, aggregations, data integrity' },
        { name: 'Python Log Parsing', level: 'Intermediate', desc: 'Lightweight automation scripts to parse error codes and format reports' },
        { name: 'Microsoft Excel Data Checks', level: 'Advanced', desc: 'VLOOKUP/XLOOKUP, pivot tables, and support metric reporting' },
        { name: 'Git & Version Control', level: 'Intermediate', desc: 'Repository management, commits, and collaborative code review' },
      ],
    },
  ];

  return (
    <section className="content-section" id="skills">
      {/* Section Header */}
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <div className="section-tag" id="tagSkills">
          <span className="pulse-dot" style={{ width: '6px', height: '6px' }} />
          TECHNICAL EXPERTISE
        </div>
        <h2 className="section-heading" id="headingSkills">
          Core Skills & L1 Service Desk Toolkit
        </h2>
        <p className="section-subheading" style={{ margin: '0 auto' }}>
          Hands-on diagnostic capabilities developed through direct hardware builds, system restorations, and patient end-user technical support.
        </p>
      </div>

      {/* Compact skill domains */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns:
            'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
          gap: '1.5rem',
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="glass-panel"
            style={{
              padding: '1.35rem',
              borderRadius: '16px',
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              boxSizing: 'border-box',
              border: '1px solid var(--glass-border)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <span style={{ fontSize: '1.6rem' }}>{cat.icon}</span>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', margin: 0 }}>
                  {cat.title}
                </h3>
              </div>
              <span
                style={{
                  fontSize: '0.72rem',
                  color: 'var(--accent-color)',
                  backgroundColor: 'rgba(138, 99, 248, 0.1)',
                  padding: '0.25rem 0.65rem',
                  borderRadius: '12px',
                  fontWeight: 700,
                  border: '1px solid rgba(138, 99, 248, 0.25)',
                }}
              >
                {cat.badge}
              </span>
            </div>

            <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '1.25rem' }}>
              {cat.summary}
            </p>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.45rem',
                marginTop: '0.25rem',
              }}
            >
              {cat.skills.slice(0, 5).map((skill, sIdx) => (
                <span
                  key={sIdx}
                  style={{
                    padding: '0.35rem 0.55rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.025)',
                    borderRadius: '5px',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    fontSize: '0.74rem',
                    color: '#e5e5e5',
                  }}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
