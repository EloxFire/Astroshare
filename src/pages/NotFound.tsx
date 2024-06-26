import React from 'react'
import { routes } from '../routes'
import CopyrightBadge from '../components/CopyrightBadge'
import '../styles/pages/notFound.scss'

export default function NotFound() {
  return (
    <div className="notFound">
      <CopyrightBadge />
      <img src="/images/logos/logo_white.svg" alt="Logo d'Astroshare" />
      <h1 className="h1 title notFound__title">Erreur 404</h1>
      <p className="notFound__subtitle">La page que vous recherchez n'existe pas, à été déplacée ou est introuvable.</p>
      <a className="notFound__link" href={routes.home.path}>Retourner à l'accueil</a>
    </div>
  )
}
