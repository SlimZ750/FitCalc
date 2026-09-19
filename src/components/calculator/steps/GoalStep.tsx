'use client';

/**
 * Step 3: Goal Selection
 */

import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronLeft, ChevronRight, TrendingDown, Minus, TrendingUp, LucideIcon } from 'lucide-react';
import type { CalculatorFormData, Goal } from '@/types';

interface GoalStepProps {
  data: Partial<CalculatorFormData>;
  updateData: (data: Partial<CalculatorFormData>) => void;
  onNext: () => void;
  onBack: () => void;
}

const GOALS: Array<{
  value: Goal;
  icon: LucideIcon;
  color: string;
  deficit: number;
}> = [
  { value: 'lose_fat', icon: TrendingDown, color: 'red', deficit: -500 },
  { value: 'maintain', icon: Minus, color: 'blue', deficit: 0 },
  { value: 'build_muscle', icon: TrendingUp, color: 'green', deficit: 300 },
];

export function GoalStep({ data, updateData, onNext, onBack }: GoalStepProps) {
  const { t } = useLanguage();

  const handleNext = () => {
    if (data.goal) {
      onNext();
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">{t('calculator.goal.title')}</h2>
        <p className="text-gray-600 dark:text-gray-400">
          {t('calculator.goal.subtitle')}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {GOALS.map((goal) => {
          const Icon = goal.icon;
          const isSelected = data.goal === goal.value;
          
          // Map colors to actual Tailwind classes
          const colorClasses = {
            red: {
              border: isSelected ? 'border-red-600' : 'border-gray-300 dark:border-gray-700',
              bg: isSelected ? 'bg-red-50 dark:bg-red-900/20' : '',
              iconBg: isSelected ? 'bg-red-100 dark:bg-red-900/40' : 'bg-gray-100 dark:bg-gray-800',
              iconColor: isSelected ? 'text-red-600 dark:text-red-400' : 'text-gray-400',
              badgeBg: 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400',
            },
            blue: {
              border: isSelected ? 'border-blue-600' : 'border-gray-300 dark:border-gray-700',
              bg: isSelected ? 'bg-blue-50 dark:bg-blue-900/20' : '',
              iconBg: isSelected ? 'bg-blue-100 dark:bg-blue-900/40' : 'bg-gray-100 dark:bg-gray-800',
              iconColor: isSelected ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400',
              badgeBg: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400',
            },
            green: {
              border: isSelected ? 'border-green-600' : 'border-gray-300 dark:border-gray-700',
              bg: isSelected ? 'bg-green-50 dark:bg-green-900/20' : '',
              iconBg: isSelected ? 'bg-green-100 dark:bg-green-900/40' : 'bg-gray-100 dark:bg-gray-800',
              iconColor: isSelected ? 'text-green-600 dark:text-green-400' : 'text-gray-400',
              badgeBg: 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400',
            },
          };

          const classes = colorClasses[goal.color as keyof typeof colorClasses];

          return (
            <button
              key={goal.value}
              type="button"
              onClick={() => updateData({ goal: goal.value })}
              className={`p-6 rounded-xl border-2 transition-all hover:border-gray-400 ${classes.border} ${classes.bg}`}
            >
              <div className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${classes.iconBg}`}>
                  <Icon className={`h-8 w-8 ${classes.iconColor}`} />
                </div>
                <h3 className="font-bold text-lg mb-2">
                  {t(`calculator.goal.options.${goal.value}.title`)}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 min-h-[40px]">
                  {t(`calculator.goal.options.${goal.value}.description`)}
                </p>
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${classes.badgeBg}`}>
                  {goal.deficit > 0 ? '+' : ''}
                  {goal.deficit} {t('calculator.goal.calories')}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Additional Info */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <p className="text-sm text-blue-900 dark:text-blue-200">
          💡 <strong>{t('calculator.goal.tip')}:</strong>{' '}
          {t('calculator.goal.tipDescription')}
        </p>
      </div>

      {/* Navigation */}
      <div className="flex justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
        <button onClick={onBack} className="btn btn-outline inline-flex items-center">
          <ChevronLeft className="mr-2 h-5 w-5" />
          {t('common.back')}
        </button>
        <button
          onClick={handleNext}
          disabled={!data.goal}
          className="btn btn-primary inline-flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {t('calculator.goal.calculate')}
          <ChevronRight className="ml-2 h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
