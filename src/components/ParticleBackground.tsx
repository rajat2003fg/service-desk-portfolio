import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  baseAlpha: number;
  alpha: number;
}

export const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates and hover state
    const mouse = {
      x: -2000,
      y: -2000,
      radius: 190, // Connection reach around cursor
      isHovering: false,
    };

    // Color palette aligned with theme: Vibrant Purple, Neon Green, Soft Violet, Cyan
    const colors = ['#8A63F8', '#A78BFA', '#5C43FA', '#00FF88', '#38BDF8'];

    // Optimal particle count based on screen size
    const particleCount = width < 768 ? 50 : 115;
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const radius = Math.random() * 2.2 + 1.2;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius,
        color: colors[Math.floor(Math.random() * colors.length)],
        baseAlpha: Math.random() * 0.35 + 0.3,
        alpha: Math.random() * 0.35 + 0.3,
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.isHovering = true;
    };

    const handleMouseLeave = () => {
      mouse.x = -2000;
      mouse.y = -2000;
      mouse.isHovering = false;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
        mouse.isHovering = true;
      }
    };

    const handleTouchEnd = () => {
      mouse.x = -2000;
      mouse.y = -2000;
      mouse.isHovering = false;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    window.addEventListener('resize', handleResize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw faint mouse aura if hovering
      if (mouse.isHovering && mouse.x > 0 && mouse.y > 0) {
        const grad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, mouse.radius);
        grad.addColorStop(0, 'rgba(138, 99, 248, 0.12)');
        grad.addColorStop(0.5, 'rgba(138, 99, 248, 0.04)');
        grad.addColorStop(1, 'rgba(138, 99, 248, 0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, mouse.radius, 0, Math.PI * 2);
        ctx.fill();

        // Small focal cursor dot
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = '#8A63F8';
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#8A63F8';
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Track particles within mouse range for web connecting
      const mouseConnectedIndices: number[] = [];

      // Update positions and handle mouse interaction
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move particle
        p.x += p.vx;
        p.y += p.vy;

        // Cap maximum velocity to prevent bunching or clustering on one side
        const currentSpeed = Math.hypot(p.vx, p.vy);
        if (currentSpeed > 2.2) {
          p.vx = (p.vx / currentSpeed) * 2.2;
          p.vy = (p.vy / currentSpeed) * 2.2;
        }

        // Apply slight damping to prevent runaway speeds
        p.vx *= 0.98;
        p.vy *= 0.98;

        // Keep natural ambient drift so particles stay evenly distributed across screen
        if (Math.abs(p.vx) < 0.25) p.vx += (Math.random() - 0.5) * 0.12;
        if (Math.abs(p.vy) < 0.25) p.vy += (Math.random() - 0.5) * 0.12;

        // Wrap boundaries
        if (p.x < -15) p.x = width + 15;
        else if (p.x > width + 15) p.x = -15;
        if (p.y < -15) p.y = height + 15;
        else if (p.y > height + 15) p.y = -15;

        // Mouse hover interaction: connect with web lines WITHOUT pulling/merging particles together
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius && mouse.isHovering) {
          mouseConnectedIndices.push(i);

          // If too close to cursor, gently push outward so particle doesn't collide with mouse pointer
          if (dist < 28) {
            const pushAngle = Math.atan2(p.y - mouse.y, p.x - mouse.x);
            p.vx += Math.cos(pushAngle) * 0.15;
            p.vy += Math.sin(pushAngle) * 0.15;
          }

          // Increase particle brightness when near cursor
          p.alpha = Math.min(1, p.baseAlpha + (1 - dist / mouse.radius) * 0.65);

          // DRAW DIRECT CONNECTING LINE TO MOUSE
          const mouseLineAlpha = (1 - dist / mouse.radius) * 0.65;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(138, 99, 248, ${mouseLineAlpha})`;
          ctx.lineWidth = 1.2 * (1 - dist / mouse.radius);
          ctx.stroke();
        } else {
          // Revert to base alpha smoothly
          p.alpha += (p.baseAlpha - p.alpha) * 0.05;
        }

        // Draw particle dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        if (dist < mouse.radius && mouse.isHovering) {
          ctx.shadowBlur = 14;
          ctx.shadowColor = p.color;
        } else {
          ctx.shadowBlur = 4;
          ctx.shadowColor = p.color;
        }
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;

        // Regular ambient particle-to-particle connections & anti-merging separation
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const distBetween = Math.hypot(p.x - p2.x, p.y - p2.y);

          // Soft repulsion so particles never merge or overlap
          if (distBetween < 22 && distBetween > 0.01) {
            const sepAngle = Math.atan2(p.y - p2.y, p.x - p2.x);
            const sepForce = (22 - distBetween) * 0.012;
            p.vx += Math.cos(sepAngle) * sepForce;
            p.vy += Math.sin(sepAngle) * sepForce;
            p2.vx -= Math.cos(sepAngle) * sepForce;
            p2.vy -= Math.sin(sepAngle) * sepForce;
          }

          const maxDist = 115;

          if (distBetween < maxDist) {
            const lineAlpha = (1 - distBetween / maxDist) * 0.16;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(167, 139, 250, ${lineAlpha})`;
            ctx.lineWidth = 0.55;
            ctx.stroke();
          }
        }
      }

      // ENHANCED HOVER WEB: Draw brighter connective lattice between particles that are near the mouse
      for (let m1 = 0; m1 < mouseConnectedIndices.length; m1++) {
        for (let m2 = m1 + 1; m2 < mouseConnectedIndices.length; m2++) {
          const p1 = particles[mouseConnectedIndices[m1]];
          const p2 = particles[mouseConnectedIndices[m2]];
          const distBetween = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          const maxWebDist = 145;

          if (distBetween < maxWebDist) {
            const webAlpha = (1 - distBetween / maxWebDist) * 0.45;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 255, 136, ${webAlpha * 0.6 + 0.1})`;
            ctx.lineWidth = 0.85;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="interactiveParticleCanvas"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        opacity: 0.45,
        zIndex: 2,
      }}
      aria-hidden="true"
    />
  );
};
