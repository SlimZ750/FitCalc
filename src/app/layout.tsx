import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'FitCalc - Calculateur de Calories et Macros | حاسبة السعرات والماكروهات',
  description: 'Calculez vos besoins en calories et macronutrients. Programmes d\'entraînement et nutrition pour la musculation.',
  keywords: ['calories', 'macros', 'musculation', 'nutrition', 'fitness', 'bodybuilding'],
  other: {
    'permissions-policy': 'unload=()',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('fitcalc-theme') || 'light';
                  const lang = localStorage.getItem('fitcalc-language') || 'fr';
                  document.documentElement.classList.add(theme);
                  document.documentElement.lang = lang;
                  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
                } catch (e) {
                  document.documentElement.classList.add('light');
                  document.documentElement.lang = 'fr';
                  document.documentElement.dir = 'ltr';
                }
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`} suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
