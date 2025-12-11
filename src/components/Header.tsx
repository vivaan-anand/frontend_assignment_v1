import React from 'react'

export default function Header(){
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-8 py-6 flex items-center justify-between">
        <div className="text-2xl font-semibold">Acme UI</div>
        <nav className="space-x-6 hidden md:flex">
          <a className="hover:text-blue-600" href="#">Home</a>
          <a className="hover:text-blue-600" href="#">Features</a>
          <a className="hover:text-blue-600" href="#">Contact</a>
        </nav>
        <div className="hidden md:block">
          <button className="px-5 py-2 rounded-md border border-blue-600 text-blue-600 hover:bg-blue-50">Sign in</button>
        </div>
      </div>
    </header>
  )
}
