"use client"

import Image from "next/image"
import { Star } from "lucide-react"

const reviews = [
  {
    id: 1,
    name: "María González",
    rating: 5,
    comment: "Excelente servicio! Mis seguidores aumentaron rápidamente y son de calidad. Muy recomendado.",
    avatar: "/diverse-woman-avatar.png",
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    rating: 5,
    comment: "Increíble experiencia. El servicio fue rápido y profesional. Volveré a comprar sin duda.",
    avatar: "/man-avatar.png",
  },
  {
    id: 3,
    name: "Ana Martínez",
    rating: 5,
    comment: "Muy satisfecha con los resultados. Mi cuenta creció significativamente en pocos días.",
    avatar: "/woman-avatar-2.png",
  },
  {
    id: 4,
    name: "Juan Pérez",
    rating: 4,
    comment: "Buen servicio, entrega rápida y atención al cliente excelente. Lo recomiendo totalmente.",
    avatar: "/man-avatar-2.png",
  },
  {
    id: 5,
    name: "Laura Sánchez",
    rating: 5,
    comment: "Superó mis expectativas. Los seguidores son reales y el engagement mejoró mucho.",
    avatar: "/woman-avatar-3.png",
  },
  {
    id: 6,
    name: "Diego Torres",
    rating: 5,
    comment: "Servicio confiable y efectivo. He comprado varias veces y siempre cumplen.",
    avatar: "/man-avatar-3.png",
  },
  {
    id: 7,
    name: "Sofía Ramírez",
    rating: 5,
    comment: "Excelente relación calidad-precio. Mi cuenta de Instagram creció de forma natural.",
    avatar: "/woman-avatar-4.png",
  },
  {
    id: 8,
    name: "Miguel Ángel",
    rating: 4,
    comment: "Muy buen servicio. La entrega fue puntual y los resultados son visibles.",
    avatar: "/man-avatar-4.png",
  },
  {
    id: 9,
    name: "Valentina López",
    rating: 5,
    comment: "Increíble! Mi cuenta pasó de 500 a 5000 seguidores en una semana. Totalmente recomendado.",
    avatar: "/woman-avatar-5.png",
  },
  {
    id: 10,
    name: "Roberto Díaz",
    rating: 5,
    comment: "Servicio profesional y confiable. Los likes llegaron rápido y son de cuentas reales.",
    avatar: "/man-avatar-5.jpg",
  },
]

const beforeAfterImages = [
  {
    id: 1,
    image: "/antesdes.jpg",
    description: "Crecimiento orgánico comprobado",
  },
  {
    id: 2,
    image: "/antesdes.jpg",
    description: "Crecimiento orgánico comprobado",
  },
  {
    id: 3,
    image: "/antesdes.jpg",
    description: "Crecimiento orgánico comprobado",
  },
  {
    id: 4,
    image: "/antesdes.jpg",
    description: "Crecimiento orgánico comprobado",
  },
  {
    id: 5,
    image: "/antesdes.jpg",
    description: "Crecimiento orgánico comprobado",
  },
  {
    id: 6,
    image: "/antesdes.jpg",
    description: "Crecimiento orgánico comprobado",
  },
  {
    id: 7,
    image: "/antesdes.jpg",
    description: "Crecimiento orgánico comprobado",
  },
  {
    id: 8,
    image: "/antesdes.jpg",
    description: "Crecimiento orgánico comprobado",
  },
  {
    id: 9,
    image: "/antesdes.jpg",
    description: "Crecimiento orgánico comprobado",
  },
  {
    id: 10,
    image: "/antesdes.jpg",
    description: "Crecimiento orgánico comprobado",
  },
]

export function ReferidosSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">REFERIDOS</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nuestros clientes confían en nosotros para hacer crecer sus redes sociales. Con más de 10,000 clientes
            satisfechos, ofrecemos servicios de calidad que generan resultados reales y medibles. Descubre por qué somos
            la opción número uno para impulsar tu presencia digital.
          </p>
        </div>

        {/* Reviews Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Lo que dicen nuestros clientes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                    <Image src={review.avatar || "/placeholder.svg"} alt={review.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">{review.name}</h4>
                    <div className="flex gap-0.5">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Before/After Section */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Resultados Comprobados</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {beforeAfterImages.map((item) => (
              <div
                key={item.id}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200"
              >
                <div className="relative aspect-[3/4] bg-gray-200">
                  <Image src={item.image || "/placeholder.svg"} alt={item.description} fill className="object-cover" />
                </div>
                <div className="p-4 text-center">
                  <p className="text-sm font-semibold text-gray-900">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
