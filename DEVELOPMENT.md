# Development Guide — Company Laptop Friendly

This guide is for working on **AI Meeting Assistant** when you **cannot install Node.js or Git** on your work laptop.

## The strategy

```
Work laptop          GitHub (cloud)           Personal computer
     │                     │                         │
     │  Codespaces /       │    git clone            │
     │  StackBlitz         │◄────────────────────────│
     │  (browser IDE)      │    git push             │
     └────────────────────►│────────────────────────►│
              git push / pull (same repo)
```

**GitHub is the single source of truth.** Both machines work from the same repository.

---

## Option A: GitHub Codespaces (recommended)

Best if you want something close to Cursor/VS Code in the browser. Node.js and Git are already installed.

### One-time setup

1. **Create a GitHub account** (if needed): [github.com](https://github.com)

2. **Create a new repository**
   - Go to [github.com/new](https://github.com/new)
   - Repository name: `ai-meeting-assistant`
   - Choose **Public** (anyone can view the code — never upload `.env.local` or API keys)
   - Do **not** add README, .gitignore, or license (you already have them)
   - Click **Create repository**

3. **Upload your project files**
   - On the empty repo page, click **Add file** → **Upload files**
   - Drag in everything from your `AI Meeting assistant` folder
   - **Do not upload** `.env.local` (contains secrets) or `node_modules`
   - Commit message: `Initial scaffold`
   - Click **Commit changes**

4. **Open a Codespace**
   - On the repo page, click the green **Code** button
   - Open the **Codespaces** tab
   - Click **Create codespace on main**
   - Wait for the cloud environment to start (first time may take 1–2 minutes)

5. **Add your OpenAI API key**
   - In Codespaces: open the terminal (`` Ctrl+` ``)
   - Create `.env.local`:
     ```bash
     echo "OPENAI_API_KEY=sk-your-key-here" > .env.local
     ```
   - Or use **File → New File** and save as `.env.local` in the project root

6. **Install and run**
   ```bash
   npm install
   npm run dev
   ```
   - Codespaces will show a popup to open the app in the browser (port 3000)

### Daily workflow (work laptop)

```bash
git pull          # Get changes from your personal PC or GitHub web edits
npm run dev       # Run the app

# After making changes:
git add .
git commit -m "Describe what you changed"
git push
```

### On your personal computer (later)

```bash
git clone https://github.com/YOUR_USERNAME/ai-meeting-assistant.git
cd ai-meeting-assistant
npm install
echo "OPENAI_API_KEY=sk-your-key-here" > .env.local   # Windows PowerShell: set content manually
npm run dev
```

---

## Option B: StackBlitz (lighter browser IDE)

Good if Codespaces is slow to start or unavailable. Optimized for Next.js.

1. Upload the project to GitHub first (same steps as Option A, steps 2–3).

2. Go to [stackblitz.com](https://stackblitz.com)

3. Click **Import from GitHub** (sign in with GitHub) and select `ai-meeting-assistant`.

4. Add environment variable in StackBlitz:
   - Project settings → **Environment Variables**
   - Name: `OPENAI_API_KEY`
   - Value: your key

5. The dev server usually starts automatically.

StackBlitz has built-in Git: use the Git panel to commit and push without installing Git locally.

---

## Option C: GitHub web only (small edits, no running app)

Use this for tiny README or copy tweaks — **not** for running the full app.

1. Open your repo on github.com
2. Click a file → pencil icon → edit
3. **Commit changes**

To **run** the app without Node locally, you still need Codespaces, StackBlitz, or Vercel (deployed).

---

## Option D: Deploy on Vercel (run in production without local Node)

Use this to get a live URL you can open from any browser on your work laptop.

1. Put code on GitHub (upload or Codespaces push).

2. Go to [vercel.com](https://vercel.com) → sign in with GitHub.

3. **Add New Project** → import `ai-meeting-assistant`.

4. **Environment Variables** → add `OPENAI_API_KEY`.

5. Click **Deploy**.

6. Open the URL Vercel gives you (e.g. `ai-meeting-assistant.vercel.app`).

Vercel builds and runs Node in the cloud — nothing to install on your laptop.

---

## Option E: Portable Node/Git (only if IT allows .zip, no installer)

Some companies block installers but allow extracting a zip into your user folder. **Ask IT first** if unsure.

### Portable Node.js

1. Download the **Windows Binary (.zip)** from [nodejs.org](https://nodejs.org/en/download) (not the `.msi` installer).
2. Extract to e.g. `C:\Users\YOUR_NAME\tools\node\`
3. In PowerShell (current session only):
   ```powershell
   $env:Path = "C:\Users\YOUR_NAME\tools\node;" + $env:Path
   node --version
   npm --version
   ```

### Portable Git

1. Download **Portable Git** from [git-scm.com/download/win](https://git-scm.com/download/win) (portable edition).
2. Extract to e.g. `C:\Users\YOUR_NAME\tools\PortableGit\`
3. Use full path to run:
   ```powershell
   & "C:\Users\YOUR_NAME\tools\PortableGit\bin\git.exe" --version
   ```

If these are blocked by company policy, stick to **Codespaces + GitHub**.

---

## Git commands cheat sheet

| Command | Meaning |
|---------|---------|
| `git pull` | Download latest code from GitHub |
| `git status` | See what files you changed |
| `git add .` | Stage all changes for commit |
| `git commit -m "message"` | Save a snapshot with a description |
| `git push` | Upload commits to GitHub |
| `git clone URL` | Copy repo to a new machine (first time only) |

**Rule of thumb:** `pull` before you start, `push` when you finish.

---

## Syncing work laptop ↔ personal computer

**End of day on work laptop (Codespaces):**
```bash
git add .
git commit -m "Work session: added feature X"
git push
```

**Start of session on personal PC:**
```bash
git pull
npm run dev
```

**End of day on personal PC:**
```bash
git add .
git commit -m "Home session: fixed bug Y"
git push
```

**Next day on work laptop:**
```bash
git pull
```

Both machines always meet in the middle at **GitHub**.

---

## Security reminders

- Never commit `.env.local` or paste API keys into GitHub issues/chat.
- **Public repo:** fine for learning and portfolios — double-check `.env.local` is never uploaded (it's in `.gitignore`).
- **Private repo:** use if the code or prompts are confidential.
- On company laptops, follow your employer’s policy on OpenAI API keys and side projects.
