import { useEffect, useState } from "react"
import { Ressource, RessourceCategory } from "../scripts/types"
import { Link, useParams } from "react-router-dom"
import { FiChevronLeft } from "react-icons/fi"
import { useCategories } from "../contexts/CategoriesContext"
import { getRessourceByCategorySlug } from "../scripts/helpers/api/ressources/getRessourcesByCategory"
import RessourceDisplay from "../components/RessourceDisplay"
import '../styles/pages/category.scss'

export default function Category() {

  const { category } = useParams()
  const { categories } = useCategories()
  const [selectedCategory, setSelectedCategory] = useState<RessourceCategory | undefined>(undefined)
  const [currentRessources, setCurrentRessources] = useState<Ressource[]>([])

  useEffect(() => {
    setSelectedCategory(categories.find((c: RessourceCategory) => c.slug === category))
  }, [categories, category])

  useEffect(() => {
    const fetchRessources = async () => {
      if (category !== undefined) {
        const r = await getRessourceByCategorySlug(category)

        r.docs.forEach((doc: any) => {
          setCurrentRessources((currentRessources: Ressource[]) => [...currentRessources, doc.data()])
        })
      }
    }

    fetchRessources()
  }, [category])

  return (
    <div className="category">
      <h1 className="h1 title"><Link to={"/ressources"}><FiChevronLeft style={{ verticalAlign: 'middle' }} /></Link>{selectedCategory?.name}</h1>
      <p>{selectedCategory?.longDescription}</p>
      <div className="ressources-container">
        {
          currentRessources.filter((r: Ressource) => r.visibility === true).length > 0 ?
            currentRessources.filter((r: Ressource) => r.visibility === true).map((r, ressource_index) => {
              return (
                <RessourceDisplay key={ressource_index} ressource={r} currentCategory={category!} />
              )
            })
            :
            <div className="ressources-container__empty">
              <p>Aucune ressource présente dans cette catégorie pour le moment</p>
            </div>
        }
      </div>
    </div>
  )
}
