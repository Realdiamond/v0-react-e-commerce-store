import { Link } from "react-router-dom"
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-foreground text-background mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">TechHub</h3>
            <p className="text-sm text-background/70">
              Your premier destination for cutting-edge electronics and gadgets.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/shop" className="hover:text-accent transition-colors">
                  Shop All Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Shipping & Delivery
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Returns & Warranty
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Track Order
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:support@techhub.com" className="hover:text-accent transition-colors">
                  support@techhub.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+1234567890" className="hover:text-accent transition-colors">
                  1-800-TECH-HUB
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Tech District, Silicon Valley</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-8 border-t border-background/20 pt-8">
          <a href="#" className="hover:text-accent transition-colors">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-accent transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-accent transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-background/60 border-t border-background/20 pt-8">
          <p>&copy; 2025 TechHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
