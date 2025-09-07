import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Calculator, TrendingUp, BarChart3, Target, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const AboutServices = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white overflow-hidden">
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              About Our Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Discover how BeyondSchoolSupply revolutionizes educational price comparison with comprehensive solutions
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Educational Equipment */}
          <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-2xl text-gray-900 group-hover:text-blue-600 transition-colors">
                Educational Equipment
              </CardTitle>
              <CardDescription className="text-gray-600 text-base">
                Comprehensive price comparison for cutting-edge educational technology
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Interactive whiteboards and projectors
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Computer labs and technology setups
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Science laboratory equipment
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Gym and sports equipment
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Music and art supplies
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Special education tools and aids
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Educational Materials */}
          <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-purple-50 to-pink-50">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Calculator className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-2xl text-gray-900 group-hover:text-purple-600 transition-colors">
                Educational Materials
              </CardTitle>
              <CardDescription className="text-gray-600 text-base">
                Complete coverage of all educational materials and resources
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Textbooks and workbooks
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Teaching aids and manipulatives
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Assessment materials and tests
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Curriculum packages
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Digital learning resources
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Student supplies and stationery
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Brand Building and Positioning */}
          <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-green-50 to-emerald-50">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-2xl text-gray-900 group-hover:text-green-600 transition-colors">
                Brand Building & Positioning
              </CardTitle>
              <CardDescription className="text-gray-600 text-base">
                Strategic brand development and market positioning services
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Strategic brand positioning
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Market analysis and competitor research
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Target audience identification
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Brand messaging and communication strategies
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Digital presence optimization
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Customer relationship management
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Analytics and Performance Tracking */}
          <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-orange-50 to-red-50">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-2xl text-gray-900 group-hover:text-orange-600 transition-colors">
                Analytics & Performance Tracking
              </CardTitle>
              <CardDescription className="text-gray-600 text-base">
                Advanced analytics and insights for data-driven decision making
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Purchase pattern analysis
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Supplier performance metrics
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Cost optimization recommendations
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Budget planning and forecasting
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Trend analysis and market insights
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Custom reporting dashboards
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Mission Section */}
        <Card className="border-0 shadow-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
          <CardHeader className="text-center pb-6">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-3xl font-bold mb-4">Our Mission</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <p className="text-lg text-indigo-100 leading-relaxed max-w-4xl mx-auto">
              BeyondSchoolSupply is driven by a passion for transforming general education marketing through innovative solutions.
              With a profound belief in the power of price comparison to shape the future, we have dedicated ourselves to helping
              educational stores, schools and parents reach their goals and connect with their audiences effectively.
            </p>
            <p className="text-lg text-indigo-100 leading-relaxed max-w-4xl mx-auto">
              Our mission is to bridge the gap between educators, schools and parents by leveraging cutting-edge marketing
              strategies. We strive to enhance educational experiences, promote lifelong learning, and foster a love for knowledge.
              Through our expertise, creativity, and dedication, we aim to empower educational institutions to flourish in a
              rapidly evolving digital landscape.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AboutServices;
