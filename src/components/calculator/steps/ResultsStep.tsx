'use client';

/**
 * Step 4: Results Display
 */

import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronLeft, RefreshCw, Download, Share2, FileImage, FileText } from 'lucide-react';
import type { CalculatorFormData } from '@/types';
import { DailyMealProgram } from '../DailyMealProgram';
import { MealPlanInfographic } from '../MealPlanInfographic';
import { exportAsImage, exportAsPDF, shareResults } from '@/lib/utils/exportResults';
import { useState } from 'react';

interface ResultsStepProps {
  formData: CalculatorFormData;
  results: {
    bmr: number;
    tdee: number;
    macros: {
      calories: number;
      protein: number;
      carbs: number;
      fats: number;
    };
    adjustedCalories: number;
  } | null;
  onBack: () => void;
  onReset: () => void;
}

export function ResultsStep({ formData, results, onBack, onReset }: ResultsStepProps) {
  const { t } = useLanguage();
  const [showExportMenu, setShowExportMenu] = useState(false);
  const [isExporting, setIsExporting] = useState(false);

  // Export handlers
  const handleExportPDF = async () => {
    setIsExporting(true);
    try {
      await exportAsPDF('meal-plan-export', `fitcalc-meal-plan-${Date.now()}`);
      setShowExportMenu(false);
    } catch (error) {
      console.error('Export failed:', error);
      alert('❌ Erreur lors de l\'export PDF');
    } finally {
      setIsExporting(false);
    }
  };

  const handleExportPNG = async () => {
    setIsExporting(true);
    try {
      await exportAsImage('meal-plan-export', `fitcalc-meal-plan-${Date.now()}`, 'png');
      setShowExportMenu(false);
    } catch (error) {
      console.error('Export failed:', error);
      alert('❌ Erreur lors de l\'export PNG');
    } finally {
      setIsExporting(false);
    }
  };

  const handleShare = async () => {
    try {
      await shareResults(
        {
          calories: macros.calories,
          protein: macros.protein,
          carbs: macros.carbs,
          fats: macros.fats,
          goal: t(`calculator.goals.${formData.goal}`),
        },
        'meal-plan-export'
      );
    } catch (error) {
      console.error('Share failed:', error);
    }
  };


  if (!results) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 dark:text-gray-400">
          {t('calculator.results.error')}
        </p>
      </div>
    );
  }

  const { bmr, tdee, macros } = results;
  const goalLabel = t(`calculator.results.goalCalories.${formData.goal}`);

  return (
    <div className="space-y-6">
      <div id="results-container" className="space-y-6">{/* Wrapped content for export */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">{t('calculator.results.title')}</h2>
        <p className="text-gray-600 dark:text-gray-400">
          {t('calculator.results.subtitle')}
        </p>
      </div>

      {/* Main Calories Display */}
      <div className="bg-gradient-to-br from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-xl p-8 text-center border border-primary-200 dark:border-primary-800">
        <div className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wide mb-2">
          {t(`calculator.results.goalCalories.${formData.goal}`)}
        </div>
        <div className="text-6xl font-bold text-primary-700 dark:text-primary-300 mb-2">
          {Math.round(macros.calories)}
          <span className="text-2xl ml-2 text-gray-500">kcal</span>
        </div>
        <div className="text-lg text-gray-600 dark:text-gray-400">
          {t('calculator.results.caloriesPerDay')}
        </div>
        
        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-primary-200 dark:border-primary-700">
          <div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Poids</div>
            <div className="font-bold">{formData.weight} {formData.unit === 'metric' ? 'kg' : 'lbs'}</div>
          </div>
          <div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Taille</div>
            <div className="font-bold">{formData.height} {formData.unit === 'metric' ? 'cm' : 'in'}</div>
          </div>
          <div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Âge</div>
            <div className="font-bold">{formData.age} ans</div>
          </div>
        </div>
      </div>

      {/* Macros Breakdown */}
      <div>
        <h3 className="font-bold text-lg mb-4">{t('calculator.results.macrosBreakdown')}</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {/* Protein */}
          <div className="card bg-accent-50 dark:bg-accent-900/20 border-accent-200 dark:border-accent-800">
            <div className="text-sm font-semibold text-accent-600 dark:text-accent-400 mb-1">
              🍗 {t('calculator.results.protein')}
            </div>
            <div className="text-3xl font-bold mb-1">
              {Math.round(macros.protein)}
              <span className="text-lg ml-1 text-gray-500">g</span>
            </div>
            <div className="text-xs text-gray-500">
              {Math.round((macros.protein * 4 * 100) / macros.calories)}% •{' '}
              {Math.round(macros.protein * 4)} kcal
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400 mt-2">
              {(macros.protein / (formData.unit === 'metric' ? formData.weight : formData.weight * 0.453592)).toFixed(1)} g/kg
            </div>
          </div>

          {/* Carbs */}
          <div className="card bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
            <div className="text-sm font-semibold text-green-600 dark:text-green-400 mb-1">
              🍞 {t('calculator.results.carbs')}
            </div>
            <div className="text-3xl font-bold mb-1">
              {Math.round(macros.carbs)}
              <span className="text-lg ml-1 text-gray-500">g</span>
            </div>
            <div className="text-xs text-gray-500">
              {Math.round((macros.carbs * 4 * 100) / macros.calories)}% •{' '}
              {Math.round(macros.carbs * 4)} kcal
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400 mt-2">
              4 kcal par gramme
            </div>
          </div>

          {/* Fats */}
          <div className="card bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800">
            <div className="text-sm font-semibold text-yellow-600 dark:text-yellow-400 mb-1">
              🥑 {t('calculator.results.fats')}
            </div>
            <div className="text-3xl font-bold mb-1">
              {Math.round(macros.fats)}
              <span className="text-lg ml-1 text-gray-500">g</span>
            </div>
            <div className="text-xs text-gray-500">
              {Math.round((macros.fats * 9 * 100) / macros.calories)}% •{' '}
              {Math.round(macros.fats * 9)} kcal
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400 mt-2">
              9 kcal par gramme
            </div>
          </div>
        </div>
      </div>

      {/* Additional Metrics */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="card bg-gray-50 dark:bg-gray-800/50">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
            {t('calculator.results.bmr')}
          </div>
          <div className="text-2xl font-bold">
            {Math.round(bmr)} <span className="text-sm text-gray-500">kcal/jour</span>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            {t('calculator.results.bmrDescription')}
          </p>
          <div className="text-xs text-gray-500 mt-2 pt-2 border-t border-gray-200 dark:border-gray-700">
            Formule: Mifflin-St Jeor
          </div>
        </div>

        <div className="card bg-gray-50 dark:bg-gray-800/50">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
            {t('calculator.results.tdee')}
          </div>
          <div className="text-2xl font-bold">
            {Math.round(tdee)} <span className="text-sm text-gray-500">kcal/jour</span>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            {t('calculator.results.tdeeDescription')}
          </p>
          <div className="text-xs text-gray-500 mt-2 pt-2 border-t border-gray-200 dark:border-gray-700">
            BMR × Facteur d&apos;activité
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <h4 className="font-semibold mb-2 text-blue-900 dark:text-blue-200">
          📋 {t('calculator.results.recommendations')}
        </h4>
        <ul className="space-y-2 text-sm text-blue-900 dark:text-blue-200">
          <li>• {t('calculator.results.rec1')}</li>
          <li>• {t('calculator.results.rec2')}</li>
          <li>• {t('calculator.results.rec3')}</li>
        </ul>
      </div>

      {/* Educational Content */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* BMR Explanation */}
        <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
          <h4 className="font-semibold mb-2 text-purple-900 dark:text-purple-200 flex items-center">
            🧠 Calcul du BMR (Métabolisme de Base)
          </h4>
          <div className="text-xs text-purple-900 dark:text-purple-200 space-y-2">
            <p><strong>Formule Mifflin-St Jeor :</strong></p>
            <p className="font-mono bg-white dark:bg-gray-800 p-2 rounded">
              {formData.gender === 'male' 
                ? `BMR = (10 × ${formData.unit === 'metric' ? formData.weight : (formData.weight * 0.453592).toFixed(1)}kg) + (6.25 × ${formData.unit === 'metric' ? formData.height : (formData.height * 2.54).toFixed(0)}cm) - (5 × ${formData.age}) + 5`
                : `BMR = (10 × ${formData.unit === 'metric' ? formData.weight : (formData.weight * 0.453592).toFixed(1)}kg) + (6.25 × ${formData.unit === 'metric' ? formData.height : (formData.height * 2.54).toFixed(0)}cm) - (5 × ${formData.age}) - 161`
              }
            </p>
            <p>Le BMR représente l&apos;énergie nécessaire pour maintenir les fonctions vitales au repos.</p>
          </div>
        </div>

        {/* Weight Change Estimation */}
        <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
          <h4 className="font-semibold mb-2 text-orange-900 dark:text-orange-200 flex items-center">
            📈 Évolution du Poids Estimée
          </h4>
          <div className="text-xs text-orange-900 dark:text-orange-200 space-y-2">
            {(() => {
              const deficit = tdee - macros.calories;
              const weeklyChange = (deficit * 7) / 3500; // 1 lb = 3500 cal
              const weeklyChangeKg = weeklyChange * 0.453592;
              
              return (
                <>
                  <p><strong>Déficit/Surplus quotidien :</strong> {deficit > 0 ? '-' : '+'}{Math.abs(Math.round(deficit))} kcal</p>
                  <p><strong>Changement estimé par semaine :</strong> {weeklyChangeKg > 0 ? '-' : '+'}{Math.abs(weeklyChangeKg).toFixed(2)} kg</p>
                  <p className="text-xs">
                    Basé sur le principe : 1 kg de graisse ≈ 7 700 kcal
                  </p>
                </>
              );
            })()}
          </div>
        </div>
      </div>

      {/* Daily Meal Program */}
      <DailyMealProgram 
        protein={macros.protein}
        carbs={macros.carbs}
        fats={macros.fats}
      />

      {/* Exercise Examples */}
      <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
        <h4 className="font-semibold mb-3 text-red-900 dark:text-red-200">
          🏃‍♂️ Calories brûlées par heure d&apos;exercice (pour {formData.weight}{formData.unit === 'metric' ? 'kg' : 'lbs'})
        </h4>
        <div className="grid md:grid-cols-3 gap-4 text-xs text-red-900 dark:text-red-200">
          {(() => {
            const weightKg = formData.unit === 'metric' ? formData.weight : formData.weight * 0.453592;
            const weightFactor = weightKg / 70; // Base calculation for 70kg person
            
            const exercises = [
              { name: 'Marche (5.5 km/h)', base: 280 },
              { name: 'Course (9 km/h)', base: 590 },
              { name: 'Vélo (20 km/h)', base: 480 },
              { name: 'Natation', base: 510 },
              { name: 'Musculation', base: 360 },
              { name: 'Football', base: 520 },
            ];

            return exercises.map((ex, i) => (
              <div key={i} className="flex justify-between">
                <span>{ex.name}:</span>
                <span className="font-semibold">{Math.round(ex.base * weightFactor)} kcal</span>
              </div>
            ));
          })()}
        </div>
        <p className="text-xs text-red-700 dark:text-red-300 mt-2">
          💡 Pour brûler 500 kcal, il faut environ {Math.round(500 / (590 * (formData.unit === 'metric' ? formData.weight : formData.weight * 0.453592) / 70))} minutes de course.
        </p>
      </div>

      {/* Calorie Cycling */}
      <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-4">
        <h4 className="font-semibold mb-3 text-indigo-900 dark:text-indigo-200">
          🔄 Cyclage Calorique (Zigzag) - Suggestion Hebdomadaire
        </h4>
        <div className="text-xs text-indigo-900 dark:text-indigo-200">
          <p className="mb-3">Variez vos calories pour éviter l&apos;adaptation métabolique :</p>
          <div className="grid grid-cols-7 gap-2 text-center">
            {['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'].map((day, i) => {
              const isHighDay = i === 2 || i === 5; // Wed & Sat
              const calories = isHighDay 
                ? Math.round(macros.calories + 200) 
                : Math.round(macros.calories - 100);
              
              return (
                <div key={day} className={`p-2 rounded ${isHighDay ? 'bg-white dark:bg-gray-800' : 'bg-indigo-100 dark:bg-indigo-800'}`}>
                  <div className="font-semibold">{day}</div>
                  <div className="text-xs">{calories}</div>
                  <div className="text-xs">kcal</div>
                </div>
              );
            })}
          </div>
          <p className="mt-3 text-xs">
            Moyenne hebdomadaire : {Math.round(macros.calories)} kcal/jour
          </p>
        </div>
      </div>

      {/* Macronutrient Science */}
      <div className="bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
        <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-200">
          🔬 Science des Macronutriments
        </h4>
        <div className="grid md:grid-cols-3 gap-4 text-xs text-gray-700 dark:text-gray-300">
          <div>
            <div className="font-semibold text-accent-600 dark:text-accent-400 mb-2">Protéines (4 kcal/g)</div>
            <ul className="space-y-1">
              <li>• Synthèse musculaire</li>
              <li>• Effet thermique: 20-30%</li>
              <li>• Satiété élevée</li>
              <li>• Réparation cellulaire</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-green-600 dark:text-green-400 mb-2">Glucides (4 kcal/g)</div>
            <ul className="space-y-1">
              <li>• Énergie immédiate</li>
              <li>• Performance sportive</li>
              <li>• Fonction cérébrale</li>
              <li>• Récupération musculaire</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-yellow-600 dark:text-yellow-400 mb-2">Lipides (9 kcal/g)</div>
            <ul className="space-y-1">
              <li>• Hormones (testostérone)</li>
              <li>• Vitamines liposolubles</li>
              <li>• Inflammation</li>
              <li>• Satiété durable</li>
            </ul>
          </div>
        </div>
      </div>
      </div>{/* End of results-container */}

      <div
        aria-hidden="true"
        style={{ position: 'absolute', left: '-10000px', top: 0, pointerEvents: 'none' }}
      >
        <MealPlanInfographic
          calories={macros.calories}
          protein={macros.protein}
          carbs={macros.carbs}
          fats={macros.fats}
          goalLabel={goalLabel}
        />
      </div>

      {/* Export and Share Actions */}
      <div className="flex flex-wrap gap-3">
        <div className="relative flex-1">
          <button 
            onClick={() => setShowExportMenu(!showExportMenu)}
            disabled={isExporting}
            className="btn btn-outline inline-flex items-center w-full justify-center"
          >
            <Download className="mr-2 h-5 w-5" />
            {isExporting ? 'Export en cours...' : t('calculator.results.download')}
          </button>
          
          {/* Export Menu Dropdown */}
          {showExportMenu && (
            <div className="absolute bottom-full left-0 mb-2 w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-10">
              <button
                onClick={handleExportPDF}
                disabled={isExporting}
                className="w-full px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center gap-3 rounded-t-lg transition-colors"
              >
                <FileText className="h-5 w-5 text-red-600" />
                <div>
                  <div className="font-medium">Export PDF</div>
                  <div className="text-xs text-gray-500">Infographie repas imprimable</div>
                </div>
              </button>
              <button
                onClick={handleExportPNG}
                disabled={isExporting}
                className="w-full px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center gap-3 transition-colors"
              >
                <FileImage className="h-5 w-5 text-blue-600" />
                <div>
                  <div className="font-medium">Télécharger l&apos;image</div>
                  <div className="text-xs text-gray-500">Infographie repas PNG</div>
                </div>
              </button>
            </div>
          )}
        </div>
        
        <button 
          onClick={handleShare}
          className="btn btn-outline inline-flex items-center flex-1 justify-center"
        >
          <Share2 className="mr-2 h-5 w-5" />
          {t('calculator.results.share')}
        </button>
      </div>

      {/* Navigation */}
      <div className="flex justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
        <button onClick={onBack} className="btn btn-outline inline-flex items-center">
          <ChevronLeft className="mr-2 h-5 w-5" />
          {t('common.back')}
        </button>
        <button onClick={onReset} className="btn btn-primary inline-flex items-center">
          <RefreshCw className="mr-2 h-5 w-5" />
          {t('calculator.results.newCalculation')}
        </button>
      </div>
    </div>
  );
}
