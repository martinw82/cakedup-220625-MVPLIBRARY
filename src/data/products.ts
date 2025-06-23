import { Product } from '../types';

export const products: Product[] = [
  {
    id: 'velvet-red-dream-cake',
    name: 'Velvet Red Dream Cake',
    type: 'cake',
    price: 45.99,
    image: 'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Our signature red velvet cake with cream cheese frosting, delivered fresh to your door.',
    story: "This week's special is a tribute to Grandma Lily's famous recipe, passed down through three generations of bakers.",
    features: [
      'Made with real buttermilk and cocoa',
      'Hand-whipped cream cheese frosting',
      'Serves 8-10 people',
      'Fresh delivery within 48 hours'
    ],
    allergyInfo: ['Contains gluten', 'Contains dairy', 'Contains eggs'],
    isWeeklySpecial: true
  },
  {
    id: 'signature-chocolate-mix',
    name: 'Signature Chocolate Cake Mix',
    type: 'mix',
    price: 12.99,
    image: 'https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Our secret blend for a perfectly moist, rich chocolate cake – just add wet ingredients!',
    story: 'Developed by our head baker after years of perfecting the ultimate chocolate cake recipe.',
    features: [
      'Premium Dutch-process cocoa',
      'Makes one 9-inch layer cake',
      'Foolproof instructions included',
      '18-month shelf life'
    ],
    allergyInfo: ['Contains gluten', 'May contain traces of nuts']
  },
  {
    id: 'vanilla-cupcake-mix',
    name: 'Perfect Vanilla Cupcake Mix',
    type: 'mix',
    price: 10.99,
    image: 'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Foolproof mix for light and fluffy vanilla cupcakes, complete with vanilla bean specks.',
    story: 'The same mix our bakery uses for our bestselling vanilla cupcakes.',
    features: [
      'Real vanilla bean specks',
      'Makes 24 standard cupcakes',
      'Light and fluffy texture',
      'Pairs perfectly with any frosting'
    ],
    allergyInfo: ['Contains gluten', 'Contains dairy']
  },
  {
    id: 'fudgy-brownie-mix',
    name: 'Fudgy Brownie Mix',
    type: 'mix',
    price: 9.99,
    image: 'https://images.pexels.com/photos/887853/pexels-photo-887853.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Achieve bakery-style fudgy brownies with our expertly crafted mix.',
    story: 'These brownies are so fudgy, they practically melt in your mouth!',
    features: [
      'Ultra-fudgy texture',
      'Premium chocolate chips included',
      'Makes 16 large brownies',
      'Ready in under an hour'
    ],
    allergyInfo: ['Contains gluten', 'Contains dairy', 'Contains eggs']
  }
];