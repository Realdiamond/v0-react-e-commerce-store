"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { useState } from "react"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: "", email: "", subject: "", message: "" })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-muted-foreground">We'd love to hear from you. Get in touch with our team.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Mail,
                title: "Email",
                value: "support@techhub.com",
              },
              {
                icon: Phone,
                title: "Phone",
                value: "1-800-TECH-HUB",
              },
              {
                icon: MapPin,
                title: "Location",
                value: "Tech District, Silicon Valley",
              },
            ].map((contact, i) => {
              const Icon = contact.icon
              return (
                <div key={i} className="text-center">
                  <Icon className="w-12 h-12 mx-auto mb-4 text-accent" />
                  <h3 className="text-xl font-bold mb-2">{contact.title}</h3>
                  <p className="text-muted-foreground">{contact.value}</p>
                </div>
              )
            })}
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto bg-secondary rounded-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 border border-border rounded focus:outline-none focus:ring-2 focus:ring-accent bg-background"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 border border-border rounded focus:outline-none focus:ring-2 focus:ring-accent bg-background"
                />
              </div>

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border rounded focus:outline-none focus:ring-2 focus:ring-accent bg-background"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border rounded focus:outline-none focus:ring-2 focus:ring-accent bg-background resize-none"
              ></textarea>

              <button
                type="submit"
                className={`w-full px-6 py-3 rounded font-semibold transition-colors ${
                  submitted
                    ? "bg-green-500 text-white"
                    : "bg-foreground text-background hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                {submitted ? "Message Sent!" : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
