import React from 'react'
import '../styles/pages/planner.scss'
import { useAuth } from '../contexts/AuthContext'
import { Link } from 'react-router-dom'
import { FiChevronLeft } from 'react-icons/fi'

export default function Planner() {

  const { user } = useAuth()

  return (
    <div className="planner">
      <h1 className="h1 title"><Link to={"/"}><FiChevronLeft style={{ verticalAlign: 'middle' }} /></Link>Planificateur astroshare</h1>
      <p>Planifiez vos soirées d'observation avec Astroshare ! Désormais, vérifier que les conditions météo soient les meilleures possible lors de vos nuits d'observation deviens un jeu d'enfant avec le planificateur gratuit d'Astroshare.</p>


      <div className="cta">
        <div className="left">
          <img className="illustration illustration-1" src="/images/icons/planner/weather.svg" alt="Weather forecast" />
          <img className="illustration illustration-2" src="/images/icons/planner/solar_system.svg" alt="Solar system" />
          <img className="illustration illustration-3" src="/images/icons/planner/comet.svg" alt="Comet" />
          <img className="illustration illustration-4" src="/images/icons/planner/stargazing.svg" alt="Stargazing couple" />
        </div>
        <div className="right">
          <p>Test</p>
        </div>
      </div>
    </div>
  )
}
