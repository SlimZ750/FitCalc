'use client';

/**
 * Step 1: Personal Information
 */

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronRight } from 'lucide-react';
import type { CalculatorFormData } from '@/types';

interface PersonalInfoStepProps {
  data: Partial<CalculatorFormData>;
  updateData: (data: Partial<CalculatorFormData>) => void;
  onNext: () => void;
}

export function PersonalInfoStep({ data, updateData, onNext }: PersonalInfoStepProps) {
  const { t } = useLanguage();
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!data.age || data.age < 15 || data.age > 100) {
      newErrors.age = t('calculator.validation.ageInvalid');
    }
    if (!data.weight || data.weight < 30 || data.weight > 300) {
      newErrors.weight = t('calculator.validation.weightInvalid');
    }
    if (!data.height || data.height < 120 || data.height > 250) {
      newErrors.height = t('calculator.validation.heightInvalid');
    }
    if (!data.gender) {
      newErrors.gender = t('calculator.validation.genderRequired');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      onNext();
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">{t('calculator.personal.title')}</h2>
        <p className="text-gray-600 dark:text-gray-400">
          {t('calculator.personal.subtitle')}
        </p>
      </div>

      {/* Unit Toggle */}
      <div>
        <label className="label">{t('calculator.personal.unit')}</label>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => updateData({ unit: 'metric' })}
            className={`flex-1 py-3 px-4 rounded-lg border-2 transition-all ${
              data.unit === 'metric'
                ? 'border-primary-600 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300'
                : 'border-gray-300 dark:border-gray-700 hover:border-gray-400'
            }`}
          >
            <div className="font-semibold">Métrique</div>
            <div className="text-sm text-gray-500">kg / cm</div>
          </button>
          <button
            type="button"
            onClick={() => updateData({ unit: 'imperial' })}
            className={`flex-1 py-3 px-4 rounded-lg border-2 transition-all ${
              data.unit === 'imperial'
                ? 'border-primary-600 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300'
                : 'border-gray-300 dark:border-gray-700 hover:border-gray-400'
            }`}
          >
            <div className="font-semibold">Imperial</div>
            <div className="text-sm text-gray-500">lbs / in</div>
          </button>
        </div>
      </div>

      {/* Gender */}
      <div>
        <label className="label">{t('calculator.personal.gender')}</label>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => updateData({ gender: 'male' })}
            className={`flex-1 py-3 px-4 rounded-lg border-2 transition-all ${
              data.gender === 'male'
                ? 'border-primary-600 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300'
                : 'border-gray-300 dark:border-gray-700 hover:border-gray-400'
            }`}
          >
            👨 {t('calculator.personal.male')}
          </button>
          <button
            type="button"
            onClick={() => updateData({ gender: 'female' })}
            className={`flex-1 py-3 px-4 rounded-lg border-2 transition-all ${
              data.gender === 'female'
                ? 'border-primary-600 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300'
                : 'border-gray-300 dark:border-gray-700 hover:border-gray-400'
            }`}
          >
            👩 {t('calculator.personal.female')}
          </button>
        </div>
        {errors.gender && <p className="text-sm text-red-600 mt-1">{errors.gender}</p>}
      </div>

      {/* Age */}
      <div>
        <label htmlFor="age" className="label">
          {t('calculator.personal.age')}
        </label>
        <div className="relative">
          <input
            type="number"
            id="age"
            value={data.age || ''}
            onChange={(e) => updateData({ age: parseInt(e.target.value) || undefined })}
            className={`input pr-16 ${errors.age ? 'border-red-500' : ''}`}
            placeholder="25"
            min="15"
            max="100"
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-500">
            ans
          </div>
        </div>
        {errors.age && <p className="text-sm text-red-600 mt-1">{errors.age}</p>}
        {data.age && (
          <p className="text-xs text-gray-500 mt-1">
            {data.age < 25 ? 'Métabolisme généralement élevé' : 
             data.age < 40 ? 'Métabolisme optimal' :
             data.age < 60 ? 'Métabolisme modéré' : 
             'Métabolisme plus lent avec l\'âge'}
          </p>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {/* Weight */}
        <div>
          <label htmlFor="weight" className="label">
            {t('calculator.personal.weight')} ({data.unit === 'metric' ? 'kg' : 'lbs'})
          </label>
          <div className="relative">
            <input
              type="number"
              id="weight"
              value={data.weight || ''}
              onChange={(e) => updateData({ weight: parseFloat(e.target.value) || undefined })}
              className={`input pr-12 ${errors.weight ? 'border-red-500' : ''}`}
              placeholder={data.unit === 'metric' ? '70' : '154'}
              step="0.1"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-500">
              {data.unit === 'metric' ? 'kg' : 'lbs'}
            </div>
          </div>
          {errors.weight && <p className="text-sm text-red-600 mt-1">{errors.weight}</p>}
          {data.weight && (
            <p className="text-xs text-gray-500 mt-1">
              {data.unit === 'metric' 
                ? `≈ ${(data.weight * 2.205).toFixed(1)} lbs`
                : `≈ ${(data.weight / 2.205).toFixed(1)} kg`
              }
            </p>
          )}
        </div>

        {/* Height */}
        <div>
          <label htmlFor="height" className="label">
            {t('calculator.personal.height')} ({data.unit === 'metric' ? 'cm' : 'in'})
          </label>
          <div className="relative">
            <input
              type="number"
              id="height"
              value={data.height || ''}
              onChange={(e) => updateData({ height: parseFloat(e.target.value) || undefined })}
              className={`input pr-12 ${errors.height ? 'border-red-500' : ''}`}
              placeholder={data.unit === 'metric' ? '175' : '69'}
              step="0.1"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-500">
              {data.unit === 'metric' ? 'cm' : 'in'}
            </div>
          </div>
          {errors.height && <p className="text-sm text-red-600 mt-1">{errors.height}</p>}
          {data.height && (
            <p className="text-xs text-gray-500 mt-1">
              {data.unit === 'metric' 
                ? `≈ ${Math.floor(data.height / 30.48)}' ${Math.round((data.height % 30.48) / 2.54)}"`
                : `≈ ${Math.round(data.height * 2.54)} cm`
              }
            </p>
          )}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-end pt-4 border-t border-gray-200 dark:border-gray-700">
        <button onClick={handleNext} className="btn btn-primary inline-flex items-center">
          {t('common.next')}
          <ChevronRight className="ml-2 h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
