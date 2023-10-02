import CustomImageDisplay from '../components/CustomImageDisplay'
import { images } from '../scripts/helpers/gallery'
import '../styles/pages/gallery.scss'
import { FiChevronLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export default function Gallery() {
  return (
    <>
      <div className="gallery">
        <h1 className="h1 title"><Link to={"/"}><FiChevronLeft style={{ verticalAlign: 'middle' }} /></Link>Galerie photos</h1>
        <p>Retrouvez une sélection de mes photos favorites, lors de mes différentes sessions d'observation.</p>
        <CustomImageDisplay
          images={images}
        />
      </div>
      <div className="gallery-mobile">
        <h1>Galerie photos</h1>
        <p>Afin de garantir une bonne experience, la gallerie photo n'est disponible que sur PC.</p>
        <p>Merci de votre comprehension.</p>
        <a className="link" href="/">Retour à l'accueil</a>
      </div>
    </>
  )
}
