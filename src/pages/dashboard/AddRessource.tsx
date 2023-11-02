import React, { useEffect, useState } from 'react'
import '../../styles/pages/dashboard/addRessource.scss'
import { Ressource } from '../../scripts/types'
import { ressourceType, ressourcesLevels } from '../../scripts/helpers/helpers'
import Chip from '../../components/Chip'
import { uploadNewRessource } from '../../scripts/helpers/api/ressources'

export default function AddRessource() {

  useEffect(() => {
    document.title = 'Astroshare | Ajouter une ressource'
  }, [])

  const [ressourceToAdd, setRessourceToAdd] = useState<Ressource | undefined>();

  const handleInputChange = (key: string, value: string, parse?: boolean) => {
    if (parse) {
      const parsedValue = value.split(',').map((element) => element.trim())
      setRessourceToAdd({ ...ressourceToAdd, [key]: parsedValue } as Ressource)
    } else {
      setRessourceToAdd({ ...ressourceToAdd, [key]: value } as Ressource)
    }
  }

  // Handle multiple chips select and de-select (format, level)
  // Needs to be formated as an array of strings
  const handleMultiSelect = (key: string, value: string) => {
    let elements = [];
    ressourceToAdd[key] !== undefined && elements = ressourceToAdd[key] as string[];
    if (elements.includes(value)) {
      elements = elements.filter((element) => element !== value)
    } else {
      elements.push(value)
    }
    setRessourceToAdd({ ...ressourceToAdd, [key]: elements } as Ressource)
  }

  const addNewRessource = () => {
    try {
      ressourceToAdd && uploadNewRessource(ressourceToAdd)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="add-ressource-details">
      <div className="add-ressource-details__left">
        <input className="add-ressource-details__left__title" placeholder='Titre de la ressource' onChange={(e) => { handleInputChange('name', e.target.value); handleInputChange('slug', e.target.value.trim().toLowerCase().replaceAll(' ', '-')) }} />
        <input className="add-ressource-details__left__subtitle" placeholder='Sous-titre de la ressource' onChange={(e) => handleInputChange('subtitle', e.target.value)} />
        <div className="add-ressource-details__left__description-container">
          <textarea className="add-ressource-details__left__description-container__description" rows={10} placeholder='Desription longue de la ressource' onChange={(e) => handleInputChange('description', e.target.value)} />
          <input className="add-ressource-details__left__description-container__notes" type="text" placeholder='Notes additionnelles de la ressource' onChange={(e) => handleInputChange('notes', e.target.value)} />
        </div>
        <div className="add-ressource-details__left__infos">
          <div className="add-ressource-details__left__infos__item">
            <p>Format du document :</p>
            {
              Object.entries(ressourceType).map(([key, value]) => {
                return (
                  <Chip key={`add-ressource-details__left__infos__item__${key}`} label={value} onClick={() => handleMultiSelect('format', value)} />
                )
              })
            }
          </div>
          <div className="add-ressource-details__left__infos__item">
            <p>Niveau :</p>
            {
              Object.entries(ressourcesLevels).map(([key, value]) => {
                return (
                  <Chip key={`add-ressource-details__left__infos__item__${key}`} label={value} onClick={() => handleMultiSelect('level', value)} />
                )
              })
            }
          </div>
        </div>
        <input className="custom-input" placeholder="Tags de la ressource (séparés d'une virgule)" onChange={(e) => handleInputChange('tags', e.target.value, true)} />
        <button style={{ color: 'black' }} onClick={() => addNewRessource()}>Add ressource</button>
      </div>
      <div className="add-ressource-details__left">
        {
          JSON.stringify(ressourceToAdd)
        }
      </div>
    </div>
  )
}
