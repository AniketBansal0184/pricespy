import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { CompareModal } from "./components/CompareModal";
import { PopularProductModal } from "./components/PopularProductModal";
import { LastVisitedModal } from "./components/LastVisitedModal";
import Index from "./pages/Index";
import { CategoryPage } from "./pages/CategoryPage";
import NotFound from "./pages/NotFound";
import { Product, CompareProduct } from "./types";
import { supabase } from "./integrations/supabase/client";
import type { User } from "@supabase/supabase-js";
import { categories } from "./data/categories";

const queryClient = new QueryClient();

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [compareProducts, setCompareProducts] = useState<CompareProduct[]>([]);
  const [lastVisitedCompareProducts, setLastVisitedCompareProducts] = useState<CompareProduct[]>(() => {
    // Load from localStorage on initial render
    try {
      const stored = localStorage.getItem("lastVisitedCompareProducts");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });
  const [compareModalOpen, setCompareModalOpen] = useState(false);
  const [lastVisitedModalOpen, setLastVisitedModalOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [popularProduct, setPopularProduct] = useState<Product | null>(null);
  const [popularModalOpen, setPopularModalOpen] = useState(false);

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    // Update last visited compare products in localStorage whenever compareProducts changes
    setLastVisitedCompareProducts((prev) => {
      // Merge new compareProducts with previous last visited, avoiding duplicates
      const newProducts = compareProducts.filter(
        (p) => !prev.some((lp) => lp.id === p.id)
      );
      const updated = [...newProducts, ...prev].slice(0, 20); // Keep max 20 items
      localStorage.setItem("lastVisitedCompareProducts", JSON.stringify(updated));
      return updated;
    });
  }, [compareProducts]);

  const handleCompareToggle = (product: Product) => {
    setCompareProducts((prev) => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing) {
        return prev.filter((p) => p.id !== product.id);
      } else {
        if (prev.length >= 4) {
          // Replace the first product if we have 4 already
          return [{ ...product, selected: true }, ...prev.slice(1)];
        }
        return [...prev, { ...product, selected: true }];
      }
    });
  };

  const handleCategorySelect = (categoryId: string) => {
    window.location.href = `/category/${categoryId}`;
  };

  const handleSubcategorySelect = (
    categoryId: string,
    subcategoryId: string
  ) => {
    window.location.href = `/category/${categoryId}?subcategory=${subcategoryId}`;
  };

  const removeFromCompare = (productId: string) => {
    setCompareProducts((prev) => prev.filter((p) => p.id !== productId));
  };

  // ... rest unchanged

  const handlePopularClick = () => {
    // Find the highest rated product across all categories
    let highestRatedProduct: Product | null = null;
    let highestRating = 0;

    categories.forEach((category) => {
      category.subcategories.forEach((subcategory) => {
        subcategory.products.forEach((product) => {
          if (product.rating && product.rating > highestRating) {
            highestRating = product.rating;
            highestRatedProduct = product;
          }
        });
      });
    });

    if (highestRatedProduct) {
      setPopularProduct(highestRatedProduct);
      setPopularModalOpen(true);
    } else {
      // No product found, alert user or handle gracefully
      alert("No products found in the selected category.");
    }
  };

  const handleSearch = (query: string) => {
    // Search through all products and categories
    const lowerQuery = query.toLowerCase();

    // First, try to find exact category match
    const categoryMatch = categories.find(cat =>
      cat.name.toLowerCase().includes(lowerQuery) ||
      cat.id.toLowerCase().includes(lowerQuery)
    );

    if (categoryMatch) {
      window.location.href = `/category/${categoryMatch.id}`;
      return;
    }

    // Then, try to find subcategory match
    for (const category of categories) {
      const subcategoryMatch = category.subcategories.find(sub =>
        sub.name.toLowerCase().includes(lowerQuery) ||
        sub.id.toLowerCase().includes(lowerQuery)
      );

      if (subcategoryMatch) {
        window.location.href = `/category/${category.id}?subcategory=${subcategoryMatch.id}`;
        return;
      }
    }

    // Finally, try to find product match and navigate to its category
    for (const category of categories) {
      for (const subcategory of category.subcategories) {
        const productMatch = subcategory.products.find(product =>
          product.name.toLowerCase().includes(lowerQuery) ||
          product.id.toLowerCase().includes(lowerQuery)
        );

        if (productMatch) {
          window.location.href = `/category/${category.id}?subcategory=${subcategory.id}`;
          return;
        }
      }
    }

    // If no matches found, show alert
    alert(`No results found for "${query}". Try searching for a category, subcategory, or product name.`);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen bg-background">
            <Header
              onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
              compareCount={compareProducts.length}
              onCompareClick={() => setCompareModalOpen(true)}
              onAuthClick={() => setAuthModalOpen(true)}
              user={user}
              onPopularClick={handlePopularClick}
              onSearch={handleSearch}
              onLastVisitedClick={() => setLastVisitedModalOpen(true)}
            />

            <div className="flex">
              <Sidebar
                isOpen={sidebarOpen}
                onCategorySelect={handleCategorySelect}
                onSubcategorySelect={handleSubcategorySelect}
              />

              {/* Overlay for mobile */}
              {sidebarOpen && (
                <div
                  className="fixed inset-0 bg-black/50 z-30"
                  onClick={() => setSidebarOpen(false)}
                />
              )}

              <main className="flex-1 lg:ml-0">
                <Routes>
                  <Route
                    path="/"
                    element={
                      <Index
                        compareProducts={compareProducts}
                        onCompareToggle={handleCompareToggle}
                        authModalOpen={authModalOpen}
                        setAuthModalOpen={setAuthModalOpen}
                      />
                    }
                  />
                  <Route
                    path="/category/:categoryId"
                    element={
                      <CategoryPage
                        compareProducts={compareProducts}
                        onCompareToggle={handleCompareToggle}
                      />
                    }
                  />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
            </div>

            <CompareModal
              isOpen={compareModalOpen}
              onClose={() => setCompareModalOpen(false)}
              products={compareProducts}
              onRemoveProduct={removeFromCompare}
            />

            <PopularProductModal
              isOpen={popularModalOpen}
              onClose={() => setPopularModalOpen(false)}
              product={popularProduct}
              compareProducts={compareProducts}
              onCompareToggle={handleCompareToggle}
            />

            <LastVisitedModal
              isOpen={lastVisitedModalOpen}
              onClose={() => setLastVisitedModalOpen(false)}
              products={lastVisitedCompareProducts}
              onProductSelect={(product) => {
                window.location.href = `/category/${product.category}?subcategory=${product.subcategory}`;
              }}
            />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
