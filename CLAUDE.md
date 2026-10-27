# 16-Bit RPG Developer Portfolio Template (Claude Code Guide)

This repository is a static, proof-based developer portfolio with a retro 16-bit RPG aesthetic built on Vite + React 18 + TypeScript + Tailwind CSS.

Created by **@Suryaalghifari** • Live demo at [uyasky.web.id](https://uyasky.web.id).

---

## 🛠 Commands

- `npm install` — Install project dependencies
- `npm run dev` — Start local development server (`http://localhost:5173`)
- `npm run build` — Run TypeScript typecheck (`tsc -b`) and Vite production build
- `npm run preview` — Preview the production build locally (`http://localhost:4173`)

---

## 📁 Architecture & Customization Guide

All personal developer content is decoupled into 3 pure JSON files in `src/data/`:

1. **Profile & Work Experience** (`src/data/about.json`):
   - `name`: Display name / handle
   - `subtitle`: Role and primary specializations
   - `options`: Interactive NPC dialogue Q&A tabs
   - `stats`: Key career metrics (e.g. Years of Experience, Production Projects)
   - `experience`: Work history entries with bullet-point impact summaries

2. **Featured & Archived Projects** (`src/data/projects.json`):
   - Every project requires: `problem`, `role`, `result` (proof-oriented).
   - `skills`: Array of matching skill IDs for interactive cross-filtering.
   - `shots`: Screenshots located in `/public/images/projects/` (1200x675 WebP recommended).

3. **Technical Skills Matrix** (`src/data/skills.json`):
   - Key attributes: `id`, `name`, `rank` (`"Harian"` | `"Produksi"` | `"Pernah coba"`), `icon` (`react-icons/si` name, e.g. `SiDocker`).

---

## 🎨 Design Tokens & Aesthetic Rules

- **Theme Palette**: 16-bit parchment, wood, and night sky (`#0f2a3f`, `#2c1b10`, `#ffd98a`, `#74c69d`).
- **Typography**: Header font `Silkscreen`, Body font `VT323` (self-hosted via `@fontsource`).
- **3D Voxel Stage**: Pure CSS transforms (`transform-style: preserve-3d`) without Three.js overhead.
- **Accessibility**: High-contrast WCAG AA compliant. All buttons support keyboard navigation.
