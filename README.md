# DeFiConnect POAP Adventure Platform

🎯 **Transform DeFiConnect into a living treasure map!**

An interactive POAP (Proof of Attendance Protocol) collection platform designed to gamify the DeFi event experience. Attendees can explore the venue, collect exclusive POAPs, and unlock rewards as they progress through their adventure.

## 🌟 Features

### 🏆 Core Functionality
- **Interactive POAP Collection**: Browse and discover 20 different POAPs from various event activities
- **Smart Search**: Validate and search for POAP collections using email, wallet address (0x...), or ENS (.eth)
- **Reward System**: Unlock exclusive rewards at 10, 15, and 20 POAP milestones
- **Interactive Map**: Navigate through different venue levels with POAP location markers
- **Mobile-First Design**: Optimized sliders and touch interactions for mobile users

### 🎨 Design System
- **Glassmorphism UI**: Modern glass-like effects with subtle transparency and blur
- **Custom Typography**: Monospace821 font family for authentic tech aesthetic
- **Responsive Layout**: Seamless experience across desktop, tablet, and mobile
- **Consistent Branding**: DeFi-red color scheme with professional white accents

### 📱 User Experience
- **Smooth Animations**: Fluid transitions and interactive elements
- **Touch-Friendly**: Swipe navigation and touch-optimized controls
- **Accessibility**: ARIA labels and keyboard navigation support
- **Performance**: Optimized images and efficient component rendering

## 🛠️ Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Font**: Rubik (Google Fonts)
- **Images**: Next.js Image optimization

## 📱 Sections

1. **Hero Section**: Event branding with date and description
2. **About Section**: "Discover. Collect. Unlock." with 3 cards (mobile slider)
3. **Collection Section**: POAP collection with search and pagination (2 pages desktop, 5 pages mobile)
4. **Rewards Section**: 3 reward tiers with mobile slider (3 pages)
5. **Map Section**: Interactive venue map with level toggles
6. **How to Collect**: 3-step guide for POAP collection
7. **Footer**: Event details and quick links

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub repository
2. Connect repository to Vercel
3. Deploy with default settings
4. The site will be automatically deployed at your Vercel URL

### Manual Deployment

```bash
# Build the application
npm run build

# The build output will be in .next/ directory
# Deploy this directory to your hosting provider
```

## 📸 Image Assets

Current implementation uses placeholder images. For production deployment:

1. Replace placeholder images in `/public/assets/` with actual images
2. Update image paths in `/src/assets/images.ts`
3. Ensure all POAP images, logos, and graphics are optimized for web

### Required Images

- DeFiConnect logos (various sizes)
- POAP collection images
- Reward images (collector pin, badges)
- Background graphics and icons
- Map visualizations for each level

## 🎨 Design System

The project uses a custom design system based on the Figma specifications:

- **Colors**: DeFi Red (#E96652), DeFi Red Dark (#F66D68)
- **Typography**: Rubik font family with various weights
- **Spacing**: Consistent padding and margins
- **Responsive Breakpoints**: Mobile-first approach

## 📱 Mobile Features

- **Touch Sliders**: Native scroll behavior with snap points
- **Pagination**: Visual dots for section navigation
- **Responsive Grid**: 2 columns mobile, 5 columns desktop for POAP collection
- **Mobile Menu**: Collapsible navigation

## 🔧 Configuration

- `next.config.js`: Next.js configuration
- `tailwind.config.ts`: Tailwind CSS customization
- `tsconfig.json`: TypeScript configuration
- `postcss.config.js`: PostCSS plugins

## 📋 Todo for Production

- [ ] Replace placeholder images with actual assets
- [ ] Set up analytics tracking
- [ ] Add POAP search functionality
- [ ] Connect to actual POAP data source
- [ ] Add loading states for dynamic content
- [ ] Implement error boundaries
- [ ] Add performance monitoring

## 🐛 Known Issues

- Image assets are currently placeholders
- Search functionality is not connected to backend
- Map interaction could be enhanced with actual floor plans

## 📞 Support

For questions about deployment or customization, refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vercel Deployment Guide](https://vercel.com/docs)