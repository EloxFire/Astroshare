import { Link } from 'react-router-dom'
import { personnal_book } from '../scripts/helpers/ressources/general/personnal_book'
import { constellations_cheat_sheets } from '../scripts/helpers/ressources/general/constellation_cheat_sheets'
import '../styles/pages/home.scss'

export default function Home() {
  return (
    <div className="home">
      <div className="home__left">
        <h1 className="h1 title">L'astronomie, simplement.</h1>
        <div className="subtitles-container">
          <p>Explorez les splendeurs infinies de l'univers avec simplicité grâce à nos ressources et notre guide d'astronomie pour débutants.</p>
          <p>Apprenez à maitriser votre matériel, complétez le catalogue de Messier, faites vos premiers pas en Astrophotographie et plus encore !</p>
        </div>
        <div className="home__left__content">
          <h2>Ressources les plus aimées :</h2>
          <div className="home__left__content__list">
            <Link className="home__left__content__list--link" to={`/ressources/${personnal_book.category}/${personnal_book.slug}`}>Dossier personnel d'astronomie à compléter</Link>
            <Link className="home__left__content__list--link" to={`/ressources/${constellations_cheat_sheets.category}/${constellations_cheat_sheets.slug}`}>Fiches techniques : Les constellations</Link>
            {/* <p className="home__left__content__list--link--bold">Venez découvrir toutes nos </p> */}
          </div>
        </div>
      </div>
      <div className="home__right">
        <img src="/images/mars.png" alt="Planète mars" />
      </div>
    </div>
  )
}
