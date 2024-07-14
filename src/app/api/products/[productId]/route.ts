import { transformProduct } from "@/utils/transformApiResponse";

interface ProductIdProps {
  params: { productId: string };
}

const ORGANIZATION_ID = process.env.ORGANIZATION_ID as string;
const APP_ID = process.env.APP_ID as string;
const API_KEY = process.env.API_KEY as string;
const API_PRODUCT_URL = process.env.API_PRODUCT_URL as string;

export async function GET(request: Request, { params }: ProductIdProps) {
  try {
    const productId = params.productId;
    const productsUrl = `${API_PRODUCT_URL}/${productId}?organization_id=${ORGANIZATION_ID}&Appid=${APP_ID}&Apikey=${API_KEY}&size=${10}&page=${1}`;
    const res = await fetch(productsUrl, {
      cache: "no-store",
    });
    const data = await res.json();
    const transformedResponse = transformProduct(data);
    const product = transformedResponse;

    if (!product) {
      throw new Error("Products not found");
    }

    return Response.json(product);
  } catch (error) {
    return Response.json(
      { message: "Error fetching product" },
      { status: 500 }
    );
  }
}
