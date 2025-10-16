"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import { ProductModal } from "./product-modal";
import { useCart } from "@/lib/cart-context";

interface ProductCardProps {
  title: string;
  price: string;
  quantity: string;
  description?: string;
  category?: string;
  image: string;
}

const getPlatformLogo = (title: string, category?: string) => {
  const titleLower = title.toLowerCase();
  const categoryLower = category?.toLowerCase() || "";

  if (titleLower.includes("tiktok") || categoryLower.includes("tiktok")) {
    return "/tiktok-logo.jpg";
  }
  if (titleLower.includes("youtube") || categoryLower.includes("youtube")) {
    return "/youtube-logo.jpg";
  }
  return "/iglogo.png";
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
  const [imageLoaded, setImageLoaded] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ title, price, quantity, amount: 1 });
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const platformLogo = getPlatformLogo(title, category);

  return (
    <>
      <Card className="group overflow-hidden hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 bg-white border border-gray-200 hover:border-orange-500 shadow-md hover:scale-[1.02] rounded-2xl flex flex-col">
        <div className="relative w-full bg-white overflow-hidden">
          {/* Imagen con altura ajustada responsive */}
          <div className="relative w-full h-[250px] sm:h-[300px] md:h-[380px] lg:h-[420px]">
            {!imageLoaded && <div className="absolute inset-0 bg-white animate-pulse" />}
            <Image
              src={image}
              alt="Social media background"
              fill
              className="object-contain group-hover:scale-105 transition-transform duration-300"
              onLoad={() => setImageLoaded(true)}
            />
          </div>

          {/* Logo centrado */}
          <div className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden shadow-xl ring-4 ring-white/80 transition-all duration-300 bg-white">
              <Image
                src={platformLogo || "/placeholder.svg"}
                alt="Platform Logo"
                width={80}
                height={80}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Contenido */}
        <div className="p-3 sm:p-5 bg-white space-y-3 flex flex-col flex-1">
          <div className="text-center flex-1 flex flex-col justify-center min-h-[60px]">
            <h3 className="font-bold text-sm sm:text-base mb-1 text-gray-900 line-clamp-2">
              {title}
            </h3>
            <p className="text-lg sm:text-xl font-bold text-orange-500 truncate">
              {price}
            </p>
          </div>

          {/* Botones centrados y responsive */}
          <div className="flex flex-col sm:flex-row gap-2">
            <Button
              onClick={handleAddToCart}
              disabled={isAdded}
              className="flex-1 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-semibold shadow-lg hover:shadow-orange-500/50 transition-all cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed text-xs sm:text-sm"
            >
              {isAdded ? "Agregado al carrito" : "Comprar"}
            </Button>
            <Button
              onClick={() => setIsModalOpen(true)}
              variant="outline"
              className="flex-1 border-2 border-gray-300 hover:border-orange-500 font-semibold bg-white text-gray-900 hover:bg-gray-50 cursor-pointer text-xs sm:text-sm"
            >
              Detalles
            </Button>
          </div>
        </div>
      </Card>

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
