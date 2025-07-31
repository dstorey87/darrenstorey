# Quick Deploy Script
# This script quickly deploys changes with cache busting

Write-Host "🚀 Quick deploying changes..." -ForegroundColor Green

# Build and deploy
npm run deploy

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Deployment successful!" -ForegroundColor Green
    Write-Host "🌐 Site: https://dstorey87.github.io/darrenstorey" -ForegroundColor Cyan
    Write-Host "⏰ Changes may take 1-2 minutes to appear" -ForegroundColor Yellow
    
    # Commit and push source changes
    git add .
    git commit -m "Deploy: $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
    git push
    
    Write-Host "📝 Source code also committed and pushed" -ForegroundColor Green
} else {
    Write-Host "❌ Deployment failed!" -ForegroundColor Red
}
