import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Copy,
  Check,
  Download,
  Sparkles
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [inquiryRole, setInquiryRole] = useState('Python Developer');
  const [senderName, setSenderName] = useState('');
  const [customMessage, setCustomMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleGenerateMailto = (e: React.FormEvent) => {
    e.preventDefault();
    const bodyContent = `Hi Dhanush,\n\nI came across your developer portfolio and would like to discuss an opportunity regarding the ${inquiryRole} role.\n\n${customMessage ? `Message: ${customMessage}\n\n` : ''}Best regards,\n${senderName || 'Hiring Team'}`;
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      `[Portfolio Inquiry - ${inquiryRole}] from ${senderName || 'Recruiter'}`
    )}&body=${encodeURIComponent(bodyContent)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" style={{ padding: '6.5rem 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">
            <Mail size={14} />
            <span>Connect &amp; Collaborate</span>
          </div>
          <h2 className="section-title">
            Let&apos;s Build Something <span className="gradient-text">Impactful</span>
          </h2>
          <p className="section-subtitle">
            I am actively exploring entry-level opportunities as a <strong>Python Developer</strong>,{' '}
            <strong>Backend Engineer</strong>, or <strong>AI Application Developer</strong> in Bengaluru or hybrid/remote.
            Feel free to reach out directly via email, phone, or download my verified resume.
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
          className="contact-grid"
        >
          {/* Left Column: Direct Verified Channels & Resume */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Email Card */}
            <div className="glass-card" style={{ padding: '1.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: 'rgba(59, 130, 246, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-blue)',
                      flexShrink: 0
                    }}
                  >
                    <Mail size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)', fontFamily: 'var(--font-mono)' }}>
                      DIRECT EMAIL
                    </div>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      style={{
                        fontSize: '1.05rem',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        textDecoration: 'none'
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-blue)')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="btn-secondary btn-sm"
                  style={{ gap: '0.4rem' }}
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check size={14} style={{ color: '#10b981' }} /> : <Copy size={14} />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Phone Card */}
            <div className="glass-card" style={{ padding: '1.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: 'rgba(16, 185, 129, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-emerald)',
                      flexShrink: 0
                    }}
                  >
                    <Phone size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)', fontFamily: 'var(--font-mono)' }}>
                      CALL / WHATSAPP
                    </div>
                    <a
                      href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`}
                      style={{
                        fontSize: '1.05rem',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        textDecoration: 'none'
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-emerald)')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyPhone}
                  className="btn-secondary btn-sm"
                  style={{ gap: '0.4rem' }}
                  title="Copy phone number"
                >
                  {copiedPhone ? <Check size={14} style={{ color: '#10b981' }} /> : <Copy size={14} />}
                  <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Location Card */}
            <div className="glass-card" style={{ padding: '1.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'rgba(6, 182, 212, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-cyan)',
                    flexShrink: 0
                  }}
                >
                  <MapPin size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)', fontFamily: 'var(--font-mono)' }}>
                    BASED IN
                  </div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    {personalInfo.location}
                  </div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                    Open to On-site roles across Bengaluru or Hybrid / Remote engagements
                  </div>
                </div>
              </div>
            </div>

            {/* Resume Action Banner */}
            <div
              className="glass-card"
              style={{
                padding: '1.75rem',
                background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.2) 0%, var(--bg-card) 100%)',
                border: '1px solid var(--border-accent)'
              }}
            >
              <h4 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                Looking for an ATS-Compliant PDF Resume?
              </h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                Download my single-page ATS-formatted resume with verified MCA/BCA scores, full project breakdowns, and credentials.
              </p>
              <a
                href={personalInfo.resumePdfUrl}
                download="D_Dhanush_Resume.pdf"
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <Download size={18} />
                <span>Download D_Dhanush_Resume.pdf</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Quick Inquiry Composer */}
          <div
            className="glass-card"
            style={{
              padding: '2.5rem',
              borderRadius: 'var(--radius-xl)',
              border: '1px solid var(--border-medium)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
              <Sparkles size={18} style={{ color: 'var(--accent-cyan)' }} />
              <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)' }}>
                Direct Inquiry Composer
              </h3>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.75rem' }}>
              Configure your message below to immediately launch a pre-drafted email in your default client (Outlook, Gmail, Apple Mail).
            </p>

            <form onSubmit={handleGenerateMailto} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* Role Selection */}
              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.8rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--text-tertiary)',
                    marginBottom: '0.4rem',
                    textTransform: 'uppercase'
                  }}
                >
                  Opportunity Role
                </label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {['Python Developer', 'Backend Developer', 'AI / RAG Engineer', 'Full Stack Trainee'].map((role) => (
                    <button
                      type="button"
                      key={role}
                      onClick={() => setInquiryRole(role)}
                      style={{
                        padding: '0.45rem 0.85rem',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '0.82rem',
                        fontWeight: 600,
                        background: inquiryRole === role ? 'var(--accent-blue)' : 'var(--bg-surface)',
                        color: inquiryRole === role ? '#ffffff' : 'var(--text-secondary)',
                        border: '1px solid var(--border-subtle)',
                        transition: 'all var(--transition-fast)'
                      }}
                    >
                      {role}
                    </button>
                  ))}
                </div>
              </div>

              {/* Your Name */}
              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.8rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--text-tertiary)',
                    marginBottom: '0.4rem',
                    textTransform: 'uppercase'
                  }}
                >
                  Your Name / Organization
                </label>
                <input
                  type="text"
                  placeholder="e.g. Alex Morgan / Tech Innovations Pvt Ltd"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--text-primary)',
                    fontSize: '0.9rem',
                    fontFamily: 'inherit',
                    outline: 'none'
                  }}
                />
              </div>

              {/* Message Note */}
              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.8rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--text-tertiary)',
                    marginBottom: '0.4rem',
                    textTransform: 'uppercase'
                  }}
                >
                  Message or Scheduling Note (Optional)
                </label>
                <textarea
                  rows={4}
                  placeholder="e.g. We would love to invite you for an initial technical discussion regarding our Python & GenAI stack..."
                  value={customMessage}
                  onChange={(e) => setCustomMessage(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--text-primary)',
                    fontSize: '0.9rem',
                    fontFamily: 'inherit',
                    outline: 'none',
                    resize: 'vertical'
                  }}
                />
              </div>

              {/* Submit / Open Mail Client Button */}
              <button
                type="submit"
                className="btn-primary"
                style={{
                  width: '100%',
                  padding: '0.95rem',
                  fontSize: '0.95rem',
                  justifyContent: 'center',
                  marginTop: '0.5rem'
                }}
              >
                <Send size={18} />
                <span>Open Pre-drafted Email to Dhanush</span>
              </button>

              <div style={{ textAlign: 'center', fontSize: '0.78rem', color: 'var(--text-tertiary)' }}>
                Opens directly in your mail application with pre-addressed recipient and subject line.
              </div>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr 1.15fr !important;
          }
        }
      `}</style>
    </section>
  );
};
