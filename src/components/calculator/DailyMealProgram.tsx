'use client';

/**
 * Daily Meal Program Component
 * Shows personalized daily meal plan to hit macro targets
 */

interface DailyMealProgramProps {
  protein: number;
  carbs: number;
  fats: number;
}

export function DailyMealProgram({ protein, carbs, fats }: DailyMealProgramProps) {
  return (
    <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
      <h4 className="font-semibold mb-3 text-green-900 dark:text-green-200">
        🍽️ Programme alimentaire quotidien pour atteindre vos macros
      </h4>
      <div className="space-y-4 text-sm text-green-900 dark:text-green-200">
        
        {/* Protein Daily Program */}
        <ProteinProgram protein={protein} />
        
        {/* Carbs Daily Program */}
        <CarbsProgram carbs={carbs} />
        
        {/* Fats Daily Program */}
        <FatsProgram fats={fats} />

        <div className="text-xs text-gray-600 dark:text-gray-400 bg-blue-50 dark:bg-blue-900/20 p-3 rounded">
          <strong>💡 Note:</strong> Ceci est un exemple de répartition. Vous pouvez ajuster les quantités et substituer les aliments selon vos préférences tout en respectant vos macros.
        </div>
      </div>
    </div>
  );
}

// Protein Program Component
function ProteinProgram({ protein }: { protein: number }) {
  const targetProtein = protein;
  const chickenBreast = Math.round(targetProtein * 0.35 / 0.31);
  const chickenProtein = Math.round(chickenBreast * 0.31);
  
  const tuna = 85;
  const tunaProtein = Math.round(tuna * 0.26);
  
  const wheyScoop = 30;
  const wheyProtein = 25;
  
  const eggs = Math.max(1, Math.round((targetProtein - chickenProtein - tunaProtein - wheyProtein) / 6.5));
  const eggsProtein = Math.round(eggs * 6.5);
  
  const totalProtein = chickenProtein + tunaProtein + wheyProtein + eggsProtein;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-3">
      <div className="font-semibold mb-2 text-accent-600 dark:text-accent-400">
        🍗 Protéines - Objectif: {Math.round(targetProtein)}g
      </div>
      <div className="space-y-1 text-xs">
        <div className="flex justify-between items-center py-1 border-b border-green-100 dark:border-green-800">
          <span>• {chickenBreast}g de blanc de poulet</span>
          <span className="font-semibold text-accent-600 dark:text-accent-400">{chickenProtein}g</span>
        </div>
        <div className="flex justify-between items-center py-1 border-b border-green-100 dark:border-green-800">
          <span>• 1 boîte de thon ({tuna}g)</span>
          <span className="font-semibold text-accent-600 dark:text-accent-400">{tunaProtein}g</span>
        </div>
        <div className="flex justify-between items-center py-1 border-b border-green-100 dark:border-green-800">
          <span>• 1 scoop de whey protein ({wheyScoop}g)</span>
          <span className="font-semibold text-accent-600 dark:text-accent-400">{wheyProtein}g</span>
        </div>
        <div className="flex justify-between items-center py-1 border-b border-green-100 dark:border-green-800">
          <span>• {eggs} œufs entiers</span>
          <span className="font-semibold text-accent-600 dark:text-accent-400">{eggsProtein}g</span>
        </div>
        <div className="flex justify-between items-center py-1 pt-2 font-bold">
          <span>Total</span>
          <span className="text-accent-600 dark:text-accent-400">{totalProtein}g / {Math.round(targetProtein)}g</span>
        </div>
      </div>
    </div>
  );
}

