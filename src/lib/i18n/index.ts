/**
 * i18n (Internationalization) utilities
 */

import { Language } from '@/types';
import { translations } from './translations';

/**
 * Get nested translation by dot-notation path
 */
function getNestedValue(obj: Record<string, unknown>, path: string): unknown {
  return path.split('.').reduce((current: unknown, key) => {
    if (current && typeof current === 'object' && key in current) {
      return (current as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj);
}

/**
 * Get translation for a given key
 */
export function t(
  language: Language,
  key: string,
  replacements?: Record<string, string | number>
): string {
  const translationObj = translations[language];
  const translation = getNestedValue(translationObj, key);

  if (!translation) {
    console.warn(`Translation missing for key: ${key} in language: ${language}`);
    return key;
  }

  // Replace placeholders like {name}, {count}, etc.
  if (replacements && typeof translation === 'string') {
    let result = translation;
    Object.entries(replacements).forEach(([placeholder, value]) => {
      result = result.replace(
        new RegExp(`\\{${placeholder}\\}`, 'g'),
        String(value)
      );
    });
    return result;
  }

  return typeof translation === 'string' ? translation : key;
}

/**
 * Get direction (ltr/rtl) for a language
 */
export function getDirection(language: Language): 'ltr' | 'rtl' {
  return language === 'ar' ? 'rtl' : 'ltr';
}

/**
 * Format number with proper locale
 */
export function formatNumber(
  value: number,
  language: Language,
  decimals: number = 0
): string {
  const locale = language === 'ar' ? 'ar-SA' : 'fr-FR';
  return value.toLocaleString(locale, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

/**
 * Format currency
 */
export function formatCurrency(
  value: number,
  language: Language,
  currency: string = 'MAD'
): string {
  const locale = language === 'ar' ? 'ar-SA' : 'fr-FR';
  return value.toLocaleString(locale, {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}

export * from './translations';
