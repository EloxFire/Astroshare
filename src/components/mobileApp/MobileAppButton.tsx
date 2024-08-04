import React from 'react'
import '../../styles/components/mobileApp/mobileAppButton.scss'

interface MobileAppButtonProps {
  title: string
  subtitle: string
  img?: string
  alt?: string
  background?: string
}

export default function MobileAppButton({ title, subtitle, img, alt, background }: MobileAppButtonProps) {

  const backgroundStyle = { "--button-background": background ? background : `none` } as React.CSSProperties

  return (
    <div className={`app-button ${background ? 'variant' : ''}`} style={backgroundStyle}>
      {img && <img src={img} alt={alt} />}
      {background && <div className="background-overlay" />}
      <div className={`button-body ${!img ? 'variant' : ''}`}>
        <p className={`button-title ${!img ? 'variant' : ''}`}>{title}</p>
        <p className={`button-subtitle ${background ? 'variant' : ''}`}>{subtitle}</p>
      </div>
    </div>
  )
}
