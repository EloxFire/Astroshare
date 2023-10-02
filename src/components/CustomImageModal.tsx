import { useEffect } from 'react'
import { Image } from "../scripts/types"
import '../styles/components/customImageModal.scss'
import dayjs from 'dayjs'

interface CustomImageModalProps {
  slide: Image
  onClose: () => void
  onNext?: () => void
  onPrevious?: () => void
}

export default function CustomImageModal({ slide, onClose, onNext, onPrevious }: CustomImageModalProps) {

  useEffect(() => {
    window.addEventListener('keydown', handleKeys)

    return () => {
      window.removeEventListener('keydown', handleKeys)
    }
  }, [])

  const handleKeys = (e: KeyboardEvent) => {
    switch (e.key) {
      case "Escape":
        onClose()
        break;
      // case "ArrowRight":
      //   onNext()
      //   console.log('next');
      //   break;
      // case "ArrowLeft":
      //   onPrevious()
      //   console.log('previous');
      // break;
      default:
        break;
    }
  }


  return (
    <div className="custom-image-modal">
      <div className="controls">
        <button className="close-button">&#10229;</button>
        <button className="close-button">&#x2716;</button>
        <button className="close-button">&#10230;</button>
      </div>
      <div className="custom-image-modal__container">
        <img src={slide.url} alt={slide.alt} />
        <div className="custom-image-modal__container__right">
          <p className="custom-image-modal__container__right__title">{slide.alt}</p>
          {slide.cameraSettings && <p className="custom-image-modal__container__right__property--title">Informations générales :</p>}
          {slide.date && <p className="custom-image-modal__container__right__property">Date : {dayjs(slide.date).format('DD MMMM YYYY')}</p>}
          {slide.fileFormat && <p className="custom-image-modal__container__right__property">Format : {slide.fileFormat}</p>}
          {slide.cameraSettings && <p className="custom-image-modal__container__right__property--title">Paramètres de caméra :</p>}
          {slide.cameraSettings?.name && <p className="custom-image-modal__container__right__property">Appareil : {slide.cameraSettings.name}</p>}
          {slide.cameraSettings?.iso && <p className="custom-image-modal__container__right__property">ISO : {slide.cameraSettings.iso}</p>}
          {slide.cameraSettings?.focalLength && <p className="custom-image-modal__container__right__property">Focale : {slide.cameraSettings.focalLength}</p>}
          {slide.cameraSettings?.fps && <p className="custom-image-modal__container__right__property">Images par seconde : {slide.cameraSettings?.fps}</p>}
          {slide.cameraSettings?.shutter && <p className="custom-image-modal__container__right__property">Vitesse d'obturation : {slide.cameraSettings?.shutter}</p>}
          {slide.cameraSettings?.aperture && <p className="custom-image-modal__container__right__property">Ouverture : {slide.cameraSettings.aperture}</p>}
          {slide.scopeSettings && <p className="custom-image-modal__container__right__property--title">Télescope :</p>}
          {slide.scopeSettings?.name && <p className="custom-image-modal__container__right__property">Nom : {slide.scopeSettings?.name}</p>}
          {slide.scopeSettings?.diameter && <p className="custom-image-modal__container__right__property">Diamètre miroir : {slide.scopeSettings?.diameter}mm</p>}
          {slide.scopeSettings?.focal && <p className="custom-image-modal__container__right__property">Focale : {slide.scopeSettings?.focal}mm</p>}
          {slide.scopeSettings?.focalRatio && <p className="custom-image-modal__container__right__property">Ouverture : {slide.scopeSettings?.focalRatio}</p>}
          {slide.scopeSettings?.mount && <p className="custom-image-modal__container__right__property">Monture : {slide.scopeSettings?.mount}</p>}
          {slide.scopeSettings?.eyePiece && <p className="custom-image-modal__container__right__property">Oculaire : {slide.scopeSettings?.eyePiece}</p>}
          {slide.scopeSettings?.eyePieceMagnification && <p className="custom-image-modal__container__right__property">Grossissement : {slide.scopeSettings?.eyePieceMagnification}x</p>}
          {slide.scopeSettings?.barlow && <p className="custom-image-modal__container__right__property">Barlow : {slide.scopeSettings?.barlow}</p>}
          {slide.processingSettings && <p className="custom-image-modal__container__right__property--title">Post-processing :</p>}
          {slide.processingSettings?.software && <p className="custom-image-modal__container__right__property">Logiciel : {slide.processingSettings.software}</p>}
          {slide.processingSettings?.stacking && <p className="custom-image-modal__container__right__property">Stacking : {slide.processingSettings?.stacking}</p>}
          {slide.processingSettings?.stackingSoftware && <p className="custom-image-modal__container__right__property">Logiciel de stacking : {slide.processingSettings?.stackingSoftware}</p>}
          {slide.processingSettings?.stackingFrames && <p className="custom-image-modal__container__right__property">Nombre d'images : {slide.processingSettings?.stackingFrames}</p>}
          {slide.processingSettings?.stackingTime && <p className="custom-image-modal__container__right__property">Exposition par image : {slide.processingSettings?.stackingTime}</p>}
          {slide.processingSettings?.stackingTimeTotal && <p className="custom-image-modal__container__right__property">Exposition totale : {slide.processingSettings?.stackingTimeTotal}</p>}
        </div>
      </div>
    </div>
  )
}
