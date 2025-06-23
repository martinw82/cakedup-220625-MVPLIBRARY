export interface Recipe {
  id: string;
  name: string;
  image: string;
  category: string;
  difficulty: 'Beginner' | 'Medium' | 'Advanced';
  prepTime: number;
  bakeTime: number;
  servings: number;
  rating: number;
  description: string;
  ingredients: Ingredient[];
  instructions: Instruction[];
  chefsTip: string;
  perfectPairings: string[];
  dietary: string[];
  flavorProfile: string[];
  occasion: string[];
}

export interface Ingredient {
  id: string;
  amount: string;
  item: string;
  notes?: string;
}

export interface Instruction {
  id: string;
  step: number;
  title: string;
  description: string;
  time?: string;
}

export interface Product {
  id: string;
  name: string;
  type: 'cake' | 'mix';
  price: number;
  image: string;
  description: string;
  story: string;
  features: string[];
  allergyInfo: string[];
  isWeeklySpecial?: boolean;
}

export interface BakersBuddy {
  greeting: string;
  style: 'patient' | 'energetic' | 'classic';
  tips: string[];
}