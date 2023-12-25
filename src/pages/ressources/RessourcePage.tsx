import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FiChevronLeft } from 'react-icons/fi'
import { getRessourceBySlug } from '../../scripts/helpers/api/ressources/getRessourceBySlug'
import { Ressource } from '../../scripts/types'
import '../../styles/pages/ressources/ressource.scss'

export default function RessourcePage() {

  const { category, ressource_slug } = useParams()
  const [currentRessource, setCurrentRessource] = useState<Ressource>()

  useEffect(() => {
    document.title = `Astroshare | ${ressource_slug}`
  }, [ressource_slug])

  useEffect(() => {
    const fetchData = async () => {
      if (ressource_slug !== undefined) {
        const r = await getRessourceBySlug(ressource_slug)
        console.log(r);

        // setCurrentRessource(r)
      }
    }

    fetchData()
  }, [ressource_slug])

  return (
    <div className="ressource">
      <h1 className="h2 title"><Link to={`/ressources/${category}`}><FiChevronLeft style={{ verticalAlign: 'middle' }} /></Link>{currentRessource?.name}</h1>
    </div>
  )
}
