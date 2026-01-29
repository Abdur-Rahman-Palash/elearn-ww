# EduLearn - EdTech Platform

A complete, production-quality edtech homepage built with Next.js 14 App Router, TypeScript, and Tailwind CSS. Inspired by 10 Minute School, this platform provides a modern learning experience for students in Bangladesh.

## Features

- 🎓 **Modern EdTech Design** - Clean, professional interface similar to leading educational platforms
- 📱 **Mobile-First Responsive** - Optimized for all devices with smooth interactions
- 🎨 **Premium Animations** - Smooth transitions and micro-interactions using Framer Motion
- ♿ **Accessibility First** - WCAG compliant with semantic HTML and ARIA labels
- 🔍 **SEO Optimized** - Meta tags, structured data, and Lighthouse-friendly
- 🚀 **Performance** - Optimized images, lazy loading, and efficient code splitting

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout with SEO metadata
│   └── page.tsx             # Homepage assembly
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx       # Navigation with mega menu
│   │   └── Footer.tsx       # Comprehensive footer
│   └── home/
│       ├── Hero.tsx         # Hero section with animations
│       ├── Categories.tsx   # Course categories grid
│       ├── FeaturedCourses.tsx # Featured courses carousel
│       ├── LearningProcess.tsx # 4-step learning process
│       ├── Benefits.tsx     # Student benefits list
│       ├── Batches.tsx      # Online batches with tabs
│       ├── Features.tsx     # Platform features grid
│       ├── Testimonials.tsx # Student testimonials slider
│       └── AppPromo.tsx     # Mobile app promotion
├── data/
│   ├── courses.ts           # Course data and types
│   ├── categories.ts       # Category data and types
│   ├── batches.ts          # Batch data and types
│   └── testimonials.ts     # Testimonial data and types
└── public/                  # Static assets (images, icons)
```

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Key Features

### Navigation
- Sticky header with blur effect on scroll
- Mega menu dropdowns for course categories
- Language toggle (EN/BN)
- Mobile-responsive hamburger menu

### Homepage Sections
1. **Hero** - Eye-catching landing with quick course buttons
2. **Categories** - Interactive course category grid
3. **Featured Courses** - Popular courses with ratings and pricing
4. **Learning Process** - 4-step visual guide
5. **Benefits** - Student advantages with icons
6. **Batches** - Tabbed batch listings (Academic/Admission/Skills)
7. **Features** - Platform capabilities grid
8. **Testimonials** - Auto-rotating student reviews
9. **App Promotion** - Mobile app download section

### Design System
- Consistent color palette (primary/secondary gradients)
- Typography scale with Inter font
- Component variants and reusable styles
- Smooth hover states and transitions

## Performance Optimizations

- **Image Optimization**: Next.js Image component with WebP/AVIF
- **Code Splitting**: Automatic route-based splitting
- **Lazy Loading**: Intersection Observer for sections
- **CSS Optimization**: PurgeCSS in production
- **Bundle Analysis**: Optimized dependencies

## Accessibility Features

- Semantic HTML5 structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Focus management
- Color contrast compliance

## SEO Features

- Comprehensive meta tags
- Open Graph and Twitter cards
- Structured data markup
- XML sitemap ready
- Robots.txt configuration
- Canonical URLs

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
```bash
npm run build
npm run start
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For questions or support, please open an issue in the GitHub repository.

---

**Built with ❤️ for the education community in Bangladesh**
