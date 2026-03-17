"use client"

import { Suspense, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import { useCart } from "@/lib/cart-context"

function SuccessContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { clearCart } = useCart()

  useEffect(() => {
    clearCart()
  }, [])

  const paymentId = searchParams.get("payment_id")
  const status = searchParams.get("status")

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center space-y-6">
        <div className="flex justify-center">
          <CheckCircle className="w-20 h-20 text-green-500" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900">
          {status === "approved" ? "Pago aprobado" : "Pago pendiente"}
        </h1>
        <p className="text-gray-600">
          {status === "approved"
            ? "Tu pago fue procesado con exito. Te enviaremos los detalles por email."
            : "Tu pago esta pendiente de confirmacion. Te notificaremos cuando se acredite."}
        </p>
        {paymentId && (
          <p className="text-sm text-gray-500">
            ID de pago: <span className="font-mono">{paymentId}</span>
          </p>
        )}
        <Button
          onClick={() => router.push("/")}
          className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-semibold py-6 text-lg cursor-pointer"
        >
          Volver al inicio
        </Button>
      </div>
    </div>
  )
}

export default function PaymentSuccess() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-100 flex items-center justify-center">Cargando...</div>}>
      <SuccessContent />
    </Suspense>
  )
}
