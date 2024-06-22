import { Link } from 'react-router-dom'
import { FiChevronLeft } from 'react-icons/fi'
import { routes } from '../../../routes'
import { useCategories } from '../../../contexts/CategoriesContext'
import { RessourceCategory } from '../../../scripts/types'
import DashboardListItem from '../../../components/dashboard/DashboardListItem'
import '../../../styles/pages/dashboard/categories/categoriesList.scss'
import { deleteCategory } from '../../../scripts/helpers/api/categories/deleteCategory'
import { changeCategoryVisibility } from '../../../scripts/helpers/api/categories/changeCategoryVisibility'

export default function CategoriesList() {

  const { updateCategories, visibleCategories, hiddenCategories } = useCategories()

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

      <div className="list visible-list">
        <p className="dashboard-title h3">Catégories visibles</p>

        {
          visibleCategories.map((category: RessourceCategory) => {
            return (
              <DashboardListItem
                key={`category-list-item-${category.name}`}
                properties={[{ label: 'Test', value: "Test" }]}
                isVisible={category.visibility}
                onVisibilityChange={() => handleVisibility(category.ref!, !category.visibility)}
                onDelete={() => handleDelete(category.ref!)}
              />
            )
          })
        }
      </div>

      <div className="list non-visible-list">
        <p className="dashboard-title h3">Catégories non visibles</p>
        {
          hiddenCategories.map((category: RessourceCategory) => {
            return (
              <DashboardListItem
                key={`category-list-item-${category.name}`}
                properties={[{ label: 'Test', value: "Test" }]}
                isVisible={category.visibility}
                onVisibilityChange={() => handleVisibility(category.ref!, !category.visibility)}
                onDelete={() => handleDelete(category.ref!)}
              />
            )
          })
        }
      </div>
    </div>
  )
}
