# FitCalc - Bilingual Bodybuilding Nutrition Platform

**FitCalc** is a comprehensive bilingual (French/Arabic) web application designed to help bodybuilders and fitness enthusiasts calculate their nutritional needs, discover training programs, and make informed supplement decisions.

## 🎯 Project Vision

A modern, beginner-friendly platform that:
- Calculates daily calorie and macronutrient needs using scientifically validated formulas
- Provides personalized training programs based on experience and goals
- Recommends supplements with transparent, educational information
- Supports both French and Arabic with full RTL layout support
- Offers a clean, professional user experience

## 📋 Features (Planned)

### Core Calculator
- **Multi-step wizard** for calorie and macro calculation
- **Mifflin-St Jeor equation** for BMR calculation
- Activity level adjustment for TDEE
- Goal-based calorie targets (fat loss, maintenance, muscle gain, lean bulk)
- Macro distribution (protein, carbs, fats)

### Training Programs
- Beginner, intermediate, and advanced programs
- Equipment-based filtering (gym, home, home+basic)
- Goal-specific programming
- Exercise instructions and progression guidance

### Supplement Database
- Product catalog with detailed information
- Category-based browsing
- **Deals section** highlighting products on sale
- Product comparison tool
- Educational content about each supplement category

### User Features
- Personal dashboard
- Progress tracking (weight, measurements)
- Saved calculations and programs
- Favorite supplements

### Admin Dashboard
- Product management
- Content management
- Analytics and insights

## 🛠 Tech Stack

### Frontend
- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS** for styling
- **Lucide React** for icons

### Backend & Database
- **Supabase** (PostgreSQL + Auth)
- Row Level Security (RLS) for data protection

### Additional Libraries
- **Recharts** for data visualization
- **Zod** for validation
- **date-fns** for date handling
- **clsx** for conditional classNames

## 📁 Project Structure

```
fitcalc/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx          # Root layout
│   │   ├── providers.tsx       # Client-side providers
│   │   ├── page.tsx            # Homepage
│   │   ├── calculator/         # Calculator pages
│   │   └── globals.css         # Global styles
│   ├── components/             # React components
│   │   ├── ui/                 # Reusable UI components
│   │   ├── calculator/         # Calculator-specific components
│   │   ├── programs/           # Program components
│   │   ├── supplements/        # Supplement components
│   │   ├── dashboard/          # Dashboard components
│   │   └── admin/              # Admin components
│   ├── lib/                    # Business logic
│   │   ├── calculations/       # BMR, TDEE, macros calculations
│   │   ├── i18n/               # Internationalization
│   │   └── supabase/           # Supabase client
│   ├── contexts/               # React contexts
│   │   ├── LanguageContext.tsx # Language switching (FR/AR)
│   │   └── ThemeContext.tsx    # Dark/Light mode
│   ├── hooks/                  # Custom React hooks
│   ├── types/                  # TypeScript type definitions
│   └── utils/                  # Utility functions
├── public/                     # Static assets
└── ...config files
```

## 🧮 Calculation Engine

The platform uses scientifically validated formulas:

### BMR Calculation
**Mifflin-St Jeor Equation:**
- Men: `BMR = (10 × weight_kg) + (6.25 × height_cm) - (5 × age) + 5`
- Women: `BMR = (10 × weight_kg) + (6.25 × height_cm) - (5 × age) - 161`

### TDEE Calculation
```
TDEE = BMR × Activity Multiplier
```

Activity Multipliers:
- Sedentary: 1.2
- Lightly Active: 1.375
- Moderately Active: 1.55
- Very Active: 1.725
- Extremely Active: 1.9

### Goal Adjustments
- **Fat Loss**: -15% from TDEE
- **Maintenance**: 0% (TDEE)
- **Muscle Gain**: +10% above TDEE
- **Lean Bulk**: +5% above TDEE

### Macro Distribution
- **Protein**: 1.8-2.6g per kg body weight (varies by goal)
- **Fat**: 20-30% of total calories
- **Carbs**: Remaining calories

## 🌍 Internationalization

Full bilingual support:

### French (Default)
- LTR (Left-to-Right) layout
- French translations for all UI elements
- French-locale number formatting

