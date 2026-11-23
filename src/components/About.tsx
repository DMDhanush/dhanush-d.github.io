import React from 'react';
import {
  GraduationCap,
  Terminal,
  Brain,
  Cloud,
  Medal,
  Languages,
  ArrowRight,
  Check
} from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">
            <Terminal size={14} />
            <span>Engineering Profile</span>
          </div>
          <h2 className="section-title">
            Passionate About Practical <span className="gradient-text">Software &amp; AI Engineering</span>
          </h2>
          <p className="section-subtitle">
            An MCA graduate combining strong computer applications fundamentals with practical hands-on implementation
            across Python, backend architectures, and retrieval-augmented intelligence.
          </p>
        </div>

        {/* Content Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2.5rem',
            alignItems: 'start'
          }}
          className="about-grid"
        >
          {/* Left Column: Narrative & Philosophy */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="glass-card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
                My Journey in Computer Applications
              </h3>
              <p style={{ marginBottom: '1rem', lineHeight: 1.75 }}>
                My interest in software engineering began during my Bachelor of Computer Applications (BCA) at
                Seshadripuram Degree Main College, where I developed a strong foundation in programming, algorithms, and
                relational databases. Rather than simply memorizing concepts, I learned best by building complete
                systems — culminating in my capstone project <strong>WELFake</strong>, a machine learning model combining
                linguistic features with CNN architectures that achieved 93% accuracy on benchmark articles.
              </p>
              <p style={{ marginBottom: '1rem', lineHeight: 1.75 }}>
                Continuing into my Master of Computer Applications (MCA) at Seshadripuram College, I focused on modern
                backend architectures, cloud computing fundamentals, and the emerging field of Generative AI.
                Recognizing how difficult it is for researchers to extract grounded insights from voluminous academic
                literature, I designed and built <strong>ResearchAI</strong> — an autonomous, multi-agent RAG system
                integrating PyMuPDF, ChromaDB, and OpenAI GPT-4o with rigorous page citations.
              </p>
              <p style={{ lineHeight: 1.75 }}>
                As an entry-level developer, my priority is straightforward: writing clean, well-tested Python code,
                designing resilient APIs, and architecting retrieval pipelines that solve real problems reliably.
              </p>
            </div>

            {/* Wrestling & Athletic Discipline Card */}
            <div
              className="glass-card"
              style={{
                padding: '2rem',
                borderLeft: '4px solid var(--accent-blue)',
                background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.12) 0%, var(--bg-card) 100%)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    background: 'rgba(59, 130, 246, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-blue)'
                  }}
                >
                  <Medal size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>
                    Athletic Foundation: University-Level Wrestling
                  </h4>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', fontFamily: 'var(--font-mono)' }}>
                    Discipline &bull; Resilience &bull; Consistency
                  </span>
                </div>
              </div>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                Competing in wrestling at the university level shaped how I approach every technical challenge.
                The sport instills daily discipline, the stamina to grind through setbacks, and the composure to stay
                focused under intense pressure. Whether debugging an intricate vector distance issue or optimizing an
                ingestion pipeline, I bring that same relentless work ethic to software engineering.
              </p>
            </div>
          </div>

          {/* Right Column: Key Highlights & Verified Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Quick Facts Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '1rem'
              }}
            >
              <div className="glass-card" style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
                  <GraduationCap size={20} style={{ color: 'var(--accent-blue)' }} />
                  <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-tertiary)' }}>EDUCATION</span>
                </div>
                <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  MCA Graduate
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)', fontWeight: 600, marginTop: '0.2rem' }}>
                  CGPA: 7.37 / 10.00
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.4rem' }}>
                  Seshadripuram College (2025–2026)
                </div>
              </div>

              <div className="glass-card" style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
                  <Brain size={20} style={{ color: 'var(--accent-violet)' }} />
                  <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-tertiary)' }}>AI DOMAIN</span>
                </div>
                <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  RAG &amp; Vector DBs
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--accent-emerald)', fontWeight: 600, marginTop: '0.2rem' }}>
                  ChromaDB &amp; Dense Vectors
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.4rem' }}>
                  Multi-Agent Supervisor Routing
                </div>
              </div>

              <div className="glass-card" style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
                  <Cloud size={20} style={{ color: 'var(--accent-cyan)' }} />
                  <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-tertiary)' }}>CLOUD &amp; DEV</span>
                </div>
                <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  NPTEL &amp; AWS Certified
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--accent-blue)', fontWeight: 600, marginTop: '0.2rem' }}>
                  IIT Kharagpur NPTEL
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.4rem' }}>
                  Hands-on AWS IT Professional
                </div>
              </div>

              <div className="glass-card" style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
                  <Languages size={20} style={{ color: 'var(--accent-amber)' }} />
                  <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-tertiary)' }}>LANGUAGES</span>
                </div>
                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  Trilingual Communication
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '0.3rem' }}>
                  English (Professional) &bull; Tamil (Fluent) &bull; Kannada (Fluent)
                </div>
              </div>
            </div>

            {/* What I Bring to a Team Checklist */}
            <div className="glass-card" style={{ padding: '2rem' }}>
              <h4 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', marginBottom: '1.25rem' }}>
                Core Capabilities I Bring to a Team
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {[
                  'Hands-on experience architecting full RAG pipelines from raw PDF parsing to semantic chunking and grounded LLM outputs.',
                  'Solid backend development in Python with FastAPI, RESTful design patterns, and Pydantic schema validation.',
                  'Strong relational database foundations in SQL, schema design, and SQLAlchemy ORM operations.',
                  'Clear understanding of cloud architectures, virtualization, and distributed systems from NPTEL & AWS certifications.',
                  'Committed work ethic and collaborative mindset proven through team hackathons and academic capstone delivery.'
                ].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <div
                      style={{
                        minWidth: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        background: 'rgba(16, 185, 129, 0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--accent-emerald)',
                        marginTop: '2px'
                      }}
                    >
                      <Check size={13} />
                    </div>
                    <span style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: '1.75rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)' }}>
                <a href="#skills" className="btn-secondary btn-sm" style={{ width: '100%', justifyContent: 'center' }}>
                  <span>View My Technical Skill Matrix</span>
                  <ArrowRight size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .about-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
      `}</style>
    </section>
  );
};
