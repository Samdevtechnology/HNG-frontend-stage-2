import transformApiResponse from "@/utils/transformApiResponse";

const ORGANIZATION_ID = process.env.ORGANIZATION_ID as string;
const APP_ID = process.env.APP_ID as string;
const API_KEY = process.env.API_KEY as string;
const API_PRODUCT_URL = process.env.API_PRODUCT_URL as string;

interface ProductsPaginationProps {
  params: { count: number; page: number };
}

function getRandom() {
  return Math.floor(Math.random() * 7) + 1;
}
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const count = searchParams.get("count");
    const page = getRandom();
    const productsUrl = `${API_PRODUCT_URL}?organization_id=${ORGANIZATION_ID}&Appid=${APP_ID}&Apikey=${API_KEY}&size=${count}&page=${page}`;
    const res = await fetch(productsUrl);
    const data = await res.json();
    const transformedResponse = transformApiResponse(data);
    const products = transformedResponse;

    if (!products) {
      throw new Error("Products not found");
    }

    return Response.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);

    return Response.json({ error: (error as Error).message }, { status: 500 });
  }
}
