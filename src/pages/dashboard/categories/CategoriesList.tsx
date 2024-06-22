import { Link } from 'react-router-dom'
import { FiChevronLeft } from 'react-icons/fi'
import { routes } from '../../../routes'
import { useCategories } from '../../../contexts/CategoriesContext'
import { RessourceCategory } from '../../../scripts/types'
import DashboardListItem from '../../../components/dashboard/DashboardListItem'
import '../../../styles/pages/dashboard/categories/categoriesList.scss'
import { deleteCategory } from '../../../scripts/helpers/api/categories/deleteCategory'

export default function CategoriesList() {

  const { categories } = useCategories()

  const handleDelete = async (category_ref: string) => {
    await deleteCategory(category_ref)
  }

  return (
    <div className="categories-list-page">
      <p className="dashboard-title h3"><Link to={routes.dashboard.main.path}><FiChevronLeft style={{ verticalAlign: 'middle' }} /></Link>Retour au dashboard</p>

      <div className="list visible-list">
        {
          categories.filter((cat: RessourceCategory) => (cat.visibility === true)).map((category: RessourceCategory) => {
            return (
              <DashboardListItem
                key={`category-list-item-${category.name}`}
                properties={[{ label: 'Test', value: "Test" }]}
                isVisible={category.visibility}
                onDelete={() => handleDelete(category.ref!)}
              />
            )
          })
        }
      </div>
    </div>
  )
}
