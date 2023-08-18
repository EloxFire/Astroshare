import React, { useState } from 'react'
import '../styles/components/aboutContainer.scss'

interface AboutContainerProps {
  title?: string;
  text: string;
  image: string;
  alt: string;
  orientation?: 'left' | 'right';
  position?: 'first' | 'neutral' | 'last'
}

export default function AboutContainer({ title, text, image, alt, orientation, position }: AboutContainerProps) {

  const [customPosition] = useState<string>(position || 'neutral')
  const [customOrientation] = useState<string>(orientation || 'left')

  return (
    <div className={`about-container ${customPosition} ${customOrientation}`}>
      {title && <h2 className={`about-container__title`}>{title}</h2>}
      <div className={`about-container__content ${customOrientation}`}>
        <div className="about-container__content__text">
          <p>{text}</p>
        </div>
        <div className="about-container__content__image">
          <img src={image} alt={alt} />
        </div>
      </div>
    </div>
  )
}
