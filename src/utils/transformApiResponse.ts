import Product, { ExtraInfo, Products } from "./types/Product";
const API_IMAGE_URL = process.env.API_IMAGE_URL as string;

export default function transformProducts(apiResponse: any): Products {
  const products: Product[] = apiResponse.items.map((item: any) => ({
    id: item.id,
    image:
      item.photos.length > 0 ? `${API_IMAGE_URL}${item.photos[0].url}` : "",
    category: item.categories.length > 0 ? item.categories[0] : "Uncategorized",
    brand: "Stride & Co",
    title: item.name,
    price: item.current_price[0]?.NGN[0]?.toFixed(2) || "0.00", // Assuming price is in NGN
  }));

  return {
    products,
    previousPage: apiResponse.previous_page,
    size: apiResponse.size,
    nextPage: apiResponse.next_page,
    page: apiResponse.page,
    total: apiResponse.total,
  };
}

export const transformProduct = (apiResponse: any): Product => {
  const { id, name, current_price, photos, extra_infos } = apiResponse;

  const image = photos.length > 0 ? `${API_IMAGE_URL}${photos[0].url}` : "";
  const category =
    extra_infos.find((info: ExtraInfo) => info.key === "category")?.value || "";
  const brand = extra_infos.find(
    (info: ExtraInfo) => info.key === "brand"
  )?.value;

  return {
    id,
    image,
    category,
    title: name,
    price: current_price.toString(),
    brand,
  };
};
