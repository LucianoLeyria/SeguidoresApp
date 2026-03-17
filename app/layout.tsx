import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { CartProvider } from "@/lib/cart-context"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: "Crecimientoinsta.arg - Seguidores, Likes y Mas para Redes Sociales",
    template: "%s | Crecimientoinsta.arg",
  },
  description:
    "Compra seguidores de Instagram, likes, reproducciones, comentarios, seguidores de TikTok, YouTube y mas. Entrega rapida y segura. Pagos con MercadoPago.",
  keywords: [
    "comprar seguidores instagram",
    "likes instagram",
    "seguidores tiktok",
    "suscriptores youtube",
    "seguidores argentina",
    "redes sociales",
  ],
  authors: [{ name: "Crecimientoinsta.arg" }],
  metadataBase: new URL("https://seguidores-app.vercel.app"),
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://seguidores-app.vercel.app",
    siteName: "Crecimientoinsta.arg",
    title: "Crecimientoinsta.arg - Seguidores y Likes para Redes Sociales",
    description:
      "Compra seguidores de Instagram, likes, reproducciones y mas. Entrega en el dia.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crecimientoinsta.arg - Seguidores y Likes",
    description:
      "Compra seguidores de Instagram, likes, reproducciones y mas.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  )
}
