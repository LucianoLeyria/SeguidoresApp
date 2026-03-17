"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, X, Loader2, Link as LinkIcon } from "lucide-react"
import { useCart } from "@/lib/cart-context"

export default function CheckoutPage() {
  const router = useRouter()
  const { items, clearCart } = useCart()
  const [showErrorModal, setShowErrorModal] = useState(false)
  const [isLoadingMP, setIsLoadingMP] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    nombre: "",
    apellido: "",
    socialLink: "",
  })
  const [errors, setErrors] = useState({
    email: "",
    nombre: "",
    apellido: "",
    socialLink: "",
  })

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email) return "El email es requerido"
    if (!emailRegex.test(email)) return "Formato de email invalido"
    return ""
  }

  const validateNombre = (name: string) => {
    const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/
    if (!name) return "El nombre es requerido"
    if (!nameRegex.test(name)) return "El nombre solo puede contener letras"
    if (name.trim().length < 2) return "El nombre debe tener al menos 2 caracteres"
    return ""
  }

  const validateApellido = (name: string) => {
    const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/
    if (!name) return "El apellido es requerido"
    if (!nameRegex.test(name)) return "El apellido solo puede contener letras"
    if (name.trim().length < 2) return "El apellido debe tener al menos 2 caracteres"
    return ""
  }

  const validateSocialLink = (link: string) => {
    if (!link) return "El link de tu red social es requerido"
    if (!link.startsWith("http://") && !link.startsWith("https://")) {
      return "El link debe comenzar con http:// o https://"
    }
    return ""
  }

  const handleEmailChange = (value: string) => {
    setFormData({ ...formData, email: value })
    setErrors({ ...errors, email: validateEmail(value) })
  }

  const handleNombreChange = (value: string) => {
    setFormData({ ...formData, nombre: value })
    setErrors({ ...errors, nombre: validateNombre(value) })
  }

  const handleApellidoChange = (value: string) => {
    setFormData({ ...formData, apellido: value })
    setErrors({ ...errors, apellido: validateApellido(value) })
  }

  const handleSocialLinkChange = (value: string) => {
    setFormData({ ...formData, socialLink: value })
    setErrors({ ...errors, socialLink: validateSocialLink(value) })
  }

  const calculateTotal = () => {
    return items.reduce((total, item) => {
      const price = Number.parseFloat(item.price.replace(/[$,]/g, ""))
      return total + price * item.amount
    }, 0)
  }

  const handleMercadoPago = async () => {
    const emailError = validateEmail(formData.email)
    const nombreError = validateNombre(formData.nombre)
    const apellidoError = validateApellido(formData.apellido)
    const socialLinkError = validateSocialLink(formData.socialLink)

    setErrors({
      email: emailError,
      nombre: nombreError,
      apellido: apellidoError,
      socialLink: socialLinkError,
    })

    if (emailError || nombreError || apellidoError || socialLinkError) {
      setShowErrorModal(true)
      return
    }

    setIsLoadingMP(true)

    try {
      const response = await fetch("/api/create-preference", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items,
          payer: {
            email: formData.email,
            nombre: formData.nombre,
            apellido: formData.apellido,
            socialLink: formData.socialLink,
          },
        }),
      })

      const data = await response.json()

      if (data.init_point) {
        window.location.href = data.init_point
      } else {
        alert("Error al crear el pago. Intenta de nuevo.")
      }
    } catch (error) {
      alert("Error al conectar con MercadoPago. Intenta de nuevo.")
    } finally {
      setIsLoadingMP(false)
    }
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
          {/* Left Column - Customer Form */}
          <div className="space-y-6">
            {/* Customer Information Form */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Informacion del destinatario</h2>
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
                  <label className="text-sm text-gray-600 block mb-2">Nombre</label>
                  <input
                    type="text"
                    value={formData.nombre}
                    onChange={(e) => handleNombreChange(e.target.value)}
                    placeholder="Juan"
                    className={`w-full px-4 py-2 bg-white border rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none transition-colors ${
                      errors.nombre
                        ? "border-red-500 focus:border-red-500"
                        : "border-gray-300 focus:border-orange-500"
                    }`}
                  />
                  {errors.nombre && <p className="text-red-600 text-sm mt-1">{errors.nombre}</p>}
                </div>
                <div>
                  <label className="text-sm text-gray-600 block mb-2">Apellido</label>
                  <input
                    type="text"
                    value={formData.apellido}
                    onChange={(e) => handleApellidoChange(e.target.value)}
                    placeholder="Perez"
                    className={`w-full px-4 py-2 bg-white border rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none transition-colors ${
                      errors.apellido
                        ? "border-red-500 focus:border-red-500"
                        : "border-gray-300 focus:border-orange-500"
                    }`}
                  />
                  {errors.apellido && <p className="text-red-600 text-sm mt-1">{errors.apellido}</p>}
                </div>
                <div>
                  <label className="text-sm text-gray-600 block mb-2">
                    <span className="flex items-center gap-2">
                      <LinkIcon className="w-4 h-4" />
                      Link de tu red social
                    </span>
                  </label>
                  <input
                    type="url"
                    value={formData.socialLink}
                    onChange={(e) => handleSocialLinkChange(e.target.value)}
                    placeholder="https://www.instagram.com/tu_usuario"
                    className={`w-full px-4 py-2 bg-white border rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none transition-colors ${
                      errors.socialLink ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-orange-500"
                    }`}
                  />
                  {errors.socialLink && <p className="text-red-600 text-sm mt-1">{errors.socialLink}</p>}
                  <p className="text-xs text-gray-500 mt-1">Pega el link del perfil o publicacion donde queres recibir el servicio</p>
                </div>
              </div>
            </div>

            {/* Delivery Info */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-700 font-semibold mb-1">Tiempo de entrega</p>
              <p className="text-sm text-blue-700">
                El servicio tendra efecto en el transcurso de las siguientes <strong>24 horas</strong> luego de confirmado el pago.
              </p>
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
              <h2 className="text-xl font-bold text-gray-900 mb-4">Informacion de tu compra</h2>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-600">Nombre</p>
                  <p className="text-gray-900">{formData.nombre || "Tu nombre"}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Apellido</p>
                  <p className="text-gray-900">{formData.apellido || "Tu apellido"}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="text-gray-900">{formData.email || "tu@email.com"}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Red social</p>
                  <p className="text-gray-900 break-all">{formData.socialLink || "Link de tu perfil"}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Tiempo de entrega</p>
                  <p className="text-gray-900">Dentro de las 24 horas</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Metodo de pago</p>
                  <p className="text-gray-900">MercadoPago</p>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <Button
              onClick={handleMercadoPago}
              disabled={isLoadingMP}
              className="w-full bg-[#009ee3] hover:bg-[#0084c2] text-white font-semibold py-6 text-lg shadow-lg hover:shadow-blue-500/50 transition-all cursor-pointer disabled:opacity-70"
            >
              {isLoadingMP ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Procesando...
                </>
              ) : (
                "Pagar con MercadoPago"
              )}
            </Button>
          </div>
        </div>
      </div>

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
