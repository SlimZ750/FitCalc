/**
 * Calorie and Nutrition Data
 * Based on common foods, exercises, and nutrition facts
 */

export interface FoodCalorie {
  name: string;
  name_ar: string;
  serving: string;
  calories: number;
  kj: number;
}

export interface ExerciseCalorie {
  activity: string;
  activity_ar: string;
  cal_125lb: number; // calories per hour for 125 lb person
  cal_155lb: number; // calories per hour for 155 lb person
  cal_185lb: number; // calories per hour for 185 lb person
}

export interface MacronutrientInfo {
  name: string;
  name_ar: string;
  calories_per_gram: number;
  kj_per_gram: number;
  calories_per_oz: number;
  kj_per_oz: number;
}

// Common food calories organized by category
export const foodCalories: Record<string, FoodCalorie[]> = {
  fruits: [
    { name: 'Apple', name_ar: 'تفاحة', serving: '1 medium (4 oz)', calories: 59, kj: 247 },
    { name: 'Banana', name_ar: 'موز', serving: '1 medium (6 oz)', calories: 151, kj: 632 },
    { name: 'Grapes', name_ar: 'عنب', serving: '1 cup', calories: 100, kj: 419 },
    { name: 'Orange', name_ar: 'برتقال', serving: '1 medium (4 oz)', calories: 53, kj: 222 },
    { name: 'Pear', name_ar: 'كمثرى', serving: '1 medium (5 oz)', calories: 82, kj: 343 },
    { name: 'Peach', name_ar: 'خوخ', serving: '1 medium (6 oz)', calories: 67, kj: 281 },
    { name: 'Pineapple', name_ar: 'أناناس', serving: '1 cup', calories: 82, kj: 343 },
    { name: 'Strawberry', name_ar: 'فراولة', serving: '1 cup', calories: 53, kj: 222 },
    { name: 'Watermelon', name_ar: 'بطيخ', serving: '1 cup', calories: 50, kj: 209 },
  ],
  vegetables: [
    { name: 'Asparagus', name_ar: 'هليون', serving: '1 cup', calories: 27, kj: 113 },
    { name: 'Broccoli', name_ar: 'بروكلي', serving: '1 cup', calories: 45, kj: 188 },
    { name: 'Carrots', name_ar: 'جزر', serving: '1 cup', calories: 50, kj: 209 },
    { name: 'Cucumber', name_ar: 'خيار', serving: '4 oz', calories: 17, kj: 71 },
    { name: 'Eggplant', name_ar: 'باذنجان', serving: '1 cup', calories: 35, kj: 147 },
    { name: 'Lettuce', name_ar: 'خس', serving: '1 cup', calories: 5, kj: 21 },
    { name: 'Tomato', name_ar: 'طماطم', serving: '1 cup', calories: 22, kj: 92 },
    { name: 'Spinach', name_ar: 'سبانخ', serving: '1 cup', calories: 7, kj: 29 },
  ],
  proteins: [
    { name: 'Beef (cooked)', name_ar: 'لحم بقر', serving: '2 oz', calories: 142, kj: 595 },
    { name: 'Chicken (cooked)', name_ar: 'دجاج', serving: '2 oz', calories: 136, kj: 569 },
    { name: 'Tofu', name_ar: 'توفو', serving: '4 oz', calories: 86, kj: 360 },
    { name: 'Egg', name_ar: 'بيض', serving: '1 large', calories: 78, kj: 327 },
    { name: 'Fish (Salmon)', name_ar: 'سمك سلمون', serving: '2 oz', calories: 136, kj: 569 },
    { name: 'Pork (cooked)', name_ar: 'لحم خنزير', serving: '2 oz', calories: 137, kj: 574 },
    { name: 'Shrimp (cooked)', name_ar: 'جمبري', serving: '2 oz', calories: 56, kj: 234 },
    { name: 'Tuna (canned)', name_ar: 'تونة معلبة', serving: '2 oz', calories: 66, kj: 276 },
  ],
  grains: [
    { name: 'White Rice (cooked)', name_ar: 'أرز أبيض', serving: '1 cup', calories: 206, kj: 862 },
    { name: 'Brown Rice (cooked)', name_ar: 'أرز بني', serving: '1 cup', calories: 218, kj: 912 },
    { name: 'Pasta (cooked)', name_ar: 'معكرونة', serving: '1 cup', calories: 220, kj: 920 },
    { name: 'Oatmeal (cooked)', name_ar: 'شوفان', serving: '1 cup', calories: 166, kj: 695 },
    { name: 'White Bread', name_ar: 'خبز أبيض', serving: '1 slice (1 oz)', calories: 75, kj: 314 },
    { name: 'Whole Wheat Bread', name_ar: 'خبز قمح كامل', serving: '1 slice', calories: 80, kj: 335 },
    { name: 'Quinoa (cooked)', name_ar: 'كينوا', serving: '1 cup', calories: 222, kj: 929 },
  ],
  snacks: [
    { name: 'Almonds', name_ar: 'لوز', serving: '1 oz (23 nuts)', calories: 164, kj: 686 },
    { name: 'Peanuts', name_ar: 'فول سوداني', serving: '1 oz', calories: 161, kj: 674 },
    { name: 'Walnuts', name_ar: 'جوز', serving: '1 oz (14 halves)', calories: 185, kj: 774 },
    { name: 'Potato Chips', name_ar: 'رقائق بطاطس', serving: '1 oz', calories: 152, kj: 636 },
    { name: 'Dark Chocolate', name_ar: 'شوكولاتة داكنة', serving: '1 oz', calories: 155, kj: 649 },
    { name: 'Yogurt (low-fat)', name_ar: 'زبادي قليل الدسم', serving: '1 cup', calories: 154, kj: 645 },
    { name: 'Cheese (cheddar)', name_ar: 'جبنة شيدر', serving: '1 oz', calories: 114, kj: 477 },
  ],
  beverages: [
    { name: 'Milk (1%)', name_ar: 'حليب 1%', serving: '1 cup', calories: 102, kj: 427 },
    { name: 'Milk (2%)', name_ar: 'حليب 2%', serving: '1 cup', calories: 122, kj: 511 },
    { name: 'Milk (Whole)', name_ar: 'حليب كامل الدسم', serving: '1 cup', calories: 146, kj: 611 },
    { name: 'Orange Juice', name_ar: 'عصير برتقال', serving: '1 cup', calories: 111, kj: 465 },
    { name: 'Apple Cider', name_ar: 'عصير تفاح', serving: '1 cup', calories: 117, kj: 490 },
    { name: 'Coca-Cola', name_ar: 'كوكاكولا', serving: '1 can (12 oz)', calories: 150, kj: 628 },
    { name: 'Diet Coke', name_ar: 'دايت كوك', serving: '1 can', calories: 0, kj: 0 },
    { name: 'Beer', name_ar: 'بيرة', serving: '1 can (12 oz)', calories: 154, kj: 645 },
  ],
};

