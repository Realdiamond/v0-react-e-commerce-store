import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const categories = [
  {
    name: "Outerwear",
    image: "/elegant-coat-fashion-photography-minimal.jpg",
    count: "24 items",
    href: "/shop?category=outerwear",
  },
  {
    name: "Dresses",
    image: "/elegant-dress-fashion-photography-studio.jpg",
    count: "32 items",
    href: "/shop?category=dresses",
  },
  {
    name: "Accessories",
    image: "/placeholder.svg?height=700&width=500",
    count: "18 items",
    href: "/shop?category=accessories",
  },
]

export default function CategoriesSection() {
  return (
    <section className="py-20 sm:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm tracking-widest uppercase text-muted-foreground mb-2">Browse by</p>
          <h2 className="text-3xl sm:text-4xl font-light">Categories</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link key={category.name} href={category.href} className="group relative aspect-[3/4] overflow-hidden">
              <img
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/40 transition-colors" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="text-2xl font-medium mb-1">{category.name}</h3>
                    <p className="text-sm opacity-80">{category.count}</p>
                  </div>
                  <div className="w-10 h-10 border border-primary-foreground rounded-full flex items-center justify-center group-hover:bg-primary-foreground group-hover:text-primary transition-colors">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
