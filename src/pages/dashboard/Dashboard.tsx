import React, { useEffect } from 'react'
import '../../styles/pages/dashboard/dashboard.scss'
import { Link } from 'react-router-dom'
import { routes } from '../../routes'
import { FiChevronLeft } from 'react-icons/fi'
import { useStats } from '../../contexts/StatsContext'


export default function Dashboard() {

  const { ressourcesCount, imagesCount, downloadsCount, visitsCount } = useStats()

  useEffect(() => {
    document.title = 'Astroshare | Dashboard'
  }, [])

  return (
    <div className="dashboard">
      <p className="dashboard-title h3"><Link to={"/"}><FiChevronLeft style={{ verticalAlign: 'middle' }} /></Link>Dashbaord</p>
      <div className="content">
        <div className="content__left">
          <div className="stats">
            <p className="title">Statistiques</p>
            <div className="stats-row">
              <div className="dashboard-stat">
                <p className="dashboard-stat__number">{ressourcesCount}</p>
                <p className="dashboard-stat__name">Ressources</p>
              </div>
              <div className="dashboard-stat">
                <p className="dashboard-stat__number">{imagesCount}</p>
                <p className="dashboard-stat__name">Images</p>
              </div>
            </div>
            <div className="stats-row">
              <div className="dashboard-stat">
                <p className="dashboard-stat__number">{downloadsCount}</p>
                <p className="dashboard-stat__name">Téléchargements</p>
              </div>
              <div className="dashboard-stat">
                <p className="dashboard-stat__number">{visitsCount}</p>
                <p className="dashboard-stat__name">Visites</p>
              </div>
            </div>
          </div>
        </div>
        <div className="content__right">
          <div className="controls">
            <p className="title">Gestion</p>
            <Link to={routes.dashboard_add_ressource.path} className="dashboard__add-ressource button-link">Ajouter une ressource</Link>
            <Link to={routes.dashboard_add_image.path} className="dashboard__add-ressource button-link">Ajouter une image</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
