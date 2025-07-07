# Expert Engineering Solution

A Next.js-based website for Expert Engineering Solution, featuring modern UI components and responsive design.

## 🚀 Getting Started

This project uses **pnpm** as the package manager. Make sure you have pnpm installed:

```bash
npm install -g pnpm
```

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm type-check` - Run TypeScript type checking
- `pnpm clean` - Clean all generated files
- `pnpm fresh-install` - Force reinstall all dependencies

### Package Manager

This project uses **pnpm** for dependency management. If you encounter any issues:

1. **Clean and reinstall:**

   ```bash
   pnpm clean
   pnpm fresh-install
   ```

2. **Update dependencies:**

   ```bash
   pnpm update
   ```

3. **Add new dependencies:**
   ```bash
   pnpm add package-name
   pnpm add -D package-name  # for dev dependencies
   ```

### Development

The project is built with:

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Radix UI** - Accessible components
- **Lucide React** - Icons

### Project Structure

```
├── app/                 # Next.js app directory
├── components/          # Reusable UI components
├── lib/                 # Utility functions
├── public/             # Static assets
└── styles/             # Global styles
```

## 🎨 Features

- Responsive design
- Dark/light theme support
- Modern animations
- SEO optimized
- Accessible components
- TypeScript support

## 📝 Notes

- Always use `pnpm` commands instead of `npm` or `yarn`
- The project uses Next.js 15 with the app router
- All components are built with Radix UI for accessibility
- Styling is done with Tailwind CSS
