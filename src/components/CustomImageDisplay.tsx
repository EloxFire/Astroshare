import { useEffect, useState } from 'react'
import { Image } from '../scripts/types'
import '../styles/components/customImageDisplay.scss'
import dayjs from 'dayjs'
import CustomImageModal from './CustomImageModal'

interface CustomImageDisplayProps {
  images: Image[]
}

export default function CustomImageDisplay({ images }: CustomImageDisplayProps) {

  const [imageModal, setImageModal] = useState<boolean>(false)
  const [slideIndex, setSlideIndex] = useState<number>(0)

  useEffect(() => {
    document.title = "Astroshare - Galerie photos"
  }, [])

  const handleImageClick = (index: number) => {
    setSlideIndex(index)
    setImageModal(true)
  }

  const handleNextImage = () => {
    console.log(slideIndex);
    if (slideIndex === images.length - 1) {
      setSlideIndex(0)
    } else {
      setSlideIndex((prev) => prev + 1)
    }
  }

  const handlePreviousImage = () => {
    console.log(slideIndex);

    if (slideIndex === 0) {
      setSlideIndex(images.length - 1)
    } else {
      setSlideIndex((prev) => prev - 1)
    }
  }

  return (
    <>
      <div className="custom-image-display">
        {images.map((image, image_index) => (
          <figure key={image_index} className="custom-image-display__item" onClick={() => handleImageClick(image_index)}>
            <img src={image.url} alt={image.alt} />
            <figcaption className="custom-image-display__item__caption">{image.alt.slice(0, 30)}{image.alt.length >= 30 && "..."}</figcaption>
            <p className="custom-image-display__item__date">{dayjs(image.date).format('DD MMMM YYYY')}</p>
          </figure>
        ))}
      </div >
      {
        imageModal && (
          <CustomImageModal
            slide={images[slideIndex]}
            onClose={() => setImageModal(false)}
            onNext={handleNextImage}
            onPrevious={handlePreviousImage}
          />
        )
      }
    </>
  )
}
