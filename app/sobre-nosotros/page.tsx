import type { Metadata } from "next"
import SobreNosotrosClient from "./client"

export const metadata: Metadata = {
  title: "Sobre Nosotros - Quienes Somos",
  description:
    "Conoce a Crecimientoinsta, tu tienda de confianza para comprar seguidores, likes y reproducciones en Argentina. Entrega en 24hs, soporte 24/7 y pagos seguros.",
  alternates: {
    canonical: "https://crecimientoinsta.com/sobre-nosotros",
  },
  openGraph: {
    title: "Sobre Nosotros | Crecimientoinsta",
    description:
      "Conoce a Crecimientoinsta, tu tienda de confianza para comprar seguidores y likes en Argentina.",
    url: "https://crecimientoinsta.com/sobre-nosotros",
  },
}

export default function SobreNosotros() {
  return <SobreNosotrosClient />
}
