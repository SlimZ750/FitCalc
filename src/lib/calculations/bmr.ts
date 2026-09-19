/**
 * BMR (Basal Metabolic Rate) Calculations
 * Multiple formulas available for better accuracy
 */

import { Sex } from '@/types';

export type BMRFormula = 'mifflin' | 'harris' | 'katch';

/**
 * Calculate BMR using Mifflin-St Jeor equation (Default - Most Accurate)
 * 
 * Men: BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) + 5
 * Women: BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) - 161
 * 
 * @param weight - Weight in kg
 * @param height - Height in cm
 * @param age - Age in years
 * @param sex - Biological sex
 * @returns BMR in calories per day
 */
export function calculateBMRMifflin(
  weight: number,
  height: number,
  age: number,
  sex: Sex
): number {
  const baseBMR = (10 * weight) + (6.25 * height) - (5 * age);
  const sexAdjustment = sex === 'male' ? 5 : -161;
  
  return Math.round(baseBMR + sexAdjustment);
}

/**
 * Calculate BMR using Revised Harris-Benedict equation
 * 
 * Men: BMR = 13.397W + 4.799H - 5.677A + 88.362
 * Women: BMR = 9.247W + 3.098H - 4.330A + 447.593
 * 
 * @param weight - Weight in kg
 * @param height - Height in cm
 * @param age - Age in years
 * @param sex - Biological sex
 * @returns BMR in calories per day
 */
export function calculateBMRHarris(
  weight: number,
  height: number,
  age: number,
  sex: Sex
): number {
  let bmr: number;
  
  if (sex === 'male') {
    bmr = (13.397 * weight) + (4.799 * height) - (5.677 * age) + 88.362;
  } else {
    bmr = (9.247 * weight) + (3.098 * height) - (4.330 * age) + 447.593;
  }
  
  return Math.round(bmr);
}

/**
 * Calculate BMR using Katch-McArdle formula (requires body fat %)
 * This formula uses lean body mass and is more accurate for lean individuals
 * 
 * BMR = 370 + (21.6 × lean body mass in kg)
 * 
 * @param weight - Weight in kg
 * @param bodyFatPercentage - Body fat percentage (0-100)
 * @returns BMR in calories per day
 */
export function calculateBMRKatch(
  weight: number,
  bodyFatPercentage: number
): number {
  if (bodyFatPercentage < 0 || bodyFatPercentage > 100) {
    throw new Error('Body fat percentage must be between 0 and 100');
  }
  
  const leanBodyMass = weight * (1 - bodyFatPercentage / 100);
  const bmr = 370 + (21.6 * leanBodyMass);
  
  return Math.round(bmr);
}

/**
 * Calculate BMR using specified formula (defaults to Mifflin-St Jeor)
 * 
 * @param weight - Weight in kg
 * @param height - Height in cm
 * @param age - Age in years
 * @param sex - Biological sex
 * @param formula - BMR formula to use
 * @param bodyFatPercentage - Body fat percentage (only for Katch-McArdle)
 * @returns BMR in calories per day
 */
export function calculateBMR(
  weight: number,
  height: number,
  age: number,
  sex: Sex,
  formula: BMRFormula = 'mifflin',
  bodyFatPercentage?: number
): number {
  // Validate inputs
  if (weight <= 0 || height <= 0 || age <= 0) {
    throw new Error('Invalid input: weight, height, and age must be positive numbers');
  }

  if (age < 15 || age > 100) {
    throw new Error('Age must be between 15 and 100 years');
  }

  switch (formula) {
    case 'harris':
      return calculateBMRHarris(weight, height, age, sex);
    case 'katch':
      if (bodyFatPercentage === undefined) {
        throw new Error('Body fat percentage required for Katch-McArdle formula');
      }
      return calculateBMRKatch(weight, bodyFatPercentage);
    case 'mifflin':
    default:
      return calculateBMRMifflin(weight, height, age, sex);
  }
}

/**
 * Convert weight from pounds to kilograms
 */
export function poundsToKg(pounds: number): number {
  return pounds * 0.453592;
}

/**
 * Convert height from feet/inches to centimeters
 */
export function feetInchesToCm(feet: number, inches: number): number {
  const totalInches = (feet * 12) + inches;
  return totalInches * 2.54;
}

/**
 * Convert weight from kg to pounds
 */
export function kgToPounds(kg: number): number {
  return kg * 2.20462;
}

/**
 * Convert height from cm to feet and inches
 */
export function cmToFeetInches(cm: number): { feet: number; inches: number } {
  const totalInches = cm / 2.54;
  const feet = Math.floor(totalInches / 12);
  const inches = Math.round(totalInches % 12);
  
  return { feet, inches };
}
