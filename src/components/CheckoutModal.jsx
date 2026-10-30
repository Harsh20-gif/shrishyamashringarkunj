import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaTimes,
  FaCheckCircle,
  FaShieldAlt,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaUser,
  FaFileAlt,
  FaWhatsapp
} from 'react-icons/fa';
import confetti from 'canvas-confetti';
import { useCart } from '../context/CartContext';
import { buildWhatsAppCartOrderUrl, openWhatsApp } from '../utils/whatsapp';
import { BRAND } from '../config/brand';

export default function CheckoutModal() {
  const { isCheckoutOpen, closeCheckout, items, totalAmount, clearCart } = useCart();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    city: '',
    state: 'Uttar Pradesh',
    pincode: '',
    notes: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [generatedWaUrl, setGeneratedWaUrl] = useState('');

  const indianStates = [
    'Uttar Pradesh', 'Delhi NCR', 'Rajasthan', 'Madhya Pradesh', 'Maharashtra',
    'Gujarat', 'Haryana', 'Punjab', 'West Bengal', 'Bihar', 'Karnataka',
    'Tamil Nadu', 'Telangana', 'Andhra Pradesh', 'Kerala', 'Odisha',
    'Assam', 'Jharkhand', 'Uttarakhand', 'Himachal Pradesh', 'Chhattisgarh', 'Goa'
  ];

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please enter your full name';
    }
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length !== 10) {
      errs.phone = 'Please enter a valid 10-digit WhatsApp number';
    }
    if (!formData.address.trim()) {
      errs.address = 'Please enter delivery address';
    }
    if (!formData.city.trim()) {
      errs.city = 'Please enter city';
    }
    const cleanPin = formData.pincode.replace(/\D/g, '');
    if (!cleanPin || cleanPin.length !== 6) {
      errs.pincode = 'Please enter a valid 6-digit Pincode';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const waUrl = buildWhatsAppCartOrderUrl({
      items,
      customer: formData,
      customizationNote: formData.notes
    });

    setGeneratedWaUrl(waUrl);
    setIsSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#C8932E', '#5B1A18', '#DFB258', '#25D366']
      });
    } catch (e) {
      // safe fallback
    }

    openWhatsApp(waUrl);
    clearCart();
  };

  const handleModalClose = () => {
    setIsSubmitted(false);
    closeCheckout();
  };

  return (
    <AnimatePresence>
      {isCheckoutOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1050,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem'
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Delivery Details and Confirmation"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleModalClose}
            style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(56, 14, 13, 0.65)',
              backdropFilter: 'blur(6px)'
            }}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 320 }}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '500px',
              maxHeight: '92vh',
              backgroundColor: '#FBF6EC',
              borderRadius: 'var(--radius-lg)',
              border: '1.5px solid var(--gold)',
              boxShadow: 'var(--shadow-lg)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              zIndex: 1051
            }}
          >
            {/* Modal Header */}
            <div
              style={{
                background: 'linear-gradient(135deg, #5B1A18 0%, #3D0F0E 100%)',
                color: '#FBF6EC',
                padding: '1.15rem 1.4rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1.5px solid var(--gold)'
              }}
            >
              <div>
                <span
                  className="devanagari-text"
                  style={{ color: 'var(--gold-light)', fontSize: '0.78rem', display: 'block' }}
                >
                  🙏 श्री धाम वृन्दावन सेवा
                </span>
                <h3 style={{ color: '#FFFFFF', fontSize: '1.2rem', fontWeight: 600 }}>
                  {isSubmitted ? 'Order Transferred to WhatsApp' : 'Delivery Details & Confirmation'}
                </h3>
              </div>

              <button
                onClick={handleModalClose}
                style={{
                  color: '#FFFFFF',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(255, 255, 255, 0.12)'
                }}
                aria-label="Close dialog"
                className="touch-target"
              >
                <FaTimes size={16} />
              </button>
            </div>

            {/* Modal Body */}
            <div
              style={{
                padding: '1.25rem 1.4rem',
                overflowY: 'auto',
                flex: 1
              }}
            >
              {isSubmitted ? (
                /* Success Screen */
                <div style={{ textAlign: 'center', padding: '1rem 0' }}>
                  <div
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      background: 'rgba(37, 211, 102, 0.15)',
                      color: 'var(--whatsapp-green)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1rem',
                      border: '2px solid var(--whatsapp-green)'
                    }}
                  >
                    <FaCheckCircle size={34} />
                  </div>

                  <h3
                    className="devanagari-text"
                    style={{
                      fontSize: '1.3rem',
                      color: 'var(--maroon)',
                      marginBottom: '0.5rem'
                    }}
                  >
                    राधे राधे! Aapka order WhatsApp par bhej diya gaya hai 🙏
                  </h3>

                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.25rem' }}>
                    Aapka chat window khul gaya hoga. Kripya <strong>Send (भेजें)</strong> daba kar message bhej dein taaki Shri Hit Tulsi team aapka order confirm kar sake.
                  </p>

                  <div
                    style={{
                      backgroundColor: '#FFFFFF',
                      borderRadius: 'var(--radius-sm)',
                      padding: '0.95rem',
                      border: '1px solid var(--border-gold)',
                      marginBottom: '1.25rem',
                      textAlign: 'left',
                      fontSize: '0.84rem'
                    }}
                  >
                    <p style={{ color: 'var(--maroon)', fontWeight: 600, marginBottom: '4px' }}>
                      Next Steps:
                    </p>
                    <ul style={{ paddingLeft: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                      <li>WhatsApp message bhejte hi hum delivery charges calculate karenge.</li>
                      <li>UPI QR code share kiya jayega safe direct payment ke liye.</li>
                      <li>Dispatch ke samay packet photo aur tracking details share hogi.</li>
                    </ul>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <a
                      href={generatedWaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-whatsapp"
                      style={{ width: '100%', padding: '0.85rem' }}
                    >
                      <FaWhatsapp size={18} />
                      <span>Re-open WhatsApp Chat</span>
                    </a>

                    <button
                      onClick={handleModalClose}
                      className="btn-secondary"
                      style={{ width: '100%' }}
                    >
                      Back to Store
                    </button>
                  </div>
                </div>
              ) : (
                /* Delivery Address Form */
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                  <div
                    style={{
                      backgroundColor: 'var(--bg-subtle)',
                      padding: '8px 12px',
                      borderRadius: 'var(--radius-xs)',
                      border: '1px dashed var(--gold)',
                      fontSize: '0.82rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <span>
                      Total ({items.length} items): <strong>₹{totalAmount}</strong>
                    </span>
                    <span style={{ color: 'var(--gold-dark)', fontWeight: 600 }}>
                      No Online Payment Needed Now
                    </span>
                  </div>

                  {/* Name */}
                  <div>
                    <label
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '0.82rem',
                        fontWeight: 600,
                        color: 'var(--maroon)',
                        marginBottom: '4px'
                      }}
                    >
                      <FaUser size={13} />
                      <span>Your Full Name *</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Radhika Sharma"
                      style={{
                        width: '100%',
                        padding: '10px 12px',
                        minHeight: '44px',
                        borderRadius: 'var(--radius-xs)',
                        border: errors.name ? '1.5px solid #dc2626' : '1px solid var(--border-gold)',
                        backgroundColor: '#FFFFFF'
                      }}
                    />
                    {errors.name && (
                      <span style={{ color: '#dc2626', fontSize: '0.74rem', marginTop: '2px', display: 'block' }}>
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* WhatsApp Phone */}
                  <div>
                    <label
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '0.82rem',
                        fontWeight: 600,
                        color: 'var(--maroon)',
                        marginBottom: '4px'
                      }}
                    >
                      <FaPhoneAlt size={13} />
                      <span>WhatsApp Mobile Number (10 digits) *</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      maxLength={10}
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. 9876543210"
                      style={{
                        width: '100%',
                        padding: '10px 12px',
                        minHeight: '44px',
                        borderRadius: 'var(--radius-xs)',
                        border: errors.phone ? '1.5px solid #dc2626' : '1px solid var(--border-gold)',
                        backgroundColor: '#FFFFFF'
                      }}
                    />
                    {errors.phone && (
                      <span style={{ color: '#dc2626', fontSize: '0.74rem', marginTop: '2px', display: 'block' }}>
                        {errors.phone}
                      </span>
                    )}
                  </div>

                  {/* Delivery Address */}
                  <div>
                    <label
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '0.82rem',
                        fontWeight: 600,
                        color: 'var(--maroon)',
                        marginBottom: '4px'
                      }}
                    >
                      <FaMapMarkerAlt size={13} />
                      <span>Full Delivery Address (House / Street / Landmark) *</span>
                    </label>
                    <textarea
                      name="address"
                      rows={2}
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="e.g. Flat 302, Radha Kripa Niwas, Near Banke Bihari Marg"
                      style={{
                        width: '100%',
                        padding: '10px 12px',
                        borderRadius: 'var(--radius-xs)',
                        border: errors.address ? '1.5px solid #dc2626' : '1px solid var(--border-gold)',
                        backgroundColor: '#FFFFFF',
                        resize: 'none'
                      }}
                    />
                    {errors.address && (
                      <span style={{ color: '#dc2626', fontSize: '0.74rem', marginTop: '2px', display: 'block' }}>
                        {errors.address}
                      </span>
                    )}
                  </div>

                  {/* City, State & Pincode Grid */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                    <div>
                      <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--maroon)', display: 'block', marginBottom: '4px' }}>
                        City *
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="e.g. Mathura"
                        style={{
                          width: '100%',
                          padding: '10px 12px',
                          minHeight: '44px',
                          borderRadius: 'var(--radius-xs)',
                          border: errors.city ? '1.5px solid #dc2626' : '1px solid var(--border-gold)',
                          backgroundColor: '#FFFFFF'
                        }}
                      />
                      {errors.city && (
                        <span style={{ color: '#dc2626', fontSize: '0.74rem', marginTop: '2px', display: 'block' }}>
                          {errors.city}
                        </span>
                      )}
                    </div>

                    <div>
                      <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--maroon)', display: 'block', marginBottom: '4px' }}>
                        Pincode (6 digits) *
                      </label>
                      <input
                        type="text"
                        name="pincode"
                        maxLength={6}
                        value={formData.pincode}
                        onChange={handleChange}
                        placeholder="e.g. 281121"
                        style={{
                          width: '100%',
                          padding: '10px 12px',
                          minHeight: '44px',
                          borderRadius: 'var(--radius-xs)',
                          border: errors.pincode ? '1.5px solid #dc2626' : '1px solid var(--border-gold)',
                          backgroundColor: '#FFFFFF'
                        }}
                      />
                      {errors.pincode && (
                        <span style={{ color: '#dc2626', fontSize: '0.74rem', marginTop: '2px', display: 'block' }}>
                          {errors.pincode}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* State Selection */}
                  <div>
                    <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--maroon)', display: 'block', marginBottom: '4px' }}>
                      State *
                    </label>
                    <select
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '10px 12px',
                        minHeight: '44px',
                        borderRadius: 'var(--radius-xs)',
                        border: '1px solid var(--border-gold)',
                        backgroundColor: '#FFFFFF'
                      }}
                    >
                      {indianStates.map((st) => (
                        <option key={st} value={st}>
                          {st}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Optional Seva / Customization Note */}
                  <div>
                    <label
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '0.82rem',
                        fontWeight: 600,
                        color: 'var(--maroon)',
                        marginBottom: '4px'
                      }}
                    >
                      <FaFileAlt size={13} />
                      <span>Special Seva Note / Deity Measurement (Optional)</span>
                    </label>
                    <textarea
                      name="notes"
                      rows={2}
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="e.g. Poshak for Laddu Gopal Size 3 in yellow, please pack sacred Tulsi leaf inside."
                      style={{
                        width: '100%',
                        padding: '10px 12px',
                        borderRadius: 'var(--radius-xs)',
                        border: '1px solid var(--border-gold)',
                        backgroundColor: '#FFFFFF',
                        resize: 'none'
                      }}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="btn-whatsapp"
                    style={{
                      width: '100%',
                      padding: '0.85rem',
                      fontSize: '0.96rem',
                      fontWeight: 600,
                      marginTop: '0.35rem',
                      minHeight: '44px'
                    }}
                  >
                    <FaWhatsapp size={18} />
                    <span>Send Order to WhatsApp ({BRAND.whatsappDisplay})</span>
                  </button>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', color: 'var(--text-light)', fontSize: '0.72rem' }}>
                    <FaShieldAlt size={13} color="var(--gold)" />
                    <span>Your details are only used to prepare your sacred dispatch package.</span>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
