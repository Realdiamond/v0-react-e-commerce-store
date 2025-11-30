"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { CartProvider } from "@/components/cart-context"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CartDrawer from "@/components/cart-drawer"

function AboutContent() {
  const values = [
    {
      title: "Quality First",
      description: "Every piece is crafted from premium materials, ensuring longevity and timeless appeal.",
    },
    {
      title: "Sustainable Practices",
      description: "We are committed to ethical sourcing and environmentally conscious production methods.",
    },
    {
      title: "Timeless Design",
      description: "Our designs transcend trends, offering pieces that remain relevant season after season.",
    },
    {
      title: "Customer Focus",
      description: "Your satisfaction is our priority, with personalized service and attention to detail.",
    },
  ]

  const team = [
    {
      name: "Alexandra Chen",
      role: "Founder & Creative Director",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Marcus Williams",
      role: "Head of Design",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Sofia Rodriguez",
      role: "Head of Sustainability",
      image: "/placeholder.svg?height=400&width=400",
    },
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
        <img
          src="/placeholder.svg?height=800&width=1600"
          alt="Our atelier"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/40" />
        <div className="relative z-10 text-center text-primary-foreground px-4">
          <p className="text-sm tracking-widest uppercase mb-4 opacity-90">Our Story</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light">About ATLAR DESIGN</h1>
        </div>
      </div>

      {/* Story */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-sm tracking-widest uppercase text-muted-foreground mb-4">Since 2009</p>
              <h2 className="text-3xl sm:text-4xl font-light leading-tight mb-6">
                A journey of passion, <span className="italic">craft & purpose</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  ATLAR DESIGN was born from a simple belief: that exceptional fashion should not come at the expense of
                  ethics or the environment. Founded in 2009, we set out to create a brand that embodies timeless
                  elegance while championing sustainable practices.
                </p>
                <p>
                  Our journey began in a small atelier with a team of three passionate designers. Today, we have grown
                  into a global brand, but our core values remain unchanged. Every piece we create is a testament to our
                  commitment to quality, sustainability, and enduring style.
                </p>
                <p>
                  We work exclusively with suppliers who share our values, using organic and recycled materials wherever
                  possible. Our production process is transparent, and we take pride in knowing the story behind every
                  garment we create.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=700&width=560"
                alt="Our atelier"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 sm:py-28 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm tracking-widest uppercase text-muted-foreground mb-2">What We Stand For</p>
            <h2 className="text-3xl sm:text-4xl font-light">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-light">
                  {index + 1}
                </div>
                <h3 className="text-xl font-medium mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm tracking-widest uppercase text-muted-foreground mb-2">The People Behind</p>
            <h2 className="text-3xl sm:text-4xl font-light">Our Team</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="aspect-square mb-6 overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium mb-1">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-light mb-6">Ready to experience ATLAR?</h2>
          <p className="opacity-80 mb-8">
            Discover our collection of premium fashion pieces designed to stand the test of time.
          </p>
          <Link
            href="/shop"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-primary-foreground text-primary text-sm tracking-wider uppercase hover:bg-primary-foreground/90 transition-colors"
          >
            Shop Collection
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default function AboutPage() {
  return (
    <CartProvider>
      <Header />
      <CartDrawer />
      <main>
        <AboutContent />
      </main>
      <Footer />
    </CartProvider>
  )
}
