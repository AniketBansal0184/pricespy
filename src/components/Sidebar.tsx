import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { categories } from "@/data/categories";
import { Category, Product } from "@/types";

interface SidebarProps {
  isOpen: boolean;
  onCategorySelect: (categoryId: string) => void;
  onSubcategorySelect: (categoryId: string, subcategoryId: string) => void;
  selectedCategory?: string;
}

export const Sidebar = ({
  isOpen,
  onCategorySelect,
  onSubcategorySelect,
  selectedCategory,
}: SidebarProps) => {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const handleCategoryClick = (categoryId: string) => {
    onCategorySelect(categoryId);
    if (!expandedCategories.includes(categoryId)) {
      toggleCategory(categoryId);
    }
  };

  return (
    <aside
      className={`
    fixed top-[calc(4.5rem+1px)] bottom-0 left-0 z-40 w-72 sm:w-80 bg-background border-r border-border
    transform transition-transform duration-300 ease-in-out
    ${isOpen ? "translate-x-0" : "-translate-x-full"}
  `}
    >
      {/* 🔑 Sidebar content full height with flex */}
      <div className="flex flex-col h-screen">
        {/* Scrollable area */}
        <ScrollArea className="flex-1">
          <div className="p-3 mt-14">
            {categories.map((category: Category) => (
              <div key={category.id} className="mb-1">
                {/* Category Header */}
                <Button
                  variant="ghost"
                  className={`w-full justify-between text-left h-auto p-3 ${
                    selectedCategory === category.id
                      ? "bg-accent text-accent-foreground"
                      : ""
                  }`}
                  onClick={() => handleCategoryClick(category.id)}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-lg">{category.icon}</span>
                    <div>
                      <div className="font-medium text-sm">{category.name}</div>
                      <div className="text-xs text-muted-foreground">
                        products
                      </div>
                    </div>
                  </div>

                  {expandedCategories.includes(category.id) ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </Button>

                {/* Subcategories */}
                {expandedCategories.includes(category.id) && (
                  <div className="ml-4 mt-1 space-y-1">
                    {category.subcategories.map((subcategory) => (
                      <Button
                        key={subcategory.id}
                        variant="ghost"
                        size="sm"
                        className="w-full justify-start text-left h-auto p-2 text-xs"
                        onClick={() =>
                          onSubcategorySelect(category.id, subcategory.id)
                        }
                      >
                        {subcategory.name}
                      </Button>
                    ))}
                  </div>
                )}
              </div>
            ))}


          </div>
        </ScrollArea>
      </div>
    </aside>
  );
};
