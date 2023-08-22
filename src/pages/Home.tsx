import { Link } from 'react-router-dom'
import CopyrightBadge from '../components/CopyrightBadge'
import '../styles/pages/home.scss'
import { ressourcesNames } from '../scripts/helpers'

export default function Home() {
  return (
    <div className="home">
      <CopyrightBadge />
      <div className="home__left">
        <h1 className="h1 title">L'astronomie, simplement.</h1>
        <div className="subtitles-container">
          <p>Explorez les splendeurs infinies de l'univers avec simplicité grâce à nos ressources et notre guide d'astronomie pour débutants.</p>
          <p>Apprenez à maitriser votre matériel, complétez le catalogue de Messier, faites vos premiers pas en Astrophotographie et plus encore !</p>
        </div>
        <div className="home__left__content">
          <h2>Explorez nos ressources :</h2>
          <div className="home__left__content__list">
            <Link className="home__left__content__list--link" to={`/ressources/${ressourcesNames[0]}`}>Dossier personnel d'astronomie à compléter</Link>
            <Link className="home__left__content__list--link" to={`/ressources/${ressourcesNames[1]}`}>Fiches techniques : Les constellations</Link>
            <a className="home__left__content__list--link" href="../assets/guide.pdf" download>Carte du ciel en direct</a>
            <a className="home__left__content__list--link" href="../assets/guide.pdf" download>Fiches techniques : Le système solaire</a>
            <a className="home__left__content__list--link" href="../assets/guide.pdf" download>Guide : Matériel d'astronomie</a>
            <p className="home__left__content__list--link--bold">Et plus encore à venir !</p>
          </div>
        </div>
      </div>
      <div className="home__right">
        <img src="/images/mars.png" alt="Planète mars" />
      </div>
    </div>
  )
}
