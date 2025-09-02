import { X, ExternalLink, Star, Package } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/types";

interface CompareModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onRemoveProduct: (productId: string) => void;
}

export const CompareModal = ({
  isOpen,
  onClose,
  products,
  onRemoveProduct,
}: CompareModalProps) => {
  if (products.length === 0) return null;

  const handleViewDeal = (dealUrl: string) => {
    window.open(dealUrl, "_blank");
  };

  // Collect all unique features across all products
  const allUniqueFeatures = Array.from(
    new Set(products.flatMap((p) => p.features))
  );

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-7xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Compare Products ({products.length})
          </DialogTitle>
        </DialogHeader>

        <div className="overflow-x-auto mt-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="p-4 border bg-gray-100 dark:bg-gray-800 text-left text-gray-700 dark:text-gray-200 w-40">
                  Attribute
                </th>
                {products.map((product) => (
                  <th
                    key={product.id}
                    className="p-4 border bg-gray-50 dark:bg-gray-700 relative"
                  >
                    {/* Remove Button */}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 h-7 w-7 rounded-full bg-white/70 dark:bg-gray-800/70 shadow hover:bg-red-100 hover:text-red-600"
                      onClick={() => onRemoveProduct(product.id)}
                    >
                      <X className="w-4 h-4" />
                    </Button>

                {/* Product Image */}
                <div className="flex flex-col items-center">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-32 object-contain"
                    />
                  ) : (
                    <div className="h-32 w-full flex items-center justify-center bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500">
                      <Package className="w-12 h-12" />
                    </div>
                  )}
                </div>
              </th>
            ))}
          </tr>
          <tr>
            <td className="p-4 border font-medium">Name</td>
            {products.map((product) => (
              <td key={product.id} className="p-4 border text-center font-semibold text-gray-800 dark:text-gray-100">
                {product.name}
              </td>
            ))}
          </tr>
            </thead>

            <tbody>
              {/* Brand */}
              <tr>
                <td className="p-4 border font-medium">Brand</td>
                {products.map((p) => (
                  <td key={p.id} className="p-4 border text-center">
                    {p.brand || "-"}
                  </td>
                ))}
              </tr>

              {/* Store */}
              <tr>
                <td className="p-4 border font-medium">Store</td>
                {products.map((p) => (
                  <td key={p.id} className="p-4 border text-center">
                    {p.store || "-"}
                  </td>
                ))}
              </tr>

              {/* Price */}
              <tr>
                <td className="p-4 border font-medium">Price</td>
                {products.map((p) => (
                  <td key={p.id} className="p-4 border text-center">
                    {p.price != null ? (
                      <>
                        <span className="font-bold text-blue-600 dark:text-blue-400">
                          £{p.price}
                        </span>
                        {p.originalPrice && (
                          <div className="text-xs text-gray-500 line-through">
                            £{p.originalPrice}
                          </div>
                        )}
                        {p.discount && (
                          <Badge variant="destructive" className="mt-1">
                            -{p.discount}%
                          </Badge>
                        )}
                      </>
                    ) : (
                      "-"
                    )}
                  </td>
                ))}
              </tr>

              {/* Rating */}
              <tr>
                <td className="p-4 border font-medium">Rating</td>
                {products.map((p) => (
                  <td key={p.id} className="p-4 border text-center">
                    {p.rating != null ? (
                      <>
                        <div className="flex items-center justify-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                          <span>{p.rating}</span>
                        </div>
                        <span className="text-xs text-gray-500">
                          ({p.reviewCount || 0})
                        </span>
                      </>
                    ) : (
                      "-"
                    )}
                  </td>
                ))}
              </tr>

              {/* Features */}
              {allUniqueFeatures.map((feature, i) => (
                <tr key={i}>
                  <td className="p-4 border font-medium">{feature}</td>
                  {products.map((p) => (
                    <td
                      key={p.id}
                      className="p-4 border text-sm text-gray-700 dark:text-gray-300 text-center"
                    >
                      {p.features.includes(feature) ? "✅" : "-"}
                    </td>
                  ))}
                </tr>
              ))}

              {/* View Deal */}
              <tr>
                <td className="p-4 border font-medium">Deal</td>
                {products.map((p) => (
                  <td key={p.id} className="p-4 border text-center">
                    {p.dealUrl ? (
                      <Button
                        variant="default"
                        size="sm"
                        className="rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                        onClick={() => handleViewDeal(p.dealUrl)}
                      >
                        <ExternalLink className="w-4 h-4 mr-1" />
                        View Deal
                      </Button>
                    ) : (
                      "-"
                    )}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </DialogContent>
    </Dialog>
  );
};
