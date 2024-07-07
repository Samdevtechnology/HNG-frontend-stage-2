"use client";
import Product from "@/utils/types/Product";
import Cart from "../assets/icons/Cart";
import { useCart } from "../context/CartProvider";
import { toast } from "react-toastify";

interface CartProps {
  product: Product;
}

const AddToCart = ({ product }: CartProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    toast("Added To Cart");
  };
  return (
    <div
      onClick={handleAddToCart}
      className="p-2 w-10 h-10 flex justify-center items-center cursor-pointer hover:bg-white/20 rounded-full"
    >
      <Cart />
    </div>
  );
};

export default AddToCart;
