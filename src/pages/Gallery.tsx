import CustomImageDisplay from '../components/CustomImageDisplay'
import { useGallery } from '../contexts/GalleryContext'
import { FiChevronLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import '../styles/pages/gallery.scss'
import { useEffect, useState } from 'react'
import { Image } from '../scripts/types'

export default function Gallery() {

  const { pictures } = useGallery()
  const [filteredPictures, setFilteredPictures] = useState<Image[]>([])
  const [currentFilter, setCurrentFilter] = useState<string>("all")

  useEffect(() => {
    setFilteredPictures(pictures.sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime()))
  }, [pictures])

  useEffect(() => {
    if (currentFilter === 'all') {
      setFilteredPictures(pictures)
    } else {
      setFilteredPictures(pictures.filter((picture: Image) => picture.tags?.split(",").includes(currentFilter.toLowerCase().trim())))
    }
  }, [currentFilter, pictures])

  return (
    <>
      <div className="gallery">
        <h1 className="h1 title"><Link to={"/"}><FiChevronLeft style={{ verticalAlign: 'middle' }} /></Link>Galerie photos</h1>
        <p>Retrouvez une sélection de mes photos favorites, prises lors de mes différentes sessions d'observation.</p>
        <div className="filters">
          <button onClick={() => setCurrentFilter('all')} className={`filter ${currentFilter === 'all' && 'active'}`}>Toutes</button>
          <button onClick={() => setCurrentFilter('moon')} className={`filter ${currentFilter === 'moon' && 'active'}`}>Lune</button>
          <button onClick={() => setCurrentFilter('planet')} className={`filter ${currentFilter === 'planet' && 'active'}`}>Planètes</button>
          <button onClick={() => setCurrentFilter('nebula')} className={`filter ${currentFilter === 'nebula' && 'active'}`}>Nébuleuses</button>
          <button onClick={() => setCurrentFilter('galaxy')} className={`filter ${currentFilter === 'galaxy' && 'active'}`}>Galaxies</button>
          <button onClick={() => setCurrentFilter('cluster')} className={`filter ${currentFilter === 'cluster' && 'active'}`}>Amas</button>
          <button onClick={() => setCurrentFilter('starfield')} className={`filter ${currentFilter === 'starfield' && 'active'}`}>Champs large</button>
          <button onClick={() => setCurrentFilter('other')} className={`filter ${currentFilter === 'other' && 'active'}`}>Autres</button>
        </div>
        <div>
          {
            (filteredPictures.length === 0 && currentFilter === 'all') && (
              <p style={{ textAlign: 'center' }}>Aucune image disponible pour le moment.</p>
            )
          }
          {
            (filteredPictures.length === 0 && currentFilter !== 'all') && (
              <p style={{ textAlign: 'center' }}>Aucune image ne correspond au filtre sélectionné.</p>
            )
          }
        </div>
        <CustomImageDisplay
          images={filteredPictures}
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
