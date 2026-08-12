import React, { useState } from 'react'
import Head from './Head'
import './header.css'

const navItems = [
  { label: 'Work', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

const Heading = () => {
  const [activeNav, setActiveNav] = useState('Work')

  const goHome = (event) => {
    event.preventDefault()
    setActiveNav('Work')
    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <Head />

      <header className="top-header">
        <a href="#home" className="brand-mark" aria-label="Brand mark" onClick={goHome}>
          <span className="brand-ring" />
          <span className="brand-name">HD.</span>
        </a>

        <nav className="main-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={item.label === activeNav ? 'active' : ''}
              onClick={() => setActiveNav(item.label)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="status-pill" aria-label="Status">
          <span className="status-dot" />
          <span>Nairobi</span>
          <span className="status-separator">•</span>
          <span>Open to remote</span>
        </div>
      </header>
    </>
  )
}

export default Heading
