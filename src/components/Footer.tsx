import React from 'react'

export default function Footer(){
  return (
    <footer className="border-t mt-16 bg-white">
      <div className="max-w-6xl mx-auto px-8 py-8 text-sm text-gray-600">
        © {new Date().getFullYear()} Frontend Intern Assignment — Built with React + Tailwind
      </div>
    </footer>
  )
}
