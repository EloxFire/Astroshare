import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiChevronLeft } from 'react-icons/fi'
import { useCategories } from '../contexts/CategoriesContext'
import { RessourceCategory } from '../scripts/types'
import RessourceCategoryButton from '../components/RessourceCategoryButton'
import '../styles/pages/hub.scss'

export default function Hub() {

  const { categories } = useCategories();

  useEffect(() => {
    document.title = "Astroshare | Hub de ressources"
  }, [])

  return (
    <div className="hub">
      <h1 className="h1 title"><Link to={"/"}><FiChevronLeft style={{ verticalAlign: 'middle' }} /></Link>Hub de ressources</h1>
      <p>Parcourez les catégories pour découvrir nos ressources associées</p>
      <div className="categories-container">
        {
          categories.map((category: RessourceCategory, category_index: number) => {
            return (
              <RessourceCategoryButton
                key={category_index}
                name={category.name}
                slug={category.slug}
                icon={category.icon}
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
