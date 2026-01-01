"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { useCart } from "@/app/context/CartContext";
import Link from "next/link";

export default function Page() {
  const { cart, clearCart } = useCart();

 
  useEffect(() => {
    if (cart.length > 0) {
      const timer = setTimeout(() => {
        clearCart();
      }, 300000);

      return () => clearTimeout(timer);
    }
  }, [cart, clearCart]);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="container mx-auto max-w-4xl py-10 text-center">
        <h1 className="text-2xl font-bold mb-4">
          Cart Expired ⏰
        </h1>
        <Link
          href="/"
          className="text-orange-500 font-semibold underline"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-5xl py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">
        Your Cart
      </h1>

      <p className="text-red-500 font-semibold mb-6">
        ⏳ Cart will clear automatically in 5 mint
      </p>

      {/* Cart Items */}
      <div className="space-y-6">
        {cart.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-6 border p-4 rounded-lg"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={100}
              height={100}
              className="object-contain"
            />

            <div className="flex-1">
              <h2 className="font-bold text-lg">
                {item.title}
              </h2>
              <p className="text-orange-500 font-semibold">
                ${item.price}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="mt-10 border-t pt-6 flex justify-between items-center">
        <h2 className="text-2xl font-bold">
          Total: ${totalPrice.toFixed(2)}
        </h2>

        <button className="bg-orange-400 text-white font-bold px-8 py-3 rounded">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}
