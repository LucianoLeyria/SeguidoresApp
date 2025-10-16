"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import Image from "next/image"

interface ProductModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  price: string
  quantity: string
  description?: string
  category?: string
}

const getPlatformLogo = (title: string, category?: string) => {
  const titleLower = title.toLowerCase()
  const categoryLower = category?.toLowerCase() || ""

  if (titleLower.includes("tiktok") || categoryLower.includes("tiktok")) {
    return "/tiktok-logo.jpg"
  }
  if (titleLower.includes("youtube") || categoryLower.includes("youtube")) {
    return "/youtube-logo.jpg"
  }
  return "/iglogo.png"
}

export function ProductModal({ isOpen, onClose, title, price, quantity, description, category }: ProductModalProps) {
  const platformLogo = getPlatformLogo(title, category)

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[400px] bg-white border-gray-200">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-gray-900">{title}</DialogTitle>
          <DialogDescription className="text-base font-semibold text-orange-500">{price}</DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="relative aspect-square rounded-xl overflow-hidden">
            <Image src="/redesimage.jpg" alt="Social Media" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
              <div className="relative w-20 h-20 rounded-full ring-4 ring-white/80 shadow-2xl bg-white">
                <Image
                  src={platformLogo || "/placeholder.svg"}
                  alt="Platform Logo"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div>
              <h4 className="font-semibold text-gray-700 mb-1 text-sm">Cantidad</h4>
              <p className="text-gray-600 text-sm">{quantity} unidades</p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-700 mb-1 text-sm">Descripción</h4>
              <p className="text-gray-600 text-sm">
                {description ||
                  "Este servicio aumenta en el día. Seguidores reales y de alta calidad para tu cuenta. Entrega rápida y segura."}
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-700 mb-1 text-sm">Características</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                <li>Entrega inmediata</li>
                <li>100% seguro</li>
                <li>Garantía de calidad</li>
                <li>Soporte 24/7</li>
              </ul>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
