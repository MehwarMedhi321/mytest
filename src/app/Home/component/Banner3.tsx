import React from 'react'

function Banner() {
  return (
    <div>
      <div className="mx-auto max-w-7xl ">
        <div className="relative">
          <img
            src={'/images/paper-bg.jpg'}
            alt="billboard"
            className="h-50 w-full rounded-lg"
            height={0}
            width={0}
            sizes="100vw"
          />
          <div className="absolute inset-0 h-full w-full rounded-lg bg-gray-950 opacity-30" />
          <img
            src='https://s.alicdn.com/@sc04/kf/H441cfa789a474d6c9e0e94ba3c39d00f4/Vintage-Baggy-Men-s-Jeans-Custom-Logo-Print-Straight-Wide-Leg-Denim-Pants-3D-Digital-Printing-Custom-Design-Wholesale.jpg_300x300.jpg'
            alt="billboard"
            className="absolute bottom-5 right-5 "
            height={0}
            width={0}
            sizes="100vw"
            style={{ width: 'auto', height: '10rem' }}
          />
          <h3 className="absolute left-10 top-1/2 w-full max-w-3xl -translate-y-1/2 text-5xl font-semibold tracking-tight text-white">
            Connect, Order Now
            Best Electronics Collection...
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Banner
