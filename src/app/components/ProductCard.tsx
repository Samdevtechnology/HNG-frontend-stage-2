import React from "react";
import Image from "next/image";
import type Product from "@/utils/types/Product";
import Like from "../assets/icons/Like";
import AddToCart from "./AddToCart";
import Link from "next/link";

interface ProductProps {
  product: Product;
}

const ProductCard = ({ product }: ProductProps) => {
  return (
    <div className="card w-full min-w-48">
      <div className="card-head flex justify-center items-center w-full min-h-56 rounded bg-secondary relative">
        <Link className="w-full h-full" href={`/products/${product.id}`}>
          <Image
            className="w-full h-full"
            alt="Boot"
            src={product.image}
            width={350}
            height={350}
          />
        </Link>
        <div className="flex flex-col justify-center items-center absolute top-0 right-0 p-2">
          <span className="p-2 w-10 h-10 flex justify-center items-center cursor-pointer hover:bg-white/20 rounded-full">
            <Like />
          </span>
          <AddToCart product={product} />
        </div>
      </div>
      <div className="card-body flex items-center justify-center flex-col p-4">
        <div className="cart-category text-sm text-gray_text">
          {product.category}
        </div>
        <Link href={`/products/${product.id}`} className="cart-title py-1">
          {product.title}
        </Link>
        <div className="cart-price text-2xl">₦{product.price}</div>
      </div>
    </div>
  );
};

export default ProductCard;
