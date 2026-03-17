"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { XCircle } from "lucide-react"

export default function PaymentFailure() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center space-y-6">
        <div className="flex justify-center">
          <XCircle className="w-20 h-20 text-red-500" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900">Pago rechazado</h1>
        <p className="text-gray-600">
          Hubo un problema con tu pago. Podes intentar nuevamente o elegir otro medio de pago.
        </p>
        <div className="space-y-3">
          <Button
            onClick={() => router.push("/checkout")}
            className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-semibold py-6 text-lg cursor-pointer"
          >
            Intentar de nuevo
          </Button>
          <Button
            onClick={() => router.push("/")}
            variant="outline"
            className="w-full border-2 border-gray-300 hover:border-orange-500 font-semibold py-6 text-lg cursor-pointer"
          >
            Volver al inicio
          </Button>
        </div>
      </div>
    </div>
  )
}
