---
name: rpg-portfolio-scaffold
description: Use when scaffolding a 16-bit RPG developer portfolio.
version: 1.0.0
author: Suryaalghifari
license: MIT
metadata:
  tags: [portfolio, react, vite, tailwind, 16bit, rpg, voxel-3d, frontend]
---

# 16-Bit RPG Developer Portfolio Scaffold

Procedural instructions for AI agents (Hermes, Claude Code, Cursor, Antigravity) to scaffold and customize a developer portfolio with 16-bit isometric RPG aesthetic.

## Quick Start for AI Agents

When the user asks to build or customize their portfolio:
1. **Interview the user** for their developer profile, real experience, showcase projects, and tech stack.
2. **Update the 3 core JSON files**:
   - `src/data/about.json`
   - `src/data/projects.json`
   - `src/data/skills.json`
3. **Format project screenshots** to 16:9 WebP (1200x675) in `public/images/projects/`.
4. **Test the build**:
   ```bash
   npm run build
   ```

---

## 1. Schema Specifications

### A. About & Profile (`src/data/about.json`)
```json
{
  "name": "yourname",
  "subtitle": "Role & Specialization • Guild Adventurer",
  "avatar": "/images/avatar.webp",
  "options": [
    { "id": "who", "question": "Siapa kamu?", "answer": "..." },
    { "id": "what", "question": "Apa yang kamu bangun?", "answer": "..." },
    { "id": "looking", "question": "Kamu cari apa sekarang?", "answer": "..." }
  ],
  "stats": [
    { "label": "Tahun Pengalaman", "value": "3+" },
    { "label": "Proyek Produksi", "value": "10+" },
    { "label": "Uptime Sistem", "value": "99.9%" }
  ],
  "experience": [
    {
      "company": "Company Name",
      "role": "Role Title",
      "period": "2024 – Sekarang",
      "location": "City, Country",
      "summary": "Impact-oriented summary with action verbs and quantifiable results."
    }
  ]
}
```

### B. Projects (`src/data/projects.json`)
Every project follows the **Problem - Role - Result** proof formula:
```json
[
  {
    "slug": "unique-slug",
    "title": "Project Title",
    "status": "SELESAI",
    "featured": true,
    "problem": "Specific challenge, bottleneck, or business problem solved.",
    "role": "Clear description of responsibilities and technical architecture.",
    "result": "Measurable business or technical impact (e.g. latency cut 40%, 10k users).",
    "skills": ["react", "typescript", "docker"],
    "shots": [
      {
        "src": "/images/projects/project-cover.webp",
        "alt": "Accessible description of interface",
        "caption": "Dashboard overview and key metrics",
        "w": 1200,
        "h": 675
      }
    ],
    "year": 2026
  }
]
```

### C. Skills Matrix (`src/data/skills.json`)
Icons use [Simple Icons](https://simpleicons.org/) via `react-icons/si` (e.g. `SiDocker`, `SiReact`, `SiPython`):
```json
[
  { "id": "docker", "name": "Docker", "rank": "Harian", "icon": "SiDocker" },
  { "id": "react", "name": "React", "rank": "Harian", "icon": "SiReact" },
  { "id": "python", "name": "Python", "rank": "Produksi", "icon": "SiPython" }
]
```
Valid rank categories: `"Harian"` (Daily driver), `"Produksi"` (Production grade), `"Pernah coba"` (Explored).

---

## 2. Image Standards

- **Project Covers**: 1200x675 pixels (16:9 ratio), WebP format.
- If original screenshot is non-16:9, letterbox onto canvas `#1a0f08` with `fit=contain`.
- **Avatar**: 1:1 ratio square WebP. Can be an animated loop sprite or pixel art head.

---

## 3. Verification Commands

Always run build check before delivering to the user:
```bash
npm run build
npm run preview
```
Ensure zero TypeScript compilation errors.
