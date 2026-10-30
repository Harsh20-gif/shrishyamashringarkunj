import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaTrashAlt, FaPlus, FaMinus, FaShoppingBag, FaArrowRight, FaShieldAlt, FaWhatsapp } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const {
    isCartOpen,
    closeCart,
    items,
    totalItems,
    totalAmount,
    updateQuantity,
    removeItem,
    openCheckout
  } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            display: 'flex',
            justifyContent: 'flex-end'
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Shopping Cart"
        >
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeCart}
            style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(56, 14, 13, 0.5)',
              backdropFilter: 'blur(5px)',
              WebkitBackdropFilter: 'blur(5px)'
            }}
          />

          {/* Drawer Panel */}
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '420px',
              height: '100%',
              backgroundColor: '#FBF6EC',
              boxShadow: '-8px 0 35px rgba(91, 26, 24, 0.25)',
              borderLeft: '1.5px solid var(--border-gold)',
              display: 'flex',
              flexDirection: 'column',
              zIndex: 1001
            }}
            aria-label="Shopping Cart Drawer"
          >
            {/* Drawer Header */}
            <div
              style={{
                padding: '1.15rem 1.25rem',
                borderBottom: '1px solid var(--border-gold)',
                background: 'linear-gradient(135deg, #5B1A18 0%, #3D0F0E 100%)',
                color: '#FBF6EC',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <FaShoppingBag size={18} color="var(--gold)" />
                <div>
                  <h3
                    style={{
                      color: '#FFFFFF',
                      fontSize: '1.15rem',
                      fontWeight: 600,
                      lineHeight: 1
                    }}
                  >
                    Seva Cart ({totalItems})
                  </h3>
                  <span
                    className="devanagari-text"
                    style={{ fontSize: '0.72rem', color: 'var(--gold-light)' }}
                  >
                    श्री वृन्दावन सेवा सामग्री
                  </span>
                </div>
              </div>

              <button
                onClick={closeCart}
                style={{
                  color: '#FFFFFF',
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(255, 255, 255, 0.12)',
                  transition: 'background 0.2s'
                }}
                aria-label="Close cart drawer"
                className="touch-target"
              >
                <FaTimes size={16} />
              </button>
            </div>

            {/* Cart Items List or Empty State */}
            <div
              style={{
                flex: 1,
                overflowY: 'auto',
                padding: '1.25rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }}
            >
              {items.length === 0 ? (
                <div
                  style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    padding: '2rem 1rem',
                    color: 'var(--text-muted)'
                  }}
                >
                  <div
                    style={{
                      width: '68px',
                      height: '68px',
                      borderRadius: '50%',
                      background: 'var(--gold-soft)',
                      border: '1px dashed var(--gold)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--gold-dark)',
                      marginBottom: '1rem'
                    }}
                  >
                    <FaShoppingBag size={30} />
                  </div>
                  <h4 style={{ fontSize: '1.2rem', color: 'var(--maroon)', marginBottom: '0.35rem' }}>
                    Aapka Seva Thal Khali Hai
                  </h4>
                  <p
                    className="devanagari-text"
                    style={{ fontSize: '0.9rem', marginBottom: '1.25rem', color: 'var(--text-muted)' }}
                  >
                    वृन्दावन धाम से शुद्ध इत्र, तुलसी माला व शृंगार पोशाक जोड़ें।
                  </p>
                  <button
                    onClick={closeCart}
                    className="btn-primary"
                    style={{ padding: '0.75rem 1.5rem', fontSize: '0.9rem' }}
                  >
                    Browse Holy Offerings
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div
                    key={item.cartItemId}
                    style={{
                      display: 'flex',
                      gap: '12px',
                      padding: '12px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: '#FFFFFF',
                      border: '1px solid rgba(200, 147, 46, 0.25)',
                      boxShadow: 'var(--shadow-xs)'
                    }}
                  >
                    {/* Item Image */}
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{
                        width: '70px',
                        height: '70px',
                        borderRadius: 'var(--radius-xs)',
                        objectFit: 'cover',
                        backgroundColor: 'var(--bg-secondary)',
                        flexShrink: 0
                      }}
                    />

                    {/* Details */}
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minWidth: 0 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px' }}>
                        <div style={{ minWidth: 0 }}>
                          <h4
                            style={{
                              fontSize: '0.92rem',
                              fontWeight: 600,
                              color: 'var(--maroon)',
                              lineHeight: 1.25,
                              whiteSpace: 'nowrap',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis'
                            }}
                          >
                            {item.name}
                          </h4>
                          {item.selectedVariant && (
                            <span
                              style={{
                                fontSize: '0.74rem',
                                color: 'var(--gold-dark)',
                                fontWeight: 500,
                                display: 'block',
                                marginTop: '2px'
                              }}
                            >
                              Variant: {item.selectedVariant}
                            </span>
                          )}
                          {item.customNote && (
                            <span
                              style={{
                                fontSize: '0.72rem',
                                color: 'var(--teal)',
                                fontStyle: 'italic',
                                display: 'block',
                                marginTop: '2px',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap'
                              }}
                            >
                              Note: {item.customNote}
                            </span>
                          )}
                        </div>

                        {/* Remove item */}
                        <button
                          onClick={() => removeItem(item.cartItemId)}
                          style={{
                            color: 'var(--text-light)',
                            padding: '6px',
                            transition: 'color 0.2s'
                          }}
                          aria-label={`Remove ${item.name} from cart`}
                          className="touch-target"
                        >
                          <FaTrashAlt size={14} />
                        </button>
                      </div>

                      {/* Price & Quantity Controls */}
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          marginTop: '8px'
                        }}
                      >
                        <span
                          style={{
                            fontWeight: 600,
                            color: 'var(--maroon)',
                            fontFamily: 'var(--font-body)',
                            fontSize: '1rem'
                          }}
                        >
                          <span className="rupee">₹</span>{item.price * item.quantity}
                        </span>

                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            border: '1px solid var(--border-gold)',
                            borderRadius: 'var(--radius-full)',
                            backgroundColor: 'var(--bg-primary)'
                          }}
                        >
                          <button
                            onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                            style={{
                              padding: '6px 10px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: 'var(--maroon)'
                            }}
                            aria-label="Decrease quantity"
                            className="touch-target"
                          >
                            <FaMinus size={11} />
                          </button>
                          <span
                            style={{
                              fontSize: '0.84rem',
                              fontWeight: 600,
                              minWidth: '22px',
                              textAlign: 'center'
                            }}
                          >
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                            style={{
                              padding: '6px 10px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: 'var(--maroon)'
                            }}
                            aria-label="Increase quantity"
                            className="touch-target"
                          >
                            <FaPlus size={11} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Drawer Footer with Subtotal & WhatsApp Order trigger */}
            {items.length > 0 && (
              <div
                style={{
                  padding: '1.15rem 1.25rem',
                  backgroundColor: '#FFFFFF',
                  borderTop: '1px solid var(--border-gold)',
                  boxShadow: '0 -4px 18px rgba(91, 26, 24, 0.05)'
                }}
              >
                {/* Subtotal */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    justifyContent: 'space-between',
                    marginBottom: '0.4rem'
                  }}
                >
                  <span style={{ fontSize: '0.92rem', color: 'var(--text-muted)' }}>
                    Item Subtotal:
                  </span>
                  <span
                    style={{
                      fontSize: '1.4rem',
                      fontWeight: 600,
                      color: 'var(--maroon)',
                      fontFamily: 'var(--font-body)'
                    }}
                  >
                    <span className="rupee">₹</span>{totalAmount}
                  </span>
                </div>

                {/* Devotional Order Note */}
                <div
                  style={{
                    backgroundColor: 'var(--bg-subtle)',
                    padding: '8px 12px',
                    borderRadius: 'var(--radius-xs)',
                    border: '1px dashed var(--border-gold)',
                    fontSize: '0.74rem',
                    color: 'var(--text-muted)',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '8px',
                    marginBottom: '1rem',
                    lineHeight: 1.35
                  }}
                >
                  <FaShieldAlt size={15} color="var(--gold-dark)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>
                    <strong>Vrindavan Seva:</strong> Delivery charges & final payment details will be confirmed on WhatsApp with parcel photos.
                  </span>
                </div>

                {/* Primary WhatsApp Order Button */}
                <button
                  onClick={openCheckout}
                  className="btn-whatsapp"
                  style={{
                    width: '100%',
                    padding: '0.85rem',
                    fontSize: '0.96rem',
                    fontWeight: 600,
                    borderRadius: 'var(--radius-full)',
                    minHeight: '44px'
                  }}
                >
                  <FaWhatsapp size={18} />
                  <span>Place Order on WhatsApp</span>
                  <FaArrowRight size={14} />
                </button>
              </div>
            )}
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}
