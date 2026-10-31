import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaStar,
  FaArrowRight,
  FaShieldAlt,
  FaTruck,
  FaHeart,
  FaWhatsapp,
  FaInstagram,
  FaChevronRight,
  FaChevronLeft
} from 'react-icons/fa';
import HeroPetals from '../components/HeroPetals';
import SectionHeading from '../components/SectionHeading';
import ProductCard from '../components/ProductCard';
import { CATEGORIES, getFeaturedProducts, PRODUCTS } from '../data/products';
import { BRAND } from '../config/brand';
import { buildGeneralInquiryUrl } from '../utils/whatsapp';

export default function Home() {
  const featuredProducts = getFeaturedProducts();
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Radhika K.",
      city: "Delhi NCR",
      rating: 5,
      comment: "Chandan attar ki khushboo bilkul Banke Bihari ji ke garbh-griha jaisi hai! Aur packaging itni pavitra thi ki kholte hi man prasanna ho gaya. Radhe Radhe!",
      product: "Shri Vrindavan Chandan Attar"
    },
    {
      id: 2,
      name: "Gaurav & Sneha Sharma",
      city: "Jaipur, Rajasthan",
      rating: 5,
      comment: "Hamare Laddu Gopal ji (Size 3) ke liye bespoke zardozi poshak order ki thi WhatsApp par. Tailor master ne photo dekh kar bilkul perfect naap banaya. Highly recommended!",
      product: "Royal Zardozi Laddu Gopal Poshak"
    },
    {
      id: 3,
      name: "Meenakshi Iyer",
      city: "Bangalore",
      rating: 5,
      comment: "Natural Tulsi dhoop sticks bina kisi harmful dhuen ke itni divine sugandh deti hain. Subah puja ke baad pura ghar mandir jaisa mehakta hai.",
      product: "Pure Vrindavan Tulsi Dhoop Sticks"
    },
    {
      id: 4,
      name: "Pooja Singhal",
      city: "Lucknow",
      rating: 5,
      comment: "WhatsApp par order karna bahut aasaan raha. Unhone pehle packing ki video bheji, fir courier dispatch kiya. Vrindavan ki kripa hamare ghar tak aayi.",
      product: "Nitya Thakurji Daily Seva Kit"
    }
  ];

  const trustPillars = [
    {
      icon: <FaStar size={18} color="var(--gold-dark)" />,
      title: "Authentic from Vrindavan",
      desc: "Sanctified near sacred Yamuna & Loi Bazaar"
    },
    {
      icon: <FaTruck size={18} color="var(--gold-dark)" />,
      title: "Pan-India Secure Delivery",
      desc: "Carefully wrapped with holy prasadi care"
    },
    {
      icon: <FaHeart size={18} color="var(--gold-dark)" />,
      title: "Handcrafted with Devotion",
      desc: "Made by traditional Brijwasi artisans"
    },
    {
      icon: <FaWhatsapp size={19} color="var(--whatsapp-green)" />,
      title: "Easy WhatsApp Ordering",
      desc: "Personal attention & photo verification"
    }
  ];

  const steps = [
    {
      step: "01",
      title: "Select Sacred Offerings",
      desc: "Choose from authentic pure attars, natural tulsi malas, deity poshaks or curated seva kits.",
      badge: "Easy Selection"
    },
    {
      step: "02",
      title: "Add Delivery Details",
      desc: "Provide your delivery address and any special sizing or deity requests.",
      badge: "No Gateway Hassle"
    },
    {
      step: "03",
      title: "WhatsApp Confirmation",
      desc: "Order transfers directly to our Vrindavan WhatsApp number for personal care & instant support.",
      badge: "Direct Brijwasi Chat"
    },
    {
      step: "04",
      title: "Delivered to Doorstep",
      desc: "Sanctified products are securely packaged and delivered to your home across India.",
      badge: "Blessed Delivery"
    }
  ];

  return (
    <div className="home-page mobile-safe-bottom">
      {/* ================= HERO SECTION ================= */}
      <section
        style={{
          position: 'relative',
          minHeight: 'calc(88vh - var(--header-height))',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(180deg, #FBF6EC 0%, #F5ECE0 60%, #EFE1CF 100%)',
          overflow: 'hidden',
          paddingTop: '2.5rem',
          paddingBottom: '3.5rem'
        }}
      >
        <HeroPetals />

        {/* Sacred Subtle Mandala SVG background watermark */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 'min(750px, 120vw)',
            height: 'min(750px, 120vw)',
            opacity: 0.05,
            pointerEvents: 'none',
            zIndex: 0
          }}
        >
          <svg viewBox="0 0 100 100" width="100%" height="100%">
            <circle cx="50" cy="50" r="48" fill="none" stroke="#5B1A18" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="38" fill="none" stroke="#C8932E" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="28" fill="none" stroke="#5B1A18" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="18" fill="none" stroke="#C8932E" strokeWidth="0.5" />
            {[...Array(12)].map((_, i) => (
              <line
                key={i}
                x1="50"
                y1="2"
                x2="50"
                y2="98"
                stroke="#5B1A18"
                strokeWidth="0.3"
                transform={`rotate(${i * 15} 50 50)`}
              />
            ))}
          </svg>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          {/* Eyebrow Label */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'rgba(200, 147, 46, 0.12)',
              border: '1px solid var(--border-gold)',
              marginBottom: '1rem',
              boxShadow: 'var(--shadow-xs)'
            }}
          >
            <span className="devanagari-text" style={{ color: 'var(--maroon)', fontWeight: 600, fontSize: '0.84rem' }}>
              ॥ श्री राधा कृपा कटाक्ष ॥
            </span>
            <span style={{ color: 'var(--gold-dark)', fontSize: '0.74rem', fontWeight: 600 }}>
              • Direct from Vrindavan Dham
            </span>
          </motion.div>

          {/* Main Headline (Fluid clamp, line-height 1.1, balance) */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontSize: 'var(--fs-hero)',
              color: 'var(--maroon)',
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.01em',
              maxWidth: '820px',
              margin: '0 auto 1.15rem',
              textWrap: 'balance'
            }}
          >
            Bhakti ki Khushboo, <br />
            <span
              style={{
                background: 'var(--gold-gradient)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block'
              }}
            >
              Vrindavan se Aapke Ghar Tak
            </span>
          </motion.h1>

          {/* Subline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: 'clamp(0.95rem, 2.2vw, 1.15rem)',
              color: 'var(--text-muted)',
              maxWidth: '620px',
              margin: '0 auto 1.85rem',
              lineHeight: 1.65,
              textWrap: 'pretty'
            }}
          >
            Authentic pure Vrindavan attars, sacred tulsi malas & sticks, complete divine bhakti kits, and bespoke deity poshaks handcrafted for Radha bhakts.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px'
            }}
          >
            <Link to="/shop" className="btn-primary" style={{ minWidth: '160px' }}>
              <span>Shop Offerings</span>
              <FaArrowRight size={14} />
            </Link>

            <a
              href={buildGeneralInquiryUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{ minWidth: '160px' }}
            >
              <FaWhatsapp size={17} />
              <span>Order on WhatsApp</span>
            </a>
          </motion.div>

          {/* Micro trust note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            style={{
              marginTop: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '14px',
              fontSize: '0.8rem',
              color: 'var(--text-light)',
              flexWrap: 'wrap'
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <FaShieldAlt size={13} color="var(--gold-dark)" />
              100% Satvik & Alcohol-Free
            </span>
            <span>•</span>
            <span>Over 2,500+ Happy Radha Bhakts</span>
          </motion.div>
        </div>
      </section>

      {/* ================= TRUST STRIP ================= */}
      <section
        style={{
          backgroundColor: '#FFFFFF',
          borderTop: '1px solid var(--border-gold)',
          borderBottom: '1px solid var(--border-gold)',
          padding: '1.25rem 0',
          boxShadow: 'var(--shadow-xs)'
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
              gap: '10px'
            }}
            className="trust-pillars-grid"
          >
            {trustPillars.map((pillar, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '8px 10px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--bg-subtle)',
                  border: '1px solid rgba(200, 147, 46, 0.15)',
                  minWidth: 0
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 2px 4px rgba(91, 26, 24, 0.05)',
                    flexShrink: 0
                  }}
                >
                  {pillar.icon}
                </div>
                <div style={{ minWidth: 0 }}>
                  <h4
                    style={{
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      color: 'var(--maroon)',
                      lineHeight: 1.2,
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis'
                    }}
                  >
                    {pillar.title}
                  </h4>
                  <p
                    style={{
                      fontSize: '0.7rem',
                      color: 'var(--text-light)',
                      marginTop: '1px',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis'
                    }}
                  >
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @media (min-width: 768px) {
            .trust-pillars-grid {
              grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
              gap: 1.25rem !important;
            }
          }
        `}</style>
      </section>

      {/* ================= CATEGORIES SECTION (2 columns on mobile, no oversized cards) ================= */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container">
          <SectionHeading
            sanskrit="॥ चार प्रमुख सेवाएं ॥"
            title="Divine Offerings by Category"
            subtitle="Explore sanctified treasures direct from the sacred lanes of Vrindavan Dham."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
              gap: '12px'
            }}
            className="home-category-grid"
          >
            {CATEGORIES.filter((c) => c.id !== 'all').map((cat) => (
              <Link
                key={cat.id}
                to={`/shop?category=${cat.id}`}
                style={{
                  position: 'relative',
                  height: '175px',
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  border: '1.5px solid var(--border-card)',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '1rem',
                  textDecoration: 'none'
                }}
              >
                {/* Background Image with Dark Vignette */}
                <img
                  src={cat.image}
                  alt={cat.label}
                  loading="lazy"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease',
                    zIndex: 0
                  }}
                  className="cat-bg-img"
                />

                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(56, 14, 13, 0.15) 0%, rgba(56, 14, 13, 0.85) 100%)',
                    zIndex: 1
                  }}
                />

                {/* Content Overlay */}
                <div style={{ position: 'relative', zIndex: 2, color: '#FFFFFF' }}>
                  <span
                    className="devanagari-text"
                    style={{
                      fontSize: '0.72rem',
                      color: 'var(--gold-light)',
                      fontWeight: 600,
                      display: 'block',
                      marginBottom: '2px'
                    }}
                  >
                    {cat.hindi}
                  </span>

                  <h3
                    style={{
                      fontSize: 'clamp(1rem, 3.5vw, 1.25rem)',
                      color: '#FFFFFF',
                      fontWeight: 600,
                      marginBottom: '0.2rem',
                      lineHeight: 1.2
                    }}
                  >
                    {cat.label}
                  </h3>

                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: 'var(--gold-light)'
                    }}
                  >
                    <span>View</span>
                    <FaChevronRight size={10} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <style>{`
          .cat-bg-img:hover {
            transform: scale(1.08);
          }
          @media (min-width: 800px) {
            .home-category-grid {
              grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
              gap: 1.25rem !important;
            }
            .home-category-grid > a {
              height: 240px !important;
            }
          }
        `}</style>
      </section>

      {/* ================= FEATURED PRODUCTS GRID (2 columns on mobile) ================= */}
      <section
        style={{
          padding: '3rem 0',
          backgroundColor: 'var(--bg-secondary)',
          borderTop: '1px solid var(--border-gold)',
          borderBottom: '1px solid var(--border-gold)'
        }}
      >
        <div className="container">
          <SectionHeading
            sanskrit="॥ सर्वाधिक प्रिय सेवाएं ॥"
            title="Handcrafted Bestsellers"
            subtitle="Devotional treasures most loved by devotees for their home temples and personal japa."
          />

          {/* 2 cards per row on mobile, 3 at >=768px, 4 at >=1100px */}
          <div className="products-grid">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/shop" className="btn-secondary" style={{ padding: '0.85rem 2rem' }}>
              <span>View All Offerings ({PRODUCTS.length})</span>
              <FaArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= OUR STORY SECTION ================= */}
      <section id="story" style={{ padding: '3.5rem 0', position: 'relative' }}>
        <div className="container">
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-lg)',
              border: '1.5px solid var(--gold)',
              boxShadow: 'var(--shadow-md)',
              overflow: 'hidden',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
            }}
          >
            {/* Story Visual */}
            <div style={{ position: 'relative', minHeight: '300px' }}>
              <img
                src="https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=900&q=80"
                alt="Vrindavan Temple Seva"
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, transparent 40%, rgba(56, 14, 13, 0.75) 100%)'
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '1.25rem',
                  left: '1.25rem',
                  right: '1.25rem',
                  color: '#FFFFFF'
                }}
              >
                <span className="devanagari-text" style={{ fontSize: '1.15rem', color: 'var(--gold-light)' }}>
                  ॥ ब्रज धाम सेवा संकल्प ॥
                </span>
                <p style={{ fontSize: '0.8rem', color: '#FBF6EC', opacity: 0.9 }}>
                  Blessed in the holy land of Banke Bihari Ji, Radha Raman Ji & Radha Vallabh Ji.
                </p>
              </div>
            </div>

            {/* Story Narrative */}
            <div
              style={{
                padding: 'clamp(1.5rem, 4vw, 2.75rem)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
            >
              <span className="eyebrow devanagari-text" style={{ marginBottom: '0.4rem' }}>
                OUR VRINDAVAN HERITAGE
              </span>

              <h2
                style={{
                  fontSize: 'var(--fs-h2)',
                  color: 'var(--maroon)',
                  marginBottom: '0.85rem',
                  lineHeight: 1.22
                }}
              >
                Braj Bhoomi se Prem ki Bhent
              </h2>

              <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', lineHeight: 1.65, marginBottom: '1rem' }}>
                Shri Hit Tulsi began not as a commercial store, but as a humble seva in the holy alleys of Vrindavan Dham. Deeply devoted to Shri Radha Rani, our family spent years discovering traditional perfumers (Gandhis) in Braj who still distill pure, alcohol-free sandalwood, rose, and tulsi attars in copper stills without any harmful chemicals.
              </p>

              <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', lineHeight: 1.65, marginBottom: '1.4rem' }}>
                Whether it is a hand-carved 108 beads Tulsi Japa Mala touched to Thakurji's lotus feet, or a bespoke zardozi poshak tailored to your deity idol's exact inches — each offering carries the sacred aura, grace, and prayers of Vrindavan Dham straight to your home temple.
              </p>

              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <a
                  href={BRAND.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ padding: '0.75rem 1.4rem', fontSize: '0.88rem' }}
                >
                  <FaInstagram size={16} />
                  <span>Our Story on Instagram</span>
                </a>

                <a
                  href={buildGeneralInquiryUrl("Custom Seva")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ padding: '0.75rem 1.4rem', fontSize: '0.88rem' }}
                >
                  <span>Chat with Us 🙏</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HOW TO ORDER (4 Steps) ================= */}
      <section
        id="how-to-order"
        style={{
          padding: '3.5rem 0',
          backgroundColor: '#FFFFFF',
          borderTop: '1px solid var(--border-gold)',
          borderBottom: '1px solid var(--border-gold)'
        }}
      >
        <div className="container">
          <SectionHeading
            sanskrit="॥ सरल सेवा प्रक्रिया ॥"
            title="How to Order in 4 Simple Steps"
            subtitle="Transparent, warm, and personal ordering designed for Radha bhakts across India."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.25rem'
            }}
          >
            {steps.map((st, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: 'var(--bg-primary)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.25rem',
                  border: '1px solid var(--border-card)',
                  boxShadow: 'var(--shadow-xs)',
                  position: 'relative'
                }}
              >
                <span
                  style={{
                    fontSize: '2.2rem',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    color: 'rgba(200, 147, 46, 0.45)',
                    display: 'block',
                    lineHeight: 1,
                    marginBottom: '0.65rem'
                  }}
                >
                  {st.step}
                </span>

                <span
                  className="badge-teal"
                  style={{ fontSize: '0.68rem', padding: '2px 8px', marginBottom: '0.55rem' }}
                >
                  {st.badge}
                </span>

                <h3
                  style={{
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    color: 'var(--maroon)',
                    marginBottom: '0.45rem',
                    lineHeight: 1.25
                  }}
                >
                  {st.title}
                </h3>

                <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DEVOTEES TESTIMONIALS ================= */}
      <section style={{ padding: '3.5rem 0' }}>
        <div className="container">
          <SectionHeading
            sanskrit="॥ भक्तों का अनुभव ॥"
            title="Devotee Love & Blessings"
            subtitle="Hear what devotees across India have shared about their experience with Shri Hit Tulsi."
          />

          <div
            style={{
              maxWidth: '720px',
              margin: '0 auto',
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-lg)',
              border: '1.5px solid var(--gold)',
              padding: 'clamp(1.25rem, 4vw, 2.25rem)',
              boxShadow: 'var(--shadow-md)',
              position: 'relative'
            }}
          >
            {/* Stars */}
            <div style={{ display: 'flex', gap: '4px', marginBottom: '0.85rem', color: 'var(--gold)' }}>
              {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                <FaStar key={i} size={16} color="var(--gold)" />
              ))}
            </div>

            {/* Quote */}
            <blockquote
              style={{
                fontSize: 'clamp(0.96rem, 2.4vw, 1.2rem)',
                fontFamily: 'var(--font-heading)',
                color: 'var(--maroon)',
                lineHeight: 1.5,
                fontStyle: 'italic',
                marginBottom: '1.25rem'
              }}
            >
              “{testimonials[activeTestimonial].comment}”
            </blockquote>

            {/* Author details */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderTop: '1px solid var(--border-gold)',
                paddingTop: '0.85rem'
              }}
            >
              <div>
                <strong style={{ color: 'var(--maroon)', fontSize: '0.92rem', display: 'block' }}>
                  {testimonials[activeTestimonial].name}
                </strong>
                <span style={{ fontSize: '0.76rem', color: 'var(--text-light)' }}>
                  {testimonials[activeTestimonial].city} · {testimonials[activeTestimonial].product}
                </span>
              </div>

              {/* Prev / Next controls */}
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  onClick={() =>
                    setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
                  }
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    border: '1px solid var(--border-gold)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--maroon)',
                    backgroundColor: 'var(--bg-primary)'
                  }}
                  aria-label="Previous testimonial"
                  className="touch-target"
                >
                  <FaChevronLeft size={14} />
                </button>
                <button
                  onClick={() =>
                    setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
                  }
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    border: '1px solid var(--border-gold)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--maroon)',
                    backgroundColor: 'var(--bg-primary)'
                  }}
                  aria-label="Next testimonial"
                  className="touch-target"
                >
                  <FaChevronRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INSTAGRAM COMMUNITY SECTION ================= */}
      <section
        style={{
          padding: '3rem 0',
          backgroundColor: '#F5ECE0',
          borderTop: '1px solid var(--border-gold)',
          borderBottom: '1px solid var(--border-gold)',
          textAlign: 'center'
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: '#d62976',
              fontSize: '0.82rem',
              fontWeight: 600,
              marginBottom: '0.4rem'
            }}
          >
            <FaInstagram size={17} />
            <span>{BRAND.instagramHandle} on Instagram</span>
          </div>

          <h2
            style={{
              fontSize: 'var(--fs-h2)',
              color: 'var(--maroon)',
              marginBottom: '0.5rem'
            }}
          >
            Join Our Sacred Devotional Family
          </h2>

          <p style={{ maxWidth: '560px', margin: '0 auto 1.75rem', color: 'var(--text-muted)', fontSize: '0.94rem' }}>
            Watch daily darshan reels, customer unboxings, new poshak designs, and direct updates from Vrindavan Dham.
          </p>

          <a
            href={BRAND.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{
              background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
              border: 'none',
              boxShadow: '0 4px 16px rgba(220, 39, 67, 0.32)'
            }}
          >
            <FaInstagram size={17} />
            <span>Follow {BRAND.instagramHandle} on Instagram</span>
          </a>
        </div>
      </section>
    </div>
  );
}
