import React, { createContext, useContext, useReducer, useEffect, useState } from 'react';

const CartContext = createContext(null);
const STORAGE_KEY = 'shrihittulsi_cart_v1';

const initialState = {
  items: []
};

function getSavedCart() {
  if (typeof window === 'undefined') return initialState;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return initialState;
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed?.items) ? parsed : initialState;
  } catch (err) {
    console.warn('Could not read cart from localStorage', err);
    return initialState;
  }
}

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { product, selectedVariant, quantity = 1, customNote = '' } = action.payload;
      const variantName = selectedVariant ? selectedVariant.name : (product.variants?.[0]?.name || '');
      const unitPrice = selectedVariant ? selectedVariant.price : product.price;
      const cartItemId = `${product.id}__${variantName || 'standard'}`;

      const existingIndex = state.items.findIndex((item) => item.cartItemId === cartItemId);

      let updatedItems;
      if (existingIndex > -1) {
        updatedItems = state.items.map((item, idx) => {
          if (idx === existingIndex) {
            return {
              ...item,
              quantity: item.quantity + quantity,
              customNote: customNote || item.customNote
            };
          }
          return item;
        });
      } else {
        const newItem = {
          cartItemId,
          productId: product.id,
          name: product.name,
          hindiName: product.hindiName,
          category: product.category,
          price: unitPrice,
          image: product.images?.[0] || '',
          selectedVariant: variantName,
          quantity,
          customNote: customNote || ''
        };
        updatedItems = [...state.items, newItem];
      }

      return { ...state, items: updatedItems };
    }

    case 'REMOVE_ITEM': {
      return {
        ...state,
        items: state.items.filter((item) => item.cartItemId !== action.payload.cartItemId)
      };
    }

    case 'UPDATE_QUANTITY': {
      const { cartItemId, quantity } = action.payload;
      if (quantity <= 0) {
        return {
          ...state,
          items: state.items.filter((item) => item.cartItemId !== cartItemId)
        };
      }
      return {
        ...state,
        items: state.items.map((item) =>
          item.cartItemId === cartItemId ? { ...item, quantity } : item
        )
      };
    }

    case 'UPDATE_ITEM_NOTE': {
      const { cartItemId, customNote } = action.payload;
      return {
        ...state,
        items: state.items.map((item) =>
          item.cartItemId === cartItemId ? { ...item, customNote } : item
        )
      };
    }

    case 'CLEAR_CART':
      return { ...state, items: [] };

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState, getSavedCart);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  // Persist to localStorage safely
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (err) {
      console.warn('Could not save cart to localStorage', err);
    }
  }, [state]);

  const addItem = (product, selectedVariant = null, quantity = 1, customNote = '') => {
    dispatch({
      type: 'ADD_ITEM',
      payload: { product, selectedVariant, quantity, customNote }
    });
  };

  const removeItem = (cartItemId) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { cartItemId } });
  };

  const updateQuantity = (cartItemId, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { cartItemId, quantity } });
  };

  const updateItemNote = (cartItemId, customNote) => {
    dispatch({ type: 'UPDATE_ITEM_NOTE', payload: { cartItemId, customNote } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);
  const toggleCart = () => setIsCartOpen((prev) => !prev);

  const openCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };
  const closeCheckout = () => setIsCheckoutOpen(false);

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        totalItems,
        totalAmount,
        addItem,
        removeItem,
        updateQuantity,
        updateItemNote,
        clearCart,
        isCartOpen,
        openCart,
        closeCart,
        toggleCart,
        isCheckoutOpen,
        openCheckout,
        closeCheckout
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

