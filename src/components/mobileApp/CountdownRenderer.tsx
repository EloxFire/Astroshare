import React from 'react'
import '../../styles/components/mobileApp/countdownRenderer.scss'

interface CountdownRendererProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}

export default function CountdownRenderer({ days, hours, minutes, seconds, completed }: CountdownRendererProps) {
  return (
    <>
      {
        !completed ?
          <div className="container">
            <p className="title">Lancement dans</p>
            <div className="countdown">
              <img src="/images/icons/astro/CL+N.png" alt="Nébuleuse planétaire" />
              <div className="values">
                <div className="value">
                  <p className="number">{days}</p>
                  <p className="label">Jours</p>
                </div>
                <div className="value">
                  <p className="number">{hours}</p>
                  <p className="label">Heures</p>
                </div>
                <div className="value">
                  <p className="number">{minutes}</p>
                  <p className="label">Minutes</p>
                </div>
                <div className="value">
                  <p className="number">{seconds}</p>
                  <p className="label">Secondes</p>
                </div>
              </div>
            </div>
          </div>
          :
          <div className="available-container">
            <p className="available-title">Disponible GRATUITEMENT *</p>
            <a href="https://play.google.com/store/apps/details?id=fr.eavagliano.astroshare&hl=fr" target='_blank' rel="noreferrer" >
              <img src="/images/icons/google-play-badge.png" alt="Nébuleuse planétaire" />
            </a>
          </div>
      }
    </>
  )
}
