import { Link } from 'react-router-dom'
import { constellations_cheat_sheets } from '../scripts/helpers/ressources/general/constellation_cheat_sheets'
import { optical_notion } from '../scripts/helpers/ressources/material/optical_notions'
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
            <Link className="home__left__content__list--link" to={`/ressources/${optical_notion.category}/${optical_notion.slug}`}>{optical_notion.name}</Link>
            <Link className="home__left__content__list--link" to={`/ressources/${constellations_cheat_sheets.category}/${constellations_cheat_sheets.slug}`}>{constellations_cheat_sheets.name}</Link>
          </div>
        </div>
      </div>
      <div className="home__right">
        <img src="/images/mars.png" alt="Planète mars" />
        {/* <div className="sketchfab-embed-wrapper"> <iframe title="Planet Mars" frameBorder="0" allowFullScreen allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/1a2862763b1c428ba914691248ddb8fa/embed?autostart=1"> </iframe> </div> */}
      </div>
    </div>
  )
}
