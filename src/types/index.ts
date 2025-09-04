export interface Product {
  id?: string; 
  name: string;
  price: number | null; 
  originalPrice?: number;
  image?: string;
  category: string;
  subcategory: string;
  brand?: string;
  rating?: number;
  reviewCount?: number;
  dealUrl?: string; 
  store?: string;
  discount?: number;
  features?: string[];
}

export interface Subcategory {
  id: string;
  name: string;
  categoryId: string;
  parent?: number;
  products?: Product[];
}

export interface Category {
  id: string;
  name: string;
  icon?: string;
  parent?: number;
  subcategories: Subcategory[];
}

export interface CompareProduct extends Product {
  selected: boolean;
}

export interface Filter {
  category?: string;
  subcategory?: string;
  priceRange?: {
    min: number;
    max: number;
  };
  brand?: string;
  rating?: number;
  sortBy?: 'price' | 'rating' | 'name' | 'popularity';
  sortOrder?: 'asc' | 'desc';
}

export interface Store {
  id: string;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  phone: string;
  hours: string;
  subcategories: string[]; 
  isOffline: boolean;
}
