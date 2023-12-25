import { useEffect, useState } from "react"
import { Ressource, RessourceCategory } from "../scripts/types"
import { ressources } from "../scripts/helpers/ressources"
import { Link, useParams } from "react-router-dom"
import { FiChevronLeft } from "react-icons/fi"
import '../styles/pages/category.scss'
import RessourceDisplay from "../components/RessourceDisplay"
import { useCategories } from "../contexts/CategoriesContext"
import { getRessourceByCategorySlug } from "../scripts/helpers/api/ressources/getRessourcesByCategory"

export default function Category() {

  const { category } = useParams()
  const { categories } = useCategories()
  const [selectedCategory, setSelectedCategory] = useState<RessourceCategory | undefined>(undefined)
  const [currentCategoryRessources, setCurrentCategoryRessources] = useState<Ressource[]>([])

  useEffect(() => {
    setSelectedCategory(categories.find((c: RessourceCategory) => c.slug === category))

    const fetchRessources = async () => {
      if (category !== undefined) {
        const r = await getRessourceByCategorySlug(category)

        r.docs.forEach((doc: any) => {
          setCurrentCategoryRessources((currentCategoryRessources: Ressource[]) => [...currentCategoryRessources, doc.data()])
        })
      }
    }

    fetchRessources()
  }, [categories, category])

  return (
    <div className="category">
      <h1 className="h1 title"><Link to={"/ressources"}><FiChevronLeft style={{ verticalAlign: 'middle' }} /></Link>{selectedCategory?.name}</h1>
      <p>{selectedCategory?.longDescription}</p>
      <div className="ressources-container">
        {
          currentCategoryRessources?.map((r, ressource_index) => {
            return (
              <RessourceDisplay key={ressource_index} ressource={r} currentCategory={selectedCategory!.slug} />
            )
          })
        }
      </div>
    </div>
  )
}
