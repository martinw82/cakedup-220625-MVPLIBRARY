import React from 'react';
import { motion } from 'framer-motion';
import { Filter, X } from 'lucide-react';

interface RecipeFiltersProps {
  selectedCategory: string;
  selectedDietary: string[];
  selectedDifficulty: string;
  selectedOccasion: string;
  onCategoryChange: (category: string) => void;
  onDietaryChange: (dietary: string[]) => void;
  onDifficultyChange: (difficulty: string) => void;
  onOccasionChange: (occasion: string) => void;
  onClearFilters: () => void;
}

const categories = [
  'All Categories',
  'Cakes',
  'Cupcakes & Muffins',
  'Cookies & Bars',
  'Pies & Tarts',
  'Bread & Yeasted Goods',
  'Frostings & Fillings'
];

const dietaryOptions = [
  'Gluten-Free',
  'Vegan',
  'Dairy-Free',
  'Nut-Free',
  'Low-Sugar'
];

const difficulties = ['All Levels', 'Beginner', 'Medium', 'Advanced'];

const occasions = [
  'All Occasions',
  'Everyday',
  'Celebration',
  'Holiday-Themed',
  'Quick Bakes',
  'Beginner-Friendly'
];

const RecipeFilters: React.FC<RecipeFiltersProps> = ({
  selectedCategory,
  selectedDietary,
  selectedDifficulty,
  selectedOccasion,
  onCategoryChange,
  onDietaryChange,
  onDifficultyChange,
  onOccasionChange,
  onClearFilters
}) => {
  const handleDietaryToggle = (dietary: string) => {
    if (selectedDietary.includes(dietary)) {
      onDietaryChange(selectedDietary.filter(d => d !== dietary));
    } else {
      onDietaryChange([...selectedDietary, dietary]);
    }
  };

  const hasActiveFilters = 
    selectedCategory !== 'All Categories' ||
    selectedDietary.length > 0 ||
    selectedDifficulty !== 'All Levels' ||
    selectedOccasion !== 'All Occasions';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl shadow-lg p-6 mb-8"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Filter className="h-5 w-5 text-orange-600" />
          <h3 className="text-lg font-semibold text-gray-900">Filter Recipes</h3>
        </div>
        {hasActiveFilters && (
          <button
            onClick={onClearFilters}
            className="flex items-center space-x-1 text-sm text-gray-600 hover:text-orange-600 transition-colors"
          >
            <X className="h-4 w-4" />
            <span>Clear All</span>
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Categories */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
          <select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Difficulty */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Difficulty</label>
          <select
            value={selectedDifficulty}
            onChange={(e) => onDifficultyChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          >
            {difficulties.map((difficulty) => (
              <option key={difficulty} value={difficulty}>
                {difficulty}
              </option>
            ))}
          </select>
        </div>

        {/* Occasion */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Occasion</label>
          <select
            value={selectedOccasion}
            onChange={(e) => onOccasionChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          >
            {occasions.map((occasion) => (
              <option key={occasion} value={occasion}>
                {occasion}
              </option>
            ))}
          </select>
        </div>

        {/* Dietary */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Dietary</label>
          <div className="space-y-2">
            {dietaryOptions.map((dietary) => (
              <label key={dietary} className="flex items-center">
                <input
                  type="checkbox"
                  checked={selectedDietary.includes(dietary)}
                  onChange={() => handleDietaryToggle(dietary)}
                  className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                />
                <span className="ml-2 text-sm text-gray-700">{dietary}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Active Filters */}
      {hasActiveFilters && (
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="flex flex-wrap gap-2">
            {selectedCategory !== 'All Categories' && (
              <span className="inline-flex items-center px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">
                {selectedCategory}
                <button
                  onClick={() => onCategoryChange('All Categories')}
                  className="ml-2 hover:text-orange-600"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}
            {selectedDifficulty !== 'All Levels' && (
              <span className="inline-flex items-center px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">
                {selectedDifficulty}
                <button
                  onClick={() => onDifficultyChange('All Levels')}
                  className="ml-2 hover:text-orange-600"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}
            {selectedOccasion !== 'All Occasions' && (
              <span className="inline-flex items-center px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">
                {selectedOccasion}
                <button
                  onClick={() => onOccasionChange('All Occasions')}
                  className="ml-2 hover:text-orange-600"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}
            {selectedDietary.map((dietary) => (
              <span
                key={dietary}
                className="inline-flex items-center px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm"
              >
                {dietary}
                <button
                  onClick={() => handleDietaryToggle(dietary)}
                  className="ml-2 hover:text-orange-600"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default RecipeFilters;