export default interface Product {
  id: string;
  image: string;
  category: string;
  title: string;
  price: string;
  brand?: string;
  availability: boolean;
}

export interface Products {
  products: Product[];
  previousPage: string | null;
  nextPage: string | null;
  page: number;
  size: number;
  total: number;
}

export interface ExtraInfo {
  id: string;
  key: string;
  value: string;
  value_dt: null | string;
}
