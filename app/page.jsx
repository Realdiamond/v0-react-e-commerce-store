"use client"

import { CartProvider } from "@/components/cart-context"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CartDrawer from "@/components/cart-drawer"
import HeroSection from "@/components/home/hero-section"
import FeaturedProducts from "@/components/home/featured-products"
import CategoriesSection from "@/components/home/categories-section"
import AboutSection from "@/components/home/about-section"
import TestimonialsSection from "@/components/home/testimonials-section"
import NewsletterSection from "@/components/home/newsletter-section"
import InstagramSection from "@/components/home/instagram-section"

export default function HomePage() {
  return (
    <CartProvider>
      <Header />
      <CartDrawer />
      <main>
        <HeroSection />
        <FeaturedProducts />
        <CategoriesSection />
        <AboutSection />
        <TestimonialsSection />
        <InstagramSection />
        <NewsletterSection />
      </main>
      <Footer />
    </CartProvider>
  )
}
