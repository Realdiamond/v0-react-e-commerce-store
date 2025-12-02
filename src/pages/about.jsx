import Header from "@/components/header"
import Footer from "@/components/footer"
import { Zap, Globe, Users, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">About TechHub</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're passionate about bringing the latest electronics and gadgets to tech enthusiasts worldwide.
            </p>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: Zap,
                title: "Innovation",
                description: "Always bringing cutting-edge technology to our customers",
              },
              {
                icon: Globe,
                title: "Global Reach",
                description: "Shipping to customers worldwide with reliable service",
              },
              {
                icon: Users,
                title: "Customer First",
                description: "Your satisfaction is our top priority",
              },
              {
                icon: Award,
                title: "Quality",
                description: "Premium products from trusted brands",
              },
            ].map((value, i) => {
              const Icon = value.icon
              return (
                <div key={i} className="text-center">
                  <Icon className="w-12 h-12 mx-auto mb-4 text-accent" />
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              )
            })}
          </div>

          {/* Mission */}
          <div className="bg-secondary rounded-lg p-12 mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground">
              At TechHub, we believe technology should be accessible to everyone. Our mission is to provide a curated
              selection of the latest electronics and gadgets, backed by expert knowledge and exceptional customer
              service. We're committed to helping you find the perfect tech solution for your lifestyle.
            </p>
          </div>

          {/* Team Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "50K+", label: "Happy Customers" },
              { number: "10K+", label: "Products Available" },
              { number: "24/7", label: "Customer Support" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-8 border border-border rounded-lg">
                <p className="text-4xl font-bold text-accent mb-2">{stat.number}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
