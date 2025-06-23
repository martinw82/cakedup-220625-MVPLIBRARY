import React from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-br from-amber-400 to-orange-500 p-2 rounded-xl">
                <ChefHat className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-playfair">Cake Up!</h3>
                <p className="text-sm text-gray-400">Bake Bliss. Deliver Delight.</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Your go-to platform for mastering baking with delightful recipes, convenient weekly mail-order cakes, 
              and premium baking mixes. Guided by your charming AI baking expert.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/recipes" className="text-gray-300 hover:text-orange-400 transition-colors">Bake Vault</Link></li>
              <li><Link to="/shop" className="text-gray-300 hover:text-orange-400 transition-colors">Bake Shop</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-orange-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-orange-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Returns</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Cake Up! All rights reserved. Made with ❤️ for baking enthusiasts.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;