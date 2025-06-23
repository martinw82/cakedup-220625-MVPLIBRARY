import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Clock, Users, Star, Heart, Share2, ChefHat, 
  CheckCircle2, Circle, ArrowLeft, ShoppingBag 
} from 'lucide-react';
import { recipes } from '../data/recipes';
import { products } from '../data/products';

const RecipeDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const recipe = recipes.find(r => r.id === id);
  const [checkedIngredients, setCheckedIngredients] = useState<Set<string>>(new Set());
  const [checkedInstructions, setCheckedInstructions] = useState<Set<string>>(new Set());
  const [isFavorited, setIsFavorited] = useState(false);

  if (!recipe) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Recipe not found</h1>
          <Link to="/recipes" className="text-orange-600 hover:text-orange-700">
            Back to recipes
          </Link>
        </div>
      </div>
    );
  }

  const toggleIngredient = (ingredientId: string) => {
    const newChecked = new Set(checkedIngredients);
    if (newChecked.has(ingredientId)) {
      newChecked.delete(ingredientId);
    } else {
      newChecked.add(ingredientId);
    }
    setCheckedIngredients(newChecked);
  };

  const toggleInstruction = (instructionId: string) => {
    const newChecked = new Set(checkedInstructions);
    if (newChecked.has(instructionId)) {
      newChecked.delete(instructionId);
    } else {
      newChecked.add(instructionId);
    }
    setCheckedInstructions(newChecked);
  };

  // Find related products
  const relatedProducts = products.filter(product => 
    product.name.toLowerCase().includes('chocolate') && recipe.name.toLowerCase().includes('chocolate') ||
    product.name.toLowerCase().includes('vanilla') && recipe.name.toLowerCase().includes('vanilla')
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                to="/recipes"
                className="inline-flex items-center text-white mb-4 hover:text-orange-300 transition-colors"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Recipes
              </Link>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 font-playfair">
                {recipe.name}
              </h1>
              <p className="text-xl text-white opacity-90 max-w-2xl">
                {recipe.description}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Recipe Meta */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-6 mb-8"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-gray-500" />
                    <div>
                      <div className="text-sm text-gray-500">Total Time</div>
                      <div className="font-semibold">{recipe.prepTime + recipe.bakeTime} mins</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-gray-500" />
                    <div>
                      <div className="text-sm text-gray-500">Serves</div>
                      <div className="font-semibold">{recipe.servings}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <div>
                      <div className="text-sm text-gray-500">Rating</div>
                      <div className="font-semibold">{recipe.rating}/5</div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setIsFavorited(!isFavorited)}
                    className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    <Heart className={`h-5 w-5 ${isFavorited ? 'text-red-500 fill-current' : 'text-gray-600'}`} />
                  </button>
                  <button className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                    <Share2 className="h-5 w-5 text-gray-600" />
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  recipe.difficulty === 'Beginner' 
                    ? 'bg-green-100 text-green-700'
                    : recipe.difficulty === 'Medium'
                    ? 'bg-yellow-100 text-yellow-700'
                    : 'bg-red-100 text-red-700'
                }`}>
                  {recipe.difficulty}
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  {recipe.category}
                </span>
                {recipe.dietary.map((diet) => (
                  <span key={diet} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                    {diet}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Ingredients */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl shadow-lg p-6 mb-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Ingredients</h2>
              <div className="space-y-3">
                {recipe.ingredients.map((ingredient) => (
                  <div
                    key={ingredient.id}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                    onClick={() => toggleIngredient(ingredient.id)}
                  >
                    {checkedIngredients.has(ingredient.id) ? (
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                    ) : (
                      <Circle className="h-5 w-5 text-gray-400" />
                    )}
                    <span className={`flex-1 ${checkedIngredients.has(ingredient.id) ? 'line-through text-gray-500' : 'text-gray-900'}`}>
                      <span className="font-medium">{ingredient.amount}</span> {ingredient.item}
                      {ingredient.notes && <span className="text-gray-500 text-sm"> ({ingredient.notes})</span>}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Instructions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-6 mb-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Instructions</h2>
              <div className="space-y-6">
                {recipe.instructions.map((instruction) => (
                  <div
                    key={instruction.id}
                    className="flex space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                    onClick={() => toggleInstruction(instruction.id)}
                  >
                    <div className="flex-shrink-0">
                      {checkedInstructions.has(instruction.id) ? (
                        <CheckCircle2 className="h-6 w-6 text-green-500" />
                      ) : (
                        <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          {instruction.step}
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-semibold mb-2 ${checkedInstructions.has(instruction.id) ? 'line-through text-gray-500' : 'text-gray-900'}`}>
                        {instruction.title}
                        {instruction.time && (
                          <span className="ml-2 text-sm text-orange-600 font-normal">
                            ({instruction.time})
                          </span>
                        )}
                      </h3>
                      <p className={`${checkedInstructions.has(instruction.id) ? 'line-through text-gray-500' : 'text-gray-700'}`}>
                        {instruction.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Chef's Tip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 mb-8 border-l-4 border-orange-400"
            >
              <div className="flex items-start space-x-3">
                <div className="bg-orange-500 p-2 rounded-full">
                  <ChefHat className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Chef's Tip</h3>
                  <p className="text-gray-700 italic">{recipe.chefsTip}</p>
                </div>
              </div>
            </motion.div>

            {/* Perfect Pairings */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="bg-white rounded-2xl shadow-lg p-6 mb-8"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Perfect Pairings</h3>
              <ul className="space-y-2">
                {recipe.perfectPairings.map((pairing, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                    {pairing}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Related Products */}
            {relatedProducts.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="bg-white rounded-2xl shadow-lg p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Skip a Step?</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Love this recipe? Try our premium mixes for quicker baking!
                </p>
                <div className="space-y-4">
                  {relatedProducts.slice(0, 2).map((product) => (
                    <Link
                      key={product.id}
                      to={`/product/${product.id}`}
                      className="block p-4 border border-gray-200 rounded-lg hover:border-orange-300 hover:shadow-md transition-all"
                    >
                      <div className="flex items-center space-x-3">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-12 h-12 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 text-sm">{product.name}</h4>
                          <p className="text-orange-600 font-semibold">${product.price}</p>
                        </div>
                        <ShoppingBag className="h-4 w-4 text-gray-400" />
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;