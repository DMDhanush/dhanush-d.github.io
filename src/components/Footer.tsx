import React from 'react';
import { Terminal, ArrowUp, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-subtle)',
        padding: '4.5rem 0 2.5rem 0',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Main Footer Content */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '3rem',
            paddingBottom: '3.5rem',
            borderBottom: '1px solid var(--border-subtle)'
          }}
        >
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, var(--accent-blue) 0%, var(--accent-violet) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff'
                }}
              >
                <Terminal size={19} />
              </div>
              <span style={{ fontSize: '1.25rem', fontWeight: 800, fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>
                D.<span className="gradient-text">DHANUSH</span>
              </span>
            </div>

            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '1.25rem' }}>
              Master of Computer Applications (MCA) graduate from Seshadripuram College, specializing in Python backend engineering,
              dense vector retrieval, and generative AI systems.
            </p>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                fontSize: '0.8rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--accent-emerald)',
                padding: '0.3rem 0.65rem',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.25)'
              }}
            >
              <ShieldCheck size={14} />
              <span>Verified Credentials &amp; Codebases</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4
              style={{
                fontSize: '0.9rem',
                fontFamily: 'var(--font-mono)',
                textTransform: 'uppercase',
                color: 'var(--text-tertiary)',
                marginBottom: '1.25rem',
                letterSpacing: '0.05em'
              }}
            >
              Navigation
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem', fontSize: '0.9rem' }}>
              <a href="#hero" style={{ color: 'var(--text-secondary)' }}>Home</a>
              <a href="#about" style={{ color: 'var(--text-secondary)' }}>About Me</a>
              <a href="#skills" style={{ color: 'var(--text-secondary)' }}>Skills Matrix</a>
              <a href="#researchai" style={{ color: 'var(--accent-cyan)', fontWeight: 600 }}>ResearchAI</a>
              <a href="#projects" style={{ color: 'var(--text-secondary)' }}>Projects</a>
              <a href="#certificates" style={{ color: 'var(--text-secondary)' }}>Certificates</a>
              <a href="#achievements" style={{ color: 'var(--text-secondary)' }}>Wrestling &amp; Timeline</a>
              <a href="#education" style={{ color: 'var(--text-secondary)' }}>Education</a>
              <a href="#contact" style={{ color: 'var(--text-secondary)' }}>Contact</a>
              <a href={personalInfo.resumePdfUrl} download style={{ color: 'var(--accent-blue)', fontWeight: 600 }}>
                Resume (PDF)
              </a>
            </div>
          </div>

          {/* Contact Direct */}
          <div>
            <h4
              style={{
                fontSize: '0.9rem',
                fontFamily: 'var(--font-mono)',
                textTransform: 'uppercase',
                color: 'var(--text-tertiary)',
                marginBottom: '1.25rem',
                letterSpacing: '0.05em'
              }}
            >
              Verified Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
              <a
                href={`mailto:${personalInfo.email}`}
                style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-secondary)' }}
              >
                <Mail size={16} style={{ color: 'var(--accent-blue)' }} />
                <span>{personalInfo.email}</span>
              </a>

              <a
                href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`}
                style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-secondary)' }}
              >
                <Phone size={16} style={{ color: 'var(--accent-emerald)' }} />
                <span>{personalInfo.phone}</span>
              </a>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-secondary)' }}>
                <MapPin size={16} style={{ color: 'var(--accent-cyan)' }} />
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.25rem',
            paddingTop: '2rem'
          }}
        >
          <div style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)' }}>
            &copy; {new Date().getFullYear()} D Dhanush. Built with React, TypeScript, and modern CSS. All assets verified.
          </div>

          <button
            onClick={scrollToTop}
            className="btn-secondary btn-sm"
            style={{ gap: '0.4rem' }}
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};
