"use client"

import { Link } from "react-router-dom"
import { products } from "@/lib/products"
import { Star, ShoppingCart } from "lucide-react"
import { useCart } from "@/components/cart-context"
import { useState } from "react"

export default function FeaturedProducts() {
  const { addToCart } = useCart()
  const [addedToCart, setAddedToCart] = useState({})

  const featured = products.slice(0, 8)

  const handleAddToCart = (product) => {
    addToCart(product, 1)
    setAddedToCart({ ...addedToCart, [product.id]: true })
    setTimeout(() => {
      setAddedToCart({ ...addedToCart, [product.id]: false })
    }, 2000)
  }

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Featured Products</h2>
          <p className="text-muted-foreground text-lg">Handpicked electronics and gadgets for tech enthusiasts</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product) => (
            <div
              key={product.id}
              className="group border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              {/* Image */}
              <div className="relative w-full h-64 bg-secondary overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <p className="text-xs text-accent font-semibold mb-2">{product.brand}</p>
                <Link
                  to={`/product/${product.id}`}
                  className="text-sm font-semibold hover:text-accent transition-colors line-clamp-2"
                >
                  {product.name}
                </Link>

                {/* Rating */}
                <div className="flex items-center gap-1 my-2">
                  <Star className="w-4 h-4 fill-accent text-accent" />
                  <span className="text-sm font-medium">{product.rating}</span>
                </div>

                {/* Price */}
                <p className="text-lg font-bold mb-4">${product.price.toFixed(2)}</p>

                {/* Add to Cart Button */}
                <button
                  onClick={() => handleAddToCart(product)}
                  className={`w-full flex items-center justify-center gap-2 px-4 py-2 rounded font-semibold transition-all ${
                    addedToCart[product.id]
                      ? "bg-green-500 text-white"
                      : "bg-foreground text-background hover:bg-accent hover:text-accent-foreground"
                  }`}
                >
                  <ShoppingCart className="w-4 h-4" />
                  {addedToCart[product.id] ? "Added!" : "Add to Cart"}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block px-8 py-3 border-2 border-foreground hover:bg-foreground hover:text-background transition-colors font-semibold"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}
