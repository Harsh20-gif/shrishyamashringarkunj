import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FaSearch, FaTimes, FaSort, FaStar } from 'react-icons/fa';
import SectionHeading from '../components/SectionHeading';
import ProductCard from '../components/ProductCard';
import { CATEGORIES, PRODUCTS } from '../data/products';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentCategory = searchParams.get('category') || 'all';

  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');

  const setCategory = (catId) => {
    if (catId === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', catId);
    }
    setSearchParams(searchParams);
  };

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    // Filter by category
    if (currentCategory !== 'all') {
      result = result.filter((p) => p.category === currentCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          (p.hindiName && p.hindiName.includes(q)) ||
          p.shortDesc.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    // Sorting
    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'featured') {
      result.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
    }

    return result;
  }, [currentCategory, searchQuery, sortBy]);

  const activeCategoryObj = CATEGORIES.find((c) => c.id === currentCategory) || CATEGORIES[0];

  return (
    <div className="shop-page mobile-safe-bottom" style={{ minHeight: '80vh', padding: '1.75rem 0 3.5rem' }}>
      <div className="container">
        {/* Page Header */}
        <SectionHeading
          sanskrit="॥ वृन्दावन सेवा सूची ॥"
          title="Sacred Devotional Offerings"
          subtitle="Explore pure attars, sanctified tulsi malas, puja kits, and bespoke poshaks crafted in Vrindavan."
        />

        {/* Filter & Search Bar */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-md)',
            padding: '1rem',
            border: '1.5px solid var(--border-gold)',
            boxShadow: 'var(--shadow-sm)',
            marginBottom: '1.5rem'
          }}
        >
          {/* Top Row: Search input & Sort */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '1rem'
            }}
          >
            {/* Search Box (Min height 44px) */}
            <div
              style={{
                position: 'relative',
                flex: '1 1 260px',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <FaSearch
                size={15}
                color="var(--gold-dark)"
                style={{ position: 'absolute', left: '14px', pointerEvents: 'none' }}
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search attar, tulsi mala, poshak, kit..."
                style={{
                  width: '100%',
                  minHeight: '44px',
                  padding: '8px 38px 8px 40px',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid var(--border-gold)',
                  backgroundColor: 'var(--bg-primary)',
                  fontSize: '0.88rem'
                }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  style={{
                    position: 'absolute',
                    right: '12px',
                    color: 'var(--text-light)',
                    padding: '6px'
                  }}
                  aria-label="Clear search"
                  className="touch-target"
                >
                  <FaTimes size={14} />
                </button>
              )}
            </div>

            {/* Sort Dropdown (Min height 44px) */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
              <FaSort size={14} color="var(--maroon)" />
              <label htmlFor="shop-sort" style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                Sort:
              </label>
              <select
                id="shop-sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                style={{
                  minHeight: '44px',
                  padding: '6px 12px',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid var(--border-gold)',
                  backgroundColor: 'var(--bg-primary)',
                  color: 'var(--maroon)',
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                <option value="featured">Featured First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Devotee Rating</option>
              </select>
            </div>
          </div>

          {/* Sticky Category Chips */}
          <div
            style={{
              display: 'flex',
              gap: '8px',
              overflowX: 'auto',
              paddingBottom: '4px',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
            className="category-chips"
          >
            {CATEGORIES.map((cat) => {
              const isSelected = currentCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setCategory(cat.id)}
                  style={{
                    whiteSpace: 'nowrap',
                    padding: '8px 14px',
                    minHeight: '44px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.84rem',
                    fontWeight: isSelected ? 600 : 500,
                    backgroundColor: isSelected ? 'var(--maroon)' : 'var(--bg-primary)',
                    color: isSelected ? '#FFFFFF' : 'var(--text-main)',
                    border: isSelected ? '1px solid var(--gold)' : '1px solid var(--border-gold)',
                    transition: 'all 0.2s ease',
                    boxShadow: isSelected ? '0 2px 8px rgba(91, 26, 24, 0.2)' : 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                  className="touch-target"
                >
                  <span>{cat.label}</span>
                  {cat.hindi && isSelected && (
                    <span
                      className="devanagari-text"
                      style={{ fontSize: '0.72rem', opacity: 0.9, color: 'var(--gold-light)' }}
                    >
                      ({cat.hindi})
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Counter & Active Filter Pills */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '1.25rem',
            fontSize: '0.84rem',
            color: 'var(--text-muted)'
          }}
        >
          <div>
            Showing <strong>{filteredProducts.length}</strong> divine offerings
            {currentCategory !== 'all' && (
              <span>
                {' '}
                in <strong style={{ color: 'var(--maroon)' }}>{activeCategoryObj.label}</strong>
              </span>
            )}
          </div>

          {(currentCategory !== 'all' || searchQuery) && (
            <button
              onClick={() => {
                setCategory('all');
                setSearchQuery('');
              }}
              style={{
                color: 'var(--gold-dark)',
                fontWeight: 600,
                fontSize: '0.8rem',
                textDecoration: 'underline'
              }}
            >
              Reset all filters
            </button>
          )}
        </div>

        {/* Product Cards Grid: 2 columns on mobile, 3 at >=768px, 4 at >=1100px */}
        {filteredProducts.length > 0 ? (
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          /* Empty Search / Filter State */
          <div
            style={{
              textAlign: 'center',
              padding: '3.5rem 1rem',
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-lg)',
              border: '1px dashed var(--border-gold)',
              maxWidth: '500px',
              margin: '2rem auto'
            }}
          >
            <div
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                backgroundColor: 'var(--gold-soft)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                color: 'var(--gold-dark)'
              }}
            >
              <FaStar size={24} />
            </div>

            <h3 style={{ fontSize: '1.25rem', color: 'var(--maroon)', marginBottom: '0.5rem' }}>
              No Seva Offerings Found
            </h3>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.25rem' }}>
              We could not find anything matching "{searchQuery}". Try searching for Chandan, Tulsi Mala, Poshak or Puja Kit.
            </p>

            <button
              onClick={() => {
                setCategory('all');
                setSearchQuery('');
              }}
              className="btn-primary"
            >
              Show All Offerings
            </button>
          </div>
        )}
      </div>

      <style>{`
        .category-chips::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
