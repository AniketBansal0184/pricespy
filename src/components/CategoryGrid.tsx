import { Card, CardContent } from '@/components/ui/card';
import { categories } from '@/data/categories';
import { Category } from '@/types';

interface CategoryGridProps {
  onCategoryClick: (categoryId: string) => void;
}

export const CategoryGrid = ({ onCategoryClick }: CategoryGridProps) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3 sm:gap-4">
      {categories.map((category: Category) => (
        <Card 
          key={category.id}
          className="hover:shadow-lg transition-all duration-200 cursor-pointer group h-full"
          onClick={() => onCategoryClick(category.id)}
        >
          <CardContent className="p-2 sm:p-3 md:p-4 text-center h-full flex flex-col justify-center">
            <div className="text-xl sm:text-2xl md:text-3xl mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-200">
              {category.icon}
            </div>
            <h3 className="font-medium text-xs sm:text-sm line-clamp-2 leading-tight">{category.name}</h3>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};