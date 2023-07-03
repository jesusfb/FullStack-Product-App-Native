export interface Product {
  id?: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  score: number;
  creator: string;
}

export interface ProductsResponse {
  msg: string;
  resultado: { products: Product[] };
  ok: boolean;
}

export interface ProductResponse {
  msg: string;
  resultado: { product: Product };
  ok: boolean;
}