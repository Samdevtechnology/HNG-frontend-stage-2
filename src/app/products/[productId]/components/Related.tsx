"use client";

import { useEffect, useState } from "react";
import type Product from "@/utils/types/Product";
import ProductGrid from "@/app/components/ProductGrid";
import Container from "@/app/components/Container";
import LoadingSpinner from "@/app/components/LoadingSpinner";

const Related = () => {
  const [mobile, setMobile] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/products/random?count=4");
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        setError("Failed to fetch product");
      }
    };

    fetchData();
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
    <section className="pb-12 mt-16">
      {products && (
        <div>
          <header className="font-medium text-3xl pb-8 text-primary">
            Related Products
          </header>
          {mobile ? (
            <ProductGrid products={products} cols={2} rows={2} />
          ) : (
            <ProductGrid products={products} cols={4} />
          )}
        </div>
      )}
    </section>
  );
};

export default Related;