// Common exercises and calories burned
export const exerciseCalories: ExerciseCalorie[] = [
  { activity: 'Walking (3.5 mph)', activity_ar: 'المشي (5.6 كم/س)', cal_125lb: 215, cal_155lb: 267, cal_185lb: 319 },
  { activity: 'Running (9 min mile)', activity_ar: 'الجري (9 دقائق/ميل)', cal_125lb: 624, cal_155lb: 773, cal_185lb: 923 },
  { activity: 'Cycling (12-14 mph)', activity_ar: 'ركوب الدراجات (19-22 كم/س)', cal_125lb: 454, cal_155lb: 562, cal_185lb: 671 },
  { activity: 'Swimming (moderate)', activity_ar: 'السباحة (معتدل)', cal_125lb: 397, cal_155lb: 492, cal_185lb: 587 },
  { activity: 'Weight Training', activity_ar: 'تدريب الأثقال', cal_125lb: 180, cal_155lb: 223, cal_185lb: 266 },
  { activity: 'Basketball', activity_ar: 'كرة السلة', cal_125lb: 340, cal_155lb: 422, cal_185lb: 503 },
  { activity: 'Soccer', activity_ar: 'كرة القدم', cal_125lb: 397, cal_155lb: 492, cal_185lb: 587 },
  { activity: 'Tennis', activity_ar: 'التنس', cal_125lb: 397, cal_155lb: 492, cal_185lb: 587 },
  { activity: 'Yoga', activity_ar: 'اليوغا', cal_125lb: 120, cal_155lb: 149, cal_185lb: 178 },
  { activity: 'Jumping Rope', activity_ar: 'نط الحبل', cal_125lb: 600, cal_155lb: 744, cal_185lb: 888 },
  { activity: 'HIIT Training', activity_ar: 'تدريب HIIT', cal_125lb: 480, cal_155lb: 595, cal_185lb: 710 },
  { activity: 'Golf (with cart)', activity_ar: 'الغولف (مع عربة)', cal_125lb: 198, cal_155lb: 246, cal_185lb: 294 },
];

