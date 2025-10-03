# Rizal Timeline

An interactive Next.js web application exploring the life, works, and legacy of Dr. José Rizal, the Philippines' national hero.

## Features

- **Home Page**: Welcome page with introduction to the project
- **Blogpost**: Comprehensive long-form article about Rizal's life, biological factors, environmental influences, and character analysis
- **References**: Curated list of sources and educational YouTube videos
- **About Us**: Information about the project creators

## Tech Stack

- **Framework**: Next.js 15.5.4 (App Router)
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI + shadcn/ui
- **Language**: TypeScript
- **Deployment**: Vercel

## Getting Started

### Prerequisites
- Node.js 20+ installed
- npm or yarn package manager

### Local Development

1. Clone the repository:
```bash
git clone <your-repo-url>
cd rizal-timeline
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deploy to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Import to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Framework Preset: **Next.js** (auto-detected)
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)
   - Click **Deploy**

3. **Done!** Your site will be live at `https://your-project.vercel.app`

### Option 2: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts and your site will be deployed

## Project Structure

```
rizal-timeline/
├── src/
│   ├── app/
│   │   ├── about/          # About page
│   │   ├── blogpost/       # Blog article page
│   │   ├── references/     # References page
│   │   ├── layout.tsx      # Root layout with navigation
│   │   └── page.tsx        # Home page
│   ├── components/         # Reusable UI components
│   └── data/              # Data files
├── public/
│   └── images/            # Static images
├── package.json
└── vercel.json            # Vercel configuration
```

## Build & Production

Build for production:
```bash
npm run build
```

Start production server locally:
```bash
npm start
```

## Environment Variables

No environment variables are required for this project.

## Authors

- **Daniel John Henrick D. Sanchez** - BS Computer Science
- **Lewis Carl Delimo Magdamo** - BS Computer Science

## License

This project is for educational purposes.

