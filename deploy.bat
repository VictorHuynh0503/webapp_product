@echo off
echo 🚀 Deploying ShopNode to Vercel...

REM Check if Vercel CLI is installed
vercel --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Vercel CLI not found. Installing...
    npm install -g vercel
)

REM Build the project
echo 📦 Building project...
cd frontend
call npm run build
cd ..

REM Deploy to Vercel
echo 🌐 Deploying to Vercel...
vercel --prod

echo ✅ Deployment complete!
echo 🌍 Your website is now live on Vercel!
pause 