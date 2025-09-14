@echo off
echo Building Let'sPay Website for Production...
echo.

REM Check if node_modules exists
if not exist "node_modules" (
    echo Installing dependencies...
    npm install
    echo.
)

echo Running production build...
npm run build

if exist "build" (
    echo.
    echo ✅ Build completed successfully!
    echo.
    echo Build folder created at: %CD%\build
    echo.
    echo Contents of build folder:
    dir build
    echo.
    echo 📁 Upload the contents of the 'build' folder to your web server's public_html directory
    echo 🌐 Make sure index.html is in the root of public_html
) else (
    echo.
    echo ❌ Build failed! Please check the error messages above.
)

pause
