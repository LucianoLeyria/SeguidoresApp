"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingCartButton } from "@/components/floating-cart-button"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { CartSidebar } from "@/components/cart-sidebar"
import Image from "next/image"
import { useState } from "react"

export default function SobreNosotros() {
  const [isCartOpen, setIsCartOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <main className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden shadow-2xl ring-4 ring-orange-500/50">
              <Image src="/logo.jpg" alt="Logo" width={96} height={96} className="object-cover w-full h-full" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              Sobre Nosotros
            </h1>
            <p className="text-xl text-gray-600">Tu socio de confianza en crecimiento digital</p>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            <section className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <h2 className="text-2xl font-bold mb-4 text-orange-500">Nuestra Misión</h2>
              <p className="text-gray-700 leading-relaxed">
                Nos dedicamos a ayudar a creadores de contenido, empresas y marcas a alcanzar sus objetivos en redes
                sociales. Ofrecemos servicios de alta calidad para Instagram, TikTok, YouTube y más, garantizando
                resultados reales y seguros para tu cuenta.
              </p>
            </section>

            <section className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <h2 className="text-2xl font-bold mb-4 text-orange-500">¿Por Qué Elegirnos?</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 text-xl">✓</span>
                  <span>Entrega rápida y confiable de todos nuestros servicios</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 text-xl">✓</span>
                  <span>Seguidores, likes y reproducciones de cuentas reales</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 text-xl">✓</span>
                  <span>Soporte al cliente 24/7 vía WhatsApp</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 text-xl">✓</span>
                  <span>Precios competitivos y paquetes personalizables</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 text-xl">✓</span>
                  <span>100% seguro - No requiere contraseñas</span>
                </li>
              </ul>
            </section>

            <section className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <h2 className="text-2xl font-bold mb-4 text-orange-500">Nuestros Servicios</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Ofrecemos una amplia gama de servicios para las principales plataformas de redes sociales:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <h3 className="font-semibold text-orange-500 mb-2">Instagram</h3>
                  <p className="text-sm text-gray-600">Seguidores, likes, reproducciones y comentarios</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <h3 className="font-semibold text-orange-500 mb-2">TikTok</h3>
                  <p className="text-sm text-gray-600">Seguidores, likes y visualizaciones</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <h3 className="font-semibold text-orange-500 mb-2">YouTube</h3>
                  <p className="text-sm text-gray-600">Suscriptores, vistas y likes</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <h3 className="font-semibold text-orange-500 mb-2">Más Plataformas</h3>
                  <p className="text-sm text-gray-600">Facebook, Twitter y más</p>
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-2xl p-8 border border-orange-200 shadow-sm">
              <h2 className="text-2xl font-bold mb-4 text-center text-gray-900">¿Listo para Crecer?</h2>
              <p className="text-gray-700 text-center mb-6">
                Únete a miles de clientes satisfechos que han impulsado su presencia en redes sociales con nosotros.
              </p>
              <div className="flex justify-center">
                <a
                  href="/"
                  className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-orange-500/50 transition-all cursor-pointer"
                >
                  Ver Productos
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingCartButton onClick={() => setIsCartOpen(true)} />
      <WhatsAppButton />
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  )
}
