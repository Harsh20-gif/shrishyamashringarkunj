import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaShoppingBag, FaInstagram, FaWhatsapp, FaChevronRight } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { BRAND } from '../config/brand';
import { buildGeneralInquiryUrl } from '../utils/whatsapp';

export default function Header() {
  const { totalItems, openCart } = useCart();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname, location.search]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle ESC key to close menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', path: '/', hindi: 'गृह' },
    { label: 'Shop All', path: '/shop', hindi: 'सभी सेवाएं' },
    { label: 'Attars', path: '/shop?category=attar', hindi: 'दिव्य इत्र' },
    { label: 'Tulsi Sticks & Malas', path: '/shop?category=tulsi-sticks', hindi: 'तुलसी माला' },
    { label: 'Divine Bhakti Kits', path: '/shop?category=bhakti-kits', hindi: 'सेवा किट' },
    { label: 'Custom Poshak', path: '/shop?category=poshak', hindi: 'शृंगार पोशाक' },
    { label: 'Our Story', path: '/#story', hindi: 'ब्रज गाथा' },
    { label: 'How to Order', path: '/#how-to-order', hindi: 'सेवा विधि' }
  ];

  const handleNavClick = (path) => {
    setMobileMenuOpen(false);
    if (path.startsWith('/#')) {
      const id = path.replace('/#', '');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <>
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          backgroundColor: isScrolled
            ? 'rgba(251, 246, 236, 0.96)'
            : 'rgba(251, 246, 236, 0.92)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: isScrolled
            ? '1px solid rgba(200, 147, 46, 0.3)'
            : '1px solid rgba(91, 26, 24, 0.08)',
          boxShadow: isScrolled ? '0 4px 18px rgba(91, 26, 24, 0.06)' : 'none',
          transition: 'all 0.25s ease'
        }}
      >
        {/* Sacred Ribbon */}
        <div
          style={{
            background: 'linear-gradient(90deg, #380E0D 0%, #5B1A18 50%, #380E0D 100%)',
            color: '#F4EBD9',
            fontSize: '0.7rem',
            padding: '3px 0',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            letterSpacing: '0.04em'
          }}
        >
          <span className="devanagari-text" style={{ color: 'var(--gold-light)' }}>
            🙏 राधे राधे
          </span>
          <span style={{ opacity: 0.92 }}>
            Direct from Shri Dham Vrindavan · Pan-India WhatsApp Ordering
          </span>
        </div>

        {/* Compact Header Bar (56-60px) */}
        <div
          className="container"
          style={{
            height: 'var(--header-height)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'relative'
          }}
        >
          {/* Mobile Left: Hamburger Icon (min 44x44px touch target) */}
          <div style={{ display: 'flex', alignItems: 'center' }} className="mobile-only">
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              style={{
                width: '44px',
                height: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--maroon)',
                fontSize: '1.25rem',
                borderRadius: '8px'
              }}
              className="touch-target"
            >
              <FaBars size={20} />
            </button>
          </div>

          {/* Desktop Left: Brand Logo & Temple Blessing */}
          <Link
            to="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              textDecoration: 'none'
            }}
            className="desktop-logo"
          >
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #5B1A18 0%, #380E0D 100%)',
                border: '1.5px solid var(--gold)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 6px rgba(91, 26, 24, 0.2)',
                flexShrink: 0
              }}
            >
              <svg width="20" height="20" viewBox="0 0 64 64" fill="none" aria-hidden="true">
                <path d="M32 10 C27 20 26 30 32 37 C38 30 37 20 32 10 Z" fill="#F3E5AB" />
                <path d="M32 36 C22 34 16 26 19 19 C24 25 30 32 32 36 Z" fill="#C8932E" />
                <path d="M32 36 C42 34 48 26 45 19 C40 25 34 32 32 36 Z" fill="#C8932E" />
                <path d="M18 39 Q32 48 46 39 Q48 43 32 47 Q16 43 18 39 Z" fill="#DFB258" />
              </svg>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span
                className="devanagari-text"
                style={{
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  color: 'var(--maroon)',
                  lineHeight: 1
                }}
              >
                {BRAND.devanagariName}
              </span>
              <span
                style={{
                  fontSize: '0.66rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--gold-dark)',
                  fontWeight: 600,
                  marginTop: '1px'
                }}
              >
                Vrindavan Dham
              </span>
            </div>
          </Link>

          {/* Mobile Centered Logo / Brand */}
          <Link
            to="/"
            style={{
              textDecoration: 'none',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
            className="mobile-centered-brand mobile-only"
          >
            <span
              className="devanagari-text"
              style={{
                fontSize: '1.18rem',
                fontWeight: 600,
                color: 'var(--maroon)',
                lineHeight: 1
              }}
            >
              {BRAND.devanagariName}
            </span>
            <span
              style={{
                fontSize: '0.62rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--gold-dark)',
                fontWeight: 600,
                marginTop: '1px'
              }}
            >
              Shri Hit Tulsi · Vrindavan
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '1.4rem'
            }}
            className="desktop-nav"
          >
            {navLinks.slice(0, 6).map((link) => {
              const isActive = location.pathname + location.search === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  style={{
                    fontSize: '0.88rem',
                    fontWeight: isActive ? 600 : 500,
                    color: isActive ? 'var(--maroon)' : 'var(--text-main)',
                    position: 'relative',
                    padding: '4px 0',
                    transition: 'color 0.2s ease'
                  }}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="navIndicator"
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '2px',
                        background: 'var(--gold)',
                        borderRadius: '2px'
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Icons: Instagram, WhatsApp & Cart Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {/* Desktop Instagram */}
            <a
              href={BRAND.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Follow ${BRAND.name} on Instagram`}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--maroon)',
                background: 'rgba(91, 26, 24, 0.05)',
                border: '1px solid rgba(200, 147, 46, 0.25)',
                transition: 'all 0.2s ease'
              }}
              className="desktop-icon-btn"
              title={`Instagram ${BRAND.instagramHandle}`}
            >
              <FaInstagram size={18} />
            </a>

            {/* Desktop WhatsApp Button */}
            <a
              href={buildGeneralInquiryUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Direct WhatsApp Chat"
              style={{
                display: 'none',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 14px',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'var(--whatsapp-green)',
                color: '#FFFFFF',
                fontSize: '0.82rem',
                fontWeight: 600,
                boxShadow: '0 2px 8px rgba(37, 211, 102, 0.3)'
              }}
              className="desktop-wa-btn"
            >
              <FaWhatsapp size={16} />
              <span>WhatsApp Seva</span>
            </a>

            {/* Cart Trigger Button with Animated Badge (min 44x44px touch target) */}
            <button
              onClick={openCart}
              aria-label={`Open shopping cart with ${totalItems} items`}
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #5B1A18 0%, #380E0D 100%)',
                color: '#FBF6EC',
                border: '1px solid var(--gold)',
                boxShadow: '0 3px 10px rgba(91, 26, 24, 0.25)',
                transition: 'transform 0.15s ease'
              }}
              className="touch-target"
            >
              <FaShoppingBag size={18} />
              <AnimatePresence>
                {totalItems > 0 && (
                  <motion.span
                    key={totalItems}
                    initial={{ scale: 0.4, opacity: 0 }}
                    animate={{ scale: [1, 1.25, 1], opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    style={{
                      position: 'absolute',
                      top: '-3px',
                      right: '-3px',
                      background: 'var(--gold)',
                      color: 'var(--maroon-dark)',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      width: '19px',
                      height: '19px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
                      border: '1.5px solid #FBF6EC'
                    }}
                  >
                    {totalItems}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      {/* ================= FULL-HEIGHT SLIDE-IN SIDE MENU ================= */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 1000,
              display: 'flex'
            }}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            {/* Blurred Backdrop Tap to Close */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                position: 'absolute',
                inset: 0,
                backgroundColor: 'rgba(56, 14, 13, 0.55)',
                backdropFilter: 'blur(6px)',
                WebkitBackdropFilter: 'blur(6px)'
              }}
            />

            {/* Slide-in Menu Panel */}
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 280 }}
              style={{
                position: 'relative',
                width: '82%',
                maxWidth: '340px',
                height: '100%',
                backgroundColor: '#FBF6EC',
                borderRight: '1.5px solid var(--border-gold)',
                boxShadow: '8px 0 30px rgba(56, 14, 13, 0.3)',
                display: 'flex',
                flexDirection: 'column',
                zIndex: 1001,
                overflowY: 'auto'
              }}
            >
              {/* Menu Header */}
              <div
                style={{
                  padding: '1.25rem 1.25rem',
                  borderBottom: '1px solid var(--border-gold)',
                  background: 'linear-gradient(135deg, #5B1A18 0%, #380E0D 100%)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <span
                    className="devanagari-text"
                    style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--gold-light)', display: 'block' }}
                  >
                    {BRAND.devanagariName}
                  </span>
                  <span style={{ fontSize: '0.72rem', letterSpacing: '0.08em', textTransform: 'uppercase', opacity: 0.85 }}>
                    Vrindavan Devotional Seva
                  </span>
                </div>

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.12)',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  aria-label="Close navigation menu"
                  className="touch-target"
                >
                  <FaTimes size={18} />
                </button>
              </div>

              {/* Navigation Links */}
              <div
                style={{
                  flex: 1,
                  padding: '1rem 1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px'
                }}
              >
                <span
                  className="eyebrow"
                  style={{ marginBottom: '0.5rem', color: 'var(--gold-dark)' }}
                >
                  Sacred Offerings & Navigation
                </span>

                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => handleNavClick(link.path)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '10px 8px',
                      borderRadius: '8px',
                      color: 'var(--maroon)',
                      fontSize: '0.96rem',
                      fontWeight: 500,
                      borderBottom: '1px solid rgba(91, 26, 24, 0.06)'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span>{link.label}</span>
                      <span className="devanagari-text" style={{ fontSize: '0.75rem', color: 'var(--gold-dark)' }}>
                        ({link.hindi})
                      </span>
                    </div>
                    <FaChevronRight size={12} color="var(--gold)" />
                  </Link>
                ))}
              </div>

              {/* Bottom Actions & Radhe Radhe footer line */}
              <div
                style={{
                  padding: '1.25rem',
                  borderTop: '1px solid var(--border-gold)',
                  backgroundColor: 'var(--bg-subtle)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px'
                }}
              >
                <div style={{ display: 'flex', gap: '8px' }}>
                  <a
                    href={buildGeneralInquiryUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp"
                    style={{ flex: 1, padding: '0.65rem 0.85rem', fontSize: '0.84rem' }}
                  >
                    <FaWhatsapp size={16} />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href={BRAND.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                    style={{ flex: 1, padding: '0.65rem 0.85rem', fontSize: '0.84rem' }}
                  >
                    <FaInstagram size={16} />
                    <span>Instagram</span>
                  </a>
                </div>

                <div
                  style={{
                    textAlign: 'center',
                    marginTop: '4px',
                    fontSize: '0.88rem',
                    color: 'var(--maroon)',
                    fontWeight: 600
                  }}
                  className="devanagari-text"
                >
                  🙏 राधे राधे · श्री राधा कृपा कटाक्ष
                </div>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>

      <style>{`
        .desktop-logo {
          display: none !important;
        }
        .desktop-nav {
          display: none !important;
        }
        .desktop-icon-btn {
          display: none !important;
        }
        .desktop-wa-btn {
          display: none !important;
        }
        .mobile-only {
          display: flex !important;
        }
        @media (min-width: 860px) {
          .desktop-logo {
            display: flex !important;
          }
          .desktop-nav {
            display: flex !important;
          }
          .desktop-icon-btn {
            display: flex !important;
          }
          .desktop-wa-btn {
            display: inline-flex !important;
          }
          .mobile-only {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
