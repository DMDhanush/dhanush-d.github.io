import React, { useState } from 'react';
import {
  Layers,
  CheckCircle2,
  Maximize2,
  Calendar,
  Building,
  BarChart
} from 'lucide-react';
import { secondaryProjects } from '../data/portfolioData';
import { LightboxModal } from './LightboxModal';
import type { LightboxMedia } from './LightboxModal';

export const ProjectsSection: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxMedia, setLightboxMedia] = useState<LightboxMedia[]>([]);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  const openScreenshots = (project: typeof secondaryProjects[0]) => {
    if (!project.screenshots || project.screenshots.length === 0) return;

    const media: LightboxMedia[] = project.screenshots.map((s) => ({
      url: s.path,
      title: `${project.title} — ${s.title}`,
      caption: s.description,
      category: project.type
    }));

    setLightboxMedia(media);
    setCurrentMediaIndex(0);
    setLightboxOpen(true);
  };

  return (
    <section id="projects" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">
            <Layers size={14} />
            <span>Project Portfolio</span>
          </div>
          <h2 className="section-title">
            Additional Verified <span className="gradient-text">Engineering Projects</span>
          </h2>
          <p className="section-subtitle">
            Beyond ResearchAI, here are machine learning, full-stack, and computer vision systems built during my
            MCA and BCA coursework, verified through project reports and code repositories.
          </p>
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '1.75rem'
          }}
        >
          {secondaryProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderRadius: 'var(--radius-lg)'
              }}
            >
              <div>
                {/* Academic Context Badge */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '0.5rem',
                    marginBottom: '1rem'
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      padding: '0.25rem 0.65rem',
                      borderRadius: 'var(--radius-full)',
                      background: 'rgba(59, 130, 246, 0.12)',
                      border: '1px solid var(--border-accent)',
                      color: 'var(--accent-blue)',
                      fontWeight: 600
                    }}
                  >
                    {project.type}
                  </span>

                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      fontSize: '0.8rem',
                      color: 'var(--text-tertiary)',
                      fontFamily: 'var(--font-mono)'
                    }}
                  >
                    <Calendar size={13} />
                    <span>{project.academicYear}</span>
                  </span>
                </div>

                {/* Project Title */}
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '0.75rem',
                    lineHeight: 1.35
                  }}
                >
                  {project.title}
                </h3>

                {/* Institution */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.82rem',
                    color: 'var(--text-tertiary)',
                    marginBottom: '1rem'
                  }}
                >
                  <Building size={14} />
                  <span>{project.institution}</span>
                </div>

                {/* Summary */}
                <p
                  style={{
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.65,
                    marginBottom: '1.25rem'
                  }}
                >
                  {project.summary}
                </p>

                {/* Verified Benchmark Metric */}
                {project.metrics && (
                  <div
                    style={{
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      background: 'rgba(16, 185, 129, 0.08)',
                      border: '1px solid rgba(16, 185, 129, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      marginBottom: '1.25rem'
                    }}
                  >
                    <BarChart size={17} style={{ color: 'var(--accent-emerald)', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.84rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                      {project.metrics}
                    </span>
                  </div>
                )}

                {/* Key Features */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <div
                    style={{
                      fontSize: '0.78rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--text-tertiary)',
                      fontWeight: 600,
                      marginBottom: '0.5rem',
                      textTransform: 'uppercase'
                    }}
                  >
                    Implemented Features
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                    {project.keyFeatures.map((feat, idx) => (
                      <li
                        key={idx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.5rem',
                          fontSize: '0.85rem',
                          color: 'var(--text-secondary)'
                        }}
                      >
                        <CheckCircle2
                          size={14}
                          style={{ color: 'var(--accent-cyan)', marginTop: '3px', flexShrink: 0 }}
                        />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom: Tech Stack & Actions */}
              <div>
                <div
                  style={{
                    paddingTop: '1rem',
                    borderTop: '1px solid var(--border-subtle)',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.4rem',
                    marginBottom: project.screenshots ? '1rem' : '0'
                  }}
                >
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      style={{
                        padding: '0.2rem 0.55rem',
                        borderRadius: 'var(--radius-sm)',
                        background: 'var(--bg-surface)',
                        border: '1px solid var(--border-subtle)',
                        fontSize: '0.75rem',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--text-tertiary)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Screenshot Button (if screenshots available) */}
                {project.screenshots && project.screenshots.length > 0 && (
                  <button
                    onClick={() => openScreenshots(project)}
                    className="btn-secondary btn-sm"
                    style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}
                  >
                    <Maximize2 size={14} />
                    <span>View Project Screenshots ({project.screenshots.length})</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox for project screenshots */}
      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        media={lightboxMedia}
        currentIndex={currentMediaIndex}
        setCurrentIndex={setCurrentMediaIndex}
      />
    </section>
  );
};
