'use client';

/**
 * Language Context for bilingual support (French/Arabic)
 */

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language } from '@/types';
import { t as translateFn, getDirection } from '@/lib/i18n';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, replacements?: Record<string, string | number>) => string;
  direction: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
  initialLanguage?: Language;
}

export function LanguageProvider({ children, initialLanguage = 'fr' }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>(initialLanguage);
  const [direction, setDirection] = useState<'ltr' | 'rtl'>(getDirection(initialLanguage));

  // Only run on client side after mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('fitcalc-language') as Language | null;
    if (savedLanguage && (savedLanguage === 'fr' || savedLanguage === 'ar')) {
      setLanguageState(savedLanguage);
      setDirection(getDirection(savedLanguage));
      if (typeof document !== 'undefined') {
        document.documentElement.lang = savedLanguage;
        document.documentElement.dir = getDirection(savedLanguage);
      }
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    setDirection(getDirection(lang));
    if (typeof window !== 'undefined') {
      localStorage.setItem('fitcalc-language', lang);
    }
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
      document.documentElement.dir = getDirection(lang);
    }
  };

  const t = (key: string, replacements?: Record<string, string | number>) => {
    return translateFn(language, key, replacements);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, direction }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  
  // During SSR or before mount, return default values
  if (context === undefined) {
    return {
      language: 'fr' as Language,
      setLanguage: () => {},
      t: (key: string, replacements?: Record<string, string | number>) => translateFn('fr', key, replacements),
      direction: 'ltr' as const,
    };
  }
  
  return context;
}
