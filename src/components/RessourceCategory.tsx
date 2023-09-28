import { Link } from 'react-router-dom'
import '../styles/components/ressourceCategory.scss'
import { useEffect, useState } from 'react'
import { ressources } from '../scripts/helpers/ressources'
import { Ressource } from '../scripts/types'

interface RessourceCategoryProps {
  name: string
  slug: string
  description?: string
  image?: string
}

export default function RessourceCategory({ name, slug, description, image }: RessourceCategoryProps) {

  const [ressourcesCount, setRessourcesCount] = useState<number>(0)

  useEffect(() => {
    let matchingRessources: Ressource[] = [];
    matchingRessources = ressources.filter(ressource => ressource.category === slug)
    setRessourcesCount(matchingRessources.length)
  }, [slug])

  return (
    <Link to={`/ressources/${slug}`} className="ressource-category">
      <img src={image ? image : '/images/categories/default.svg'} alt="" />
      <div>
        <h3>{name}</h3>
        <p className="subtitle">{ressourcesCount} ressources</p>
      </div>
    </Link>
  )
}
