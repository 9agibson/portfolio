import React, {useRef, useState} from 'react'
import "./contact.css"
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {AiOutlineLinkedin} from 'react-icons/ai'
import emailjs from '@emailjs/browser';
import PopUp from './PopUp'



export const Contact = () => {
  const form = useRef();
  const [result, setResult] = useState('not OK')

  

  const sendEmail = (e) => {
    e.preventDefault();

    

    emailjs.sendForm('service_xer3hi6', 'template_75fs5sy', form.current, 'j9TQ5BgYq4Ifs9nSS')
      .then((result) => {
          // console.log(result.text);
          setResult('OK')
          console.log("result = " + result)
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  
  return (
    <section id='contact'>
      <div style={{visibility: result === 'OK' ? "visible" : "hidden"}}><PopUp /></div>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      
      <div className='container contact__container'>
        <div className='contact__options'>
        <article className='contact__option'>
        <MdOutlineEmail className='contact__icon'/>
          <h4>Email</h4>
          <h5>gibson.aaron.dev@gmail</h5>
          <a href='mailto:gibson.aaron.dev@gmail.com' target='_blank' rel="noreferrer">send a message</a>
        </article>
        
        <article className='contact__option'>
        <RiMessengerLine className='contact__icon'/>
          <h4>Messenger</h4>
          <h5>Aaron Gibson</h5>
          <a href='https://m.me/aaron.gibson.718' target='_blank' rel="noreferrer">send a message</a>
        </article>
        
        <article className='contact__option'>
        <AiOutlineLinkedin className='contact__icon'/>
          <h4>LinkedIn</h4>
          <h5>aaron-c-gibson</h5>
          <a href='https://www.linkedin.com/in/aaron-c-gibson/' target='_blank' rel="noreferrer">send a message</a>
        </article>
        </div>
      
      <form ref={form} onSubmit={sendEmail}>
        <input type='text' name='name' placeholder='Your Full Name' required></input>
        <input type='email' name='email' placeholder='Your Email' required />
        <textarea name='message' rows='7' placeholder='Your Message' required/>
        <button type='submit' className='btn btn-primary' >Send Message</button>
      </form>
      </div>
    </section>
  )
}

export default Contact