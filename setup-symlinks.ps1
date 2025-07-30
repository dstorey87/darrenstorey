# PowerShell script to automate symlinking all dependencies from C:/artifacts/node_modules to the project node_modules
# Usage: Run this script from the project root (cv-darren-storey)

$ErrorActionPreference = 'Stop'

$projectDir = Split-Path -Parent $MyInvocation.MyCommand.Definition
$artifactsNodeModules = "C:/artifacts/node_modules"
$projectNodeModules = Join-Path $projectDir 'node_modules'

if (-Not (Test-Path $projectNodeModules)) {
    New-Item -ItemType Directory -Path $projectNodeModules | Out-Null
}

# Read dependencies from package.json
$packageJsonPath = Join-Path $projectDir 'package.json'
$packageJson = Get-Content $packageJsonPath -Raw | ConvertFrom-Json

$allDeps = @()
if ($packageJson.dependencies) { $allDeps += $packageJson.dependencies.PSObject.Properties.Name }
if ($packageJson.devDependencies) { $allDeps += $packageJson.devDependencies.PSObject.Properties.Name }
$allDeps = $allDeps | Sort-Object -Unique

foreach ($dep in $allDeps) {
    $target = Join-Path $artifactsNodeModules $dep
    $link = Join-Path $projectNodeModules $dep
    if (Test-Path $link) {
        Remove-Item $link -Force -Recurse
    }
    if (Test-Path $target) {
        New-Item -ItemType SymbolicLink -Path $link -Target $target | Out-Null
        Write-Host "Linked $dep"
    } else {
        Write-Warning "$dep not found in C:/artifacts/node_modules. Please install it there first."
    }
}
Write-Host "Symlinking complete."
