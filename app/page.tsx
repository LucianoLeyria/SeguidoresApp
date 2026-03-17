"use client";

import { Header } from "@/components/header";
import { ProductGrid } from "@/components/product-grid";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { FloatingCartButton } from "@/components/floating-cart-button";
import { CartSidebar } from "@/components/cart-sidebar";
import { Footer } from "@/components/footer";
import { useState, useMemo } from "react";
import { ProductGridClientes } from "@/components/ProductGridClientes"

const seguidoresProducts = [
  {
    id: 1,
    title: "1000 SEGUIDORES IG",
    price: "$15,000.00",
    quantity: "1,000",
    image: "/1.png",
  },
  {
    id: 2,
    title: "2000 SEGUIDORES IG",
    price: "$27,000.00",
    quantity: "2,000",
    image: "/2.png",
  },
  {
    id: 3,
    title: "3000 SEGUIDORES IG",
    price: "$39,000.00",
    quantity: "3,000",
    image: "/3.png",
  },
  {
    id: 4,
    title: "4000 SEGUIDORES IG",
    price: "$51,000.00",
    quantity: "4,000",
    image: "/4.png",
  },
  {
    id: 5,
    title: "5000 SEGUIDORES IG",
    price: "$63,000.00",
    quantity: "5,000",
    image: "/5.png",
  },
  {
    id: 6,
    title: "6000 SEGUIDORES IG",
    price: "$75,000.00",
    quantity: "6,000",
    image: "/6.png",
  },
  {
    id: 7,
    title: "7000 SEGUIDORES IG",
    price: "$87,000.00",
    quantity: "7,000",
    image: "/7.png",
  },
  {
    id: 8,
    title: "8000 SEGUIDORES IG",
    price: "$99,000.00",
    quantity: "8,000",
    image: "/8.png",
  },
  {
    id: 9,
    title: "9,000 SEGUIDORES IG",
    price: "$112,000.00",
    quantity: "9,000",
    image: "/9.png",
  },
  {
    id: 10,
    title: "10,000 SEGUIDORES IG",
    price: "$125,000.00",
    quantity: "10,000",
    image: "/10.png",
  },
];

const likesProducts = [
  {
    id: 11,
    title: "1000 LIKES IG",
    price: "$10,500.00",
    quantity: "1,000",
    image: "/1.png",
  },
  {
    id: 12,
    title: "2000 LIKES IG",
    price: "$18,000.00",
    quantity: "2,000",
    image: "/2.png",
  },
  {
    id: 13,
    title: "3000 LIKES IG",
    price: "$25,500.00",
    quantity: "3,000",
    image: "/3.png",
  },
  {
    id: 14,
    title: "4000 LIKES IG",
    price: "$33,000.00",
    quantity: "4,000",
    image: "/4.png",
  },
  {
    id: 15,
    title: "5000 LIKES IG",
    price: "$40,500.00",
    quantity: "5,000",
    image: "/5.png",
  },
  {
    id: 16,
    title: "6000 LIKES IG",
    price: "$48,000.00",
    quantity: "6,000",
    image: "/6.png",
  },
  {
    id: 17,
    title: "7000 LIKES IG",
    price: "$55,500.00",
    quantity: "7,000",
    image: "/7.png",
  },
  {
    id: 18,
    title: "8000 LIKES IG",
    price: "$63,000.00",
    quantity: "8,000",
    image: "/8.png",
  },
  {
    id: 19,
    title: "9,000 LIKES IG",
    price: "$71,500.00",
    quantity: "9,000",
    image: "/9.png",
  },
  {
    id: 20,
    title: "10,000 LIKES IG",
    price: "$80,000.00",
    quantity: "10,000",
    image: "/10.png",
  },
];

