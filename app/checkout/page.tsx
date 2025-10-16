"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Copy, Check, X } from "lucide-react"
import { useCart } from "@/lib/cart-context"

export default function CheckoutPage() {
  const router = useRouter()
  const { items, clearCart } = useCart()
  const [copied, setCopied] = useState(false)
  const [showInvoice, setShowInvoice] = useState(false)
  const [showErrorModal, setShowErrorModal] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    dni: "",
  })
  const [errors, setErrors] = useState({
    email: "",
    fullName: "",
    dni: "",
  })

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email) return "El email es requerido"
    if (!emailRegex.test(email)) return "Formato de email inválido"
    return ""
  }

  const validateFullName = (name: string) => {
    const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/
    if (!name) return "El nombre completo es requerido"
    if (!nameRegex.test(name)) return "El nombre solo puede contener letras"
    if (name.trim().length < 3) return "El nombre debe tener al menos 3 caracteres"
    return ""
  }

  const validateDNI = (dni: string) => {
    const dniRegex = /^\d+$/
    if (!dni) return "El DNI es requerido"
    if (!dniRegex.test(dni)) return "El DNI solo puede contener números"
    if (dni.length < 7 || dni.length > 8) return "El DNI debe tener 7 u 8 dígitos"
    return ""
  }

  const handleEmailChange = (value: string) => {
    setFormData({ ...formData, email: value })
    setErrors({ ...errors, email: validateEmail(value) })
  }

  const handleFullNameChange = (value: string) => {
    setFormData({ ...formData, fullName: value })
    setErrors({ ...errors, fullName: validateFullName(value) })
  }

  const handleDNIChange = (value: string) => {
    setFormData({ ...formData, dni: value })
    setErrors({ ...errors, dni: validateDNI(value) })
  }

  const calculateTotal = () => {
    return items.reduce((total, item) => {
      const price = Number.parseFloat(item.price.replace(/[$,]/g, ""))
      return total + price * item.amount
    }, 0)
  }

  const handleCopyCBU = () => {
    navigator.clipboard.writeText("0000168300000002292236")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleWhatsAppContact = () => {
    const emailError = validateEmail(formData.email)
    const fullNameError = validateFullName(formData.fullName)
    const dniError = validateDNI(formData.dni)

    setErrors({
      email: emailError,
      fullName: fullNameError,
      dni: dniError,
    })

    if (emailError || fullNameError || dniError) {
      setShowErrorModal(true)
      return
    }

    const message = `Hola! Realicé una compra:\n\nProductos:\n${items.map((item) => `- ${item.title} x${item.amount}`).join("\n")}\n\nTotal: $${calculateTotal().toLocaleString()}\n\nEmail: ${formData.email}\nNombre: ${formData.fullName}\nDNI: ${formData.dni}`
    const whatsappUrl = `https://wa.me/5491149166103?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleFinishPurchase = () => {
    const emailError = validateEmail(formData.email)
    const fullNameError = validateFullName(formData.fullName)
    const dniError = validateDNI(formData.dni)

    setErrors({
      email: emailError,
      fullName: fullNameError,
      dni: dniError,
    })

    if (emailError || fullNameError || dniError) {
      setShowErrorModal(true)
      return
    }

    setShowInvoice(true)
  }

  const handleCloseInvoice = () => {
    setShowInvoice(false)
    clearCart()
    router.push("/")
  }

  useEffect(() => {
    if (items.length === 0) {
      router.push("/")
    }
  }, [items, router])

  if (items.length === 0) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <Button
          variant="ghost"
          onClick={() => router.back()}
          className="mb-6 text-gray-900 hover:bg-gray-200 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver
        </Button>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Checkout</h1>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Column - Transfer Data */}
          <div className="space-y-6">
            {/* Transfer Information */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Datos para transferencia</h2>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-600">CBU</p>
                  <div className="flex items-center gap-2 mt-1">
                    <p className="text-lg font-mono text-gray-900">0000168300000002292236</p>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={handleCopyCBU}
                      className="hover:bg-gray-100 cursor-pointer"
                    >
                      {copied ? (
                        <Check className="w-4 h-4 text-green-600" />
                      ) : (
                        <Copy className="w-4 h-4 text-gray-600" />
                      )}
                    </Button>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Nombre</p>
                  <p className="text-lg text-gray-900">Luciano Leyria</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Banco</p>
                  <p className="text-lg text-gray-900">Lemon</p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-orange-50 border border-orange-200 rounded-lg">
                <p className="text-sm text-orange-700 font-semibold mb-2">📋 Instrucciones de pago:</p>
                <ol className="text-sm text-orange-700 space-y-1 list-decimal list-inside">
                  <li>Realiza la transferencia bancaria al CBU indicado</li>
                  <li>Toma una foto del comprobante de transferencia</li>
                  <li>Envíanos el comprobante por WhatsApp con los detalles de tu compra</li>
                </ol>
              </div>
            </div>

            {/* Customer Information Form */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Información del destinatario</h2>
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-gray-600 block mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleEmailChange(e.target.value)}
                    placeholder="tu@email.com"
                    className={`w-full px-4 py-2 bg-white border rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none transition-colors ${
                      errors.email ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-orange-500"
                    }`}
                  />
                  {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label className="text-sm text-gray-600 block mb-2">Nombre completo</label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => handleFullNameChange(e.target.value)}
                    placeholder="Juan Pérez"
                    className={`w-full px-4 py-2 bg-white border rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none transition-colors ${
                      errors.fullName
                        ? "border-red-500 focus:border-red-500"
                        : "border-gray-300 focus:border-orange-500"
                    }`}
                  />
                  {errors.fullName && <p className="text-red-600 text-sm mt-1">{errors.fullName}</p>}
                </div>
                <div>
                  <label className="text-sm text-gray-600 block mb-2">DNI</label>
                  <input
                    type="text"
                    value={formData.dni}
                    onChange={(e) => handleDNIChange(e.target.value)}
                    placeholder="12345678"
                    maxLength={8}
                    className={`w-full px-4 py-2 bg-white border rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none transition-colors ${
                      errors.dni ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-orange-500"
                    }`}
                  />
                  {errors.dni && <p className="text-red-600 text-sm mt-1">{errors.dni}</p>}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Purchase Summary */}
          <div className="space-y-6">
            {/* Purchase Items */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Resumen de compra</h2>
              <div className="space-y-3">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between items-center py-2 border-b border-gray-200">
                    <div>
                      <p className="text-gray-900 font-medium">{item.title}</p>
                      <p className="text-sm text-gray-600">Cantidad: {item.amount}</p>
                    </div>
                    <p className="text-orange-500 font-semibold">{item.price}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between items-center">
                <span className="text-lg font-bold text-gray-900">Total</span>
                <span className="text-2xl font-bold text-orange-500">${calculateTotal().toLocaleString()}</span>
              </div>
            </div>

            {/* Purchase Information */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Información de tu compra</h2>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-600">Método de envío</p>
                  <p className="text-gray-900">Por email a {formData.email || "tu@email.com"}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Estado del envío</p>
                  <p className="text-yellow-600">Pendiente</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Destinatario</p>
                  <p className="text-gray-900">{formData.fullName || "Nombre completo"}</p>
                  <p className="text-sm text-gray-600 mt-1">DNI: {formData.dni || "12345678"}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Método de pago</p>
                  <p className="text-gray-900">Transferencia</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button
                onClick={handleWhatsAppContact}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-6 text-lg shadow-lg hover:shadow-green-500/50 transition-all cursor-pointer"
              >
                Enviar comprobante por WhatsApp
              </Button>
              <Button
                onClick={handleFinishPurchase}
                className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-semibold py-6 text-lg shadow-lg hover:shadow-orange-500/50 transition-all cursor-pointer"
              >
                Finalizar compra
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Invoice Modal */}
      {showInvoice && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white border border-gray-200 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Factura de Compra</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleCloseInvoice}
                className="hover:bg-gray-100 cursor-pointer"
              >
                <X className="w-5 h-5 text-gray-600" />
              </Button>
            </div>

            {/* Invoice Content */}
            <div className="p-6 space-y-6">
              {/* Company Info */}
              <div className="text-center border-b border-gray-200 pb-6">
                <h3 className="text-2xl font-bold text-orange-500 mb-2">Social Media Services</h3>
                <p className="text-gray-600">Servicios de redes sociales</p>
                <p className="text-sm text-gray-500 mt-2">Fecha: {new Date().toLocaleDateString("es-AR")}</p>
              </div>

              {/* Customer Information */}
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Información del Cliente</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-gray-600">Nombre completo</p>
                    <p className="text-gray-900 font-medium">{formData.fullName}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">DNI</p>
                    <p className="text-gray-900 font-medium">{formData.dni}</p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-gray-600">Email</p>
                    <p className="text-gray-900 font-medium">{formData.email}</p>
                  </div>
                </div>
              </div>

              {/* Products Table */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Detalle de Productos</h3>
                <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
                  <table className="w-full">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="text-left p-3 text-gray-700 font-medium text-sm">Producto</th>
                        <th className="text-center p-3 text-gray-700 font-medium text-sm">Cantidad</th>
                        <th className="text-right p-3 text-gray-700 font-medium text-sm">Precio Unit.</th>
                        <th className="text-right p-3 text-gray-700 font-medium text-sm">Subtotal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {items.map((item, index) => {
                        const unitPrice = Number.parseFloat(item.price.replace(/[$,]/g, ""))
                        const subtotal = unitPrice * item.amount
                        return (
                          <tr key={item.id} className={index !== items.length - 1 ? "border-b border-gray-200" : ""}>
                            <td className="p-3 text-gray-900">{item.title}</td>
                            <td className="p-3 text-center text-gray-900">{item.amount}</td>
                            <td className="p-3 text-right text-gray-900">${unitPrice.toLocaleString()}</td>
                            <td className="p-3 text-right text-orange-500 font-semibold">
                              ${subtotal.toLocaleString()}
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Total */}
              <div className="bg-gradient-to-r from-orange-50 to-pink-50 border border-orange-200 rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-900">Total a Pagar</span>
                  <span className="text-3xl font-bold text-orange-500">${calculateTotal().toLocaleString()}</span>
                </div>
              </div>

              {/* Payment Information */}
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Información de Pago</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Método de pago:</span>
                    <span className="text-gray-900 font-medium">Transferencia Bancaria</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Estado:</span>
                    <span className="text-yellow-600 font-medium">Pendiente de confirmación</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Método de envío:</span>
                    <span className="text-gray-900 font-medium">Email</span>
                  </div>
                </div>
              </div>

              {/* Important Note */}
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <p className="text-sm text-orange-700 text-center">
                  ⚠️ Recuerda enviar el comprobante de pago por WhatsApp para confirmar tu pedido
                </p>
              </div>

              {/* Action Button */}
              <Button
                onClick={handleCloseInvoice}
                className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-semibold py-6 text-lg shadow-lg hover:shadow-orange-500/50 transition-all cursor-pointer"
              >
                Confirmar y Finalizar
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Error Modal */}
      {showErrorModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white border border-red-200 rounded-lg max-w-md w-full p-6 shadow-2xl">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-red-50 rounded-full flex items-center justify-center">
                <X className="w-6 h-6 text-red-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Error en el formulario</h3>
                <p className="text-gray-700 mb-6">Por favor corrige los errores en el formulario antes de continuar.</p>
                <Button
                  onClick={() => setShowErrorModal(false)}
                  className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 cursor-pointer"
                >
                  Entendido
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
