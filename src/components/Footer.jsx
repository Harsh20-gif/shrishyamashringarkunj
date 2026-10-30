import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaHeart,
  FaStar,
  FaShieldAlt
} from 'react-icons/fa';
import { BRAND } from '../config/brand';
import { buildGeneralInquiryUrl } from '../utils/whatsapp';

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#380E0D',
        color: '#FBF6EC',
        borderTop: '3px solid var(--gold)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Sacred Top Banner */}
      <div
        style={{
          background: 'linear-gradient(90deg, #2D0908 0%, #5B1A18 50%, #2D0908 100%)',
          padding: '1rem 0',
          borderBottom: '1px solid rgba(200, 147, 46, 0.25)',
          textAlign: 'center'
        }}
      >
        <div className="container">
          <p
            className="devanagari-text"
            style={{
              fontSize: 'clamp(0.95rem, 2.5vw, 1.25rem)',
              color: 'var(--gold-light)',
              fontWeight: 600,
              letterSpacing: '0.04em'
            }}
          >
            ॥ श्री राधा कृपा कटाक्ष · जय जय श्री राधे ॥
          </p>
        </div>
      </div>

      <div className="container" style={{ padding: '3rem 1.25rem 2rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '2.5rem',
            marginBottom: '2.5rem'
          }}
        >
          {/* Col 1: Brand Lore */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #C8932E 0%, #9A6C18 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#380E0D'
                }}
              >
                <FaStar size={18} />
              </div>
              <div>
                <h3
                  className="devanagari-text"
                  style={{
                    color: '#FFFFFF',
                    fontSize: '1.35rem',
                    fontWeight: 600,
                    lineHeight: 1
                  }}
                >
                  {BRAND.devanagariName}
                </h3>
                <span style={{ fontSize: '0.72rem', color: 'var(--gold-light)', letterSpacing: '0.06em' }}>
                  Vrindavan Devotional Seva
                </span>
              </div>
            </div>

            <p style={{ color: 'rgba(251, 246, 236, 0.82)', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              Dedicated to serving devotees of Shri Radha Krishna worldwide. Every bottle of attar, Tulsi mala, and deity poshak is sanctified in the holy dust of Vrindavan Dham before dispatch.
            </p>

            <div style={{ display: 'flex', gap: '10px' }}>
              <a
                href={BRAND.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FBF6EC',
                  border: '1px solid rgba(200, 147, 46, 0.3)',
                  transition: 'all 0.2s'
                }}
                aria-label="Follow on Instagram"
                className="touch-target"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href={buildGeneralInquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(37, 211, 102, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--whatsapp-green)',
                  border: '1px solid rgba(37, 211, 102, 0.4)',
                  transition: 'all 0.2s'
                }}
                aria-label="Direct WhatsApp Chat"
                className="touch-target"
              >
                <FaWhatsapp size={19} />
              </a>
            </div>
          </div>

          {/* Col 2: Holy Collections */}
          <div>
            <h4
              style={{
                color: 'var(--gold)',
                fontSize: '1rem',
                fontWeight: 600,
                letterSpacing: '0.04em',
                marginBottom: '1rem',
                textTransform: 'uppercase'
              }}
            >
              Holy Collections
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', padding: 0 }}>
              <li>
                <Link to="/shop?category=attar" style={{ color: 'rgba(251, 246, 236, 0.85)', fontSize: '0.88rem' }}>
                  Pure Vrindavan Attars (Chandan, Gulab, Kesar)
                </Link>
              </li>
              <li>
                <Link to="/shop?category=tulsi-sticks" style={{ color: 'rgba(251, 246, 236, 0.85)', fontSize: '0.88rem' }}>
                  Natural Tulsi Sticks & 108 Japa Malas
                </Link>
              </li>
              <li>
                <Link to="/shop?category=bhakti-kits" style={{ color: 'rgba(251, 246, 236, 0.85)', fontSize: '0.88rem' }}>
                  Thakurji Daily Seva & Utsav Kits
                </Link>
              </li>
              <li>
                <Link to="/shop?category=poshak" style={{ color: 'rgba(251, 246, 236, 0.85)', fontSize: '0.88rem' }}>
                  Customized Laddu Gopal & Yugal Jodi Poshaks
                </Link>
              </li>
              <li>
                <Link to="/shop" style={{ color: 'var(--gold-light)', fontSize: '0.88rem', fontWeight: 600 }}>
                  Explore Entire Catalog →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Seva & Ordering Info */}
          <div>
            <h4
              style={{
                color: 'var(--gold)',
                fontSize: '1rem',
                fontWeight: 600,
                letterSpacing: '0.04em',
                marginBottom: '1rem',
                textTransform: 'uppercase'
              }}
            >
              Order & Vrindavan Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', color: 'rgba(251, 246, 236, 0.85)', fontSize: '0.88rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <FaMapMarkerAlt size={16} color="var(--gold)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span>Loi Bazaar / Banke Bihari Temple Marg, Vrindavan Dham, Mathura, UP - 281121</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <FaPhoneAlt size={15} color="var(--gold)" style={{ flexShrink: 0 }} />
                <a href={buildGeneralInquiryUrl()} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--whatsapp-green)', fontWeight: 600 }}>
                  {BRAND.whatsappDisplay} (WhatsApp Seva)
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <FaInstagram size={16} color="var(--gold)" style={{ flexShrink: 0 }} />
                <a href={BRAND.instagramUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#FBF6EC' }}>
                  {BRAND.instagramHandle} (Daily Reels & Updates)
                </a>
              </div>

              <div
                style={{
                  marginTop: '0.4rem',
                  padding: '8px 12px',
                  borderRadius: 'var(--radius-xs)',
                  backgroundColor: 'rgba(200, 147, 46, 0.12)',
                  border: '1px solid rgba(200, 147, 46, 0.25)',
                  fontSize: '0.75rem',
                  lineHeight: 1.4
                }}
              >
                No payment gateway needed. Orders are processed with personal warmth directly on WhatsApp.
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'rgba(200, 147, 46, 0.2)', marginBottom: '1.5rem' }} />

        {/* Bottom Bar */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            textAlign: 'center',
            fontSize: '0.8rem',
            color: 'rgba(251, 246, 236, 0.65)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>Crafted with devotion for Radha Bhakts</span>
            <FaHeart size={13} color="#e11d48" />
            <span>in Vrindavan Dham</span>
          </div>
          <div>
            © {new Date().getFullYear()} {BRAND.name} ({BRAND.devanagariName}). All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
