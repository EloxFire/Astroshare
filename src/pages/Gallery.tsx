import CustomImageDisplay from '../components/CustomImageDisplay'
import { useGallery } from '../contexts/GalleryContext'
import { images } from '../scripts/helpers/gallery'
import '../styles/pages/gallery.scss'
import { FiChevronLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export default function Gallery() {

  const { pictures } = useGallery()

  return (
    <>
      <div className="gallery">
        <h1 className="h1 title"><Link to={"/"}><FiChevronLeft style={{ verticalAlign: 'middle' }} /></Link>Galerie photos</h1>
        <p>Retrouvez une sélection de mes photos favorites, lors de mes différentes sessions d'observation.</p>
        <CustomImageDisplay
          images={pictures}
        />
      </div>
      <div className="gallery-mobile">
        <h1 className="h1 title"><Link to={"/"}><FiChevronLeft style={{ verticalAlign: 'middle' }} /></Link>Galerie photos</h1>
        <p style={{ textAlign: 'center' }}>Afin de garantir une bonne experience, la galerie photo n'est disponible que sur PC ou grand ecran.</p>
        <p style={{ textAlign: 'center' }}>Merci de votre comprehension.</p>
      </div>
    </>
  )
}
