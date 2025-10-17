import { ProductCard } from "@/components/product-card";

interface Product {
  id: number;
  title: string;
  price: string;
  quantity: string;
  description?: string;
  category?: string;
  image?: string;
}

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
      {products.map((product) => (
        <div className="w-[calc(50%-1rem)] sm:w-[calc(50%-1.5rem)] md:w-[calc(33.333%-1.5rem)] lg:w-[calc(25%-1.5rem)] xl:w-[calc(25%-1.5rem)]" key={product.id}>
          <ProductCard  {...product} />
        </div>
      ))}
    </div>
  );
}
