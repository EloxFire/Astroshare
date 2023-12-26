import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Ressource } from '../scripts/types'
import { useRessources } from '../contexts/RessourcesContext'
import '../styles/components/ressourceCategory.scss'

interface RessourceCategoryButtonProps {
  name: string
  slug: string
  description?: string
  longDescription?: string
  icon?: string
}

export default function RessourceCategoryButton({ name, slug, description, longDescription, icon }: RessourceCategoryButtonProps) {

  const { ressources } = useRessources();
  const [ressourcesCount, setRessourcesCount] = useState(0);

  useEffect(() => {
    let matchingRessources: Ressource[] = [];
    matchingRessources = ressources.filter((r: Ressource) => r.category === slug)
    setRessourcesCount(matchingRessources.length)
  }, [slug, ressources])

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
