import { useRessources } from '../../contexts/RessourcesContext'
import { Link } from 'react-router-dom'
import { FiChevronLeft } from 'react-icons/fi'
import { routes } from '../../routes'
import { changeRessourceVisibility } from '../../scripts/helpers/api/ressources/changeRessourceVisibility'
import { deleteRessource } from '../../scripts/helpers/api/ressources/deleteRessource'
import DashboardListItem from '../../components/dashboard/DashboardListItem'
import '../../styles/pages/dashboard/ressourcesList.scss'
import { Ressource } from '../../scripts/types/Ressource'

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
      <p className="dashboard-title h3"><Link to={routes.dashboard.main.path}><FiChevronLeft style={{ verticalAlign: 'middle' }} /></Link>Liste des ressources</p>
      <div className="ressources-container">
        {ressources.length === 0 && <p className="no-ressources">Aucune ressource n'a été trouvée</p>}
        <p className="h3" style={{ marginTop: '50px' }}>Ressources visibles :</p>
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
        <p className="h3" style={{ marginTop: '50px' }}>Ressources cachées :</p>
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
      </div>
    </div>
  )
}
