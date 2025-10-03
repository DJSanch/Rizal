# Deployment Checklist for Vercel

## ✅ Pre-Deployment Checklist

- [x] Build passes successfully (`npm run build`)
- [x] All ESLint errors fixed
- [x] All TypeScript errors resolved
- [x] Images are in `public/images/` directory
- [x] All apostrophes escaped in JSX
- [x] No unused imports
- [x] README.md updated with deployment instructions

## 📋 Deployment Steps

### Step 1: Commit Your Changes

```bash
# Check status
git status

# Add all changes
git add .

# Commit with a meaningful message
git commit -m "Prepare for Vercel deployment"

# Push to GitHub
git push origin main
```

### Step 2: Deploy to Vercel

#### Option A: Vercel Dashboard (Easiest)

1. Go to [https://vercel.com](https://vercel.com)
2. Sign in with your GitHub account
3. Click **"New Project"**
4. Select your `Rizal` repository
5. Configure project:
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./rizal-timeline`
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)
   - **Install Command**: `npm install` (default)
6. Click **"Deploy"**
7. Wait 2-3 minutes for deployment to complete
8. Your site will be live at: `https://your-project-name.vercel.app`

#### Option B: Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Navigate to project directory
cd rizal-timeline

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? (select your account)
# - Link to existing project? No
# - What's your project's name? rizal-timeline
# - In which directory is your code located? ./
# - Want to override settings? No
```

### Step 3: Verify Deployment

1. Visit your deployed URL
2. Test all pages:
   - [ ] Home page loads correctly
   - [ ] Blogpost page displays content
   - [ ] References page shows videos
   - [ ] About page shows team info and images
3. Check navigation works between pages
4. Verify images load properly
5. Test on mobile and desktop

## 🔧 Post-Deployment

### Custom Domain (Optional)

1. In Vercel Dashboard, go to your project
2. Click **"Settings"** → **"Domains"**
3. Add your custom domain
4. Follow DNS configuration instructions

### Environment Variables (If Needed Later)

1. Go to project **"Settings"** → **"Environment Variables"**
2. Add variables for Production, Preview, and Development
3. Redeploy for changes to take effect

## 🚨 Troubleshooting

### Build Fails

```bash
# Test build locally first
npm run build

# Check for errors in output
# Fix any TypeScript or ESLint errors
# Commit and push fixes
```

### Images Not Loading

- Ensure images are in `public/images/` directory
- Check image paths start with `/images/` not `./images/`
- Verify image file names match exactly (case-sensitive)

### 404 Errors

- Ensure all page routes are in `src/app/` directory
- Check that each route has a `page.tsx` file
- Verify navigation links match route structure

## 📊 Deployment Info

- **Framework**: Next.js 15.5.4
- **Node Version**: 20.x (Vercel default)
- **Build Time**: ~2-3 minutes
- **Deployment Type**: Static + Server Components
- **CDN**: Vercel Edge Network (global)

## 🔗 Useful Links

- [Vercel Dashboard](https://vercel.com/dashboard)
- [Next.js Deployment Docs](https://nextjs.org/docs/app/building-your-application/deploying)
- [Vercel Documentation](https://vercel.com/docs)

## ✨ Success!

Once deployed, share your live URL:
- Production: `https://your-project.vercel.app`
- GitHub Repo: `https://github.com/yourusername/Rizal`

---

**Note**: Every push to `main` branch will automatically trigger a new deployment on Vercel.
