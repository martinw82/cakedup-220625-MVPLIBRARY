import { Recipe } from '../types';

export const recipes: Recipe[] = [
  {
    id: 'classic-chocolate-fudge-cake',
    name: 'Classic Chocolate Fudge Cake',
    image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Cakes',
    difficulty: 'Medium',
    prepTime: 20,
    bakeTime: 35,
    servings: 12,
    rating: 4.8,
    description: 'Rich, moist chocolate cake with deep cocoa flavor that melts in your mouth.',
    ingredients: [
      { id: '1', amount: '1½ cups', item: 'all-purpose flour' },
      { id: '2', amount: '1½ cups', item: 'granulated sugar' },
      { id: '3', amount: '¾ cup', item: 'unsweetened cocoa powder' },
      { id: '4', amount: '1½ tsp', item: 'baking soda' },
      { id: '5', amount: '1 tsp', item: 'baking powder' },
      { id: '6', amount: '½ tsp', item: 'salt' },
      { id: '7', amount: '1 cup', item: 'buttermilk' },
      { id: '8', amount: '½ cup', item: 'vegetable oil' },
      { id: '9', amount: '2 large', item: 'eggs' },
      { id: '10', amount: '1 tsp', item: 'vanilla extract' },
      { id: '11', amount: '1 cup', item: 'hot strong brewed coffee' }
    ],
    instructions: [
      {
        id: '1',
        step: 1,
        title: 'Prep Pans',
        description: 'Preheat oven to 350°F (175°C). Grease and flour two 8-inch round cake pans.',
        time: '5 mins'
      },
      {
        id: '2',
        step: 2,
        title: 'Dry Ingredients',
        description: 'In a large bowl, whisk together flour, sugar, cocoa powder, baking soda, baking powder, and salt.',
        time: '3 mins'
      },
      {
        id: '3',
        step: 3,
        title: 'Wet Ingredients',
        description: 'In a separate bowl, whisk together buttermilk, oil, eggs, and vanilla. Stir in hot coffee last.',
        time: '5 mins'
      },
      {
        id: '4',
        step: 4,
        title: 'Combine',
        description: 'Gradually add wet ingredients to dry ingredients, mixing until just combined. Do not overmix.',
        time: '3 mins'
      },
      {
        id: '5',
        step: 5,
        title: 'Bake',
        description: 'Divide batter evenly between prepared pans. Bake for 30-35 minutes, or until a wooden skewer comes out clean.',
        time: '35 mins'
      },
      {
        id: '6',
        step: 6,
        title: 'Cool & Frost',
        description: 'Cool in pans for 10 minutes, then turn out onto wire racks. Cool completely before frosting.',
        time: '45 mins'
      }
    ],
    chefsTip: "Always use good quality cocoa, darlin', it makes all the difference in a chocolate cake! And don't skip the coffee - it intensifies the chocolate flavor without making it taste like coffee.",
    perfectPairings: ['Vanilla bean ice cream', 'Fresh raspberries', 'Whipped cream with a hint of espresso'],
    dietary: [],
    flavorProfile: ['Chocolate'],
    occasion: ['Celebration', 'Everyday']
  },
  {
    id: 'lemon-raspberry-bundt',
    name: 'Lemon Raspberry Bundt Cake',
    image: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Cakes',
    difficulty: 'Medium',
    prepTime: 15,
    bakeTime: 55,
    servings: 10,
    rating: 4.7,
    description: 'Bright, citrusy bundt cake studded with fresh raspberries and finished with lemon glaze.',
    ingredients: [
      { id: '1', amount: '3 cups', item: 'all-purpose flour' },
      { id: '2', amount: '1 tbsp', item: 'baking powder' },
      { id: '3', amount: '½ tsp', item: 'salt' },
      { id: '4', amount: '1 cup', item: 'unsalted butter, softened' },
      { id: '5', amount: '1¾ cups', item: 'granulated sugar' },
      { id: '6', amount: '4 large', item: 'eggs' },
      { id: '7', amount: '2 tsp', item: 'vanilla extract' },
      { id: '8', amount: '⅓ cup', item: 'fresh lemon juice' },
      { id: '9', amount: '2 tbsp', item: 'lemon zest' },
      { id: '10', amount: '1 cup', item: 'whole milk' },
      { id: '11', amount: '1½ cups', item: 'fresh raspberries' }
    ],
    instructions: [
      {
        id: '1',
        step: 1,
        title: 'Prepare Pan',
        description: 'Preheat oven to 350°F. Generously grease and flour a 12-cup bundt pan.',
        time: '5 mins'
      },
      {
        id: '2',
        step: 2,
        title: 'Mix Dry Ingredients',
        description: 'Whisk together flour, baking powder, and salt in a medium bowl.',
        time: '2 mins'
      },
      {
        id: '3',
        step: 3,
        title: 'Cream Butter & Sugar',
        description: 'Beat butter and sugar until light and fluffy, about 4 minutes. Add eggs one at a time.',
        time: '6 mins'
      },
      {
        id: '4',
        step: 4,
        title: 'Add Flavoring',
        description: 'Mix in vanilla, lemon juice, and lemon zest until combined.',
        time: '2 mins'
      },
      {
        id: '5',
        step: 5,
        title: 'Alternate Wet & Dry',
        description: 'Add flour mixture and milk alternately, beginning and ending with flour. Fold in raspberries.',
        time: '5 mins'
      },
      {
        id: '6',
        step: 6,
        title: 'Bake',
        description: 'Pour into prepared pan and bake 50-55 minutes until golden and pulling slightly from sides.',
        time: '55 mins'
      }
    ],
    chefsTip: "Toss those raspberries in a little flour before folding them in, sweetie - it'll keep them from sinking to the bottom!",
    perfectPairings: ['Lemon glaze', 'Powdered sugar dusting', 'Fresh mint garnish'],
    dietary: [],
    flavorProfile: ['Citrus', 'Fruit'],
    occasion: ['Celebration', 'Holiday-Themed']
  },
  {
    id: 'vanilla-bean-cupcakes',
    name: 'Vanilla Bean Cupcakes with Swiss Meringue Buttercream',
    image: 'https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Cupcakes & Muffins',
    difficulty: 'Advanced',
    prepTime: 30,
    bakeTime: 18,
    servings: 24,
    rating: 4.9,
    description: 'Perfectly fluffy vanilla cupcakes topped with silky Swiss meringue buttercream.',
    ingredients: [
      { id: '1', amount: '2¾ cups', item: 'cake flour' },
      { id: '2', amount: '1 tbsp', item: 'baking powder' },
      { id: '3', amount: '½ tsp', item: 'salt' },
      { id: '4', amount: '¾ cup', item: 'unsalted butter, softened' },
      { id: '5', amount: '1¾ cups', item: 'granulated sugar' },
      { id: '6', amount: '4 large', item: 'eggs' },
      { id: '7', amount: '1', item: 'vanilla bean, scraped' },
      { id: '8', amount: '1¼ cups', item: 'whole milk' }
    ],
    instructions: [
      {
        id: '1',
        step: 1,
        title: 'Prep & Preheat',
        description: 'Preheat oven to 350°F. Line 24 cupcake wells with paper liners.',
        time: '5 mins'
      },
      {
        id: '2',
        step: 2,
        title: 'Dry Ingredients',
        description: 'Whisk together cake flour, baking powder, and salt.',
        time: '2 mins'
      },
      {
        id: '3',
        step: 3,
        title: 'Cream Base',
        description: 'Beat butter and sugar until very light and fluffy, about 5 minutes. Add eggs one at a time.',
        time: '7 mins'
      },
      {
        id: '4',
        step: 4,
        title: 'Add Vanilla',
        description: 'Mix in vanilla bean seeds until evenly distributed.',
        time: '1 min'
      },
      {
        id: '5',
        step: 5,
        title: 'Combine',
        description: 'Alternate adding flour mixture and milk, beginning and ending with flour.',
        time: '5 mins'
      },
      {
        id: '6',
        step: 6,
        title: 'Bake',
        description: 'Fill liners ⅔ full and bake 16-18 minutes until tops spring back when lightly touched.',
        time: '18 mins'
      }
    ],
    chefsTip: "Real vanilla beans make all the difference, honey! Those little black specks aren't just pretty - they're packed with flavor that extract just can't match.",
    perfectPairings: ['Swiss meringue buttercream', 'Fresh berries', 'Edible flowers'],
    dietary: [],
    flavorProfile: ['Vanilla'],
    occasion: ['Celebration', 'Advanced']
  },
  {
    id: 'chewy-chocolate-chip-cookies',
    name: 'Chewy Chocolate Chip Cookies',
    image: 'https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Cookies & Bars',
    difficulty: 'Beginner',
    prepTime: 15,
    bakeTime: 12,
    servings: 36,
    rating: 4.8,
    description: 'The perfect chewy chocolate chip cookie with crispy edges and soft centers.',
    ingredients: [
      { id: '1', amount: '2¼ cups', item: 'all-purpose flour' },
      { id: '2', amount: '1 tsp', item: 'baking soda' },
      { id: '3', amount: '1 tsp', item: 'salt' },
      { id: '4', amount: '1 cup', item: 'butter, softened' },
      { id: '5', amount: '¾ cup', item: 'granulated sugar' },
      { id: '6', amount: '¾ cup', item: 'packed brown sugar' },
      { id: '7', amount: '2 large', item: 'eggs' },
      { id: '8', amount: '2 tsp', item: 'vanilla extract' },
      { id: '9', amount: '2 cups', item: 'chocolate chips' }
    ],
    instructions: [
      {
        id: '1',
        step: 1,
        title: 'Preheat & Prep',
        description: 'Preheat oven to 375°F. Line baking sheets with parchment paper.',
        time: '5 mins'
      },
      {
        id: '2',
        step: 2,
        title: 'Mix Dry',
        description: 'Combine flour, baking soda, and salt in a bowl.',
        time: '2 mins'
      },
      {
        id: '3',
        step: 3,
        title: 'Cream Butter',
        description: 'Beat butter and both sugars until creamy. Add eggs and vanilla.',
        time: '4 mins'
      },
      {
        id: '4',
        step: 4,
        title: 'Combine',
        description: 'Gradually blend in flour mixture. Stir in chocolate chips.',
        time: '3 mins'
      },
      {
        id: '5',
        step: 5,
        title: 'Shape & Bake',
        description: 'Drop rounded tablespoons onto prepared sheets. Bake 9-11 minutes until golden brown.',
        time: '12 mins'
      }
    ],
    chefsTip: "For extra chewy cookies, slightly underbake them and let them finish cooking on the hot pan, sugar!",
    perfectPairings: ['Cold milk', 'Vanilla ice cream', 'Hot coffee'],
    dietary: [],
    flavorProfile: ['Chocolate'],
    occasion: ['Everyday', 'Beginner-Friendly']
  },
  {
    id: 'easy-apple-crumble-pie',
    name: 'Easy Apple Crumble Pie',
    image: 'https://images.pexels.com/photos/7525161/pexels-photo-7525161.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Pies & Tarts',
    difficulty: 'Medium',
    prepTime: 25,
    bakeTime: 45,
    servings: 8,
    rating: 4.6,
    description: 'Classic apple pie with a buttery crumble topping instead of a top crust.',
    ingredients: [
      { id: '1', amount: '1', item: 'pre-made pie crust' },
      { id: '2', amount: '6 large', item: 'Granny Smith apples, peeled and sliced' },
      { id: '3', amount: '¾ cup', item: 'granulated sugar' },
      { id: '4', amount: '2 tbsp', item: 'all-purpose flour' },
      { id: '5', amount: '1 tsp', item: 'cinnamon' },
      { id: '6', amount: '¼ tsp', item: 'nutmeg' },
      { id: '7', amount: '½ cup', item: 'old-fashioned oats' },
      { id: '8', amount: '½ cup', item: 'flour' },
      { id: '9', amount: '½ cup', item: 'brown sugar' },
      { id: '10', amount: '⅓ cup', item: 'cold butter, cubed' }
    ],
    instructions: [
      {
        id: '1',
        step: 1,
        title: 'Prep Crust',
        description: 'Preheat oven to 375°F. Place pie crust in 9-inch pie pan and crimp edges.',
        time: '5 mins'
      },
      {
        id: '2',
        step: 2,
        title: 'Prepare Filling',
        description: 'Toss sliced apples with granulated sugar, 2 tbsp flour, cinnamon, and nutmeg.',
        time: '10 mins'
      },
      {
        id: '3',
        step: 3,
        title: 'Make Crumble',
        description: 'Mix oats, ½ cup flour, and brown sugar. Cut in cold butter until mixture resembles coarse crumbs.',
        time: '5 mins'
      },
      {
        id: '4',
        step: 4,
        title: 'Assemble',
        description: 'Fill pie crust with apple mixture. Sprinkle crumble topping evenly over apples.',
        time: '5 mins'
      },
      {
        id: '5',
        step: 5,
        title: 'Bake',
        description: 'Bake 45-50 minutes until topping is golden and apples are tender. Cover edges if browning too quickly.',
        time: '45 mins'
      }
    ],
    chefsTip: "Mix different apple varieties for the best flavor and texture, dearie! Granny Smith holds its shape while Honeycrisp adds sweetness.",
    perfectPairings: ['Vanilla ice cream', 'Caramel sauce', 'Sharp cheddar cheese'],
    dietary: [],
    flavorProfile: ['Fruit', 'Spicy'],
    occasion: ['Holiday-Themed', 'Everyday']
  }
];