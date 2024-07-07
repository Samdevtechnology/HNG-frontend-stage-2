import products from "../../components/productdb.json";
import type Product from "@/utils/types/Product";

interface ProductIdProps {
  params: { productId: string };
}

export async function GET(request: Request, { params }: ProductIdProps) {
  try {
    const productId = params.productId;
    const product: Product | undefined = products.find(
      (p: Product) => p.id === Number(productId)
    );

    if (!product) {
      return Response.json({ message: "Product not found" }, { status: 404 });
    }

    return Response.json(product);
  } catch (error) {
    return Response.json(
      { message: "Error fetching product" },
      { status: 500 }
    );
  }
}
