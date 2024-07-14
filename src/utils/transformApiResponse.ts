import Product, { ExtraInfo, Products } from "./types/Product";
import {
  Products as TimbuProducts,
  Product as TimbuProduct,
} from "./types/TimbuResponds";
const API_IMAGE_URL = process.env.API_IMAGE_URL as string;

export default function transformProducts(
  apiResponse: TimbuProducts
): Products {
  const products: Product[] = apiResponse.items.map((item: any) => ({
    id: item.id,
    image:
      item.photos.length > 0 ? `${API_IMAGE_URL}${item.photos[0].url}` : "",
    // category: item.categories.length > 0 ? item.categories[0] : "Uncategorized",
    category: item.description ? item.description : "Uncategorized",
    brand: "Stride & Co",
    availability: item.is_available,
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

export const transformProduct = (apiResponse: TimbuProduct): Product => {
  const { id, name, current_price, photos, extra_infos, is_available } =
    apiResponse;

  const image = photos.length > 0 ? `${API_IMAGE_URL}${photos[0].url}` : "";
  const category =
    (extra_infos &&
      extra_infos.find((info: ExtraInfo) => info.key === "category")?.value) ||
    "";
  const brand =
    extra_infos &&
    extra_infos.find((info: ExtraInfo) => info.key === "brand")?.value;

  return {
    id,
    image,
    category,
    title: name,
    price: current_price.toString(),
    brand: brand || "Unbranded",
    availability: is_available,
  };
};
