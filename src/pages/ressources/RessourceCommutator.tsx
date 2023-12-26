import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Ressource } from '../../scripts/types'
import { getRessourceBySlug } from '../../scripts/helpers/api/ressources/getRessourceBySlug'
import RessourceDetails from './RessourceDetails'
import RessourcePage from './RessourcePage'

export default function RessourceCommutator() {

  const { ressource_slug } = useParams()
  const [currentRessource, setCurrentRessource] = useState<Ressource>()

  useEffect(() => {
    document.title = `Astroshare | ${ressource_slug}`
  }, [ressource_slug])

  useEffect(() => {
    const fetchData = async () => {
      if (ressource_slug !== undefined) {
        const r = await getRessourceBySlug(ressource_slug)

        setCurrentRessource(r.docs[0].data() as Ressource)
      }
    }

    fetchData()
  }, [ressource_slug])

  return (
    <>
      {
        currentRessource !== undefined ?
          <div>
            {currentRessource.type === 'pdf' && <RessourceDetails ressource={currentRessource} />}
            {currentRessource.type === 'online' && <RessourcePage ressource={currentRessource} />}
          </div>
          :
          <div className="ressource">
            <h1 className="h2 title">Chargement de la ressource...</h1>
          </div>
      }
    </>
  )
}
