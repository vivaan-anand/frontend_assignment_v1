import React from 'react'

export default function Hero(){
  return (
    <section className="mt-12 grid grid-cols-12 gap-8 items-center">
      <div className="col-span-7">
        <h1 className="text-5xl font-extrabold leading-tight">Build beautiful desktops interfaces — pixel perfect</h1>
        <p className="mt-6 text-lg text-gray-600">Implement the design from the Figma file, follow accessibility guidelines and deliver smooth interactions.</p>
        <div className="mt-8 flex gap-4">
          <button className="px-6 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700">Get started</button>
          <button className="px-6 py-3 rounded-md border border-gray-300 hover:bg-gray-100">View prototype</button>
        </div>
      </div>
      <div className="col-span-5">
        <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-white rounded-2xl shadow-md flex items-center justify-center">
          <div className="text-center text-gray-400">Hero preview / mockup</div>
        </div>
      </div>
    </section>
  )
}
