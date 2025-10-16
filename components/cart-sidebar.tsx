"use client"

import { X, Trash2, Plus, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"
import { useRouter } from "next/navigation"

interface CartSidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  const { items, removeFromCart, updateQuantity, clearCart } = useCart()
  const router = useRouter()

  const calculateTotal = () => {
    return items.reduce((total, item) => {
      const price = Number.parseFloat(item.price.replace(/[$,]/g, ""))
      return total + price * item.amount
    }, 0)
  }

  const handleBuy = () => {
    if (items.length > 0) {
      router.push("/checkout")
      onClose()
    }
  }

  const handleIncrement = (id: string, currentAmount: number) => {
    updateQuantity(id, currentAmount + 1)
  }

  const handleDecrement = (id: string, currentAmount: number) => {
    if (currentAmount > 1) {
      updateQuantity(id, currentAmount - 1)
    } else {
      removeFromCart(id)
    }
  }

  return (
    <>
      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/50 z-40 transition-opacity" onClick={onClose} />}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">Carrito de Compras</h2>
            <Button variant="ghost" size="icon" onClick={onClose} className="hover:bg-gray-100 cursor-pointer">
              <X className="w-5 h-5 text-gray-900" />
            </Button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-500">
                <p className="text-lg">Tu carrito está vacío</p>
                <p className="text-sm mt-2">Agrega productos para comenzar</p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-orange-500 transition-colors"
                  >
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                      <div className="flex items-center gap-2 mt-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 bg-white border-gray-300 hover:bg-gray-100 cursor-pointer"
                          onClick={() => handleDecrement(item.id, item.amount)}
                        >
                          <Minus className="w-4 h-4 text-gray-900" />
                        </Button>
                        <span className="text-sm font-medium text-gray-900 min-w-[3rem] text-center">
                          {item.amount}
                        </span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 bg-white border-gray-300 hover:bg-gray-100 cursor-pointer"
                          onClick={() => handleIncrement(item.id, item.amount)}
                        >
                          <Plus className="w-4 h-4 text-gray-900" />
                        </Button>
                      </div>
                      <p className="text-lg font-bold text-orange-500 mt-2">{item.price}</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-600 hover:bg-red-50 cursor-pointer"
                    >
                      <Trash2 className="w-5 h-5" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-gray-200 p-4 space-y-4 bg-white">
              <div className="flex items-center justify-between text-lg">
                <span className="font-semibold text-gray-900">Total:</span>
                <span className="font-bold text-2xl text-orange-500">${calculateTotal().toLocaleString()}</span>
              </div>
              <Button
                onClick={handleBuy}
                className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-semibold py-6 text-lg shadow-lg hover:shadow-orange-500/50 transition-all cursor-pointer"
              >
                Comprar Ahora
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
