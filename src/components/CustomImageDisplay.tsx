import React, { useState } from 'react'
import '../styles/components/customImageDisplay.scss'

interface CustomImageDisplayProps {
  slides: { url: string, alt: string }[]
}

export default function CustomImageDisplay({ slides }: CustomImageDisplayProps) {

  const [slideNumber, setSlideNumber] = useState(0)
  const [openModal, setOpenModal] = useState(true)

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
          <div className="custom-image-display__modal__image-container">
            <img src={slides[slideNumber].url} alt={slides[slideNumber].alt} />
          </div>
          <div className="custom-image-display__modal__footer">
            <button className="custom-image-display__modal__footer__swipe-button" onClick={() => { setSlideNumber(slideNumber - 1) }} disabled={slideNumber === 0}>&#10094;</button>
            <p>{slides[slideNumber].alt}</p>
            <button className="custom-image-display__modal__footer__swipe-button" onClick={() => { setSlideNumber(slideNumber + 1) }} disabled={slideNumber === slides.length - 1}>&#10095;</button>
          </div>
        </div>
      }
    </div>
  )
}
