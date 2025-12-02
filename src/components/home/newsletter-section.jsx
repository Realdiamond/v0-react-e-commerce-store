"use client"

import { useState } from "react"
import { Mail } from "lucide-react"

export default function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setEmail("")
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-foreground text-background rounded-lg p-8 md:p-12 text-center">
          <div className="flex justify-center mb-4">
            <Mail className="w-12 h-12 text-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-lg text-background/80 mb-8">
            Get the latest tech news, product launches, and exclusive deals delivered to your inbox
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-3 rounded text-foreground placeholder-muted-foreground bg-background focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-accent text-accent-foreground hover:bg-accent/90 font-semibold rounded transition-colors whitespace-nowrap"
            >
              {submitted ? "Subscribed!" : "Subscribe"}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
