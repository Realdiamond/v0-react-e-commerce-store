import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function AboutSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="/placeholder.svg?height=800&width=640"
                alt="Our atelier"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent hidden lg:flex items-center justify-center text-accent-foreground p-6 text-center">
              <div>
                <p className="text-4xl font-light mb-1">15+</p>
                <p className="text-xs tracking-wider uppercase">Years of Excellence</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-sm tracking-widest uppercase text-muted-foreground mb-4">Our Story</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight mb-6">
              Crafting timeless pieces with <span className="italic">passion & purpose</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              At ATLAR DESIGN, we believe that true luxury lies in the details. Every piece in our collection is
              thoughtfully designed and meticulously crafted to stand the test of time, both in quality and style.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our commitment to sustainable practices and ethical production ensures that when you choose ATLAR, you are
              not just investing in exceptional fashion, but in a better future for our planet.
            </p>
            <div className="flex flex-wrap gap-8 mb-8">
              <div>
                <p className="text-3xl font-light mb-1">50+</p>
                <p className="text-sm text-muted-foreground">Countries Served</p>
              </div>
              <div>
                <p className="text-3xl font-light mb-1">10K+</p>
                <p className="text-sm text-muted-foreground">Happy Customers</p>
              </div>
              <div>
                <p className="text-3xl font-light mb-1">100%</p>
                <p className="text-sm text-muted-foreground">Sustainable Materials</p>
              </div>
            </div>
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 text-sm tracking-wider uppercase hover:text-accent transition-colors"
            >
              Learn More About Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
