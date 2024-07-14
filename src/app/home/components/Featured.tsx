"use client";

import { useEffect, useState } from "react";
import ProductGrid from "../../components/ProductGrid";
import LoadingSpinner from "@/app/components/LoadingSpinner";
import Container from "@/app/components/Container";
import Pagination from "./Pagination";
import { Products } from "@/utils/types/Product";

const Featured = () => {
  const [productsData, setProductsData] = useState<Products | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const fetchProducts = async (page: number) => {
      try {
        const response = await fetch(`/api/products?page=${page}&count=8`);
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        const data = await response.json();
        setProductsData(data);
      } catch (error) {
        setError("Failed to fetch product");
      }
    };

    fetchProducts(currentPage);
  }, [currentPage]);

  if (error) {
    return (
      <Container>
        <p>{error}</p>
      </Container>
    );
  }
  if (!productsData || !productsData.products.length) {
    return (
      <Container>
        <LoadingSpinner />
      </Container>
    );
  }

  return (
    <Container Variant={"section"} className="pb-12">
      {productsData && (
        <div>
          <header className="font-medium text-3xl pb-8 text-primary">
            Featured Products
          </header>
          <nav className="flex pb-4">
            <ul className="flex gap-10">
              <li className="">All Shoes</li>
              <li>Sneakers</li>
              <li>Casual</li>
            </ul>
          </nav>
          <ProductGrid products={productsData.products} cols={4} rows={2} />
          <Pagination
            previousPage={productsData.previousPage}
            nextPage={productsData.nextPage}
            page={productsData.page}
            total={productsData.total}
            size={productsData.size}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </Container>
  );
};

export default Featured;
