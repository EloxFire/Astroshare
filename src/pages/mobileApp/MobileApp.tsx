import { motion } from "framer-motion";
import '../../styles/pages/mobileApp.scss'

export default function MobileApp() {



  return (
    <div className="mobile-app">
      <motion.h1 className='title' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 3 }}>L'application Astroshare</motion.h1>
      <motion.h2 className="subtitle" initial={{ opacity: 0 }} animate={{ opacity: .5 }} transition={{ duration: 2, delay: .5, }}>
        &#47;&#47; Votre nouveau compagnon d'astronomie
      </motion.h2>

      <motion.h1 className='tease' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 3, delay: .8, }}>Bientôt disponible</motion.h1>
      <motion.div className="image-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, delay: .8 }}>
        <img src={'/images/promo/app/app-teaser.png'} alt="Images teaser de l'application" />
      </motion.div>
    </div>
  )
}