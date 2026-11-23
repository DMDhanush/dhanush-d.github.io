import React, { useState } from 'react';
import {
  Award,
  Download,
  ExternalLink,
  Eye,
  Calendar,
  Building
} from 'lucide-react';
import { certificatesList } from '../data/portfolioData';
import type { CertificateItem } from '../types/portfolio';
import { LightboxModal } from './LightboxModal';
import type { LightboxMedia } from './LightboxModal';

export const CertificatesGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  const categories = ['All', 'Python & AI', 'Cloud Computing', 'Professional Skills'];

  const filteredCertificates = certificatesList.filter((cert) => {
    if (selectedCategory === 'All') return true;
    return cert.category === selectedCategory;
  });

  const lightboxMedia: LightboxMedia[] = certificatesList.map((cert) => ({
    url: cert.previewImage,
    title: cert.title,
    caption: `${cert.issuingOrg}${cert.partnerOrg ? ` • ${cert.partnerOrg}` : ''} | Credential ID: ${cert.credentialId || 'Verified'}`,
    category: cert.category
  }));

  const openCertificate = (cert: CertificateItem) => {
    const idx = certificatesList.findIndex((c) => c.id === cert.id);
    setCurrentMediaIndex(idx >= 0 ? idx : 0);
    setLightboxOpen(true);
  };

  return (
    <section
      id="certificates"
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
            <Award size={14} />
            <span>Verified Credentials</span>
          </div>
          <h2 className="section-title">
            Industry &amp; Academic <span className="gradient-text">Certifications</span>
          </h2>
          <p className="section-subtitle">
            All certificates below are authentic credentials earned through rigorous coursework, proctored exams, and
            specialized training programs. Click to preview high-resolution certificates or download verified PDFs.
          </p>
        </div>

        {/* Category Tabs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.5rem',
            flexWrap: 'wrap',
            marginBottom: '2.5rem'
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: '0.5rem 1.15rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.85rem',
                fontWeight: 600,
                background: selectedCategory === cat
                  ? 'linear-gradient(135deg, var(--accent-blue) 0%, var(--accent-violet) 100%)'
                  : 'var(--bg-surface)',
                color: selectedCategory === cat ? '#ffffff' : 'var(--text-secondary)',
                border: selectedCategory === cat ? '1px solid transparent' : '1px solid var(--border-subtle)',
                transition: 'all var(--transition-fast)'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Certificate Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.75rem'
          }}
        >
          {filteredCertificates.map((cert) => (
            <div
              key={cert.id}
              className="glass-card"
              style={{
                overflow: 'hidden',
                borderRadius: 'var(--radius-lg)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid var(--border-subtle)'
              }}
            >
              {/* Top Certificate Preview Image */}
              <div>
                <div
                  style={{
                    position: 'relative',
                    aspectRatio: '16 / 10',
                    background: '#070b14',
                    overflow: 'hidden',
                    cursor: 'pointer'
                  }}
                  onClick={() => openCertificate(cert)}
                >
                  <img
                    src={cert.previewImage}
                    alt={cert.title}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      padding: '0.5rem',
                      background: '#ffffff',
                      transition: 'transform var(--transition-normal)'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />

                  {/* Overlay Badge */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '0.75rem',
                      left: '0.75rem',
                      padding: '0.25rem 0.6rem',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(5, 8, 17, 0.85)',
                      backdropFilter: 'blur(8px)',
                      color: 'var(--accent-cyan)',
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 600,
                      border: '1px solid var(--border-accent)'
                    }}
                  >
                    {cert.category}
                  </div>

                  <div
                    style={{
                      position: 'absolute',
                      bottom: '0.75rem',
                      right: '0.75rem',
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: 'rgba(5, 8, 17, 0.85)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff'
                    }}
                  >
                    <Eye size={16} />
                  </div>
                </div>

                {/* Content Body */}
                <div style={{ padding: '1.5rem' }}>
                  {/* Issue Date */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontSize: '0.78rem',
                      color: 'var(--text-tertiary)',
                      fontFamily: 'var(--font-mono)',
                      marginBottom: '0.5rem'
                    }}
                  >
                    <Calendar size={13} />
                    <span>{cert.issueDate}</span>
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: '1.15rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      marginBottom: '0.5rem',
                      lineHeight: 1.35
                    }}
                  >
                    {cert.title}
                  </h3>

                  {/* Issuing Body */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.45rem',
                      fontSize: '0.86rem',
                      color: 'var(--accent-blue)',
                      fontWeight: 600,
                      marginBottom: '0.75rem'
                    }}
                  >
                    <Building size={15} style={{ marginTop: '3px', flexShrink: 0 }} />
                    <span>
                      {cert.issuingOrg}
                      {cert.partnerOrg && <span style={{ color: 'var(--text-tertiary)' }}> &bull; {cert.partnerOrg}</span>}
                    </span>
                  </div>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: '0.85rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                      marginBottom: '1rem'
                    }}
                  >
                    {cert.description}
                  </p>

                  {/* Credential ID / Score Badge */}
                  {cert.credentialId && (
                    <div
                      style={{
                        fontSize: '0.78rem',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--text-tertiary)',
                        marginBottom: '0.5rem'
                      }}
                    >
                      Credential ID: <strong style={{ color: 'var(--text-primary)' }}>{cert.credentialId}</strong>
                    </div>
                  )}

                  {cert.scoreOrDetail && (
                    <div
                      style={{
                        padding: '0.5rem 0.75rem',
                        borderRadius: 'var(--radius-sm)',
                        background: 'rgba(59, 130, 246, 0.08)',
                        border: '1px solid var(--border-accent)',
                        fontSize: '0.78rem',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--accent-cyan)',
                        marginBottom: '0.5rem'
                      }}
                    >
                      {cert.scoreOrDetail}
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div
                style={{
                  padding: '1rem 1.5rem',
                  borderTop: '1px solid var(--border-subtle)',
                  background: 'var(--bg-surface)',
                  display: 'flex',
                  gap: '0.75rem'
                }}
              >
                <button
                  onClick={() => openCertificate(cert)}
                  className="btn-secondary btn-sm"
                  style={{ flex: 1, justifyContent: 'center' }}
                >
                  <Eye size={14} />
                  <span>View</span>
                </button>

                {cert.downloadPdf && (
                  <a
                    href={cert.downloadPdf}
                    download
                    className="btn-primary btn-sm"
                    style={{ flex: 1, justifyContent: 'center', textDecoration: 'none' }}
                  >
                    <Download size={14} />
                    <span>PDF</span>
                  </a>
                )}

                {cert.verificationUrl && (
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary btn-sm"
                    style={{
                      width: '36px',
                      padding: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                    title="External Verification Link"
                  >
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox for certificates */}
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
