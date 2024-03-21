import React from 'react'
import "./contactme.css"
import ContactForm from './ContactForm'

const ContactMe = () => {
  return (
    <div>
    <h1>Contact Me</h1>
    <div className='container flexSB'>
        <div className='container'>
    <img className='formImg' src="https://res.cloudinary.com/drt1jptk7/image/upload/v1711027977/undraw_personal_email_re_4lx7_roh6lp.svg" alt="" />
    </div>
    <div className='contact-page-container'>
      <p className='intro-text'>If you have any questions or inquiries,  feel
      to contact me using the form below:</p>
      <ContactForm/>
    </div>
    </div>
    </div>
  )
}

export default ContactMe
