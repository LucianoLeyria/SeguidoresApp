"use client";

import { Header } from "@/components/header";
import { ProductGrid } from "@/components/product-grid";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { FloatingCartButton } from "@/components/floating-cart-button";
import { CartSidebar } from "@/components/cart-sidebar";
import { Footer } from "@/components/footer";
import { useState, useMemo } from "react";

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
    image: "/1.png",
  },
  {
    id: 22,
    title: "10,000 REPROS IG",
    price: "$12,000.00",
    quantity: "10,000",
    image: "/2.png",
  },
  //{ id: 23, title: "20,000 REPROS", price: "$20,000.00", quantity: "20,000", image: "/3.png" },
  //{ id: 24, title: "30,000 REPROS", price: "$28,000.00", quantity: "30,000", image: "/4.png" },
  //{ id: 25, title: "40,000 REPROS", price: "$35,000.00", quantity: "40,000", image: "/5.png" },
  {
    id: 26,
    title: "50,000 REPROS IG",
    price: "$30,000.00",
    quantity: "50,000",
    image: "/6.png",
  },
  //{ id: 27, title: "60,000 REPROS", price: "$42,000.00", quantity: "60,000", image: "/7.png" },
  //{ id: 28, title: "70,000 REPROS", price: "$45,000.00", quantity: "70,000", image: "/8.png" },
  //{ id: 29, title: "80,000 REPROS", price: "$48,000.00", quantity: "80,000", image: "/9.png" },
  {
    id: 30,
    title: "100,000 REPROS IG",
    price: "$50,000.00",
    quantity: "100,000",
    image: "/10.png",
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

      <main className="container mx-auto px-4 py-12">
        {(selectedCategory === "all" || selectedCategory === "seguidores-ig") &&
          filteredSeguidores.length > 0 && (
            <section id="seguidores-ig" className="mb-20 scroll-mt-20">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <svg
                    className="w-8 h-8 text-pink-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <h2 className="text-xl font-bold tracking-wider text-gray-900 lg:text-3xl">
                    SEGUIDORES INSTAGRAM
                  </h2>
                </div>
                <p className="text-sm text-gray-600">
                  Este servicio aumenta en el día
                </p>
              </div>
              <ProductGrid products={filteredSeguidores} />
            </section>
          )}

        {(selectedCategory === "all" || selectedCategory === "likes-ig") &&
          filteredLikes.length > 0 && (
            <section id="likes-ig" className="mb-20 scroll-mt-20">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <svg
                    className="w-8 h-8 text-pink-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <h2 className="text-xl font-bold tracking-wider text-gray-900 lg:text-3xl">
                    LIKES INSTAGRAM
                  </h2>
                </div>
                <p className="text-sm text-gray-600">
                  Este servicio aumenta en el día
                </p>
              </div>
              <ProductGrid products={filteredLikes} />
            </section>
          )}

        {(selectedCategory === "all" || selectedCategory === "repros-ig") &&
          filteredRepros.length > 0 && (
            <section id="repros-ig" className="mb-20 scroll-mt-20">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <svg
                    className="w-8 h-8 text-pink-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <h2 className="text-xl font-bold tracking-wider text-gray-900 lg:text-3xl">
                    REPROS INSTAGRAM
                  </h2>
                </div>
                <p className="text-sm text-gray-600">
                  Este servicio aumenta en el día
                </p>
              </div>
              <ProductGrid products={filteredRepros} />
            </section>
          )}

        {(selectedCategory === "all" ||
          selectedCategory === "comentarios-ig") &&
          filteredComentarios.length > 0 && (
            <section id="comentarios-ig" className="mb-20 scroll-mt-20">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <svg
                    className="w-8 h-8 text-pink-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <h2 className="text-xl font-bold tracking-wider text-gray-900 lg:text-3xl">
                    COMENTARIOS INSTAGRAM
                  </h2>
                </div>
                <p className="text-sm text-gray-600">
                  Este servicio aumenta en el día
                </p>
              </div>
              <ProductGrid products={filteredComentarios} />
            </section>
          )}

        {(selectedCategory === "all" || selectedCategory === "tiktok") &&
          filteredTiktok.length > 0 && (
            <section id="tiktok" className="mb-20 scroll-mt-20">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <svg
                    className="w-8 h-8 text-gray-900"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                  <h2 className="text-xl font-bold tracking-wider text-gray-900 lg:text-3xl">
                    SEGUIDORES TIKTOK
                  </h2>
                </div>
                <p className="text-sm text-gray-600">
                  Aumenta tu presencia en TikTok
                </p>
              </div>
              <ProductGrid products={filteredTiktok} />
            </section>
          )}

        {(selectedCategory === "all" || selectedCategory === "twitter") &&
          filteredTwitter.length > 0 && (
            <section id="twitter" className="mb-20 scroll-mt-20">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <svg
                    className="w-8 h-8 text-gray-900"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2H21.5l-7.25 8.26L22 22h-5.906l-4.64-6.076L6.125 22H2.87l7.75-8.835L2 2h6.094l4.242 5.674L18.244 2zM17.188 20.25h1.58L7.05 3.64H5.344l11.844 16.61z" />
                  </svg>

                  <h2 className="text-xl font-bold tracking-wider text-gray-900 lg:text-3xl">
                    SEGUIDORES TWITTER
                  </h2>
                </div>
                <p className="text-sm text-gray-600">
                  Aumenta tu presencia en Twitter
                </p>
              </div>
              <ProductGrid products={filteredTwitter} />
            </section>
          )}

        {(selectedCategory === "all" || selectedCategory === "facebook") &&
          filteredFacebook.length > 0 && (
            <section id="twitter" className="mb-20 scroll-mt-20">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <svg
                    className="w-8 h-8 text-gray-900"
                    fill="blue"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.675 0h-21.35C.597 0 0 .6 0 1.333v21.333C0 23.4.597 24 1.325 24H12.82v-9.294H9.692V11.08h3.128V8.414c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.098 2.797.142v3.24h-1.918c-1.504 0-1.795.715-1.795 1.763v2.309h3.587l-.467 3.626h-3.12V24h6.116C23.403 24 24 23.4 24 22.667V1.333C24 .6 23.403 0 22.675 0z" />
                  </svg>

                  <h2 className="text-xl font-bold tracking-wider text-gray-900 lg:text-3xl">
                    SEGUIDORES FACEBOOK
                  </h2>
                </div>
                <p className="text-sm text-gray-600">
                  Aumenta tu presencia en Facebook
                </p>
              </div>
              <ProductGrid products={filteredFacebook} />
            </section>
          )}

        {(selectedCategory === "all" || selectedCategory === "youtube") &&
          filteredYoutube.length > 0 && (
            <section id="youtube" className="mb-20 scroll-mt-20">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <svg
                    className="w-8 h-8 text-red-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  <h2 className="text-xl font-bold tracking-wider text-gray-900 lg:text-3xl">
                    SUSCRIPTORES YOUTUBE
                  </h2>
                </div>
                <p className="text-sm text-gray-600">
                  Crece tu canal de YouTube
                </p>
              </div>
              <ProductGrid products={filteredYoutube} />
            </section>
          )}

        {(selectedCategory === "all" || selectedCategory === "telegram") &&
          filteredMiembrosTelegram.length > 0 && (
            <section id="youtube" className="mb-20 scroll-mt-20">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <svg
                    className="w-8 h-8 text-gray-900"
                    fill="#0088cc"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm5.707 8.293-1.79 8.436c-.135.609-.492.757-.997.472l-2.762-2.037-1.333 1.285c-.147.147-.271.271-.553.271l.197-2.793 5.086-4.593c.221-.197-.048-.307-.341-.11l-6.287 3.957-2.709-.848c-.59-.184-.601-.59.123-.872l10.588-4.083c.492-.18.923.12.765.87z" />
                  </svg>

                 <h2 className="text-xl font-bold tracking-wider text-gray-900 lg:text-3xl">
                    MIEMBROS TELEGRAM
                  </h2>
                </div>
                <p className="text-sm text-gray-600">
                  Crece tu canal de Telegram
                </p>
              </div>
              <ProductGrid products={filteredMiembrosTelegram} />
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
