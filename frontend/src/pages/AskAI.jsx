import React, { useState } from 'react'

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:8080'

export default function AskAI(){
  const [prompt, setPrompt] = useState('Suggest a plan for ₹30,000 salary.')
  const [answer, setAnswer] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleAsk(){
    setLoading(true)
    try{
      const res = await fetch(`${API_BASE}/api/ai/ask`, {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({ prompt })
      })
      const data = await res.json()
      setAnswer(data.answer)
    } finally{
      setLoading(false)
    }
  }

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-2">Ask InvestiFy AI</h2>
      <textarea className="w-full border rounded p-2" rows="3" value={prompt} onChange={e=>setPrompt(e.target.value)} />
      <button onClick={handleAsk} className="mt-2 px-4 py-2 rounded bg-emerald-600 text-white" disabled={loading}>
        {loading ? 'Thinking…' : 'Ask'}
      </button>
      {answer && <pre className="mt-3 whitespace-pre-wrap text-sm bg-slate-50 p-3 rounded">{answer}</pre>}
    </div>
  )
}
