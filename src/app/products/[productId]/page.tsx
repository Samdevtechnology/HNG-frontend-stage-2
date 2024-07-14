"use client";

import Container from "@/app/components/Container";
import Product from "@/utils/types/Product";
import Image from "next/image";
import { useEffect, useState } from "react";
import RelatedProductSection from "./components/Related";
import LoadingSpinner from "@/app/components/LoadingSpinner";
import { useCart } from "@/app/context/CartProvider";
import { formatPrice } from "@/utils/priceConverter";

interface ProductIdPros {
  params: { productId: string };
}
const Page = ({ params }: ProductIdPros) => {
  const { cart, addToCart, reduceCartItem } = useCart();
  const productId = params.productId;
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (productId) {
      const fetchProduct = async () => {
        try {
          const response = await fetch(`/api/products/${productId}`);
          if (!response.ok) {
            throw new Error("Failed to fetch product");
          }
          const data: Product = await response.json();
          setProduct(data);
        } catch (error) {
          setError("Failed to fetch product");
        }
      };

      fetchProduct();
    }
  }, [productId]);

  if (!productId) {
    return (
      <Container>
        <LoadingSpinner />
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <p>{error}</p>
      </Container>
    );
  }
  if (!product) {
    return (
      <Container>
        <LoadingSpinner />
      </Container>
    );
  }

  const getProductQuantity = (id: string) => {
    const cartItem = cart.find((item) => item.id === id);
    return cartItem ? cartItem.quantity : 0;
  };

  const productQuantity = getProductQuantity(product.id);

  return (
    <Container className="m-12">
      <section className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-3/12">
          <div className="bg-secondary flex justify-center rounded mb-2">
            <Image
              src={product.image}
              alt={product.title}
              width={350}
              height={350}
            />
          </div>
          <div className="flex gap-2">
            <div className="bg-secondary flex justify-center w-full rounded">
              <Image
                src={product.image}
                alt={product.title}
                width={200}
                height={200}
              />
            </div>
            <div className="bg-secondary flex justify-center w-full rounded">
              <Image
                src={product.image}
                alt={product.title}
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>
        <div className="w-full md:w-9/12">
          <div>
            <div className=" border-b border-light_border mb-6 pb-2">
              <header className="font-semibold text-3xl pb-4">
                {product.title}
              </header>
              <p className="text-2xl">₦{formatPrice(product.price)}</p>
            </div>
            <div className="border-b border-light_border font-medium mb-6 pb-2">
              <p className="mb-4">
                Brand Name:
                <span className="font-normal pl-8">{product.brand}</span>
              </p>
              <p>
                Availability:
                <span className="font-normal pl-8">
                  {product.availability ? "In stock" : "Sold Out"}
                </span>
              </p>
            </div>
            <div className="border-b border-light_border font-medium mb-6 pb-2">
              <p className="mb-4">
                Select Size:
                <span className="font-normal pl-8">
                  <select name="size" id="size">
                    <option value="xs">xs</option>
                    <option value="sm">sm</option>
                    <option value="lg">lg</option>
                  </select>
                </span>
              </p>
            </div>
            <div className="font-medium mb-6 pb-2">
              <div className="flex justify-start gap-8 items-center">
                <div className="relative w-24 flex justify-center items-center">
                  <button
                    onClick={() => reduceCartItem(product.id)}
                    className=" absolute left-3"
                  >
                    <p className=" text-3xl w-6 h-6 flex pb-1 justify-center items-center">
                      -
                    </p>
                  </button>
                  <input
                    type="text"
                    value={productQuantity}
                    className="w-24 px-10 py-1 text-center outline-none rounded-2xl border border-light_border"
                  />
                  <button
                    onClick={() => addToCart(product)}
                    className=" absolute right-3"
                  >
                    <p className=" text-2xl w-6 h-6 flex justify-center items-center">
                      +
                    </p>
                  </button>
                </div>

                <div className="flex justify-around">
                  <button
                    onClick={() => addToCart(product)}
                    className=" bg-primary text-white rounded-[50px] py-2 px-4"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-16">
        <header className=" font-medium text-2xl mb-6">Description</header>
        <p className=" border border-thin_border p-6">
          Elevate your street style with our Men&#39;s Lightweight Sneakers,
          designed for the modern, on-the-go lifestyle. These sneakers combine
          fashion and function with a sleek, breathable mesh upper and a
          cushioned insole for maximum comfort. The durable rubber outsole
          provides excellent traction, making them perfect for both city strolls
          and light workouts. Available in multiple colors, these versatile
          sneakers are a must-have addition to your footwear collection.
        </p>
      </section>
      <RelatedProductSection />
    </Container>
  );
};

export default Page;
