# ⚔️ 16-Bit RPG Developer Portfolio Template

> **Live Demo**: [uyasky.web.id](https://uyasky.web.id)  
> **Created by**: [Suryaalghifari](https://github.com/Suryaalghifari)

A static, proof-based developer portfolio with a retro **16-bit isometric RPG aesthetic**, built with **Vite + React 18 + TypeScript + Tailwind CSS**.

Designed to showcase real engineering impact through a "Problem - Role - Result" case study model rather than vague claims. Zero backend, zero database, 100% client-side privacy, and lightning-fast edge delivery.

---

## ✨ Features

- **🎮 3D Voxel Stage**: Pure CSS 3D isometric island with interactive buildings that respond to scroll and click navigation (zero heavy WebGL or Three.js dependencies).
- **📜 Proof-Based Projects**: Showcase projects with structured Problem, Role, and Measurable Results, complete with a keyboard-navigable Lightbox gallery.
- **🛡️ Interactive Skill Matrix**: Filter projects by tech stack (`#docker`, `#react`, `#python`) with automatic URL query sync (`?skill=docker`).
- **💬 NPC Dialogue Box**: Character avatar with an interactive FAQ conversation system.
- **⚡ 100% AI Agent Ready**: Out-of-the-box instructions for **Hermes Agent**, **Claude Code**, **Cursor**, **Windsurf**, and **Antigravity**.
- **🔒 Production Edge Hardened**: Pre-configured Cloudflare Pages security headers (`_headers`) with strict CSP, HSTS, and frame protection.

---

## 🚀 Quick Start (1 Minute)

```bash
# 1. Clone repository
git clone https://github.com/Suryaalghifari/rpg-dev-portfolio-template.git my-rpg-portfolio
cd my-rpg-portfolio

# 2. Install dependencies
npm install

# 3. Start local development
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## 🤖 Customize with AI Agents (Hermes, Claude, Cursor)

You don't need to write code manually. Simply feed this repo to your AI of choice:

### A. Using Hermes Agent
This repo includes `SKILL.md`. In your Hermes terminal:
```text
hermes: "Use rpg-portfolio-scaffold to customize this portfolio with my background: [your bio, projects, and skills]"
```

### B. Using Claude Code
Claude Code automatically picks up `CLAUDE.md`:
```text
claude: "Update this portfolio to match my career: [paste your resume / LinkedIn summary]"
```

### C. Using Cursor / Windsurf / Antigravity
The `.cursorrules` file instructs the agent to edit `src/data/*.json` and format images cleanly without breaking the RPG theme.

---

## 🛠 Manual Customization (Just 3 JSON Files)

All content is cleanly decoupled into 3 files in `src/data/`:

| File | What to Customize |
|---|---|
| `src/data/about.json` | Name, title, NPC dialogue questions/answers, stats, and work experience. |
| `src/data/projects.json` | Featured and archived projects with Problem - Role - Result and screenshots. |
| `src/data/skills.json` | Tech stack, proficiency ranks (`Harian`, `Produksi`, `Pernah coba`), and icons. |

### Adding Project Screenshots
Place 16:9 images (recommended size: `1200x675`, format: `WebP`) into `public/images/projects/` and reference them in `projects.json`.

---

## 🚢 Deploy to Cloudflare Pages (Free)

```bash
# Build static bundle
npm run build

# Deploy directly via Wrangler
npx wrangler pages deploy dist --project-name my-rpg-portfolio
```

Or connect the repository directly in the **Cloudflare Dashboard → Workers & Pages → Create Application → Pages → Connect to Git**.

---

## 📄 License & Credits

Distributed under the **MIT License**.

- Created by **[Suryaalghifari](https://github.com/Suryaalghifari)**
- If you like this template, give it a ⭐️ on GitHub!