// Carbs Program Component
function CarbsProgram({ carbs }: { carbs: number }) {
  const targetCarbs = carbs;
  const brownRice = Math.round(targetCarbs * 1.5);
  const riceCarbs = Math.round(brownRice * 0.23);
  
  const oats = Math.round(targetCarbs * 0.4);
  const oatsCarbs = Math.round(oats * 0.66);
  
  const sweetPotato = Math.round(targetCarbs * 1.8);
  const potatoCarbs = Math.round(sweetPotato * 0.20);
  
  const bananas = Math.max(1, Math.ceil((targetCarbs - riceCarbs - oatsCarbs - potatoCarbs) / 23));
  const bananaCarbs = bananas * 23;
  
  const totalCarbs = riceCarbs + oatsCarbs + potatoCarbs + bananaCarbs;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-3">
      <div className="font-semibold mb-2 text-green-600 dark:text-green-400">
        🌾 Glucides - Objectif: {Math.round(targetCarbs)}g
      </div>
      <div className="space-y-1 text-xs">
        <div className="flex justify-between items-center py-1 border-b border-green-100 dark:border-green-800">
          <span>• {brownRice}g de riz complet (cuit)</span>
          <span className="font-semibold text-green-600 dark:text-green-400">{riceCarbs}g</span>
        </div>
        <div className="flex justify-between items-center py-1 border-b border-green-100 dark:border-green-800">
          <span>• {oats}g d&apos;avoine (sec)</span>
          <span className="font-semibold text-green-600 dark:text-green-400">{oatsCarbs}g</span>
        </div>
        <div className="flex justify-between items-center py-1 border-b border-green-100 dark:border-green-800">
          <span>• {sweetPotato}g de patate douce</span>
          <span className="font-semibold text-green-600 dark:text-green-400">{potatoCarbs}g</span>
        </div>
        <div className="flex justify-between items-center py-1 border-b border-green-100 dark:border-green-800">
          <span>• {bananas} banane{bananas > 1 ? 's' : ''}</span>
          <span className="font-semibold text-green-600 dark:text-green-400">{bananaCarbs}g</span>
        </div>
        <div className="flex justify-between items-center py-1 pt-2 font-bold">
          <span>Total</span>
          <span className="text-green-600 dark:text-green-400">{totalCarbs}g / {Math.round(targetCarbs)}g</span>
        </div>
      </div>
    </div>
  );
}

// Fats Program Component
function FatsProgram({ fats }: { fats: number }) {
  const targetFats = fats;
  const oliveOil = Math.max(10, Math.round((targetFats * 0.35) / 10) * 10);
  const oilFats = oliveOil;
  
  const almonds = Math.round(targetFats * 0.8);
  const almondsFats = Math.round(almonds * 0.50);
  
  const avocado = 1;
  const avocadoFats = 15;
  
  const salmon = Math.max(50, Math.round((targetFats - oilFats - almondsFats - avocadoFats) / 0.13));
  const salmonFats = Math.round(salmon * 0.13);
  
  const totalFats = oilFats + almondsFats + avocadoFats + salmonFats;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-3">
      <div className="font-semibold mb-2 text-yellow-600 dark:text-yellow-400">
        🥑 Lipides - Objectif: {Math.round(targetFats)}g
      </div>
      <div className="space-y-1 text-xs">
        <div className="flex justify-between items-center py-1 border-b border-green-100 dark:border-green-800">
          <span>• {oliveOil}g d&apos;huile d&apos;olive ({oliveOil / 10} cuillères)</span>
          <span className="font-semibold text-yellow-600 dark:text-yellow-400">{oilFats}g</span>
        </div>
        <div className="flex justify-between items-center py-1 border-b border-green-100 dark:border-green-800">
          <span>• {almonds}g d&apos;amandes</span>
          <span className="font-semibold text-yellow-600 dark:text-yellow-400">{almondsFats}g</span>
        </div>
        <div className="flex justify-between items-center py-1 border-b border-green-100 dark:border-green-800">
          <span>• {avocado} avocat moyen</span>
          <span className="font-semibold text-yellow-600 dark:text-yellow-400">{avocadoFats}g</span>
        </div>
        <div className="flex justify-between items-center py-1 border-b border-green-100 dark:border-green-800">
          <span>• {salmon}g de saumon</span>
          <span className="font-semibold text-yellow-600 dark:text-yellow-400">{salmonFats}g</span>
        </div>
        <div className="flex justify-between items-center py-1 pt-2 font-bold">
          <span>Total</span>
          <span className="text-yellow-600 dark:text-yellow-400">{totalFats}g / {Math.round(targetFats)}g</span>
        </div>
      </div>
    </div>
  );
}


