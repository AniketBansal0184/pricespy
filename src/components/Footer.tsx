import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-10 blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full opacity-10 blur-xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full opacity-5 blur-2xl"></div>

      <div className="relative container mx-auto px-6 py-20 max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                <span className="text-white font-bold text-xl">BS</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                  BeyondSchoolSupply
                </h2>
                <p className="text-purple-300 text-sm">Price Comparison Excellence</p>
              </div>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed text-sm">
              Your trusted partner in educational price comparison. We bridge the gap between educators, schools, and parents through innovative solutions and data-driven insights.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Youtube className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"></div>
            </h3>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="about-services" className="border-white/10">
                <AccordionTrigger className="text-sm text-gray-300 hover:text-white py-2">
                  <Link to="/about-services" className="block w-full">About Our Services</Link>
                </AccordionTrigger>
              </AccordionItem>
              <AccordionItem value="prices-shipping" className="border-white/10">
                <AccordionTrigger className="text-sm text-gray-300 hover:text-white py-2">
                  <Link to="/prices-shipping" className="block w-full">About Prices & Shipping</Link>
                </AccordionTrigger>
              </AccordionItem>
              <AccordionItem value="faq" className="border-white/10">
                <AccordionTrigger className="text-sm text-gray-300 hover:text-white py-2">
                  <Link to="/faq" className="block w-full">FAQ</Link>
                </AccordionTrigger>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative">
              Contact Info
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"></div>
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-purple-400" />
                <a href="mailto:info@beyondschoolsupply.com" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                  info@beyondschoolsupply.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-purple-400" />
                <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span className="text-gray-300 text-sm">Education City, USA</span>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative">
              Legal
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"></div>
            </h3>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="privacy" className="border-white/10">
                <AccordionTrigger className="text-sm text-gray-300 hover:text-white py-2">
                  <Link to="/privacy" className="block w-full">Privacy Policy</Link>
                </AccordionTrigger>
              </AccordionItem>
              <AccordionItem value="terms" className="border-white/10">
                <AccordionTrigger className="text-sm text-gray-300 hover:text-white py-2">
                  <Link to="/terms" className="block w-full">Terms of Service</Link>
                </AccordionTrigger>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © 2024-2025 BeyondSchoolSupply. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Empowering education through smart price comparison
              </p>
            </div>

            <div className="flex space-x-6 text-xs text-gray-400">
              <a href="#" className="hover:text-white transition-colors duration-300">Privacy</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Terms</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Accessibility</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Support</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
