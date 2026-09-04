import React, { useEffect, useRef, useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroContent } from './components/HeroContent';
import { HeroFooter } from './components/HeroFooter';
import { TechConsoleSection } from './components/TechConsoleSection';
import { SkillsSection } from './components/SkillsSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { EducationSection } from './components/EducationSection';
import { ResumeSection } from './components/ResumeSection';
import { ContactSection } from './components/ContactSection';
import { FloatingBackToTop } from './components/FloatingBackToTop';
import { ParticleBackground } from './components/ParticleBackground';

export default function App() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const localVideoRef = useRef<HTMLVideoElement | null>(null);
  const [activeLink, setActiveLink] = useState('home');
  const [isLocalVideoActive, setIsLocalVideoActive] = useState(false);
  const localVideoSource = `${import.meta.env.BASE_URL}assets/Code_flickering_on_dual_monitors_202609042011.mp4`;

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = async () => {
    try {
      const { generateResumePdf } = await import('./utils/generateResumePdf');
      generateResumePdf();
    } catch (err) {
      console.error('Error generating PDF resume:', err);
    }
  };

  // Start the local layer when it begins its crossfade with the intro.
  useEffect(() => {
    const video = isLocalVideoActive ? localVideoRef.current : videoRef.current;
    if (video) {
      video.load();
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn('[Video] Autoplay prevented:', err);
        });
      }
    }
  }, [isLocalVideoActive]);

  const handleIntroTimeUpdate = () => {
    const video = videoRef.current;
    if (!isLocalVideoActive && video && video.duration && video.duration - video.currentTime <= 1.8) {
      setIsLocalVideoActive(true);
    }
  };

  // ScrollSpy: Automatically highlight the active section in Navbar as user scrolls
  useEffect(() => {
    const sections = [
      { id: 'heroSection', navId: 'home' },
      { id: 'techThemeSection', navId: 'tech' },
      { id: 'skills', navId: 'skills' },
      { id: 'projects', navId: 'projects' },
      { id: 'education', navId: 'education' },
      { id: 'resume', navId: 'resume' },
      { id: 'contact', navId: 'contact' },
    ];

    const handleScrollSpy = () => {
      const scrollY = window.scrollY;

      // Check sections in reverse order so lowest in view wins
      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = document.getElementById(sections[i].id);
        if (sec) {
          const top = sec.offsetTop - 120;
          if (scrollY >= top) {
            setActiveLink(sections[i].navId);
            return;
          }
        }
      }
      setActiveLink('home');
    };

    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh', backgroundColor: 'var(--bg-color)', overflowX: 'hidden' }}>
      {/* Interactive Mouse Hover Particle Effect Canvas */}
      <ParticleBackground />

      {/* Frosted Glass Ambient Lighting Effects */}
      <div className="background-fx" id="backgroundFx" aria-hidden="true">
        <div className="blob" id="bgBlob1" />
        <div className="blob-2" id="bgBlob2" />
        <div className="overlay" id="bgOverlay" />
      </div>

      {/* TOP STICKY FROSTED NAVBAR */}
      <Navbar
        activeLink={activeLink}
        setActiveLink={setActiveLink}
        onOpenContact={() => scrollToSection('contact')}
        onOpenCv={handleDownloadResume}
        onOpenProjects={() => scrollToSection('projects')}
        onScrollTo={scrollToSection}
      />

      {/* SECTION 1: HERO VIEWPORT */}
      <header className="hero-section" id="heroSection">
        {/* Background Video */}
        <div className="video-container" id="videoContainer" aria-hidden="true">
          <video
            ref={videoRef}
            id="heroVideo"
            className={`hero-video ${isLocalVideoActive ? 'is-hidden' : 'is-visible'}`}
            src="https://strvid.nyc3.cdn.digitaloceanspaces.com/cloudinary/portfolio_hero_bg_zuhahj.webm"
            autoPlay
            muted
            playsInline
            preload="metadata"
            onTimeUpdate={handleIntroTimeUpdate}
            onEnded={() => setIsLocalVideoActive(true)}
            onError={(event) => {
              event.currentTarget.style.display = 'none';
              setIsLocalVideoActive(true);
            }}
          />
          <video
            ref={localVideoRef}
            className={`hero-video hero-video-local ${isLocalVideoActive ? 'is-visible' : 'is-hidden'}`}
            src={localVideoSource}
            muted
            playsInline
            preload="auto"
            loop={isLocalVideoActive}
            onError={(event) => {
              event.currentTarget.style.display = 'none';
            }}
          />
          <div className="video-overlay" id="videoOverlay" />
        </div>

        {/* Hero Content */}
        <HeroContent
          onViewWork={() => scrollToSection('skills')}
          onDownloadCv={handleDownloadResume}
        />

        {/* Hero Footer Stats & Quick Navigation */}
        <HeroFooter
          onScrollClick={() => scrollToSection('techThemeSection')}
          onOpenAvailability={() => scrollToSection('contact')}
          onSelectSection={(tab) => {
            const map: Record<string, string> = {
              skills: 'skills',
              projects: 'projects',
              education: 'education',
              resume: 'resume',
              contact: 'contact',
            };
            scrollToSection(map[tab] || tab);
          }}
        />
      </header>

      {/* ALL CONTENT SECTIONS: DISPLAYED SEQUENTIALLY ONE BELOW ANOTHER */}
      <main id="singleScrollContainer" style={{ width: '100%', position: 'relative' }}>
        {/* SECTION 2: TECH THEME DIAGNOSTICS & TELEMETRY */}
        <TechConsoleSection />

        {/* SECTION 3: CORE SKILLS & L1 TOOLKIT */}
        <SkillsSection />

        {/* SECTION 4: TROUBLESHOOTING CASE STUDIES */}
        <CaseStudiesSection />

        {/* SECTION 5: EDUCATION & CERTIFICATIONS */}
        <EducationSection />

        {/* SECTION 6: RESUME & CAREER PROFILE */}
        <ResumeSection onDownloadResume={handleDownloadResume} />

        {/* SECTION 7: CONTACT & OPPORTUNITIES */}
        <ContactSection />
      </main>

      {/* GLOBAL CLEAN FOOTER */}
      <footer
        style={{
          borderTop: '1px solid var(--glass-border)',
          padding: '3rem 2rem 4rem 2rem',
          backgroundColor: 'rgba(5, 5, 8, 0.95)',
          backdropFilter: 'blur(16px)',
          position: 'relative',
          zIndex: 10,
        }}
        id="globalFooter"
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem',
          }}
        >
          <div>
            <div style={{ fontWeight: 800, color: '#fff', fontSize: '1.1rem', letterSpacing: '0.5px' }}>
              RAJAT NIMJE
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
              Technical Support Analyst | IT Service Desk (L1) • Nagpur, Maharashtra, India
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--accent-color)', marginTop: '0.35rem' }}>
              Open to Immediate Relocation & Remote Opportunities
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <button
              type="button"
              onClick={handleDownloadResume}
              style={{
                backgroundColor: 'rgba(138, 99, 248, 0.15)',
                border: '1px solid rgba(138, 99, 248, 0.4)',
                color: 'var(--accent-color)',
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                fontSize: '0.8rem',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
              }}
            >
              📄 DOWNLOAD RESUME (PDF)
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('heroSection')}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                color: '#fff',
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                fontSize: '0.8rem',
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              ↑ BACK TO TOP
            </button>
          </div>
        </div>

        <div style={{ maxWidth: '1200px', margin: '2rem auto 0 auto', borderTop: '1px solid rgba(255, 255, 255, 0.06)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', fontSize: '0.78rem', color: 'rgba(255, 255, 255, 0.4)' }}>
          <span>© 2025 Rajat Nimje. Crafted for IT Service Desk & Technical Support.</span>
          <span>Contact: +91 9049478926 • rajatnimje434@gmail.com</span>
        </div>
      </footer>

      {/* FLOAT ACTION BUTTON: Back to Top & Quick WhatsApp */}
      <FloatingBackToTop />
    </div>
  );
}
