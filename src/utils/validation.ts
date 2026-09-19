/**
 * Input validation utilities
 */

import { z } from 'zod';

/**
 * Calculator input validation schema
 */
export const calculatorInputSchema = z.object({
  sex: z.enum(['male', 'female'] as const),
  age: z.number().int().min(15, 'Age must be at least 15').max(100, 'Age must be at most 100'),
  height: z.number().positive().min(100, 'Height must be at least 100cm').max(250, 'Height must be at most 250cm'),
  weight: z.number().positive().min(30, 'Weight must be at least 30kg').max(300, 'Weight must be at most 300kg'),
  activityLevel: z.enum(['sedentary', 'lightly_active', 'moderately_active', 'very_active', 'extremely_active'] as const),
  goal: z.enum(['lose_fat', 'maintain', 'build_muscle', 'lean_bulk'] as const),
  experience: z.enum(['beginner', 'intermediate', 'advanced'] as const),
  trainingDays: z.number().int().min(0).max(7),
  equipment: z.enum(['gym', 'home', 'home_basic'] as const),
  unitSystem: z.enum(['metric', 'imperial'] as const),
});

/**
 * Weight log validation schema
 */
export const weightLogSchema = z.object({
  weight: z.number().positive(),
  waist: z.number().positive().optional(),
  bodyFat: z.number().min(0).max(100).optional(),
  date: z.string().datetime(),
  notes: z.string().max(500).optional(),
});

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Sanitize user input
 */
export function sanitizeInput(input: string): string {
  return input.trim().replace(/[<>]/g, '');
}
