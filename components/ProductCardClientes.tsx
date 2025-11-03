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

export function ProductCardClientes({
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

  return (
    <>
      <Card className="gap-10 Agroup overflow-hidden hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 bg-white border border-gray-200 hover:border-orange-500 shadow-md hover:scale-[1.02] rounded-2xl flex flex-col">
        <div className="relative w-full bg-white overflow-hidden">
          {/* Imagen con altura ajustada responsive */}
          <div className="relative w-full h-[480px] sm:h-[480px] md:h-[400px] lg:h-[400px] xl:h-[520px] 2xl:h-[600px]">
            {!imageLoaded && (
              <div className="absolute inset-0 bg-white animate-pulse" />
            )}
            <Image
              src={image}
              alt="Social media background"
              fill
              className="object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
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
