/**
 * TDEE (Total Daily Energy Expenditure) Calculations
 */

import { ActivityLevel } from '@/types';

/**
 * Activity multipliers for TDEE calculation
 * Based on widely accepted multipliers
 */
const ACTIVITY_MULTIPLIERS: Record<ActivityLevel, number> = {
  sedentary: 1.2,           // Little to no exercise
  lightly_active: 1.375,    // Light exercise 1-3 days/week
  moderately_active: 1.55,  // Moderate exercise 3-5 days/week
  very_active: 1.725,       // Hard exercise 6-7 days/week
  extremely_active: 1.9,    // Very hard exercise, physical job, or training twice per day
};

/**
 * Calculate TDEE (Total Daily Energy Expenditure)
 * 
 * @param bmr - Basal Metabolic Rate in calories
 * @param activityLevel - Activity level
 * @returns Estimated TDEE in calories per day
 */
export function calculateTDEE(bmr: number, activityLevel: ActivityLevel): number {
  if (bmr <= 0) {
    throw new Error('BMR must be a positive number');
  }

  const multiplier = ACTIVITY_MULTIPLIERS[activityLevel];
  const tdee = bmr * multiplier;

  // Round to nearest 10 for practical use
  return Math.round(tdee / 10) * 10;
}

/**
 * Get activity multiplier for a given activity level
 */
export function getActivityMultiplier(activityLevel: ActivityLevel): number {
  return ACTIVITY_MULTIPLIERS[activityLevel];
}
