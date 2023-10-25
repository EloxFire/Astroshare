import React, { useEffect, useState } from 'react'
import '../../styles/pages/dashboard/dashboard.scss'
import { Ressource } from '../../scripts/types'
export default function Dashboard() {

  useEffect(() => {
    document.title = 'Astroshare | Dashboard'
  }, [])

  const [ressourceToAdd, setRessourceToAdd] = useState<Ressource>()
  const [isDownloadable, setIsDownloadable] = useState<boolean>(false)

  const handleInputChange = (key: string, value: string) => {
    setRessourceToAdd({ ...ressourceToAdd, [key]: value } as Ressource)
  }

  return (
    <div className="dashboard">
      <p className="dashboard-title h3">Dashboard</p>
      <div className="content">

      </div>
    </div>
  )
}
