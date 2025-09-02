import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ProductCard } from "./ProductCard";
import { Product, CompareProduct } from "@/types";

interface PopularProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
  compareProducts: CompareProduct[];
  onCompareToggle: (product: Product) => void;
}

export const PopularProductModal = ({
  isOpen,
  onClose,
  product,
  compareProducts,
  onCompareToggle,
}: PopularProductModalProps) => {
  if (!product) return null;

  const isProductSelected = (productId: string) => {
    return compareProducts.some((p) => p.id === productId);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold">
            ⭐ Top Rated Product
          </DialogTitle>
        </DialogHeader>
        <div className="flex justify-center">
          <ProductCard
            product={product}
            onCompare={onCompareToggle}
            isSelected={isProductSelected(product.id)}
            showCompare={true}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
