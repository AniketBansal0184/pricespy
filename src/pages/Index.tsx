import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TrendingUp, Zap, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CategoryGrid } from "@/components/CategoryGrid";
import { ProductCard } from "@/components/ProductCard";

import { featuredProducts } from "@/data/products";
import { Product, CompareProduct } from "@/types";
import type { User } from "@supabase/supabase-js";

interface IndexProps {
  compareProducts: CompareProduct[];
  onCompareToggle: (product: Product) => void;
  authModalOpen: boolean;
  setAuthModalOpen: (open: boolean) => void;
  user: User | null;
}

const Index = ({ compareProducts, onCompareToggle, authModalOpen, setAuthModalOpen, user }: IndexProps) => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryId: string) => {
    if (!user) {
      setAuthModalOpen(true);
      return;
    }
    navigate(`/category/${categoryId}`);
  };

  const isProductSelected = (productId: string) => {
    return compareProducts.some((p) => p.id === productId);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
            Find the Best Deals for Schools
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-primary-foreground/90">
            Compare prices from thousands of suppliers and save on educational
            supplies
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              variant="secondary"
              className="px-6 sm:px-8 text-base lg:text-lg"
              onClick={() => {
                document
                  .getElementById("categories")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <TrendingUp className="w-5 h-5 mr-2" />
              Browse Categories
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="px-6 sm:px-8 text-base lg:text-lg bg-white/10 border-white/20 text-white hover:bg-white/20"
              onClick={() => {
                document
                  .getElementById("featured-deals")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <Zap className="w-5 h-5 mr-2" />
              Today's Deals
            </Button>
          </div>
        </div>
      </section>

      <section className="py-4 bg-yellow-100 text-center">
        <p className="text-lg font-medium">
          🎯 Advert Space - Promote Your Deal Here!
        </p>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Shop by Category
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-4">
              Discover everything you need for your educational institution
            </p>
          </div>
          <CategoryGrid onCategoryClick={handleCategoryClick} />
        </div>
      </section>

      <section className="py-4 bg-yellow-100 text-center">
        <p className="text-lg font-medium">
          🎯 Advert Space - Promote Your Deal Here!
        </p>
      </section>

      {/* Featured Products */}
      <section id="featured-deals" className="py-8 sm:py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 flex flex-col sm:flex-row items-center justify-center gap-2">
              <Star className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500" />
              Featured Deals
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-4">
              Hand-picked products with the best prices and reviews
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 lg:gap-6">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onCompare={onCompareToggle}
                isSelected={isProductSelected(product.id)}
                showCompare={true}
              />
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Button
              size="lg"
              variant="outline"
              className="text-sm sm:text-base"
              onClick={() => {
                document
                  .getElementById("categories")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View All Deals
            </Button>
          </div>
        </div>
      </section>

      <section className="py-4 bg-yellow-100 text-center">
        <p className="text-lg font-medium">
          🎯 Advert Space - Promote Your Deal Here!
        </p>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Best Prices</h3>
              <p className="text-base text-muted-foreground">
                Compare prices from hundreds of suppliers to find the best deals
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast & Easy</h3>
              <p className="text-base text-muted-foreground">
                Find what you need quickly with our intuitive search and filters
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-compare/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Compare</h3>
              <p className="text-base text-muted-foreground">
                Compare features and prices side-by-side to make informed
                decisions
              </p>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Index;
