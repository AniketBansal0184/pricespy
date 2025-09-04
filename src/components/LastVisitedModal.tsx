import { X, ExternalLink } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Product } from "@/types";

interface LastVisitedModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onProductSelect: (product: Product) => void;
}

export const LastVisitedModal = ({
  isOpen,
  onClose,
  products,
  onProductSelect,
}: LastVisitedModalProps) => {
  if (products.length === 0) return null;

  const handleViewProduct = (product: Product) => {
    onProductSelect(product);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto rounded-2xl shadow-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Last Visited Compared Products ({products.length})
          </DialogTitle>
        </DialogHeader>

        <div className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => handleViewProduct(product)}
              >
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-32 object-contain mb-2"
                  />
                ) : (
                  <div className="w-full h-32 bg-gray-100 dark:bg-gray-700 rounded mb-2 flex items-center justify-center">
                    <span className="text-gray-400">No Image</span>
                  </div>
                )}
                <h3 className="font-semibold text-sm mb-1">{product.name}</h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                  {product.brand || "Unknown Brand"}
                </p>
                {product.price && (
                  <p className="text-sm font-bold text-blue-600 dark:text-blue-400">
                    ${product.price}
                  </p>
                )}
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full mt-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleViewProduct(product);
                  }}
                >
                  <ExternalLink className="w-4 h-4 mr-1" />
                  View Product
                </Button>
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
