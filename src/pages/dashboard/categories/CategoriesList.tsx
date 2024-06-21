import { Link } from 'react-router-dom'
import '../../../styles/pages/dashboard/categories/categoriesList.scss'
import { FiChevronLeft } from 'react-icons/fi'
import { routes } from '../../../routes'
import { useCategories } from '../../../contexts/CategoriesContext'
import { useEffect } from 'react'
import { RessourceCategory } from '../../../scripts/types'
import DashboardListItem from '../../../components/dashboard/DashboardListItem'

export default function CategoriesList() {

  const { categories, categoriesLoading } = useCategories()

  useEffect(() => {
    console.log(categories);

  }, [])

  return (
    <div className="categories-list-page">
      <p className="dashboard-title h3"><Link to={routes.dashboard.main.path}><FiChevronLeft style={{ verticalAlign: 'middle' }} /></Link>Retour au dashboard</p>

      <div className="list visible-list">
        {
          categories.filter((cat: RessourceCategory) => (cat.visibility === true)).map((category: RessourceCategory, index: number) => {
            return (
              <DashboardListItem properties={[{ label: 'Test', value: "Test" }]} />
            )
          })
        }
      </div>
    </div>
  )
}
