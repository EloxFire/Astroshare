import { Link } from 'react-router-dom'
import '../styles/components/copyrightBadge.scss'
import { routes } from '../routes'

export default function CopyrightBadge() {
  return (
    <p className="copy-badge">&copy; Enzo Avagliano | {new Date().getFullYear()} | <Link to={routes.privacy.path} >Politique de confidentialité</Link></p>
  )
}
