import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Star, Truck } from 'lucide-react';
import ProductCard from '../components/Shop/ProductCard';
import { products } from '../data/products';

const Shop: React.FC = () => {
  const weeklySpecial = products.find(p => p.isWeeklySpecial);
  const mixes = products.filter(p => p.type === 'mix');

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="bg-gradient-to-br from-orange-400 to-amber-500 p-3 rounded-2xl">
              <ShoppingBag className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 font-playfair">The Bake Shop</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Premium weekly cakes and expertly crafted baking mixes, delivered fresh to your door
          </p>
        </motion.div>

        {/* Baker's Buddy Welcome */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-2xl p-6 mb-12 text-center"
        >
          <p className="text-lg text-gray-700 italic">
            "Welcome to our little shop, honey! Every cake and mix here is made with the same love and care 
            as if I were baking right in your kitchen. Treat yourself to something special!"
          </p>
        </motion.div>

        {/* Weekly Special */}
        {weeklySpecial && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2 font-playfair">🍰 Cake of the Week</h2>
              <p className="text-gray-600">Limited availability - order while supplies last!</p>
            </div>
            
            <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl p-8 text-white">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-block px-4 py-2 bg-white bg-opacity-20 rounded-full text-sm font-medium mb-4">
                    ⭐ This Week's Special
                  </div>
                  <h3 className="text-4xl font-bold mb-4 font-playfair">{weeklySpecial.name}</h3>
                  <p className="text-lg mb-4 opacity-90">{weeklySpecial.story}</p>
                  <p className="text-xl mb-6">{weeklySpecial.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {weeklySpecial.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-yellow-300 fill-current" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center space-x-6 mb-6">
                    <div className="text-3xl font-bold">${weeklySpecial.price}</div>
                    <div className="flex items-center space-x-2 text-sm opacity-75">
                      <Truck className="h-4 w-4" />
                      <span>Free delivery this week</span>
                    </div>
                  </div>
                  
                  <button className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 text-lg">
                    Order This Week's Special
                  </button>
                </div>
                
                <div className="relative">
                  <img
                    src={weeklySpecial.image}
                    alt={weeklySpecial.name}
                    className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                  />
                  <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full font-bold text-sm transform rotate-12">
                    Limited Time!
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Baking Mixes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-playfair">Premium Baking Mixes</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional-quality mixes that bring bakery results to your home kitchen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mixes.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Fresh Delivery</h3>
            <p className="text-gray-600">All cakes delivered fresh within 48 hours of baking</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Premium Quality</h3>
            <p className="text-gray-600">Only the finest ingredients, tested by our expert bakers</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShoppingBag className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Easy Ordering</h3>
            <p className="text-gray-600">Simple checkout with multiple payment options</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Shop;