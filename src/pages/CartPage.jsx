import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaShoppingBag,
  FaArrowRight,
  FaTrashAlt,
  FaPlus,
  FaMinus,
  FaShieldAlt,
  FaWhatsapp
} from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import SectionHeading from '../components/SectionHeading';

export default function CartPage() {
  const { items, totalAmount, totalItems, updateQuantity, removeItem, openCheckout } = useCart();

  if (items.length === 0) {
    return (
      <div className="container mobile-safe-bottom" style={{ textAlign: 'center', padding: '4.5rem 1rem' }}>
        <div
          style={{
            width: '72px',
            height: '72px',
            borderRadius: '50%',
            backgroundColor: 'var(--gold-soft)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.25rem',
            color: 'var(--gold-dark)',
            border: '1.5px dashed var(--gold)'
          }}
        >
          <FaShoppingBag size={32} />
        </div>

        <h2 style={{ color: 'var(--maroon)', marginBottom: '0.4rem', fontSize: 'var(--fs-h2)' }}>
          Aapka Seva Thal Khali Hai
        </h2>
        <p
          className="devanagari-text"
          style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.96rem' }}
        >
          वृन्दावन धाम से शुद्ध इत्र, तुलसी माला व शृंगार पोशाक चुनें।
        </p>

        <Link to="/shop" className="btn-primary">
          <span>Explore Devotional Offerings</span>
          <FaArrowRight size={14} />
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page mobile-safe-bottom" style={{ padding: '1.75rem 0 3.5rem' }}>
      <div className="container" style={{ maxWidth: '820px' }}>
        <SectionHeading
          sanskrit="॥ श्री सेवा थाल ॥"
          title="Your Seva Cart"
          subtitle={`You have selected ${totalItems} devotional offerings for Thakurji.`}
        />

        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-lg)',
            border: '1.5px solid var(--border-gold)',
            boxShadow: 'var(--shadow-sm)',
            overflow: 'hidden',
            marginBottom: '2rem'
          }}
        >
          <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {items.map((item) => (
              <div
                key={item.cartItemId}
                style={{
                  display: 'flex',
                  gap: '14px',
                  alignItems: 'center',
                  paddingBottom: '1rem',
                  borderBottom: '1px solid rgba(200, 147, 46, 0.2)'
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: '74px',
                    height: '74px',
                    borderRadius: 'var(--radius-sm)',
                    objectFit: 'cover',
                    backgroundColor: 'var(--bg-secondary)',
                    flexShrink: 0
                  }}
                />

                <div style={{ flex: 1, minWidth: 0 }}>
                  <h4
                    style={{
                      fontSize: '1rem',
                      color: 'var(--maroon)',
                      fontWeight: 600,
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis'
                    }}
                  >
                    {item.name}
                  </h4>
                  {item.selectedVariant && (
                    <span style={{ fontSize: '0.78rem', color: 'var(--gold-dark)', display: 'block' }}>
                      Variant: {item.selectedVariant}
                    </span>
                  )}
                  {item.customNote && (
                    <span
                      style={{
                        fontSize: '0.76rem',
                        color: 'var(--teal)',
                        fontStyle: 'italic',
                        display: 'block',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}
                    >
                      Note: {item.customNote}
                    </span>
                  )}

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginTop: '8px'
                    }}
                  >
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        border: '1px solid var(--border-gold)',
                        borderRadius: 'var(--radius-full)',
                        backgroundColor: 'var(--bg-primary)'
                      }}
                    >
                      <button
                        onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                        style={{ padding: '6px 12px', color: 'var(--maroon)' }}
                        aria-label="Decrease quantity"
                        className="touch-target"
                      >
                        <FaMinus size={11} />
                      </button>
                      <span style={{ minWidth: '24px', textAlign: 'center', fontWeight: 600, fontSize: '0.86rem' }}>
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                        style={{ padding: '6px 12px', color: 'var(--maroon)' }}
                        aria-label="Increase quantity"
                        className="touch-target"
                      >
                        <FaPlus size={11} />
                      </button>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span
                        style={{
                          fontSize: '1.15rem',
                          fontWeight: 600,
                          color: 'var(--maroon)',
                          fontFamily: 'var(--font-body)'
                        }}
                      >
                        <span className="rupee">₹</span>{item.price * item.quantity}
                      </span>

                      <button
                        onClick={() => removeItem(item.cartItemId)}
                        style={{ color: 'var(--text-light)', padding: '6px' }}
                        aria-label={`Remove ${item.name}`}
                        className="touch-target"
                      >
                        <FaTrashAlt size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div
            style={{
              padding: '1.25rem 1.4rem',
              backgroundColor: 'var(--bg-subtle)',
              borderTop: '1px solid var(--border-gold)'
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'baseline',
                justifyContent: 'space-between',
                marginBottom: '0.85rem'
              }}
            >
              <span style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>
                Estimated Offerings Subtotal:
              </span>
              <span
                style={{
                  fontSize: '1.65rem',
                  fontWeight: 600,
                  color: 'var(--maroon)',
                  fontFamily: 'var(--font-body)'
                }}
              >
                <span className="rupee">₹</span>{totalAmount}
              </span>
            </div>

            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-sm)',
                padding: '8px 12px',
                border: '1px dashed var(--gold)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.78rem',
                color: 'var(--text-muted)',
                marginBottom: '1.25rem'
              }}
            >
              <FaShieldAlt size={16} color="var(--gold-dark)" style={{ flexShrink: 0 }} />
              <span>
                Delivery charges & final payment details will be confirmed directly on WhatsApp with parcel photos.
              </span>
            </div>

            <button
              onClick={openCheckout}
              className="btn-whatsapp"
              style={{ width: '100%', padding: '0.85rem', fontSize: '1rem', fontWeight: 600, minHeight: '44px' }}
            >
              <FaWhatsapp size={18} />
              <span>Place Order on WhatsApp</span>
              <FaArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
