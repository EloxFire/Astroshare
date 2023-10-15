import React, { useEffect, useState } from 'react'
import '../styles/pages/ressource.scss'
import { Link, useParams } from 'react-router-dom'
import { Ressource } from '../scripts/types'
import { FiChevronLeft } from 'react-icons/fi'
import { ressources } from '../scripts/helpers/ressources'

export default function RessourcePage() {

  const { category, ressource_name } = useParams()
  const [currentRessource, setCurrentRessource] = useState<Ressource | undefined>(undefined)

  useEffect(() => {
    const current_ressource = ressources.find(ressource => ressource.slug === ressource_name)
    setCurrentRessource(current_ressource)
    document.title = `Astroshare | ${ressource_name}`
  }, [ressource_name])

  return (
    <div className="ressource">
      <h1 className="h2 title"><Link to={`/ressources/${category}`}><FiChevronLeft style={{ verticalAlign: 'middle' }} /></Link>{currentRessource?.name}</h1>
    </div>
  )
}
