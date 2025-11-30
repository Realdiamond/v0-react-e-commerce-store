"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { products } from "@/lib/products"
import ProductCard from "@/components/product-card"

export default function FeaturedProducts() {
  const featuredProducts = products.filter((p) => p.featured).slice(0, 4)

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
        <div>
          <p className="text-sm tracking-widest uppercase text-muted-foreground mb-2">Curated Selection</p>
          <h2 className="text-3xl sm:text-4xl font-light">Featured Products</h2>
        </div>
        <Link
          href="/shop"
          className="group flex items-center gap-2 text-sm tracking-wider uppercase hover:text-accent transition-colors"
        >
          View All
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
