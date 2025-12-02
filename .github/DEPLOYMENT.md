# Deployment Guide

## Quick Deployment Options

### Option 1: Vercel (Recommended - Free)

1. **Install Vercel CLI**
   \`\`\`bash
   npm i -g vercel
   \`\`\`

2. **Deploy**
   \`\`\`bash
   vercel
   \`\`\`

3. Done! Your site is live at `your-project.vercel.app`

---

### Option 2: Netlify

1. **Build the project**
   \`\`\`bash
   npm run build
   \`\`\`

2. **Drag & drop `dist/` to Netlify**
   - Go to netlify.com
   - Click "Add new site" → "Deploy manually"
   - Drag the `dist` folder

3. Done! Site is deployed

---

### Option 3: GitHub Pages

1. **Build**
   \`\`\`bash
   npm run build
   \`\`\`

2. **Push `dist/` to gh-pages branch**
   \`\`\`bash
   git subtree push --prefix dist origin gh-pages
   \`\`\`

3. Enable GitHub Pages in settings

---

### Option 4: Custom Server (Node)

1. **Build**
   \`\`\`bash
   npm run build
   \`\`\`

2. **Install serve**
   \`\`\`bash
   npm i -g serve
   \`\`\`

3. **Run**
   \`\`\`bash
   serve -s dist -l 3000
   \`\`\`

---

## Environment Variables

If you add a backend, create `.env.local`:

\`\`\`
VITE_API_URL=https://your-api.com
VITE_STRIPE_KEY=pk_test_...
\`\`\`

Access in code:
\`\`\`javascript
const apiUrl = import.meta.env.VITE_API_URL
\`\`\`

---

## Performance Tips

- Images are optimized with lazy loading
- Vite automatically code-splits routes
- Tailwind purges unused styles
- Bundle size ~40kb gzipped

---

## Domain Setup

### Vercel
1. Go to dashboard
2. Settings → Domains
3. Add your domain
4. Update DNS records

### Other platforms - refer to their docs

---

## Monitoring

After deployment, monitor:
- Performance: Lighthouse scores
- Errors: Error tracking (Sentry, LogRocket)
- Analytics: Google Analytics, Plausible

---

Ready to deploy? Choose your platform and you're done! 🚀
