"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { CartProvider } from "@/components/cart-context"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CartDrawer from "@/components/cart-drawer"

function CollectionsContent() {
  const collections = [
    {
      id: "spring-2024",
      name: "Spring 2024",
      description:
        "Embrace the season of renewal with our latest collection featuring light fabrics and fresh silhouettes.",
      image: "/placeholder.svg?height=800&width=600",
      itemCount: 24,
    },
    {
      id: "essentials",
      name: "The Essentials",
      description:
        "Timeless wardrobe staples designed to last. Quality basics that form the foundation of any sophisticated wardrobe.",
      image: "/placeholder.svg?height=800&width=600",
      itemCount: 18,
    },
    {
      id: "evening",
      name: "Evening Elegance",
      description:
        "Sophisticated pieces for special occasions. Make a statement with our curated selection of evening wear.",
      image: "/placeholder.svg?height=800&width=600",
      itemCount: 12,
    },
    {
      id: "sustainable",
      name: "Conscious Collection",
      description: "Our commitment to sustainability. Each piece crafted from recycled and organic materials.",
      image: "/placeholder.svg?height=800&width=600",
      itemCount: 16,
    },
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <div className="bg-secondary py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm tracking-widest uppercase text-muted-foreground mb-4">Explore</p>
          <h1 className="text-4xl sm:text-5xl font-light mb-4">Our Collections</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated collections, each telling its own story through exceptional design and
            craftsmanship.
          </p>
        </div>
      </div>

      {/* Collections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-20">
          {collections.map((collection, index) => (
            <div
              key={collection.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <Link href={`/shop?collection=${collection.id}`} className="block group">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={collection.image || "/placeholder.svg"}
                      alt={collection.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </Link>
              </div>
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <p className="text-sm tracking-widest uppercase text-muted-foreground mb-4">
                  {collection.itemCount} items
                </p>
                <h2 className="text-3xl sm:text-4xl font-light mb-4">{collection.name}</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">{collection.description}</p>
                <Link
                  href={`/shop?collection=${collection.id}`}
                  className="group inline-flex items-center gap-2 text-sm tracking-wider uppercase hover:text-accent transition-colors"
                >
                  Explore Collection
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function CollectionsPage() {
  return (
    <CartProvider>
      <Header />
      <CartDrawer />
      <main>
        <CollectionsContent />
      </main>
      <Footer />
    </CartProvider>
  )
}
