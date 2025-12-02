# Quick Start Guide - TechHub eCommerce

## 🚀 Setup in 3 Steps

### 1. Install Dependencies
\`\`\`bash
npm install
\`\`\`

### 2. Start Development Server
\`\`\`bash
npm run dev
\`\`\`

### 3. Open Browser
Visit `http://localhost:5173`

---

## 📝 File Structure

| File | Purpose |
|------|---------|
| `src/App.jsx` | Main app with routing |
| `src/pages/*.jsx` | All pages (home, shop, product, etc) |
| `src/components/` | Reusable components |
| `src/lib/products.js` | Product data |
| `src/index.css` | Tailwind styles & theme |
| `vite.config.js` | Vite configuration |
| `package.json` | Dependencies |

---

## 🛍️ Features You Have

✅ **25+ Electronics Products**
✅ **Shopping Cart with LocalStorage**
✅ **Multi-step Checkout**
✅ **Product Filters & Sorting**
✅ **Mobile Responsive Design**
✅ **Authentication Pages (UI Ready)**
✅ **About & Contact Pages**
✅ **Modern Minimalist Design**

---

## 🎨 Customize

### Change Store Name
1. Edit `src/components/header.jsx` - Change "TechHub" logo
2. Edit `src/components/footer.jsx` - Update company info
3. Edit `index.html` - Update page title

### Change Colors
Edit `src/index.css` theme variables:
- `--accent` - Primary color (blue)
- `--foreground` - Text color (black)
- `--background` - Background (white)

### Add More Products
Edit `src/lib/products.js` - Add new product objects

### Change Categories
Update categories in `src/pages/shop.jsx` and `src/lib/products.js`

---

## 📦 Production Build

\`\`\`bash
npm run build
\`\`\`

This creates optimized files in `dist/` folder ready to deploy.

### Deploy to Vercel (Free)
\`\`\`bash
npm i -g vercel
vercel
\`\`\`

### Deploy to Netlify
1. Push to GitHub
2. Connect repo to Netlify
3. Deploy automatically on push

---

## 🔌 Backend Integration

### Connect Products API
Replace in `src/lib/products.js`:
\`\`\`javascript
// Instead of static array:
export const products = [...]

// Use API:
export async function fetchProducts() {
  const response = await fetch('YOUR_API/products')
  return response.json()
}
\`\`\`

### Connect Authentication
Update `src/pages/login.jsx`:
\`\`\`javascript
const handleSubmit = async (e) => {
  e.preventDefault()
  const response = await fetch('YOUR_API/login', {
    method: 'POST',
    body: JSON.stringify({ email, password })
  })
  // Handle response
}
\`\`\`

### Connect Checkout
Update `src/pages/checkout.jsx` to POST order data to your backend.

---

## ❓ Common Questions

**Q: How do I add a new product?**
A: Add to `src/lib/products.js` array with id, name, price, category, etc.

**Q: Can I change the design?**
A: Yes! Edit Tailwind classes in JSX files or modify colors in `src/index.css`

**Q: How do I add payment integration?**
A: You can integrate Stripe, PayPal, etc. in the checkout page.

**Q: Is this production-ready?**
A: The frontend is. You'll need a backend for authentication and orders.

---

## 🎯 Next Steps

1. ✅ Run `npm run dev` to see it in action
2. ⚙️ Customize store name and colors
3. 📦 Add your product data
4. 🔗 Connect to your backend
5. 🚀 Deploy to production

Enjoy! 🎉
