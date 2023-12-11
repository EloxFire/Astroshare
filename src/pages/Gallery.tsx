import CustomImageDisplay from '../components/CustomImageDisplay'
import { useGallery } from '../contexts/GalleryContext'
import { FiChevronLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import '../styles/pages/gallery.scss'

export default function Gallery() {

  const { pictures } = useGallery()

  return (
    <>
      <div className="gallery">
        <h1 className="h1 title"><Link to={"/"}><FiChevronLeft style={{ verticalAlign: 'middle' }} /></Link>Galerie photos</h1>
        <p>Retrouvez une sélection de mes photos favorites, lors de mes différentes sessions d'observation.</p>
        {/* <div className="filters">
          <div className="filter">
            <input type="radio" id="all" name="filter" value="all" defaultChecked />
            <label htmlFor="all">Toutes</label>
          </div>
          <div className="filter">
            <input type="radio" id="moon" name="filter" value="moon" />
            <label htmlFor="moon">Lune</label>
          </div>
          <div className="filter">
            <input type="radio" id="planets" name="filter" value="planets" />
            <label htmlFor="planets">Planètes</label>
          </div>
          <div className="filter">
            <input type="radio" id="deep-sky" name="filter" value="deep-sky" />
            <label htmlFor="deep-sky">Objets du ciel profond</label>
          </div>
        </div> */}
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
