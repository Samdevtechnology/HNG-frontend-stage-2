"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
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
  removeFromCart: (id: number) => void;
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
        updatedCart[existingItemIndex].quantity += 1;
        return updatedCart;
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
    setTotalItems((prevTotal) => prevTotal + 1);
    setTotalPrice((prevTotal) => prevTotal + parseFloat(item.price));
  };

  const removeFromCart = (id: number) => {
    const itemToRemove = cart.find((item) => item.id === id);

    if (itemToRemove) {
      setCart((prevCart) => prevCart.filter((item) => item.id !== id));
      setTotalItems((prevTotal) => prevTotal - itemToRemove.quantity);
      setTotalPrice(
        (prevTotal) =>
          prevTotal - parseFloat(itemToRemove.price) * itemToRemove.quantity
      );
    }
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
