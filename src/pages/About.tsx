import React from 'react'
import '../styles/pages/about.scss'
import { calculateAge } from '../scripts/helpers'

export default function About() {
  return (
    <div className="about">
      <h1 className="h1 title">À propos</h1>
      <div className="content">
        <p>Je m'appelle Enzo Avagliano, j'ai {calculateAge(new Date(2000, 11, 9))} ans, et je suis développeur web de profession.</p>
        <p>Passionné par les sciences et les nouvelles technlogies depuis longtemps, je décide de me lancer en dans la pratique de l'astronomie en 2020. Équipé depuis d'un Newton 150/750 sur une monture equatoriale EQ-320, je pratique aujourd'hui cette passion pour l'astronomie dans une association : les <a href="http://www.astrosurf.com/aaaov/" target='_blank' rel='noreferrer'>AAAOV</a>, dans laquelle j'ai pu apprendre énormément de nouvelles choses, partager avec des personnes ayant la même passion que moi, mais aussi transmettre mes connaissances lors d'évènnements publics et privés.</p>
        <div className="images-container">
          <img src="/images/about/04.min.jpg" alt="Mon télescope" />
          <img src="/images/about/01.min.jpg" alt="Mon télescope" />
          <img src="/images/about/02.min.jpg" alt="Mon télescope" />
        </div>
        <h2 className="h3">Astroshare c'est quoi ?</h2>
        <p>Astroshare est le fruit d'une envie intense de partager ma passion pour l'astronomie avec le plus grand nombre de personnes, et le plus facilement possible.</p>
        <p>Lors de mon arrivée dans le monde fascinant de l'astronomie, je me suis rapidement retrouvé seul et sans réelle ressource pour apprendre à maitriser mon matériel... Aujourd'hui je fais partie d'une association, qui me permet de pratiquer dans un cadre propice au développement de mes connaissances, avec des personnes qui sont prêtes à partager leurs connaissances avec moi.</p>
        <p>
          Mais je me suis rendu compte que beaucoup de personnes n'ont pas cette chance, et se retrouvent seules, sans personne pour les aider à se lancer dans cette passion. C'est pourquoi j'ai décidé de créer Astroshare, un site web qui permettra à tous les astronomes, débutants (ou même confirmés et plus), d'avoir à disposition une multitude de ressources afin d'apprendre la pratique de l'astronomie dans les meilleures conditions !
        </p>
        {/* <h2 className="h3" style={{ marginTop: '5vh' }}>Astroshare c'est quoi ?</h2> */}
      </div>
    </div>
  )
}
