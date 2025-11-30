"use client"

import Link from "next/link"
import { Heart } from "lucide-react"
import { useState } from "react"

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false)
  const [isWishlisted, setIsWishlisted] = useState(false)

  return (
    <div className="group" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <Link href={`/product/${product.id}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-secondary mb-4">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? "scale-105" : "scale-100"}`}
          />
          <button
            onClick={(e) => {
              e.preventDefault()
              setIsWishlisted(!isWishlisted)
            }}
            className="absolute top-4 right-4 p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-colors"
            aria-label="Add to wishlist"
          >
            <Heart className={`w-4 h-4 ${isWishlisted ? "fill-accent text-accent" : ""}`} />
          </button>
          <div
            className={`absolute bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-sm transform transition-transform duration-300 ${isHovered ? "translate-y-0" : "translate-y-full"}`}
          >
            <button className="w-full py-3 bg-primary text-primary-foreground text-xs tracking-wider uppercase hover:bg-primary/90 transition-colors">
              Quick Add
            </button>
          </div>
        </div>
        <h3 className="text-base font-medium mb-1">{product.name}</h3>
        <p className="text-sm text-muted-foreground">${product.price.toFixed(2)}</p>
      </Link>
    </div>
  )
}
