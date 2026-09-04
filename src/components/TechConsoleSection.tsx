import React, { useState } from 'react';

export const TechConsoleSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'telemetry' | 'workflow'>('telemetry');
  const [isProbing, setIsProbing] = useState(false);
  const [lastCheckTime, setLastCheckTime] = useState('Just now');

  const handleRunHealthProbe = () => {
    setIsProbing(true);
    setTimeout(() => {
      setIsProbing(false);
      setLastCheckTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    }, 600);
  };

  return (
    <section className="content-section tech-grid-bg" id="techThemeSection">
      {/* Section Tag & Heading */}
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <div className="section-tag" id="tagTechTheme">
          <span className="pulse-dot" style={{ width: '6px', height: '6px' }} />
          L1 TECHNICAL LAB & TELEMETRY
        </div>
        <h2 className="section-heading" id="headingTechTheme">
          Hardware & System Health Telemetry
        </h2>
        <p className="section-subheading" style={{ margin: '0 auto' }}>
          Real-time metrics, hardware diagnostics, and Rajat's structured L1 incident resolution methodology.
        </p>
      </div>

      {/* Sub-view switcher: Telemetry vs. Incident Workflow */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '0.75rem',
          marginBottom: '2.2rem',
          flexWrap: 'wrap',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            backgroundColor: 'rgba(20, 20, 28, 0.8)',
            border: '1px solid var(--glass-border)',
            borderRadius: '30px',
            padding: '0.3rem',
            backdropFilter: 'blur(12px)',
          }}
        >
          <button
            type="button"
            onClick={() => setActiveTab('telemetry')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.45rem',
              padding: '0.55rem 1.35rem',
              borderRadius: '24px',
              border: 'none',
              backgroundColor: activeTab === 'telemetry' ? 'var(--accent-color)' : 'transparent',
              color: activeTab === 'telemetry' ? '#fff' : 'var(--text-secondary)',
              fontSize: '0.85rem',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.25s ease',
            }}
          >
            <span>⚡</span>
            <span>Hardware & System Health</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('workflow')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.45rem',
              padding: '0.55rem 1.35rem',
              borderRadius: '24px',
              border: 'none',
              backgroundColor: activeTab === 'workflow' ? 'var(--accent-color)' : 'transparent',
              color: activeTab === 'workflow' ? '#fff' : 'var(--text-secondary)',
              fontSize: '0.85rem',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.25s ease',
            }}
          >
            <span>🔄</span>
            <span>L1 Incident Triage Pipeline</span>
          </button>
        </div>

        {activeTab === 'telemetry' && (
          <button
            type="button"
            onClick={handleRunHealthProbe}
            disabled={isProbing}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.55rem 1rem',
              borderRadius: '24px',
              border: '1px solid rgba(138, 99, 248, 0.4)',
              backgroundColor: 'rgba(138, 99, 248, 0.12)',
              color: 'var(--accent-color)',
              fontSize: '0.8rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            title="Trigger instant diagnostics scan"
          >
            <span style={{ display: 'inline-block', transform: isProbing ? 'rotate(180deg)' : 'none', transition: 'transform 0.4s ease' }}>
              ⟳
            </span>
            <span>{isProbing ? 'Probing Sensors...' : 'Probe Hardware (Live)'}</span>
          </button>
        )}
      </div>

      {/* VIEW 1: HARDWARE & SYSTEM TELEMETRY */}
      {activeTab === 'telemetry' && (
        <div>
          {/* Status bar */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: 'rgba(15, 15, 24, 0.7)',
              border: '1px solid var(--glass-border)',
              borderRadius: '10px',
              padding: '0.65rem 1.25rem',
              marginBottom: '1.25rem',
              fontSize: '0.8rem',
              color: 'var(--text-secondary)',
              flexWrap: 'wrap',
              gap: '0.5rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span className="pulse-dot" style={{ width: '8px', height: '8px' }} />
              <span style={{ color: '#00FF88', fontWeight: 600 }}>All L1 Diagnostic Checks: PASSED</span>
            </div>
            <div>
              Last probe verified: <span style={{ color: '#fff', fontWeight: 600 }}>{lastCheckTime}</span>
            </div>
          </div>

          {/* Telemetry Metric Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))', gap: '1.5rem' }}>
            {[
              {
                title: 'CPU & Thermals',
                spec: 'Multi-Core Workstation Processor',
                metric: '41°C',
                status: 'Cool & Stable',
                detail: 'Custom thermal paste application & Noctua air tower mounting. Thermal throttle limits verified under load.',
                icon: '❄️',
                barColor: '#00FF88',
                percent: 38,
              },
              {
                title: 'RAM Integrity',
                spec: '32GB DDR4 @ 3200MHz Dual-Channel',
                metric: '0 Errors',
                status: 'MemTest86 Passed',
                detail: 'All memory registers stress tested across 4 consecutive passes. XMP profile stable with zero memory page faults.',
                icon: '🧠',
                barColor: '#8A63F8',
                percent: 100,
              },
              {
                title: 'Storage S.M.A.R.T Health',
                spec: 'NVMe Gen4 SSD + Secondary Backup',
                metric: '99% Good',
                status: '0 Bad Sectors',
                detail: 'S.M.A.R.T attributes verified via CrystalDiskInfo. TRIM enabled with zero uncorrectable read/write errors.',
                icon: '💾',
                barColor: '#00FF88',
                percent: 99,
              },
              {
                title: 'Network Interface',
                spec: 'Gigabit Ethernet + Wi-Fi 6',
                metric: '2ms Ping',
                status: '0% Packet Loss',
                detail: 'Gateway 192.168.1.1 responsive. DNS resolvers configured for Cloudflare (1.1.1.1) and Google (8.8.8.8).',
                icon: '🌐',
                barColor: '#5A8CFF',
                percent: 98,
              },
              {
                title: 'Power Supply Rails',
                spec: 'ATX 80-Plus Certified Gold PSU',
                metric: '+12.1V / +5.02V',
                status: 'Voltages Nominal',
                detail: 'Rails verified with multi-meter and hardware sensors. Ripple voltage well below 50mV tolerance limit.',
                icon: '⚡',
                barColor: '#FFBD2E',
                percent: 96,
              },
              {
                title: 'Windows 11 OS Image',
                spec: 'Build 22631 Pro 64-Bit',
                metric: 'Verified Clean',
                status: 'SFC & DISM Clean',
                detail: 'Component store healthy (DISM /CheckHealth). Kernel crash dumps cleared and BSOD auto-reboot verified.',
                icon: '🛡️',
                barColor: '#00FF88',
                percent: 100,
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="glass-panel"
                style={{
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '12px',
                  position: 'relative',
                  transition: 'transform 0.2s ease, border-color 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(138, 99, 248, 0.4)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--glass-border)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontSize: '1.35rem' }}>{item.icon}</span>
                    <div>
                      <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff', margin: 0 }}>
                        {item.title}
                      </h3>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                        {item.spec}
                      </div>
                    </div>
                  </div>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      color: item.barColor,
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      padding: '0.2rem 0.5rem',
                      borderRadius: '4px',
                      fontWeight: 700,
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {item.metric}
                  </span>
                </div>

                {/* Progress bar visual */}
                <div style={{ width: '100%', height: '4px', backgroundColor: 'rgba(255, 255, 255, 0.08)', borderRadius: '2px', overflow: 'hidden', marginBottom: '0.75rem' }}>
                  <div style={{ width: `${item.percent}%`, height: '100%', backgroundColor: item.barColor, borderRadius: '2px' }} />
                </div>

                <div style={{ fontSize: '0.8rem', color: item.barColor, fontWeight: 600, marginBottom: '0.35rem' }}>
                  ● {item.status}
                </div>

                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* VIEW 2: L1 INCIDENT TRIAGE PIPELINE */}
      {activeTab === 'workflow' && (
        <div
          className="glass-panel"
          style={{
            padding: '2rem',
            borderRadius: '16px',
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#fff', margin: '0 0 0.5rem 0' }}>
              Rajat's 5-Stage L1 Incident Triage Methodology
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', margin: 0 }}>
              Structured, methodical problem resolution mapped from user contact to verified ticket closure.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem',
              position: 'relative',
            }}
          >
            {[
              {
                step: '01',
                title: 'User Contact & Intake',
                badge: 'Active Listening',
                desc: 'Acknowledge user distress patiently over phone, email, or ticketing tool. Capture exact symptoms, error codes, and recent changes.',
                color: '#8A63F8',
              },
              {
                step: '02',
                title: 'L1 Triage & Scoping',
                badge: 'Scope Isolation',
                desc: 'Categorize issue: Hardware vs. Windows OS vs. Local Wi-Fi vs. App crash. Verify user impact and priority level.',
                color: '#5A8CFF',
              },
              {
                step: '03',
                title: 'Root-Cause Analysis',
                badge: 'Diagnostic Tools',
                desc: 'Inspect Event Viewer, safe mode boot, MemTest logs, ping packet drop, or run SFC / DISM to identify true fault.',
                color: '#00FF88',
              },
              {
                step: '04',
                title: 'Step-by-Step Fix',
                badge: 'Clear Instructions',
                desc: 'Guide user through non-jargon step-by-step remediation, driver reinstall, or hardware re-seat until functional.',
                color: '#FFBD2E',
              },
              {
                step: '05',
                title: 'Verification & Closure',
                badge: 'Documentation',
                desc: 'Confirm issue is fully resolved from user standpoint. Document resolution notes for internal knowledge base.',
                color: '#8A63F8',
              },
            ].map((stage, idx) => (
              <div
                key={idx}
                style={{
                  padding: '1.25rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  borderRadius: '10px',
                  border: '1px solid var(--glass-border)',
                  position: 'relative',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '1.5rem', fontWeight: 900, color: stage.color, opacity: 0.8 }}>
                    {stage.step}
                  </span>
                  <span
                    style={{
                      fontSize: '0.68rem',
                      color: stage.color,
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      padding: '0.15rem 0.45rem',
                      borderRadius: '4px',
                      fontWeight: 700,
                    }}
                  >
                    {stage.badge}
                  </span>
                </div>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fff', margin: '0 0 0.4rem 0' }}>
                  {stage.title}
                </h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  {stage.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
