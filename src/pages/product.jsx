"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { useParams, Link } from "react-router-dom"
import { products } from "@/lib/products"
import { useCart } from "@/components/cart-context"
import { Star, ShoppingCart, Check } from "lucide-react"
import { useState } from "react"

export default function ProductPage() {
  const { id } = useParams()
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  const product = products.find((p) => p.id === Number.parseInt(id))

  if (!product) {
    return (
      <>
        <Header />
        <main className="pt-20 min-h-screen flex items-center justify-center">
          <p className="text-2xl text-muted-foreground">Product not found</p>
        </main>
        <Footer />
      </>
    )
  }

  const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)

  const handleAddToCart = () => {
    addToCart(product, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumb */}
          <div className="mb-8 text-sm text-muted-foreground">
            <Link to="/shop" className="hover:text-foreground transition-colors">
              Shop
            </Link>
            <span className="mx-2">›</span>
            <span>{product.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Product Image */}
            <div className="bg-secondary rounded-lg overflow-hidden h-96 lg:h-full flex items-center justify-center">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Details */}
            <div className="flex flex-col">
              <p className="text-accent font-semibold text-sm mb-2">{product.brand}</p>
              <h1 className="text-4xl font-bold mb-4">{product.name}</h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < Math.floor(product.rating) ? "fill-accent text-accent" : "text-muted"}`}
                    />
                  ))}
                </div>
                <span className="font-semibold">{product.rating}</span>
              </div>

              {/* Price */}
              <p className="text-3xl font-bold mb-6">${product.price.toFixed(2)}</p>

              {/* Description */}
              <p className="text-muted-foreground mb-6">{product.description}</p>

              {/* Specs */}
              <div className="mb-8">
                <h3 className="font-semibold mb-4">Specifications</h3>
                <ul className="space-y-2">
                  {product.specs.map((spec, i) => (
                    <li key={i} className="text-sm text-muted-foreground">
                      • {spec}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quantity */}
              <div className="flex items-center gap-4 mb-8">
                <label className="font-semibold">Quantity:</label>
                <div className="flex items-center border border-border rounded">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 hover:bg-secondary"
                  >
                    −
                  </button>
                  <span className="px-6 py-2">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 hover:bg-secondary">
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart */}
              <button
                onClick={handleAddToCart}
                className={`w-full flex items-center justify-center gap-2 px-6 py-4 rounded font-semibold text-lg transition-all ${
                  added
                    ? "bg-green-500 text-white"
                    : "bg-foreground text-background hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                {added ? (
                  <>
                    <Check className="w-5 h-5" />
                    Added to Cart!
                  </>
                ) : (
                  <>
                    <ShoppingCart className="w-5 h-5" />
                    Add to Cart
                  </>
                )}
              </button>

              {/* Additional Info */}
              <div className="mt-12 pt-8 border-t border-border space-y-4">
                <div>
                  <p className="font-semibold mb-2">Free Shipping</p>
                  <p className="text-sm text-muted-foreground">On orders over $100</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">1 Year Warranty</p>
                  <p className="text-sm text-muted-foreground">Full coverage included</p>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <section className="border-t border-border pt-16">
              <h2 className="text-3xl font-bold mb-8">Related Products</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((p) => (
                  <Link
                    key={p.id}
                    to={`/product/${p.id}`}
                    className="group border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all"
                  >
                    <div className="relative w-full h-48 bg-secondary overflow-hidden">
                      <img
                        src={p.image || "/placeholder.svg"}
                        alt={p.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-xs text-accent font-semibold mb-2">{p.brand}</p>
                      <p className="text-sm font-semibold line-clamp-2 mb-2">{p.name}</p>
                      <p className="font-bold">${p.price.toFixed(2)}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
