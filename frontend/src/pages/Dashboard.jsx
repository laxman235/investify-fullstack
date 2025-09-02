import React from 'react'
export default function Dashboard(){
  return (
    <div className="grid gap-4">
      <div className="bg-white p-4 rounded-xl shadow">
        <h2 className="text-lg font-semibold">Welcome back 👋</h2>
        <p className="text-slate-600">Current balance: <span className="font-bold">₹15,750</span></p>
      </div>
      <div className="bg-white p-4 rounded-xl shadow">
        <h3 className="font-semibold mb-2">Smart Budget Tip</h3>
        <p className="text-sm text-slate-700">Cut down on dining-out to save ~₹800 this month.</p>
      </div>
    </div>
  )
}
