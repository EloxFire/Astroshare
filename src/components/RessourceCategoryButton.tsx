import { Link } from 'react-router-dom'
import '../styles/components/ressourceCategory.scss'
import { useEffect, useState } from 'react'
import { ressources } from '../scripts/helpers/ressources'
import { Ressource } from '../scripts/types'

interface RessourceCategoryButtonProps {
  name: string
  slug: string
  description?: string
  longDescription?: string
  icon?: string
}

export default function RessourceCategoryButton({ name, slug, description, longDescription, icon }: RessourceCategoryButtonProps) {

  const [ressourcesCount, setRessourcesCount] = useState<number>(0)

  useEffect(() => {
    let matchingRessources: Ressource[] = [];
    matchingRessources = ressources.filter(ressource => ressource.category === slug)
    setRessourcesCount(matchingRessources.length)
  }, [slug])

  return (
    <Link to={`/ressources/${slug}`} className="ressource-category">
      <img src={icon ? icon : '/images/categories/default.svg'} alt="" />
      <div>
        <h3>{name}</h3>
        <p className="subtitle">{ressourcesCount} ressources</p>
      </div>
    </Link>
  )
}
