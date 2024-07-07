"use client";

import Link from "next/link";
import CartIcon from "../assets/icons/Cart";
import { useCart } from "../context/CartProvider";

const Cart = () => {
  const { totalItems } = useCart();
  return (
    <Link href={"/cart"} className="relative">
      <CartIcon />
      <span className="absolute w-5 h-5 -top-3 -right-3 bg-danger flex justify-center items-center rounded-full text-white">
        {totalItems}
      </span>
    </Link>
  );
};

export default Cart;
