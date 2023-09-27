import { Link } from 'react-router-dom'
import '../styles/components/ressourceCategory.scss'

interface RessourceCategoryProps {
  name: string
  slug: string
  description?: string
  image?: string
}

export default function RessourceCategory({ name, slug, description, image }: RessourceCategoryProps) {
  return (
    <Link to={`/ressources/${slug}`} className="ressource-category">
      <img src={image ? image : '/images/categories/default.svg'} alt="" />
      <div>
        <h3>{name}</h3>
        <small>{description}</small>
      </div>
    </Link>
  )
}
