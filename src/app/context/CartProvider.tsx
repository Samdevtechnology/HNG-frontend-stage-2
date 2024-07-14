"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import Product from "../../utils/types/Product";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface CartItem extends Product {
  quantity: number;
}

interface CartProps {
  cart: CartItem[];
  totalItems: number;
  totalPrice: number;
  addToCart: (item: Product) => void;
  reduceCartItem: (id: string) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartProps | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const addToCart = (item: Product) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItemIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          quantity: updatedCart[existingItemIndex].quantity + 1,
        };
        return updatedCart;
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });

    setTotalItems((prevTotal) => prevTotal + 1);
    setTotalPrice(
      (prevTotal) => prevTotal + parseFloat(item.price.replace(/,/g, ""))
    );
  };

  const reduceCartItem = (id: string) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (cartItem) => cartItem.id === id
      );

      if (existingItemIndex !== -1) {
        const updatedCart = [...prevCart];
        const existingItem = updatedCart[existingItemIndex];
        if (existingItem.quantity > 1) {
          updatedCart[existingItemIndex] = {
            ...existingItem,
            quantity: existingItem.quantity - 1,
          };
          return updatedCart;
        } else {
          return prevCart.filter((item) => item.id !== id);
        }
      }
      return prevCart;
    });

    setTotalItems((prevTotal) => prevTotal - 1);
    setTotalPrice((prevTotal) => {
      const item = cart.find((item) => item.id === id);
      return item
        ? prevTotal - parseFloat(item.price.replace(/,/g, ""))
        : prevTotal;
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prevCart) => {
      const itemToRemove = prevCart.find((item) => item.id === id);

      if (itemToRemove) {
        return prevCart.filter((item) => item.id !== id);
      }

      return prevCart;
    });

    setTotalItems((prevTotal) => {
      const itemToRemove = cart.find((item) => item.id === id);

      if (itemToRemove) {
        return prevTotal - itemToRemove.quantity;
      }

      return prevTotal;
    });

    setTotalPrice((prevTotal) => {
      const itemToRemove = cart.find((item) => item.id === id);

      if (itemToRemove) {
        return (
          prevTotal -
          parseFloat(itemToRemove.price.replace(/,/g, "")) *
            itemToRemove.quantity
        );
      }

      return prevTotal;
    });
  };

  const clearCart = () => {
    setCart([]);
    setTotalItems(0);
    setTotalPrice(0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        totalItems,
        totalPrice,
        addToCart,
        reduceCartItem,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
      <ToastContainer autoClose={3000} hideProgressBar={false} />
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
