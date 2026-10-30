import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';
import { buildGeneralInquiryUrl } from '../utils/whatsapp';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div
      style={{
        position: 'fixed',
        right: '24px',
        bottom: '24px',
        zIndex: 89,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '8px'
      }}
      className="floating-wa-container"
    >
      {/* Devotional Speech Bubble */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 10 }}
            transition={{ duration: 0.25 }}
            style={{
              background: '#FFFFFF',
              color: 'var(--maroon)',
              padding: '8px 14px',
              borderRadius: '16px 16px 4px 16px',
              boxShadow: 'var(--shadow-md)',
              border: '1.5px solid var(--border-gold)',
              fontSize: '0.8rem',
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              maxWidth: '220px',
              lineHeight: 1.3
            }}
          >
            <span>
              <strong style={{ color: 'var(--gold-dark)' }}>राधे राधे!</strong> Custom poshak ya inquiry ke liye chat karein.
            </span>
            <button
              onClick={() => setShowTooltip(false)}
              style={{
                color: 'var(--text-muted)',
                padding: '4px',
                borderRadius: '50%'
              }}
              aria-label="Close tooltip"
              className="touch-target"
            >
              <FaTimes size={12} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.a
        href={buildGeneralInquiryUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Shri Hit Tulsi on WhatsApp"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          backgroundColor: 'var(--whatsapp-green)',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 24px rgba(37, 211, 102, 0.45)',
          border: '2px solid #FFFFFF',
          position: 'relative'
        }}
      >
        <FaWhatsapp size={28} />

        {/* Pulsing ring */}
        <span
          style={{
            position: 'absolute',
            inset: -4,
            borderRadius: '50%',
            border: '2px solid rgba(37, 211, 102, 0.6)',
            animation: 'waPulse 2.4s cubic-bezier(0.4, 0, 0.6, 1) infinite'
          }}
        />
      </motion.a>

      <style>{`
        @keyframes waPulse {
          0% { transform: scale(0.95); opacity: 0.8; }
          50% { transform: scale(1.2); opacity: 0; }
          100% { transform: scale(1.2); opacity: 0; }
        }
        /* Hidden on mobile to avoid any bottom nav overlap */
        @media (max-width: 768px) {
          .floating-wa-container {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
