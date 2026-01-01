"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";
import { useRouter } from "next/navigation";

function Navbar() {
  const { cart } = useCart();
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (!query.trim()) return;
    router.push(`/search?q=${query}`);
    setQuery("");
  };

  return (
    <nav className="container mx-auto max-w-7xl py-6 flex justify-between items-center px-4">
      <Link href="/" className="flex items-center">
        <img
          className="w-20"
          src="https://www.kindpng.com/picc/m/9-95204_online-shopping-logo-png-transparent-png.png"
          alt=""
        />
        <p className="font-bold text-2xl text-orange-500 ml-2">
          Online Shopping
        </p>
      </Link>

      <div className="flex items-center gap-x-6 font-bold">
        <div className="flex items-center border border-gray-300 rounded-full px-3 py-1">
          <input
            type="text"
            placeholder="Search products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            className="outline-none text-sm px-2"
          />
          <button
            onClick={handleSearch}
            className="text-orange-500 font-semibold"
          >
            Search
          </button>
        </div>

        <Link href="/context" className="relative">
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-4 bg-orange-500 text-white text-xs px-2 rounded-full">
              {cart.length}
            </span>
          )}
          <img className="h-6" src="/images/cart.png" alt="Cart" />
        </Link>
      </div>
    </nav>
  );
}




export default Navbar;