const reposProducts = [
  {
    id: 21,
    title: "5,000 REPROS IG",
    price: "$8,000.00",
    quantity: "5,000",
    image: "/5000.png",
  },
  {
    id: 22,
    title: "10,000 REPROS IG",
    price: "$12,000.00",
    quantity: "10,000",
    image: "/10000.png",
  },
  //{ id: 23, title: "20,000 REPROS", price: "$20,000.00", quantity: "20,000", image: "/3.png" },
  //{ id: 24, title: "30,000 REPROS", price: "$28,000.00", quantity: "30,000", image: "/4.png" },
  //{ id: 25, title: "40,000 REPROS", price: "$35,000.00", quantity: "40,000", image: "/5.png" },
  {
    id: 26,
    title: "50,000 REPROS IG",
    price: "$30,000.00",
    quantity: "50,000",
    image: "/50000.png",
  },
  //{ id: 27, title: "60,000 REPROS", price: "$42,000.00", quantity: "60,000", image: "/7.png" },
  //{ id: 28, title: "70,000 REPROS", price: "$45,000.00", quantity: "70,000", image: "/8.png" },
  //{ id: 29, title: "80,000 REPROS", price: "$48,000.00", quantity: "80,000", image: "/9.png" },
  {
    id: 30,
    title: "100,000 REPROS IG",
    price: "$50,000.00",
    quantity: "100,000",
    image: "/100000.png",
  },
];

const tiktokProducts = [
  {
    id: 31,
    title: "1000 SEGUIDORES TIKTOK",
    price: "$8,000.00",
    quantity: "1,000",
    image: "/1.png",
  },
  //{ id: 32, title: "2000 SEGUIDORES TIKTOK", price: "$22,000.00", quantity: "2,000", image: "/2.png" },
  /* {
    id: 33,
    title: "3000 SEGUIDORES TIKTOK",
    price: "$20,000.00",
    quantity: "3,000",
    image: "/3.png",
  }, */
  //{ id: 34, title: "4000 SEGUIDORES TIKTOK", price: "$42,000.00", quantity: "4,000", image: "/4.png" },
  {
    id: 35,
    title: "5000 SEGUIDORES TIKTOK",
    price: "$40,000.00",
    quantity: "5,000",
    image: "/5.png",
  },
  //{ id: 36, title: "6000 SEGUIDORES TIKTOK", price: "$60,000.00", quantity: "6,000", image: "/6.png" },
  //{ id: 37, title: "7000 SEGUIDORES TIKTOK", price: "$70,000.00", quantity: "7,000", image: "/7.png" },
  //{ id: 38, title: "8000 SEGUIDORES TIKTOK", price: "$80,000.00", quantity: "8,000", image: "/8.png" },
  //{ id: 39, title: "9000 SEGUIDORES TIKTOK", price: "$88,000.00", quantity: "9,000", image: "/9.png" },
  /*{
    id: 40,
    title: "10,000 SEGUIDORES TIKTOK",
    price: "$70,000.00",
    quantity: "10,000",
    image: "/10.png",
  },*/
];

const youtubeProducts = [
  {
    id: 41,
    title: "1000 SUSCRIPTORES YOUTUBE",
    price: "$30,000.00",
    quantity: "1,000",
    image: "/1.png",
  },
  /*{
    id: 42,
    title: "2000 SUSCRIPTORES YOUTUBE",
    price: "$45,000.00",
    quantity: "2,000",
    image: "/2.png",
  },
  {
    id: 43,
    title: "3000 SUSCRIPTORES YOUTUBE",
    price: "$65,000.00",
    quantity: "3,000",
    image: "/3.png",
  },
  {
    id: 44,
    title: "4000 SUSCRIPTORES YOUTUBE",
    price: "$82,000.00",
    quantity: "4,000",
    image: "/4.png",
  },*/
  {
    id: 45,
    title: "5000 SUSCRIPTORES YOUTUBE",
    price: "$150,000.00",
    quantity: "5,000",
    image: "/5.png",
  },
  /*{
    id: 46,
    title: "6000 SUSCRIPTORES YOUTUBE",
    price: "$118,000.00",
    quantity: "6,000",
    image: "/6.png",
  },
  {
    id: 47,
    title: "7000 SUSCRIPTORES YOUTUBE",
    price: "$135,000.00",
    quantity: "7,000",
    image: "/7.png",
  },
  {
    id: 48,
    title: "8000 SUSCRIPTORES YOUTUBE",
    price: "$152,000.00",
    quantity: "8,000",
    image: "/8.png",
  },
  {
    id: 49,
    title: "9000 SUSCRIPTORES YOUTUBE",
    price: "$168,000.00",
    quantity: "9,000",
    image: "/9.png",
  },
  {
    id: 50,
    title: "10,000 SUSCRIPTORES YOUTUBE",
    price: "$180,000.00",
    quantity: "10,000",
    image: "/10.png",
  },*/
];

