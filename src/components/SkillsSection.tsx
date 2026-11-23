import React, { useState } from 'react';
import {
  Code,
  Zap,
  Brain,
  Cloud,
  CheckCircle2,
  BookOpen,
  Filter,
  Search,
  Sparkles,
  Info,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { skillsList } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);

  const categories: { label: string; value: string; icon: React.ReactNode }[] = [
    { label: 'All Technologies', value: 'all', icon: <Filter size={15} /> },
    { label: 'GenAI & Retrieval', value: 'ai_retrieval', icon: <Brain size={15} /> },
    { label: 'Backend & APIs', value: 'backend', icon: <Zap size={15} /> },
    { label: 'Programming', value: 'programming', icon: <Code size={15} /> },
    { label: 'Cloud & Web', value: 'web_cloud', icon: <Cloud size={15} /> },
    { label: 'Developer Tools', value: 'tools', icon: <BookOpen size={15} /> }
  ];

  const filteredSkills = skillsList.filter((skill) => {
    const matchesCategory = selectedCategory === 'all' || skill.category === selectedCategory;
    const matchesSearch =
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (skill.projectUsage && skill.projectUsage.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const toggleExpand = (name: string) => {
    setExpandedSkill(expandedSkill === name ? null : name);
  };

  return (
    <section
      id="skills"
      style={{
        padding: '6rem 0',
        background: 'var(--bg-secondary)',
        position: 'relative',
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">
            <Zap size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">
            Verified Skills &amp; <span className="gradient-text">Engineering Stack</span>
          </h2>
          <p className="section-subtitle">
            Every technology listed below represents practical, applied competency. Click any technology to see its
            specific role in my completed projects.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            marginBottom: '2.5rem'
          }}
        >
          {/* Category Tabs */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
              justifyContent: 'center'
            }}
          >
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    padding: '0.55rem 1.15rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.86rem',
                    fontWeight: 600,
                    transition: 'all var(--transition-fast)',
                    background: isSelected
                      ? 'linear-gradient(135deg, var(--accent-blue) 0%, var(--accent-violet) 100%)'
                      : 'var(--bg-surface)',
                    color: isSelected ? '#ffffff' : 'var(--text-secondary)',
                    border: isSelected ? '1px solid transparent' : '1px solid var(--border-subtle)',
                    boxShadow: isSelected ? 'var(--shadow-glow-blue)' : 'none'
                  }}
                >
                  {cat.icon}
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Bar & Legend */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '1rem',
              maxWidth: '850px',
              margin: '0 auto',
              width: '100%'
            }}
          >
            {/* Search Input */}
            <div
              style={{
                position: 'relative',
                flex: '1 1 280px',
                maxWidth: '420px'
              }}
            >
              <Search
                size={16}
                style={{
                  position: 'absolute',
                  left: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'var(--text-tertiary)'
                }}
              />
              <input
                type="text"
                placeholder="Search skills (e.g. ChromaDB, FastAPI, RAG)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.65rem 1rem 0.65rem 2.6rem',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-primary)',
                  fontSize: '0.88rem',
                  fontFamily: 'inherit',
                  outline: 'none',
                  transition: 'border-color var(--transition-fast)'
                }}
              />
            </div>

            {/* Verification Legend */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span className="verified-tag">
                <CheckCircle2 size={13} />
                <span>Verified in Project</span>
              </span>
              <span className="learning-tag">
                <Info size={13} />
                <span>Foundational / Certification</span>
              </span>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.25rem'
          }}
        >
          {filteredSkills.map((skill) => {
            const isExpanded = expandedSkill === skill.name;
            return (
              <div
                key={skill.name}
                onClick={() => toggleExpand(skill.name)}
                className="glass-card"
                style={{
                  padding: '1.4rem',
                  cursor: 'pointer',
                  position: 'relative',
                  border: isExpanded ? '1px solid var(--border-accent)' : '1px solid var(--border-subtle)',
                  background: isExpanded ? 'var(--bg-card-highlight)' : 'var(--bg-card)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  {/* Top Header of Card */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '0.75rem'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      <div
                        style={{
                          width: '34px',
                          height: '34px',
                          borderRadius: '8px',
                          background: skill.verifiedInProject
                            ? 'rgba(59, 130, 246, 0.12)'
                            : 'rgba(245, 158, 11, 0.12)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: skill.verifiedInProject ? 'var(--accent-blue)' : 'var(--accent-amber)'
                        }}
                      >
                        {skill.category === 'ai_retrieval' ? (
                          <Brain size={18} />
                        ) : skill.category === 'backend' ? (
                          <Zap size={18} />
                        ) : skill.category === 'web_cloud' ? (
                          <Cloud size={18} />
                        ) : (
                          <Code size={18} />
                        )}
                      </div>
                      <h3 style={{ fontSize: '1.05rem', color: 'var(--text-primary)', fontWeight: 700 }}>
                        {skill.name}
                      </h3>
                    </div>

                    <div style={{ color: 'var(--text-tertiary)' }}>
                      {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </div>
                  </div>

                  {/* Level & Verification Badge */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      gap: '0.5rem',
                      marginBottom: '0.75rem'
                    }}
                  >
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontFamily: 'var(--font-mono)',
                        padding: '0.2rem 0.55rem',
                        borderRadius: 'var(--radius-sm)',
                        background: 'var(--bg-surface)',
                        color: 'var(--text-tertiary)',
                        fontWeight: 600
                      }}
                    >
                      {skill.level}
                    </span>

                    {skill.verifiedInProject ? (
                      <span className="verified-tag">
                        <CheckCircle2 size={12} />
                        <span>Verified</span>
                      </span>
                    ) : (
                      <span className="learning-tag">
                        <Info size={12} />
                        <span>Foundational</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Project Usage Context (Always partially visible or expanded) */}
                <div
                  style={{
                    paddingTop: '0.75rem',
                    borderTop: '1px solid var(--border-subtle)',
                    marginTop: '0.5rem'
                  }}
                >
                  <p
                    style={{
                      fontSize: '0.84rem',
                      lineHeight: 1.55,
                      color: isExpanded ? 'var(--text-primary)' : 'var(--text-secondary)'
                    }}
                  >
                    {skill.projectUsage}
                  </p>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      marginTop: '0.6rem',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: 'var(--text-accent)'
                    }}
                  >
                    <Sparkles size={12} />
                    <span>{isExpanded ? 'Click to collapse' : 'Click to read implementation detail'}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredSkills.length === 0 && (
          <div
            style={{
              textAlign: 'center',
              padding: '3rem',
              color: 'var(--text-tertiary)',
              background: 'var(--bg-surface)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-subtle)'
            }}
          >
            <p>No technologies matched &quot;{searchQuery}&quot; in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};
