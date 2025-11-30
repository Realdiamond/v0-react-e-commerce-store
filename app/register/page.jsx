"use client"

import Link from "next/link"
import { useState } from "react"
import { Eye, EyeOff, ArrowLeft, Check } from "lucide-react"
import { CartProvider } from "@/components/cart-context"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CartDrawer from "@/components/cart-drawer"

function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Register:", formData)
  }

  const passwordRequirements = [
    { text: "At least 8 characters", met: formData.password.length >= 8 },
    { text: "Contains a number", met: /\d/.test(formData.password) },
    { text: "Contains uppercase letter", met: /[A-Z]/.test(formData.password) },
  ]

  return (
    <div className="min-h-screen pt-20 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="text-center mb-10">
          <h1 className="text-3xl font-light mb-2">Create Account</h1>
          <p className="text-muted-foreground">Join the ATLAR family</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm tracking-wider uppercase mb-2">
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className="w-full px-4 py-4 border border-border bg-background focus:outline-none focus:border-accent transition-colors"
                required
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm tracking-wider uppercase mb-2">
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                className="w-full px-4 py-4 border border-border bg-background focus:outline-none focus:border-accent transition-colors"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm tracking-wider uppercase mb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-4 border border-border bg-background focus:outline-none focus:border-accent transition-colors"
              placeholder="your@email.com"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm tracking-wider uppercase mb-2">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full px-4 py-4 border border-border bg-background focus:outline-none focus:border-accent transition-colors pr-12"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            <div className="mt-3 space-y-2">
              {passwordRequirements.map((req, i) => (
                <div key={i} className="flex items-center gap-2 text-xs">
                  <Check className={`w-4 h-4 ${req.met ? "text-green-600" : "text-muted-foreground"}`} />
                  <span className={req.met ? "text-green-600" : "text-muted-foreground"}>{req.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm tracking-wider uppercase mb-2">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              className="w-full px-4 py-4 border border-border bg-background focus:outline-none focus:border-accent transition-colors"
              required
            />
            {formData.confirmPassword && formData.password !== formData.confirmPassword && (
              <p className="text-xs text-red-500 mt-2">Passwords do not match</p>
            )}
          </div>

          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" className="w-4 h-4 mt-1 border-border" required />
            <span className="text-sm text-muted-foreground">
              I agree to the{" "}
              <Link href="/terms" className="text-foreground hover:text-accent">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-foreground hover:text-accent">
                Privacy Policy
              </Link>
            </span>
          </label>

          <button
            type="submit"
            className="w-full py-4 bg-primary text-primary-foreground text-sm tracking-wider uppercase hover:bg-primary/90 transition-colors"
          >
            Create Account
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="text-foreground hover:text-accent transition-colors">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default function RegisterPage() {
  return (
    <CartProvider>
      <Header />
      <CartDrawer />
      <main>
        <RegisterForm />
      </main>
      <Footer />
    </CartProvider>
  )
}
