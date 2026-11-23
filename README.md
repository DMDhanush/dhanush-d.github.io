# D Dhanush — Personal Developer Portfolio

> **Building Intelligent Applications with Python & Generative AI**  
> Production-ready, cinematic portfolio website built for **D Dhanush**, MCA graduate targeting entry-level **Python Developer**, **Backend Developer**, **AI Application Developer**, and **Generative AI** roles.

---

## ✨ Overview & Aesthetics

- **Visual Direction**: Cinematic midnight navy (`#080C14` / `#0D1527`) with electric blue (`#3B82F6`), violet (`#8B5CF6`), and cyber cyan (`#06B6D4`) neon accents.
- **Interactivity**: Dynamic interactive neural-network canvas particle background in the Hero section responding to mouse movement.
- **Dark/Light Theme**: Seamless toggle between deep midnight glassmorphic theme and high-contrast clean light theme with CSS variables.
- **Flagship Case Study**: Deep dive into **ResearchAI** (Academic Literature Intelligence Platform) featuring 5 interactive tabs:
  1. *Executive Overview & Problem-Solution Matrix*
  2. *System Architecture & Verified Pipeline* (Multi-Agent Supervisor, ChromaDB RAG, PyMuPDF)
  3. *Genuine Screenshot Lightbox Gallery* (23 genuine UI captures)
  4. *Key Engineering Decisions & Trade-offs*
  5. *Local Reproduction Guide*
- **Verified Credentials Gallery**: Certificate cards for IBM Python Full Stack, NPTEL Cloud Computing (IIT Kharagpur), AWS, Great Learning Data Science, and TCS iON with high-res previews and direct PDF downloads.
- **Athletic Foundation**: Dedicated section spotlighting Dhanush's University-Level Wrestling background, translating athletic discipline, grit, and physical consistency into engineering persistence.
- **ATS-Compliant Resume Integration**: Built-in viewer and direct download link for the verified single-page ATS PDF resume (`public/assets/resume/D_Dhanush_Resume.pdf`).

---

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite 8
- **Styling**: Vanilla CSS Design System with responsive tokens, glassmorphism, and responsive breakpoints
- **Icons**: Lucide React
- **Asset Pipeline**: Static local assets optimized under `public/assets/`

---

## 🚀 Quick Start (Running Locally)

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18+ recommended)
- `npm` (bundled with Node.js)

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to view the application with hot module replacement (HMR).

### 3. Production Build
```bash
npm run build
```
Generates a highly optimized, minified production bundle in the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📁 Project Structure

```
DD Portfolio/
├── public/
│   └── assets/
│       ├── certificates/      # PDF certificates & PNG high-res previews
│       ├── media/             # Profile portraits (dhanush_profile.jpeg)
│       ├── projects/          # 23 genuine ResearchAI screenshots & SIH captures
│       └── resume/            # Single-page ATS PDF resume (D_Dhanush_Resume.pdf)
├── src/
│   ├── components/
│   │   ├── Navbar.tsx         # Sticky glassmorphic navbar with section spy & theme toggle
│   │   ├── Hero.tsx           # Neural network particle canvas, CTAs, profile card
│   │   ├── About.tsx          # Authentic narrative, education, core philosophy
│   │   ├── SkillsSection.tsx  # Filterable skill matrix with project usage badges
│   │   ├── ResearchAICaseStudy.tsx # Deep 5-tab flagship case study with screenshot lightbox
│   │   ├── ProjectsSection.tsx     # Secondary verified projects (ATS Validator, WELFake, SIH)
│   │   ├── CertificatesGallery.tsx # High-res modal preview & direct PDF download
│   │   ├── AchievementsSection.tsx # Wrestling spotlight & 2022-2026 career timeline
│   │   ├── EducationSection.tsx    # MCA (CGPA 7.37) & BCA (CGPA 7.00) cards
│   │   ├── ContactSection.tsx      # Email, phone, copy-to-clipboard, inquiry composer
│   │   ├── Footer.tsx         # Brand monogram, verified badge, back-to-top
│   │   └── LightboxModal.tsx  # Keyboard-navigable fullscreen media lightbox
│   ├── data/
│   │   └── portfolioData.ts   # Single source of truth for all verified facts & links
│   ├── types/
│   │   └── portfolio.ts       # TypeScript interfaces for portfolio models
│   ├── App.tsx                # Main layout composition
│   ├── index.css              # Global tokens, themes, typography, and utility classes
│   └── main.tsx               # React entry point
├── package.json
└── vite.config.ts
```

---

## ⚙️ How to Customize & Update Information

All personal information, links, projects, and credentials are intentionally decoupled and centralized in:
👉 `src/data/portfolioData.ts`

### 1. Updating Social & Profile Links
Open `src/data/portfolioData.ts` and update the `personalInfo` object:
```typescript
export const personalInfo = {
  name: "D Dhanush",
  email: "dhanushd627@gmail.com",
  phone: "+91 8884262043",
  location: "Bengaluru, Karnataka, India",
  // Update your actual GitHub & LinkedIn URLs here when ready:
  githubUrl: "https://github.com/your-username",
  linkedinUrl: "https://linkedin.com/in/your-profile",
  resumePath: "/assets/resume/D_Dhanush_Resume.pdf",
};
```

### 2. Updating Certificates
Add your new certificate PDF and preview image to `public/assets/certificates/`, then add an entry to the `certificatesData` array in `src/data/portfolioData.ts`:
```typescript
{
  id: "my-new-cert",
  title: "Course Name",
  issuer: "Issuing Organization",
  category: "cloud", // "python" | "cloud" | "ai" | "professional"
  issueDate: "Month Year",
  credentialId: "VERIFICATION-ID-OR-ROLL-NO",
  pdfPath: "/assets/certificates/new_cert.pdf",
  previewImagePath: "/assets/certificates/new_cert_preview.png",
  skillsCovered: ["Skill 1", "Skill 2"],
  description: "Description of what was learned..."
}
```

### 3. Updating the Resume
Replace `public/assets/resume/D_Dhanush_Resume.pdf` with your updated PDF. The "Download Resume" buttons across the Navbar, Hero, and Footer will immediately point to the new file.

---

## 🌐 Deployment Guide

### Option A: Deploy to Vercel (Recommended)
1. Push your repository to GitHub.
2. Visit [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import your GitHub repository.
4. Framework Preset: **Vite** (auto-detected).
5. Click **Deploy**. Vercel will build and deploy your site to a free `*.vercel.app` domain with SSL.

### Option B: Deploy to Netlify
1. Run `npm run build` locally or link your GitHub repo to [Netlify](https://www.netlify.com/).
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy!

### Option C: GitHub Pages
1. Install `gh-pages`: `npm install -D gh-pages`
2. In `vite.config.ts`, set `base: '/<repository-name>/'`.
3. Add deploy script to `package.json`: `"deploy": "gh-pages -d dist"`.
4. Run `npm run build && npm run deploy`.

---

## 🔒 Security & Privacy Notice
- No private API keys (OpenAI, HuggingFace, etc.) are embedded or exposed in this frontend application.
- ResearchAI is documented strictly with verified technical architecture and genuine screenshots without running a live backend server in the static build.
