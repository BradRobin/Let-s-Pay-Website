Write-Host "Building Let'sPay Website for Production..." -ForegroundColor Green
Write-Host ""

# Check if node_modules exists
if (-not (Test-Path "node_modules")) {
    Write-Host "Installing dependencies..." -ForegroundColor Yellow
    npm install
    Write-Host ""
}

Write-Host "Running production build..." -ForegroundColor Yellow
npm run build

if (Test-Path "build") {
    Write-Host ""
    Write-Host "✅ Build completed successfully!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Build folder created at: $(Get-Location)\build" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "Contents of build folder:" -ForegroundColor Cyan
    Get-ChildItem build -Recurse | Format-Table Name, Length, LastWriteTime
    Write-Host ""
    Write-Host "📁 Upload the contents of the 'build' folder to your web server's public_html directory" -ForegroundColor Yellow
    Write-Host "🌐 Make sure index.html is in the root of public_html" -ForegroundColor Yellow
} else {
    Write-Host ""
    Write-Host "❌ Build failed! Please check the error messages above." -ForegroundColor Red
}

Read-Host "Press Enter to continue"
