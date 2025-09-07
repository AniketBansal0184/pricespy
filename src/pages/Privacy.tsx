import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Eye, Lock, Cookie, Users, Globe, FileText, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-slate-700 via-gray-700 to-zinc-700 text-white overflow-hidden">
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              How we collect, use, and protect your personal information
            </p>
            <p className="text-sm text-gray-300 mt-4">Last updated: January 2024</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Quick Navigation Cards */}
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50">
            <CardHeader className="text-center pb-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300">
                <Eye className="w-5 h-5 text-white" />
              </div>
              <CardTitle className="text-sm text-gray-900">What We Collect</CardTitle>
            </CardHeader>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-green-50 to-teal-50">
            <CardHeader className="text-center pb-2">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <CardTitle className="text-sm text-gray-900">How We Protect</CardTitle>
            </CardHeader>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-purple-50 to-pink-50">
            <CardHeader className="text-center pb-2">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300">
                <Cookie className="w-5 h-5 text-white" />
              </div>
              <CardTitle className="text-sm text-gray-900">Cookies</CardTitle>
            </CardHeader>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-orange-50 to-red-50">
            <CardHeader className="text-center pb-2">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-5 h-5 text-white" />
              </div>
              <CardTitle className="text-sm text-gray-900">Your Rights</CardTitle>
            </CardHeader>
          </Card>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Introduction */}
          <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-6">
              <div className="w-14 h-14 bg-gradient-to-r from-slate-500 to-gray-600 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <CardTitle className="text-2xl text-gray-900">Introduction</CardTitle>
              <CardDescription className="text-base text-gray-600">
                Your privacy is our top priority at BeyondSchoolSupply
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                Maintaining your privacy is one of our highest priorities at BeyondSchoolSupply. This Privacy Policy explains
                how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
                By using our platform, you agree to the collection and use of information in accordance with this policy.
              </p>
            </CardContent>
          </Card>

          {/* Information We Collect */}
          <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-6">
              <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <CardTitle className="text-2xl text-gray-900">Information We Collect</CardTitle>
              <CardDescription className="text-base text-gray-600">
                What data we gather and how we use it
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  Personal Information
                </h3>
                <p className="text-gray-700 mb-4">
                  We may collect personally identifiable information (PII) that you voluntarily provide:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Contact information (name, email address, phone number)
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Account credentials (username, password)
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Billing and payment information
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Shipping addresses
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Communication preferences
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                    <Globe className="w-4 h-4 text-white" />
                  </div>
                  Non-Personal Information
                </h3>
                <p className="text-gray-700 mb-4">
                  We automatically collect certain information when you visit our website:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    IP address and location data
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Browser type and version
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Operating system
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Pages visited and time spent
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Referring website information
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Device information
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Data Security */}
          <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-6">
              <div className="w-14 h-14 bg-gradient-to-r from-red-500 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                <Lock className="w-7 h-7 text-white" />
              </div>
              <CardTitle className="text-2xl text-gray-900">Data Security</CardTitle>
              <CardDescription className="text-base text-gray-600">
                How we protect your personal information
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-6">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access,
                alteration, disclosure, or destruction. These measures include:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-red-50 to-pink-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                    <span className="font-medium text-gray-900">SSL/TLS encryption</span>
                  </div>
                  <p className="text-sm text-gray-700">For data transmission</p>
                </div>
                <div className="bg-gradient-to-br from-red-50 to-pink-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                    <span className="font-medium text-gray-900">Secure storage</span>
                  </div>
                  <p className="text-sm text-gray-700">With access controls</p>
                </div>
                <div className="bg-gradient-to-br from-red-50 to-pink-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                    <span className="font-medium text-gray-900">Regular audits</span>
                  </div>
                  <p className="text-sm text-gray-700">Security updates</p>
                </div>
                <div className="bg-gradient-to-br from-red-50 to-pink-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                    <span className="font-medium text-gray-900">Employee training</span>
                  </div>
                  <p className="text-sm text-gray-700">Data protection awareness</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cookies and Tracking */}
          <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-6">
              <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-yellow-600 rounded-xl flex items-center justify-center mb-4">
                <Cookie className="w-7 h-7 text-white" />
              </div>
              <CardTitle className="text-2xl text-gray-900">Cookies and Tracking Technologies</CardTitle>
              <CardDescription className="text-base text-gray-600">
                How we use cookies to improve your experience
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-6">
                We use cookies and similar technologies to enhance your browsing experience and analyze website traffic:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Essential Cookies</h4>
                  <p className="text-sm text-gray-700">Required for website functionality</p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Analytics Cookies</h4>
                  <p className="text-sm text-gray-700">Help us understand user behavior</p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Preference Cookies</h4>
                  <p className="text-sm text-gray-700">Remember your settings</p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Marketing Cookies</h4>
                  <p className="text-sm text-gray-700">For targeted advertising</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mt-6">
                You can control cookie preferences through your browser settings or our cookie consent banner.
              </p>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-6">
              <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-7 h-7 text-white" />
              </div>
              <CardTitle className="text-2xl text-gray-900">Your Rights and Choices</CardTitle>
              <CardDescription className="text-base text-gray-600">
                What you can control regarding your data
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-6">
                You have the following rights regarding your personal information:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Access</h4>
                  <p className="text-sm text-gray-700">Request a copy of your personal data</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Rectification</h4>
                  <p className="text-sm text-gray-700">Correct inaccurate information</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Erasure</h4>
                  <p className="text-sm text-gray-700">Request deletion of your data</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Portability</h4>
                  <p className="text-sm text-gray-700">Receive data in structured format</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Objection</h4>
                  <p className="text-sm text-gray-700">Object to processing</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Withdraw Consent</h4>
                  <p className="text-sm text-gray-700">Stop marketing communications</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Section */}
          <Card className="border-0 shadow-2xl bg-gradient-to-r from-slate-600 via-gray-600 to-zinc-600 text-white">
            <CardHeader className="text-center pb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold mb-4">Contact Us</CardTitle>
              <CardDescription className="text-slate-200 text-lg">
                Questions about this Privacy Policy or our data practices?
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                  <Mail className="w-8 h-8 text-white mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Email</h4>
                  <p className="text-slate-200">privacy@beyondschoolsupply.com</p>
                </div>
                <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                  <Phone className="w-8 h-8 text-white mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Phone</h4>
                  <p className="text-slate-200">+1 (555) 123-4567</p>
                </div>
                <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                  <MapPin className="w-8 h-8 text-white mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Address</h4>
                  <p className="text-slate-200">Education City, USA</p>
                </div>
              </div>
              <p className="text-slate-200 text-sm">
                We typically respond to privacy inquiries within 24-48 hours.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
