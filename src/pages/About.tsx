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
          <img src="/images/about/04.jpg" alt="Mon télescope" />
          <img src="/images/about/01.jpg" alt="Mon télescope" />
          <img src="/images/about/02.jpg" alt="Mon télescope" />
        </div>
        <h2 className="h3">Astroshare c'est quoi ?</h2>
        <p>Astroshare est le fruit d'une envie intense de partager ma passion pour l'astronomie avec le plus grand nombre de personnes, et le plus facilement possible.</p>
        <p></p>
      </div>
    </div>
  )
}
