# AI Meeting Assistant

An AI-powered web application that helps you remember meeting discussions, extract project features, create TODO lists automatically, and organize everything by project.

Think of it as a **second brain for meetings** — a product management assistant that turns raw transcripts into structured, actionable insights.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | Next.js 15, TypeScript, Tailwind CSS, App Router |
| Backend | Next.js API Routes (Node.js runtime) |
| AI | OpenAI API (GPT-4.1-mini, structured JSON outputs) |
| Database | Supabase (PostgreSQL) — placeholder for future persistence |
| Deployment | Vercel |
| Version Control | Git + GitHub |

## Features (MVP)

- **Paste meeting transcript** — large textarea with a clean, modern UI
- **AI transcript analysis** — extracts summary, projects, features, tasks, owners, and deadlines
- **Structured JSON API** — consistent response format for frontend rendering
- **Results UI** — cards displaying summary, projects, features, and action items

## Project Structure

```
/app
  /api/analyze     → POST endpoint for AI analysis
  layout.tsx       → Root layout and metadata
  page.tsx         → Main page
  globals.css      → Global styles (Tailwind)
/components        → Reusable UI components
/lib               → Server-side integrations (OpenAI client)
/types             → Shared TypeScript types
/utils             → Validation and helper functions
/prompts           → AI prompt templates and JSON schema
/supabase          → Supabase client placeholder (future)
```

## Architecture Overview

```
Browser (React)
    │
    │  POST /api/analyze  { transcript: "..." }
    ▼
Next.js API Route (server-only)
    │
    │  Validates input → Calls OpenAI → Returns JSON
    ▼
OpenAI API (GPT-4.1-mini)
    │
    │  Structured JSON response
    ▼
Browser displays results in cards
```

**Why this structure?**

- **`/app/api`** — API routes run on the server, keeping your OpenAI API key secret
- **`/components`** — UI broken into reusable pieces (input, results, loading)
- **`/prompts`** — AI instructions separated from code for easy tuning
- **`/types`** — Shared types ensure frontend and backend agree on data shape
- **`/lib`** — External service clients live here (OpenAI now, Supabase later)

## Setup Instructions

### Company laptop (no local Node.js / Git install)

If IT blocks installing software, use **GitHub as your hub** and a **browser-based IDE** on your work machine. Use a full local setup on your personal computer.

| Machine | What to use |
|---------|-------------|
| Work laptop | GitHub (browser) + GitHub Codespaces or StackBlitz |
| Personal computer | Node.js + Git installed locally (normal workflow) |

**Recommended flow:**

1. Create a GitHub repo in the browser (see [GitHub without Git CLI](#github-without-git-cli) below).
2. Upload this project’s files to GitHub (drag-and-drop upload).
3. Open the repo in **GitHub Codespaces** (full VS Code in the browser, Node + Git included) or **StackBlitz** (lighter, good for Next.js).
4. Add `OPENAI_API_KEY` in the cloud IDE’s environment/secrets settings — not in committed files.
5. On your personal PC: `git clone`, `npm install`, work locally, `git push`. On work: open Codespaces and `git pull`.

See [DEVELOPMENT.md](./DEVELOPMENT.md) for step-by-step browser workflows.

### Local setup (personal computer or when installs are allowed)

#### Prerequisites

1. **Node.js 18+** — [nodejs.org](https://nodejs.org) (includes npm)
2. **OpenAI API key** — [platform.openai.com](https://platform.openai.com)
3. **Git** — [git-scm.com](https://git-scm.com)

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Copy the example file (or edit `.env.local` directly):

```bash
cp .env.example .env.local
```

Add your OpenAI API key:

```
OPENAI_API_KEY=sk-your-key-here
```

> **Important:** `.env.local` is gitignored. Never commit API keys.

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for production

```bash
npm run build
npm start
```

## API Reference

### `POST /api/analyze`

**Request body:**

```json
{
  "transcript": "Your meeting transcript text..."
}
```

**Success response:**

```json
{
  "success": true,
  "data": {
    "summary": "...",
    "projects": ["Project A"],
    "features_discussed": ["Feature X"],
    "tasks": [
      {
        "task": "Follow up with design team",
        "owner": "Alex",
        "deadline": "Friday",
        "project": "Project A"
      }
    ]
  }
}
```

**Error response:**

```json
{
  "success": false,
  "error": "Error message"
}
```

## GitHub without Git CLI

You can manage the repo entirely in the browser:

1. Go to [github.com/new](https://github.com/new) → create an empty repo (e.g. `ai-meeting-assistant`).
2. On the repo page: **Add file** → **Upload files** → drag in your project folder (skip `node_modules` if present).
3. Commit with message: `Initial scaffold`.
4. To edit later: open any file → pencil icon → edit → **Commit changes**.
5. To sync from your personal PC after you push there: on GitHub, click **Sync fork** or simply refresh — latest commits appear in the web UI and in Codespaces after `git pull`.

## Deployment (Vercel)

1. Push your code to GitHub (browser upload, Codespaces, or local Git)
2. Go to [vercel.com](https://vercel.com) and import your repository
3. Add `OPENAI_API_KEY` in Vercel project settings → Environment Variables
4. Deploy

Vercel runs the build in the cloud, so you do not need Node.js on your work laptop to deploy.

## License

Private project — all rights reserved.
