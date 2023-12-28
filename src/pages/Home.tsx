import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Canvas } from '@react-three/fiber';
// import { Stats, OrbitControls } from '@react-three/drei'
import { PerspectiveCamera } from '@react-three/drei';
import { getMostDownloadedRessources } from '../scripts/helpers/api/ressources/getMostDownloadedRessources';
import { Ressource } from '../scripts/types';
import MarsModel from '../components/MarsModel';
import '../styles/pages/home.scss';
import { useAuth } from '../contexts/AuthContext';

export default function Home() {

  const { user } = useAuth()
  const [mostDownloadedRessources, setMostDownloadedRessources] = useState<Ressource[]>([])
  const [mostDownloadedRessourcesLoading, setMostDownloadedRessourcesLoading] = useState<boolean>(true)

  useEffect(() => {
    document.title = "Astroshare"
  }, [])

  useEffect(() => {
    const fetchMostDownloaded = async () => {
      const ressources = await getMostDownloadedRessources();
      setMostDownloadedRessources(ressources)
      setMostDownloadedRessourcesLoading(false)
    }

    fetchMostDownloaded().catch((err) => {
      console.error(err)
    })
  }, [])

  return (
    <div className="home">
      <div className="home__left">
        <h1 className="h1 title">L'astronomie, simplement.</h1>
        <div className="subtitles-container">
          <p>Explorez les splendeurs infinies de l'univers avec simplicité grâce à nos ressources et notre guide d'astronomie pour débutants.</p>
          <p>Apprenez à maitriser votre matériel, complétez le catalogue de Messier, faites vos premiers pas en Astrophotographie et plus encore !</p>
        </div>
        <div className="home__left__content">
          <h2>Ressources les plus téléchargées :</h2>
          <div className="home__left__content__list">
            {
              mostDownloadedRessourcesLoading ?
                <small>Chargement...</small>
                :
                mostDownloadedRessources.slice(0, 2).map((ressource, ressource_index) => {
                  return (
                    <Link className="home__left__content__list--link" key={ressource_index} to={`/ressources/${ressource.category}/${ressource.slug}`}>{ressource.name}</Link>
                  )
                })
            }
          </div>
        </div>
      </div>
      <div className="home__right">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 2]} fov={75} near={0.1} far={1000} />
          <directionalLight position={[4, 1, 5]} intensity={3} />
          <ambientLight intensity={0.1} />
          <MarsModel />
          {/* <OrbitControls enableZoom={false} enableDamping={false} enableRotate  /> */}
        </Canvas>
      </div>
    </div>
  )
}
