import { FiChevronLeft } from 'react-icons/fi'
import { useGallery } from '../../../contexts/GalleryContext'
import { Link } from 'react-router-dom'
import { routes } from '../../../routes'
import { Image } from '../../../scripts/types/Image'
import { deleteImage } from '../../../scripts/helpers/api/gallery/deleteImage'
import DashboardListItem from '../../../components/dashboard/DashboardListItem'
import dayjs from 'dayjs'
import '../../../styles/pages/dashboard/gallery/imagesList.scss'

export default function ImagesList() {

  const { pictures, updateGallery } = useGallery()

  const handleDelete = async (image_ref: string, image_slug: string) => {
    await deleteImage(image_ref, image_slug)
    await updateGallery()
  }

  return (
    <div className="gallery-list-page">
      <p className="dashboard-title h3"><Link to={routes.dashboard.main.path}><FiChevronLeft style={{ verticalAlign: 'middle' }} /></Link>Retour au dashboard</p>
      <p className="dashboard-title h3">Liste des images</p>
      <div className="list">
        <table className="dashboard-list">
          <thead>
            <tr>
              <th>Aperçu</th>
              <th>Nom</th>
              <th>Date</th>
              <th>Vues</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              pictures.length === 0 &&
              <tr>
                <td colSpan={5} style={{ textAlign: 'center' }}>Aucune image</td>
              </tr>
            }
            {pictures.map((img: Image) => (
              <DashboardListItem
                key={`category-list-item-${img.alt}`}
                properties={[
                  { label: 'Aperçu', value: img.file, type: 'image', alt: img.alt },
                  { label: 'Nom', value: img.alt },
                  { label: 'Date', value: img.date ? dayjs(img.date).format('DD MMMM YYYY') : 'N/A' },
                  { label: 'Vues', value: img.viewers || 'N/A' }
                ]}
                onDelete={img.slug ? () => handleDelete(img.ref!, img.slug!) : undefined}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
