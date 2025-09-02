// export interface Product {
//   id: string;
//   name: string;
//   price: number;
//   originalPrice?: number;
//   image: string;
//   category: string;
//   subcategory: string;
//   brand: string;
//   rating: number;
//   reviewCount: number;
//   dealUrl: string;
//   store: string;
//   discount?: number;
//   features: string[];
// }

// export interface Category {
//   id: string;
//   name: string;
//   icon: string;
//   subcategories: Subcategory[];
// }

// export interface Subcategory {
//   id: string;
//   name: string;
//   categoryId: string;
// }

// export interface CompareProduct extends Product {
//   selected: boolean;
// }

// export interface Filter {
//   category: string;
//   subcategory?: string;
//   priceRange?: {
//     min: number;
//     max: number;
//   };
//   brand?: string;
//   rating?: number;
//   sortBy?: 'price' | 'rating' | 'name' | 'popularity';
//   sortOrder?: 'asc' | 'desc';
// }


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
  products?: Product[]; // added products array
}

export interface Category {
  id: string;
  name: string;
  icon?: string;
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
