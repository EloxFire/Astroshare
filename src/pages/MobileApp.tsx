import React, { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from "framer-motion";
import '../styles/pages/mobileApp.scss'

export default function MobileApp() {

  const [imageSource, setImageSource] = useState('/images/promo/app/home.png');
  const [imageHeight, setImageHeight] = useState<string>('100%');
  const { scrollYProgress } = useScroll();

  // Utilisez useTransform pour mapper la position de scroll à une valeur entre 0 et 1
  const scrollPercentage = useTransform(scrollYProgress, [0, 1], [0, 600]);

  useEffect(() => {
    return scrollPercentage.onChange((latest) => {
      if (latest >= 500) {
        setImageSource('/images/promo/app/places.png');
      } else if (latest >= 400) {
        setImageSource('/images/promo/app/solarWeather.png');
      } else if (latest >= 300) {
        setImageSource('/images/promo/app/weather.png');
      } else if (latest >= 200) {
        setImageSource('/images/promo/app/details.png');
      } else if (latest >= 100) {
        setImageSource('/images/promo/app/search.png');
      } else {
        setImageSource('/images/promo/app/home.png');
      }
    });
  }, [scrollPercentage]);

  useEffect(() => {
    window.addEventListener('scroll', () => handleScroll())

    return () => {
      window.removeEventListener('scroll', () => handleScroll())
    }
  })

  const handleScroll = () => {
    const scroll = window.scrollY;
    
    if (scroll >= 200) {
      setImageHeight('80vh');
    } else {
      setImageHeight('100%');
    }
  }

  return (
    <div className="mobile-app">
      <motion.h1 className='title' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{duration: 3}}>L'application Astroshare</motion.h1>
      <motion.h2 className="subtitle" initial={{ opacity: 0 }} animate={{ opacity: .5 }} transition={{duration: 2, delay: .5,}}>
        &#47;&#47; Votre nouveau compagnon d'astronomie
      </motion.h2>
      <motion.div
        style={{display: 'flex', justifyContent: 'center'}}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 2,
          delay: .5,
        }}
      >
        <img style={{maxWidth: '200px', marginBottom: '15vh', marginTop: '2vh'}} src="/images/icons/google-play-badge.png" alt=""/>
      </motion.div>

      <motion.div className="image-container" initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 2, delay: .8}}>
        <img src={imageSource} alt="Scroll Change" style={{maxHeight: imageHeight}} />
      </motion.div>
    </div>
  )
}
