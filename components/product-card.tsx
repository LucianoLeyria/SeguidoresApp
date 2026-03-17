"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import { ProductModal } from "./product-modal";
import { useCart } from "@/lib/cart-context";
import { ShoppingCart, Info } from "lucide-react";

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
  if (titleLower.includes("twitter") || categoryLower.includes("twitter")) {
    return "/twitter-logo.jpg";
  }
  if (titleLower.includes("facebook") || categoryLower.includes("facebook")) {
    return "/facebook-logo.jpg";
  }
  if (titleLower.includes("telegram") || categoryLower.includes("telegram")) {
    return "/telegram-logo.jpg";
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
      <Card className="group overflow-hidden bg-white border border-gray-200 hover:border-orange-400 shadow-sm hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 rounded-2xl flex flex-col h-full">
        {/* Image Section */}
        <div className="relative w-full bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
          <div className="relative w-full h-[180px] sm:h-[220px] md:h-[260px]">
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gray-100 animate-pulse" />
            )}
            <Image
              src={image}
              alt={title}
              fill
              className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
              onLoad={() => setImageLoaded(true)}
            />
          </div>

          {/* Platform Logo Badge */}
          <div className="absolute top-3 right-3 z-10">
            <div className="w-10 h-10 rounded-full overflow-hidden shadow-lg ring-2 ring-white bg-white">
              <Image
                src={platformLogo || "/placeholder.svg"}
                alt="Platform"
                width={40}
                height={40}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Quantity Badge */}
          <div className="absolute top-3 left-3 z-10">
            <span className="bg-gradient-to-r from-orange-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
              {quantity}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col flex-1 gap-3">
          <div className="flex-1">
            <h3 className="font-bold text-sm text-gray-900 line-clamp-2 leading-tight">
              {title}
            </h3>
          </div>

          <p className="text-xl font-bold text-orange-500">
            {price}
          </p>

          {/* Buttons */}
          <div className="flex gap-2">
            <Button
              onClick={handleAddToCart}
              disabled={isAdded}
              className="flex-1 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-semibold shadow-sm hover:shadow-md transition-all cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed text-xs h-9 rounded-xl"
            >
              {isAdded ? (
                "Agregado"
              ) : (
                <>
                  <ShoppingCart className="w-3.5 h-3.5 mr-1.5" />
                  Comprar
                </>
              )}
            </Button>
            <Button
              onClick={() => setIsModalOpen(true)}
              variant="outline"
              className="border border-gray-200 hover:border-orange-400 hover:bg-orange-50 text-gray-700 hover:text-orange-600 cursor-pointer text-xs h-9 px-3 rounded-xl"
            >
              <Info className="w-3.5 h-3.5" />
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
