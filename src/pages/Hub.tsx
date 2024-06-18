import React from 'react'
import { Link } from 'react-router-dom'
import { FiChevronLeft } from 'react-icons/fi'
import { routes } from '../routes'
import HubTool from '../components/hub/HubTool'
import '../styles/pages/hub.scss'

export default function Hub() {
  return (
    <div className="hub">
      <h1 className="h1 title"><Link to={routes.home.path} ><FiChevronLeft style={{ verticalAlign: 'middle' }} /></Link>{routes.hub.label}</h1>
      <div className="tools-container">
        <HubTool
          title='Ressources gratuites'
          subtitle="Découvrez des ressources gratuites pour vous aider dans votre pratique de l'astronomie."
          route={routes.ressources}
          image='/images/wallpapers/1.min.jpg'
        />
        <HubTool
          title='Application mobile'
          subtitle="Téléchargez l'application mobile Astroshare, disponible sur Android"
          route={routes.mobile_app.about}
          image='/images/wallpapers/2.min.jpg'
        />
        <HubTool
          title="Planificateur d'observation"
          subtitle="Planifiez vos observations astronomiques avec notre outil de planification."
          route={routes.planner}
          image='/images/wallpapers/3.min.jpg'
        />
        <HubTool
          title='Galerie photos'
          subtitle="Retrouvez mon parcours d'astronomie à travers mes meilleures photos !"
          route={routes.gallery}
          image='/images/wallpapers/4.min.jpg'
        />
      </div>
    </div>
  )
}
