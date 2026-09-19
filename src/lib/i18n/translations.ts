/**
 * Translation dictionaries for French and Arabic
 */

export const translations = {
  fr: {
    // Common
    common: {
      loading: 'Chargement...',
      error: 'Une erreur est survenue',
      save: 'Enregistrer',
      cancel: 'Annuler',
      delete: 'Supprimer',
      edit: 'Modifier',
      back: 'Retour',
      next: 'Suivant',
      previous: 'Précédent',
      submit: 'Soumettre',
      close: 'Fermer',
      search: 'Rechercher',
      filter: 'Filtrer',
      sort: 'Trier',
      view: 'Voir',
      download: 'Télécharger',
      share: 'Partager',
    },

    // Navigation
    nav: {
      home: 'Accueil',
      calculator: 'Calculateur',
      programs: 'Programmes',
      nutrition: 'Nutrition',
      supplements: 'Suppléments',
      deals: 'Promos',
      dashboard: 'Tableau de bord',
      admin: 'Admin',
      login: 'Connexion',
      logout: 'Déconnexion',
      signup: 'Inscription',
    },

    // Homepage
    home: {
      heroTitle: 'Calculez vos calories. Comprenez vos macros. Construisez votre plan.',
      heroSubtitle: 'FitCalc vous aide à calculer vos besoins en calories et macronutriments, et vous propose un plan de départ simple basé sur votre objectif, votre expérience et votre mode de vie.',
      ctaPrimary: 'Calculer Mes Calories',
      ctaSecondary: 'Comment Ça Marche',
      tagline: 'Comprenez votre nutrition. Construisez votre corps.',
      transformTitle: 'Transformez Votre Corps',
      transformSubtitle: 'Rejoignez des milliers d\'athlètes qui ont transformé leur physique grâce à une nutrition adaptée',
      statsUsers: 'Utilisateurs actifs',
      statsCalculations: 'Calculs effectués',
      statsPrograms: 'Programmes disponibles',
      statsSatisfaction: 'Taux de satisfaction',
    },

    // Educational Content
    education: {
      title: 'Les Bases de la Nutrition',
      caloriesTitle: 'Qu\'est-ce que les calories ?',
      caloriesDesc: 'Les calories sont une unité de mesure de l\'énergie. Votre corps utilise des calories pour toutes ses fonctions, de la respiration à l\'entraînement. Pour perdre du poids, vous devez consommer moins de calories que vous n\'en brûlez. Pour prendre du muscle, vous avez besoin d\'un léger surplus.',
      proteinTitle: 'Qu\'est-ce que les protéines ?',
      proteinDesc: 'Les protéines sont essentielles pour construire et réparer les muscles. Elles sont composées d\'acides aminés, les éléments constitutifs du muscle. Une consommation adéquate de protéines est cruciale pour la récupération et la croissance musculaire.',
      carbsTitle: 'Qu\'est-ce que les glucides ?',
      carbsDesc: 'Les glucides sont la principale source d\'énergie de votre corps pour l\'entraînement. Ils alimentent vos séances et aident à la récupération. Les glucides complexes comme le riz, les patates et les flocons d\'avoine fournissent une énergie stable.',
      fatsTitle: 'Qu\'est-ce que les lipides ?',
      fatsDesc: 'Les lipides sont essentiels pour la production d\'hormones, la santé cérébrale et l\'absorption des vitamines. Ne les évitez pas ! Concentrez-vous sur les bonnes sources comme l\'huile d\'olive, les noix, les avocats et le poisson gras.',
      macrosTitle: 'Qu\'est-ce que les macros ?',
      macrosDesc: 'Les "macros" sont les trois macronutriments principaux : protéines, glucides et lipides. Ensemble, ils constituent vos calories totales. Suivre vos macros vous donne plus de contrôle que de simplement compter les calories.',
    },

    // Calculator
    calculator: {
      title: 'Calculateur de Calories et Macros',
      
      // Steps
      steps: {
        personal: 'Infos',
        activity: 'Activité',
        goal: 'Objectif',
        results: 'Résultats',
      },
      
      // Personal Info Step
      personal: {
        title: 'Informations Personnelles',
        subtitle: 'Commençons par les bases',
        unit: 'Système d\'unités',
        gender: 'Sexe',
        male: 'Homme',
        female: 'Femme',
        age: 'Âge (années)',
        weight: 'Poids',
        height: 'Taille',
      },
      
      // Activity Step
      activity: {
        title: 'Niveau d\'Activité',
        subtitle: 'Quelle est votre activité physique quotidienne ?',
        multiplier: 'Multiplicateur',
        levels: {
          sedentary: {
            title: 'Sédentaire',
            description: 'Peu ou pas d\'exercice, travail de bureau',
          },
          lightly_active: {
            title: 'Légèrement Actif',
            description: 'Exercice léger 1-3 jours/semaine',
          },
          moderately_active: {
            title: 'Modérément Actif',
            description: 'Exercice modéré 3-5 jours/semaine',
          },
          very_active: {
            title: 'Très Actif',
            description: 'Exercice intense 6-7 jours/semaine',
          },
          extremely_active: {
            title: 'Extrêmement Actif',
            description: 'Exercice très intense + travail physique',
          },
        },
      },
      
      // Goal Step
      goal: {
        title: 'Votre Objectif',
        subtitle: 'Que voulez-vous accomplir ?',
        calories: 'cal',
        tip: 'Conseil',
        tipDescription: 'Commencez avec des changements modérés. Vous pourrez ajuster après 2-3 semaines.',
        calculate: 'Calculer',
        options: {
          lose_fat: {
            title: 'Perte de Gras',
            description: 'Déficit calorique pour perdre du poids progressivement',
          },
          maintain: {
            title: 'Maintien',
            description: 'Maintenir votre poids actuel',
          },
          build_muscle: {
            title: 'Prise de Masse',
            description: 'Surplus calorique pour maximiser la croissance musculaire',
          },
          cutting: {
            title: 'Perte de Gras',
            description: 'Déficit calorique pour perdre du poids progressivement',
          },
          maintenance: {
            title: 'Maintien',
            description: 'Maintenir votre poids actuel',
          },
          bulking: {
            title: 'Prise de Masse',
            description: 'Surplus calorique pour maximiser la croissance musculaire',
          },
        },
      },
      
      // Results Step
      results: {
        title: '🎉 Vos Résultats',
        subtitle: 'Basés sur vos informations',
        error: 'Erreur lors du calcul des résultats',
        goalCalories: {
          lose_fat: 'Calories pour Perte de Gras',
          maintain: 'Calories de Maintien',
          build_muscle: 'Calories pour Prise de Masse',
          cutting: 'Calories pour Perte de Gras',
          maintenance: 'Calories de Maintien',
          bulking: 'Calories pour Prise de Masse',
        },
        caloriesPerDay: 'calories par jour',
        macrosBreakdown: 'Répartition des Macronutriments',
        protein: 'Protéines',
        carbs: 'Glucides',
        fats: 'Lipides',
        bmr: 'BMR (Métabolisme de Base)',
        bmrDescription: 'Calories brûlées au repos',
        tdee: 'TDEE (Dépense Totale)',
        tdeeDescription: 'Calories brûlées par jour',
        recommendations: 'Recommandations',
        rec1: 'Pesez vos aliments pour plus de précision',
        rec2: 'Consommez des protéines à chaque repas',
        rec3: 'Ajustez après 2-3 semaines si nécessaire',
        download: 'Télécharger',
        share: 'Partager',
        newCalculation: 'Nouveau Calcul',
      },
      
      // Validation
      validation: {
        ageInvalid: 'L\'âge doit être entre 15 et 100 ans',
        weightInvalid: 'Le poids doit être entre 30 et 300 kg',
        heightInvalid: 'La taille doit être entre 120 et 250 cm',
        genderRequired: 'Veuillez sélectionner votre sexe',
      },
      
      // Old translations for backwards compatibility
      step1Title: 'Informations de base',
      step2Title: 'Niveau d\'activité',
      step3Title: 'Votre objectif',
      step4Title: 'Entraînement',
      step5Title: 'Résultats',
      sex: 'Sexe',
      male: 'Homme',
      female: 'Femme',
      age: 'Âge',
      height: 'Taille',
      weight: 'Poids',
      unitSystem: 'Système d\'unités',
      metric: 'Métrique (kg, cm)',
      imperial: 'Impérial (lb, ft/in)',
      
      // Step 2
      activityLevel: 'Niveau d\'activité',
      sedentary: 'Sédentaire',
      sedentaryDesc: 'Peu ou pas d\'exercice',
      lightlyActive: 'Légèrement actif',
      lightlyActiveDesc: 'Exercice léger 1-3 jours/semaine',
      moderatelyActive: 'Modérément actif',
      moderatelyActiveDesc: 'Exercice modéré 3-5 jours/semaine',
      veryActive: 'Très actif',
      veryActiveDesc: 'Exercice intense 6-7 jours/semaine',
      extremelyActive: 'Extrêmement actif',
      extremelyActiveDesc: 'Exercice très intense ou travail physique',
      
      // Step 3 - Goals (using nested goal object above)
      loseFat: 'Perdre du gras',
      loseFatDesc: 'Créer un déficit calorique pour perdre du poids',
      maintain: 'Maintenir',
      maintainDesc: 'Maintenir votre poids actuel',
      buildMuscle: 'Prendre du muscle',
      buildMuscleDesc: 'Surplus calorique pour maximiser la croissance musculaire',
      leanBulk: 'Prise de masse sèche',
      leanBulkDesc: 'Petit surplus pour minimiser le gain de gras',
      
      // Step 4
      experience: 'Expérience d\'entraînement',
      beginner: 'Débutant',
      intermediate: 'Intermédiaire',
      advanced: 'Avancé',
      trainingDays: 'Jours d\'entraînement par semaine',
      equipment: 'Où vous entraînez-vous ?',
      gym: 'Salle de sport',
      home: 'À la maison',
      homeBasic: 'À la maison (équipement basique)',
    },

    // Results
    results: {
      title: 'Vos Résultats',
      subtitle: 'Voici vos besoins nutritionnels estimés',
      dailyCalories: 'Calories Quotidiennes',
      protein: 'Protéines',
      carbs: 'Glucides',
      fat: 'Lipides',
      perDay: 'par jour',
      bmr: 'Métabolisme de base (BMR)',
      tdee: 'Dépense énergétique totale (TDEE)',
      targetCalories: 'Calories cibles',
      weeklyChange: 'Changement hebdomadaire attendu',
      
      disclaimer: 'Important à savoir',
      disclaimerText: 'Ces chiffres sont des estimations de départ basées sur des équations validées scientifiquement. Votre métabolisme réel peut varier. Suivez vos progrès pendant 2-3 semaines et ajustez si nécessaire. Consultez un professionnel de santé si vous avez des conditions médicales.',
      
      howCalculated: 'Comment c\'est calculé ?',
      howCalculatedText: 'Nous utilisons l\'équation de Mifflin-St Jeor pour calculer votre BMR, puis nous l\'ajustons en fonction de votre niveau d\'activité et de votre objectif. Les protéines sont calculées à {protein} g/kg, les lipides représentent environ {fat}% des calories, et les glucides remplissent le reste.',
      
      macroDistribution: 'Répartition des Macros',
      saveResults: 'Enregistrer Mes Résultats',
      viewProgram: 'Voir Mon Programme',
      viewSupplements: 'Suppléments Recommandés',
    },

    // Programs
    programs: {
      title: 'Programmes d\'Entraînement',
      subtitle: 'Programmes personnalisés basés sur votre expérience et vos objectifs',
      filterByGoal: 'Filtrer par objectif',
      filterByExperience: 'Filtrer par expérience',
      filterByDays: 'Jours par semaine',
      daysPerWeek: '{days} jours/semaine',
      duration: '{weeks} semaines',
      viewProgram: 'Voir le Programme',
      exercises: 'Exercices',
      sets: 'Séries',
      reps: 'Répétitions',
      rest: 'Repos',
      day: 'Jour {day}',
    },

    // Supplements
    supplements: {
      title: 'Guide des Suppléments',
      subtitle: 'Découvrez les suppléments qui peuvent soutenir vos objectifs',
      categories: 'Catégories',
      allCategories: 'Toutes les catégories',
      protein: 'Protéines',
      creatine: 'Créatine',
      preWorkout: 'Pré-entraînement',
      vitamins: 'Vitamines',
      minerals: 'Minéraux',
      omega3: 'Oméga-3',
      massGainer: 'Mass Gainer',
      electrolytes: 'Électrolytes',
      other: 'Autre',
      
      onSale: 'En Promo',
      featured: 'À la Une',
      newArrivals: 'Nouveautés',
      
      priceRange: 'Gamme de prix',
      sortBy: 'Trier par',
      sortPrice: 'Prix',
      sortDiscount: 'Réduction',
      sortRating: 'Note',
      sortNewest: 'Plus récent',
      
      viewProduct: 'Voir le Produit',
      addToFavorites: 'Ajouter aux Favoris',
      compare: 'Comparer',
      inStock: 'En stock',
      outOfStock: 'Rupture de stock',
      lowStock: 'Stock limité',
      
      servings: '{count} portions',
      perServing: 'par portion',
      pricePerServing: 'Prix par portion',
    },

    // Recommendations
    recommendations: {
      title: 'Suppléments Recommandés',
      subtitle: 'Basés sur votre objectif : {goal}',
      mayHelp: 'Ces suppléments peuvent soutenir vos objectifs',
      notRequired: 'Important : Aucun supplément n\'est requis pour obtenir des résultats. Une nutrition solide et un entraînement cohérent sont les fondamentaux.',
      
      highPriority: 'Priorité élevée',
      mediumPriority: 'Peut être utile',
      lowPriority: 'Optionnel',
      
      proteinReason: 'Pour atteindre facilement votre cible de protéines',
      creatineReason: 'Améliore la force et la performance',
      vitaminsReason: 'Complète votre alimentation',
    },

    // Deals
    deals: {
      title: 'Promotions',
      subtitle: 'Meilleures offres sur les suppléments',
      save: 'Économisez {percent}%',
      originalPrice: 'Prix d\'origine',
      salePrice: 'Prix promo',
      endsSoon: 'Se termine bientôt',
      limitedTime: 'Offre limitée',
    },

    // Dashboard
    dashboard: {
      title: 'Mon Tableau de Bord',
      welcome: 'Bienvenue, {name}',
      overview: 'Vue d\'ensemble',
      currentWeight: 'Poids actuel',
      targetCalories: 'Calories cibles',
      proteinTarget: 'Cible protéines',
      currentGoal: 'Objectif actuel',
      myProgram: 'Mon Programme',
      progress: 'Progrès',
      weightLog: 'Journal de poids',
      addEntry: 'Ajouter une entrée',
      date: 'Date',
      notes: 'Notes',
      favorites: 'Favoris',
      recentCalculations: 'Calculs récents',
    },

    // Footer
    footer: {
      tagline: 'Comprenez votre nutrition. Construisez votre corps.',
      about: 'À propos',
      contact: 'Contact',
      privacy: 'Confidentialité',
      terms: 'Conditions',
      madeWith: 'Fait avec',
      by: 'par',
    },
  },

  ar: {
    // Common
    common: {
      loading: 'جاري التحميل...',
      error: 'حدث خطأ',
      save: 'حفظ',
      cancel: 'إلغاء',
      delete: 'حذف',
      edit: 'تعديل',
      back: 'رجوع',
      next: 'التالي',
      previous: 'السابق',
      submit: 'إرسال',
      close: 'إغلاق',
      search: 'بحث',
      filter: 'تصفية',
      sort: 'ترتيب',
      view: 'عرض',
      download: 'تحميل',
      share: 'مشاركة',
    },

    // Navigation
    nav: {
      home: 'الرئيسية',
      calculator: 'الحاسبة',
      programs: 'البرامج',
      nutrition: 'التغذية',
      supplements: 'المكملات',
      deals: 'العروض',
      dashboard: 'لوحة التحكم',
      admin: 'الإدارة',
      login: 'تسجيل الدخول',
      logout: 'تسجيل الخروج',
      signup: 'إنشاء حساب',
    },

    // Homepage
    home: {
      heroTitle: 'احسب سعراتك. افهم ماكروهاتك. ابنِ خطتك.',
      heroSubtitle: 'يساعدك FitCalc في حساب احتياجاتك من السعرات والمغذيات الكبرى، ويقدم لك خطة بداية بسيطة بناءً على هدفك وخبرتك ونمط حياتك.',
      ctaPrimary: 'احسب سعراتي',
      ctaSecondary: 'كيف يعمل',
      tagline: 'افهم تغذيتك. ابنِ جسمك.',
      transformTitle: 'حوّل جسمك',
      transformSubtitle: 'انضم إلى آلاف الرياضيين الذين حولوا أجسامهم بفضل التغذية المناسبة',
      statsUsers: 'مستخدم نشط',
      statsCalculations: 'عملية حسابية',
      statsPrograms: 'برنامج متاح',
      statsSatisfaction: 'معدل الرضا',
    },

    // Educational Content
    education: {
      title: 'أساسيات التغذية',
      caloriesTitle: 'ما هي السعرات الحرارية؟',
      caloriesDesc: 'السعرات الحرارية هي وحدة قياس الطاقة. يستخدم جسمك السعرات لجميع وظائفه، من التنفس إلى التدريب. لفقدان الوزن، تحتاج إلى تناول سعرات أقل مما تحرق. لبناء العضلات، تحتاج إلى فائض طفيف.',
      proteinTitle: 'ما هي البروتينات؟',
      proteinDesc: 'البروتينات ضرورية لبناء وإصلاح العضلات. تتكون من الأحماض الأمينية، وهي اللبنات الأساسية للعضلات. تناول كمية كافية من البروتين أمر حاسم للتعافي ونمو العضلات.',
      carbsTitle: 'ما هي الكربوهيدرات؟',
      carbsDesc: 'الكربوهيدرات هي المصدر الرئيسي للطاقة لجسمك أثناء التدريب. تغذي تمارينك وتساعد في التعافي. الكربوهيدرات المعقدة مثل الأرز والبطاطا والشوفان توفر طاقة مستقرة.',
      fatsTitle: 'ما هي الدهون؟',
      fatsDesc: 'الدهون ضرورية لإنتاج الهرمونات وصحة الدماغ وامتصاص الفيتامينات. لا تتجنبها! ركز على المصادر الجيدة مثل زيت الزيتون والمكسرات والأفوكادو والأسماك الدهنية.',
      macrosTitle: 'ما هي الماكروهات؟',
      macrosDesc: '"الماكروهات" هي المغذيات الكبرى الثلاثة الرئيسية: البروتينات والكربوهيدرات والدهون. معًا، تشكل إجمالي سعراتك. تتبع ماكروهاتك يمنحك مزيدًا من التحكم مقارنة بعد السعرات فقط.',
    },

    // Calculator
    calculator: {
      title: 'حاسبة السعرات والماكروهات',
      step1Title: 'المعلومات الأساسية',
      step2Title: 'مستوى النشاط',
      step3Title: 'هدفك',
      step4Title: 'التدريب',
      step5Title: 'النتائج',
      
      // Step 1
      sex: 'الجنس',
      male: 'ذكر',
      female: 'أنثى',
      age: 'العمر',
      height: 'الطول',
      weight: 'الوزن',
      unitSystem: 'نظام الوحدات',
      metric: 'متري (كجم، سم)',
      imperial: 'إمبراطوري (رطل، قدم/بوصة)',
      
      // Step 2
      activityLevel: 'مستوى النشاط',
      sedentary: 'خامل',
      sedentaryDesc: 'قليل أو لا توجد تمارين',
      lightlyActive: 'نشط قليلاً',
      lightlyActiveDesc: 'تمارين خفيفة 1-3 أيام/أسبوع',
      moderatelyActive: 'نشط بشكل معتدل',
      moderatelyActiveDesc: 'تمارين معتدلة 3-5 أيام/أسبوع',
      veryActive: 'نشط جداً',
      veryActiveDesc: 'تمارين مكثفة 6-7 أيام/أسبوع',
      extremelyActive: 'نشط للغاية',
      extremelyActiveDesc: 'تمارين مكثفة جداً أو عمل بدني',
      
      // Step 3
      goal: 'هدفك',
      loseFat: 'فقدان الدهون',
      loseFatDesc: 'إنشاء عجز في السعرات لفقدان الوزن',
      maintain: 'المحافظة',
      maintainDesc: 'الحفاظ على وزنك الحالي',
      buildMuscle: 'بناء العضلات',
      buildMuscleDesc: 'فائض في السعرات لتعظيم نمو العضلات',
      leanBulk: 'زيادة كتلة نظيفة',
      leanBulkDesc: 'فائض صغير لتقليل اكتساب الدهون',
      
      // Step 4
      experience: 'خبرة التدريب',
      beginner: 'مبتدئ',
      intermediate: 'متوسط',
      advanced: 'متقدم',
      trainingDays: 'أيام التدريب في الأسبوع',
      equipment: 'أين تتدرب؟',
      gym: 'صالة رياضية',
      home: 'في المنزل',
      homeBasic: 'في المنزل (معدات أساسية)',
    },

    // Results
    results: {
      title: 'نتائجك',
      subtitle: 'إليك احتياجاتك الغذائية المقدرة',
      dailyCalories: 'السعرات اليومية',
      protein: 'البروتين',
      carbs: 'الكربوهيدرات',
      fat: 'الدهون',
      perDay: 'في اليوم',
      bmr: 'معدل الأيض الأساسي (BMR)',
      tdee: 'إجمالي إنفاق الطاقة اليومي (TDEE)',
      targetCalories: 'السعرات المستهدفة',
      weeklyChange: 'التغيير الأسبوعي المتوقع',
      
      disclaimer: 'من المهم أن تعرف',
      disclaimerText: 'هذه الأرقام هي تقديرات أولية بناءً على معادلات معتمدة علمياً. قد يختلف معدل الأيض الفعلي لديك. تتبع تقدمك لمدة 2-3 أسابيع واضبط إذا لزم الأمر. استشر مختصاً إذا كان لديك حالات طبية.',
      
      howCalculated: 'كيف تم الحساب؟',
      howCalculatedText: 'نستخدم معادلة Mifflin-St Jeor لحساب BMR، ثم نعدله بناءً على مستوى نشاطك وهدفك. يتم حساب البروتين عند {protein} جم/كجم، تمثل الدهون حوالي {fat}% من السعرات، والكربوهيدرات تملأ الباقي.',
      
      macroDistribution: 'توزيع الماكروهات',
      saveResults: 'حفظ نتائجي',
      viewProgram: 'عرض برنامجي',
      viewSupplements: 'المكملات الموصى بها',
    },

    // Programs
    programs: {
      title: 'برامج التدريب',
      subtitle: 'برامج مخصصة بناءً على خبرتك وأهدافك',
      filterByGoal: 'تصفية حسب الهدف',
      filterByExperience: 'تصفية حسب الخبرة',
      filterByDays: 'أيام في الأسبوع',
      daysPerWeek: '{days} أيام/أسبوع',
      duration: '{weeks} أسابيع',
      viewProgram: 'عرض البرنامج',
      exercises: 'التمارين',
      sets: 'مجموعات',
      reps: 'تكرارات',
      rest: 'راحة',
      day: 'اليوم {day}',
    },

    // Supplements
    supplements: {
      title: 'دليل المكملات',
      subtitle: 'اكتشف المكملات التي يمكن أن تدعم أهدافك',
      categories: 'الفئات',
      allCategories: 'جميع الفئات',
      protein: 'بروتين',
      creatine: 'كرياتين',
      preWorkout: 'قبل التمرين',
      vitamins: 'فيتامينات',
      minerals: 'معادن',
      omega3: 'أوميغا-3',
      massGainer: 'زيادة الكتلة',
      electrolytes: 'إلكتروليتات',
      other: 'أخرى',
      
      onSale: 'في التخفيضات',
      featured: 'مميزة',
      newArrivals: 'الجديد',
      
      priceRange: 'نطاق السعر',
      sortBy: 'ترتيب حسب',
      sortPrice: 'السعر',
      sortDiscount: 'التخفيض',
      sortRating: 'التقييم',
      sortNewest: 'الأحدث',
      
      viewProduct: 'عرض المنتج',
      addToFavorites: 'إضافة للمفضلة',
      compare: 'مقارنة',
      inStock: 'متوفر',
      outOfStock: 'غير متوفر',
      lowStock: 'مخزون محدود',
      
      servings: '{count} حصة',
      perServing: 'لكل حصة',
      pricePerServing: 'السعر لكل حصة',
    },

    // Recommendations
    recommendations: {
      title: 'المكملات الموصى بها',
      subtitle: 'بناءً على هدفك: {goal}',
      mayHelp: 'هذه المكملات قد تدعم أهدافك',
      notRequired: 'مهم: لا يلزم أي مكمل للحصول على نتائج. التغذية الجيدة والتدريب المستمر هما الأساس.',
      
      highPriority: 'أولوية عالية',
      mediumPriority: 'قد يكون مفيداً',
      lowPriority: 'اختياري',
      
      proteinReason: 'للوصول بسهولة إلى هدف البروتين',
      creatineReason: 'يحسن القوة والأداء',
      vitaminsReason: 'يكمل نظامك الغذائي',
    },

    // Deals
    deals: {
      title: 'العروض',
      subtitle: 'أفضل العروض على المكملات',
      save: 'وفر {percent}%',
      originalPrice: 'السعر الأصلي',
      salePrice: 'سعر التخفيض',
      endsSoon: 'ينتهي قريباً',
      limitedTime: 'عرض محدود',
    },

    // Dashboard
    dashboard: {
      title: 'لوحة التحكم',
      welcome: 'مرحباً، {name}',
      overview: 'نظرة عامة',
      currentWeight: 'الوزن الحالي',
      targetCalories: 'السعرات المستهدفة',
      proteinTarget: 'هدف البروتين',
      currentGoal: 'الهدف الحالي',
      myProgram: 'برنامجي',
      progress: 'التقدم',
      weightLog: 'سجل الوزن',
      addEntry: 'إضافة إدخال',
      date: 'التاريخ',
      notes: 'ملاحظات',
      favorites: 'المفضلة',
      recentCalculations: 'الحسابات الأخيرة',
    },

    // Footer
    footer: {
      tagline: 'افهم تغذيتك. ابنِ جسمك.',
      about: 'عن',
      contact: 'اتصل',
      privacy: 'الخصوصية',
      terms: 'الشروط',
      madeWith: 'صنع بـ',
      by: 'بواسطة',
    },
  },
} as const;

export type TranslationKey = keyof typeof translations.fr;
