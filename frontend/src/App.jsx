import React, { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Dashboard from './pages/Dashboard.jsx'
import AskAI from './pages/AskAI.jsx'
import Txns from './pages/Transactions.jsx'

export default function App(){
  const [tab, setTab] = useState('dash')
  return (
    <div className="max-w-5xl mx-auto p-4">
      <Navbar />
      <nav className="flex gap-2 mb-4">
        {['dash','ai','txns'].map(t => (
          <button key={t}
            className={"px-3 py-2 rounded " + (tab===t?'bg-emerald-600 text-white':'bg-white border')}
            onClick={()=>setTab(t)}>
            {t==='dash'?'Dashboard':t==='ai'?'AI Assistant':'Transactions'}
          </button>
        ))}
      </nav>
      {tab==='dash' && <Dashboard/>}
      {tab==='ai' && <AskAI/>}
      {tab==='txns' && <Txns/>}
      <footer className="mt-10 text-xs text-slate-500">© {new Date().getFullYear()} InvestiFy</footer>
    </div>
  )
}
