import React, { useState } from 'react'
import '../styles/pages/contact.scss'
import CopyrightBadge from '../components/CopyrightBadge'
import { mailRegex } from '../scripts/helpers'

export default function Contact() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSend = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name === '' || email === '' || message === '') return;
    if (mailRegex.test(email) === false) return;

    setLoading(true)
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
            <input type="email" id="email" name="email" placeholder="Votre email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="contact__form__group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Votre message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <button type='submit' disabled={loading}>Envoyer</button>
            <small style={{ marginTop: '1vh' }}>En cliquant sur "envoyer" vous acceptez les conditions générales d'utilisation.</small>
          </div>
        </form>
      </div>
    </div>
  )
}
