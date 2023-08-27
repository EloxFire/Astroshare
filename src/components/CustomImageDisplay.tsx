import React, { useState } from 'react'
import '../styles/components/customImageDisplay.scss'
import { Image } from '../scripts/types'
import dayjs from 'dayjs'

interface CustomImageDisplayProps {
  slides: Image[]
}

export default function CustomImageDisplay({ slides }: CustomImageDisplayProps) {

  const [slideNumber, setSlideNumber] = useState(0)
  const [openModal, setOpenModal] = useState(false)

  return (
    <div className="custom-image-display">
      {
        openModal && <div className="custom-image-display__page-filter"></div>
      }
      {/* Maybe custom text or thing outside the image wrapper here */}
      <div className="custom-image-display__wrap">
        {
          slides.map((slide, index) => {
            return (
              <div className="custom-image-display__wrap__image" key={index}>
                <img src={slide.url} alt={slide.alt} onClick={() => { setSlideNumber(index); setOpenModal(true) }} />
                <small>{slide.alt}</small>
              </div>
            )
          })
        }
      </div>
      {
        openModal &&
        <div className="custom-image-display__modal">
          <div className="custom-image-display__modal__header">
            <button className="custom-image-display__modal__header__close-button" onClick={() => { setOpenModal(false) }}>&#9747;</button>
          </div>
          <div className="custom-image-display__modal__content">
            <div className="custom-image-display__modal__content__image-container">
              <img src={slides[slideNumber].url} alt={slides[slideNumber].alt} />
            </div>
            <div className="custom-image-display__modal__content__image-infos">
              <small className="top-element">Date : {dayjs(slides[slideNumber].date).format('DD/MM/YYYY')}</small>
              {slides[slideNumber].resolution && <small className="top-element">Resolution : {slides[slideNumber].resolution}</small>}
              {slides[slideNumber].fileFormat && <small className="top-element">Format : {slides[slideNumber].fileFormat}</small>}
              {slides[slideNumber].cameraSettings && <small className="top-element">Camera :</small>}
              {slides[slideNumber].cameraSettings?.name && <small className="child-element">Nom : {slides[slideNumber].cameraSettings?.name}</small>}
              {slides[slideNumber].cameraSettings?.iso && <small className="child-element">ISO : {slides[slideNumber].cameraSettings?.iso}</small>}
              {slides[slideNumber].cameraSettings?.shutter && <small className="child-element">Vitesse d'obturation : {slides[slideNumber].cameraSettings?.shutter}</small>}
              {slides[slideNumber].cameraSettings?.aperture && <small className="child-element">Ouverture : {slides[slideNumber].cameraSettings?.aperture}</small>}
              {slides[slideNumber].cameraSettings?.focalLength && <small className="child-element">Focale : {slides[slideNumber].cameraSettings?.focalLength}</small>}
              {slides[slideNumber].cameraSettings?.fps && <small className="child-element">FPS : {slides[slideNumber].cameraSettings?.fps}</small>}
              {slides[slideNumber].scopeSettings && <small className="top-element">Telescope :</small>}
              {slides[slideNumber].scopeSettings?.name && <small className="child-element">Nom : {slides[slideNumber].scopeSettings?.name}</small>}
              {slides[slideNumber].scopeSettings?.diameter && <small className="child-element">Diametre : {slides[slideNumber].scopeSettings?.diameter}</small>}
              {slides[slideNumber].scopeSettings?.focal && <small className="child-element">Focale : {slides[slideNumber].scopeSettings?.focal}</small>}
              {slides[slideNumber].scopeSettings?.focalRatio && <small className="child-element">Rapport F/D : {slides[slideNumber].scopeSettings?.focalRatio}</small>}
              {slides[slideNumber].scopeSettings?.mount && <small className="child-element">Monture : {slides[slideNumber].scopeSettings?.mount}</small>}
              {slides[slideNumber].scopeSettings?.eyePiece && <small className="child-element">Occulaire : {slides[slideNumber].scopeSettings?.eyePiece}</small>}
              {slides[slideNumber].scopeSettings?.eyePieceMagnification && <small className="child-element">Grossisement : {slides[slideNumber].scopeSettings?.eyePieceMagnification}x</small>}
              {slides[slideNumber].scopeSettings?.barlow && <small className="child-element">Barlow : {slides[slideNumber].scopeSettings?.barlow}</small>}
              {slides[slideNumber].processingSettings && <small className="top-element">Post-traitement :</small>}
              {slides[slideNumber].processingSettings?.software && <small className="child-element">Logiciel : {slides[slideNumber].processingSettings?.software}</small>}
            </div>
          </div>
          <div className="custom-image-display__modal__footer">
            <button className="custom-image-display__modal__footer__swipe-button" onClick={() => { setSlideNumber(slideNumber - 1) }} disabled={slideNumber === 0}>&#10094;</button>
            <p>{slides[slideNumber].alt}</p>
            <button className="custom-image-display__modal__footer__swipe-button" onClick={() => { setSlideNumber(slideNumber + 1) }} disabled={slideNumber === slides.length - 1}>&#10095;</button>
          </div>
        </div>
      }
    </div >
  )
}
