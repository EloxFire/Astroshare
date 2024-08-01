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
      <motion.div className="content-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, delay: .8 }}>
        <div className="row">
          <div>

          </div>
          <img src="/images/promo/app/home.png" alt="Page d'accueil de l'application" />
          <div className="content">
            <h3 className="title">Réinventez vos soirées d'astronomie.</h3>
            <p className="description">
              L'application Astroshare est votre nouveau compagnon d'astronomie. Il vous permet de planifier plus simplement vos soirée.
            </p>
            <p className="description">Astroshare regroupe tous les outils dont vous avez besoin en un seul endroit. </p>
            <h3 className="subtitle">Une expérience fluide</h3>
            <p className="description">
              Avec son design moderne et son interface simple, l'application vous permet de vous concentrer sur le moment.
            </p>
          </div>
        </div>
        <div className="row reverse">
          <img src="/images/promo/app/objectDetails.png" alt="Page d'accueil de l'application avec la recherche 'M42' effectuée" style={{ marginLeft: '20px' }} />
          <img src="/images/promo/app/homeSearch.png" alt="Page de détails d'un objet céleste" />
          <div className="content">
            <h3 className="title">Cherchez, trouvez</h3>
            <p className="description">
              Profitez d'une barre de recherche globale pour trouver rapidement les objets célestes que vous voulez !
            </p>
            <p className="description">Vous pouvez ensuite consulter une page détaillée pour chaque objet. Retrouvez toutes les informations utiles sur l'objet : Magnitude, coordonées, visibilité en direct et plus encore</p>
          </div>
        </div>
        <div className="row">
          <img src="/images/promo/app/weather.png" alt="Page de météo en direct de l'application" />
          <div className="content">
            <h3 className="title">Des nuages ? Où ça ?</h3>
            <p className="description">Avec le module météo intégré d'Astroshare, vous pouvez consulter les conditions météorologiques actuelles à votre position, mais aussi n'importe ou dans le monde. D'orénavant, vous ne pourrez plus être surpris par le mauvais temps !</p>
            <p className="description">Le module propose aussi un aperçu de l'éphéméride du jour, ainsi vous pouvez vous assurer que la pleine lune ne vous empêche pas de vous faire plaisir !</p>
          </div>
        </div>
        <div className="row reverse">
          <img src="/images/promo/app/solarWeather.png" alt="Page de météo solaire de l'application" />
          <div className="content">
            <h3 className="title">La plus belle des étoiles</h3>
            <p className="description">Contemplez notre étoile hôte : le Soleil. Avec Astroshare, vous pouvez facilement voir l'état du Soleil et sa 'météo' en direct, avec des images impressionantes !</p>
            <p className="description">Restez à l'afut : Les prochaines aurores boréales ne vous échapperont pas !</p>
          </div>
        </div>
        <div className="row">
          <img src="/images/promo/app/moonPhases.png" alt="Page de calcul des phases de la lune" />
          <div className="content">
            <h3 className="title">Au clair de la Lune</h3>
            <p className="description">Marre de planifier une soirée lors de la pleine Lune ? Avec Astroshare, vous pouvez facilement calculer les phases de la lune pour votre position actuelle ! L'application vous propose aussi une panoplie d'informations utiles sur la Lune.</p>
            <p className="description">Vous pouvez également calculer les phases de la lune pour n'importe quelle date !</p>
          </div>
        </div>
        <div className="row reverse">
          <img src="/images/promo/app/apod.png" alt="Page de l'image du jour de la NASA" />
          <div className="content">
            <h3 className="title">Explorez toujours plus loin</h3>
            <p className="description">Découvrez de nouveaux horizons et de nouveaux objets grâce à l'image du jour de la NASA. Avec Astroshare, vous pouvez facilement consulter cette image mise à jour toutes les 24h !</p>
            <p className="description low">Service fourni et dépendant de la NASA.</p>
          </div>
        </div>
        <div className="row">
          <img src="/images/promo/app/polarClock.png" alt="Page de mise en station de votre monture" />
          <div className="content">
            <h3 className="title">Direction le nord !</h3>
            <p className="description">Vous disposez d'une monture avec un viseur polaire et vous n'arrivez pas à vous aligner avec l'étoile polaire ?</p>
            <p className="description">Astroshare vous propose un outil de mise en station simple et efficace, tout ce que vous avez à faire c'est positionnze votre monture comme indiqué sur le schéma !</p>
            <p className="description low">Une version pour l'hémisphère sud est en développement.</p>
          </div>
        </div>
        <div className="row reverse">
          <img src="/images/promo/app/issTracker.png" alt="Page de tracking de la Station Spatiale Internationale" />
          <div className="content">
            <h3 className="title">Houston ? Ici la Terre !</h3>
            <p className="description">Désormais vous pouvez suivre la station spatiale internationale (ISS) et voir où elle se trouve en temps réel !</p>
            <p className="description low">La liste des passage de l'ISS au dessus de votre position est en développement.</p>
          </div>
        </div>
        <div className="row">
          <img src="/images/promo/app/spots.png" alt="Page de mise en station de votre monture" />
          <div className="content">
            <h3 className="title">Une nouvelle organisation</h3>
            <p className="description">Ajoutez vos lieux et spots d'observation favoris directement dans l'application ! Renseignez les différents services et commodités disponibles sur ces lieux, afin de mieux vous préparer !</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
