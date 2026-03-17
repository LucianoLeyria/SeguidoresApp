import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import Script from "next/script"
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
    default: "Comprar Seguidores Instagram Argentina | Crecimientoinsta",
    template: "%s | Crecimientoinsta",
  },
  description:
    "Compra seguidores reales para Instagram, TikTok, YouTube, Facebook y Twitter en Argentina. Entrega en 24 horas, pago seguro con MercadoPago. Likes, reproducciones y comentarios.",
  keywords: [
    "comprar seguidores instagram argentina",
    "comprar likes instagram",
    "comprar seguidores tiktok argentina",
    "comprar suscriptores youtube argentina",
    "comprar seguidores facebook",
    "comprar seguidores twitter argentina",
    "aumentar seguidores instagram",
    "seguidores reales instagram",
    "likes instagram baratos argentina",
    "reproducciones instagram",
    "comentarios instagram",
    "crecimiento redes sociales argentina",
    "comprar miembros telegram",
  ],
  authors: [{ name: "Crecimientoinsta" }],
  metadataBase: new URL("https://crecimientoinsta.com"),
  alternates: {
    canonical: "https://crecimientoinsta.com",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://crecimientoinsta.com",
    siteName: "Crecimientoinsta",
    title: "Comprar Seguidores Instagram Argentina | Crecimientoinsta",
    description:
      "Compra seguidores reales para Instagram, TikTok, YouTube y mas. Entrega en 24hs. Pago seguro con MercadoPago.",
    images: [
      {
        url: "/logo.jpg",
        width: 150,
        height: 150,
        alt: "Crecimientoinsta - Seguidores para Redes Sociales",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Comprar Seguidores Instagram Argentina | Crecimientoinsta",
    description:
      "Compra seguidores reales para Instagram, TikTok, YouTube y mas. Entrega en 24hs.",
    images: ["/logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Store",
  name: "Crecimientoinsta",
  url: "https://crecimientoinsta.com",
  logo: "https://crecimientoinsta.com/logo.jpg",
  description:
    "Compra seguidores reales para Instagram, TikTok, YouTube, Facebook y Twitter en Argentina. Entrega en 24 horas.",
  telephone: "+5491149166103",
  email: "crecimientoinsta.arg@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressCountry: "AR",
  },
  priceRange: "$$",
  sameAs: ["https://www.instagram.com/crecimientoinsta.arg"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <CartProvider>{children}</CartProvider>
        {/* Meta Pixel */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1934265047181744');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1934265047181744&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </body>
    </html>
  )
}
