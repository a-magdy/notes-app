# Development Setup Guide

## Prerequisites

- **Node.js**: Version 18.0 or higher
- **npm**: Version 8.0 or higher (comes with Node.js)
- **Git**: For version control
- **Modern Browser**: Chrome, Firefox, Safari, or Edge

## Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/a-magdy/notes-app.git
cd notes-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173/`

## Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| **dev** | `npm run dev` | Start development server with HMR |
| **build** | `npm run build` | Build for production |
| **preview** | `npm run preview` | Preview production build locally |
| **lint** | `npm run lint` | Run ESLint to check code quality |
| **lint:fix** | `npm run lint:fix` | Auto-fix ESLint issues |
| **format** | `npm run format` | Format code with Prettier |
| **format:check** | `npm run format:check` | Check if code is properly formatted |

## Development Workflow

### 1. Code Quality

Before committing changes:

```bash
npm run lint
npm run format
```

### 2. Testing Changes

```bash
npm run dev
# Test features in browser
npm run build
npm run preview
# Test production build
```

### 3. Project Structure Guidelines

- **Components**: Place in `src/components/`
- **Hooks**: Place in `src/hooks/`
- **Types**: Add to `src/types/index.ts`
- **Utilities**: Place in `src/utils/`

## Configuration Files

### TypeScript Configuration

- `tsconfig.json` - Main TypeScript config
- `tsconfig.app.json` - App-specific config
- `tsconfig.node.json` - Node.js config

### Code Quality

- `.eslintrc` - ESLint configuration
- `.prettierrc` - Prettier formatting rules
- `.gitignore` - Git ignore patterns

### Build Configuration

- `vite.config.ts` - Vite build configuration
- `package.json` - Dependencies and scripts

## Browser Support

- **Chrome**: 88+
- **Firefox**: 85+
- **Safari**: 14+
- **Edge**: 88+

## Environment Variables

Currently using localStorage only. No environment variables required.

## Deployment Options

### Static Hosting (Recommended)

```bash
npm run build
# Upload dist/ folder to:
# - Netlify
# - Vercel
# - GitHub Pages
# - Firebase Hosting
```

### Vite Preview (Local Testing)

```bash
npm run build
npm run preview
```

## Troubleshooting

### Common Issues

**Port 5173 in use:**

- Vite automatically tries port 5174, 5175, etc.
- Or specify port: `npm run dev -- --port 3000`

**TypeScript errors:**

- Run `npm run lint` to see all issues
- Check `src/types/index.ts` for type definitions

**Build fails:**

- Ensure all TypeScript errors are resolved
- Run `npm run lint:fix` to auto-fix issues

### Development Tips

- Use browser DevTools for debugging
- Check browser console for runtime errors
- Use React Developer Tools extension
- ESLint and Prettier extensions for VS Code recommended
