import { Link } from 'react-router-dom'
import { constellations_cheat_sheets } from '../scripts/helpers/ressources/general/constellation_cheat_sheets'
import { optical_notion } from '../scripts/helpers/ressources/material/optical_notions'
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import MarsModel from '../components/MarsModel';
import '../styles/pages/home.scss';

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
        {/* <p className="h1 model-title">MARS</p> */}
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 2]} fov={75} near={0.1} far={1000} />
          <directionalLight position={[4, 1, 5]} intensity={3} />
          <ambientLight intensity={0.1} />
          <MarsModel />
        </Canvas>
      </div>
    </div>
  )
}
