# 🚀 Deploy to Vercel - Complete Guide

This guide will walk you through deploying your ShopNode website to Vercel using multiple methods.

## 📋 Prerequisites

- [Node.js 18+](https://nodejs.org/) installed
- [Git](https://git-scm.com/) installed
- [GitHub account](https://github.com/) (for GitHub Actions deployment)
- [Vercel account](https://vercel.com/) (free tier available)

## 🎯 Method 1: Deploy via Vercel CLI (Recommended)

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Login to Vercel
```bash
vercel login
```

### Step 3: Deploy
```bash
# From the root directory
vercel --prod
```

**Or use the deployment script:**
- **Windows**: Double-click `deploy.bat`
- **Mac/Linux**: Run `./deploy.sh`

## 🌐 Method 2: Deploy via Vercel Dashboard

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

### Step 2: Connect to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Configure build settings:
   - **Framework Preset**: Other
   - **Root Directory**: `./frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

### Step 3: Deploy
Click "Deploy" and wait for the build to complete!

## ⚡ Method 3: GitHub Actions (Automated)

### Step 1: Set up GitHub Secrets
In your GitHub repository, go to **Settings > Secrets and variables > Actions** and add:

1. **VERCEL_TOKEN**
   - Get from [vercel.com/account/tokens](https://vercel.com/account/tokens)
   - Create a new token with full scope

2. **ORG_ID**
   - Get from [vercel.com/account](https://vercel.com/account)
   - Copy your Team ID

3. **PROJECT_ID**
   - Get from your Vercel project settings
   - Or run `vercel ls` to see project IDs

### Step 2: Push to GitHub
```bash
git add .
git commit -m "Add GitHub Actions deployment"
git push origin main
```

The workflow will automatically deploy on every push to main/master branch!

## 🔧 Configuration Files

### vercel.json
```json
{
  "version": 2,
  "builds": [
    {
      "src": "frontend/package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "frontend/dist"
      }
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/frontend/dist/index.html"
    }
  ]
}
```

### .github/workflows/deploy.yml
Automated deployment workflow for GitHub Actions.

## 📁 Project Structure for Deployment

```
website_nodejs/
├── frontend/           # React application
│   ├── src/           # Source code
│   ├── dist/          # Build output (generated)
│   ├── package.json   # Dependencies
│   └── ...
├── vercel.json        # Vercel configuration
├── .github/           # GitHub Actions
├── .gitignore         # Git ignore rules
└── deploy.sh          # Deployment script
```

## 🚀 Quick Deploy Commands

### Build and Deploy
```bash
# Build the project
cd frontend && npm run build && cd ..

# Deploy to Vercel
vercel --prod
```

### Update Existing Deployment
```bash
vercel --prod
```

### Preview Deployment
```bash
vercel
```

## 🔍 Troubleshooting

### Common Issues

1. **Build Fails**
   - Check Node.js version (18+ required)
   - Verify all dependencies are installed
   - Check for TypeScript errors

2. **404 Errors on Refresh**
   - Ensure `vercel.json` has proper routing
   - Check that SPA routing is configured

3. **Environment Variables**
   - Set in Vercel dashboard under Project Settings
   - Use `VERCEL_` prefix for Vercel-specific vars

4. **Domain Issues**
   - Configure custom domain in Vercel dashboard
   - Update DNS records as instructed

### Debug Commands
```bash
# Check Vercel status
vercel ls

# View deployment logs
vercel logs

# Check project info
vercel inspect
```

## 🌍 Post-Deployment

### 1. Custom Domain (Optional)
1. Go to Vercel dashboard
2. Select your project
3. Go to **Settings > Domains**
4. Add your custom domain
5. Update DNS records as instructed

### 2. Environment Variables
Set any environment variables in Vercel dashboard:
1. Go to **Settings > Environment Variables**
2. Add variables like:
   - `NODE_ENV=production`
   - `VITE_API_URL=https://your-api.com`

### 3. Analytics (Optional)
Enable Vercel Analytics:
1. Go to **Settings > Analytics**
2. Enable Web Analytics
3. Get insights into your website performance

## 📊 Performance Optimization

### Build Optimization
- ✅ Code splitting enabled
- ✅ Tree shaking for unused code
- ✅ Minified CSS and JavaScript
- ✅ Optimized images (if added)

### Vercel Features
- ✅ Global CDN
- ✅ Automatic HTTPS
- ✅ Edge functions support
- ✅ Serverless functions (if needed)

## 🔄 Continuous Deployment

### Automatic Deploys
- Every push to main/master branch
- Pull request previews
- Branch deployments

### Manual Deploys
```bash
vercel --prod
```

## 📱 Mobile Optimization

Your website is already optimized for mobile:
- ✅ Responsive design
- ✅ Touch-friendly interactions
- ✅ Fast loading on mobile networks
- ✅ PWA ready (can be enhanced)

## 🎉 Success!

After deployment, you'll get:
- 🌐 Live website URL
- 📊 Performance analytics
- 🔄 Automatic deployments
- 📱 Mobile optimization
- 🚀 Global CDN

## 🆘 Need Help?

- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Support](https://vercel.com/support)
- [GitHub Issues](https://github.com/vercel/vercel/issues)

---

**Your ShopNode website is now ready for the world! 🌍✨** 