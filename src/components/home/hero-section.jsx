import { Link } from "react-router-dom"

export default function HeroSection() {
  return (
    <section className="relative w-full h-96 md:h-[500px] bg-gradient-to-r from-slate-900 to-slate-800 text-white flex items-center justify-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 text-balance">Next Generation Tech</h2>
        <p className="text-lg md:text-xl text-gray-200 mb-8 text-balance">
          Discover the latest in electronics and gadgets to power your digital lifestyle
        </p>
        <Link
          to="/shop"
          className="inline-block px-8 py-3 bg-accent text-accent-foreground hover:bg-accent/90 font-semibold transition-colors"
        >
          Shop Now
        </Link>
      </div>
    </section>
  )
}
