import { Link } from "react-router-dom";
import { ArrowLeft, FileText, Shield, Users, AlertTriangle, Scale, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white overflow-hidden">
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
              Terms of Service
            </h1>
            <p className="text-xl md:text-2xl text-cyan-200 max-w-3xl mx-auto leading-relaxed">
              Terms and conditions for using BeyondSchoolSupply
            </p>
            <p className="text-sm text-cyan-300 mt-4">Last updated: January 2024</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Quick Navigation Cards */}
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50">
            <CardHeader className="text-center pb-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <CardTitle className="text-sm text-gray-900">Agreement</CardTitle>
            </CardHeader>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-green-50 to-teal-50">
            <CardHeader className="text-center pb-2">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <CardTitle className="text-sm text-gray-900">User Rights</CardTitle>
            </CardHeader>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-purple-50 to-pink-50">
            <CardHeader className="text-center pb-2">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300">
                <Scale className="w-5 h-5 text-white" />
              </div>
              <CardTitle className="text-sm text-gray-900">Legal Terms</CardTitle>
            </CardHeader>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-orange-50 to-red-50">
            <CardHeader className="text-center pb-2">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300">
                <AlertTriangle className="w-5 h-5 text-white" />
              </div>
              <CardTitle className="text-sm text-gray-900">Disclaimers</CardTitle>
            </CardHeader>
          </Card>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Agreement */}
          <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-6">
              <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
                <FileText className="w-7 h-7 text-white" />
              </div>
              <CardTitle className="text-2xl text-gray-900">Agreement to Terms</CardTitle>
              <CardDescription className="text-base text-gray-600">
                Your acceptance of our terms and conditions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                By accessing and using BeyondSchoolSupply, you accept and agree to be bound by the terms and provision
                of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </CardContent>
          </Card>

          {/* The Service */}
          <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-6">
              <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <CardTitle className="text-2xl text-gray-900">The Service</CardTitle>
              <CardDescription className="text-base text-gray-600">
                What BeyondSchoolSupply provides to you
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-6">
                BeyondSchoolSupply provides price comparison services for educational supplies and materials. Our platform:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-green-50 to-teal-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    <span className="font-medium text-gray-900">Connects users with retailers</span>
                  </div>
                  <p className="text-sm text-gray-700">Offering educational products</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-teal-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    <span className="font-medium text-gray-900">Price comparison information</span>
                  </div>
                  <p className="text-sm text-gray-700">And product details</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-teal-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    <span className="font-medium text-gray-900">Information service</span>
                  </div>
                  <p className="text-sm text-gray-700">Linking to third-party retailers</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-teal-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    <span className="font-medium text-gray-900">No direct sales</span>
                  </div>
                  <p className="text-sm text-gray-700">We don't sell products directly</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* User Accounts */}
          <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-6">
              <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-7 h-7 text-white" />
              </div>
              <CardTitle className="text-2xl text-gray-900">User Accounts</CardTitle>
              <CardDescription className="text-base text-gray-600">
                Your responsibilities when using our service
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-6">
                When you create an account with us, you must provide information that is accurate, complete, and current at all times.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Account Security</h4>
                  <p className="text-sm text-gray-700">Safeguard your credentials and notify us of unauthorized access</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Account Responsibility</h4>
                  <p className="text-sm text-gray-700">You are responsible for all activities under your account</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Termination Rights</h4>
                  <p className="text-sm text-gray-700">We reserve the right to terminate accounts that violate terms</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Account Management</h4>
                  <p className="text-sm text-gray-700">Keep your information accurate and up-to-date</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Acceptable Use */}
          <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-6">
              <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-yellow-600 rounded-xl flex items-center justify-center mb-4">
                <Scale className="w-7 h-7 text-white" />
              </div>
              <CardTitle className="text-2xl text-gray-900">Acceptable Use</CardTitle>
              <CardDescription className="text-base text-gray-600">
                How you can and cannot use our service
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                    <Shield className="w-4 h-4 text-white" />
                  </div>
                  Permitted Use
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Personal, non-commercial research and comparison shopping
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Educational and informational purposes
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Legitimate business procurement research
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center mr-3">
                    <AlertTriangle className="w-4 h-4 text-white" />
                  </div>
                  Prohibited Activities
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Unauthorized access to our systems or networks
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Posting or transmitting illegal, harmful, or offensive content
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Interfering with or disrupting our services
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Using automated tools to scrape or collect data without permission
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Disclaimers */}
          <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-6">
              <div className="w-14 h-14 bg-gradient-to-r from-red-500 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                <AlertTriangle className="w-7 h-7 text-white" />
              </div>
              <CardTitle className="text-2xl text-gray-900">Disclaimers and Limitations</CardTitle>
              <CardDescription className="text-base text-gray-600">
                Important limitations and disclaimers
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Service "As Is"</h3>
                <p className="text-gray-700 leading-relaxed">
                  The information on this website is provided on an "as is" basis. We disclaim all warranties,
                  express or implied, including but not limited to warranties of merchantability, fitness for a
                  particular purpose, and non-infringement.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Accuracy of Information</h3>
                <p className="text-gray-700 leading-relaxed">
                  While we strive for accuracy, we do not guarantee that product information, pricing, or availability
                  is complete, accurate, or current. Prices and availability may change without notice.
                </p>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Limitation of Liability</h3>
                <p className="text-gray-700 leading-relaxed">
                  In no event shall BeyondSchoolSupply be liable for any indirect, incidental, special, consequential,
                  or punitive damages arising out of or related to your use of the service.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact Section */}
          <Card className="border-0 shadow-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white">
            <CardHeader className="text-center pb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold mb-4">Contact Information</CardTitle>
              <CardDescription className="text-cyan-200 text-lg">
                Questions about these Terms of Service?
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                  <Mail className="w-8 h-8 text-white mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Email</h4>
                  <p className="text-cyan-200">legal@beyondschoolsupply.com</p>
                </div>
                <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                  <Phone className="w-8 h-8 text-white mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Phone</h4>
                  <p className="text-cyan-200">+1 (555) 123-4567</p>
                </div>
                <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                  <MapPin className="w-8 h-8 text-white mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Address</h4>
                  <p className="text-cyan-200">Education City, USA</p>
                </div>
              </div>
              <p className="text-cyan-200 text-sm">
                We typically respond to legal inquiries within 24-48 hours.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Terms;
