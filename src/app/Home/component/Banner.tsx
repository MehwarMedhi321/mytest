"use client";

import React from "react";

function Banner() {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="relative">
        {/* Background image */}
        <img
          src="/images/paper-bg.jpg"
          alt="billboard"
          className="h-[300px] w-full rounded-lg object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 rounded-lg bg-gray-950 opacity-30" />

        {/* Product image */}
        <img
          src="https://s.alicdn.com/@sc04/kf/H441cfa789a474d6c9e0e94ba3c39d00f4/Vintage-Baggy-Men-s-Jeans-Custom-Logo-Print-Straight-Wide-Leg-Denim-Pants-3D-Digital-Printing-Custom-Design-Wholesale.jpg_300x300.jpg"
          alt="billboard"
          className="absolute bottom-5 right-5 h-40 w-auto rounded-md"
        />

        {/* Text */}
        <h3 className="absolute left-10 top-1/2 max-w-3xl -translate-y-1/2 text-5xl font-semibold tracking-tight text-white">
          Connect, Order Now <br />
          Best Pant Collection...
        </h3>
      </div>
    </div>
  );
}

export default Banner;
