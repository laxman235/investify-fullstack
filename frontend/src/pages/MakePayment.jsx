import React from 'react'
export default function MakePayment(){
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-2xl font-bold mt-6">Make a Payment</h1>
      <form className="mt-6 max-w-md">
        <label className="block text-sm">Amount</label>
        <input className="w-full border p-2 rounded mt-1" placeholder="₹1000"/>
        <label className="block text-sm mt-3">Card number</label>
        <input className="w-full border p-2 rounded mt-1" placeholder="xxxx-xxxx-xxxx-xxxx"/>
        <div className="mt-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded">Pay</button>
        </div>
      </form>
    </div>
  )
}
