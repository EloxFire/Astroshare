import React, { useEffect } from 'react'
import '../../styles/pages/dashboard/dashboard.scss'
import { Link } from 'react-router-dom'
import { routes } from '../../routes'
export default function Dashboard() {

  useEffect(() => {
    document.title = 'Astroshare | Dashboard'
  }, [])

  return (
    <div className="dashboard">
      <p className="dashboard-title h3">Dashboard</p>
      <div className="content">
        <Link to={routes.dashboard_add_ressource.path} className="dashboard__add-ressource">Ajouter une ressource</Link>
        <Link to={routes.dashboard_add_image.path} className="dashboard__add-ressource">Ajouter une image</Link>
      </div>
    </div>
  )
}
