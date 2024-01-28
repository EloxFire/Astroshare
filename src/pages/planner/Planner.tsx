import React from 'react'
import '../../styles/pages/planner/planner.scss'
import { useAuth } from '../../contexts/AuthContext'
import { Link } from 'react-router-dom'
import { FiChevronLeft } from 'react-icons/fi'
import { routes } from '../../routes'

export default function Planner() {

  const { user } = useAuth()

  return (
    <div className="planner">
      <h1 className="h1 title"><Link to={"/"} ><FiChevronLeft style={{ verticalAlign: 'middle' }} /></Link>Planificateur astroshare</h1>
      <p>Planifiez vos soirées d'observation avec Astroshare ! Désormais, vérifier que les conditions météo soient les meilleures possible lors de vos nuits d'observation deviens un jeu d'enfant avec le planificateur gratuit d'Astroshare.</p>


      <div className="cta">
        <div className="left">
          <img className="illustration" src="/images/planner/vertical.svg" alt="Planner guidelines" />
        </div>
        <div className="right">
          {
            !user ?
              <>
                <p className="cta-title">Connectez-vous pour utiliser le planificateur</p>
                <Link to={routes.login.path} state={{ fromPage: true, fromPath: routes.planner.path }} className="cta-button">{routes.login.label}</Link>
                <small>Pas encore de compte ? <Link to={routes.register.path} state={{ fromPage: true, fromPath: routes.planner.path }}>Inscrivez-vous</Link>, c'est <strong>gratuit</strong></small>
              </>
              :
              (
                <>
                  <p className="cta-title">Commencez à planifier vos soirées d'observation !</p>
                  <Link to={routes.planner_app.path} className="cta-button">Accéder au planificateur</Link>
                </>
              )
          }
        </div>
      </div>
    </div>
  )
}
