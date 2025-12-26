import { ProductCardClientes } from "@/components/ProductCardClientes";

interface Product {
  id: number;
  title: string;
  price: string;
  quantity: string;
  description?: string;
  category?: string;
  image?: string;
}
//comment dummy
interface ProductGridProps {
  products: Product[];
}

export function ProductGridClientes({ products }: ProductGridProps) {
  return (
    <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto px-4">
      {products.map((product) => (
        <div key={product.id} className="w-full max-w-[340px]">
          <ProductCardClientes {...product} />
        </div>
      ))}
    </div>
  );
}
