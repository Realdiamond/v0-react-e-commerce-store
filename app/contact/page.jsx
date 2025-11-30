"use client"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { CartProvider } from "@/components/cart-context"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CartDrawer from "@/components/cart-drawer"

function ContactContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Contact form:", formData)
    setSubmitted(true)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      lines: ["123 Fashion Avenue", "New York, NY 10001"],
    },
    {
      icon: Phone,
      title: "Call Us",
      lines: ["+1 (555) 123-4567", "Mon-Fri 9am-6pm EST"],
    },
    {
      icon: Mail,
      title: "Email Us",
      lines: ["hello@atlardesign.com", "support@atlardesign.com"],
    },
    {
      icon: Clock,
      title: "Store Hours",
      lines: ["Mon-Sat: 10am - 8pm", "Sun: 11am - 6pm"],
    },
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <div className="bg-secondary py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm tracking-widest uppercase text-muted-foreground mb-4">Get in Touch</p>
          <h1 className="text-4xl sm:text-5xl font-light mb-4">Contact Us</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a question or need assistance? We are here to help. Reach out to our team and we will get back to you
            as soon as possible.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-light mb-8">Send us a Message</h2>

            {submitted ? (
              <div className="p-8 bg-secondary text-center">
                <h3 className="text-xl font-medium mb-2">Thank you for your message!</h3>
                <p className="text-muted-foreground mb-6">We will get back to you within 24-48 hours.</p>
                <button
                  onClick={() => {
                    setSubmitted(false)
                    setFormData({ name: "", email: "", subject: "", message: "" })
                  }}
                  className="text-sm hover:text-accent transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm tracking-wider uppercase mb-2">Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-4 border border-border bg-background focus:outline-none focus:border-accent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm tracking-wider uppercase mb-2">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-4 border border-border bg-background focus:outline-none focus:border-accent"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm tracking-wider uppercase mb-2">Subject</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-4 border border-border bg-background focus:outline-none focus:border-accent"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="order">Order Inquiry</option>
                    <option value="product">Product Question</option>
                    <option value="returns">Returns & Exchanges</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm tracking-wider uppercase mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-4 border border-border bg-background focus:outline-none focus:border-accent resize-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-primary text-primary-foreground text-sm tracking-wider uppercase hover:bg-primary/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-light mb-8">Contact Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {contactInfo.map((info) => (
                <div key={info.title} className="flex gap-4">
                  <div className="w-12 h-12 bg-secondary flex items-center justify-center shrink-0">
                    <info.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">{info.title}</h3>
                    {info.lines.map((line, i) => (
                      <p key={i} className="text-sm text-muted-foreground">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="mt-12">
              <div className="aspect-video bg-secondary flex items-center justify-center">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Store location map"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ContactPage() {
  return (
    <CartProvider>
      <Header />
      <CartDrawer />
      <main>
        <ContactContent />
      </main>
      <Footer />
    </CartProvider>
  )
}
