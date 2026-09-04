import React, { useState } from 'react';

export const SkillsSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'hardware' | 'os' | 'network' | 'data'>('all');

  const categories = [
    {
      id: 'hardware',
      title: 'PC Hardware & Assembly',
      icon: '🖥️',
      badge: 'Diagnostics',
      summary: 'Component-level triage, custom desktop building, POST diagnostics, and thermal optimization.',
      skills: [
        { name: 'Custom Desktop PC Assembly', level: 'Expert', desc: 'Motherboard, CPU cooler, RAM, PSU wiring, and front-panel headers' },
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
      summary: 'Troubleshooting operating system corruption, driver crashes, registry errors, and startup freezes.',
      skills: [
        { name: 'Windows 10 & 11 Deployment', level: 'Expert', desc: 'Clean ISO installation, Rufus USB creation, and partition layout' },
        { name: 'Driver Management', level: 'Expert', desc: 'DDU display driver uninstalls, rollback, and chipset updates' },
        { name: 'System Integrity Repairs', level: 'Expert', desc: 'SFC /scannow, DISM component cleanup, and CBS.log inspection' },
        { name: 'BSOD Crash Dump Triage', level: 'Advanced', desc: 'BlueScreenView, minidump analysis, and faulty sys file tracking' },
        { name: 'Malware & Adware Remediation', level: 'Advanced', desc: 'Safe mode cleanup, rogue startup processes, and quarantine' },
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

  const filteredCategories =
    selectedFilter === 'all'
      ? categories
      : categories.filter((cat) => cat.id === selectedFilter);

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

      {/* Filter Badges */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.5rem',
          flexWrap: 'wrap',
          marginBottom: '1.75rem',
        }}
      >
        {[
          { id: 'all', label: 'All Competencies (24)' },
          { id: 'hardware', label: '🖥️ PC Hardware' },
          { id: 'os', label: '🪟 Windows OS' },
          { id: 'network', label: '🌐 Networking' },
          { id: 'data', label: '📊 SQL & Scripting' },
        ].map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setSelectedFilter(f.id as any)}
            style={{
              padding: '0.45rem 1.15rem',
              borderRadius: '24px',
              border: selectedFilter === f.id ? '1px solid var(--accent-color)' : '1px solid var(--glass-border)',
              backgroundColor: selectedFilter === f.id ? 'rgba(138, 99, 248, 0.22)' : 'rgba(20, 20, 25, 0.5)',
              color: selectedFilter === f.id ? '#fff' : 'var(--text-secondary)',
              fontSize: '0.82rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            {f.label}
          </button>
        ))}
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
          <span style={{ color: '#fff', fontWeight: 600 }}>L1 Service Desk Competency Matrix</span>
          <span style={{ color: 'var(--text-secondary)' }}>• 24 Verified Skills across Hardware, OS, Network & Data</span>
        </div>
        <div style={{ color: 'var(--accent-color)', fontWeight: 600 }}>
          {selectedFilter === 'all' ? 'Showing All 4 Domains' : `Domain Filter Active (${filteredCategories[0]?.title})`}
        </div>
      </div>

      {/* Categories Grid: Balanced full-width cards identical to Telemetry layout */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns:
            filteredCategories.length === 1
              ? '1fr'
              : 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
          gap: '1.5rem',
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        {filteredCategories.map((cat) => (
          <div
            key={cat.id}
            className="glass-panel"
            style={{
              padding: '1.75rem',
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

            {/* Skills Sub-List: If single category, expands to 2-column or 3-column subgrid so it fills the entire width */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns:
                  filteredCategories.length === 1
                    ? 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))'
                    : '1fr',
                gap: '0.75rem',
                marginTop: 'auto',
              }}
            >
              {cat.skills.map((skill, sIdx) => (
                <div
                  key={sIdx}
                  style={{
                    padding: '0.75rem 0.85rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.025)',
                    borderRadius: '8px',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                    <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#fff' }}>
                      {skill.name}
                    </span>
                    <span
                      style={{
                        fontSize: '0.68rem',
                        color: skill.level === 'Expert' || skill.level === 'Certified' ? '#00FF88' : '#5A8CFF',
                        backgroundColor:
                          skill.level === 'Expert' || skill.level === 'Certified'
                            ? 'rgba(0, 255, 136, 0.1)'
                            : 'rgba(90, 140, 255, 0.1)',
                        padding: '0.15rem 0.45rem',
                        borderRadius: '4px',
                        fontWeight: 700,
                      }}
                    >
                      {skill.level}
                    </span>
                  </div>
                  <div style={{ fontSize: '0.77rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                    {skill.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
