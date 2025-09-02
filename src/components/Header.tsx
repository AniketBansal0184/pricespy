import { useState } from "react";
import {
  Search,
  Menu,
  BarChart3,
  Clock,
  TrendingUp,
  ShoppingBag,
  User,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import type { User as SupabaseUser } from "@supabase/supabase-js";

interface HeaderProps {
  onMenuToggle: () => void;
  compareCount: number;
  onCompareClick: () => void;
  onAuthClick?: () => void;
  user?: SupabaseUser | null;
  onPopularClick?: () => void;
  onSearch?: (query: string) => void;
  onLastVisitedClick?: () => void;
}

export const Header = ({
  onMenuToggle,
  compareCount,
  onCompareClick,
  onAuthClick,
  user,
  onPopularClick,
  onSearch,
  onLastVisitedClick,
}: HeaderProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim() && onSearch) {
      onSearch(searchQuery.trim());
    }
  };

  return (
    <>
      <div className="bg-yellow-100 text-center text-sm py-1">
        🔔 Advert Space – Place your top banner ad here
      </div>

      <header className="bg-background border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4">
          {/* Main Header */}
          <div className="flex items-center justify-between h-16">
            {/* Logo & Menu Toggle */}
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" onClick={onMenuToggle}>
                <Menu className="w-5 h-5" />
              </Button>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">
                    BS
                  </span>
                </div>
                <h1 className="text-xl font-bold text-primary hidden sm:block">
                  BeyondSupplySchool
                </h1>
              </div>
            </div>

            {/* Search Bar */}
            <form
              onSubmit={handleSearch}
              className="flex-1 max-w-2xl mx-2 sm:mx-4 hidden sm:block"
            >
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Hi, what are you searching for today?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-16 sm:pr-20 py-2 w-full text-sm"
                />
                <Button
                  type="submit"
                  size="sm"
                  className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 px-2 sm:px-3 text-xs"
                >
                  Search
                </Button>
              </div>
            </form>

            {/* Mobile Search Icon */}
            <div className="sm:hidden flex items-center gap-2">
              {!mobileSearchOpen ? (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileSearchOpen(true)}
                >
                  <Search className="w-5 h-5" />
                </Button>
              ) : (
                <form
                  onSubmit={handleSearch}
                  className="flex-1 relative flex items-center"
                >
                  <Input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-10 py-2 w-full text-sm rounded-md border-2 border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all duration-300"
                    autoFocus
                  />
                  <button
                    type="button"
                    onClick={() => setMobileSearchOpen(false)}
                    className="absolute right-2 text-gray-500 hover:text-primary transition-colors duration-300"
                    aria-label="Close search"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>

            {/* Header Actions */}
            <div className="flex items-center gap-2">
              {/* Compare Button */}
              <Button
                variant="compare"
                size="sm"
                onClick={onCompareClick}
                className="relative hidden sm:flex"
              >
                <BarChart3 className="w-4 h-4" />
                <span className="hidden sm:inline ml-2">Compare</span>
                {compareCount > 0 && (
                  <Badge
                    variant="destructive"
                    className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
                  >
                    {compareCount}
                  </Badge>
                )}
              </Button>
              {user ? (
                <Button
                  variant="outline"
                  size="sm"
                  className="ml-2 w-8 h-8 rounded-full p-0"
                  onClick={onAuthClick}
                >
                  {user.email?.charAt(0).toUpperCase()}
                </Button>
              ) : (
                <Button
                  variant="outline"
                  size="sm"
                  className="ml-2"
                  onClick={onAuthClick}
                >
                  <User className="w-4 h-4" />
                  <span className="hidden sm:inline ml-1">Sign In/Log In</span>
                </Button>
              )}
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="flex lg:flex items-center gap-6 py-2 border-t border-border/50 overflow-x-auto">
            <Button variant="ghost" size="sm" className="text-xs">
              <ShoppingBag className="w-3 h-3 mr-1" />
              Daily Deals
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-xs"
              onClick={onLastVisitedClick}
            >
              <Clock className="w-3 h-3 mr-1" />
              Last Visited
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-xs"
              onClick={onPopularClick}
            >
              <TrendingUp className="w-3 h-3 mr-1" />
              Popular Categories
            </Button>
            <Button variant="ghost" size="sm" className="text-xs">
              📍 Nearby Stores
            </Button>
            <Button variant="ghost" size="sm" className="text-xs">
              🎒 Back To School
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};
