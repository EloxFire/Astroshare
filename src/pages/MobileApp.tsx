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
        <div className="slide-image slide-image-bottom main">
          <img className="main-image" src="/images/promo/app/home.png" alt="Page d'accueil de l'application Astroshare" />
        </div>
      </div>

      <div className="slide auto reverse">
        <div className="slide-content">
          <p className="title">Recherchez.</p>
          <p className="subtitle">Trouvez l'objet que vous recherchez rapidement grâce à une base de plus de 8000 objets !</p>

          <p className="text">Objets des catalogues Messier, NGC et IC</p>
        </div>
        <div className="slide-image">
          <img className="main-image small reverse" src="/images/promo/app/Group 2.png" alt="Page d'accueil de l'application Astroshare" />
        </div>
      </div>

      <div className="slide full">
        <div className="slide-content">
          <p className="title">Observez.</p>
          <p className="subtitle">Retrouvez tous les détails nécéssaires à l'observation des objets du ciel profond.</p>

          <p className="text">Caractéristiques, heures de visibilité, matériel...</p>
        </div>
        <div className="slide-image">
          <img className="main-image" src="/images/promo/app/details.png" alt="Page d'accueil de l'application Astroshare" />
        </div>
      </div>

      <div className="slide full reverse">
        <div className="slide-content">
          <p className="title">Et bien plus !</p>
          <p className="subtitle">L'application Astroshare vous propose encore bien des outils pour vous accompagner dans vos observations de la voûte celleste !</p>

          <p className="text">Météo solaire, image du jour de la NASA, enregistrement de vos lieux d'observation, boussole, calcul des phases de la Lune....</p>
        </div>
        <div className="slide-image">
          <img className="main-image reverse no-transform" src="/images/promo/app/Group 3.png" alt="Page d'accueil de l'application Astroshare" />
        </div>
      </div>
    </div>
  )
}
