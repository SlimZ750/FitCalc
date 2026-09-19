'use client';

/**
 * Multi-Step Calculator Wizard
 * Steps: Personal Info -> Activity -> Goal -> Results
 */

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { User, Activity, Target, Calculator } from 'lucide-react';
import { calculateBMR, calculateTDEE, calculateTargetCalories, calculateProtein, calculateFat, calculateCarbs } from '@/lib/calculations';
import type { CalculatorFormData } from '@/types';

// Step components
import { PersonalInfoStep } from './steps/PersonalInfoStep';
import { ActivityStep } from './steps/ActivityStep';
import { GoalStep } from './steps/GoalStep';
import { ResultsStep } from './steps/ResultsStep';

const STEPS = [
  { id: 'personal', icon: User },
  { id: 'activity', icon: Activity },
  { id: 'goal', icon: Target },
  { id: 'results', icon: Calculator },
] as const;

export function CalculatorWizard() {
  const { t } = useLanguage();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Partial<CalculatorFormData>>({
    unit: 'metric',
  });

  const updateFormData = (data: Partial<CalculatorFormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const nextStep = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const calculateResults = () => {
    if (!isFormComplete()) return null;

    const data = formData as CalculatorFormData;
    
    // Convert units if imperial
    let weightInKg = data.weight;
    let heightInCm = data.height;
    
    if (data.unit === 'imperial') {
      weightInKg = data.weight * 0.453592; // lbs to kg
      heightInCm = data.height * 2.54; // inches to cm
    }
    
    const bmr = calculateBMR(weightInKg, heightInCm, data.age, data.gender);
    const tdee = calculateTDEE(bmr, data.activityLevel);
    const targetCalories = calculateTargetCalories(tdee, data.goal);
    const protein = calculateProtein(weightInKg, data.goal, 'intermediate');
    const fat = calculateFat(targetCalories, data.goal);
    const carbs = calculateCarbs(targetCalories, protein, fat);

    return {
      bmr,
      tdee,
      macros: {
        calories: targetCalories,
        protein,
        carbs,
        fats: fat,
      },
      adjustedCalories: targetCalories,
    };
  };

  const isFormComplete = (): boolean => {
    return !!(
      formData.age &&
      formData.gender &&
      formData.weight &&
      formData.height &&
      formData.activityLevel &&
      formData.goal
    );
  };



  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <PersonalInfoStep
            data={formData}
            updateData={updateFormData}
            onNext={nextStep}
          />
        );
      case 1:
        return (
          <ActivityStep
            data={formData}
            updateData={updateFormData}
            onNext={nextStep}
            onBack={prevStep}
          />
        );
      case 2:
        return (
          <GoalStep
            data={formData}
            updateData={updateFormData}
            onNext={nextStep}
            onBack={prevStep}
          />
        );
      case 3:
        const results = calculateResults();
        return (
          <ResultsStep
            formData={formData as CalculatorFormData}
            results={results}
            onBack={prevStep}
            onReset={() => {
              setFormData({ unit: 'metric' });
              setCurrentStep(0);
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      {/* Progress Indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          {STEPS.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={step.id} className="flex items-center flex-1">
                {/* Step Circle */}
                <div className="relative flex items-center justify-center w-12 h-12 rounded-full border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900">
                  <Icon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                </div>

                {/* Connector Line */}
                {index < STEPS.length - 1 && (
                  <div className="flex-1 h-1 mx-2 rounded bg-gray-200 dark:bg-gray-700" />
                )}
              </div>
            );
          })}
        </div>

        {/* Step Labels */}
        <div className="flex items-center justify-between">
          {STEPS.map((step) => (
            <div key={step.id} className="flex-1 text-center">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {t(`calculator.steps.${step.id}`)}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Step Content */}
      <div className="card">{renderStep()}</div>
    </div>
  );
}
