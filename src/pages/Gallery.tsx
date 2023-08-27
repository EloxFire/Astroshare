import React from 'react'
import '../styles/pages/gallery.scss'
import CustomImageDisplay from '../components/CustomImageDisplay'
import { images } from '../scripts/helpers/gallery'

export default function Gallery() {
  return (
    <div className="gallery">
      <h1>Gallerie photos</h1>
      <p>Retrouvez une sélection de mes photos favorites, lors de mes différentes sessions d'astronomie.</p>
      <CustomImageDisplay
        slides={images}
      />
    </div>
  )
}
