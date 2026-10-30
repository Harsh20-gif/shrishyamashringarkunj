import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaCompass, FaShoppingBag, FaWhatsapp } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { buildGeneralInquiryUrl } from '../utils/whatsapp';

export default function MobileBottomNav() {
  const { totalItems, openCart } = useCart();

  return (
    <nav
      className="mobile-bottom-nav"
      aria-label="Mobile Bottom Navigation"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        height: 'calc(var(--bottom-bar-height) + var(--safe-bottom))',
        paddingBottom: 'var(--safe-bottom)',
        backgroundColor: 'rgba(251, 246, 236, 0.98)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderTop: '1px solid var(--border-gold)',
        boxShadow: '0 -4px 18px rgba(91, 26, 24, 0.08)',
        zIndex: 90,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingLeft: '0.25rem',
        paddingRight: '0.25rem'
      }}
    >
      {/* 1. Home */}
      <NavLink
        to="/"
        end
        style={({ isActive }) => ({
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '3px',
          flex: 1,
          height: '100%',
          minHeight: '44px',
          color: isActive ? 'var(--gold-dark)' : 'var(--text-muted)',
          fontSize: '0.72rem',
          fontWeight: isActive ? 600 : 500,
          textDecoration: 'none',
          position: 'relative'
        })}
      >
        {({ isActive }) => (
          <>
            <FaHome size={19} color={isActive ? 'var(--gold-dark)' : 'currentColor'} />
            <span>Home</span>
            {isActive && (
              <span
                style={{
                  position: 'absolute',
                  top: '6px',
                  width: '4px',
                  height: '4px',
                  borderRadius: '50%',
                  background: 'var(--gold-dark)'
                }}
              />
            )}
          </>
        )}
      </NavLink>

      {/* 2. Shop */}
      <NavLink
        to="/shop"
        style={({ isActive }) => ({
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '3px',
          flex: 1,
          height: '100%',
          minHeight: '44px',
          color: isActive ? 'var(--gold-dark)' : 'var(--text-muted)',
          fontSize: '0.72rem',
          fontWeight: isActive ? 600 : 500,
          textDecoration: 'none',
          position: 'relative'
        })}
      >
        {({ isActive }) => (
          <>
            <FaCompass size={19} color={isActive ? 'var(--gold-dark)' : 'currentColor'} />
            <span>Shop</span>
            {isActive && (
              <span
                style={{
                  position: 'absolute',
                  top: '6px',
                  width: '4px',
                  height: '4px',
                  borderRadius: '50%',
                  background: 'var(--gold-dark)'
                }}
              />
            )}
          </>
        )}
      </NavLink>

      {/* 3. Cart Button */}
      <button
        onClick={openCart}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '3px',
          flex: 1,
          height: '100%',
          minHeight: '44px',
          color: totalItems > 0 ? 'var(--maroon)' : 'var(--text-muted)',
          fontSize: '0.72rem',
          fontWeight: 600,
          position: 'relative'
        }}
        aria-label={`Open Cart with ${totalItems} items`}
      >
        <div style={{ position: 'relative' }}>
          <FaShoppingBag size={18} />
          {totalItems > 0 && (
            <span
              style={{
                position: 'absolute',
                top: '-5px',
                right: '-9px',
                background: 'var(--gold)',
                color: 'var(--maroon-dark)',
                fontSize: '0.62rem',
                fontWeight: 700,
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1.5px solid #FBF6EC'
              }}
            >
              {totalItems}
            </span>
          )}
        </div>
        <span>Cart</span>
      </button>

      {/* 4. WhatsApp Direct */}
      <a
        href={buildGeneralInquiryUrl()}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '3px',
          flex: 1,
          height: '100%',
          minHeight: '44px',
          color: '#15803d',
          fontSize: '0.72rem',
          fontWeight: 600,
          textDecoration: 'none'
        }}
        aria-label="Direct WhatsApp Seva"
      >
        <div
          style={{
            width: '26px',
            height: '26px',
            borderRadius: '50%',
            backgroundColor: 'var(--whatsapp-green)',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 6px rgba(37, 211, 102, 0.35)'
          }}
        >
          <FaWhatsapp size={15} />
        </div>
        <span>WhatsApp</span>
      </a>

      <style>{`
        @media (min-width: 768px) {
          .mobile-bottom-nav {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
}
