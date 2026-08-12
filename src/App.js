import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import './App.css'
import Heading from './components/common/heading/Heading'
import Home from './components/home/Home'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import ExperienceShowcase from './components/experience/ExperienceShowcase'
import Project from './components/project/Project'
import Skills from './components/skills/Skills'
import ContactMe from './components/contact/ContactMe'

const App = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="portfolio-shell">
      <Heading />

      <main className="page-content">
        <Home />
        <About />
        <Experience />
        <ExperienceShowcase />
        <Skills />
        <Project />
        <ContactMe />
      </main>

      <footer className="site-footer">
        <div className="footer-brand">
          <span className="footer-mark">HD</span>
          <span>Henriette Daughty Oloo</span>
        </div>

        <div className="footer-socials">
          <a href="https://www.linkedin.com/in/henriette-oloo/" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
          <a href="https://github.com/HenrietteDaughtyOloo" target="_blank" rel="noreferrer" aria-label="GitHub">gh</a>
          <a href="mailto:henriettedooloo@gmail.com" aria-label="Email">@</a>
        </div>

        <button type="button" className="back-to-top" aria-label="Back to top" onClick={scrollToTop}>↑</button>
      </footer>

      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
      />
    </div>
  )
}

export default App
