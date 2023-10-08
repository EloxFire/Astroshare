import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiChevronLeft } from 'react-icons/fi'
import { ressourcesCategories } from '../scripts/helpers/ressources'
import RessourceCategory from '../components/RessourceCategory'
import '../styles/pages/hub.scss'

export default function Hub() {

  useEffect(() => {
    document.title = "Astroshare | Hub de ressources"
  }, [])

  return (
    <div className="hub">
      <h1 className="h1 title"><Link to={"/"}><FiChevronLeft style={{ verticalAlign: 'middle' }} /></Link>Hub de ressources</h1>
      <p>Parcourez les catégories pour découvrir nos ressources associées</p>
      <div className="categories-container">
        {
          ressourcesCategories.map((category, index) => {
            return (
              <RessourceCategory
                key={index}
                name={category.name}
                slug={category.slug}
                image={category.icon}
                description={category.description}
              />
            )
          })
        }
      </div>
    </div>
  )
}
