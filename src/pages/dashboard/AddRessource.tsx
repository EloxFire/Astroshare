import React, { useEffect, useState } from 'react'
import '../../styles/pages/dashboard/addRessource.scss'
import { FiChevronLeft } from 'react-icons/fi'
import { Ressource } from '../../scripts/types'
import { ressourceType, ressourcesLevels } from '../../scripts/helpers/helpers'
import Chip from '../../components/Chip'

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
          <input className="add-ressource-details__left__description-container__notes" type="text" placeholder='Notes additionnelles de la ressource' />
        </div>
        <div className="add-ressource-details__left__infos">
          <div className="add-ressource-details__left__infos__item">
            <p>Format du document :</p>
            {
              Object.entries(ressourceType).map(([key, value]) => {
                return (
                  <Chip key={`add-ressource-details__left__infos__item__${key}`} label={value} />
                )
              })
            }
          </div>
          <div className="add-ressource-details__left__infos__item">
            <p>Niveau :</p>
            {
              Object.entries(ressourcesLevels).map(([key, value]) => {
                return (
                  <Chip key={`add-ressource-details__left__infos__item__${key}`} label={value} />
                )
              })
            }
          </div>
        </div>
        <input className="custom-input" placeholder="Tags de la ressource (séparés d'une virgule)" />
      </div>
    </div>
  )
}
