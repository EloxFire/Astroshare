import React, { useEffect, useState } from 'react'
import '../styles/pages/dashboard.scss'
import { Ressource } from '../scripts/types'
import { ressourcesCategories } from '../scripts/helpers/ressources'
import { ressourceType, ressourcesLevels } from '../scripts/helpers/helpers'

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
        <div className="left">
          <p className="section-title">Ajouter une ressource</p>

          <form>
            <input type="text" placeholder='Nom de la ressource' value={ressourceToAdd?.name} onChange={(e) => { handleInputChange('name', e.target.value) }} />
            <small>La ressource sera visible sous le nom : {(ressourceToAdd?.name !== "" && ressourceToAdd?.name !== undefined) && <code style={{ marginLeft: '5px' }}>{ressourceToAdd?.name.toLowerCase().trim().replaceAll(' ', '-').normalize("NFD").replace(/[\u0300-\u036f]/g, "")}</code>}</small>

            <textarea rows={4} placeholder='Description de la ressource' value={ressourceToAdd?.description} onChange={(e) => handleInputChange('description', e.target.value)} />
            <input type="text" placeholder='Description courte' value={ressourceToAdd?.subtitle} onChange={(e) => handleInputChange('subtitle', e.target.value)} />
            <select onChange={(e) => handleInputChange('category', e.target.value)}>
              <option value="">Sélectionnez une catégorie</option>
              {
                ressourcesCategories.map((category, cat_index) => {
                  return (
                    <option key={cat_index} value={category.slug}>{category.name}</option>
                  )
                })
              }
            </select>
            <small>Les catégories doivent êtres séparées par : <code>,</code> ou <code> </code> ou <code>, </code></small>
            <input type="text" placeholder='Notes additionnelles' value={ressourceToAdd?.notes} onChange={(e) => handleInputChange('notes', e.target.value)} />
            <fieldset style={{ display: 'flex', flexDirection: 'row' }}>
              <legend>Sélectionnez un niveau :</legend>
              {
                Object.entries(ressourcesLevels).map(([key, value]) => {
                  return (
                    <div className="radio-input" key={key}>
                      <input type="radio" id={key} value={key} checked={ressourceToAdd?.level === key} onChange={(e) => handleInputChange('level', e.target.value)} />
                      <label htmlFor={key}>{value}</label>
                    </div>
                  )
                })
              }
            </fieldset>
            <fieldset style={{ display: 'flex', flexDirection: 'row' }}>
              <legend>Ressource téléchargeable  :</legend>
              <div className="radio-input">
                <input type="radio" id='isDownloadableTrue' value={"true"} checked={isDownloadable} onChange={(e) => setIsDownloadable(true)} />
                <label htmlFor='isDownloadableTrue'>Oui</label>
              </div>
              <div className="radio-input">
                <input type="radio" id='isDownloadableTrue' value={"false"} checked={!isDownloadable} onChange={(e) => setIsDownloadable(false)} />
                <label htmlFor='isDownloadableTrue'>Non</label>
              </div>
            </fieldset>
            {
              isDownloadable && (
                <fieldset style={{ display: 'flex', flexDirection: 'row' }}>
                  <legend>Format de la ressource téléchargeable (plusieurs valeurs possibles) :</legend>
                  {
                    Object.entries(ressourceType).map(([key, value]) => {
                      return (
                        <div className="radio-input" key={key}>
                          <input type="radio" id={key} value={key} checked={ressourceToAdd?.level === key} onChange={(e) => handleInputChange('level', e.target.value)} />
                          <label htmlFor={key}>{value}</label>
                        </div>
                      )
                    })
                  }
                </fieldset>
              )
            }
          </form>
        </div>
        <div className="right">
          <p className="section-title">Apperçu de votre ressource :</p>
          {
            JSON.stringify(ressourceToAdd)
          }
        </div>
      </div>
    </div>
  )
}
