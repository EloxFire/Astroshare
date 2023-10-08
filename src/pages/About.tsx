import React, { useEffect } from 'react'
import '../styles/pages/about.scss'
import { calculateAge } from '../scripts/helpers/helpers'
import { Link } from 'react-router-dom'
import { FiChevronLeft } from 'react-icons/fi'

export default function About() {

  useEffect(() => {
    document.title = "Astroshare | À propos"
  }, [])

  return (
    <div className="about">
      <h1 className="h1 title"><Link to={"/"}><FiChevronLeft style={{ verticalAlign: 'middle' }} /></Link>À propos</h1>
      <div className="content">
        <div className="content__left">
          <h2 className="h3">Qui suis-je ?</h2>
          <p>
            Je m'appelle Enzo Avagliano, j'ai {calculateAge(new Date(2000, 11, 9))} ans, et je suis développeur web.
          </p>
          <p>
            Passionné par les sciences et les nouvelles technologies depuis des années, j'ai décidé de m'immerger dans l'univers captivant de l'astronomie en 2020. Armé d'un télescope Newton 150/750 et d'une monture équatoriale EQ-320, je vis ma passion au sein de l'association des <a href="http://www.astrosurf.com/aaaov/" target='_blank' rel='noreferrer'>AAAOV</a> (Astronomes Amateurs Aixois de l'Observatoire de Vauvenargues). Cette aventure m'a permis d'apprendre une multitude de choses fascinantes, de partager mes découvertes avec des âmes tout aussi passionnées, et même de transmettre mes connaissances lors d'événements publics et privés. Chaque moment passé à observer les étoiles est une expérience magique, remplie de curiosité et d'émerveillement, me rappelant à quel point l'astronomie est une aventure infiniment captivante.
          </p>
          <h2 className="h3" style={{ marginTop: '5vh' }}>Astroshare c'est quoi ?</h2>
          <p>
            Astroshare est le résultat d'une passion profonde pour l'astronomie et du désir ardent de la partager avec le plus grand nombre, de la manière la plus accessible qui soit. Quand j'ai découvert l'univers fascinant de l'astronomie, je me suis rapidement retrouvé seul, sans ressources concrètes pour apprendre à utiliser mon matériel correctement. Actuellement membre d'une association (les <a href="http://www.astrosurf.com/aaaov/" target='_blank' rel='noreferrer'>AAAOV</a>), j'ai la chance de pouvoir pratiquer l'astronomie dans un environnement favorable à l'expansion de mes connaissances, aux côtés de personnes généreuses prêtes à partager leur expertise.
          </p>
          <p>
            Cependant, j'ai pris conscience que de nombreuses personnes n'ont pas cette opportunité. Elles se retrouvent seules, sans personne pour les guider dans leur passion naissante. C'est pourquoi j'ai décidé de créer Astroshare, un site web conçu pour offrir à tous les amateurs d'astronomie, qu'ils soient débutants ou confirmés, un accès facile à une multitude de ressources. Ces ressources sont spécialement conçues pour permettre l'apprentissage de l'astronomie de manière accessible et ludique.
          </p>
        </div>
        <div className="content__right">
          <img src="/images/about/04.min.jpg" alt="Mon télescope" />
          <img src="/images/about/01.min.jpg" alt="Mon télescope" />
          <img src="/images/about/02.min.jpg" alt="Mon télescope" />
        </div>
      </div>
    </div>
  )
}
