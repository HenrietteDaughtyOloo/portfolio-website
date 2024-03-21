import React from 'react'
import { useState, useRef } from 'react';
import emailjs, { send } from '@emailjs/browser';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify'




const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const serviceKey = process.env.REACT_APP_SERVICE_KEY;
    const publicKey = process.env.REACT_APP_PUBLIC_KEY;
    const templateId = process.env.REACT_APP_TEMPLATE_KEY;
    

  
    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   console.log("Form submitted:", { name, email, message });
    // };

    
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
            // console.log("Form submitted:", { name, email, message });


  
      emailjs
        .sendForm(
          serviceKey,templateId,form.current, {
          publicKey: publicKey,
        })
        .then(
          (result) => {
            
            console.log(result.text)
            
            console.log('Message Sent!');
            setName('');
            setEmail('');
            setMessage('');
            toast.success('Sent!!');
      
            
          },
          (error) => {
            console.log('FAILED...', error.text);

          },
        );
    };

 
  
    return (
      <form ref={form} onSubmit={sendEmail}>
        <div>
          <label htmlFor="name">Name:</label>
          <br />
          <input
            type="text"
            id="name"
            value={name}
            name='from_name'
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <br />
          <input
            type="email"
            id="email"
            value={email}
            name='user_email'
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <br />
          <textarea
            id="message"
            value={message}
            name='message'
            onChange={(e) => setMessage(e.target.value)}
            required
          >

          </textarea>
        </div>
        <button type="submit" value={send}>Submit</button>
      </form>
    );
  }

export default ContactForm
