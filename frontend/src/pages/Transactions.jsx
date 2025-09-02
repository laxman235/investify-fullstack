import React, { useEffect, useState } from 'react'
const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:8080'

export default function Transactions(){
  const [rows, setRows] = useState([])
  const [form, setForm] = useState({ amount:'', type:'expense', category:'Food', date:'', notes:'' })

  async function load(){
    const res = await fetch(`${API_BASE}/api/txns`)
    setRows(await res.json())
  }
  useEffect(()=>{ load() }, [])

  async function add(){
    await fetch(`${API_BASE}/api/txns`, {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(form)
    })
    setForm({ amount:'', type:'expense', category:'Food', date:'', notes:'' })
    load()
  }

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-2">Transactions</h2>
      <div className="grid gap-2 md:grid-cols-5 mb-3">
        {['amount','type','category','date','notes'].map(k=> (
          <input key={k} className="border rounded p-2"
            placeholder={k} value={form[k]}
            onChange={e=>setForm({...form, [k]: e.target.value})}/>
        ))}
      </div>
      <button onClick={add} className="mb-4 px-4 py-2 rounded bg-emerald-600 text-white">Add</button>
      <ul className="divide-y">
        {rows.map(r => (
          <li key={r.txnId} className="py-2 flex justify-between">
            <span>₹{r.amount} • {r.type} • {r.category}</span>
            <span className="text-slate-500">{r.date}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
