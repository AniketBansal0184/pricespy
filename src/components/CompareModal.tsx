// import { X, ExternalLink, Star } from 'lucide-react';
// import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
// import { Button } from '@/components/ui/button';
// import { Badge } from '@/components/ui/badge';
// import { Product } from '@/types';

// interface CompareModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   products: Product[];
//   onRemoveProduct: (productId: string) => void;
// }

// export const CompareModal = ({ isOpen, onClose, products, onRemoveProduct }: CompareModalProps) => {
//   if (products.length === 0) return null;

//   const handleViewDeal = (dealUrl: string) => {
//     window.open(dealUrl, '_blank');
//   };

//   return (
//     <Dialog open={isOpen} onOpenChange={onClose}>
//       <DialogContent className="max-w-7xl max-h-[90vh] overflow-y-auto">
//         <DialogHeader>
//           <DialogTitle className="text-xl">Compare Products ({products.length})</DialogTitle>
//         </DialogHeader>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
//           {products.map((product) => (
//             <div key={product.id} className="border rounded-lg p-4 relative">
//               {/* Remove Button */}
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 className="absolute top-2 right-2 h-6 w-6"
//                 onClick={() => onRemoveProduct(product.id)}
//               >
//                 <X className="w-4 h-4" />
//               </Button>

//               {/* Product Image */}
//               <div className="aspect-video mb-3 overflow-hidden rounded-md bg-muted">
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               {/* Product Details */}
//               <div className="space-y-3">
//                 <h3 className="font-semibold text-sm">{product.name}</h3>

//                 {/* Brand & Store */}
//                 <div className="space-y-1">
//                   <div className="flex justify-between text-xs">
//                     <span className="text-muted-foreground">Brand:</span>
//                     <span className="font-medium">{product.brand}</span>
//                   </div>
//                   <div className="flex justify-between text-xs">
//                     <span className="text-muted-foreground">Store:</span>
//                     <span className="font-medium">{product.store}</span>
//                   </div>
//                 </div>

//                 {/* Rating */}
//                 <div className="flex justify-between text-xs">
//                   <span className="text-muted-foreground">Rating:</span>
//                   <div className="flex items-center gap-1">
//                     <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
//                     <span className="font-medium">{product.rating}</span>
//                     <span className="text-muted-foreground">({product.reviewCount})</span>
//                   </div>
//                 </div>

//                 {/* Price Comparison */}
//                 <div className="space-y-1">
//                   <div className="flex justify-between items-center">
//                     <span className="text-muted-foreground text-xs">Price:</span>
//                     <span className="font-bold text-lg text-primary">£{product.price}</span>
//                   </div>
//                   {product.originalPrice && (
//                     <div className="flex justify-between items-center">
//                       <span className="text-muted-foreground text-xs">Original:</span>
//                       <div className="flex items-center gap-2">
//                         <span className="text-sm line-through text-muted-foreground">£{product.originalPrice}</span>
//                         {product.discount && (
//                           <Badge variant="destructive" className="text-xs">-{product.discount}%</Badge>
//                         )}
//                       </div>
//                     </div>
//                   )}
//                 </div>

//                 {/* Features */}
//                 <div>
//                   <span className="text-muted-foreground text-xs mb-2 block">Key Features:</span>
//                   <ul className="space-y-1">
//                     {product.features.slice(0, 4).map((feature, index) => (
//                       <li key={index} className="text-xs flex items-start gap-1">
//                         <span className="text-green-500 mt-0.5">✓</span>
//                         <span>{feature}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 {/* View Deal Button */}
//                 <Button
//                   variant="viewDeal"
//                   size="sm"
//                   className="w-full"
//                   onClick={() => handleViewDeal(product.dealUrl)}
//                 >
//                   <ExternalLink className="w-3 h-3" />
//                   View Deal
//                 </Button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {products.length < 2 && (
//           <div className="text-center py-8 text-muted-foreground">
//             <p>Add more products to compare features side by side</p>
//           </div>
//         )}
//       </DialogContent>
//     </Dialog>
//   );
// };

import { X, ExternalLink, Star } from "lucide-react";
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

                    {/* Product Image & Name */}
                    <div className="flex flex-col items-center">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-32 object-contain mb-2"
                      />
                      <p className="font-semibold text-gray-800 dark:text-gray-100 line-clamp-2 text-center">
                        {product.name}
                      </p>
                    </div>
                  </th>
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
