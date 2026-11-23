import React from 'react';
import {
  GraduationCap,
  Calendar,
  Building,
  CheckCircle2,
  BookOpen
} from 'lucide-react';
import { educationList } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section
      id="education"
      style={{
        padding: '6rem 0',
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">
            <GraduationCap size={14} />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="section-title">
            Degrees &amp; <span className="gradient-text">Higher Education</span>
          </h2>
          <p className="section-subtitle">
            Formal education in Computer Applications from premier Seshadripuram institutions, emphasizing computational
            thinking, software engineering rigor, and applied intelligence.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '2rem'
          }}
        >
          {educationList.map((edu, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '2.5rem',
                borderRadius: 'var(--radius-xl)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid var(--border-subtle)',
                position: 'relative'
              }}
            >
              <div>
                {/* Top Badge Bar */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    marginBottom: '1.25rem'
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: 'rgba(59, 130, 246, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-blue)'
                    }}
                  >
                    {idx === 0 ? <GraduationCap size={24} /> : <BookOpen size={24} />}
                  </div>

                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.82rem',
                      padding: '0.3rem 0.75rem',
                      borderRadius: 'var(--radius-full)',
                      background: 'var(--bg-surface)',
                      border: '1px solid var(--border-subtle)',
                      color: 'var(--text-tertiary)'
                    }}
                  >
                    <Calendar size={13} />
                    <span>{edu.period}</span>
                  </span>
                </div>

                {/* Degree Title */}
                <h3
                  style={{
                    fontSize: '1.45rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '0.5rem',
                    lineHeight: 1.3
                  }}
                >
                  {edu.degree}
                </h3>

                {/* Institution & University */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: 'var(--accent-blue)',
                    marginBottom: '0.25rem'
                  }}
                >
                  <Building size={16} />
                  <span>{edu.institution}</span>
                </div>

                <div
                  style={{
                    fontSize: '0.82rem',
                    color: 'var(--text-tertiary)',
                    marginBottom: '1.5rem',
                    lineHeight: 1.5
                  }}
                >
                  {edu.university}
                </div>

                {/* CGPA Score Spotlight Card */}
                <div
                  style={{
                    padding: '1rem 1.25rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(59, 130, 246, 0.08)',
                    border: '1px solid var(--border-accent)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.5rem'
                  }}
                >
                  <div>
                    <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-tertiary)', textTransform: 'uppercase' }}>
                      ACADEMIC PERFORMANCE
                    </div>
                    <div style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)', marginTop: '0.1rem' }}>
                      CGPA {edu.cgpa}
                    </div>
                  </div>

                  <span
                    style={{
                      padding: '0.3rem 0.7rem',
                      borderRadius: 'var(--radius-full)',
                      background: 'rgba(16, 185, 129, 0.15)',
                      border: '1px solid rgba(16, 185, 129, 0.3)',
                      color: 'var(--accent-emerald)',
                      fontSize: '0.78rem',
                      fontWeight: 600
                    }}
                  >
                    {edu.status}
                  </span>
                </div>

                {/* Academic Highlights */}
                <div>
                  <div
                    style={{
                      fontSize: '0.8rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--text-tertiary)',
                      fontWeight: 600,
                      marginBottom: '0.75rem',
                      textTransform: 'uppercase'
                    }}
                  >
                    Program Highlights &amp; Capstones
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                    {edu.highlights.map((item, hIdx) => (
                      <li
                        key={hIdx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.6rem',
                          fontSize: '0.88rem',
                          color: 'var(--text-secondary)',
                          lineHeight: 1.55
                        }}
                      >
                        <CheckCircle2
                          size={15}
                          style={{ color: 'var(--accent-cyan)', marginTop: '3px', flexShrink: 0 }}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
