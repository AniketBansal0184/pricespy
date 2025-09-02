import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Filter, SlidersHorizontal, Grid3X3, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { ProductCard } from "@/components/ProductCard";
import { categories } from "@/data/categories";
import { Product, CompareProduct } from "@/types";

interface CategoryPageProps {
  compareProducts: CompareProduct[];
  onCompareToggle: (product: Product) => void;
}

export const CategoryPage = ({ compareProducts, onCompareToggle }: CategoryPageProps) => {
  const { categoryId } = useParams();
  const navigate = useNavigate();

  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Filter states
  const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [sortBy, setSortBy] = useState("popularity");



  const category = categories.find((cat) => cat.id === categoryId);

  // Load all products from the category's subcategories
  useEffect(() => {
    if (category) {
      const allProducts: Product[] = [];
      category.subcategories.forEach((sub) => {
        sub.products?.forEach((p) => {
          allProducts.push({
            ...p,
            subcategory: sub.id,
            price: p.price != null ? p.price : 0,
          });
        });
      });
      setProducts(allProducts);
      setFilteredProducts(allProducts);
    }
  }, [category]);

  // Filtering & sorting
  useEffect(() => {
    let filtered = products;

    // Filter by selected subcategories
    if (selectedSubcategories.length > 0) {
      filtered = filtered.filter((product) =>
        selectedSubcategories.includes(product.subcategory)
      );
    }

    // Filter by price range
    filtered = filtered.filter(
      (product) =>
        (product.price || 0) >= priceRange[0] &&
        (product.price || 0) <= priceRange[1]
    );

    // Sort products
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => (a.price || 0) - (b.price || 0));
        break;
      case "price-high":
        filtered.sort((a, b) => (b.price || 0) - (a.price || 0));
        break;
      case "rating":
        filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case "name":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    setFilteredProducts(filtered);
  }, [products, selectedSubcategories, priceRange, sortBy]);

  // Handle subcategory toggle
  const handleSubcategoryToggle = (subcategoryId: string) => {
    setSelectedSubcategories((prev) =>
      prev.includes(subcategoryId)
        ? prev.filter((id) => id !== subcategoryId)
        : [...prev, subcategoryId]
    );
  };

  const isProductSelected = (productId: string) =>
    compareProducts.some((p) => p.id === productId);

  if (!category) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Category not found</h1>
        <Button onClick={() => navigate("/")}>Back to Home</Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Page Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <span onClick={() => navigate("/")} className="cursor-pointer hover:text-primary">
            Home
          </span>
          <span>/</span>
          <span>{category.name}</span>
        </div>
        <h1 className="text-3xl font-bold mb-2">{category.name}</h1>
        <section className="py-4 bg-yellow-100 text-center mb-6 rounded-lg">
          <p className="text-lg font-medium">🎯 Advert Space - Promote Your Deal Here!</p>
        </section>
      </div>

      <div className="flex gap-6">
        {/* Filters Sidebar */}
        <div className={`w-80 flex-shrink-0 ${showFilters ? "block" : "hidden lg:block"}`}>
          <div className="bg-card rounded-lg border p-4 sticky top-24">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </h3>

            {/* Subcategories */}
            <div className="mb-6">
              <h4 className="font-medium mb-3">Categories</h4>
              <div className="space-y-2">
                {category.subcategories.map((subcategory) => (
                  <div key={subcategory.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={subcategory.id}
                      checked={selectedSubcategories.includes(subcategory.id)}
                      onCheckedChange={() => handleSubcategoryToggle(subcategory.id)}
                    />
                    <label htmlFor={subcategory.id} className="text-sm cursor-pointer">
                      {subcategory.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="mb-6">
              <h4 className="font-medium mb-3">Price Range</h4>
              <div className="px-2">
                <Slider value={priceRange} onValueChange={setPriceRange} max={500} min={0} step={10} className="mb-2" />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>£{priceRange[0]}</span>
                  <span>£{priceRange[1]}</span>
                </div>
              </div>
            </div>

            {/* Clear Filters */}
            <Button
              variant="outline"
              size="sm"
              className="w-full"
              onClick={() => {
                setSelectedSubcategories([]);
                setPriceRange([0, 500]);
              }}
            >
              Clear Filters
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Controls */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" onClick={() => setShowFilters(!showFilters)} className="lg:hidden">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popularity">Most Popular</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="name">Name A-Z</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-2">
              <Button variant={viewMode === "grid" ? "default" : "ghost"} size="sm" onClick={() => setViewMode("grid")}>
                <Grid3X3 className="w-4 h-4" />
              </Button>
              <Button variant={viewMode === "list" ? "default" : "ghost"} size="sm" onClick={() => setViewMode("list")}>
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Products Grid */}
          <div className={`grid gap-4 ${viewMode === "grid" ? "grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" : "grid-cols-1"}`}>
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onCompare={onCompareToggle}
                isSelected={isProductSelected(product.id)}
                showCompare={true}
              />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">No products match your filters</p>
              <Button variant="outline" onClick={() => { setSelectedSubcategories([]); setPriceRange([0, 500]); }}>
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
