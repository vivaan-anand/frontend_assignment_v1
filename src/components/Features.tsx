import React from 'react'

const items = [
  {title: 'Pixel-perfect', desc: 'Match the Figma design precisely for desktop screens.'},
  {title: 'Accessible', desc: 'Follow WCAG 2.1 guidelines and semantic HTML.'},
  {title: 'Interactive', desc: 'Hover states and smooth transitions.'},
]

export default function Features(){
  return (
    <section className="mt-12 grid grid-cols-3 gap-6">
      {items.map((it, idx) => (
        <article key={idx} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold">{it.title}</h3>
          <p className="mt-3 text-gray-600">{it.desc}</p>
        </article>
      ))}
    </section>
  )
}
