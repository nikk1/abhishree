import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Clients from './components/Clients'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <div id="about" className="container" style={{ padding: '4rem 1rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Who We Are</h2>
          <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', color: '#555' }}>
            We introduce ourselves as Human Resource consultants with a strong database of candidates from entry-level to senior positions.
            We help organizations find the right candidates for the right roles across PAN India.
          </p>
        </div>
        <Services />
        <Clients />
      </main>
      <Footer />
    </div>
  )
}

export default App
