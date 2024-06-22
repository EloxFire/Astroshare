import { Link } from 'react-router-dom'
import { FiChevronLeft } from 'react-icons/fi'
import { Ressource } from '../../scripts/types/Ressource'
import '../../styles/pages/ressources/ressource.scss'

interface RessourcePageProps {
  ressource: Ressource
}

export default function RessourcePage({ ressource }: RessourcePageProps) {

  return (
    <div className="ressource">
      <h1 className="h2 title"><Link to={`/ressources/${ressource.category}`}><FiChevronLeft style={{ verticalAlign: 'middle' }} /></Link>{ressource.name}</h1>
    </div>
  )
}
