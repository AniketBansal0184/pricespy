import { Link } from "react-router-dom";
import { ArrowLeft, HelpCircle, Mail, MessageCircle, Search, Shield, User, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const FAQ = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-indigo-600 via-cyan-600 to-teal-600 text-white overflow-hidden">
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl text-cyan-200 max-w-3xl mx-auto leading-relaxed">
              Find comprehensive answers to common questions about BeyondSchoolSupply
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Quick Help Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50">
            <CardHeader className="text-center pb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Search className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-lg text-gray-900">Quick Search</CardTitle>
              <CardDescription>Use our search bar to find specific topics</CardDescription>
            </CardHeader>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-green-50 to-teal-50">
            <CardHeader className="text-center pb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-lg text-gray-900">Live Chat</CardTitle>
              <CardDescription>Get instant help from our support team</CardDescription>
            </CardHeader>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-purple-50 to-pink-50">
            <CardHeader className="text-center pb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-lg text-gray-900">Email Support</CardTitle>
              <CardDescription>Contact us anytime for detailed assistance</CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* FAQ Accordion */}
        <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center pb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-3xl font-bold text-gray-900 mb-4">Common Questions</CardTitle>
            <CardDescription className="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse through our most frequently asked questions to find the information you need
            </CardDescription>
          </CardHeader>

          <CardContent className="px-8 pb-8">
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="how-we-compare" className="border-0 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl px-6 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-blue-600 py-6 hover:no-underline">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Search className="w-4 h-4 text-white" />
                    </div>
                    How do we compare products?
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pb-6 pl-12">
                  <p className="mb-4 text-base leading-relaxed">
                    We use a combination of automated and manual processes to ensure accurate and relevant product information:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Automated web scraping tools collect pricing data from verified retailers
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Manual verification by our team ensures data accuracy
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Quality control checks validate product specifications
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Regular audits maintain data integrity
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Advanced algorithms match similar products across retailers
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="do-we-sell" className="border-0 bg-gradient-to-r from-green-50 to-teal-50 rounded-xl px-6 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-green-600 py-6 hover:no-underline">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Shield className="w-4 h-4 text-white" />
                    </div>
                    Do we sell products?
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pb-6 pl-12">
                  <p className="text-base leading-relaxed">
                    No, BeyondSchoolSupply is not a retailer. We are an information service that links customers to retailers.
                    Our platform provides price comparison tools and product information to help you make informed purchasing decisions.
                    When you click on a product, you'll be directed to the retailer's website to complete your purchase.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="price-accuracy" className="border-0 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl px-6 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-purple-600 py-6 hover:no-underline">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <AlertCircle className="w-4 h-4 text-white" />
                    </div>
                    How accurate is the price information?
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pb-6 pl-12">
                  <p className="mb-4 text-base leading-relaxed">
                    We strive to provide the most accurate pricing information possible:
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Prices are updated frequently, often multiple times per day
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Automated systems monitor for price changes 24/7
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Manual spot-checks ensure critical pricing accuracy
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Historical price tracking shows price trends over time
                    </li>
                  </ul>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                    <div className="flex items-start">
                      <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <p className="text-yellow-800 font-medium">Recommendation:</p>
                        <p className="text-yellow-700">Always verify the final price on the retailer's website before making a purchase, as prices can change between our updates.</p>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="account-needed" className="border-0 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl px-6 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-orange-600 py-6 hover:no-underline">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <User className="w-4 h-4 text-white" />
                    </div>
                    Do I need an account to use the service?
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pb-6 pl-12">
                  <p className="mb-4 text-base leading-relaxed">
                    You can browse and compare prices without an account, but creating an account provides additional benefits:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Save favorite products and retailers
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Receive price drop alerts
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Access purchase history and tracking
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Create wishlists for future purchases
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Get personalized recommendations
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="report-issue" className="border-0 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl px-6">
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-cyan-600 py-6 hover:no-underline">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="w-4 h-4 text-white" />
                    </div>
                    How do I report an issue or incorrect information?
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pb-6 pl-12">
                  <p className="mb-4 text-base leading-relaxed">
                    We're committed to maintaining accurate information:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Use the "Report Issue" button on any product page
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Contact our support team at <a href="mailto:support@beyondschoolsupply.com" className="text-cyan-600 hover:underline font-medium">support@beyondschoolsupply.com</a>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Include product URL and details of the issue
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Our team reviews reports within 24 hours
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Corrections are made promptly when verified
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Contact Section */}
        <Card className="border-0 shadow-2xl bg-gradient-to-r from-indigo-600 via-cyan-600 to-teal-600 text-white mt-12">
          <CardHeader className="text-center pb-6">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-3xl font-bold mb-4">Still have questions?</CardTitle>
            <CardDescription className="text-cyan-100 text-lg">
              Can't find the answer you're looking for? Our support team is here to help.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="mailto:support@beyondschoolsupply.com" className="inline-flex items-center justify-center px-8 py-4 bg-white text-indigo-600 rounded-xl hover:bg-gray-100 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <Mail className="w-5 h-5 mr-3" />
                Email Support
              </a>
              <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-cyan-500 text-white rounded-xl hover:bg-cyan-400 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <MessageCircle className="w-5 h-5 mr-3" />
                Contact Us
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FAQ;
