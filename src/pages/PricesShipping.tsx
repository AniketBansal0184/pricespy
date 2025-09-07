import { Link } from "react-router-dom";
import { ArrowLeft, DollarSign, Truck, Package, Clock, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const PricesShipping = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-700 via-pink-700 to-red-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
        </div>

        <div className="relative container mx-auto px-4 py-16 max-w-6xl">
          <Link to="/">
            <Button variant="ghost" className="mb-8 text-white hover:bg-white/20 border-white/30">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>

          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent">
              About Prices & Shipping
            </h1>
            <p className="text-xl md:text-2xl text-pink-200 max-w-3xl mx-auto leading-relaxed">
              Understanding our pricing methodology and shipping policies
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Price Updates */}
        <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-pink-50 to-red-50 mb-8">
          <CardHeader className="pb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <CardTitle className="text-2xl text-gray-900 group-hover:text-pink-600 transition-colors">
              Price Updates
            </CardTitle>
            <CardDescription className="text-gray-600 text-base">
              Current and accurate pricing information you can rely on
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Most prices are updated daily, often more frequently
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Automated systems monitor price changes 24/7
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Manual verification ensures accuracy for critical items
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Historical price tracking shows trends over time
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Price alerts notify users of significant changes
              </li>
            </ul>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
              <div className="flex items-start">
                <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-yellow-800 font-medium">Important Note:</p>
                  <p className="text-yellow-700">Always verify prices on retailer websites before making purchases, as prices can change between updates.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* How to Compare */}
        <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-red-50 to-orange-50 mb-8">
          <CardHeader className="pb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <CardTitle className="text-2xl text-gray-900 group-hover:text-red-600 transition-colors">
              How to Compare Prices
            </CardTitle>
            <CardDescription className="text-gray-600 text-base">
              Our price comparison system designed to help you find the best deals
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="bg-white/50 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Compare Price Button</h3>
                <p className="text-gray-700">Click "Compare price" to see all retailers offering the product, with the lowest price excluding shipping shown first.</p>
              </div>
              <div className="bg-white/50 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Sorting Options</h3>
                <p className="text-gray-700">Results are automatically sorted by total cost (price + shipping) to show the best overall value.</p>
              </div>
              <div className="bg-white/50 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Price History</h3>
                <p className="text-gray-700">View historical price data to identify the best time to purchase.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* VAT & Membership */}
        <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-orange-50 to-yellow-50 mb-8">
          <CardHeader className="pb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Package className="w-6 h-6 text-white" />
            </div>
            <CardTitle className="text-2xl text-gray-900 group-hover:text-orange-600 transition-colors">
              VAT & Membership Stores
            </CardTitle>
            <CardDescription className="text-gray-600 text-base">
              Understanding tax implications and membership benefits
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="bg-white/50 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Value Added Tax (VAT)</h3>
                <p className="text-gray-700">All prices displayed include applicable VAT. We clearly indicate when VAT is included or excluded from the price.</p>
              </div>
              <div className="bg-white/50 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Membership Stores</h3>
                <p className="text-gray-700">We list membership stores that meet our quality and reliability requirements. Membership pricing is clearly marked and may require account registration.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Shipping Information */}
        <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-green-50 to-teal-50 mb-8">
          <CardHeader className="pb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Truck className="w-6 h-6 text-white" />
            </div>
            <CardTitle className="text-2xl text-gray-900 group-hover:text-green-600 transition-colors">
              Shipping Information
            </CardTitle>
            <CardDescription className="text-gray-600 text-base">
              Comprehensive shipping costs and delivery information
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                We show the lowest valid shipping costs available for each product
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Shipping costs are calculated based on your location and order value
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Free shipping thresholds are clearly displayed when available
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Some products may show "Delivery unknown" if shipping information is not available
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Estimated delivery times are provided when available
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Bulk order shipping discounts are highlighted
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Stock Status */}
        <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50">
          <CardHeader className="pb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Package className="w-6 h-6 text-white" />
            </div>
            <CardTitle className="text-2xl text-gray-900 group-hover:text-blue-600 transition-colors">
              Stock Status
            </CardTitle>
            <CardDescription className="text-gray-600 text-base">
              Understanding product availability for informed purchasing decisions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <h3 className="font-semibold text-green-800">In Stock</h3>
                </div>
                <p className="text-green-700 text-sm">Product is available for immediate purchase and shipping.</p>
              </div>
              <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                  <h3 className="font-semibold text-red-800">Not in Stock</h3>
                </div>
                <p className="text-red-700 text-sm">Product is currently unavailable. Check back later or explore alternatives.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <h3 className="font-semibold text-blue-800">Limited Stock</h3>
                </div>
                <p className="text-blue-700 text-sm">Only a few items remaining. Consider purchasing soon.</p>
              </div>
              <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                  <h3 className="font-semibold text-yellow-800">Pre-Order</h3>
                </div>
                <p className="text-yellow-700 text-sm">Product is available for pre-order with estimated delivery date.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PricesShipping;
