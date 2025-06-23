import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Cake, Cookie, PieChart, Heading as Bread, PinOff as Muffin, ChefHat } from 'lucide-react';

const categories = [
  {
    name: 'Cakes',
    icon: Cake,
    description: 'Layer cakes, bundt cakes, and sheet cakes',
    color: 'from-pink-400 to-rose-500',
    count: '15+ recipes'
  },
  {
    name: 'Cookies & Bars',
    icon: Cookie,
    description: 'Chewy cookies, crispy treats, and bars',
    color: 'from-amber-400 to-orange-500',
    count: '20+ recipes'
  },
  {
    name: 'Pies & Tarts',
    icon: PieChart,
    description: 'Classic pies and elegant tarts',
    color: 'from-purple-400 to-indigo-500',
    count: '12+ recipes'
  },
  {
    name: 'Bread & Yeasted',
    icon: Bread,
    description: 'Artisan breads and yeasted goods',
    color: 'from-yellow-400 to-amber-500',
    count: '8+ recipes'
  },
  {
    name: 'Cupcakes & Muffins',
    icon: Muffin,
    description: 'Individual treats and breakfast bakes',
    color: 'from-green-400 to-emerald-500',
    count: '18+ recipes'
  },
  {
    name: 'Frostings & Fillings',
    icon: ChefHat,
    description: 'Perfect toppings and fillings',
    color: 'from-blue-400 to-cyan-500',
    count: '10+ recipes'
  }
];

const CategoriesSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-playfair">
            Explore by Category
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From simple cookies to elaborate cakes, find the perfect recipe for any occasion
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link to={`/recipes?category=${encodeURIComponent(category.name)}`}>
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
                    <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{category.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-orange-600">{category.count}</span>
                      <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                        <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Baker's Buddy Tip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-orange-100 to-amber-100 rounded-2xl p-8 text-center"
        >
          <div className="max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <ChefHat className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-playfair">Baker's Buddy Tip</h3>
            <p className="text-lg text-gray-700 italic">
              "Start with the basics, sweetie! Master a simple chocolate chip cookie before moving on to elaborate layer cakes. 
              Every great baker builds their skills one recipe at a time. Remember, baking is about love, patience, and a little bit of magic!"
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CategoriesSection;