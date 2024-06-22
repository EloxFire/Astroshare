import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiChevronLeft } from 'react-icons/fi'
import { useCategories } from '../contexts/CategoriesContext'
import { RessourceCategory } from '../scripts/types'
import { routes } from '../routes'
import RessourceCategoryButton from '../components/RessourceCategoryButton'
import '../styles/pages/ressources.scss'

export default function Ressources() {

  const { categories } = useCategories();

  useEffect(() => {
    document.title = "Astroshare | Hub"
  }, [])

  return (
    <div className="ressources">
      <h1 className="h1 title"><Link to={routes.hub.path} ><FiChevronLeft style={{ verticalAlign: 'middle' }} /></Link>Hub de ressources</h1>
      <p>Parcourez les catégories pour découvrir nos ressources associées</p>
      <div className="categories-container">
        {
          categories.filter((cat: RessourceCategory) => (cat.visibility === true)).map((category: RessourceCategory, category_index: number) => {
            return (
              <RessourceCategoryButton
                key={category_index}
                name={category.name}
                slug={category.slug}
                icon={category.icon}
                image={category.image}
                description={category.description}
                longDescription={category.longDescription}
              />
            )
          })
        }
      </div>
    </div>
  )
}
