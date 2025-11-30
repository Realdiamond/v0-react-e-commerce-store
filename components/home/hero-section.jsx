"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/luxury-fashion-editorial-photography-minimal-elega.jpg" alt="Hero background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-primary-foreground px-4 max-w-4xl mx-auto">
        <p className="text-sm tracking-[0.4em] uppercase mb-6 opacity-90">New Collection 2024</p>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-tight mb-8 text-balance">
          Timeless elegance
          <br />
          <span className="italic font-normal">meets modern design</span>
        </h1>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-10 opacity-90 leading-relaxed">
          Discover our curated collection of premium fashion pieces crafted for those who appreciate refined simplicity.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/shop"
            className="group flex items-center gap-2 px-8 py-4 bg-primary-foreground text-primary text-sm tracking-wider uppercase hover:bg-primary-foreground/90 transition-colors"
          >
            Shop Collection
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/about"
            className="px-8 py-4 border border-primary-foreground text-primary-foreground text-sm tracking-wider uppercase hover:bg-primary-foreground/10 transition-colors"
          >
            Our Story
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-primary-foreground/50" />
        </div>
      </div>
    </section>
  )
}
