"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import { ProductModal } from "./product-modal";
import { useCart } from "@/lib/cart-context";
import { ShoppingCart, Check, ChevronRight } from "lucide-react";

interface ProductCardProps {
  title: string;
  price: string;
  quantity: string;
  description?: string;
  category?: string;
  image: string;
}

const getPlatformInfo = (title: string, category?: string) => {
  const titleLower = title.toLowerCase();
  const categoryLower = category?.toLowerCase() || "";

  if (titleLower.includes("tiktok") || categoryLower.includes("tiktok")) {
    return { logo: "/tiktok-logo.jpg", gradient: "from-gray-800 to-gray-950", accent: "bg-gray-800" };
  }
  if (titleLower.includes("youtube") || categoryLower.includes("youtube")) {
    return { logo: "/youtube-logo.jpg", gradient: "from-red-500 to-red-600", accent: "bg-red-500" };
  }
  if (titleLower.includes("twitter") || categoryLower.includes("twitter")) {
    return { logo: "/twitter-logo.jpg", gradient: "from-gray-700 to-gray-800", accent: "bg-gray-700" };
  }
  if (titleLower.includes("facebook") || categoryLower.includes("facebook")) {
    return { logo: "/facebook-logo.jpg", gradient: "from-blue-500 to-blue-600", accent: "bg-blue-500" };
  }
  if (titleLower.includes("telegram") || categoryLower.includes("telegram")) {
    return { logo: "/telegram-logo.jpg", gradient: "from-sky-400 to-sky-500", accent: "bg-sky-400" };
  }
  return { logo: "/iglogo.png", gradient: "from-purple-500 via-pink-500 to-orange-400", accent: "bg-pink-500" };
};

const getServiceType = (title: string) => {
  const lower = title.toLowerCase();
  if (lower.includes("seguidor")) return "Seguidores";
  if (lower.includes("like")) return "Likes";
  if (lower.includes("repro")) return "Reproducciones";
  if (lower.includes("comentario")) return "Comentarios";
  if (lower.includes("suscriptor")) return "Suscriptores";
  if (lower.includes("miembro")) return "Miembros";
  return "Servicio";
};

export function ProductCard({
  title,
  price,
  quantity,
  description,
  category,
  image,
}: ProductCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ title, price, quantity, amount: 1 });
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const platform = getPlatformInfo(title, category);
  const serviceType = getServiceType(title);

  return (
    <>
      <div className="group bg-white rounded-2xl border border-gray-200 hover:border-orange-300 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col h-full">
        {/* Top gradient bar */}
        <div className={`h-1.5 bg-gradient-to-r ${platform.gradient}`} />

        {/* Card Body */}
        <div className="p-4 sm:p-5 flex flex-col flex-1 gap-4">
          {/* Platform logo + Service type */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl overflow-hidden shadow-md ring-1 ring-gray-100 flex-shrink-0">
              <Image
                src={platform.logo || "/placeholder.svg"}
                alt="Platform"
                width={44}
                height={44}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="min-w-0">
              <p className="text-xs text-gray-500 font-medium">{serviceType}</p>
              <p className="text-sm font-bold text-gray-900 truncate">{title}</p>
            </div>
          </div>

          {/* Quantity highlight */}
          <div className="text-center py-3 bg-gray-50 rounded-xl">
            <p className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent leading-none">
              {quantity}
            </p>
            <p className="text-xs text-gray-500 mt-1 font-medium">{serviceType.toLowerCase()}</p>
          </div>

          {/* Price */}
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">{price}</p>
            <p className="text-xs text-gray-400 mt-0.5">Entrega en 24hs</p>
          </div>

          {/* Features mini list */}
          <div className="space-y-1.5">
            {["Entrega rapida", "100% seguro", "Soporte 24/7"].map((feat) => (
              <div key={feat} className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Check className="w-2.5 h-2.5 text-green-600" />
                </div>
                <span className="text-xs text-gray-600">{feat}</span>
              </div>
            ))}
          </div>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Buttons */}
          <div className="space-y-2">
            <Button
              onClick={handleAddToCart}
              disabled={isAdded}
              className={`w-full font-semibold shadow-sm transition-all cursor-pointer disabled:cursor-not-allowed text-sm h-10 rounded-xl ${
                isAdded
                  ? "bg-green-500 hover:bg-green-500 text-white disabled:opacity-100"
                  : "bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white hover:shadow-md"
              }`}
            >
              {isAdded ? (
                <>
                  <Check className="w-4 h-4 mr-1.5" />
                  Agregado al carrito
                </>
              ) : (
                <>
                  <ShoppingCart className="w-4 h-4 mr-1.5" />
                  Agregar al carrito
                </>
              )}
            </Button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full text-xs text-gray-500 hover:text-orange-500 transition-colors cursor-pointer flex items-center justify-center gap-1 py-1"
            >
              Ver detalles
              <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      <ProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        price={price}
        quantity={quantity}
        description={description}
        category={category}
      />
    </>
  );
}
