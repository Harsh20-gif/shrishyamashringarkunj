import React, { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Header from './components/Header';
import Footer from './components/Footer';
import MobileBottomNav from './components/MobileBottomNav';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import CartDrawer from './components/CartDrawer';
import CheckoutModal from './components/CheckoutModal';
import Toast from './components/Toast';
import ScrollToTop from './components/ScrollToTop';

// Code-splitting routes for high performance
const Home = lazy(() => import('./pages/Home'));
const Shop = lazy(() => import('./pages/Shop'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const CartPage = lazy(() => import('./pages/CartPage'));

// Devotional Suspense Fallback
function DevotionalLoader() {
  return (
    <div
      style={{
        minHeight: '65vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '14px'
      }}
    >
      <div
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          border: '2px solid var(--border-gold)',
          borderTopColor: 'var(--maroon)',
          animation: 'spin 1s linear infinite'
        }}
      />
      <span
        className="devanagari-text"
        style={{
          fontSize: '1.05rem',
          color: 'var(--gold-dark)',
          fontWeight: 600,
          letterSpacing: '0.05em'
        }}
      >
        राधे राधे · लोड हो रहा है...
      </span>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <div className="app-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <ScrollToTop />

      {/* Global Notifications & Modals */}
      <Toast />
      <Header />
      <CartDrawer />
      <CheckoutModal />

      {/* Main Routed Content with Animated Route Transitions */}
      <main style={{ flex: 1 }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
          >
            <Suspense fallback={<DevotionalLoader />}>
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="*" element={<Home />} />
              </Routes>
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Devotional Footer */}
      <Footer />

      {/* Floating Action Bars */}
      <FloatingWhatsApp />
      <MobileBottomNav />
    </div>
  );
}

