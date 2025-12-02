"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { products } from "@/lib/products"
import { useCart } from "@/components/cart-context"
import { useState, useMemo } from "react"
import { Star, ShoppingCart } from "lucide-react"
import { Link, useSearchParams } from "react-router-dom"

export default function ShopPage() {
  const { addToCart } = useCart()
  const [searchParams] = useSearchParams()
  const [addedToCart, setAddedToCart] = useState({})
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get("category") || "all")
  const [priceRange, setPriceRange] = useState([0, 5000])
  const [sortBy, setSortBy] = useState("featured")

  const categories = [
    "all",
    "phones",
    "laptops",
    "headphones",
    "earbuds",
    "cameras",
    "tablets",
    "wearables",
    "drones",
    "gaming",
    "monitors",
    "televisions",
    "audio",
  ]

  const filteredProducts = useMemo(() => {
    let filtered = products

    if (selectedCategory !== "all") {
      filtered = filtered.filter((p) => p.category === selectedCategory)
    }

    filtered = filtered.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1])

    if (sortBy === "price-low") {
      filtered.sort((a, b) => a.price - b.price)
    } else if (sortBy === "price-high") {
      filtered.sort((a, b) => b.price - a.price)
    } else if (sortBy === "rating") {
      filtered.sort((a, b) => b.rating - a.rating)
    }

    return filtered
  }, [selectedCategory, priceRange, sortBy])

  const handleAddToCart = (product) => {
    addToCart(product, 1)
    setAddedToCart({ ...addedToCart, [product.id]: true })
    setTimeout(() => {
      setAddedToCart({ ...addedToCart, [product.id]: false })
    }, 2000)
  }

  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold mb-8">Shop Electronics</h1>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-6">
              {/* Category Filter */}
              <div>
                <h3 className="font-semibold mb-4">Category</h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`block w-full text-left px-3 py-2 rounded transition-colors capitalize ${
                        selectedCategory === cat
                          ? "bg-accent text-accent-foreground font-semibold"
                          : "hover:bg-secondary"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h3 className="font-semibold mb-4">Price Range</h3>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="5000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], Number.parseInt(e.target.value)])}
                    className="w-full"
                  />
                  <p className="text-sm text-muted-foreground">
                    ${priceRange[0]} - ${priceRange[1]}
                  </p>
                </div>
              </div>

              {/* Sort */}
              <div>
                <h3 className="font-semibold mb-4">Sort By</h3>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 border border-border rounded bg-background"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </aside>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              <div className="text-sm text-muted-foreground mb-6">Showing {filteredProducts.length} products</div>

              {filteredProducts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-lg text-muted-foreground">No products found</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
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
                          {addedToCart[product.id] ? "Added!" : "Add"}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
