import products from "../components/productdb.json";
import type Product from "@/utils/types/Product";

export async function GET(request: Request) {
  try {
    const validatedProducts: Product[] = products;

    if (!validatedProducts) {
      throw new Error("Products not found");
    }

    return Response.json(validatedProducts);
  } catch (error) {
    console.error("Error fetching products:", error);

    return Response.json({ error: (error as Error).message }, { status: 500 });
  }
}
