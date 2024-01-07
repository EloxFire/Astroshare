import React from 'react'
import { useRessources } from '../../contexts/RessourcesContext'
import { Link } from 'react-router-dom'
import { FiChevronLeft, FiEdit2, FiEyeOff, FiTrash2, FiEye } from 'react-icons/fi'
import '../../styles/pages/dashboard/ressourcesList.scss'
import { Ressource } from '../../scripts/types'
import { routes } from '../../routes'
import { changeRessourceVisibility } from '../../scripts/helpers/api/ressources/changeRessourceVisibility'
import { deleteRessource } from '../../scripts/helpers/api/ressources/deleteRessource'

export default function RessourcesList() {

  const { ressources, updateRessources, visibleRessources, hiddenRessources } = useRessources()

  const handleChangeVisibility = async (ressource_ref: string, value: boolean) => {
    await changeRessourceVisibility(ressource_ref, value)
    await updateRessources()
  }

  const handleDeleteRessource = async (ressource_ref: string, ressource_slug: string) => {
    console.log("Deleting ressource", ressource_ref, ressource_slug);

    await deleteRessource(ressource_ref, ressource_slug)
    await updateRessources()
  }

  return (
    <div className="ressources-list">
      <p className="dashboard-title h3"><Link to={routes.dashboard.path}><FiChevronLeft style={{ verticalAlign: 'middle' }} /></Link>Liste des ressources</p>
      <div className="ressources-container">
        {ressources.length === 0 && <p className="no-ressources">Aucune ressource n'a été trouvée</p>}
        <p className="h3" style={{ marginTop: '50px' }}>Ressources visibles :</p>
        {
          visibleRessources.map((ressource: Ressource, ressource_index: number) => {
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
                  <button onClick={() => handleChangeVisibility(ressource.ref!, !ressource.visibility)} className="action-button">{ressource.visibility ? <FiEyeOff /> : <FiEye />}</button>
                  <button onClick={() => handleDeleteRessource(ressource.ref!, ressource.slug)} className="action-button red"><FiTrash2 /></button>
                </div>
              </div>
            )
          })
        }
        <p className="h3" style={{ marginTop: '50px' }}>Ressources cachées :</p>
        {
          hiddenRessources.map((ressource: Ressource, ressource_index: number) => {
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
                  <button onClick={() => handleChangeVisibility(ressource.ref!, !ressource.visibility)} className="action-button">{ressource.visibility ? <FiEyeOff /> : <FiEye />}</button>
                  <button onClick={() => handleDeleteRessource(ressource.ref!, ressource.slug)} className="action-button red"><FiTrash2 /></button>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
