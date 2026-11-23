import React, { useState } from 'react';
import {
  Sparkles,
  Layers,
  Image as ImageIcon,
  Code2,
  Terminal,
  CheckCircle2,
  AlertTriangle,
  Maximize2,
  UploadCloud,
  Search,
  MessageSquareText,
  FileCheck,
  Columns,
  BookOpen,
  BarChart2,
  Shield
} from 'lucide-react';
import { flagshipCaseStudy } from '../data/portfolioData';
import { LightboxModal } from './LightboxModal';
import type { LightboxMedia } from './LightboxModal';

export const ResearchAICaseStudy: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'screenshots' | 'decisions' | 'localRun'>('overview');
  const [screenshotFilter, setScreenshotFilter] = useState<string>('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  const screenshotCategories = ['All', 'Dashboard', 'Ingestion', 'Summarizer', 'Comparison', 'Literature Review', 'Q&A Chatbot', 'RAG Diagnostics', 'Evaluation'];

  const filteredScreenshots = flagshipCaseStudy.screenshots.filter((s) => {
    if (screenshotFilter === 'All') return true;
    return s.category === screenshotFilter;
  });

  const allLightboxMedia: LightboxMedia[] = flagshipCaseStudy.screenshots.map((s) => ({
    url: s.path,
    title: s.title,
    caption: s.description,
    category: s.category
  }));

  const openLightboxWithIndex = (index: number) => {
    setCurrentMediaIndex(index);
    setLightboxOpen(true);
  };

  const openArchitectureLightbox = (url: string, title: string) => {
    allLightboxMedia.unshift({
      url,
      title,
      caption: 'Verified architectural diagram from MCA Final Project Report.',
      category: 'System Architecture'
    });
    setCurrentMediaIndex(0);
    setLightboxOpen(true);
  };

  return (
    <section
      id="researchai"
      style={{
        padding: '6.5rem 0',
        position: 'relative',
        background: 'radial-gradient(ellipse at 50% 0%, rgba(30, 58, 138, 0.15) 0%, transparent 60%)'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill" style={{ borderColor: 'var(--border-cyan)' }}>
            <Sparkles size={14} style={{ color: 'var(--accent-cyan)' }} />
            <span>{flagshipCaseStudy.badge}</span>
          </div>
          <h2 className="section-title">
            ResearchAI &mdash; <span className="gradient-text">Academic Literature Intelligence</span>
          </h2>
          <p className="section-subtitle">
            {flagshipCaseStudy.subtitle}
          </p>
        </div>

        {/* Flagship Case Study Container */}
        <div
          className="glass-card"
          style={{
            padding: '2.5rem',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid var(--border-accent)',
            background: 'var(--bg-card)',
            boxShadow: 'var(--shadow-lg), var(--shadow-glow-blue)'
          }}
        >
          {/* Top Metadata Bar */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1.25rem',
              paddingBottom: '1.5rem',
              borderBottom: '1px solid var(--border-subtle)',
              marginBottom: '2rem'
            }}
          >
            <div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)', fontFamily: 'var(--font-mono)' }}>
                ACADEMIC CONTEXT
              </div>
              <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                {flagshipCaseStudy.academicContext}
              </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <span
                style={{
                  padding: '0.4rem 0.85rem',
                  borderRadius: 'var(--radius-full)',
                  background: 'rgba(59, 130, 246, 0.12)',
                  border: '1px solid var(--border-accent)',
                  color: 'var(--accent-blue)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  fontWeight: 600
                }}
              >
                Role: {flagshipCaseStudy.role}
              </span>
              <span
                style={{
                  padding: '0.4rem 0.85rem',
                  borderRadius: 'var(--radius-full)',
                  background: 'rgba(16, 185, 129, 0.12)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  color: 'var(--accent-emerald)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  fontWeight: 600
                }}
              >
                Status: Completed &bull; Runs Locally
              </span>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
              marginBottom: '2rem',
              borderBottom: '1px solid var(--border-subtle)',
              paddingBottom: '0.75rem'
            }}
          >
            {[
              { id: 'overview', label: 'Overview & Features', icon: <Sparkles size={16} /> },
              { id: 'architecture', label: 'System Architecture', icon: <Layers size={16} /> },
              { id: 'screenshots', label: `Screenshots (${flagshipCaseStudy.screenshots.length})`, icon: <ImageIcon size={16} /> },
              { id: 'decisions', label: 'Design Decisions & Learnings', icon: <Code2 size={16} /> },
              { id: 'localRun', label: 'Local Run Guide', icon: <Terminal size={16} /> }
            ].map((tab) => {
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.65rem 1.25rem',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    background: isSelected ? 'rgba(59, 130, 246, 0.15)' : 'transparent',
                    color: isSelected ? '#ffffff' : 'var(--text-secondary)',
                    border: isSelected ? '1px solid var(--border-accent)' : '1px solid transparent',
                    transition: 'all var(--transition-fast)'
                  }}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* TAB 1: OVERVIEW & FEATURES */}
          {activeTab === 'overview' && (
            <div>
              {/* Problem & Solution Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: '1.5rem',
                  marginBottom: '2.5rem'
                }}
              >
                {/* Problem Box */}
                <div
                  style={{
                    padding: '1.75rem',
                    borderRadius: 'var(--radius-lg)',
                    background: 'rgba(239, 68, 68, 0.04)',
                    border: '1px solid rgba(239, 68, 68, 0.2)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
                    <AlertTriangle size={20} style={{ color: '#ef4444' }} />
                    <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)' }}>The Problem Statement</h3>
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {flagshipCaseStudy.problemStatement.map((p, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                        <span style={{ color: '#ef4444', fontWeight: 'bold' }}>&times;</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solution Box */}
                <div
                  style={{
                    padding: '1.75rem',
                    borderRadius: 'var(--radius-lg)',
                    background: 'rgba(16, 185, 129, 0.04)',
                    border: '1px solid rgba(16, 185, 129, 0.2)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
                    <CheckCircle2 size={20} style={{ color: '#10b981' }} />
                    <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)' }}>The ResearchAI Solution</h3>
                  </div>
                  <p style={{ fontSize: '0.92rem', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
                    {flagshipCaseStudy.solutionOverview}
                  </p>
                </div>
              </div>

              {/* Core Implemented Features Grid */}
              <h3 style={{ fontSize: '1.35rem', marginBottom: '1.25rem', color: 'var(--text-primary)' }}>
                Core Implemented Modules &amp; Verified Capabilities
              </h3>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '1.25rem',
                  marginBottom: '2.5rem'
                }}
              >
                {flagshipCaseStudy.features.map((feature, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '1.4rem',
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--bg-surface)',
                      border: '1px solid var(--border-subtle)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div>
                      <div
                        style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '8px',
                          background: 'rgba(59, 130, 246, 0.12)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--accent-blue)',
                          marginBottom: '0.75rem'
                        }}
                      >
                        {idx === 0 ? <UploadCloud size={18} /> :
                         idx === 1 ? <Search size={18} /> :
                         idx === 2 ? <MessageSquareText size={18} /> :
                         idx === 3 ? <FileCheck size={18} /> :
                         idx === 4 ? <Columns size={18} /> :
                         idx === 5 ? <Sparkles size={18} /> :
                         idx === 6 ? <BookOpen size={18} /> : <BarChart2 size={18} />}
                      </div>

                      <h4 style={{ fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                        {feature.title}
                      </h4>
                      <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '0.75rem' }}>
                        {feature.description}
                      </p>
                    </div>

                    <div
                      style={{
                        paddingTop: '0.65rem',
                        borderTop: '1px solid var(--border-subtle)',
                        fontSize: '0.78rem',
                        color: 'var(--text-accent)',
                        fontFamily: 'var(--font-mono)'
                      }}
                    >
                      &gt; {feature.technicalHighlight}
                    </div>
                  </div>
                ))}
              </div>

              {/* Technology Stack Categories */}
              <h3 style={{ fontSize: '1.35rem', marginBottom: '1.25rem', color: 'var(--text-primary)' }}>
                Verified Technology Stack
              </h3>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                  gap: '1rem'
                }}
              >
                {flagshipCaseStudy.techStack.map((stackGroup, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '1.25rem',
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--bg-surface)',
                      border: '1px solid var(--border-subtle)'
                    }}
                  >
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', fontFamily: 'var(--font-mono)', marginBottom: '0.6rem' }}>
                      {stackGroup.category}
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                      {stackGroup.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          style={{
                            padding: '0.3rem 0.65rem',
                            borderRadius: 'var(--radius-sm)',
                            background: 'rgba(59, 130, 246, 0.1)',
                            border: '1px solid var(--border-accent)',
                            color: 'var(--text-primary)',
                            fontSize: '0.82rem',
                            fontWeight: 600
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: SYSTEM ARCHITECTURE */}
          {activeTab === 'architecture' && (
            <div>
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.35rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                  End-to-End System Layered Architecture
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                  ResearchAI is engineered with a modular, 5-layer decoupled architecture separating presentation,
                  supervisory orchestration, specialized agent reasoning, vector/RAG processing, and ACID persistence.
                </p>
              </div>

              {/* Architecture Diagram Display */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: '1.5rem',
                  marginBottom: '2.5rem'
                }}
              >
                <div
                  className="glass-card"
                  style={{
                    padding: '1rem',
                    cursor: 'pointer',
                    position: 'relative'
                  }}
                  onClick={() => openArchitectureLightbox(flagshipCaseStudy.architectureDiagramUrl, 'Fig 4.4: System Layered Architecture Diagram')}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem', padding: '0 0.5rem' }}>
                    <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      Fig 4.4: System Layered Architecture
                    </span>
                    <Maximize2 size={16} style={{ color: 'var(--text-accent)' }} />
                  </div>
                  <div style={{ background: '#ffffff', borderRadius: 'var(--radius-md)', padding: '1rem', overflow: 'hidden' }}>
                    <img
                      src={flagshipCaseStudy.architectureDiagramUrl}
                      alt="System Layered Architecture Diagram"
                      style={{ width: '100%', height: 'auto', display: 'block' }}
                    />
                  </div>
                  <div style={{ textAlign: 'center', marginTop: '0.75rem', fontSize: '0.78rem', color: 'var(--text-tertiary)' }}>
                    Click to view full-resolution architecture diagram
                  </div>
                </div>

                <div
                  className="glass-card"
                  style={{
                    padding: '1rem',
                    cursor: 'pointer',
                    position: 'relative'
                  }}
                  onClick={() => openArchitectureLightbox(flagshipCaseStudy.useCaseDiagramUrl, 'Fig 4.6: Multi-Agent Module Routing Diagram')}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem', padding: '0 0.5rem' }}>
                    <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      Fig 4.6: Multi-Agent Module Flow
                    </span>
                    <Maximize2 size={16} style={{ color: 'var(--text-accent)' }} />
                  </div>
                  <div style={{ background: '#ffffff', borderRadius: 'var(--radius-md)', padding: '1rem', overflow: 'hidden' }}>
                    <img
                      src={flagshipCaseStudy.useCaseDiagramUrl}
                      alt="Multi-Agent Module Routing Diagram"
                      style={{ width: '100%', height: 'auto', display: 'block' }}
                    />
                  </div>
                  <div style={{ textAlign: 'center', marginTop: '0.75rem', fontSize: '0.78rem', color: 'var(--text-tertiary)' }}>
                    Click to view full-resolution agent flowchart
                  </div>
                </div>
              </div>

              {/* Layer-by-Layer Breakdown */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  {
                    layer: '1. Presentation Layer',
                    tech: 'Streamlit UI + Plotly Telemetry',
                    desc: 'User Authentication, Central Dashboard, Drag-and-drop PDF Uploader, Multi-paper comparison grid, and conversational Q&A chat canvas with source citation cards.'
                  },
                  {
                    layer: '2. Orchestration Layer',
                    tech: 'SupervisorAgent & Intent Classifier',
                    desc: 'Inspects user intent and routing scope (single paper deep dive vs multi-paper cross-corpus comparison), dispatching tasks to dedicated agents.'
                  },
                  {
                    layer: '3. Specialized Research Agent Layer',
                    tech: 'PaperAgent, ComparisonAgent, GapAgent, LiteratureAgent, InsightsAgent',
                    desc: 'Each agent is specialized with purpose-built prompt templates and attribute extractors for structured summaries, comparative matrices, and gap discovery.'
                  },
                  {
                    layer: '4. RAG & AI Pipeline Layer',
                    tech: 'PyMuPDF + SmartChunker + SentenceTransformers + ChromaDB + OpenAI GPT-4o',
                    desc: 'Extracts clean PDF text with page indexing, computes sliding window chunks, embeds vectors into ChromaDB, and performs cosine-distance retrieval.'
                  },
                  {
                    layer: '5. Persistence Layer',
                    tech: 'SQLite + SQLAlchemy ORM + Local Vector Chunks',
                    desc: 'Persists user credentials, uploaded document metadata, token analytics, and historical evaluation logs with zero external cloud lock-in.'
                  }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '1.25rem 1.5rem',
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--bg-surface)',
                      border: '1px solid var(--border-subtle)',
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'baseline',
                      gap: '1rem'
                    }}
                  >
                    <div style={{ flex: '0 0 220px' }}>
                      <strong style={{ color: 'var(--text-primary)', fontSize: '1rem' }}>{item.layer}</strong>
                      <div style={{ fontSize: '0.78rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
                        {item.tech}
                      </div>
                    </div>
                    <div style={{ flex: '1 1 300px', fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: SCREENSHOT GALLERY */}
          {activeTab === 'screenshots' && (
            <div>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  marginBottom: '1.75rem'
                }}
              >
                <div>
                  <h3 style={{ fontSize: '1.35rem', color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                    Authentic ResearchAI System Screenshots
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    Captured directly from the running local application in Bengaluru. Click any image for full-screen inspection.
                  </p>
                </div>

                {/* Filter Chips */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {screenshotCategories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setScreenshotFilter(cat)}
                      style={{
                        padding: '0.4rem 0.85rem',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        background: screenshotFilter === cat ? 'var(--accent-blue)' : 'var(--bg-surface)',
                        color: screenshotFilter === cat ? '#ffffff' : 'var(--text-secondary)',
                        border: '1px solid var(--border-subtle)',
                        transition: 'all var(--transition-fast)'
                      }}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Screenshots Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                  gap: '1.25rem'
                }}
              >
                {filteredScreenshots.map((s, idx) => {
                  const globalIndex = flagshipCaseStudy.screenshots.findIndex((item) => item.id === s.id);
                  return (
                    <div
                      key={s.id}
                      className="glass-card"
                      style={{
                        overflow: 'hidden',
                        cursor: 'pointer',
                        borderRadius: 'var(--radius-md)',
                        display: 'flex',
                        flexDirection: 'column'
                      }}
                      onClick={() => openLightboxWithIndex(globalIndex >= 0 ? globalIndex : idx)}
                    >
                      <div style={{ position: 'relative', aspectRatio: '16 / 10', background: '#050811', overflow: 'hidden' }}>
                        <img
                          src={s.path}
                          alt={s.title}
                          loading="lazy"
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transition: 'transform var(--transition-normal)'
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                        />
                        <div
                          style={{
                            position: 'absolute',
                            top: '0.5rem',
                            left: '0.5rem',
                            padding: '0.2rem 0.5rem',
                            borderRadius: 'var(--radius-sm)',
                            background: 'rgba(5, 8, 17, 0.85)',
                            color: 'var(--accent-cyan)',
                            fontSize: '0.7rem',
                            fontFamily: 'var(--font-mono)',
                            fontWeight: 600
                          }}
                        >
                          {s.category}
                        </div>
                        <div
                          style={{
                            position: 'absolute',
                            bottom: '0.5rem',
                            right: '0.5rem',
                            width: '28px',
                            height: '28px',
                            borderRadius: '50%',
                            background: 'rgba(5, 8, 17, 0.85)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#ffffff'
                          }}
                        >
                          <Maximize2 size={14} />
                        </div>
                      </div>

                      <div style={{ padding: '1rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <h4 style={{ fontSize: '0.95rem', color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                          {s.title}
                        </h4>
                        <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                          {s.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 4: DECISIONS & LEARNINGS */}
          {activeTab === 'decisions' && (
            <div>
              {/* Decisions */}
              <div style={{ marginBottom: '2.5rem' }}>
                <h3 style={{ fontSize: '1.35rem', color: 'var(--text-primary)', marginBottom: '1.25rem' }}>
                  Key Architectural Decisions
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {flagshipCaseStudy.implementationDecisions.map((d, idx) => (
                    <div
                      key={idx}
                      style={{
                        padding: '1.5rem',
                        borderRadius: 'var(--radius-md)',
                        background: 'var(--bg-surface)',
                        border: '1px solid var(--border-subtle)'
                      }}
                    >
                      <h4 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '0.6rem' }}>
                        {idx + 1}. {d.decision}
                      </h4>
                      <div style={{ marginBottom: '0.6rem' }}>
                        <span style={{ fontSize: '0.78rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                          RATIONALE:
                        </span>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                          {d.rationale}
                        </p>
                      </div>
                      <div>
                        <span style={{ fontSize: '0.78rem', color: 'var(--accent-emerald)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                          ENGINEERING IMPACT:
                        </span>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-primary)', marginTop: '0.2rem' }}>
                          {d.impact}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenges & Future Roadmap */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: '1.5rem'
                }}
              >
                {/* Challenges & Solutions */}
                <div
                  style={{
                    padding: '1.75rem',
                    borderRadius: 'var(--radius-lg)',
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border-subtle)'
                  }}
                >
                  <h4 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>
                    Challenges Overcome
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    {flagshipCaseStudy.challengesLearnings.map((c, idx) => (
                      <div key={idx}>
                        <div style={{ fontWeight: 700, fontSize: '0.92rem', color: 'var(--text-primary)', marginBottom: '0.3rem' }}>
                          {c.challenge}
                        </div>
                        <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.3rem' }}>
                          <strong style={{ color: 'var(--accent-blue)' }}>Solution: </strong>
                          {c.solution}
                        </div>
                        <div style={{ fontSize: '0.82rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
                          &gt; {c.keyLearning}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Future Roadmap */}
                <div
                  style={{
                    padding: '1.75rem',
                    borderRadius: 'var(--radius-lg)',
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border-subtle)'
                  }}
                >
                  <h4 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>
                    Future Roadmap (Verified from Project Synopsis)
                  </h4>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                    {flagshipCaseStudy.futureRoadmap.map((r, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                        <div
                          style={{
                            minWidth: '18px',
                            height: '18px',
                            borderRadius: '50%',
                            background: 'rgba(59, 130, 246, 0.15)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--accent-blue)',
                            fontSize: '0.72rem',
                            fontWeight: 700,
                            marginTop: '2px'
                          }}
                        >
                          {idx + 1}
                        </div>
                        <span style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                          {r}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: LOCAL RUN GUIDE */}
          {activeTab === 'localRun' && (
            <div>
              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1.35rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                  Local Reproduction &amp; Execution Guide
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem' }}>
                  Since ResearchAI is configured to run on local hardware with ChromaDB vector storage and secure local environment keys,
                  here are the exact reproduction commands verified against the project codebase:
                </p>
              </div>

              {/* Terminal Window */}
              <div className="terminal-window">
                <div className="terminal-header">
                  <div className="terminal-dots">
                    <span className="terminal-dot dot-red" />
                    <span className="terminal-dot dot-yellow" />
                    <span className="terminal-dot dot-green" />
                  </div>
                  <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: '#64748b' }}>
                    bash &bull; researchai-env
                  </span>
                  <span style={{ fontSize: '0.75rem', color: '#10b981', fontFamily: 'var(--font-mono)' }}>
                    Verified Local Pipeline
                  </span>
                </div>

                <div className="terminal-body">
                  {flagshipCaseStudy.localSetupGuide.map((line, idx) => (
                    <div
                      key={idx}
                      style={{
                        color: line.startsWith('#')
                          ? '#64748b'
                          : line.startsWith('streamlit')
                          ? '#38bdf8'
                          : '#cbd5e1'
                      }}
                    >
                      {line}
                    </div>
                  ))}
                </div>
              </div>

              <div
                style={{
                  marginTop: '1.5rem',
                  padding: '1.25rem',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(59, 130, 246, 0.08)',
                  border: '1px solid var(--border-accent)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}
              >
                <Shield size={20} style={{ color: 'var(--accent-blue)', flexShrink: 0 }} />
                <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', margin: 0 }}>
                  <strong>Security Note:</strong> All API keys (e.g. OpenAI GPT-4o keys) and user authentication credentials
                  are isolated inside local <code style={{ color: 'var(--accent-cyan)' }}>.env</code> files and are never committed or exposed publicly.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        media={allLightboxMedia}
        currentIndex={currentMediaIndex}
        setCurrentIndex={setCurrentMediaIndex}
      />
    </section>
  );
};
