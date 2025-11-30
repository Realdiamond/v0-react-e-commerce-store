"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, ShoppingBag, User, Search } from "lucide-react"
import { useCart } from "./cart-context"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { cartCount, setIsOpen } = useCart()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/shop" className="text-sm tracking-widest uppercase hover:text-accent transition-colors">
              Shop
            </Link>
            <Link href="/collections" className="text-sm tracking-widest uppercase hover:text-accent transition-colors">
              Collections
            </Link>
            <Link href="/about" className="text-sm tracking-widest uppercase hover:text-accent transition-colors">
              About
            </Link>
          </nav>

          {/* Logo */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2">
            <h1 className="text-2xl sm:text-3xl font-semibold tracking-wider">ATLAR</h1>
            <p className="text-[10px] tracking-[0.3em] text-center text-muted-foreground">DESIGN</p>
          </Link>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button className="hidden sm:block p-2 hover:text-accent transition-colors" aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <Link href="/login" className="p-2 hover:text-accent transition-colors" aria-label="Account">
              <User className="w-5 h-5" />
            </Link>
            <button
              onClick={() => setIsOpen(true)}
              className="p-2 hover:text-accent transition-colors relative"
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-accent-foreground text-xs rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <nav className="flex flex-col py-4">
            <Link
              href="/shop"
              className="px-6 py-3 text-lg tracking-wider hover:bg-secondary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              href="/collections"
              className="px-6 py-3 text-lg tracking-wider hover:bg-secondary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Collections
            </Link>
            <Link
              href="/about"
              className="px-6 py-3 text-lg tracking-wider hover:bg-secondary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 text-lg tracking-wider hover:bg-secondary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
