import React, { useEffect, useState } from 'react'
import '../styles/pages/ressource.scss'
import { Link, useParams } from 'react-router-dom'
import { Ressource } from '../scripts/types'
import { FiChevronLeft } from 'react-icons/fi'
import { getRessource } from '../scripts/helpers/api/ressources'

export default function RessourcePage() {

  const { category, ressource_name } = useParams()
  const [currentRessource, setCurrentRessource] = useState<any>()

  useEffect(() => {
    document.title = `Astroshare | ${ressource_name}`
  }, [ressource_name])

  useEffect(() => {
    const fetchData = async () => {
      if (ressource_name !== undefined) {
        const r = await getRessource(ressource_name)
        setCurrentRessource(r)
      }
    }

    fetchData()
  }, [ressource_name])

  return (
    <div className="ressource">
      <h1 className="h2 title"><Link to={`/ressources/${category}`}><FiChevronLeft style={{ verticalAlign: 'middle' }} /></Link>{currentRessource?.id.toString()}</h1>
    </div>
  )
}
