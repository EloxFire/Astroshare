import { motion } from "framer-motion";
import '../../styles/pages/mobileApp.scss'
import { appFeaturesList } from "../../scripts/helpers/mobileApp/featuresList";
import MobileAppButton from "../../components/mobileApp/MobileAppButton";

export default function MobileApp() {



  return (
    <div className="mobile-app">
      <div>
        <motion.h1 className='header-title' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 3 }}>L'application Astroshare</motion.h1>
        <motion.h2 className="header-subtitle" initial={{ opacity: 0 }} animate={{ opacity: .5 }} transition={{ duration: 2, delay: .5, }}>
          &#47;&#47; Votre nouveau compagnon d'astronomie
        </motion.h2>
      </div>
      <motion.div className="content-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, delay: .8 }}>
        <div className="badge-holder">
          <p className="title">Bientôt disponible</p>
          <p className="subtitle">*Disponibilité sur les appareils Android uniquement</p>
          <p className="subtitle">Les appareils iOS seront pris en charge prochainement</p>
        </div>

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
          <h3 style={{ margin: 0 }}>Des fonctionnalités pertinentes</h3>
          <p className="panel-description" style={{ marginBottom: '5vh' }}>Découvrez en détails les fonctionnalités de l'application déja disponibles :</p>

          <div className="features" style={{ marginBottom: '10vh' }}>
            {
              appFeaturesList.filter((feature) => feature.status === 'available').map((feature) => {
                return (
                  <div className="feature" key={`feature-${feature.title}`}>
                    <MobileAppButton
                      title={feature.title}
                      subtitle={feature.subtitle}
                      img={feature.img}
                      alt={feature.alt}
                      background={feature.background}
                    />
                    {feature.description &&
                      feature.description.map((description, index) => {
                        return (
                          <p className="description-text" key={`feature-${feature.title}-description-${index}`}>{description}</p>
                        )
                      })
                    }
                  </div>
                )
              })
            }
          </div>

          <h3 style={{ margin: 0 }}>Un développement actif !</h3>
          <p style={{ marginBottom: '5vh' }}>L'aplication Astroshare est un projet en cours de développement. Voici un apperçu des fonctionnalités à venir :</p>
          <div className="features" style={{ marginBottom: '10vh' }}>
            {
              appFeaturesList.filter((feature) => feature.status === 'coming-soon').map((feature) => {
                return (
                  <div className="feature" key={`feature-${feature.title}`}>
                    <MobileAppButton
                      title={feature.title}
                      subtitle={feature.subtitle}
                      img={feature.img}
                      alt={feature.alt}
                      background={feature.background}
                    />
                    {feature.description &&
                      feature.description.map((description, index) => {
                        return (
                          <p className="description-text" key={`feature-${feature.title}-description-${index}`}>{description}</p>
                        )
                      })
                    }
                  </div>
                )
              })
            }
          </div>
        </div>
      </motion.div>
    </div>
  )
}
