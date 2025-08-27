import '../../styles/components/sections/landingOverview.scss';
import { BouncedIcon } from '../BouncedIcon';
import { SimpleButton } from '../buttons/SimpleButton';
import { urls } from '../../helpers/constants/urls';

export const LandingOverview = () => {

  return (
    <div className="landing-overview-container">
      <div className="loc-left">
        <h2>L'astronomie <span>sans contraintes</span></h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <p>Fini les installations multiples : Astroshare réunit en une seule application tout ce dont vous avez besoin pour explorer le ciel.</p>
          <p>Suivez les satellites et les phénomènes célestes, consultez la météo en direct, accédez aux actualités du ciel et préparez vos nuits d’observation.</p>
          <p>Un outil complet, pensé pour simplifier la vie des passionnés comme des curieux.</p>
        </div>

        <div className="loc-cta-container">
          <SimpleButton
            text="Téléchargez l'application"
            href={urls.playstore}
            variant="primary"
            icon="/images/icons/play-store-black.png"
          />
          <p className="loc-cta-description">Disponible gratuitement, sans publicité ni inscription obligatoire.</p>
        </div>

      </div>
      <div className="loc-right">
        <div className="icons-container">
          <BouncedIcon iconPath='/images/rivals/goforliftof.png' delay={0} />
          <BouncedIcon iconPath='/images/rivals/iss_detector.png' delay={0.1} />
          <BouncedIcon iconPath='/images/rivals/moon_phases.png' delay={0.2} />
          <BouncedIcon iconPath='/images/rivals/polar_clock.png' delay={0.3} />
          <BouncedIcon iconPath='/images/rivals/meteo_blue.png' delay={0.4} />
          <BouncedIcon iconPath='/images/rivals/stellarium.png' delay={0.5} />
        </div>
          <BouncedIcon iconPath='/images/rivals/arrows.png' delay={0.5} />
          <BouncedIcon iconPath='/images/rivals/astroshare.png' delay={0.5} />
      </div>
    </div>
  )
}
