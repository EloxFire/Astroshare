import { Link } from 'react-router-dom'
import { FiChevronLeft } from 'react-icons/fi'
import { routes } from '../../../routes'
import { useCategories } from '../../../contexts/CategoriesContext'
import { deleteCategory } from '../../../scripts/helpers/api/categories/deleteCategory'
import { changeCategoryVisibility } from '../../../scripts/helpers/api/categories/changeCategoryVisibility'
import { useRessources } from '../../../contexts/RessourcesContext'
import DashboardListItem from '../../../components/dashboard/DashboardListItem'
import '../../../styles/pages/dashboard/categories/categoriesList.scss'
import { RessourceCategory } from '../../../scripts/types/RessourceCategory'
import { Ressource } from '../../../scripts/types/Ressource'

export default function CategoriesList() {

  const { updateCategories, visibleCategories, hiddenCategories } = useCategories()
  const { ressources } = useRessources()

  const handleDelete = async (category_ref: string) => {
    await deleteCategory(category_ref)
    await updateCategories()
  }

  const handleVisibility = async (category_ref: string, newValue: boolean) => {
    await changeCategoryVisibility(category_ref, newValue)
    await updateCategories()
  }

  return (
    <div className="categories-list-page">
      <p className="dashboard-title h3"><Link to={routes.dashboard.main.path}><FiChevronLeft style={{ verticalAlign: 'middle' }} /></Link>Retour au dashboard</p>
      <p className="dashboard-title h3">Catégories visibles</p>
      <div className="list" style={{ marginBottom: '10vh' }}>
        <table className="dashboard-list">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Description</th>
              <th>Ressources</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              visibleCategories.length === 0 &&
              <tr>
                <td colSpan={4} style={{ textAlign: 'center' }}>Aucune catégorie visible</td>
              </tr>
            }
            {
              visibleCategories.map((category: RessourceCategory) => {
                return (
                  <DashboardListItem
                    key={`category-list-item-${category.name}`}
                    properties={[{ label: 'Nom', value: category.name }, { label: 'Description', value: category.description }, { label: 'Nombre de ressources', value: ressources.filter((ressource: Ressource) => ressource.category === category.slug).length }]}
                    isVisible={category.visibility}
                    onVisibilityChange={() => handleVisibility(category.ref!, !category.visibility)}
                    onDelete={() => handleDelete(category.ref!)}
                  />
                )
              })
            }
          </tbody>
        </table>
      </div>

      <p className="dashboard-title h3">Catégories non visibles</p>
      <div className="list">
        <table className="dashboard-list">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Description</th>
              <th>Ressources</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              hiddenCategories.length === 0 &&
              <tr>
                <td colSpan={4} style={{ textAlign: 'center' }}>Aucune catégorie non visible</td>
              </tr>
            }
            {
              hiddenCategories.map((category: RessourceCategory) => {
                return (
                  <DashboardListItem
                    key={`category-list-item-${category.name}`}
                    properties={[{ label: 'Nom', value: category.name }, { label: 'Description', value: category.description }, { label: 'Nombre de ressources', value: ressources.filter((ressource: Ressource) => ressource.category === category.slug).length }]}
                    isVisible={category.visibility}
                    onVisibilityChange={() => handleVisibility(category.ref!, !category.visibility)}
                    onDelete={() => handleDelete(category.ref!)}
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
