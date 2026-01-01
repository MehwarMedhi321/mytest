"use client";

import { createContext, useContext, useEffect, useState } from "react";

type CartItem = {
  id: number;
  title: string;
  price: number;
  image: string;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | null>(null);

// 5 minutes
const CART_EXPIRY_TIME = 5 * 60 * 1000;

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Load cart on page load
  useEffect(() => {
    try {
      const storedCart = localStorage.getItem("cart");
      const storedTime = localStorage.getItem("cart_time");

      if (storedCart && storedTime) {
        const parsedCart = JSON.parse(storedCart);
        const savedTime = Number(storedTime);

        if (
          Array.isArray(parsedCart) &&
          Date.now() - savedTime < CART_EXPIRY_TIME
        ) {
          setCart(parsedCart);
        } else {
          clearCart();
        }
      }
    } catch {
      clearCart();
    }
  }, []);

  // Auto-clear cart when time expires
  useEffect(() => {
    if (cart.length === 0) return;

    const interval = setInterval(() => {
      const savedTime = localStorage.getItem("cart_time");
      if (!savedTime) return;

      if (Date.now() - Number(savedTime) >= CART_EXPIRY_TIME) {
        clearCart();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [cart]);

  //  DO NOT reset cart_time here
  // Only store cart data
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  // Set expiry time ONLY on first add
  const addToCart = (item: CartItem) => {
    setCart((prev) => {
      const safePrev = Array.isArray(prev) ? prev : [];

      // ⏱ set time only if cart was empty
      if (safePrev.length === 0) {
        localStorage.setItem("cart_time", Date.now().toString());
      }

      return [...safePrev, item];
    });
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
    localStorage.removeItem("cart_time");
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return context;
};
