"use client"

import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"

interface FloatingCartButtonProps {
  onClick: () => void
}

export function FloatingCartButton({ onClick }: FloatingCartButtonProps) {
  const { getTotalItems } = useCart()
  const totalItems = getTotalItems()

  return (
    <Button
      size="icon"
      className="fixed bottom-24 right-6 w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-110 z-50 cursor-pointer"
      onClick={onClick}
    >
      <ShoppingCart className="w-7 h-7 text-white" />
      {totalItems > 0 && (
        <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-sm font-bold rounded-full w-7 h-7 flex items-center justify-center shadow-lg">
          {totalItems}
        </span>
      )}
    </Button>
  )
}