### Arabic
- RTL (Right-to-Left) layout
- Complete Arabic translations
- Arabic typography
- Arabic-locale number formatting

Language can be switched dynamically and persists across sessions.

## 🎨 Design System

### Colors
- **Primary**: Blue scale (for CTA buttons, links)
- **Accent**: Red scale (for highlights, sale badges)
- **Neutral**: Gray scale (for text, backgrounds)

### Dark Mode
Fully supported with system preference detection and manual toggle.

### Typography
- Inter font family
- Responsive font sizes
- Proper line heights for readability

### Components
Reusable, accessible components following best practices.

## 🗄 Database Schema

### Tables

**profiles**
- User account information
- Language preference
- Unit system preference

**user_profiles**
- Biometric data (age, height, weight, sex)
- Activity level and goals
- Training preferences

**calorie_calculations**
- Saved calculation results
- BMR, TDEE, target calories
- Macro breakdown

**weight_logs**
- Weight tracking over time
- Optional waist and body fat percentage
- Progress monitoring

**programs**
- Training program templates
- Goal and experience-based filtering
- Multi-language support

**exercises**
- Exercise database
- Sets, reps, rest periods
- Instructions in both languages

**supplements**
- Product catalog
- Pricing (including sales)
- Categories and descriptions
- Store information

**stores**
- Supplement store information
- URLs and logos

**favorites**
- User's favorited supplements

**clicks**
- Product click tracking for analytics

## 🔐 Security

- Row Level Security (RLS) policies
- User data isolation
- Server-side validation
- Environment variable protection
- Input sanitization

## ⚙️ Setup & Installation

### Prerequisites
- Node.js 18+ and npm
- Supabase account

### Installation

1. **Clone and install dependencies:**
```powershell
cd fitcalc
npm install
```

2. **Set up environment variables:**
```powershell
cp .env.example .env
```

Edit `.env` and add your Supabase credentials:
```
NEXT_PUBLIC_SUPABASE_URL=your_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

3. **Set up Supabase database:**
- Create tables using the provided SQL schema
- Enable RLS policies
- Set up authentication

4. **Run development server:**
```powershell
npm run dev
```

5. **Build for production:**
```powershell
npm run build
npm start
```

## 🧪 Testing

```powershell
npm test
```

Tests cover:
- BMR calculation accuracy
- TDEE calculation
- Macro distribution
- Unit conversions
- Input validation

## 📦 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push

### Other Platforms
Build command: `npm run build`
Output directory: `.next`

## 🚀 Development Phases

### Phase 1: Foundation ✅
- Project initialization
- Type definitions
- Calculation engine
- i18n system
- Basic layout

### Phase 2: Database (In Progress)
- Supabase setup
- Table creation
- RLS policies
- Auth configuration

### Phase 3: UI Components
- Design system
- Reusable components
- Dark mode
- RTL support

### Phase 4: Calculator
- Multi-step wizard
- Form validation
- Results display
- Charts and visualization

### Phase 5: Programs
- Program database
- Filtering system
- Exercise library

### Phase 6: Supplements
- Product catalog
- Category browsing
- Search and filters
- Deals section

### Phase 7: User Features
- Authentication
- Dashboard
- Progress tracking
- Favorites

### Phase 8: Admin
- Product management
- Content management
- Analytics

### Phase 9: Polish
- Testing
- Performance optimization
- SEO
- Accessibility
- Demo data

## 📝 Important Notes

### Disclaimers
The platform provides **educational estimates**, not medical advice. All calculations are starting points and should be adjusted based on individual progress.

### Supplements
Supplement recommendations are informational. The platform emphasizes that supplements are **optional** and proper nutrition and training are the foundation.

### Data Accuracy
Users should:
- Monitor progress for 2-3 weeks before adjusting targets
- Consult healthcare professionals for medical conditions
- Use calculations as guidelines, not absolute values

## 🤝 Contributing

This is a portfolio/demonstration project. Future contributions guidelines will be added as the project matures.

## 📄 License

To be determined.

## 🙏 Acknowledgments

- Mifflin-St Jeor equation for BMR calculation
- Scientific nutrition and training research
- Open source community

---

**Status**: Early Development  
**Version**: 0.1.0  
**Last Updated**: September 2026
