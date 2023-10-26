import React, { useEffect, useState } from 'react'
import '../../styles/pages/dashboard/addRessource.scss'
import { FiChevronLeft } from 'react-icons/fi'
import { Ressource } from '../../scripts/types'

export default function AddRessource() {

  useEffect(() => {
    document.title = 'Astroshare | Ajouter une ressource'
  }, [])

  const [ressourceToAdd, setRessourceToAdd] = useState<Ressource | undefined>();

  const handleInputChange = (key: string, value: string) => {
    setRessourceToAdd({ ...ressourceToAdd, [key]: value } as Ressource)
  }

  return (
    <div className="add-ressource-details">
      <div className="add-ressource-details__left">
        <input className="add-ressource-details__left__title" placeholder='Titre de la ressource' />
        <input className="add-ressource-details__left__subtitle" placeholder='Sous-titre de la ressource' />
        <div className="add-ressource-details__left__description-container">
          <textarea className="add-ressource-details__left__description-container__description" rows={10} placeholder='Desription longue de la ressource' />
          <input type="text" placeholder='Notes additionnelles de la ressource' />
        </div>
      </div>
    </div>
  )
}
