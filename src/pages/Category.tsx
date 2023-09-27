import { useEffect, useState } from "react"
import { RessourceCategory } from "../scripts/types"
import { ressourcesCategories } from "../scripts/helpers/ressources"
import { useParams } from "react-router-dom"

export default function Category() {

  const { category } = useParams()
  const [selectedCategory, setSelectedCategory] = useState<RessourceCategory | undefined>(undefined)

  useEffect(() => {
    const ressourceCategory = ressourcesCategories.find(c => c.slug === category)
    setSelectedCategory(ressourceCategory)
  }, [category])

  return (
    <div className="category">{selectedCategory?.name}</div>
  )
}
