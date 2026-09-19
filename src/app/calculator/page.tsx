'use client';

/**
 * Calculator Page - Multi-step wizard
 */

import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { CalculatorWizard } from '@/components/calculator/CalculatorWizard';

export default function CalculatorPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="container-custom py-8">
        <Link href="/" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8">
          <ArrowLeft className="h-5 w-5 mr-2" />
          {t('common.back')}
        </Link>

        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {t('calculator.title')}
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Calculez vos besoins nutritionnels personnalisés
          </p>
        </div>

        <CalculatorWizard />
      </div>
    </div>
  );
}
