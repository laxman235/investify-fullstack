import React, {useState} from 'react'
import Home from './pages/Home'
import About from './pages/About'
import ComponentsPage from './pages/ComponentsPage'
import MakePayment from './pages/MakePayment'

export default function App(){
  const [route, setRoute] = useState('home')
  return (
    <div>
      <header className="bg-white shadow">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src="/src/assets/logo.png" className="h-10" alt="Investify"/>
            <span className="font-semibold text-lg">Investify</span>
          </div>
          <nav className="space-x-4">
            <button onClick={()=>setRoute('home')} className="hover:text-blue-600">Home</button>
            <button onClick={()=>setRoute('components')} className="hover:text-blue-600">Components</button>
            <button onClick={()=>setRoute('about')} className="hover:text-blue-600">About</button>
            <button onClick={()=>setRoute('make-payment')} className="hover:text-blue-600">Pay</button>
          </nav>
        </div>
      </header>

      <main>
        {route==='home' && <Home />}
        {route==='about' && <About />}
        {route==='components' && <ComponentsPage />}
        {route==='make-payment' && <MakePayment />}
      </main>

      <footer className="bg-white mt-12">
        <div className="container mx-auto px-6 py-6 text-center text-gray-600">
          © Investify - UI Kit
        </div>
      </footer>
    </div>
  )
}
