import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-semibold tracking-wider mb-2">ATLAR</h2>
            <p className="text-xs tracking-[0.3em] mb-4 opacity-80">DESIGN</p>
            <p className="text-sm leading-relaxed opacity-80">
              Crafting timeless elegance through premium fashion and lifestyle essentials.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm tracking-widest uppercase mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/shop" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Shop All
                </Link>
              </li>
              <li>
                <Link href="/collections" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Collections
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-sm tracking-widest uppercase mb-6">Customer Service</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/shipping" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/size-guide" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Size Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm tracking-widest uppercase mb-6">Stay Connected</h3>
            <p className="text-sm opacity-80 mb-4">Subscribe for exclusive offers and updates.</p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 text-sm focus:outline-none focus:border-primary-foreground/50"
              />
              <button className="px-4 py-3 bg-primary-foreground text-primary text-sm tracking-wider uppercase hover:bg-primary-foreground/90 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs opacity-60">© 2025 ATLAR DESIGN. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="opacity-60 hover:opacity-100 transition-opacity" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="opacity-60 hover:opacity-100 transition-opacity" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="opacity-60 hover:opacity-100 transition-opacity" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
