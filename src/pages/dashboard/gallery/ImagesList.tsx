import { FiChevronLeft } from 'react-icons/fi'
import { useGallery } from '../../../contexts/GalleryContext'
import { Link } from 'react-router-dom'
import { routes } from '../../../routes'
import { Image } from '../../../scripts/types/Image'
import DashboardListItem from '../../../components/dashboard/DashboardListItem'
import '../../../styles/pages/dashboard/gallery/imagesList.scss'
import dayjs from 'dayjs'

export default function ImagesList() {

  const { pictures } = useGallery()

  const handleDelete = async (image_ref: string) => {
    // await deleteImage(image_ref)
    // await updateGallery()
  }

  return (
    <div className="gallery-list-page">
      <p className="dashboard-title h3"><Link to={routes.dashboard.main.path}><FiChevronLeft style={{ verticalAlign: 'middle' }} /></Link>Retour au dashboard</p>
      <p className="dashboard-title h3">Liste des images</p>
      <div className="list">
        {
          pictures.map((img: Image) => {
            return (
              <DashboardListItem
                key={`category-list-item-${img.alt}`}
                properties={[
                  { label: 'Aperçu', value: img.file, type: 'image', alt: img.alt },
                  { label: 'Nom', value: img.alt },
                  { label: 'Date', value: img.date ? dayjs(img.date).format('DD MMMM YYYY') : 'N/A' },
                  { label: 'Vues', value: img.viewers || 'N/A' }
                ]}
                onDelete={() => handleDelete(img.ref!)}
              />
            )
          })
        }
      </div>
    </div>
  )
}
