"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    text: "ATLAR DESIGN has completely transformed my wardrobe. The quality is exceptional, and every piece I own from them has become a staple in my daily wear.",
    author: "Emma Richardson",
    role: "Fashion Editor",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    text: "The attention to detail in every garment is remarkable. You can feel the craftsmanship and quality the moment you put it on. Worth every penny.",
    author: "Michael Chen",
    role: "Creative Director",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    text: "Finally, a brand that understands sustainable luxury. Beautiful designs that don't compromise on ethics or quality. I'm a customer for life.",
    author: "Sofia Martinez",
    role: "Sustainability Consultant",
    image: "/placeholder.svg?height=80&width=80",
  },
]

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-20 sm:py-28 bg-secondary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm tracking-widest uppercase text-muted-foreground mb-2">Testimonials</p>
          <h2 className="text-3xl sm:text-4xl font-light">What Our Clients Say</h2>
        </div>

        <div className="relative">
          <Quote className="w-12 h-12 text-accent/30 mx-auto mb-6" />

          <div className="min-h-[200px] flex items-center justify-center">
            <div className="text-center">
              <p className="text-xl sm:text-2xl font-light leading-relaxed mb-8 italic">
                &ldquo;{testimonials[current].text}&rdquo;
              </p>
              <div className="flex items-center justify-center gap-4">
                <img
                  src={testimonials[current].image || "/placeholder.svg"}
                  alt={testimonials[current].author}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div className="text-left">
                  <p className="font-medium">{testimonials[current].author}</p>
                  <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="p-3 border border-border hover:border-accent transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-accent" : "bg-border"}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-3 border border-border hover:border-accent transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
