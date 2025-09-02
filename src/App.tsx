import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { CompareModal } from "./components/CompareModal";
import Index from "./pages/Index";
import { CategoryPage } from "./pages/CategoryPage";
import NotFound from "./pages/NotFound";
import { Product, CompareProduct } from "./types";

const queryClient = new QueryClient();

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [compareProducts, setCompareProducts] = useState<CompareProduct[]>([]);
  const [compareModalOpen, setCompareModalOpen] = useState(false);

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
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
