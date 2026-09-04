import React from 'react';

interface HeroContentProps {
  onViewWork: () => void;
  onDownloadCv: () => void;
}

export const HeroContent: React.FC<HeroContentProps> = ({
  onViewWork,
  onDownloadCv,
}) => {
  return (
    <main className="hero-content" id="heroContent">
      <div className="text-wrapper" id="heroTextWrapper">
        {/* Greeting with Accent Color & Staggered Fade Up */}
        <div className="greeting animate-fade-up delay-1" id="heroGreeting">
          HELLO, I'M
        </div>

        {/* Main Title in Pure White with Responsive Typography */}
        <h1 className="main-title animate-fade-up delay-2" id="heroMainTitle">
          Rajat Nimje
        </h1>

        {/* Sub Title with Accent Text Gradient Clipped to Text */}
        <h2 className="sub-title animate-fade-up delay-3" id="heroSubTitle">
          Technical Support Analyst | IT Service Desk (L1)
        </h2>

        {/* Supporting description from resume */}
        <p className="hero-description animate-fade-up delay-4" id="heroDescription">
          B.Tech Computer Engineering graduate with hands-on experience in PC hardware diagnostics, Windows OS troubleshooting, network connectivity, and customer-first technical support. Delivering structured root-cause solutions with clear, user-focused communication.
        </p>

        {/* CTA Group with Primary and Outline Buttons */}
        <div className="cta-group animate-fade-up delay-5" id="heroCtaGroup">
          <button
            type="button"
            className="btn btn-primary"
            id="btnViewMyWork"
            onClick={onViewWork}
          >
            EXPLORE SKILLS & EXPERIENCE
          </button>
          <button
            type="button"
            className="btn btn-outline"
            id="btnDownloadCv"
            onClick={onDownloadCv}
          >
            DOWNLOAD CV (PDF)
          </button>
        </div>
      </div>
    </main>
  );
};

