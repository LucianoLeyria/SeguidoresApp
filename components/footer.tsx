import { Mail, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-900 py-12 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="w-12 h-12 rounded-lg overflow-hidden mb-4 shadow-md border border-gray-200">
              <Image src="/logo.jpg" alt="Logo" width={48} height={48} className="object-cover w-full h-full" />
            </div>
            <p className="text-gray-600 text-sm">Tu tienda de confianza para servicios de redes sociales</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-900">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>
                <Link href="/" className="hover:text-orange-500 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-orange-500 transition-colors">
                  Productos
                </Link>
              </li>
              <li>
                <Link href="/sobre-nosotros" className="hover:text-orange-500 transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-900">Contacto</h3>
            <div className="space-y-3">
              <a
                href="mailto:crecimientoinsta.arg@gmail.com"
                className="flex items-center gap-2 text-gray-600 hover:text-orange-500 transition-colors text-sm"
              >
                <Mail className="w-5 h-5" />
                <span>crecimientoinsta.arg@gmail.com</span>
              </a>
              <a
                href="tel:+5491149166103"
                className="flex items-center gap-2 text-gray-600 hover:text-orange-500 transition-colors text-sm"
              >
                <Phone className="w-5 h-5" />
                <span>+54 9 11 4916-6103</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Crecimientoinsta.arg. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