// Macronutrient energy values
export const macronutrientEnergy: MacronutrientInfo[] = [
  { 
    name: 'Fat', 
    name_ar: 'دهون',
    calories_per_gram: 9, 
    kj_per_gram: 37,
    calories_per_oz: 249,
    kj_per_oz: 1049
  },
  { 
    name: 'Protein', 
    name_ar: 'بروتين',
    calories_per_gram: 4, 
    kj_per_gram: 17,
    calories_per_oz: 116,
    kj_per_oz: 482
  },
  { 
    name: 'Carbohydrates', 
    name_ar: 'كربوهيدرات',
    calories_per_gram: 4, 
    kj_per_gram: 17,
    calories_per_oz: 116,
    kj_per_oz: 482
  },
  { 
    name: 'Alcohol', 
    name_ar: 'كحول',
    calories_per_gram: 7, 
    kj_per_gram: 29,
    calories_per_oz: 196,
    kj_per_oz: 822
  },
  { 
    name: 'Fiber', 
    name_ar: 'ألياف',
    calories_per_gram: 2, 
    kj_per_gram: 8,
    calories_per_oz: 54,
    kj_per_oz: 227
  },
];

// Sample meal plans for different calorie targets
export interface MealPlan {
  targetCalories: number;
  meals: {
    name: string;
    name_ar: string;
    calories: number;
  }[];
  totalCalories: number;
}

