import '../../../styles/components/sections/sevunNova.scss'

export const SevunNova = () => {
  return (
    <section className="sevun-nova-banner">
      <div className="sevun-nova-bg" />

      <div className="sevun-nova-content">
        <div className="sevun-nova-left">
          <span className="sevun-nova-pill">Offre partenaire</span>

          <img
            src="/images/sevun/logo-nova-white.png"
            alt="Sevun Nova"
            className="sevun-nova-logo"
          />

          <p className="sevun-nova-tagline">
            Entrez dans l'univers de l'astronomie,<br />simplement.
          </p>

          <div className="sevun-nova-pillars">
            <div className="pillar">
              <div className="pillar-header">
                <span className="pillar-number">1</span>
                <p className="pillar-label">Observer</p>
              </div>
              <p className="pillar-desc">Un télescope évolutif unique et ses accessoires</p>
            </div>
            <div className="pillar">
              <div className="pillar-header">
                <span className="pillar-number">2</span>
                <p className="pillar-label">Être guidé</p>
              </div>
              <p className="pillar-desc">Astroshare PRO + contenus AFA exclusifs</p>
            </div>
            <div className="pillar">
              <div className="pillar-header">
                <span className="pillar-number">3</span>
                <p className="pillar-label">Apprendre</p>
              </div>
              <p className="pillar-desc">Abonnement au magazine Ciel &amp; Espace numérique</p>
            </div>
          </div>

          <div className="sevun-nova-partners">
            <img src="/images/logos/sevun-white.png"         alt="Sevun"                           className="partner-logo partner-sevun" />
            <div className="partner-divider" />
            <img src="/images/logos/ciel-espace-white.png"   alt="Ciel & Espace"                  className="partner-logo partner-ciel-espace" />
            <div className="partner-divider" />
            <img src="/images/logos/afa-white.png"            alt="Association Française d'Astronomie" className="partner-logo partner-afa" />
            <div className="partner-divider" /> 
            <img src="/images/logos/astroshare-pro-white.png" alt="Astroshare"                    className="partner-logo partner-astroshare" />
          </div>
        </div>

        <div className="sevun-nova-right">
          <div className="sevun-nova-price">
            <span className="price-amount">69 €</span>
            <span className="price-period">/ mois</span>
          </div>
          <p className="sevun-nova-price-label">Après un premier paiement de 349 €</p>
          <div className="sevun-nova-price-divider" />
          <a
            href="https://sevun.fr/nova"
            className="sevun-nova-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            Découvrir l'offre SEVUN NOVA
          </a>
        </div>
      </div>
    </section>
  )
}
