"use client";

import { Card } from "@/components/ui/card";
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

export function ProductCardClientes({
  title,
  price,
  quantity,
  description,
  category,
  image,
}: ProductCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { addToCart } = useCart();

  return (
    <>
      <Card
        className="
          w-full
          bg-white border border-gray-200 shadow-md
          rounded-2xl overflow-hidden
          flex flex-col
          transition-all duration-300
          hover:shadow-2xl hover:shadow-orange-500/20
          md:hover:scale-[1.02]
        "
      >
        {/* CONTENEDOR DE MOCKUP */}
        <div className="relative w-full overflow-hidden">
          <div className="relative w-full aspect-[9/16] max-h-[600px]">
            {!imageLoaded && (
              <div className="absolute inset-0 bg-white animate-pulse" />
            )}

            <Image
              src={image}
              alt="Social media mockup"
              fill
              priority
              className="object-cover"
              onLoad={() => setImageLoaded(true)}
            />
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
