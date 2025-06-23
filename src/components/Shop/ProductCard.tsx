import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingBag, Star } from 'lucide-react';
import { Product } from '../../types';

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
        <div className="relative overflow-hidden">
          <Link to={`/product/${product.id}`}>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </Link>
          
          {product.isWeeklySpecial && (
            <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-full text-sm font-bold transform -rotate-12">
              Weekly Special!
            </div>
          )}

          <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 flex items-center space-x-1 shadow-md">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium">4.9</span>
          </div>
        </div>

        <div className="p-6">
          <Link to={`/product/${product.id}`}>
            <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
              {product.name}
            </h3>
          </Link>
          
          <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>

          {/* Features */}
          <div className="mb-4">
            <ul className="text-sm text-gray-600 space-y-1">
              {product.features.slice(0, 2).map((feature, idx) => (
                <li key={idx} className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2"></div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Price and Add to Cart */}
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-gray-900">
              ${product.price}
            </div>
            <button className="flex items-center space-x-2 bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors duration-200">
              <ShoppingBag className="h-4 w-4" />
              <span className="text-sm font-medium">Add to Cart</span>
            </button>
          </div>

          {/* Story Preview */}
          <div className="mt-4 p-3 bg-orange-50 rounded-lg border-l-4 border-orange-400">
            <p className="text-sm text-orange-800 italic line-clamp-2">
              {product.story}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;