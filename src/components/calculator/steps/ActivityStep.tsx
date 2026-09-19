'use client';

/**
 * Step 2: Activity Level
 */

import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { CalculatorFormData, ActivityLevel } from '@/types';

interface ActivityStepProps {
  data: Partial<CalculatorFormData>;
  updateData: (data: Partial<CalculatorFormData>) => void;
  onNext: () => void;
  onBack: () => void;
}

const ACTIVITY_LEVELS: Array<{
  value: ActivityLevel;
  emoji: string;
  multiplier: number;
}> = [
  { value: 'sedentary', emoji: '🪑', multiplier: 1.2 },
  { value: 'lightly_active', emoji: '🚶', multiplier: 1.375 },
  { value: 'moderately_active', emoji: '🏃', multiplier: 1.55 },
  { value: 'very_active', emoji: '💪', multiplier: 1.725 },
  { value: 'extremely_active', emoji: '🏋️', multiplier: 1.9 },
];

export function ActivityStep({ data, updateData, onNext, onBack }: ActivityStepProps) {
  const { t } = useLanguage();

  const handleNext = () => {
    if (data.activityLevel) {
      onNext();
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">{t('calculator.activity.title')}</h2>
        <p className="text-gray-600 dark:text-gray-400">
          {t('calculator.activity.subtitle')}
        </p>
      </div>

      <div className="space-y-3">
        {ACTIVITY_LEVELS.map((level) => (
          <button
            key={level.value}
            type="button"
            onClick={() => updateData({ activityLevel: level.value })}
            className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
              data.activityLevel === level.value
                ? 'border-primary-600 bg-primary-50 dark:bg-primary-900/20'
                : 'border-gray-300 dark:border-gray-700 hover:border-gray-400'
            }`}
          >
            <div className="flex items-start gap-4">
              <span className="text-3xl">{level.emoji}</span>
              <div className="flex-1">
                <div className="font-semibold text-lg mb-1">
                  {t(`calculator.activity.levels.${level.value}.title`)}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {t(`calculator.activity.levels.${level.value}.description`)}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                  {t('calculator.activity.multiplier')}: {level.multiplier}x
                </p>
              </div>
              {data.activityLevel === level.value && (
                <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
        <button onClick={onBack} className="btn btn-outline inline-flex items-center">
          <ChevronLeft className="mr-2 h-5 w-5" />
          {t('common.back')}
        </button>
        <button
          onClick={handleNext}
          disabled={!data.activityLevel}
          className="btn btn-primary inline-flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {t('common.next')}
          <ChevronRight className="ml-2 h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
