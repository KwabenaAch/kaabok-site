<<<<<<< HEAD
# Kaabok — AI Consulting & Executive Advisory

Website for **Kaabok**, an AI consulting and executive advisory platform focused on helping companies and SMEs in Ghana and beyond adopt AI in a practical, responsible, and scalable way.

**Live site:** https://kaabok-site.vercel.app

---

## Tech Stack

| Tool | Version |
|------|---------|
| React | 19 |
| Vite | 7 |
| Tailwind CSS | 3.4 |
| GSAP | 3.14 |
| React Router | 6 |
| Lucide React | 0.575 |

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Install dependencies
```bash
npm install
```

### Run development server
```bash
npm run dev
```
Opens at `http://localhost:5173`

### Build for production
```bash
npm run build
```
Output goes to `dist/`

### Preview production build locally
```bash
npm run preview
```

### Lint
```bash
npm run lint
```

---

## Project Structure

```
kaabok-site/
├── public/               # Static assets (profile image)
├── src/
│   ├── components/
│   │   └── shared/       # Reusable UI components
│   │       ├── FloatingNavbar.jsx
│   │       ├── Footer.jsx
│   │       ├── EyebrowLabel.jsx
│   │       ├── MagneticButton.jsx
│   │       ├── RevealWrapper.jsx
│   │       └── SectionContainer.jsx
│   ├── pages/            # One file per route
│   │   ├── HomePage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── ServicesPage.jsx
│   │   ├── InsightsPage.jsx
│   │   └── ContactPage.jsx
│   ├── App.jsx           # Route definitions + page transitions
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles + Tailwind directives
├── index.html
├── vercel.json           # Vercel deployment config + security headers
├── tailwind.config.js
└── vite.config.js
```

---

## Pages

| Route | Page |
|-------|------|
| `/` | Home |
| `/services` | Services (AI Consulting, Training, Speaking) |
| `/about` | About |
| `/insights` | Insights & Thought Leadership |
| `/contact` | Contact |

---

## Deployment

The site deploys to **Vercel**. To redeploy after changes:

```bash
vercel --prod --yes
```

Vercel is configured with:
- SPA rewrites (all routes → `index.html`)
- Security headers: `X-Frame-Options`, `X-Content-Type-Options`, `X-XSS-Protection`, `Referrer-Policy`, `Permissions-Policy`

---

## Contact

**Kaabok**
Accra, Ghana
boakye@kaabok.com
=======
# kaabok-site
>>>>>>> 028f72a394783c5a401e49bc78d57c55f2c587c4
