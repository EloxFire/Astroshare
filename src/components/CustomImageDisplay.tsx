import { useEffect } from 'react'
import { Image } from '../scripts/types'
import '../styles/components/customImageDisplay.scss'
import dayjs from 'dayjs'

interface CustomImageDisplayProps {
  images: Image[]
}

export default function CustomImageDisplay({ images }: CustomImageDisplayProps) {

  useEffect(() => {
    document.title = "Astroshare - Galerie photos"
  }, [])

  return (
    <div className="custom-image-display">
      {images.map((image, index) => (
        <figure key={index} className="custom-image-display__item">
          <img src={image.url} alt={image.alt} />
          <figcaption className="custom-image-display__item__caption__title">{image.alt}</figcaption>
          <figcaption className="custom-image-display__item__caption__date">{dayjs(image.date).format('DD MMMM YYYY')}</figcaption>
        </figure>
      ))}
    </div >
  )
}
