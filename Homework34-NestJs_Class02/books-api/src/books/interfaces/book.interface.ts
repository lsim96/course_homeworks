export interface Book {
  id: string;
  author: string;
  title: string;
  price: number;
  stock: number;
  pages: number;
}

export interface BookFilters {
  author?: string;
  minPrice?: number | null;
}
