import { Mail, Phone, Instagram, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl overflow-hidden shadow-md border border-gray-700">
                <Image src="/logo.jpg" alt="Logo" width={40} height={40} className="object-cover w-full h-full" />
              </div>
              <span className="font-bold text-base bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                Crecimientoinsta
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Tu tienda de confianza para crecer en redes sociales. Servicios rapidos, seguros y de calidad.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-300 mb-4">Navegacion</h3>
            <ul className="space-y-2.5">
              {[
                { href: "/", label: "Inicio" },
                { href: "/", label: "Productos" },
                { href: "/sobre-nosotros", label: "Sobre Nosotros" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-300 mb-4">Servicios</h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>Seguidores Instagram</li>
              <li>Likes y Reproducciones</li>
              <li>Seguidores TikTok</li>
              <li>Suscriptores YouTube</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-300 mb-4">Contacto</h3>
            <div className="space-y-3">
              <a
                href="mailto:crecimientoinsta.arg@gmail.com"
                className="flex items-center gap-2.5 text-gray-400 hover:text-orange-400 transition-colors text-sm"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>crecimientoinsta.arg@gmail.com</span>
              </a>
              <a
                href="tel:+5491149166103"
                className="flex items-center gap-2.5 text-gray-400 hover:text-orange-400 transition-colors text-sm"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+54 9 11 4916-6103</span>
              </a>
              <a
                href="https://www.instagram.com/crecimientoinsta.arg"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-gray-400 hover:text-orange-400 transition-colors text-sm"
              >
                <Instagram className="w-4 h-4 flex-shrink-0" />
                <span>@crecimientoinsta.arg</span>
              </a>
              <div className="flex items-center gap-2.5 text-gray-400 text-sm">
                <Clock className="w-4 h-4 flex-shrink-0" />
                <span>Entrega en 24hs</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Crecimientoinsta.arg. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-gray-500 text-xs">Pagos seguros con</span>
            <span className="text-xs font-semibold text-[#009ee3]">MercadoPago</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
