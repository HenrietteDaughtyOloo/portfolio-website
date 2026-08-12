import React, { useState } from 'react'
import { toast } from 'react-toastify'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const subject = encodeURIComponent(`Portfolio enquiry from ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )

    const mailtoLink = `mailto:henriettedooloo@gmail.com?subject=${subject}&body=${body}`

    try {
      const newWindow = window.open(mailtoLink, '_self')
      if (newWindow === null) {
        throw new Error('Blocked')
      }
      toast.success('Your email app is opening with your message ready to send.')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      toast.error('Something went wrong. Please email henriettedooloo@gmail.com directly.')
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="field-row">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          required
        />
      </div>

      <div className="field-row">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
          required
        />
      </div>

      <div className="field-row">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell me a bit about your idea, project, or role."
          rows="5"
          required
        />
      </div>

      <button type="submit" className="contact-submit">Send email</button>
    </form>
  )
}

export default ContactForm
