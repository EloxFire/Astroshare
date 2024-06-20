import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../../routes'
import { FiChevronLeft } from 'react-icons/fi'
import { useStats } from '../../contexts/StatsContext'
import StatNumber from '../../components/stats/StatNumber'
import '../../styles/pages/dashboard/dashboard.scss'


export default function Dashboard() {

  const { statsLoading, ressourcesCount, imagesCount, downloadsCount, categoriesCount, usersCount } = useStats()

  useEffect(() => {
    document.title = 'Astroshare | Dashboard'

    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="dashboard">
      <p className="dashboard-title h3"><Link to={"/"}><FiChevronLeft style={{ verticalAlign: 'middle' }} /></Link>Dashbaord</p>
      <div className="content">
        <div className="content__left">
          <div className="stats">
            <p className="title">Statistiques</p>
            <div className="stats-row">
              <StatNumber value={ressourcesCount} name="Ressources" loading={statsLoading} />
              <StatNumber value={imagesCount} name="Images" loading={statsLoading} />
            </div>
            <div className="stats-row">
              <StatNumber value={categoriesCount} name="Categories" loading={statsLoading} />
              <StatNumber value={downloadsCount} name="Téléchargements" loading={statsLoading} />
            </div>
            <div className="stats-row">
              <StatNumber value={usersCount} name="Utilisateurs" loading={statsLoading} />
            </div>
          </div>
        </div>
        <div className="content__right">
          <p className="title">Gestion</p>
          <div className="controls">
            <p className="subtitle">Ressources</p>
            <div className="controls-buttons">
              <Link to={routes.dashboard.ressources.add.path} className="dashboard__add-ressource button-link">{routes.dashboard.ressources.add.label}</Link>
              <Link to={routes.dashboard.ressources.list.path} className="dashboard__add-ressource button-link">{routes.dashboard.ressources.list.label}</Link>
            </div>
            <p className="subtitle">Catégories</p>
            <div className="controls-buttons">
              <Link to={routes.dashboard.categories.add.path} className="dashboard__add-ressource button-link">{routes.dashboard.categories.add.label}</Link>
              <Link to={routes.dashboard.categories.list.path} className="dashboard__add-ressource button-link">{routes.dashboard.categories.list.label}</Link>
            </div>
            <p className="subtitle">Images</p>
            <div className="controls-buttons">
              <Link to={routes.dashboard.images.add.path} className="dashboard__add-ressource button-link">{routes.dashboard.images.add.label}</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
