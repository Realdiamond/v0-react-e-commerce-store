"use client"

import { useState } from "react"

export default function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail("")
    }
  }

  return (
    <section className="py-20 sm:py-28 bg-primary text-primary-foreground">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-light mb-4">Join the ATLAR Family</h2>
        <p className="opacity-80 mb-8">
          Subscribe to receive exclusive updates, early access to new collections, and special offers.
        </p>

        {submitted ? (
          <div className="py-4 px-6 border border-primary-foreground/30 inline-block">
            <p>Thank you for subscribing! Check your inbox soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-4 bg-transparent border border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground"
              required
            />
            <button
              type="submit"
              className="px-8 py-4 bg-primary-foreground text-primary text-sm tracking-wider uppercase hover:bg-primary-foreground/90 transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="text-xs opacity-60 mt-6">
          By subscribing, you agree to our Privacy Policy and consent to receive updates from ATLAR DESIGN.
        </p>
      </div>
    </section>
  )
}
