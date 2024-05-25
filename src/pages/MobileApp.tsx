import React from 'react'
import '../styles/pages/mobileApp.scss'

export default function MobileApp() {
  return (
    <div className="mobile-app">
      <div className="slide">
        <div className="slide-content">
          <p className="title">L'application Astroshare</p>
          <p className="subtitle">Votre nouveau compagnon d'observations astronomiques</p>

          <p className="text">Disponible en téléchargement gratuit sur le PlayStore Android !</p>
          <img className="gplay-badge" src="/images/icons/google-play-badge.png" alt="Badge Google Play" />
        </div>
        <img className="main-image" src="/images/promo/app/home.png" alt="Page d'accueil de l'application Astroshare" />
      </div>
    </div>
  )
}
