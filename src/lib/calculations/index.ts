/**
 * Main Calculator Function
 * Combines BMR, TDEE, and macro calculations
 */

import { CalculatorInput, CalculatorResult } from '@/types';
import { calculateBMR } from './bmr';
import { calculateTDEE } from './tdee';
import {
  calculateTargetCalories,
  calculateProtein,
  calculateFat,
  calculateCarbs,
  calculateWeeklyWeightChange,
} from './macros';

/**
 * Main calculator function that orchestrates all calculations
 */
export function calculateNutrition(input: CalculatorInput): CalculatorResult {
  // Step 1: Calculate BMR
  const bmr = calculateBMR(input.weight, input.height, input.age, input.sex);

  // Step 2: Calculate TDEE
  const tdee = calculateTDEE(bmr, input.activityLevel);

  // Step 3: Calculate target calories based on goal
  const targetCalories = calculateTargetCalories(tdee, input.goal);

  // Step 4: Calculate protein requirement
  const protein = calculateProtein(input.weight, input.goal, input.experience);

  // Step 5: Calculate fat requirement
  const fat = calculateFat(targetCalories, input.goal);

  // Step 6: Calculate carbs (fills remaining calories)
  const carbs = calculateCarbs(targetCalories, protein, fat);

  // Step 7: Calculate expected weekly weight change
  const weeklyWeightChange = calculateWeeklyWeightChange(input.goal);

  return {
    bmr,
    tdee,
    targetCalories,
    protein,
    carbs,
    fat,
    weeklyWeightChange,
  };
}

// Re-export utility functions
export * from './bmr';
export * from './tdee';
export * from './macros';
