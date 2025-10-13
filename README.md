# Sporty Ski Reisvinder - Nuxt 4 (Vue)

Een interactieve web applicatie om de perfecte Sporty Ski-reis voor jouw gezin te vinden, geconverteerd van React naar Nuxt 4 met Vue.

## ✨ Features

- **Vue 3 Composition API** - Moderne Vue development met `<script setup>`
- **Nuxt 4** - Auto-imports, file-based routing, en server-side rendering
- **TypeScript** - Type safety voor betere developer experience
- **Tailwind CSS** - Utility-first CSS framework voor styling
- **Responsive Design** - Werkt perfect op desktop en mobile

## 🚀 Getting Started

### Vereisten

- Node.js 20.18.3 of hoger
- npm of pnpm

### Installatie

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in je browser.

### Build voor productie

```bash
# Build de applicatie
npm run build

# Preview de build
npm run preview

# Generate static site
npm run generate
```

## 🌐 Deployment naar GitHub Pages

Deze applicatie is geconfigureerd als een statische site die automatisch wordt gedeployed naar GitHub Pages.

### Setup

1. **Push naar GitHub**: Upload je code naar een GitHub repository
2. **Enable GitHub Pages**:
   - Ga naar Settings > Pages in je GitHub repository
   - Selecteer "GitHub Actions" als Source
3. **Automatic Deployment**: Elke push naar de `main` branch triggert automatisch een deployment

### GitHub Actions Workflow

De applicatie gebruikt een GitHub Actions workflow (`.github/workflows/deploy.yml`) die:

- Installeert dependencies
- Genereert de statische site
- Deployt naar GitHub Pages

### Lokaal testen van static build

```bash
# Generate static site
npm run generate

# Preview de generated site
npx serve .output/public
```

### Configuratie voor GitHub Pages

- **Base URL**: Automatisch geconfigureerd voor GitHub Pages
- **Static Generation**: `ssr: false` voor pure client-side rendering
- **Asset Directory**: `_nuxt/` voor compatibiliteit met GitHub Pages

## 📁 Project Structuur

```
├── assets/css/          # Global CSS en Tailwind
├── components/          # Vue componenten
│   ├── CheckIcon.vue    # SVG icon component
│   ├── ResultCard.vue   # Trip resultaat kaart
│   └── StatementSlider.vue # Statement slider component
├── layouts/             # Nuxt layouts
│   └── default.vue      # Default layout met achtergrond
├── pages/               # Nuxt pages (auto-routing)
│   └── index.vue        # Homepage
├── constants.ts         # Trip data en statements
├── types.ts             # TypeScript type definitions
└── nuxt.config.ts       # Nuxt configuratie
```

## 🔄 Conversie van React naar Vue

Deze app is geconverteerd van React/TypeScript naar Nuxt 4/Vue met de volgende aanpassingen:

### React → Vue Conversie

- **React Hooks → Vue Composition API**

  - `useState` → `ref`
  - `useMemo` → `computed` (waar nodig)
  - `useEffect` → `watch` of `onMounted` (waar nodig)

- **Event Handling**

  - `onClick` → `@click`
  - `onChange` → `@input` of `@change`

- **Props & Emits**

  - React props → Vue `defineProps<T>()`
  - Callbacks → Vue `defineEmits<T>()`

- **Conditional Rendering**
  - `{condition && <Component />}` → `<Component v-if="condition" />`
  - `{condition ? <A /> : <B />}` → `<A v-if="condition" />` + `<B v-else />`

### Nuxt Conventies

- **Auto-imports** - Geen expliciete imports nodig voor Vue reactivity API
- **File-based routing** - `pages/index.vue` = `/` route
- **Layouts** - Herbruikbare layouts in `layouts/` directory
- **Components** - Auto-import van componenten in `components/`
- **Utils & Types** - Import met `~/` alias

## 🎯 Originele Functionaliteit

Alle originele functionaliteit is behouden:

1. **Interactieve Stellingen** - Sliders voor verschillende voorkeuren
2. **Slimme Berekening** - Gewogen scoring algoritme
3. **Resultaat Presentatie** - Mooie kaart met trip details
4. **Reset Functionaliteit** - Begin opnieuw functie
5. **Responsive Design** - Werkt op alle schermformaten

## 🏔️ Trip Opties

- **Cervinia-Zermatt** - Hooggelegen skigebied met extreme sneeuwzekerheid
- **Nassfeld** - Gezinsvriendelijk met luxe accommodatie
- **Little Kids Week** - Perfect voor peuters en kleuters

## 📄 Licentie

Gebaseerd op de reizen van [sportyski.be](https://www.sportyski.be/)
