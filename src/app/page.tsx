'use client';

/**
 * Homepage - FitCalc Landing Page
 */

import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import { Calculator, Target, Dumbbell, Apple, TrendingUp, ChevronRight } from 'lucide-react';

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Temporary Navbar */}
      <nav className="border-b border-gray-200 dark:border-gray-800">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold text-primary-600">
              FitCalc
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {t('home.tagline')}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section bg-gradient-to-br from-primary-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              {t('home.heroTitle')}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 text-balance max-w-2xl mx-auto">
              {t('home.heroSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/calculator" className="btn btn-primary inline-flex items-center justify-center">
                {t('home.ctaPrimary')}
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="#how-it-works" className="btn btn-outline inline-flex items-center justify-center">
                {t('home.ctaSecondary')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Section */}
      <section id="how-it-works" className="section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('education.title')}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Comprenez les fondamentaux de la nutrition pour atteindre vos objectifs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Calories */}
            <div className="card hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-4">
                <Calculator className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t('education.caloriesTitle')}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t('education.caloriesDesc')}
              </p>
            </div>

            {/* Protein */}
            <div className="card hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-accent-100 dark:bg-accent-900 rounded-lg flex items-center justify-center mb-4">
                <Dumbbell className="h-6 w-6 text-accent-600 dark:text-accent-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t('education.proteinTitle')}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t('education.proteinDesc')}
              </p>
            </div>

            {/* Carbs */}
            <div className="card hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t('education.carbsTitle')}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t('education.carbsDesc')}
              </p>
            </div>

            {/* Fats */}
            <div className="card hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center mb-4">
                <Apple className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t('education.fatsTitle')}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t('education.fatsDesc')}
              </p>
            </div>

            {/* Macros */}
            <div className="card hover:shadow-md transition-shadow md:col-span-2">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t('education.macrosTitle')}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t('education.macrosDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Influencers/Success Stories Section */}
      <section className="section bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('home.transformTitle')}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t('home.transformSubtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Influencer 1 - Ross */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="aspect-[3/4] relative">
                <img
                  src="/images/67d288a83f835b330da5744e_ross image.png"
                  alt="Fitness transformation"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="text-sm font-medium">Transformation réussie</p>
                    <p className="text-xs opacity-90">Nutrition + Entraînement</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Influencer 2 - Jeff Seid */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="aspect-[3/4] relative">
                <img
                  src="/images/Jeff-no2.jpg"
                  alt="Bodybuilding physique"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="text-sm font-medium">Physique esthétique</p>
                    <p className="text-xs opacity-90">Macros optimisées</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Influencer 3 - Ryan Terry */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="aspect-[3/4] relative">
                <img
                  src="/images/RYAN-terry-training-split-ft-2_1647440285.jpg"
                  alt="Professional athlete"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="text-sm font-medium">Athlète professionnel</p>
                    <p className="text-xs opacity-90">Nutrition de précision</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Influencer 4 - Generic Success */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="aspect-[3/4] relative">
                <img
                  src="/images/images.jpg"
                  alt="Fitness success story"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="text-sm font-medium">Résultats visibles</p>
                    <p className="text-xs opacity-90">Discipline + Nutrition</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">10k+</div>
              <p className="text-gray-600 dark:text-gray-400">{t('home.statsUsers')}</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">50k+</div>
              <p className="text-gray-600 dark:text-gray-400">{t('home.statsCalculations')}</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">100+</div>
              <p className="text-gray-600 dark:text-gray-400">{t('home.statsPrograms')}</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">95%</div>
              <p className="text-gray-600 dark:text-gray-400">{t('home.statsSatisfaction')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à commencer ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Calculez vos besoins en 5 minutes
          </p>
          <Link href="/calculator" className="btn bg-white text-primary-600 hover:bg-gray-100 inline-flex items-center">
            {t('home.ctaPrimary')}
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 py-8">
        <div className="container-custom">
          <div className="text-center text-gray-600 dark:text-gray-400">
            <p className="text-sm">
              {t('footer.tagline')}
            </p>
            <p className="text-xs mt-2">
              © {new Date().getFullYear()} FitCalc. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
