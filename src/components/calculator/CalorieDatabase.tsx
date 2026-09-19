'use client';

/**
 * Comprehensive Calorie Database - Food and Exercise Information
 */

import { useState } from 'react';
import { Search, Apple, Dumbbell, Flame } from 'lucide-react';

interface FoodItem {
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  serving: string;
  unit: string;
}

interface ExerciseItem {
  name: string;
  caloriesPer70kg: number; // Base calories for 70kg person
  category: string;
}

const FOOD_DATABASE: FoodItem[] = [
  // Proteins
  { name: 'Blanc de poulet', calories: 165, protein: 31, carbs: 0, fat: 3.6, serving: '100', unit: 'g' },
  { name: 'Saumon', calories: 208, protein: 25, carbs: 0, fat: 13, serving: '100', unit: 'g' },
  { name: 'Thon en conserve', calories: 132, protein: 28, carbs: 0, fat: 1, serving: '100', unit: 'g' },
  { name: 'Œuf entier', calories: 78, protein: 6, carbs: 0.6, fat: 5, serving: '1', unit: 'œuf' },
  { name: 'Whey protein', calories: 120, protein: 25, carbs: 3, fat: 1, serving: '30', unit: 'g' },
  
  // Carbs
  { name: 'Riz basmati cuit', calories: 130, protein: 2.7, carbs: 28, fat: 0.3, serving: '100', unit: 'g' },
  { name: 'Avoine', calories: 389, protein: 17, carbs: 66, fat: 7, serving: '100', unit: 'g' },
  { name: 'Patate douce', calories: 86, protein: 1.6, carbs: 20, fat: 0.1, serving: '100', unit: 'g' },
  { name: 'Banane', calories: 89, protein: 1.1, carbs: 23, fat: 0.3, serving: '100', unit: 'g' },
  { name: 'Pâtes complètes cuites', calories: 124, protein: 5, carbs: 23, fat: 1.1, serving: '100', unit: 'g' },
  
  // Fats
  { name: 'Huile d\'olive', calories: 884, protein: 0, carbs: 0, fat: 100, serving: '100', unit: 'g' },
  { name: 'Amandes', calories: 579, protein: 21, carbs: 22, fat: 50, serving: '100', unit: 'g' },
  { name: 'Avocat', calories: 160, protein: 2, carbs: 9, fat: 15, serving: '100', unit: 'g' },
  { name: 'Beurre de cacahuète', calories: 588, protein: 25, carbs: 20, fat: 50, serving: '100', unit: 'g' },
  
  // Vegetables
  { name: 'Brocolis', calories: 34, protein: 2.8, carbs: 7, fat: 0.4, serving: '100', unit: 'g' },
  { name: 'Épinards', calories: 23, protein: 2.9, carbs: 3.6, fat: 0.4, serving: '100', unit: 'g' },
  { name: 'Tomate', calories: 18, protein: 0.9, carbs: 3.9, fat: 0.2, serving: '100', unit: 'g' },
  
  // Fruits
  { name: 'Pomme', calories: 52, protein: 0.3, carbs: 14, fat: 0.2, serving: '100', unit: 'g' },
  { name: 'Orange', calories: 47, protein: 0.9, carbs: 12, fat: 0.1, serving: '100', unit: 'g' },
];

const EXERCISE_DATABASE: ExerciseItem[] = [
  // Cardio
  { name: 'Marche (5.5 km/h)', caloriesPer70kg: 280, category: 'Cardio' },
  { name: 'Course (8 km/h)', caloriesPer70kg: 480, category: 'Cardio' },
  { name: 'Course (12 km/h)', caloriesPer70kg: 720, category: 'Cardio' },
  { name: 'Vélo (20 km/h)', caloriesPer70kg: 480, category: 'Cardio' },
  { name: 'Natation (modérée)', caloriesPer70kg: 510, category: 'Cardio' },
  { name: 'Rameur', caloriesPer70kg: 540, category: 'Cardio' },
  
  // Strength
  { name: 'Musculation générale', caloriesPer70kg: 360, category: 'Musculation' },
  { name: 'Musculation intense', caloriesPer70kg: 504, category: 'Musculation' },
  { name: 'Crossfit', caloriesPer70kg: 600, category: 'Musculation' },
  
  // Sports
  { name: 'Football', caloriesPer70kg: 520, category: 'Sports' },
  { name: 'Basketball', caloriesPer70kg: 480, category: 'Sports' },
  { name: 'Tennis', caloriesPer70kg: 420, category: 'Sports' },
  { name: 'Boxe', caloriesPer70kg: 660, category: 'Sports' },
];

