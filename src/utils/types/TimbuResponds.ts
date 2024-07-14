import { ExtraInfo } from "./Product";

interface Photo {
  model_name: string;
  model_id: string;
  organization_id: string;
  filename: string;
  url: string;
  is_featured: boolean;
  save_as_jpg: boolean;
  is_public: boolean;
  file_rename: boolean;
  position: number;
}

export interface Product {
  name: string;
  description: string;
  unique_id: string;
  url_slug: string;
  is_available: boolean;
  is_service: boolean;
  previous_url_slugs: string | null;
  unavailable: boolean;
  unavailable_start: string | null;
  unavailable_end: string | null;
  id: string;
  parent_product_id: string | null;
  parent: string | null;
  organization_id: string;
  product_image: string[];
  categories: string[];
  date_created: string;
  last_updated: string;
  user_id: string;
  photos: Photo[];
  current_price: number;
  is_deleted: boolean;
  available_quantity: number;
  selling_price: number | null;
  discounted_price: number | null;
  buying_price: number | null;
  extra_infos: ExtraInfo[] | null;
}

export interface Products {
  page: number;
  size: number;
  total: number;
  debug: string | null;
  previous_page: string | null;
  next_page: string | null;
  items: Product[];
}
