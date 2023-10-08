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
        {/* <p>Je m'appelle Enzo Avagliano, j'ai {calculateAge(new Date(2000, 11, 9))} ans, et je suis développeur web de profession.</p>
        <p>Passionné par les sciences et les nouvelles technlogies depuis longtemps, je décide de me lancer dans la pratique de l'astronomie en 2020. Équipé depuis d'un Newton 150/750 sur une monture equatoriale EQ-320, je pratique aujourd'hui cette passion pour l'astronomie dans une association : les <a href="http://www.astrosurf.com/aaaov/" target='_blank' rel='noreferrer'>AAAOV</a>. J'ai pu apprendre énormément de nouvelles choses, Partager avec des personnes ayant la même passion que moi, mais aussi transmettre mes connaissances lors d'évènnements publics et privés.</p>
        <div className="images-container">
          
        </div>
        <h2 className="h3">Astroshare c'est quoi ?</h2>
        <p>Astroshare est le fruit d'une envie intense de partager ma passion pour l'astronomie avec le plus grand nombre de personnes, et le plus facilement possible.</p>
        <p>Lors de mon arrivée dans le monde fascinant de l'astronomie, je me suis rapidement retrouvé seul et sans réelle ressource pour apprendre à maitriser mon matériel... Aujourd'hui je fais partie d'une association, qui me permet de pratiquer dans un cadre propice au développement de mes connaissances, avec des personnes qui sont prêtes à partager leur expertise avec moi.</p>
        <p>
          Mais je me suis rendu compte que beaucoup de personnes n'ont pas cette chance, et se retrouvent seules, sans personne pour les aider à se lancer dans cette passion. C'est pourquoi j'ai décidé de créer Astroshare, un site web qui permettra à tous les astronomes, débutants (ou même confirmés et plus), d'avoir à disposition une multitude de ressources afin d'apprendre la pratique de l'astronomie dans les meilleures conditions !
        </p> */}
      </div>
    </div>
  )
}
