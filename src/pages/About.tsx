// import { routes } from '../helpers/routes';
import '../styles/pages/about.scss';

const birthDate = new Date(2000, 11, 9);

const calculateAge = (date: Date) => {
  const today = new Date();
  let age = today.getFullYear() - date.getFullYear();
  const hasHadBirthday =
    today.getMonth() > date.getMonth() ||
    (today.getMonth() === date.getMonth() && today.getDate() >= date.getDate());

  if (!hasHadBirthday) {
    age -= 1;
  }

  return age;
};

// const featureHighlights = [
//   {
//     title: 'ISS et Starlink en direct',
//     description:
//       "Suivre les passages de l'ISS et des trains Starlink en temps réel pour ne jamais manquer un rendez-vous orbital.",
//     image: '/images/features/3.png',
//   },
//   {
//     title: 'Météo astro et solaire',
//     description:
//       "Préparer chaque nuit d'observation avec des prévisions météo, seeing et activité solaire pensées pour le terrain.",
//     image: '/images/features/1.png',
//   },
//   {
//     title: 'Événements à ne pas manquer',
//     description:
//       'Anticiper éclipses, conjonctions et lancements grâce à une sélection des prochains spectacles célestes.',
//     image: '/images/features/5.png',
//   },
//   {
//     title: 'Guides clairs et pratiques',
//     description:
//       'Apprendre pas à pas avec des contenus concis pour aligner son instrument, choisir ses cibles et progresser.',
//     image: '/images/features/0.png',
//   },
//   {
//     title: 'Expérience personnalisable',
//     description:
//       'Activer le mode nuit, sauvegarder ses lieux favoris et recevoir des alertes adaptées à sa pratique.',
//     image: '/images/features/6.png',
//   },
// ];

const About = () => {
  const age = calculateAge(birthDate);

  return (
    <div id="about">
      <header className="about-hero">
        <p className="about-kicker">Une histoire de passion</p>
        <h1>À propos d'Astroshare</h1>
        <p className="about-lead">
          Astroshare est né de la conviction que personne ne devrait rester seul face à l'immensité du ciel.
          C'est un compagnon pensé pour transformer chaque nuit claire en moment de découverte, d'émotion et de partage.
        </p>
      </header>

      <main className="about-content">
        <section className="about-section about-section--split">
          <div className="about-copy">
            <h2>Une histoire de passion</h2>
            <p>
              Je m'appelle Enzo Avagliano, j'ai {age} ans, je suis développeur web et passionné d'astronomie.
              En 2020, j'ai pointé mon premier télescope vers le ciel et découvert un univers aussi vaste que déroutant :
              peu de ressources claires, beaucoup de technique et une vraie solitude face au matériel.
            </p>
            <p>
              Avec le soutien de l'association{' '}
              <a href="http://www.astrosurf.com/aaaov/" target="_blank" rel="noreferrer">
                AAAOV
              </a>
              , j'ai appris, observé, partagé... et compris une chose essentielle : l'astronomie ne devrait jamais être réservée aux initiés.
            </p>
          </div>
          {/* <div className="about-media">
            <img src="/images/features/2.png" alt="Observation planifiée avec Astroshare" />
            <img src="/images/features/4.png" alt="Événement spatial présenté dans Astroshare" />
          </div> */}
        </section>

        <section className="about-section">
          <h2>La naissance d'Astroshare</h2>
          <p>
            Astroshare est né de cette conviction : rendre l'astronomie simple, accessible et inspirante.
            Ce projet a commencé comme une idée personnelle pour ne plus se sentir perdu dans l'obscurité,
            puis est devenu une application qui accompagne aujourd'hui des centaines d'utilisateurs.
          </p>
          <p>
            L'ambition est claire : réunir en un seul outil tout ce dont on rêve quand on commence à observer le ciel.
            Que vous soyez curieux, amateur ou passionné, Astroshare vous guide, vous informe et vous inspire,
            sans barrière technique ni jargon compliqué.
          </p>
        </section>

        <section className="about-section">
          <h2>Ce qu'apporte Astroshare</h2>
          {/* <div className="feature-grid">
            {featureHighlights.map((feature) => (
              <article key={feature.title} className="feature-card">
                <img src={feature.image} alt={feature.title} className="feature-card__image" />
                <div className="feature-card__body">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </article>
            ))}
          </div> */}
          <p className="feature-summary">
            Au-delà des fonctionnalités, Astroshare c'est surtout une expérience : transformer une nuit claire en un moment de découverte,
            d'émotion et de partage à vivre seul, entre amis ou en famille.
          </p>
        </section>

        <section className="about-section about-section--callout">
          <h2>Une aventure collective</h2>
          <p>
            Astroshare continue d'évoluer grâce à sa communauté. Chaque retour, suggestion ou rencontre façonne un peu plus l'application.
            L'objectif est simple : avancer ensemble et donner à chacun la possibilité de s'émerveiller devant le ciel.
          </p>
        </section>
      </main>
    </div>
  );
};

export default About;
