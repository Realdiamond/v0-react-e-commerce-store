"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { Minus, Plus, Heart, Share2, Truck, RotateCcw, Shield, ChevronDown } from "lucide-react"
import { CartProvider, useCart } from "@/components/cart-context"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CartDrawer from "@/components/cart-drawer"
import ProductCard from "@/components/product-card"
import { products } from "@/lib/products"

function ProductContent() {
  const params = useParams()
  const product = products.find((p) => p.id === Number.parseInt(params.id))
  const { addToCart } = useCart()
  const [selectedSize, setSelectedSize] = useState("M")
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || "")
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState("description")

  if (!product) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-light mb-4">Product not found</h1>
          <Link href="/shop" className="text-sm hover:text-accent transition-colors">
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedSize)
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <ol className="flex items-center gap-2 text-muted-foreground">
            <li>
              <Link href="/" className="hover:text-foreground transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/shop" className="hover:text-foreground transition-colors">
                Shop
              </Link>
            </li>
            <li>/</li>
            <li className="text-foreground">{product.name}</li>
          </ol>
        </nav>

        {/* Product */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-[4/5] bg-secondary overflow-hidden">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Details */}
          <div>
            <h1 className="text-3xl sm:text-4xl font-light mb-2">{product.name}</h1>
            <p className="text-2xl mb-6">${product.price.toFixed(2)}</p>
            <p className="text-muted-foreground leading-relaxed mb-8">{product.description}</p>

            {/* Color Selection */}
            <div className="mb-6">
              <h3 className="text-sm tracking-wider uppercase mb-3">Color: {selectedColor}</h3>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 border text-sm transition-colors ${
                      selectedColor === color
                        ? "border-foreground bg-primary text-primary-foreground"
                        : "border-border hover:border-accent"
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm tracking-wider uppercase">Size: {selectedSize}</h3>
                <Link
                  href="/size-guide"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Size Guide
                </Link>
              </div>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 border text-sm transition-colors ${
                      selectedSize === size
                        ? "border-foreground bg-primary text-primary-foreground"
                        : "border-border hover:border-accent"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <h3 className="text-sm tracking-wider uppercase mb-3">Quantity</h3>
              <div className="flex items-center border border-border w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-secondary transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-secondary transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={handleAddToCart}
                className="flex-1 py-4 bg-primary text-primary-foreground text-sm tracking-wider uppercase hover:bg-primary/90 transition-colors"
              >
                Add to Cart
              </button>
              <button
                className="p-4 border border-border hover:border-accent transition-colors"
                aria-label="Add to wishlist"
              >
                <Heart className="w-5 h-5" />
              </button>
              <button
                className="p-4 border border-border hover:border-accent transition-colors"
                aria-label="Share product"
              >
                <Share2 className="w-5 h-5" />
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 py-8 border-t border-b border-border">
              <div className="text-center">
                <Truck className="w-6 h-6 mx-auto mb-2" />
                <p className="text-xs tracking-wider uppercase">Free Shipping</p>
              </div>
              <div className="text-center">
                <RotateCcw className="w-6 h-6 mx-auto mb-2" />
                <p className="text-xs tracking-wider uppercase">Easy Returns</p>
              </div>
              <div className="text-center">
                <Shield className="w-6 h-6 mx-auto mb-2" />
                <p className="text-xs tracking-wider uppercase">Secure Payment</p>
              </div>
            </div>

            {/* Accordion */}
            <div className="mt-8 space-y-4">
              {["description", "materials", "shipping"].map((tab) => (
                <div key={tab} className="border-b border-border">
                  <button
                    onClick={() => setActiveTab(activeTab === tab ? "" : tab)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-sm tracking-wider uppercase">{tab}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${activeTab === tab ? "rotate-180" : ""}`} />
                  </button>
                  {activeTab === tab && (
                    <div className="pb-4 text-sm text-muted-foreground leading-relaxed">
                      {tab === "description" && product.description}
                      {tab === "materials" &&
                        "Premium quality materials sourced from sustainable suppliers. Care instructions included with purchase."}
                      {tab === "shipping" &&
                        "Free standard shipping on orders over $100. Express shipping available at checkout. International delivery to select countries."}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <h2 className="text-2xl font-light mb-8">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default function ProductPage() {
  return (
    <CartProvider>
      <Header />
      <CartDrawer />
      <main>
        <ProductContent />
      </main>
      <Footer />
    </CartProvider>
  )
}
