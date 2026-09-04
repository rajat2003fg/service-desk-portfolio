import { jsPDF } from 'jspdf';

export function generateResumePdf(): void {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 14;
  const contentWidth = pageWidth - margin * 2;
  let y = 16;

  // Helper for page break
  const checkPageBreak = (neededHeight: number) => {
    if (y + neededHeight > pageHeight - 16) {
      doc.addPage();
      y = 16;
      // Header for subsequent page
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      doc.setTextColor(130, 130, 140);
      doc.text('Rajat Nimje — L1 Technical Support Analyst & IT Service Desk | Resume', margin, y - 6);
      doc.setDrawColor(220, 220, 225);
      doc.setLineWidth(0.2);
      doc.line(margin, y - 4, pageWidth - margin, y - 4);
    }
  };

  // Section Header Helper
  const drawSectionHeader = (title: string) => {
    checkPageBreak(12);
    y += 2;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10.5);
    doc.setTextColor(30, 41, 59); // Slate-800
    doc.text(title.toUpperCase(), margin, y);
    
    y += 1.8;
    doc.setDrawColor(99, 102, 241); // Indigo accent
    doc.setLineWidth(0.6);
    doc.line(margin, y, margin + 28, y);
    doc.setDrawColor(226, 232, 240); // Subtle slate line for the rest
    doc.setLineWidth(0.2);
    doc.line(margin + 28, y, pageWidth - margin, y);
    y += 4.5;
  };

  // 1. TOP HEADER
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(21);
  doc.setTextColor(15, 23, 42); // Slate-900
  doc.text('RAJAT NIMJE', margin, y);

  // Target Title Badge
  y += 5.5;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(79, 70, 229); // Indigo-600
  doc.text('L1 Technical Support Analyst | IT Service Desk Engineer', margin, y);

  // Contact Info Strip
  y += 4.5;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(71, 85, 105);
  const contactLine = 'Nagpur, Maharashtra, India  |  +91 9049478926  |  rajatnimje434@gmail.com';
  doc.text(contactLine, margin, y);

  y += 3.8;
  const linkLine = 'LinkedIn: linkedin.com/in/connect-with-rajat-nimje  |  GitHub: github.com/rajat2003fg';
  doc.text(linkLine, margin, y);

  y += 3;
  doc.setDrawColor(203, 213, 225);
  doc.setLineWidth(0.3);
  doc.line(margin, y, pageWidth - margin, y);
  y += 4;

  // 2. PROFESSIONAL SUMMARY
  drawSectionHeader('Professional Summary');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.8);
  doc.setTextColor(51, 65, 85);
  const summaryText =
    'B.Tech Computer Engineering graduate (2025) with extensive hands-on expertise in custom desktop PC assembly, motherboard POST diagnostics, Windows OS kernel repairs, and local network troubleshooting. Proven ability to systematically isolate root causes using tools like MemTest86, SFC/DISM, and packet loss diagnostics. Experienced in writing SQL queries to audit customer ticket datasets and logs. Dedicated to patient, empathetic user communication and maintaining high First-Contact Resolution (FCR) rates.';
  const summaryLines = doc.splitTextToSize(summaryText, contentWidth);
  doc.text(summaryLines, margin, y);
  y += summaryLines.length * 4.2 + 2;

  // 3. CORE TECHNICAL SKILLS
  drawSectionHeader('Core Technical Skills');
  
  const skillCategories = [
    {
      domain: 'PC Hardware & Assembly:',
      details: 'Custom Desktop PC Assembly, POST Diagnostics, Motherboard Beep Codes, RAM MemTest86 testing, Thermal paste application & Cooler mounting, Storage Health & Bad Sector SMART checks, PSU rail testing.',
    },
    {
      domain: 'Windows OS & System Recovery:',
      details: 'Windows 10 & 11 Deployment & Troubleshooting, Rufus bootable USBs, Driver Management (DDU), System Integrity Repairs (SFC /scannow, DISM), BSOD minidump triage, Safe Mode & Recovery Console, Malware remediation.',
    },
    {
      domain: 'Networking & Connectivity:',
      details: 'Wi-Fi router setup, DHCP pool & static IP allocation, DNS resolver configuration (1.1.1.1/8.8.8.8), Ping -t & tracert route hop triage, Packet loss isolation, Cat6 Ethernet cabling, SMB file & printer sharing.',
    },
    {
      domain: 'Data, Scripting & Tools:',
      details: 'SQL Queries & Joins (HackerRank Certified), Python log parsing scripts, Microsoft Excel pivot tables & VLOOKUP, Command Prompt, PowerShell, Git & GitHub.',
    },
  ];

  skillCategories.forEach((cat) => {
    checkPageBreak(12);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.8);
    doc.setTextColor(30, 41, 59);
    doc.text(`• ${cat.domain} `, margin, y);
    const domainWidth = doc.getTextWidth(`• ${cat.domain} `);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(71, 85, 105);
    const detailsLines = doc.splitTextToSize(cat.details, contentWidth - domainWidth);
    doc.text(detailsLines[0], margin + domainWidth, y);
    
    if (detailsLines.length > 1) {
      const remainingLines = detailsLines.slice(1);
      doc.text(remainingLines, margin + 4, y + 3.8);
      y += 3.8 * detailsLines.length + 1.2;
    } else {
      y += 4.5;
    }
  });

  // 4. HANDS-ON TROUBLESHOOTING CASE STUDIES (INCIDENT LOGS)
  y += 1;
  drawSectionHeader('Practical Troubleshooting Incident Experience');

  const cases = [
    {
      code: 'INC-01',
      title: 'End-to-End Custom PC Building & Zero-Failure POST Diagnostics',
      context: 'Assembled high-performance desktop workstation rigs from bare components with zero POST boot failures.',
      actions: 'Mounted Noctua air cooler with controlled thermal paste spread; installed dual-channel DDR4 memory in motherboard slots 2 & 4; wired modular 24-pin ATX, 8-pin EPS 12V, and PCIe power rails; created UEFI Windows 11 installation media via Rufus (GPT/UEFI non-CSM). Verified 100% stability under 4 hours of AIDA64 stress testing (idle 34°C).',
    },
    {
      code: 'INC-02',
      title: 'Hardware Failure Isolation & Boot Loop Recovery',
      context: 'Resolved unbootable user workstation suffering continuous reboot cycles and repetitive chassis beep codes.',
      actions: 'Cleared motherboard CMOS via CR2032 battery reset and JBAT1 jumper; performed bare-metal breadboard isolation outside chassis; identified memory corruption via MemTest86 (surfaced 14,000+ errors on stick #2); replaced with matched dual-channel RAM kit and updated BIOS microcode.',
    },
    {
      code: 'INC-03',
      title: 'Hostel & Home Wi-Fi Network Optimization',
      context: 'Eliminated severe evening latency (>600ms), DHCP pool exhaustion, and intermittent connectivity drops.',
      actions: 'Reconfigured router DHCP pool range (192.168.1.10 – 192.168.1.240) and shortened transient leases to 4 hours; used Wi-Fi Analyzer to shift 2.4GHz RF from congested channel 6 to clean channel 11; assigned Cloudflare (1.1.1.1) and Google (8.8.8.8) DNS resolvers. Stabilized ping to 6ms.',
    },
    {
      code: 'INC-04',
      title: 'Windows OS Corruption & Malware Remediation Without Data Loss',
      context: 'Treated machine afflicted with recurring "Critical Process Died" BSODs and browser adware hijacks.',
      actions: 'Booted into Windows Safe Mode with Networking; ran DISM /Online /Cleanup-Image /RestoreHealth against Windows Update binaries; executed SFC /scannow replacing 11 corrupted kernel files; performed multi-stage malware and adware extraction while keeping user files intact.',
    },
    {
      code: 'INC-05',
      title: 'Support Data Validation & Query Automation',
      context: 'Streamlined reconciliation of high-volume customer support tickets against central database records.',
      actions: 'Authored multi-table SQL queries utilizing INNER/LEFT JOINs and GROUP BY aggregations to cross-reference ticket IDs; created Python CSV parser to group recurring crash error signatures, reducing manual review time by 65%.',
    },
  ];

  cases.forEach((cs) => {
    checkPageBreak(18);
    // Incident Header
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.8);
    doc.setTextColor(30, 41, 59);
    doc.text(`[${cs.code}] ${cs.title}`, margin, y);
    y += 4;

    doc.setFont('helvetica', 'italic');
    doc.setFontSize(8.2);
    doc.setTextColor(100, 116, 139);
    const contextLines = doc.splitTextToSize(`Problem: ${cs.context}`, contentWidth - 4);
    doc.text(contextLines, margin + 2, y);
    y += contextLines.length * 3.6;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.2);
    doc.setTextColor(51, 65, 85);
    const actionLines = doc.splitTextToSize(`Resolution: ${cs.actions}`, contentWidth - 4);
    doc.text(actionLines, margin + 2, y);
    y += actionLines.length * 3.6 + 2;
  });

  // 5. EDUCATION & ACADEMICS
  y += 1;
  drawSectionHeader('Education & Academic Background');

  const education = [
    {
      degree: 'B.Tech in Computer Engineering',
      institution: 'Smt. Radhikatai Pandav College of Engineering, Nagpur',
      period: '2021 – 2025',
      details: 'Relevant Coursework: Operating Systems Architecture, Computer Networks (TCP/IP), Database Management Systems (DBMS), Computer Organization & System Assembly.',
    },
    {
      degree: 'Higher Secondary Certificate (Class XII - Science)',
      institution: 'Shri Ramswami Junior College, Nagpur',
      period: '2020 – 2021',
      details: 'Focus: Advanced Mathematics, Physics, Electronics fundamentals, and analytical problem-solving.',
    },
  ];

  education.forEach((edu) => {
    checkPageBreak(13);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.8);
    doc.setTextColor(30, 41, 59);
    doc.text(edu.degree, margin, y);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.2);
    doc.setTextColor(79, 70, 229);
    doc.text(edu.period, pageWidth - margin - doc.getTextWidth(edu.period), y);

    y += 3.8;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.2);
    doc.setTextColor(100, 116, 139);
    doc.text(edu.institution, margin, y);

    y += 3.6;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(71, 85, 105);
    const eduDetailLines = doc.splitTextToSize(edu.details, contentWidth);
    doc.text(eduDetailLines, margin, y);
    y += eduDetailLines.length * 3.6 + 1.5;
  });

  // 6. CERTIFICATIONS
  y += 1;
  drawSectionHeader('Industry Certifications');

  const certs = [
    {
      title: 'SQL (Basic & Intermediate) Certified',
      issuer: 'HackerRank Verified Credential (2024)',
      details: 'Mastery in multi-table queries, complex joins, subqueries, group aggregations, and data integrity.',
    },
    {
      title: 'Cloud Computing Certification',
      issuer: 'NPTEL & IIT Kharagpur, Govt. of India (2024)',
      details: 'Formal training in cloud architectures, virtual machines, hypervisors, and distributed systems.',
    },
  ];

  certs.forEach((cert) => {
    checkPageBreak(11);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(30, 41, 59);
    doc.text(`• ${cert.title} — `, margin, y);
    const titleWidth = doc.getTextWidth(`• ${cert.title} — `);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(79, 70, 229);
    doc.text(cert.issuer, margin + titleWidth, y);

    y += 3.6;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(71, 85, 105);
    doc.text(cert.details, margin + 4, y);
    y += 4.5;
  });

  // 7. KEY RECRUITER LOGISTICS
  y += 1;
  drawSectionHeader('Hiring Logistics & Candidate Specifications');
  checkPageBreak(12);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.2);
  doc.setTextColor(51, 65, 85);

  const logistics = [
    ['Notice Period:', 'Immediate Joiner (0 Days Notice)', 'Shift Flexibility:', 'Available for 24/7 Rotational Shifts'],
    ['Current Location:', 'Nagpur, Maharashtra (Relocation Ready)', 'Languages:', 'English (Fluent), Hindi (Fluent), Marathi (Native)'],
  ];

  logistics.forEach((row) => {
    doc.setFont('helvetica', 'bold');
    doc.text(row[0], margin, y);
    doc.setFont('helvetica', 'normal');
    doc.text(row[1], margin + 28, y);

    doc.setFont('helvetica', 'bold');
    doc.text(row[2], margin + 95, y);
    doc.setFont('helvetica', 'normal');
    doc.text(row[3], margin + 125, y);
    y += 4;
  });

  // Add Page Numbers at the Bottom of Every Page
  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(148, 163, 184); // Slate-400
    doc.setDrawColor(226, 232, 240);
    doc.setLineWidth(0.2);
    doc.line(margin, pageHeight - 10, pageWidth - margin, pageHeight - 10);
    doc.text('Rajat Nimje — L1 Technical Support Analyst & IT Service Desk Resume', margin, pageHeight - 6.5);
    const pageNumStr = `Page ${i} of ${totalPages}`;
    doc.text(pageNumStr, pageWidth - margin - doc.getTextWidth(pageNumStr), pageHeight - 6.5);
  }

  // Save the PDF
  doc.save('Rajat_Nimje_L1_Technical_Support_Resume.pdf');
}
