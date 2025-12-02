"use client"

import { useCart } from "./cart-context"
import { X, Minus, Plus, Trash2 } from "lucide-react"
import { Link } from "react-router-dom"

export default function CartDrawer() {
  const { cart, isOpen, setIsOpen, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart()

  return (
    <>
      {/* Backdrop */}
      {isOpen && <div className="fixed inset-0 z-40 bg-black/50" onClick={() => setIsOpen(false)} />}

      {/* Drawer */}
      <div
        className={`fixed right-0 top-0 h-full w-full sm:w-96 bg-background z-50 shadow-xl transition-transform duration-300 ease-out overflow-y-auto ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-xl font-semibold">Shopping Cart</h2>
          <button onClick={() => setIsOpen(false)} className="hover:text-accent transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-96">
            <p className="text-muted-foreground mb-4">Your cart is empty</p>
            <Link
              to="/shop"
              className="px-6 py-2 bg-foreground text-background hover:bg-accent hover:text-accent-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="p-6 space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4 border-b border-border pb-4">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm">{item.name}</h3>
                    <p className="text-xs text-muted-foreground">{item.brand}</p>
                    <p className="font-semibold mt-2">${(item.price * item.quantity).toFixed(2)}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 hover:bg-secondary transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center text-sm">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 hover:bg-secondary transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="ml-auto p-1 text-destructive hover:bg-destructive/10 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border p-6">
              <div className="flex justify-between mb-4 text-lg font-semibold">
                <span>Total:</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <Link
                to="/checkout"
                className="w-full block text-center px-6 py-3 bg-foreground text-background hover:bg-accent hover:text-accent-foreground transition-colors mb-2 font-semibold"
                onClick={() => setIsOpen(false)}
              >
                Proceed to Checkout
              </Link>
              <button
                onClick={() => {
                  clearCart()
                  setIsOpen(false)
                }}
                className="w-full px-6 py-3 border border-border hover:bg-secondary transition-colors"
              >
                Clear Cart
              </button>
            </div>
          </>
        )}
      </div>
    </>
  )
}
