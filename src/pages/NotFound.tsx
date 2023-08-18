import React from 'react'
import '../styles/pages/notFound.scss'
import { routes } from '../routes'
import CopyrightBadge from '../components/CopyrightBadge'

export default function NotFound() {
  return (
    <div className="notFound">
      <CopyrightBadge />
      <p className="h1">Astroshare</p>
      <h1 className="h1 title notFound__title">Erreur 404</h1>
      <p className="notFound__subtitle">La page que vous recherchez n'existe pas.</p>
      <a className="notFound__link" href={routes.home?.path}>Retourner à l'accueil</a>
    </div>
  )
}
