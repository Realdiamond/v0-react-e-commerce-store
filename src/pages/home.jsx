import Header from "@/components/header"
import Footer from "@/components/footer"
import HeroSection from "@/components/home/hero-section"
import FeaturedProducts from "@/components/home/featured-products"
import CategoriesSection from "@/components/home/categories-section"
import NewsletterSection from "@/components/home/newsletter-section"

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <HeroSection />
        <FeaturedProducts />
        <CategoriesSection />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  )
}
