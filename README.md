# A Touch of Dutch - E-commerce Website

A premium, full-featured grocery e-commerce website built with React, Vite, and Tailwind CSS. This project showcases authentic Dutch groceries with a warm, cozy design inspired by Dutch culture.

## Features

- **Full E-commerce Functionality**: Browse products, view details, add to cart, manage quantities
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Shopping Cart**: Persistent cart with localStorage, quantity management, and real-time totals
- **Product Catalog**: Filterable products by category with sale pricing support
- **Multiple Pages**: Home, Shop, Product Detail, Cart, About, and Contact pages
- **Premium UI/UX**: Smooth animations, hover effects, and intuitive navigation
- **SEO Optimized**: Meta tags, Open Graph, and Twitter Card support

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **React Router DOM** - Client-side routing
- **Lucide React** - Icon library
- **Context API** - State management for cart

## Brand Colors

- **Primary (Soft Teal)**: `#4BA3A3`
- **Secondary (Warm Coral)**: `#F28B82`
- **Background (Off-White)**: `#F9F4EF`
- **Text (Charcoal Gray)**: `#2C2C2C`

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation with cart counter
│   ├── Footer.jsx          # Footer with links and social media
│   ├── HeroSection.jsx     # Hero banner for homepage
│   ├── ProductCard.jsx     # Reusable product card
│   ├── CategoryCard.jsx    # Category display card
│   └── Newsletter.jsx      # Newsletter signup section
├── pages/
│   ├── Home.jsx           # Homepage with hero, featured products, categories
│   ├── Shop.jsx           # Product listing with category filters
│   ├── ProductDetail.jsx  # Individual product page
│   ├── Cart.jsx           # Shopping cart page
│   ├── About.jsx          # About us page
│   └── Contact.jsx        # Contact form page
├── context/
│   └── CartContext.jsx    # Cart state management
├── data/
│   ├── products.json      # Product data (10 items)
│   └── categories.json    # Category data (5 categories)
├── App.jsx               # Main app component with routing
└── main.tsx              # App entry point
```

## Setup Instructions

### Prerequisites

- Node.js 16+ and npm installed

### Installation

1. Clone or download this project

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Customization Guide

### Updating Product Images

Replace image URLs in `src/data/products.json` with your own product images. Current images are from Pexels and serve as placeholders.

```json
{
  "id": 1,
  "title": "Your Product",
  "image": "https://your-image-url.com/image.jpg",
  ...
}
```

### Modifying Product Data

Edit `src/data/products.json` to:
- Add new products
- Update pricing
- Change descriptions
- Adjust stock levels
- Add/remove sale prices

### Updating Categories

Modify `src/data/categories.json` to add or edit product categories.

### Changing Brand Colors

Edit `tailwind.config.js` to update the color palette:

```js
colors: {
  'dutch-teal': '#4BA3A3',
  'dutch-coral': '#F28B82',
  'dutch-bg': '#F9F4EF',
  'dutch-text': '#2C2C2C',
}
```

### Integrating Payment Processor

To add checkout functionality:

1. Install your payment provider's SDK (e.g., Stripe, PayPal)
2. Create a checkout handler in `src/pages/Cart.jsx`
3. Update the "Proceed to Checkout" button onClick handler
4. Add necessary API routes or serverless functions

Example for Stripe:
```bash
npm install @stripe/stripe-js
```

### Connecting to a Backend

The current implementation uses static JSON files. To connect to a real backend:

1. Replace data imports with API calls:
```jsx
// Instead of:
import productsData from '../data/products.json';

// Use:
const [products, setProducts] = useState([]);
useEffect(() => {
  fetch('/api/products')
    .then(res => res.json())
    .then(data => setProducts(data));
}, []);
```

2. Update cart persistence to use backend API instead of localStorage
3. Add authentication for user accounts and order history

## Pages Overview

### Home (`/`)
- Hero banner with CTA
- Featured products grid (4 items)
- Category cards (5 categories)
- Why choose us section
- Newsletter signup

### Shop (`/shop`)
- All products display
- Category filter buttons
- Product count indicator
- Responsive grid layout

### Product Detail (`/product/:id`)
- Large product image
- Full description
- Quantity selector
- Add to cart functionality
- Related products section

### Cart (`/cart`)
- Cart items with images
- Quantity controls
- Price calculations
- Shipping info
- Checkout button

### About (`/about`)
- Company story
- Values section
- Team information
- Brand messaging

### Contact (`/contact`)
- Contact form
- Business hours
- Contact information
- FAQ link

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Optimizations

- Lazy loading for route components
- Optimized images from CDN
- Minimal bundle size with Vite
- CSS purging with Tailwind

## License

This project is provided as-is for educational and commercial use.

## Credits

- Images: [Pexels](https://pexels.com)
- Icons: [Lucide React](https://lucide.dev)
- Fonts: [Google Fonts - Inter](https://fonts.google.com/specimen/Inter)

---

**Need Help?** For questions or support, please open an issue or contact the development team.
