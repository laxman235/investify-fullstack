import React from 'react'
export default function Home(){
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl font-bold mb-4">Make payments & investments easy with Investify</h1>
          <p className="text-gray-600 mb-6">A React + Tailwind demo. Use as starting point.</p>
          <div className="space-x-3">
            <button className="px-6 py-3 bg-blue-600 text-white rounded">Get started</button>
            <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded">Make payment</button>
          </div>
        </div>
        <div>
          <img src="/src/assets/logo.png" className="mx-auto w-3/4" alt="illustration"/>
        </div>
      </div>
    </section>
  )
}
