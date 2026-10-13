# Content Machine — Landing Page

A premium landing page that gates the Content Machine playbook (Google Drive PDF) behind a name + email form. Submissions flow into your personal Google Sheet automatically.

## How it works

- **Front end:** Static HTML/CSS/JS — no build step, no framework
- **Form backend:** Google Forms (no Worker, no server) — you own the data
- **Submissions:** Auto-flow into a Google Sheet on your personal Gmail
- **Deliverable:** Drive doc link shown after submit
- **Hosting:** Cloudflare Pages (free, fast, custom domain)

## File map

| File | Purpose |
|---|---|
| `index.html` | The landing page. Cream + clay editorial luxury aesthetic. |
| `config.js` | Google Form + Drive link + Sheet URL. **Edit if you change the form.** |
| `_headers` | Cloudflare Pages caching + security headers |
| `_redirects` | Cloudflare Pages URL redirects |
| `wrangler.toml` | Cloudflare Pages config |

## Live URLs (already configured)

- **Landing page:** `https://content-machine.pages.dev` (after deploy)
- **Form:** https://docs.google.com/forms/d/e/1FAIpQLSf4tST1pgWJDBgZbatHb2hY6VPgIcbYJ-04rP2zJZ12cCeEYw/viewform
- **Sheet:** https://docs.google.com/spreadsheets/d/1OHkJxLNIKSsi7xUHxtbxO4LHy2vG2MfBqBzFtickjSs/edit
- **Drive doc:** https://drive.google.com/file/d/1bQ7Cpy5ECW-TSggNrGJ3a9ZMbySn8xMk/view?usp=drivesdk

## Deploy to Cloudflare Pages (5 minutes)

### Option A — Git-based deploy (recommended, free auto-deploys)

1. **Push to GitHub**
   ```bash
   cd "C:\Users\ASUS\Documents\content-machine-landing"
   git add .
   git commit -m "feat: content machine landing page"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/content-machine-landing.git
   git push -u origin main
   ```

2. **Connect to Cloudflare**
   - Go to https://dash.cloudflare.com → Pages → Create application
   - Select "Connect to Git" → pick your GitHub repo
   - Build settings: leave everything blank (static site, no build)
   - Build command: (empty)
   - Build output: `/`
   - Click "Save and Deploy"

3. **Add custom domain** (optional)
   - Pages project → Custom domains → Set up a custom domain
   - e.g. `content-machine.theawesomebrief.com`

### Option B — Direct upload (no Git)

1. Go to https://dash.cloudflare.com → Pages → Create application
2. Select "Upload assets" → drag the entire folder → deploy
3. Done. You'll get a `*.pages.dev` URL immediately.

## Verify after deploy

1. Open the page → check the form renders
2. Fill in a test entry → click submit
3. Confirm:
   - You see the success state with the Drive link
   - The Drive link works
   - A new row appears in the Google Sheet (https://docs.google.com/spreadsheets/d/1OHkJxLNIKSsi7xUHxtbxO4LHy2vG2MfBqBzFtickjSs)
4. On mobile, check the form still works (the page collapses to a single column below 900px)

## If you want to change the form (later)

Edit `config.js` with new field IDs after editing the Google Form. The form IDs are the numbers after `entry.` in the form's HTML.

## Local preview

```bash
cd "C:\Users\ASUS\Documents\content-machine-landing"
python -m http.server 8000
# Open http://localhost:8000
```
