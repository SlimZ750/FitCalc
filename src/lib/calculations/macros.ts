/**
 * Macronutrient Calculations
 */

import { Goal, Experience } from '@/types';

/**
 * Protein recommendations in grams per kg of body weight
 */
const PROTEIN_PER_KG: Record<Goal, { min: number; max: number }> = {
  lose_fat: { min: 2.2, max: 2.6 },      // Higher protein during cut
  maintain: { min: 1.8, max: 2.2 },       // Moderate protein for maintenance
  build_muscle: { min: 2.0, max: 2.4 },   // High protein for muscle building
  lean_bulk: { min: 2.0, max: 2.4 },      // High protein for lean gains
};

/**
 * Fat recommendations as percentage of total calories
 */
const FAT_PERCENTAGE: Record<Goal, { min: number; max: number }> = {
  lose_fat: { min: 0.25, max: 0.30 },     // 25-30% of calories
  maintain: { min: 0.25, max: 0.30 },     // 25-30% of calories
  build_muscle: { min: 0.25, max: 0.30 }, // 25-30% of calories
  lean_bulk: { min: 0.20, max: 0.25 },    // 20-25% of calories
};

/**
 * Calorie adjustment for goals (percentage of TDEE)
 */
const CALORIE_ADJUSTMENT: Record<Goal, number> = {
  lose_fat: -0.15,        // 15% deficit for fat loss
  maintain: 0,             // Maintenance calories
  build_muscle: 0.10,      // 10% surplus for muscle building
  lean_bulk: 0.05,         // 5% surplus for lean bulk
};

/**
 * Calculate target calories based on TDEE and goal
 */
export function calculateTargetCalories(tdee: number, goal: Goal): number {
  if (tdee <= 0) {
    throw new Error('TDEE must be a positive number');
  }

  const adjustment = CALORIE_ADJUSTMENT[goal];
  const targetCalories = tdee * (1 + adjustment);

  // Round to nearest 10
  return Math.round(targetCalories / 10) * 10;
}

/**
 * Calculate protein requirement in grams
 */
export function calculateProtein(
  weight: number,
  goal: Goal,
  experience: Experience = 'intermediate'
): number {
  if (weight <= 0) {
    throw new Error('Weight must be a positive number');
  }

  const proteinRange = PROTEIN_PER_KG[goal];
  
  // Beginners can start with lower protein, advanced may benefit from higher
  let multiplier: number;
  
  switch (experience) {
    case 'beginner':
      multiplier = proteinRange.min;
      break;
    case 'advanced':
      multiplier = proteinRange.max;
      break;
    default:
      multiplier = (proteinRange.min + proteinRange.max) / 2;
  }

  const protein = weight * multiplier;

  // Round to nearest 5g
  return Math.round(protein / 5) * 5;
}

/**
 * Calculate fat requirement in grams
 */
export function calculateFat(targetCalories: number, goal: Goal): number {
  if (targetCalories <= 0) {
    throw new Error('Target calories must be a positive number');
  }

  const fatRange = FAT_PERCENTAGE[goal];
  const percentage = (fatRange.min + fatRange.max) / 2;
  
  // Fat provides 9 calories per gram
  const fatCalories = targetCalories * percentage;
  const fatGrams = fatCalories / 9;

  // Round to nearest 5g
  return Math.round(fatGrams / 5) * 5;
}

/**
 * Calculate carbohydrate requirement in grams
 * Carbs fill the remaining calories after protein and fat
 */
export function calculateCarbs(
  targetCalories: number,
  proteinGrams: number,
  fatGrams: number
): number {
  if (targetCalories <= 0 || proteinGrams < 0 || fatGrams < 0) {
    throw new Error('Invalid input values');
  }

  // Protein: 4 cal/g, Fat: 9 cal/g, Carbs: 4 cal/g
  const proteinCalories = proteinGrams * 4;
  const fatCalories = fatGrams * 9;
  const remainingCalories = targetCalories - proteinCalories - fatCalories;

  if (remainingCalories < 0) {
    throw new Error('Protein and fat exceed target calories');
  }

  const carbGrams = remainingCalories / 4;

  // Round to nearest 5g
  return Math.round(carbGrams / 5) * 5;
}

/**
 * Calculate expected weekly weight change in kg
 */
export function calculateWeeklyWeightChange(goal: Goal): number {
  switch (goal) {
    case 'lose_fat':
      return -0.5;  // Aim for 0.5kg loss per week
    case 'maintain':
      return 0;      // Maintain weight
    case 'build_muscle':
      return 0.25;   // Aim for 0.25kg gain per week
    case 'lean_bulk':
      return 0.15;   // Aim for 0.15kg gain per week (slower, leaner gains)
    default:
      return 0;
  }
}

/**
 * Calculate macro percentages for display
 */
export function calculateMacroPercentages(
  proteinGrams: number,
  carbGrams: number,
  fatGrams: number
): { protein: number; carbs: number; fat: number } {
  const proteinCal = proteinGrams * 4;
  const carbCal = carbGrams * 4;
  const fatCal = fatGrams * 9;
  const totalCal = proteinCal + carbCal + fatCal;

  return {
    protein: Math.round((proteinCal / totalCal) * 100),
    carbs: Math.round((carbCal / totalCal) * 100),
    fat: Math.round((fatCal / totalCal) * 100),
  };
}
