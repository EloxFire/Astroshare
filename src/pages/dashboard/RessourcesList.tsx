import React from 'react'
import { useRessources } from '../../contexts/RessourcesContext'
import { Link } from 'react-router-dom'
import { FiChevronLeft, FiEdit2, FiEyeOff } from 'react-icons/fi'
import '../../styles/pages/dashboard/ressourcesList.scss'
import { Ressource } from '../../scripts/types'
import { routes } from '../../routes'

export default function RessourcesList() {

  const { ressources } = useRessources()

  return (
    <div className="ressources-list">
      <p className="dashboard-title h3"><Link to={"/"}><FiChevronLeft style={{ verticalAlign: 'middle' }} /></Link>Liste des ressources</p>
      <div className="ressources-container">
        {ressources.length === 0 && <p className="no-ressources">Aucune ressource n'a été trouvée</p>}
        {
          ressources.map((ressource: Ressource, ressource_index: number) => {
            return (
              <div className="ressource-recap">
                <div className="ressource-recap__infos">
                  <div className="ressource-recap__infos__item">
                    <small className="ressource-recap__infos__item__title">Titre</small>
                    <p className="ressource-recap__infos__item__value">{ressource.name}</p>
                  </div>
                  <div className="ressource-recap__infos__item">
                    <small className="ressource-recap__infos__item__title">Catégorie</small>
                    <p className="ressource-recap__infos__item__value">{ressource.category}</p>
                  </div>
                  <div className="ressource-recap__infos__item">
                    <small className="ressource-recap__infos__item__title">Téléchargements</small>
                    <p className="ressource-recap__infos__item__value">{ressource.totalDownloads}</p>
                  </div>
                </div>
                <div className="ressource-recap__actions">
                  <Link className="action-button" to={routes.dashboard_update_ressource.path.replace(':ressource_slug', ressource.slug)}><FiEdit2 /></Link>
                  <button className="action-button red"><FiEyeOff /></button>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
