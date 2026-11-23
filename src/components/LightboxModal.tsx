import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export interface LightboxMedia {
  url: string;
  title: string;
  caption?: string;
  category?: string;
}

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  media: LightboxMedia[];
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  onClose,
  media,
  currentIndex,
  setCurrentIndex
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, currentIndex, media.length]);

  if (!isOpen || media.length === 0) return null;

  const currentItem = media[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + media.length) % media.length);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % media.length);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        background: 'rgba(5, 8, 17, 0.94)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem'
      }}
      onClick={onClose}
    >
      {/* Top Bar */}
      <div
        style={{
          position: 'absolute',
          top: '1rem',
          left: '1.5rem',
          right: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          color: '#ffffff',
          zIndex: 10
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {currentItem.category && (
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                padding: '0.25rem 0.6rem',
                borderRadius: 'var(--radius-sm)',
                background: 'rgba(59, 130, 246, 0.25)',
                border: '1px solid var(--border-accent)',
                color: 'var(--accent-cyan)'
              }}
            >
              {currentItem.category}
            </span>
          )}
          <span style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
            {currentIndex + 1} / {media.length}
          </span>
        </div>

        <button
          onClick={onClose}
          aria-label="Close modal"
          style={{
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background var(--transition-fast)'
          }}
        >
          <X size={22} />
        </button>
      </div>

      {/* Main Image Container */}
      <div
        style={{
          position: 'relative',
          maxWidth: '92vw',
          maxHeight: '78vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={currentItem.url}
          alt={currentItem.title}
          style={{
            maxWidth: '100%',
            maxHeight: '75vh',
            objectFit: 'contain',
            borderRadius: 'var(--radius-md)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.7)',
            border: '1px solid var(--border-medium)'
          }}
        />

        {/* Previous Button */}
        {media.length > 1 && (
          <button
            onClick={handlePrev}
            aria-label="Previous image"
            style={{
              position: 'absolute',
              left: '-3.5rem',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: 'rgba(15, 23, 42, 0.8)',
              border: '1px solid var(--border-medium)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 'var(--shadow-md)',
              transition: 'background var(--transition-fast)'
            }}
          >
            <ChevronLeft size={26} />
          </button>
        )}

        {/* Next Button */}
        {media.length > 1 && (
          <button
            onClick={handleNext}
            aria-label="Next image"
            style={{
              position: 'absolute',
              right: '-3.5rem',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: 'rgba(15, 23, 42, 0.8)',
              border: '1px solid var(--border-medium)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 'var(--shadow-md)',
              transition: 'background var(--transition-fast)'
            }}
          >
            <ChevronRight size={26} />
          </button>
        )}
      </div>

      {/* Caption & Title Footer */}
      <div
        style={{
          marginTop: '1.25rem',
          textAlign: 'center',
          maxWidth: '750px',
          color: '#ffffff',
          zIndex: 10
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h4 style={{ fontSize: '1.15rem', color: '#f8fafc', marginBottom: '0.35rem' }}>
          {currentItem.title}
        </h4>
        {currentItem.caption && (
          <p style={{ fontSize: '0.88rem', color: '#cbd5e1', lineHeight: 1.5 }}>
            {currentItem.caption}
          </p>
        )}
      </div>
    </div>
  );
};
