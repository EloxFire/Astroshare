import React from 'react'
import '../styles/pages/mobileApp.scss'
import { motion, useScroll, useTransform } from "framer-motion";

export default function MobileApp() {

  const variants = {
    home: { opacity: 0 },
    search: { opacity: 1, transition: { duration: .3 } },
    details: { opacity: 1, transition: { duration: .3 } },
    weather: { opacity: 1, transition: { duration: .3 } },
    solarWeather: { opacity: 1, transition: { duration: .3 } },
  }

  const { scrollY } = useScroll();
  const mainImageScale = useTransform(scrollY, [300, 700], [1, 0.5]);
  const imageSwitch = useTransform(scrollY, [0, 300, 700, 1000, 1300], ['home', 'search', 'details', 'weather', 'solarWeather']);

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
      <motion.div
        className='main-image-container'
        style={{scale: mainImageScale}}
        initial={{ opacity: 0 }}
        // animate={imageSwitch}
        transition={{
          duration: 3,
          delay: 1,
        }}
        variants={variants}
      >
        <motion.img
          className='main-image'
          src="/images/promo/app/home.png"
          alt=""
          variants={variants}
        />
        <motion.img
          className='main-image'
          src="/images/promo/app/search.png"
          alt=""
          variants={variants}
        />
        <motion.img
          className='main-image'
          src="/images/promo/app/details.png"
          alt=""
          variants={variants}
        />
        <motion.img
          className='main-image'
          src="/images/promo/app/weather.png"
          alt=""
          variants={variants}
        />
        <motion.img
          className='main-image'
          src="/images/promo/app/solarWeather.png"
          alt=""
          variants={variants}
        />
      </motion.div>
    </div>
  )
}
