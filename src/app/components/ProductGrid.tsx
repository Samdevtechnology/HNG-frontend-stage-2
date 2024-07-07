import ProductCard from "./ProductCard";
import type Product from "@/utils/types/Product";

interface GridProps {
  rows?: number;
  cols?: number;
  gap?: number;
  products: Product[];
}

//added possible cols and gap value to safelist in tailwind config
//to make sure they are always added in the build process

const ProductGrid = ({ rows = 1, cols = 3, gap = 4, products }: GridProps) => {
  const maxProducts = rows * cols;
  const showProducts = products.slice(0, maxProducts);

  return (
    <div className={`grid grid-cols-${cols} gap-${gap}`}>
      {showProducts.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
