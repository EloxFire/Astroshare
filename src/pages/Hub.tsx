import React from 'react'
import { Link } from 'react-router-dom'
import { FiChevronLeft } from 'react-icons/fi'
import '../styles/pages/hub.scss'
import { ressourcesCategories } from '../scripts/helpers/ressources'
import RessourceCategory from '../components/RessourceCategory'

export default function Hub() {
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
