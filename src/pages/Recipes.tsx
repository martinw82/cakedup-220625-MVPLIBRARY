import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, ChefHat } from 'lucide-react';
import RecipeCard from '../components/Recipes/RecipeCard';
import RecipeFilters from '../components/Recipes/RecipeFilters';
import { recipes } from '../data/recipes';

const Recipes: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedDietary, setSelectedDietary] = useState<string[]>([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState('All Levels');
  const [selectedOccasion, setSelectedOccasion] = useState('All Occasions');

  const filteredRecipes = useMemo(() => {
    return recipes.filter(recipe => {
      // Search query filter
      const matchesSearch = recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           recipe.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           recipe.ingredients.some(ing => ing.item.toLowerCase().includes(searchQuery.toLowerCase()));

      // Category filter
      const matchesCategory = selectedCategory === 'All Categories' || recipe.category === selectedCategory;

      // Dietary filter
      const matchesDietary = selectedDietary.length === 0 || 
                            selectedDietary.every(diet => recipe.dietary.includes(diet));

      // Difficulty filter
      const matchesDifficulty = selectedDifficulty === 'All Levels' || recipe.difficulty === selectedDifficulty;

      // Occasion filter
      const matchesOccasion = selectedOccasion === 'All Occasions' || 
                             recipe.occasion.includes(selectedOccasion);

      return matchesSearch && matchesCategory && matchesDietary && matchesDifficulty && matchesOccasion;
    });
  }, [searchQuery, selectedCategory, selectedDietary, selectedDifficulty, selectedOccasion]);

  const clearFilters = () => {
    setSelectedCategory('All Categories');
    setSelectedDietary([]);
    setSelectedDifficulty('All Levels');
    setSelectedOccasion('All Occasions');
    setSearchQuery('');
  };

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
              <ChefHat className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 font-playfair">The Bake Vault</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our collection of tested and perfected baking recipes, each one crafted with love and precision
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-2xl mx-auto mb-8"
        >
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search recipes, ingredients, or techniques..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-transparent shadow-lg"
          />
        </motion.div>

        {/* Baker's Buddy Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-2xl p-6 mb-8 text-center"
        >
          <p className="text-lg text-gray-700 italic">
            "Welcome to the Bake Vault, sugar! Every recipe here has been tested and perfected just for you. 
            Whether you're a beginner or a seasoned baker, you'll find something delightful to create. Happy baking!"
          </p>
        </motion.div>

        {/* Filters */}
        <RecipeFilters
          selectedCategory={selectedCategory}
          selectedDietary={selectedDietary}
          selectedDifficulty={selectedDifficulty}
          selectedOccasion={selectedOccasion}
          onCategoryChange={setSelectedCategory}
          onDietaryChange={setSelectedDietary}
          onDifficultyChange={setSelectedDifficulty}
          onOccasionChange={setSelectedOccasion}
          onClearFilters={clearFilters}
        />

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-6"
        >
          <p className="text-gray-600">
            Showing {filteredRecipes.length} of {recipes.length} recipes
          </p>
        </motion.div>

        {/* Recipe Grid */}
        {filteredRecipes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRecipes.map((recipe, index) => (
              <RecipeCard key={recipe.id} recipe={recipe} index={index} />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center py-16"
          >
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <ChefHat className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">No recipes found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
            <button
              onClick={clearFilters}
              className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors"
            >
              Clear All Filters
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Recipes;