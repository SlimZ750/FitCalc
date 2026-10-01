'use client';

interface MealPlanInfographicProps {
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
  goalLabel: string;
}

interface InfographicMeal {
  name: string;
  subtitle: string;
  ratio: number;
  accent: string;
  image: string;
  foods: string[];
}

const meals: InfographicMeal[] = [
  {
    name: 'Matin',
    subtitle: 'À jeun',
    ratio: 0.08,
    accent: '#84cc16',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=360&auto=format&fit=crop&q=85',
    foods: ['300 ml eau + citron', '15 g amandes', '2 noix'],
  },
  {
    name: 'Petit-déjeuner',
    subtitle: 'Repas complet',
    ratio: 0.18,
    accent: '#f59e0b',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=480&auto=format&fit=crop&q=85',
    foods: ['60 g avoine', '3 œufs', '1 banane', '15 g amandes'],
  },
  {
    name: 'Collation du matin',
    subtitle: 'Énergie légère',
    ratio: 0.10,
    accent: '#ef4444',
    image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=360&auto=format&fit=crop&q=85',
    foods: ['1 pomme', '150 g yaourt', '15 g amandes'],
  },
  {
    name: 'Déjeuner',
    subtitle: 'Repas principal',
    ratio: 0.24,
    accent: '#22c55e',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=480&auto=format&fit=crop&q=85',
    foods: ['150 g poulet grillé', '180 g riz complet cuit', '150 g salade', '10 g huile d’olive'],
  },
  {
    name: 'Pré-entraînement',
    subtitle: '30–45 min avant',
    ratio: 0.11,
    accent: '#f97316',
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=480&auto=format&fit=crop&q=85',
    foods: ['1 banane', '150 g yaourt', '30 g avoine'],
  },
  {
    name: 'Post-entraînement',
    subtitle: 'Récupération musculaire',
    ratio: 0.12,
    accent: '#3b82f6',
    image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=480&auto=format&fit=crop&q=85',
    foods: ['30 g whey protéine', '1 banane', '250 ml lait'],
  },
  {
    name: 'Dîner',
    subtitle: 'Léger et rassasiant',
    ratio: 0.17,
    accent: '#8b5cf6',
    image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=480&auto=format&fit=crop&q=85',
    foods: ['150 g saumon', '200 g patate douce', '150 g brocoli', '50 g avocat'],
  },
];

export function MealPlanInfographic({
  calories,
  protein,
  carbs,
  fats,
  goalLabel,
}: MealPlanInfographicProps) {
  const mealCalories = meals.map((meal, index) =>
    index === meals.length - 1
      ? Math.max(0, Math.round(calories) - meals.slice(0, -1).reduce((sum, item) => sum + Math.round(calories * item.ratio), 0))
      : Math.round(calories * meal.ratio)
  );

  return (
    <div
      id="meal-plan-export"
      style={{
        width: 794,
        height: 1123,
        boxSizing: 'border-box',
        padding: 24,
        background: '#050505',
        color: '#f8fafc',
        fontFamily: 'Arial, sans-serif',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: 14 }}>
        <div style={{ color: '#fbbf24', fontSize: 12, fontWeight: 700, letterSpacing: 3 }}>
          FITCALC
        </div>
        <h1 style={{ margin: '5px 0 3px', fontSize: 30, lineHeight: 1.1, textTransform: 'uppercase' }}>
          Programme alimentaire
        </h1>
        <div style={{ color: '#cbd5e1', fontSize: 13 }}>{goalLabel} • {Math.round(calories)} kcal / jour</div>
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        {[
          ['CALORIES', `${Math.round(calories)} kcal`, '#fbbf24'],
          ['PROTÉINES', `${Math.round(protein)} g`, '#fb7185'],
          ['GLUCIDES', `${Math.round(carbs)} g`, '#4ade80'],
          ['LIPIDES', `${Math.round(fats)} g`, '#60a5fa'],
        ].map(([label, value, color]) => (
          <div key={label} style={{ flex: 1, background: '#1e293b', borderRadius: 8, padding: '8px 6px', textAlign: 'center' }}>
            <div style={{ color, fontSize: 11, fontWeight: 700 }}>{label}</div>
            <div style={{ fontSize: 15, fontWeight: 700, marginTop: 3 }}>{value}</div>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 5, flex: 1 }}>
        {meals.map((meal, index) => {
          const mealKcal = mealCalories[index];
          const mealProtein = Math.round(protein * (mealKcal / calories));
          const mealCarbs = Math.round(carbs * (mealKcal / calories));
          const mealFats = Math.round(fats * (mealKcal / calories));

          return (
            <div key={meal.name} style={{ background: '#0b1220', overflow: 'hidden', borderBottom: '1px solid #334155', display: 'flex', flex: 1, minHeight: 0, position: 'relative' }}>
              <div style={{ position: 'absolute', left: 0, top: 0, right: 0, height: 24, background: meal.accent, color: '#0b1220', padding: '4px 12px', fontSize: 12, fontWeight: 800, textTransform: 'uppercase' }}>
                {meal.name} <span style={{ fontWeight: 600 }}>({meal.subtitle})</span>
              </div>
              <div style={{ padding: '31px 10px 6px 12px', flex: 1, minWidth: 0 }}>
                <div style={{ color: '#f8fafc', fontSize: 11, lineHeight: 1.45 }}>
                  {meal.foods.map((food) => <div key={food}>• {food}</div>)}
                </div>
                <div style={{ color: '#cbd5e1', fontSize: 10, marginTop: 3 }}>
                  <b style={{ color: '#fb7185' }}>{mealProtein}g</b> prot. &nbsp;
                  <b style={{ color: '#4ade80' }}>{mealCarbs}g</b> gluc. &nbsp;
                  <b style={{ color: '#60a5fa' }}>{mealFats}g</b> lip.
                </div>
              </div>
              <div style={{ width: 150, padding: '30px 10px 7px 0', display: 'flex', gap: 6, alignItems: 'center' }}>
                <img src={meal.image} alt="" crossOrigin="anonymous" style={{ width: 92, height: 68, objectFit: 'cover', borderRadius: 7 }} />
                <div style={{ color: '#fbbf24', fontSize: 13, fontWeight: 800, lineHeight: 1.15, textAlign: 'center', whiteSpace: 'normal' }}>
                  <span style={{ display: 'block', fontSize: 17 }}>{mealKcal}</span>
                  <span style={{ display: 'block', fontSize: 10 }}>kcal</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ textAlign: 'center', color: '#94a3b8', fontSize: 10, marginTop: 8 }}>
        Buvez suffisamment d’eau • Dormez 7–9 heures • Restez constant
      </div>
    </div>
  );
}
