import React from 'react'
import Navbar from './components/Navbar'
import Catalog from './components/Catalog'

export default function App(){
  return (
    <div className="app">
      <Navbar />
      <main>
        <Catalog />
      </main>
    </div>
  )
}
