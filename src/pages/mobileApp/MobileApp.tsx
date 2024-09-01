import { motion } from "framer-motion";
import { appFeaturesList } from "../../scripts/helpers/mobileApp/featuresList";
import { useRef, useState } from "react";
import { mailRegex } from "../../scripts/helpers/helpers";
import MobileAppButton from "../../components/mobileApp/MobileAppButton";
import emailjs from '@emailjs/browser';
import Countdown from 'react-countdown';
import '../../styles/pages/mobileApp.scss'
import CountdownRenderer from "../../components/mobileApp/CountdownRenderer";

export default function MobileApp() {

  const inputRef = useRef<HTMLInputElement>(null);
  const [email, setEmail] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<boolean | undefined>(undefined)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = inputRef.current;
    if (mailRegex.test(email) === false || email === '') {
      if (input) {
        // Set input border color to red
        input.style.borderColor = 'red';
      }
      return;
    } else {
      // Set input border color to normal
      if (input) {
        input.style.borderColor = 'rgba(255, 255, 255, .05)';
      }
    }

    const mail = {
      user_mail: email,
    }

    setLoading(true)
    emailjs.send('Astroshare', 'astroshare_beta_user', mail, 'user_OimdLZV4uZQJjsxfr0Cgc')
      .then((result) => {
        setResponse(true)
        setEmail('')
        setTimeout(() => {
          setResponse(undefined)
        }, 3000)
        setLoading(false)
      }, (error) => {
        setResponse(false)
        setTimeout(() => {
          setResponse(undefined)
        }, 3000)
        setLoading(false)
      });
  }

  // Renderer callback with condition
  const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
    return <CountdownRenderer days={days} hours={hours} minutes={minutes} seconds={seconds} completed={completed} />;
  };

  return (
    <div className="mobile-app">
      <div>
        <motion.h1 className='header-title' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 3 }}>L'application Astroshare</motion.h1>
        <motion.h2 className="header-subtitle" initial={{ opacity: 0 }} animate={{ opacity: .5 }} transition={{ duration: 2, delay: .5, }}>
          &#47;&#47; Votre nouveau compagnon d'astronomie
        </motion.h2>
      </div>
      <motion.div className="content-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, delay: .8 }}>
        <div className="badge-holder">
          <Countdown
            date={new Date("2024-09-16T00:00:00")}
            renderer={renderer}
            zeroPadTime={2}
            zeroPadDays={2}
            autoStart
          />
          <p className="subtitle">*Disponibilité sur les appareils Android uniquement</p>
          <p className="subtitle">Les appareils iOS seront pris en charge prochainement</p>
        </div>

        <div className="first-panel">
          <img src="/images/promo/app/home.png" alt="Page d'accueil de l'application" />
          <div className="content">
            <h3>Une seule application, tous vos outils</h3>
            <p className="description">L'application idéale pour les passionnés d'astronomie.</p>
            <p className="description">Profitez d'une application au design sobre et moderne, capable de répondre à tous vos besoins pour la préparation et le déroulement de vos sessions d'observations astronomiques.</p>
            <h4 style={{ marginTop: '40px', opacity: .8 }}>Planification de soirée</h4>
            <p className="description">Consultez la météo, calculez les phases de la Lune, recherchez les objets célestes que vous souhaitez observer.</p>
            <h4 style={{ marginTop: '40px', opacity: .8 }}>Mise en station</h4>
            <p className="description">Utilisez notre viseur polaire pour aligner votre monture avec l'axe terrestre.</p>
            <h4 style={{ marginTop: '40px', opacity: .8 }}>Catalogue d'objets</h4>
            <p className="description">Profitez d'un catalogue de plus de 13 000 objets du ciel profond, provenants des catalogues : Messier, NGC, IC, SAC, SIMBAD</p>
            <h4 style={{ marginTop: '40px', opacity: .8 }}>Et plus encore !</h4>
            <p className="description">Découvrez d'autres outils tout aussi passionnants : Image du jour de la NASA, météo solaire, suivi de l'ISS, etc.</p>
          </div>
        </div>

        <div className="second-panel">
          <h3 style={{ margin: 0 }}>Des fonctionnalités pertinentes</h3>
          <p className="panel-description" style={{ marginBottom: '5vh' }}>Découvrez en détails les fonctionnalités de l'application déjà disponibles :</p>

          <div className="features" style={{ marginBottom: '10vh' }}>
            {
              appFeaturesList.filter((feature) => feature.status === 'available').map((feature) => {
                return (
                  <div className="feature" key={`feature-${feature.title}`}>
                    <MobileAppButton
                      title={feature.title}
                      subtitle={feature.subtitle}
                      img={feature.img}
                      alt={feature.alt}
                      background={feature.background}
                    />
                    {feature.description &&
                      feature.description.map((description, index) => {
                        return (
                          <p className="description-text" key={`feature-${feature.title}-description-${index}`}>{description}</p>
                        )
                      })
                    }
                  </div>
                )
              })
            }
          </div>

          <h3 style={{ margin: 0 }}>Un développement actif !</h3>
          <p style={{ marginBottom: '5vh' }}>L'application Astroshare est un projet en cours de développement. Voici un aperçu des fonctionnalités à venir :</p>
          <div className="features" style={{ marginBottom: '10vh' }}>
            {
              appFeaturesList.filter((feature) => feature.status === 'coming-soon').map((feature) => {
                return (
                  <div className="feature" key={`feature-${feature.title}`}>
                    <MobileAppButton
                      title={feature.title}
                      subtitle={feature.subtitle}
                      img={feature.img}
                      alt={feature.alt}
                      background={feature.background}
                    />
                    {feature.description &&
                      feature.description.map((description, index) => {
                        return (
                          <p className="description-text" key={`feature-${feature.title}-description-${index}`}>{description}</p>
                        )
                      })
                    }
                  </div>
                )
              })
            }
          </div>
        </div>

        <div className="third-panel">
          <h3 style={{ margin: 0 }}>Rejoingnez la bêta !</h3>
          <p className="panel-description" style={{ marginBottom: '5vh' }}>Vous souhaitez tester l'application ? Rejoignez le programme de test d'Astroshare, et faites partie des premières personnes à utiliser l'application. Votre retour nous aide à améliorer cette dernière !</p>
          <form onSubmit={handleSubmit}>
            <input ref={inputRef} onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="Votre adresse email" />
            <button disabled={loading} type="submit">{loading && <div className="loader small" style={{ marginRight: '10px' }} />} Rejoindre le programme</button>
          </form>
          {response === true && <p style={{ color: 'green' }}>Demande prise en compte, un email de confirmation vous a été envoyé !</p>}
          {response === false && <p style={{ color: 'red' }}>Une erreur est survenue, veuillez réessayer.</p>}
        </div>
      </motion.div>
    </div>
  )
}
