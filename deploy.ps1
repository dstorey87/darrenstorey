# CV Portfolio Deployment Script
# This script builds and deploys the React application with cache busting

Write-Host "🚀 Starting CV Portfolio Deployment..." -ForegroundColor Green

# Stop any running development servers
Write-Host "🛑 Stopping any running development servers..." -ForegroundColor Yellow
Get-Process -Name node -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue

# Clean previous builds
Write-Host "🧹 Cleaning previous builds..." -ForegroundColor Yellow
if (Test-Path "build") {
    Remove-Item -Recurse -Force "build"
    Write-Host "   ✓ Removed build directory" -ForegroundColor Gray
}
if (Test-Path "docs") {
    Remove-Item -Recurse -Force "docs"
    Write-Host "   ✓ Removed docs directory" -ForegroundColor Gray
}

# Clear npm cache to avoid any caching issues
Write-Host "🔄 Clearing npm cache..." -ForegroundColor Yellow
npm cache clean --force

# Install dependencies (in case anything is missing)
Write-Host "📦 Installing dependencies..." -ForegroundColor Yellow
npm install

# Build the application with production optimizations
Write-Host "🔨 Building application..." -ForegroundColor Yellow
npm run build-docs

# Check if build was successful
if (Test-Path "docs") {
    Write-Host "✅ Build successful!" -ForegroundColor Green
    
    # Add cache busting to the index.html
    $indexPath = "docs/index.html"
    if (Test-Path $indexPath) {
        $content = Get-Content $indexPath -Raw
        $timestamp = [DateTimeOffset]::UtcNow.ToUnixTimeSeconds()
        $content = $content -replace '\.js"', ".js?v=$timestamp`""
        $content = $content -replace '\.css"', ".css?v=$timestamp`""
        Set-Content $indexPath $content
        Write-Host "   ✓ Added cache busting parameters" -ForegroundColor Gray
    }
    
    # Deploy to GitHub Pages
    Write-Host "🌐 Deploying to GitHub Pages..." -ForegroundColor Yellow
    npm run deploy
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "🎉 Deployment successful!" -ForegroundColor Green
        Write-Host "Your site will be available at: https://dstorey87.github.io/darrenstorey" -ForegroundColor Cyan
        Write-Host "Note: GitHub Pages may take a few minutes to update" -ForegroundColor Yellow
    } else {
        Write-Host "❌ Deployment failed!" -ForegroundColor Red
        exit 1
    }
} else {
    Write-Host "❌ Build failed!" -ForegroundColor Red
    exit 1
}

Write-Host "`n✨ Deployment complete! Check your website in a few minutes." -ForegroundColor Green
