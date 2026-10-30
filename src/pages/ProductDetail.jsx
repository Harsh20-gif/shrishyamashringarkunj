import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  FaShoppingBag,
  FaWhatsapp,
  FaStar,
  FaCheck,
  FaShieldAlt,
  FaTruck,
  FaChevronLeft,
  FaChevronRight,
  FaPlus,
  FaMinus
} from 'react-icons/fa';
import { getProductById, getProductsByCategory } from '../data/products';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import { buildSingleProductBuyUrl, openWhatsApp } from '../utils/whatsapp';
import ProductCard from '../components/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);
  const { addItem } = useCart();
  const { showToast } = useToast();

  if (!product) {
    return (
      <div className="container" style={{ textAlign: 'center', padding: '5rem 1rem' }}>
        <h2 style={{ color: 'var(--maroon)', marginBottom: '0.75rem' }}>Offering Not Found</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
          This sacred item might have been moved or updated.
        </p>
        <Link to="/shop" className="btn-primary">
          Back to Store
        </Link>
      </div>
    );
  }

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product.variants?.[0] || null);
  const [quantity, setQuantity] = useState(1);
  const [customNote, setCustomNote] = useState('');
  const [isAdded, setIsAdded] = useState(false);

  const currentPrice = selectedVariant ? selectedVariant.price : product.price;
  const totalPrice = currentPrice * quantity;

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity, customNote);
    setIsAdded(true);
    showToast(`Added ${quantity} × ${product.name} to your seva cart 🙏`);

    setTimeout(() => {
      setIsAdded(false);
    }, 1500);
  };

  const handleBuyNowWhatsApp = () => {
    const url = buildSingleProductBuyUrl({
      product,
      selectedVariant,
      quantity,
      customizationNote: customNote
    });
    openWhatsApp(url);
  };

  const relatedProducts = getProductsByCategory(product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="product-detail-page mobile-safe-bottom" style={{ padding: '1.25rem 0 3.5rem' }}>
      <div className="container">
        {/* Breadcrumb Navigation */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.8rem',
            color: 'var(--text-muted)',
            marginBottom: '1.25rem'
          }}
          aria-label="Breadcrumb"
        >
          <Link to="/" style={{ color: 'var(--text-muted)' }}>
            Home
          </Link>
          <span>/</span>
          <Link to={`/shop?category=${product.category}`} style={{ color: 'var(--text-muted)' }}>
            {product.category.replace('-', ' ').toUpperCase()}
          </Link>
          <span>/</span>
          <span style={{ color: 'var(--maroon)', fontWeight: 600 }}>{product.name}</span>
        </nav>

        {/* Product Layout Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem'
          }}
        >
          {/* ================= LEFT: Image Gallery ================= */}
          <div>
            <div
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                backgroundColor: 'var(--bg-secondary)',
                border: '1.5px solid var(--border-gold)',
                boxShadow: 'var(--shadow-sm)',
                aspectRatio: '1 / 1',
                marginBottom: '0.85rem'
              }}
            >
              <img
                src={product.images[activeImageIndex]}
                alt={`${product.name} view ${activeImageIndex + 1}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />

              {product.badge && (
                <span
                  className="badge-gold"
                  style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.12)'
                  }}
                >
                  {product.badge}
                </span>
              )}

              {/* Prev/Next arrows on main image */}
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      setActiveImageIndex((prev) =>
                        prev === 0 ? product.images.length - 1 : prev - 1
                      )
                    }
                    style={{
                      position: 'absolute',
                      left: '10px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--maroon)',
                      boxShadow: 'var(--shadow-xs)'
                    }}
                    aria-label="Previous image"
                    className="touch-target"
                  >
                    <FaChevronLeft size={16} />
                  </button>
                  <button
                    onClick={() =>
                      setActiveImageIndex((prev) =>
                        prev === product.images.length - 1 ? 0 : prev + 1
                      )
                    }
                    style={{
                      position: 'absolute',
                      right: '10px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--maroon)',
                      boxShadow: 'var(--shadow-xs)'
                    }}
                    aria-label="Next image"
                    className="touch-target"
                  >
                    <FaChevronRight size={16} />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail Row */}
            {product.images.length > 1 && (
              <div style={{ display: 'flex', gap: '8px' }}>
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    style={{
                      width: '68px',
                      height: '68px',
                      borderRadius: 'var(--radius-sm)',
                      overflow: 'hidden',
                      border:
                        activeImageIndex === idx
                          ? '2px solid var(--maroon)'
                          : '1px solid var(--border-gold)',
                      opacity: activeImageIndex === idx ? 1 : 0.65,
                      transition: 'all 0.2s',
                      backgroundColor: 'var(--bg-secondary)',
                      padding: 0
                    }}
                    aria-label={`Select view ${idx + 1}`}
                    className="touch-target"
                  >
                    <img
                      src={img}
                      alt=""
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ================= RIGHT: Product Details & Controls ================= */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {/* Devanagari Sacred Title */}
            <span
              className="devanagari-text"
              style={{
                fontSize: '0.92rem',
                color: 'var(--gold-dark)',
                fontWeight: 600,
                marginBottom: '3px'
              }}
            >
              {product.hindiName}
            </span>

            {/* Product Title */}
            <h1
              style={{
                fontSize: 'var(--fs-h1)',
                color: 'var(--maroon)',
                lineHeight: 1.2,
                marginBottom: '0.65rem',
                textWrap: 'balance'
              }}
            >
              {product.name}
            </h1>

            {/* Rating & Reviews */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '1rem',
                fontSize: '0.84rem'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  backgroundColor: 'rgba(200, 147, 46, 0.15)',
                  padding: '3px 8px',
                  borderRadius: 'var(--radius-full)',
                  color: 'var(--gold-dark)',
                  fontWeight: 600
                }}
              >
                <FaStar size={12} color="var(--gold)" />
                <span>{product.rating}</span>
              </div>
              <span style={{ color: 'var(--text-muted)' }}>
                ({product.reviewCount} Vrindavan Devotee Reviews)
              </span>
            </div>

            {/* Price Box */}
            <div
              style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: '10px',
                marginBottom: '1rem',
                paddingBottom: '1rem',
                borderBottom: '1px solid var(--border-gold)'
              }}
            >
              <span
                style={{
                  fontSize: '1.85rem',
                  fontWeight: 600,
                  color: 'var(--maroon)',
                  fontFamily: 'var(--font-body)'
                }}
              >
                <span className="rupee">₹</span>{currentPrice}
              </span>

              {product.originalPrice && (
                <span
                  style={{
                    fontSize: '1rem',
                    color: 'var(--text-light)',
                    textDecoration: 'line-through'
                  }}
                >
                  ₹{product.originalPrice}
                </span>
              )}

              {product.originalPrice && (
                <span
                  style={{
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    color: '#15803d',
                    backgroundColor: 'rgba(21, 128, 61, 0.08)',
                    padding: '2px 8px',
                    borderRadius: '4px'
                  }}
                >
                  Save ₹{product.originalPrice - currentPrice}
                </span>
              )}
            </div>

            {/* Short Description */}
            <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', lineHeight: 1.65, marginBottom: '1.25rem' }}>
              {product.shortDesc}
            </p>

            {/* Variant Picker (Sizes / ML) */}
            {product.variants && product.variants.length > 0 && (
              <div style={{ marginBottom: '1.25rem' }}>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.84rem',
                    fontWeight: 600,
                    color: 'var(--maroon)',
                    marginBottom: '6px'
                  }}
                >
                  Choose Size / Variant:
                </label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {product.variants.map((v) => {
                    const isSelected = selectedVariant?.name === v.name;
                    return (
                      <button
                        key={v.name}
                        onClick={() => setSelectedVariant(v)}
                        style={{
                          padding: '8px 14px',
                          minHeight: '44px',
                          borderRadius: 'var(--radius-full)',
                          fontSize: '0.86rem',
                          fontWeight: isSelected ? 600 : 500,
                          backgroundColor: isSelected ? 'var(--maroon)' : '#FFFFFF',
                          color: isSelected ? '#FFFFFF' : 'var(--text-main)',
                          border: isSelected ? '1px solid var(--gold)' : '1px solid var(--border-gold)',
                          boxShadow: isSelected ? '0 2px 8px rgba(91, 26, 24, 0.2)' : 'var(--shadow-xs)',
                          transition: 'all 0.2s'
                        }}
                        className="touch-target"
                      >
                        {v.name} — ₹{v.price}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Customization Note Textarea */}
            <div style={{ marginBottom: '1.25rem' }}>
              <label
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  color: 'var(--maroon)',
                  marginBottom: '6px'
                }}
              >
                <span>
                  {product.category === 'poshak'
                    ? 'Deity Customization Note (Idol height, color, special requests):'
                    : 'Personal Devotional Note / Instructions (Optional):'}
                </span>
              </label>
              <textarea
                value={customNote}
                onChange={(e) => setCustomNote(e.target.value)}
                rows={2}
                placeholder={
                  product.category === 'poshak'
                    ? 'e.g. Size 3 Laddu Gopal in Kesari/Yellow color, please add extra velvet border.'
                    : 'e.g. Please sanctify with extra Yamuna jal before dispatching.'
                }
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-gold)',
                  backgroundColor: '#FFFFFF',
                  fontSize: '0.88rem',
                  resize: 'none'
                }}
              />
            </div>

            {/* Quantity Selector & Action Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '1.5rem' }}>
              {/* Qty row */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <span style={{ fontSize: '0.86rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                  Quantity:
                </span>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    border: '1.5px solid var(--border-gold)',
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: '#FFFFFF'
                  }}
                >
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    style={{
                      padding: '8px 14px',
                      color: 'var(--maroon)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                    aria-label="Decrease quantity"
                    className="touch-target"
                  >
                    <FaMinus size={11} />
                  </button>
                  <span
                    style={{
                      minWidth: '28px',
                      textAlign: 'center',
                      fontWeight: 600,
                      color: 'var(--maroon)',
                      fontSize: '0.92rem'
                    }}
                  >
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    style={{
                      padding: '8px 14px',
                      color: 'var(--maroon)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                    aria-label="Increase quantity"
                    className="touch-target"
                  >
                    <FaPlus size={11} />
                  </button>
                </div>

                <span style={{ fontSize: '0.86rem', color: 'var(--text-light)' }}>
                  Total: <strong><span className="rupee">₹</span>{totalPrice}</strong>
                </span>
              </div>

              {/* Action Buttons: Add to Cart + WhatsApp Buy Now */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '0.35rem' }}>
                <button
                  onClick={handleAddToCart}
                  className="btn-primary"
                  style={{
                    flex: '1 1 180px',
                    padding: '0.85rem 1.4rem',
                    backgroundColor: isAdded ? '#15803d' : 'var(--maroon)',
                    minHeight: '44px'
                  }}
                >
                  {isAdded ? (
                    <>
                      <FaCheck size={16} />
                      <span>Added to Seva Cart 🙏</span>
                    </>
                  ) : (
                    <>
                      <FaShoppingBag size={16} />
                      <span>Add to Seva Cart</span>
                    </>
                  )}
                </button>

                <button
                  onClick={handleBuyNowWhatsApp}
                  className="btn-whatsapp"
                  style={{ flex: '1 1 180px', padding: '0.85rem 1.4rem', minHeight: '44px' }}
                >
                  <FaWhatsapp size={18} />
                  <span>Buy Now on WhatsApp</span>
                </button>
              </div>
            </div>

            {/* Sacred Guarantees Strip */}
            <div
              style={{
                backgroundColor: 'var(--bg-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '1rem',
                border: '1px solid var(--border-gold)',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '0.75rem',
                fontSize: '0.78rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <FaShieldAlt size={16} color="var(--gold-dark)" />
                <span style={{ color: 'var(--maroon)', fontWeight: 500 }}>
                  100% Satvik & Alcohol-Free
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <FaStar size={15} color="var(--gold-dark)" />
                <span style={{ color: 'var(--maroon)', fontWeight: 500 }}>
                  Sanctified in Vrindavan Dham
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <FaTruck size={15} color="var(--gold-dark)" />
                <span style={{ color: 'var(--maroon)', fontWeight: 500 }}>
                  All-India Safe Transit Box
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <FaWhatsapp size={16} color="var(--whatsapp-green)" />
                <span style={{ color: 'var(--maroon)', fontWeight: 500 }}>
                  Direct WhatsApp Support
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= FULL DESCRIPTION & HIGHLIGHTS ================= */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-lg)',
            padding: 'clamp(1.25rem, 4vw, 2.25rem)',
            border: '1.5px solid var(--border-card)',
            boxShadow: 'var(--shadow-sm)',
            marginBottom: '3.5rem'
          }}
        >
          <h3
            style={{
              fontSize: '1.35rem',
              color: 'var(--maroon)',
              marginBottom: '0.85rem',
              borderBottom: '1px solid var(--border-gold)',
              paddingBottom: '0.65rem'
            }}
          >
            Devotional Significance & Craftsmanship
          </h3>

          <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            {product.fullDesc}
          </p>

          <h4
            style={{
              fontSize: '1.05rem',
              color: 'var(--maroon)',
              marginBottom: '0.65rem'
            }}
          >
            Seva Highlights:
          </h4>

          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '0.65rem'
            }}
          >
            {product.highlights.map((hl, i) => (
              <li
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '0.86rem',
                  color: 'var(--text-main)'
                }}
              >
                <div
                  style={{
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(200, 147, 46, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--gold-dark)',
                    flexShrink: 0
                  }}
                >
                  <FaCheck size={10} />
                </div>
                <span>{hl}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ================= RELATED OFFERINGS (2 columns on mobile) ================= */}
        {relatedProducts.length > 0 && (
          <div>
            <h3
              style={{
                fontSize: '1.4rem',
                color: 'var(--maroon)',
                marginBottom: '1.25rem',
                textAlign: 'center'
              }}
            >
              Recommended Devotional Offerings
            </h3>

            {/* 2 columns on mobile, 3 at >=768px, 4 at >=1100px */}
            <div className="products-grid">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
