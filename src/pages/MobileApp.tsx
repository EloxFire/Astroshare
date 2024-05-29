import React, { useEffect, useState } from 'react'
import '../styles/pages/mobileApp.scss'
import { mockupAnimationImageSequence } from '../scripts/helpers/constants'

export default function MobileApp() {

  const [currentImage, setCurrentImage] = useState<string>(mockupAnimationImageSequence[0])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = () => {
    // si le scroll augmente de 10px alors on affiche l'image suivante
    // si le scroll diminue de 10px alors on affiche l'image précédente
    // J'ai 70 images au total, mappe les images pour les afficher en fonction du scroll
    // la taille de chaque image est de 80vh et la taille du conteuneur est de 400vh

    const scroll = window.scrollY
    const imageHeight = 80
    const containerHeight = 400
    const totalImages = 70
    const imagesPerContainer = 5
    const container = Math.floor(scroll / containerHeight)
    const imageIndex = Math.floor((scroll % containerHeight) / imageHeight)
    const image = container * imagesPerContainer + imageIndex
    setCurrentImage(mockupAnimationImageSequence[image])

  }

  return (
    <div className="mobile-app">
      <img src="/images/promo/app/sequence/out1.png" style={{height: '80vh', position: 'sticky'}} alt="" />
    </div>
  )
}
