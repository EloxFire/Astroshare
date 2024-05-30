import React from 'react'
import '../styles/pages/mobileApp.scss'
import { motion } from "framer-motion";

export default function MobileApp() {

  return (
    <div className="mobile-app">
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 3,
        }}
      >
        <h1 className="title">L'application Astroshare</h1>
      </motion.span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 2,
          delay: .5,
        }}
      >
        <h2 className="subtitle">// Votre nouveau compagnon d'astronomie</h2>
      </motion.span>
      <motion.span
        style={{display: 'flex', justifyContent: 'center'}}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 2,
          delay: 1,
        }}
      >
        <img style={{maxWidth: '200px', marginBottom: '15vh', marginTop: "2vh"}} src="/images/icons/google-play-badge.png" alt="" />
      </motion.span>
      <motion.div
        className='main-image-container'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 3,
          delay: 1,
        }}
      >
        <img className="main-image" src="/images/promo/app/home.min.png" alt="" />
      </motion.div>
    </div>
  )
}