const comentariosProducts = [
  {
    id: 51,
    title: "50 COMENTARIOS",
    price: "$7,750.00",
    quantity: "50",
    image: "/50comments.png",
  },
  {
    id: 52,
    title: "100 COMENTARIOS",
    price: "$11,500.00",
    quantity: "100",
    image: "/100comments.png",
  },
  //{ id: 53, title: "150 COMENTARIOS", price: "$19,000.00", quantity: "150", image: "/2.png" },
  //{ id: 54, title: "200 COMENTARIOS", price: "$25,000.00", quantity: "200", image: "/2.png" },
  //{ id: 55, title: "250 COMENTARIOS", price: "$30,000.00", quantity: "250", image: "/3.png" },
  //{ id: 56, title: "300 COMENTARIOS", price: "$35,000.00", quantity: "300", image: "/3.png" },
  //{ id: 57, title: "350 COMENTARIOS", price: "$40,000.00", quantity: "350", image: "/4.png" },
  //{ id: 58, title: "400 COMENTARIOS", price: "$45,000.00", quantity: "400", image: "/4.png" },
  //{ id: 59, title: "450 COMENTARIOS", price: "$50,000.00", quantity: "450", image: "/5.png" },
  {
    id: 60,
    title: "500 COMENTARIOS",
    price: "$57,500.00",
    quantity: "500",
    image: "/500comments.png",
  },
  {
    id: 61,
    title: "1000 COMENTARIOS",
    price: "$115,000.00",
    quantity: "1000",
    image: "/1.png",
  },
];

const seguidoresTwitter = [
  {
    id: 62,
    title: "1000 SEGUIDORES TWITTER",
    price: "$13,000.00",
    quantity: "1000",
    image: "/1.png",
  },
  {
    id: 63,
    title: "5000 SEGUIDORES TWITTER",
    price: "$65,000.00",
    quantity: "5000",
    image: "/5.png",
  },
  //{ id: 53, title: "150 COMENTARIOS", price: "$19,000.00", quantity: "150", image: "/2.png" },
  //{ id: 54, title: "200 COMENTARIOS", price: "$25,000.00", quantity: "200", image: "/2.png" },
  //{ id: 55, title: "250 COMENTARIOS", price: "$30,000.00", quantity: "250", image: "/3.png" },
  //{ id: 56, title: "300 COMENTARIOS", price: "$35,000.00", quantity: "300", image: "/3.png" },
  //{ id: 57, title: "350 COMENTARIOS", price: "$40,000.00", quantity: "350", image: "/4.png" },
  //{ id: 58, title: "400 COMENTARIOS", price: "$45,000.00", quantity: "400", image: "/4.png" },
  //{ id: 59, title: "450 COMENTARIOS", price: "$50,000.00", quantity: "450", image: "/5.png" },
  //{ id: 64, title: "500 COMENTARIOS TWITTER", price: "$57,500.00", quantity: "500", image: "/500comments.png" },
  //{ id: 65, title: "1000 COMENTARIOS TWITTER", price: "$115,000.00", quantity: "1000", image: "/1.png" },
];

const seguidoresFacebook = [
  {
    id: 66,
    title: "1000 SEGUIDORES FACEBOOK",
    price: "$9,000.00",
    quantity: "1000",
    image: "/1.png",
  },
  {
    id: 67,
    title: "5000 SEGUIDORES FACEBOOK",
    price: "$35,000.00",
    quantity: "5000",
    image: "/5.png",
  },
];

const miembrosTelegram = [
  {
    id: 66,
    title: "1000 MIEMBROS TELEGRAM",
    price: "$20,000.00",
    quantity: "1000",
    image: "/1.png",
  },
  {
    id: 67,
    title: "5000 MIEMBROS TELEGRAM",
    price: "$85,000.00",
    quantity: "5000",
    image: "/5.png",
  },
];

