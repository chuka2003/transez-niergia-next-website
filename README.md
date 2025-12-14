# Transez Nigeria – Static Website (Next.js + GitHub Pages)

This is a static marketing site for Transez Nigeria Limited, built with Next.js and deployed via GitHub Pages.

## 🚀 Features
- Next.js static export setup
- Tailwind CSS for styling
- Fully responsive design
- GitHub Actions workflow for automatic deploy

## 📦 Project Structure
```
├── components/         # Reusable Header/Footer
├── pages/              # Core site pages
├── public/             # Static assets (images, favicon)
├── styles/             # Tailwind CSS setup
├── .github/workflows/  # GitHub Pages deploy script
```

## 🛠️ Local Development
```bash
npm install
npm run dev
```

## 🏗️ Build & Export
```bash
npm run build
```

Exported files are in the `out/` directory if `output: 'export'` is set in `next.config.js`.

## 🚢 Deployment
Ensure GitHub Pages is enabled in your repo settings:
- Source: GitHub Actions
- Directory: `/ (root)` or `out`

## 📄 License
MIT
