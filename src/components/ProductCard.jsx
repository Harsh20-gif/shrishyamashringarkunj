import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaShoppingBag, FaCheck, FaStar, FaWhatsapp } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import { buildSingleProductBuyUrl, openWhatsApp } from '../utils/whatsapp';

export default function ProductCard({ product }) {
  const { addItem } = useCart();
  const { showToast } = useToast();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const defaultVariant = product.variants?.[0] || null;
  const price = defaultVariant ? defaultVariant.price : product.price;

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();

    addItem(product, defaultVariant, 1);
    setIsAdded(true);
    showToast(`Added "${product.name}" to your seva cart 🙏`);

    setTimeout(() => {
      setIsAdded(false);
    }, 1500);
  };

  const handleWhatsAppInstantBuy = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const url = buildSingleProductBuyUrl({
      product,
      selectedVariant: defaultVariant,
      quantity: 1
    });
    openWhatsApp(url);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.25 }}
      style={{
        backgroundColor: 'var(--bg-surface)',
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        border: '1.5px solid var(--border-card)',
        boxShadow: 'var(--shadow-sm)',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        width: '100%',
        minWidth: 0
      }}
    >
      {/* Top Image Container (Square 1:1) */}
      <Link
        to={`/product/${product.id}`}
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '1 / 1',
          overflow: 'hidden',
          backgroundColor: 'var(--bg-secondary)',
          display: 'block'
        }}
      >
        {/* Shimmer Skeleton Placeholder */}
        {!imageLoaded && (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(90deg, #F4EBD9 25%, #FAF2E3 50%, #F4EBD9 75%)',
              backgroundSize: '200% 100%',
              animation: 'cardShimmer 1.8s infinite'
            }}
          />
        )}

        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            opacity: imageLoaded ? 1 : 0
          }}
          className="product-card-img"
        />

        {/* Badge (Bestseller / Handcrafted etc) */}
        {product.badge && (
          <span
            className="badge-gold"
            style={{
              position: 'absolute',
              top: '8px',
              left: '8px',
              maxWidth: '75%',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              boxShadow: '0 2px 6px rgba(0,0,0,0.12)',
              fontSize: '0.65rem',
              padding: '2px 6px'
            }}
          >
            {product.badge}
          </span>
        )}

        {/* Star Rating Chip */}
        <div
          style={{
            position: 'absolute',
            bottom: '8px',
            right: '8px',
            background: 'rgba(255, 255, 255, 0.94)',
            backdropFilter: 'blur(4px)',
            padding: '2px 6px',
            borderRadius: 'var(--radius-full)',
            display: 'flex',
            alignItems: 'center',
            gap: '3px',
            fontSize: '0.7rem',
            fontWeight: 600,
            color: 'var(--maroon)'
          }}
        >
          <FaStar size={10} color="var(--gold)" />
          <span>{product.rating}</span>
        </div>

        {/* Quick WhatsApp icon button on top right of image */}
        <button
          onClick={handleWhatsAppInstantBuy}
          style={{
            position: 'absolute',
            top: '8px',
            right: '8px',
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            backgroundColor: 'rgba(37, 211, 102, 0.92)',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 6px rgba(0,0,0,0.18)',
            border: '1px solid rgba(255,255,255,0.6)'
          }}
          title="Buy instantly on WhatsApp"
          aria-label={`Buy ${product.name} on WhatsApp`}
        >
          <FaWhatsapp size={15} />
        </button>
      </Link>

      {/* Card Content Details */}
      <div
        style={{
          padding: '0.75rem',
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          justifyContent: 'space-between',
          minWidth: 0
        }}
      >
        <div style={{ minWidth: 0 }}>
          {/* Devanagari Secondary Name */}
          <span
            className="devanagari-text"
            style={{
              fontSize: '0.72rem',
              color: 'var(--gold-dark)',
              fontWeight: 600,
              display: 'block',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              marginBottom: '2px'
            }}
          >
            {product.hindiName}
          </span>

          {/* Product Title (Cormorant 600, min 16px, clamped to 2 lines) */}
          <Link to={`/product/${product.id}`} style={{ display: 'block' }}>
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1rem, 3.2vw, 1.12rem)',
                fontWeight: 600,
                color: 'var(--maroon)',
                lineHeight: 1.25,
                marginBottom: '0.35rem',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                textWrap: 'balance'
              }}
            >
              {product.name}
            </h3>
          </Link>

          {/* Variant Snippet (Never breaks layout) */}
          {product.variants && (
            <p
              style={{
                fontSize: '0.72rem',
                color: 'var(--text-light)',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                marginBottom: '0.45rem'
              }}
            >
              {product.variants.map((v) => v.name).join(' · ')}
            </p>
          )}
        </div>

        {/* Price & Full Width Add Button */}
        <div style={{ marginTop: '0.35rem' }}>
          {/* Price Row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: '6px',
              marginBottom: '0.6rem',
              flexWrap: 'wrap'
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.15rem',
                fontWeight: 600,
                color: 'var(--maroon)'
              }}
            >
              <span className="rupee">₹</span>
              {price}
            </span>

            {product.originalPrice && (
              <span
                style={{
                  fontSize: '0.8rem',
                  color: 'var(--text-light)',
                  textDecoration: 'line-through'
                }}
              >
                ₹{product.originalPrice}
              </span>
            )}
          </div>

          {/* Full-width Compact Add Button (min-height 44px) */}
          <button
            onClick={handleAddToCart}
            style={{
              width: '100%',
              minHeight: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              padding: '0.6rem 0.85rem',
              borderRadius: 'var(--radius-full)',
              backgroundColor: isAdded ? '#15803d' : 'var(--maroon)',
              color: '#FFFFFF',
              fontSize: '0.88rem',
              fontWeight: 600,
              letterSpacing: '0.02em',
              transition: 'all 0.22s ease',
              border: '1px solid rgba(200, 147, 46, 0.35)',
              boxShadow: isAdded
                ? '0 2px 8px rgba(21, 128, 61, 0.3)'
                : '0 2px 8px rgba(91, 26, 24, 0.2)'
            }}
            aria-label={`Add ${product.name} to seva cart`}
          >
            {isAdded ? (
              <>
                <FaCheck size={14} />
                <span>Added 🙏</span>
              </>
            ) : (
              <>
                <FaShoppingBag size={14} />
                <span>Add</span>
              </>
            )}
          </button>
        </div>
      </div>

      <style>{`
        .product-card-img:hover {
          transform: scale(1.05);
        }
        @keyframes cardShimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </motion.article>
  );
}
