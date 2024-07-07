"use client";

import { useEffect, useState } from "react";
import type Product from "@/utils/types/Product";
import ProductGrid from "../../components/ProductGrid";
import LoadingSpinner from "@/app/components/LoadingSpinner";
import Container from "@/app/components/Container";

const Featured = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products");
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError("Failed to fetch product");
      }
    };

    fetchProducts();
  }, []);

  if (error) {
    return (
      <Container>
        <p>{error}</p>
      </Container>
    );
  }
  if (!products || !products.length) {
    return (
      <Container>
        <LoadingSpinner />
      </Container>
    );
  }

  return (
    <section className="pb-12">
      {products && (
        <div>
          <header className="font-medium text-3xl pb-8">
            Featured Products
          </header>
          <nav className="pb-4">
            <ul className="flex gap-10">
              <li className="">All Shoes</li>
              <li>Men’s Shoes</li>
              <li>Casual</li>
            </ul>
          </nav>
          <ProductGrid products={products} cols={4} rows={2} />
        </div>
      )}
    </section>
  );
};

export default Featured;