export const sampleMealPlans: MealPlan[] = [
  {
    targetCalories: 1200,
    meals: [
      { name: 'Breakfast: All-bran (125) + Milk (50) + Banana (90)', name_ar: 'الإفطار: حبوب النخالة + حليب + موز', calories: 265 },
      { name: 'Snack: Cucumber (30) + Avocado dip (50)', name_ar: 'وجبة خفيفة: خيار + صلصة أفوكادو', calories: 80 },
      { name: 'Lunch: Grilled cheese with tomato (300) + Salad (50)', name_ar: 'الغداء: جبن مشوي مع طماطم + سلطة', calories: 350 },
      { name: 'Snack: Walnuts (100)', name_ar: 'وجبة خفيفة: جوز', calories: 100 },
      { name: 'Dinner: Grilled Chicken (200) + Brussels sprouts (100) + Quinoa (105)', name_ar: 'العشاء: دجاج مشوي + كرنب + كينوا', calories: 405 },
    ],
    totalCalories: 1200,
  },
  {
    targetCalories: 1500,
    meals: [
      { name: 'Breakfast: Granola (120) + Greek yogurt (120) + Blueberries (40)', name_ar: 'الإفطار: جرانولا + زبادي يوناني + توت', calories: 280 },
      { name: 'Snack: Orange (70)', name_ar: 'وجبة خفيفة: برتقال', calories: 70 },
      { name: 'Lunch: Chicken soup (300) + Bread (100)', name_ar: 'الغداء: شوربة دجاج + خبز', calories: 400 },
      { name: 'Snack: Apple (75) + Peanut butter (75)', name_ar: 'وجبة خفيفة: تفاح + زبدة الفول السوداني', calories: 150 },
      { name: 'Dinner: Steak (375) + Mashed potatoes (150) + Asparagus (75)', name_ar: 'العشاء: لحم + بطاطس مهروسة + هليون', calories: 600 },
    ],
    totalCalories: 1500,
  },
  {
    targetCalories: 2000,
    meals: [
      { name: 'Breakfast: Toast (150) + Egg (80) + Banana (90) + Almonds (170)', name_ar: 'الإفطار: خبز محمص + بيض + موز + لوز', calories: 490 },
      { name: 'Snack: Greek yogurt (120) + Blueberries (40)', name_ar: 'وجبة خفيفة: زبادي يوناني + توت', calories: 160 },
      { name: 'Lunch: Grilled chicken (225) + Grilled veg (125) + Pasta (185)', name_ar: 'الغداء: دجاج مشوي + خضار مشوية + معكرونة', calories: 535 },
      { name: 'Snack: Hummus (50) + Baby carrots (35) + Crackers (65)', name_ar: 'وجبة خفيفة: حمص + جزر صغير + مقرمشات', calories: 150 },
      { name: 'Dinner: Salmon (225) + Brown rice (175) + Green beans (100) + Walnuts (165)', name_ar: 'العشاء: سلمون + أرز بني + فاصوليا + جوز', calories: 665 },
    ],
    totalCalories: 2000,
  },
];

// Nutrition facts and tips
export const nutritionFacts = {
  calorieDeficit: {
    fact: '1 pound (0.45 kg) equals approximately 3,500 calories',
    fact_ar: 'رطل واحد (0.45 كجم) يساوي تقريباً 3500 سعرة حرارية',
    tip: 'To lose 1 pound per week, create a 500 calorie deficit per day',
    tip_ar: 'لفقدان رطل واحد أسبوعياً، أنشئ عجزاً قدره 500 سعرة حرارية يومياً',
  },
  proteinImportance: {
    fact: 'Protein has the highest thermic effect (20-30% of calories burned during digestion)',
    fact_ar: 'البروتين له أعلى تأثير حراري (20-30% من السعرات تُحرق أثناء الهضم)',
    tip: 'Aim for 0.8-1g protein per pound of body weight for muscle building',
    tip_ar: 'استهدف 0.8-1 جرام بروتين لكل رطل من وزن الجسم لبناء العضلات',
  },
  hydration: {
    fact: 'Drinking water can temporarily boost metabolism by 24-30%',
    fact_ar: 'شرب الماء يمكن أن يعزز التمثيل الغذائي مؤقتاً بنسبة 24-30%',
    tip: 'Drink at least 8 glasses (2 liters) of water per day',
    tip_ar: 'اشرب ما لا يقل عن 8 أكواب (2 لتر) من الماء يومياً',
  },
  mealTiming: {
    fact: 'Meal timing is less important than total daily calories and macros',
    fact_ar: 'توقيت الوجبات أقل أهمية من إجمالي السعرات والماكروز اليومية',
    tip: 'Eat when it fits your schedule and keeps you satiated',
    tip_ar: 'تناول الطعام عندما يناسب جدولك ويبقيك شبعاناً',
  },
  sleep: {
    fact: 'Poor sleep can decrease metabolism and increase hunger hormones',
    fact_ar: 'قلة النوم يمكن أن تقلل التمثيل الغذائي وتزيد هرمونات الجوع',
    tip: 'Aim for 7-9 hours of quality sleep per night',
    tip_ar: 'استهدف 7-9 ساعات من النوم الجيد كل ليلة',
  },
};
