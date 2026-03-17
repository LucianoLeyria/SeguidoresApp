"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import { ProductModal } from "./product-modal";
import { useCart } from "@/lib/cart-context";
import { ShoppingCart, Check } from "lucide-react";

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
    return { logo: "/tiktok-logo.jpg", gradient: "from-gray-800 to-gray-950" };
  }
  if (titleLower.includes("youtube") || categoryLower.includes("youtube")) {
    return { logo: "/youtube-logo.jpg", gradient: "from-red-500 to-red-600" };
  }
  if (titleLower.includes("twitter") || categoryLower.includes("twitter")) {
    return { logo: "/twitter-logo.jpg", gradient: "from-gray-700 to-gray-800" };
  }
  if (titleLower.includes("facebook") || categoryLower.includes("facebook")) {
    return { logo: "/facebook-logo.jpg", gradient: "from-blue-500 to-blue-600" };
  }
  if (titleLower.includes("telegram") || categoryLower.includes("telegram")) {
    return { logo: "/telegram-logo.jpg", gradient: "from-sky-400 to-sky-500" };
  }
  return { logo: "/iglogo.png", gradient: "from-purple-500 via-pink-500 to-orange-400" };
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

  return (
    <>
      <div className="group bg-white rounded-2xl border border-gray-200 hover:border-orange-300 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col h-full">
        {/* Top gradient bar */}
        <div className={`h-1 bg-gradient-to-r ${platform.gradient}`} />

        <div className="p-4 sm:p-5 flex flex-col flex-1 items-center text-center gap-3">
          {/* Platform logo */}
          <div className="w-12 h-12 rounded-full overflow-hidden shadow-md ring-2 ring-gray-100">
            <Image
              src={platform.logo}
              alt="Platform"
              width={48}
              height={48}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Quantity - the hero of the card */}
          <p className="text-4xl font-extrabold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent leading-none">
            {quantity}
          </p>

          {/* Price */}
          <div>
            <p className="text-xl font-bold text-gray-900">{price}</p>
            <p className="text-[11px] text-gray-400 mt-0.5">Entrega en 24hs</p>
          </div>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Buy button */}
          <Button
            onClick={handleAddToCart}
            disabled={isAdded}
            className={`w-full font-semibold transition-all cursor-pointer disabled:cursor-not-allowed text-sm h-10 rounded-xl ${
              isAdded
                ? "bg-green-500 hover:bg-green-500 text-white disabled:opacity-100"
                : "bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white hover:shadow-md"
            }`}
          >
            {isAdded ? (
              <>
                <Check className="w-4 h-4 mr-1.5" />
                Agregado
              </>
            ) : (
              <>
                <ShoppingCart className="w-4 h-4 mr-1.5" />
                Comprar
              </>
            )}
          </Button>

          {/* Details link */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-xs text-gray-400 hover:text-orange-500 transition-colors cursor-pointer"
          >
            Ver detalles
          </button>
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