const clientesContentos = [
  {
    id: 68,
    title: "clientesContentos",
    price: "",
    quantity: "",
    image: "/clientes1.png",
  },
  {
    id: 69,
    title: "clientesContentos",
    price: "",
    quantity: "",
    image: "/clientes2.png",
  },
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isCartOpen, setIsCartOpen] = useState(false);

  const filterProducts = (products: any[]) => {
    if (!searchQuery.trim()) return products;
    const query = searchQuery.toLowerCase();
    return products.filter((product) =>
      product.title.toLowerCase().includes(query)
    );
  };

  const filteredSeguidores = useMemo(
    () => filterProducts(seguidoresProducts).slice(0, 10),
    [searchQuery]
  );
  const filteredLikes = useMemo(
    () => filterProducts(likesProducts).slice(0, 10),
    [searchQuery]
  );
  const filteredRepros = useMemo(
    () => filterProducts(reposProducts).slice(0, 10),
    [searchQuery]
  );
  const filteredComentarios = useMemo(
    () => filterProducts(comentariosProducts).slice(0, 10),
    [searchQuery]
  );
  const filteredTiktok = useMemo(
    () => filterProducts(tiktokProducts).slice(0, 10),
    [searchQuery]
  );
  const filteredTwitter = useMemo(
    () => filterProducts(seguidoresTwitter).slice(0, 10),
    [searchQuery]
  );
  const filteredYoutube = useMemo(
    () => filterProducts(youtubeProducts).slice(0, 10),
    [searchQuery]
  );
  const filteredFacebook = useMemo(
    () => filterProducts(seguidoresFacebook).slice(0, 10),
    [searchQuery]
  );
  const filteredMiembrosTelegram = useMemo(
    () => filterProducts(miembrosTelegram).slice(0, 10),
    [searchQuery]
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <Header
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Hero Section */}
      {selectedCategory === "all" && !searchQuery && (
        <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(249,115,22,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(236,72,153,0.1),transparent_50%)]" />
          <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Crece en redes sociales{" "}
                <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                  de forma rapida y segura
                </span>
              </h1>
              <p className="text-gray-400 text-base md:text-lg mb-8 max-w-xl mx-auto">
                Seguidores, likes, reproducciones y mas para Instagram, TikTok, YouTube, Twitter y Facebook. Entrega en 24 horas.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { icon: "IG", label: "Instagram", color: "from-purple-500 to-pink-500" },
                  { icon: "TT", label: "TikTok", color: "from-gray-700 to-gray-900" },
                  { icon: "YT", label: "YouTube", color: "from-red-500 to-red-600" },
                  { icon: "X", label: "Twitter", color: "from-gray-600 to-gray-800" },
                  { icon: "FB", label: "Facebook", color: "from-blue-500 to-blue-600" },
                ].map((platform) => (
                  <div
                    key={platform.label}
                    className={`bg-gradient-to-r ${platform.color} text-white text-xs font-medium px-4 py-2 rounded-full shadow-md`}
                  >
                    {platform.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <main className="container mx-auto px-4 py-10">
        {(selectedCategory === "all" || selectedCategory === "seguidores-ig") &&
          filteredSeguidores.length > 0 && (
            <section id="seguidores-ig" className="mb-16 scroll-mt-20">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 lg:text-2xl">
                    Seguidores Instagram
                  </h2>
                </div>
                <p className="text-sm text-gray-500 ml-11">
                  Entrega en el dia
                </p>
              </div>
              <ProductGrid products={filteredSeguidores} />
            </section>
          )}

        {(selectedCategory === "all" || selectedCategory === "likes-ig") &&
          filteredLikes.length > 0 && (
            <section id="likes-ig" className="mb-16 scroll-mt-20">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500 to-red-500 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 lg:text-2xl">Likes Instagram</h2>
                </div>
                <p className="text-sm text-gray-500 ml-11">Entrega en el dia</p>
              </div>
              <ProductGrid products={filteredLikes} />
            </section>
          )}

        {(selectedCategory === "all" || selectedCategory === "repros-ig") &&
          filteredRepros.length > 0 && (
            <section id="repros-ig" className="mb-16 scroll-mt-20">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 lg:text-2xl">
                    Reproducciones Instagram
                  </h2>
                </div>
                <p className="text-sm text-gray-500 ml-11">
                  Entrega en el dia
                </p>
              </div>
              <ProductGrid products={filteredRepros} />
            </section>
          )}

        {(selectedCategory === "all" ||
          selectedCategory === "comentarios-ig") &&
          filteredComentarios.length > 0 && (
            <section id="comentarios-ig" className="mb-16 scroll-mt-20">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 lg:text-2xl">
                    Comentarios Instagram
                  </h2>
                </div>
                <p className="text-sm text-gray-500 ml-11">
                  Entrega en el dia
                </p>
              </div>
              <ProductGrid products={filteredComentarios} />
            </section>
          )}

        {(selectedCategory === "all" || selectedCategory === "tiktok") &&
          filteredTiktok.length > 0 && (
            <section id="tiktok" className="mb-16 scroll-mt-20">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 18V5l12-2v13"/>
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 lg:text-2xl">
                    Seguidores TikTok
                  </h2>
                </div>
                <p className="text-sm text-gray-500 ml-11">
                  Aumenta tu presencia en TikTok
                </p>
              </div>
              <ProductGrid products={filteredTiktok} />
            </section>
          )}

        {(selectedCategory === "all" || selectedCategory === "twitter") &&
          filteredTwitter.length > 0 && (
            <section id="twitter" className="mb-16 scroll-mt-20">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center">
                    <span className="text-white text-sm font-bold">X</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 lg:text-2xl">
                    Seguidores Twitter / X
                  </h2>
                </div>
                <p className="text-sm text-gray-500 ml-11">
                  Aumenta tu presencia en Twitter
                </p>
              </div>
              <ProductGrid products={filteredTwitter} />
            </section>
          )}

        {(selectedCategory === "all" || selectedCategory === "facebook") &&
          filteredFacebook.length > 0 && (
            <section id="facebook" className="mb-16 scroll-mt-20">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                    <span className="text-white text-sm font-bold">f</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 lg:text-2xl">
                    Seguidores Facebook
                  </h2>
                </div>
                <p className="text-sm text-gray-500 ml-11">
                  Aumenta tu presencia en Facebook
                </p>
              </div>
              <ProductGrid products={filteredFacebook} />
            </section>
          )}

        {(selectedCategory === "all" || selectedCategory === "youtube") &&
          filteredYoutube.length > 0 && (
            <section id="youtube" className="mb-16 scroll-mt-20">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M10 8l6 4-6 4V8z"/>
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 lg:text-2xl">
                    Suscriptores YouTube
                  </h2>
                </div>
                <p className="text-sm text-gray-500 ml-11">
                  Crece tu canal de YouTube
                </p>
              </div>
              <ProductGrid products={filteredYoutube} />
            </section>
          )}

        {(selectedCategory === "all" || selectedCategory === "telegram") &&
          filteredMiembrosTelegram.length > 0 && (
            <section id="telegram" className="mb-16 scroll-mt-20">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-400 to-sky-500 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 lg:text-2xl">
                    Miembros Telegram
                  </h2>
                </div>
                <p className="text-sm text-gray-500 ml-11">
                  Crece tu canal de Telegram
                </p>
              </div>
              <ProductGrid products={filteredMiembrosTelegram} />
            </section>
          )}

        {(selectedCategory === "all" || selectedCategory === "clientesContentos") && (
          <section id="clientesContentos" className="mb-16 scroll-mt-20">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-900 lg:text-2xl mb-1">
                Clientes Satisfechos
              </h2>
              <p className="text-sm text-gray-500">
                Lo que dicen nuestros clientes
              </p>
            </div>
            <ProductGridClientes products={clientesContentos} />
          </section>
        )}
      </main>

      <Footer />
      <WhatsAppButton />
      <FloatingCartButton onClick={() => setIsCartOpen(true)} />
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
}
