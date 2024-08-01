import { motion } from "framer-motion";
import '../../styles/pages/mobileApp.scss'

export default function MobileApp() {



  return (
    <div className="mobile-app">
      <div>
        <motion.h1 className='header-title' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 3 }}>L'application Astroshare</motion.h1>
        <motion.h2 className="header-subtitle" initial={{ opacity: 0 }} animate={{ opacity: .5 }} transition={{ duration: 2, delay: .5, }}>
          &#47;&#47; Votre nouveau compagnon d'astronomie
        </motion.h2>
        {/* <motion.h1 className='header-tease' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, delay: .8, }}>Bientôt disponible</motion.h1> */}
      </div>
      <motion.div className="content-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, delay: .8 }}>
        <div className="first-panel">
          <img src="/images/promo/app/home.png" alt="Page d'accueil de l'application" />
          <div className="content">
            <h3>Une seule application, tous vos outils</h3>
            <p className="description">L'application idéale pour les passionnés d'astronomie.</p>
            <p className="description">Profitez d'une application au design sobre et moderne capable de répondre à tous vos besoins pour la préparation et le déroulement de vos sessions d'observations astronomiques.</p>
            <h4 style={{ marginTop: '40px', opacity: .8 }}>Planification de soirée</h4>
            <p className="description">Consultez la météo, calculez les phases de la lune recherchez les objets célestes que vous souhaitez observer.</p>
            <h4 style={{ marginTop: '40px', opacity: .8 }}>Mise en station</h4>
            <p className="description">Utilisez notre viseur polaire pour aligner votre monture avec l'étoile polaire.</p>
            <h4 style={{ marginTop: '40px', opacity: .8 }}>Catalogue d'objets</h4>
            <p className="description">Profitez d'un catalogue de plus de 13000 objets du ciel profond, provenants des catalogues : Messier, NGC, IC, UGC, PGC</p>
            <h4 style={{ marginTop: '40px', opacity: .8 }}>Et plus encore !</h4>
            <p className="description">Découvrez d'autres outils tout aussi passionants : Image du jour de la NASA, météo solaire, suivi de l'ISS, etc.</p>
          </div>
        </div>

        <div className="second-panel">
          <div className="feature-card">
            <div className="header"><img src="/images/icons/FiTelescope.png" alt="Mise en station" /></div>
            <div className="body">
              <h3>Mise en station</h3>
              <p>Notre viseur polaire digital vous permet de d'aligner votre monture avec l'étoile polaire de manière simple et précise.</p>
              <p>Profitez d'une mise à jours en temps réel du graphique pour une précision maximale. Plus besoin de chercher ailleur, Astroshare vous le permet.</p>
            </div>
          </div>

          <div className="feature-card">
            <div className="header"><img src="/images/icons/FiSolarWind.png" alt="Météo solaire" /></div>
            <div className="body">
              <h3>Météo solaire</h3>
              <p>Contemplez le Soleil sous toutes ses coutures et découvrez les conditions solaires actuelles.</p>
              <p>Profitez d'images et de vidéos en temps quasi réel de tous les instruments disponibles en orbite autour du Soleil.</p>
            </div>
          </div>

          <div className="feature-card">
            <div className="header"><img src="/images/icons/FiIss.png" alt="Suivi de l'ISS" /></div>
            <div className="body">
              <h3>Suivi de l'ISS</h3>
              <p>Découvrez la position de la Station Spatiale en temps réel, ainsi qu'une prévisualisation de sa trajectoire autour du globe.</p>
              <p>Repérez également les prochains passages de l'ISS au dessus de votre position afin de l'observer dans les méeilleures conditions.</p>
            </div>
          </div>

          <div className="feature-card">
            <div className="header"><img src="/images/icons/astro/CL+N.png" alt="Catalogue d'objets" /></div>
            <div className="body">
              <h3>Catalogue d'objets</h3>
              <p>13000</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
