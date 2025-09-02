import { Product } from '@/types';
import artSetImg from '@/assets/art-set.jpg';
import tabletImg from '@/assets/tablet.jpg';
import chairImg from '@/assets/chair.jpg';
import stemKitImg from '@/assets/stem-kit.jpg';
import violinImg from '@/assets/violin.jpg';
import soccerSetImg from '@/assets/soccer-set.jpg';

export const featuredProducts: Product[] = [
  {
    id: '1',
    name: 'Professional Art Set - 120 Pieces',
    price: 89.99,
    originalPrice: 129.99,
    image: artSetImg,
    category: 'art-craft',
    subcategory: 'painting',
    brand: 'ArtMaster',
    rating: 4.8,
    reviewCount: 234,
    dealUrl: 'https://example.com/art-set-deal',
    store: 'Art Supply Co.',
    discount: 31,
    features: ['120 piece set', 'Professional grade', 'Carrying case included', 'Money back guarantee']
  },
  {
    id: '2',
    name: 'Interactive Learning Tablet',
    price: 199.99,
    originalPrice: 249.99,
    image: tabletImg,
    category: 'electronics',
    subcategory: 'tablets',
    brand: 'EduTech',
    rating: 4.6,
    reviewCount: 567,
    dealUrl: 'https://example.com/tablet-deal',
    store: 'TechWorld',
    discount: 20,
    features: ['Educational apps included', '10-inch display', 'Parental controls', '2-year warranty']
  },
  {
    id: '3',
    name: 'Ergonomic Student Chair',
    price: 149.99,
    originalPrice: 199.99,
    image: chairImg,
    category: 'furniture',
    subcategory: 'office-chairs',
    brand: 'ComfortSeating',
    rating: 4.7,
    reviewCount: 189,
    dealUrl: 'https://example.com/chair-deal',
    store: 'Furniture Plus',
    discount: 25,
    features: ['Adjustable height', 'Lumbar support', 'Durable construction', 'Easy assembly']
  },
  {
    id: '4',
    name: 'STEM Building Kit - Advanced',
    price: 79.99,
    originalPrice: 99.99,
    image: stemKitImg,
    category: 'education-resources',
    subcategory: 'stem-resources',
    brand: 'STEMBuilder',
    rating: 4.9,
    reviewCount: 432,
    dealUrl: 'https://example.com/stem-deal',
    store: 'Education Store',
    discount: 20,
    features: ['500+ pieces', 'Instruction manual', 'STEM certified', 'Age 8+']
  },
  {
    id: '5',
    name: 'Professional Violin - Full Size',
    price: 299.99,
    originalPrice: 399.99,
    image: violinImg,
    category: 'musical-instruments',
    subcategory: 'string-instruments',
    brand: 'Harmony Music',
    rating: 4.5,
    reviewCount: 123,
    dealUrl: 'https://example.com/violin-deal',
    store: 'Music Central',
    discount: 25,
    features: ['Handcrafted', 'Ebony fingerboard', 'Case included', 'Professional setup']
  },
  {
    id: '6',
    name: 'Soccer Training Set',
    price: 49.99,
    originalPrice: 69.99,
    image: soccerSetImg,
    category: 'sports-outdoors',
    subcategory: 'team-sports',
    brand: 'SportsPro',
    rating: 4.4,
    reviewCount: 278,
    dealUrl: 'https://example.com/soccer-deal',
    store: 'Sports Direct',
    discount: 29,
    features: ['Official size ball', 'Training cones', 'Goal posts', 'Carrying bag']
  }
];

export const generateCategoryProducts = (categoryId: string, count: number = 15): Product[] => {
  const products: Product[] = [];
  for (let i = 0; i < count; i++) {
    products.push({
      id: `${categoryId}-${i + 1}`,
      name: `Product ${i + 1} for ${categoryId}`,
      price: Math.floor(Math.random() * 500) + 20,
      originalPrice: Math.floor(Math.random() * 100) + 50,
      image: '/api/placeholder/300/200',
      category: categoryId,
      subcategory: 'general',
      brand: `Brand ${Math.floor(Math.random() * 10) + 1}`,
      rating: Math.round((Math.random() * 2 + 3) * 10) / 10,
      reviewCount: Math.floor(Math.random() * 1000) + 10,
      dealUrl: `https://example.com/${categoryId}-product-${i + 1}`,
      store: `Store ${Math.floor(Math.random() * 5) + 1}`,
      discount: Math.floor(Math.random() * 40) + 10,
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4']
    });
  }
  return products;
};