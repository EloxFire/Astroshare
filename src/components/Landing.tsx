import '../styles/components/landing.scss'

export const Landing = () => {
  return (
    <div className={"landing-container"}>
      <div className="left">
        <h1>L'astronomie, simplement</h1>
        <p>L’astronomie simplifiée : un seul outil pour tout explorer, du Soleil aux confins de l’Univers.</p>
      
        <div className="landing-cta">
          <p>Du lever du Soleil aux galaxies lointaines, explorez le ciel comme jamais auparavant. Astroshare vous guide à chaque observation.</p>
          <a href="/download" className="download-link">
            <img src="/images/icons/download.png" alt="" aria-hidden="true" />
            Téléchargez Astroshare
          </a>
        </div>
      </div>
      <div className="right">
        <p>Explorez l'univers avec nous.</p>
      </div>
    </div>
  )
}
