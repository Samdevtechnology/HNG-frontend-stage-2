"use client";

import Container from "@/app/components/Container";
import Product from "@/utils/types/Product";
import Image from "next/image";
import { useEffect, useState } from "react";
import RelatedProductSection from "./components/Related";
import Link from "next/link";
import LoadingSpinner from "@/app/components/LoadingSpinner";

interface ProductIdPros {
  params: { productId: string };
}
const Page = ({ params }: ProductIdPros) => {
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

  return (
    <Container className="m-12">
      <section className="flex gap-8">
        <div className="w-3/12">
          <div className="bg-secondary rounded mb-2">
            <Image
              src={product.image}
              alt={product.title}
              width={350}
              height={350}
            />
          </div>
          <div className="flex gap-2">
            <div className="bg-secondary rounded">
              <Image
                src={product.image}
                alt={product.title}
                width={200}
                height={200}
              />
            </div>
            <div className="bg-secondary rounded">
              <Image
                src={product.image}
                alt={product.title}
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>
        <div className="w-9/12">
          <div>
            <div className=" border-b border-light_border mb-6 pb-2">
              <header className="font-semibold text-3xl pb-4">
                {product.title}
              </header>
              <p className="text-2xl">{product.price}</p>
            </div>
            <div className="border-b border-light_border font-medium mb-6 pb-2">
              <p className="mb-4">
                Brand Name:<span className="font-normal pl-8">Stride & Co</span>
              </p>
              <p>
                Availability:<span className="font-normal pl-8">In stock</span>
              </p>
            </div>
            <div className="border-b border-light_border font-medium mb-6 pb-2">
              <p className="mb-4">
                Select Size:
                <span className="font-normal pl-8">Stride & Co</span>
              </p>
            </div>
            <div className="font-medium mb-6 pb-2">
              <p className="mb-4">
                Item:
                <span className="font-normal pl-8">1</span>
              </p>
              <p className="mb-4 flex justify-start items-center">
                Total:
                <span className="font-normal pl-8 text-2xl">
                  {product.price}
                </span>
              </p>
            </div>
          </div>
          <div className="flex justify-around">
            <button className="bg-dark_border text-white rounded-[50px] py-3 px-6">
              Add to Cart
            </button>
            <Link href="/cart">
              <button className="border rounded-[50px] p-3 border-black ">
                Proceed to Checkout
              </button>
            </Link>
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
