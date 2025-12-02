import { Link } from "react-router-dom"
import { Smartphone, Laptop, Headphones, Gamepad2, Camera, Watch } from "lucide-react"

const categories = [
  { name: "Phones", icon: Smartphone, color: "bg-blue-100", path: "/shop?category=phones" },
  { name: "Laptops", icon: Laptop, color: "bg-purple-100", path: "/shop?category=laptops" },
  { name: "Headphones", icon: Headphones, color: "bg-green-100", path: "/shop?category=headphones" },
  { name: "Gaming", icon: Gamepad2, color: "bg-red-100", path: "/shop?category=gaming" },
  { name: "Cameras", icon: Camera, color: "bg-yellow-100", path: "/shop?category=cameras" },
  { name: "Wearables", icon: Watch, color: "bg-pink-100", path: "/shop?category=wearables" },
]

export default function CategoriesSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Shop by Category</h2>
          <p className="text-muted-foreground text-lg">Browse electronics across different categories</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <Link
                key={category.name}
                to={category.path}
                className="flex flex-col items-center justify-center p-6 bg-background rounded-lg hover:shadow-lg transition-all duration-300 group"
              >
                <div className={`${category.color} p-4 rounded-full mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-foreground" />
                </div>
                <span className="font-semibold text-center">{category.name}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
