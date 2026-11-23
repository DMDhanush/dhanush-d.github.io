import React from 'react';
import {
  Medal,
  Activity,
  Shield,
  Target,
  Clock
} from 'lucide-react';
import { wrestlingAchievement, careerTimeline } from '../data/portfolioData';

export const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">
            <Medal size={14} />
            <span>Athletics &amp; Progression</span>
          </div>
          <h2 className="section-title">
            Achievements &amp; <span className="gradient-text">Growth Timeline</span>
          </h2>
          <p className="section-subtitle">
            How competitive university wrestling built the discipline, resilience, and stamina that drive my daily
            software engineering practices, alongside my verified technical progression.
          </p>
        </div>

        {/* Top Spotlight: University-Level Wrestling Spotlight */}
        <div
          className="glass-card"
          style={{
            padding: '2.5rem',
            borderRadius: 'var(--radius-xl)',
            marginBottom: '4rem',
            border: '1px solid var(--border-accent)',
            background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.12) 0%, var(--bg-card) 100%)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Decorative Corner Glow */}
          <div
            style={{
              position: 'absolute',
              top: '-80px',
              right: '-80px',
              width: '260px',
              height: '260px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)',
              pointerEvents: 'none'
            }}
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '2.5rem',
              alignItems: 'center'
            }}
            className="wrestling-grid"
          >
            {/* Left: Narrative */}
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.35rem 0.85rem',
                  borderRadius: 'var(--radius-full)',
                  background: 'rgba(59, 130, 246, 0.15)',
                  border: '1px solid var(--border-accent)',
                  color: 'var(--accent-blue)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  marginBottom: '1rem'
                }}
              >
                <Activity size={14} />
                <span>Competitive Athletics</span>
              </div>

              <h3
                style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                  marginBottom: '0.5rem'
                }}
              >
                {wrestlingAchievement.title}
              </h3>

              <div
                style={{
                  fontSize: '0.95rem',
                  color: 'var(--accent-cyan)',
                  fontWeight: 600,
                  marginBottom: '1.25rem'
                }}
              >
                {wrestlingAchievement.subtitle}
              </div>

              <p
                style={{
                  fontSize: '0.95rem',
                  lineHeight: 1.75,
                  color: 'var(--text-secondary)',
                  marginBottom: '1.5rem'
                }}
              >
                {wrestlingAchievement.narrative}
              </p>
            </div>

            {/* Right: Engineering Parallels Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {wrestlingAchievement.engineeringParallels.map((parallel, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '1.25rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem'
                  }}
                >
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      background: 'rgba(59, 130, 246, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-blue)',
                      flexShrink: 0,
                      marginTop: '2px'
                    }}
                  >
                    {idx === 0 ? <Clock size={18} /> : idx === 1 ? <Shield size={18} /> : <Target size={18} />}
                  </div>

                  <div>
                    <h4 style={{ fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '0.3rem' }}>
                      {parallel.pillar}
                    </h4>
                    <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      {parallel.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Academic & Professional Progression Timeline */}
        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h3 style={{ fontSize: '1.6rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
              Chronological Development &amp; Milestones
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Verified timeline tracking my progression through computer applications degrees, certifications, and project deliveries.
            </p>
          </div>

          <div style={{ position: 'relative', paddingLeft: '2rem' }}>
            {/* Timeline Vertical Track */}
            <div
              style={{
                position: 'absolute',
                left: '7px',
                top: '10px',
                bottom: '10px',
                width: '2px',
                background: 'linear-gradient(180deg, var(--accent-blue) 0%, var(--accent-violet) 50%, var(--accent-cyan) 100%)'
              }}
            />

            {/* Timeline Events */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {careerTimeline.map((item, idx) => (
                <div key={idx} style={{ position: 'relative' }}>
                  {/* Timeline Dot */}
                  <div
                    style={{
                      position: 'absolute',
                      left: '-2rem',
                      top: '4px',
                      width: '16px',
                      height: '16px',
                      borderRadius: '50%',
                      background: 'var(--bg-primary)',
                      border: '3px solid var(--accent-blue)',
                      boxShadow: '0 0 10px var(--accent-blue)'
                    }}
                  />

                  {/* Timeline Card */}
                  <div
                    className="glass-card"
                    style={{
                      padding: '1.5rem',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-subtle)'
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '0.5rem',
                        marginBottom: '0.4rem'
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.85rem',
                          color: 'var(--accent-cyan)',
                          fontWeight: 700
                        }}
                      >
                        {item.year}
                      </span>
                      <span
                        style={{
                          fontSize: '0.72rem',
                          fontFamily: 'var(--font-mono)',
                          padding: '0.2rem 0.6rem',
                          borderRadius: 'var(--radius-full)',
                          background: 'rgba(59, 130, 246, 0.1)',
                          border: '1px solid var(--border-accent)',
                          color: 'var(--text-tertiary)'
                        }}
                      >
                        {item.tag}
                      </span>
                    </div>

                    <h4 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                      {item.title}
                    </h4>

                    <div style={{ fontSize: '0.84rem', color: 'var(--accent-blue)', fontWeight: 600, marginBottom: '0.6rem' }}>
                      {item.organization}
                    </div>

                    <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .wrestling-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
      `}</style>
    </section>
  );
};
