import React from 'react'
export default function ComponentsPage(){
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-2xl font-bold">Components</h1>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        <div className="bg-white p-6 rounded-lg shadow"><h3 className="font-semibold">Card</h3><p className="text-sm text-gray-600 mt-2">Description</p></div>
        <div className="bg-white p-6 rounded-lg shadow"><h3 className="font-semibold">Card</h3><p className="text-sm text-gray-600 mt-2">Description</p></div>
        <div className="bg-white p-6 rounded-lg shadow"><h3 className="font-semibold">Card</h3><p className="text-sm text-gray-600 mt-2">Description</p></div>
      </div>
    </div>
  )
}
