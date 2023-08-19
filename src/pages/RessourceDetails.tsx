import React, { useEffect, useState } from 'react'
import '../styles/pages/ressource.scss'
import { useParams } from 'react-router-dom'
import { ressources } from '../scripts/helpers'
import { Ressource } from '../scripts/types'

export default function RessourceDetails() {

  const { ressource_name } = useParams()
  const [ressourceInfos, setRessourceInfos] = useState<Ressource | undefined>(undefined)

  useEffect(() => {
    // Find the ressource in the ressources array
    const ressource = ressources.find(ressource => ressource.slug === ressource_name)
    setRessourceInfos(ressource)
  }, [ressource_name])

  return (
    <div className="ressource">
      <div className="ressource__left">
        <h1 className="h2 title">{ressourceInfos?.name}</h1>
      </div>
      <div className="ressource__right">
        <img src={ressourceInfos?.image} alt={ressourceInfos?.name} />
      </div>
    </div>
  )
}
