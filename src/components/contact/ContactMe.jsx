import React from 'react'
import './contactme.css'
import ContactForm from './ContactForm'

const ContactMe = () => {
  return (
    <section id="contact" className="section-block contact-section">
      <div className="section-heading contact-heading">
        <p>Contact</p>
        <h2>Let&apos;s build something useful.</h2>
      </div>

      <div className="contact-layout">
        <div className="contact-card">
          <p className="contact-kicker">Available for product, mobile, and web work</p>
          <h3>Tell me what you&apos;re building.</h3>
          <p className="contact-copy">
            I&apos;m open to product engineering, digital experiences, and meaningful software projects.
            If you have an idea, a team, or a role that needs someone who can ship cleanly from concept to delivery,
            I&apos;d love to hear from you.
          </p>

          <div className="contact-links">
            <a href="mailto:henriettedooloo@gmail.com">henriettedooloo@gmail.com</a>
            <a href="https://www.linkedin.com/in/henriette-oloo/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/HenrietteDaughtyOloo" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>

        <div className="contact-panel">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

export default ContactMe
