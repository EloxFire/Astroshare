import { routes } from '../helpers/routes';
import '../styles/pages/pricing.scss';

const plans = [
  {
    id: 'monthly',
    title: 'Mensuel',
    price: '2,49€',
    period: 'par mois',
    description: 'Flexibilité totale avec un paiement mensuel.',
    ctaLabel: 'Voir dans l\'app',
    supportText: 'Résiliable à tout moment.'
  },
  {
    id: 'yearly',
    title: 'Annuel',
    price: '23,90€',
    period: 'par an',
    description: 'Le meilleur rapport qualité-prix pour Astroshare PRO.',
    ctaLabel: 'Voir dans l\'app',
    supportText: 'Économisez 20 % par rapport au mensuel.',
    highlight: true
  },
  {
    id: 'lifetime',
    title: 'Licence à vie',
    price: '119€',
    period: 'paiement unique',
    description: 'Un accès illimité sans abonnement.',
    ctaLabel: 'Voir dans l\'app',
    supportText: 'Investissement unique dans votre passion.'
  }
];

const featureHighlights = [
  {
    id: 'solar-weather',
    title: 'Météo solaire avancée',
    description:
      'Analyses du vent solaire, des éruptions et des alertes pour anticiper vos observations.',
    image: '/images/features/6.png',
    alt: 'Visualisation de la météo solaire'
  },
  {
    id: 'iss-pass',
    title: 'Prédictions des passages ISS',
    description:
      'Identifiez les meilleures fenêtres pour admirer la Station Spatiale Internationale.',
    image: '/images/features/3.png',
    alt: "Carte prévisionnelle des passages de l'ISS"
  },
  {
    id: 'eclipses',
    title: 'Éclipses solaires et lunaires',
    description:
      'Calculateur précis des éclipses pour ne jamais manquer un événement céleste majeur.',
    image: '/images/features/5.png',
    alt: "Illustration d'éclipse solaire"
  },
  {
    id: 'planetary-conjunctions',
    title: 'Conjonctions planétaires',
    description:
      'Repérez les alignements rares entre planètes pour des observations uniques.',
    image: '/images/features/4.png',
    alt: 'Schéma de conjonction planétaire'
  },
  {
    id: 'regular-updates',
    title: 'Mises à jour régulières',
    description:
      "Nous enrichissons constamment Astroshare PRO avec de nouvelles fonctionnalités.",
    image: '/images/features/1.png',
    alt: 'Icône de mise à jour'
  }
];

const Pricing = () => {
  return (
    <section id="pricing">
      <div className="pricing-hero">
        <img className='hero-logo' src="/images/logos/astroshare_pro.png" alt="Logo Astroshare PRO" />
        <h2>Explorez l'univers toujours plus loin !</h2>
        <p className='hero-description'>Découvrez nos offres premium et profitez d'une expérience inégalée pour préparer vos soirées d'observation du ciel.</p>
      </div>

      <div id="free-tier" className="highlighted-tier">
        <p className="plan-price">
          <span className="amount">0€</span>
          <span className="period">pour toujours</span>
        </p>
        <p>
          Astroshare est une application <strong>gratuite</strong>, sans obligation d'achat ou d'inscription et le restera <strong>toujours</strong>.
        </p>
        <p>
          Si vous souhaitez <strong>soutenir le développement</strong> d'Astroshare et accéder à des <strong>fonctionnalités avancées</strong>, vous pouvez considérer l'une de nos offres Astroshare PRO. Chaque contribution nous aide à <strong>améliorer l'application</strong> et à offrir une meilleure expérience à toute la communauté.
        </p>
      </div>

      <div className="pricing-table">
        {plans.map((plan) => (
          <article
            key={plan.id}
            className={`plan-card ${plan.highlight ? 'highlight' : ''}`}
            aria-labelledby={`${plan.id}-title`}
          >
            {plan.highlight && <span className="badge">Recommandé</span>}
            <div className="plan-header">
              <h2 id={`${plan.id}-title`}>{plan.title}</h2>
              <p className="plan-price">
                <span className="amount">{plan.price}</span>
                <span className="period">{plan.period}</span>
              </p>
            </div>
            <div className='divider' />
            {
              featureHighlights.map((feature) => {
                return (
                  <div className="plan-feature" key={feature.id}>
                    <img className='plan-feature-icon' src="/images/icons/check.svg" alt="Check icon" />
                    <p className="plan-feature-description">{feature.title}</p>
                  </div>
                )
              })
            }
            <p className="plan-description">{plan.description}</p>
            <p className="plan-support">{plan.supportText}</p>
            <a className="plan-cta" target='_blank' href={routes.playstore.path}>{plan.ctaLabel}</a>
          </article>
        ))}
      </div>

      {/* <div className="feature-showcase">
        <div className="feature-copy">
          <h3>Astroshare PRO, c'est aussi...</h3>
          <p>
            Un centre de commandes pour tous les phénomènes célestes. Nous enrichissons sans cesse votre
            tableau de bord afin que vous arriviez sur le terrain avec une longueur d'avance.
          </p>
        </div>
        <div className="feature-grid">
          {featureHighlights.map((feature) => (
            <article key={feature.id} className="feature-card">
              <img src={feature.image} alt={feature.alt} />
              <div>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div> */}

      <div className="pricing-pro">
        <div className="pro-copy">
          <h3>Conçu aussi pour les associations et les clubs d'astronomie</h3>
          <p>
            Faites profiter d'une expérience premium à tous vos membres avec des tarifs adaptés aux besoins des
            groupes. Bénéficiez d'un accès complet aux fonctionnalités premium et d'un support dédié.
          </p>
          <p>
            Idéal pour les clubs, associations et groupes d'astronomie souhaitant offrir le meilleur à
            leurs membres.
          </p>
          <a
            className="plan-cta"
            href="mailto:contact@astroshare.com?subject=Astroshare%20PRO%20-%20Clubs%20et%20Pro"
          >
            Discuter avec l'équipe
          </a>
        </div>
        <div className="pro-visual">
          <img
            src="/images/astronomy_club.jpg"
            alt="Membres d'un club d'astronomie observant le ciel"
            className="visual-image"
            loading="lazy"
          />
        </div>
      </div>

      <div className="pricing-footer">
        <p>
          Une question spécifique ? Écrivez-nous :
          <a className="accent" href="mailto:contact@astroshare.com"> contact@astroshare.com</a>
        </p>
      </div>
    </section>
  );
};

export default Pricing;
