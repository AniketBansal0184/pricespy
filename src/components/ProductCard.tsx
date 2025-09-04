import { useState } from 'react';
import { ExternalLink, BarChart3, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
  onCompare?: (product: Product) => void;
  isSelected?: boolean;
  showCompare?: boolean;
}

export const ProductCard = ({
  product,
  onCompare,
  isSelected = false,
  showCompare = true,
}: ProductCardProps) => {
  const [imageError, setImageError] = useState(false);

  const handleViewDeal = () => {
    window.open(product.dealUrl, '_blank');
  };

  const handleCompare = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onCompare?.(product);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <Star key="half" className="w-3 h-3 fill-yellow-400/50 text-yellow-400" />
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} className="w-3 h-3 text-gray-300" />
      );
    }

    return stars;
  };

  return (
    <Card
      className={`group hover:shadow-lg transition-all duration-200 h-full flex flex-col ${
        isSelected ? 'ring-2 ring-compare' : ''
      }`}
    >
      <CardContent className="p-3 sm:p-4 flex flex-col h-full">
        {/* Product Image */}
        <div className="aspect-square sm:aspect-video mb-2 sm:mb-3 overflow-hidden rounded-md bg-muted flex items-center justify-center">
          {!imageError && product.image ? (
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted-foreground text-xl sm:text-2xl">
              📦
            </div>
          )}
        </div>

        {/* Product Name BELOW image */}
        <h3 className="font-semibold text-xs sm:text-sm line-clamp-2 min-h-[2rem] sm:min-h-[2.5rem] text-center mb-2">
          {product.name}
        </h3>

        {/* Subcategory */}
        {product.subcategory && (
          <p className="text-xs text-muted-foreground text-center mb-1">
            {product.subcategory}
          </p>
        )}
        <div className="space-y-1 sm:space-y-2 flex-1 flex flex-col">
          {/* Brand & Store */}
          <div className="flex justify-between text-xs text-muted-foreground">
            <span className="truncate">{product.brand}</span>
            <span className="truncate ml-1">{product.store}</span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-1 sm:gap-2 flex-wrap mt-1">
            <span className="font-bold text-sm sm:text-lg text-primary">
              ${product.price}
            </span>
            {product.originalPrice && (
              <>
                <span className="text-xs sm:text-sm line-through text-muted-foreground">
                  ${product.originalPrice}
                </span>
                {product.discount && (
                  <Badge variant="destructive" className="text-xs">
                    -{product.discount}%
                  </Badge>
                )}
              </>
            )}
          </div>

          {/* Rating */}
          {product.rating && (
            <div className="flex items-center gap-1 mt-1">
              <div className="flex">
                {renderStars(product.rating)}
              </div>
              <span className="text-xs text-muted-foreground">
                {product.rating}
              </span>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-1 sm:gap-2 mt-auto pt-2">
            <Button
              variant="viewDeal"
              size="sm"
              className="flex-1 text-xs sm:text-sm h-8 sm:h-9"
              onClick={handleViewDeal}
            >
              <ExternalLink className="w-3 h-3" />
              <span className="hidden sm:inline ml-1">View Deal</span>
              <span className="sm:hidden ml-1">Deal</span>
            </Button>

            {showCompare && (
              <Button
                variant={isSelected ? 'default' : 'compare'}
                size="sm"
                onClick={handleCompare}
                className="px-2 sm:px-3 h-8 sm:h-9"
              >
                <BarChart3 className="w-3 h-3" />
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
