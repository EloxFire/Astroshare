import React, { useState } from 'react'
import { mailRegex } from '../scripts/helpers/helpers'
import CopyrightBadge from '../components/CopyrightBadge'
import emailjs from '@emailjs/browser';
import '../styles/pages/contact.scss'

export default function Contact() {

  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [response, setResponse] = useState<boolean | undefined>(undefined)

  const handleSend = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name === '' || email === '' || message === '') return;
    if (mailRegex.test(email) === false) return;

    const mail = {
      name: name,
      email: email,
      message: message
    }

    setLoading(true)
    emailjs.send('Astroshare', 'general_template', mail, 'user_OimdLZV4uZQJjsxfr0Cgc')
      .then((result) => {
        setResponse(true)
        setTimeout(() => {
          setResponse(undefined)
        }, 3000)
        setLoading(false)
      }, (error) => {
        setResponse(false)
        setTimeout(() => {
          setResponse(undefined)
        }, 3000)
        setLoading(false)
      });
  }

  return (
    <div className="contact">
      <CopyrightBadge />
      <div className="contact__header">
        <h1 className="h2 title">Me contacter</h1>
        <p>N'hésitez pas à me contacter pour toute question ou soucis.</p>
      </div>
      <div className="contact__form">
        <form onSubmit={handleSend}>
          <div className="contact__form__group">
            <label htmlFor="name">Nom</label>
            <input type="text" id="name" name="name" placeholder="Votre nom" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="contact__form__group">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" placeholder="Votre email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="contact__form__group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Votre message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <button type='submit' disabled={loading}>{loading ? <img src='/images/loader.svg' alt='Loader' /> : "Envoyer"}</button>
            <small style={{ marginTop: '1vh' }}>En cliquant sur "envoyer" vous acceptez les conditions générales d'utilisation.</small>
          </div>
          {response === true && <p style={{ color: 'green' }}>Votre message a bien été envoyé !</p>}
          {response === false && <p style={{ color: 'red' }}>Une erreur est survenue, veuillez réessayer.</p>}
        </form>
      </div>
    </div>
  )
}
