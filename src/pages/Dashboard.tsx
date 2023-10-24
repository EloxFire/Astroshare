import React, { useEffect } from 'react'
import '../styles/pages/dashboard.scss'

export default function Dashboard() {

  useEffect(() => {
    document.title = 'Astroshare | Dashboard'
  }, [])

  return (
    <div className="dashboard">
      <p className="dashboard-title h3">Dashboard</p>
      <div className="content">
        <div className="left">
          <p className="section-title">Ajouter une ressource</p>
        </div>
        <div className="right">
          <p className="section-title">Ajouter une ressource</p>
        </div>
      </div>
    </div>
  )
}
