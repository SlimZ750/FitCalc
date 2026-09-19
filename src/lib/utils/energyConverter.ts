/**
 * Energy Unit Conversion Utilities
 * Convert between Calories, calories, Kilojoules, and Joules
 */

export type EnergyUnit = 'kcal' | 'cal' | 'kj' | 'j';

/**
 * Convert energy between different units
 * 
 * @param value - The energy value to convert
 * @param from - Source unit
 * @param to - Target unit
 * @returns Converted energy value
 */
export function convertEnergy(value: number, from: EnergyUnit, to: EnergyUnit): number {
  if (value < 0) {
    throw new Error('Energy value must be non-negative');
  }

  // Convert to kcal first (base unit)
  let kcal: number;
  
  switch (from) {
    case 'kcal':
      kcal = value;
      break;
    case 'cal':
      kcal = value / 1000;
      break;
    case 'kj':
      kcal = value / 4.184;
      break;
    case 'j':
      kcal = value / 4184;
      break;
    default:
      throw new Error(`Unknown unit: ${from}`);
  }

  // Convert from kcal to target unit
  let result: number;
  
  switch (to) {
    case 'kcal':
      result = kcal;
      break;
    case 'cal':
      result = kcal * 1000;
      break;
    case 'kj':
      result = kcal * 4.184;
      break;
    case 'j':
      result = kcal * 4184;
      break;
    default:
      throw new Error(`Unknown unit: ${to}`);
  }

  return Math.round(result * 100) / 100; // Round to 2 decimal places
}

/**
 * Format energy value with unit
 * 
 * @param value - Energy value
 * @param unit - Energy unit
 * @returns Formatted string with unit
 */
export function formatEnergy(value: number, unit: EnergyUnit): string {
  const formatted = value.toFixed(2);
  const unitLabels: Record<EnergyUnit, string> = {
    kcal: 'kcal',
    cal: 'cal',
    kj: 'kJ',
    j: 'J',
  };
  
  return `${formatted} ${unitLabels[unit]}`;
}

/**
 * Get unit conversion factors relative to kcal
 */
export const conversionFactors: Record<EnergyUnit, number> = {
  kcal: 1,
  cal: 1000,
  kj: 4.184,
  j: 4184,
};

/**
 * Get unit display names
 */
export const unitDisplayNames: Record<EnergyUnit, { en: string; ar: string }> = {
  kcal: { en: 'Kilocalories (kcal)', ar: 'كيلو سعرة حرارية' },
  cal: { en: 'Calories (cal)', ar: 'سعرة حرارية' },
  kj: { en: 'Kilojoules (kJ)', ar: 'كيلو جول' },
  j: { en: 'Joules (J)', ar: 'جول' },
};
