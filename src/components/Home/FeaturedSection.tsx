import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Users, Star, ArrowRight } from 'lucide-react';
import { recipes } from '../../data/recipes';
import { products } from '../../data/products';

const FeaturedSection: React.FC = () => {
  const featuredRecipes = recipes.slice(0, 3);
  const weeklySpecial = products.find(p => p.isWeeklySpecial);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Recipes */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-playfair">
              Featured Bakes of the Week
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Handpicked recipes that are trending with our baking community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRecipes.map((recipe, index) => (
              <motion.div
                key={recipe.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link to={`/recipe/${recipe.id}`}>
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
                    <div className="relative overflow-hidden">
                      <img
                        src={recipe.image}
                        alt={recipe.name}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium">{recipe.rating}</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                        {recipe.name}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">{recipe.description}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{recipe.prepTime + recipe.bakeTime} mins</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="h-4 w-4" />
                          <span>Serves {recipe.servings}</span>
                        </div>
                        <span className="px-2 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-medium">
                          {recipe.difficulty}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/recipes"
              className="inline-flex items-center px-8 py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors duration-300"
            >
              View All Recipes
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>

        {/* Weekly Special */}
        {weeklySpecial && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl p-8 text-white"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-white bg-opacity-20 rounded-full text-sm font-medium mb-4">
                  🍰 Cake of the Week
                </div>
                <h3 className="text-3xl font-bold mb-4 font-playfair">{weeklySpecial.name}</h3>
                <p className="text-lg mb-4 opacity-90">{weeklySpecial.story}</p>
                <p className="text-xl mb-6">{weeklySpecial.description}</p>
                <div className="flex items-center space-x-6 mb-6">
                  <div className="text-2xl font-bold">${weeklySpecial.price}</div>
                  <div className="text-sm opacity-75">Limited availability this week</div>
                </div>
                <Link
                  to={`/product/${weeklySpecial.id}`}
                  className="inline-flex items-center px-6 py-3 bg-white text-orange-600 font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300"
                >
                  Order Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
              <div className="relative">
                <img
                  src={weeklySpecial.image}
                  alt={weeklySpecial.name}
                  className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full font-bold text-sm transform rotate-12">
                  This Week Only!
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default FeaturedSection;