"use client";

import { useCart } from "@/app/context/CartContext";

export default function AddToCartButton({ product }: any) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() =>
        addToCart({
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
        })
      }
      className="mt-6 bg-orange-500 text-white font-bold px-6 py-3 rounded hover:bg-orange-600"
    >
      Add to Cart
    </button>
  );
}
