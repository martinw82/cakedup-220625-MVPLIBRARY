import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Users, Star, Heart, ChefHat } from 'lucide-react';
import { Recipe } from '../../types';

interface RecipeCardProps {
  recipe: Recipe;
  index?: number;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, index = 0 }) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsFavorited(!isFavorited);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
        <div className="relative overflow-hidden">
          <Link to={`/recipe/${recipe.id}`}>
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </Link>
          
          {/* Favorite Button */}
          <button
            onClick={handleFavoriteClick}
            className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-200 hover:scale-110"
          >
            <Heart 
              className={`h-5 w-5 transition-colors ${
                isFavorited ? 'text-red-500 fill-current' : 'text-gray-400 hover:text-red-500'
              }`} 
            />
          </button>

          {/* Rating Badge */}
          <div className="absolute top-4 left-4 bg-white rounded-full px-3 py-1 flex items-center space-x-1 shadow-md">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium">{recipe.rating}</span>
          </div>

          {/* Difficulty Badge */}
          <div className="absolute bottom-4 left-4">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              recipe.difficulty === 'Beginner' 
                ? 'bg-green-100 text-green-700'
                : recipe.difficulty === 'Medium'
                ? 'bg-yellow-100 text-yellow-700'
                : 'bg-red-100 text-red-700'
            }`}>
              {recipe.difficulty}
            </span>
          </div>
        </div>

        <div className="p-6">
          <Link to={`/recipe/${recipe.id}`}>
            <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors line-clamp-2">
              {recipe.name}
            </h3>
          </Link>
          
          <p className="text-gray-600 mb-4 line-clamp-2">{recipe.description}</p>

          {/* Recipe Meta */}
          <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{recipe.prepTime + recipe.bakeTime} mins</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="h-4 w-4" />
              <span>Serves {recipe.servings}</span>
            </div>
          </div>

          {/* Dietary Tags */}
          {recipe.dietary.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {recipe.dietary.slice(0, 2).map((diet) => (
                <span
                  key={diet}
                  className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium"
                >
                  {diet}
                </span>
              ))}
              {recipe.dietary.length > 2 && (
                <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                  +{recipe.dietary.length - 2} more
                </span>
              )}
            </div>
          )}

          {/* Chef's Tip Preview */}
          <div className="bg-orange-50 rounded-lg p-3 border-l-4 border-orange-400">
            <div className="flex items-start space-x-2">
              <ChefHat className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-orange-800 line-clamp-2 italic">
                {recipe.chefsTip}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default RecipeCard;