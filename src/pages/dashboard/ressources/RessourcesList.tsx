import { useRessources } from '../../../contexts/RessourcesContext'
import { Link } from 'react-router-dom'
import { FiChevronLeft } from 'react-icons/fi'
import { routes } from '../../../routes'
import { changeRessourceVisibility } from '../../../scripts/helpers/api/ressources/changeRessourceVisibility'
import { deleteRessource } from '../../../scripts/helpers/api/ressources/deleteRessource'
import { Ressource } from '../../../scripts/types/Ressource'
import DashboardListItem from '../../../components/dashboard/DashboardListItem'
import '../../../styles/pages/dashboard/ressourcesList.scss'

export default function RessourcesList() {

  const { updateRessources, visibleRessources, hiddenRessources } = useRessources()

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
    <div className="ressources-list-page">
      <p className="dashboard-title h3"><Link to={routes.dashboard.main.path}><FiChevronLeft style={{ verticalAlign: 'middle' }} /></Link>Retour au dashboard</p>
      <p className="dashboard-title h3">Ressources visibles</p>
      <div className="list" style={{ marginBottom: '10vh' }}>
        <table className="dashboard-list">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Catégorie</th>
              <th>Téléchargements</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              visibleRessources.map((ressource: Ressource) => {
                return (
                  <DashboardListItem
                    key={`ressource-list-item-${ressource.name}`}
                    properties={[{ label: 'Titre', value: ressource.name }, { label: 'Catégorie', value: ressource.category }, { label: 'Téléchargements', value: ressource.totalDownloads! }]}
                    isVisible={ressource.visibility}
                    updateUrl={routes.dashboard.ressources.update.path.replace(':ressource_slug', ressource.slug)}
                    onVisibilityChange={() => handleChangeVisibility(ressource.ref!, !ressource.visibility)}
                    onDelete={() => handleDeleteRessource(ressource.ref!, ressource.slug)}
                  />
                )
              })
            }
          </tbody>
        </table>
      </div>

      <p className="dashboard-title h3">Ressources non visibles</p>
      <div className="list">
        <table className="dashboard-list">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Catégorie</th>
              <th>Téléchargements</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              hiddenRessources.map((ressource: Ressource) => {
                return (
                  <DashboardListItem
                    key={`ressource-list-item-${ressource.name}`}
                    properties={[{ label: 'Titre', value: ressource.name }, { label: 'Catégorie', value: ressource.category }, { label: 'Téléchargements', value: ressource.totalDownloads! }]}
                    isVisible={ressource.visibility}
                    updateUrl={routes.dashboard.ressources.update.path.replace(':ressource_slug', ressource.slug)}
                    onVisibilityChange={() => handleChangeVisibility(ressource.ref!, !ressource.visibility)}
                    onDelete={() => handleDeleteRessource(ressource.ref!, ressource.slug)}
                  />
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
