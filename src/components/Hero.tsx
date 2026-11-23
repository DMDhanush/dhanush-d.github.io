import React, { useEffect, useRef } from 'react';
import { ArrowRight, Download, Mail, Sparkles, MapPin, CheckCircle2, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Neural network particle canvas effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle nodes
    const particleCount = Math.min(Math.floor(window.innerWidth / 18), 70);
    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
    }[] = [];

    const colors = ['#3b82f6', '#8b5cf6', '#06b6d4', '#60a5fa'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 2 + 1.2,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connection lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            const alpha = (1 - dist / 130) * 0.18;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw & update particles
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '7.5rem',
        paddingBottom: '5rem',
        overflow: 'hidden'
      }}
    >
      {/* Background Neural Canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          opacity: 0.65,
          zIndex: 1
        }}
      />

      {/* Grid Texture Overlay */}
      <div className="grid-background" style={{ zIndex: 1 }} />

      {/* Ambient Radial Glows */}
      <div
        className="ambient-glow"
        style={{
          top: '15%',
          left: '10%',
          width: '450px',
          height: '450px',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.22) 0%, transparent 70%)'
        }}
      />
      <div
        className="ambient-glow"
        style={{
          bottom: '10%',
          right: '10%',
          width: '480px',
          height: '480px',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 70%)'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3.5rem',
            alignItems: 'center'
          }}
          className="hero-grid"
        >
          {/* Left Column: Headline & Value Prop */}
          <div>
            {/* Availability Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.45rem 1rem',
                borderRadius: 'var(--radius-full)',
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-accent)',
                marginBottom: '1.5rem',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#10b981',
                  boxShadow: '0 0 10px #10b981'
                }}
              />
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                {personalInfo.availability}
              </span>
            </div>

            {/* Editorial Name Badge */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.9rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--text-tertiary)',
                  fontWeight: 600
                }}
              >
                Personal Portfolio // 2026
              </span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5.5vw, 4.2rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                marginBottom: '1.5rem'
              }}
            >
              Building Intelligent Applications with{' '}
              <span className="gradient-text">Python &amp; AI</span>.
            </h1>

            {/* Supporting Copy */}
            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                marginBottom: '2rem',
                maxWidth: '620px'
              }}
            >
              I&apos;m <strong style={{ color: 'var(--text-primary)' }}>D Dhanush</strong>, an MCA graduate passionate
              about Python development, backend engineering, and Generative AI applications. Architect of ResearchAI,
              an autonomous literature intelligence platform.
            </p>

            {/* Primary Action Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                alignItems: 'center',
                marginBottom: '2.5rem'
              }}
            >
              <a href="#researchai" className="btn-primary" style={{ padding: '0.9rem 1.8rem' }}>
                <Sparkles size={18} />
                <span>Explore ResearchAI</span>
                <ArrowRight size={16} />
              </a>

              <a
                href={personalInfo.resumePdfUrl}
                download="D_Dhanush_Resume.pdf"
                className="btn-secondary"
                style={{ padding: '0.9rem 1.8rem' }}
              >
                <Download size={18} />
                <span>Download ATS Resume</span>
              </a>

              <a href="#contact" className="btn-secondary" style={{ padding: '0.9rem 1.5rem' }}>
                <Mail size={18} />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Verified Credentials Quick Pill Bar */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1.25rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid var(--border-subtle)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 size={16} style={{ color: 'var(--accent-cyan)' }} />
                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  MCA: <strong style={{ color: 'var(--text-primary)' }}>CGPA 7.37</strong>
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 size={16} style={{ color: 'var(--accent-cyan)' }} />
                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  BCA: <strong style={{ color: 'var(--text-primary)' }}>CGPA 7.00</strong>
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 size={16} style={{ color: 'var(--accent-cyan)' }} />
                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  <strong style={{ color: 'var(--text-primary)' }}>5</strong> Verified Certifications
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MapPin size={16} style={{ color: 'var(--accent-blue)' }} />
                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Bengaluru, Karnataka</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Portrait Composition */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '430px'
              }}
            >
              {/* Outer Glowing Border Ring */}
              <div
                style={{
                  position: 'relative',
                  borderRadius: 'var(--radius-xl)',
                  padding: '3px',
                  background: 'linear-gradient(135deg, var(--accent-blue) 0%, var(--accent-violet) 50%, var(--accent-cyan) 100%)',
                  boxShadow: 'var(--shadow-lg), var(--shadow-glow-blue)'
                }}
              >
                <div
                  style={{
                    borderRadius: 'calc(var(--radius-xl) - 3px)',
                    overflow: 'hidden',
                    background: 'var(--bg-secondary)',
                    aspectRatio: '4 / 5',
                    position: 'relative'
                  }}
                >
                  <img
                    src={personalInfo.profilePhoto}
                    alt="D Dhanush - Python Developer & AI Engineer"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      filter: 'contrast(1.05) brightness(1.02)'
                    }}
                  />
                  {/* Subtle Gradient Fade at Bottom */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, transparent 65%, rgba(7, 11, 20, 0.85) 100%)',
                      pointerEvents: 'none'
                    }}
                  />
                </div>
              </div>

              {/* Floating Badge 1: Backend & AI */}
              <div
                className="glass-card animate-float"
                style={{
                  position: 'absolute',
                  top: '-15px',
                  right: '-15px',
                  padding: '0.65rem 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-accent)',
                  background: 'var(--bg-card)'
                }}
              >
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: 'rgba(59, 130, 246, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-blue)'
                  }}
                >
                  <Terminal size={17} />
                </div>
                <div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)', fontWeight: 600 }}>CORE FOCUS</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    FastAPI &amp; Python
                  </div>
                </div>
              </div>

              {/* Floating Badge 2: GenAI & RAG */}
              <div
                className="glass-card animate-float"
                style={{
                  position: 'absolute',
                  bottom: '25px',
                  left: '-25px',
                  padding: '0.65rem 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-cyan)',
                  background: 'var(--bg-card)',
                  animationDelay: '-2.5s'
                }}
              >
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: 'rgba(6, 182, 212, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-cyan)'
                  }}
                >
                  <Sparkles size={17} />
                </div>
                <div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)', fontWeight: 600 }}>RAG ARCHITECTURE</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    ChromaDB &amp; Dense Vectors
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
      `}</style>
    </section>
  );
};
