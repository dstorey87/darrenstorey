# Development Server Refresh Script
# This script restarts the development server with cache clearing

Write-Host "🔄 Refreshing development server..." -ForegroundColor Green

# Stop any running development servers
Write-Host "🛑 Stopping development servers..." -ForegroundColor Yellow
Get-Process -Name node -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue
Start-Sleep -Seconds 2

# Clear npm cache
Write-Host "🧹 Clearing cache..." -ForegroundColor Yellow
npm cache clean --force

# Start development server with cache disabled
Write-Host "🚀 Starting development server..." -ForegroundColor Green
Write-Host "Server will open at: http://localhost:3000" -ForegroundColor Cyan
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Yellow

# Set environment variable to disable cache
$env:GENERATE_SOURCEMAP = "false"
$env:FAST_REFRESH = "false"

npm start
