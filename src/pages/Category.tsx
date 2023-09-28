import { useEffect, useState } from "react"
import { Ressource, RessourceCategory } from "../scripts/types"
import { ressources, ressourcesCategories } from "../scripts/helpers/ressources"
import { Link, useParams } from "react-router-dom"
import { FiChevronLeft } from "react-icons/fi"
import '../styles/pages/category.scss'
import RessourceDisplay from "../components/RessourceDisplay"

export default function Category() {

  const { category } = useParams()
  const [selectedCategory, setSelectedCategory] = useState<RessourceCategory | undefined>(undefined)
  const [currentCategoryRessources, setCurrentCategoryRessources] = useState<Ressource[] | undefined>(undefined)

  useEffect(() => {
    const ressourceCategory = ressourcesCategories.find(c => c.slug === category)
    setSelectedCategory(ressourceCategory)
  }, [category])

  useEffect(() => {
    let matchingRessources: Ressource[] = [];
    if (selectedCategory) {
      matchingRessources = ressources.filter(ressource => ressource.category === selectedCategory.slug)
      setCurrentCategoryRessources(matchingRessources)
    }
  }, [selectedCategory])

  return (
    <div className="category">
      <h1 className="h1 title"><Link to={"/ressources"}><FiChevronLeft style={{ verticalAlign: 'middle' }} /></Link>{selectedCategory?.name}</h1>
      <p>{selectedCategory?.longDescription}</p>
      <div className="ressources-container">
        {
          currentCategoryRessources?.map((r, ressource_index) => {
            return (
              <RessourceDisplay ressource={r} currentCategory={selectedCategory!.slug} />
            )
          })
        }
      </div>
    </div>
  )
}
