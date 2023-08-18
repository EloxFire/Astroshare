import React from 'react'
import '../styles/pages/about.scss'
import { birthdate, calculateAge } from '../scripts/helpers'
import AboutContainer from '../components/AboutContainer'

export default function About() {
  return (
    <div className="about">
      <h1 className="h1 title">À propos</h1>
      <div className="content">
        <AboutContainer
          text={`Je m'appelle Enzo Avagliano, j'ai ${calculateAge(birthdate)} ans, développeur Web de profession`}
          image='/images/mars.png'
          alt='Planète Mars'
          orientation='left'
          position='first'
        />

        <AboutContainer
          title='Pourquoi construire Astroshare ?'
          text={`Je m'appelle Enzo Avagliano, j'ai ${calculateAge(birthdate)} ans, développeur Web de profession`}
          image='/images/mars.png'
          alt='Planète Mars'
          orientation='right'
        />
      </div>
    </div>
  )
}
