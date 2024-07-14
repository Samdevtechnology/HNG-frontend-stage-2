"use client";

import { useEffect, useState } from "react";
import type Product from "@/utils/types/Product";
import ProductGrid from "../../components/ProductGrid";
import Container from "@/app/components/Container";

const TopSeller = () => {
  const [message, setMessage] = useState<string>("Loading...");
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/products/random?count=3");
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
        setMessage("Failed to fetch data");
      }
    };

    fetchData();
  }, []);
  return (
    <Container Variant={"section"} className="pb-12">
      {products && (
        <div>
          <header className="font-medium text-3xl pb-8 text-primary">
            Top Sellers
          </header>
          <ProductGrid products={products} gap={6} />
        </div>
      )}
    </Container>
  );
};

export default TopSeller;
