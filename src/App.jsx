import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { CartProvider } from "./components/cart-context"
import CartDrawer from "./components/cart-drawer"
import HomePage from "./pages/home"
import ShopPage from "./pages/shop"
import ProductPage from "./pages/product"
import LoginPage from "./pages/login"
import RegisterPage from "./pages/register"
import CheckoutPage from "./pages/checkout"
import AboutPage from "./pages/about"
import ContactPage from "./pages/contact"

function App() {
  return (
    <Router>
      <CartProvider>
        <CartDrawer />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </CartProvider>
    </Router>
  )
}

export default App