interface CalorieDatabaseProps {
  userWeight: number; // in kg
  onClose: () => void;
}

export function CalorieDatabase({ userWeight, onClose }: CalorieDatabaseProps) {
  const [activeTab, setActiveTab] = useState<'food' | 'exercise'>('food');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredFoods = FOOD_DATABASE.filter(food =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredExercises = EXERCISE_DATABASE.filter(exercise =>
    exercise.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === 'all' || exercise.category === selectedCategory)
  );

  const categories = Array.from(new Set(EXERCISE_DATABASE.map(ex => ex.category)));
  
  const calculateExerciseCalories = (baseCals: number) => {
    const weightFactor = userWeight / 70;
    return Math.round(baseCals * weightFactor);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Base de Données Nutritionnelle</h2>
            <button onClick={onClose} className="btn btn-outline">
              Fermer
            </button>
          </div>
          
          {/* Tabs */}
          <div className="flex gap-2 mb-4">
            <button
              onClick={() => setActiveTab('food')}
              className={`btn ${activeTab === 'food' ? 'btn-primary' : 'btn-outline'} inline-flex items-center`}
            >
              <Apple className="mr-2 h-4 w-4" />
              Aliments
            </button>
            <button
              onClick={() => setActiveTab('exercise')}
              className={`btn ${activeTab === 'exercise' ? 'btn-primary' : 'btn-outline'} inline-flex items-center`}
            >
              <Dumbbell className="mr-2 h-4 w-4" />
              Exercices
            </button>
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder={`Rechercher ${activeTab === 'food' ? 'un aliment' : 'un exercice'}...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input pl-10"
            />
          </div>

          {/* Exercise Categories */}
          {activeTab === 'exercise' && (
            <div className="flex gap-2 mt-3">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-3 py-1 rounded text-sm ${selectedCategory === 'all' ? 'bg-primary-100 text-primary-700' : 'bg-gray-100 text-gray-600'}`}
              >
                Tous
              </button>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 rounded text-sm ${selectedCategory === cat ? 'bg-primary-100 text-primary-700' : 'bg-gray-100 text-gray-600'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="overflow-y-auto max-h-[60vh] p-6">
          {activeTab === 'food' ? (
            <div className="grid md:grid-cols-2 gap-4">
              {filteredFoods.map((food, index) => (
                <div key={index} className="card hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold">{food.name}</h3>
                    <span className="text-sm text-gray-500">{food.serving} {food.unit}</span>
                  </div>
                  <div className="grid grid-cols-4 gap-2 text-sm">
                    <div>
                      <div className="text-xs text-gray-500">Calories</div>
                      <div className="font-semibold flex items-center">
                        <Flame className="h-3 w-3 mr-1 text-orange-500" />
                        {food.calories}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Protéines</div>
                      <div className="font-semibold text-accent-600">{food.protein}g</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Glucides</div>
                      <div className="font-semibold text-green-600">{food.carbs}g</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Lipides</div>
                      <div className="font-semibold text-yellow-600">{food.fat}g</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-4">
              {filteredExercises.map((exercise, index) => (
                <div key={index} className="card hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold">{exercise.name}</h3>
                      <span className="text-xs text-gray-500">{exercise.category}</span>
                    </div>
                    <span className="text-sm text-gray-500">1 heure</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center">
                      <Flame className="h-4 w-4 mr-2 text-orange-500" />
                      <span className="text-lg font-bold">{calculateExerciseCalories(exercise.caloriesPer70kg)}</span>
                      <span className="text-sm text-gray-500 ml-1">kcal</span>
                    </div>
                    <div className="text-xs text-gray-500">
                      Pour {userWeight}kg
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 mt-2">
                    Base: {exercise.caloriesPer70kg} kcal/h (70kg)
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}