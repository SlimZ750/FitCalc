// Core Types for FitCalc Platform

export type Language = 'fr' | 'ar';

export type Sex = 'male' | 'female';

export type ActivityLevel = 
  | 'sedentary' 
  | 'lightly_active' 
  | 'moderately_active' 
  | 'very_active' 
  | 'extremely_active';

export type Goal = 
  | 'lose_fat' 
  | 'maintain' 
  | 'build_muscle' 
  | 'lean_bulk';

export type Experience = 
  | 'beginner' 
  | 'intermediate' 
  | 'advanced';

export type Equipment = 
  | 'gym' 
  | 'home' 
  | 'home_basic';

export type UnitSystem = 'metric' | 'imperial';

// Alias for convenience in form components
export type Unit = UnitSystem;

export type SupplementCategory = 
  | 'protein' 
  | 'creatine' 
  | 'pre_workout' 
  | 'vitamins' 
  | 'minerals' 
  | 'omega3' 
  | 'mass_gainer' 
  | 'electrolytes' 
  | 'other';

// User Profile
export interface UserProfile {
  id: string;
  user_id: string;
  sex: Sex;
  age: number;
  height: number; // cm
  weight: number; // kg
  activity_level: ActivityLevel;
  goal: Goal;
  experience: Experience;
  training_days: number;
  equipment: Equipment;
  unit_system: UnitSystem;
  language: Language;
  created_at: string;
  updated_at: string;
}

// Calorie Calculation Result
export interface CalorieCalculation {
  id: string;
  user_id: string;
  bmr: number;
  tdee: number;
  target_calories: number;
  protein_grams: number;
  carbs_grams: number;
  fat_grams: number;
  goal: Goal;
  activity_level: ActivityLevel;
  created_at: string;
}

// Weight Log
export interface WeightLog {
  id: string;
  user_id: string;
  weight: number;
  waist?: number;
  body_fat?: number;
  date: string;
  notes?: string;
}

// Training Program
export interface Program {
  id: string;
  name: string;
  name_ar: string;
  description: string;
  description_ar: string;
  goal: Goal;
  experience: Experience;
  training_days: number;
  equipment: Equipment;
  duration_weeks: number;
  created_at: string;
}

// Exercise
export interface Exercise {
  id: string;
  program_id: string;
  name: string;
  name_ar: string;
  day: number;
  sets: number;
  reps: string; // e.g., "8-12" or "12"
  rest_seconds: number;
  instructions: string;
  instructions_ar: string;
  video_url?: string;
  order: number;
}

// Supplement Product
export interface Supplement {
  id: string;
  name: string;
  brand: string;
  category: SupplementCategory;
  description: string;
  description_ar: string;
  ingredients: string;
  serving_size: string;
  price: number;
  original_price?: number;
  sale_price?: number;
  discount_percentage?: number;
  currency: string;
  store_id: string;
  product_url: string;
  image_url: string;
  stock_status: 'in_stock' | 'out_of_stock' | 'low_stock';
  rating?: number;
  protein_per_serving?: number;
  servings_per_container?: number;
  is_featured: boolean;
  created_at: string;
  updated_at: string;
}

// Store
export interface Store {
  id: string;
  name: string;
  website_url: string;
  logo_url?: string;
  is_active: boolean;
  created_at: string;
}

// User Favorite
export interface Favorite {
  id: string;
  user_id: string;
  supplement_id: string;
  created_at: string;
}

// Product Click Tracking
export interface ProductClick {
  id: string;
  user_id?: string;
  supplement_id: string;
  created_at: string;
}

// Calculator Form Data (used in wizard)
export interface CalculatorFormData {
  unit: UnitSystem;
  gender: Sex;
  age: number;
  weight: number;
  height: number;
  activityLevel: ActivityLevel;
  goal: Goal;
}

// Calculator Input
export interface CalculatorInput {
  sex: Sex;
  age: number;
  height: number;
  weight: number;
  activityLevel: ActivityLevel;
  goal: Goal;
  experience: Experience;
  trainingDays: number;
  equipment: Equipment;
  unitSystem: UnitSystem;
}

// Calculator Result
export interface CalculatorResult {
  bmr: number;
  tdee: number;
  targetCalories: number;
  protein: number;
  carbs: number;
  fat: number;
  weeklyWeightChange: number; // kg per week (positive = gain, negative = loss)
}

// Meal Plan
export interface Meal {
  name: string;
  name_ar: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  foods: string[];
  foods_ar: string[];
}

export interface MealPlan {
  totalCalories: number;
  totalProtein: number;
  totalCarbs: number;
  totalFat: number;
  meals: Meal[];
}

// Supplement Recommendation
export interface SupplementRecommendation {
  category: SupplementCategory;
  priority: 'high' | 'medium' | 'low';
  reason: string;
  reason_ar: string;
  products: Supplement[];
}
