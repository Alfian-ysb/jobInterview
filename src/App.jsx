import { useMemo, useState } from 'react'
import './App.css'
import products from './assets/products.json'
// import Card from './components/Card'

function App() {

  return (
    <main className="catalogue">
      <header className="catalogue-header">
        <div className="brand-mark">FORM / FOUND</div>
        <div className="header-note">Curated goods for everyday living</div>
      </header>
      <section className="intro">
        <p className="eyebrow">The collection / 2026</p>
        <h1>Objects with<br /><em>a point of view.</em></h1>
        <p className="intro-copy">A considered selection of useful, beautiful things made to stay in your daily orbit.</p>
      </section>
        <div className='product-grid'>
        {/* TODO:  Display the products here */}
            
        </div>

      <footer className="catalogue-footer">
        <span>Form / Found</span>
        <span>Made for the everyday</span>
      </footer>
      
    </main>
  )
}

export default App
